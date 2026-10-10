import React, { useEffect } from 'react';
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
  X,
  Flame,
  Award
} from 'lucide-react';

interface MobileAccountSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileAccountSheet: React.FC<MobileAccountSheetProps> = ({ isOpen, onClose }) => {
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  // Prevent body scroll when sheet is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleLogout = () => {
    logout();
    onClose();
    navigate('/');
  };

  const displayName = user?.name || 'Talaba';
  const initial = displayName.charAt(0).toUpperCase();
  const streak = user?.streakDays ?? 0;
  const levelDisplay = (user?.currentLevel || 'A1.1').toUpperCase();

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Sheet Content */}
      <div className="fixed inset-x-0 bottom-0 max-h-[85vh] bg-white dark:bg-slate-900 rounded-t-3xl shadow-2xl border-t border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-250">
        {/* Drag handle */}
        <div className="pt-3 pb-1 flex justify-center">
          <div className="w-12 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
        </div>

        {/* Header */}
        <div className="px-5 py-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-500 to-brand-700 text-white flex items-center justify-center text-sm font-bold shadow-xs">
              {initial}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {displayName}
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-black bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
                  {levelDisplay}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {user?.email || 'Mehmon hisobi'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            aria-label="Yopish"
          >
            <X size={20} />
          </button>
        </div>

        {/* Streak Pill */}
        <div className="px-5 pt-3">
          <div className="flex items-center justify-between text-xs text-amber-800 dark:text-amber-200 bg-amber-50 dark:bg-amber-950/40 px-3.5 py-2 rounded-xl border border-amber-200/70 dark:border-amber-900/70 font-semibold">
            <span className="flex items-center gap-1.5">
              <Flame size={16} className="text-amber-500 fill-amber-500 animate-pulse" />
              <span>O‘rganish silsilasi:</span>
            </span>
            <span className="font-extrabold text-sm">{streak} kun</span>
          </div>
        </div>

        {/* Menu list */}
        <div className="p-4 space-y-1 overflow-y-auto flex-1">
          {isAuthenticated ? (
            <>
              <Link
                to="/profile"
                onClick={onClose}
                className="flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <User size={18} className="text-slate-400" />
                <span>Mening profilim</span>
              </Link>

              <Link
                to="/dashboard"
                onClick={onClose}
                className="flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <LayoutDashboard size={18} className="text-slate-400" />
                <span>O‘quv kabinetim</span>
              </Link>

              <Link
                to="/dashboard"
                onClick={onClose}
                className="flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <TrendingUp size={18} className="text-slate-400" />
                <span>Mening o‘zlashtirishim</span>
              </Link>

              <Link
                to="/certificate-tests"
                onClick={onClose}
                className="flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-amber-700 dark:text-amber-300 bg-amber-50/60 dark:bg-amber-950/30 hover:bg-amber-100 dark:hover:bg-amber-900/40 transition"
              >
                <Award size={18} className="text-amber-600 dark:text-amber-400" />
                <span>Sertifikat testlari</span>
              </Link>

              <Link
                to="/vocabulary"
                onClick={onClose}
                className="flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <Bookmark size={18} className="text-slate-400" />
                <span>Lug‘at statistikasi</span>
              </Link>

              <Link
                to="/vocabulary?tab=saved"
                onClick={onClose}
                className="flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <Star size={18} className="text-slate-400" />
                <span>Saqlangan so‘zlar</span>
              </Link>

              <Link
                to="/profile"
                onClick={onClose}
                className="flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <Settings size={18} className="text-slate-400" />
                <span>Sozlamalar</span>
              </Link>

              {isAdmin && (
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 my-1">
                  <Link
                    to="/admin"
                    onClick={onClose}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold text-brand-700 dark:text-brand-300 bg-brand-50 dark:bg-brand-950/60"
                  >
                    <div className="flex items-center space-x-3">
                      <ShieldCheck size={18} className="text-brand-600 dark:text-brand-400" />
                      <span>Admin Panel</span>
                    </div>
                    <span className="text-[10px] uppercase font-black px-1.5 py-0.5 rounded bg-brand-200 dark:bg-brand-800 text-brand-900 dark:text-brand-100">
                      Admin
                    </span>
                  </Link>
                </div>
              )}

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 my-1">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition text-left"
                >
                  <LogOut size={18} className="text-rose-500" />
                  <span>Tizimdan chiqish</span>
                </button>
              </div>
            </>
          ) : (
            <div className="space-y-2 py-2">
              <Link
                to="/auth"
                onClick={onClose}
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-brand-600 text-white font-bold text-sm shadow-sm"
              >
                <LogIn size={18} />
                <span>Kirish yoki Ro‘yxatdan o‘tish</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
