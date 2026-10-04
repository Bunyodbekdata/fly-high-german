import React, { useState, useEffect } from 'react';
import { VocabularyItem } from '../../types/database';
import { AudioButton } from '../common/AudioButton';
import { ArticleBadge, WordTypeBadge, LevelBadge } from '../common/Badge';
import { 
  X, 
  RotateCw, 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  AlertCircle, 
  Sparkles, 
  Volume2,
  CheckCircle2,
  Star
} from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';
import confetti from 'canvas-confetti';

interface FlashcardTrainerModalProps {
  words: VocabularyItem[];
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export const FlashcardTrainerModal: React.FC<FlashcardTrainerModalProps> = ({
  words,
  isOpen,
  onClose,
  title = 'Lug‘at Flashcard Mashg‘uloti',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const { vocabProgress, markWordMastered, toggleFavoriteWord } = useProgress();

  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === '1') {
        handleMarkHard();
      } else if (e.key === '2') {
        handleMarkKnown();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, isFlipped, words.length]);

  if (!isOpen || words.length === 0) return null;

  const currentWord = words[currentIndex];
  const progress = vocabProgress[currentWord.id];
  const isMastered = progress?.status === 'mastered';
  const isFavorite = progress?.isFavorite || false;

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1 < words.length ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 >= 0 ? prev - 1 : words.length - 1));
  };

  const handleMarkKnown = () => {
    markWordMastered(currentWord.id, true);
    try {
      confetti({
        particleCount: 25,
        spread: 45,
        origin: { y: 0.7 },
      });
    } catch {
      // ignore
    }
    handleNext();
  };

  const handleMarkHard = () => {
    markWordMastered(currentWord.id, false);
    handleNext();
  };

  // Article styles
  const getArticleStyles = (article?: string | null) => {
    if (article === 'der') {
      return {
        bg: 'from-blue-500/10 via-blue-50/60 to-white dark:from-blue-950/40 dark:via-slate-900 dark:to-slate-900',
        border: 'border-blue-400 dark:border-blue-600',
        text: 'text-blue-600 dark:text-blue-400',
        glow: 'glow-der',
      };
    }
    if (article === 'die') {
      return {
        bg: 'from-rose-500/10 via-rose-50/60 to-white dark:from-rose-950/40 dark:via-slate-900 dark:to-slate-900',
        border: 'border-rose-400 dark:border-rose-600',
        text: 'text-rose-600 dark:text-rose-400',
        glow: 'glow-die',
      };
    }
    if (article === 'das') {
      return {
        bg: 'from-emerald-500/10 via-emerald-50/60 to-white dark:from-emerald-950/40 dark:via-slate-900 dark:to-slate-900',
        border: 'border-emerald-400 dark:border-emerald-600',
        text: 'text-emerald-600 dark:text-emerald-400',
        glow: 'glow-das',
      };
    }
    return {
      bg: 'from-purple-500/10 via-purple-50/60 to-white dark:from-purple-950/40 dark:via-slate-900 dark:to-slate-900',
      border: 'border-purple-400 dark:border-purple-600',
      text: 'text-purple-600 dark:text-purple-400',
      glow: 'glow-plural',
    };
  };

  const articleStyle = getArticleStyles(currentWord.article);
  const progressPercent = Math.round(((currentIndex + 1) / words.length) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6 flex flex-col relative transition-colors duration-200">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-600 dark:text-brand-400 mb-0.5">
              <Sparkles size={14} />
              <span>{title}</span>
            </div>
            <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400">
              Karta {currentIndex + 1} / {words.length} ({progressPercent}%)
            </h3>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => toggleFavoriteWord(currentWord.id)}
              className={`p-2 rounded-xl border transition ${
                isFavorite
                  ? 'bg-amber-50 dark:bg-amber-950/60 border-amber-300 dark:border-amber-700 text-amber-500'
                  : 'border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
              }`}
              title="Sevimli so‘z"
            >
              <Star size={18} fill={isFavorite ? 'currentColor' : 'none'} />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              title="Yopish (Esc)"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Linear Progress Bar */}
        <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-brand-600 h-full rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* 3D Flip Card Container */}
        <div className="perspective-1000 w-full min-h-[320px] flex items-center justify-center">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className={`w-full min-h-[320px] rounded-3xl p-7 border-2 cursor-pointer transition-transform duration-500 transform-style-3d relative flex flex-col justify-between ${
              articleStyle.border
            } ${articleStyle.glow} bg-gradient-to-br ${articleStyle.bg} ${
              isFlipped ? 'rotate-y-180' : ''
            }`}
          >
            {/* FRONT OF CARD */}
            <div className={`backface-hidden w-full h-full flex flex-col justify-between ${isFlipped ? 'hidden' : 'flex'}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {currentWord.article && <ArticleBadge article={currentWord.article} />}
                  <WordTypeBadge type={currentWord.wordType} />
                  <LevelBadge code={currentWord.levelCode} />
                </div>
                <AudioButton text={currentWord.german} size="lg" />
              </div>

              {/* Main German Word */}
              <div className="text-center my-auto py-6 space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                  Nemischa
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight flex items-center justify-center gap-2">
                  {currentWord.article && (
                    <span className={articleStyle.text}>{currentWord.article}</span>
                  )}
                  <span>
                    {currentWord.article
                      ? currentWord.german.replace(/^(der|die|das)\s+/i, '')
                      : currentWord.german}
                  </span>
                </h2>
                {currentWord.plural && (
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono">
                    Plural: <span className="font-bold text-slate-700 dark:text-slate-300">{currentWord.plural}</span>
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 dark:text-slate-500 pt-3 border-t border-slate-200/50 dark:border-slate-800">
                <span className="inline-flex items-center space-x-1">
                  <RotateCw size={13} />
                  <span>Aylantirish uchun kartani bosing</span>
                </span>
                <span className="font-mono text-[11px] hidden sm:inline">Bo‘sh joy (Space)</span>
              </div>
            </div>

            {/* BACK OF CARD */}
            <div className={`backface-hidden rotate-y-180 w-full h-full flex flex-col justify-between ${!isFlipped ? 'hidden' : 'flex'}`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                  O‘zbekcha Tarjimasi
                </span>
                <AudioButton text={currentWord.german} size="md" />
              </div>

              {/* Main Uzbek Translation */}
              <div className="text-center my-auto py-4 space-y-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {currentWord.uzbek}
                </h3>

                {currentWord.exampleDe && (
                  <div className="p-3.5 rounded-2xl bg-white/70 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700 text-left space-y-1 max-w-md mx-auto">
                    <div className="flex items-start justify-between">
                      <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 italic">
                        "{currentWord.exampleDe}"
                      </p>
                      <AudioButton text={currentWord.exampleDe} size="sm" />
                    </div>
                    {currentWord.exampleUz && (
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {currentWord.exampleUz}
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 dark:text-slate-500 pt-3 border-t border-slate-200/50 dark:border-slate-800">
                <span className="inline-flex items-center space-x-1">
                  <RotateCw size={13} />
                  <span>Oldi tomoniga qaytish</span>
                </span>
                {isMastered && (
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold inline-flex items-center gap-1">
                    <CheckCircle2 size={13} /> Yodlangan
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Actions: Bildim / Qiyin + Navigation */}
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleMarkHard}
              className="py-3 px-4 rounded-2xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/50 dark:hover:bg-rose-900/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 font-bold text-xs sm:text-sm flex items-center justify-center space-x-1.5 transition active:scale-95"
            >
              <AlertCircle size={16} />
              <span>Qiyin (Takrorlash) [1]</span>
            </button>

            <button
              onClick={handleMarkKnown}
              className="py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center space-x-1.5 shadow-sm transition active:scale-95"
            >
              <Check size={16} />
              <span>Bildim (Yodlandi) [2]</span>
            </button>
          </div>

          <div className="flex items-center justify-between pt-1">
            <button
              onClick={handlePrev}
              className="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold flex items-center space-x-1 transition"
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
              className="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold flex items-center space-x-1 transition"
            >
              <span>Keyingisi</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
