import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { SearchModal } from '../components/common/SearchModal';
import { AccountDropdown } from '../components/navigation/AccountDropdown';
import { BrandLogo } from '../components/common/BrandLogo';
import { 
  Search, 
  Menu, 
  X,
  Sun,
  Moon,
  Droplet,
  Bell
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { user } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isColorGuideOpen, setIsColorGuideOpen] = useState(false);

  // Nav links: Bosh sahifa | Darslar | Lug'at | Grammatika | Testlar
  const navLinks = [
    { to: '/', label: 'Bosh sahifa' },
    { to: '/courses', label: 'Darslar' },
    { to: '/vocabulary', label: 'Lug‘at' },
    { to: '/grammar', label: 'Grammatika' },
    { to: '/certificate-tests', label: 'Testlar' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <nav className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 sticky top-0 z-40 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-3">
            {/* Left: Brand Logo + Primary Navigation */}
            <div className="flex items-center space-x-6 sm:space-x-8 flex-shrink-0">
              <Link to="/" className="flex-shrink-0">
                <BrandLogo size="md" />
              </Link>

              {/* Desktop Nav Links */}
              <div className="hidden lg:flex items-center space-x-1">
                {navLinks.map((link) => {
                  const active = isActive(link.to);
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
                        active
                          ? 'text-blue-600 dark:text-blue-400 font-bold bg-blue-50/80 dark:bg-blue-950/50'
                          : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/70'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                {/* Search Icon Button */}
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 ml-1 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition"
                  title="Qidiruv (Ctrl+K)"
                  aria-label="Qidirish"
                >
                  <Search size={18} />
                </button>
              </div>
            </div>

            {/* Right Tools & Auth Buttons matching Reference Image 1 */}
            <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
              {/* Phonetics / Pronunciation button: ə: */}
              <Link
                to="/pronunciation"
                className="w-8 h-8 rounded-xl flex items-center justify-center font-serif text-sm font-bold bg-slate-100/80 dark:bg-slate-800/80 hover:bg-blue-50 dark:hover:bg-blue-950/60 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition border border-slate-200/60 dark:border-slate-700/60 shadow-2xs"
                title="Talaffuz va fonetika laboratoriyasi (ə:)"
              >
                ə:
              </Link>

              {/* German Article Color System Guide Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsColorGuideOpen(!isColorGuideOpen)}
                  className={`w-8 h-8 rounded-xl flex items-center justify-center border transition shadow-2xs cursor-pointer ${
                    isColorGuideOpen
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'text-blue-500 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/40 border-blue-200/60 dark:border-blue-800/60'
                  }`}
                  title="Nemis tili artikl ranglari qo‘llanmasi (der/die/das)"
                  aria-label="Artikl ranglari"
                >
                  <Droplet size={15} className={isColorGuideOpen ? 'fill-white' : 'fill-blue-500/20'} />
                </button>

                {/* Color Guide Popover */}
                {isColorGuideOpen && (
                  <div className="absolute right-0 top-11 w-64 p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl z-50 animate-fadeIn space-y-2">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                      <span className="text-xs font-bold text-slate-900 dark:text-white">
                        Nemis tili artikl ranglari
                      </span>
                      <button
                        onClick={() => setIsColorGuideOpen(false)}
                        className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="space-y-1.5 text-xs">
                      <div className="flex items-center justify-between p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-200/80 dark:border-blue-800/60">
                        <span className="font-bold font-mono text-blue-700 dark:text-blue-300">der</span>
                        <span className="text-[11px] text-slate-600 dark:text-slate-300">Erkak jinsi (Maskulin)</span>
                      </div>
                      <div className="flex items-center justify-between p-1.5 rounded-lg bg-rose-50 dark:bg-rose-950/50 border border-rose-200/80 dark:border-rose-800/60">
                        <span className="font-bold font-mono text-rose-700 dark:text-rose-300">die</span>
                        <span className="text-[11px] text-slate-600 dark:text-slate-300">Ayol jinsi (Feminin)</span>
                      </div>
                      <div className="flex items-center justify-between p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200/80 dark:border-emerald-800/60">
                        <span className="font-bold font-mono text-emerald-700 dark:text-emerald-300">das</span>
                        <span className="text-[11px] text-slate-600 dark:text-slate-300">O‘rta jins (Neutral)</span>
                      </div>
                      <div className="flex items-center justify-between p-1.5 rounded-lg bg-violet-50 dark:bg-violet-950/50 border border-violet-200/80 dark:border-violet-800/60">
                        <span className="font-bold font-mono text-violet-700 dark:text-violet-300">die (pl.)</span>
                        <span className="text-[11px] text-slate-600 dark:text-slate-300">Ko‘plik shakli (Plural)</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Dark Mode Moon/Sun Toggle */}
              <button
                onClick={toggleTheme}
                title={isDark ? "Yorug‘ rejimga o‘tish" : "Tungi rejimga o‘tish"}
                className="w-8 h-8 rounded-xl flex items-center justify-center bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200/80 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-700/60 text-slate-700 dark:text-amber-400 transition shadow-2xs cursor-pointer"
                aria-label="Tungi rejim"
              >
                {isDark ? (
                  <Sun size={15} className="text-amber-400 transition-transform duration-300 hover:rotate-45" />
                ) : (
                  <Moon size={15} className="text-slate-700 transition-transform duration-300 hover:-rotate-12" />
                )}
              </button>

              {/* Auth Buttons */}
              {user ? (
                <div className="hidden sm:block">
                  <AccountDropdown />
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Link
                    to="/auth"
                    className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100/90 hover:bg-slate-200/90 dark:bg-slate-800/90 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200/70 dark:border-slate-700/70 transition shadow-2xs"
                  >
                    Kirish
                  </Link>
                  <Link
                    to="/auth?mode=register"
                    className="px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-soft transition-all duration-150 active:scale-95"
                  >
                    Ro‘yxatdan o‘tish
                  </Link>
                </div>
              )}

              {/* Notification Bell (Visible on Mobile matching Reference Image 5) */}
              <button
                className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition relative"
                aria-label="Bildirishnomalar"
                title="Bildirishnomalar"
              >
                <Bell size={19} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-blue-600 ring-2 ring-white dark:ring-slate-900" />
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 transition"
                aria-label="Qo‘shimcha menyu"
              >
                {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu for Navigation Links */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white/98 dark:bg-slate-900/98 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-1 animate-fadeIn shadow-2xl">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-3 py-1">
              Barcha bo‘limlar
            </div>
            {navLinks.map((link) => {
              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition ${
                    active 
                      ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-bold border border-blue-200/60 dark:border-blue-800/60' 
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}

            {/* Quick account action inside mobile nav menu */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
              <Link
                to={user ? "/dashboard" : "/auth"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                <span>{user ? (user.name || 'Mening kabinetim') : 'Kirish / Ro‘yxatdan o‘tish'}</span>
                <span className="text-xs">→</span>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Global Search Dialog Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};
