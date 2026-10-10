import React, { useState } from 'react';
import { storageService } from '../lib/storage';
import { BookOpen, CheckCircle2, XCircle, Eye, EyeOff, Lightbulb } from 'lucide-react';
import { AudioButton } from '../components/common/AudioButton';
import { LevelBadge } from '../components/common/Badge';

export const ReadingPage: React.FC = () => {
  const lessons = storageService.getLessons();
  const allReading = lessons.flatMap(l => 
    (l.reading || []).map(r => ({ ...r, levelCode: l.levelCode, lessonTitle: l.titleDe }))
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [checked, setChecked] = useState(false);

  const current = allReading[selectedIndex] || allReading[0];

  const handleSelectOption = (qId: string, optIdx: number) => {
    if (checked) return;
    setAnswers({ ...answers, [qId]: optIdx });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 transition-colors duration-200">
      <div>
        <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest block mb-1">
          O‘qib Tushunish (Leseverstehen)
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Nemis tili o‘qish matnlari kutubxonasi
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Turli mavzulardagi matnlarni o‘qing, lug‘at boyligingizni oshiring va tushunish savollarini yeching.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: Materials List */}
        <div className="lg:col-span-4 space-y-2.5 max-h-[75vh] overflow-y-auto pr-1">
          {allReading.map((item, idx) => {
            const isSelected = selectedIndex === idx;

            return (
              <div
                key={item.id}
                onClick={() => {
                  setSelectedIndex(idx);
                  setChecked(false);
                  setAnswers({});
                  setShowTranslation(false);
                }}
                className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-brand-50/80 dark:bg-brand-950/40 border-brand-500 ring-2 ring-brand-500/20 shadow-sm'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-brand-200 dark:hover:border-brand-800 hover:bg-slate-50 dark:hover:bg-slate-850'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <LevelBadge code={item.levelCode} />
                  <span className="text-[11px] text-slate-400 dark:text-slate-500">{item.lessonTitle}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  {item.titleDe}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {item.titleUz}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Side: Text & Questions */}
        <div className="lg:col-span-8">
          {current && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-card space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-100 dark:border-amber-800 flex items-center justify-center text-amber-600 dark:text-amber-400">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {current.titleDe}
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold text-brand-600 dark:text-brand-400">
                      {current.titleUz}
                    </p>
                  </div>
                </div>
                <LevelBadge code={current.levelCode} />
              </div>

              {/* Text Card with Audio */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Nemischa matn
                  </span>
                  <AudioButton text={current.textDe} size="md" />
                </div>
                <p className="text-base sm:text-lg text-slate-900 dark:text-white leading-relaxed font-serif">
                  {current.textDe}
                </p>
              </div>

              {/* Vocabulary hints */}
              {current.vocabularyHints && current.vocabularyHints.length > 0 && (
                <div className="p-4 rounded-2xl bg-brand-50/50 dark:bg-brand-950/30 border border-brand-100 dark:border-brand-800">
                  <div className="flex items-center space-x-2 text-brand-800 dark:text-brand-300 font-bold text-xs uppercase tracking-wider mb-2">
                    <Lightbulb size={16} />
                    <span>Yangi so‘zlar:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {current.vocabularyHints.map((hint, idx) => (
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

              {/* Translation toggle */}
              <div>
                <button
                  onClick={() => setShowTranslation(!showTranslation)}
                  className="inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
                >
                  {showTranslation ? <EyeOff size={14} className="mr-1.5" /> : <Eye size={14} className="mr-1.5" />}
                  {showTranslation ? 'O‘zbekcha tarjimani yashirish' : 'O‘zbekcha tarjimani ko‘rish'}
                </button>

                {showTranslation && (
                  <div className="mt-3 p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-sm text-amber-950 dark:text-amber-200 leading-relaxed animate-in fade-in">
                    {current.translationUz}
                  </div>
                )}
              </div>

              {/* Comprehension Questions */}
              {current.questions && current.questions.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    Matnni tushunish savollari:
                  </h3>
                  {current.questions.map((q, qIdx) => (
                    <div key={q.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                      <p className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                        {qIdx + 1}. {q.questionUz}
                      </p>
                      <div className="space-y-2">
                        {q.options.map((opt, optIdx) => {
                          const isSelected = answers[q.id] === optIdx;
                          let optStyle = 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:border-brand-300 dark:hover:border-brand-500';
                          if (isSelected) optStyle = 'border-brand-500 dark:border-brand-500 bg-brand-50 dark:bg-brand-950/60 text-brand-950 dark:text-brand-200 ring-2 ring-brand-500/20';
                          if (checked) {
                            if (optIdx === q.correctIndex) optStyle = 'border-emerald-500 dark:border-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-950 dark:text-emerald-200 font-bold';
                            else if (isSelected) optStyle = 'border-red-400 dark:border-red-600 bg-red-50 dark:bg-red-950/60 text-red-950 dark:text-red-200';
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectOption(q.id, optIdx)}
                              disabled={checked}
                              className={`w-full p-2.5 rounded-xl border text-left text-xs sm:text-sm font-medium flex items-center justify-between transition ${optStyle}`}
                            >
                              <span>{opt}</span>
                              {checked && optIdx === q.correctIndex && <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400" />}
                              {checked && isSelected && optIdx !== q.correctIndex && <XCircle size={16} className="text-red-500 dark:text-red-400" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}

                  <div className="flex justify-end pt-2">
                    <button
                      onClick={() => setChecked(true)}
                      disabled={checked || Object.keys(answers).length === 0}
                      className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm transition shadow-sm disabled:opacity-50"
                    >
                      Tekshirish
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
