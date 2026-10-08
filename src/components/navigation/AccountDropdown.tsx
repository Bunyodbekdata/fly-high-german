import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  User, 
  LayoutDashboard, 
  TrendingUp, 
  Bookmark, 
  Star, 
  Settings, 
  ShieldCheck, 
  LogOut, 
  LogIn, 
  ChevronDown,
  Flame,
  Award
} from 'lucide-react';

export const AccountDropdown: React.FC = () => {
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/');
  };

  if (!isAuthenticated && !user) {
    return (
      <Link
        to="/auth"
        className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold transition shadow-xs whitespace-nowrap"
      >
        <LogIn size={14} />
        <span>Kirish</span>
      </Link>
    );
  }

  const displayName = user?.name || 'Talaba';
  const initial = displayName.charAt(0).toUpperCase();
  const streak = user?.streakDays ?? 0;
  const levelDisplay = (user?.currentLevel || 'A1.1').toUpperCase();

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Account trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 pl-2 pr-3 py-1.5 rounded-xl border text-xs font-semibold transition select-none ${
          isOpen
            ? 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white'
            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Hisob menyusi"
      >
        <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-brand-600 to-indigo-600 text-white flex items-center justify-center text-xs font-bold shadow-xs">
          {initial}
        </div>
        <span className="max-w-[100px] truncate hidden md:inline font-bold">
          {displayName}
        </span>
        <ChevronDown 
          size={14} 
          className={`text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
          {/* User Header Summary */}
          <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/40 rounded-t-2xl">
            <div className="flex items-center justify-between gap-2">
              <div className="truncate">
                <p className="text-xs font-black text-slate-900 dark:text-white truncate">
                  {displayName}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                  {user?.email || 'Mehmon foydalanuvchi'}
                </p>
              </div>
              <span className="px-2 py-0.5 rounded-md text-[10px] font-black bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
                {levelDisplay}
              </span>
            </div>

            {/* Streak indicator */}
            <div className="mt-2 flex items-center justify-between text-[11px] text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/50 px-2.5 py-1 rounded-lg border border-amber-200/60 dark:border-amber-900/60 font-semibold">
              <span className="flex items-center gap-1">
                <Flame size={13} className="text-amber-500 fill-amber-500 animate-pulse" />
                <span>O‘rganish silsilasi:</span>
              </span>
              <span className="font-bold">{streak} kun</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="p-1.5 space-y-0.5">
            <Link
              to="/profile"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <User size={15} className="text-slate-400 dark:text-slate-500" />
              <span>Mening profilim</span>
            </Link>

            <Link
              to="/dashboard"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <LayoutDashboard size={15} className="text-slate-400 dark:text-slate-500" />
              <span>O‘quv kabinetim</span>
            </Link>

            <Link
              to="/dashboard"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <TrendingUp size={15} className="text-slate-400 dark:text-slate-500" />
              <span>Mening o‘zlashtirishim</span>
            </Link>

            <Link
              to="/certificate-tests"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-amber-700 dark:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-950/40 transition"
            >
              <Award size={15} className="text-amber-500" />
              <span>Sertifikat testlarim</span>
            </Link>

            <Link
              to="/vocabulary"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <Bookmark size={15} className="text-slate-400 dark:text-slate-500" />
              <span>Lug‘at statistikasi</span>
            </Link>

            <Link
              to="/vocabulary?tab=saved"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <Star size={15} className="text-slate-400 dark:text-slate-500" />
              <span>Saqlangan so‘zlar</span>
            </Link>

            <Link
              to="/profile"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <Settings size={15} className="text-slate-400 dark:text-slate-500" />
              <span>Sozlamalar</span>
            </Link>
          </div>

          {/* Admin Panel (Admin-only) */}
          {isAdmin && (
            <div className="pt-1 mt-1 border-t border-slate-100 dark:border-slate-800 px-1.5">
              <Link
                to="/admin"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50/70 dark:bg-indigo-950/40 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition"
              >
                <div className="flex items-center space-x-2.5">
                  <ShieldCheck size={15} className="text-indigo-600 dark:text-indigo-400" />
                  <span>Admin Panel</span>
                </div>
                <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-indigo-200 dark:bg-indigo-800 text-indigo-900 dark:text-indigo-100">
                  Admin
                </span>
              </Link>
            </div>
          )}

          {/* Logout */}
          <div className="pt-1 mt-1 border-t border-slate-100 dark:border-slate-800 px-1.5">
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition text-left"
            >
              <LogOut size={15} className="text-rose-500" />
              <span>Tizimdan chiqish</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
