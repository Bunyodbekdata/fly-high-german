import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { storageService } from '../lib/storage';
import { useProgress } from '../context/ProgressContext';
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
import { ArrowLeft, ArrowRight, CheckCircle2, Award, Sparkles, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';

export const LessonPage: React.FC = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const { isLessonCompleted, completeLesson, recordTabProgress, lessonProgress } = useProgress();

  const [activeTab, setActiveTab] = useState('warmup');
  const [showCelebration, setShowCelebration] = useState(false);

  const lesson = storageService.getLessonById(lessonId || 'les-1');
  const allLessons = storageService.getLessons();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [lessonId, activeTab]);

  // Keyboard navigation across the 9 lesson tabs
  useEffect(() => {
    const tabOrder = [
      'warmup',
      'dialogue',
      'vocabulary',
      'grammar',
      'listening',
      'reading',
      'writing',
      'shadowing',
      'practice',
    ];

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName || '')) {
        return;
      }
      if (e.key === 'ArrowRight') {
        const idx = tabOrder.indexOf(activeTab);
        if (idx >= 0 && idx + 1 < tabOrder.length) {
          handleTabChange(tabOrder[idx + 1]);
        }
      } else if (e.key === 'ArrowLeft') {
        const idx = tabOrder.indexOf(activeTab);
        if (idx > 0) {
          handleTabChange(tabOrder[idx - 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, lessonId]);

  if (!lesson) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-800">Dars topilmadi</h2>
        <button
          onClick={() => navigate('/courses')}
          className="mt-4 px-6 py-2.5 bg-brand-600 text-white rounded-xl font-bold"
        >
          Kurslarga qaytish
        </button>
      </div>
    );
  }

  const isCompleted = isLessonCompleted(lesson.id);
  const currentProgress = lessonProgress[lesson.id];
  const completedTabs = currentProgress?.tabCompleted || {};

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    recordTabProgress(lesson.id, tab);
  };

  const handleFinishPractice = (score: number) => {
    completeLesson(lesson.id, score);
    setShowCelebration(true);

    try {
      confetti({
        particleCount: 110,
        spread: 75,
        origin: { y: 0.6 },
      });
    } catch (e) {
      // ignore
    }
  };

  // Find next lesson in the curriculum
  const currentIndex = allLessons.findIndex((l) => l.id === lesson.id);
  const nextLesson =
    currentIndex >= 0 && currentIndex + 1 < allLessons.length ? allLessons[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col relative">
      {/* Sticky Lesson Header with 9 structured coursebook tabs, progress & speed controls */}
      <LessonHeader
        lesson={lesson}
        isCompleted={isCompleted}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        completedTabs={completedTabs}
      />

      {/* Main Tab Content */}
      <div className="flex-1 pb-16">
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
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 block mb-1">
                9-Bo‘lim: Amaliy mashqlar (Übungen)
              </span>
              <h2 className="text-2xl font-bold text-slate-900">
                O‘rgangan bilimlaringizni sinab ko‘ring
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Har bir xato javob uchun o‘zbek tilida grammatik qoida va ta‘limiy tushuntirish beriladi.
              </p>
            </div>

            <ExerciseRunner
              exercises={lesson.practice || []}
              onFinish={handleFinishPractice}
            />

            {/* Next Lesson Navigator */}
            {nextLesson && (
              <div className="max-w-2xl mx-auto p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Keyingi dars:
                  </span>
                  <h4 className="text-base font-bold text-slate-900 mt-0.5">
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

      {/* Keyboard Shortcuts Hint Bar */}
      <div className="py-2.5 bg-slate-100/80 border-t border-slate-200 text-center text-[11px] font-semibold text-slate-500 flex items-center justify-center space-x-2">
        <span className="px-1.5 py-0.5 rounded bg-white border border-slate-300 font-mono text-[10px] text-slate-700">
          ←
        </span>
        <span className="px-1.5 py-0.5 rounded bg-white border border-slate-300 font-mono text-[10px] text-slate-700">
          →
        </span>
        <span>Klaviaturadagi chap va o‘ng strelkalar orqali bo‘limlar bo‘ylab o‘tishingiz mumkin</span>
      </div>

      {/* Celebration Modal after finishing practice */}
      {showCelebration && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-slate-100 text-center space-y-5 animate-scaleUp">
            <div className="w-16 h-16 mx-auto rounded-3xl bg-amber-100 text-amber-600 flex items-center justify-center shadow-inner">
              <Award size={36} />
            </div>

            <div>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700 mb-2">
                <Sparkles size={12} />
                <span>+50 XP Tajriba olindi</span>
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Ajoyib natija! Barakalla!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Siz <span className="font-bold text-slate-900">"{lesson.titleDe}"</span> darsini to‘liq o‘zlashtirdingiz va mashqlarni yakunladingiz.
              </p>
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              {nextLesson ? (
                <button
                  onClick={() => {
                    setShowCelebration(false);
                    navigate(`/courses/${nextLesson.levelCode}/lesson/${nextLesson.id}`);
                    setActiveTab('warmup');
                  }}
                  className="w-full py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-sm transition"
                >
                  <span>Keyingi darsga o‘tish</span>
                  <ArrowRight size={16} />
                </button>
              ) : (
                <button
                  onClick={() => {
                    setShowCelebration(false);
                    navigate(`/levels/${lesson.levelCode}`);
                  }}
                  className="w-full py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-sm transition"
                >
                  Modul sahifasiga qaytish
                </button>
              )}

              <button
                onClick={() => setShowCelebration(false)}
                className="w-full py-2.5 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-800 transition"
              >
                Oynani yopish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
