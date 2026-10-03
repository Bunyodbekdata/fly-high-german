export type CEFRLevelCode = 'a1-1' | 'a1-2' | 'a2-1' | 'a2-2' | 'b1-1' | 'b1-2';

export type WordType = 'noun' | 'verb' | 'adjective' | 'adverb' | 'expression' | 'phrase' | 'preposition' | 'conjunction';
export type GermanArticle = 'der' | 'die' | 'das';

export interface Level {
  id: string;
  code: CEFRLevelCode;
  title: string;
  cefrLevel: string;
  descriptionUz: string;
  targetAudience: string;
  estimatedHours: number;
  orderIndex: number;
  isActive: boolean;
  isComingSoon?: boolean;
}

export interface Module {
  id: string;
  levelId: string;
  levelCode: CEFRLevelCode;
  titleDe: string;
  titleUz: string;
  descriptionUz: string;
  orderIndex: number;
  reviewSummaryUz?: string;
  miniTest?: ExerciseItem[];
  lessons?: Lesson[];
}

export interface WarmUpContext {
  situationUz: string;
  curiosityQuestionUz: string;
  miniDialogue?: { speaker: string; textDe: string; textUz: string }[];
  hintUz?: string;
}

export interface ContextDialogue {
  titleDe: string;
  titleUz: string;
  situationUz: string;
  audioText?: string;
  lines: { speaker: string; textDe: string; textUz: string; audioText?: string }[];
  usefulPhrases: { german: string; uzbek: string; noteUz?: string }[];
  culturalNoteUz?: string;
}

export interface GrammarDiscovery {
  observationPromptUz: string;
  discoveryExamples: { german: string; highlight: string; uzbek: string }[];
  patternExplanationUz: string;
  ruleFormulaUz: string;
}

export interface ThreeStageListening {
  titleDe: string;
  titleUz: string;
  situationUz: string;
  audioTranscriptDe: string;
  translationUz: string;
  stage1Global: {
    instructionUz: string;
    questionUz: string;
    options: string[];
    correctIndex: number;
    explanationUz: string;
  };
  stage2Detail: {
    instructionUz: string;
    questions: {
      id: string;
      questionUz: string;
      options: string[];
      correctIndex: number;
      explanationUz: string;
    }[];
  };
  stage3Transcript: {
    dialogue: { speaker: string; textDe: string; textUz: string }[];
    keyVocabulary: { german: string; uzbek: string }[];
  };
}

export interface ScaffoldedWriting {
  taskTitleUz: string;
  promptUz: string;
  taskInstructionsUz: string;
  controlledScaffolding: {
    stepTitleUz: string;
    sentenceStarters: string[];
    fillInGaps?: { promptUz: string; template: string; sampleCompletion: string }[];
  };
  usefulVocabulary: { german: string; uzbek: string }[];
  modelAnswerDe: string;
  modelAnswerUz: string;
}

export interface WritingTask {
  id: string;
  lessonId: string;
  levelCode?: CEFRLevelCode;
  titleUz: string;
  promptUz: string;
  taskInstructionsUz: string;
  usefulVocabulary?: { german: string; uzbek: string }[];
  modelStructure?: string[];
  modelAnswerDe: string;
  modelAnswerUz: string;
}

export interface Lesson {
  id: string;
  moduleId: string;
  levelCode: CEFRLevelCode;
  titleDe: string;
  titleUz: string;
  descriptionUz: string;
  orderIndex: number;
  estimatedMinutes: number;
  isPublished: boolean;
  objectivesUz: string[];

  // Pedagogical Coursebook Components
  warmUp?: WarmUpContext;
  contextDialogue?: ContextDialogue;
  vocabulary?: VocabularyItem[];
  grammarDiscovery?: GrammarDiscovery;
  grammar?: GrammarTopic[];
  listening3Stage?: ThreeStageListening;
  reading?: ReadingMaterial[];
  writingScaffold?: ScaffoldedWriting;
  shadowing?: ShadowingExercise[];
  practice?: ExerciseItem[];

  // Legacy fallback support
  listening?: any[];
  writing?: any[];
}

export interface VocabularyItem {
  id: string;
  lessonId: string;
  moduleTitle?: string;
  levelCode: CEFRLevelCode;
  german: string;
  article?: GermanArticle | null;
  plural?: string | null;
  uzbek: string;
  exampleDe: string;
  exampleUz: string;
  wordType: WordType;
  audioUrl?: string;
  memoryHintUz?: string;
}

export interface GrammarTopic {
  id: string;
  lessonId: string;
  levelCode: CEFRLevelCode;
  titleDe: string;
  titleUz: string;
  summaryUz: string;
  explanationUz: string;
  wordOrderRuleUz?: string;
  tables?: {
    title: string;
    headers: string[];
    rows: string[][];
  }[];
  examples: {
    german: string;
    uzbek: string;
    highlight?: string;
  }[];
  commonMistakes?: {
    incorrect: string;
    correct: string;
    explanationUz: string;
  }[];
}

export interface ReadingMaterial {
  id: string;
  lessonId: string;
  levelCode?: CEFRLevelCode;
  titleDe: string;
  titleUz: string;
  textDe: string;
  translationUz: string;
  vocabularyHints: { german: string; uzbek: string }[];
  questions: {
    id: string;
    questionUz: string;
    options: string[];
    correctIndex: number;
    explanationUz: string;
  }[];
}

export interface ListeningExercise {
  id: string;
  lessonId: string;
  levelCode?: CEFRLevelCode;
  titleDe: string;
  titleUz: string;
  transcriptDe: string;
  translationUz: string;
  audioUrl?: string;
  dialogue?: { speaker: string; textDe: string; textUz: string }[];
  questions: {
    id: string;
    questionUz: string;
    options: string[];
    correctIndex: number;
    explanationUz: string;
  }[];
}

export interface ShadowingExercise {
  id: string;
  lessonId: string;
  levelCode: CEFRLevelCode;
  sentenceDe: string;
  translationUz: string;
  audioUrl?: string;
  phoneticHint?: string;
  orderIndex: number;
}

export type ExerciseType = 
  | 'multiple_choice' 
  | 'fill_in_the_blank' 
  | 'sentence_ordering' 
  | 'matching' 
  | 'translation'
  | 'article_selection'
  | 'multiple-choice'
  | 'fill-blank'
  | 'word-order';

export interface ExerciseItem {
  id: string;
  lessonId?: string;
  type: ExerciseType;
  promptUz?: string;
  questionUz?: string;
  promptDe?: string;
  blankSentence?: string;
  options?: string[];
  correctAnswer: any;
  pairs?: { left: string; right: string }[];
  wordsToOrder?: string[];
  scrambledWords?: string[];
  explanationUz: string;
  mistakeTipUz?: string; // Explicit educational explanation why an error occurred
}

export interface PronunciationRule {
  id: string;
  symbol: string;
  category: 'alphabet' | 'umlauts' | 'diphthongs' | 'consonants';
  nameUz: string;
  pronunciationUz: string;
  soundHintUz: string;
  examples: { german: string; phonetic: string; uzbek: string }[];
}

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  role: 'student' | 'admin';
  currentLevel: CEFRLevelCode;
  dailyGoalMinutes: number;
  streakDays: number;
  xpPoints: number;
  createdAt: string;
}

export interface LessonProgress {
  lessonId: string;
  completed: boolean;
  score: number;
  completedAt?: string;
  lastAccessedAt: string;
  tabCompleted?: Record<string, boolean>;
}

export interface VocabularyProgress {
  vocabId: string;
  status: 'learning' | 'mastered';
  isFavorite: boolean;
  lastReviewedAt: string;
}

export interface UserStats {
  completedLessonsCount: number;
  vocabularyMasteredCount: number;
  totalVocabularyCount: number;
  exercisesCompletedCount: number;
  shadowingCompletedCount: number;
  currentStreak: number;
  levelProgress: Record<CEFRLevelCode, number>;
}
