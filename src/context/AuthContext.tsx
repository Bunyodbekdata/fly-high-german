import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { UserProfile, CEFRLevelCode } from '../types/database';
import { storageService, PROFILE_UPDATED_EVENT } from '../lib/storage';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

/**
 * Designated Admin email. Set VITE_ADMIN_EMAIL in your environment variables.
 * Defaults to the official admin demo email.
 */
const ADMIN_EMAIL = (import.meta.env.VITE_ADMIN_EMAIL || 'admin@greatnation.uz').trim().toLowerCase();

export const isEmailAdmin = (email: string): boolean => {
  if (!email) return false;
  const normalized = email.trim().toLowerCase();
  return Boolean(ADMIN_EMAIL && normalized === ADMIN_EMAIL);
};

export interface AuthResult {
  success: boolean;
  error?: string;
  message?: string;
}

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isLoading: boolean;
  isCloudConnected: boolean;
  login: (email: string, pass: string) => Promise<AuthResult>;
  register: (name: string, email: string, pass: string) => Promise<AuthResult>;
  logout: () => Promise<void>;
  updateProfile: (updates: Partial<UserProfile>) => Promise<void>;
  switchRole: (role: 'student' | 'admin') => void;
  setUserLevel: (level: CEFRLevelCode) => void;
}

const LOCAL_CREDENTIALS_KEY = 'fgn_local_accounts_vault';

interface LocalAccountRecord {
  name: string;
  email: string;
  passwordHash: string;
  role: 'student' | 'admin';
  createdAt: string;
}

const getLocalVault = (): Record<string, LocalAccountRecord> => {
  try {
    const raw = localStorage.getItem(LOCAL_CREDENTIALS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

const saveLocalVault = (vault: Record<string, LocalAccountRecord>) => {
  try {
    localStorage.setItem(LOCAL_CREDENTIALS_KEY, JSON.stringify(vault));
  } catch {
    // Local storage quota or unavailable
  }
};

// Simple consistent hash for local offline demo password verification
const simpleHash = (s: string): string => {
  let hash = 0;
  for (let i = 0; i < s.length; i++) {
    hash = (hash << 5) - hash + s.charCodeAt(i);
    hash |= 0;
  }
  return 'h_' + Math.abs(hash).toString(36);
};

// Seed default offline demo credentials if not already present
const initLocalVault = () => {
  const vault = getLocalVault();
  let modified = false;

  if (!vault['talaba@greatnation.uz']) {
    vault['talaba@greatnation.uz'] = {
      name: 'Talaba',
      email: 'talaba@greatnation.uz',
      passwordHash: simpleHash('demo123'),
      role: 'student',
      createdAt: new Date().toISOString(),
    };
    modified = true;
  }

  if (!vault['admin@greatnation.uz']) {
    vault['admin@greatnation.uz'] = {
      name: 'Admin Ustoz',
      email: 'admin@greatnation.uz',
      passwordHash: simpleHash('admin123'),
      role: 'admin',
      createdAt: new Date().toISOString(),
    };
    modified = true;
  }

  if (modified) {
    saveLocalVault(vault);
  }
};

const mapDbRowToUserProfile = (row: any, fallbackEmail = ''): UserProfile => {
  return {
    id: row.id,
    email: row.email || fallbackEmail,
    name: row.full_name || 'Talaba',
    avatarUrl: row.avatar_url,
    role: row.role || (isEmailAdmin(row.email || fallbackEmail) ? 'admin' : 'student'),
    currentLevel: (row.current_level as CEFRLevelCode) || 'a1-1',
    dailyGoalMinutes: row.daily_goal_minutes ?? 20,
    streakDays: row.streak_days ?? 0,
    xpPoints: row.xp_points ?? 0,
    lastActiveDate: row.last_activity_date,
    createdAt: row.created_at || new Date().toISOString(),
  };
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(() => storageService.getUserProfile());
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Synchronize with Supabase Auth state if configured
  useEffect(() => {
    initLocalVault();

    const client = supabase;
    if (!isSupabaseConfigured || !client) {
      setIsLoading(false);
      return;
    }

    let isMounted = true;

    // 1. Check existing active session
    client.auth.getSession().then(async ({ data: { session } }) => {
      if (!isMounted) return;

      if (session?.user) {
        try {
          const { data: profile } = await client
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .maybeSingle();

          if (profile && isMounted) {
            const mapped = mapDbRowToUserProfile(profile, session.user.email || '');
            setUser(mapped);
            storageService.saveUserProfile(mapped);
          } else if (isMounted) {
            // Build profile from user session metadata
            const existing = storageService.getUserProfile();
            const fallback: UserProfile = {
              id: session.user.id,
              email: session.user.email || existing?.email || '',
              name: session.user.user_metadata?.full_name || existing?.name || 'Talaba',
              role: isEmailAdmin(session.user.email || '') ? 'admin' : (existing?.role || 'student'),
              currentLevel: existing?.currentLevel || 'a1-1',
              dailyGoalMinutes: existing?.dailyGoalMinutes || 20,
              streakDays: existing?.streakDays ?? 0,
              xpPoints: existing?.xpPoints ?? 0,
              lastActiveDate: existing?.lastActiveDate,
              createdAt: session.user.created_at || new Date().toISOString(),
            };
            setUser(fallback);
            storageService.saveUserProfile(fallback);
          }
        } catch (err) {
          console.error('Failed to load profile from Supabase:', err);
        }
      }
      if (isMounted) {
        setIsLoading(false);
      }
    });

    // 2. Subscribe to auth changes (login, logout, token refresh)
    const { data: { subscription } } = client.auth.onAuthStateChange(async (event, session) => {
      if (!isMounted) return;

      if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED' || event === 'USER_UPDATED') {
        if (session?.user) {
          try {
            const { data: profile } = await client
              .from('profiles')
              .select('*')
              .eq('id', session.user.id)
              .maybeSingle();

            if (profile && isMounted) {
              const mapped = mapDbRowToUserProfile(profile, session.user.email || '');
              setUser(mapped);
              storageService.saveUserProfile(mapped);
            }
          } catch (err) {
            console.error('Error handling auth state change:', err);
          }
        }
      } else if (event === 'SIGNED_OUT') {
        const guestUser: UserProfile = {
          id: 'usr-guest',
          email: 'mehmon@greatnation.uz',
          name: 'Mehmon O‘quvchi',
          role: 'student',
          currentLevel: 'a1-1',
          dailyGoalMinutes: 20,
          streakDays: 0,
          xpPoints: 0,
          createdAt: new Date().toISOString(),
        };
        if (isMounted) {
          storageService.saveUserProfile(guestUser);
          setUser(guestUser);
        }
      }
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  // Sync profile when storageService updates (e.g. lesson finished, XP earned)
  useEffect(() => {
    const handleProfileUpdated = () => setUser(storageService.getUserProfile());
    window.addEventListener(PROFILE_UPDATED_EVENT, handleProfileUpdated);
    return () => window.removeEventListener(PROFILE_UPDATED_EVENT, handleProfileUpdated);
  }, []);

  const login = useCallback(async (email: string, pass: string): Promise<AuthResult> => {
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPass = pass.trim();

    if (!trimmedEmail) {
      return { success: false, error: 'Iltimos, elektron pochta manzilini kiriting.' };
    }
    if (!trimmedPass || trimmedPass.length < 6) {
      return { success: false, error: 'Parol kamida 6 ta belgidan iborat bo‘lishi lozim.' };
    }

    // 1. Production Mode with Supabase Cloud Auth
    const client = supabase;
    if (isSupabaseConfigured && client) {
      try {
        const { data, error } = await client.auth.signInWithPassword({
          email: trimmedEmail,
          password: trimmedPass,
        });

        if (error) {
          let userMessage = error.message;
          if (error.message.includes('Invalid login credentials')) {
            userMessage = 'Elektron pochta yoki parol noto‘g‘ri kiritildi.';
          } else if (error.message.includes('Email not confirmed')) {
            userMessage = 'Elektron pochta tasdiqlanmagan. Iltimos, pochtangizga yuborilgan tasdiqlash havolasini oching.';
          } else if (error.message.includes('rate limit')) {
            userMessage = 'Ko‘p marta urinish aniqlandi. Iltimos, bir oz kuting.';
          }
          return { success: false, error: userMessage };
        }

        if (data.user) {
          const { data: profile } = await client
            .from('profiles')
            .select('*')
            .eq('id', data.user.id)
            .maybeSingle();

          const role = isEmailAdmin(trimmedEmail) ? 'admin' : (profile?.role || 'student');
          const existing = storageService.getUserProfile();

          const userProfile: UserProfile = profile
            ? mapDbRowToUserProfile(profile, trimmedEmail)
            : {
                id: data.user.id,
                email: trimmedEmail,
                name: data.user.user_metadata?.full_name || (role === 'admin' ? 'Admin Ustoz' : 'Talaba'),
                role,
                currentLevel: existing?.currentLevel || 'a1-1',
                dailyGoalMinutes: existing?.dailyGoalMinutes || 20,
                streakDays: existing?.streakDays ?? 0,
                xpPoints: existing?.xpPoints ?? 0,
                lastActiveDate: existing?.lastActiveDate,
                createdAt: data.user.created_at || new Date().toISOString(),
              };

          storageService.saveUserProfile(userProfile);
          setUser(userProfile);
          return { success: true };
        }
      } catch (err: any) {
        return { success: false, error: err?.message || 'Tarmoqqa ulanishda xatolik yuz berdi.' };
      }
    }

    // 2. Safe Local / Offline / Demo Mode
    const vault = getLocalVault();
    const account = vault[trimmedEmail];

    if (account) {
      if (account.passwordHash !== simpleHash(trimmedPass)) {
        return { success: false, error: 'Parol noto‘g‘ri kiritildi.' };
      }
      const existing = storageService.getUserProfile();
      const role = isEmailAdmin(trimmedEmail) ? 'admin' : account.role;
      const loggedInUser: UserProfile = {
        id: 'usr-' + trimmedEmail.replace(/[^a-z0-9]/gi, '_'),
        email: trimmedEmail,
        name: account.name,
        role,
        currentLevel: existing?.currentLevel || 'a1-1',
        dailyGoalMinutes: existing?.dailyGoalMinutes || 20,
        streakDays: existing?.streakDays ?? 0,
        xpPoints: existing?.xpPoints ?? 0,
        lastActiveDate: existing?.lastActiveDate,
        createdAt: account.createdAt,
      };
      storageService.saveUserProfile(loggedInUser);
      setUser(loggedInUser);
      return { success: true };
    }

    // New local account creation on the fly if not in vault
    const role = isEmailAdmin(trimmedEmail) ? 'admin' : 'student';
    if (role === 'admin' && trimmedPass !== 'admin123') {
      return { success: false, error: 'Admin hisobi paroli noto‘g‘ri!' };
    }

    vault[trimmedEmail] = {
      name: role === 'admin' ? 'Admin Ustoz' : 'Talaba',
      email: trimmedEmail,
      passwordHash: simpleHash(trimmedPass),
      role,
      createdAt: new Date().toISOString(),
    };
    saveLocalVault(vault);

    const existing = storageService.getUserProfile();
    const newUser: UserProfile = {
      id: 'usr-' + Date.now(),
      email: trimmedEmail,
      name: role === 'admin' ? 'Admin Ustoz' : (existing?.name || 'Talaba'),
      role,
      currentLevel: existing?.currentLevel || 'a1-1',
      dailyGoalMinutes: existing?.dailyGoalMinutes || 20,
      streakDays: existing?.streakDays ?? 0,
      xpPoints: existing?.xpPoints ?? 0,
      lastActiveDate: existing?.lastActiveDate,
      createdAt: new Date().toISOString(),
    };

    storageService.saveUserProfile(newUser);
    setUser(newUser);
    return { success: true };
  }, []);

  const register = useCallback(async (name: string, email: string, pass: string): Promise<AuthResult> => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPass = pass.trim();

    if (!trimmedName) {
      return { success: false, error: 'Iltimos, ism va familiyangizni kiriting.' };
    }
    if (!trimmedEmail) {
      return { success: false, error: 'Iltimos, elektron pochta manzilini kiriting.' };
    }
    if (!trimmedPass || trimmedPass.length < 6) {
      return { success: false, error: 'Parol kamida 6 ta belgidan iborat bo‘lishi shart.' };
    }

    // 1. Production Mode with Supabase Cloud Auth
    const client = supabase;
    if (isSupabaseConfigured && client) {
      try {
        const { data, error } = await client.auth.signUp({
          email: trimmedEmail,
          password: trimmedPass,
          options: {
            data: { full_name: trimmedName },
          },
        });

        if (error) {
          let userMessage = error.message;
          if (error.message.includes('already registered')) {
            userMessage = 'Bu elektron pochta allaqachon ro‘yxatdan o‘tgan. Iltimos, tizimga kiring.';
          }
          return { success: false, error: userMessage };
        }

        if (data.user) {
          const role = isEmailAdmin(trimmedEmail) ? 'admin' : 'student';

          // Create row in public.profiles table
          await client.from('profiles').upsert({
            id: data.user.id,
            email: trimmedEmail,
            full_name: trimmedName,
            role,
            current_level: 'a1-1',
            daily_goal_minutes: 20,
            streak_days: 0,
            xp_points: 0,
          });

          const existing = storageService.getUserProfile();
          const newUser: UserProfile = {
            id: data.user.id,
            email: trimmedEmail,
            name: trimmedName,
            role,
            currentLevel: existing?.currentLevel || 'a1-1',
            dailyGoalMinutes: 20,
            streakDays: existing?.streakDays ?? 0,
            xpPoints: existing?.xpPoints ?? 0,
            lastActiveDate: existing?.lastActiveDate,
            createdAt: data.user.created_at || new Date().toISOString(),
          };

          storageService.saveUserProfile(newUser);
          setUser(newUser);

          if (!data.session) {
            return {
              success: true,
              message: 'Ro‘yxatdan o‘tish muvaffaqiyatli! Elektron pochtangizga tasdiqlash xati yuborildi.',
            };
          }

          return { success: true };
        }
      } catch (err: any) {
        return { success: false, error: err?.message || 'Ro‘yxatdan o‘tishda xatolik yuz berdi.' };
      }
    }

    // 2. Safe Local / Offline / Demo Mode
    const vault = getLocalVault();
    const role = isEmailAdmin(trimmedEmail) ? 'admin' : 'student';

    vault[trimmedEmail] = {
      name: trimmedName,
      email: trimmedEmail,
      passwordHash: simpleHash(trimmedPass),
      role,
      createdAt: new Date().toISOString(),
    };
    saveLocalVault(vault);

    const existing = storageService.getUserProfile();
    const newUser: UserProfile = {
      id: 'usr-' + Date.now(),
      email: trimmedEmail,
      name: trimmedName,
      role,
      currentLevel: existing?.currentLevel || 'a1-1',
      dailyGoalMinutes: 20,
      streakDays: existing?.streakDays ?? 0,
      xpPoints: existing?.xpPoints ?? 0,
      lastActiveDate: existing?.lastActiveDate,
      createdAt: new Date().toISOString(),
    };

    storageService.saveUserProfile(newUser);
    setUser(newUser);
    return { success: true };
  }, []);

  const logout = useCallback(async () => {
    const guestUser: UserProfile = {
      id: 'usr-guest',
      email: 'mehmon@greatnation.uz',
      name: 'Mehmon O‘quvchi',
      role: 'student',
      currentLevel: 'a1-1',
      dailyGoalMinutes: 20,
      streakDays: 0,
      xpPoints: 0,
      createdAt: new Date().toISOString(),
    };

    storageService.saveUserProfile(guestUser);
    setUser(guestUser);

    const client = supabase;
    if (isSupabaseConfigured && client) {
      try {
        await client.auth.signOut();
      } catch (err) {
        console.error('Supabase signOut error:', err);
      }
    }
  }, []);

  const updateProfile = useCallback(async (updates: Partial<UserProfile>) => {
    if (!user) return;
    const updated = { ...user, ...updates };
    storageService.saveUserProfile(updated);
    setUser(updated);

    const client = supabase;
    if (isSupabaseConfigured && client && user.id && !user.id.startsWith('usr-guest')) {
      try {
        const dbUpdates: any = { updated_at: new Date().toISOString() };
        if (updates.name !== undefined) dbUpdates.full_name = updates.name;
        if (updates.avatarUrl !== undefined) dbUpdates.avatar_url = updates.avatarUrl;
        if (updates.currentLevel !== undefined) dbUpdates.current_level = updates.currentLevel;
        if (updates.dailyGoalMinutes !== undefined) dbUpdates.daily_goal_minutes = updates.dailyGoalMinutes;
        if (updates.streakDays !== undefined) dbUpdates.streak_days = updates.streakDays;
        if (updates.xpPoints !== undefined) dbUpdates.xp_points = updates.xpPoints;
        if (updates.lastActiveDate !== undefined) dbUpdates.last_activity_date = updates.lastActiveDate;

        await client.from('profiles').update(dbUpdates).eq('id', user.id);
      } catch (err) {
        console.error('Failed to sync profile update to Supabase:', err);
      }
    }
  }, [user]);

  /**
   * Protected role switch: prevents unauthorized privilege escalation to 'admin'.
   */
  const switchRole = useCallback((newRole: 'student' | 'admin') => {
    if (!user) return;

    if (newRole === 'admin' && !isEmailAdmin(user.email)) {
      console.warn('Xavfsizlik ogohlantirishi: Admin huquqiga ruxsatsiz o‘tish bloklandi.');
      return;
    }

    const updated = { ...user, role: newRole };
    storageService.saveUserProfile(updated);
    setUser(updated);
  }, [user]);

  const setUserLevel = useCallback((level: CEFRLevelCode) => {
    if (!user) return;
    const updated = { ...user, currentLevel: level };
    storageService.saveUserProfile(updated);
    setUser(updated);

    const client = supabase;
    if (isSupabaseConfigured && client && user.id && !user.id.startsWith('usr-guest')) {
      client.from('profiles').update({ current_level: level }).eq('id', user.id).then();
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user && user.id !== 'usr-guest',
        isAdmin: user?.role === 'admin',
        isLoading,
        isCloudConnected: isSupabaseConfigured,
        login,
        register,
        logout,
        updateProfile,
        switchRole,
        setUserLevel,
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
