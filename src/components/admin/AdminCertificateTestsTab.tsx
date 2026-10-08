import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { storageService } from '../../lib/storage';
import { INITIAL_CERTIFICATE_TESTS } from '../../lib/seedCertificateTests';
import { CertificateTest, CertificateSection, CertificateQuestion, CertificateQuestionOption } from '../../types/certificate';
import { 
  Award, 
  Plus, 
  Edit3, 
  Trash2, 
  Eye, 
  Check, 
  X, 
  Clock, 
  BookOpen, 
  Headphones, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  Volume2
} from 'lucide-react';

export const AdminCertificateTestsTab: React.FC = () => {
  const [tests, setTests] = useState<CertificateTest[]>(() => storageService.getCertificateTests());
  const [editingTest, setEditingTest] = useState<CertificateTest | null>(null);
  const [isTestModalOpen, setIsTestModalOpen] = useState(false);
  const [expandedTestId, setExpandedTestId] = useState<string | null>(null);

  // Question editing modal state
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
  const [targetTestId, setTargetTestId] = useState<string>('');
  const [targetSectionId, setTargetSectionId] = useState<string>('');
  const [editingQuestion, setEditingQuestion] = useState<CertificateQuestion | null>(null);

  // Form states for test modal
  const [formLevel, setFormLevel] = useState<'a1-1' | 'a1-2'>('a1-1');
  const [formTitle, setFormTitle] = useState('');
  const [formDesc, setFormDesc] = useState('');
  const [formDuration, setFormDuration] = useState(30);
  const [formPassing, setFormPassing] = useState(60);

  // Form states for question modal
  const [qType, setQType] = useState<'multiple_choice' | 'true_false'>('multiple_choice');
  const [qText, setQText] = useState('');
  const [qReading, setQReading] = useState('');
  const [qAudioText, setQAudioText] = useState('');
  const [qTranscript, setQTranscript] = useState('');
  const [qPoints, setQPoints] = useState(1);
  const [qExplanation, setQExplanation] = useState('');
  const [qOptions, setQOptions] = useState<{ id: string; text: string }[]>([
    { id: 'a', text: '' },
    { id: 'b', text: '' },
    { id: 'c', text: '' },
    { id: 'd', text: '' },
  ]);
  const [qCorrect, setQCorrect] = useState('a');

  const refreshTests = () => {
    setTests([...storageService.getCertificateTests()]);
  };

  const handleTogglePublish = (test: CertificateTest) => {
    const updated: CertificateTest = {
      ...test,
      isPublished: !test.isPublished,
      updatedAt: new Date().toISOString(),
    };
    storageService.saveCertificateTest(updated);
    refreshTests();
  };

  const handleOpenEditTest = (test: CertificateTest) => {
    setEditingTest(test);
    setFormLevel(test.levelCode as any);
    setFormTitle(test.titleDe || test.titleUz);
    setFormDesc(test.descriptionUz);
    setFormDuration(test.durationMinutes);
    setFormPassing(test.passingPercentage);
    setIsTestModalOpen(true);
  };

  const handleSaveTest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle) return;

    if (editingTest) {
      const updated: CertificateTest = {
        ...editingTest,
        levelCode: formLevel,
        titleDe: formTitle,
        titleUz: formTitle,
        descriptionUz: formDesc,
        durationMinutes: formDuration,
        passingPercentage: formPassing,
        updatedAt: new Date().toISOString(),
      } as any;
      storageService.saveCertificateTest(updated);
    } else {
      const newTest: CertificateTest = {
        id: `cert_test_${formLevel.replace('-', '')}_${Date.now()}`,
        levelCode: formLevel,
        titleDe: formTitle,
        titleUz: formTitle,
        descriptionUz: formDesc,
        durationMinutes: formDuration,
        passingPercentage: formPassing,
        isPublished: true,
        totalPoints: 20,
        totalQuestions: 10,
        sections: [
          {
            id: `sec_reading_${Date.now()}`,
            testId: `cert_test_${formLevel.replace('-', '')}_${Date.now()}`,
            titleDe: 'Teil 1: Lesen',
            titleUz: '1-Qism: O‘qish',
            instructionsUz: 'Matnlarni diqqat bilan o‘qing va to‘g‘ri javobni tanlang.',
            skill: 'reading',
            orderIndex: 1,
            questions: [],
          },
          {
            id: `sec_listening_${Date.now()}`,
            testId: `cert_test_${formLevel.replace('-', '')}_${Date.now()}`,
            titleDe: 'Teil 2: Hören',
            titleUz: '2-Qism: Tinglash',
            instructionsUz: 'Audioni tinglang va savollarga javob bering.',
            skill: 'listening',
            orderIndex: 2,
            questions: [],
          },
        ],
      };
      storageService.saveCertificateTest(newTest);
    }

    setIsTestModalOpen(false);
    setEditingTest(null);
    refreshTests();
  };

  const handleOpenAddQuestion = (testId: string, sectionId: string) => {
    setTargetTestId(testId);
    setTargetSectionId(sectionId);
    setEditingQuestion(null);
    setQType('multiple_choice');
    setQText('');
    setQReading('');
    setQAudioText('');
    setQTranscript('');
    setQPoints(1);
    setQExplanation('');
    setQOptions([
      { id: 'a', text: '' },
      { id: 'b', text: '' },
      { id: 'c', text: '' },
      { id: 'd', text: '' },
    ]);
    setQCorrect('a');
    setIsQuestionModalOpen(true);
  };

  const handleSaveQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    const currentTest = tests.find(t => t.id === targetTestId);
    if (!currentTest) return;

    const newQuestion: CertificateQuestion = {
      id: editingQuestion?.id || `q_${Date.now()}`,
      sectionId: targetSectionId,
      type: qType,
      promptDe: qText,
      promptUz: qText,
      passageDe: qReading || undefined,
      audioText: qAudioText || undefined,
      audioUrl: qAudioText ? `tts:${qAudioText.substring(0, 30)}` : undefined,
      transcriptDe: qTranscript || undefined,
      points: Number(qPoints) || 1,
      options: qOptions.filter(o => o.text.trim().length > 0).map(o => ({ id: o.id, textDe: o.text })),
      correctAnswer: qCorrect,
      explanationUz: qExplanation || '',
      orderIndex: 1,
    };

    const updatedSections = currentTest.sections.map(sec => {
      if (sec.id === targetSectionId) {
        const questions = editingQuestion
          ? sec.questions.map(q => q.id === editingQuestion.id ? newQuestion : q)
          : [...sec.questions, newQuestion];
        return { ...sec, questions };
      }
      return sec;
    });

    const updatedTest: CertificateTest = {
      ...currentTest,
      sections: updatedSections,
      updatedAt: new Date().toISOString(),
    };

    storageService.saveCertificateTest(updatedTest);
    setIsQuestionModalOpen(false);
    refreshTests();
  };

  const handleDeleteQuestion = (testId: string, sectionId: string, questionId: string) => {
    if (!window.confirm('Haqiqatdan ham ushbu savolni o‘chirmoqchimisiz?')) return;
    const currentTest = tests.find(t => t.id === testId);
    if (!currentTest) return;

    const updatedSections = currentTest.sections.map(sec => {
      if (sec.id === sectionId) {
        return { ...sec, questions: sec.questions.filter(q => q.id !== questionId) };
      }
      return sec;
    });

    const updatedTest: CertificateTest = {
      ...currentTest,
      sections: updatedSections,
      updatedAt: new Date().toISOString(),
    };

    storageService.saveCertificateTest(updatedTest);
    refreshTests();
  };

  return (
    <div className="space-y-6">
      {/* Header and Add Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Award size={18} className="text-amber-500" />
            <span>Sertifikat Testlari Boshqaruvi</span>
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            A1.1 va A1.2 imtihon testlari parametrlarini, savollarini va audio matnlarini boshqaring
          </p>
        </div>

        <div className="flex items-center gap-2 self-start flex-wrap">
          <button
            onClick={() => {
              if (window.confirm('Barcha sertifikat testlarini rasmiy Goethe-Zertifikat A1 va telc xalqaro standartiga qaytarishni xohlaysizmi?')) {
                INITIAL_CERTIFICATE_TESTS.forEach(t => storageService.saveCertificateTest(t));
                localStorage.setItem('fgn_certificate_tests', JSON.stringify(INITIAL_CERTIFICATE_TESTS));
                refreshTests();
              }
            }}
            className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center space-x-1.5 transition border border-slate-200 dark:border-slate-700"
            title="Xalqaro Goethe/telc testlarini qayta tiklash"
          >
            <Sparkles size={14} className="text-amber-500" />
            <span>Goethe Standartini Tiklash</span>
          </button>

          <button
            onClick={() => {
              setEditingTest(null);
              setFormLevel('a1-1');
              setFormTitle('Goethe-Zertifikat A1: Start Deutsch 1 — Teilprüfung A1.1');
              setFormDesc('Xalqaro Goethe va telc A1 talablari bo‘yicha baholash imtihoni');
              setFormDuration(30);
              setFormPassing(60);
              setIsTestModalOpen(true);
            }}
            className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs flex items-center space-x-1.5 transition shadow-xs"
          >
            <Plus size={15} />
            <span>Yangi Test Yaratish</span>
          </button>
        </div>
      </div>

      {/* Tests List */}
      <div className="space-y-4">
        {tests.map((test) => {
          const isExpanded = expandedTestId === test.id;
          const totalQuestions = test.sections.reduce((acc, s) => acc + s.questions.length, 0);

          return (
            <div
              key={test.id}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs"
            >
              {/* Test Header Row */}
              <div className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-lg text-xs font-black bg-brand-600 text-white">
                      {test.levelCode.toUpperCase()}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {test.titleDe}
                    </h4>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      test.isPublished 
                        ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300' 
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                    }`}>
                      {test.isPublished ? 'Nashr etilgan' : 'Qoralama'}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500">
                    {test.descriptionUz}
                  </p>

                  <div className="flex items-center gap-3 text-[11px] text-slate-400 font-medium pt-1">
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {test.durationMinutes} daqiqa
                    </span>
                    <span>•</span>
                    <span>O‘tish bali: {test.passingPercentage}%</span>
                    <span>•</span>
                    <span>Jami savollar: {totalQuestions} ta</span>
                  </div>
                </div>

                {/* Test Action Buttons */}
                <div className="flex items-center space-x-2 self-start md:self-auto">
                  {/* Preview Test */}
                  <Link
                    to={`/certificate-tests/${test.id}`}
                    target="_blank"
                    className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center space-x-1.5 transition"
                    title="Talaba sifatida testni ko‘rish va sinash"
                  >
                    <Eye size={14} />
                    <span>Sinovdan o‘tkazish (Preview)</span>
                  </Link>

                  {/* Toggle Publish */}
                  <button
                    onClick={() => handleTogglePublish(test)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                      test.isPublished
                        ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 hover:bg-amber-100'
                        : 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100'
                    }`}
                  >
                    {test.isPublished ? 'Yashirish' : 'Nashr qilish'}
                  </button>

                  {/* Edit Config */}
                  <button
                    onClick={() => handleOpenEditTest(test)}
                    className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition"
                    title="Sozlamalarni tahrirlash"
                  >
                    <Edit3 size={15} />
                  </button>

                  {/* Expand / Collapse questions */}
                  <button
                    onClick={() => setExpandedTestId(isExpanded ? null : test.id)}
                    className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition"
                    title="Savollarni ko‘rish va boshqarish"
                  >
                    {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                  </button>
                </div>
              </div>

              {/* Collapsible Sections and Questions Editor */}
              {isExpanded && (
                <div className="border-t border-slate-100 dark:border-slate-800 p-5 bg-slate-50/50 dark:bg-slate-950/40 space-y-6">
                  {test.sections.map((sec) => (
                    <div key={sec.id} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {sec.skill === 'reading' ? (
                            <BookOpen size={16} className="text-blue-500" />
                          ) : (
                            <Headphones size={16} className="text-purple-500" />
                          )}
                          <h5 className="text-xs font-black uppercase text-slate-800 dark:text-slate-200">
                            {sec.titleDe || sec.titleUz} ({sec.questions.length} ta savol)
                          </h5>
                        </div>

                        <button
                          onClick={() => handleOpenAddQuestion(test.id, sec.id)}
                          className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center space-x-1 transition shadow-2xs"
                        >
                          <Plus size={13} />
                          <span>Savol qo‘shish</span>
                        </button>
                      </div>

                      {/* Question items */}
                      <div className="space-y-2">
                        {sec.questions.map((q, qIndex) => (
                          <div
                            key={q.id}
                            className="bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start justify-between gap-3 text-xs"
                          >
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-slate-400">#{qIndex + 1}</span>
                                <span className="font-bold text-slate-900 dark:text-white">
                                  {q.promptDe || q.promptUz}
                                </span>
                                <span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono">
                                  {q.points} ball
                                </span>
                              </div>

                              {q.passageDe && (
                                <p className="text-[11px] text-slate-500 truncate max-w-lg">
                                  📖 Matn: {q.passageDe.substring(0, 80)}...
                                </p>
                              )}

                              {q.audioText && (
                                <p className="text-[11px] text-purple-600 dark:text-purple-400 truncate max-w-lg">
                                  🎧 Audio matn: {q.audioText.substring(0, 80)}...
                                </p>
                              )}

                              <div className="flex flex-wrap gap-2 text-[10px] text-slate-500 pt-0.5">
                                <span>Variantlar: {q.options.map(o => `${o.id.toUpperCase()}: ${o.textDe || o.textUz}`).join(' | ')}</span>
                                <span className="text-emerald-600 font-bold">To‘g‘ri javob: {String(q.correctAnswer).toUpperCase()}</span>
                              </div>
                            </div>

                            <button
                              onClick={() => handleDeleteQuestion(test.id, sec.id, q.id)}
                              className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-lg transition"
                              title="O‘chirish"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Edit Test Modal */}
      {isTestModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full p-6 border border-slate-200 dark:border-slate-800 space-y-4 shadow-xl">
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                {editingTest ? 'Testni Tahrirlash' : 'Yangi Test Yaratish'}
              </h4>
              <button
                onClick={() => setIsTestModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleSaveTest} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Daraja
                </label>
                <select
                  value={formLevel}
                  onChange={(e) => setFormLevel(e.target.value as any)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                >
                  <option value="a1-1">A1.1</option>
                  <option value="a1-2">A1.2</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Test Nomi
                </label>
                <input
                  type="text"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  required
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Tavsif
                </label>
                <input
                  type="text"
                  value={formDesc}
                  onChange={(e) => setFormDesc(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Vaqt (daqiqa)
                  </label>
                  <input
                    type="number"
                    value={formDuration}
                    onChange={(e) => setFormDuration(Number(e.target.value))}
                    min={5}
                    max={120}
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    required
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    O‘tish bali (%)
                  </label>
                  <input
                    type="number"
                    value={formPassing}
                    onChange={(e) => setFormPassing(Number(e.target.value))}
                    min={10}
                    max={100}
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-2 pt-3">
                <button
                  type="button"
                  onClick={() => setIsTestModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold"
                >
                  Saqlash
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add / Edit Question Modal */}
      {isQuestionModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-xl w-full p-6 border border-slate-200 dark:border-slate-800 space-y-4 shadow-xl max-h-[90vh] overflow-y-auto my-8">
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Savol qo‘shish / tahrirlash
              </h4>
              <button
                onClick={() => setIsQuestionModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleSaveQuestion} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Savol matni (Nemischa / O‘zbekcha savol)
                </label>
                <input
                  type="text"
                  value={qText}
                  onChange={(e) => setQText(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  placeholder="Masalan: Wo wohnt Thomas?"
                  required
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  📖 O‘qish matni (agar Lesen savoli bo‘lsa)
                </label>
                <textarea
                  value={qReading}
                  onChange={(e) => setQReading(e.target.value)}
                  rows={3}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  placeholder="Nemischa matn yoki xabar..."
                />
              </div>

              <div>
                <label className="font-bold text-purple-700 dark:text-purple-300 block mb-1">
                  🎧 Audio ovoz matni (Hören savoli uchun)
                </label>
                <textarea
                  value={qAudioText}
                  onChange={(e) => setQAudioText(e.target.value)}
                  rows={2}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  placeholder="Audioda aytiladigan nemischa gaplar..."
                />
              </div>

              {/* Options */}
              <div className="space-y-2">
                <label className="font-bold text-slate-700 dark:text-slate-300 block">
                  Javob variantlari va to‘g‘ri javob
                </label>
                {qOptions.map((opt, idx) => (
                  <div key={opt.id} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="correctOption"
                      checked={qCorrect === opt.id}
                      onChange={() => setQCorrect(opt.id)}
                      className="text-brand-600 focus:ring-brand-500"
                    />
                    <span className="font-bold uppercase w-4">{opt.id}</span>
                    <input
                      type="text"
                      value={opt.text}
                      onChange={(e) => {
                        const next = [...qOptions];
                        next[idx].text = e.target.value;
                        setQOptions(next);
                      }}
                      placeholder={`Variant ${opt.id.toUpperCase()}`}
                      className="flex-1 p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Ball
                  </label>
                  <input
                    type="number"
                    value={qPoints}
                    onChange={(e) => setQPoints(Number(e.target.value))}
                    min={1}
                    max={10}
                    className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Tahlil izohi (Explanation)
                  </label>
                  <input
                    type="text"
                    value={qExplanation}
                    onChange={(e) => setQExplanation(e.target.value)}
                    placeholder="Nima uchun bu javob to‘g‘ri?"
                    className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-2 pt-3">
                <button
                  type="button"
                  onClick={() => setIsQuestionModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold"
                >
                  Savolni saqlash
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
