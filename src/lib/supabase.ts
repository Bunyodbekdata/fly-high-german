import { createClient, SupabaseClient } from '@supabase/supabase-js';

const rawUrl = (import.meta.env.VITE_SUPABASE_URL || '').trim();
const rawKey = (import.meta.env.VITE_SUPABASE_ANON_KEY || '').trim();

/**
 * Validate that the provided credentials are valid HTTP/HTTPS URLs and not unconfigured templates.
 */
export const isSupabaseConfigured: boolean = Boolean(
  rawUrl &&
  rawKey &&
  rawUrl.startsWith('http') &&
  !rawUrl.includes('your-project.supabase.co') &&
  !rawKey.includes('your-anon-key-here')
);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(rawUrl, rawKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    })
  : null;

/**
 * Quick diagnostic utility to verify Supabase connectivity at runtime.
 */
export const checkSupabaseConnection = async (): Promise<{
  connected: boolean;
  message: string;
  latencyMs?: number;
}> => {
  if (!isSupabaseConfigured || !supabase) {
    return {
      connected: false,
      message: 'Supabase sozlanmagan — ilova xavfsiz mahalliy (offline) rejimda ishlamoqda.',
    };
  }

  const start = performance.now();
  try {
    const { error } = await supabase.from('levels').select('id').limit(1);
    const latencyMs = Math.round(performance.now() - start);

    if (error) {
      return {
        connected: false,
        message: `Supabase xatosi: ${error.message}`,
        latencyMs,
      };
    }

    return {
      connected: true,
      message: `Supabase bilan ulanish muvaffaqiyatli (${latencyMs}ms)`,
      latencyMs,
    };
  } catch (err: unknown) {
    const errMsg = err instanceof Error ? err.message : 'Tarmoq xatosi';
    return {
      connected: false,
      message: `Ulanishda kutilmagan nosozlik: ${errMsg}`,
    };
  }
};
