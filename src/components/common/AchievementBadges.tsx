import React, { useState } from 'react';
import { AchievementBadge } from '../../lib/gamification';
import { Lock, Check, Sparkles, X } from 'lucide-react';

interface AchievementBadgesProps {
  badges: AchievementBadge[];
  compact?: boolean;
}

export const AchievementBadges: React.FC<AchievementBadgesProps> = ({ badges, compact = false }) => {
  const [selectedBadge, setSelectedBadge] = useState<AchievementBadge | null>(null);

  const unlockedCount = badges.filter(b => b.isUnlocked).length;

  return (
    <div className="space-y-4">
      {/* Header with counter */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 flex items-center justify-center text-amber-500">
            <Sparkles size={16} />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Yutuq Nishonlari (Muvaffaqiyatlar)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Darslar va mashqlarni bajarib, yangi nishonlarni oching
            </p>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
          {unlockedCount} / {badges.length} ochilgan
        </span>
      </div>

      {/* Badges Grid */}
      <div className={`grid gap-3 ${compact ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-2 sm:grid-cols-4'}`}>
        {badges.map((badge) => {
          const progressPercent = Math.min(100, Math.round((badge.currentCount / badge.targetCount) * 100));

          return (
            <button
              key={badge.id}
              type="button"
              onClick={() => setSelectedBadge(badge)}
              className={`p-3.5 rounded-2xl border text-left transition-all duration-200 relative group flex flex-col justify-between ${
                badge.isUnlocked
                  ? 'bg-white dark:bg-slate-900 border-amber-200 dark:border-amber-900/60 shadow-sm hover:shadow-card hover:-translate-y-0.5'
                  : 'bg-slate-50/70 dark:bg-slate-900/40 border-slate-200/80 dark:border-slate-800/80 opacity-75 hover:opacity-100'
              }`}
            >
              {/* Badge Icon & Status */}
              <div className="flex items-start justify-between mb-2">
                <div
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center text-2xl transition-transform group-hover:scale-110 ${
                    badge.isUnlocked
                      ? 'bg-gradient-to-tr from-amber-100 to-amber-50 dark:from-amber-950/80 dark:to-amber-900/40 shadow-xs border border-amber-200 dark:border-amber-800/60'
                      : 'bg-slate-200/60 dark:bg-slate-800 grayscale'
                  }`}
                >
                  <span>{badge.emoji}</span>
                </div>

                {badge.isUnlocked ? (
                  <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                    <Check size={12} className="stroke-[3]" />
                  </span>
                ) : (
                  <span className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-400 flex items-center justify-center">
                    <Lock size={10} />
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <div>
                <h4 className={`text-xs font-bold leading-snug line-clamp-1 ${
                  badge.isUnlocked ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'
                }`}>
                  {badge.titleUz}
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                  {badge.descriptionUz}
                </p>
              </div>

              {/* Mini Progress */}
              <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center justify-between text-[10px] font-semibold text-slate-400 dark:text-slate-500 mb-1">
                  <span>Jarayon</span>
                  <span className={badge.isUnlocked ? 'text-emerald-600 dark:text-emerald-400 font-bold' : ''}>
                    {badge.currentCount}/{badge.targetCount}
                  </span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      badge.isUnlocked ? 'bg-emerald-500' : 'bg-brand-500'
                    }`}
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Badge Detail Modal */}
      {selectedBadge && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 max-w-sm w-full shadow-elevated border border-slate-200 dark:border-slate-800 text-center space-y-4 animate-in zoom-in-95">
            <div className="flex justify-end">
              <button
                onClick={() => setSelectedBadge(null)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <X size={18} />
              </button>
            </div>

            <div className="w-20 h-20 mx-auto rounded-3xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 flex items-center justify-center text-4xl shadow-md">
              <span>{selectedBadge.emoji}</span>
            </div>

            <div>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-1.5 ${
                selectedBadge.isUnlocked
                  ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
              }`}>
                {selectedBadge.isUnlocked ? '✓ Qulfdan Ochilgan' : '🔒 Qulflangan Nishon'}
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                {selectedBadge.titleUz}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {selectedBadge.descriptionUz}
              </p>
            </div>

            {/* Progress Box */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-left">
              <div className="flex items-center justify-between text-xs font-bold mb-1.5 text-slate-700 dark:text-slate-200">
                <span>Bajarilish darajasi:</span>
                <span>{selectedBadge.currentCount} / {selectedBadge.targetCount}</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                <div
                  className="h-full bg-brand-600 rounded-full transition-all"
                  style={{
                    width: `${Math.min(100, Math.round((selectedBadge.currentCount / selectedBadge.targetCount) * 100))}%`
                  }}
                />
              </div>
            </div>

            <button
              onClick={() => setSelectedBadge(null)}
              className="w-full py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm transition shadow-sm"
            >
              Tushundim
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
