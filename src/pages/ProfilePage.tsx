import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import { storageService } from '../lib/storage';
import { User, Award, Flame, LogOut, CheckCircle2, Bookmark, Sparkles, Trophy } from 'lucide-react';
import { LevelBadge } from '../components/common/Badge';
import { getRankByXp, computeAchievements } from '../lib/gamification';
import { AchievementBadges } from '../components/common/AchievementBadges';

export const ProfilePage: React.FC = () => {
  const { user, updateProfile, logout, setUserLevel } = useAuth();
  const { completedLessonsCount, masteredVocabCount, lessonProgress } = useProgress();
  const levels = storageService.getLevels();

  const [name, setName] = useState(user?.name || '');
  const [dailyGoal, setDailyGoal] = useState(user?.dailyGoalMinutes || 20);
  const [savedMessage, setSavedMessage] = useState(false);

  const xp = user?.xpPoints ?? 0;
  const streak = user?.streakDays ?? 0;

  const { currentRank, nextRank, progressPercent, xpToNext } = getRankByXp(xp);
  const badges = computeAchievements({
    xpPoints: xp,
    streakDays: streak,
    completedLessonsCount,
    masteredVocabCount,
    lessonProgress
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      name,
      dailyGoalMinutes: Number(dailyGoal),
    });
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 transition-colors duration-200">
      <div>
        <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest block mb-1">
          Foydalanuvchi Profili
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Shaxsiy hisob va yutuqlar
        </h1>
      </div>

      {/* User Info & Stats Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-card flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-2xl bg-brand-50 dark:bg-brand-950/60 border border-brand-100 dark:border-brand-900/50 flex items-center justify-center text-brand-600 dark:text-brand-400 shadow-xs">
            <User size={32} />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{user?.name}</h3>
              <span className="text-xl" title={currentRank.titleUz}>{currentRank.badge}</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">{user?.email}</p>
            <div className="flex items-center space-x-2 mt-2">
              {user?.role === 'admin' && (
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                  Admin
                </span>
              )}
              <LevelBadge code={user?.currentLevel || 'a1-1'} />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/80 text-center min-w-[85px]">
            <Flame size={20} className="mx-auto text-amber-500 fill-amber-500 mb-0.5 animate-pulse" />
            <div className="text-base font-extrabold text-amber-950 dark:text-amber-200">{streak} kun</div>
            <div className="text-[10px] font-bold text-amber-600 dark:text-amber-400">Silsila</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 text-center min-w-[85px]">
            <Award size={20} className="mx-auto text-emerald-600 dark:text-emerald-400 mb-0.5" />
            <div className="text-base font-extrabold text-emerald-950 dark:text-emerald-200">{xp} XP</div>
            <div className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">Tajriba</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/80 text-center min-w-[85px]">
            <Bookmark size={20} className="mx-auto text-blue-600 dark:text-blue-400 mb-0.5" />
            <div className="text-base font-extrabold text-blue-950 dark:text-blue-200">{masteredVocabCount}</div>
            <div className="text-[10px] font-bold text-blue-600 dark:text-blue-400">Yodlangan</div>
          </div>
        </div>
      </div>

      {/* Gamification Rank Progression Card */}
      <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-soft border border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-3xl shadow-inner border border-white/15">
              <span>{currentRank.badge}</span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-caption uppercase tracking-wider text-brand-300 font-bold">
                  {currentRank.tier}-Rutba • {currentRank.titleDe}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                {currentRank.titleUz}
              </h3>
            </div>
          </div>

          {nextRank && (
            <div className="text-left sm:text-right">
              <span className="text-caption text-slate-400 block">Keyingi rutbagacha:</span>
              <span className="text-body font-bold text-emerald-400">
                +{xpToNext} XP kerak ({nextRank.badge} {nextRank.titleUz})
              </span>
            </div>
          )}
        </div>

        <p className="text-caption text-slate-400 leading-relaxed max-w-2xl">
          {currentRank.descriptionUz}
        </p>

        {/* Progress to next level */}
        <div className="space-y-1.5 pt-2">
          <div className="flex justify-between text-caption font-semibold text-slate-400">
            <span>{currentRank.minXp} XP</span>
            <span>{progressPercent}% bajarildi</span>
            <span>{nextRank ? `${nextRank.minXp} XP` : 'Maksimal daraja'}</span>
          </div>
          <div className="w-full h-3 rounded-full bg-white/15 overflow-hidden backdrop-blur-sm p-0.5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-600 transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Achievement Badges Showcase */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-soft">
        <AchievementBadges badges={badges} />
      </div>

      {/* Profile Edit Form */}
      <form onSubmit={handleSave} className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <h3 className="text-base font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center space-x-2">
          <span>Ma‘lumotlarni tahrirlash</span>
        </h3>

        {savedMessage && (
          <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold flex items-center space-x-2 animate-in fade-in">
            <CheckCircle2 size={16} />
            <span>O‘zgarishlar muvaffaqiyatli saqlandi!</span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-2">
              Ism va Familiya
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-medium focus:ring-2 focus:ring-brand-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-2">
              Kunlik o‘qish maqsadi (daqiqa)
            </label>
            <input
              type="number"
              value={dailyGoal}
              onChange={(e) => setDailyGoal(Number(e.target.value))}
              min={5}
              max={180}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-medium focus:ring-2 focus:ring-brand-500 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-2">
            O‘rganayotgan CEFR bosqichingiz
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {levels.map((lvl) => (
              <button
                key={lvl.code}
                type="button"
                onClick={() => setUserLevel(lvl.code)}
                className={`py-2 px-3 rounded-xl text-xs font-bold border transition ${
                  user?.currentLevel === lvl.code
                    ? 'bg-brand-600 text-white border-brand-600 shadow-2xs'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750'
                }`}
              >
                {lvl.code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end">
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold shadow-sm transition"
          >
            Saqlash
          </button>
        </div>
      </form>

      {/* Logout button */}
      <div className="flex justify-end">
        <button
          onClick={logout}
          className="inline-flex items-center px-5 py-2.5 rounded-xl border border-red-200 dark:border-red-900/60 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 text-xs font-bold transition"
        >
          <LogOut size={14} className="mr-1.5" />
          Tizimdan chiqish
        </button>
      </div>
    </div>
  );
};
