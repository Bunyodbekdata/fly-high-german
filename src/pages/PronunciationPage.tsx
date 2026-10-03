import React, { useState } from 'react';
import { PRONUNCIATION_RULES } from '../lib/pronunciationData';
import { AudioButton } from '../components/common/AudioButton';
import { Volume2, Sparkles, BookOpen, Layers } from 'lucide-react';

export const PronunciationPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'umlauts' | 'diphthongs' | 'consonants'>('all');

  const filteredRules = selectedCategory === 'all'
    ? PRONUNCIATION_RULES
    : PRONUNCIATION_RULES.filter(r => r.category === selectedCategory);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Header */}
      <div>
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-xs font-bold text-brand-700 mb-2">
          <Sparkles size={14} />
          <span>A1 Talaffuz Poydevori</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Nemis tili talaffuz qoidalari va tovushlar
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
          Nemis tilida har bir harf va birikmaning o‘ziga xos aniq talaffuz qoidasi bor. Tovushlarni tinglang va audioni takrorlab mashq qiling.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center space-x-2 border-b border-slate-200 pb-3 overflow-x-auto">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex-shrink-0 ${
            selectedCategory === 'all'
              ? 'bg-brand-600 text-white shadow-sm'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          Barchasi ({PRONUNCIATION_RULES.length})
        </button>

        <button
          onClick={() => setSelectedCategory('umlauts')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex-shrink-0 ${
            selectedCategory === 'umlauts'
              ? 'bg-brand-600 text-white shadow-sm'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          Umlautlar & Eszett (ä, ö, ü, ß)
        </button>

        <button
          onClick={() => setSelectedCategory('diphthongs')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex-shrink-0 ${
            selectedCategory === 'diphthongs'
              ? 'bg-brand-600 text-white shadow-sm'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          Diftonglar (ei, ie, eu, au)
        </button>

        <button
          onClick={() => setSelectedCategory('consonants')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex-shrink-0 ${
            selectedCategory === 'consonants'
              ? 'bg-brand-600 text-white shadow-sm'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          Maxsus Undoshlar (sch, sp, st, ch, z, w, v)
        </button>
      </div>

      {/* Rules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredRules.map((rule) => (
          <div
            key={rule.id}
            className="bg-white rounded-3xl border border-slate-200 p-6 shadow-card hover:border-brand-300 transition-all space-y-4"
          >
            {/* Top Symbol Banner */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-2xl font-black font-mono text-brand-600 bg-brand-50 border border-brand-100 px-3.5 py-1.5 rounded-2xl">
                  {rule.symbol}
                </span>
                <div>
                  <h3 className="text-base font-bold text-slate-900">{rule.nameUz}</h3>
                  <span className="text-xs font-semibold text-slate-500">{rule.pronunciationUz}</span>
                </div>
              </div>
            </div>

            {/* Uzbek Sound Explanation */}
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-700 leading-relaxed">
              <span className="font-bold text-slate-900 block mb-0.5">💡 Qanday aytiladi:</span>
              {rule.soundHintUz}
            </div>

            {/* Example Words with Audio */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Namuna so‘zlar:
              </span>
              <div className="space-y-2">
                {rule.examples.map((ex, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50/70 border border-slate-200/70 flex items-center justify-between"
                  >
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-slate-900 text-sm">{ex.german}</span>
                        <span className="text-xs font-mono text-brand-600 font-semibold">{ex.phonetic}</span>
                      </div>
                      <span className="text-xs text-slate-500 mt-0.5 block">{ex.uzbek}</span>
                    </div>
                    <AudioButton text={ex.german} size="sm" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
