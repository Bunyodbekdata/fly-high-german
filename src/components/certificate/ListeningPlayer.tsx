import React, { useState, useEffect } from 'react';
import { audioService } from '../../lib/audio';
import { Play, Pause, RotateCcw, Volume2, AlertCircle } from 'lucide-react';

interface ListeningPlayerProps {
  audioUrl?: string;
  audioText?: string;
  maxReplays?: number;
  questionId: string;
}

export const ListeningPlayer: React.FC<ListeningPlayerProps> = ({
  audioUrl,
  audioText,
  maxReplays = 3,
  questionId,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playCount, setPlayCount] = useState(0);
  const [error, setError] = useState<string | null>(null);

  // Reset play status when question changes
  useEffect(() => {
    setIsPlaying(false);
    setError(null);
    audioService.stop();
  }, [questionId]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      audioService.stop();
    };
  }, []);

  const handlePlayToggle = async () => {
    if (isPlaying) {
      audioService.stop();
      setIsPlaying(false);
      return;
    }

    if (!audioText && !audioUrl) {
      setError('Audio fayl yoki matni mavjud emas.');
      return;
    }

    try {
      setError(null);
      setIsPlaying(true);

      const textToSpeak = audioText || '';
      if (textToSpeak) {
        const result = await audioService.speak(textToSpeak, 0.88);
        setIsPlaying(false);
        if (result.ok) {
          setPlayCount(prev => prev + 1);
        } else {
          setError('Audio ijrosida xatolik yuz berdi. Internetni tekshiring.');
        }
      } else if (audioUrl && !audioUrl.startsWith('tts:')) {
        const audio = new Audio(audioUrl);
        audio.onended = () => {
          setIsPlaying(false);
          setPlayCount(prev => prev + 1);
        };
        audio.onerror = () => {
          setIsPlaying(false);
          setError('Audio yuklanmadi. Iltimos, internet aloqangizni tekshiring.');
        };
        await audio.play();
      }
    } catch {
      setIsPlaying(false);
      setError('Audio ijrosida xatolik yuz berdi.');
    }
  };

  const handleReplay = async () => {
    audioService.stop();
    setIsPlaying(false);
    setTimeout(() => {
      handlePlayToggle();
    }, 100);
  };

  return (
    <div className="bg-slate-100 dark:bg-slate-800/80 rounded-2xl p-4 border border-slate-200 dark:border-slate-700/80 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300">
            <Volume2 size={18} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200">
              Audioni tinglang
            </h4>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              Tinglashlar soni: {playCount} / {maxReplays} marta
            </span>
          </div>
        </div>

        {isPlaying && (
          <div className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-[10px] font-bold animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-ping mr-1" />
            <span>Tinglanmoqda...</span>
          </div>
        )}
      </div>

      {/* Control Buttons */}
      <div className="flex items-center space-x-3 pt-1">
        <button
          onClick={handlePlayToggle}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 transition ${
            isPlaying
              ? 'bg-amber-600 hover:bg-amber-700 text-white'
              : 'bg-purple-600 hover:bg-purple-700 text-white shadow-xs'
          }`}
          aria-label={isPlaying ? 'Pauza' : 'Tinglash'}
        >
          {isPlaying ? (
            <>
              <Pause size={15} />
              <span>To‘xtatish</span>
            </>
          ) : (
            <>
              <Play size={15} className="fill-white" />
              <span>{playCount > 0 ? 'Davom ettirish' : 'Audioni tinglash'}</span>
            </>
          )}
        </button>

        <button
          onClick={handleReplay}
          className="py-2.5 px-3.5 rounded-xl bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center space-x-1.5 transition"
          title="Boshidan tinglash"
          aria-label="Qayta tinglash"
        >
          <RotateCcw size={14} />
          <span className="hidden sm:inline">Qayta tinglash</span>
        </button>
      </div>

      {error && (
        <div className="flex items-center space-x-2 text-[11px] text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 p-2.5 rounded-xl border border-rose-200 dark:border-rose-900">
          <AlertCircle size={14} className="flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};
