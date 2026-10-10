import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOCAL_DEMO_AUTH_ENABLED, useAuth } from '../context/AuthContext';
import { LogIn, UserPlus, Sparkles, Shield, ArrowRight, Loader2, Database, CheckCircle2 } from 'lucide-react';

export const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successInfo, setSuccessInfo] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login, register, isCloudConnected } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessInfo('');

    const trimmedEmail = email.trim();
    const trimmedPass = password.trim();

    if (!trimmedEmail) {
      setError('Iltimos, elektron pochta manzilini kiriting.');
      return;
    }

    if (!trimmedPass || trimmedPass.length < 6) {
      setError('Parol kamida 6 ta belgidan iborat bo‘lishi lozim.');
      return;
    }

    setIsSubmitting(true);
    try {
      if (isLogin) {
        const res = await login(trimmedEmail, trimmedPass);
        if (!res.success) {
          setError(res.error || 'Hisobga kirishda xatolik yuz berdi.');
        } else {
          navigate('/dashboard');
        }
      } else {
        const trimmedName = name.trim();
        if (!trimmedName) {
          setError('Iltimos, to‘liq ism va familiyangizni kiriting.');
          setIsSubmitting(false);
          return;
        }

        const res = await register(trimmedName, trimmedEmail, trimmedPass);
        if (!res.success) {
          setError(res.error || 'Ro‘yxatdan o‘tishda xatolik yuz berdi.');
        } else if (res.message) {
          setSuccessInfo(res.message);
        } else {
          navigate('/dashboard');
        }
      }
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : 'Tarmoq xatosi yuz berdi.';
      setError(errMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDemoStudent = async () => {
    setError('');
    setSuccessInfo('');
    setIsSubmitting(true);
    try {
      const res = await login('talaba@greatnation.uz', 'demo123');
      if (res.success) {
        navigate('/dashboard');
      } else {
        setError(res.error || 'Talaba hisobiga kirishda xatolik.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDemoAdmin = async () => {
    setError('');
    setSuccessInfo('');
    setIsSubmitting(true);
    try {
      const res = await login('admin@greatnation.uz', 'admin123');
      if (res.success) {
        navigate('/admin');
      } else {
        setError(res.error || 'Admin hisobiga kirishda xatolik.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16 transition-colors duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-card space-y-6">
        {/* Brand header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-brand-50 dark:bg-brand-950/60 border border-brand-100 dark:border-brand-800 flex items-center justify-center text-brand-600 dark:text-brand-400 mb-3 shadow-xs">
            {isLogin ? <LogIn size={24} /> : <UserPlus size={24} />}
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isLogin ? 'Hisobga kirish' : 'Ro‘yxatdan o‘tish'}
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            FOR GREAT NATION — Nemis tili ta‘lim platformasi
          </p>

          {/* Database Connection Indicator */}
          <div className="pt-1">
            <span
              className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[11px] font-semibold border ${
                isCloudConnected
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                  : 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800'
              }`}
            >
              <Database size={12} />
              <span>{isCloudConnected ? 'Supabase Cloud Auth faol' : 'Mahalliy xavfsiz rejim (Offline)'}</span>
            </span>
          </div>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-xs font-semibold leading-relaxed">
            {error}
          </div>
        )}

        {successInfo && (
          <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs font-semibold flex items-center space-x-2">
            <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
            <span>{successInfo}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1.5">
                Ism va Familiya
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jasur Karimov"
                disabled={isSubmitting}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm font-medium focus:ring-2 focus:ring-brand-500 outline-none disabled:opacity-50"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1.5">
              Elektron pochta (Email)
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="talaba@greatnation.uz"
              disabled={isSubmitting}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm font-medium focus:ring-2 focus:ring-brand-500 outline-none disabled:opacity-50"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1.5">
              Parol
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Kamida 6 ta belgi"
              disabled={isSubmitting}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm font-medium focus:ring-2 focus:ring-brand-500 outline-none disabled:opacity-50"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-sm transition flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Tekshirilmoqda...</span>
              </>
            ) : (
              <>
                <span>{isLogin ? 'Tizimga kirish' : 'Ro‘yxatdan o‘tish'}</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        {/* Quick Demo Switchers — production buildda ko'rinmaydi (xavfsizlik) */}
        {LOCAL_DEMO_AUTH_ENABLED && (
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block text-center">
              Tezkor kirish (faqat demo muhitda):
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                disabled={isSubmitting}
                onClick={handleDemoStudent}
                className="py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-200 text-xs font-bold transition flex items-center justify-center space-x-1 disabled:opacity-50 cursor-pointer"
              >
                <Sparkles size={14} className="text-brand-600 dark:text-brand-400" />
                <span>Talaba profili</span>
              </button>
              <button
                type="button"
                disabled={isSubmitting}
                onClick={handleDemoAdmin}
                className="py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-200 text-xs font-bold transition flex items-center justify-center space-x-1 disabled:opacity-50 cursor-pointer"
              >
                <Shield size={14} className="text-brand-600 dark:text-brand-400" />
                <span>Admin profili</span>
              </button>
            </div>
          </div>
        )}

        {/* Toggle between login and register */}
        <div className="text-center pt-2">
          <button
            type="button"
            disabled={isSubmitting}
            onClick={() => {
              setIsLogin(!isLogin);
              setError('');
              setSuccessInfo('');
            }}
            className="text-xs text-brand-600 dark:text-brand-400 hover:underline font-semibold"
          >
            {isLogin
              ? 'Hisobingiz yo‘qmi? Ro‘yxatdan o‘ting'
              : 'Hisobingiz bormi? Tizimga kiring'}
          </button>
        </div>
      </div>
    </div>
  );
};
