import { 
  Level, 
  Module, 
  Lesson, 
  VocabularyItem, 
  GrammarTopic, 
  ShadowingExercise, 
  UserProfile, 
  LessonProgress, 
  VocabularyProgress, 
  CEFRLevelCode 
} from '../types/database';
import { 
  INITIAL_LEVELS, 
  INITIAL_MODULES, 
  INITIAL_LESSONS, 
  ALL_INITIAL_VOCABULARY, 
  ALL_INITIAL_GRAMMAR, 
  ALL_INITIAL_SHADOWING 
} from './seedData';
import { supabase, isSupabaseConfigured } from './supabase';

const STORAGE_KEYS = {
  VERSION: 'fgn_curriculum_version',
  LEVELS: 'fgn_levels',
  MODULES: 'fgn_modules',
  LESSONS: 'fgn_lessons',
  VOCABULARY: 'fgn_vocabulary',
  GRAMMAR: 'fgn_grammar',
  SHADOWING: 'fgn_shadowing',
  USER_PROFILE: 'fgn_user_profile',
  LESSON_PROGRESS: 'fgn_lesson_progress',
  VOCAB_PROGRESS: 'fgn_vocab_progress',
};

const CURRENT_CURRICULUM_VERSION = 'v3_menschen_a1_alignment';

class StorageService {
  private isBrowser = typeof window !== 'undefined';

  constructor() {
    this.initDefaultData();
  }

  private initDefaultData() {
    if (!this.isBrowser) return;

    const storedVersion = localStorage.getItem(STORAGE_KEYS.VERSION);
    const needsCurriculumSync = storedVersion !== CURRENT_CURRICULUM_VERSION;

    if (needsCurriculumSync || !localStorage.getItem(STORAGE_KEYS.LEVELS)) {
      localStorage.setItem(STORAGE_KEYS.LEVELS, JSON.stringify(INITIAL_LEVELS));
    }
    if (needsCurriculumSync || !localStorage.getItem(STORAGE_KEYS.MODULES)) {
      localStorage.setItem(STORAGE_KEYS.MODULES, JSON.stringify(INITIAL_MODULES));
    }
    if (needsCurriculumSync || !localStorage.getItem(STORAGE_KEYS.LESSONS)) {
      localStorage.setItem(STORAGE_KEYS.LESSONS, JSON.stringify(INITIAL_LESSONS));
    }
    if (needsCurriculumSync || !localStorage.getItem(STORAGE_KEYS.VOCABULARY)) {
      localStorage.setItem(STORAGE_KEYS.VOCABULARY, JSON.stringify(ALL_INITIAL_VOCABULARY));
    }
    if (needsCurriculumSync || !localStorage.getItem(STORAGE_KEYS.GRAMMAR)) {
      localStorage.setItem(STORAGE_KEYS.GRAMMAR, JSON.stringify(ALL_INITIAL_GRAMMAR));
    }
    if (needsCurriculumSync || !localStorage.getItem(STORAGE_KEYS.SHADOWING)) {
      localStorage.setItem(STORAGE_KEYS.SHADOWING, JSON.stringify(ALL_INITIAL_SHADOWING));
    }
    if (needsCurriculumSync) {
      localStorage.setItem(STORAGE_KEYS.VERSION, CURRENT_CURRICULUM_VERSION);
    }

    // Default mock user profile if not logged in
    if (!localStorage.getItem(STORAGE_KEYS.USER_PROFILE)) {
      const defaultUser: UserProfile = {
        id: 'usr-demo-1',
        email: 'talaba@greatnation.uz',
        name: 'O‘quvchi',
        role: 'student',
        currentLevel: 'a1-1',
        dailyGoalMinutes: 20,
        streakDays: 3,
        xpPoints: 180,
        createdAt: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(defaultUser));
    }
  }

  // --- Educational Content Retrieval ---

  public getLevels(): Level[] {
    if (!this.isBrowser) return INITIAL_LEVELS;
    const data = localStorage.getItem(STORAGE_KEYS.LEVELS);
    return data ? JSON.parse(data) : INITIAL_LEVELS;
  }

  public getLevelByCode(code: string): Level | undefined {
    return this.getLevels().find(l => l.code === code);
  }

  public getModules(levelId?: string): Module[] {
    if (!this.isBrowser) return INITIAL_MODULES;
    const data = localStorage.getItem(STORAGE_KEYS.MODULES);
    const modules: Module[] = data ? JSON.parse(data) : INITIAL_MODULES;
    if (levelId) {
      return modules.filter(m => m.levelId === levelId).sort((a, b) => a.orderIndex - b.orderIndex);
    }
    return modules.sort((a, b) => a.orderIndex - b.orderIndex);
  }

  public getLessons(moduleId?: string, levelCode?: CEFRLevelCode): Lesson[] {
    if (!this.isBrowser) return INITIAL_LESSONS;
    const data = localStorage.getItem(STORAGE_KEYS.LESSONS);
    let lessons: Lesson[] = data ? JSON.parse(data) : INITIAL_LESSONS;
    
    if (moduleId) {
      lessons = lessons.filter(l => l.moduleId === moduleId);
    }
    if (levelCode) {
      lessons = lessons.filter(l => l.levelCode === levelCode);
    }
    return lessons.sort((a, b) => a.orderIndex - b.orderIndex);
  }

  public getLessonById(id: string): Lesson | undefined {
    const lessons = this.getLessons();
    return lessons.find(l => l.id === id);
  }

  public getAllVocabulary(): VocabularyItem[] {
    if (!this.isBrowser) return ALL_INITIAL_VOCABULARY;
    const data = localStorage.getItem(STORAGE_KEYS.VOCABULARY);
    return data ? JSON.parse(data) : ALL_INITIAL_VOCABULARY;
  }

  public getAllGrammar(): GrammarTopic[] {
    if (!this.isBrowser) return ALL_INITIAL_GRAMMAR;
    const data = localStorage.getItem(STORAGE_KEYS.GRAMMAR);
    return data ? JSON.parse(data) : ALL_INITIAL_GRAMMAR;
  }

  public getAllShadowing(levelCode?: CEFRLevelCode): ShadowingExercise[] {
    if (!this.isBrowser) return ALL_INITIAL_SHADOWING;
    const data = localStorage.getItem(STORAGE_KEYS.SHADOWING);
    const list: ShadowingExercise[] = data ? JSON.parse(data) : ALL_INITIAL_SHADOWING;
    if (levelCode) {
      return list.filter(s => s.levelCode === levelCode);
    }
    return list;
  }

  // --- Admin Capabilities (Section 15) ---

  public saveLesson(lesson: Lesson): void {
    const lessons = this.getLessons();
    const index = lessons.findIndex(l => l.id === lesson.id);
    if (index >= 0) {
      lessons[index] = lesson;
    } else {
      lessons.push(lesson);
    }
    localStorage.setItem(STORAGE_KEYS.LESSONS, JSON.stringify(lessons));

    // Also update any extracted vocabulary
    if (lesson.vocabulary && lesson.vocabulary.length > 0) {
      const vocabList = this.getAllVocabulary();
      lesson.vocabulary.forEach(v => {
        const vIndex = vocabList.findIndex(x => x.id === v.id);
        if (vIndex >= 0) {
          vocabList[vIndex] = v;
        } else {
          vocabList.push(v);
        }
      });
      localStorage.setItem(STORAGE_KEYS.VOCABULARY, JSON.stringify(vocabList));
    }
  }

  public deleteLesson(id: string): void {
    const lessons = this.getLessons().filter(l => l.id !== id);
    localStorage.setItem(STORAGE_KEYS.LESSONS, JSON.stringify(lessons));
  }

  public toggleLessonPublish(id: string): boolean {
    const lessons = this.getLessons();
    const lesson = lessons.find(l => l.id === id);
    if (lesson) {
      lesson.isPublished = !lesson.isPublished;
      localStorage.setItem(STORAGE_KEYS.LESSONS, JSON.stringify(lessons));
      return lesson.isPublished;
    }
    return false;
  }

  public saveVocabularyItem(item: VocabularyItem): void {
    const vocabList = this.getAllVocabulary();
    const index = vocabList.findIndex(v => v.id === item.id);
    if (index >= 0) {
      vocabList[index] = item;
    } else {
      vocabList.push(item);
    }
    localStorage.setItem(STORAGE_KEYS.VOCABULARY, JSON.stringify(vocabList));
  }

  public deleteVocabularyItem(id: string): void {
    const vocabList = this.getAllVocabulary().filter(v => v.id !== id);
    localStorage.setItem(STORAGE_KEYS.VOCABULARY, JSON.stringify(vocabList));
  }

  public saveGrammarTopic(topic: GrammarTopic): void {
    const grammarList = this.getAllGrammar();
    const index = grammarList.findIndex(g => g.id === topic.id);
    if (index >= 0) {
      grammarList[index] = topic;
    } else {
      grammarList.push(topic);
    }
    localStorage.setItem(STORAGE_KEYS.GRAMMAR, JSON.stringify(grammarList));
  }

  public deleteGrammarTopic(id: string): void {
    const grammarList = this.getAllGrammar().filter(g => g.id !== id);
    localStorage.setItem(STORAGE_KEYS.GRAMMAR, JSON.stringify(grammarList));
  }

  // --- User Profile & Authentication ---

  public getUserProfile(): UserProfile | null {
    if (!this.isBrowser) return null;
    const data = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
    return data ? JSON.parse(data) : null;
  }

  public saveUserProfile(profile: UserProfile): void {
    if (!this.isBrowser) return;
    localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
  }

  // --- Progress Tracking (Section 13) ---

  public getLessonProgress(): Record<string, LessonProgress> {
    if (!this.isBrowser) return {};
    const data = localStorage.getItem(STORAGE_KEYS.LESSON_PROGRESS);
    return data ? JSON.parse(data) : {};
  }

  public updateLessonProgress(
    lessonId: string, 
    data: { completed?: boolean; score?: number; tab?: string }
  ): void {
    if (!this.isBrowser) return;
    const allProgress = this.getLessonProgress();
    const existing = allProgress[lessonId] || {
      lessonId,
      completed: false,
      score: 0,
      lastAccessedAt: new Date().toISOString(),
      tabCompleted: {}
    };

    if (data.completed !== undefined) {
      existing.completed = data.completed;
      if (data.completed) {
        existing.completedAt = new Date().toISOString();
      }
    }
    if (data.score !== undefined) {
      existing.score = Math.max(existing.score, data.score);
    }
    if (data.tab) {
      existing.tabCompleted = {
        ...(existing.tabCompleted || {}),
        [data.tab]: true
      };
    }
    existing.lastAccessedAt = new Date().toISOString();
    allProgress[lessonId] = existing;

    localStorage.setItem(STORAGE_KEYS.LESSON_PROGRESS, JSON.stringify(allProgress));

    // Update user stats and XP points
    const profile = this.getUserProfile();
    if (profile && data.completed) {
      profile.xpPoints = (profile.xpPoints || 0) + 50;
      this.saveUserProfile(profile);
    }
  }

  public getVocabularyProgress(): Record<string, VocabularyProgress> {
    if (!this.isBrowser) return {};
    const data = localStorage.getItem(STORAGE_KEYS.VOCAB_PROGRESS);
    return data ? JSON.parse(data) : {};
  }

  public toggleFavoriteVocab(vocabId: string): boolean {
    if (!this.isBrowser) return false;
    const all = this.getVocabularyProgress();
    const existing = all[vocabId] || {
      vocabId,
      status: 'learning',
      isFavorite: false,
      lastReviewedAt: new Date().toISOString()
    };
    existing.isFavorite = !existing.isFavorite;
    all[vocabId] = existing;
    localStorage.setItem(STORAGE_KEYS.VOCAB_PROGRESS, JSON.stringify(all));
    return existing.isFavorite;
  }

  public markVocabLearned(vocabId: string, mastered: boolean): void {
    if (!this.isBrowser) return;
    const all = this.getVocabularyProgress();
    const existing = all[vocabId] || {
      vocabId,
      status: 'learning',
      isFavorite: false,
      lastReviewedAt: new Date().toISOString()
    };
    existing.status = mastered ? 'mastered' : 'learning';
    existing.lastReviewedAt = new Date().toISOString();
    all[vocabId] = existing;
    localStorage.setItem(STORAGE_KEYS.VOCAB_PROGRESS, JSON.stringify(all));
  }

  // --- Reset to Initial Data (for Admin/Testing) ---
  public resetToFactoryDefault(): void {
    if (!this.isBrowser) return;
    localStorage.setItem(STORAGE_KEYS.LEVELS, JSON.stringify(INITIAL_LEVELS));
    localStorage.setItem(STORAGE_KEYS.MODULES, JSON.stringify(INITIAL_MODULES));
    localStorage.setItem(STORAGE_KEYS.LESSONS, JSON.stringify(INITIAL_LESSONS));
    localStorage.setItem(STORAGE_KEYS.VOCABULARY, JSON.stringify(ALL_INITIAL_VOCABULARY));
    localStorage.setItem(STORAGE_KEYS.GRAMMAR, JSON.stringify(ALL_INITIAL_GRAMMAR));
    localStorage.setItem(STORAGE_KEYS.SHADOWING, JSON.stringify(ALL_INITIAL_SHADOWING));
    localStorage.removeItem(STORAGE_KEYS.LESSON_PROGRESS);
    localStorage.removeItem(STORAGE_KEYS.VOCAB_PROGRESS);
  }
}

export const storageService = new StorageService();
