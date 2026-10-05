import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { MobileNav } from './MobileNav';

export const MainLayout: React.FC = () => {
  const location = useLocation();
  const isLessonPage = location.pathname.includes('/lesson/');

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 w-full max-w-full overflow-x-hidden">
      <Navbar />
      <main className={`flex-1 w-full max-w-full overflow-x-hidden ${isLessonPage ? 'pb-0' : 'pb-16 lg:pb-0'}`}>
        <Outlet />
      </main>
      {!isLessonPage && <Footer />}
      {!isLessonPage && <MobileNav />}
    </div>
  );
};
