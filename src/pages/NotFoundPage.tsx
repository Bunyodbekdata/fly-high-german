import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, BookOpen, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-soft">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-900/60 flex items-center justify-center text-brand-600 dark:text-brand-400">
          <Compass size={40} className="animate-spin-slow" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-brand-600 dark:text-brand-400">
            404 Xatosi
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Sahifa topilmadi
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Siz qidirayotgan sahifa o‘chirilgan, nomi o‘zgargan yoki kiritilgan havola xato bo‘lishi mumkin.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs transition shadow-sm"
          >
            <Home size={15} className="mr-2" />
            <span>Bosh sahifaga qaytish</span>
          </Link>

          <Link
            to="/courses"
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 font-bold text-xs transition"
          >
            <BookOpen size={15} className="mr-2" />
            <span>Kurslarni ko‘rish</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
