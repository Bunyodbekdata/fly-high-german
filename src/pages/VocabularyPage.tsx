import React, { useState, useMemo } from 'react';
import { storageService } from '../lib/storage';
import { useProgress } from '../context/ProgressContext';
import { VocabCard } from '../components/vocabulary/VocabCard';
import { FlashcardDeck } from '../components/vocabulary/FlashcardDeck';
import { CEFRLevelCode, WordType } from '../types/database';
import { 
  Bookmark, 
  Search, 
  Filter, 
  RotateCw, 
  Star, 
  CheckCircle, 
  SlidersHorizontal,
  X 
} from 'lucide-react';

export const VocabularyPage: React.FC = () => {
  const allVocab = storageService.getAllVocabulary();
  const levels = storageService.getLevels();
  const { vocabProgress } = useProgress();

  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [onlyUnlearned, setOnlyUnlearned] = useState(false);
  const [isFlashcardMode, setIsFlashcardMode] = useState(false);

  // Filter logic
  const filteredVocab = useMemo(() => {
    return allVocab.filter((item) => {
      if (selectedLevel !== 'all' && item.levelCode !== selectedLevel) return false;
      if (selectedType !== 'all' && item.wordType !== selectedType) return false;

      const progress = vocabProgress[item.id];
      if (onlyFavorites && !progress?.isFavorite) return false;
      if (onlyUnlearned && progress?.status === 'mastered') return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          item.german.toLowerCase().includes(q) ||
          item.uzbek.toLowerCase().includes(q) ||
          (item.exampleDe && item.exampleDe.toLowerCase().includes(q))
        );
      }

      return true;
    });
  }, [allVocab, selectedLevel, selectedType, searchQuery, onlyFavorites, onlyUnlearned, vocabProgress]);

  const masteredCount = allVocab.filter(v => vocabProgress[v.id]?.status === 'mastered').length;
  const favoriteCount = allVocab.filter(v => vocabProgress[v.id]?.isFavorite).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-brand-600 uppercase tracking-widest block mb-1">
            Lug‘at Tizimi
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Nemis tili lug‘at kutubxonasi
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Jami {allVocab.length} ta so‘z | {masteredCount} ta yodlangan | {favoriteCount} ta sevimli
          </p>
        </div>

        {/* Flashcard Mode Toggle Button */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsFlashcardMode(!isFlashcardMode)}
            className={`px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center space-x-2 transition shadow-sm ${
              isFlashcardMode
                ? 'bg-brand-700 text-white'
                : 'bg-brand-600 hover:bg-brand-700 text-white'
            }`}
          >
            <RotateCw size={16} />
            <span>{isFlashcardMode ? 'Kartalarni yopish' : 'Flashcard Rejimi'}</span>
          </button>
        </div>
      </div>

      {/* Interactive Flashcard Deck View */}
      {isFlashcardMode && (
        <div className="bg-slate-100/70 p-6 rounded-3xl border border-slate-200">
          <FlashcardDeck
            items={filteredVocab}
            onClose={() => setIsFlashcardMode(false)}
          />
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          {/* Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="So‘z yoki tarjima qidiring (masalan: Brot, olma, gehen)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Level Filter */}
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            <option value="all">Barcha darajalar (A1–B1)</option>
            {levels.map((lvl) => (
              <option key={lvl.code} value={lvl.code}>
                {lvl.code.toUpperCase()} darajasi
              </option>
            ))}
          </select>

          {/* Word Type Filter */}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            <option value="all">Barcha turkumlar</option>
            <option value="noun">Otlar (Nouns)</option>
            <option value="verb">Fe‘llar (Verbs)</option>
            <option value="adjective">Sifatlar (Adjectives)</option>
            <option value="adverb">Ravishlar (Adverbs)</option>
            <option value="expression">Iboralar (Expressions)</option>
            <option value="phrase">Jumlalar (Phrases)</option>
          </select>
        </div>

        {/* Quick Toggles (Favorites / Unlearned) */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 text-xs">
          <button
            onClick={() => setOnlyFavorites(!onlyFavorites)}
            className={`px-3 py-1.5 rounded-xl border font-semibold flex items-center space-x-1.5 transition ${
              onlyFavorites
                ? 'bg-amber-50 text-amber-700 border-amber-300'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Star size={13} fill={onlyFavorites ? 'currentColor' : 'none'} />
            <span>Faqat sevimlilar ({favoriteCount})</span>
          </button>

          <button
            onClick={() => setOnlyUnlearned(!onlyUnlearned)}
            className={`px-3 py-1.5 rounded-xl border font-semibold flex items-center space-x-1.5 transition ${
              onlyUnlearned
                ? 'bg-blue-50 text-blue-700 border-blue-300'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <CheckCircle size={13} />
            <span>Faqat yodlanmaganlar</span>
          </button>

          {(selectedLevel !== 'all' || selectedType !== 'all' || searchQuery || onlyFavorites || onlyUnlearned) && (
            <button
              onClick={() => {
                setSelectedLevel('all');
                setSelectedType('all');
                setSearchQuery('');
                setOnlyFavorites(false);
                setOnlyUnlearned(false);
              }}
              className="text-slate-400 hover:text-slate-700 ml-auto underline"
            >
              Filtrlarni tozalash
            </button>
          )}
        </div>
      </div>

      {/* Vocabulary Cards Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Natijalar: {filteredVocab.length} ta so‘z
          </h3>
        </div>

        {filteredVocab.length === 0 ? (
          <div className="p-16 text-center bg-white rounded-3xl border border-slate-200 text-slate-500">
            So‘rov bo‘yicha so‘z topilmadi. Filtrlarni o‘zgartirib ko‘ring.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredVocab.map((item) => (
              <VocabCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
