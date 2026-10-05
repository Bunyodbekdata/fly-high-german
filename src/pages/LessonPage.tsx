import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { storageService } from '../lib/storage';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import { LessonHeader } from '../components/lesson/LessonHeader';
import { WarmUpTab } from '../components/lesson/WarmUpTab';
import { ContextDialogueTab } from '../components/lesson/ContextDialogueTab';
import { VocabularyTab } from '../components/lesson/VocabularyTab';
import { GrammarTab } from '../components/lesson/GrammarTab';
import { ListeningTab } from '../components/lesson/ListeningTab';
import { ReadingTab } from '../components/lesson/ReadingTab';
import { WritingTab } from '../components/lesson/WritingTab';
import { ShadowingTab } from '../components/lesson/ShadowingTab';
import { ExerciseRunner } from '../components/exercises/ExerciseRunner';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Sparkles, 
  Flame, 
  BookOpen, 
  RotateCcw,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const LessonPage: React.FC = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { isLessonCompleted, completeLesson, recordTabProgress, lessonProgress } = useProgress();

  const [activeTab, setActiveTab] = useState('warmup');
  const [showCelebration, setShowCelebration] = useState(false);
  const [earnedScore, setEarnedScore] = useState<number>(100);

  const lesson = storageService.getLessonById(lessonId || 'les-1');
  const allLessons = storageService.getLessons();

  const tabOrder = [
    { id: 'warmup', label: '1. Kirish' },
    { id: 'dialogue', label: '2. Muloqot' },
    { id: 'vocabulary', label: '3. Lug‘at' },
    { id: 'grammar', label: '4. Grammatika' },
    { id: 'listening', label: '5. Tinglash' },
    { id: 'reading', label: '6. O‘qish' },
    { id: 'writing', label: '7. Yozish' },
    { id: 'shadowing', label: '8. Talaffuz' },
    { id: 'practice', label: '9. Mashqlar' },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [lessonId, activeTab]);

  // Keyboard navigation across the 9 lesson tabs
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName || '')) {
        return;
      }
      if (e.key === 'ArrowRight') {
        const idx = tabOrder.findIndex(t => t.id === activeTab);
        if (idx >= 0 && idx + 1 < tabOrder.length) {
          handleTabChange(tabOrder[idx + 1].id);
        }
      } else if (e.key === 'ArrowLeft') {
        const idx = tabOrder.findIndex(t => t.id === activeTab);
        if (idx > 0) {
          handleTabChange(tabOrder[idx - 1].id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, lessonId]);

  if (!lesson) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Dars topilmadi</h2>
        <button
          onClick={() => navigate('/courses')}
          className="mt-4 px-6 py-2.5 bg-brand-600 text-white rounded-xl font-bold shadow-sm"
        >
          Kurslarga qaytish
        </button>
      </div>
    );
  }

  const isCompleted = isLessonCompleted(lesson.id);
  const currentProgress = lessonProgress[lesson.id];
  const completedTabs = currentProgress?.tabCompleted || {};

  const currentTabIdx = tabOrder.findIndex(t => t.id === activeTab);
  const currentTabInfo = tabOrder[currentTabIdx] || tabOrder[0];

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    recordTabProgress(lesson.id, tab);
  };

  const handleFinishPractice = (score: number) => {
    setEarnedScore(score);
    completeLesson(lesson.id, score);
    setShowCelebration(true);

    try {
      confetti({
        particleCount: 110,
        spread: 75,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore
    }
  };

  // Find next lesson in the curriculum
  const currentIndex = allLessons.findIndex((l) => l.id === lesson.id);
  const nextLesson =
    currentIndex >= 0 && currentIndex + 1 < allLessons.length ? allLessons[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col relative transition-colors duration-200 w-full max-w-full overflow-x-hidden">
      {/* Sticky Lesson Header with 9 structured coursebook tabs, progress & speed controls */}
      <LessonHeader
        lesson={lesson}
        isCompleted={isCompleted}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        completedTabs={completedTabs}
      />

      {/* Main Tab Content */}
      <div className="flex-1 pb-24 lg:pb-16">
        {activeTab === 'warmup' && (
          <WarmUpTab
            warmUp={lesson.warmUp}
            objectives={lesson.objectivesUz || []}
            descriptionUz={lesson.descriptionUz}
            onNext={() => handleTabChange('dialogue')}
          />
        )}

        {activeTab === 'dialogue' && (
          <ContextDialogueTab
            dialogue={lesson.contextDialogue}
            onNext={() => handleTabChange('vocabulary')}
          />
        )}

        {activeTab === 'vocabulary' && (
          <VocabularyTab
            vocabulary={lesson.vocabulary}
            onNext={() => handleTabChange('grammar')}
          />
        )}

        {activeTab === 'grammar' && (
          <GrammarTab
            grammarDiscovery={lesson.grammarDiscovery}
            grammar={lesson.grammar}
            onNext={() => handleTabChange('listening')}
          />
        )}

        {activeTab === 'listening' && (
          <ListeningTab
            listening3Stage={lesson.listening3Stage}
            listening={lesson.listening}
            onNext={() => handleTabChange('reading')}
          />
        )}

        {activeTab === 'reading' && (
          <ReadingTab
            reading={lesson.reading}
            onNext={() => handleTabChange('writing')}
          />
        )}

        {activeTab === 'writing' && (
          <WritingTab
            scaffold={lesson.writingScaffold}
            writing={lesson.writing}
            onNext={() => handleTabChange('shadowing')}
          />
        )}

        {activeTab === 'shadowing' && (
          <ShadowingTab
            shadowing={lesson.shadowing}
            onNext={() => handleTabChange('practice')}
          />
        )}

        {activeTab === 'practice' && (
          <div className="max-w-4xl mx-auto py-8 px-4 space-y-8">
            <div className="text-center max-w-xl mx-auto mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 block mb-1">
                9-Bo‘lim: Amaliy mashqlar (Übungen)
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                O‘rgangan bilimlaringizni sinab ko‘ring
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Har bir xato javob uchun o‘zbek tilida grammatik qoida va ta‘limiy tushuntirish beriladi.
              </p>
            </div>

            <ExerciseRunner
              exercises={lesson.practice || []}
              onFinish={handleFinishPractice}
            />

            {/* Next Lesson Navigator */}
            {nextLesson && (
              <div className="max-w-2xl mx-auto p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Keyingi dars:
                  </span>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                    {nextLesson.titleDe} — {nextLesson.titleUz}
                  </h4>
                </div>

                <button
                  onClick={() => {
                    navigate(`/courses/${nextLesson.levelCode}/lesson/${nextLesson.id}`);
                    setActiveTab('warmup');
                  }}
                  className="px-6 py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm flex items-center space-x-2 transition shadow-sm flex-shrink-0"
                >
                  <span>Keyingi darsga o‘tish</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* MOBILE STICKY FLOATING BOTTOM BAR: PREVIOUS & NEXT STEP */}
      <div className="lg:hidden fixed bottom-3 left-3 right-3 z-30 pointer-events-auto">
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 rounded-2xl p-2 shadow-card flex items-center justify-between gap-2">
          <button
            onClick={() => currentTabIdx > 0 && handleTabChange(tabOrder[currentTabIdx - 1].id)}
            disabled={currentTabIdx === 0}
            className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center space-x-1 transition ${
              currentTabIdx === 0
                ? 'opacity-30 cursor-not-allowed text-slate-400'
                : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <ArrowLeft size={14} />
            <span>Oldingi</span>
          </button>

          <div className="text-center px-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block -mb-0.5">
              Qadam {currentTabIdx + 1}/9
            </span>
            <span className="text-xs font-extrabold text-brand-600 dark:text-brand-400 truncate max-w-[130px] block">
              {currentTabInfo.label.replace(/^\d+\.\s*/, '')}
            </span>
          </div>

          <button
            onClick={() => currentTabIdx + 1 < tabOrder.length && handleTabChange(tabOrder[currentTabIdx + 1].id)}
            disabled={currentTabIdx + 1 >= tabOrder.length}
            className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center space-x-1 transition ${
              currentTabIdx + 1 >= tabOrder.length
                ? 'opacity-30 cursor-not-allowed text-slate-400'
                : 'bg-brand-600 hover:bg-brand-700 text-white shadow-xs'
            }`}
          >
            <span>Keyingi</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Keyboard Shortcuts Hint Bar (Desktop Only) */}
      <div className="hidden lg:flex py-2.5 bg-slate-100/80 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 text-center text-[11px] font-semibold text-slate-500 dark:text-slate-400 items-center justify-center space-x-2">
        <span className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-mono text-[10px] text-slate-700 dark:text-slate-300">
          ←
        </span>
        <span className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-mono text-[10px] text-slate-700 dark:text-slate-300">
          →
        </span>
        <span>Klaviaturadagi chap va o‘ng strelkalar orqali bo‘limlar bo‘ylab tez o‘tishingiz mumkin</span>
      </div>

      {/* GAMIFIED CELEBRATION MODAL AFTER COMPLETING LESSON */}
      {showCelebration && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200 dark:border-slate-800 text-center space-y-6 animate-scaleUp">
            {/* Celebration Icon with Gold Glow */}
            <div className="relative w-20 h-20 mx-auto">
              <div className="w-20 h-20 rounded-3xl bg-amber-100 dark:bg-amber-950/60 text-amber-500 flex items-center justify-center shadow-lg border border-amber-200 dark:border-amber-800 animate-bounce">
                <Award size={44} />
              </div>
              <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow">
                <Check size={14} className="stroke-[3]" />
              </span>
            </div>

            <div>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-xs font-bold text-emerald-700 dark:text-emerald-300 mb-2">
                <Sparkles size={13} />
                <span>Dars Muvaffaqiyatli Yakunlandi!</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                Barakalla, {user?.name || "O‘quvchi"}!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Siz <strong className="text-brand-600 dark:text-brand-400">"{lesson.titleDe}"</strong> darsining barcha 9 bosqichini to‘liq o‘zlashtirdingiz.
              </p>
            </div>

            {/* Gamification Stats: +50 XP & Streak Flame */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/80 text-center">
                <Flame size={22} className="mx-auto text-amber-500 fill-amber-500 animate-pulse mb-1" />
                <div className="text-lg font-black text-slate-900 dark:text-white">
                  {user?.streakDays ?? 1} kun
                </div>
                <div className="text-[11px] font-bold text-amber-700 dark:text-amber-300">
                  O‘rganish Silsilasi
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 text-center">
                <Sparkles size={22} className="mx-auto text-emerald-500 mb-1" />
                <div className="text-lg font-black text-slate-900 dark:text-white">
                  +50 XP
                </div>
                <div className="text-[11px] font-bold text-emerald-700 dark:text-emerald-300">
                  Tajriba Bali
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-1 flex flex-col gap-2.5">
              {nextLesson ? (
                <button
                  onClick={() => {
                    setShowCelebration(false);
                    navigate(`/courses/${nextLesson.levelCode}/lesson/${nextLesson.id}`);
                    setActiveTab('warmup');
                  }}
                  className="w-full py-4 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-sm sm:text-base flex items-center justify-center space-x-2 shadow-glow transition active:scale-95"
                >
                  <span>Keyingi darsga o‘tish (#{nextLesson.orderIndex}-dars)</span>
                  <ArrowRight size={18} />
                </button>
              ) : (
                <button
                  onClick={() => {
                    setShowCelebration(false);
                    navigate(`/levels/${lesson.levelCode}`);
                  }}
                  className="w-full py-4 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-sm sm:text-base shadow-glow transition active:scale-95"
                >
                  Modul darslariga qaytish
                </button>
              )}

              <button
                onClick={() => setShowCelebration(false)}
                className="w-full py-2.5 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition"
              >
                Mashqlarni qayta ko‘rib chiqish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
