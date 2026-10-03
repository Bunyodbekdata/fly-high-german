import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-sm border-t border-slate-800 pb-16 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-slate-800 flex flex-col overflow-hidden border border-slate-700 flex-shrink-0">
                <div className="h-2.5 bg-black w-full" />
                <div className="h-2.5 bg-red-600 w-full" />
                <div className="h-3 bg-amber-400 w-full" />
              </div>
              <span className="font-extrabold text-white text-base tracking-tight">
                FOR GREAT NATION
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              O‘zbek tilida nemis tilini noldan B1 darajagacha mustaqil o‘rganish bo‘yicha xalqaro CEFR standartiga asoslangan raqamli ta‘lim platformasi.
            </p>
            <div className="text-xs text-slate-500 flex items-center space-x-1">
              <span>Barcha huquqlar himoyalangan</span>
            </div>
          </div>

          {/* CEFR Levels */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Ta‘lim Bosqichlari (CEFR)
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/levels/a1-1" className="hover:text-white transition">
                  A1.1 — Boshlang‘ich bosqich
                </Link>
              </li>
              <li>
                <Link to="/levels/a1-2" className="hover:text-white transition">
                  A1.2 — Boshlang‘ich davomi
                </Link>
              </li>
              <li>
                <Link to="/levels/a2-1" className="hover:text-white transition">
                  A2.1 — O‘rta-quyi bosqich
                </Link>
              </li>
              <li>
                <Link to="/levels/a2-2" className="hover:text-white transition">
                  A2.2 — O‘rta-quyi yakuniy
                </Link>
              </li>
              <li>
                <Link to="/levels/b1-1" className="hover:text-white transition">
                  B1.1 — Mustaqil til egasi
                </Link>
              </li>
              <li>
                <Link to="/levels/b1-2" className="hover:text-white transition">
                  B1.2 — Rasmiy va sertifikat
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Access */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Kutubxona va Mashqlar
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/courses" className="hover:text-white transition">
                  O‘quv yo‘nalishi (Roadmap)
                </Link>
              </li>
              <li>
                <Link to="/vocabulary" className="hover:text-white transition">
                  Lug‘at kutubxonasi (A1–B1)
                </Link>
              </li>
              <li>
                <Link to="/grammar" className="hover:text-white transition">
                  Grammatika darsligi
                </Link>
              </li>
              <li>
                <Link to="/shadowing" className="hover:text-white transition">
                  Shadowing (Takrorlash)
                </Link>
              </li>
              <li>
                <Link to="/listening" className="hover:text-white transition">
                  Tinglab tushunish (Listening)
                </Link>
              </li>
              <li>
                <Link to="/reading" className="hover:text-white transition">
                  O‘qib tushunish (Reading)
                </Link>
              </li>
            </ul>
          </div>

          {/* Quality & Methodology */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Pedagogik Tamoyillar
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start space-x-2">
                <Award size={15} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <span>O‘qituvchisiz, mustaqil 0 dan B1 gacha tizimli darslar</span>
              </div>
              <div className="flex items-start space-x-2">
                <ShieldCheck size={15} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Jonli nemis nutqi va tabiiy o‘zbekcha tushuntirishlar</span>
              </div>
              <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/80 text-[11px] text-slate-300">
                Goethe-Zertifikat va telc A1–B1 imtihonlariga tayyorlovchi metodologiya.
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} FOR GREAT NATION. Nemis tilini o‘rganuvchilar uchun yaratilgan.</p>
          <div className="flex items-center space-x-4">
            <Link to="/privacy" className="hover:text-slate-400">Maxfiylik siyosati</Link>
            <Link to="/terms" className="hover:text-slate-400">Foydalanish qoidalari</Link>
            <Link to="/admin" className="text-indigo-400 hover:text-indigo-300">Admin portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
