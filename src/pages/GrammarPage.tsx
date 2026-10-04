import React, { useState, useMemo } from 'react';
import { storageService } from '../lib/storage';
import { GrammarTopic, CEFRLevelCode } from '../types/database';
import { BookOpen, Search, ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react';
import { LevelBadge } from '../components/common/Badge';
import { AudioButton } from '../components/common/AudioButton';
import { FormattedText } from '../components/common/FormattedText';

export const GrammarPage: React.FC = () => {
  const allGrammar = storageService.getAllGrammar();
  const levels = storageService.getLevels();

  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<GrammarTopic | null>(allGrammar[0] || null);

  const filteredTopics = useMemo(() => {
    return allGrammar.filter((topic) => {
      if (selectedLevel !== 'all' && topic.levelCode !== selectedLevel) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          topic.titleDe.toLowerCase().includes(q) ||
          topic.titleUz.toLowerCase().includes(q) ||
          topic.explanationUz.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [allGrammar, selectedLevel, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 transition-colors duration-200">
      {/* Top Header */}
      <div>
        <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest block mb-1">
          Grammatika Ma‘lumotnomasi
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Nemis tili grammatika kutubxonasi
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          A1 dan B1 gacha bo‘lgan barcha grammatik qoidalar sodda o‘zbek tilida, jadvallar va misollar bilan.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Grammatika qoidasini qidiring (masalan: sein, Akkusativ, Perfekt, können)..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm font-medium"
          />
        </div>

        {/* Level Badges Tabs */}
        <div className="flex items-center space-x-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          <button
            onClick={() => setSelectedLevel('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex-shrink-0 ${
              selectedLevel === 'all'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            Barchasi
          </button>
          {levels.map((lvl) => (
            <button
              key={lvl.code}
              onClick={() => setSelectedLevel(lvl.code)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex-shrink-0 ${
                selectedLevel === lvl.code
                  ? 'bg-brand-600 text-white shadow-2xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {lvl.code.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Sidebar topic list & Content Viewer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: Topic Cards List */}
        <div className="lg:col-span-4 space-y-2.5 max-h-[75vh] overflow-y-auto pr-1">
          {filteredTopics.length === 0 ? (
            <div className="p-8 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-sm">
              Mavzu topilmadi
            </div>
          ) : (
            filteredTopics.map((topic) => {
              const isSelected = selectedTopic?.id === topic.id;

              return (
                <div
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-brand-50/80 dark:bg-brand-950/50 border-brand-500 ring-2 ring-brand-500/20 shadow-sm'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-brand-200 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <LevelBadge code={topic.levelCode} />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {topic.titleDe}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                    {topic.titleUz}
                  </p>
                </div>
              );
            })
          )}
        </div>

        {/* Right Side: Detailed Grammar Explanation Reader */}
        <div className="lg:col-span-8">
          {selectedTopic ? (
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-card space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-950/60 border border-brand-100 dark:border-brand-800 flex items-center justify-center text-brand-600 dark:text-brand-400 flex-shrink-0">
                  <BookOpen size={24} />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <LevelBadge code={selectedTopic.levelCode} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                    {selectedTopic.titleDe}
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-brand-600 dark:text-brand-400">
                    {selectedTopic.titleUz}
                  </p>
                </div>
              </div>

              {/* Uzbek Explanation with real markdown formatting */}
              <div className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-50/70 dark:bg-slate-800/60 p-5 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700">
                <FormattedText text={selectedTopic.explanationUz} />
              </div>

              {/* Responsive Tables */}
              {selectedTopic.tables && selectedTopic.tables.length > 0 && (
                <div className="space-y-4">
                  {selectedTopic.tables.map((table, tIdx) => (
                    <div key={tIdx} className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs">
                      {table.title && (
                        <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700">
                          {table.title}
                        </div>
                      )}
                      <table className="min-w-full text-left text-xs sm:text-sm">
                        <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                          <tr>
                            {table.headers.map((h, hIdx) => (
                              <th key={hIdx} className="px-4 py-2.5 border-b border-slate-200 dark:border-slate-700">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900">
                          {table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="px-4 py-2.5 font-medium text-slate-800 dark:text-slate-200">
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
              {selectedTopic.examples && selectedTopic.examples.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                    Misollar va foydalanish:
                  </h4>
                  <div className="space-y-2">
                    {selectedTopic.examples.map((ex, exIdx) => (
                      <div
                        key={exIdx}
                        className="p-3.5 rounded-2xl bg-brand-50/40 dark:bg-slate-800/60 border border-brand-100/70 dark:border-slate-700 flex items-center justify-between"
                      >
                        <div>
                          <div className="font-semibold text-slate-900 dark:text-white text-sm">
                            {ex.german}
                          </div>
                          <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                            {ex.uzbek}
                          </div>
                        </div>
                        <AudioButton text={ex.german} size="sm" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Common Mistakes */}
              {selectedTopic.commonMistakes && selectedTopic.commonMistakes.length > 0 && (
                <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/80">
                  <div className="flex items-center space-x-2 text-amber-800 dark:text-amber-300 font-bold text-sm mb-3">
                    <AlertTriangle size={18} />
                    <span>Tez-tez uchraydigan xatolar:</span>
                  </div>
                  <div className="space-y-2.5">
                    {selectedTopic.commonMistakes.map((m, mIdx) => (
                      <div key={mIdx} className="text-xs sm:text-sm space-y-1">
                        <div className="text-red-600 dark:text-red-400 font-medium">❌ Noto‘g‘ri: <span className="line-through">{m.incorrect}</span></div>
                        <div className="text-emerald-700 dark:text-emerald-400 font-semibold">✅ To‘g‘ri: {m.correct}</div>
                        <p className="text-slate-600 dark:text-slate-300 text-xs italic pl-4">{m.explanationUz}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-12 text-center text-slate-400 dark:text-slate-500">
              Grammatika mavzusini ko‘rish uchun chapdagi ro‘yxatdan tanlang.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
