import React from 'react';
import { GermanArticle, CEFRLevelCode, WordType } from '../../types/database';

interface ArticleBadgeProps {
  article?: GermanArticle | null;
  className?: string;
}

export const ArticleBadge: React.FC<ArticleBadgeProps> = ({ article, className = '' }) => {
  if (!article) return null;

  const config = {
    der: { label: 'der', class: 'bg-blue-50 text-blue-700 border-blue-200' },
    die: { label: 'die', class: 'bg-rose-50 text-rose-700 border-rose-200' },
    das: { label: 'das', class: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  }[article];

  return (
    <span
      className={`inline-block font-mono text-xs font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${config.class} ${className}`}
    >
      {config.label}
    </span>
  );
};

interface LevelBadgeProps {
  code: CEFRLevelCode | string;
  className?: string;
}

export const LevelBadge: React.FC<LevelBadgeProps> = ({ code, className = '' }) => {
  const normalized = code.toUpperCase();
  const isA1 = normalized.startsWith('A1');
  const isA2 = normalized.startsWith('A2');
  const isB1 = normalized.startsWith('B1');

  let colorClasses = 'bg-slate-100 text-slate-700 border-slate-200';
  if (isA1) colorClasses = 'bg-blue-50 text-blue-700 border-blue-200';
  if (isA2) colorClasses = 'bg-amber-50 text-amber-700 border-amber-200';
  if (isB1) colorClasses = 'bg-emerald-50 text-emerald-700 border-emerald-200';

  return (
    <span className={`inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full border ${colorClasses} ${className}`}>
      {normalized}
    </span>
  );
};

interface WordTypeBadgeProps {
  type: WordType;
}

export const WordTypeBadge: React.FC<WordTypeBadgeProps> = ({ type }) => {
  const typeLabels: Record<WordType, string> = {
    noun: 'Ot',
    verb: 'Fe‘l',
    adjective: 'Sifat',
    adverb: 'Ravish',
    expression: 'Ibora',
    phrase: 'Jumla',
    preposition: 'Predlog',
    conjunction: 'Bog‘lovchi',
  };

  return (
    <span className="text-[11px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded font-medium">
      {typeLabels[type] || type}
    </span>
  );
};
