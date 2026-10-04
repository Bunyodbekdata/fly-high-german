import React from 'react';

interface SoundWaveProps {
  isPlaying?: boolean;
  isActive?: boolean;
  bars?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

export const SoundWaveVisualizer: React.FC<SoundWaveProps> = ({
  isPlaying,
  isActive,
  bars = 4,
  className = '',
  size = 'md',
  color = 'bg-current',
}) => {
  const active = Boolean(isPlaying ?? isActive ?? false);

  const heightClasses = {
    sm: 'h-3.5',
    md: 'h-4',
    lg: 'h-6',
  }[size];

  const barWidthClasses = {
    sm: 'w-0.5',
    md: 'w-0.5',
    lg: 'w-1',
  }[size];

  return (
    <div
      className={`inline-flex items-center gap-[3px] ${heightClasses} ${className}`}
      aria-hidden="true"
    >
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className={`${barWidthClasses} rounded-full ${color} transition-all duration-300 ${
            active ? 'animate-soundwave' : 'h-1 opacity-40'
          }`}
          style={{
            animationDelay: active ? `${i * 140}ms` : undefined,
            animationDuration: active ? `${600 + ((i * 170) % 400)}ms` : undefined,
          }}
        />
      ))}
    </div>
  );
};
