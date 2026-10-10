import { supabase, isSupabaseConfigured } from './supabase';
import { CertificateAttempt } from '../types/certificate';

/**
 * Imtihon natijalarini SERVERDA hisoblash ko'prigi.
 *
 * Nega kerak: to'g'ri javoblar (`correctAnswer`) klientga tushadi, shuning uchun
 * brauzerdagi hisob-kitobga ishonib bo'lmaydi. Supabase sozlangan bo'lsa:
 *   1. urinish qatori `certificate_attempts` ga yoziladi,
 *   2. javoblar `grade_certificate_attempt()` RPC'ga yuboriladi,
 *   3. baho, foiz, o'tish holati va sertifikat ID faqat serverdan olinadi.
 *
 * Offline (demo) rejimda funksiya `null` qaytaradi va ilova avvalgidek
 * mahalliy hisob-kitob bilan ishlaydi.
 */

export interface ServerGradeResult {
  attemptId: string;
  score: number;
  percentage: number;
  passed: boolean;
  certificateId?: string;
}

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/** Supabase urinish ID'si UUID bo'lishi shart (FK/public.profiles). */
export const isUuid = (value: string | undefined): boolean => !!value && UUID_RE.test(value);

const newUuid = (): string => {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  // Zaxira: RFC 4122 v4 ko'rinishidagi tasodifiy UUID.
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

/**
 * Urinish ID'si: server baholash mumkin bo'lsa UUID, aks holda eski mahalliy
 * `att_..._...` formati (offline urinishlar uchun).
 */
export const createAttemptId = (userId?: string): string =>
  isSupabaseConfigured && isUuid(userId) ? newUuid() : `att_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

/** Server baholash faqat bulut rejimida va haqiqiy foydalanuvchi uchun ishlaydi. */
export const canGradeOnServer = (userId?: string): boolean =>
  isSupabaseConfigured && isUuid(userId);

const withTimeout = async <T>(promise: Promise<T>, ms: number): Promise<T | null> => {
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    return await Promise.race([
      promise,
      new Promise<null>(resolve => {
        timer = setTimeout(() => resolve(null), ms);
      }),
    ]);
  } catch {
    return null;
  } finally {
    if (timer) clearTimeout(timer);
  }
};

export const submitAttemptForServerGrading = async (
  attempt: CertificateAttempt,
  answers: Record<string, string>
): Promise<ServerGradeResult | null> => {
  const client = supabase;
  if (!isSupabaseConfigured || !client) return null;
  if (!isUuid(attempt.id) || !isUuid(attempt.userId)) return null;

  try {
    const { error: insertError } = await client.from('certificate_attempts').upsert({
      id: attempt.id,
      user_id: attempt.userId,
      user_name: attempt.userName,
      test_id: attempt.testId,
      level_code: attempt.levelCode,
      started_at: attempt.startedAt,
      duration_seconds_used: attempt.durationSecondsUsed ?? 0,
      max_score: attempt.maxScore,
      reading_max_score: attempt.readingMaxScore,
      listening_max_score: attempt.listeningMaxScore,
      status: 'in_progress',
    });

    if (insertError) {
      console.warn('[CertificateGrading] Urinishni serverga yozib bo‘lmadi:', insertError.message);
      return null;
    }

    const payload = Object.entries(answers).map(([questionId, selectedAnswer]) => ({
      question_id: questionId,
      selected_answer: selectedAnswer,
    }));

    if (payload.length === 0) {
      console.warn('[CertificateGrading] Bo‘sh javoblar to‘plami — server baholash o‘tkazib yuborildi.');
      return null;
    }

    interface GradeRpcResponse {
      data: unknown;
      error: { message: string } | null;
    }

    // Supabase query builder — thenable, lekin Promise emas: shuning uchun
    // `withTimeout` bilan ishlashi uchun aniq tipga keltiramiz.
    const rpcCall = client.rpc('grade_certificate_attempt', {
      p_attempt_id: attempt.id,
      p_answers: payload,
    }) as unknown as Promise<GradeRpcResponse>;

    const graded = await withTimeout(rpcCall, 8000);

    if (!graded) {
      console.warn('[CertificateGrading] Server baholash javob bermadi (timeout).');
      return null;
    }

    const { data, error } = graded;
    if (error || !data) {
      console.warn('[CertificateGrading] Server baholashda xatolik:', error?.message);
      return null;
    }

    const result = data as {
      attempt_id?: string;
      score?: number;
      percentage?: number;
      passed?: boolean;
      certificate_id?: string | null;
    };

    return {
      attemptId: result.attempt_id || attempt.id,
      score: result.score ?? 0,
      percentage: result.percentage ?? 0,
      passed: Boolean(result.passed),
      certificateId: result.certificate_id || undefined,
    };
  } catch (e) {
    console.warn('[CertificateGrading] Kutilmagan xatolik:', e);
    return null;
  }
};
