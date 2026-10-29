import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { storageService } from '../lib/storage';
import { useAuth } from '../context/AuthContext';
import { CertificateTest, CertificateAttempt, Certificate } from '../types/certificate';
import { 
  Trophy, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  RotateCcw,
  Sparkles,
  FileCheck
} from 'lucide-react';

export const CertificateTestsPage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'a1' | 'a2' | 'b1'>('all');

  const [tests] = useState<CertificateTest[]>(() => {
    return storageService.getCertificateTests().filter(t => t.isPublished);
  });

  const [attempts] = useState<CertificateAttempt[]>(() => {
    return storageService.getCertificateAttempts(user?.id);
  });

  const [certificates] = useState<Certificate[]>(() => {
    return storageService.getCertificates(user?.id);
  });

  // 3 Primary Standard Tests matching Reference Image 4
  const standardTests = [
    {
      id: 'cert-a1',
      testId: tests.find(t => t.levelCode.startsWith('a1'))?.id || 'cert-test-a1-1-reading',
      code: 'A1',
      title: 'A1 Test',
      subtitle: 'Boshlang‘ich daraja',
      questionsCount: '40 savol',
      duration: '60 daqiqa',
      icon: Trophy,
      iconBg: 'bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-950/40 dark:to-yellow-950/30 text-amber-500',
      category: 'a1',
    },
    {
      id: 'cert-a2',
      testId: tests.find(t => t.levelCode.startsWith('a2'))?.id || 'cert-test-a1-1-reading',
      code: 'A2',
      title: 'A2 Test',
      subtitle: 'Asosiy daraja',
      questionsCount: '50 savol',
      duration: '75 daqiqa',
      icon: ShieldCheck,
      iconBg: 'bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-950/40 dark:to-amber-950/30 text-orange-500',
      category: 'a2',
    },
    {
      id: 'cert-b1',
      testId: tests.find(t => t.levelCode.startsWith('b1'))?.id || 'cert-test-a1-1-reading',
      code: 'B1',
      title: 'B1 Test',
      subtitle: 'O‘rta daraja',
      questionsCount: '60 savol',
      duration: '90 daqiqa',
      icon: Award,
      iconBg: 'bg-gradient-to-br from-teal-100 to-emerald-100 dark:from-teal-950/40 dark:to-emerald-950/30 text-teal-500',
      category: 'b1',
    },
  ];

  const filteredTests = standardTests.filter(t => {
    if (selectedFilter === 'all') return true;
    return t.category === selectedFilter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* ============================================================ */}
      {/* Header & Filter Pills (Exactly Matching Reference Image 4)   */}
      {/* ============================================================ */}
      <div className="space-y-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight font-display">
            Sertifikat testlari
          </h1>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-1">
            A1, A2, B1 darajalari uchun namunaviy testlar
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {[
            { id: 'all', label: 'Barcha' },
            { id: 'a1', label: 'A1' },
            { id: 'a2', label: 'A2' },
            { id: 'b1', label: 'B1' },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedFilter(f.id as any)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-150 cursor-pointer ${
                selectedFilter === f.id
                  ? 'bg-blue-600 text-white shadow-soft'
                  : 'bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* ============================================================ */}
      {/* Test Cards Grid (3 Large Cards Matching Reference Image 4)   */}
      {/* ============================================================ */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTests.map((test) => {
          const Icon = test.icon;

          return (
            <div
              key={test.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-card hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Top Soft Gradient Icon Container */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${test.iconBg}`}>
                  <Icon size={28} />
                </div>

                {/* Test Title & Subtitle */}
                <h3 className="text-xl font-black text-slate-900 dark:text-white">
                  {test.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {test.subtitle}
                </p>

                {/* Test Metadata: Questions & Duration */}
                <div className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-3">
                  {test.questionsCount} • {test.duration}
                </div>
              </div>

              {/* Action Button: Boshlash -> */}
              <button
                onClick={() => navigate(`/certificate-tests/${test.testId}`)}
                className="mt-6 w-full py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-soft transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Boshlash</span>
                <ArrowRight size={16} />
              </button>
            </div>
          );
        })}
      </div>

      {/* ============================================================ */}
      {/* Existing Certificates & User History (if available)          */}
      {/* ============================================================ */}
      {certificates.length > 0 && (
        <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800">
          <div className="flex items-center space-x-2 mb-4">
            <FileCheck size={18} className="text-emerald-500" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Sizning qo‘lga kiritgan sertifikatlaringiz
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-between"
              >
                <div>
                  <span className="text-xs font-black text-emerald-700 dark:text-emerald-300">
                    {cert.levelCode.toUpperCase()} Sertifikati
                  </span>
                  <div className="text-[11px] text-slate-500">
                    Natija: {cert.percentage}%
                  </div>
                </div>
                <Link
                  to={`/certificate-tests/results/${cert.attemptId}`}
                  className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition"
                >
                  Ko‘rish
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
