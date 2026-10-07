import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogIn, UserPlus, Sparkles, Shield, ArrowRight } from 'lucide-react';

export const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (isLogin) {
      if (!email) {
        setError('Iltimos, elektron pochta manzilini kiriting.');
        return;
      }
      await login(email, password);
      navigate('/dashboard');
    } else {
      if (!name || !email) {
        setError('Iltimos, ism va elektron pochtani kiriting.');
        return;
      }
      await register(name, email, password);
      navigate('/dashboard');
    }
  };

  const handleDemoStudent = async () => {
    await login('talaba@greatnation.uz', 'demo123');
    navigate('/dashboard');
  };

  const handleDemoAdmin = async () => {
    await login('admin@greatnation.uz', 'admin123');
    navigate('/admin');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16 transition-colors duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-card space-y-6">
        {/* Brand header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-brand-50 dark:bg-brand-950/60 border border-brand-100 dark:border-brand-800 flex items-center justify-center text-brand-600 dark:text-brand-400 mb-3">
            {isLogin ? <LogIn size={24} /> : <UserPlus size={24} />}
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isLogin ? 'Hisobga kirish' : 'Ro‘yxatdan o‘tish'}
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            FOR GREAT NATION — Nemis tili ta‘lim platformasi
          </p>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-xs font-semibold">
            {error}
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
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm font-medium focus:ring-2 focus:ring-brand-500 outline-none"
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
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm font-medium focus:ring-2 focus:ring-brand-500 outline-none"
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
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm font-medium focus:ring-2 focus:ring-brand-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-sm transition flex items-center justify-center space-x-2"
          >
            <span>{isLogin ? 'Tizimga kirish' : 'Ro‘yxatdan o‘tish'}</span>
            <ArrowRight size={16} />
          </button>
        </form>

        {/* Quick Demo Switchers */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block text-center">
            Tezkor kirish (Sinov profillari):
          </span>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={handleDemoStudent}
              className="py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-200 text-xs font-bold transition flex items-center justify-center space-x-1"
            >
              <Sparkles size={14} className="text-brand-600 dark:text-brand-400" />
              <span>Talaba profili</span>
            </button>
            <button
              type="button"
              onClick={handleDemoAdmin}
              className="py-2 px-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200 text-xs font-bold transition flex items-center justify-center space-x-1"
            >
              <Shield size={14} className="text-indigo-600 dark:text-indigo-400" />
              <span>Admin profili</span>
            </button>
          </div>
        </div>

        {/* Toggle between login and register */}
        <div className="text-center pt-2">
          <button
            type="button"
            onClick={() => {
              setIsLogin(!isLogin);
              setError('');
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
