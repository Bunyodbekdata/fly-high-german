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
  Sparkles 
} from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';

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
      <div className="max-w-3xl mx-auto py-12 text-center text-slate-500">
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

  const getArticleStyles = (article?: string | null) => {
    if (article === 'der') {
      return {
        bg: 'from-blue-500/10 via-blue-50 to-white',
        border: 'border-blue-300',
        text: 'text-blue-700',
        badge: 'bg-blue-100 text-blue-800 border-blue-200',
      };
    }
    if (article === 'die') {
      return {
        bg: 'from-rose-500/10 via-rose-50 to-white',
        border: 'border-rose-300',
        text: 'text-rose-700',
        badge: 'bg-rose-100 text-rose-800 border-rose-200',
      };
    }
    if (article === 'das') {
      return {
        bg: 'from-amber-500/10 via-amber-50 to-white',
        border: 'border-amber-300',
        text: 'text-amber-700',
        badge: 'bg-amber-100 text-amber-800 border-amber-200',
      };
    }
    return {
      bg: 'from-purple-500/10 via-purple-50 to-white',
      border: 'border-purple-300',
      text: 'text-purple-700',
      badge: 'bg-purple-100 text-purple-800 border-purple-200',
    };
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 mb-1">
            <Sparkles size={14} />
            <span>3-Qadam: Dars Lug‘ati (Wortschatz)</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            {vocabulary.length} ta faol nemischa so‘z
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Rangli artikllar bilan eslab qoling va talaffuzini mustahkamlang.
          </p>
        </div>

        {/* View Mode Toggle: Grid vs Flashcards */}
        <div className="flex items-center space-x-2 self-start sm:self-auto bg-slate-100 p-1 rounded-2xl border border-slate-200">
          <button
            onClick={() => setViewMode('grid')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
              viewMode === 'grid'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
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
                : 'text-slate-600 hover:text-slate-900'
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
              ? 'bg-slate-900 text-white shadow-sm'
              : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
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
                : 'bg-blue-50/80 border border-blue-200 text-blue-700 hover:bg-blue-100'
            }`}
          >
            der — Erkak jinsi ({derCount})
          </button>
        )}

        {dieCount > 0 && (
          <button
            onClick={() => setFilterArticle('die')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex-shrink-0 ${
              filterArticle === 'die'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'bg-rose-50/80 border border-rose-200 text-rose-700 hover:bg-rose-100'
            }`}
          >
            die — Ayol jinsi ({dieCount})
          </button>
        )}

        {dasCount > 0 && (
          <button
            onClick={() => setFilterArticle('das')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex-shrink-0 ${
              filterArticle === 'das'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-amber-50/80 border border-amber-200 text-amber-700 hover:bg-amber-100'
            }`}
          >
            das — O‘rta jins ({dasCount})
          </button>
        )}

        {otherCount > 0 && (
          <button
            onClick={() => setFilterArticle('other')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex-shrink-0 ${
              filterArticle === 'other'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'bg-purple-50/80 border border-purple-200 text-purple-700 hover:bg-purple-100'
            }`}
          >
            Fe‘llar & Iboralar ({otherCount})
          </button>
        )}
      </div>

      {/* VIEW MODE 1: FLASHCARDS TRAINER */}
      {viewMode === 'flashcards' && currentFlashcard && (
        <div className="max-w-xl mx-auto py-4 space-y-6">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 px-2">
            <span>
              Kartochka {flashcardIndex + 1} / {filteredVocab.length}
            </span>
            <span className="text-slate-400">
              Aylantirish uchun kartani bosing yoki «Aylantirish» tugmasini bosing
            </span>
          </div>

          {/* Interactive Flip Card */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className={`cursor-pointer min-h-[300px] p-8 rounded-3xl border-2 transition-all duration-300 shadow-card flex flex-col justify-between relative bg-gradient-to-br ${
              getArticleStyles(currentFlashcard.article).bg
            } ${getArticleStyles(currentFlashcard.article).border} hover:scale-[1.01]`}
          >
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
                <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600 uppercase">
                  {currentFlashcard.wordType}
                </span>
              </div>

              <div className="flex items-center space-x-1" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => markWordMastered(currentFlashcard.id, !isMastered)}
                  className={`p-2 rounded-xl transition ${
                    isMastered
                      ? 'text-emerald-600 bg-emerald-100'
                      : 'text-slate-300 hover:text-emerald-500 bg-white border border-slate-200'
                  }`}
                  title={isMastered ? "Yodlangan" : "Yodlangan deb belgilash"}
                >
                  <CheckCircle size={18} />
                </button>
                <button
                  onClick={() => toggleFavoriteWord(currentFlashcard.id)}
                  className={`p-2 rounded-xl transition ${
                    isFavorite
                      ? 'text-amber-500 bg-amber-100'
                      : 'text-slate-300 hover:text-amber-500 bg-white border border-slate-200'
                  }`}
                  title="Sevimlilarga qo‘shish"
                >
                  <Star size={18} fill={isFavorite ? 'currentColor' : 'none'} />
                </button>
              </div>
            </div>

            {/* Center Content: German or Uzbek depending on Flip */}
            <div className="text-center py-6">
              {!isFlipped ? (
                <div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {currentFlashcard.german}
                  </h3>
                  {currentFlashcard.plural && (
                    <p className="text-sm font-semibold text-slate-500 mt-2 font-mono">
                      Plural: {currentFlashcard.plural}
                    </p>
                  )}
                  <div
                    className="mt-4 inline-flex items-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <AudioButton text={currentFlashcard.german} size="lg" />
                  </div>
                  <p className="text-xs font-semibold text-brand-600 mt-4 flex items-center justify-center space-x-1">
                    <RotateCw size={13} />
                    <span>O‘zbekcha tarjimasini ko‘rish uchun bosing</span>
                  </p>
                </div>
              ) : (
                <div className="animate-fadeIn">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    O‘zbekcha ma‘nosi:
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-700">
                    {currentFlashcard.uzbek}
                  </h3>

                  {currentFlashcard.exampleDe && (
                    <div className="mt-6 p-4 rounded-2xl bg-white/80 border border-slate-200/80 text-left text-xs sm:text-sm">
                      <div className="flex items-start justify-between">
                        <p className="font-bold text-slate-900 italic">
                          "{currentFlashcard.exampleDe}"
                        </p>
                        <div onClick={(e) => e.stopPropagation()}>
                          <AudioButton text={currentFlashcard.exampleDe} size="sm" />
                        </div>
                      </div>
                      {currentFlashcard.exampleUz && (
                        <p className="text-slate-500 mt-1">{currentFlashcard.exampleUz}</p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Bottom Flip status indicator */}
            <div className="text-center text-[11px] font-semibold text-slate-400">
              {isFlipped ? 'Orqa tomon (Tarjima)' : 'Old tomon (Nemischa)'}
            </div>
          </div>

          {/* Flashcard Navigation Controls */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={handlePrevFlashcard}
              className="px-5 py-3 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 font-bold text-sm text-slate-700 flex items-center space-x-2 shadow-sm transition"
            >
              <ArrowLeft size={16} />
              <span>Oldingisi</span>
            </button>

            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm flex items-center space-x-2 shadow-sm transition"
            >
              <RotateCw size={15} />
              <span>{isFlipped ? 'Nemischaga o‘girish' : 'Tarjimani ko‘rish'}</span>
            </button>

            <button
              onClick={handleNextFlashcard}
              className="px-5 py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm flex items-center space-x-2 shadow-sm transition"
            >
              <span>Keyingisi</span>
              <ArrowRight size={16} />
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
      <div className="mt-8 pt-6 border-t border-slate-200 flex justify-between items-center">
        <span className="text-xs font-semibold text-slate-500">
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
