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
import { CertificateTest, CertificateAttempt, Certificate } from '../types/certificate';
import { UserVideoNote } from '../types/youtube';
import { 
  INITIAL_LEVELS, 
  INITIAL_MODULES, 
  INITIAL_LESSONS, 
  ALL_INITIAL_VOCABULARY, 
  ALL_INITIAL_GRAMMAR, 
  ALL_INITIAL_SHADOWING 
} from './seedData';
import { INITIAL_CERTIFICATE_TESTS } from './seedCertificateTests';

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
  CERTIFICATE_TESTS: 'fgn_certificate_tests',
  CERTIFICATE_ATTEMPTS: 'fgn_certificate_attempts',
  CERTIFICATES: 'fgn_certificates',
};

const CURRENT_CURRICULUM_VERSION = 'v7_complete_b1_curriculum_release';

export const PROFILE_UPDATED_EVENT = 'fgn-profile-updated';

/** Local calendar date as YYYY-MM-DD (not UTC, so the day flips at local midnight). */
const toLocalDateKey = (d: Date): string => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
};

const todayKey = (): string => toLocalDateKey(new Date());

const yesterdayKey = (): string => {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return toLocalDateKey(d);
};

const isPlainObject = (value: unknown): boolean =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

class StorageService {
  private isBrowser = typeof window !== 'undefined';

  constructor() {
    // Modul yuklanishida portlash "oq ekran" beradi va uni React ErrorBoundary
    // ushlay olmaydi. Shuning uchun boshlang'ich tayyorgarlik hech qachon
    // tashqariga xato chiqarmasligi shart.
    try {
      this.initDefaultData();
    } catch (e) {
      console.error('[StorageService] Boshlang‘ich ma’lumotlarni tayyorlashda xatolik:', e);
    }
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
      let lessonsToStore = INITIAL_LESSONS;
      const existingRaw = localStorage.getItem(STORAGE_KEYS.LESSONS);
      if (existingRaw) {
        try {
          const existingLessons = JSON.parse(existingRaw);
          if (Array.isArray(existingLessons)) {
            const initialIds = new Set(INITIAL_LESSONS.map(l => l.id));
            const customLessons = existingLessons.filter(l => l && !initialIds.has(l.id));
            if (customLessons.length > 0) {
              lessonsToStore = [...INITIAL_LESSONS, ...customLessons];
            }
          }
        } catch {
          // ignore corrupted existing
        }
      }
      localStorage.setItem(STORAGE_KEYS.LESSONS, JSON.stringify(lessonsToStore));
    }
    if (needsCurriculumSync || !localStorage.getItem(STORAGE_KEYS.VOCABULARY)) {
      let vocabToStore = ALL_INITIAL_VOCABULARY;
      const existingRaw = localStorage.getItem(STORAGE_KEYS.VOCABULARY);
      if (existingRaw) {
        try {
          const existingVocab = JSON.parse(existingRaw);
          if (Array.isArray(existingVocab)) {
            const initialIds = new Set(ALL_INITIAL_VOCABULARY.map(v => v.id));
            const customVocab = existingVocab.filter(v => v && !initialIds.has(v.id));
            if (customVocab.length > 0) {
              vocabToStore = [...ALL_INITIAL_VOCABULARY, ...customVocab];
            }
          }
        } catch {
          // ignore
        }
      }
      localStorage.setItem(STORAGE_KEYS.VOCABULARY, JSON.stringify(vocabToStore));
    }
    if (needsCurriculumSync || !localStorage.getItem(STORAGE_KEYS.GRAMMAR)) {
      let grammarToStore = ALL_INITIAL_GRAMMAR;
      const existingRaw = localStorage.getItem(STORAGE_KEYS.GRAMMAR);
      if (existingRaw) {
        try {
          const existingGrammar = JSON.parse(existingRaw);
          if (Array.isArray(existingGrammar)) {
            const initialIds = new Set(ALL_INITIAL_GRAMMAR.map(g => g.id));
            const customGrammar = existingGrammar.filter(g => g && !initialIds.has(g.id));
            if (customGrammar.length > 0) {
              grammarToStore = [...ALL_INITIAL_GRAMMAR, ...customGrammar];
            }
          }
        } catch {
          // ignore
        }
      }
      localStorage.setItem(STORAGE_KEYS.GRAMMAR, JSON.stringify(grammarToStore));
    }
    if (needsCurriculumSync || !localStorage.getItem(STORAGE_KEYS.SHADOWING)) {
      localStorage.setItem(STORAGE_KEYS.SHADOWING, JSON.stringify(ALL_INITIAL_SHADOWING));
    }
    if (needsCurriculumSync || !localStorage.getItem(STORAGE_KEYS.CERTIFICATE_TESTS)) {
      localStorage.setItem(STORAGE_KEYS.CERTIFICATE_TESTS, JSON.stringify(INITIAL_CERTIFICATE_TESTS));
    }
    if (needsCurriculumSync) {
      localStorage.setItem(STORAGE_KEYS.VERSION, CURRENT_CURRICULUM_VERSION);
    }

    // Default guest profile for first-time visitors — starts with honest zero stats
    if (!localStorage.getItem(STORAGE_KEYS.USER_PROFILE)) {
      const defaultUser: UserProfile = {
        id: 'usr-demo-1',
        email: 'talaba@greatnation.uz',
        name: 'O‘quvchi',
        role: 'student',
        currentLevel: 'a1-1',
        dailyGoalMinutes: 20,
        streakDays: 0,
        xpPoints: 0,
        createdAt: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(defaultUser));
    }

    this.normalizeProfileStats();
  }

  /**
   * Repairs stats on load:
   * - Legacy profiles (no lastActiveDate) carried fake starter numbers, so streak is reset
   *   and XP is recomputed from actually completed lessons (50 XP each).
   * - A streak whose last activity is older than yesterday is broken and shown as 0.
   */
  private normalizeProfileStats() {
    const raw = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
    if (!raw) return;
    let profile: UserProfile;
    try {
      profile = JSON.parse(raw);
    } catch {
      return;
    }

    let changed = false;

    if (!profile.lastActiveDate) {
      const completed = Object.values(this.getLessonProgress()).filter(
        p => p && p.completed === true
      ).length;
      const realXp = completed * 50;
      if (profile.streakDays !== 0 || profile.xpPoints !== realXp) {
        profile.streakDays = 0;
        profile.xpPoints = realXp;
        changed = true;
      }
    } else if (
      profile.lastActiveDate !== todayKey() &&
      profile.lastActiveDate !== yesterdayKey() &&
      profile.streakDays !== 0
    ) {
      profile.streakDays = 0;
      changed = true;
    }

    if (changed) {
      localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
    }
  }

  /** Call on any genuine learning action. Increments the streak at most once per calendar day. */
  public recordActivity(): void {
    if (!this.isBrowser) return;
    const profile = this.getUserProfile();
    if (!profile) return;

    const today = todayKey();
    if (profile.lastActiveDate === today) return;

    profile.streakDays =
      profile.lastActiveDate === yesterdayKey() ? (profile.streakDays || 0) + 1 : 1;
    profile.lastActiveDate = today;
    this.saveUserProfile(profile);
  }

  /**
   * Safely reads and parses JSON from localStorage with fallbacks,
   * completely preventing JSON.parse SyntaxErrors from crashing the app.
   */
  private safeReadJSON<T>(
    key: string,
    fallback: T,
    validate?: (value: unknown) => boolean
  ): T {
    if (!this.isBrowser) return fallback;
    try {
      const data = localStorage.getItem(key);
      if (!data) return fallback;
      const parsed = JSON.parse(data) as T;
      // Sintaksis to'g'ri bo'lsa ham shakl buzilgan bo'lishi mumkin
      // (masalan `{"lesson-x": null}`) — bunday qiymat keyinroq portlaydi.
      if (validate && !validate(parsed)) {
        console.warn(`[StorageService] Kutilmagan ma'lumot shakli (${key}), standart qiymatga qaytarildi.`);
        return fallback;
      }
      return parsed;
    } catch (e) {
      console.warn(`[StorageService] Buzilgan JSON aniqlandi (${key}), standart qiymatga qaytarildi:`, e);
      return fallback;
    }
  }

  /**
   * Record ichidagi yaroqsiz yozuvlarni (null, massiv, satr) tashlab yuboradi.
   * `{ "lesson-x": null }` kabi qiymat `.completed` o'qilganda ilovani
   * portlatardi (ProgressContext ham, normalizeProfileStats ham).
   */
  private filterValidRecords<T>(raw: Record<string, T>, key: string): Record<string, T> {
    const clean: Record<string, T> = {};
    let dropped = 0;
    for (const [id, value] of Object.entries(raw)) {
      if (isPlainObject(value)) {
        clean[id] = value;
      } else {
        dropped++;
      }
    }
    if (dropped > 0) {
      console.warn(`[StorageService] ${key}: ${dropped} ta yaroqsiz yozuv tashlab yuborildi.`);
    }
    return clean;
  }

  // --- Educational Content Retrieval ---

  public getLevels(): Level[] {
    return this.safeReadJSON(STORAGE_KEYS.LEVELS, INITIAL_LEVELS, Array.isArray);
  }

  public getLevelByCode(code: string): Level | undefined {
    return this.getLevels().find(l => l.code === code);
  }

  public getModules(levelId?: string): Module[] {
    const modules: Module[] = this.safeReadJSON(STORAGE_KEYS.MODULES, INITIAL_MODULES, Array.isArray);
    if (levelId) {
      return modules.filter(m => m.levelId === levelId).sort((a, b) => a.orderIndex - b.orderIndex);
    }
    return modules.sort((a, b) => a.orderIndex - b.orderIndex);
  }

  public getLessons(moduleId?: string, levelCode?: CEFRLevelCode): Lesson[] {
    let lessons: Lesson[] = this.safeReadJSON(STORAGE_KEYS.LESSONS, INITIAL_LESSONS, Array.isArray);
    
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
    return this.safeReadJSON(STORAGE_KEYS.VOCABULARY, ALL_INITIAL_VOCABULARY, Array.isArray);
  }

  public getAllGrammar(): GrammarTopic[] {
    return this.safeReadJSON(STORAGE_KEYS.GRAMMAR, ALL_INITIAL_GRAMMAR, Array.isArray);
  }

  public getAllShadowing(levelCode?: CEFRLevelCode): ShadowingExercise[] {
    const list: ShadowingExercise[] = this.safeReadJSON(
      STORAGE_KEYS.SHADOWING,
      ALL_INITIAL_SHADOWING,
      Array.isArray
    );
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
    return this.safeReadJSON<UserProfile | null>(
      STORAGE_KEYS.USER_PROFILE,
      null,
      v => v === null || isPlainObject(v)
    );
  }

  public saveUserProfile(profile: UserProfile): void {
    if (!this.isBrowser) return;
    localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
    // Let AuthContext refresh asynchronously so React render phase is not interrupted
    setTimeout(() => {
      window.dispatchEvent(new Event(PROFILE_UPDATED_EVENT));
    }, 0);
  }

  /**
   * Foydalanuvchi rivojlanish ma'lumotlarini har bir hisob uchun alohida
   * kalitda (fgn_lesson_progress_{userId}) saqlash. Bu tizimdan chiqqanda yoki
   * boshqa foydalanuvchi kirganda ma'lumotlar aralashib ketmasligini ta'minlaydi.
   */
  private getScopedProgressKey(baseKey: string, explicitUserId?: string): string {
    const userId = explicitUserId || this.getUserProfile()?.id;
    if (userId) {
      return `${baseKey}_${userId}`;
    }
    return baseKey;
  }

  // --- Progress Tracking (Section 13) ---

  public getLessonProgress(userId?: string): Record<string, LessonProgress> {
    const scopedKey = this.getScopedProgressKey(STORAGE_KEYS.LESSON_PROGRESS, userId);
    let raw = this.safeReadJSON<Record<string, LessonProgress> | null>(
      scopedKey,
      null,
      isPlainObject
    );

    // Eski umumiy kalitdan ko'chirish (avvalgi foydalanuvchilar ma'lumotini yo'qotmaslik uchun)
    if (!raw && scopedKey !== STORAGE_KEYS.LESSON_PROGRESS) {
      const legacy = this.safeReadJSON<Record<string, LessonProgress>>(
        STORAGE_KEYS.LESSON_PROGRESS,
        {},
        isPlainObject
      );
      if (Object.keys(legacy).length > 0) {
        raw = legacy;
        try {
          localStorage.setItem(scopedKey, JSON.stringify(legacy));
        } catch {
          // ignore storage error
        }
      }
    }

    return this.filterValidRecords<LessonProgress>(raw || {}, scopedKey);
  }

  public updateLessonProgress(
    lessonId: string, 
    data: { completed?: boolean; score?: number; tab?: string },
    userId?: string
  ): void {
    if (!this.isBrowser) return;
    const scopedKey = this.getScopedProgressKey(STORAGE_KEYS.LESSON_PROGRESS, userId);
    const allProgress = this.getLessonProgress(userId);
    const existing = allProgress[lessonId] || {
      lessonId,
      completed: false,
      score: 0,
      lastAccessedAt: new Date().toISOString(),
      tabCompleted: {}
    };

    const wasCompleted = existing.completed;

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

    localStorage.setItem(scopedKey, JSON.stringify(allProgress));

    // XP is awarded only the first time a lesson is completed (re-doing a lesson doesn't farm XP)
    const profile = this.getUserProfile();
    if (profile && data.completed && !wasCompleted) {
      profile.xpPoints = (profile.xpPoints || 0) + 50;
      this.saveUserProfile(profile);
    }

    this.recordActivity();
  }

  public getVocabularyProgress(userId?: string): Record<string, VocabularyProgress> {
    const scopedKey = this.getScopedProgressKey(STORAGE_KEYS.VOCAB_PROGRESS, userId);
    let raw = this.safeReadJSON<Record<string, VocabularyProgress> | null>(
      scopedKey,
      null,
      isPlainObject
    );

    if (!raw && scopedKey !== STORAGE_KEYS.VOCAB_PROGRESS) {
      const legacy = this.safeReadJSON<Record<string, VocabularyProgress>>(
        STORAGE_KEYS.VOCAB_PROGRESS,
        {},
        isPlainObject
      );
      if (Object.keys(legacy).length > 0) {
        raw = legacy;
        try {
          localStorage.setItem(scopedKey, JSON.stringify(legacy));
        } catch {
          // ignore
        }
      }
    }

    return this.filterValidRecords<VocabularyProgress>(raw || {}, scopedKey);
  }

  public toggleFavoriteVocab(vocabId: string, userId?: string): boolean {
    if (!this.isBrowser) return false;
    const scopedKey = this.getScopedProgressKey(STORAGE_KEYS.VOCAB_PROGRESS, userId);
    const all = this.getVocabularyProgress(userId);
    const existing = all[vocabId] || {
      vocabId,
      status: 'learning',
      isFavorite: false,
      lastReviewedAt: new Date().toISOString()
    };
    existing.isFavorite = !existing.isFavorite;
    all[vocabId] = existing;
    localStorage.setItem(scopedKey, JSON.stringify(all));
    return existing.isFavorite;
  }

  public markVocabLearned(vocabId: string, mastered: boolean, userId?: string): void {
    if (!this.isBrowser) return;
    const scopedKey = this.getScopedProgressKey(STORAGE_KEYS.VOCAB_PROGRESS, userId);
    const all = this.getVocabularyProgress(userId);
    const existing = all[vocabId] || {
      vocabId,
      status: 'learning',
      isFavorite: false,
      lastReviewedAt: new Date().toISOString()
    };
    existing.status = mastered ? 'mastered' : 'learning';
    existing.lastReviewedAt = new Date().toISOString();
    all[vocabId] = existing;
    localStorage.setItem(scopedKey, JSON.stringify(all));
    if (mastered) {
      this.recordActivity();
    }
  }

  // --- Personal Video Vocabulary Notes (Cross-Video Notebook) ---

  public getAllUserVideoNotes(): UserVideoNote[] {
    if (!this.isBrowser) return [];
    const notes: UserVideoNote[] = [];
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('fgn_video_notes_')) {
          const raw = localStorage.getItem(key);
          if (raw) {
            const list = JSON.parse(raw);
            if (Array.isArray(list)) {
              notes.push(...list);
            }
          }
        }
      }
    } catch (e) {
      console.error('Failed to read video notes', e);
    }
    return notes.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  public deleteUserVideoNote(noteId: string, videoId: string): void {
    if (!this.isBrowser) return;
    try {
      const key = `fgn_video_notes_${videoId}`;
      const raw = localStorage.getItem(key);
      if (raw) {
        const list: UserVideoNote[] = JSON.parse(raw);
        const filtered = list.filter(n => n.id !== noteId);
        localStorage.setItem(key, JSON.stringify(filtered));
      }
    } catch (e) {
      console.error('Failed to delete video note', e);
    }
  }

  // --- Certificate Tests & Assessments System ---
  public getCertificateTests(): CertificateTest[] {
    if (!this.isBrowser) return INITIAL_CERTIFICATE_TESTS;
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CERTIFICATE_TESTS);
      if (!data) return INITIAL_CERTIFICATE_TESTS;
      const raw: CertificateTest[] = JSON.parse(data);
      if (!Array.isArray(raw)) {
        console.warn('[StorageService] Sertifikat testlari shakli buzilgan, standart to‘plamga qaytarildi.');
        localStorage.setItem(STORAGE_KEYS.CERTIFICATE_TESTS, JSON.stringify(INITIAL_CERTIFICATE_TESTS));
        return INITIAL_CERTIFICATE_TESTS;
      }
      // Har bir test to‘liq tuzilgan bo‘lishi shart: bo‘limlar massivi bo‘lmasa
      // test xonasi render paytida portlaydi.
      const parsed: CertificateTest[] = raw.filter(
        t => !!t && typeof t.id === 'string' && Array.isArray(t.sections)
      );
      if (parsed.length === 0) {
        console.warn('[StorageService] Yaroqli sertifikat testi topilmadi, standart to‘plam qaytarildi.');
        return INITIAL_CERTIFICATE_TESTS;
      }
      // Auto-migrate if stored tests don't have separated listening/reading tests
      const hasSeparatedSkills = parsed.some(t => t.skillFocus === 'listening');
      if (!hasSeparatedSkills) {
        localStorage.setItem(STORAGE_KEYS.CERTIFICATE_TESTS, JSON.stringify(INITIAL_CERTIFICATE_TESTS));
        return INITIAL_CERTIFICATE_TESTS;
      }
      return parsed;
    } catch {
      return INITIAL_CERTIFICATE_TESTS;
    }
  }

  public getCertificateTestById(testId: string): CertificateTest | undefined {
    const tests = this.getCertificateTests();
    if (!testId) return undefined;
    // Faqat ANIQ moslik: xato ID boshqa imtihonni ochib yubormasligi kerak.
    const cleanId = testId.toLowerCase().replace(/[^a-z0-9]/g, '');
    return tests.find(
      t => t.id === testId || t.id.toLowerCase().replace(/[^a-z0-9]/g, '') === cleanId
    );
  }

  public saveCertificateTest(test: CertificateTest): void {
    if (!this.isBrowser) return;
    const tests = this.getCertificateTests();
    const idx = tests.findIndex(t => t.id === test.id);
    if (idx >= 0) {
      tests[idx] = test;
    } else {
      tests.push(test);
    }
    localStorage.setItem(STORAGE_KEYS.CERTIFICATE_TESTS, JSON.stringify(tests));
  }

  public getCertificateAttempts(userId?: string): CertificateAttempt[] {
    const list: CertificateAttempt[] = this.safeReadJSON<CertificateAttempt[]>(
      STORAGE_KEYS.CERTIFICATE_ATTEMPTS,
      [],
      Array.isArray
    );
    if (userId) {
      return list.filter(a => a.userId === userId);
    }
    return list;
  }

  public getCertificateAttemptById(attemptId: string): CertificateAttempt | undefined {
    return this.getCertificateAttempts().find(a => a.id === attemptId);
  }

  public saveCertificateAttempt(attempt: CertificateAttempt): void {
    if (!this.isBrowser) return;
    const attempts = this.getCertificateAttempts();
    const idx = attempts.findIndex(a => a.id === attempt.id);
    if (idx >= 0) {
      attempts[idx] = attempt;
    } else {
      attempts.unshift(attempt);
    }
    localStorage.setItem(STORAGE_KEYS.CERTIFICATE_ATTEMPTS, JSON.stringify(attempts));
  }

  public getCertificates(userId?: string): Certificate[] {
    const list: Certificate[] = this.safeReadJSON<Certificate[]>(
      STORAGE_KEYS.CERTIFICATES,
      [],
      Array.isArray
    );
    if (userId) {
      return list.filter(c => c.userId === userId);
    }
    return list;
  }

  public getCertificateById(certificateId: string): Certificate | undefined {
    return this.getCertificates().find(c => c.certificateId === certificateId || c.id === certificateId);
  }

  public saveCertificate(certificate: Certificate): void {
    if (!this.isBrowser) return;
    const certs = this.getCertificates();
    const idx = certs.findIndex(c => c.id === certificate.id || c.certificateId === certificate.certificateId);
    if (idx >= 0) {
      certs[idx] = certificate;
    } else {
      certs.unshift(certificate);
    }
    localStorage.setItem(STORAGE_KEYS.CERTIFICATES, JSON.stringify(certs));
  }

  public generateCertificateId(levelCode: string): string {
    const cleanLevel = levelCode.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
    const year = new Date().getFullYear();
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let rand = '';
    for (let i = 0; i < 6; i++) {
      rand += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `FGN-${cleanLevel}-${year}-${rand}`;
  }

  public getCertificateLevelStats(levelCode: string, userId?: string) {
    const targetUserId = userId || this.getUserProfile()?.id;
    const attempts = this.getCertificateAttempts(targetUserId).filter(
      a => a.levelCode === levelCode && (a.status === 'submitted' || a.status === 'expired')
    );
    const attemptsCount = attempts.length;
    if (attemptsCount === 0) {
      return {
        attemptsCount: 0,
        bestScore: null as number | null,
        bestPercentage: null as number | null,
        lastScore: null as number | null,
        lastPercentage: null as number | null,
        isPassed: false,
        lastAttemptId: null as string | null,
        certificateId: undefined as string | undefined,
      };
    }

    const sortedByDate = [...attempts].sort((a, b) => new Date(b.startedAt).getTime() - new Date(a.startedAt).getTime());
    const last = sortedByDate[0];
    const best = [...attempts].sort((a, b) => b.percentage - a.percentage)[0];
    const isPassed = attempts.some(a => a.passed);

    return {
      attemptsCount,
      bestScore: best.score,
      bestPercentage: best.percentage,
      lastScore: last.score,
      lastPercentage: last.percentage,
      isPassed,
      lastAttemptId: last.id,
      certificateId: best.certificateId || last.certificateId,
    };
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
    localStorage.setItem(STORAGE_KEYS.CERTIFICATE_TESTS, JSON.stringify(INITIAL_CERTIFICATE_TESTS));
    localStorage.removeItem(STORAGE_KEYS.LESSON_PROGRESS);
    localStorage.removeItem(STORAGE_KEYS.VOCAB_PROGRESS);
    localStorage.removeItem(STORAGE_KEYS.CERTIFICATE_ATTEMPTS);
    localStorage.removeItem(STORAGE_KEYS.CERTIFICATES);
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const key = localStorage.key(i);
      if (key && (key.startsWith('fgn_lesson_progress_') || key.startsWith('fgn_vocab_progress_'))) {
        localStorage.removeItem(key);
      }
    }
  }
}

export const storageService = new StorageService();
