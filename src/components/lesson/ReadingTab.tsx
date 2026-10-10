import React, { useState } from 'react';
import { ReadingMaterial } from '../../types/database';
import { AudioButton } from '../common/AudioButton';
import { BookOpen, Eye, EyeOff, CheckCircle2, XCircle, ArrowRight, Lightbulb } from 'lucide-react';

interface ReadingTabProps {
  reading?: ReadingMaterial[];
  onNext: () => void;
}

export const ReadingTab: React.FC<ReadingTabProps> = ({ reading, onNext }) => {
  const [showTranslation, setShowTranslation] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [checked, setChecked] = useState(false);

  if (!reading || reading.length === 0) {
    return (
      <div className="max-w-3xl mx-auto py-12 text-center text-slate-500 dark:text-slate-400">
        Bu dars uchun o‘qish matni mavjud emas.
      </div>
    );
  }

  const material = reading[0];

  const handleSelectOption = (questionId: string, optionIdx: number) => {
    if (checked) return;
    setAnswers({ ...answers, [questionId]: optionIdx });
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-8 transition-colors duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-card">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-950/60 border border-brand-100 dark:border-brand-800 flex items-center justify-center text-brand-600 dark:text-brand-400 flex-shrink-0">
            <BookOpen size={24} />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {material.titleDe}
            </h2>
            <p className="text-sm font-semibold text-brand-600 dark:text-brand-400">
              {material.titleUz}
            </p>
          </div>
        </div>

        {/* German Text Box with Audio */}
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Nemischa o‘qish matni
            </span>
            <AudioButton text={material.textDe} size="md" />
          </div>
          <p className="text-base sm:text-lg text-slate-900 dark:text-white leading-relaxed font-serif">
            {material.textDe}
          </p>
        </div>

        {/* Vocabulary Hints */}
        {material.vocabularyHints && material.vocabularyHints.length > 0 && (
          <div className="mb-6 p-4 rounded-2xl bg-brand-50/50 dark:bg-brand-950/40 border border-brand-100 dark:border-brand-800/80">
            <div className="flex items-center space-x-2 text-brand-800 dark:text-brand-300 font-bold text-xs uppercase tracking-wider mb-2">
              <Lightbulb size={16} />
              <span>Matndagi yangi so‘zlar:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {material.vocabularyHints.map((hint, idx) => (
                <span
                  key={hint.german}
                  className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-brand-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                >
                  <span className="font-bold text-brand-700 dark:text-brand-400 mr-1.5">{hint.german}</span>
                  <span className="text-slate-400 mr-1.5">—</span>
                  <span>{hint.uzbek}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Translation Toggle */}
        <div className="mb-8">
          <button
            onClick={() => setShowTranslation(!showTranslation)}
            className="inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
          >
            {showTranslation ? <EyeOff size={14} className="mr-1.5" /> : <Eye size={14} className="mr-1.5" />}
            {showTranslation ? 'O‘zbekcha tarjimani yashirish' : 'O‘zbekcha tarjimani ko‘rish'}
          </button>

          {showTranslation && (
            <div className="mt-3 p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-sm text-amber-950 dark:text-amber-200 leading-relaxed animate-in fade-in">
              {material.translationUz}
            </div>
          )}
        </div>

        {/* Comprehension Questions */}
        {material.questions && material.questions.length > 0 && (
          <div className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Matnni tushunish bo‘yicha savollar:
            </h3>

            {material.questions.map((q, qIdx) => (
              <div key={q.id} className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700">
                <p className="font-semibold text-slate-900 dark:text-white text-sm mb-3">
                  {qIdx + 1}. {q.questionUz}
                </p>

                <div className="space-y-2">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = answers[q.id] === optIdx;
                    let optStyle = 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:border-brand-300';

                    if (isSelected) {
                      optStyle = 'border-brand-500 bg-brand-50 dark:bg-brand-950/60 ring-2 ring-brand-500/20 text-brand-950 dark:text-white font-semibold';
                    }
                    if (checked) {
                      if (optIdx === q.correctIndex) {
                        optStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-950 dark:text-emerald-200 ring-2 ring-emerald-500/20 font-bold';
                      } else if (isSelected) {
                        optStyle = 'border-red-400 bg-red-50 dark:bg-red-950/60 text-red-950 dark:text-red-200';
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectOption(q.id, optIdx)}
                        disabled={checked}
                        className={`w-full p-3 rounded-xl border text-left text-sm font-medium flex items-center justify-between transition ${optStyle}`}
                      >
                        <span>{opt}</span>
                        {checked && optIdx === q.correctIndex && (
                          <CheckCircle2 size={18} className="text-emerald-600 dark:text-emerald-400" />
                        )}
                        {checked && isSelected && optIdx !== q.correctIndex && (
                          <XCircle size={18} className="text-red-500" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {checked && q.explanationUz && (
                  <p className="mt-3 text-xs text-slate-600 dark:text-slate-300 italic bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-100 dark:border-slate-700">
                    💡 <span className="font-semibold">Izoh:</span> {q.explanationUz}
                  </p>
                )}
              </div>
            ))}

            <div className="flex justify-end pt-2">
              {!checked ? (
                <button
                  onClick={() => setChecked(true)}
                  disabled={Object.keys(answers).length === 0}
                  className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm transition shadow-sm disabled:opacity-50"
                >
                  Javoblarni tekshirish
                </button>
              ) : (
                <button
                  onClick={onNext}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 dark:bg-brand-600 hover:bg-black dark:hover:bg-brand-700 text-white font-semibold text-sm transition shadow-sm inline-flex items-center"
                >
                  <span>7-Qadam: Yozish bo‘limiga o‘tish (Schreiben)</span>
                  <ArrowRight size={16} className="ml-1.5" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-end">
        <button
          onClick={onNext}
          className="inline-flex items-center px-6 py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm transition shadow-sm active:scale-95"
        >
          <span>7-Qadam: Yozish bo‘limiga o‘tish (Schreiben)</span>
          <ArrowRight size={16} className="ml-2" />
        </button>
      </div>
    </div>
  );
};
