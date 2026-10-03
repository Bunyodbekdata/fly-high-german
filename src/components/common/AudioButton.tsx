import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Loader2 } from 'lucide-react';
import { audioService } from '../../lib/audio';

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
    lg: 'p-3 text-base',
  }[size];

  const iconSizes = {
    sm: 15,
    md: 18,
    lg: 22,
  }[size];

  return (
    <button
      onClick={handleSpeak}
      title={`Nemischa eshitish: "${text}"`}
      type="button"
      className={`inline-flex items-center justify-center rounded-full text-brand-600 bg-brand-50 hover:bg-brand-100 hover:text-brand-700 active:scale-95 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40 ${sizeClasses} ${className}`}
      aria-label="Talaffuzni tinglash"
    >
      {isPlaying ? (
        <span className="flex items-center space-x-1 animate-pulse text-brand-700">
          <Volume2 size={iconSizes} className="animate-bounce" />
        </span>
      ) : (
        <Volume2 size={iconSizes} />
      )}
    </button>
  );
};
