import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import { storageService } from '../lib/storage';
import { LevelBadge } from '../components/common/Badge';
import { ProgressBar } from '../components/common/ProgressBar';
import { 
  Flame, 
  Award, 
  BookOpen, 
  Bookmark, 
  Clock, 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  Sparkles,
  Trophy,
  Zap,
  Target
} from 'lucide-react';
import { CEFRLevelCode } from '../types/database';
import { getRankByXp, computeAchievements } from '../lib/gamification';
import { AchievementBadges } from '../components/common/AchievementBadges';

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

  const allLessons = storageService.getLessons();
  const allVocab = storageService.getAllVocabulary();

  const currentLevelCode: CEFRLevelCode = 'a1-1';
  const levelProgress = getLevelProgress(currentLevelCode);
  const nextLesson = getNextIncompleteLesson() || storageService.getLessonById('les-1');

  const xp = user?.xpPoints ?? 0;
  const streak = user?.streakDays ?? 0;
  const hasStarted = xp > 0 || completedLessonsCount > 0;

  const { currentRank, nextRank, progressPercent, xpToNext } = getRankByXp(xp);
  const badges = computeAchievements({
    xpPoints: xp,
    streakDays: streak,
    completedLessonsCount,
    masteredVocabCount,
    lessonProgress
  });

  const dailyGoalMinutes = user?.dailyGoalMinutes || 20;
  // Compute approximate minutes completed today based on completed steps or 15 mins per completed lesson
  const estimatedTodayMinutes = Math.min(dailyGoalMinutes, (hasStarted ? 15 : 0) + (streak > 0 ? 5 : 0));
  const dailyProgressPercent = Math.min(100, Math.round((estimatedTodayMinutes / dailyGoalMinutes) * 100));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 transition-colors duration-200">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-slate-900 text-white p-8 sm:p-10 shadow-soft border border-slate-800">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-caption font-medium text-slate-200 backdrop-blur-md">
              <span>{currentRank.badge} {currentRank.titleUz}</span>
              <span>•</span>
              <span>Kunlik maqsad: {dailyGoalMinutes} daqiqa</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Assalomu alaykum, {user?.name || 'Talaba'}!
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {hasStarted
                ? 'Nemis tilini o‘rganish yo‘lingizda ajoyib natijalar ko‘rsatyapsiz. Bugun ham yangi bilimlarni egallash vaqti keldi!'
                : 'Nemis tilini 0 dan A1 darajagacha o‘rganish safaringizga xush kelibsiz! Bugun 1-darsni boshlab, ilk tajriba (XP) ballaringizni to‘plang.'}
            </p>
          </div>

          {/* Quick Streak & XP Badges */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center min-w-[95px]">
              <Flame size={24} className="mx-auto text-amber-400 fill-amber-400 animate-pulse mb-1" />
              <div className="text-xl font-black">{streak} kun</div>
              <div className="text-[11px] text-slate-300 font-medium">Silsila</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center min-w-[95px]">
              <Award size={24} className="mx-auto text-emerald-400 mb-1" />
              <div className="text-xl font-black">{xp} XP</div>
              <div className="text-[11px] text-slate-300 font-medium">Tajriba</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center min-w-[95px] hidden sm:block">
              <span className="text-2xl block mb-1">{currentRank.badge}</span>
              <div className="text-xs font-bold truncate max-w-[85px]">{currentRank.titleDe}</div>
              <div className="text-[11px] text-slate-300 font-medium">{currentRank.tier}-Rutba</div>
            </div>
          </div>
        </div>
      </div>

      {/* Gamified Level & Rank Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-soft space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-50 dark:bg-brand-950/60 border border-brand-100 dark:border-brand-900/50 flex items-center justify-center text-2xl shadow-xs">
              <span>{currentRank.badge}</span>
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                O‘quvchi rutbasi (Tier {currentRank.tier})
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {currentRank.titleUz} ({currentRank.titleDe})
              </h3>
            </div>
          </div>

          {nextRank && (
            <div className="text-xs text-slate-500 dark:text-slate-400 sm:text-right">
              Keyingi darajagacha: <strong className="text-brand-600 dark:text-brand-400">+{xpToNext} XP</strong> kerak ({nextRank.badge} {nextRank.titleUz})
            </div>
          )}
        </div>

        <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-600 transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Continue Learning Prominent Card */}
      {nextLesson && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-brand-200 dark:border-brand-800/80 p-6 sm:p-8 shadow-soft flex flex-col md:flex-row md:items-center justify-between gap-6 ring-1 ring-brand-100 dark:ring-brand-900/30">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 px-2.5 py-0.5 rounded-full border border-brand-200/60 dark:border-brand-800/60">
                {hasStarted ? 'Davom ettirish' : 'Tavsiya etilgan dars'}
              </span>
              <LevelBadge code={nextLesson.levelCode} />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {nextLesson.titleDe} — {nextLesson.titleUz}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {nextLesson.descriptionUz || 'Darsni boshlab, yangi so‘zlar va mashqlarni yakunlang.'}
            </p>
          </div>

          <button
            onClick={() => navigate(`/courses/${nextLesson.levelCode}/lesson/${nextLesson.id}`)}
            className="px-8 py-4 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm sm:text-base shadow-soft transition flex items-center justify-center space-x-2 flex-shrink-0 active:scale-95"
          >
            <Play size={18} className="fill-current" />
            <span>{hasStarted ? 'Darsni davom ettirish' : 'Darsni boshlash'}</span>
          </button>
        </div>
      )}

      {/* Progress & Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Level Progress */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-soft space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Hozirgi Bosqich</span>
            <LevelBadge code={currentLevelCode} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">A1.1 Boshlang‘ich</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Umumiy o‘zlashtirish ko‘rsatkichi</p>
          </div>
          <ProgressBar progress={levelProgress} size="md" />
          <Link to={`/levels/${currentLevelCode}`} className="text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline flex items-center">
            <span>Barcha darslar ro‘yxati</span>
            <ArrowRight size={13} className="ml-1" />
          </Link>
        </div>

        {/* Vocabulary Progress */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-soft space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Lug‘at Boyligi</span>
            <Bookmark size={18} className="text-brand-600 dark:text-brand-400" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {masteredVocabCount} <span className="text-sm font-normal text-slate-500 dark:text-slate-400">/ {allVocab.length} ta</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">To‘liq yodlangan so‘zlar</p>
          </div>
          <ProgressBar progress={(masteredVocabCount / (allVocab.length || 1)) * 100} size="md" color="emerald" />
          <Link to="/vocabulary" className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center">
            <span>Flashcardlar orqali takrorlash</span>
            <ArrowRight size={13} className="ml-1" />
          </Link>
        </div>

        {/* Completed Lessons */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-soft space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tugatilgan Darslar</span>
            <CheckCircle2 size={18} className="text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {completedLessonsCount} <span className="text-sm font-normal text-slate-500 dark:text-slate-400">/ {allLessons.length} ta faol dars</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Topshirilgan mashqlar va testlar</p>
          </div>
          <ProgressBar progress={(completedLessonsCount / (allLessons.length || 1)) * 100} size="md" color="brand" />
          <Link to="/courses" className="text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline flex items-center">
            <span>O‘quv xaritasini ko‘rish</span>
            <ArrowRight size={13} className="ml-1" />
          </Link>
        </div>
      </div>

      {/* Achievement Badges Showcase in Dashboard */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-soft">
        <AchievementBadges badges={badges} compact />
      </div>

      {/* Certificate Assessment Progress Integration */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Award size={20} className="text-amber-500" />
              <span>Sertifikat Testlari (Assessments)</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              A1.1 va A1.2 darajalari bo‘yicha olingan natijalar va rasmiy ichki sertifikatlar
            </p>
          </div>
          <Link
            to="/certificate-tests"
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black transition self-start shadow-xs"
          >
            <span>Barcha testlar</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* A1.1 Card */}
          {(() => {
            const a11 = storageService.getCertificateLevelStats('a1-1');
            return (
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-0.5 rounded-lg text-xs font-black bg-brand-600 text-white">
                      A1.1
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                      Goethe A1.1 Test (Lesen & Hören)
                    </h4>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    a11.isPassed 
                      ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300' 
                      : a11.attemptsCount > 0 
                        ? 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300' 
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}>
                    {a11.isPassed ? '✅ O‘tilgan' : a11.attemptsCount > 0 ? '❌ O‘tilmagan' : 'Topshirilmagan'}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-white dark:bg-slate-900 p-2 rounded-xl border border-slate-100 dark:border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Eng yaxshi</span>
                    <span className="font-black text-slate-800 dark:text-slate-200">
                      {a11.bestPercentage !== null ? `${a11.bestPercentage}%` : '—'}
                    </span>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-2 rounded-xl border border-slate-100 dark:border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Oxirgi</span>
                    <span className="font-black text-slate-800 dark:text-slate-200">
                      {a11.lastPercentage !== null ? `${a11.lastPercentage}%` : '—'}
                    </span>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-2 rounded-xl border border-slate-100 dark:border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Urinishlar</span>
                    <span className="font-black text-slate-800 dark:text-slate-200">
                      {a11.attemptsCount} ta
                    </span>
                  </div>
                </div>

                <div className="pt-1">
                  <Link
                    to="/certificate-tests/cert-test-a1-1"
                    className="w-full py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold text-center block transition shadow-xs"
                  >
                    {a11.attemptsCount > 0 ? 'Qayta topshirish' : 'Testni boshlash'}
                  </Link>
                </div>
              </div>
            );
          })()}

          {/* A1.2 Card */}
          {(() => {
            const a12 = storageService.getCertificateLevelStats('a1-2');
            return (
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-0.5 rounded-lg text-xs font-black bg-brand-600 text-white">
                      A1.2
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                      Goethe A1.2 Test (Lesen & Hören)
                    </h4>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    a12.isPassed 
                      ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300' 
                      : a12.attemptsCount > 0 
                        ? 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300' 
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}>
                    {a12.isPassed ? '✅ O‘tilgan' : a12.attemptsCount > 0 ? '❌ O‘tilmagan' : 'Topshirilmagan'}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-white dark:bg-slate-900 p-2 rounded-xl border border-slate-100 dark:border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Eng yaxshi</span>
                    <span className="font-black text-slate-800 dark:text-slate-200">
                      {a12.bestPercentage !== null ? `${a12.bestPercentage}%` : '—'}
                    </span>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-2 rounded-xl border border-slate-100 dark:border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Oxirgi</span>
                    <span className="font-black text-slate-800 dark:text-slate-200">
                      {a12.lastPercentage !== null ? `${a12.lastPercentage}%` : '—'}
                    </span>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-2 rounded-xl border border-slate-100 dark:border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Urinishlar</span>
                    <span className="font-black text-slate-800 dark:text-slate-200">
                      {a12.attemptsCount} ta
                    </span>
                  </div>
                </div>

                <div className="pt-1">
                  <Link
                    to="/certificate-tests/cert-test-a1-2"
                    className="w-full py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold text-center block transition shadow-xs"
                  >
                    {a12.attemptsCount > 0 ? 'Qayta topshirish' : 'Testni boshlash'}
                  </Link>
                </div>
              </div>
            );
          })()}
        </div>
      </div>

      {/* Quick Launchpad to Tools */}
      <div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
          Tezkor o‘quv bo‘limlari
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Link
            to="/shadowing"
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700 hover:shadow-soft transition flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-3">
              <Flame size={20} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">Shadowing</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Talaffuz va so‘zlashuv</p>
            </div>
          </Link>

          <Link
            to="/vocabulary"
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700 hover:shadow-soft transition flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
              <Bookmark size={20} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">Lug‘at</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">3D Flashcardlar bilan</p>
            </div>
          </Link>

          <Link
            to="/grammar"
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700 hover:shadow-soft transition flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
              <BookOpen size={20} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">Grammatika</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Qoidalar va jadvallar</p>
            </div>
          </Link>

          <Link
            to="/pronunciation"
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700 hover:shadow-soft transition flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3">
              <Clock size={20} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">Fonetika</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Talaffuz laboratoriyasi</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
