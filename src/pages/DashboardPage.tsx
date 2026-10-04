import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import { storageService } from '../lib/storage';
import { ProgressBar } from '../components/common/ProgressBar';
import { LevelBadge } from '../components/common/Badge';
import { 
  Play, 
  Flame, 
  Target, 
  Award, 
  Bookmark, 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp
} from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const { 
    completedLessonsCount, 
    masteredVocabCount, 
    getLevelProgress, 
    getNextIncompleteLesson 
  } = useProgress();
  const navigate = useNavigate();

  const currentLevelCode = user?.currentLevel || 'a1-1';
  const levelProgress = getLevelProgress(currentLevelCode);
  const nextLesson = getNextIncompleteLesson();
  const allVocab = storageService.getAllVocabulary();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-blue-200">
              <span>Xush kelibsiz!</span>
              <span>•</span>
              <span>Kunlik maqsad: 20 daqiqa</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Assalomu alaykum, {user?.name || 'Talaba'}!
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Nemis tilini o‘rganish yo‘lingizda ajoyib natijalar ko‘rsatyapsiz. Bugun ham yangi bilimlarni egallash vaqti keldi!
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
        <div className="bg-white rounded-3xl border border-brand-200 p-6 sm:p-8 shadow-card flex flex-col md:flex-row md:items-center justify-between gap-6 ring-1 ring-brand-100">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-2.5 py-0.5 rounded-full">
                Davom ettirish
              </span>
              <LevelBadge code={nextLesson.levelCode} />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {nextLesson.titleDe} — {nextLesson.titleUz}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              {nextLesson.descriptionUz || 'Darsni boshlab, yangi so‘zlar va mashqlarni yakunlang.'}
            </p>
          </div>

          <button
            onClick={() => navigate(`/courses/${nextLesson.levelCode}/lesson/${nextLesson.id}`)}
            className="px-8 py-4 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm sm:text-base shadow-glow transition flex items-center justify-center space-x-2 flex-shrink-0"
          >
            <Play size={18} className="fill-current" />
            <span>Darsni davom ettirish</span>
          </button>
        </div>
      )}

      {/* Progress & Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Level Progress */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Hozirgi Bosqich</span>
            <LevelBadge code={currentLevelCode} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">A1.1 Boshlang‘ich</h3>
            <p className="text-xs text-slate-500 mt-0.5">Umumiy o‘zlashtirish ko‘rsatkichi</p>
          </div>
          <ProgressBar progress={levelProgress} size="md" />
          <Link to={`/levels/${currentLevelCode}`} className="text-xs font-bold text-brand-600 hover:underline flex items-center">
            <span>Barcha darslar ro‘yxati</span>
            <ArrowRight size={13} className="ml-1" />
          </Link>
        </div>

        {/* Vocabulary Progress */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Lug‘at Boyligi</span>
            <Bookmark size={18} className="text-brand-600" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-slate-900">
              {masteredVocabCount} <span className="text-sm font-normal text-slate-500">/ {allVocab.length} ta</span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">To‘liq yodlangan so‘zlar</p>
          </div>
          <ProgressBar progress={(masteredVocabCount / (allVocab.length || 1)) * 100} size="md" color="emerald" />
          <Link to="/vocabulary" className="text-xs font-bold text-emerald-600 hover:underline flex items-center">
            <span>Flashcardlar orqali takrorlash</span>
            <ArrowRight size={13} className="ml-1" />
          </Link>
        </div>

        {/* Completed Lessons */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tugatilgan Darslar</span>
            <CheckCircle2 size={18} className="text-blue-600" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-slate-900">
              {completedLessonsCount} <span className="text-sm font-normal text-slate-500">/ 15 ta faol dars</span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">Topshirilgan mashqlar va testlar</p>
          </div>
          <ProgressBar progress={(completedLessonsCount / 15) * 100} size="md" color="brand" />
          <Link to="/courses" className="text-xs font-bold text-brand-600 hover:underline flex items-center">
            <span>O‘quv xaritasini ko‘rish</span>
            <ArrowRight size={13} className="ml-1" />
          </Link>
        </div>
      </div>

      {/* Quick Launchpad to Tools */}
      <div>
        <h3 className="text-lg font-bold text-slate-900 mb-4">
          Tezkor o‘quv bo‘limlari
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Link
            to="/shadowing"
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-brand-300 hover:shadow-card transition flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-3">
              <Flame size={20} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Shadowing</h4>
              <p className="text-xs text-slate-500 mt-0.5">Talaffuz va so‘zlashuv</p>
            </div>
          </Link>

          <Link
            to="/vocabulary"
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-brand-300 hover:shadow-card transition flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
              <Bookmark size={20} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Lug‘at</h4>
              <p className="text-xs text-slate-500 mt-0.5">Flashcardlar bilan</p>
            </div>
          </Link>

          <Link
            to="/grammar"
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-brand-300 hover:shadow-card transition flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
              <BookOpen size={20} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Grammatika</h4>
              <p className="text-xs text-slate-500 mt-0.5">Qoidalar va jadvallar</p>
            </div>
          </Link>

          <Link
            to="/listening"
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-brand-300 hover:shadow-card transition flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
              <Clock size={20} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Listening</h4>
              <p className="text-xs text-slate-500 mt-0.5">Audio dialoglar</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
