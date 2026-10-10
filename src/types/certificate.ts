import { CEFRLevelCode } from './database';

export type CertificateSkill = 'reading' | 'listening' | 'writing' | 'speaking';

export type CertificateQuestionType = 
  | 'multiple_choice' 
  | 'true_false' 
  | 'matching' 
  | 'information_matching' 
  | 'text_selection';

export interface CertificateQuestionOption {
  id: string;
  textDe: string;
  textUz?: string;
}

export interface CertificateQuestion {
  id: string;
  sectionId: string;
  orderIndex: number;
  type: CertificateQuestionType;
  promptDe?: string;
  promptUz: string;
  passageDe?: string; // For reading comprehension passage
  audioText?: string; // For listening comprehension audio synthesis/playback
  audioUrl?: string; // Optional pre-recorded audio file path
  transcriptDe?: string; // Transcript shown ONLY after test submission
  options: CertificateQuestionOption[];
  correctAnswer: string | string[]; // Option ID or matching mapping
  pairs?: { left: string; right: string }[]; // For matching tasks
  points: number;
  explanationUz: string;
}

export interface CertificateSection {
  id: string;
  testId: string;
  skill: CertificateSkill;
  titleDe: string;
  titleUz: string;
  instructionsUz: string;
  orderIndex: number;
  questions: CertificateQuestion[];
}

export interface CertificateTest {
  id: string;
  levelCode: CEFRLevelCode;
  titleDe: string;
  titleUz: string;
  descriptionUz: string;
  durationMinutes: number;
  passingPercentage: number;
  isPublished: boolean;
  sections: CertificateSection[];
  totalPoints: number;
  totalQuestions: number;
  skillFocus?: 'all' | 'reading' | 'listening';
  createdAt?: string;
  updatedAt?: string;
}

export interface CertificateAttemptAnswer {
  questionId: string;
  selectedAnswer: any;
  isCorrect?: boolean;
  pointsEarned?: number;
  isFlagged?: boolean;
}

export interface CertificateAttempt {
  id: string;
  userId: string;
  userName: string;
  testId: string;
  levelCode: CEFRLevelCode;
  startedAt: string;
  submittedAt?: string;
  durationSecondsUsed?: number;
  score: number;
  maxScore: number;
  percentage: number;
  passed: boolean;
  readingScore: number;
  readingMaxScore: number;
  readingPercentage: number;
  listeningScore: number;
  listeningMaxScore: number;
  listeningPercentage: number;
  answers: Record<string, CertificateAttemptAnswer>;
  certificateId?: string;
  status: 'in_progress' | 'submitted' | 'expired';
  /**
   * Natija qayerda hisoblandi: 'server' — Supabase RPC tasdiqlagan (ishonchli),
   * 'local' yoki belgilanmagan — offline/demo rejim.
   */
  gradedBy?: 'server' | 'local';
}

export interface Certificate {
  id: string; // Internal UUID
  certificateId: string; // Unique public ID e.g. FGN-A11-2026-8F42K7
  userId: string;
  userName: string;
  attemptId: string;
  levelCode: CEFRLevelCode;
  title: string;
  score: number;
  percentage: number;
  readingScore?: number;
  listeningScore?: number;
  readingPercentage: number;
  listeningPercentage: number;
  issuedAt: string;
  status: 'valid' | 'revoked';
}
