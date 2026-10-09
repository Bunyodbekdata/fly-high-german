import React from 'react';
import { FileText, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <Link
            to="/"
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-white"
          >
            <ArrowLeft size={14} />
            <span>Bosh sahifaga qaytish</span>
          </Link>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-brand-100 dark:bg-brand-950 flex items-center justify-center text-brand-600 dark:text-brand-400">
              <FileText size={26} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                Foydalanish Qoidalari
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Oxirgi yangilanish: {new Date().toLocaleDateString('uz-UZ')}
              </p>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-5 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-600" />
                <span>1. Xizmatdan foydalanish shartlari</span>
              </h2>
              <p>
                <strong>FOR GREAT NATION</strong> nemis tili o‘quv platformasidan foydalanish orqali siz ushbu qoidalar va shartlarga to‘liq rozilik bildirasiz. Platformadagi barcha o‘quv materiallari, darslar, audio yozuvlar va baholash testlari shaxsiy bilim olish maqsadida taqdim etiladi.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <AlertCircle size={16} className="text-brand-600" />
                <span>2. Sertifikatlar va baholash tartibi</span>
              </h2>
              <p>
                Platforma doirasida topshiriladigan sertifikat testlari Goethe-Institut va telc xalqaro standartlari asosida tuzilgan bo‘lib, o‘rganuvchilarning bilim darajasini ichki baholashga xizmat qiladi. Ushbu sertifikatlar ta'lim platformasining ichki hujjati hisoblanadi.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <FileText size={16} className="text-brand-600" />
                <span>3. Mualliflik huquqlari</span>
              </h2>
              <p>
                Platformadagi interaktiv mashqlar, metodik ishlanmalar va dasturiy ta'minot FOR GREAT NATION loyihasining intellektual mulki hisoblanadi. Ularni noqonuniy nusxalash yoki ruxsatsiz tijoriy tarqatish taqiqlanadi.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TermsPage;
