import React, { useState, useEffect } from 'react';
import { Lesson } from '../../types/database';
import { 
  ArrowLeft, 
  Clock, 
  CheckCircle2, 
  Volume2, 
  Sparkles,
  Headphones,
  Bookmark,
  FileText,
  BookOpen,
  PenTool,
  Mic,
  Award
} from 'lucide-react';
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
    { id: 'warmup', num: '1', label: 'Kirish', de: 'Einstieg', icon: Sparkles },
    { id: 'dialogue', num: '2', label: 'Muloqot', de: 'Dialog', icon: Headphones },
    { id: 'vocabulary', num: '3', label: 'Lug‘at', de: 'Wortschatz', icon: Bookmark },
    { id: 'grammar', num: '4', label: 'Grammatika', de: 'Grammatik', icon: FileText },
    { id: 'listening', num: '5', label: 'Tinglash', de: 'Hören', icon: Volume2 },
    { id: 'reading', num: '6', label: 'O‘qish', de: 'Lesen', icon: BookOpen },
    { id: 'writing', num: '7', label: 'Yozish', de: 'Schreiben', icon: PenTool },
    { id: 'shadowing', num: '8', label: 'Talaffuz', de: 'Shadowing', icon: Mic },
    { id: 'practice', num: '9', label: 'Mashqlar', de: 'Übungen', icon: Award },
  ];

  // Calculate completed tabs count
  const completedCount = Object.keys(completedTabs).filter((k) => completedTabs[k]).length;
  const progressPercent = Math.min(100, Math.round((completedCount / tabs.length) * 100));

  return (
    <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/90 dark:border-slate-800 sticky top-16 z-30 shadow-xs transition-colors duration-200 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-3 pb-2.5">
        {/* Top Breadcrumb & Status & Audio Speed */}
        <div className="flex items-center justify-between mb-2.5">
          <button
            onClick={() => navigate(`/levels/${lesson.levelCode}`)}
            className="inline-flex items-center text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition"
          >
            <ArrowLeft size={14} className="mr-1" />
            Kurs moduliga qaytish
          </button>

          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Audio Speed Selector */}
            <div className="hidden sm:flex items-center space-x-1 bg-slate-100/90 dark:bg-slate-800/90 p-1 rounded-xl border border-slate-200/70 dark:border-slate-700 text-[11px] font-bold">
              <span className="flex items-center text-slate-500 dark:text-slate-400 pl-1.5 pr-1">
                <Volume2 size={12} className="mr-1 text-slate-400" />
                Ovoz:
              </span>
              <button
                onClick={() => handleSpeedChange(0.75)}
                className={`px-2 py-0.5 rounded-lg transition ${
                  audioSpeed === 0.75
                    ? 'bg-brand-600 text-white shadow-2xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
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
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
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
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Tabiiy tezlik"
              >
                1.0x
              </button>
            </div>

            <span className="flex items-center text-xs text-slate-500 dark:text-slate-400 font-medium">
              <Clock size={13} className="mr-1 text-slate-400" />
              {lesson.estimatedMinutes} daqiqa
            </span>
            <LevelBadge code={lesson.levelCode} />
            {isCompleted && (
              <span className="inline-flex items-center text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 px-2.5 py-0.5 rounded-full">
                <CheckCircle2 size={12} className="mr-1 text-emerald-600 dark:text-emerald-400" />
                Yakunlangan
              </span>
            )}
          </div>
        </div>

        {/* Lesson Titles & Progress Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div>
            <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              <span>{lesson.titleDe}</span>
              {progressPercent === 100 && (
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 px-2 py-0.5 rounded-full flex items-center">
                  <Sparkles size={11} className="mr-1" />
                  100% Tayyor
                </span>
              )}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
              {lesson.titleUz}
            </p>
          </div>

          {/* Gamified Progress indicator */}
          <div className="w-full sm:w-56 flex flex-col items-end">
            <div className="flex items-center justify-between w-full text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">
              <span>O‘zlashtirish:</span>
              <span className="text-brand-600 dark:text-brand-400 font-extrabold">
                {completedCount}/9 qadam ({progressPercent}%)
              </span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden border border-slate-200/60 dark:border-slate-700">
              <div
                className="bg-gradient-to-r from-brand-500 to-emerald-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Apple/Hueber Styled Segmented Tab Bar */}
        <div className="bg-slate-100/90 dark:bg-slate-800/90 p-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 flex items-center space-x-1.5 overflow-x-auto no-scrollbar w-full max-w-full px-1.5">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            const isTabDone = completedTabs[tab.id];

            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition-all relative flex items-center space-x-2 group ${
                  isActive
                    ? 'bg-white dark:bg-brand-600 text-brand-700 dark:text-white shadow-xs font-extrabold border border-slate-200/60 dark:border-brand-500 scale-[1.02]'
                    : isTabDone
                    ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60 hover:bg-emerald-100/70'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50'
                }`}
              >
                <span className={`w-5 h-5 rounded-lg flex items-center justify-center text-[10px] font-bold ${
                  isActive
                    ? 'bg-brand-100 dark:bg-brand-700 text-brand-700 dark:text-white'
                    : isTabDone
                    ? 'bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300'
                    : 'bg-slate-200/70 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                }`}>
                  <Icon size={12} />
                </span>
                <span className="flex flex-col text-left leading-tight">
                  <span className="text-[11px] font-bold tracking-tight">{tab.num}. {tab.label}</span>
                  <span className="text-[9px] font-medium opacity-70 hidden sm:block font-serif tracking-normal">{tab.de}</span>
                </span>
                {isTabDone && (
                  <CheckCircle2 size={12} className={isActive ? 'text-emerald-500 dark:text-white' : 'text-emerald-600 dark:text-emerald-400'} />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
