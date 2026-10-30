import React, { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import { storageService } from '../lib/storage';
import { LevelBadge } from '../components/common/Badge';
import { 
  GraduationCap, 
  Layers, 
  Bookmark, 
  FileText, 
  Headphones, 
  Award, 
  Trophy, 
  Settings, 
  Flame, 
  BookOpen, 
  Play, 
  TrendingUp, 
  Volume2, 
  ArrowRight,
  BarChart3,
  Lightbulb,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { CEFRLevelCode } from '../types/database';

export const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const { 
    completedLessonsCount, 
    getLevelProgress, 
    masteredVocabCount,
    getNextIncompleteLesson,
    lessonProgress
  } = useProgress();
  const navigate = useNavigate();

  // Student info from auth state
  const userName = user?.name || 'Talaba';
  const streakDays = user?.streakDays ?? 1;

  // Real lesson data
  const allLessons = useMemo(() => storageService.getLessons(), []);
  const allVocab = useMemo(() => storageService.getAllVocabulary(), []);
  const nextLesson = getNextIncompleteLesson() || allLessons[0];
  
  const todayLessonDuration = nextLesson?.estimatedMinutes || 25;
  const todayLessonLevel = (nextLesson?.levelCode || 'a1-1').toUpperCase().replace('-', '.');
  const todayLessonTitle = nextLesson ? `${nextLesson.titleDe}` : '1-Dars: Tanishuv';
  const todayLessonSubtitle = nextLesson?.titleUz || 'Salomlashish va tanishtirish';
  const todayLessonLink = nextLesson ? `/courses/${nextLesson.levelCode}/lesson/${nextLesson.id}` : '/courses';

  // Dynamic progress metrics
  const currentLevelCode = (user?.currentLevel || nextLesson?.levelCode || 'a1-1') as CEFRLevelCode;
  const currentLevel = storageService.getLevelByCode(currentLevelCode);
  const levelProgressPercent = getLevelProgress(currentLevelCode);

  const totalLessons = allLessons.length || 72;
  const completedLessons = completedLessonsCount;
  const totalWords = allVocab.length || 1400;
  const learnedWords = masteredVocabCount;

  // Real test statistics
  const attempts = useMemo(() => storageService.getCertificateAttempts(user?.id), [user?.id]);
  const testScorePercent = attempts.length > 0 
    ? Math.round(attempts.reduce((a, b) => a + b.percentage, 0) / attempts.length)
    : 0;

  // Achievements count
  const achievementsUnlocked = useMemo(() => {
    let count = 0;
    if (completedLessonsCount >= 1) count++;
    if (completedLessonsCount >= 5) count++;
    if (completedLessonsCount >= 12) count++;
    if (masteredVocabCount >= 10) count++;
    if (masteredVocabCount >= 50) count++;
    if (streakDays >= 3) count++;
    if (streakDays >= 7) count++;
    if (attempts.some(a => a.percentage >= 70)) count++;
    return count;
  }, [completedLessonsCount, masteredVocabCount, streakDays, attempts]);
  const totalAchievements = 12;

  // Recently completed lessons
  const recentCompletedLessons = useMemo(() => {
    const list = Object.entries(lessonProgress)
      .filter(([_, p]) => p?.completed)
      .map(([id]) => storageService.getLessonById(id))
      .filter(Boolean)
      .slice(-3)
      .reverse();
    return list;
  }, [lessonProgress]);

  const sidebarLinks = [
    { to: '/dashboard', label: 'Mening o‘quvim', icon: GraduationCap, active: true },
    { to: '/courses', label: 'Darslar', icon: Layers, active: false },
    { to: '/vocabulary', label: 'Lug‘at', icon: Bookmark, active: false },
    { to: '/grammar', label: 'Grammatika', icon: FileText, active: false },
    { to: '/listening', label: 'Tinglab tushunish', icon: Headphones, active: false },
    { to: '/certificate-tests', label: 'Testlar', icon: Award, active: false },
    { to: '/profile', label: 'Yutuqlar va Profil', icon: Trophy, active: false },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* ============================================================ */}
        {/* LEFT SIDEBAR: Student Quick Panel                            */}
        {/* ============================================================ */}
        <aside className="hidden lg:block lg:col-span-3 bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-6 sticky top-20">
          
          {/* Student Profile Quick Card */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 flex items-center space-x-3">
            <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-base shadow-soft">
              {userName.charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-bold text-slate-900 dark:text-white truncate">
                {userName}
              </div>
              <div className="flex items-center space-x-1.5 mt-0.5">
                <LevelBadge code={currentLevelCode} className="text-[10px] py-0 px-2" />
                <span className="text-[11px] text-slate-400 font-medium">O‘quvchi</span>
              </div>
            </div>
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

          {/* Daily Pedagogical German Tip (Tages-Tipp) */}
          <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/30 p-4 border border-amber-200/80 dark:border-amber-800/60 text-slate-900 dark:text-slate-100 shadow-2xs space-y-2">
            <div className="flex items-center space-x-2 text-amber-700 dark:text-amber-400">
              <Lightbulb size={16} className="fill-amber-400" />
              <span className="text-xs font-bold uppercase tracking-wider">Kunlik qoida</span>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              Nemis tilida barcha ot so‘zlar (Nomen) gapning qayerida kelishidan qat‘i nazar har doim <strong>KATTA</strong> harf bilan yoziladi.
            </p>
          </div>
        </aside>

        {/* ============================================================ */}
        {/* MAIN DASHBOARD CONTENT AREA                                 */}
        {/* ============================================================ */}
        <main className="lg:col-span-9 space-y-6">
          
          {/* Header Row: Welcome Title & Streak Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight flex items-center gap-2 font-display">
                <span>Xush kelibsiz, {userName}!</span>
                <span className="text-2xl" role="img" aria-label="Salom">👋</span>
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
              {/* App icon badge */}
              <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center flex-shrink-0">
                <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-soft">
                  <Play size={16} className="fill-white ml-0.5" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Umumiy o‘zlashtirish
                </div>
                <div className="text-lg font-black text-blue-600 dark:text-blue-400">
                  {currentLevel?.cefrLevel || currentLevelCode.toUpperCase()} darajasi
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
              to={todayLessonLink}
              className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-soft hover:shadow-card transition-all duration-200 inline-flex items-center justify-center space-x-2 cursor-pointer self-start md:self-center"
            >
              <span>Darsni davom ettirish</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* ============================================================ */}
          {/* 4 Stat Metric Cards Row (Real Data)                         */}
          {/* ============================================================ */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* 1. O'rganilgan so'zlar */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                <BookOpen size={18} />
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Yodlangan so‘zlar
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
                <CheckCircle2 size={18} className="text-emerald-600 dark:text-emerald-400" />
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
                O‘rtacha test bali
              </div>
              <div className="mt-1">
                <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tabular-nums">
                  {testScorePercent > 0 ? `${testScorePercent}%` : '—'}
                </span>
              </div>
            </div>

            {/* 4. Yutuqlar */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3">
                <Trophy size={18} />
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Yutuq nishonlari
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
            
            {/* Left Card: "Bugungi tavsiya etilgan dars" */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-2xs flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white mb-4">
                  Navbatdagi dars
                </h3>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="space-y-1.5 flex-1">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-blue-600 text-white text-[11px] font-bold">
                      {todayLessonLevel}
                    </span>
                    <h4 className="text-lg font-black text-slate-900 dark:text-white line-clamp-1">
                      {todayLessonTitle}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                      {todayLessonSubtitle}
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 pt-1">
                      {todayLessonDuration} daqiqa • 9 ta bosqich
                    </p>
                  </div>

                  {/* Thumbnail illustration */}
                  <div className="w-32 h-24 rounded-2xl overflow-hidden shadow-inner flex-shrink-0 bg-slate-100 dark:bg-slate-800 relative">
                    <img
                      src="/images/brandenburg-gate.jpg"
                      alt={todayLessonTitle}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-900/10" />
                  </div>
                </div>
              </div>

              <Link
                to={todayLessonLink}
                className="mt-6 w-full sm:w-auto px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-soft transition flex items-center justify-center space-x-2 self-start"
              >
                <span>Darsga o‘tish</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Right Card: "So'nggi faollik" */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
                    So‘nggi natijalar
                  </h3>
                  <Link
                    to="/profile"
                    className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Barchasini ko‘rish
                  </Link>
                </div>

                <div className="space-y-3">
                  {recentCompletedLessons.length > 0 ? (
                    recentCompletedLessons.map((les) => (
                      <div key={les!.id} className="flex items-center space-x-3">
                        <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 size={16} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                            {les!.titleDe} tugallandi
                          </div>
                          <div className="text-[11px] text-slate-400">
                            {les!.levelCode.toUpperCase()} bosqichi
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="flex items-center space-x-3">
                        <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                          <BookOpen size={16} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                            Platformaga xush kelibsiz!
                          </div>
                          <div className="text-[11px] text-slate-400">
                            O‘quv yo‘lingizni boshlang
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center flex-shrink-0">
                          <Sparkles size={16} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                            Kunlik vazifalar faol
                          </div>
                          <div className="text-[11px] text-slate-400">
                            Har kuni kamida 1 ta dars
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {attempts.length > 0 && (
                    <div className="flex items-center space-x-3 pt-1 border-t border-slate-100 dark:border-slate-800">
                      <div className="w-9 h-9 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center flex-shrink-0">
                        <BarChart3 size={16} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                          Oxirgi test natijasi: {attempts[attempts.length - 1].percentage}%
                        </div>
                        <div className="text-[11px] text-slate-400">
                          {attempts[attempts.length - 1].levelCode.toUpperCase()} sertifikat sinovi
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-4 mt-2">
                <Link
                  to="/courses"
                  className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center space-x-1"
                >
                  <span>Barcha darslar ro‘yxati</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

          </div>

        </main>

      </div>
    </div>
  );
};
