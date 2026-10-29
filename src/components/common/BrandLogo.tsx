import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  const titleSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
  };

  const subSizes = {
    sm: 'text-[8px]',
    md: 'text-[9px]',
    lg: 'text-[11px]',
  };

  return (
    <div className={`flex items-center space-x-2.5 group select-none ${className}`}>
      {/* Stylized Feathered Wing German Swoosh Icon */}
      <div className={`relative ${iconSizes[size]} flex-shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
        >
          {/* Feather 1 - Dark / Black (German top flag stripe) */}
          <path
            d="M8 28C9 20 16 10 26 6C23 11 18 19 14 26C12 29.5 9 30 8 28Z"
            fill="#0F172A"
          />
          {/* Feather 2 - Vibrant Blue Swoosh Accent */}
          <path
            d="M12 31C14 22 21 12 30 8C27 13 22 22 18 29C16 32.5 13 33 12 31Z"
            fill="#2563EB"
          />
          {/* Feather 3 - Crimson Red (German middle flag stripe) */}
          <path
            d="M16 33C18 25 25 15 33 11C30 16 26 24 22 31C20 34.5 17 35 16 33Z"
            fill="#DC2626"
          />
          {/* Feather 4 - Warm Gold / Amber (German bottom flag stripe) */}
          <path
            d="M20 35C22 28 28 19 36 15C33 20 30 27 26 33C24 36.5 21 37 20 35Z"
            fill="#F59E0B"
          />
        </svg>
      </div>

      {/* Typography: FLY HIGH GERMAN */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-black tracking-tight text-slate-900 dark:text-white font-sans ${titleSizes[size]} group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}
        >
          FLY HIGH
        </span>
        {showSubtitle && (
          <span
            className={`font-bold tracking-[0.2em] text-slate-400 dark:text-slate-400 uppercase mt-0.5 ${subSizes[size]}`}
          >
            GERMAN
          </span>
        )}
      </div>
    </div>
  );
};
