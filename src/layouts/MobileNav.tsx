import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Bookmark, User, Mic } from 'lucide-react';
import { MobileAccountSheet } from '../components/navigation/MobileAccountSheet';
import { useAuth } from '../context/AuthContext';

export const MobileNav: React.FC = () => {
  const location = useLocation();
  const { user } = useAuth();
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  // Nav items: Bosh sahifa | Darslar | Lug'at | Shadowing
  const links = [
    { to: '/', label: 'Bosh sahifa', icon: Home },
    { to: '/courses', label: 'Darslar', icon: BookOpen },
    { to: '/vocabulary', label: 'Lug‘at', icon: Bookmark },
    { to: '/shadowing', label: 'Shadowing', icon: Mic },
  ];

  return (
    <>
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-t border-slate-200/80 dark:border-slate-800/80 px-2 pt-1.5 safe-area-pb transition-colors shadow-elevated">
        <div className="flex items-center justify-around">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive =
              link.to === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(link.to);

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative flex flex-col items-center justify-center gap-1 py-1 px-2.5 rounded-2xl transition-all duration-150 active:scale-95 ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 font-bold'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-medium'
                }`}
              >
                <div className={`p-1 rounded-xl transition-colors ${isActive ? 'bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400' : ''}`}>
                  <Icon size={20} className={isActive ? 'stroke-[2.4]' : 'stroke-[1.8]'} />
                </div>
                <span className="text-[11px] leading-tight tracking-tight">
                  {link.label}
                </span>
              </Link>
            );
          })}

          {/* Profil Button matching Image 5 */}
          <button
            onClick={() => setIsAccountOpen(true)}
            className={`relative flex flex-col items-center justify-center gap-1 py-1 px-2.5 rounded-2xl transition-all duration-150 active:scale-95 ${
              location.pathname === '/profile' || location.pathname === '/dashboard' || location.pathname === '/admin'
                ? 'text-blue-600 dark:text-blue-400 font-bold'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-medium'
            }`}
            aria-label="Profil"
          >
            <div className={`p-1 rounded-xl transition-colors ${
              location.pathname === '/profile' || location.pathname === '/dashboard' || location.pathname === '/admin'
                ? 'bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400'
                : ''
            }`}>
              <User size={20} className="stroke-[1.8]" />
            </div>
            <span className="text-[11px] leading-tight tracking-tight">Profil</span>
          </button>
        </div>
      </div>

      {/* Mobile Account Bottom Sheet */}
      <MobileAccountSheet 
        isOpen={isAccountOpen} 
        onClose={() => setIsAccountOpen(false)} 
      />
    </>
  );
};
