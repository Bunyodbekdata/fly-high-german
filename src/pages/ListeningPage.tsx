import React, { useState } from 'react';
import { storageService } from '../lib/storage';
import { Headphones, Play, Pause, Eye, EyeOff, CheckCircle2, XCircle } from 'lucide-react';
import { AudioButton } from '../components/common/AudioButton';
import { LevelBadge } from '../components/common/Badge';
import { audioService } from '../lib/audio';

export const ListeningPage: React.FC = () => {
  const lessons = storageService.getLessons();
  const allListening = lessons.flatMap(l => 
    (l.listening || []).map(lis => ({ ...lis, levelCode: l.levelCode, lessonTitle: l.titleDe }))
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlayingFull, setIsPlayingFull] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [checked, setChecked] = useState(false);

  const current = allListening[selectedIndex] || allListening[0];

  const handlePlayFullAudio = async () => {
    if (isPlayingFull) {
      audioService.stop();
      setIsPlayingFull(false);
      return;
    }
    setIsPlayingFull(true);
    await audioService.speak(current.transcriptDe, 0.9);
    setIsPlayingFull(false);
  };

  const handleSelectOption = (qId: string, optIdx: number) => {
    if (checked) return;
    setAnswers({ ...answers, [qId]: optIdx });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div>
        <span className="text-xs font-bold text-brand-600 uppercase tracking-widest block mb-1">
          Tinglab Tushunish (Hörverstehen)
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Nemis tili audio muloqotlar kutubxonasi
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Kundalik vaziyatlardagi tabiiy nemischa suhbatlarni tinglang va tushunish savollariga javob bering.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: Listening Sessions List */}
        <div className="lg:col-span-4 space-y-2.5 max-h-[75vh] overflow-y-auto pr-1">
          {allListening.map((item, idx) => {
            const isSelected = selectedIndex === idx;

            return (
              <div
                key={item.id}
                onClick={() => {
                  setSelectedIndex(idx);
                  setChecked(false);
                  setAnswers({});
                  setShowTranscript(false);
                  setShowTranslation(false);
                }}
                className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-brand-50/80 border-brand-500 ring-2 ring-brand-500/20 shadow-sm'
                    : 'bg-white border-slate-200 hover:border-brand-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <LevelBadge code={item.levelCode} />
                  <span className="text-[11px] text-slate-400">{item.lessonTitle}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">
                  {item.titleDe}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  {item.titleUz}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Side: Listening Player & Test Area */}
        <div className="lg:col-span-8">
          {current && (
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-card space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-600">
                    <Headphones size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {current.titleDe}
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold text-brand-600">
                      {current.titleUz}
                    </p>
                  </div>
                </div>
                <LevelBadge code={current.levelCode} />
              </div>

              {/* Big Audio Player Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-brand-600 to-blue-700 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-blue-200 font-bold block mb-1">
                    Audioni tinglash
                  </span>
                  <p className="text-sm font-medium opacity-90">
                    Ovozni diqqat bilan eshiting va savollarni yeching.
                  </p>
                </div>

                <button
                  onClick={handlePlayFullAudio}
                  className="px-6 py-3 rounded-2xl bg-white text-brand-700 hover:bg-blue-50 font-bold text-sm flex items-center space-x-2 transition shadow-lg flex-shrink-0"
                >
                  {isPlayingFull ? <Pause size={18} /> : <Play size={18} className="fill-current" />}
                  <span>{isPlayingFull ? 'To‘xtatish' : 'Audioni tinglash'}</span>
                </button>
              </div>

              {/* Dialogue breakdown */}
              {current.dialogue && current.dialogue.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Dialog qismlari:
                  </h4>
                  {current.dialogue.map((line: any, idx: number) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start justify-between gap-3"
                    >
                      <div>
                        <span className="text-xs font-bold text-brand-700 uppercase tracking-wider block">
                          {line.speaker}:
                        </span>
                        <p className="text-sm font-semibold text-slate-900 mt-0.5">
                          {line.textDe}
                        </p>
                        {showTranslation && (
                          <p className="text-xs text-slate-500 mt-1 italic">
                            {line.textUz}
                          </p>
                        )}
                      </div>
                      <AudioButton text={line.textDe} size="sm" />
                    </div>
                  ))}
                </div>
              )}

              {/* Transcript Toggle Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-100">
                <button
                  onClick={() => setShowTranscript(!showTranscript)}
                  className="inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition"
                >
                  {showTranscript ? <EyeOff size={14} className="mr-1.5" /> : <Eye size={14} className="mr-1.5" />}
                  {showTranscript ? 'Nemischa matnni yashirish' : 'Nemischa matnni ko‘rish'}
                </button>
                <button
                  onClick={() => setShowTranslation(!showTranslation)}
                  className="inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition"
                >
                  {showTranslation ? <EyeOff size={14} className="mr-1.5" /> : <Eye size={14} className="mr-1.5" />}
                  {showTranslation ? 'O‘zbekcha tarjimani yashirish' : 'O‘zbekcha tarjimani ko‘rish'}
                </button>
              </div>

              {showTranscript && (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm whitespace-pre-line text-slate-800">
                  {current.transcriptDe}
                </div>
              )}

              {showTranslation && !current.dialogue && (
                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-sm whitespace-pre-line text-amber-950">
                  {current.translationUz}
                </div>
              )}

              {/* Questions */}
              {current.questions && current.questions.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base">
                    Tushunish savollari:
                  </h3>
                  {current.questions.map((q: any, qIdx: number) => (
                    <div key={q.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <p className="text-sm font-semibold text-slate-900 mb-3">
                        {qIdx + 1}. {q.questionUz}
                      </p>
                      <div className="space-y-2">
                        {q.options.map((opt: string, optIdx: number) => {
                          const isSelected = answers[q.id] === optIdx;
                          let optStyle = 'border-slate-200 bg-white hover:border-brand-300';
                          if (isSelected) optStyle = 'border-brand-500 bg-brand-50 text-brand-950 ring-2 ring-brand-500/20';
                          if (checked) {
                            if (optIdx === q.correctIndex) optStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold';
                            else if (isSelected) optStyle = 'border-red-400 bg-red-50 text-red-950';
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectOption(q.id, optIdx)}
                              disabled={checked}
                              className={`w-full p-2.5 rounded-xl border text-left text-xs sm:text-sm font-medium flex items-center justify-between transition ${optStyle}`}
                            >
                              <span>{opt}</span>
                              {checked && optIdx === q.correctIndex && <CheckCircle2 size={16} className="text-emerald-600" />}
                              {checked && isSelected && optIdx !== q.correctIndex && <XCircle size={16} className="text-red-500" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}

                  <div className="flex justify-end pt-2">
                    <button
                      onClick={() => setChecked(true)}
                      disabled={checked || Object.keys(answers).length === 0}
                      className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm transition shadow-sm disabled:opacity-50"
                    >
                      Tekshirish
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
