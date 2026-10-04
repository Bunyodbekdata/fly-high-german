import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Bookmark,
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  Headphones, 
  Mic, 
  Award, 
  ChevronDown, 
  ShieldCheck, 
  Flame, 
  Target,
  GraduationCap,
  Volume2,
  Layers,
  FileText,
  PenTool,
  CheckCircle2,
  Play
} from 'lucide-react';
import { storageService } from '../lib/storage';
import { useProgress } from '../context/ProgressContext';
import { AudioButton } from '../components/common/AudioButton';
import { LevelBadge } from '../components/common/Badge';

export const HomePage: React.FC = () => {
  const levels = storageService.getLevels();
  const sampleLesson = storageService.getLessonById('les-1');
  const { completedLessonsCount, getNextIncompleteLesson } = useProgress();
  const nextLesson = getNextIncompleteLesson() || sampleLesson;
  const isReturningLearner = completedLessonsCount > 0;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Platforma orqali nemis tilini o‘qituvchisiz mustaqil o‘rganish mumkinmi?',
      a: 'Ha, albatta! "FOR GREAT NATION" aynan o‘qituvchisiz, mustaqil o‘rganuvchi o‘zbek talabalari uchun maxsus ishlab chiqilgan. Har bir dars o‘zbek tilida sodda va ravon tushuntirilgan, talaffuz audiolari va avtomatik tekshiriluvchi mashqlar bilan ta‘minlangan.'
    },
    {
      q: 'Darslar xalqaro CEFR va Gyote Instituti standartiga mos keladimi?',
      a: 'Ha, butun o‘quv rejasi Yevropa til standartlari (CEFR: A1.1 va A1.2) hamda Germaniyaning nufuzli "Hueber Menschen" darsligi talablari asosida tuzilgan bo‘lib, Goethe-Zertifikat A1 va Start Deutsch 1 xalqaro imtihonlariga to‘liq tayyorlaydi.'
    },
    {
      q: 'Shadowing (ovoz chiqarib takrorlash) usuli qanday ishlaydi?',
      a: 'Shadowing — chet tilida erkin va to‘g‘ri aksent bilan so‘zlashishning eng samarali metodidir. Siz nemis diktorining gapini tinglaysiz va darhol mikrofon orqali baland ovozda takrorlab, o‘z talaffuzingizni taqqoslaysiz.'
    },
    {
      q: 'Har bir dars qanday tuzilgan?',
      a: 'Har bir dars xalqaro 9 bosqichli metodikadan iborat: Kirish vaziyati, Jonli muloqot, Rangli lug‘at (der/die/das), Grammatika (V2 qoidasi), 3 bosqichli tinglash, O‘qish matni, Bosqichma-bosqich yozish, Shadowing talaffuz mashqi va Interaktiv testlar.'
    },
    {
      q: 'Boshlash uchun nemis tilidan biror bilim kerakmi?',
      a: 'Yo‘q, umuman shart emas! Kurs mutlaq noldan — nemis alifbosi, salomlashish va oddiy tanishuv so‘zlaridan boshlanadi. Maxsus "Fonetika laboratoriyasi" esa harflar va tovushlarni to‘g‘ri aytishni o‘rgatadi.'
    }
  ];

  const courseSteps = [
    { num: '01', titleDe: 'Einstieg', titleUz: 'Hayotiy vaziyat & Kirish', icon: Sparkles, color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800' },
    { num: '02', titleDe: 'Dialog', titleUz: 'Jonli nemischa muloqot', icon: Headphones, color: 'text-blue-500 bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800' },
    { num: '03', titleDe: 'Wortschatz', titleUz: 'der/die/das rangli lug‘at', icon: Bookmark, color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800' },
    { num: '04', titleDe: 'Grammatik', titleUz: 'V2 so‘z tartibi & Jadvallar', icon: FileText, color: 'text-purple-500 bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800' },
    { num: '05', titleDe: 'Hören', titleUz: '3-Bosqichli tinglab tushunish', icon: Volume2, color: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-800' },
    { num: '06', titleDe: 'Lesen', titleUz: 'Matn bilan ishlash & Savollar', icon: BookOpen, color: 'text-cyan-500 bg-cyan-50 dark:bg-cyan-950/40 border-cyan-200 dark:border-cyan-800' },
    { num: '07', titleDe: 'Schreiben', titleUz: 'Tayanch iboralar bilan yozish', icon: PenTool, color: 'text-rose-500 bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800' },
    { num: '08', titleDe: 'Shadowing', titleUz: 'Mikrofon bilan talaffuz mashqi', icon: Mic, color: 'text-teal-500 bg-teal-50 dark:bg-teal-950/40 border-teal-200 dark:border-teal-800' },
    { num: '09', titleDe: 'Übungen', titleUz: 'Interaktiv testlar & Tushuntirish', icon: Award, color: 'text-amber-600 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800' },
  ];

  return (
    <div className="space-y-20 pb-20 transition-colors duration-200">
      {/* 1. HERO SECTION WITH AURORA GLOW & 3D INTERACTIVE CARD */}
      <section className="relative pt-12 sm:pt-20 pb-16 overflow-hidden bg-gradient-to-b from-brand-50/60 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-b border-slate-200/80 dark:border-slate-800">
        {/* Subtle Aurora Ambient Lights */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-brand-600/15 via-rose-500/10 to-amber-400/15 rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* German Flag Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-xs text-xs font-bold text-slate-700 dark:text-slate-200 mb-6 backdrop-blur-md">
            <span className="flex space-x-0.5">
              <span className="w-2.5 h-3 bg-slate-950 rounded-xs" />
              <span className="w-2.5 h-3 bg-red-600 rounded-xs" />
              <span className="w-2.5 h-3 bg-amber-400 rounded-xs" />
            </span>
            <span>Hueber Menschen & CEFR Xalqaro Standartida</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 dark:text-white tracking-tight max-w-4xl mx-auto leading-[1.12]">
            Nemis tilini{' '}
            <span className="bg-gradient-to-r from-brand-600 via-indigo-600 to-rose-600 bg-clip-text text-transparent">
              noldan A1 darajagacha
            </span>{' '}
            mustaqil o‘rganing.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            FOR GREAT NATION — shunchaki so‘zlar to‘plami emas, balki nemis tilini o‘qituvchisiz, 
            mukammal audio talaffuz va o‘zbek tilidagi tushuntirishlar bilan o‘rganish uchun yaratilgan raqamli darslik.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={`/courses/${nextLesson?.levelCode || 'a1-1'}/lesson/${nextLesson?.id || 'les-1'}`}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-base shadow-glow transition transform hover:-translate-y-0.5 inline-flex items-center justify-center space-x-2"
            >
              <span>
                {isReturningLearner
                  ? `Darsni davom ettirish (#${nextLesson?.orderIndex || 1}-dars)`
                  : '1-Darsni Boshlash (Bepul)'}
              </span>
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/courses"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-bold text-base border border-slate-300 dark:border-slate-700 shadow-sm transition inline-flex items-center justify-center"
            >
              O‘quv xaritasini ko‘rish
            </Link>
          </div>

          {/* Interactive Live Audio Preview Card */}
          <div className="mt-12 max-w-lg mx-auto p-5 rounded-3xl bg-white/95 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-card backdrop-blur-md text-left flex items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-brand-600 dark:text-brand-400 flex items-center gap-1">
                <Sparkles size={12} />
                Jonli Nemischa Ovozni Sinab Ko‘ring
              </span>
              <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-serif">
                "Guten Tag! Ich lerne Deutsch."
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Xayrli kun! Men nemis tilini o‘rganyapman.
              </p>
            </div>
            <div className="flex-shrink-0">
              <AudioButton text="Guten Tag! Ich lerne Deutsch mit For Great Nation." size="lg" />
            </div>
          </div>

          {/* Feature Highlights Metrics */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-center">
              <span className="block text-2xl font-black text-brand-600 dark:text-brand-400">24 ta</span>
              <span className="text-xs font-bold text-slate-600 dark:text-slate-400">A1.1 & A1.2 Darslari</span>
            </div>
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-center">
              <span className="block text-2xl font-black text-emerald-600 dark:text-emerald-400">300+</span>
              <span className="text-xs font-bold text-slate-600 dark:text-slate-400">Nemischa So‘zlar</span>
            </div>
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-center">
              <span className="block text-2xl font-black text-indigo-600 dark:text-indigo-400">9 Bosqich</span>
              <span className="text-xs font-bold text-slate-600 dark:text-slate-400">Xalqaro Metodika</span>
            </div>
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-center">
              <span className="block text-2xl font-black text-amber-600 dark:text-amber-400">100%</span>
              <span className="text-xs font-bold text-slate-600 dark:text-slate-400">O‘zbekcha Tushuntirish</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 9-STEP PEDAGOGICAL COURSEBOOK ARCHITECTURE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest block mb-2">
            Pedagogik Struktura
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Har bir darsda 9 ta chuqur o‘quv bosqichi
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Shunchaki quruq so‘z yodlash emas — tilning barcha nutqiy ko‘nikmalari muvozanatli rivojlantiriladi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courseSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="p-5 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-xs hover:shadow-card hover:border-brand-300 dark:hover:border-brand-600 transition group flex items-start space-x-4"
              >
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center flex-shrink-0 font-extrabold ${step.color}`}>
                  <Icon size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold text-slate-400 block mb-0.5">
                    {step.num}-BOSQICH
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {step.titleDe}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {step.titleUz}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. CEFR ROADMAP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest block mb-2">
            Xalqaro Ta‘lim Tizimi
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            A1.1 dan B1.2 gacha bosqichma-bosqich yo‘l
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Har bir bosqich o‘zining aniq o‘quv maqsadlariga va Goethe-Zertifikat imtihoni talablariga ega.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {levels.map((lvl) => (
            <div
              key={lvl.id}
              className="bg-white dark:bg-slate-800/80 rounded-3xl border border-slate-200 dark:border-slate-700/80 p-6 shadow-sm hover:shadow-card hover:border-brand-300 dark:hover:border-brand-600 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <LevelBadge code={lvl.code} />
                  <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                    {lvl.estimatedHours} soat
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors mb-2">
                  {lvl.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {lvl.descriptionUz}
                </p>

                <div className="p-3 bg-slate-50 dark:bg-slate-900/60 rounded-2xl text-[11px] text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-800 mb-6">
                  <span className="font-bold text-slate-800 dark:text-slate-200 block mb-0.5">Mo‘ljallangan:</span>
                  {lvl.targetAudience}
                </div>
              </div>

              <Link
                to={`/levels/${lvl.code}`}
                className="w-full py-3 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-brand-600 hover:text-white dark:hover:bg-brand-600 text-slate-800 dark:text-slate-200 font-semibold text-xs transition text-center flex items-center justify-center space-x-1.5 group-hover:bg-brand-600 group-hover:text-white"
              >
                <span>Bosqich darslarini ko‘rish</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FREE SAMPLE LESSON PREVIEW */}
      {sampleLesson && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-600 via-indigo-700 to-blue-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="space-y-4 max-w-xl relative z-10">
              <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
                Bepul namuna dars
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {sampleLesson.titleDe} — {sampleLesson.titleUz}
              </h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                Ushbu dars orqali nemis tilida salomlashish, hol-ahvol so‘rash va xayrlashishni o‘rganasiz. 
                Hech qanday to‘lovlarsiz hoziroq sinab ko‘ring!
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs bg-black/20 px-3 py-1 rounded-lg">10 ta lug‘at so‘zi</span>
                <span className="text-xs bg-black/20 px-3 py-1 rounded-lg">sein / heißen fe‘li</span>
                <span className="text-xs bg-black/20 px-3 py-1 rounded-lg">Audio & Shadowing</span>
              </div>
            </div>

            <Link
              to="/courses/a1-1/lesson/les-1"
              className="px-8 py-4 rounded-2xl bg-white text-brand-700 hover:bg-blue-50 font-extrabold text-sm sm:text-base shadow-lg transition flex-shrink-0 inline-flex items-center space-x-2 relative z-10"
            >
              <span>Darsni Boshlash</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      )}

      {/* 5. FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest block mb-2">
            Ko‘p beriladigan savollar
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Savollaringiz bormi?
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 overflow-hidden shadow-2xs transition"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left font-bold text-slate-900 dark:text-white text-sm sm:text-base flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/40 transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 transition-transform duration-200 flex-shrink-0 ml-4 ${
                      isOpen ? 'transform rotate-180 text-brand-600 dark:text-brand-400' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700/60 bg-slate-50/50 dark:bg-slate-800/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-14 text-center relative overflow-hidden border border-slate-800 shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Nemis tilini o‘rganishni bugunoq boshlang!
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Hech qanday murakkab ro‘yxatdan o‘tish shart emas. Darhol 1-darsga o‘ting va birinchi nemischa jumlalaringizni professional talaffuz qiling.
            </p>
            <div className="pt-4 flex justify-center">
              <Link
                to="/courses/a1-1/lesson/les-1"
                className="px-8 py-4 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm sm:text-base shadow-glow transition inline-flex items-center space-x-2"
              >
                <span>Hozir Boshlash (Bepul)</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
