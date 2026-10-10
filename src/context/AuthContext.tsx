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

/**
 * Mahalliy (offline) hisob tizimi — faqat demo uchun. Production buildda u
 * `VITE_ENABLE_LOCAL_AUTH=true` bo'lmaguncha O'CHIQ: aks holda ilova
 * Supabase autentifikatsiyasiga tayanadi.
 */
export const LOCAL_DEMO_AUTH_ENABLED =
  import.meta.env.DEV || import.meta.env.VITE_ENABLE_LOCAL_AUTH === 'true';

const SALTED_PREFIX = 's256';

/** Eski (zaif, 32-bitli) xesh — faqat mavjud hisoblarni ko'chirish uchun. */
const legacySimpleHash = (s: string): string => {
  let hash = 0;
  for (let i = 0; i < s.length; i++) {
    hash = (hash << 5) - hash + s.charCodeAt(i);
    hash |= 0;
  }
  return 'h_' + Math.abs(hash).toString(36);
};

const randomSalt = (): string => {
  const bytes = new Uint8Array(16);
  if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
    crypto.getRandomValues(bytes);
  } else {
    for (let i = 0; i < bytes.length; i++) bytes[i] = Math.floor(Math.random() * 256);
  }
  return Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('');
};

const sha256Hex = async (value: string): Promise<string | null> => {
  try {
    if (typeof crypto === 'undefined' || !crypto.subtle) return null;
    const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value));
    return Array.from(new Uint8Array(digest), b => b.toString(16).padStart(2, '0')).join('');
  } catch {
    return null;
  }
};

/** Parolni tuzli SHA-256 bilan saqlaydi: `s256$<salt>$<hash>`. */
const hashPassword = async (password: string): Promise<string> => {
  const salt = randomSalt();
  const digest = await sha256Hex(`${salt}:${password}`);
  // WebCrypto mavjud bo'lmasa zaif xeshga qaytamiz (juda eski brauzerlar).
  return digest ? `${SALTED_PREFIX}$${salt}$${digest}` : legacySimpleHash(password);
};

const verifyPassword = async (stored: string, password: string): Promise<boolean> => {
  if (!stored) return false;
  if (stored.startsWith(`${SALTED_PREFIX}$`)) {
    const [, salt, digest] = stored.split('$');
    const candidate = await sha256Hex(`${salt}:${password}`);
    return Boolean(candidate) && candidate === digest;
  }
  return stored === legacySimpleHash(password);
};

const needsRehash = (stored: string): boolean => !stored.startsWith(`${SALTED_PREFIX}$`);

/** Demo hisoblarni faqat lokal rejim yoqilganda yaratamiz. */
const initLocalVault = async () => {
  if (!LOCAL_DEMO_AUTH_ENABLED) return;

  const vault = getLocalVault();
  let modified = false;

  if (!vault['talaba@greatnation.uz']) {
    vault['talaba@greatnation.uz'] = {
      name: 'Talaba',
      email: 'talaba@greatnation.uz',
      passwordHash: await hashPassword('demo123'),
      role: 'student',
      createdAt: new Date().toISOString(),
    };
    modified = true;
  }

  if (!vault['admin@greatnation.uz']) {
    vault['admin@greatnation.uz'] = {
      name: 'Admin Ustoz',
      email: 'admin@greatnation.uz',
      passwordHash: await hashPassword('admin123'),
      role: 'admin',
      createdAt: new Date().toISOString(),
    };
    modified = true;
  }

  if (modified) {
    saveLocalVault(vault);
  }
};

interface DbProfileRow {
  id: string;
  email?: string | null;
  full_name?: string | null;
  avatar_url?: string | null;
  role?: 'student' | 'admin' | null;
  current_level?: string | null;
  daily_goal_minutes?: number | null;
  streak_days?: number | null;
  xp_points?: number | null;
  last_activity_date?: string | null;
  created_at?: string | null;
}

const mapDbRowToUserProfile = (row: DbProfileRow, fallbackEmail = ''): UserProfile => {
  return {
    id: row.id,
    email: row.email || fallbackEmail,
    name: row.full_name || 'Talaba',
    avatarUrl: row.avatar_url || undefined,
    // Bulut rejimida rol ma'lumotlar bazasidan olinadi; env'dagi admin email
    // faqat zaxira (UI) signali.
    role:
      row.role === 'admin' || (!row.role && isEmailAdmin(row.email || fallbackEmail))
        ? 'admin'
        : 'student',
    currentLevel: (row.current_level as CEFRLevelCode) || 'a1-1',
    dailyGoalMinutes: row.daily_goal_minutes ?? 20,
    streakDays: row.streak_days ?? 0,
    xpPoints: row.xp_points ?? 0,
    lastActiveDate: row.last_activity_date || undefined,
    createdAt: row.created_at || new Date().toISOString(),
  };
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(() => storageService.getUserProfile());
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Synchronize with Supabase Auth state if configured
  useEffect(() => {
    void initLocalVault();

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
    // Diqqat: callback ICHIDA to'g'ridan-to'g'ri Supabase so'rovi yuborish
    // tavsiya etilmaydi (auth lock tufayli osilib qolish xavfi bor).
    // Shu sababli profil sinxronizatsiyasini keyingi tick'ka suramiz.
    const { data: { subscription } } = client.auth.onAuthStateChange((event, session) => {
      if (!isMounted) return;

      if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED' || event === 'USER_UPDATED') {
        const sessionUser = session?.user;
        if (!sessionUser) return;

        setTimeout(() => {
          if (!isMounted) return;
          void (async () => {
            try {
              const { data: profile, error } = await client
                .from('profiles')
                .select('*')
                .eq('id', sessionUser.id)
                .maybeSingle();

              if (error) {
                console.warn('[Auth] Profilni o‘qishda xatolik:', error.message);
              }

              if (profile && isMounted) {
                const mapped = mapDbRowToUserProfile(profile, sessionUser.email || '');
                setUser(mapped);
                storageService.saveUserProfile(mapped);
              }
            } catch (err) {
              console.error('Error handling auth state change:', err);
            }
          })();
        }, 0);
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
      } catch (err: unknown) {
        const errorMsg = err instanceof Error ? err.message : 'Tarmoqqa ulanishda xatolik yuz berdi.';
        return { success: false, error: errorMsg };
      }
    }

    // 2. Local / Offline rejim (faqat demo uchun yoqilgan bo'lsa)
    if (!LOCAL_DEMO_AUTH_ENABLED) {
      return {
        success: false,
        error:
          'Bulut autentifikatsiyasi sozlanmagan (VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY). Iltimos, administrator bilan bog‘laning.',
      };
    }

    const vault = getLocalVault();
    const account = vault[trimmedEmail];

    // Xavfsizlik: ilgari har qanday email+parol bilan hisob AVTOMATIK yaratilardi.
    if (!account) {
      return { success: false, error: 'Bunday hisob topilmadi. Iltimos, avval ro‘yxatdan o‘ting.' };
    }

    if (!(await verifyPassword(account.passwordHash, trimmedPass))) {
      return { success: false, error: 'Parol noto‘g‘ri kiritildi.' };
    }

    // Eski zaif xeshni birinchi muvaffaqiyatli kirishda tuzli SHA-256 ga o'tkazamiz.
    if (needsRehash(account.passwordHash)) {
      vault[trimmedEmail] = { ...account, passwordHash: await hashPassword(trimmedPass) };
      saveLocalVault(vault);
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

          // Profil qatorini yaratamiz. Rol HAR DOIM 'student': admin huquqi faqat
          // ma'lumotlar bazasida (service_role orqali) beriladi, klientdan emas.
          const { error: profileError } = await client.from('profiles').upsert({
            id: data.user.id,
            email: trimmedEmail,
            full_name: trimmedName,
            role: 'student',
            current_level: 'a1-1',
            daily_goal_minutes: 20,
            streak_days: 0,
            xp_points: 0,
          });

          if (profileError) {
            console.warn('[Auth] Profil qatorini yozib bo‘lmadi:', profileError.message);
          }

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
      } catch (err: unknown) {
        const errorMsg = err instanceof Error ? err.message : 'Ro‘yxatdan o‘tishda xatolik yuz berdi.';
        return { success: false, error: errorMsg };
      }
    }

    // 2. Local / Offline rejim (faqat demo uchun yoqilgan bo'lsa)
    if (!LOCAL_DEMO_AUTH_ENABLED) {
      return {
        success: false,
        error:
          'Bulut autentifikatsiyasi sozlanmagan — ro‘yxatdan o‘tish vaqtincha mavjud emas.',
      };
    }

    const vault = getLocalVault();
    const role = isEmailAdmin(trimmedEmail) ? 'admin' : 'student';

    if (vault[trimmedEmail]) {
      return { success: false, error: 'Bu elektron pochta allaqachon ro‘yxatdan o‘tgan.' };
    }

    vault[trimmedEmail] = {
      name: trimmedName,
      email: trimmedEmail,
      passwordHash: await hashPassword(trimmedPass),
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
        const dbUpdates: Record<string, unknown> = { updated_at: new Date().toISOString() };
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
      void (async () => {
        const { error } = await client
          .from('profiles')
          .update({ current_level: level })
          .eq('id', user.id);
        if (error) console.warn('[Auth] Darajani serverga yozib bo‘lmadi:', error.message);
      })();
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
