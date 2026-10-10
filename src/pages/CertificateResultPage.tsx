import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { storageService } from '../lib/storage';
import { CertificateAttempt, CertificateTest, Certificate } from '../types/certificate';
import { CertificateCard } from '../components/certificate/CertificateCard';
import { 
  Award, 
  BookOpen, 
  Headphones, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ArrowRight, 
  ArrowLeft, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  FileText,
  Sparkles,
  ShieldAlert,
  Volume2
} from 'lucide-react';

export const CertificateResultPage: React.FC = () => {
  const { attemptId } = useParams<{ attemptId: string }>();
  const navigate = useNavigate();

  const [attempt, setAttempt] = useState<CertificateAttempt | null>(null);
  const [test, setTest] = useState<CertificateTest | null>(null);
  const [certificate, setCertificate] = useState<Certificate | null>(null);
  const [showQuestionsReview, setShowQuestionsReview] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!attemptId) {
      setLoading(false);
      return;
    }

    const att = storageService.getCertificateAttemptById(attemptId);
    if (att) {
      setAttempt(att);
      const t = storageService.getCertificateTestById(att.testId);
      if (t) setTest(t);

      if (att.certificateId) {
        const cert = storageService.getCertificateById(att.certificateId);
        if (cert) setCertificate(cert);
      }
    }
    setLoading(false);
  }, [attemptId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4">
        <div className="w-10 h-10 border-4 border-brand-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!attempt || !test) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4">
        <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 text-center space-y-4 shadow-sm">
          <ShieldAlert size={36} className="text-amber-500 mx-auto" />
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Natijalar topilmadi
          </h2>
          <p className="text-xs text-slate-500">
            Ko‘rsatilgan test urinishi mavjud emas yoki o‘chirilgan bo‘lishi mumkin.
          </p>
          <Link
            to="/certificate-tests"
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-brand-600 text-white text-xs font-bold"
          >
            <ArrowLeft size={14} />
            <span>Sertifikat testlariga qaytish</span>
          </Link>
        </div>
      </div>
    );
  }

  const readingPct = attempt.readingPercentage;
  const listeningPct = attempt.listeningPercentage;

  // Flatten questions from test for review
  const allQuestionsMap = new Map();
  test.sections.forEach(sec => {
    sec.questions.forEach(q => {
      allQuestionsMap.set(q.id, { ...q, sectionType: sec.skill, sectionTitle: sec.titleDe || sec.titleUz });
    });
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            to="/certificate-tests"
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-white"
          >
            <ArrowLeft size={14} />
            <span>Barcha testlarga qaytish</span>
          </Link>

          <span className="text-xs text-slate-400 font-mono">
            {attempt.submittedAt ? new Date(attempt.submittedAt).toLocaleDateString('uz-UZ') : ''}
          </span>
        </div>

        {/* Hero Result Banner */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs text-center space-y-6">
          
          <div className="space-y-2">
            <div className={`w-16 h-16 mx-auto rounded-3xl flex items-center justify-center ${
              attempt.passed 
                ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400' 
                : 'bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400'
            }`}>
              {attempt.passed ? <CheckCircle2 size={36} /> : <XCircle size={36} />}
            </div>

            <span className="px-3 py-1 rounded-xl text-xs font-black bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 inline-block">
              {test.levelCode.toUpperCase()} ASSESSMENT
            </span>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {test.titleDe} natijasi
            </h1>

            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
              {attempt.passed ? (
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                  ✅ Muvaffaqiyatli topshirildi! (O‘tish bali: {test.passingPercentage}%)
                </span>
              ) : (
                <span className="text-rose-600 dark:text-rose-400 font-bold">
                  ❌ Hozircha o‘tilmadi (O‘tish bali: {test.passingPercentage}%)
                </span>
              )}
            </p>
          </div>

          {/* Scores Breakdown Cards */}
          <div className={`grid grid-cols-1 ${
            attempt.readingMaxScore > 0 && attempt.listeningMaxScore > 0 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'
          } gap-4 max-w-2xl mx-auto`}>
            {/* Overall */}
            <div className={`p-4 rounded-2xl border text-center ${
              attempt.passed
                ? 'bg-emerald-50/60 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800/80'
                : 'bg-rose-50/60 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800/80'
            }`}>
              <span className="text-xs font-bold text-slate-500 uppercase block">Umumiy natija</span>
              <p className={`text-3xl font-black my-1 ${
                attempt.passed ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'
              }`}>
                {attempt.percentage}%
              </p>
              <span className="text-xs text-slate-500">
                {attempt.score} / {attempt.maxScore} ball
              </span>
            </div>

            {/* Reading (only if test has reading) */}
            {attempt.readingMaxScore > 0 && (
              <div className="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/60 text-center">
                <span className="text-xs font-bold text-blue-700 dark:text-blue-300 uppercase flex items-center justify-center gap-1">
                  <BookOpen size={13} />
                  <span>📖 Lesen</span>
                </span>
                <p className="text-3xl font-black text-blue-600 dark:text-blue-400 my-1">
                  {readingPct}%
                </p>
                <span className="text-xs text-slate-500">
                  {attempt.readingScore} / {attempt.readingMaxScore} ball
                </span>
              </div>
            )}

            {/* Listening (only if test has listening) */}
            {attempt.listeningMaxScore > 0 && (
              <div className="p-4 rounded-2xl bg-brand-50/50 dark:bg-brand-950/20 border border-brand-200 dark:border-brand-900/60 text-center">
                <span className="text-xs font-bold text-brand-700 dark:text-brand-300 uppercase flex items-center justify-center gap-1">
                  <Headphones size={13} />
                  <span>🎧 Hören</span>
                </span>
                <p className="text-3xl font-black text-brand-600 dark:text-brand-400 my-1">
                  {listeningPct}%
                </p>
                <span className="text-xs text-slate-500">
                  {attempt.listeningScore} / {attempt.listeningMaxScore} ball
                </span>
              </div>
            )}
          </div>

          {/* Educational Feedback Section */}
          <div className="max-w-2xl mx-auto p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-left space-y-3">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles size={16} className="text-amber-500" />
              <span>O‘qituvchi tahlili va tavsiyalari:</span>
            </h3>

            {attempt.passed ? (
              <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                <p>
                  🎉 <strong>Ajoyib natija!</strong> Siz {test.levelCode.toUpperCase()} darajadagi {
                    test.skillFocus === 'listening' ? 'audio dialog va topshiriqlarni' :
                    test.skillFocus === 'reading' ? 'matnli topshiriqlarni' :
                    'asosiy matn va audio topshiriqlarni'
                  } muvaffaqiyatli bajarganingizni ko‘rsatdingiz.
                </p>
                {attempt.readingMaxScore > 0 && readingPct >= 80 && (
                  <p className="text-blue-700 dark:text-blue-300">
                    • 📖 <strong>Lesen:</strong> Nemischa matnlarni tushunish ko‘nikmangiz a'lo darajada shakllangan.
                  </p>
                )}
                {attempt.listeningMaxScore > 0 && (
                  listeningPct >= 80 ? (
                    <p className="text-brand-700 dark:text-brand-300">
                      • 🎧 <strong>Hören:</strong> Tinglab tushunish bo‘yicha eshitish sezgingiz juda yaxshi.
                    </p>
                  ) : (
                    <p className="text-amber-700 dark:text-amber-300">
                      • 🎧 <strong>Hören:</strong> Listening natijangiz yetarli, biroq audio mashqlar va kundalik tinglash mashg‘ulotlarini davom ettirish tavsiya etiladi.
                    </p>
                  )
                )}
              </div>
            ) : (
              <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                <p>
                  Sizga quyidagi bo‘limlarni qayta ko‘rib chiqish va mustahkamlash tavsiya etiladi:
                </p>
                {attempt.readingMaxScore > 0 && readingPct < 60 && (
                  <p className="text-blue-700 dark:text-blue-300">
                    • 📖 <strong>O‘qish bo‘limi:</strong> {test.levelCode.toUpperCase()} lug‘at boyligini oshirish va matnlarni qayta o‘qib chiqish.
                  </p>
                )}
                {attempt.listeningMaxScore > 0 && listeningPct < 60 && (
                  <p className="text-brand-700 dark:text-brand-300">
                    • 🎧 <strong>Tinglash bo‘limi:</strong> Tinglash mashqlarini sekinroq tezlikda bir necha bor qayta eshitish.
                  </p>
                )}
                <p className="text-slate-500">
                  • {test.levelCode.toUpperCase()} darslariga qaytib, noaniq mavzularni qayta takrorlang.
                </p>
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => navigate(`/certificate-tests/${test.id}`)}
              className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition flex items-center space-x-1.5"
            >
              <RotateCcw size={15} />
              <span>Qayta test topshirish</span>
            </button>

            {attempt.passed && test.levelCode === 'a1-1' && (
              <Link
                to="/levels/a1-2"
                className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold transition flex items-center space-x-1.5 shadow-sm"
              >
                <span>A1.2 kursiga o‘tish</span>
                <ArrowRight size={15} />
              </Link>
            )}

            <Link
              to="/courses"
              className="px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-700 hover:bg-black text-white text-xs font-bold transition flex items-center space-x-1.5"
            >
              <span>Darslarga qaytish</span>
            </Link>
          </div>

        </div>

        {/* Certificate Display if Passed */}
        {attempt.passed && certificate && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Award size={20} className="text-amber-500" />
                <span>Sizning sertifikatingiz</span>
              </h2>
            </div>
            <CertificateCard certificate={certificate} />
          </div>
        )}

        {/* Question Review Section (Collapsible) */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-xs">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <HelpCircle size={18} className="text-brand-600" />
                <span>Savollarni batafsil tahlil qilish</span>
              </h3>
              <p className="text-xs text-slate-500">
                To‘g‘ri javoblar, izohlar va audiolarning matnlari (transkript)
              </p>
            </div>

            <button
              onClick={() => setShowQuestionsReview(!showQuestionsReview)}
              className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center space-x-1 transition"
            >
              <span>{showQuestionsReview ? 'Yopish' : 'Ko‘rish'}</span>
              {showQuestionsReview ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
            </button>
          </div>

          {showQuestionsReview && (
            <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              {Object.values(attempt.answers).map((ans, idx) => {
                const q = allQuestionsMap.get(ans.questionId);
                if (!q) return null;

                const isCorrect = ans.isCorrect;

                return (
                  <div
                    key={ans.questionId}
                    className={`p-4 sm:p-5 rounded-2xl border transition space-y-3 ${
                      isCorrect
                        ? 'bg-emerald-50/30 dark:bg-emerald-950/10 border-emerald-200/80 dark:border-emerald-900/40'
                        : 'bg-rose-50/30 dark:bg-rose-950/10 border-rose-200/80 dark:border-rose-900/40'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 uppercase">
                            Savol {idx + 1} • {q.sectionType === 'reading' ? 'Lesen' : 'Hören'}
                          </span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                            isCorrect 
                              ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300' 
                              : 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300'
                          }`}>
                            {isCorrect ? '✅ To‘g‘ri' : '❌ Noto‘g‘ri'} (+{ans.pointsEarned ?? 0} ball)
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          {q.promptDe || q.promptUz}
                        </h4>
                      </div>
                    </div>

                    {/* Transcript if listening question */}
                    {q.sectionType === 'listening' && (q.transcriptDe || q.audioText) && (
                      <div className="bg-brand-50/70 dark:bg-brand-950/30 p-3 rounded-xl border border-brand-200/60 dark:border-brand-900/40 text-xs space-y-1">
                        <span className="font-bold text-brand-700 dark:text-brand-300 flex items-center gap-1 text-[11px]">
                          <Volume2 size={13} />
                          <span>Audio transkripti:</span>
                        </span>
                        <p className="italic text-slate-700 dark:text-slate-300 font-serif">
                          "{q.transcriptDe || q.audioText}"
                        </p>
                      </div>
                    )}

                    {/* Options list */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                      {q.options.map((opt: any) => {
                        const isStudentChoice = ans.selectedAnswer === opt.id;
                        const isRightAnswer = q.correctAnswer === opt.id;

                        let style = 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300';
                        if (isRightAnswer) {
                          style = 'bg-emerald-100 dark:bg-emerald-950/80 border-emerald-400 dark:border-emerald-700 text-emerald-900 dark:text-emerald-100 font-bold';
                        } else if (isStudentChoice && !isRightAnswer) {
                          style = 'bg-rose-100 dark:bg-rose-950/80 border-rose-400 dark:border-rose-700 text-rose-900 dark:text-rose-100 font-bold line-through';
                        }

                        return (
                          <div
                            key={opt.id}
                            className={`p-2.5 rounded-xl border flex items-center justify-between text-xs ${style}`}
                          >
                            <span>{opt.textDe || opt.textUz}</span>
                            {isRightAnswer && <span className="text-[10px] text-emerald-700 dark:text-emerald-300">To‘g‘ri javob</span>}
                            {isStudentChoice && !isRightAnswer && <span className="text-[10px] text-rose-700 dark:text-rose-300">Sizning javobingiz</span>}
                          </div>
                        );
                      })}
                    </div>

                    {/* Explanation */}
                    {q.explanationUz && (
                      <div className="text-xs bg-slate-100 dark:bg-slate-800/60 p-3 rounded-xl text-slate-600 dark:text-slate-400">
                        <strong className="text-slate-800 dark:text-slate-200">Izoh: </strong>
                        {q.explanationUz}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
