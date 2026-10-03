import React, { useState } from 'react';
import { ThreeStageListening, ListeningExercise } from '../../types/database';
import { AudioButton } from '../common/AudioButton';
import { Headphones, CheckCircle2, XCircle, ArrowRight, Play, Pause, ListFilter, FileText, Sparkles, HelpCircle } from 'lucide-react';
import { audioService } from '../../lib/audio';

interface ListeningTabProps {
  listening3Stage?: ThreeStageListening;
  listening?: ListeningExercise[];
  onNext: () => void;
}

export const ListeningTab: React.FC<ListeningTabProps> = ({ listening3Stage, listening, onNext }) => {
  const [currentStage, setCurrentStage] = useState<1 | 2 | 3>(1);
  const [playbackSpeed, setPlaybackSpeed] = useState<0.85 | 1.0>(0.85);
  const [isPlayingFull, setIsPlayingFull] = useState(false);

  // Stage 1 State
  const [stage1Selected, setStage1Selected] = useState<number | null>(null);
  const [stage1Checked, setStage1Checked] = useState(false);

  // Stage 2 State
  const [stage2Answers, setStage2Answers] = useState<Record<string, number>>({});
  const [stage2Checked, setStage2Checked] = useState(false);

  // Legacy fallback state
  const [legacyAnswers, setLegacyAnswers] = useState<Record<string, number>>({});
  const [legacyChecked, setLegacyChecked] = useState(false);
  const [showLegacyTranscript, setShowLegacyTranscript] = useState(false);
  const [showLegacyTranslation, setShowLegacyTranslation] = useState(false);

  const active3Stage = listening3Stage;
  const legacyExercise = (!active3Stage && listening && listening.length > 0) ? listening[0] : null;

  if (!active3Stage && !legacyExercise) {
    return (
      <div className="max-w-3xl mx-auto py-12 text-center text-slate-500">
        Bu dars uchun tinglash mashqi kiritilmagan.
      </div>
    );
  }

  const handlePlayFullAudio = async (text: string) => {
    if (isPlayingFull) {
      audioService.stop();
      setIsPlayingFull(false);
      return;
    }

    setIsPlayingFull(true);
    await audioService.speak(text, playbackSpeed);
    setIsPlayingFull(false);
  };

  // If using the 3-Stage Listening Methodology
  if (active3Stage) {
    const isStage1Correct = stage1Selected === active3Stage.stage1Global.correctIndex;
    const allStage2Answered = active3Stage.stage2Detail.questions.every(q => stage2Answers[q.id] !== undefined);

    return (
      <div className="max-w-4xl mx-auto py-8 px-4 space-y-6">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-card">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 mb-2">
                <Headphones size={14} />
                <span>3-Bosqichli Tinglash Tizimi (3-Stufen-Hörverstehen)</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                {active3Stage.titleDe}
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-brand-600 mt-0.5">
                {active3Stage.titleUz}
              </p>
            </div>

            {/* Audio speed controls */}
            <div className="flex items-center space-x-2 bg-slate-100 p-1.5 rounded-2xl">
              <span className="text-xs font-semibold text-slate-500 px-2">Tezlik:</span>
              <button
                onClick={() => setPlaybackSpeed(0.85)}
                className={`text-xs px-3 py-1 rounded-xl font-bold transition ${
                  playbackSpeed === 0.85 ? 'bg-white text-brand-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                0.85x (Sekinroq)
              </button>
              <button
                onClick={() => setPlaybackSpeed(1.0)}
                className={`text-xs px-3 py-1 rounded-xl font-bold transition ${
                  playbackSpeed === 1.0 ? 'bg-white text-brand-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                1.0x (Oddiy)
              </button>
            </div>
          </div>

          {/* Situation Box */}
          <div className="mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700">
            <span className="font-bold text-slate-900 block mb-0.5">Audiovaziyat:</span>
            {active3Stage.situationUz}
          </div>

          {/* Central Audio Play Banner */}
          <div className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-brand-600 to-indigo-700 text-white shadow-md">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-blue-200 font-bold block mb-1">
                  Nemischa audio muloqot
                </span>
                <p className="text-sm sm:text-base font-medium opacity-90">
                  {currentStage === 1 && "1-Bosqich: Umumiy ma'noni tushunish uchun to'liq eshiting."}
                  {currentStage === 2 && "2-Bosqich: Aniq ma'lumotlar va faktlarni ilg'ash uchun qayta eshiting."}
                  {currentStage === 3 && "3-Bosqich: Transkript va so'zma-so'z tahlil orqali mustahkamlang."}
                </p>
              </div>

              <button
                onClick={() => handlePlayFullAudio(active3Stage.audioTranscriptDe)}
                className="px-6 py-3 rounded-2xl bg-white text-brand-700 hover:bg-blue-50 font-bold text-sm flex items-center space-x-2 transition shadow-lg flex-shrink-0"
              >
                {isPlayingFull ? (
                  <>
                    <Pause size={18} />
                    <span>To‘xtatish</span>
                  </>
                ) : (
                  <>
                    <Play size={18} className="fill-current" />
                    <span>Audioni tinglash ({playbackSpeed}x)</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Stage Progress Tabs Navigation */}
          <div className="mt-8 flex items-center gap-2 border-b border-slate-200 pb-4 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setCurrentStage(1)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition ${
                currentStage === 1
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Sparkles size={15} />
              <span>1. Umumiy ma‘no (Global)</span>
              {stage1Checked && isStage1Correct && <CheckCircle2 size={14} className="text-white ml-1" />}
            </button>

            <button
              onClick={() => setCurrentStage(2)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition ${
                currentStage === 2
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <ListFilter size={15} />
              <span>2. Aniq faktlar (Selektiv)</span>
              {stage2Checked && <CheckCircle2 size={14} className="text-emerald-500 ml-1" />}
            </button>

            <button
              onClick={() => setCurrentStage(3)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition ${
                currentStage === 3
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <FileText size={15} />
              <span>3. Transkript & Lug‘at</span>
            </button>
          </div>

          {/* STAGE 1: Global Comprehension */}
          {currentStage === 1 && (
            <div className="mt-6 space-y-6 animate-in fade-in duration-300">
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm text-amber-950 flex items-start space-x-3">
                <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block mb-1">Metodik ko‘rsatma:</span>
                  <p className="leading-relaxed">{active3Stage.stage1Global.instructionUz}</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="font-bold text-slate-900 text-sm sm:text-base mb-4">
                  ❓ {active3Stage.stage1Global.questionUz}
                </p>

                <div className="space-y-2.5">
                  {active3Stage.stage1Global.options.map((opt, optIdx) => {
                    const isSelected = stage1Selected === optIdx;
                    let style = 'bg-white border-slate-200 text-slate-800 hover:border-brand-300';

                    if (isSelected) {
                      style = 'border-brand-500 bg-brand-50 ring-2 ring-brand-500/20 text-brand-950 font-semibold';
                    }

                    if (stage1Checked) {
                      if (optIdx === active3Stage.stage1Global.correctIndex) {
                        style = 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/20 font-bold';
                      } else if (isSelected) {
                        style = 'border-red-400 bg-red-50 text-red-950';
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => {
                          if (!stage1Checked) setStage1Selected(optIdx);
                        }}
                        disabled={stage1Checked}
                        className={`w-full p-3.5 rounded-xl border text-left text-sm flex items-center justify-between transition ${style}`}
                      >
                        <span>{opt}</span>
                        {stage1Checked && optIdx === active3Stage.stage1Global.correctIndex && (
                          <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
                        )}
                        {stage1Checked && isSelected && optIdx !== active3Stage.stage1Global.correctIndex && (
                          <XCircle size={18} className="text-red-500 flex-shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {stage1Checked && (
                  <div className={`mt-4 p-4 rounded-xl text-xs sm:text-sm ${
                    isStage1Correct ? 'bg-emerald-50 text-emerald-900 border border-emerald-200' : 'bg-amber-50 text-amber-900 border border-amber-200'
                  }`}>
                    <span className="font-bold block mb-1">
                      {isStage1Correct ? '✅ To‘g‘ri!' : '💡 Izoh va tushuntirish:'}
                    </span>
                    <p>{active3Stage.stage1Global.explanationUz}</p>
                  </div>
                )}

                <div className="mt-6 flex justify-between items-center">
                  {!stage1Checked ? (
                    <button
                      onClick={() => setStage1Checked(true)}
                      disabled={stage1Selected === null}
                      className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm transition disabled:opacity-40"
                    >
                      Javobni tekshirish
                    </button>
                  ) : (
                    <button
                      onClick={() => setCurrentStage(2)}
                      className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white font-bold text-sm inline-flex items-center transition"
                    >
                      <span>2-Bosqichga o‘tish (Aniq faktlar)</span>
                      <ArrowRight size={16} className="ml-2" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* STAGE 2: Selective Comprehension */}
          {currentStage === 2 && (
            <div className="mt-6 space-y-6 animate-in fade-in duration-300">
              <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200 text-xs sm:text-sm text-blue-950 flex items-start space-x-3">
                <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block mb-1">2-Bosqich ko‘rsatmasi:</span>
                  <p className="leading-relaxed">{active3Stage.stage2Detail.instructionUz}</p>
                </div>
              </div>

              <div className="space-y-6">
                {active3Stage.stage2Detail.questions.map((q, idx) => (
                  <div key={q.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    <p className="font-bold text-slate-900 text-sm sm:text-base mb-3">
                      {idx + 1}. {q.questionUz}
                    </p>

                    <div className="space-y-2">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = stage2Answers[q.id] === optIdx;
                        let style = 'bg-white border-slate-200 text-slate-800 hover:border-brand-300';

                        if (isSelected) {
                          style = 'border-brand-500 bg-brand-50 ring-2 ring-brand-500/20 text-brand-950 font-semibold';
                        }

                        if (stage2Checked) {
                          if (optIdx === q.correctIndex) {
                            style = 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/20 font-bold';
                          } else if (isSelected) {
                            style = 'border-red-400 bg-red-50 text-red-950';
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => {
                              if (!stage2Checked) {
                                setStage2Answers(prev => ({ ...prev, [q.id]: optIdx }));
                              }
                            }}
                            disabled={stage2Checked}
                            className={`w-full p-3 rounded-xl border text-left text-sm flex items-center justify-between transition ${style}`}
                          >
                            <span>{opt}</span>
                            {stage2Checked && optIdx === q.correctIndex && (
                              <CheckCircle2 size={18} className="text-emerald-600" />
                            )}
                            {stage2Checked && isSelected && optIdx !== q.correctIndex && (
                              <XCircle size={18} className="text-red-500" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {stage2Checked && (
                      <p className="mt-3 text-xs text-slate-600 italic bg-white p-3 rounded-xl border border-slate-100">
                        💡 <span className="font-semibold">Izoh:</span> {q.explanationUz}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center pt-2">
                {!stage2Checked ? (
                  <button
                    onClick={() => setStage2Checked(true)}
                    disabled={!allStage2Answered}
                    className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm transition disabled:opacity-40"
                  >
                    Barcha javoblarni tekshirish
                  </button>
                ) : (
                  <button
                    onClick={() => setCurrentStage(3)}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white font-bold text-sm inline-flex items-center transition"
                  >
                    <span>3-Bosqich: Transkript va so‘zlarni ko‘rish</span>
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* STAGE 3: Detailed Transcript & Vocabulary */}
          {currentStage === 3 && (
            <div className="mt-6 space-y-8 animate-in fade-in duration-300">
              <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-xs sm:text-sm text-emerald-950">
                <span className="font-bold block mb-1">3-Bosqich: To‘liq matn va talaffuz tahlili</span>
                <p>
                  Endi audiodagi har bir jumlani eshiting, nemischa talaffuziga diqqat qiling va yangi so‘zlarni qayd eting.
                </p>
              </div>

              {/* Line by line dialogue with audio */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Matn jumlama-jumla tahlili:
                </h4>
                {active3Stage.stage3Transcript.dialogue.map((line, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start justify-between gap-3"
                  >
                    <div>
                      <span className="text-xs font-bold text-brand-700 uppercase tracking-wider block">
                        {line.speaker}:
                      </span>
                      <p className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                        {line.textDe}
                      </p>
                      <p className="text-xs text-slate-500 mt-1 italic">
                        {line.textUz}
                      </p>
                    </div>
                    <AudioButton text={line.textDe} size="sm" />
                  </div>
                ))}
              </div>

              {/* Key Vocabulary Table */}
              {active3Stage.stage3Transcript.keyVocabulary.length > 0 && (
                <div className="pt-4 border-t border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Ushbu audiodan muhim so‘zlar:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {active3Stage.stage3Transcript.keyVocabulary.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs sm:text-sm"
                      >
                        <div>
                          <span className="font-bold text-slate-900 block">{item.german}</span>
                          <span className="text-slate-500 text-xs">{item.uzbek}</span>
                        </div>
                        <AudioButton text={item.german} size="sm" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Final button to proceed to reading */}
              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={onNext}
                  className="px-6 py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm transition inline-flex items-center shadow-sm"
                >
                  <span>Keyingi: O‘qish bo‘limiga o‘tish (Reading)</span>
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Legacy fallback if no 3-stage listening is available
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-8">
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-card">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600">
            <Headphones size={24} />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {legacyExercise?.titleDe}
            </h2>
            <p className="text-sm font-semibold text-brand-600">
              {legacyExercise?.titleUz}
            </p>
          </div>
        </div>

        {/* Player Box */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-brand-600 to-blue-700 text-white mb-8 shadow-md">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-blue-200 font-bold block mb-1">
                Nemischa audio muloqot
              </span>
              <p className="text-sm sm:text-base font-medium opacity-90">
                Audioni diqqat bilan tinglang va quyidagi tushunish savollariga javob bering.
              </p>
            </div>

            <button
              onClick={() => handlePlayFullAudio(legacyExercise?.transcriptDe || '')}
              className="px-6 py-3 rounded-2xl bg-white text-brand-700 hover:bg-blue-50 font-bold text-sm flex items-center space-x-2 transition shadow-lg flex-shrink-0"
            >
              {isPlayingFull ? (
                <>
                  <Pause size={18} />
                  <span>To‘xtatish</span>
                </>
              ) : (
                <>
                  <Play size={18} className="fill-current" />
                  <span>To‘liq tinglash</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Questions */}
        {legacyExercise?.questions && legacyExercise.questions.length > 0 && (
          <div className="space-y-6 pt-6 border-t border-slate-200">
            <h3 className="text-base font-bold text-slate-900">
              Tinglab tushunish savollari:
            </h3>

            {legacyExercise.questions.map((q, qIdx) => (
              <div key={q.id} className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80">
                <p className="font-semibold text-slate-900 text-sm mb-3">
                  {qIdx + 1}. {q.questionUz}
                </p>

                <div className="space-y-2">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = legacyAnswers[q.id] === optIdx;
                    let optStyle = 'border-slate-200 bg-white hover:border-brand-300';

                    if (isSelected) {
                      optStyle = 'border-brand-500 bg-brand-50 ring-2 ring-brand-500/20 text-brand-950';
                    }
                    if (legacyChecked) {
                      if (optIdx === q.correctIndex) {
                        optStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/20 font-bold';
                      } else if (isSelected) {
                        optStyle = 'border-red-400 bg-red-50 text-red-950';
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => {
                          if (!legacyChecked) {
                            setLegacyAnswers({ ...legacyAnswers, [q.id]: optIdx });
                          }
                        }}
                        disabled={legacyChecked}
                        className={`w-full p-3 rounded-xl border text-left text-sm font-medium flex items-center justify-between transition ${optStyle}`}
                      >
                        <span>{opt}</span>
                        {legacyChecked && optIdx === q.correctIndex && (
                          <CheckCircle2 size={18} className="text-emerald-600" />
                        )}
                        {legacyChecked && isSelected && optIdx !== q.correctIndex && (
                          <XCircle size={18} className="text-red-500" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            <div className="flex justify-end pt-2">
              {!legacyChecked ? (
                <button
                  onClick={() => setLegacyChecked(true)}
                  disabled={Object.keys(legacyAnswers).length === 0}
                  className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm transition shadow-sm disabled:opacity-50"
                >
                  Javoblarni tekshirish
                </button>
              ) : (
                <button
                  onClick={onNext}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white font-semibold text-sm transition shadow-sm inline-flex items-center"
                >
                  <span>O‘qish bo‘limiga o‘tish (Reading)</span>
                  <ArrowRight size={16} className="ml-1.5" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
