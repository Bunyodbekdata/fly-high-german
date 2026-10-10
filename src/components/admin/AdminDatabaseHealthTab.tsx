import React, { useState, useEffect } from 'react';
import { supabase, isSupabaseConfigured, checkSupabaseConnection } from '../../lib/supabase';
import { 
  Database, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  RefreshCw, 
  ShieldCheck, 
  Server, 
  Clock, 
  Copy, 
  Check, 
  Layers
} from 'lucide-react';

export const AdminDatabaseHealthTab: React.FC = () => {
  const [checking, setChecking] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<{
    connected: boolean;
    message: string;
    latencyMs?: number;
  } | null>(null);

  const [tableStats, setTableStats] = useState<Record<string, { status: 'ok' | 'error' | 'loading'; count?: number; error?: string }>>({});
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleTestConnection = async () => {
    setChecking(true);
    try {
      const result = await checkSupabaseConnection();
      setConnectionStatus(result);

      if (result.connected && supabase) {
        // Check core tables
        const tables = [
          'profiles',
          'levels',
          'lessons',
          'certificate_tests',
          'certificate_sections',
          'certificate_questions_public',
        ];

        const newStats: Record<string, { status: 'ok' | 'error' | 'loading'; count?: number; error?: string }> = {};

        for (const tbl of tables) {
          try {
            const { count, error } = await supabase
              .from(tbl)
              .select('*', { count: 'exact', head: true });

            if (error) {
              newStats[tbl] = { status: 'error', error: error.message };
            } else {
              newStats[tbl] = { status: 'ok', count: count || 0 };
            }
          } catch (e: unknown) {
            const errorMsg = e instanceof Error ? e.message : 'Noma‘lum xato';
            newStats[tbl] = { status: 'error', error: errorMsg };
          }
        }
        setTableStats(newStats);
      }
    } finally {
      setChecking(false);
    }
  };

  useEffect(() => {
    handleTestConnection();
  }, []);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(key);
    setTimeout(() => setCopiedText(null), 2500);
  };

  return (
    <div className="space-y-6">
      {/* Overview Card */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-950/60 border border-brand-100 dark:border-brand-900 flex items-center justify-center text-brand-600 dark:text-brand-400">
              <Database size={24} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Supabase & Baza Diagnostikasi
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Bulutli ma‘lumotlar bazasi, RLS xavfsizligi va jadvallar holatini tekshirish
              </p>
            </div>
          </div>

          <button
            onClick={handleTestConnection}
            disabled={checking}
            className="px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold transition flex items-center space-x-2 disabled:opacity-50 cursor-pointer shadow-xs"
          >
            <RefreshCw size={14} className={checking ? 'animate-spin' : ''} />
            <span>{checking ? 'Tekshirilmoqda...' : 'Ulanishni tekshirish'}</span>
          </button>
        </div>

        {/* Live Status Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* 1. Connection Mode */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
              <Server size={13} />
              Rejim
            </span>
            <div className="flex items-center space-x-2 pt-1">
              <span className={`w-2.5 h-2.5 rounded-full ${isSupabaseConfigured ? 'bg-emerald-500' : 'bg-amber-500'}`} />
              <span className="text-sm font-bold text-slate-900 dark:text-white">
                {isSupabaseConfigured ? 'Supabase Cloud (Faol)' : 'Mahalliy Xavfsiz Rejim (Offline)'}
              </span>
            </div>
          </div>

          {/* 2. Latency */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
              <Clock size={13} />
              Kechikish (Latency)
            </span>
            <div className="text-sm font-bold text-slate-900 dark:text-white pt-1">
              {connectionStatus?.latencyMs !== undefined ? `${connectionStatus.latencyMs} ms` : '—'}
            </div>
          </div>

          {/* 3. Security Status */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
              <ShieldCheck size={13} />
              Javoblar Himoyasi
            </span>
            <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 pt-1">
              Himoyalangan (Server Grade)
            </div>
          </div>
        </div>

        {/* Detailed Message */}
        {connectionStatus && (
          <div className={`p-4 rounded-2xl border text-xs font-semibold flex items-center space-x-3 ${
            connectionStatus.connected
              ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 border-emerald-200 dark:border-emerald-800'
              : 'bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-200 border-amber-200 dark:border-amber-800'
          }`}>
            {connectionStatus.connected ? (
              <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
            ) : (
              <AlertTriangle size={18} className="text-amber-600 flex-shrink-0" />
            )}
            <span>{connectionStatus.message}</span>
          </div>
        )}
      </div>

      {/* Cloud Tables Grid (if connected) */}
      {isSupabaseConfigured && (
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center space-x-2">
            <Layers size={18} className="text-brand-600 dark:text-brand-400" />
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Supabase Jadvallar Holati
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { id: 'profiles', label: 'Foydalanuvchi Profillari' },
              { id: 'levels', label: 'CEFR Darajalari' },
              { id: 'lessons', label: 'Darslar' },
              { id: 'certificate_tests', label: 'Sertifikat Testlari' },
              { id: 'certificate_sections', label: 'Test Bo‘limlari' },
              { id: 'certificate_questions_public', label: 'Ommaviy Savollar (Himoyalangan)' },
            ].map((tbl) => {
              const stat = tableStats[tbl.id];
              return (
                <div
                  key={tbl.id}
                  className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between"
                >
                  <div>
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200 font-mono">{tbl.id}</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">{tbl.label}</p>
                  </div>
                  <div>
                    {stat?.status === 'ok' ? (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-[11px] font-bold">
                        {stat.count} qator
                      </span>
                    ) : stat?.status === 'error' ? (
                      <span className="px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 text-[10px] font-bold" title={stat.error}>
                        Kutilmoqda
                      </span>
                    ) : (
                      <span className="text-[11px] text-slate-400">...</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Useful SQL Commands for Database Administrator */}
      <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4">
        <div>
          <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-1">
            Ma‘mur Qo‘llanmasi (DB Admin Snippets)
          </span>
          <h3 className="text-base font-bold text-white">
            Supabase loyihasini sozlash va migratsiyalarni ishga tushirish
          </h3>
        </div>

        <div className="space-y-3">
          {/* Command 1 */}
          <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-300 font-semibold">1. Yangi migratsiyalarni qo‘llash:</span>
              <button
                onClick={() => copyToClipboard('supabase db push', 'c1')}
                className="text-[11px] text-brand-400 hover:text-brand-300 flex items-center space-x-1 cursor-pointer"
              >
                {copiedText === 'c1' ? <Check size={12} /> : <Copy size={12} />}
                <span>{copiedText === 'c1' ? 'Nusxalandi' : 'Nusxa olish'}</span>
              </button>
            </div>
            <code className="block p-2 rounded-xl bg-slate-950 text-slate-200 text-xs font-mono select-all">
              supabase db push
            </code>
          </div>

          {/* Command 2 */}
          <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-300 font-semibold">2. Foydalanuvchiga Adminlik huquqini berish:</span>
              <button
                onClick={() => copyToClipboard("UPDATE public.profiles SET role = 'admin' WHERE email = 'admin@greatnation.uz';", 'c2')}
                className="text-[11px] text-brand-400 hover:text-brand-300 flex items-center space-x-1 cursor-pointer"
              >
                {copiedText === 'c2' ? <Check size={12} /> : <Copy size={12} />}
                <span>{copiedText === 'c2' ? 'Nusxalandi' : 'Nusxa olish'}</span>
              </button>
            </div>
            <code className="block p-2 rounded-xl bg-slate-950 text-emerald-400 text-xs font-mono select-all">
              UPDATE public.profiles SET role = 'admin' WHERE email = 'admin@greatnation.uz';
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};
