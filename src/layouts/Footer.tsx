import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pb-16 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl flex flex-col overflow-hidden border border-slate-700 flex-shrink-0">
                <div className="h-3 bg-slate-950 w-full" />
                <div className="h-3 bg-red-600 w-full" />
                <div className="h-3 bg-amber-400 w-full" />
              </div>
              <span className="font-display font-extrabold text-white text-base tracking-tight">
                FOR GREAT NATION
              </span>
            </div>
            <p className="text-caption text-slate-400 leading-relaxed">
              O‘zbek tilida nemis tilini noldan B1 darajagacha mustaqil o‘rganish bo‘yicha xalqaro CEFR
              standartiga asoslangan raqamli ta’lim platformasi.
            </p>
          </div>

          {/* CEFR Levels */}
          <div>
            <h4 className="text-white font-bold text-caption uppercase tracking-wider mb-4">
              Ta’lim Bosqichlari (CEFR)
            </h4>
            <ul className="space-y-2.5 text-caption">
              <li><Link to="/levels/a1-1" className="hover:text-white transition-colors">A1.1 — Boshlang‘ich bosqich</Link></li>
              <li><Link to="/levels/a1-2" className="hover:text-white transition-colors">A1.2 — Boshlang‘ich davomi</Link></li>
              <li><Link to="/levels/a2-1" className="hover:text-white transition-colors">A2.1 — O‘rta-quyi bosqich</Link></li>
              <li><Link to="/levels/a2-2" className="hover:text-white transition-colors">A2.2 — O‘rta-quyi yakuniy</Link></li>
              <li><Link to="/levels/b1-1" className="hover:text-white transition-colors">B1.1 — Mustaqil til egasi</Link></li>
              <li><Link to="/levels/b1-2" className="hover:text-white transition-colors">B1.2 — Rasmiy va sertifikat</Link></li>
            </ul>
          </div>

          {/* Library */}
          <div>
            <h4 className="text-white font-bold text-caption uppercase tracking-wider mb-4">
              Kutubxona va Mashqlar
            </h4>
            <ul className="space-y-2.5 text-caption">
              <li><Link to="/courses" className="hover:text-white transition-colors">O‘quv yo‘nalishi (Roadmap)</Link></li>
              <li><Link to="/vocabulary" className="hover:text-white transition-colors">Lug‘at kutubxonasi (A1–B1)</Link></li>
              <li><Link to="/grammar" className="hover:text-white transition-colors">Grammatika darsligi</Link></li>
              <li><Link to="/shadowing" className="hover:text-white transition-colors">Shadowing (Takrorlash)</Link></li>
              <li><Link to="/listening" className="hover:text-white transition-colors">Tinglab tushunish (Listening)</Link></li>
              <li><Link to="/reading" className="hover:text-white transition-colors">O‘qib tushunish (Reading)</Link></li>
            </ul>
          </div>

          {/* Methodology */}
          <div>
            <h4 className="text-white font-bold text-caption uppercase tracking-wider mb-4">
              Pedagogik Tamoyillar
            </h4>
            <div className="space-y-3 text-caption text-slate-400">
              <div className="flex items-start gap-2.5">
                <Award size={16} className="text-brand-400 flex-shrink-0 mt-0.5" />
                <span>O‘qituvchisiz, mustaqil 0 dan B1 gacha tizimli darslar</span>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Jonli nemis nutqi va tabiiy o‘zbekcha tushuntirishlar</span>
              </div>
              <div className="p-3.5 bg-slate-900/80 rounded-2xl border border-slate-800 text-2xs text-slate-300 leading-relaxed">
                Goethe-Zertifikat va telc A1–B1 imtihonlariga tayyorlovchi metodologiya.
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-caption text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} FOR GREAT NATION. Nemis tilini o‘rganuvchilar uchun yaratilgan.</p>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">Maxfiylik siyosati</Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Foydalanish qoidalari</Link>
            <Link to="/admin" className="text-brand-400 hover:text-brand-300 transition-colors">Admin portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
