import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { audioService, AudioFailureReason } from '../../lib/audio';
import { SoundWaveVisualizer } from './SoundWaveVisualizer';

interface AudioButtonProps {
  text: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  rate?: number;
}

// Playback used to fail silently: the button animated and nothing was heard.
// Every failure path now maps to a message a learner can actually act on.
const FAILURE_MESSAGES: Record<AudioFailureReason, string> = {
  voice_missing:
    'Brauzeringizda nemis tili ovozi (de-DE) topilmadi, shuning uchun talaffuzni eshittirib bo‘lmadi.',
  unsupported: 'Bu brauzer talaffuzni ijro etishni qo‘llab-quvvatlamaydi.',
  playback_failed: 'Talaffuzni ijro etishda xatolik yuz berdi. Qayta urinib ko‘ring.',
};

export const AudioButton: React.FC<AudioButtonProps> = ({
  text,
  className = '',
  size = 'md',
  rate = 0.9,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [failure, setFailure] = useState<AudioFailureReason | null>(null);

  useEffect(() => {
    const unsubscribe = audioService.onStateChange((speaking) => {
      if (!speaking) {
        setIsPlaying(false);
      }
    });
    return unsubscribe;
  }, []);

  // Auto-dismiss the notice so it cannot pile up in long vocabulary lists.
  useEffect(() => {
    if (!failure) return;
    const timer = setTimeout(() => setFailure(null), 6000);
    return () => clearTimeout(timer);
  }, [failure]);

  const handleSpeak = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) {
      audioService.stop();
      setIsPlaying(false);
      return;
    }

    setFailure(null);
    setIsPlaying(true);
    const result = await audioService.speak(text, rate);
    setIsPlaying(false);

    // Only the button that was pressed reports a problem. Stopping playback on
    // purpose comes back without a reason, so it stays quiet.
    if (!result.ok && result.reason) {
      setFailure(result.reason);
    }
  };

  const sizeClasses = {
    sm: 'p-1.5 text-xs',
    md: 'p-2 text-sm',
    lg: 'p-2.5 text-base',
  }[size];

  const iconSizes = {
    sm: 14,
    md: 17,
    lg: 20,
  }[size];

  const failureMessage = failure ? FAILURE_MESSAGES[failure] : null;

  return (
    <span className="relative inline-flex">
      <button
        onClick={handleSpeak}
        title={failureMessage ?? `Nemischa eshitish: "${text}"`}
        type="button"
        className={`inline-flex items-center justify-center rounded-full transition-all active:scale-95 shadow-2xs focus:outline-none focus:ring-2 focus:ring-brand-500/40 ${
          isPlaying
            ? 'bg-brand-600 text-white shadow-glow px-2.5'
            : failureMessage
            ? 'text-amber-700 bg-amber-100 hover:bg-amber-200 dark:bg-amber-950/70 dark:text-amber-300 dark:hover:bg-amber-900/70'
            : 'text-brand-600 bg-brand-50 hover:bg-brand-100 hover:text-brand-700 dark:bg-slate-800 dark:text-brand-400 dark:hover:bg-slate-700 dark:hover:text-brand-300'
        } ${sizeClasses} ${className}`}
        aria-label={failureMessage ?? 'Talaffuzni tinglash'}
      >
        {isPlaying ? (
          <span className="flex items-center space-x-1.5 text-white">
            <SoundWaveVisualizer isPlaying={true} bars={4} size={size} />
          </span>
        ) : failureMessage ? (
          <VolumeX size={iconSizes} />
        ) : (
          <Volume2 size={iconSizes} />
        )}
      </button>

      {failureMessage && (
        <span
          role="status"
          className="absolute left-1/2 top-full z-30 mt-2 w-56 -translate-x-1/2 rounded-xl border border-amber-300 bg-amber-50 px-3 py-2 text-left text-[11px] font-medium leading-snug text-amber-900 shadow-lg dark:border-amber-800 dark:bg-amber-950 dark:text-amber-200"
        >
          {failureMessage}
        </span>
      )}
    </span>
  );
};

