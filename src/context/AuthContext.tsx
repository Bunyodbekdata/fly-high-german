import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile, CEFRLevelCode } from '../types/database';
import { storageService } from '../lib/storage';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

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

  const login = async (email: string, _pass: string): Promise<boolean> => {
    // Check if admin login
    const isAdmin = email.toLowerCase().includes('admin');
    const existing = storageService.getUserProfile();
    const newUser: UserProfile = {
      id: existing?.id || 'usr-' + Date.now(),
      email,
      name: isAdmin ? 'Admin Ustoz' : (existing?.name || 'Talaba'),
      role: isAdmin ? 'admin' : 'student',
      currentLevel: existing?.currentLevel || 'a1-1',
      dailyGoalMinutes: existing?.dailyGoalMinutes || 20,
      streakDays: (existing?.streakDays || 0) + 1,
      xpPoints: existing?.xpPoints || 100,
      createdAt: existing?.createdAt || new Date().toISOString()
    };
    storageService.saveUserProfile(newUser);
    setUser(newUser);
    return true;
  };

  const register = async (name: string, email: string, _pass: string): Promise<boolean> => {
    const newUser: UserProfile = {
      id: 'usr-' + Date.now(),
      email,
      name,
      role: email.toLowerCase().includes('admin') ? 'admin' : 'student',
      currentLevel: 'a1-1',
      dailyGoalMinutes: 20,
      streakDays: 1,
      xpPoints: 50,
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
