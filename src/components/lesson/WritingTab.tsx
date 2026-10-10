import React, { useState } from 'react';
import { ScaffoldedWriting, WritingTask } from '../../types/database';
import { PenTool, CheckCircle, Lightbulb, Eye, EyeOff, ArrowRight, Lock, PlusCircle, Sparkles } from 'lucide-react';
import { AudioButton } from '../common/AudioButton';

interface WritingTabProps {
  scaffold?: ScaffoldedWriting;
  writing?: WritingTask[];
  onNext: () => void;
}

export const WritingTab: React.FC<WritingTabProps> = ({ scaffold, writing, onNext }) => {
  const [studentText, setStudentText] = useState('');
  const [showModelAnswer, setShowModelAnswer] = useState(false);

  const activeScaffold = scaffold;
  const legacyTask = (!activeScaffold && writing && writing.length > 0) ? writing[0] : null;

  if (!activeScaffold && !legacyTask) {
    return (
      <div className="max-w-3xl mx-auto py-12 text-center text-slate-500">
        Bu dars uchun yozish vazifasi kiritilmagan.
      </div>
    );
  }

  const wordCount = studentText.trim() ? studentText.trim().split(/\s+/).length : 0;
  const isAttemptSufficient = wordCount >= 6;

  const handleInsertStarter = (starter: string) => {
    if (studentText.includes(starter)) return;
    setStudentText(prev => {
      const trimmed = prev.trim();
      return trimmed ? `${trimmed}\n${starter} ` : `${starter} `;
    });
  };

  // If using Scaffolded Writing
  if (activeScaffold) {
    return (
      <div className="max-w-4xl mx-auto py-8 px-4 space-y-8">
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-card">
          {/* Header */}
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-950/60 border border-brand-100 dark:border-brand-900/50 flex items-center justify-center text-brand-600 dark:text-brand-400">
              <PenTool size={24} />
            </div>
            <div>
              <span className="text-xs uppercase font-bold text-brand-700 dark:text-brand-400 tracking-wider">
                Bosqichma-bosqich yozma nutq (Schreiben mit Gerüst)
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                {activeScaffold.taskTitleUz}
              </h2>
            </div>
          </div>

          {/* Prompt & Instructions */}
          <div className="p-6 rounded-2xl bg-brand-50/60 dark:bg-brand-950/30 border border-brand-100 dark:border-brand-900/40 mb-6">
            <h3 className="font-bold text-brand-950 dark:text-brand-200 text-base mb-2">
              📝 Vazifa mavzusi: {activeScaffold.promptUz}
            </h3>
            <p className="text-sm text-brand-900 dark:text-brand-300 leading-relaxed">
              {activeScaffold.taskInstructionsUz}
            </p>
          </div>

          {/* Controlled Scaffolding: Sentence Starters */}
          {activeScaffold.controlledScaffolding?.sentenceStarters && (
            <div className="mb-6 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 flex items-center">
                  <Sparkles size={14} className="text-amber-500 mr-1.5" />
                  Gap boshlovchi namunalar (Bosing va matningizga qo‘shing):
                </span>
                <span className="text-xs text-slate-400 dark:text-slate-500">Yordamchi andoza</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {activeScaffold.controlledScaffolding.sentenceStarters.map((starter, idx) => (
                  <button
                    key={`starter-${idx}-${starter}`}
                    type="button"
                    onClick={() => handleInsertStarter(starter)}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-brand-400 dark:hover:border-brand-500 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-brand-700 dark:hover:text-brand-300 shadow-2xs transition group"
                  >
                    <PlusCircle size={13} className="mr-1.5 text-slate-400 group-hover:text-brand-600 dark:group-hover:text-brand-400" />
                    <span>{starter}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Useful Vocabulary */}
          {activeScaffold.usefulVocabulary && activeScaffold.usefulVocabulary.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center">
                <Lightbulb size={14} className="mr-1 text-amber-500" />
                Vazifa uchun foydali lug‘at:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeScaffold.usefulVocabulary.map((vocab, idx) => (
                  <div
                    key={`vocab-${vocab.german || idx}`}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-750 flex items-center justify-between text-xs"
                  >
                    <div>
                      <span className="font-bold text-slate-900 dark:text-slate-100 text-sm block">{vocab.german}</span>
                      <span className="text-slate-500 dark:text-slate-400">{vocab.uzbek}</span>
                    </div>
                    <AudioButton text={vocab.german} size="sm" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Student Writing Box */}
          <div className="mb-6">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
              Sizning nemischa matningiz:
            </label>
            <textarea
              rows={6}
              value={studentText}
              onChange={(e) => setStudentText(e.target.value)}
              placeholder="O‘rgangan so‘z va grammatik qoidalardan foydalanib, nemis tilida matn yozing..."
              className="w-full p-4 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/90 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm leading-relaxed font-sans shadow-2xs"
            />
            <div className="flex justify-between items-center text-xs mt-2">
              <span className={`font-semibold ${isAttemptSufficient ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-500 dark:text-slate-400'}`}>
                So‘zlar soni: {wordCount} ta {isAttemptSufficient ? '✓ (Yaxshi harakat!)' : '(Kamida 6-10 ta so‘z yozing)'}
              </span>
              <span className="text-slate-400 dark:text-slate-500 hidden sm:inline">
                A1 darajada 3-5 ta sodda gap tuzish tavsiya etiladi
              </span>
            </div>
          </div>

          {/* Attempt-First Model Answer Section */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
            {!isAttemptSufficient ? (
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-200/70 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400">
                    <Lock size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                      Namunaviy javob (Model Answer) hozircha yopiq
                    </span>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Pedagogik qoida: Avval o‘zingiz yozib ko‘ring (kamida 6 ta so‘z). Shunda javob ochiladi!
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <button
                  onClick={() => setShowModelAnswer(!showModelAnswer)}
                  className="inline-flex items-center text-xs font-bold px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-black dark:bg-slate-800 dark:hover:bg-slate-700 text-white transition shadow-sm"
                >
                  {showModelAnswer ? <EyeOff size={14} className="mr-1.5" /> : <Eye size={14} className="mr-1.5" />}
                  {showModelAnswer ? 'Namunaviy javobni berkitish' : 'Namunaviy javobni ko‘rish va taqqoslash'}
                </button>

                {showModelAnswer && (
                  <div className="mt-4 p-6 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 animate-in fade-in">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider flex items-center">
                        <CheckCircle size={14} className="mr-1.5" />
                        Namunaviy to‘g‘ri matn (Mustertext):
                      </span>
                      <AudioButton text={activeScaffold.modelAnswerDe} size="sm" />
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-emerald-950 dark:text-emerald-200 mb-3 whitespace-pre-line leading-relaxed font-serif">
                      "{activeScaffold.modelAnswerDe}"
                    </p>
                    <div className="pt-3 border-t border-emerald-200/70 dark:border-emerald-800/60 text-xs text-emerald-900 dark:text-emerald-300 italic">
                      <span className="font-bold not-italic">O‘zbekcha tarjimasi:</span> {activeScaffold.modelAnswerUz}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-end">
          <button
            onClick={onNext}
            className="inline-flex items-center px-6 py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm transition shadow-sm"
          >
            <span>Shadowing (Talaffuz va takrorlash) mashqiga o‘tish</span>
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </div>
    );
  }

  // Legacy fallback
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-8">
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-card">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-950/60 border border-brand-100 dark:border-brand-900/50 flex items-center justify-center text-brand-600 dark:text-brand-400">
            <PenTool size={24} />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
              {legacyTask?.titleUz}
            </h2>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Amaliy yozma nutqni shakllantirish
            </p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-brand-50/50 dark:bg-brand-950/30 border border-brand-100 dark:border-brand-900/40 mb-6">
          <h3 className="font-bold text-brand-950 dark:text-brand-200 text-base mb-2">
            {legacyTask?.promptUz}
          </h3>
          <p className="text-sm text-brand-900 dark:text-brand-300 leading-relaxed">
            {legacyTask?.taskInstructionsUz}
          </p>
        </div>

        <div className="mb-6">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
            Sizning javobingiz (Nemis tilida yozing):
          </label>
          <textarea
            rows={5}
            value={studentText}
            onChange={(e) => setStudentText(e.target.value)}
            placeholder="Nemis tilidagi matningizni shu yerga yozing..."
            className="w-full p-4 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm leading-relaxed font-sans"
          />
          <div className="flex justify-between items-center text-xs text-slate-400 dark:text-slate-500 mt-2">
            <span>So‘zlar soni: {wordCount} ta</span>
            <span>Kamida 3-5 ta to‘liq gap tuzish tavsiya etiladi</span>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={() => setShowModelAnswer(!showModelAnswer)}
            className="inline-flex items-center text-xs font-semibold px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition"
          >
            {showModelAnswer ? <EyeOff size={14} className="mr-1.5" /> : <Eye size={14} className="mr-1.5" />}
            {showModelAnswer ? 'Namunaviy javobni yashirish' : 'Namunaviy javobni ko‘rish (Model Answer)'}
          </button>

          {showModelAnswer && legacyTask && (
            <div className="mt-4 p-5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 animate-in fade-in">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider">
                  Namunaviy javob (Nemischa):
                </span>
                <AudioButton text={legacyTask.modelAnswerDe} size="sm" />
              </div>
              <p className="text-sm font-semibold text-emerald-950 dark:text-emerald-200 mb-3 font-serif">
                "{legacyTask.modelAnswerDe}"
              </p>
              <div className="pt-2 border-t border-emerald-200/60 dark:border-emerald-800/60 text-xs text-emerald-800 dark:text-emerald-300 italic">
                <span className="font-semibold not-italic">O‘zbekcha tarjimasi:</span> {legacyTask.modelAnswerUz}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={onNext}
          className="inline-flex items-center px-6 py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm transition shadow-sm"
        >
          <span>Shadowing (Takrorlash) mashqiga o‘tish</span>
          <ArrowRight size={16} className="ml-2" />
        </button>
      </div>
    </div>
  );
};
