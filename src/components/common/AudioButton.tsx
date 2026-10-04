import React, { useState, useEffect } from 'react';
import { Volume2 } from 'lucide-react';
import { audioService } from '../../lib/audio';
import { SoundWaveVisualizer } from './SoundWaveVisualizer';

interface AudioButtonProps {
  text: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  rate?: number;
}

export const AudioButton: React.FC<AudioButtonProps> = ({
  text,
  className = '',
  size = 'md',
  rate = 0.9,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const unsubscribe = audioService.onStateChange((speaking) => {
      if (!speaking) {
        setIsPlaying(false);
      }
    });
    return unsubscribe;
  }, []);

  const handleSpeak = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) {
      audioService.stop();
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);
    await audioService.speak(text, rate);
    setIsPlaying(false);
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

  return (
    <button
      onClick={handleSpeak}
      title={`Nemischa eshitish: "${text}"`}
      type="button"
      className={`inline-flex items-center justify-center rounded-full transition-all active:scale-95 shadow-2xs focus:outline-none focus:ring-2 focus:ring-brand-500/40 ${
        isPlaying
          ? 'bg-brand-600 text-white shadow-glow px-2.5'
          : 'text-brand-600 bg-brand-50 hover:bg-brand-100 hover:text-brand-700 dark:bg-slate-800 dark:text-brand-400 dark:hover:bg-slate-700 dark:hover:text-brand-300'
      } ${sizeClasses} ${className}`}
      aria-label="Talaffuzni tinglash"
    >
      {isPlaying ? (
        <span className="flex items-center space-x-1.5 text-white">
          <SoundWaveVisualizer isPlaying={true} bars={4} size={size} />
        </span>
      ) : (
        <Volume2 size={iconSizes} />
      )}
    </button>
  );
};

