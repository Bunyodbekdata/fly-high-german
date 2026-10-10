import React from 'react';

interface FormattedTextProps {
  text: string;
  className?: string;
}

/**
 * Robust lightweight markdown formatter for explanations and grammar.
 * Handles **bold**, *italic*, and line breaks cleanly without external bloat.
 */
export const FormattedText: React.FC<FormattedTextProps> = ({ text, className = '' }) => {
  if (!text) return null;

  // Split lines
  const lines = text.split('\n');

  const parseInline = (line: string): React.ReactNode[] => {
    // Regex splits on **bold** and *italic*
    const parts: React.ReactNode[] = [];
    const regex = /(\*\*([^*]+)\*\*|\*([^*]+)\*)/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(line)) !== null) {
      // Add text before match
      if (match.index > lastIndex) {
        parts.push(line.substring(lastIndex, match.index));
      }

      if (match[2]) {
        // **bold**
        parts.push(
          <strong key={`${match.index}-bold`} className="font-bold text-slate-950 dark:text-white">
            {match[2]}
          </strong>
        );
      } else if (match[3]) {
        // *italic*
        parts.push(
          <em key={`${match.index}-em`} className="italic text-brand-600 dark:text-brand-400 font-medium">
            {match[3]}
          </em>
        );
      }

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < line.length) {
      parts.push(line.substring(lastIndex));
    }

    return parts.length > 0 ? parts : [line];
  };

  return (
    <div className={`space-y-2 leading-relaxed ${className}`}>
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={`empty-${idx}`} className="h-2" />;
        }

        const isBullet = trimmed.startsWith('- ') || trimmed.startsWith('• ');
        const isNumbered = /^\d+\.\s/.test(trimmed);

        if (isBullet) {
          const content = trimmed.replace(/^[-•]\s*/, '');
          return (
            <div key={`bullet-${idx}-${content.slice(0, 15)}`} className="flex items-start space-x-2 pl-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 flex-shrink-0" />
              <div className="flex-1">{parseInline(content)}</div>
            </div>
          );
        }

        if (isNumbered) {
          const match = trimmed.match(/^(\d+\.)\s*(.*)$/);
          const num = match ? match[1] : '';
          const content = match ? match[2] : trimmed;
          return (
            <div key={`num-${idx}-${num}`} className="flex items-start space-x-2 pl-2">
              <span className="font-bold text-brand-600 dark:text-brand-400 text-xs mt-0.5 flex-shrink-0">
                {num}
              </span>
              <div className="flex-1">{parseInline(content)}</div>
            </div>
          );
        }

        return (
          <p key={`p-${idx}-${trimmed.slice(0, 15)}`}>
            {parseInline(line)}
          </p>
        );
      })}
    </div>
  );
};
