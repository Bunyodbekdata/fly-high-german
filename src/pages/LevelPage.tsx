import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { storageService } from '../lib/storage';
import { useProgress } from '../context/ProgressContext';
import { LevelBadge } from '../components/common/Badge';
import { ProgressBar } from '../components/common/ProgressBar';
import { MODULE_REVIEWS } from '../lib/seedReviewsData';
import { ModuleReviewModal } from '../components/modals/ModuleReviewModal';
import { AbschlussTestModal } from '../components/modals/AbschlussTestModal';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  BookOpen, 
  Bookmark, 
  FileText, 
  Headphones, 
  Mic, 
  PenTool, 
  Play,
  Lock,
  Sparkles,
  Award,
  GraduationCap,
  MapPin,
  LayoutList,
  Star,
  Check,
  Flag
} from 'lucide-react';
import { CEFRLevelCode } from '../types/database';

export const LevelPage: React.FC = () => {
  const { levelCode } = useParams<{ levelCode: string }>();
  const navigate = useNavigate();
  const { getLevelProgress, isLessonCompleted } = useProgress();

  const [viewMode, setViewMode] = useState<'roadmap' | 'grid'>('roadmap');
  const [selectedModuleReview, setSelectedModuleReview] = useState<string | null>(null);
  const [isAbschlussTestOpen, setIsAbschlussTestOpen] = useState(false);

  const code = (levelCode || 'a1-1') as CEFRLevelCode;
  const level = storageService.getLevelByCode(code);
  const isA1 = code === 'a1-1' || code === 'a1-2';

  if (!level) {
    return (
      <div className="max-w-4xl mx-auto py-16 text-center">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white">Bosqich topilmadi</h2>
        <Link to="/courses" className="text-brand-600 dark:text-brand-400 underline mt-4 inline-block">
          Barcha kurslarga qaytish
        </Link>
      </div>
    );
  }

  // If level is not A1.1 or A1.2, show the "Tez orada" locked page
  if (!isA1 || level.isComingSoon) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto shadow-sm">
          <Lock size={36} />
        </div>
        <div>
          <span className="text-xs uppercase font-extrabold tracking-widest text-amber-700 dark:text-amber-400 bg-amber-100/60 dark:bg-amber-950/60 px-3 py-1 rounded-full border border-amber-300 dark:border-amber-800">
            Tez orada taqdim etiladi
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-3">
            {level.title}
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto mt-2 leading-relaxed">
            Biz "Sifat sonidan ustun" tamoyiliga amal qilamiz. Hozirda platforma <strong>A1.1</strong> va <strong>A1.2</strong> boshlang‘ich bosqichlarini Goethe-Institut va xalqaro CEFR darsliklari metodikasi asosida taqdim etmoqda.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-left space-y-3 shadow-sm max-w-md mx-auto">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
            Tavsiya etilgan o‘quv rejasi:
          </span>
          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            A2 yoki B1 darajalariga o‘tishdan oldin, A1.1 va A1.2 darslari, fonetika xonasi va yakuniy imtihonlarni to‘liq yakunlashni qat‘iy tavsiya qilamiz.
          </p>
          <div className="pt-2">
            <Link
              to="/levels/a1-1"
              className="w-full py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs flex items-center justify-center space-x-2 transition"
            >
              <span>A1.1 bosqichiga o‘tish</span>
            </Link>
          </div>
        </div>

        <div>
          <button
            onClick={() => navigate('/courses')}
            className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400"
          >
            ← Barcha kurslarga qaytish
          </button>
        </div>
      </div>
    );
  }

  const modules = storageService.getModules(level.id);
  const allLessons = storageService.getLessons(undefined, code);
  const progress = getLevelProgress(code);

  // Statistics for this level
  const totalVocabulary = allLessons.reduce((acc, l) => acc + (l.vocabulary?.length || 0), 0);
  const totalGrammar = allLessons.reduce((acc, l) => acc + (l.grammar?.length || 0), 0);
  const totalListening = allLessons.reduce((acc, l) => acc + (l.listening3Stage ? 1 : (l.listening?.length || 0)), 0);
  const totalReading = allLessons.reduce((acc, l) => acc + (l.reading?.length || 0), 0);
  const totalWriting = allLessons.reduce((acc, l) => acc + (l.writingScaffold ? 1 : (l.writing?.length || 0)), 0);
  const totalShadowing = allLessons.reduce((acc, l) => acc + (l.shadowing?.length || 0), 0);

  // Find first uncompleted lesson for active highlighting
  const firstUncompletedId = allLessons.find(l => !isLessonCompleted(l.id))?.id || allLessons[0]?.id;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 transition-colors duration-200">
      {/* Back button */}
      <div>
        <button
          onClick={() => navigate('/courses')}
          className="inline-flex items-center text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition"
        >
          <ArrowLeft size={14} className="mr-1" />
          Barcha bosqichlarga qaytish
        </button>
      </div>

      {/* Level Header Card */}
      <div className="bg-white dark:bg-slate-800/90 rounded-3xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8 shadow-card">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-700">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <LevelBadge code={level.code} />
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
                Taxminan {level.estimatedHours} soat ta‘lim
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {level.title}
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {level.descriptionUz}
            </p>
          </div>

          <div className="w-full lg:w-72 bg-slate-50 dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-700">
            <ProgressBar
              progress={progress}
              label="O‘zlashtirish ko‘rsatkichi"
              size="md"
            />
          </div>
        </div>

        {/* Level Skill Metrics Counters */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 pt-6 text-center">
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800">
            <Bookmark size={18} className="mx-auto text-brand-600 dark:text-brand-400 mb-1" />
            <div className="text-base font-extrabold text-slate-900 dark:text-white">{totalVocabulary || 60}+</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">So‘zlar</div>
          </div>
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800">
            <FileText size={18} className="mx-auto text-emerald-600 dark:text-emerald-400 mb-1" />
            <div className="text-base font-extrabold text-slate-900 dark:text-white">{totalGrammar || 15}</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">Grammatika</div>
          </div>
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800">
            <Headphones size={18} className="mx-auto text-blue-600 dark:text-blue-400 mb-1" />
            <div className="text-base font-extrabold text-slate-900 dark:text-white">{totalListening || 15}</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">Listening</div>
          </div>
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800">
            <BookOpen size={18} className="mx-auto text-amber-600 dark:text-amber-400 mb-1" />
            <div className="text-base font-extrabold text-slate-900 dark:text-white">{totalReading || 15}</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">Reading</div>
          </div>
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800">
            <PenTool size={18} className="mx-auto text-purple-600 dark:text-purple-400 mb-1" />
            <div className="text-base font-extrabold text-slate-900 dark:text-white">{totalWriting || 15}</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">Writing</div>
          </div>
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800">
            <Mic size={18} className="mx-auto text-rose-600 dark:text-rose-400 mb-1" />
            <div className="text-base font-extrabold text-slate-900 dark:text-white">{totalShadowing || 35}+</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">Shadowing</div>
          </div>
        </div>
      </div>

      {/* View Mode Switcher Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Darslar o‘quv xaritasi
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {modules.length} ta modul, {allLessons.length} ta interaktiv dars
          </p>
        </div>

        {/* Mode Toggle: Interactive Roadmap vs Classic List */}
        <div className="flex items-center space-x-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl border border-slate-200 dark:border-slate-700 self-start sm:self-auto">
          <button
            onClick={() => setViewMode('roadmap')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
              viewMode === 'roadmap'
                ? 'bg-brand-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            <MapPin size={14} />
            <span>O‘quv Yo‘lagi</span>
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
              viewMode === 'grid'
                ? 'bg-brand-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            <LayoutList size={14} />
            <span>Klassik Ro‘yxat</span>
          </button>
        </div>
      </div>

      {/* VIEW MODE 1: DUOLINGO-STYLE INTERACTIVE LEARNING ROADMAP */}
      {viewMode === 'roadmap' && (
        <div className="space-y-12 py-2">
          {modules.map((mod, modIdx) => {
            const moduleLessons = allLessons.filter(l => l.moduleId === mod.id);
            const reviewData = MODULE_REVIEWS[mod.id];
            const allModCompleted = moduleLessons.every(l => isLessonCompleted(l.id));

            return (
              <div key={mod.id} className="relative">
                {/* Module Island Header */}
                <div className="mb-6 p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-brand-600 via-indigo-600 to-blue-700 text-white shadow-card flex items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-blue-200 uppercase tracking-wider block mb-0.5">
                      {mod.titleUz}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black">
                      {mod.titleDe}
                    </h3>
                    <p className="text-xs text-blue-100 mt-1 max-w-xl">
                      {mod.descriptionUz}
                    </p>
                  </div>
                  <div className="hidden sm:flex flex-col items-end flex-shrink-0">
                    <span className="text-xs font-bold text-blue-200">
                      {moduleLessons.filter(l => isLessonCompleted(l.id)).length} / {moduleLessons.length} dars
                    </span>
                    {allModCompleted && (
                      <span className="text-[11px] font-bold text-emerald-300 bg-emerald-950/40 px-2.5 py-0.5 rounded-full border border-emerald-500/40 mt-1 flex items-center">
                        <Check size={11} className="mr-1" /> Modul yakunlandi
                      </span>
                    )}
                  </div>
                </div>

                {/* Milestone Nodes Along a Connected Path */}
                <div className="relative pl-6 sm:pl-10 space-y-6 before:content-[''] before:absolute before:left-12 sm:before:left-16 before:top-4 before:bottom-4 before:w-1 before:bg-gradient-to-b before:from-brand-300 before:via-indigo-300 before:to-emerald-300 dark:before:from-brand-800 dark:before:via-indigo-900 dark:before:to-emerald-800 before:rounded-full">
                  {moduleLessons.map((lesson, lessonIdx) => {
                    const completed = isLessonCompleted(lesson.id);
                    const isCurrent = lesson.id === firstUncompletedId;

                    return (
                      <div key={lesson.id} className="relative flex items-center space-x-4 sm:space-x-6 group">
                        {/* Interactive Node Circle */}
                        <div
                          className={`relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center font-black text-sm sm:text-base flex-shrink-0 transition-all duration-300 shadow-md ${
                            completed
                              ? 'bg-emerald-500 text-white ring-4 ring-emerald-100 dark:ring-emerald-950/70'
                              : isCurrent
                              ? 'bg-brand-600 text-white ring-4 ring-brand-300 dark:ring-brand-800 scale-105 shadow-glow'
                              : 'bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 group-hover:border-brand-400'
                          }`}
                        >
                          {completed ? (
                            <CheckCircle2 size={24} className="stroke-[2.5]" />
                          ) : isCurrent ? (
                            <Play size={20} className="fill-current ml-0.5" />
                          ) : (
                            <span>{lesson.orderIndex}</span>
                          )}
                        </div>

                        {/* Lesson Card */}
                        <div
                          className={`flex-1 p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                            isCurrent
                              ? 'bg-white dark:bg-slate-800 border-brand-400 dark:border-brand-600 shadow-card ring-1 ring-brand-200 dark:ring-brand-800'
                              : completed
                              ? 'bg-white/90 dark:bg-slate-800/70 border-emerald-200 dark:border-emerald-900/60 hover:border-emerald-300'
                              : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:border-brand-300'
                          }`}
                        >
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              <span className="text-[11px] font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider font-mono">
                                Lektion {lesson.orderIndex}
                              </span>
                              <span className="text-[11px] text-slate-400 flex items-center">
                                <Clock size={11} className="mr-0.5" />
                                {lesson.estimatedMinutes} daq
                              </span>
                              <span className="text-[10px] font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded-md border border-indigo-200 dark:border-indigo-800">
                                9 ta bosqich
                              </span>
                            </div>

                            <h4 className="text-base font-extrabold text-slate-900 dark:text-white">
                              {lesson.titleDe}
                            </h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              {lesson.titleUz}
                            </p>
                          </div>

                          <Link
                            to={`/courses/${lesson.levelCode}/lesson/${lesson.id}`}
                            className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 transition self-start sm:self-auto flex-shrink-0 shadow-xs ${
                              isCurrent
                                ? 'bg-brand-600 hover:bg-brand-700 text-white'
                                : completed
                                ? 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600'
                                : 'bg-slate-900 dark:bg-slate-700 hover:bg-black text-white'
                            }`}
                          >
                            <Play size={12} className="fill-current" />
                            <span>{completed ? 'Qayta o‘tish' : isCurrent ? 'Davom etish' : 'Boshlash'}</span>
                          </Link>
                        </div>
                      </div>
                    );
                  })}

                  {/* Module Checkpoint Test Node */}
                  {reviewData && (
                    <div className="relative flex items-center space-x-4 sm:space-x-6 pt-2">
                      <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-md ring-4 ring-amber-100 dark:ring-amber-950/60 flex-shrink-0">
                        <Flag size={20} className="fill-current" />
                      </div>

                      <div className="flex-1 p-4 rounded-2xl bg-gradient-to-r from-amber-50/70 to-orange-50/70 dark:from-amber-950/30 dark:to-orange-950/30 border border-amber-200 dark:border-amber-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                          <span className="text-[11px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider block">
                            Modul Yakuniy Nazorati
                          </span>
                          <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                            {mod.titleDe}: Takrorlash va Mini-Test
                          </h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                            Ushbu modulda o‘tilgan barcha mavzularni mustahkamlovchi test
                          </p>
                        </div>

                        <button
                          onClick={() => setSelectedModuleReview(mod.id)}
                          className="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs transition flex items-center space-x-1.5 self-start sm:self-auto flex-shrink-0"
                        >
                          <Sparkles size={13} />
                          <span>Mini-Testni topshirish</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Level Final Exam Trophy Checkpoint */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border border-indigo-500/40 text-white shadow-2xl text-center relative overflow-hidden">
            <div className="w-16 h-16 rounded-3xl bg-amber-400 text-slate-950 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Award size={36} />
            </div>
            <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-amber-400 block mb-1">
              Rasmiy Formatdagi Yakuniy Sinov
            </span>
            <h3 className="text-2xl sm:text-3xl font-black">
              {level.title}: Goethe-Zertifikat A1 Abschluss-Test
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mt-2 leading-relaxed">
              Barcha 4 ta modul va 12 ta darsni tugatgach, Gyote Instituti rasmiy formatidagi 20 savolli yakuniy imtihonni topshiring va bilimingizni tasdiqlang.
            </p>
            <div className="pt-6">
              <button
                onClick={() => setIsAbschlussTestOpen(true)}
                className="px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-sm sm:text-base shadow-glow transition inline-flex items-center space-x-2"
              >
                <Award size={18} />
                <span>Yakuniy Imtihonni Topshirish</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIEW MODE 2: CLASSIC MODULES GRID */}
      {viewMode === 'grid' && (
        <div className="space-y-6">
          {modules.map((mod) => {
            const moduleLessons = allLessons.filter(l => l.moduleId === mod.id);
            const reviewData = MODULE_REVIEWS[mod.id];

            return (
              <div
                key={mod.id}
                className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm"
              >
                {/* Module Header */}
                <div className="p-5 sm:p-6 bg-slate-50/70 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-700">
                  <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider block mb-1">
                    {mod.titleUz}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {mod.titleDe}
                  </h3>
                  {mod.descriptionUz && (
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                      {mod.descriptionUz}
                    </p>
                  )}
                </div>

                {/* Module's Lessons List */}
                <div className="divide-y divide-slate-100 dark:divide-slate-700/60">
                  {moduleLessons.map((lesson) => {
                    const completed = isLessonCompleted(lesson.id);

                    return (
                      <div
                        key={lesson.id}
                        className="p-4 sm:p-5 flex items-center justify-between hover:bg-slate-50/70 dark:hover:bg-slate-700/40 transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            completed
                              ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400'
                              : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                          }`}>
                            {completed ? (
                              <CheckCircle2 size={18} />
                            ) : (
                              <span className="text-xs font-bold font-mono">
                                {lesson.orderIndex}
                              </span>
                            )}
                          </div>

                          <div>
                            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition">
                              <Link to={`/courses/${lesson.levelCode}/lesson/${lesson.id}`}>
                                {lesson.titleDe}
                              </Link>
                            </h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                              {lesson.titleUz}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <span className="hidden sm:flex items-center text-xs text-slate-400 dark:text-slate-500">
                            <Clock size={12} className="mr-1" />
                            {lesson.estimatedMinutes} daq
                          </span>

                          <Link
                            to={`/courses/${lesson.levelCode}/lesson/${lesson.id}`}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 shadow-2xs ${
                              completed
                                ? 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600'
                                : 'bg-brand-600 hover:bg-brand-700 text-white'
                            }`}
                          >
                            <Play size={12} className="fill-current" />
                            <span>{completed ? 'Qayta ko‘rish' : 'Boshlash'}</span>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Module Review & Mini-Test Footer Button */}
                {reviewData && (
                  <div className="p-4 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-slate-900/60 dark:to-indigo-950/40 border-t border-slate-200/80 dark:border-slate-700 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Sparkles size={16} className="text-indigo-600 dark:text-indigo-400" />
                      <span className="text-xs font-bold text-indigo-900 dark:text-indigo-200">
                        {mod.titleDe}: Xulosa va Mini-Test
                      </span>
                    </div>

                    <button
                      onClick={() => setSelectedModuleReview(mod.id)}
                      className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-2xs transition"
                    >
                      Takrorlash & Test
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Module Review Modal */}
      {selectedModuleReview && MODULE_REVIEWS[selectedModuleReview] && (
        <ModuleReviewModal
          reviewData={MODULE_REVIEWS[selectedModuleReview]}
          isOpen={!!selectedModuleReview}
          onClose={() => setSelectedModuleReview(null)}
        />
      )}

      {/* Level Final Exam Modal */}
      {isAbschlussTestOpen && (
        <AbschlussTestModal
          levelCode={code}
          isOpen={isAbschlussTestOpen}
          onClose={() => setIsAbschlussTestOpen(false)}
        />
      )}
    </div>
  );
};
