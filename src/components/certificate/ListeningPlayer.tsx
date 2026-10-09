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

  const [showHelperText, setShowHelperText] = useState(false);
  const [speed, setSpeed] = useState<number>(0.88);

  // Sync with audioService speaking state
  useEffect(() => {
    const unsub = audioService.onStateChange((speaking) => {
      setIsPlaying(speaking);
    });
    return () => {
      unsub();
      audioService.stop();
    };
  }, []);

  // Reset play status and helper when question changes
  useEffect(() => {
    setIsPlaying(false);
    setError(null);
    setShowHelperText(false);
    audioService.stop();
  }, [questionId]);

  const handlePlayToggle = async () => {
    if (isPlaying) {
      audioService.stop();
      setIsPlaying(false);
      return;
    }

    if (!audioText && !audioUrl) {
      setError('Audio matni yoki fayli topilmadi.');
      return;
    }

    try {
      setError(null);
      setIsPlaying(true);

      const textToSpeak = audioText || '';
      if (textToSpeak) {
        const result = await audioService.speak(textToSpeak, speed);
        setIsPlaying(false);
        if (result.ok) {
          setPlayCount(prev => prev + 1);
        } else {
          // If browser speech was muted or failed
          setError('Brauzeringizda audio ijro etilmadi. Pastdagi "Matn yordami" tugmasini bosing.');
        }
      } else if (audioUrl && !audioUrl.startsWith('tts:')) {
        const audio = new Audio(audioUrl);
        audio.onended = () => {
          setIsPlaying(false);
          setPlayCount(prev => prev + 1);
        };
        audio.onerror = () => {
          setIsPlaying(false);
          setError('Audio faylni yuklab bo‘lmadi.');
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
    }, 120);
  };

  const toggleSpeed = () => {
    const nextSpeed = speed === 0.88 ? 1.0 : 0.88;
    setSpeed(nextSpeed);
    audioService.setSpeed(nextSpeed);
  };

  return (
    <div className="bg-slate-100 dark:bg-slate-800/80 rounded-2xl p-4 border border-slate-200 dark:border-slate-700/80 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-xl bg-brand-100 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400">
            <Volume2 size={18} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200">
              🎧 Audioni tinglang
            </h4>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              Tinglashlar: {playCount} marta • Tezlik: {speed === 0.88 ? '0.88x (O‘rganuvchi)' : '1.0x (Tabiiy)'}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {/* Speed Toggle Button */}
          <button
            onClick={toggleSpeed}
            className="px-2 py-1 rounded-lg text-[10px] font-bold bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 transition"
            title="Ijro tezligini o‘zgartirish"
          >
            {speed === 0.88 ? '0.88x' : '1.0x'}
          </button>

          {isPlaying && (
            <div className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300 text-[10px] font-bold animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-600 animate-ping mr-1" />
              <span>O‘qilmoqda...</span>
            </div>
          )}
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex items-center space-x-2 sm:space-x-3 pt-1">
        <button
          onClick={handlePlayToggle}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 transition ${
            isPlaying
              ? 'bg-amber-600 hover:bg-amber-700 text-white'
              : 'bg-brand-600 hover:bg-brand-700 text-white shadow-xs'
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
              <span>{playCount > 0 ? 'Qayta tinglash' : 'Audioni tinglash'}</span>
            </>
          )}
        </button>

        <button
          onClick={handleReplay}
          className="py-2.5 px-3.5 rounded-xl bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center space-x-1.5 transition"
          title="Boshidan ijro etish"
          aria-label="Qayta boshlash"
        >
          <RotateCcw size={14} />
          <span className="hidden sm:inline">Boshidan</span>
        </button>

        {/* Emergency Transcript Fallback Toggle */}
        <button
          onClick={() => setShowHelperText(!showHelperText)}
          className="py-2.5 px-3 rounded-xl bg-slate-200/80 dark:bg-slate-700/80 text-slate-700 dark:text-slate-200 text-xs font-semibold hover:bg-slate-300 dark:hover:bg-slate-600 transition"
          title="Agar audio eshitilmasa matnni ko‘rish"
        >
          {showHelperText ? 'Matnni yopish' : 'Matn yordami'}
        </button>
      </div>

      {showHelperText && audioText && (
        <div className="mt-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200 font-serif leading-relaxed animate-in fade-in">
          <p className="font-sans font-bold text-[10px] text-brand-600 dark:text-brand-400 mb-1">
            📢 Audio matni (Tinglab tushunish uchun):
          </p>
          <p className="italic">{audioText}</p>
        </div>
      )}

      {error && (
        <div className="flex items-center space-x-2 text-[11px] text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 p-2.5 rounded-xl border border-rose-200 dark:border-rose-900">
          <AlertCircle size={14} className="flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};
