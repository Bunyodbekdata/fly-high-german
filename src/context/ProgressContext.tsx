import React, { createContext, useContext, useState, useEffect } from 'react';
import { LessonProgress, VocabularyProgress, CEFRLevelCode, Lesson } from '../types/database';
import { storageService } from '../lib/storage';
import confetti from 'canvas-confetti';

interface ProgressContextType {
  lessonProgress: Record<string, LessonProgress>;
  vocabProgress: Record<string, VocabularyProgress>;
  isLessonCompleted: (lessonId: string) => boolean;
  getLessonScore: (lessonId: string) => number;
  getLevelProgress: (levelCode: CEFRLevelCode) => number;
  completedLessonsCount: number;
  masteredVocabCount: number;
  completeLesson: (lessonId: string, score: number) => void;
  recordTabProgress: (lessonId: string, tab: string) => void;
  toggleFavoriteWord: (vocabId: string) => boolean;
  markWordMastered: (vocabId: string, mastered: boolean) => void;
  getNextIncompleteLesson: () => Lesson | undefined;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lessonProgress, setLessonProgress] = useState<Record<string, LessonProgress>>(() =>
    storageService.getLessonProgress()
  );
  const [vocabProgress, setVocabProgress] = useState<Record<string, VocabularyProgress>>(() =>
    storageService.getVocabularyProgress()
  );

  const refreshProgress = () => {
    setLessonProgress({ ...storageService.getLessonProgress() });
    setVocabProgress({ ...storageService.getVocabularyProgress() });
  };

  const isLessonCompleted = (lessonId: string): boolean => {
    return Boolean(lessonProgress[lessonId]?.completed);
  };

  const getLessonScore = (lessonId: string): number => {
    return lessonProgress[lessonId]?.score || 0;
  };

  const getLevelProgress = (levelCode: CEFRLevelCode): number => {
    const lessons = storageService.getLessons(undefined, levelCode);
    if (lessons.length === 0) return 0;
    const completed = lessons.filter(l => lessonProgress[l.id]?.completed).length;
    return Math.round((completed / lessons.length) * 100);
  };

  const completedLessonsCount = Object.values(lessonProgress).filter(p => p.completed).length;
  const masteredVocabCount = Object.values(vocabProgress).filter(v => v.status === 'mastered').length;

  const completeLesson = (lessonId: string, score: number) => {
    storageService.updateLessonProgress(lessonId, { completed: true, score });
    refreshProgress();

    // Trigger celebratory confetti animation
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // safe fallback if canvas is not initialized
    }
  };

  const recordTabProgress = (lessonId: string, tab: string) => {
    storageService.updateLessonProgress(lessonId, { tab });
    refreshProgress();
  };

  const toggleFavoriteWord = (vocabId: string): boolean => {
    const isFav = storageService.toggleFavoriteVocab(vocabId);
    refreshProgress();
    return isFav;
  };

  const markWordMastered = (vocabId: string, mastered: boolean) => {
    storageService.markVocabLearned(vocabId, mastered);
    refreshProgress();
  };

  const getNextIncompleteLesson = (): Lesson | undefined => {
    const allLessons = storageService.getLessons();
    const next = allLessons.find(l => !lessonProgress[l.id]?.completed);
    return next || allLessons[0];
  };

  return (
    <ProgressContext.Provider
      value={{
        lessonProgress,
        vocabProgress,
        isLessonCompleted,
        getLessonScore,
        getLevelProgress,
        completedLessonsCount,
        masteredVocabCount,
        completeLesson,
        recordTabProgress,
        toggleFavoriteWord,
        markWordMastered,
        getNextIncompleteLesson
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
