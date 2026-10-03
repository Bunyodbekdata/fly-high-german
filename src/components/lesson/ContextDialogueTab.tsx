import React, { useState, useEffect } from 'react';
import { ContextDialogue } from '../../types/database';
import { MessageSquare, Volume2, ArrowRight, Lightbulb, Play, Pause } from 'lucide-react';
import { AudioButton } from '../common/AudioButton';
import { audioService } from '../../lib/audio';

interface ContextDialogueTabProps {
  dialogue?: ContextDialogue;
  onNext: () => void;
}

export const ContextDialogueTab: React.FC<ContextDialogueTabProps> = ({ dialogue, onNext }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return () => {
      audioService.stop();
    };
  }, []);

  if (!dialogue) {
    return (
      <div className="max-w-3xl mx-auto py-12 text-center text-slate-500">
        Ushbu darsda muloqot matni kiritilmagan.
      </div>
    );
  }

  const handlePlayFullDialogue = async () => {
    if (isPlaying) {
      audioService.stop();
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);
    // Speak only the natural German lines, not the speaker name prefixes
    const fullText = dialogue.lines.map(l => l.textDe).join('. ');
    await audioService.speak(fullText, 0.88);
    setIsPlaying(false);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-6">
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-card">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 mb-2">
              <MessageSquare size={14} />
              <span>2-Qadam: Jonli Nemischa Muloqot (Dialog im Kontext)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {dialogue.titleDe}
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-brand-600 mt-0.5">
              {dialogue.titleUz}
            </p>
          </div>

          <button
            onClick={handlePlayFullDialogue}
            className={`px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center space-x-2 shadow-sm transition flex-shrink-0 ${
              isPlaying
                ? 'bg-amber-600 hover:bg-amber-700 text-white animate-pulse'
                : 'bg-brand-600 hover:bg-brand-700 text-white'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause size={16} className="fill-current" />
                <span>To‘xtatish</span>
              </>
            ) : (
              <>
                <Play size={16} className="fill-current" />
                <span>Dialogni to‘liq eshitish</span>
              </>
            )}
          </button>
        </div>

        {/* Situation explanation */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <span className="font-bold text-slate-900 block mb-1">Muloqot vaziyati:</span>
          {dialogue.situationUz}
        </div>

        {/* Line by line dialogue */}
        <div className="space-y-3 pt-2">
          {dialogue.lines.map((line, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-slate-50 hover:border-brand-200 transition flex items-start justify-between gap-3"
            >
              <div>
                <span className="text-xs font-bold text-brand-700 uppercase tracking-wider block">
                  {line.speaker}:
                </span>
                <p className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 font-serif">
                  "{line.textDe}"
                </p>
                <p className="text-xs text-slate-500 mt-1 italic">
                  {line.textUz}
                </p>
              </div>
              <AudioButton text={line.textDe} size="sm" />
            </div>
          ))}
        </div>

        {/* Useful phrases extracted from this dialogue */}
        {dialogue.usefulPhrases && dialogue.usefulPhrases.length > 0 && (
          <div className="mt-8 pt-6 border-t border-slate-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center">
              <Lightbulb size={16} className="text-amber-500 mr-1.5" />
              Muhim iboralar va ma‘nolari:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {dialogue.usefulPhrases.map((phrase, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-amber-50/60 border border-amber-200 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-amber-950 text-sm">{phrase.german}</span>
                    <AudioButton text={phrase.german} size="sm" />
                  </div>
                  <span className="text-slate-600 block mt-0.5">{phrase.uzbek}</span>
                  {phrase.noteUz && (
                    <span className="text-[11px] text-amber-800 font-medium block mt-1">
                      💡 {phrase.noteUz}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Cultural note if present */}
        {dialogue.culturalNoteUz && (
          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 text-xs text-blue-950 leading-relaxed">
            <span className="font-bold block mb-0.5">🇩🇪 Nemis madaniyati va muloqot odobi:</span>
            {dialogue.culturalNoteUz}
          </div>
        )}

        {/* Navigation */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={onNext}
            className="inline-flex items-center px-6 py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm transition shadow-sm"
          >
            <span>Dars lug‘atiga o‘tish (Vocabulary)</span>
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};
