import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { storageService } from '../lib/storage';
import { useProgress } from '../context/ProgressContext';
import { audioService } from '../lib/audio';
import { VocabCard } from '../components/vocabulary/VocabCard';
import { FlashcardDeck } from '../components/vocabulary/FlashcardDeck';
import { ArticleBadge } from '../components/common/Badge';
import { UserVideoNote } from '../types/youtube';
import { 
  Bookmark, 
  Search, 
  Filter, 
  RotateCw, 
  Star, 
  CheckCircle, 
  X,
  BookMarked,
  BookOpen,
  Trash2,
  Download,
  Sparkles,
  Clock
} from 'lucide-react';

export const VocabularyPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const allVocab = storageService.getAllVocabulary();
  const levels = storageService.getLevels();
  const { vocabProgress } = useProgress();

  // Active top tab: curriculum vs personal video notes
  const [mainTab, setMainTab] = useState<'curriculum' | 'videoNotes'>('curriculum');

  // Curriculum filter state
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState(() => searchParams.get('search') || '');
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [onlyUnlearned, setOnlyUnlearned] = useState(false);
  const [onlyDueSrs, setOnlyDueSrs] = useState(false);
  const [isFlashcardMode, setIsFlashcardMode] = useState(false);

  // Personal video notes state
  const [videoNotes, setVideoNotes] = useState<UserVideoNote[]>(() => storageService.getAllUserVideoNotes());
  const [notesSearch, setNotesSearch] = useState('');

  const refreshNotes = () => {
    setVideoNotes(storageService.getAllUserVideoNotes());
  };

  useEffect(() => {
    const queryParam = searchParams.get('search');
    if (queryParam !== null) {
      setSearchQuery(queryParam);
    }
  }, [searchParams]);

  // Curriculum filter logic
  const filteredVocab = useMemo(() => {
    return allVocab.filter((item) => {
      if (selectedLevel !== 'all' && item.levelCode !== selectedLevel) return false;
      if (selectedType !== 'all' && item.wordType !== selectedType) return false;

      const progress = vocabProgress[item.id];
      if (onlyFavorites && !progress?.isFavorite) return false;
      if (onlyUnlearned && progress?.status === 'mastered') return false;

      // SRS Due filter: learning status or favorite
      if (onlyDueSrs && !(progress?.isFavorite || progress?.status === 'learning')) {
        return false;
      }

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
  }, [allVocab, selectedLevel, selectedType, searchQuery, onlyFavorites, onlyUnlearned, onlyDueSrs, vocabProgress]);

  // Filtered personal video notes
  const filteredNotes = useMemo(() => {
    if (!notesSearch.trim()) return videoNotes;
    const q = notesSearch.toLowerCase();
    return videoNotes.filter(n =>
      n.german.toLowerCase().includes(q) ||
      n.uzbek.toLowerCase().includes(q) ||
      (n.example && n.example.toLowerCase().includes(q))
    );
  }, [videoNotes, notesSearch]);

  const masteredCount = allVocab.filter(v => vocabProgress[v.id]?.status === 'mastered').length;
  const favoriteCount = allVocab.filter(v => vocabProgress[v.id]?.isFavorite).length;

  const handleDeleteNote = (noteId: string, videoId: string) => {
    storageService.deleteUserVideoNote(noteId, videoId);
    refreshNotes();
  };

  const handleExportNotes = () => {
    if (videoNotes.length === 0) return;
    const textContent = videoNotes
      .map(n => `${n.article ? n.article + ' ' : ''}${n.german} — ${n.uzbek}${n.example ? ` ("${n.example}")` : ''}`)
      .join('\n');
    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `FlyHigh_Lugat_Daftar_${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-brand-600 uppercase tracking-widest block mb-1">
            Lug‘at Tizimi
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Nemis tili lug‘at kutubxonasi
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Darslikdagi {allVocab.length} ta so‘z | {masteredCount} ta yodlangan | {videoNotes.length} ta shaxsiy video qayd
          </p>
        </div>

        {/* Top View Mode Switcher */}
        <div className="flex items-center space-x-2">
          <div className="bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl flex items-center space-x-1 border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setMainTab('curriculum')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition ${
                mainTab === 'curriculum'
                  ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <BookOpen size={14} />
              <span>Darslik lug‘ati</span>
            </button>
            <button
              onClick={() => {
                setMainTab('videoNotes');
                refreshNotes();
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition ${
                mainTab === 'videoNotes'
                  ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <BookMarked size={14} />
              <span>Mening qaydlarim ({videoNotes.length})</span>
            </button>
          </div>

          {mainTab === 'curriculum' && (
            <button
              onClick={() => setIsFlashcardMode(!isFlashcardMode)}
              className={`px-4 py-2 rounded-2xl font-bold text-xs sm:text-sm flex items-center space-x-1.5 transition shadow-sm ${
                isFlashcardMode
                  ? 'bg-brand-700 text-white'
                  : 'bg-brand-600 hover:bg-brand-700 text-white'
              }`}
            >
              <RotateCw size={15} />
              <span>{isFlashcardMode ? 'Yopish' : 'Flashcard'}</span>
            </button>
          )}
        </div>
      </div>

      {/* ======================================================== */}
      {/* TAB 1: CURRICULUM VOCABULARY VIEW                       */}
      {/* ======================================================== */}
      {mainTab === 'curriculum' && (
        <div className="space-y-6">
          {/* Interactive Flashcard Deck View */}
          {isFlashcardMode && (
            <div className="bg-slate-100/70 dark:bg-slate-900/60 p-6 rounded-3xl border border-slate-200 dark:border-slate-800">
              <FlashcardDeck
                items={filteredVocab}
                onClose={() => setIsFlashcardMode(false)}
              />
            </div>
          )}

          {/* Filter and Search Bar */}
          <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              {/* Search Input */}
              <div className="relative flex-1 w-full">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="So‘z yoki tarjima qidiring (masalan: Brot, olma, gehen)..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm font-medium"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* CEFR Level Filter */}
              <div className="flex items-center space-x-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
                <button
                  onClick={() => setSelectedLevel('all')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex-shrink-0 ${
                    selectedLevel === 'all'
                      ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
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
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                    }`}
                  >
                    {lvl.code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs font-medium">
              <span className="text-slate-400 mr-1 flex items-center">
                <Filter size={13} className="mr-1" />
                Filtrlar:
              </span>

              {/* SRS Due Filter */}
              <button
                onClick={() => setOnlyDueSrs(!onlyDueSrs)}
                className={`px-3 py-1 rounded-xl transition flex items-center space-x-1.5 ${
                  onlyDueSrs
                    ? 'bg-indigo-600 text-white font-bold shadow-2xs'
                    : 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 border border-indigo-200 dark:border-indigo-800'
                }`}
              >
                <Clock size={13} />
                <span>Bugun takrorlash (SRS)</span>
              </button>

              <button
                onClick={() => setOnlyFavorites(!onlyFavorites)}
                className={`px-3 py-1 rounded-xl transition flex items-center space-x-1.5 ${
                  onlyFavorites
                    ? 'bg-amber-500 text-white font-bold shadow-2xs'
                    : 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 hover:bg-amber-100 border border-amber-200 dark:border-amber-800'
                }`}
              >
                <Star size={13} className={onlyFavorites ? "fill-white" : ""} />
                <span>Sevimli so‘zlar ({favoriteCount})</span>
              </button>

              <button
                onClick={() => setOnlyUnlearned(!onlyUnlearned)}
                className={`px-3 py-1 rounded-xl transition flex items-center space-x-1.5 ${
                  onlyUnlearned
                    ? 'bg-emerald-600 text-white font-bold shadow-2xs'
                    : 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 border border-emerald-200 dark:border-emerald-800'
                }`}
              >
                <CheckCircle size={13} />
                <span>Faqat yodlanmaganlar</span>
              </button>

              {(selectedLevel !== 'all' || selectedType !== 'all' || searchQuery || onlyFavorites || onlyUnlearned || onlyDueSrs) && (
                <button
                  onClick={() => {
                    setSelectedLevel('all');
                    setSelectedType('all');
                    setSearchQuery('');
                    setOnlyFavorites(false);
                    setOnlyUnlearned(false);
                    setOnlyDueSrs(false);
                  }}
                  className="text-slate-400 hover:text-slate-700 dark:hover:text-white ml-auto underline"
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
              <div className="p-16 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 text-slate-500">
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
      )}

      {/* ======================================================== */}
      {/* TAB 2: UNIFIED PERSONAL VIDEO VOCABULARY NOTEBOOK        */}
      {/* ======================================================== */}
      {mainTab === 'videoNotes' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          {/* Header Banner */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2 text-brand-600 dark:text-brand-400 font-extrabold text-xs uppercase tracking-wider mb-1">
                <Sparkles size={14} className="text-amber-500" />
                <span>Yagona Video Qaydlar Daftari</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                Video darslarda yozib borgan so‘zlaringiz
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xl leading-relaxed">
                YouTube darslarini tomosha qilayotganda kiritgan barcha yangi so‘zlaringiz bir joyda to‘plangan. Ularni istalgan vaqtda takrorlang va talaffuzini tinglang.
              </p>
            </div>

            <div className="flex items-center space-x-2 flex-shrink-0">
              {videoNotes.length > 0 && (
                <button
                  onClick={handleExportNotes}
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center space-x-1.5 transition"
                  title="Barcha so‘zlarni .txt fayl sifatida yuklab olish"
                >
                  <Download size={14} />
                  <span>Faylga yuklab olish</span>
                </button>
              )}
            </div>
          </div>

          {/* Search Bar for Notes */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={notesSearch}
              onChange={(e) => setNotesSearch(e.target.value)}
              placeholder="Qaydlaringizdan so‘z yoki tarjima qidiring..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm"
            />
          </div>

          {/* Notes Grid */}
          {filteredNotes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredNotes.map((note) => (
                <div
                  key={note.id}
                  className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {note.article && <ArticleBadge article={note.article as any} />}
                        <h4 className="text-base font-extrabold text-slate-900 dark:text-white">
                          {note.german}
                        </h4>
                      </div>
                      <span className="text-[10px] text-slate-400">
                        {new Date(note.createdAt).toLocaleDateString()}
                      </span>
                    </div>

                    <p className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      {note.uzbek}
                    </p>

                    {note.example && (
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 italic bg-slate-50 dark:bg-slate-800/60 p-2 rounded-lg mt-1">
                        "{note.example}"
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() =>
                        audioService.speak(
                          (note.article ? `${note.article} ` : '') + note.german,
                          0.88
                        )
                      }
                      className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center space-x-1.5 transition"
                    >
                      <RotateCw size={12} />
                      <span>Tinglash</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDeleteNote(note.id, note.videoId)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition"
                      title="Qaydni o‘chirish"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-16 text-center bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 space-y-3">
              <BookMarked size={36} className="mx-auto text-slate-400" />
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
                Hozircha shaxsiy qaydlar mavjud emas
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
                Shadowing bo‘limidagi video darslarni tomosha qilish paytida "Lug‘at daftari" orqali o‘zingiz bilmagan so‘zlarni kiritib boring — ular shu yerda avtomatik jamlanadi!
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
