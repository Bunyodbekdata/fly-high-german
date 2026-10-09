import React, { useRef } from 'react';
import { Certificate } from '../../types/certificate';
import { Award, Printer, ShieldCheck, Sparkles } from 'lucide-react';

interface CertificateCardProps {
  certificate: Certificate;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
  const certificateRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const readingPct = certificate.readingPercentage;
  const listeningPct = certificate.listeningPercentage;

  const isListeningOnly = certificate.title.includes('Hören') && !certificate.title.includes('Start Deutsch');
  const isReadingOnly = certificate.title.includes('Lesen') && !certificate.title.includes('Start Deutsch');
  const hasReading = !isListeningOnly && (certificate.readingScore !== undefined || !isReadingOnly);
  const hasListening = !isReadingOnly && (certificate.listeningScore !== undefined || !isListeningOnly);

  const formattedDate = new Date(certificate.issuedAt).toLocaleDateString('uz-UZ', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="space-y-4">
      {/* Printable Certificate Frame */}
      <div 
        ref={certificateRef}
        className="relative bg-gradient-to-br from-white via-amber-50/20 to-white dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 p-6 sm:p-10 rounded-3xl border-4 border-amber-400/80 dark:border-amber-500/60 shadow-2xl overflow-hidden print:m-0 print:border-4 print:p-8"
      >
        {/* Decorative corner ornaments */}
        <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-amber-500 pointer-events-none" />
        <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-amber-500 pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-amber-500 pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-amber-500 pointer-events-none" />

        {/* Subtle German Flag Accent Strip */}
        <div className="flex h-1.5 w-32 mx-auto rounded-full overflow-hidden shadow-xs mb-6">
          <div className="w-1/3 bg-slate-950" />
          <div className="w-1/3 bg-red-600" />
          <div className="w-1/3 bg-amber-400" />
        </div>

        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center space-x-2 text-xs font-black tracking-widest text-amber-700 dark:text-amber-300 uppercase">
            <Sparkles size={14} className="text-amber-500" />
            <span>FOR GREAT NATION ACADEMY</span>
            <Sparkles size={14} className="text-amber-500" />
          </div>

          <h2 className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
            {certificate.levelCode.toUpperCase()} German Assessment Certificate
          </h2>

          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 italic">
            Ichki bilim va ko‘nikmalarni baholash sertifikati
          </p>
        </div>

        {/* Body Text */}
        <div className="my-8 text-center space-y-4">
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Ushbu sertifikat tasdiqlaydiki / This certifies that:
          </p>

          <div className="inline-block border-b-2 border-slate-900 dark:border-white px-8 pb-1">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-wide">
              {certificate.userName}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 max-w-lg mx-auto leading-relaxed pt-2">
            platformamizdagi <strong className="font-bold text-slate-900 dark:text-white">{certificate.title}</strong>{' '}
            {isListeningOnly ? '(Hören — Tinglab tushunish)' : isReadingOnly ? '(Lesen — O‘qib tushunish)' : '(Lesen & Hören)'}{' '}
            darajasi bo‘yicha topshiriqlarni muvaffaqiyatli yakunlab, o‘z bilimini isbotladi.
          </p>
        </div>

        {/* Scores & Details Grid */}
        <div className={`grid grid-cols-2 ${
          (hasReading && hasListening) ? 'sm:grid-cols-4' : 'sm:grid-cols-3'
        } gap-3 bg-white/80 dark:bg-slate-800/60 p-4 rounded-2xl border border-amber-200/60 dark:border-amber-900/40 text-center my-6`}>
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Umumiy ball</span>
            <span className="text-base sm:text-lg font-black text-amber-600 dark:text-amber-400">
              {certificate.percentage}%
            </span>
            <span className="text-[10px] text-slate-400 block">{certificate.score} ball</span>
          </div>

          {hasReading && (
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">📖 Lesen</span>
              <span className="text-base sm:text-lg font-black text-blue-600 dark:text-blue-400">
                {readingPct}%
              </span>
              <span className="text-[10px] text-slate-400 block">
                {certificate.readingScore !== undefined ? `${certificate.readingScore} ball` : 'Topshirildi'}
              </span>
            </div>
          )}

          {hasListening && (
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">🎧 Hören</span>
              <span className="text-base sm:text-lg font-black text-purple-600 dark:text-purple-400">
                {listeningPct}%
              </span>
              <span className="text-[10px] text-slate-400 block">
                {certificate.listeningScore !== undefined ? `${certificate.listeningScore} ball` : 'Topshirildi'}
              </span>
            </div>
          )}

          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Berilgan sana</span>
            <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 block mt-1">
              {formattedDate}
            </span>
          </div>
        </div>

        {/* Certificate ID & Verification */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs">
          <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 font-mono">
            <ShieldCheck size={16} className="text-amber-500" />
            <span>ID: <strong className="text-slate-900 dark:text-white font-black">{certificate.certificateId}</strong></span>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-950 flex items-center justify-center text-amber-700 dark:text-amber-300 font-black text-xs border border-amber-300 dark:border-amber-700">
              FGN
            </div>
            <div className="text-left text-[10px] text-slate-500">
              <span className="font-bold text-slate-800 dark:text-slate-200 block">For Great Nation</span>
              <span>Verified Assessment</span>
            </div>
          </div>
        </div>

        {/* Mandatory Official Disclaimer */}
        <div className="mt-6 pt-3 border-t border-dashed border-slate-200 dark:border-slate-800 text-center">
          <p className="text-[10px] text-slate-400 dark:text-slate-500">
            * Internal For Great Nation Assessment — not an official Goethe/telc/ÖSD certificate.
            (Ushbu sertifikat For Great Nation ta'lim platformasining ichki baholash hujjati hisoblanadi).
          </p>
        </div>
      </div>

      {/* Print Button (hidden during print) */}
      <div className="flex justify-end print:hidden">
        <button
          onClick={handlePrint}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-black text-white text-xs font-bold transition shadow-xs"
        >
          <Printer size={15} />
          <span>Sertifikatni chop etish / PDF saqlash</span>
        </button>
      </div>
    </div>
  );
};
