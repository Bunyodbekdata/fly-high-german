// Gamification System: Ranks, XP Progress, Achievement Badges, and Web Audio SFX
import { LessonProgress } from '../types/database';

export interface GamificationRank {
  tier: number;
  titleUz: string;
  titleDe: string;
  badge: string;
  minXp: number;
  maxXp: number;
  color: string;
  gradient: string;
  descriptionUz: string;
}

export const RANKS: GamificationRank[] = [
  {
    tier: 1,
    titleUz: 'Yangi Boshlovchi',
    titleDe: 'Anfänger',
    badge: '🥉',
    minXp: 0,
    maxXp: 150,
    color: 'text-amber-700 bg-amber-100 border-amber-300 dark:bg-amber-950/60 dark:text-amber-400 dark:border-amber-800',
    gradient: 'from-amber-600 to-amber-800',
    descriptionUz: 'Nemis tili olamiga ilk qadamlar. Dastlabki so‘zlar va tovushlarni o‘rganish davri.'
  },
  {
    tier: 2,
    titleUz: 'Izlanuvchi O‘quvchi',
    titleDe: 'Entdecker',
    badge: '🥈',
    minXp: 151,
    maxXp: 400,
    color: 'text-slate-700 bg-slate-100 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700',
    gradient: 'from-slate-500 to-slate-700',
    descriptionUz: 'Asosiy kundalik muloqot va so‘zlarni mustaqil tuza oluvchi o‘quvchi.'
  },
  {
    tier: 3,
    titleUz: 'Faol Nemischi',
    titleDe: 'Fortgeschrittener',
    badge: '🥇',
    minXp: 401,
    maxXp: 800,
    color: 'text-emerald-700 bg-emerald-100 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-400 dark:border-emerald-800',
    gradient: 'from-emerald-600 to-teal-700',
    descriptionUz: 'A1.1 darajasidagi barcha grammatik qoidalar va lug‘atni to‘liq o‘zlashtirgan talaba.'
  },
  {
    tier: 4,
    titleUz: 'Til Bilimdoni',
    titleDe: 'Sprachkenner',
    badge: '💎',
    minXp: 801,
    maxXp: 1500,
    color: 'text-blue-700 bg-blue-100 border-blue-300 dark:bg-blue-950/60 dark:text-blue-400 dark:border-blue-800',
    gradient: 'from-blue-600 to-blue-800',
    descriptionUz: 'A1.2 darslarida murakkab fe‘llar, Dativ va o‘tgan zamon (Perfekt) bo‘yicha tajribali o‘quvchi.'
  },
  {
    tier: 5,
    titleUz: 'Nemis Tili Ustasi',
    titleDe: 'Deutschmeister',
    badge: '👑',
    minXp: 1501,
    maxXp: 5000,
    color: 'text-brand-700 bg-brand-100 border-brand-300 dark:bg-brand-950/60 dark:text-brand-400 dark:border-brand-800',
    gradient: 'from-brand-600 to-pink-600',
    descriptionUz: 'A1 bosqichini 100% muvaffaqiyatli yakunlagan xalqaro darajadagi bitiruvchi.'
  }
];

export function getRankByXp(xp: number): {
  currentRank: GamificationRank;
  nextRank: GamificationRank | null;
  progressPercent: number;
  xpToNext: number;
} {
  const safeXp = Math.max(0, xp);
  const currentRank = RANKS.slice().reverse().find(r => safeXp >= r.minXp) || RANKS[0];
  const nextRank = RANKS.find(r => r.tier === currentRank.tier + 1) || null;

  if (!nextRank) {
    return {
      currentRank,
      nextRank: null,
      progressPercent: 100,
      xpToNext: 0
    };
  }

  const range = nextRank.minXp - currentRank.minXp;
  const gained = safeXp - currentRank.minXp;
  const progressPercent = Math.min(100, Math.max(0, Math.round((gained / range) * 100)));
  const xpToNext = Math.max(0, nextRank.minXp - safeXp);

  return {
    currentRank,
    nextRank,
    progressPercent,
    xpToNext
  };
}

export interface AchievementBadge {
  id: string;
  titleUz: string;
  descriptionUz: string;
  iconName: string;
  emoji: string;
  category: 'lesson' | 'streak' | 'vocab' | 'shadowing' | 'mastery';
  targetCount: number;
  currentCount: number;
  isUnlocked: boolean;
}

export function computeAchievements(params: {
  xpPoints: number;
  streakDays: number;
  completedLessonsCount: number;
  masteredVocabCount: number;
  lessonProgress: Record<string, LessonProgress>;
}): AchievementBadge[] {
  const { streakDays, completedLessonsCount, masteredVocabCount, lessonProgress } = params;

  // Count lessons with high score (100%)
  const perfectScoresCount = Object.values(lessonProgress).filter(
    (p) => Boolean(p?.completed && (p?.score ?? 0) >= 100)
  ).length;

  // Count lessons with completed shadowing tab
  const shadowingCompletedCount = Object.values(lessonProgress).filter(
    (p) => Boolean(p?.tabCompleted?.shadowing)
  ).length;

  return [
    {
      id: 'first_step',
      titleUz: 'Birinchi Qadam',
      descriptionUz: 'Ilk nemis tili darsini 100% muvaffaqiyatli yakunlang',
      iconName: 'Sparkles',
      emoji: '🎯',
      category: 'lesson',
      targetCount: 1,
      currentCount: Math.min(1, completedLessonsCount),
      isUnlocked: completedLessonsCount >= 1
    },
    {
      id: 'streak_3',
      titleUz: 'Olovli Odat',
      descriptionUz: '3 kun uzluksiz o‘rganish silsilasiga erishing',
      iconName: 'Flame',
      emoji: '🔥',
      category: 'streak',
      targetCount: 3,
      currentCount: Math.min(3, streakDays),
      isUnlocked: streakDays >= 3
    },
    {
      id: 'streak_7',
      titleUz: 'To‘xtatib Bo‘lmas',
      descriptionUz: '7 kunlik o‘rganish silsilasini saqlab qoling',
      iconName: 'Zap',
      emoji: '⚡',
      category: 'streak',
      targetCount: 7,
      currentCount: Math.min(7, streakDays),
      isUnlocked: streakDays >= 7
    },
    {
      id: 'vocab_25',
      titleUz: 'Lug‘at Boyi',
      descriptionUz: '25 ta nemischa so‘zni fleshkartalar orqali to‘liq o‘zlashtiring',
      iconName: 'Bookmark',
      emoji: '📖',
      category: 'vocab',
      targetCount: 25,
      currentCount: Math.min(25, masteredVocabCount),
      isUnlocked: masteredVocabCount >= 25
    },
    {
      id: 'vocab_50',
      titleUz: 'So‘z Bilimdoni',
      descriptionUz: '50 ta so‘z va artikllarni yodlab, xotirangizni charxlang',
      iconName: 'BookOpen',
      emoji: '🧠',
      category: 'vocab',
      targetCount: 50,
      currentCount: Math.min(50, masteredVocabCount),
      isUnlocked: masteredVocabCount >= 50
    },
    {
      id: 'shadowing_5',
      titleUz: 'Sof Talaffuz',
      descriptionUz: '5 ta darsda Shadowing (ovoz chiqarib takrorlash) mashqini tugating',
      iconName: 'Mic',
      emoji: '🎙',
      category: 'shadowing',
      targetCount: 5,
      currentCount: Math.min(5, shadowingCompletedCount),
      isUnlocked: shadowingCompletedCount >= 5
    },
    {
      id: 'perfect_score',
      titleUz: 'A‘lochi O‘quvchi',
      descriptionUz: 'Kamida 3 ta darsning yakuniy mashqlarida 100% ball oling',
      iconName: 'Award',
      emoji: '💯',
      category: 'mastery',
      targetCount: 3,
      currentCount: Math.min(3, perfectScoresCount),
      isUnlocked: perfectScoresCount >= 3
    },
    {
      id: 'module_complete',
      titleUz: 'A1.1 Chempioni',
      descriptionUz: 'A1.1 ning barcha 12 ta asosiy darsini to‘liq yakunlang',
      iconName: 'GraduationCap',
      emoji: '🎓',
      category: 'mastery',
      targetCount: 12,
      currentCount: Math.min(12, completedLessonsCount),
      isUnlocked: completedLessonsCount >= 12
    }
  ];
}

// ---------------------------------------------------------------------------
// Synthesized Web Audio Sound Effects (Zero External Assets, 100% Offline)
// ---------------------------------------------------------------------------

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioContextClass) return null;
  if (!audioCtx || audioCtx.state === 'closed') {
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export const sfx = {
  isMuted(): boolean {
    if (typeof localStorage === 'undefined') return false;
    return localStorage.getItem('for_great_nation_sfx_muted') === 'true';
  },

  toggleMute(): boolean {
    const next = !this.isMuted();
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('for_great_nation_sfx_muted', String(next));
    }
    return next;
  },

  /** Gentle, pleasant chime on correct answer (C5 -> E5 -> G5) */
  playCorrect(): void {
    if (this.isMuted()) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99]; // C5, E5, G5

      notes.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + index * 0.08);

        gain.gain.setValueAtTime(0, now + index * 0.08);
        gain.gain.linearRampToValueAtTime(0.18, now + index * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.08 + 0.35);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + index * 0.08);
        osc.stop(now + index * 0.08 + 0.36);
      });
    } catch {
      // AudioContext safe fallback
    }
  },

  /** Soft, non-punishing low buzz on mistake */
  playIncorrect(): void {
    if (this.isMuted()) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, now); // A3
      osc.frequency.linearRampToValueAtTime(164.81, now + 0.2); // E3

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.3);
    } catch {}
  },

  /** Joyful celebratory fanfare when finishing a lesson or quiz */
  playFanfare(): void {
    if (this.isMuted()) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const notes = [
        { f: 523.25, d: 0.12 }, // C5
        { f: 659.25, d: 0.12 }, // E5
        { f: 783.99, d: 0.14 }, // G5
        { f: 1046.50, d: 0.45 } // C6
      ];

      let t = now;
      notes.forEach(({ f, d }) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(f, t);

        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(0.22, t + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, t + d);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(t);
        osc.stop(t + d + 0.05);

        t += d * 0.75;
      });
    } catch {}
  }
};
