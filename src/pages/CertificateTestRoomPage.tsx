import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { storageService } from '../lib/storage';
import { certificateService } from '../lib/certificateService';
import { createAttemptId } from '../lib/certificateGrading';
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

  // Timer & Submission Guard Refs
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isSubmittingRef = useRef<boolean>(false);
  const endTimeRef = useRef<number | null>(null);
  // Interval har doim ENG YANGI submit funksiyasini chaqirishi uchun.
  const submitRef = useRef<(wasTimeExpired?: boolean) => void>(() => {});

  // Keep a reference to current state so the timer interval never needs to re-subscribe on answers/flags
  const stateRef = useRef({
    answers,
    flagged,
    currentQuestionIndex,
    test,
  });

  useEffect(() => {
    stateRef.current = {
      answers,
      flagged,
      currentQuestionIndex,
      test,
    };
  }, [answers, flagged, currentQuestionIndex, test]);

  // Load Test Data asynchronously via secure certificateService
  useEffect(() => {
    if (!testId) {
      setError('Test identifikatori ko‘rsatilmadi.');
      setLoading(false);
      return;
    }

    let isCancelled = false;

    certificateService.getTestById(testId).then((foundTest) => {
      if (isCancelled) return;

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
            const safeSavedIdx = typeof parsed.currentQuestionIndex === 'number' && parsed.currentQuestionIndex >= 0
              ? parsed.currentQuestionIndex
              : 0;
            setCurrentQuestionIndex(safeSavedIdx);

            // MUHIM: imtihonni "pauza" qilib bo'lmaydi. Saqlangan muddat o'tgan
            // bo'lsa uni qayta tiklamaymiz — aks holda tabni yopib, keyin qaytib
            // kelgan talaba qolgan vaqtni yana oladi. Muddat o'tgan bo'lsa taymer
            // darhol 0 ga tushadi va urinish avtomatik yakunlanadi.
            if (typeof parsed.endTime === 'number' && parsed.endTime > 0) {
              endTimeRef.current = parsed.endTime;
            } else {
              endTimeRef.current = Date.now() + parsed.timeLeft * 1000;
            }

            setStatus('active');
          }
        } catch {
          localStorage.removeItem(savedStateKey);
        }
      }

      setLoading(false);
    }).catch((err) => {
      if (isCancelled) return;
      console.warn('Failed to load test:', err);
      setError('Test ma‘lumotlarini yuklashda xatolik yuz berdi.');
      setLoading(false);
    });

    return () => {
      isCancelled = true;
    };
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

  // Safe question index calculation to prevent out-of-bounds crashes
  const safeQuestionIndex = useMemo(() => {
    if (allQuestionsWithSection.length === 0) return 0;
    return Math.max(0, Math.min(currentQuestionIndex, allQuestionsWithSection.length - 1));
  }, [currentQuestionIndex, allQuestionsWithSection.length]);

  // Keep state index clamped in sync when questions change
  useEffect(() => {
    if (allQuestionsWithSection.length > 0 && currentQuestionIndex >= allQuestionsWithSection.length) {
      setCurrentQuestionIndex(Math.max(0, allQuestionsWithSection.length - 1));
    }
  }, [currentQuestionIndex, allQuestionsWithSection.length]);

  const currentItem = allQuestionsWithSection[safeQuestionIndex] || allQuestionsWithSection[0] || null;

  // Timer Effect when test is 'active' - True Wall-Clock Timer
  // Does NOT depend on answers or flagged, so selecting answers will NEVER reset interval or lose time
  useEffect(() => {
    if (status !== 'active') return;

    if (!endTimeRef.current) {
      const initialSeconds = timeLeft > 0 ? timeLeft : (test ? test.durationMinutes * 60 : 1800);
      endTimeRef.current = Date.now() + initialSeconds * 1000;
    }

    const interval = setInterval(() => {
      if (isSubmittingRef.current) {
        clearInterval(interval);
        return;
      }

      const now = Date.now();
      const remainingSeconds = Math.max(0, Math.ceil((endTimeRef.current! - now) / 1000));
      setTimeLeft(remainingSeconds);

      // Periodically persist progress to localStorage using latest ref state
      const currentTest = stateRef.current.test;
      if (currentTest) {
        try {
          const savedStateKey = `fgn_cert_attempt_${currentTest.id}`;
          localStorage.setItem(savedStateKey, JSON.stringify({
            status: 'active',
            timeLeft: remainingSeconds,
            endTime: endTimeRef.current,
            answers: stateRef.current.answers,
            flagged: stateRef.current.flagged,
            currentQuestionIndex: stateRef.current.currentQuestionIndex,
          }));
        } catch (e) {
          console.warn('Failed to save attempt state:', e);
        }
      }

      // Time expired: auto-submit once
      if (remainingSeconds <= 0) {
        clearInterval(interval);
        if (!isSubmittingRef.current) {
          submitRef.current(true);
        }
      }
    }, 1000);

    timerRef.current = interval;

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [status]);

  // Start Test Action
  const handleStartTest = () => {
    if (!test) return;
    endTimeRef.current = Date.now() + test.durationMinutes * 60 * 1000;
    setTimeLeft(test.durationMinutes * 60);
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
    if (!isSubmittingRef.current) {
      handleSubmitTest(true);
    }
  };

  // Finalize and Submit Test via secure certificateService
  const handleSubmitTest = async (wasTimeExpired = false) => {
    if (!test || isSubmittingRef.current) return;
    isSubmittingRef.current = true;
    setIsSubmitting(true);

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    // Clear saved active attempt state
    try {
      localStorage.removeItem(`fgn_cert_attempt_${test.id}`);
    } catch {
      // ignore
    }

    // Vaqt hisobi devor soatiga (endTimeRef) tayanadi: shu sababli taymer
    // avtomatik yakunlaganda ham davomiylik to'g'ri chiqadi (avval 0 bo'lardi).
    const durationSeconds = (test.durationMinutes || 0) * 60;
    const deadline = endTimeRef.current;
    const elapsedSeconds = deadline
      ? Math.round((Date.now() - (deadline - durationSeconds * 1000)) / 1000)
      : durationSeconds;
    const durationSecondsUsed = Math.max(0, Math.min(durationSeconds, elapsedSeconds));

    const currentAnswers = stateRef.current.answers;
    const attemptId = createAttemptId(user?.id);
    const userId = user?.id || 'guest_user';
    const userName = user?.name || 'Talaba';

    try {
      const result = await certificateService.submitAttempt({
        attemptId,
        testId: test.id,
        userId,
        userName,
        levelCode: test.levelCode,
        durationSecondsUsed,
        answers: currentAnswers,
      });

      if (wasTimeExpired) {
        result.attempt.status = 'expired';
        storageService.saveCertificateAttempt(result.attempt);
      }

      navigate(`/certificate-tests/results/${result.attempt.id}`);
    } catch (err) {
      console.warn('Submission error, fallback to local evaluation:', err);
      const fallback = certificateService.gradeLocally({
        attemptId,
        testId: test.id,
        userId,
        userName,
        levelCode: test.levelCode,
        durationSecondsUsed,
        answers: currentAnswers,
      });
      if (wasTimeExpired) {
        fallback.status = 'expired';
      }
      storageService.saveCertificateAttempt(fallback);
      navigate(`/certificate-tests/results/${fallback.id}`);
    }
  };

  // Eng yangi submit funksiyasini refga yozamiz — interval eski closure'da
  // qolib ketmasligi uchun (avvalgi xatoda davomiylik 0 bo'lib qolardi).
  useEffect(() => {
    submitRef.current = handleSubmitTest;
  });

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
  if (status === 'active' && !currentItem) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 text-center space-y-4">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            Savol yuklanmoqda...
          </p>
          <button
            onClick={() => setCurrentQuestionIndex(0)}
            className="px-4 py-2 rounded-xl bg-brand-600 text-white text-xs font-bold"
          >
            1-savolga qaytish
          </button>
        </div>
      </div>
    );
  }

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
                    : 'bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300'
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
                  Savol {safeQuestionIndex + 1} / {totalQuestions}
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
                  disabled={safeQuestionIndex === 0}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition ${
                    safeQuestionIndex === 0
                      ? 'opacity-40 cursor-not-allowed text-slate-400'
                      : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200'
                  }`}
                >
                  <ArrowLeft size={14} />
                  <span>Oldingi savol</span>
                </button>

                {safeQuestionIndex < totalQuestions - 1 ? (
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
                  const isCurrent = idx === safeQuestionIndex;
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
