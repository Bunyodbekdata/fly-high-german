import React from 'react';
import { ShieldCheck, ArrowLeft, Lock, Eye, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PrivacyPage: React.FC = () => {
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
              <ShieldCheck size={26} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                Maxfiylik Siyosati
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Oxirgi yangilanish: {new Date().toLocaleDateString('uz-UZ')}
              </p>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-5 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Lock size={16} className="text-brand-600" />
                <span>1. Umumiy qoidalar</span>
              </h2>
              <p>
                <strong>FOR GREAT NATION</strong> ta'lim platformasi foydalanuvchilarning shaxsiy ma'lumotlari daxlsizligini va xavfsizligini to‘liq ta'minlaydi. Ushbu siyosat siz platformadan foydalanganda qanday ma'lumotlar to‘planishi va ulardan qanday foydalanilishini tushuntiradi.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Eye size={16} className="text-brand-600" />
                <span>2. To‘planadigan ma'lumotlar</span>
              </h2>
              <p>
                Platforma o‘quv jarayonini yaxshilash maqsadida quyidagi minimal ma'lumotlarni qayta ishlaydi:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Foydalanuvchi profili: Ism, elektron pochta manzili va tanlangan o‘rganish darajasi (A1.1, A1.2 va boshqalar).</li>
                <li>O‘quv statistikasi: Bajarilgan darslar, lug‘at mashqlari, test natijalari, to‘plangan XP ballari va o‘quv seriyasi (streak).</li>
                <li>Sertifikat ma'lumotlari: Muvaffaqiyatli topshirilgan imtihonlar va berilgan sertifikatlar identifikatorlari.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <FileText size={16} className="text-brand-600" />
                <span>3. Ma'lumotlarni saqlash va himoya qilish</span>
              </h2>
              <p>
                Barcha o‘quv natijalari va foydalanuvchi ma'lumotlari xavfsiz shifrlangan ma'lumotlar bazasida hamda brauzeringizning mahalliy xotirasida (localStorage) saqlanadi. Ma'lumotlar uchinchi shaxslarga berilmaydi yoki tijoriy maqsadlarda tarqatilmaydi.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PrivacyPage;
