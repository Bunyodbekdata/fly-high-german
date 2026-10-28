import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { SearchModal } from '../components/common/SearchModal';
import { AccountDropdown } from '../components/navigation/AccountDropdown';
import { 
  Search, 
  BookOpen, 
  Bookmark, 
  Headphones, 
  FileText, 
  Mic, 
  Menu, 
  X,
  Sun,
  Moon,
  Award,
  ChevronDown,
  Sparkles
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { user } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const moreMenuRef = useRef<HTMLDivElement>(null);

  const primaryLinks = [
    { to: '/courses', label: 'Kurslar', icon: BookOpen },
    { to: '/vocabulary', label: 'Lug‘at', icon: Bookmark },
    { to: '/shadowing', label: 'Shadowing', icon: Mic },
    { to: '/certificate-tests', label: 'Sertifikat', icon: Award, isBadge: true },
  ];

  const secondaryLinks = [
    { to: '/grammar', label: 'Grammatika', icon: FileText },
    { to: '/listening', label: 'Tinglash', icon: Headphones },
    { to: '/reading', label: 'O‘qish', icon: FileText },
  ];

  const allNavLinks = [
    { to: '/', label: 'Bosh sahifa', icon: BookOpen },
    ...primaryLinks, 
    ...secondaryLinks
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const isSecondaryActive = secondaryLinks.some(l => isActive(l.to));

  // Close "More" dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(e.target as Node)) {
        setIsMoreMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <nav className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 sticky top-0 z-40 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-3">
            {/* Brand Logo */}
            <div className="flex items-center space-x-3 sm:space-x-5 flex-shrink-0">
              <Link to="/" className="flex items-center space-x-3 group flex-shrink-0">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-950 p-[1.5px] shadow-soft group-hover:scale-105 transition-all duration-300 ring-1 ring-slate-800/60 dark:ring-slate-700/60">
                  <div className="w-full h-full rounded-[14px] bg-slate-900 dark:bg-slate-950 flex flex-col overflow-hidden relative justify-between p-1">
                    {/* German Tricolor Accent Bar */}
                    <div className="h-1.5 w-full rounded-full flex overflow-hidden shadow-2xs">
                      <span className="w-1/3 bg-slate-950" />
                      <span className="w-1/3 bg-red-600" />
                      <span className="w-1/3 bg-amber-400" />
                    </div>
                    <div className="flex items-center justify-center flex-1">
                      <span className="text-[10px] font-black tracking-tight text-white font-display">
                        FGN
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col whitespace-nowrap">
                  <div className="flex items-center space-x-1.5">
                    <span className="font-black text-sm sm:text-base tracking-tight text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      FLY HIGH
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-1.5 py-0.2 rounded border border-amber-200/60 dark:border-amber-800/60">
                      DE
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-wide -mt-0.5">
                    For Great Nation • Nemis Tili
                  </span>
                </div>
              </Link>

              {/* Desktop Nav Links */}
              <div className="hidden lg:flex items-center space-x-1 pl-2">
                {primaryLinks.map((link) => {
                  const Icon = link.icon;
                  const active = isActive(link.to);
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition whitespace-nowrap ${
                        active
                          ? 'bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 border border-brand-200/80 dark:border-brand-800/80 shadow-2xs'
                          : link.isBadge
                            ? 'text-amber-800 dark:text-amber-300 bg-amber-50/70 dark:bg-amber-950/30 hover:bg-amber-100 dark:hover:bg-amber-900/40 border border-amber-200/50 dark:border-amber-800/50'
                            : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/80'
                      }`}
                    >
                      <Icon 
                        size={14} 
                        className={
                          active 
                            ? 'text-brand-600 dark:text-brand-400' 
                            : link.isBadge 
                              ? 'text-amber-500' 
                              : 'text-slate-400 dark:text-slate-500'
                        } 
                      />
                      <span>{link.label}</span>
                    </Link>
                  );
                })}

                {/* Secondary Links for wide screens */}
                {secondaryLinks.map((link) => {
                  const Icon = link.icon;
                  const active = isActive(link.to);
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`hidden 2xl:flex px-3 py-1.5 rounded-xl text-xs font-semibold items-center space-x-1.5 transition whitespace-nowrap ${
                        active
                          ? 'bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 font-bold border border-brand-200/80 dark:border-brand-800/80'
                          : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/80'
                      }`}
                    >
                      <Icon size={14} className={active ? 'text-brand-600 dark:text-brand-400' : 'text-slate-400 dark:text-slate-500'} />
                      <span>{link.label}</span>
                    </Link>
                  );
                })}

                {/* "Kutubxona" Dropdown for intermediate desktop screens (1024px to 1536px) */}
                <div className="relative 2xl:hidden" ref={moreMenuRef}>
                  <button
                    onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                    className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold flex items-center space-x-1 transition ${
                      isSecondaryActive
                        ? 'bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 font-bold border border-brand-200/80 dark:border-brand-800/80'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>Kutubxona</span>
                    <ChevronDown size={13} className={`transition-transform duration-200 ${isMoreMenuOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isMoreMenuOpen && (
                    <div className="absolute left-0 mt-2 w-48 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-elevated p-1.5 z-50 animate-in fade-in-50 zoom-in-95 duration-150">
                      {secondaryLinks.map((link) => {
                        const Icon = link.icon;
                        const active = isActive(link.to);
                        return (
                          <Link
                            key={link.to}
                            to={link.to}
                            onClick={() => setIsMoreMenuOpen(false)}
                            className={`flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition ${
                              active
                                ? 'bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 font-bold'
                                : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                            }`}
                          >
                            <Icon size={14} className={active ? 'text-brand-600 dark:text-brand-400' : 'text-slate-400'} />
                            <span>{link.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Tools & Unified Account */}
            <div className="flex items-center space-x-2 sm:space-x-2.5 flex-shrink-0">
              {/* Global Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-100/90 dark:bg-slate-800/90 hover:bg-slate-200/90 dark:hover:bg-slate-750 text-slate-600 dark:text-slate-300 text-xs font-semibold border border-slate-200/70 dark:border-slate-700/70 transition-all active:scale-95 shadow-2xs"
                title="Qidiruv oynasini ochish"
              >
                <Search size={14} className="text-slate-400 dark:text-slate-400" />
                <span className="hidden sm:inline">Qidirish...</span>
                <kbd className="hidden md:inline px-1.5 py-0.5 text-[10px] bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded font-mono text-slate-500 dark:text-slate-400 shadow-2xs">
                  {typeof navigator !== 'undefined' && /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? '⌘K' : 'Ctrl+K'}
                </kbd>
              </button>

              {/* Dark Mode Toggle Button */}
              <button
                onClick={toggleTheme}
                title={isDark ? "Yorug‘ rejimga o‘tish" : "Tungi rejimga o‘tish"}
                className="p-2 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200/80 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-700/60 text-slate-700 dark:text-amber-400 transition shadow-2xs"
                aria-label="Tungi rejim"
              >
                {isDark ? (
                  <Sun size={16} className="text-amber-400 transition-transform duration-300 hover:rotate-45" />
                ) : (
                  <Moon size={16} className="text-slate-700 transition-transform duration-300 hover:-rotate-12" />
                )}
              </button>

              {/* Unified Account Dropdown (Desktop) */}
              <div className="hidden lg:block">
                <AccountDropdown />
              </div>

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
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white/98 dark:bg-slate-900/98 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-1 animate-in slide-in-from-top-2 shadow-2xl">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-3 py-1">
              Barcha o‘quv bo‘limlari
            </div>
            {allNavLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition ${
                    active 
                      ? 'bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 font-bold border border-brand-200/60 dark:border-brand-800/60' 
                      : link.to === '/certificate-tests'
                        ? 'text-amber-800 dark:text-amber-300 bg-amber-50/60 dark:bg-amber-950/30'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon 
                    size={18} 
                    className={
                      active 
                        ? 'text-brand-600 dark:text-brand-400' 
                        : link.to === '/certificate-tests' 
                          ? 'text-amber-500' 
                          : 'text-slate-400 dark:text-slate-500'
                    } 
                  />
                  <span>{link.label}</span>
                </Link>
              );
            })}

            {/* Quick account action inside mobile nav menu */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
              <Link
                to={user ? "/profile" : "/auth"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-200 transition"
              >
                <div className="flex items-center space-x-2.5">
                  <span className="text-base">👤</span>
                  <span>{user ? (user.name || 'Profilim') : 'Kirish / Ro‘yxatdan o‘tish'}</span>
                </div>
                <span className="text-xs text-brand-600 dark:text-brand-400 font-semibold">Ochish →</span>
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
