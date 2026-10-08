import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { storageService } from '../lib/storage';
import { useAuth } from '../context/AuthContext';
import { CertificateTest, CertificateAttempt, Certificate } from '../types/certificate';
import { 
  Award, 
  BookOpen, 
  Headphones, 
  Clock, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ArrowRight, 
  ShieldAlert, 
  PenTool, 
  Mic, 
  History, 
  Sparkles,
  ChevronRight,
  FileCheck
} from 'lucide-react';

export const CertificateTestsPage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [tests] = useState<CertificateTest[]>(() => {
    return storageService.getCertificateTests().filter(t => t.isPublished);
  });

  const [attempts] = useState<CertificateAttempt[]>(() => {
    return storageService.getCertificateAttempts();
  });

  const [certificates] = useState<Certificate[]>(() => {
    return storageService.getCertificates();
  });

  // Calculate stats for each test
  const getTestStats = (testId: string) => {
    const testAttempts = attempts.filter(a => a.testId === testId && a.status === 'submitted');
    if (testAttempts.length === 0) {
      return {
        attemptsCount: 0,
        bestPercentage: null,
        lastPercentage: null,
        passed: false,
        lastAttemptId: null,
      };
    }

    const best = Math.max(...testAttempts.map(a => a.percentage));
    const sorted = [...testAttempts].sort((a, b) => new Date(b.submittedAt || 0).getTime() - new Date(a.submittedAt || 0).getTime());
    const latest = sorted[0];
    const isPassed = testAttempts.some(a => a.passed);

    return {
      attemptsCount: testAttempts.length,
      bestPercentage: best,
      lastPercentage: latest.percentage,
      passed: isPassed,
      lastAttemptId: latest.id,
    };
  };

  const futureLevels = [
    { code: 'A2.1', title: 'A2.1 Assessment', desc: 'Kundalik vaziyatlar va kengaytirilgan grammatika' },
    { code: 'A2.2', title: 'A2.2 Assessment', desc: 'Murakkab dialoglar va o‘rta daraja tayyorgarligi' },
    { code: 'B1.1', title: 'B1.1 Assessment', desc: 'Erkin muloqot va mustaqil nutq asoslari' },
    { code: 'B1.2', title: 'B1.2 Assessment', desc: 'B1 to‘liq sertifikat darajasi' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs font-bold">
            <Award size={14} className="text-amber-600" />
            <span>Goethe & telc Xalqaro Imtihon Standartlari</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            🏆 Xalqaro Standartdagi Sertifikat Testlari
          </h1>

          <p className="text-base font-medium text-slate-600 dark:text-slate-300">
            Haqiqiy Goethe-Zertifikat A1 (Start Deutsch 1) va telc Deutsch A1 formatidagi namunaviy imtihonlar.
          </p>

          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
            Ushbu testlar oddiy darslik savollari emas, balki xalqaro imtihon tayyorgarlik kitoblari (<em>Fit fürs Goethe-Zertifikat A1</em>, <em>Mit Erfolg zu Start Deutsch 1</em>) andozasida tuzilgan. 
            Hozirda xalqaro standartdagi <strong className="text-slate-800 dark:text-slate-200">Lesen (O‘qish — E-Mail, E‘lonlar, Schilder)</strong> va <strong className="text-slate-800 dark:text-slate-200">Hören (Tinglash — Alltagsgespräche, Bahnhof/Flughafen Durchsagen, Anrufbeantworter)</strong> modullari to‘liq ishga tushirilgan.
          </p>
        </div>

        {/* Disclaimer Notice */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 p-4 flex items-start space-x-3 text-xs text-amber-900 dark:text-amber-200">
          <ShieldAlert size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold">Xalqaro standart va rasmiy baholash haqida:</p>
            <p className="text-[11px] sm:text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
              Test savollari xalqaro <strong>Goethe-Institut va telc A1 (Start Deutsch 1)</strong> namunaviy imtihon standartlariga to‘liq mos keladi. 
              Muvaffaqiyatli topshirganingizda platformamizning maxsus seriya raqamli <strong>For Great Nation Sertifikati</strong> beriladi hamda rasmiy imtihonlarga tayyorgarlik darajangiz aniqlanadi.
            </p>
          </div>
        </div>

        {/* User Overall Stats Overview */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs text-center">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Faol testlar</span>
            <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">2 ta</p>
            <span className="text-[10px] text-brand-600 dark:text-brand-400 font-bold">A1.1 va A1.2</span>
          </div>

          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs text-center">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Jami urinishlar</span>
            <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">
              {attempts.length} ta
            </p>
            <span className="text-[10px] text-slate-500">Muvaffaqiyatli saqlangan</span>
          </div>

          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs text-center">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Sertifikatlar</span>
            <p className="text-2xl font-black text-amber-600 dark:text-amber-400 mt-1">
              {certificates.length} ta
            </p>
            <span className="text-[10px] text-amber-600">Olingan sertifikatlar</span>
          </div>

          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs text-center">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">O‘tish talabi</span>
            <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1">60%</p>
            <span className="text-[10px] text-emerald-600">Har bir modul uchun</span>
          </div>
        </div>

        {/* Active Assessment Cards */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>Mavjud baholash testlari</span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300">
                A1 daraja
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tests.map((test) => {
              const stats = getTestStats(test.id);
              const questionCount = test.sections.reduce((acc, sec) => acc + sec.questions.length, 0);

              return (
                <div 
                  key={test.id}
                  className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition p-6 flex flex-col justify-between space-y-6 relative overflow-hidden"
                >
                  {/* Decorative background badge */}
                  <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-slate-100/50 dark:bg-slate-800/20 rounded-full pointer-events-none" />

                  <div className="space-y-4">
                    {/* Header: Level badge + title */}
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 rounded-xl text-xs font-black bg-brand-600 text-white shadow-xs">
                            {test.levelCode.toUpperCase()}
                          </span>
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                            For Great Nation
                          </span>
                        </div>
                        <h3 className="text-lg font-black text-slate-900 dark:text-white mt-2">
                          {test.titleDe}
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                          {test.descriptionUz}
                        </p>
                      </div>

                      {stats.passed && (
                        <div className="flex-shrink-0 flex items-center space-x-1 px-2.5 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
                          <CheckCircle2 size={14} />
                          <span>O‘tilgan</span>
                        </div>
                      )}
                    </div>

                    {/* Active Skills Pills */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">
                        Test bo‘limlari:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold">
                          <BookOpen size={13} />
                          <span>📖 Lesen (O‘qish)</span>
                        </span>
                        <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-xs font-semibold">
                          <Headphones size={13} />
                          <span>🎧 Hören (Tinglash)</span>
                        </span>
                      </div>
                    </div>

                    {/* Meta stats grid */}
                    <div className="grid grid-cols-3 gap-2 bg-slate-50 dark:bg-slate-950/60 p-3 rounded-2xl border border-slate-100 dark:border-slate-800/80 text-center">
                      <div>
                        <div className="flex items-center justify-center space-x-1 text-slate-400 mb-0.5">
                          <Clock size={12} />
                          <span className="text-[10px] uppercase font-bold">Vaqt</span>
                        </div>
                        <span className="text-xs font-black text-slate-800 dark:text-slate-200">
                          {test.durationMinutes} daqiqa
                        </span>
                      </div>

                      <div>
                        <div className="flex items-center justify-center space-x-1 text-slate-400 mb-0.5">
                          <HelpCircle size={12} />
                          <span className="text-[10px] uppercase font-bold">Savollar</span>
                        </div>
                        <span className="text-xs font-black text-slate-800 dark:text-slate-200">
                          {questionCount} ta
                        </span>
                      </div>

                      <div>
                        <div className="flex items-center justify-center space-x-1 text-slate-400 mb-0.5">
                          <CheckCircle2 size={12} />
                          <span className="text-[10px] uppercase font-bold">O‘tish bali</span>
                        </div>
                        <span className="text-xs font-black text-slate-800 dark:text-slate-200">
                          {test.passingPercentage}%
                        </span>
                      </div>
                    </div>

                    {/* User's performance on this test */}
                    {stats.attemptsCount > 0 && (
                      <div className="bg-slate-100/70 dark:bg-slate-800/50 p-3 rounded-2xl space-y-1.5 text-xs">
                        <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                          <span>Urinishlar soni:</span>
                          <span className="font-bold">{stats.attemptsCount} ta</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                          <span>Eng yaxshi natija:</span>
                          <span className={`font-black ${stats.bestPercentage! >= test.passingPercentage ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-900 dark:text-white'}`}>
                            {stats.bestPercentage}%
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                          <span>Oxirgi natija:</span>
                          <span className="font-bold">{stats.lastPercentage}%</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-2 space-y-2">
                    <button
                      onClick={() => navigate(`/certificate-tests/${test.id}`)}
                      className="w-full py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-sm flex items-center justify-center space-x-2 transition hover:scale-[1.01]"
                    >
                      {stats.attemptsCount > 0 ? (
                        <>
                          <RotateCcw size={16} />
                          <span>Qayta topshirish</span>
                        </>
                      ) : (
                        <>
                          <span>Testni boshlash</span>
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>

                    {stats.lastAttemptId && (
                      <div className="flex items-center justify-center gap-2">
                        <Link
                          to={`/certificate-tests/results/${stats.lastAttemptId}`}
                          className="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold text-center transition flex items-center justify-center space-x-1.5"
                        >
                          <FileCheck size={14} />
                          <span>Oxirgi natijani ko‘rish</span>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Future Skills section (Schreiben & Sprechen) */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Kelgusi ko‘nikmalar baholanishi
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Quyidagi ko‘nikmalar platformaning keyingi bosqichlarida bosqichma-bosqich qo‘shiladi:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-start space-x-3 opacity-80">
              <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                <PenTool size={18} />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-black text-slate-800 dark:text-slate-200">
                    ✍️ Schreiben (Yozish)
                  </h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    Tez orada
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Yozish bo‘limi keyingi bosqichda qo‘shiladi.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-start space-x-3 opacity-80">
              <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                <Mic size={18} />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-black text-slate-800 dark:text-slate-200">
                    🎙️ Sprechen (Gapirish)
                  </h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    Tez orada
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Gapirish bo‘limi keyingi bosqichda qo‘shiladi.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Future Levels section */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Kelgusi darajalar
            </h3>
            <span className="text-xs text-slate-400">Ishlab chiqilmoqda</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {futureLevels.map((lvl) => (
              <div 
                key={lvl.code}
                className="p-4 rounded-2xl bg-white dark:bg-slate-900/60 border border-dashed border-slate-300 dark:border-slate-800 space-y-2 opacity-65"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-lg text-xs font-black bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {lvl.code}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">
                    Tez orada
                  </span>
                </div>
                <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  {lvl.title}
                </h4>
                <p className="text-[11px] text-slate-400 leading-tight">
                  {lvl.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Attempt History Section */}
        {attempts.length > 0 && (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <History size={18} className="text-brand-600" />
                <span>Mening urinishlarim tarixi</span>
              </h3>
              <span className="text-xs text-slate-500">Jami {attempts.length} ta urinish</span>
            </div>

            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {attempts.map((att) => {
                const targetTest = tests.find(t => t.id === att.testId);
                const testTitle = targetTest?.titleDe || 'Assessment Test';

                return (
                  <div key={att.id} className="py-3 flex items-center justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs ${
                        att.passed 
                          ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300' 
                          : 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300'
                      }`}>
                        {att.passed ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900 dark:text-white">
                          {testTitle}
                        </p>
                        <p className="text-[11px] text-slate-500">
                          {att.submittedAt ? new Date(att.submittedAt).toLocaleDateString('uz-UZ', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          }) : 'Yakunlanmagan'}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <span className={`text-xs font-black ${
                          att.passed ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-300'
                        }`}>
                          {att.percentage}%
                        </span>
                        <p className="text-[10px] text-slate-400">
                          {att.score} / {att.maxScore} ball
                        </p>
                      </div>

                      <Link
                        to={`/certificate-tests/results/${att.id}`}
                        className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition"
                        title="Batafsil ko‘rish"
                      >
                        <ChevronRight size={16} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
