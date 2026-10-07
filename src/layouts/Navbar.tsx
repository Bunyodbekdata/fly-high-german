import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { SearchModal } from '../components/common/SearchModal';
import {
  Search,
  BookOpen,
  Bookmark,
  Headphones,
  FileText,
  Mic,
  LayoutDashboard,
  User,
  ShieldCheck,
  Menu,
  X,
  Flame,
  Sun,
  Moon,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { user, isAuthenticated, isAdmin } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const primaryLinks = [
    { to: '/courses', label: 'Kurslar', icon: BookOpen },
    { to: '/vocabulary', label: 'Lug‘at', icon: Bookmark },
    { to: '/grammar', label: 'Grammatika', icon: FileText },
    { to: '/shadowing', label: 'Shadowing', icon: Mic },
  ];

  const secondaryLinks = [
    { to: '/pronunciation', label: 'Fonetika', icon: Mic },
    { to: '/listening', label: 'Tinglash', icon: Headphones },
    { to: '/reading', label: 'O‘qish', icon: FileText },
  ];

  const allNavLinks = [...primaryLinks, ...secondaryLinks];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <nav className="bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 sticky top-0 z-40 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-3">
            {/* Brand */}
            <div className="flex items-center gap-6 flex-shrink-0">
              <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
                <div className="w-9 h-9 rounded-xl flex flex-col overflow-hidden border border-slate-200 dark:border-slate-700 flex-shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
                  <div className="h-3 bg-slate-950 w-full" />
                  <div className="h-3 bg-red-600 w-full" />
                  <div className="h-3 bg-amber-400 w-full" />
                </div>
                <span className="font-display font-extrabold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white whitespace-nowrap">
                  FOR GREAT NATION
                </span>
              </Link>

              {/* Desktop links — editorial, low-chrome */}
              <div className="hidden lg:flex items-center gap-1">
                {primaryLinks.map((link) => {
                  const active = isActive(link.to);
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`relative px-3 py-2 text-sm font-semibold transition-colors whitespace-nowrap rounded-lg ${
                        active
                          ? 'text-brand-700 dark:text-brand-400'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      {link.label}
                      {active && (
                        <span className="absolute left-3 right-3 -bottom-px h-0.5 rounded-full bg-brand-600 dark:bg-brand-400" />
                      )}
                    </Link>
                  );
                })}
                {secondaryLinks.map((link) => {
                  const active = isActive(link.to);
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`hidden xl:inline-flex relative px-3 py-2 text-sm font-semibold transition-colors whitespace-nowrap rounded-lg ${
                        active
                          ? 'text-brand-700 dark:text-brand-400'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Right tools */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 text-sm font-medium transition"
                title="Qidiruv (Ctrl+K)"
              >
                <Search size={16} />
                <span className="hidden sm:inline">Qidirish</span>
                <kbd className="hidden md:inline px-1.5 py-0.5 text-[10px] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded font-mono text-slate-500 dark:text-slate-400">
                  ⌘K
                </kbd>
              </button>

              <button
                onClick={toggleTheme}
                title={isDark ? 'Yorug‘ rejimga o‘tish' : 'Tungi rejimga o‘tish'}
                className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 transition"
                aria-label="Rejimni almashtirish"
              >
                {isDark ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} />}
              </button>

              {user && (
                <div
                  title={`O‘rganish silsilasi: ${user.streakDays ?? 0} kun`}
                  className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-amber-700 dark:text-amber-300 text-sm font-bold whitespace-nowrap flex-shrink-0 bg-amber-50 dark:bg-amber-950/40"
                >
                  <Flame size={15} className={(user.streakDays ?? 0) > 0 ? 'text-amber-500 fill-amber-500' : 'text-amber-400'} />
                  <span>{user.streakDays ?? 0}</span>
                </div>
              )}

              {isAdmin && (
                <Link
                  to="/admin"
                  title="Admin Panel"
                  className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 text-sm font-semibold transition whitespace-nowrap flex-shrink-0"
                >
                  <ShieldCheck size={16} />
                  <span className="hidden lg:inline">Admin</span>
                </Link>
              )}

              {isAuthenticated ? (
                <Link
                  to="/dashboard"
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90 text-sm font-bold transition whitespace-nowrap flex-shrink-0"
                >
                  <LayoutDashboard size={15} />
                  <span className="hidden sm:inline">Kabinet</span>
                </Link>
              ) : (
                <Link
                  to="/auth"
                  className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold transition shadow-2xs whitespace-nowrap flex-shrink-0"
                >
                  Kirish
                </Link>
              )}

              {isAuthenticated && (
                <Link
                  to="/profile"
                  className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition flex-shrink-0"
                  title="Profil sozlamalari"
                >
                  <User size={16} />
                </Link>
              )}

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 transition"
                aria-label="Menyu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-3 pb-6 space-y-1 animate-in slide-in-from-top-2">
            {allNavLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-semibold transition ${
                    active
                      ? 'bg-brand-50 dark:bg-brand-950/50 text-brand-700 dark:text-brand-300'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900'
                  }`}
                >
                  <Icon size={18} className={active ? 'text-brand-600 dark:text-brand-400' : 'text-slate-400 dark:text-slate-500'} />
                  <span>{link.label}</span>
                </Link>
              );
            })}

            <div className="pt-3 mt-1 border-t border-slate-100 dark:border-slate-800 space-y-1">
              <Link
                to="/dashboard"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900"
              >
                <LayoutDashboard size={18} className="text-slate-400" />
                <span>Mening kabinetim</span>
              </Link>
              {isAdmin && (
                <Link
                  to="/admin"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900"
                >
                  <ShieldCheck size={18} className="text-slate-400" />
                  <span>Admin Panel</span>
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};
