import React, { useState } from 'react';
import { ShadowingExercise } from '../../types/database';
import { Mic, MicOff, Play, Pause, RotateCcw, Volume2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { audioService } from '../../lib/audio';

interface ShadowingTabProps {
  shadowing?: ShadowingExercise[];
  onNext: () => void;
}

export const ShadowingTab: React.FC<ShadowingTabProps> = ({ shadowing, onNext }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedUrl, setRecordedUrl] = useState<string | null>(null);
  const [completedItems, setCompletedItems] = useState<Record<number, boolean>>({});

  if (!shadowing || shadowing.length === 0) {
    return (
      <div className="max-w-3xl mx-auto py-12 text-center text-slate-500">
        Bu dars uchun shadowing mashqi kiritilmagan.
      </div>
    );
  }

  const current = shadowing[currentIndex];

  const handlePlayNative = async (rate: number = 0.85) => {
    if (isPlaying) {
      audioService.stop();
      setIsPlaying(false);
      return;
    }
    setIsPlaying(true);
    await audioService.speak(current.sentenceDe, rate);
    setIsPlaying(false);
  };

  const handleToggleRecord = async () => {
    if (isRecording) {
      const url = await audioService.stopRecording();
      setIsRecording(false);
      if (url) {
        setRecordedUrl(url);
        setCompletedItems({ ...completedItems, [currentIndex]: true });
      }
    } else {
      setRecordedUrl(null);
      const started = await audioService.startRecording();
      if (started) {
        setIsRecording(true);
      }
    }
  };

  const handlePlayMyRecording = () => {
    if (recordedUrl) {
      audioService.playAudioUrl(recordedUrl);
    }
  };

  const nextSentence = () => {
    setRecordedUrl(null);
    setIsRecording(false);
    if (currentIndex + 1 < shadowing.length) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSentence = () => {
    setRecordedUrl(null);
    setIsRecording(false);
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 space-y-6">
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-card text-center">
        {/* Step Indicator */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
            Jumla: {currentIndex + 1} / {shadowing.length}
          </span>
          <div className="flex space-x-1.5">
            {shadowing.map((_, idx) => (
              <span
                key={idx}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentIndex
                    ? 'w-6 bg-brand-600'
                    : completedItems[idx]
                    ? 'bg-emerald-500'
                    : 'bg-slate-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* German Sentence Box */}
        <div className="my-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
            Eshiting va baland ovozda takrorlang:
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
            "{current.sentenceDe}"
          </h2>

          {/* Phonetic Pronunciation Hint */}
          {current.phoneticHint && (
            <p className="text-xs sm:text-sm font-mono text-brand-600 mt-2 bg-brand-50/70 inline-block px-3 py-1 rounded-lg">
              {current.phoneticHint}
            </p>
          )}

          {/* Uzbek Meaning */}
          <p className="text-sm sm:text-base font-medium text-slate-600 mt-4 max-w-lg mx-auto">
            {current.translationUz}
          </p>
        </div>

        {/* Core Audio Controls (Play, Replay, Repeat) */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 my-8">
          {/* 1. Listen / Play */}
          <button
            onClick={() => handlePlayNative(0.85)}
            className={`px-5 py-3 rounded-2xl font-bold text-sm flex items-center space-x-2 transition shadow-sm ${
              isPlaying
                ? 'bg-brand-700 text-white animate-pulse'
                : 'bg-brand-600 hover:bg-brand-700 text-white'
            }`}
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} className="fill-current" />}
            <span>{isPlaying ? 'To‘xtatish' : '▶ Tinglash'}</span>
          </button>

          {/* 2. Replay Normal */}
          <button
            onClick={() => handlePlayNative(1.0)}
            className="px-4 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm flex items-center space-x-1.5 transition"
            title="Oddiy tezlikda qayta eshitish"
          >
            <RotateCcw size={16} />
            <span>🔁 Qayta eshitish</span>
          </button>

          {/* 3. Record / Repeat Button */}
          <button
            onClick={handleToggleRecord}
            className={`px-5 py-3 rounded-2xl font-bold text-sm flex items-center space-x-2 transition shadow-sm ${
              isRecording
                ? 'bg-red-600 text-white animate-pulse ring-4 ring-red-200'
                : 'bg-slate-900 hover:bg-black text-white'
            }`}
          >
            {isRecording ? <MicOff size={18} /> : <Mic size={18} />}
            <span>{isRecording ? 'Ovozni to‘xtatish' : '🎙 Takrorlash (Yozib olish)'}</span>
          </button>
        </div>

        {/* User Recording Playback */}
        {recordedUrl && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 inline-flex items-center space-x-3 mb-6 animate-in fade-in">
            <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-emerald-950">
              Ovozingiz yozildi! O‘z talaffuzingizni tinglab ko‘ring:
            </span>
            <button
              onClick={handlePlayMyRecording}
              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition flex items-center space-x-1"
            >
              <Volume2 size={14} />
              <span>Tinglash</span>
            </button>
          </div>
        )}

        {/* Prev / Next Sentence Navigation */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-100">
          <button
            onClick={prevSentence}
            disabled={currentIndex === 0}
            className="text-xs font-semibold text-slate-500 hover:text-slate-800 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ← Oldingi jumla
          </button>

          {currentIndex + 1 < shadowing.length ? (
            <button
              onClick={nextSentence}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-semibold transition"
            >
              Keyingi jumla →
            </button>
          ) : (
            <button
              onClick={onNext}
              className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold transition inline-flex items-center"
            >
              <span>Yakuniy mashqlarga o‘tish (Practice)</span>
              <ArrowRight size={14} className="ml-1.5" />
            </button>
          )}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={onNext}
          className="inline-flex items-center px-6 py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm transition shadow-sm"
        >
          <span>Yakuniy mashqlarga o‘tish (Practice)</span>
          <ArrowRight size={16} className="ml-2" />
        </button>
      </div>
    </div>
  );
};
