import React, { useState, useEffect } from 'react';
import { VocabularyItem } from '../../types/database';
import { AudioButton } from '../common/AudioButton';
import { ArticleBadge, LevelBadge, WordTypeBadge } from '../common/Badge';
import { RotateCw, Check, AlertCircle, ArrowLeft, ArrowRight, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';
import confetti from 'canvas-confetti';

interface FlashcardDeckProps {
  items: VocabularyItem[];
  onClose?: () => void;
}

export const FlashcardDeck: React.FC<FlashcardDeckProps> = ({ items, onClose }) => {
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const { vocabProgress, markWordMastered } = useProgress();

  if (!items || items.length === 0) {
    return (
      <div className="p-8 text-center text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
        Flashcard mashqi uchun so‘zlar topilmadi.
      </div>
    );
  }

  const current = items[index];
  const isMastered = vocabProgress[current.id]?.status === 'mastered';

  const handleNext = () => {
    setIsFlipped(false);
    setIndex((prev) => (prev + 1 < items.length ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setIndex((prev) => (prev - 1 >= 0 ? prev - 1 : items.length - 1));
  };

  const handleMarkKnown = () => {
    markWordMastered(current.id, true);
    try {
      confetti({
        particleCount: 20,
        spread: 45,
        origin: { y: 0.7 },
      });
    } catch {
      // ignore
    }
    handleNext();
  };

  const handleMarkHard = () => {
    markWordMastered(current.id, false);
    handleNext();
  };

  const getArticleStyles = (article?: string | null) => {
    if (article === 'der') {
      return {
        bg: 'from-blue-500/10 via-blue-50/50 to-white dark:from-blue-950/40 dark:via-slate-900 dark:to-slate-900',
        border: 'border-blue-400 dark:border-blue-600',
        text: 'text-blue-600 dark:text-blue-400',
        glow: 'glow-der',
      };
    }
    if (article === 'die') {
      return {
        bg: 'from-rose-500/10 via-rose-50/50 to-white dark:from-rose-950/40 dark:via-slate-900 dark:to-slate-900',
        border: 'border-rose-400 dark:border-rose-600',
        text: 'text-rose-600 dark:text-rose-400',
        glow: 'glow-die',
      };
    }
    if (article === 'das') {
      return {
        bg: 'from-emerald-500/10 via-emerald-50/50 to-white dark:from-emerald-950/40 dark:via-slate-900 dark:to-slate-900',
        border: 'border-emerald-400 dark:border-emerald-600',
        text: 'text-emerald-600 dark:text-emerald-400',
        glow: 'glow-das',
      };
    }
    return {
      bg: 'from-violet-500/10 via-violet-50/50 to-white dark:from-violet-950/40 dark:via-slate-900 dark:to-slate-900',
      border: 'border-violet-400 dark:border-violet-600',
      text: 'text-violet-600 dark:text-violet-400',
      glow: 'glow-plural',
    };
  };

  const articleStyle = getArticleStyles(current.article);
  const progressPercent = Math.round(((index + 1) / items.length) * 100);

  return (
    <div className="max-w-lg mx-auto py-2 space-y-4">
      {/* Top Status */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-semibold px-1">
        <span className="flex items-center gap-1.5">
          <Sparkles size={14} className="text-brand-600 dark:text-brand-400" />
          <span>Karta: {index + 1} / {items.length} ({progressPercent}%)</span>
        </span>
        {onClose && (
          <button
            onClick={onClose}
            className="flex items-center space-x-1 text-slate-500 hover:text-slate-900 dark:hover:text-white transition"
          >
            <X size={14} />
            <span>Kartalarni yopish</span>
          </button>
        )}
      </div>

      {/* Linear progress */}
      <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
        <div
          className="bg-brand-600 h-full rounded-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* 3D Flip Card Container */}
      <div className="perspective-1000 w-full min-h-[300px]">
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className={`cursor-pointer min-h-[300px] p-7 rounded-3xl border-2 transition-transform duration-500 transform-style-3d shadow-card flex flex-col justify-between relative bg-gradient-to-br ${
            articleStyle.bg
          } ${articleStyle.border} ${articleStyle.glow} ${isFlipped ? 'rotate-y-180' : ''}`}
        >
          {/* FRONT */}
          <div className={`backface-hidden w-full h-full flex flex-col justify-between ${isFlipped ? 'hidden' : 'flex'}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <LevelBadge code={current.levelCode} />
                {current.article && <ArticleBadge article={current.article} />}
                <WordTypeBadge type={current.wordType} />
              </div>
              <div onClick={(e) => e.stopPropagation()}>
                <AudioButton text={current.german} size="lg" />
              </div>
            </div>

            <div className="text-center py-6">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center justify-center gap-2">
                {current.article && (
                  <span className={articleStyle.text}>{current.article}</span>
                )}
                <span>
                  {current.article ? current.german.replace(/^(der|die|das)\s+/i, '') : current.german}
                </span>
              </h3>
              {current.plural && (
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono mt-1.5">
                  Plural: <span className="font-bold text-slate-700 dark:text-slate-300">{current.plural}</span>
                </p>
              )}
              <p className="text-xs font-semibold text-brand-600 dark:text-brand-400 mt-4 flex items-center justify-center space-x-1">
                <RotateCw size={13} />
                <span>O‘zbekcha tarjimasini ko‘rish uchun bosing</span>
              </p>
            </div>

            <div className="text-center text-[11px] font-semibold text-slate-400 dark:text-slate-500">
              Old tomon (Nemischa)
            </div>
          </div>

          {/* BACK */}
          <div className={`backface-hidden rotate-y-180 w-full h-full flex flex-col justify-between ${!isFlipped ? 'hidden' : 'flex'}`}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                O‘zbekcha Ma‘nosi
              </span>
              <div onClick={(e) => e.stopPropagation()}>
                <AudioButton text={current.german} size="sm" />
              </div>
            </div>

            <div className="text-center py-4 space-y-3">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {current.uzbek}
              </h3>

              {current.exampleDe && (
                <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 text-left text-xs sm:text-sm">
                  <div className="flex items-start justify-between">
                    <p className="font-bold text-slate-900 dark:text-white italic">
                      "{current.exampleDe}"
                    </p>
                    <div onClick={(e) => e.stopPropagation()}>
                      <AudioButton text={current.exampleDe} size="sm" />
                    </div>
                  </div>
                  {current.exampleUz && (
                    <p className="text-slate-500 dark:text-slate-400 mt-1">{current.exampleUz}</p>
                  )}
                </div>
              )}
            </div>

            <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 dark:text-slate-500">
              <span>Orqa tomon (Tarjima)</span>
              {isMastered && (
                <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 size={12} /> Yodlangan
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* SRS Controls: Qiyin vs Bildim */}
      <div className="grid grid-cols-2 gap-3 pt-1">
        <button
          onClick={handleMarkHard}
          className="py-3 px-4 rounded-2xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-900/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 font-bold text-xs sm:text-sm flex items-center justify-center space-x-1.5 transition active:scale-95"
        >
          <AlertCircle size={16} />
          <span>Qiyin (Takrorlash)</span>
        </button>

        <button
          onClick={handleMarkKnown}
          className="py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center space-x-1.5 shadow-sm transition active:scale-95"
        >
          <Check size={16} />
          <span>Bildim (Yodlandi)</span>
        </button>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between pt-1">
        <button
          onClick={handlePrev}
          className="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 text-xs font-semibold flex items-center space-x-1 transition"
        >
          <ArrowLeft size={14} />
          <span>Oldingisi</span>
        </button>

        <button
          onClick={() => setIsFlipped(!isFlipped)}
          className="px-4 py-2 rounded-xl text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-950/50 text-xs font-bold flex items-center space-x-1 transition"
        >
          <RotateCw size={14} />
          <span>Aylantirish</span>
        </button>

        <button
          onClick={handleNext}
          className="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 text-xs font-semibold flex items-center space-x-1 transition"
        >
          <span>Keyingisi</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};
