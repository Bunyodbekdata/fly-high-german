import React, { useState } from 'react';
import { VocabularyItem } from '../../types/database';
import { AudioButton } from '../common/AudioButton';
import { ArticleBadge, LevelBadge } from '../common/Badge';
import { RotateCw, Check, X, ArrowLeft, ArrowRight } from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';

interface FlashcardDeckProps {
  items: VocabularyItem[];
  onClose?: () => void;
}

export const FlashcardDeck: React.FC<FlashcardDeckProps> = ({ items, onClose }) => {
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const { markWordMastered } = useProgress();

  if (!items || items.length === 0) {
    return (
      <div className="p-8 text-center text-slate-500 bg-white rounded-2xl border">
        Flashcard mashqi uchun so‘zlar topilmadi.
      </div>
    );
  }

  const current = items[index];

  const handleNext = () => {
    setIsFlipped(false);
    if (index + 1 < items.length) {
      setIndex(prev => prev + 1);
    } else {
      setIndex(0);
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    if (index > 0) {
      setIndex(prev => prev - 1);
    } else {
      setIndex(items.length - 1);
    }
  };

  const markLearnedAndNext = () => {
    markWordMastered(current.id, true);
    handleNext();
  };

  return (
    <div className="max-w-md mx-auto my-6">
      {/* Top Status */}
      <div className="flex items-center justify-between mb-3 text-xs text-slate-500 font-medium">
        <span>Karta: {index + 1} / {items.length}</span>
        {onClose && (
          <button onClick={onClose} className="hover:text-slate-800 underline">
            Kartalarni yopish
          </button>
        )}
      </div>

      {/* Flip Card Container */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="w-full h-80 relative cursor-pointer select-none perspective"
      >
        <div className={`w-full h-full rounded-3xl p-8 flex flex-col justify-between items-center text-center shadow-card border transition-all duration-300 transform ${
          isFlipped ? 'bg-gradient-to-br from-brand-50 to-blue-50 border-brand-200' : 'bg-white border-slate-200 hover:border-brand-300'
        }`}>
          {/* Card Top Badges */}
          <div className="flex items-center justify-between w-full">
            <LevelBadge code={current.levelCode} />
            {current.article && <ArticleBadge article={current.article} />}
          </div>

          {/* Center Content */}
          <div className="my-auto">
            {!isFlipped ? (
              <div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-2">
                  {current.german}
                </h3>
                {current.plural && (
                  <p className="text-xs text-slate-500 font-mono">
                    Plural: {current.plural}
                  </p>
                )}
                <div className="mt-4" onClick={(e) => e.stopPropagation()}>
                  <AudioButton text={current.german} size="lg" />
                </div>
              </div>
            ) : (
              <div>
                <span className="text-xs text-brand-600 font-bold uppercase tracking-wider block mb-1">
                  O‘zbekcha tarjimasi:
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {current.uzbek}
                </h3>
                {current.exampleDe && (
                  <div className="p-3 bg-white/80 rounded-xl border border-slate-200 text-xs text-slate-700 italic max-w-xs mx-auto">
                    "{current.exampleDe}"
                    {current.exampleUz && (
                      <div className="text-slate-500 mt-1 not-italic text-[11px]">
                        {current.exampleUz}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Flip Hint */}
          <div className="text-[11px] text-slate-400 flex items-center">
            <RotateCw size={13} className="mr-1" />
            Kartani aylantirish uchun bosing
          </div>
        </div>
      </div>

      {/* Control Actions */}
      <div className="flex items-center justify-between mt-5 gap-3">
        <button
          onClick={handlePrev}
          className="p-3 rounded-2xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 shadow-sm transition"
        >
          <ArrowLeft size={18} />
        </button>

        <button
          onClick={handleNext}
          className="flex-1 py-3 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition flex items-center justify-center space-x-1"
        >
          <X size={16} className="text-slate-400" />
          <span>Hali o‘rganmoqdaman</span>
        </button>

        <button
          onClick={markLearnedAndNext}
          className="flex-1 py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition flex items-center justify-center space-x-1 shadow-sm"
        >
          <Check size={16} />
          <span>Bilaman</span>
        </button>

        <button
          onClick={handleNext}
          className="p-3 rounded-2xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 shadow-sm transition"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};
