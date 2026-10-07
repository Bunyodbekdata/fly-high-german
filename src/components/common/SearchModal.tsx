import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, Bookmark, FileText, ArrowRight, Volume2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { storageService } from '../../lib/storage';
import { AudioButton } from './AudioButton';
import { ArticleBadge, LevelBadge } from './Badge';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  // Search in Vocabulary
  const vocabResults = trimmed.length >= 2
    ? storageService.getAllVocabulary().filter(v => 
        v.german.toLowerCase().includes(trimmed) ||
        v.uzbek.toLowerCase().includes(trimmed)
      ).slice(0, 6)
    : [];

  // Search in Grammar
  const grammarResults = trimmed.length >= 2
    ? storageService.getAllGrammar().filter(g =>
        g.titleDe.toLowerCase().includes(trimmed) ||
        g.titleUz.toLowerCase().includes(trimmed) ||
        g.explanationUz.toLowerCase().includes(trimmed)
      ).slice(0, 4)
    : [];

  // Search in Lessons
  const lessonResults = trimmed.length >= 2
    ? storageService.getLessons().filter(l =>
        l.titleDe.toLowerCase().includes(trimmed) ||
        l.titleUz.toLowerCase().includes(trimmed) ||
        l.descriptionUz.toLowerCase().includes(trimmed)
      ).slice(0, 4)
    : [];

  const hasResults = vocabResults.length > 0 || grammarResults.length > 0 || lessonResults.length > 0;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-3 sm:px-4 bg-slate-900/60 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-elevated border border-slate-200 dark:border-slate-800 overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center border-b border-slate-200 dark:border-slate-800 px-3.5 sm:px-4 py-3 bg-slate-50/70 dark:bg-slate-950/70">
          <Search className="w-5 h-5 text-slate-400 mr-2.5 sm:mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                if (vocabResults.length > 0) {
                  onClose();
                  navigate(`/vocabulary?search=${encodeURIComponent(vocabResults[0].german)}`);
                } else if (grammarResults.length > 0) {
                  onClose();
                  navigate('/grammar');
                } else if (lessonResults.length > 0) {
                  onClose();
                  navigate(`/courses/${lessonResults[0].levelCode}/lesson/${lessonResults[0].id}`);
                }
              }
            }}
            placeholder="Nemischa so‘z, o‘zbekcha tarjima yoki dars qidiring..."
            className="w-full bg-transparent text-slate-800 dark:text-white placeholder-slate-400 text-sm sm:text-base focus:outline-none"
          />

          {/* Action buttons: Clear & Yopish */}
          <div className="flex items-center space-x-1.5 flex-shrink-0 ml-2">
            {query && (
              <button 
                type="button"
                onClick={() => setQuery('')}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition"
                title="Tozalash"
              >
                <X size={16} />
              </button>
            )}

            <button
              type="button"
              onClick={onClose}
              className="px-2.5 py-1.5 rounded-xl bg-slate-200/70 dark:bg-slate-800 hover:bg-rose-600 hover:text-white dark:hover:bg-rose-600 dark:hover:text-white text-slate-700 dark:text-slate-300 text-xs font-bold transition flex items-center space-x-1 shadow-2xs"
              title="Qidiruv oynasini yopish"
            >
              <X size={15} />
              <span>Yopish</span>
            </button>
          </div>
        </div>

        {/* Search Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-3 sm:p-4 space-y-5">
          {trimmed.length < 2 && (
            <div className="text-center py-8 text-slate-400 text-sm">
              <Search className="w-8 h-8 mx-auto mb-2 text-slate-300 dark:text-slate-600" />
              Qidirish uchun kamida 2 ta harf kiriting
            </div>
          )}

          {trimmed.length >= 2 && !hasResults && (
            <div className="text-center py-8 text-slate-500 text-sm">
              "{query}" bo‘yicha hech qanday natija topilmadi.
            </div>
          )}

          {/* Vocabulary Results */}
          {vocabResults.length > 0 && (
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-1">
                <span className="flex items-center">
                  <Bookmark className="w-3.5 h-3.5 mr-1.5 text-brand-500" />
                  Lug‘at natijalari ({vocabResults.length})
                </span>
                <span className="text-[11px] font-normal lowercase">Tanlash orqali lug‘atga o‘ting</span>
              </div>
              <div className="space-y-1.5">
                {vocabResults.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <AudioButton text={item.german} size="sm" />
                      <div>
                        <div className="flex items-center space-x-2">
                          {item.article && <ArticleBadge article={item.article} />}
                          <span className="font-semibold text-slate-900 dark:text-white">{item.german}</span>
                          <span className="text-slate-400">—</span>
                          <span className="text-slate-700 dark:text-slate-300">{item.uzbek}</span>
                        </div>
                        {item.exampleDe && (
                          <div className="text-xs text-slate-500 dark:text-slate-400 italic mt-0.5">
                            "{item.exampleDe}"
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 flex-shrink-0">
                      <LevelBadge code={item.levelCode} />
                      <button
                        type="button"
                        onClick={() => {
                          onClose();
                          navigate(`/vocabulary?search=${encodeURIComponent(item.german)}`);
                        }}
                        className="px-2.5 py-1 rounded-xl bg-brand-50 dark:bg-brand-950/80 hover:bg-brand-600 hover:text-white text-brand-600 dark:text-brand-400 border border-brand-200/80 dark:border-brand-800/80 text-xs font-bold transition flex items-center space-x-1"
                        title="Ushbu so‘zni tanlash"
                      >
                        <span>Tanlash</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Grammar Topics */}
          {grammarResults.length > 0 && (
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-1">
                <span className="flex items-center">
                  <BookOpen className="w-3.5 h-3.5 mr-1.5 text-emerald-500" />
                  Grammatika mavzulari ({grammarResults.length})
                </span>
                <span className="text-[11px] font-normal lowercase">Tanlash orqali qoidani o‘qing</span>
              </div>
              <div className="space-y-1.5">
                {grammarResults.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      onClose();
                      navigate('/grammar');
                    }}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-emerald-50/50 dark:hover:bg-emerald-950/30 border border-transparent hover:border-emerald-200 dark:hover:border-emerald-800 cursor-pointer transition-colors"
                  >
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">{item.titleDe}</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">{item.titleUz}</div>
                    </div>
                    <div className="flex items-center space-x-2 flex-shrink-0">
                      <LevelBadge code={item.levelCode} />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onClose();
                          navigate('/grammar');
                        }}
                        className="px-2.5 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 hover:bg-emerald-600 hover:text-white text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/80 text-xs font-bold transition flex items-center space-x-1"
                        title="Ushbu grammatikani tanlash"
                      >
                        <span>Tanlash</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Lessons */}
          {lessonResults.length > 0 && (
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-1">
                <span className="flex items-center">
                  <FileText className="w-3.5 h-3.5 mr-1.5 text-blue-500" />
                  Darslar ({lessonResults.length})
                </span>
                <span className="text-[11px] font-normal lowercase">Tanlash orqali darsga kiring</span>
              </div>
              <div className="space-y-1.5">
                {lessonResults.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      onClose();
                      navigate(`/courses/${item.levelCode}/lesson/${item.id}`);
                    }}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-blue-50/50 dark:hover:bg-blue-950/30 border border-transparent hover:border-blue-200 dark:hover:border-blue-800 cursor-pointer transition-colors"
                  >
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">{item.titleDe}</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">{item.titleUz}</div>
                    </div>
                    <div className="flex items-center space-x-2 flex-shrink-0">
                      <LevelBadge code={item.levelCode} />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onClose();
                          navigate(`/courses/${item.levelCode}/lesson/${item.id}`);
                        }}
                        className="px-2.5 py-1 rounded-xl bg-blue-50 dark:bg-blue-950/80 hover:bg-blue-600 hover:text-white text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800/80 text-xs font-bold transition flex items-center space-x-1"
                        title="Ushbu darsni tanlash"
                      >
                        <span>Tanlash</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer actions without keyboard kbd badges */}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
          <button
            type="button"
            onClick={onClose}
            className="flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-rose-50 hover:border-rose-200 hover:text-rose-600 dark:hover:bg-rose-950 dark:hover:text-rose-300 text-slate-700 dark:text-slate-300 font-bold transition"
          >
            <X size={14} />
            <span>Yopish</span>
          </button>
          <span className="text-slate-500 dark:text-slate-400 font-medium">
            FOR GREAT NATION
          </span>
        </div>
      </div>
    </div>
  );
};
