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
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center border-b border-slate-200 px-4 py-3.5 bg-slate-50/50">
          <Search className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Nemischa so‘z, o‘zbekcha tarjima yoki dars qidiring (masalan: gehen, salom, sein)..."
            className="w-full bg-transparent text-slate-800 placeholder-slate-400 text-base focus:outline-none"
          />
          {query ? (
            <button 
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-200/60"
            >
              <X size={16} />
            </button>
          ) : (
            <span className="text-xs bg-slate-200/80 text-slate-500 font-mono px-2 py-0.5 rounded">ESC</span>
          )}
        </div>

        {/* Search Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
          {trimmed.length < 2 && (
            <div className="text-center py-8 text-slate-400 text-sm">
              <Search className="w-8 h-8 mx-auto mb-2 text-slate-300" />
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
              <div className="flex items-center text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-1">
                <Bookmark className="w-3.5 h-3.5 mr-1.5 text-brand-500" />
                Lug‘at natijalari ({vocabResults.length})
              </div>
              <div className="space-y-1.5">
                {vocabResults.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <AudioButton text={item.german} size="sm" />
                      <div>
                        <div className="flex items-center space-x-2">
                          {item.article && <ArticleBadge article={item.article} />}
                          <span className="font-semibold text-slate-900">{item.german}</span>
                          <span className="text-slate-400">—</span>
                          <span className="text-slate-700">{item.uzbek}</span>
                        </div>
                        {item.exampleDe && (
                          <div className="text-xs text-slate-500 italic mt-0.5">
                            "{item.exampleDe}"
                          </div>
                        )}
                      </div>
                    </div>
                    <LevelBadge code={item.levelCode} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Grammar Topics */}
          {grammarResults.length > 0 && (
            <div>
              <div className="flex items-center text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-1">
                <BookOpen className="w-3.5 h-3.5 mr-1.5 text-emerald-500" />
                Grammatika mavzulari ({grammarResults.length})
              </div>
              <div className="space-y-1.5">
                {grammarResults.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      onClose();
                      navigate('/grammar');
                    }}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-emerald-50/50 border border-transparent hover:border-emerald-200 cursor-pointer transition-colors"
                  >
                    <div>
                      <div className="font-semibold text-slate-900">{item.titleDe}</div>
                      <div className="text-xs text-slate-600">{item.titleUz}</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <LevelBadge code={item.levelCode} />
                      <ArrowRight size={14} className="text-slate-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Lessons */}
          {lessonResults.length > 0 && (
            <div>
              <div className="flex items-center text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-1">
                <FileText className="w-3.5 h-3.5 mr-1.5 text-blue-500" />
                Darslar ({lessonResults.length})
              </div>
              <div className="space-y-1.5">
                {lessonResults.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      onClose();
                      navigate(`/courses/${item.levelCode}/lesson/${item.id}`);
                    }}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-blue-50/50 border border-transparent hover:border-blue-200 cursor-pointer transition-colors"
                  >
                    <div>
                      <div className="font-semibold text-slate-900">{item.titleDe}</div>
                      <div className="text-xs text-slate-600">{item.titleUz}</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <LevelBadge code={item.levelCode} />
                      <ArrowRight size={14} className="text-slate-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center space-x-3">
            <span>Tanlash: <kbd className="px-1.5 py-0.5 bg-white border rounded text-slate-700">Enter</kbd></span>
            <span>Yopish: <kbd className="px-1.5 py-0.5 bg-white border rounded text-slate-700">Esc</kbd></span>
          </div>
          <span className="text-brand-600 font-medium">For Great Nation Platform</span>
        </div>
      </div>
    </div>
  );
};
