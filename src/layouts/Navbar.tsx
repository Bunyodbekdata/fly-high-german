import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { SearchModal } from '../components/common/SearchModal';
import { AccountDropdown } from '../components/navigation/AccountDropdown';
import { MobileAccountSheet } from '../components/navigation/MobileAccountSheet';
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
  User
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { user } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountSheetOpen, setIsAccountSheetOpen] = useState(false);

  const primaryLinks = [
    { to: '/courses', label: 'Kurslar', icon: BookOpen },
    { to: '/vocabulary', label: 'Lug‘at', icon: Bookmark },
    { to: '/shadowing', label: 'Shadowing', icon: Mic },
    { to: '/certificate-tests', label: 'Sertifikat testlari', icon: Award, isBadge: true },
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

  return (
    <>
      <nav className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-40 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-2">
            {/* Brand Logo */}
            <div className="flex items-center space-x-3 sm:space-x-5 flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2.5 group flex-shrink-0">
                <div className="w-9 h-9 rounded-xl bg-slate-900 dark:bg-slate-800 flex flex-col overflow-hidden shadow-xs border border-slate-800 dark:border-slate-700 flex-shrink-0 group-hover:scale-105 transition-transform">
                  <div className="h-3 bg-slate-950 w-full" />
                  <div className="h-3 bg-red-600 w-full" />
                  <div className="h-3 bg-amber-400 w-full flex items-center justify-center">
                    <span className="text-[8px] font-black text-slate-950 tracking-tighter">FGN</span>
                  </div>
                </div>
                <div className="flex flex-col whitespace-nowrap">
                  <span className="font-extrabold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                    FOR GREAT NATION
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-wide -mt-0.5 hidden xl:block">
                    Nemis tili ta‘lim platformasi
                  </span>
                </div>
              </Link>

              {/* Desktop Nav Links */}
              <div className="hidden lg:flex items-center space-x-1">
                {primaryLinks.map((link) => {
                  const Icon = link.icon;
                  const active = isActive(link.to);
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition whitespace-nowrap ${
                        active
                          ? 'bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 font-bold border border-brand-200/60 dark:border-brand-800/60'
                          : link.isBadge
                            ? 'text-amber-800 dark:text-amber-300 bg-amber-50/70 dark:bg-amber-950/30 hover:bg-amber-100 dark:hover:bg-amber-900/40 border border-amber-200/50 dark:border-amber-800/50'
                            : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
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

                {/* Secondary Links for wider screens */}
                {secondaryLinks.map((link) => {
                  const Icon = link.icon;
                  const active = isActive(link.to);
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`hidden xl:flex px-2.5 py-1.5 rounded-xl text-xs font-semibold items-center space-x-1.5 transition whitespace-nowrap ${
                        active
                          ? 'bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 font-bold border border-brand-200/60 dark:border-brand-800/60'
                          : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <Icon size={14} className={active ? 'text-brand-600 dark:text-brand-400' : 'text-slate-400 dark:text-slate-500'} />
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Right Tools & Unified Account */}
            <div className="flex items-center space-x-2 sm:space-x-2.5 flex-shrink-0">
              {/* Global Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center space-x-2 px-2.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium transition"
                title="Qidiruv (Ctrl+K)"
              >
                <Search size={14} className="text-slate-400 dark:text-slate-500" />
                <span className="hidden sm:inline">Qidirish...</span>
                <kbd className="hidden md:inline px-1.5 py-0.5 text-[10px] bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded font-mono text-slate-500 dark:text-slate-400">
                  ⌘K
                </kbd>
              </button>

              {/* Dark Mode Toggle Button */}
              <button
                onClick={toggleTheme}
                title={isDark ? "Yorug‘ rejimga o‘tish" : "Tungi rejimga o‘tish"}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700 text-slate-700 dark:text-amber-400 transition"
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

              {/* Mobile Account Button (Triggers Mobile Sheet) */}
              <button
                onClick={() => setIsAccountSheetOpen(true)}
                className="lg:hidden flex items-center space-x-1.5 p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                aria-label="Profil va hisob"
              >
                <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-brand-500 to-brand-700 text-white flex items-center justify-center text-xs font-bold">
                  {user ? (user.name || 'T').charAt(0).toUpperCase() : <User size={13} />}
                </div>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                aria-label="Menyu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu for Navigation Links */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-6 space-y-1 animate-in slide-in-from-top-2">
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
                      ? 'bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 font-bold' 
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
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsAccountSheetOpen(true);
                }}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100"
              >
                <div className="flex items-center space-x-2.5">
                  <User size={18} className="text-brand-600 dark:text-brand-400" />
                  <span>👤 Mening hisobim (Account)</span>
                </div>
                <span className="text-xs text-slate-400">Ochish →</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Global Search Dialog Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Mobile Account Bottom Sheet */}
      <MobileAccountSheet 
        isOpen={isAccountSheetOpen} 
        onClose={() => setIsAccountSheetOpen(false)} 
      />
    </>
  );
};
