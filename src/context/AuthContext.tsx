import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile, CEFRLevelCode } from '../types/database';
import { storageService, PROFILE_UPDATED_EVENT } from '../lib/storage';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

/**
 * Owner email that gets the admin role. Set VITE_ADMIN_EMAIL in Vercel env vars.
 * NOTE: until real Supabase auth is wired up (roadmap phase 2) passwords are not verified,
 * so this only hides the admin UI from regular users — it is not real security.
 */
const ADMIN_EMAIL = (import.meta.env.VITE_ADMIN_EMAIL || '').trim().toLowerCase();
const roleForEmail = (email: string): 'student' | 'admin' =>
  ADMIN_EMAIL && email.trim().toLowerCase() === ADMIN_EMAIL ? 'admin' : 'student';

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, pass: string) => Promise<boolean>;
  register: (name: string, email: string, pass: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
  switchRole: (role: 'student' | 'admin') => void;
  setUserLevel: (level: CEFRLevelCode) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(() => storageService.getUserProfile());

  useEffect(() => {
    // If Supabase is active, check auth session
    if (isSupabaseConfigured && supabase) {
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session?.user) {
          const profile = storageService.getUserProfile();
          if (profile) {
            setUser({
              ...profile,
              id: session.user.id,
              email: session.user.email || profile.email,
            });
          }
        }
      });
    }
  }, []);

  // Keep XP / streak in sync when storageService updates the profile (lesson completed, etc.)
  useEffect(() => {
    const handleProfileUpdated = () => setUser(storageService.getUserProfile());
    window.addEventListener(PROFILE_UPDATED_EVENT, handleProfileUpdated);
    return () => window.removeEventListener(PROFILE_UPDATED_EVENT, handleProfileUpdated);
  }, []);

  const login = async (email: string, _pass: string): Promise<boolean> => {
    const role = roleForEmail(email);
    const existing = storageService.getUserProfile();
    const newUser: UserProfile = {
      id: existing?.id || 'usr-' + Date.now(),
      email,
      name: role === 'admin' ? 'Admin Ustoz' : (existing?.name || 'Talaba'),
      role,
      currentLevel: existing?.currentLevel || 'a1-1',
      dailyGoalMinutes: existing?.dailyGoalMinutes || 20,
      // Logging in is not learning: keep the real streak/XP untouched
      streakDays: existing?.streakDays ?? 0,
      xpPoints: existing?.xpPoints ?? 0,
      lastActiveDate: existing?.lastActiveDate,
      createdAt: existing?.createdAt || new Date().toISOString()
    };
    storageService.saveUserProfile(newUser);
    setUser(newUser);
    return true;
  };

  const register = async (name: string, email: string, _pass: string): Promise<boolean> => {
    const existing = storageService.getUserProfile();
    const newUser: UserProfile = {
      id: 'usr-' + Date.now(),
      email,
      name,
      role: roleForEmail(email),
      currentLevel: existing?.currentLevel || 'a1-1',
      dailyGoalMinutes: 20,
      // Progress made as a guest on this device carries over
      streakDays: existing?.streakDays ?? 0,
      xpPoints: existing?.xpPoints ?? 0,
      lastActiveDate: existing?.lastActiveDate,
      createdAt: new Date().toISOString()
    };
    storageService.saveUserProfile(newUser);
    setUser(newUser);
    return true;
  };

  const logout = () => {
    // Switch to a guest profile
    const guestUser: UserProfile = {
      id: 'usr-guest',
      email: 'mehmon@greatnation.uz',
      name: 'Mehmon O‘quvchi',
      role: 'student',
      currentLevel: 'a1-1',
      dailyGoalMinutes: 20,
      streakDays: 0,
      xpPoints: 0,
      createdAt: new Date().toISOString()
    };
    storageService.saveUserProfile(guestUser);
    setUser(guestUser);
    if (isSupabaseConfigured && supabase) {
      supabase.auth.signOut();
    }
  };

  const updateProfile = (updates: Partial<UserProfile>) => {
    if (!user) return;
    const updated = { ...user, ...updates };
    storageService.saveUserProfile(updated);
    setUser(updated);
  };

  const switchRole = (role: 'student' | 'admin') => {
    if (!user) return;
    const updated = { ...user, role };
    storageService.saveUserProfile(updated);
    setUser(updated);
  };

  const setUserLevel = (level: CEFRLevelCode) => {
    if (!user) return;
    const updated = { ...user, currentLevel: level };
    storageService.saveUserProfile(updated);
    setUser(updated);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user && user.id !== 'usr-guest',
        isAdmin: user?.role === 'admin',
        login,
        register,
        logout,
        updateProfile,
        switchRole,
        setUserLevel
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
