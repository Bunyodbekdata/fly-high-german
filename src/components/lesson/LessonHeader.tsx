import React, { useState, useEffect } from 'react';
import { Lesson } from '../../types/database';
import { ArrowLeft, Clock, CheckCircle, Volume2, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { LevelBadge } from '../common/Badge';
import { audioService } from '../../lib/audio';

interface LessonHeaderProps {
  lesson: Lesson;
  isCompleted: boolean;
  activeTab: string;
  onTabChange: (tab: string) => void;
  completedTabs: Record<string, boolean>;
}

export const LessonHeader: React.FC<LessonHeaderProps> = ({
  lesson,
  isCompleted,
  activeTab,
  onTabChange,
  completedTabs,
}) => {
  const navigate = useNavigate();
  const [audioSpeed, setAudioSpeed] = useState<number>(audioService.getSpeed());

  useEffect(() => {
    return audioService.onSpeedChange((newSpeed) => {
      setAudioSpeed(newSpeed);
    });
  }, []);

  const handleSpeedChange = (speed: number) => {
    audioService.setSpeed(speed);
    setAudioSpeed(speed);
  };

  const tabs = [
    { id: 'warmup', label: '1. Kirish' },
    { id: 'dialogue', label: '2. Muloqot' },
    { id: 'vocabulary', label: '3. Lug‘at' },
    { id: 'grammar', label: '4. Grammatika' },
    { id: 'listening', label: '5. Tinglash' },
    { id: 'reading', label: '6. O‘qish' },
    { id: 'writing', label: '7. Yozish' },
    { id: 'shadowing', label: '8. Talaffuz' },
    { id: 'practice', label: '9. Mashqlar' },
  ];

  // Calculate completed tabs count
  const completedCount = Object.keys(completedTabs).filter((k) => completedTabs[k]).length;
  const progressPercent = Math.min(100, Math.round((completedCount / tabs.length) * 100));

  return (
    <div className="bg-white/95 backdrop-blur-md border-b border-slate-200/90 sticky top-16 z-30 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-3 pb-2.5">
        {/* Top Breadcrumb & Status & Audio Speed */}
        <div className="flex items-center justify-between mb-2.5">
          <button
            onClick={() => navigate(`/levels/${lesson.levelCode}`)}
            className="inline-flex items-center text-xs font-bold text-slate-500 hover:text-brand-600 transition"
          >
            <ArrowLeft size={14} className="mr-1" />
            Kurs moduliga qaytish
          </button>

          <div className="flex items-center space-x-3">
            {/* Audio Speed Selector */}
            <div className="hidden sm:flex items-center space-x-1 bg-slate-100/90 p-1 rounded-xl border border-slate-200/70 text-[11px] font-bold">
              <span className="flex items-center text-slate-500 pl-1.5 pr-1">
                <Volume2 size={12} className="mr-1 text-slate-400" />
                Ovoz:
              </span>
              <button
                onClick={() => handleSpeedChange(0.75)}
                className={`px-2 py-0.5 rounded-lg transition ${
                  audioSpeed === 0.75
                    ? 'bg-brand-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Sekin tezlik (yangi boshlovchilar uchun)"
              >
                0.75x
              </button>
              <button
                onClick={() => handleSpeedChange(0.88)}
                className={`px-2 py-0.5 rounded-lg transition ${
                  audioSpeed === 0.88
                    ? 'bg-brand-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="O‘quv tezligi (tavsiya etiladi)"
              >
                0.9x
              </button>
              <button
                onClick={() => handleSpeedChange(1.0)}
                className={`px-2 py-0.5 rounded-lg transition ${
                  audioSpeed === 1.0
                    ? 'bg-brand-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Tabiiy tezlik"
              >
                1.0x
              </button>
            </div>

            <span className="flex items-center text-xs text-slate-500 font-medium">
              <Clock size={13} className="mr-1 text-slate-400" />
              {lesson.estimatedMinutes} daqiqa
            </span>
            <LevelBadge code={lesson.levelCode} />
            {isCompleted && (
              <span className="inline-flex items-center text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                <CheckCircle size={12} className="mr-1 text-emerald-600" />
                Yakunlangan
              </span>
            )}
          </div>
        </div>

        {/* Lesson Titles & Progress Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div>
            <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              <span>{lesson.titleDe}</span>
              {progressPercent === 100 && (
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center">
                  <Sparkles size={11} className="mr-1" />
                  100% Tayyor
                </span>
              )}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5">
              {lesson.titleUz}
            </p>
          </div>

          {/* Gamified Progress indicator */}
          <div className="w-full sm:w-56 flex flex-col items-end">
            <div className="flex items-center justify-between w-full text-[11px] font-bold text-slate-500 mb-1">
              <span>O‘zlashtirish:</span>
              <span className="text-brand-600 font-extrabold">
                {completedCount}/9 qadam ({progressPercent}%)
              </span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden border border-slate-200/60">
              <div
                className="bg-gradient-to-r from-brand-500 to-emerald-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Horizontal Scrollable Tabs */}
        <div className="flex items-center space-x-1 sm:space-x-1.5 overflow-x-auto no-scrollbar border-t border-slate-100 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const isTabDone = completedTabs[tab.id];

            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex-shrink-0 px-3 py-1.5 sm:px-3 sm:py-1.5 rounded-xl text-xs font-bold transition-all relative flex items-center space-x-1 ${
                  isActive
                    ? 'bg-brand-600 text-white shadow-sm'
                    : isTabDone
                    ? 'bg-emerald-50/80 border border-emerald-200/80 text-emerald-800 hover:bg-emerald-100'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span>{tab.label}</span>
                {isTabDone && !isActive && (
                  <CheckCircle size={12} className="text-emerald-600" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
