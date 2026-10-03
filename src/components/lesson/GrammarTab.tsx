import React from 'react';
import { GrammarTopic, GrammarDiscovery } from '../../types/database';
import { AudioButton } from '../common/AudioButton';
import { BookOpen, AlertTriangle, ArrowRight, Lightbulb, Compass, GitCommit } from 'lucide-react';

interface GrammarTabProps {
  grammar?: GrammarTopic[];
  grammarDiscovery?: GrammarDiscovery;
  onNext: () => void;
}

export const GrammarTab: React.FC<GrammarTabProps> = ({ grammar, grammarDiscovery, onNext }) => {
  if ((!grammar || grammar.length === 0) && !grammarDiscovery) {
    return (
      <div className="max-w-3xl mx-auto py-12 text-center text-slate-500">
        Bu dars uchun grammatika qoidasi mavjud emas.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-8">
      {/* 1. Guided Grammar Discovery (Inductive Learning) */}
      {grammarDiscovery && (
        <div className="bg-gradient-to-br from-indigo-50/70 via-white to-blue-50/70 rounded-3xl border border-indigo-200/80 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center space-x-2 text-indigo-700 font-bold text-xs uppercase tracking-wider">
            <Compass size={16} />
            <span>Grammatik qoidani kashf qilish (Grammatik entdecken)</span>
          </div>

          <h3 className="text-lg font-bold text-slate-900">
            {grammarDiscovery.observationPromptUz}
          </h3>

          {/* Discovery Examples */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
            {grammarDiscovery.discoveryExamples.map((ex, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-white border border-indigo-100 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm">{ex.german}</span>
                  <AudioButton text={ex.german} size="sm" />
                </div>
                <div className="text-xs text-indigo-600 font-semibold font-mono mt-1">
                  E‘tibor bering: {ex.highlight}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">{ex.uzbek}</div>
              </div>
            ))}
          </div>

          {/* Pattern Explanation & Formula */}
          <div className="p-4 rounded-2xl bg-indigo-900 text-white space-y-2 shadow-sm">
            <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider block">
              Xulosa va qoida formulasi:
            </span>
            <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed font-medium">
              {grammarDiscovery.patternExplanationUz}
            </p>
            <div className="pt-2 border-t border-indigo-800 text-xs sm:text-sm font-mono font-bold text-amber-300">
              📐 Formula: {grammarDiscovery.ruleFormulaUz}
            </div>
          </div>
        </div>
      )}

      {/* 2. Main Grammar Topics */}
      {(grammar || []).map((topic) => (
        <div key={topic.id} className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-card space-y-6">
          {/* Header */}
          <div className="flex items-center space-x-3 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600">
              <BookOpen size={24} />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                {topic.titleDe}
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-brand-600 mt-0.5">
                {topic.titleUz}
              </p>
            </div>
          </div>

          {/* Simple Uzbek Explanation */}
          <div className="text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line bg-slate-50/70 p-5 rounded-2xl border border-slate-200/80">
            {topic.explanationUz}
          </div>

          {/* Special German Word Order Reinforcement (Section 14) */}
          {topic.wordOrderRuleUz && (
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs sm:text-sm text-amber-950 space-y-1.5">
              <div className="flex items-center space-x-2 font-bold text-amber-900">
                <GitCommit size={16} />
                <span>Nemis tilida so‘z tartibi qoidasi:</span>
              </div>
              <p className="leading-relaxed">
                {topic.wordOrderRuleUz}
              </p>
            </div>
          )}

          {/* Grammar Tables */}
          {topic.tables && topic.tables.length > 0 && (
            <div className="space-y-4">
              {topic.tables.map((table, tIdx) => (
                <div key={tIdx} className="overflow-x-auto rounded-2xl border border-slate-200 shadow-2xs">
                  {table.title && (
                    <div className="bg-slate-100 px-4 py-2.5 font-bold text-xs sm:text-sm text-slate-800 border-b border-slate-200">
                      {table.title}
                    </div>
                  )}
                  <table className="min-w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold">
                      <tr>
                        {table.headers.map((h, hIdx) => (
                          <th key={hIdx} className="px-4 py-3 border-b border-slate-200">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                      {table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50/80 transition-colors">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="px-4 py-3 font-medium text-slate-800">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          )}

          {/* Example Sentences */}
          {topic.examples && topic.examples.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Misollar va foydalanish:
              </h4>
              <div className="space-y-2.5">
                {topic.examples.map((ex, exIdx) => (
                  <div
                    key={exIdx}
                    className="p-3.5 rounded-2xl bg-brand-50/40 border border-brand-100/70 flex items-center justify-between"
                  >
                    <div>
                      <div className="font-semibold text-slate-900 text-sm sm:text-base">
                        {ex.german}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-600 mt-0.5">
                        {ex.uzbek}
                      </div>
                      {ex.highlight && (
                        <div className="text-[11px] font-mono text-brand-600 font-semibold mt-1">
                          Asosiy qoida: {ex.highlight}
                        </div>
                      )}
                    </div>
                    <AudioButton text={ex.german} size="sm" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Common Mistakes */}
          {topic.commonMistakes && topic.commonMistakes.length > 0 && (
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200">
              <div className="flex items-center space-x-2 text-amber-800 font-bold text-sm mb-3">
                <AlertTriangle size={18} />
                <span>Tez-tez uchraydigan xatolar va ulardan saqlanish:</span>
              </div>
              <div className="space-y-3">
                {topic.commonMistakes.map((mistake, mIdx) => (
                  <div key={mIdx} className="text-xs sm:text-sm space-y-1">
                    <div className="flex items-center space-x-2 text-red-600">
                      <span className="font-bold">❌ Noto‘g‘ri:</span>
                      <span className="line-through">{mistake.incorrect}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-emerald-700">
                      <span className="font-bold">✅ To‘g‘ri:</span>
                      <span className="font-semibold">{mistake.correct}</span>
                    </div>
                    <p className="text-slate-600 pl-6 text-xs italic">
                      {mistake.explanationUz}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}

      <div className="flex justify-end">
        <button
          onClick={onNext}
          className="inline-flex items-center px-6 py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm transition shadow-sm"
        >
          <span>3-bosqichli Tinglash mashqiga o‘tish (Listening)</span>
          <ArrowRight size={16} className="ml-2" />
        </button>
      </div>
    </div>
  );
};
