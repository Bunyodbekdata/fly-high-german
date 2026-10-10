import { CertificateTest, CertificateSection, CertificateQuestion, CertificateAttempt, CertificateAttemptAnswer } from '../types/certificate';
import { storageService } from './storage';
import { supabase, isSupabaseConfigured } from './supabase';
import { CEFRLevelCode } from '../types/database';

export interface SubmitAttemptParams {
  attemptId: string;
  testId: string;
  userId: string;
  userName: string;
  levelCode: CEFRLevelCode;
  durationSecondsUsed: number;
  answers: Record<string, string | string[]>;
}

export interface SubmissionResult {
  attempt: CertificateAttempt;
  serverGraded: boolean;
  certificateId?: string;
}

export const certificateService = {
  /**
   * Fetches a certificate test by ID.
   * In Cloud mode, questions are queried from `certificate_questions_public`
   * where the answer key (`correct_answer`) is completely hidden from the client.
   */
  async getTestById(testId: string): Promise<CertificateTest | null> {
    const client = supabase;

    if (isSupabaseConfigured && client) {
      try {
        const { data: testRow, error: testErr } = await client
          .from('certificate_tests')
          .select('*')
          .eq('id', testId)
          .maybeSingle();

        if (testRow && !testErr) {
          const { data: sectionRows } = await client
            .from('certificate_sections')
            .select('*')
            .eq('test_id', testId)
            .order('order_index');

          if (sectionRows && sectionRows.length > 0) {
            const sectionIds = sectionRows.map((s) => s.id);

            // Fetch from SECURE VIEW (no correct_answer / explanation_uz exposed)
            const { data: questionRows } = await client
              .from('certificate_questions_public')
              .select('*')
              .in('section_id', sectionIds)
              .order('order_index');

            if (questionRows && questionRows.length > 0) {
              const sections: CertificateSection[] = sectionRows.map((sec) => {
                const secQuestions: CertificateQuestion[] = questionRows
                  .filter((q) => q.section_id === sec.id)
                  .map((q) => ({
                    id: q.id,
                    sectionId: q.section_id,
                    orderIndex: q.order_index,
                    type: q.type,
                    promptDe: q.prompt_de || undefined,
                    promptUz: q.prompt_uz,
                    passageDe: q.passage_de || undefined,
                    audioText: q.audio_text || undefined,
                    audioUrl: q.audio_url || undefined,
                    transcriptDe: q.transcript_de || undefined,
                    options: Array.isArray(q.options) ? q.options : [],
                    // Answer key is hidden server-side during the active exam!
                    correctAnswer: undefined,
                    points: q.points,
                  }));

                return {
                  id: sec.id,
                  testId: sec.test_id,
                  skill: sec.skill,
                  titleDe: sec.title_de,
                  titleUz: sec.title_uz,
                  instructionsUz: sec.instructions_uz,
                  orderIndex: sec.order_index,
                  questions: secQuestions,
                };
              });

              return {
                id: testRow.id,
                levelCode: testRow.level_code as CEFRLevelCode,
                titleDe: testRow.title_de,
                titleUz: testRow.title_uz,
                descriptionUz: testRow.description_uz,
                durationMinutes: testRow.duration_minutes,
                passingPercentage: testRow.passing_percentage,
                isPublished: testRow.is_published,
                sections,
                totalPoints: testRow.total_points,
                totalQuestions: testRow.total_questions,
                skillFocus: testId.includes('listening') ? 'listening' : testId.includes('reading') ? 'reading' : 'all',
              };
            }
          }
        }
      } catch (err) {
        console.warn('Supabase test query failed, falling back to local curriculum:', err);
      }
    }

    // Fallback to local storage / seed curriculum
    return storageService.getCertificateTestById(testId) || null;
  },

  /**
   * Submits an exam attempt for grading.
   * In Cloud mode, calls the PostgreSQL SECURITY DEFINER RPC `grade_certificate_attempt`.
   * The server calculates scores, passing grade, and issues certificates.
   */
  async submitAttempt(params: SubmitAttemptParams): Promise<SubmissionResult> {
    const { attemptId, testId, userId, userName, levelCode, durationSecondsUsed, answers } = params;
    const client = supabase;

    if (isSupabaseConfigured && client) {
      try {
        const formattedAnswers = Object.entries(answers).map(([qId, ans]) => ({
          question_id: qId,
          selected_answer: ans,
        }));

        // 1. First record the attempt row in public.certificate_attempts
        await client.from('certificate_attempts').upsert({
          id: attemptId,
          user_id: userId.startsWith('usr-') ? null : userId,
          user_name: userName,
          test_id: testId,
          level_code: levelCode,
          duration_seconds_used: durationSecondsUsed,
          status: 'in_progress',
        });

        // 2. Call server-side grading function
        const { data: gradeResult, error: gradeErr } = await client.rpc('grade_certificate_attempt', {
          p_attempt_id: attemptId,
          p_answers: formattedAnswers,
        });

        if (gradeResult && !gradeErr) {
          // Fetch the final graded attempt from database
          const { data: dbAttempt } = await client
            .from('certificate_attempts')
            .select('*')
            .eq('id', attemptId)
            .maybeSingle();

          if (dbAttempt) {
            const mappedAttempt: CertificateAttempt = {
              id: dbAttempt.id,
              userId: dbAttempt.user_id || userId,
              userName: dbAttempt.user_name || userName,
              testId: dbAttempt.test_id,
              levelCode: dbAttempt.level_code,
              startedAt: dbAttempt.started_at,
              submittedAt: dbAttempt.submitted_at || new Date().toISOString(),
              durationSecondsUsed: dbAttempt.duration_seconds_used || durationSecondsUsed,
              score: dbAttempt.score,
              maxScore: dbAttempt.max_score,
              percentage: dbAttempt.percentage,
              passed: dbAttempt.passed,
              readingScore: dbAttempt.reading_score,
              readingMaxScore: dbAttempt.reading_max_score,
              readingPercentage: dbAttempt.reading_percentage,
              listeningScore: dbAttempt.listening_score,
              listeningMaxScore: dbAttempt.listening_max_score,
              listeningPercentage: dbAttempt.listening_percentage,
              certificateId: dbAttempt.certificate_id || undefined,
              status: 'submitted',
              answers: Object.fromEntries(
                Object.entries(answers).map(([qId, val]) => [
                  qId,
                  {
                    questionId: qId,
                    selectedAnswer: val,
                  },
                ])
              ),
            };

            // Mirror into local storage for offline fast view
            storageService.saveCertificateAttempt(mappedAttempt);

            return {
              attempt: mappedAttempt,
              serverGraded: true,
              certificateId: dbAttempt.certificate_id,
            };
          }
        }
      } catch (err) {
        console.warn('Server grading failed, switching to local grading engine:', err);
      }
    }

    // Local grading engine fallback
    const localAttempt = this.gradeLocally(params);
    storageService.saveCertificateAttempt(localAttempt);

    return {
      attempt: localAttempt,
      serverGraded: false,
      certificateId: localAttempt.certificateId,
    };
  },

  /**
   * Local evaluation fallback when offline or in demo mode.
   */
  gradeLocally(params: SubmitAttemptParams): CertificateAttempt {
    const { attemptId, testId, userId, userName, levelCode, durationSecondsUsed, answers } = params;
    const test = storageService.getCertificateTestById(testId);

    const questions: CertificateQuestion[] = test ? test.sections.flatMap((s) => s.questions) : [];

    let totalScore = 0;
    let readingScore = 0;
    let readingMax = 0;
    let listeningScore = 0;
    let listeningMax = 0;

    const answerRecords: Record<string, CertificateAttemptAnswer> = {};

    questions.forEach((q) => {
      const selected = answers[q.id];
      const isCorrect = selected !== undefined && String(selected).trim() === String(q.correctAnswer).trim();
      const pointsEarned = isCorrect ? q.points : 0;
      totalScore += pointsEarned;

      const isListening = q.sectionId.includes('hoeren') || testId.includes('listening');
      if (isListening) {
        listeningScore += pointsEarned;
        listeningMax += q.points;
      } else {
        readingScore += pointsEarned;
        readingMax += q.points;
      }

      answerRecords[q.id] = {
        questionId: q.id,
        selectedAnswer: selected ?? null,
        isCorrect,
        pointsEarned,
      };
    });

    const maxScore = test?.totalPoints || 40;
    const percentage = Math.round((totalScore / Math.max(maxScore, 1)) * 100);
    const passed = percentage >= (test?.passingPercentage || 60);

    const readingPercentage = readingMax > 0 ? Math.round((readingScore / readingMax) * 100) : 0;
    const listeningPercentage = listeningMax > 0 ? Math.round((listeningScore / listeningMax) * 100) : 0;

    let certId: string | undefined;
    if (passed) {
      const cleanLevel = levelCode.replace(/[^a-z0-9]/gi, '').toUpperCase();
      const randomSuffix = Math.random().toString(36).substring(2, 8).toUpperCase();
      certId = `FGN-${cleanLevel}-${new Date().getFullYear()}-${randomSuffix}`;

      // Save local certificate record
      storageService.saveCertificate({
        id: 'cert-' + Date.now(),
        certificateId: certId,
        userId,
        userName,
        attemptId,
        levelCode,
        title: `Goethe / Start Deutsch Zertifikat ${levelCode.toUpperCase()}`,
        score: totalScore,
        percentage,
        readingPercentage,
        listeningPercentage,
        issuedAt: new Date().toISOString(),
        status: 'valid',
      });
    }

    return {
      id: attemptId,
      userId,
      userName,
      testId,
      levelCode,
      startedAt: new Date(Date.now() - durationSecondsUsed * 1000).toISOString(),
      submittedAt: new Date().toISOString(),
      durationSecondsUsed,
      score: totalScore,
      maxScore,
      percentage,
      passed,
      readingScore,
      readingMaxScore: readingMax || 20,
      readingPercentage,
      listeningScore,
      listeningMaxScore: listeningMax || 20,
      listeningPercentage,
      certificateId: certId,
      status: 'submitted',
      answers: answerRecords,
    };
  },
};
