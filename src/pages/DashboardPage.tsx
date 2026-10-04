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
  HelpCircle,
  Compass
} from 'lucide-react';
import { CEFRLevelCode } from '../types/database';

export const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const { 
    completedLessonsCount, 
    getLevelProgress, 
    masteredVocabCount,
    getNextIncompleteLesson 
  } = useProgress();
  const navigate = useNavigate();

  const allLessons = storageService.getLessons();
  const allVocab = storageService.getAllVocabulary();

  const currentLevelCode: CEFRLevelCode = 'a1-1';
  const levelProgress = getLevelProgress(currentLevelCode);
  const nextLesson = getNextIncompleteLesson() || storageService.getLessonById('les-1');

  const hasStarted = (user?.xpPoints ?? 0) > 0 || completedLessonsCount > 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 transition-colors duration-200">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-brand-950 to-indigo-950 text-white p-8 sm:p-12 shadow-card border border-slate-800">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-blue-200 backdrop-blur-md">
              <span>Xush kelibsiz!</span>
              <span>•</span>
              <span>Kunlik maqsad: 20 daqiqa</span>
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
          <div className="flex items-center space-x-4">
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center min-w-[100px]">
              <Flame size={24} className="mx-auto text-amber-400 fill-amber-400 animate-pulse mb-1" />
              <div className="text-xl font-black">{user?.streakDays ?? 0} kun</div>
              <div className="text-[11px] text-slate-300">Silsila</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center min-w-[100px]">
              <Award size={24} className="mx-auto text-emerald-400 mb-1" />
              <div className="text-xl font-black">{user?.xpPoints ?? 0} XP</div>
              <div className="text-[11px] text-slate-300">Tajriba</div>
            </div>
          </div>
        </div>
      </div>

      {/* Continue Learning Prominent Card */}
      {nextLesson && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-brand-200 dark:border-brand-800/80 p-6 sm:p-8 shadow-card flex flex-col md:flex-row md:items-center justify-between gap-6 ring-1 ring-brand-100 dark:ring-brand-900/30">
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
            className="px-8 py-4 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm sm:text-base shadow-glow transition flex items-center justify-center space-x-2 flex-shrink-0 active:scale-95"
          >
            <Play size={18} className="fill-current" />
            <span>{hasStarted ? 'Darsni davom ettirish' : 'Darsni boshlash'}</span>
          </button>
        </div>
      )}

      {/* Progress & Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Level Progress */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
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
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
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
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
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

      {/* Quick Launchpad to Tools */}
      <div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
          Tezkor o‘quv bo‘limlari
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Link
            to="/shadowing"
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700 hover:shadow-card transition flex flex-col justify-between"
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
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700 hover:shadow-card transition flex flex-col justify-between"
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
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700 hover:shadow-card transition flex flex-col justify-between"
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
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700 hover:shadow-card transition flex flex-col justify-between"
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
