import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { storageService } from '../lib/storage';
import { useProgress } from '../context/ProgressContext';
import { 
  Play, 
  Lock, 
  ArrowRight, 
  Check, 
  BookOpen,
  Clock,
  MapPin
} from 'lucide-react';
import { CEFRLevelCode, Lesson } from '../types/database';

export const CoursesPage: React.FC = () => {
  const { getLevelProgress, isLessonCompleted } = useProgress();
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'a1' | 'a2' | 'b1'>('all');

  const rawLevels = useMemo(() => storageService.getLevels(), []);
  const allLessons = useMemo(() => storageService.getLessons(), []);

  // Style configurations per level code matching screenshot aesthetics
  const levelStyleMap: Record<string, {
    color: string;
    bgColor: string;
    progressBarColor: string;
    sublabel: string;
    category: 'a1' | 'a2' | 'b1';
  }> = {
    'a1-1': {
      color: 'text-emerald-600 dark:text-emerald-400',
      bgColor: 'bg-emerald-50/70 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800',
      progressBarColor: 'bg-emerald-500',
      sublabel: 'Boshlang‘ich',
      category: 'a1',
    },
    'a1-2': {
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50/80 dark:bg-blue-950/60 border-blue-400 dark:border-blue-600',
      progressBarColor: 'bg-blue-600',
      sublabel: 'Boshlang‘ich II',
      category: 'a1',
    },
    'a2-1': {
      color: 'text-amber-600 dark:text-amber-400',
      bgColor: 'bg-amber-50/70 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800',
      progressBarColor: 'bg-amber-500',
      sublabel: 'Asosiy I',
      category: 'a2',
    },
    'a2-2': {
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-50/70 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800',
      progressBarColor: 'bg-purple-500',
      sublabel: 'Asosiy II',
      category: 'a2',
    },
    'b1-1': {
      color: 'text-rose-600 dark:text-rose-400',
      bgColor: 'bg-rose-50/70 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800',
      progressBarColor: 'bg-rose-500',
      sublabel: 'O‘rta I',
      category: 'b1',
    },
    'b1-2': {
      color: 'text-indigo-600 dark:text-indigo-400',
      bgColor: 'bg-indigo-50/70 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-800',
      progressBarColor: 'bg-indigo-500',
      sublabel: 'O‘rta II',
      category: 'b1',
    },
  };

  // Build dynamic levels with real database lessons and dynamic range calculation
  const levels = useMemo(() => {
    return rawLevels.map((lvl) => {
      const lessons = allLessons.filter(l => l.levelCode === lvl.code);
      const completedCount = lessons.filter(l => isLessonCompleted(l.id)).length;
      const progressPercent = getLevelProgress(lvl.code);
      const meta = levelStyleMap[lvl.code] || {
        color: 'text-blue-600 dark:text-blue-400',
        bgColor: 'bg-blue-50 dark:bg-blue-950/40 border-blue-200',
        progressBarColor: 'bg-blue-600',
        sublabel: lvl.cefrLevel || lvl.code.toUpperCase(),
        category: lvl.code.startsWith('a1') ? 'a1' : lvl.code.startsWith('a2') ? 'a2' : 'b1',
      };

      // Calculate dynamic lesson range (e.g., 1–12-darslar)
      let range = `${lessons.length} ta dars`;
      if (lessons.length > 0) {
        const orderIndices = lessons.map(l => l.orderIndex).sort((a, b) => a - b);
        const minOrder = orderIndices[0];
        const maxOrder = orderIndices[orderIndices.length - 1];
        range = `${minOrder}–${maxOrder}-darslar`;
      }

      return {
        ...lvl,
        totalLessons: lessons.length,
        completedLessons: completedCount,
        progressPercent,
        range,
        ...meta,
      };
    });
  }, [rawLevels, allLessons, isLessonCompleted, getLevelProgress]);

  // Initial active level: first level or first incomplete
  const [activeLevelCode, setActiveLevelCode] = useState<CEFRLevelCode>(() => {
    return (rawLevels[0]?.code as CEFRLevelCode) || 'a1-1';
  });

  const filteredLevels = useMemo(() => {
    if (selectedFilter === 'all') return levels;
    return levels.filter(lvl => lvl.category === selectedFilter);
  }, [levels, selectedFilter]);

  // When filter changes, ensure activeLevel is within filtered items
  const handleFilterChange = (filterId: 'all' | 'a1' | 'a2' | 'b1') => {
    setSelectedFilter(filterId);
    if (filterId !== 'all') {
      const match = levels.find(lvl => lvl.category === filterId);
      if (match && !match.code.startsWith(filterId)) {
        setActiveLevelCode(match.code);
      } else if (match && activeLevelCode && !activeLevelCode.startsWith(filterId)) {
        setActiveLevelCode(match.code);
      }
    }
  };

  const activeLevel = levels.find(l => l.code === activeLevelCode) || levels[0];
  const activeLessons = useMemo(() => {
    return allLessons
      .filter(l => l.levelCode === activeLevelCode)
      .sort((a, b) => a.orderIndex - b.orderIndex);
  }, [allLessons, activeLevelCode]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* ============================================================ */}
      {/* 1. Header with Neuschwanstein Castle Scenery Backdrop        */}
      {/* ============================================================ */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-white via-white/95 to-slate-50/80 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
        
        {/* Castle Scenery Photo at Top Right */}
        <div className="absolute top-0 right-0 w-[420px] h-full overflow-hidden pointer-events-none opacity-30 dark:opacity-20">
          <img
            src="/images/neuschwanstein.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center filter blur-[0.5px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent dark:from-slate-900 dark:via-slate-900/60" />
        </div>

        <div className="relative z-10 space-y-4 max-w-xl">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight font-display">
              Nemis tili darslari
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-1.5">
              A1 dan B1 gacha bo‘lgan barcha bosqichlarda tizimli o‘rganing.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {[
              { id: 'all' as const, label: 'Barcha' },
              { id: 'a1' as const, label: 'A1 (Boshlang‘ich)' },
              { id: 'a2' as const, label: 'A2 (Asosiy)' },
              { id: 'b1' as const, label: 'B1 (O‘rta)' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => handleFilterChange(f.id)}
                aria-pressed={selectedFilter === f.id}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-150 cursor-pointer ${
                  selectedFilter === f.id
                    ? 'bg-blue-600 text-white shadow-soft'
                    : 'bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. Level Selector Cards Row (A1.1 | A1.2 | A2.1 | A2.2 | B1.1 | B1.2) */}
      {/* ============================================================ */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {filteredLevels.map((lvl) => {
          const isSelected = activeLevelCode === lvl.code;
          const displayLabel = lvl.cefrLevel || lvl.code.toUpperCase().replace('-', '.');

          return (
            <button
              key={lvl.code}
              onClick={() => setActiveLevelCode(lvl.code)}
              aria-pressed={isSelected}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-blue-50/90 dark:bg-blue-950/70 border-blue-500 dark:border-blue-500 ring-2 ring-blue-500/20 shadow-soft'
                  : 'bg-white dark:bg-slate-900 border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-2xs hover:bg-slate-50/50 dark:hover:bg-slate-800/50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className={`text-xl font-black font-display ${lvl.color}`}>
                    {displayLabel}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    {lvl.sublabel}
                  </span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
                  {lvl.range}
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-4 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                <div className="flex-1 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${lvl.progressBarColor} rounded-full transition-all duration-300`}
                    style={{ width: `${lvl.progressPercent}%` }}
                  />
                </div>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 tabular-nums">
                  {lvl.completedLessons}/{lvl.totalLessons}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* ============================================================ */}
      {/* 3. Selected Level Content Section                            */}
      {/* ============================================================ */}
      <div className="space-y-4">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                {activeLevel.cefrLevel || activeLevel.code.toUpperCase()} — {activeLevel.range}
              </h2>
              <Link
                to={`/levels/${activeLevel.code}`}
                className="inline-flex items-center space-x-1 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline ml-2"
              >
                <MapPin size={13} />
                <span>O‘quv yo‘lagi xaritasi →</span>
              </Link>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 max-w-3xl">
              {activeLevel.descriptionUz || 'Asosiy mavzular, kundalik hayot va muloqot.'}
            </p>
          </div>

          <div className="flex items-center space-x-3 flex-shrink-0">
            <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
              {activeLevel.completedLessons}/{activeLevel.totalLessons} ta dars tugallandi
            </span>
            <div className="w-28 h-2 bg-blue-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded-full transition-all duration-300"
                style={{ width: `${activeLevel.progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* 2-Columns Layout: Lessons List & Motivational Castle Quote Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Real Database Lessons */}
          <div className="lg:col-span-7 space-y-3">
            {activeLessons.map((les, index) => {
              const isCompleted = isLessonCompleted(les.id);
              // First lesson or previous completed lesson unlocks next lesson
              const isUnlocked = index === 0 || isCompleted || (index > 0 && isLessonCompleted(activeLessons[index - 1].id));
              const durationMinutes = les.estimatedMinutes || 25;

              return (
                <div
                  key={les.id}
                  className={`p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border transition-all flex items-center justify-between gap-4 ${
                    isUnlocked
                      ? 'border-slate-200/90 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-800 shadow-2xs'
                      : 'border-slate-100 dark:border-slate-800/60 opacity-80'
                  }`}
                >
                  <div className="flex items-center space-x-3.5 min-w-0">
                    {/* Order Circle */}
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 ${
                        isCompleted
                          ? 'bg-emerald-600 text-white shadow-soft'
                          : isUnlocked
                            ? 'bg-blue-600 text-white shadow-soft'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                      }`}
                    >
                      {isCompleted ? <Check size={16} strokeWidth={3} /> : les.orderIndex}
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
                        {les.titleDe}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
                        {les.titleUz}
                      </p>
                    </div>
                  </div>

                  {/* Right Action & Duration (Exact from database: estimatedMinutes) */}
                  <div className="flex items-center space-x-3 flex-shrink-0">
                    <div className="hidden sm:flex items-center space-x-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
                      <Clock size={12} className="text-slate-400" />
                      <span>{durationMinutes} daq</span>
                    </div>

                    {isUnlocked ? (
                      <Link
                        to={`/courses/${les.levelCode}/lesson/${les.id}`}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${
                          isCompleted
                            ? 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
                            : 'bg-blue-600 hover:bg-blue-700 text-white shadow-soft'
                        }`}
                      >
                        <span>{isCompleted ? 'Qayta ko‘rish' : 'Boshlash'}</span>
                        <ArrowRight size={13} />
                      </Link>
                    ) : (
                      <div
                        className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400"
                        title="Oldingi darsni tugating"
                      >
                        <Lock size={15} />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Level Summary & Motivation Card */}
          <div className="lg:col-span-5 sticky top-20 space-y-4">
            
            {/* Level Quick Info Card */}
            <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  {activeLevel.cefrLevel || activeLevel.code.toUpperCase()} Bosqich Ko‘rsatkichlari
                </span>
                <span className="text-xs text-slate-500">
                  {activeLevel.estimatedHours} soat ta‘lim
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeLevel.targetAudience}
              </p>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <Link
                  to={`/levels/${activeLevel.code}`}
                  className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-slate-700 hover:text-white dark:text-slate-200 dark:hover:text-white text-xs font-bold transition flex items-center justify-center space-x-1.5"
                >
                  <BookOpen size={14} />
                  <span>Modullar va grammatika xaritasiga o‘tish</span>
                </Link>
              </div>
            </div>

            {/* Quote Card Box */}
            <div className="relative rounded-3xl overflow-hidden min-h-[300px] shadow-card border border-slate-200/90 dark:border-slate-800 flex flex-col justify-end p-6 text-white group">
              <img
                src="/images/neuschwanstein.jpg"
                alt="German Castle Alpine View"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-transparent" />

              <div className="relative z-10 bg-white/15 dark:bg-slate-900/60 backdrop-blur-md p-5 rounded-2xl border border-white/20 shadow-xl space-y-2">
                <p className="text-sm sm:text-base font-bold leading-relaxed tracking-tight text-white italic">
                  “Har bir katta maqsad kichik qadamlar bilan boshlanadi.”
                </p>
                <div className="text-xs font-semibold text-amber-300">
                  — Fly High German
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
