import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import { storageService } from '../lib/storage';
import { User, Award, Flame, Shield, LogOut, CheckCircle2, Bookmark } from 'lucide-react';
import { CEFRLevelCode } from '../types/database';
import { LevelBadge } from '../components/common/Badge';

export const ProfilePage: React.FC = () => {
  const { user, updateProfile, logout, setUserLevel } = useAuth();
  const { completedLessonsCount, masteredVocabCount } = useProgress();
  const levels = storageService.getLevels();

  const [name, setName] = useState(user?.name || '');
  const [dailyGoal, setDailyGoal] = useState(user?.dailyGoalMinutes || 20);
  const [savedMessage, setSavedMessage] = useState(false);

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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div>
        <span className="text-xs font-bold text-brand-600 uppercase tracking-widest block mb-1">
          Foydalanuvchi Profili
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Shaxsiy hisob va sozlamalar
        </h1>
      </div>

      {/* User Stats Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-card flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600">
            <User size={32} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">{user?.name}</h3>
            <p className="text-xs text-slate-500 font-mono">{user?.email}</p>
            <div className="flex items-center space-x-2 mt-2">
              {user?.role === 'admin' && (
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700">
                  Admin
                </span>
              )}
              <LevelBadge code={user?.currentLevel || 'a1-1'} />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-center min-w-[80px]">
            <Flame size={18} className="mx-auto text-amber-500 fill-amber-500 mb-0.5" />
            <div className="text-base font-bold text-amber-900">{user?.streakDays ?? 0} kun</div>
            <div className="text-[10px] text-amber-600">Silsila</div>
          </div>

          <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-center min-w-[80px]">
            <Award size={18} className="mx-auto text-emerald-600 mb-0.5" />
            <div className="text-base font-bold text-emerald-900">{user?.xpPoints ?? 0} XP</div>
            <div className="text-[10px] text-emerald-600">Tajriba</div>
          </div>

          <div className="p-3 rounded-2xl bg-blue-50 border border-blue-200 text-center min-w-[80px]">
            <Bookmark size={18} className="mx-auto text-blue-600 mb-0.5" />
            <div className="text-base font-bold text-blue-900">{masteredVocabCount}</div>
            <div className="text-[10px] text-blue-600">Yodlangan</div>
          </div>
        </div>
      </div>

      {/* Profile Form */}
      <form onSubmit={handleSave} className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
          Ma‘lumotlarni tahrirlash
        </h3>

        {savedMessage && (
          <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-semibold flex items-center space-x-2">
            <CheckCircle2 size={16} />
            <span>O‘zgarishlar muvaffaqiyatli saqlandi!</span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              Ism va Familiya
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-brand-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              Kunlik o‘qish maqsadi (daqiqa)
            </label>
            <input
              type="number"
              value={dailyGoal}
              onChange={(e) => setDailyGoal(Number(e.target.value))}
              min={5}
              max={180}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-brand-500 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
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
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {lvl.code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
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
          className="inline-flex items-center px-5 py-2.5 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 text-xs font-bold transition"
        >
          <LogOut size={14} className="mr-1.5" />
          Tizimdan chiqish
        </button>
      </div>
    </div>
  );
};
