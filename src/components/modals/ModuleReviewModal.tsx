import React, { useState } from 'react';
import { ModuleReviewData } from '../../lib/seedReviewsData';
import { AudioButton } from '../common/AudioButton';
import { ExerciseRunner } from '../exercises/ExerciseRunner';
import { ArticleBadge } from '../common/Badge';
import { X, CheckCircle2, Award, BookOpen, Bookmark, FileText, CheckSquare, Sparkles, ArrowRight } from 'lucide-react';

interface ModuleReviewModalProps {
  reviewData: ModuleReviewData;
  isOpen: boolean;
  onClose: () => void;
  onCompleteTest?: (score: number) => void;
}

export const ModuleReviewModal: React.FC<ModuleReviewModalProps> = ({
  reviewData,
  isOpen,
  onClose,
  onCompleteTest,
}) => {
  const [activeTab, setActiveTab] = useState<'recap' | 'vocab' | 'test'>('recap');
  const [testScore, setTestScore] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleFinishTest = (score: number) => {
    setTestScore(score);
    if (onCompleteTest) {
      onCompleteTest(score);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-brand-600 via-indigo-600 to-blue-700 text-white flex items-start justify-between">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold text-blue-100 mb-2">
              <Sparkles size={13} />
              <span>Modul Yakuni: Wiederholung & Mini-Test</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black">
              {reviewData.titleDe}
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 mt-0.5">
              {reviewData.titleUz}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-2xl bg-white/10 hover:bg-white/20 text-white transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Sub-tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 px-6 gap-2 pt-2">
          <button
            onClick={() => setActiveTab('recap')}
            className={`px-4 py-2.5 rounded-t-2xl font-bold text-xs sm:text-sm flex items-center space-x-2 border-b-2 transition ${
              activeTab === 'recap'
                ? 'border-brand-600 text-brand-700 dark:text-brand-400 bg-white dark:bg-slate-900 shadow-2xs'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <CheckSquare size={15} />
            <span>1. Natijalar & Grammatika</span>
          </button>

          <button
            onClick={() => setActiveTab('vocab')}
            className={`px-4 py-2.5 rounded-t-2xl font-bold text-xs sm:text-sm flex items-center space-x-2 border-b-2 transition ${
              activeTab === 'vocab'
                ? 'border-brand-600 text-brand-700 dark:text-brand-400 bg-white dark:bg-slate-900 shadow-2xs'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Bookmark size={15} />
            <span>2. Lug‘at Takrori ({reviewData.keyVocab.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('test')}
            className={`px-4 py-2.5 rounded-t-2xl font-bold text-xs sm:text-sm flex items-center space-x-2 border-b-2 transition ${
              activeTab === 'test'
                ? 'border-brand-600 text-brand-700 dark:text-brand-400 bg-white dark:bg-slate-900 shadow-2xs'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Award size={15} />
            <span>3. Mini-Test ({reviewData.miniTest.length} savol)</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* TAB 1: Communicative Checklist & Grammar */}
          {activeTab === 'recap' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-brand-50/60 dark:bg-brand-950/40 border border-brand-100 dark:border-brand-800 text-xs sm:text-sm text-brand-950 dark:text-brand-200">
                <span className="font-bold block mb-1">Modul mazmuni:</span>
                <p className="leading-relaxed">{reviewData.summaryUz}</p>
              </div>

              {/* Checklist */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center">
                  <CheckCircle2 size={16} className="text-emerald-500 mr-1.5" />
                  Siz endi quyidagilarni bajara olasiz:
                </h4>
                <div className="space-y-2">
                  {reviewData.checklistUz.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 flex items-start space-x-3 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium"
                    >
                      <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Grammar Notes */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center">
                  <FileText size={16} className="text-brand-600 dark:text-brand-400 mr-1.5" />
                  Modulning asosiy grammatik qoidalari:
                </h4>
                <div className="space-y-3">
                  {reviewData.grammarNotesUz.map((gn, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                      <span className="font-bold text-sm text-slate-900 dark:text-white block mb-1">
                        {gn.title}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {gn.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  onClick={() => setActiveTab('vocab')}
                  className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm inline-flex items-center shadow-sm"
                >
                  <span>Lug‘atni takrorlashga o‘tish</span>
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: Key Vocabulary Recap with explicit articles and audio */}
          {activeTab === 'vocab' && (
            <div className="space-y-6">
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Ushbu modulda o‘rganilgan eng muhim asosiy so‘zlar. Artikllarga (der/die/das) va ko‘plik qo‘shimchalariga e‘tibor bering:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {reviewData.keyVocab.map((v, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-between"
                  >
                    <div>
                      <div className="flex items-center space-x-2">
                        {v.article && (
                          <ArticleBadge article={v.article as any} />
                        )}
                        <span className="font-bold text-slate-900 dark:text-white text-sm">
                          {v.german}
                        </span>
                      </div>
                      {v.plural && (
                        <span className="text-[11px] text-slate-400 dark:text-slate-500 block mt-0.5">
                          Plural: {v.plural}
                        </span>
                      )}
                      <span className="text-xs text-slate-600 dark:text-slate-300 font-medium block mt-1">
                        {v.uzbek}
                      </span>
                    </div>

                    <AudioButton text={v.german} size="sm" />
                  </div>
                ))}
              </div>

              <div className="flex justify-end pt-4">
                <button
                  onClick={() => setActiveTab('test')}
                  className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm inline-flex items-center shadow-sm"
                >
                  <span>Mini-Testni boshlash</span>
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: Interactive Mini-Test */}
          {activeTab === 'test' && (
            <div className="space-y-6">
              {testScore === null ? (
                <div>
                  <div className="mb-4 p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-xs sm:text-sm text-blue-950 dark:text-blue-200 flex items-center justify-between">
                    <span>
                      Modul bo‘yicha {reviewData.miniTest.length} ta savol. Natijangiz hisoblanadi.
                    </span>
                    <span className="font-bold text-blue-800 dark:text-blue-300">Minimal o‘tish: 80%</span>
                  </div>

                  <ExerciseRunner
                    exercises={reviewData.miniTest}
                    onFinish={handleFinishTest}
                  />
                </div>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-3xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-sm">
                    <Award size={36} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                    Mini-Test Yakunlandi!
                  </h3>
                  <p className="text-base text-slate-600 dark:text-slate-300">
                    Sizning natijangiz: <strong className="text-brand-600 dark:text-brand-400">{testScore}%</strong>
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                    {testScore >= 80
                      ? 'Ajoyib natija! Ushbu modul mavzularini mukammal o‘zlashtirdingiz.'
                      : 'Yaxshi harakat! Biroq modul grammatikasi va lug‘atini yana bir bor qayta ko‘rib chiqishingizni tavsiya qilamiz.'}
                  </p>

                  <div className="pt-4 flex justify-center space-x-3">
                    <button
                      onClick={() => setTestScore(null)}
                      className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs"
                    >
                      Testni qayta topshirish
                    </button>
                    <button
                      onClick={onClose}
                      className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs"
                    >
                      Yopish va davom ettirish
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
