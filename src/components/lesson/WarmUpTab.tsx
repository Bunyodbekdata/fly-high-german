import React from 'react';
import { WarmUpContext } from '../../types/database';
import { Sparkles, MessageCircle, ArrowRight, HelpCircle } from 'lucide-react';
import { AudioButton } from '../common/AudioButton';

interface WarmUpTabProps {
  warmUp?: WarmUpContext;
  objectives: string[];
  descriptionUz?: string;
  onNext: () => void;
}

export const WarmUpTab: React.FC<WarmUpTabProps> = ({
  warmUp,
  objectives,
  descriptionUz,
  onNext,
}) => {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4 space-y-6 transition-colors duration-200">
      {/* 1. Warm-Up & Situation */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-card">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-xs font-bold text-brand-700 dark:text-brand-300 mb-4">
          <Sparkles size={14} />
          <span>1-Qadam: Darsga kirish (Warm-Up & Einstieg)</span>
        </div>

        {warmUp ? (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Haqiqiy hayotiy vaziyat:
              </h2>
              <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed mt-2 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 font-medium">
                {warmUp.situationUz}
              </p>
            </div>

            {/* Curiosity Question */}
            <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 flex items-start space-x-3">
              <HelpCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 block mb-1">
                  O‘ylab ko‘ring:
                </span>
                <p className="text-sm font-semibold text-amber-950 dark:text-amber-100">
                  {warmUp.curiosityQuestionUz}
                </p>
              </div>
            </div>

            {/* Mini starter dialogue if present */}
            {warmUp.miniDialogue && warmUp.miniDialogue.length > 0 && (
              <div className="space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                  Namuna mini-vaziyat:
                </span>
                <div className="space-y-2">
                  {warmUp.miniDialogue.map((line, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between"
                    >
                      <div>
                        <span className="text-xs font-bold text-brand-700 dark:text-brand-400 block">{line.speaker}:</span>
                        <span className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">{line.textDe}</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">{line.textUz}</span>
                      </div>
                      <AudioButton text={line.textDe} size="sm" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
            {descriptionUz}
          </div>
        )}

        {/* 2. Clear Learning Objectives (Bugun siz...) */}
        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
          <h3 className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-3">
            🎯 Ushbu darsdan keyin siz nimalarni qila olasiz:
          </h3>
          <ul className="space-y-2.5">
            {objectives.map((obj, idx) => (
              <li key={idx} className="flex items-start space-x-3 text-sm text-slate-800 dark:text-slate-200 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-600 dark:bg-brand-400 mt-2 flex-shrink-0" />
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Next step button */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={onNext}
            className="inline-flex items-center px-6 py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm transition shadow-sm active:scale-95"
          >
            <span>2-Qadam: Jonli muloqotga o‘tish</span>
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};
