import React from 'react';
import { VocabularyItem } from '../../types/database';
import { AudioButton } from '../common/AudioButton';
import { ArticleBadge, WordTypeBadge, LevelBadge } from '../common/Badge';
import { Star, CheckCircle } from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';

interface VocabCardProps {
  item: VocabularyItem;
}

export const VocabCard: React.FC<VocabCardProps> = ({ item }) => {
  const { vocabProgress, toggleFavoriteWord, markWordMastered } = useProgress();
  const progress = vocabProgress[item.id];
  const isFavorite = progress?.isFavorite || false;
  const isMastered = progress?.status === 'mastered';

  const articleConfig: Record<string, { border: string; accent: string; glow: string }> = {
    der: {
      border: 'border-l-4 border-l-blue-500 dark:border-l-blue-400',
      accent: 'article-accent-der',
      glow: 'hover:shadow-glow-der',
    },
    die: {
      border: 'border-l-4 border-l-rose-500 dark:border-l-rose-400',
      accent: 'article-accent-die',
      glow: 'hover:shadow-glow-die',
    },
    das: {
      border: 'border-l-4 border-l-emerald-500 dark:border-l-emerald-400',
      accent: 'article-accent-das',
      glow: 'hover:shadow-glow-das',
    },
  };

  const articleStyles = (item.article && articleConfig[item.article]) || {
    border: 'border-l-4 border-l-purple-500 dark:border-l-purple-400',
    accent: 'article-accent-plural',
    glow: 'hover:shadow-glow-plural',
  };

  return (
    <div
      className={`p-4 rounded-2xl bg-white dark:bg-slate-900 border transition-all duration-200 group relative ${
        articleStyles.glow
      } ${
        isMastered
          ? 'border-emerald-400 dark:border-emerald-600 bg-emerald-50/30 dark:bg-emerald-950/20'
          : `border-slate-200 dark:border-slate-800 ${articleStyles.border}`
      }`}
    >
      {/* Top Header: Word Type, Level & Actions */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          {item.article && <ArticleBadge article={item.article} />}
          <WordTypeBadge type={item.wordType} />
          <LevelBadge code={item.levelCode} />
        </div>

        <div className="flex items-center space-x-1">
          <button
            onClick={() => markWordMastered(item.id, !isMastered)}
            title={isMastered ? "Yodlangan so‘z" : "Yodlangan deb belgilash"}
            className={`p-1.5 rounded-lg transition ${
              isMastered
                ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-100/70 dark:bg-emerald-950/60'
                : 'text-slate-300 dark:text-slate-600 hover:text-emerald-500 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <CheckCircle size={17} />
          </button>

          <button
            onClick={() => toggleFavoriteWord(item.id)}
            title={isFavorite ? "Sevimlilardan o‘chirish" : "Sevimlilarga qo‘shish"}
            className={`p-1.5 rounded-lg transition ${
              isFavorite
                ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/60'
                : 'text-slate-300 dark:text-slate-600 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Star size={17} fill={isFavorite ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>

      {/* Main German Word with Audio */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors flex items-center gap-1.5">
            {item.article && (
              <span className={`text-sm font-extrabold ${articleStyles.accent}`}>
                {item.article}
              </span>
            )}
            <span>{item.article ? item.german.replace(/^(der|die|das)\s+/i, '') : item.german}</span>
          </h4>
          {item.plural && (
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              Plural: <span className="font-semibold text-slate-700 dark:text-slate-300">{item.plural}</span>
            </span>
          )}
        </div>
        <AudioButton text={item.german} size="md" />
      </div>

      {/* Uzbek Translation */}
      <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-200 font-medium text-sm mb-3">
        {item.uzbek}
      </div>

      {/* Example Sentence with Audio */}
      {item.exampleDe && (
        <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs">
          <div className="flex items-start justify-between">
            <p className="font-semibold text-slate-800 dark:text-slate-200 italic pr-2">
              "{item.exampleDe}"
            </p>
            <AudioButton text={item.exampleDe} size="sm" />
          </div>
          {item.exampleUz && (
            <p className="text-slate-500 dark:text-slate-400 mt-1 text-[11px]">
              {item.exampleUz}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
