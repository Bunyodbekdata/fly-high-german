import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Volume2, 
  Check, 
  ArrowRight, 
  Tv, 
  Layers, 
  BookOpen, 
  Mic, 
  X,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { storageService } from '../lib/storage';
import { useProgress } from '../context/ProgressContext';
import { LevelBadge } from '../components/common/Badge';

export const HomePage: React.FC = () => {
  const levels = storageService.getLevels();
  const sampleLesson = storageService.getLessonById('les-1');
  const { completedLessonsCount, getNextIncompleteLesson } = useProgress();
  const nextLesson = getNextIncompleteLesson() || sampleLesson;
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Play natural pronunciation audio for "das Tor"
  const handlePlayWordAudio = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance('das Tor. Das Tor ist groß.');
      utterance.lang = 'de-DE';
      utterance.rate = 0.9;
      utterance.onstart = () => setIsPlayingAudio(true);
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setIsPlayingAudio(true);
      setTimeout(() => setIsPlayingAudio(false), 1500);
    }
  };

  const faqs = [
    {
      q: 'Platforma orqali nemis tilini o‘qituvchisiz mustaqil o‘rganish mumkinmi?',
      a: 'Ha, albatta! "FLY HIGH GERMAN" aynan o‘qituvchisiz, mustaqil o‘rganuvchi talabalar uchun maxsus ishlab chiqilgan. Har bir dars o‘zbek tilida sodda va ravon tushuntirilgan, talaffuz audiolari va avtomatik tekshiriluvchi mashqlar bilan ta‘minlangan.'
    },
    {
      q: 'Darslar xalqaro CEFR va Gyote Instituti standartiga mos keladimi?',
      a: 'Ha, butun o‘quv rejasi Yevropa til standartlari (CEFR: A1.1 dan B1.2 gacha) talablari asosida tuzilgan bo‘lib, Goethe-Zertifikat A1, A2 va B1 xalqaro imtihonlariga to‘liq tayyorlaydi.'
    },
    {
      q: 'Flashcard va lug‘at qanday ishlaydi?',
      a: 'Har bir nemischa so‘z o‘zining grammatik artikli (der - ko‘k, die - qizil, das - yashil) bilan rangli ajratilgan. 3D kartochka aylantirish, talaffuz audiosi va amaliy misol gaplar orqali so‘zlar xotirada mustahkam qoladi.'
    },
    {
      q: 'Sertifikat testlari qanday tartibda topshiriladi?',
      a: 'Har bir bosqich (A1, A2, B1) yakunida 40-60 ta savoldan iborat rasmiy namunaviy test mavjud. 70% dan yuqori natija ko‘rsatganingizda, profilingizda yuklab olinuvchi xalqaro sertifikat faollashadi.'
    }
  ];

  return (
    <div className="space-y-16 pb-20 transition-colors duration-200">
      {/* ============================================================ */}
      {/* 1. HERO SECTION (Exactly Matching Reference Image 1)        */}
      {/* ============================================================ */}
      <section className="relative pt-6 sm:pt-12 pb-16 overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-slate-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-b border-slate-200/80 dark:border-slate-800">
        {/* Soft background ambient gradient */}
        <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-l from-blue-100/40 to-transparent pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content (Text & CTAs) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Flame Pill Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 text-xs font-semibold shadow-2xs backdrop-blur-md">
                <span className="text-sm">🔥</span>
                <span>
                  <strong className="text-blue-600 dark:text-blue-400 font-bold">A1 → B1</strong> • Tizimli va samarali o‘rganing
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-black text-slate-950 dark:text-white tracking-tight leading-[1.12] font-display">
                Nemis tilini <br />
                <span className="text-blue-600 dark:text-blue-400">noldan</span> ishonch bilan <br />
                o‘rganing!
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl font-normal leading-relaxed">
                Interaktiv darslar, 1400+ so‘z, gerchek hayotiy mashqlar va sertifikat testlari bilan bir platformada.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Link
                  to={`/courses/${nextLesson?.levelCode || 'a1-1'}/lesson/${nextLesson?.id || 'les-1'}`}
                  className="px-7 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-soft hover:shadow-card hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 inline-flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Bepul boshlash</span>
                  <ArrowRight size={17} />
                </Link>

                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="px-6 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-900/70 text-blue-600 dark:text-blue-400 font-bold text-sm sm:text-base hover:bg-blue-50/50 dark:hover:bg-blue-950/40 transition-all duration-200 inline-flex items-center justify-center space-x-2 cursor-pointer shadow-2xs"
                >
                  <div className="w-6 h-6 rounded-full border border-blue-600 dark:border-blue-400 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Play size={11} className="fill-blue-600 dark:fill-blue-400 ml-0.5" />
                  </div>
                  <span>Dastur haqida videoni ko‘rish</span>
                </button>
              </div>

              {/* Metrics Counter Row (72 | 1400+ | 9 | 10 000+) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200/80 dark:border-slate-800">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-blue-400 font-display tabular-nums">
                    72
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    ta dars
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-blue-400 font-display tabular-nums">
                    1 400+
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    ta so‘z
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-blue-400 font-display tabular-nums">
                    9
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    o‘quv bosqichi
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-blue-400 font-display tabular-nums">
                    10 000+
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    faol foydalanuvchi
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Composition: Scenic German backdrop + Floating Flashcard + Goal Card */}
            {/* Right Visual Composition: Atmospheric ambient glow + Floating Flashcard + Goal Card */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center">
              
              {/* Atmospheric Ambient Glow Backdrop */}
              <div className="absolute -top-10 -right-6 w-[360px] sm:w-[420px] h-[360px] sm:h-[420px] rounded-full bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-amber-500/10 blur-3xl pointer-events-none -z-0" />

              {/* Main Interactive Floating Flashcard ("das Tor") */}
              <div className="relative z-20 w-[270px] sm:w-[290px] bg-white dark:bg-slate-900 rounded-3xl p-4 shadow-elevated border border-slate-100 dark:border-slate-800 transition-transform duration-300 hover:scale-[1.02]">
                
                {/* German Landmark Photo Header */}
                <div className="relative h-36 rounded-2xl overflow-hidden shadow-inner">
                  <img
                    src="/images/brandenburg-gate.jpg"
                    alt="Brandenburger Tor"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Article Pill Badge "das" (Correct neuter article) */}
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-bold font-mono tracking-wide shadow-sm">
                    das
                  </div>
                </div>

                {/* German Word & Translation */}
                <div className="text-center mt-4">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white font-display">
                    das Tor
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                    darvoza, darvoza eshigi
                  </p>
                </div>

                {/* Audio Button with Animated Soundwave Bars */}
                <div className="mt-3.5 flex items-center justify-center space-x-3 bg-slate-50 dark:bg-slate-800/50 py-2 px-3 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <button
                    onClick={handlePlayWordAudio}
                    className={`w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-soft transition-transform duration-200 ${
                      isPlayingAudio ? 'scale-110 ring-4 ring-blue-300 dark:ring-blue-900' : 'hover:scale-105'
                    }`}
                    title="Talaffuzni tinglash"
                  >
                    <Volume2 size={16} />
                  </button>

                  {/* Soundwave bars graphic */}
                  <div className="flex items-center space-x-1 h-6">
                    {[12, 18, 24, 14, 20, 16, 22, 10, 16, 12].map((height, i) => (
                      <span
                        key={i}
                        className={`w-0.5 rounded-full transition-all duration-300 ${
                          isPlayingAudio
                            ? 'bg-blue-600 dark:bg-blue-400 animate-pulse'
                            : 'bg-blue-400/60 dark:bg-blue-500/50'
                        }`}
                        style={{
                          height: isPlayingAudio ? `${Math.max(6, (height + (i % 3) * 5) % 24)}px` : `${height}px`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Example Sentence Container */}
                <div className="mt-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-start space-x-2">
                  <span className="text-blue-500 dark:text-blue-400 text-xs mt-0.5">🗣️</span>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      Das Tor ist groß.
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      Darvoza katta.
                    </div>
                  </div>
                </div>
              </div>

              {/* Offset Floating Card: "Bugungi maqsad" */}
              <div className="absolute -bottom-6 -right-2 sm:-right-6 z-30 w-[200px] sm:w-[220px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-slate-200/90 dark:border-slate-800 animate-float">
                <div className="text-xs font-bold text-slate-900 dark:text-white mb-2.5">
                  Bugungi maqsad
                </div>

                <div className="flex items-center space-x-3 mb-3">
                  {/* Circular progress ring (3/5) */}
                  <div className="relative w-11 h-11 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-100 dark:text-slate-800"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-emerald-500"
                        strokeDasharray="60, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-[11px] font-black text-slate-800 dark:text-slate-200">
                      3/5
                    </div>
                  </div>

                  <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 leading-tight">
                    3 ta mashq bajarildi
                  </div>
                </div>

                {/* Checklist items */}
                <div className="space-y-1.5 text-[11px]">
                  <div className="flex items-center space-x-2 text-slate-700 dark:text-slate-200">
                    <div className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[9px] font-bold">
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <span>10 ta yangi so‘z</span>
                  </div>

                  <div className="flex items-center space-x-2 text-slate-700 dark:text-slate-200">
                    <div className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[9px] font-bold">
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <span>Grammatika mashqi</span>
                  </div>

                  <div className="flex items-center space-x-2 text-slate-400 dark:text-slate-500">
                    <div className="w-4 h-4 rounded-full border border-slate-300 dark:border-slate-700" />
                    <span>Tinglab tushunish</span>
                  </div>

                  <div className="flex items-center space-x-2 text-slate-400 dark:text-slate-500">
                    <div className="w-4 h-4 rounded-full border border-slate-300 dark:border-slate-700" />
                    <span>Test yechish</span>
                  </div>
                </div>
              </div>

              {/* Hand-drawn arrow annotation */}
              <div className="hidden sm:block absolute -bottom-14 left-4 z-20 text-slate-500 dark:text-slate-400 italic text-xs font-medium">
                <span>Amaliy misollar bilan har kuni bir qadam oldinga! ↗</span>
              </div>
            </div>

          </div>

          {/* ============================================================ */}
          {/* Bottom 4 Feature Cards (Exact Match to Reference Image 1)   */}
          {/* ============================================================ */}
          <div className="mt-16 pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* 1. Interaktiv darslar */}
            <Link
              to="/courses"
              className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-card hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Tv size={22} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Interaktiv darslar
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Video, matn va mashqlar
                </p>
              </div>
            </Link>

            {/* 2. Flashcard */}
            <Link
              to="/vocabulary"
              className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-card hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/80 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Layers size={22} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Flashcard
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Tez va samarali yodlash
                </p>
              </div>
            </Link>

            {/* 3. Grammatika */}
            <Link
              to="/grammar"
              className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-card hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/80 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <BookOpen size={22} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Grammatika
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Tushunarli izohlar va misollar
                </p>
              </div>
            </Link>

            {/* 4. Shadowing Studio */}
            <Link
              to="/shadowing"
              className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-card hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800/80 text-cyan-600 dark:text-cyan-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Mic size={22} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Shadowing Studio
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Talaffuz va tinglash mashqi
                </p>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. LEVEL PROGRESSION OVERVIEW                                */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block mb-2">
            Ta‘lim Yo‘li
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Xalqaro standartdagi bosqichma-bosqich o‘quv rejasi
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            A1 dan B1 gacha bo‘lgan barcha darslar tizimli tuzilgan va avtomatik tekshiriluvchi mashqlar bilan jihozlangan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {levels.map((lvl) => (
            <div
              key={lvl.id}
              className="bg-white dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-2xs hover:shadow-soft hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <LevelBadge code={lvl.code} />
                  <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                    {lvl.estimatedHours} soat
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2 line-clamp-1">
                  {lvl.cefrLevel ? `${lvl.cefrLevel} — ` : ''}{lvl.title.replace(/^[AB][12]\.[12]\s*—\s*/, '')}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {lvl.descriptionUz}
                </p>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 flex items-center gap-1.5 line-clamp-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <span>{lvl.targetAudience}</span>
                </p>
              </div>

              <Link
                to={`/levels/${lvl.code}`}
                className="w-full py-3 rounded-xl bg-slate-100 hover:bg-blue-600 dark:bg-slate-800 dark:hover:bg-blue-600 text-slate-700 hover:text-white dark:text-slate-200 dark:hover:text-white font-bold text-xs shadow-2xs transition-all duration-200 flex items-center justify-center space-x-1.5"
              >
                <span>Bosqichga kirish</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. FREQUENTLY ASKED QUESTIONS (FAQ)                          */}
      {/* ============================================================ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block mb-1">
            Savol-Javoblar
          </span>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">
            Eng ko‘p beriladigan savollar
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={faq.q}
                className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/80 overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-bold text-slate-900 dark:text-white text-sm sm:text-base hover:text-blue-600 dark:hover:text-blue-400 transition cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================ */}
      {/* Video Modal (when clicking "Dastur haqida videoni ko'rish")   */}
      {/* ============================================================ */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center space-x-2">
                <Play size={16} className="text-blue-600 fill-blue-600" />
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                  Fly High German platformasi haqida video sharh
                </h3>
              </div>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 flex flex-col items-center justify-center text-center p-6 text-white">
                <img
                  src="/images/brandenburg-gate.jpg"
                  alt="Video cover"
                  className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <div className="relative z-10 space-y-3">
                  <div className="w-16 h-16 rounded-full bg-blue-600/90 text-white flex items-center justify-center mx-auto shadow-xl ring-8 ring-blue-500/20 cursor-pointer hover:scale-105 transition">
                    <Play size={28} className="fill-white ml-1" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black">Platforma bilan 2 daqiqada tanishing</h4>
                    <p className="text-xs text-slate-300 max-w-md mt-1">
                      9 bosqichli dars strukturasi, der/die/das rangli lug‘ati va avtomatik sertifikat testlari qanday ishlashini tomosha qiling.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Link
                  to="/courses"
                  onClick={() => setIsVideoModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition"
                >
                  Darslarga o‘tish →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
