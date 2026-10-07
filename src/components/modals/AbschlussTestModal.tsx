import React, { useState } from 'react';
import { ABSCHLUSS_TESTS } from '../../lib/seedAbschlussTests';
import { ExerciseRunner } from '../exercises/ExerciseRunner';
import { Award, CheckCircle2, X, AlertTriangle, ArrowRight, Sparkles, GraduationCap } from 'lucide-react';

interface AbschlussTestModalProps {
  levelCode: string;
  isOpen: boolean;
  onClose: () => void;
  onPassed?: () => void;
}

export const AbschlussTestModal: React.FC<AbschlussTestModalProps> = ({
  levelCode,
  isOpen,
  onClose,
  onPassed,
}) => {
  const [testScore, setTestScore] = useState<number | null>(null);

  if (!isOpen) return null;

  const testData = ABSCHLUSS_TESTS[levelCode] || ABSCHLUSS_TESTS['a1-1'];

  const handleFinishTest = (score: number) => {
    setTestScore(score);
    if (score >= testData.passingScore && onPassed) {
      onPassed();
    }
  };

  const isPassed = testScore !== null && testScore >= testData.passingScore;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-elevated border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 bg-brand-600 text-white flex items-start justify-between">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/20 text-caption font-bold text-white/90 mb-2">
              <GraduationCap size={14} />
              <span>Bosqich Yakuniy Imtihoni (Abschluss-Test)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black">
              {testData.titleDe}
            </h2>
            <p className="text-caption text-white/80 mt-0.5">
              {testData.titleUz}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-2xl bg-white/10 hover:bg-white/20 text-white transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {testScore === null ? (
            <div>
              <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/80 text-xs sm:text-sm text-amber-950 dark:text-amber-200 mb-6">
                <span className="font-bold block mb-1">Imtihon shartlari:</span>
                <p className="leading-relaxed">{testData.descriptionUz}</p>
                <div className="mt-3 flex items-center space-x-4 text-xs font-bold text-amber-800 dark:text-amber-300">
                  <span>Savollar soni: {testData.totalQuestions} ta</span>
                  <span>•</span>
                  <span>O‘tish bali: {testData.passingScore}%</span>
                </div>
              </div>

              <ExerciseRunner
                exercises={testData.exercises}
                onFinish={handleFinishTest}
              />
            </div>
          ) : (
            <div className="text-center py-8 space-y-6">
              {isPassed ? (
                <div className="space-y-4">
                  <div className="w-20 h-20 rounded-3xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-md">
                    <Award size={48} />
                  </div>
                  <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
                    <Sparkles size={14} />
                    <span>Muvaffaqiyatli yakunlandi!</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                    Tabriklaymiz! Imtihondan o‘tdingiz!
                  </h3>
                  <p className="text-lg text-slate-700 dark:text-slate-300">
                    Sizning to‘plagan ballingiz: <strong className="text-emerald-600 dark:text-emerald-400 text-2xl">{testScore}%</strong>
                  </p>
                  
                  {/* Digital Certificate Preview Card */}
                  <div className="max-w-md mx-auto p-6 rounded-3xl bg-gradient-to-br from-amber-50 via-white to-amber-50 dark:from-slate-800 dark:via-slate-850 dark:to-slate-800 border-2 border-amber-300 dark:border-amber-600/60 shadow-md text-center space-y-3">
                    <span className="text-[11px] uppercase tracking-widest font-extrabold text-amber-800 dark:text-amber-400 block">
                      FOR GREAT NATION • CERTIFICATE OF COMPLETION
                    </span>
                    <h4 className="text-xl font-black text-slate-900 dark:text-white">
                      {testData.titleDe}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Ushbu sertifikat egasi nemis tili {levelCode.toUpperCase()} bosqichining barcha leksik, grammatik va muloqot talablarini a‘lo darajada bajarganini tasdiqlaydi.
                    </p>
                    <div className="pt-2 text-[11px] font-bold text-amber-900 dark:text-amber-300 border-t border-amber-200 dark:border-amber-800/80">
                      CEFR A1 Standarti asosida tasdiqlangan
                    </div>
                  </div>

                  <div className="pt-4 flex justify-center space-x-3">
                    <button
                      onClick={onClose}
                      className="px-6 py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-sm"
                    >
                      Bosh sahifaga qaytish
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="w-20 h-20 rounded-3xl bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 flex items-center justify-center mx-auto shadow-md">
                    <AlertTriangle size={48} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                    Imtihondan o‘ta olmadingiz
                  </h3>
                  <p className="text-lg text-slate-700 dark:text-slate-300">
                    Sizning to‘plagan ballingiz: <strong className="text-red-600 dark:text-red-400 text-2xl">{testScore}%</strong> (Kerakli ball: {testData.passingScore}%)
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                    Xafa bo‘lmang! Imtihondagi xatolaringiz ustida ishlang, darslardagi grammatika va so‘zlarni qayta takrorlang va yana urinib ko‘ring.
                  </p>

                  <div className="pt-4 flex justify-center space-x-3">
                    <button
                      onClick={() => setTestScore(null)}
                      className="px-6 py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-sm"
                    >
                      Imtihonni qayta topshirish
                    </button>
                    <button
                      onClick={onClose}
                      className="px-6 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-sm"
                    >
                      Darslarga qaytish
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
