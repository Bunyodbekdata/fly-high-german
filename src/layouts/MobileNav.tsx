import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Bookmark, Mic, LayoutDashboard } from 'lucide-react';

export const MobileNav: React.FC = () => {
  const location = useLocation();

  const links = [
    { to: '/', label: 'Bosh sahifa', icon: Home },
    { to: '/courses', label: 'Kurslar', icon: BookOpen },
    { to: '/vocabulary', label: 'Lug‘at', icon: Bookmark },
    { to: '/shadowing', label: 'Shadowing', icon: Mic },
    { to: '/dashboard', label: 'Kabinet', icon: LayoutDashboard },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200/90 dark:border-slate-800/90 px-3 py-1.5 safe-area-pb shadow-lg transition-colors">
      <div className="flex items-center justify-around max-w-md mx-auto">
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
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-2xl transition-all duration-200 active:scale-95 relative ${
                isActive 
                  ? 'text-brand-600 dark:text-brand-400 font-extrabold bg-brand-50/80 dark:bg-brand-950/60 border border-brand-200/60 dark:border-brand-800/60 shadow-2xs' 
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Icon size={19} className={isActive ? 'stroke-[2.5] text-brand-600 dark:text-brand-400' : 'stroke-2'} />
              <span className="text-[10px] tracking-tight mt-0.5 leading-none">{link.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
