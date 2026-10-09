import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { storageService } from '../lib/storage';
import { useAuth } from '../context/AuthContext';
import { CertificateTest, CertificateQuestion, CertificateAttempt, CertificateAttemptAnswer, Certificate } from '../types/certificate';
import { ListeningPlayer } from '../components/certificate/ListeningPlayer';
import { 
  Award, 
  BookOpen, 
  Headphones, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  Flag, 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  RotateCcw,
  ShieldAlert,
  Info
} from 'lucide-react';

export const CertificateTestRoomPage: React.FC = () => {
  const { testId } = useParams<{ testId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [test, setTest] = useState<CertificateTest | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Test Lifecycle State: 'prep' | 'active' | 'submitting'
  const [status, setStatus] = useState<'prep' | 'active' | 'submitting'>('prep');

  // Active Test States
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [timeLeft, setTimeLeft] = useState<number>(0); // in seconds
  const [isConfirmSubmitOpen, setIsConfirmSubmitOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Timer Ref
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Load Test Data
  useEffect(() => {
    if (!testId) {
      setError('Test identifikatori ko‘rsatilmadi.');
      setLoading(false);
      return;
    }

    const foundTest = storageService.getCertificateTestById(testId);
    if (!foundTest) {
      setError('Bunday test topilmadi yoki u hali nashr etilmagan.');
      setLoading(false);
      return;
    }

    setTest(foundTest);
    setTimeLeft(foundTest.durationMinutes * 60);

    // Check if there was an ongoing attempt saved locally for this test
    const savedStateKey = `fgn_cert_attempt_${foundTest.id}`;
    const savedState = localStorage.getItem(savedStateKey);
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        if (parsed.status === 'active' && parsed.timeLeft > 0) {
          setAnswers(parsed.answers || {});
          setFlagged(parsed.flagged || {});
          setTimeLeft(parsed.timeLeft);
          setCurrentQuestionIndex(parsed.currentQuestionIndex || 0);
          setStatus('active');
        }
      } catch {
        localStorage.removeItem(savedStateKey);
      }
    }

    setLoading(false);
  }, [testId]);

  // Flatten all questions across sections
  const allQuestionsWithSection = useMemo(() => {
    if (!test) return [];
    const list: { question: CertificateQuestion; sectionTitle: string; sectionType: 'reading' | 'listening' }[] = [];
    test.sections.forEach(section => {
      section.questions.forEach(q => {
        list.push({
          question: q,
          sectionTitle: section.titleDe || section.titleUz,
          sectionType: section.skill as 'reading' | 'listening',
        });
      });
    });
    return list;
  }, [test]);

  const currentItem = allQuestionsWithSection[currentQuestionIndex];

  // Timer Effect when test is 'active'
  useEffect(() => {
    if (status !== 'active') return;

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          // Auto submit
          handleAutoSubmit();
          return 0;
        }

        // Save progress periodically to localStorage
        const newTime = prev - 1;
        if (test) {
          const savedStateKey = `fgn_cert_attempt_${test.id}`;
          localStorage.setItem(savedStateKey, JSON.stringify({
            status: 'active',
            timeLeft: newTime,
            answers,
            flagged,
            currentQuestionIndex,
          }));
        }
        return newTime;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [status, answers, flagged, currentQuestionIndex, test]);

  // Start Test Action
  const handleStartTest = () => {
    setStatus('active');
  };

  // Answer selection
  const handleSelectAnswer = (questionId: string, optionId: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  // Toggle flag
  const handleToggleFlag = (questionId: string) => {
    setFlagged(prev => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  // Format countdown mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Auto-submit when time expires
  const handleAutoSubmit = () => {
    handleSubmitTest(true);
  };

  // Finalize and Submit Test
  const handleSubmitTest = (wasTimeExpired = false) => {
    if (!test || isSubmitting) return;
    setIsSubmitting(true);

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    // Clear saved active attempt state
    localStorage.removeItem(`fgn_cert_attempt_${test.id}`);

    // Calculate score
    let readingScore = 0;
    let readingMaxScore = 0;
    let listeningScore = 0;
    let listeningMaxScore = 0;
    const answersMap: Record<string, CertificateAttemptAnswer> = {};

    test.sections.forEach(sec => {
      sec.questions.forEach(q => {
        const selected = answers[q.id];
        const isCorrect = selected === q.correctAnswer;
        const earned = isCorrect ? q.points : 0;

        if (sec.skill === 'reading') {
          readingMaxScore += q.points;
          if (isCorrect) readingScore += q.points;
        } else {
          listeningMaxScore += q.points;
          if (isCorrect) listeningScore += q.points;
        }

        answersMap[q.id] = {
          questionId: q.id,
          selectedAnswer: selected,
          isCorrect,
          pointsEarned: earned,
          isFlagged: !!flagged[q.id],
        };
      });
    });

    const totalScore = readingScore + listeningScore;
    const maxScore = readingMaxScore + listeningMaxScore;
    const percentage = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;
    const readingPercentage = readingMaxScore > 0 ? Math.round((readingScore / readingMaxScore) * 100) : 0;
    const listeningPercentage = listeningMaxScore > 0 ? Math.round((listeningScore / listeningMaxScore) * 100) : 0;
    const passed = percentage >= test.passingPercentage;

    const attemptId = `att_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const userId = user?.id || 'guest_user';
    const userName = user?.name || 'Talaba';
    const submittedAt = new Date().toISOString();

    let certId: string | undefined = undefined;

    // Issue Certificate if Passed
    if (passed) {
      certId = storageService.generateCertificateId(test.levelCode);
      const newCert: Certificate = {
        id: `cert_${Date.now()}`,
        certificateId: certId,
        userId,
        userName,
        attemptId,
        levelCode: test.levelCode,
        title: test.titleDe,
        score: totalScore,
        percentage,
        readingScore: readingMaxScore > 0 ? readingScore : undefined,
        listeningScore: listeningMaxScore > 0 ? listeningScore : undefined,
        readingPercentage,
        listeningPercentage,
        issuedAt: submittedAt,
        status: 'valid',
      };
      storageService.saveCertificate(newCert);
    }

    // Save Attempt
    const attemptRecord: CertificateAttempt = {
      id: attemptId,
      userId,
      userName,
      testId: test.id,
      levelCode: test.levelCode,
      startedAt: new Date(Date.now() - (test.durationMinutes * 60 - timeLeft) * 1000).toISOString(),
      submittedAt,
      durationSecondsUsed: test.durationMinutes * 60 - timeLeft,
      score: totalScore,
      maxScore,
      percentage,
      passed,
      readingScore,
      readingMaxScore,
      readingPercentage,
      listeningScore,
      listeningMaxScore,
      listeningPercentage,
      certificateId: certId,
      status: wasTimeExpired ? 'expired' : 'submitted',
      answers: answersMap,
    };

    storageService.saveCertificateAttempt(attemptRecord);

    // Redirect to results page
    navigate(`/certificate-tests/results/${attemptId}`);
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-4 border-brand-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
            Test ma'lumotlari yuklanmoqda...
          </p>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !test) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4">
        <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 text-center space-y-4">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-rose-50 dark:bg-rose-950/50 flex items-center justify-center text-rose-600">
            <ShieldAlert size={24} />
          </div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            {error || 'Xatolik yuz berdi'}
          </h2>
          <p className="text-xs text-slate-500">
            Iltimos, qaytadan urinib ko‘ring yoki asosiy sahifaga qayting.
          </p>
          <Link
            to="/certificate-tests"
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-brand-600 text-white text-xs font-bold"
          >
            <ArrowLeft size={14} />
            <span>Sertifikat testlariga qaytish</span>
          </Link>
        </div>
      </div>
    );
  }

  const answeredCount = Object.keys(answers).length;
  const totalQuestions = allQuestionsWithSection.length;
  const unansweredCount = totalQuestions - answeredCount;

  // 1. Preparation Screen
  if (status === 'prep') {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-10 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-xs">
          
          <div className="flex items-center justify-between">
            <Link
              to="/certificate-tests"
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-white"
            >
              <ArrowLeft size={14} />
              <span>Ortga</span>
            </Link>

            <span className="px-3 py-1 rounded-xl text-xs font-black bg-brand-600 text-white">
              {test.levelCode.toUpperCase()}
            </span>
          </div>

          <div className="text-center space-y-2">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 flex items-center justify-center text-amber-600">
              <Award size={28} />
            </div>
            <h1 className="text-2xl font-black text-slate-900 dark:text-white">
              {test.titleDe}
            </h1>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              {test.descriptionUz}
            </p>
          </div>

          {/* Test Parameters */}
          <div className="grid grid-cols-3 gap-3 bg-slate-50 dark:bg-slate-950/60 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 text-center">
            <div>
              <span className="text-[11px] text-slate-400 font-semibold block">Bo‘limlar</span>
              <span className="text-xs font-black text-slate-800 dark:text-slate-200 mt-1 block">
                {test.skillFocus === 'listening' ? '🎧 Hören (Tinglash)' : test.skillFocus === 'reading' ? '📖 Lesen (O‘qish)' : 'Lesen & Hören'}
              </span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 font-semibold block">Vaqt</span>
              <span className="text-xs font-black text-slate-800 dark:text-slate-200 mt-1 block">
                {test.durationMinutes} daqiqa
              </span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 font-semibold block">O‘tish bali</span>
              <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 mt-1 block">
                {test.passingPercentage}%
              </span>
            </div>
          </div>

          {/* Instructions */}
          <div className="space-y-3 bg-amber-50/60 dark:bg-amber-950/30 p-4 rounded-2xl border border-amber-200/80 dark:border-amber-900/60 text-xs text-amber-900 dark:text-amber-200">
            <h4 className="font-bold flex items-center gap-1.5">
              <Info size={15} className="text-amber-600" />
              <span>Test topshirish qoidalari va ko‘rsatmalar:</span>
            </h4>
            <ul className="space-y-1.5 pl-5 list-disc text-[11px] sm:text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
              <li>Testni boshlaganingizdan so‘ng vaqt hisoblanadi (orqaga qaytarib bo‘lmaydi).</li>
              <li>Har bir savolni diqqat bilan o‘qing yoki audioni tinglang.</li>
              <li>Javoblarni belgilashni unutmang. Istalgan vaqt savollarga qaytishingiz mumkin.</li>
              <li>Testni yakunlashdan oldin barcha javoblaringizni tekshirib chiqing.</li>
            </ul>
          </div>

          {/* Start Test Button */}
          <div className="pt-2">
            <button
              onClick={handleStartTest}
              className="w-full py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md transition transform hover:scale-[1.01] flex items-center justify-center space-x-2"
            >
              <span>Testni boshlash</span>
              <ArrowRight size={16} />
            </button>
            <p className="text-[11px] text-slate-400 text-center mt-2">
              Tugmani bosishingiz bilanoq test vaqti boshlanadi
            </p>
          </div>

        </div>
      </div>
    );
  }

  // 2. Active Test View
  const isTimeLow = timeLeft <= 300; // < 5 mins
  const isTimeCritical = timeLeft <= 120; // < 2 mins

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20 pt-4 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-6">

        {/* Top Sticky Test Bar */}
        <div className="sticky top-16 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between gap-3">
          
          <div className="flex items-center space-x-3">
            <span className="px-2.5 py-1 rounded-xl text-xs font-black bg-brand-600 text-white shadow-xs">
              {test.levelCode.toUpperCase()}
            </span>
            <div>
              <h2 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white truncate max-w-[150px] sm:max-w-xs">
                {test.titleDe}
              </h2>
              <div className="flex items-center gap-2 mt-0.5">
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                  currentItem.sectionType === 'reading'
                    ? 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300'
                    : 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300'
                }`}>
                  {currentItem.sectionType === 'reading' ? '📖 TEIL 1: LESEN' : '🎧 TEIL 2: HÖREN'}
                </span>
              </div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="flex items-center space-x-3">
            <div className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono font-bold transition ${
              isTimeCritical
                ? 'bg-rose-100 dark:bg-rose-950/80 border-rose-300 dark:border-rose-800 text-rose-700 dark:text-rose-300 animate-pulse'
                : isTimeLow
                  ? 'bg-amber-100 dark:bg-amber-950/80 border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-300'
                  : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200'
            }`}>
              <Clock size={14} className={isTimeCritical ? 'text-rose-600' : 'text-slate-500'} />
              <span>⏱ {formatTime(timeLeft)}</span>
            </div>

            <button
              onClick={() => setIsConfirmSubmitOpen(true)}
              className="px-3.5 py-1.5 rounded-xl bg-slate-900 dark:bg-brand-600 hover:bg-black text-white text-xs font-bold transition shadow-xs whitespace-nowrap"
            >
              Testni yakunlash
            </button>
          </div>
        </div>

        {/* Main Test Grid (Question + Navigator) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* Question Content Panel (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-7 shadow-xs space-y-6">
              
              {/* Question Header & Flag Toggle */}
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                  Savol {currentQuestionIndex + 1} / {totalQuestions}
                </span>

                <button
                  onClick={() => handleToggleFlag(currentItem.question.id)}
                  className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-xl text-xs font-semibold transition ${
                    flagged[currentItem.question.id]
                      ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-700'
                      : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                  title="Keyinroq ko‘rish uchun belgilash"
                >
                  <Flag size={13} className={flagged[currentItem.question.id] ? 'fill-amber-500 text-amber-500' : ''} />
                  <span>{flagged[currentItem.question.id] ? 'Belgilangan' : 'Markieren'}</span>
                </button>
              </div>

              {/* Section-Specific Context */}
              {currentItem.sectionType === 'reading' && currentItem.question.passageDe && (
                <div className="bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/70 dark:border-blue-900/50 rounded-2xl p-4 sm:p-5 space-y-2">
                  <div className="flex items-center space-x-2 text-blue-700 dark:text-blue-300 text-xs font-bold">
                    <BookOpen size={15} />
                    <span>Matnni o‘qing:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif whitespace-pre-line bg-white/70 dark:bg-slate-900/70 p-3.5 rounded-xl border border-blue-100 dark:border-blue-900/30">
                    {currentItem.question.passageDe}
                  </p>
                </div>
              )}

              {currentItem.sectionType === 'listening' && (
                <div className="space-y-2">
                  <ListeningPlayer
                    audioUrl={currentItem.question.audioUrl}
                    audioText={currentItem.question.audioText}
                    questionId={currentItem.question.id}
                  />
                </div>
              )}

              {/* Question Text */}
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-snug">
                  {currentItem.question.promptDe || currentItem.question.promptUz}
                </h3>
                {currentItem.question.promptDe && currentItem.question.promptUz && (
                  <p className="text-xs text-slate-500 italic">
                    {currentItem.question.promptUz}
                  </p>
                )}
                <span className="text-[11px] text-slate-400">
                  Ball qiymati: {currentItem.question.points} ball
                </span>
              </div>

              {/* Answer Options */}
              <div className="space-y-2.5 pt-2">
                {currentItem.question.options.map((option) => {
                  const isSelected = answers[currentItem.question.id] === option.id;

                  return (
                    <button
                      key={option.id}
                      onClick={() => handleSelectAnswer(currentItem.question.id, option.id)}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition flex items-center justify-between gap-3 ${
                        isSelected
                          ? 'bg-brand-50 dark:bg-brand-950/60 border-brand-500 dark:border-brand-500 text-brand-900 dark:text-brand-100 font-bold shadow-xs'
                          : 'bg-white dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold transition ${
                          isSelected
                            ? 'bg-brand-600 text-white'
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                        }`}>
                          {option.id.toUpperCase()}
                        </div>
                        <span className="text-xs sm:text-sm">
                          {option.textDe}
                        </span>
                      </div>

                      {isSelected && (
                        <div className="w-5 h-5 rounded-full bg-brand-600 text-white flex items-center justify-center flex-shrink-0">
                          <Check size={12} className="stroke-[3]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Navigation buttons: Prev / Next */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                  disabled={currentQuestionIndex === 0}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition ${
                    currentQuestionIndex === 0
                      ? 'opacity-40 cursor-not-allowed text-slate-400'
                      : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200'
                  }`}
                >
                  <ArrowLeft size={14} />
                  <span>Oldingi savol</span>
                </button>

                {currentQuestionIndex < totalQuestions - 1 ? (
                  <button
                    onClick={() => setCurrentQuestionIndex(prev => Math.min(totalQuestions - 1, prev + 1))}
                    className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold flex items-center space-x-1.5 transition shadow-xs"
                  >
                    <span>Keyingi savol</span>
                    <ArrowRight size={14} />
                  </button>
                ) : (
                  <button
                    onClick={() => setIsConfirmSubmitOpen(true)}
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center space-x-1.5 transition shadow-xs"
                  >
                    <CheckCircle2 size={14} />
                    <span>Testni yakunlash</span>
                  </button>
                )}
              </div>

            </div>
          </div>

          {/* Question Navigator (1 col) */}
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">
                  Savollar xaritasi
                </h4>
                <span className="text-[11px] font-bold text-slate-500">
                  {answeredCount} / {totalQuestions}
                </span>
              </div>

              {/* Status Legend */}
              <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-500 dark:text-slate-400 pt-1 pb-2 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm bg-brand-600" />
                  <span>Javob berilgan</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm bg-amber-400" />
                  <span>Belgilangan</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm border border-slate-300 dark:border-slate-600" />
                  <span>Javob berilmagan</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm ring-2 ring-brand-500 bg-white dark:bg-slate-800" />
                  <span>Joriy savol</span>
                </div>
              </div>

              {/* Numbered Grid */}
              <div className="grid grid-cols-5 gap-2 max-h-72 overflow-y-auto pr-1">
                {allQuestionsWithSection.map((item, idx) => {
                  const isCurrent = idx === currentQuestionIndex;
                  const isAnswered = !!answers[item.question.id];
                  const isFlagged = !!flagged[item.question.id];

                  return (
                    <button
                      key={item.question.id}
                      onClick={() => setCurrentQuestionIndex(idx)}
                      className={`h-9 rounded-xl text-xs font-bold transition flex items-center justify-center relative ${
                        isCurrent
                          ? 'ring-2 ring-brand-500 ring-offset-2 dark:ring-offset-slate-900 font-black'
                          : ''
                      } ${
                        isFlagged
                          ? 'bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-200 border border-amber-300 dark:border-amber-700'
                          : isAnswered
                            ? 'bg-brand-600 text-white'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                      aria-label={`Savol ${idx + 1}`}
                    >
                      <span>{idx + 1}</span>
                      {isFlagged && (
                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-500" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Submit CTA */}
              <button
                onClick={() => setIsConfirmSubmitOpen(true)}
                className="w-full py-2.5 rounded-xl bg-slate-900 dark:bg-brand-600 hover:bg-black text-white text-xs font-bold transition shadow-xs"
              >
                Testni yakunlash ({answeredCount}/{totalQuestions})
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Confirmation Submit Modal */}
      {isConfirmSubmitOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 border border-slate-200 dark:border-slate-800 space-y-5 shadow-2xl animate-in zoom-in-95">
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-amber-50 dark:bg-amber-950 flex items-center justify-center text-amber-600">
                <AlertTriangle size={24} />
              </div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white">
                Testni yakunlashni xohlaysizmi?
              </h3>
              <p className="text-xs text-slate-500">
                Yakunlaganingizdan so‘ng javoblarni o‘zgartirib bo‘lmaydi.
              </p>
            </div>

            {/* Answered summary */}
            <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-2 text-xs">
              <div className="flex justify-between items-center text-slate-600 dark:text-slate-300">
                <span>Belgilangan javoblar:</span>
                <span className="font-bold text-emerald-600">{answeredCount} / {totalQuestions}</span>
              </div>
              <div className="flex justify-between items-center text-slate-600 dark:text-slate-300">
                <span>Belgilanmagan savollar:</span>
                <span className={`font-bold ${unansweredCount > 0 ? 'text-rose-600' : 'text-slate-600'}`}>
                  {unansweredCount} ta
                </span>
              </div>
            </div>

            {unansweredCount > 0 && (
              <p className="text-[11px] text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 p-2.5 rounded-xl border border-amber-200 dark:border-amber-900">
                ⚠️ Diqqat: Sizda {unansweredCount} ta javob berilmagan savol bor! Belgilanmagan savollarga 0 ball beriladi.
              </p>
            )}

            <div className="flex items-center space-x-3 pt-2">
              <button
                onClick={() => setIsConfirmSubmitOpen(false)}
                className="flex-1 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition"
              >
                Ortga qaytish
              </button>

              <button
                onClick={() => handleSubmitTest(false)}
                disabled={isSubmitting}
                className="flex-1 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold transition shadow-xs flex items-center justify-center space-x-1.5"
              >
                {isSubmitting ? (
                  <span>Saqlanmoqda...</span>
                ) : (
                  <>
                    <CheckCircle2 size={15} />
                    <span>Testni yakunlash</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
