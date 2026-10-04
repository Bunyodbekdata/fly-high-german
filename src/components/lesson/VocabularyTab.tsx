import React, { useState, useEffect } from 'react';
import { VocabularyItem } from '../../types/database';
import { VocabCard } from '../vocabulary/VocabCard';
import { AudioButton } from '../common/AudioButton';
import { ArticleBadge } from '../common/Badge';
import { 
  ArrowRight, 
  ArrowLeft, 
  RotateCw, 
  Layers, 
  LayoutGrid, 
  CheckCircle, 
  Star, 
  Sparkles,
  Check,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';
import confetti from 'canvas-confetti';

interface VocabularyTabProps {
  vocabulary?: VocabularyItem[];
  onNext: () => void;
}

export const VocabularyTab: React.FC<VocabularyTabProps> = ({ vocabulary, onNext }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'flashcards'>('grid');
  const [filterArticle, setFilterArticle] = useState<'all' | 'der' | 'die' | 'das' | 'other'>('all');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const { vocabProgress, markWordMastered, toggleFavoriteWord } = useProgress();

  if (!vocabulary || vocabulary.length === 0) {
    return (
      <div className="max-w-3xl mx-auto py-12 text-center text-slate-500 dark:text-slate-400">
        Bu dars uchun lug‘at kiritilmagan.
      </div>
    );
  }

  // Filtered vocabulary
  const filteredVocab = vocabulary.filter((item) => {
    if (filterArticle === 'all') return true;
    if (filterArticle === 'other') return !item.article;
    return item.article === filterArticle;
  });

  const derCount = vocabulary.filter((v) => v.article === 'der').length;
  const dieCount = vocabulary.filter((v) => v.article === 'die').length;
  const dasCount = vocabulary.filter((v) => v.article === 'das').length;
  const otherCount = vocabulary.filter((v) => !v.article).length;

  const currentFlashcard = filteredVocab[flashcardIndex] || filteredVocab[0];
  const isMastered = currentFlashcard ? vocabProgress[currentFlashcard.id]?.status === 'mastered' : false;
  const isFavorite = currentFlashcard ? vocabProgress[currentFlashcard.id]?.isFavorite : false;

  // Reset index when filter changes
  useEffect(() => {
    setFlashcardIndex(0);
    setIsFlipped(false);
  }, [filterArticle, viewMode]);

  const handleNextFlashcard = () => {
    setIsFlipped(false);
    setFlashcardIndex((prev) => (prev + 1 < filteredVocab.length ? prev + 1 : 0));
  };

  const handlePrevFlashcard = () => {
    setIsFlipped(false);
    setFlashcardIndex((prev) => (prev - 1 >= 0 ? prev - 1 : filteredVocab.length - 1));
  };

  const handleMarkKnown = () => {
    if (!currentFlashcard) return;
    markWordMastered(currentFlashcard.id, true);
    try {
      confetti({
        particleCount: 20,
        spread: 40,
        origin: { y: 0.7 },
      });
    } catch {
      // ignore
    }
    handleNextFlashcard();
  };

  const handleMarkHard = () => {
    if (!currentFlashcard) return;
    markWordMastered(currentFlashcard.id, false);
    handleNextFlashcard();
  };

  const getArticleStyles = (article?: string | null) => {
    if (article === 'der') {
      return {
        bg: 'from-blue-500/10 via-blue-50/50 to-white dark:from-blue-950/40 dark:via-slate-900 dark:to-slate-900',
        border: 'border-blue-400 dark:border-blue-600',
        text: 'text-blue-600 dark:text-blue-400',
        badge: 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-950/70 dark:text-blue-300 dark:border-blue-800',
        glow: 'glow-der',
      };
    }
    if (article === 'die') {
      return {
        bg: 'from-rose-500/10 via-rose-50/50 to-white dark:from-rose-950/40 dark:via-slate-900 dark:to-slate-900',
        border: 'border-rose-400 dark:border-rose-600',
        text: 'text-rose-600 dark:text-rose-400',
        badge: 'bg-rose-100 text-rose-800 border-rose-200 dark:bg-rose-950/70 dark:text-rose-300 dark:border-rose-800',
        glow: 'glow-die',
      };
    }
    if (article === 'das') {
      return {
        bg: 'from-emerald-500/10 via-emerald-50/50 to-white dark:from-emerald-950/40 dark:via-slate-900 dark:to-slate-900',
        border: 'border-emerald-400 dark:border-emerald-600',
        text: 'text-emerald-600 dark:text-emerald-400',
        badge: 'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-950/70 dark:text-emerald-300 dark:border-emerald-800',
        glow: 'glow-das',
      };
    }
    return {
      bg: 'from-purple-500/10 via-purple-50/50 to-white dark:from-purple-950/40 dark:via-slate-900 dark:to-slate-900',
      border: 'border-purple-400 dark:border-purple-600',
      text: 'text-purple-600 dark:text-purple-400',
      badge: 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-950/70 dark:text-purple-300 dark:border-purple-800',
      glow: 'glow-plural',
    };
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-6 transition-colors duration-200">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs font-bold text-blue-700 dark:text-blue-300 mb-1">
            <Sparkles size={14} />
            <span>3-Qadam: Dars Lug‘ati (Wortschatz)</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {vocabulary.length} ta faol nemischa so‘z
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            Rangli artikllar bilan eslab qoling va talaffuzini mustahkamlang.
          </p>
        </div>

        {/* View Mode Toggle: Grid vs Flashcards */}
        <div className="flex items-center space-x-2 self-start sm:self-auto bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl border border-slate-200 dark:border-slate-700">
          <button
            onClick={() => setViewMode('grid')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
              viewMode === 'grid'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <LayoutGrid size={15} />
            <span>Ro‘yxat</span>
          </button>

          <button
            onClick={() => setViewMode('flashcards')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
              viewMode === 'flashcards'
                ? 'bg-brand-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Layers size={15} />
            <span>Flesh-kartochkalar</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs by Gender / Type */}
      <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-1">
        <button
          onClick={() => setFilterArticle('all')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex-shrink-0 ${
            filterArticle === 'all'
              ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
              : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
          }`}
        >
          Barchasi ({vocabulary.length})
        </button>

        {derCount > 0 && (
          <button
            onClick={() => setFilterArticle('der')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex-shrink-0 ${
              filterArticle === 'der'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 hover:bg-blue-100'
            }`}
          >
            der — Erkak ({derCount})
          </button>
        )}

        {dieCount > 0 && (
          <button
            onClick={() => setFilterArticle('die')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex-shrink-0 ${
              filterArticle === 'die'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'bg-rose-50/80 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 hover:bg-rose-100'
            }`}
          >
            die — Ayol ({dieCount})
          </button>
        )}

        {dasCount > 0 && (
          <button
            onClick={() => setFilterArticle('das')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex-shrink-0 ${
              filterArticle === 'das'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100'
            }`}
          >
            das — O‘rta ({dasCount})
          </button>
        )}

        {otherCount > 0 && (
          <button
            onClick={() => setFilterArticle('other')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex-shrink-0 ${
              filterArticle === 'other'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'bg-purple-50/80 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 hover:bg-purple-100'
            }`}
          >
            Fe‘llar & Iboralar ({otherCount})
          </button>
        )}
      </div>

      {/* VIEW MODE 1: 3D FLASHCARDS TRAINER */}
      {viewMode === 'flashcards' && currentFlashcard && (
        <div className="max-w-xl mx-auto py-4 space-y-5">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 px-2">
            <span>
              Kartochka {flashcardIndex + 1} / {filteredVocab.length}
            </span>
            <span className="text-slate-400">
              Aylantirish uchun kartani bosing
            </span>
          </div>

          {/* Interactive 3D Flip Card */}
          <div className="perspective-1000 w-full min-h-[310px]">
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className={`cursor-pointer min-h-[310px] p-7 rounded-3xl border-2 transition-transform duration-500 transform-style-3d shadow-card flex flex-col justify-between relative bg-gradient-to-br ${
                getArticleStyles(currentFlashcard.article).bg
              } ${getArticleStyles(currentFlashcard.article).border} ${
                getArticleStyles(currentFlashcard.article).glow
              } ${isFlipped ? 'rotate-y-180' : ''}`}
            >
              {/* FRONT OF CARD */}
              <div className={`backface-hidden w-full h-full flex flex-col justify-between ${isFlipped ? 'hidden' : 'flex'}`}>
                {/* Top Badges */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {currentFlashcard.article && (
                      <span
                        className={`font-mono text-xs font-extrabold px-2.5 py-1 rounded-lg border ${
                          getArticleStyles(currentFlashcard.article).badge
                        }`}
                      >
                        {currentFlashcard.article}
                      </span>
                    )}
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-white/90 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 uppercase">
                      {currentFlashcard.wordType}
                    </span>
                  </div>

                  <div className="flex items-center space-x-1" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => markWordMastered(currentFlashcard.id, !isMastered)}
                      className={`p-2 rounded-xl transition ${
                        isMastered
                          ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60'
                          : 'text-slate-300 dark:text-slate-600 hover:text-emerald-500 bg-white/90 dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
                      }`}
                      title={isMastered ? "Yodlangan" : "Yodlangan deb belgilash"}
                    >
                      <CheckCircle size={18} />
                    </button>
                    <button
                      onClick={() => toggleFavoriteWord(currentFlashcard.id)}
                      className={`p-2 rounded-xl transition ${
                        isFavorite
                          ? 'text-amber-500 bg-amber-100 dark:bg-amber-950/60'
                          : 'text-slate-300 dark:text-slate-600 hover:text-amber-500 bg-white/90 dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
                      }`}
                      title="Sevimlilarga qo‘shish"
                    >
                      <Star size={18} fill={isFavorite ? 'currentColor' : 'none'} />
                    </button>
                  </div>
                </div>

                {/* Center Content: German */}
                <div className="text-center py-6">
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center justify-center gap-2">
                    {currentFlashcard.article && (
                      <span className={getArticleStyles(currentFlashcard.article).text}>
                        {currentFlashcard.article}
                      </span>
                    )}
                    <span>
                      {currentFlashcard.article
                        ? currentFlashcard.german.replace(/^(der|die|das)\s+/i, '')
                        : currentFlashcard.german}
                    </span>
                  </h3>
                  {currentFlashcard.plural && (
                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-2 font-mono">
                      Plural: {currentFlashcard.plural}
                    </p>
                  )}
                  <div
                    className="mt-4 inline-flex items-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <AudioButton text={currentFlashcard.german} size="lg" />
                  </div>
                  <p className="text-xs font-semibold text-brand-600 dark:text-brand-400 mt-4 flex items-center justify-center space-x-1">
                    <RotateCw size={13} />
                    <span>O‘zbekcha tarjimasini ko‘rish uchun bosing</span>
                  </p>
                </div>

                <div className="text-center text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                  Old tomon (Nemischa)
                </div>
              </div>

              {/* BACK OF CARD */}
              <div className={`backface-hidden rotate-y-180 w-full h-full flex flex-col justify-between ${!isFlipped ? 'hidden' : 'flex'}`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                    O‘zbekcha Tarjimasi
                  </span>
                  <div onClick={(e) => e.stopPropagation()}>
                    <AudioButton text={currentFlashcard.german} size="sm" />
                  </div>
                </div>

                <div className="text-center py-4 space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                    {currentFlashcard.uzbek}
                  </h3>

                  {currentFlashcard.exampleDe && (
                    <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 text-left text-xs sm:text-sm">
                      <div className="flex items-start justify-between">
                        <p className="font-bold text-slate-900 dark:text-white italic">
                          "{currentFlashcard.exampleDe}"
                        </p>
                        <div onClick={(e) => e.stopPropagation()}>
                          <AudioButton text={currentFlashcard.exampleDe} size="sm" />
                        </div>
                      </div>
                      {currentFlashcard.exampleUz && (
                        <p className="text-slate-500 dark:text-slate-400 mt-1">{currentFlashcard.exampleUz}</p>
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

          {/* Flashcard SRS Rating Actions */}
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

          {/* Navigation Prev / Next */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handlePrevFlashcard}
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
              onClick={handleNextFlashcard}
              className="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold flex items-center space-x-1 transition"
            >
              <span>Keyingisi</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}

      {/* VIEW MODE 2: GRID LIST */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredVocab.map((item) => (
            <VocabCard key={item.id} item={item} />
          ))}
        </div>
      )}

      {/* Bottom Next Step Button */}
      <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          Lug‘at o‘rganib bo‘lingach, grammatik qoidaga o‘ting
        </span>

        <button
          onClick={onNext}
          className="inline-flex items-center px-6 py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm transition shadow-sm"
        >
          <span>4-Qadam: Grammatikaga o‘tish</span>
          <ArrowRight size={16} className="ml-2" />
        </button>
      </div>
    </div>
  );
};
