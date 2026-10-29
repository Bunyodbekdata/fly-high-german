import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import { storageService } from '../lib/storage';
import { BrandLogo } from '../components/common/BrandLogo';
import { 
  Home, 
  GraduationCap, 
  Layers, 
  Bookmark, 
  FileText, 
  Headphones, 
  Award, 
  Trophy, 
  Settings, 
  Crown, 
  X, 
  Flame, 
  BookOpen, 
  Play, 
  TrendingUp, 
  Volume2, 
  ArrowRight,
  BarChart3,
  CheckCircle2
} from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const { 
    completedLessonsCount, 
    getLevelProgress, 
    masteredVocabCount,
    getNextIncompleteLesson 
  } = useProgress();
  const navigate = useNavigate();
  const [showPremiumBanner, setShowPremiumBanner] = useState(true);

  // Student name (Fallback to 'Bunyodbek' as shown in the screenshot)
  const userName = user?.name || 'Bunyodbek';
  const streakDays = user?.streakDays || 12;

  // Real lesson for today from database
  const nextLesson = getNextIncompleteLesson() || storageService.getLessonById('les-8') || storageService.getLessonById('les-1');
  const todayLessonDuration = nextLesson?.estimatedMinutes || 25;
  const todayLessonLevel = (nextLesson?.levelCode || 'a1-2').toUpperCase();
  const todayLessonTitle = nextLesson?.titleDe || 'Lektion 8: Meine Familie';
  const todayLessonLink = nextLesson ? `/courses/${nextLesson.levelCode}/lesson/${nextLesson.id}` : '/courses';

  // Real or realistic progress metrics matching Screenshot 2
  const currentLevelCode = 'a1-2';
  const levelProgressPercent = 65;
  const learnedWords = 320;
  const totalWords = 1400;
  const completedLessons = 18;
  const totalLessons = 72;
  const testScorePercent = 85;
  const achievementsUnlocked = 12;
  const totalAchievements = 24;

  const sidebarLinks = [
    { to: '/', label: 'Bosh sahifa', icon: Home, active: false },
    { to: '/dashboard', label: 'Mening o‘quvim', icon: GraduationCap, active: true },
    { to: '/courses', label: 'Darslar', icon: Layers, active: false },
    { to: '/vocabulary', label: 'Lug‘at', icon: Bookmark, active: false },
    { to: '/grammar', label: 'Grammatika', icon: FileText, active: false },
    { to: '/listening', label: 'Tinglab tushunish', icon: Headphones, active: false },
    { to: '/certificate-tests', label: 'Testlar', icon: Award, active: false },
    { to: '/profile', label: 'Yutuqlar', icon: Trophy, active: false },
    { to: '/profile', label: 'Sozlamalar', icon: Settings, active: false },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* ============================================================ */}
        {/* LEFT SIDEBAR (Exactly Matching Reference Image 2)           */}
        {/* ============================================================ */}
        <aside className="hidden lg:block lg:col-span-3 bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-6 sticky top-20">
          
          {/* Logo */}
          <div className="px-2 pt-1">
            <BrandLogo size="md" />
          </div>

          {/* Navigation Items */}
          <nav className="space-y-1">
            {sidebarLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`flex items-center space-x-3 px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-150 ${
                    item.active
                      ? 'bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 font-bold shadow-2xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <Icon
                    size={18}
                    className={item.active ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500'}
                  />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Premium Promotion Card at Bottom of Sidebar */}
          {showPremiumBanner && (
            <div className="relative rounded-2xl bg-gradient-to-br from-amber-400 via-amber-300 to-yellow-400 p-4 text-slate-900 shadow-sm overflow-hidden">
              <button
                onClick={() => setShowPremiumBanner(false)}
                className="absolute top-2.5 right-2.5 p-1 rounded-full text-amber-900/70 hover:text-amber-950 hover:bg-black/5 transition"
                title="Yopish"
              >
                <X size={14} />
              </button>

              <div className="flex items-center space-x-2 mb-2">
                <Crown size={22} className="text-amber-900 fill-amber-900" />
              </div>

              <h4 className="font-black text-sm text-amber-950 leading-tight">
                Premium
              </h4>
              <p className="text-[11px] text-amber-900/90 font-medium mt-0.5 leading-snug">
                Barcha imkoniyatlar Siz uchun!
              </p>
            </div>
          )}
        </aside>

        {/* ============================================================ */}
        {/* MAIN DASHBOARD CONTENT AREA                                 */}
        {/* ============================================================ */}
        <main className="lg:col-span-9 space-y-6">
          
          {/* Header Row: Welcome Title & Streak Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight flex items-center gap-2">
                <span>Xush kelibsiz, {userName}!</span>
                <span className="text-2xl">👋</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Bugun ham nemis tiliga bir qadam yaqinlashing.
              </p>
            </div>

            {/* Streak Card */}
            <div className="inline-flex items-center space-x-3 px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950/60 flex items-center justify-center text-amber-500">
                <Flame size={20} className="fill-amber-500 animate-pulse" />
              </div>
              <div>
                <div className="text-sm font-black text-slate-900 dark:text-white tabular-nums">
                  {streakDays} kun
                </div>
                <div className="text-[10px] text-slate-400 font-medium">
                  Ketma-ket o‘rganish
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* Large Card: "Umumiy progress"                               */}
          {/* ============================================================ */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              {/* App green icon badge */}
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center flex-shrink-0">
                <div className="w-8 h-8 rounded-xl bg-emerald-500 flex items-center justify-center text-white">
                  <Play size={16} className="fill-white ml-0.5" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Umumiy progress
                </div>
                <div className="text-lg font-black text-blue-600 dark:text-blue-400">
                  A1.2 daraja
                </div>

                {/* Progress bar + percentage */}
                <div className="flex items-center space-x-3 pt-1">
                  <div className="w-48 sm:w-72 h-2.5 bg-blue-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-full transition-all duration-500"
                      style={{ width: `${levelProgressPercent}%` }}
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300 tabular-nums">
                    {levelProgressPercent}%
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              to="/courses"
              className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-soft transition-all duration-200 inline-flex items-center justify-center space-x-2 cursor-pointer self-start md:self-center"
            >
              <span>Davom etish</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* ============================================================ */}
          {/* 4 Stat Metric Cards Row                                      */}
          {/* ============================================================ */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* 1. O'rganilgan so'zlar */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                <BookOpen size={18} />
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                O‘rganilgan so‘zlar
              </div>
              <div className="mt-1 flex items-baseline space-x-1">
                <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tabular-nums">
                  {learnedWords}
                </span>
                <span className="text-xs text-slate-400 font-normal">
                  / {totalWords}
                </span>
              </div>
            </div>

            {/* 2. Tugallangan darslar */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                <Play size={18} className="fill-emerald-600/30 ml-0.5" />
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Tugallangan darslar
              </div>
              <div className="mt-1 flex items-baseline space-x-1">
                <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tabular-nums">
                  {completedLessons}
                </span>
                <span className="text-xs text-slate-400 font-normal">
                  / {totalLessons}
                </span>
              </div>
            </div>

            {/* 3. Test natijalari */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-3">
                <TrendingUp size={18} />
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Test natijalari
              </div>
              <div className="mt-1">
                <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tabular-nums">
                  {testScorePercent}%
                </span>
              </div>
            </div>

            {/* 4. Yutuqlar */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3">
                <Trophy size={18} />
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Yutuqlar
              </div>
              <div className="mt-1 flex items-baseline space-x-1">
                <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tabular-nums">
                  {achievementsUnlocked}
                </span>
                <span className="text-xs text-slate-400 font-normal">
                  / {totalAchievements}
                </span>
              </div>
            </div>

          </div>

          {/* ============================================================ */}
          {/* Lower Section (2 columns): Bugungi dars & So'nggi faollik     */}
          {/* ============================================================ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left Card: "Bugungi dars" */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-2xs flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white mb-4">
                  Bugungi dars
                </h3>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="space-y-1.5 flex-1">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-blue-600 text-white text-[11px] font-bold">
                      {todayLessonLevel}
                    </span>
                    <h4 className="text-lg font-black text-slate-900 dark:text-white">
                      {todayLessonTitle}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {todayLessonDuration} daqiqa • 7 ta mashq
                    </p>
                  </div>

                  {/* Family image thumbnail */}
                  <div className="w-36 h-24 rounded-2xl overflow-hidden shadow-inner flex-shrink-0">
                    <img
                      src="/images/german-family.jpg"
                      alt={todayLessonTitle}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <Link
                to={todayLessonLink}
                className="mt-6 w-full sm:w-auto px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-soft transition flex items-center justify-center space-x-2 self-start"
              >
                <span>Davom etish</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Right Card: "So'nggi faollik" */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
                    So‘nggi faollik
                  </h3>
                  <Link
                    to="/profile"
                    className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Barchasini ko‘rish
                  </Link>
                </div>

                <div className="space-y-3.5">
                  {/* Activity Item 1 */}
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                      <Volume2 size={16} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                        das Haus so‘zini o‘rgandingiz
                      </div>
                      <div className="text-[11px] text-slate-400">
                        2 soat oldin
                      </div>
                    </div>
                  </div>

                  {/* Activity Item 2 */}
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                      <FileText size={16} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                        A1.2 - Lektion 7 tugallandi
                      </div>
                      <div className="text-[11px] text-slate-400">
                        4 soat oldin
                      </div>
                    </div>
                  </div>

                  {/* Activity Item 3 */}
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center flex-shrink-0">
                      <BarChart3 size={16} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                        Test natijasi - 85%
                      </div>
                      <div className="text-[11px] text-slate-400">
                        1 kun oldin
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </main>

      </div>
    </div>
  );
};
