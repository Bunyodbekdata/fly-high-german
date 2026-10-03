import React from 'react';
import { Link } from 'react-router-dom';
import { storageService } from '../lib/storage';
import { useProgress } from '../context/ProgressContext';
import { LevelBadge } from '../components/common/Badge';
import { ProgressBar } from '../components/common/ProgressBar';
import { ArrowRight, Clock, Lock, Sparkles, Volume2, CheckCircle2, Award, BookOpen } from 'lucide-react';

export const CoursesPage: React.FC = () => {
  const levels = storageService.getLevels();
  const { getLevelProgress } = useProgress();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 transition-colors duration-200">
      {/* Banner to Pronunciation Lab */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-brand-800 dark:from-blue-900 dark:via-indigo-950 dark:to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-blue-600/30">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-blue-100">
            <Sparkles size={14} />
            <span>Yangi o‘rganuvchilar uchun tavsiya</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black">
            Nemis tili talaffuz va fonetika laboratoriyasi
          </h2>
          <p className="text-xs sm:text-sm text-blue-100 max-w-xl leading-relaxed">
            Nemis alifbosi, umlautlar (ä, ö, ü, ß), diftonglar (ei, ie, eu) va maxsus birikmalar (sch, sp, st, ch) ni audiolari va o‘zbekcha qoidalari bilan o‘rganing.
          </p>
        </div>
        <Link
          to="/pronunciation"
          className="px-6 py-3 rounded-2xl bg-white text-brand-900 font-extrabold text-sm shadow-md hover:bg-blue-50 transition flex items-center space-x-2 flex-shrink-0"
        >
          <Volume2 size={16} />
          <span>Fonetika xonasiga o‘tish</span>
        </Link>
      </div>

      {/* Page Title */}
      <div>
        <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest block mb-1">
          O‘quv Dasturi (CEFR Kurslari)
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Nemis tili ta‘lim bosqichlari
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
          Sifat va chuqur amaliyotga qaratilgan CEFR bosqichlari. Hozirda <strong>A1.1</strong> va <strong>A1.2</strong> bosqichlari to‘liq faol.
        </p>
      </div>

      {/* Levels Timeline / Vertical Roadmap */}
      <div className="space-y-6 relative">
        {levels.map((lvl, index) => {
          const isA1 = lvl.code === 'a1-1' || lvl.code === 'a1-2';
          const isComingSoon = lvl.isComingSoon || !isA1;
          const progress = isComingSoon ? 0 : getLevelProgress(lvl.code);
          const lessons = isComingSoon ? [] : storageService.getLessons(undefined, lvl.code);

          return (
            <div
              key={lvl.id}
              className={`rounded-3xl border p-6 sm:p-8 transition-all duration-200 relative ${
                !isComingSoon
                  ? 'bg-white dark:bg-slate-800/90 border-brand-200 dark:border-brand-800 shadow-card ring-1 ring-brand-100/50 dark:ring-brand-900/30'
                  : 'bg-white/60 dark:bg-slate-900/40 border-slate-200/80 dark:border-slate-800/80 opacity-80'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                {/* Level Details */}
                <div className="space-y-3 flex-1">
                  <div className="flex items-center space-x-3">
                    <LevelBadge code={lvl.code} />

                    {!isComingSoon ? (
                      <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                        Faol kurs ({lessons.length} ta dars)
                      </span>
                    ) : (
                      <span className="text-[11px] font-bold text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/50 px-2.5 py-0.5 rounded-full border border-amber-200 dark:border-amber-800 flex items-center">
                        <Lock size={11} className="mr-1 text-amber-600 dark:text-amber-400" />
                        Tez orada (A1 to‘liq sinovdan o‘tgach qo‘shiladi)
                      </span>
                    )}

                    <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 flex items-center">
                      <Clock size={13} className="mr-1" />
                      {lvl.estimatedHours} soat ta‘lim
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {lvl.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                    {lvl.descriptionUz}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-1">
                    <span>
                      <strong className="text-slate-700 dark:text-slate-200 font-semibold">Mo‘ljallangan:</strong>{' '}
                      {lvl.targetAudience}
                    </span>
                  </div>
                </div>

                {/* Level Action / Progress Area */}
                <div className="w-full lg:w-72 flex flex-col justify-center space-y-4 pt-4 lg:pt-0 lg:border-l lg:border-slate-100 dark:lg:border-slate-700 lg:pl-6">
                  {!isComingSoon ? (
                    <>
                      <div>
                        <ProgressBar
                          progress={progress}
                          label="O‘zlashtirish"
                          size="md"
                        />
                      </div>

                      <Link
                        to={`/levels/${lvl.code}`}
                        className="w-full py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm shadow-sm transition text-center flex items-center justify-center space-x-2"
                      >
                        <span>Darslar yo‘lagiga kirish</span>
                        <ArrowRight size={16} />
                      </Link>
                    </>
                  ) : (
                    <div className="text-center py-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200/60 dark:border-slate-700/60">
                      <Lock size={20} className="mx-auto text-slate-400 mb-1" />
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block">
                        Bosqich tayyorlanmoqda
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
