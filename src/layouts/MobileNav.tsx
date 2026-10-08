import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Bookmark, Award, User } from 'lucide-react';
import { MobileAccountSheet } from '../components/navigation/MobileAccountSheet';

export const MobileNav: React.FC = () => {
  const location = useLocation();
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const links = [
    { to: '/', label: 'Bosh sahifa', icon: Home },
    { to: '/courses', label: 'Kurslar', icon: BookOpen },
    { to: '/vocabulary', label: 'Lug‘at', icon: Bookmark },
    { to: '/certificate-tests', label: 'Sertifikat', icon: Award },
  ];

  return (
    <>
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/92 dark:bg-slate-950/92 backdrop-blur-xl border-t border-slate-200/80 dark:border-slate-800/80 px-2 pt-1 safe-area-pb transition-colors shadow-lg">
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
                className={`flex flex-col items-center justify-center gap-0.5 py-1.5 px-3 rounded-xl transition-colors ${
                  isActive
                    ? 'text-brand-700 dark:text-brand-400 font-bold'
                    : 'text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-200'
                }`}
              >
                <Icon size={20} className={isActive ? 'stroke-[2.4]' : 'stroke-[1.8]'} />
                <span className={`text-[10px] tracking-tight ${isActive ? 'font-bold' : 'font-medium'}`}>
                  {link.label}
                </span>
              </Link>
            );
          })}

          {/* Account Button */}
          <button
            onClick={() => setIsAccountOpen(true)}
            className={`flex flex-col items-center justify-center gap-0.5 py-1.5 px-3 rounded-xl transition-colors ${
              location.pathname === '/profile' || location.pathname === '/dashboard' || location.pathname === '/admin'
                ? 'text-brand-700 dark:text-brand-400 font-bold'
                : 'text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-200'
            }`}
            aria-label="Hisob"
          >
            <User size={20} className="stroke-[1.8]" />
            <span className="text-[10px] tracking-tight font-medium">Hisob</span>
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
