import React, { useState } from 'react';
import { storageService } from '../../lib/storage';
import { useAuth } from '../../context/AuthContext';
import { Lesson, VocabularyItem, GrammarTopic, CEFRLevelCode } from '../../types/database';
import { LevelBadge, ArticleBadge } from '../../components/common/Badge';
import { 
  ShieldCheck, 
  Plus, 
  Trash2, 
  Check, 
  X, 
  Eye, 
  EyeOff, 
  BookOpen, 
  Bookmark, 
  FileText, 
  RotateCcw,
  Sparkles 
} from 'lucide-react';

export const AdminDashboardPage: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'lessons' | 'vocabulary' | 'grammar'>('lessons');
  const [lessons, setLessons] = useState<Lesson[]>(() => storageService.getLessons());
  const [vocabulary, setVocabulary] = useState<VocabularyItem[]>(() => storageService.getAllVocabulary());
  const [grammar, setGrammar] = useState<GrammarTopic[]>(() => storageService.getAllGrammar());

  // Modal state for adding a new lesson
  const [isAddLessonModalOpen, setIsAddLessonModalOpen] = useState(false);
  const [newTitleDe, setNewTitleDe] = useState('');
  const [newTitleUz, setNewTitleUz] = useState('');
  const [newDescUz, setNewDescUz] = useState('');
  const [newLevel, setNewLevel] = useState<CEFRLevelCode>('a1-1');
  const [newObjectives, setNewObjectives] = useState('');

  // Modal state for adding vocabulary
  const [isAddVocabModalOpen, setIsAddVocabModalOpen] = useState(false);
  const [vocabGerman, setVocabGerman] = useState('');
  const [vocabArticle, setVocabArticle] = useState<'der' | 'die' | 'das' | ''>('');
  const [vocabPlural, setVocabPlural] = useState('');
  const [vocabUzbek, setVocabUzbek] = useState('');
  const [vocabExampleDe, setVocabExampleDe] = useState('');
  const [vocabExampleUz, setVocabExampleUz] = useState('');
  const [vocabType, setVocabType] = useState<any>('noun');

  const refreshAll = () => {
    setLessons([...storageService.getLessons()]);
    setVocabulary([...storageService.getAllVocabulary()]);
    setGrammar([...storageService.getAllGrammar()]);
  };

  const handleTogglePublish = (id: string) => {
    storageService.toggleLessonPublish(id);
    refreshAll();
  };

  const handleDeleteLesson = (id: string) => {
    if (window.confirm('Haqiqatdan ham ushbu darsni o‘chirmoqchimisiz?')) {
      storageService.deleteLesson(id);
      refreshAll();
    }
  };

  const handleCreateLesson = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitleDe || !newTitleUz) return;

    const newLesson: Lesson = {
      id: 'les-custom-' + Date.now(),
      moduleId: 'mod-1',
      levelCode: newLevel,
      titleDe: newTitleDe,
      titleUz: newTitleUz,
      descriptionUz: newDescUz,
      orderIndex: lessons.length + 1,
      estimatedMinutes: 25,
      isPublished: true,
      objectivesUz: newObjectives.split('\n').filter(Boolean),
      vocabulary: [],
      grammar: [],
      listening: [],
      reading: [],
      writing: [],
      shadowing: [],
      practice: []
    };

    storageService.saveLesson(newLesson);
    setIsAddLessonModalOpen(false);
    setNewTitleDe('');
    setNewTitleUz('');
    setNewDescUz('');
    setNewObjectives('');
    refreshAll();
  };

  const handleCreateVocab = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vocabGerman || !vocabUzbek) return;

    const newVocab: VocabularyItem = {
      id: 'voc-custom-' + Date.now(),
      lessonId: 'les-custom',
      levelCode: 'a1-1',
      german: vocabGerman,
      article: vocabArticle ? (vocabArticle as any) : null,
      plural: vocabPlural || null,
      uzbek: vocabUzbek,
      exampleDe: vocabExampleDe,
      exampleUz: vocabExampleUz,
      wordType: vocabType,
    };

    storageService.saveVocabularyItem(newVocab);
    setIsAddVocabModalOpen(false);
    setVocabGerman('');
    setVocabArticle('');
    setVocabPlural('');
    setVocabUzbek('');
    setVocabExampleDe('');
    setVocabExampleUz('');
    refreshAll();
  };

  const handleDeleteVocab = (id: string) => {
    storageService.deleteVocabularyItem(id);
    refreshAll();
  };

  const handleResetDefaults = () => {
    if (window.confirm('Barcha ma‘lumotlarni zavod holatiga qaytarishni xohlaysizmi?')) {
      storageService.resetToFactoryDefault();
      refreshAll();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Admin Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="p-1 rounded-lg bg-indigo-100 text-indigo-700">
              <ShieldCheck size={18} />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              Boshqaruv Paneli (Admin Portal)
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Ta‘lim Mazmunini Boshqarish
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Darslar, lug‘at va grammatika qoidalarini kodga tegmasdan real vaqtda qo‘shish va tahrirlash.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={handleResetDefaults}
            className="px-4 py-2 rounded-xl border border-slate-300 text-slate-600 hover:bg-slate-100 text-xs font-semibold flex items-center space-x-1.5 transition"
            title="Boshlang‘ich darslarni qayta yuklash"
          >
            <RotateCcw size={14} />
            <span>Zavod holati</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center space-x-2 border-b border-slate-200">
        <button
          onClick={() => setActiveTab('lessons')}
          className={`py-3 px-4 font-bold text-sm border-b-2 transition flex items-center space-x-2 ${
            activeTab === 'lessons'
              ? 'border-brand-600 text-brand-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <BookOpen size={16} />
          <span>Darslar ({lessons.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('vocabulary')}
          className={`py-3 px-4 font-bold text-sm border-b-2 transition flex items-center space-x-2 ${
            activeTab === 'vocabulary'
              ? 'border-brand-600 text-brand-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Bookmark size={16} />
          <span>Lug‘at ({vocabulary.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('grammar')}
          className={`py-3 px-4 font-bold text-sm border-b-2 transition flex items-center space-x-2 ${
            activeTab === 'grammar'
              ? 'border-brand-600 text-brand-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <FileText size={16} />
          <span>Grammatika ({grammar.length})</span>
        </button>
      </div>

      {/* TAB 1: LESSONS MANAGEMENT */}
      {activeTab === 'lessons' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
              Barcha Darslar Ro‘yxati
            </h3>
            <button
              onClick={() => setIsAddLessonModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs flex items-center space-x-1.5 transition shadow-sm"
            >
              <Plus size={15} />
              <span>Yangi Dars Qo‘shish</span>
            </button>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            <table className="min-w-full divide-y divide-slate-200 text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 text-slate-500 font-semibold uppercase tracking-wider">
                <tr>
                  <th className="px-5 py-3.5">Tartib</th>
                  <th className="px-5 py-3.5">Daraja</th>
                  <th className="px-5 py-3.5">Dars Nomi (Nemischa / O‘zbekcha)</th>
                  <th className="px-5 py-3.5">Holat</th>
                  <th className="px-5 py-3.5 text-right">Amallar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {lessons.map((lesson) => (
                  <tr key={lesson.id} className="hover:bg-slate-50/70 transition">
                    <td className="px-5 py-3 font-mono font-bold text-slate-400">
                      #{lesson.orderIndex}
                    </td>
                    <td className="px-5 py-3">
                      <LevelBadge code={lesson.levelCode} />
                    </td>
                    <td className="px-5 py-3">
                      <div className="font-bold text-slate-900">{lesson.titleDe}</div>
                      <div className="text-xs text-slate-500">{lesson.titleUz}</div>
                    </td>
                    <td className="px-5 py-3">
                      <button
                        onClick={() => handleTogglePublish(lesson.id)}
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold transition ${
                          lesson.isPublished
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-slate-100 text-slate-500 border border-slate-200'
                        }`}
                      >
                        {lesson.isPublished ? (
                          <>
                            <Eye size={12} className="mr-1" />
                            Faol
                          </>
                        ) : (
                          <>
                            <EyeOff size={12} className="mr-1" />
                            Qoralama
                          </>
                        )}
                      </button>
                    </td>
                    <td className="px-5 py-3 text-right space-x-2">
                      <button
                        onClick={() => handleDeleteLesson(lesson.id)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition"
                        title="O‘chirish"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: VOCABULARY MANAGEMENT */}
      {activeTab === 'vocabulary' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
              Barcha Lug‘atlar Ro‘yxati
            </h3>
            <button
              onClick={() => setIsAddVocabModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs flex items-center space-x-1.5 transition shadow-sm"
            >
              <Plus size={15} />
              <span>Yangi So‘z Qo‘shish</span>
            </button>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            <table className="min-w-full divide-y divide-slate-200 text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 text-slate-500 font-semibold uppercase tracking-wider">
                <tr>
                  <th className="px-5 py-3.5">Artikl</th>
                  <th className="px-5 py-3.5">Nemischa So‘z</th>
                  <th className="px-5 py-3.5">O‘zbekcha Ma‘nosi</th>
                  <th className="px-5 py-3.5">Daraja</th>
                  <th className="px-5 py-3.5 text-right">Amal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {vocabulary.map((vocab) => (
                  <tr key={vocab.id} className="hover:bg-slate-50/70 transition">
                    <td className="px-5 py-3">
                      {vocab.article && <ArticleBadge article={vocab.article} />}
                    </td>
                    <td className="px-5 py-3 font-bold text-slate-900">
                      {vocab.german}
                      {vocab.plural && <span className="text-xs text-slate-400 font-mono ml-2 font-normal">({vocab.plural})</span>}
                    </td>
                    <td className="px-5 py-3 text-slate-700">
                      {vocab.uzbek}
                    </td>
                    <td className="px-5 py-3">
                      <LevelBadge code={vocab.levelCode} />
                    </td>
                    <td className="px-5 py-3 text-right">
                      <button
                        onClick={() => handleDeleteVocab(vocab.id)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: GRAMMAR TOPICS */}
      {activeTab === 'grammar' && (
        <div className="space-y-4">
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            <table className="min-w-full divide-y divide-slate-200 text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 text-slate-500 font-semibold uppercase tracking-wider">
                <tr>
                  <th className="px-5 py-3.5">Daraja</th>
                  <th className="px-5 py-3.5">Nemischa Nom</th>
                  <th className="px-5 py-3.5">O‘zbekcha Nom</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {grammar.map((topic) => (
                  <tr key={topic.id} className="hover:bg-slate-50/70 transition">
                    <td className="px-5 py-3">
                      <LevelBadge code={topic.levelCode} />
                    </td>
                    <td className="px-5 py-3 font-bold text-slate-900">
                      {topic.titleDe}
                    </td>
                    <td className="px-5 py-3 text-slate-700">
                      {topic.titleUz}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* MODAL: CREATE LESSON */}
      {isAddLessonModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 space-y-4">
            <h3 className="text-xl font-bold text-slate-900">
              Yangi Dars Qo‘shish (Admin)
            </h3>
            <form onSubmit={handleCreateLesson} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Dars Nomi (Nemischa)
                </label>
                <input
                  type="text"
                  required
                  value={newTitleDe}
                  onChange={(e) => setNewTitleDe(e.target.value)}
                  placeholder="Lektion 16: Meine Reise"
                  className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Dars Nomi (O‘zbekcha)
                </label>
                <input
                  type="text"
                  required
                  value={newTitleUz}
                  onChange={(e) => setNewTitleUz(e.target.value)}
                  placeholder="16-Dars: Mening sayohatim"
                  className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  CEFR Bosqichi
                </label>
                <select
                  value={newLevel}
                  onChange={(e) => setNewLevel(e.target.value as any)}
                  className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm font-medium"
                >
                  <option value="a1-1">A1.1</option>
                  <option value="a1-2">A1.2</option>
                  <option value="a2-1">A2.1</option>
                  <option value="a2-2">A2.2</option>
                  <option value="b1-1">B1.1</option>
                  <option value="b1-2">B1.2</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Qisqa tavsif (O‘zbekcha)
                </label>
                <textarea
                  rows={2}
                  value={newDescUz}
                  onChange={(e) => setNewDescUz(e.target.value)}
                  placeholder="Ushbu darsda o‘rganiladigan asosiy mavzu..."
                  className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Dars maqsadlari (Har bir qatorda bittadan)
                </label>
                <textarea
                  rows={3}
                  value={newObjectives}
                  onChange={(e) => setNewObjectives(e.target.value)}
                  placeholder="Sayohat haqida gapirish&#10;Chipta sotib olish"
                  className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm font-medium"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsAddLessonModalOpen(false)}
                  className="px-4 py-2 rounded-xl border text-slate-600 text-xs font-bold"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold shadow-sm"
                >
                  Darsni Saqlash
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: CREATE VOCABULARY */}
      {isAddVocabModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 space-y-4">
            <h3 className="text-xl font-bold text-slate-900">
              Yangi So‘z Qo‘shish (Admin)
            </h3>
            <form onSubmit={handleCreateVocab} className="space-y-4">
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Artikl
                  </label>
                  <select
                    value={vocabArticle}
                    onChange={(e) => setVocabArticle(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm"
                  >
                    <option value="">(Yo‘q)</option>
                    <option value="der">der (Maskulin)</option>
                    <option value="die">die (Feminin)</option>
                    <option value="das">das (Neutral)</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Nemischa so‘z
                  </label>
                  <input
                    type="text"
                    required
                    value={vocabGerman}
                    onChange={(e) => setVocabGerman(e.target.value)}
                    placeholder="der Zug / reisen"
                    className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  O‘zbekcha tarjimasi
                </label>
                <input
                  type="text"
                  required
                  value={vocabUzbek}
                  onChange={(e) => setVocabUzbek(e.target.value)}
                  placeholder="poyezd / sayohat qilmoq"
                  className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Namuna gap (Nemischa)
                </label>
                <input
                  type="text"
                  value={vocabExampleDe}
                  onChange={(e) => setVocabExampleDe(e.target.value)}
                  placeholder="Der Zug fährt um 9 Uhr ab."
                  className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm font-medium"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsAddVocabModalOpen(false)}
                  className="px-4 py-2 rounded-xl border text-slate-600 text-xs font-bold"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold shadow-sm"
                >
                  So‘zni Saqlash
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
