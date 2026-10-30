import React, { useState, useEffect } from 'react';
import { storageService } from '../lib/storage';
import { 
  Headphones, 
  Play, 
  Pause, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  XCircle, 
  Volume2, 
  Sparkles, 
  RotateCcw,
  Gauge
} from 'lucide-react';
import { AudioButton } from '../components/common/AudioButton';
import { LevelBadge } from '../components/common/Badge';
import { SoundWaveVisualizer } from '../components/common/SoundWaveVisualizer';
import { audioService } from '../lib/audio';
import { ListeningExercise, CEFRLevelCode } from '../types/database';

export const ListeningPage: React.FC = () => {
  const lessons = storageService.getLessons();
  const levels = storageService.getLevels();

  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlayingFull, setIsPlayingFull] = useState(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);
  const [showTranscript, setShowTranscript] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [checked, setChecked] = useState(false);

  // Extract from both 3-stage coursebook lessons (A1.1, A1.2) and standard lessons (A2, B1)
  const allListening = React.useMemo(() => {
    const list: Array<ListeningExercise & { levelCode: CEFRLevelCode; lessonTitle: string }> = [];

    lessons.forEach(l => {
      // 1. If 3-stage listening is present (A1.1 and A1.2)
      if (l.listening3Stage) {
        const stage1Q = {
          id: `q-s1-${l.id}`,
          questionUz: l.listening3Stage.stage1Global.questionUz,
          options: l.listening3Stage.stage1Global.options,
          correctIndex: l.listening3Stage.stage1Global.correctIndex,
          explanationUz: l.listening3Stage.stage1Global.explanationUz || 'To‘g‘ri javob audio muloqotga asoslangan.',
        };
        const stage2Qs = (l.listening3Stage.stage2Detail?.questions || []).map(q => ({
          id: q.id || `q-s2-${l.id}`,
          questionUz: q.questionUz,
          options: q.options,
          correctIndex: q.correctIndex,
          explanationUz: q.explanationUz || 'To‘g‘ri javob audio muloqotga asoslangan.',
        }));

        list.push({
          id: `lis-3stage-${l.id}`,
          lessonId: l.id,
          titleDe: l.listening3Stage.titleDe || l.titleDe,
          titleUz: l.listening3Stage.titleUz || l.titleUz,
          transcriptDe: l.listening3Stage.audioTranscriptDe,
          translationUz: l.listening3Stage.translationUz || l.listening3Stage.situationUz,
          questions: [stage1Q, ...stage2Qs],
          levelCode: l.levelCode,
          lessonTitle: l.titleDe,
        });
      }

      // 2. If legacy/standard listening array is present (A2, B1)
      if (Array.isArray(l.listening) && l.listening.length > 0) {
        l.listening.forEach(lis => {
          list.push({
            ...lis,
            levelCode: l.levelCode,
            lessonTitle: l.titleDe,
          });
        });
      }
    });

    return list;
  }, [lessons]);

  const filteredListening = React.useMemo(() => {
    if (selectedLevel === 'all') return allListening;
    return allListening.filter(item => item.levelCode === selectedLevel);
  }, [allListening, selectedLevel]);

  const current = filteredListening[selectedIndex] || filteredListening[0];

  useEffect(() => {
    // Listen to audioService status
    const unsubscribe = audioService.onStateChange((speaking) => {
      setIsPlayingFull(speaking);
    });
    return () => {
      audioService.stop();
      unsubscribe();
    };
  }, []);

  const handlePlayFullAudio = async () => {
    if (isPlayingFull) {
      audioService.stop();
      setIsPlayingFull(false);
      return;
    }
    setIsPlayingFull(true);
    await audioService.speak(current.transcriptDe, playbackRate);
    setIsPlayingFull(false);
  };

  const handleSpeedChange = (speed: number) => {
    setPlaybackRate(speed);
    if (isPlayingFull) {
      // Re-trigger audio with the newly selected speed
      audioService.stop();
      audioService.speak(current.transcriptDe, speed);
    }
  };

  const handleSelectOption = (qId: string, optIdx: number) => {
    if (checked) return;
    setAnswers({ ...answers, [qId]: optIdx });
  };

  const handleResetQuiz = () => {
    setChecked(false);
    setAnswers({});
  };

  // Calculate score if checked
  const correctCount = checked && current?.questions 
    ? current.questions.filter((q: { id: string; correctIndex: number }) => answers[q.id] === q.correctIndex).length 
    : 0;
  const totalQuestions = current?.questions?.length || 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 transition-colors duration-200">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/70 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-xs font-bold mb-2">
          <Headphones size={14} className="text-brand-500" />
          <span>Hörverstehen • Tinglab Tushunish</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
          Nemis tili audio muloqotlar kutubxonasi
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-3xl">
          Kundalik hayotiy vaziyatlardagi tabiiy nemischa suhbatlarni tinglang, so‘zlashuv sur’atini boshqaring va tushunish savollariga javob bering.
        </p>
      </div>

      {/* Filter by Level */}
      <div className="flex items-center space-x-1.5 overflow-x-auto pb-1">
        <button
          onClick={() => {
            setSelectedLevel('all');
            setSelectedIndex(0);
          }}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex-shrink-0 ${
            selectedLevel === 'all'
              ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          Barchasi ({allListening.length})
        </button>
        {levels.map((lvl) => {
          const count = allListening.filter(item => item.levelCode === lvl.code).length;
          return (
            <button
              key={lvl.code}
              onClick={() => {
                setSelectedLevel(lvl.code);
                setSelectedIndex(0);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex-shrink-0 ${
                selectedLevel === lvl.code
                  ? 'bg-brand-600 text-white shadow-2xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {lvl.code.toUpperCase()} ({count})
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: Listening Sessions List */}
        <div className="lg:col-span-4 space-y-2.5 max-h-[75vh] overflow-y-auto pr-1">
          <div className="px-1 pb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Audio mashg‘ulotlar ({filteredListening.length})
            </span>
          </div>

          {filteredListening.length === 0 ? (
            <div className="p-8 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 text-xs">
              Ushbu bosqich uchun audio dialoglar topilmadi.
            </div>
          ) : (
            filteredListening.map((item, idx) => {
              const isSelected = selectedIndex === idx;

            return (
              <div
                key={item.id}
                onClick={() => {
                  if (isSelected) return;
                  audioService.stop();
                  setIsPlayingFull(false);
                  setSelectedIndex(idx);
                  setChecked(false);
                  setAnswers({});
                  setShowTranscript(false);
                  setShowTranslation(false);
                }}
                className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-brand-50/80 dark:bg-brand-950/50 border-brand-500 ring-2 ring-brand-500/20 shadow-card'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-brand-200 dark:hover:border-brand-800 hover:bg-slate-50 dark:hover:bg-slate-850'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <LevelBadge code={item.levelCode} />
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 truncate max-w-[150px]">{item.lessonTitle}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center justify-between">
                  <span>{item.titleDe}</span>
                  {isSelected && <Volume2 size={16} className="text-brand-600 dark:text-brand-400 animate-pulse flex-shrink-0" />}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {item.titleUz}
                </p>
              </div>
            );
          })
          )}
        </div>

        {/* Right Side: Listening Player & Test Area */}
        <div className="lg:col-span-8">
          {current && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-card space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-950/60 border border-brand-100 dark:border-brand-800 flex items-center justify-center text-brand-600 dark:text-brand-400 shadow-xs">
                    <Headphones size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
                      {current.titleDe}
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold text-brand-600 dark:text-brand-400">
                      {current.titleUz}
                    </p>
                  </div>
                </div>
                <LevelBadge code={current.levelCode} />
              </div>

              {/* Modern Audio Player Surface */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-brand-950 text-white p-6 sm:p-7 border border-slate-800 shadow-xl">
                {/* Glow accent */}
                <div className="absolute -right-16 -top-16 w-56 h-56 bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  {/* Left Controls & Info */}
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={handlePlayFullAudio}
                      aria-label={isPlayingFull ? 'Audioni to‘xtatish' : 'Audioni tinglash'}
                      className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 active:scale-95 shadow-lg flex-shrink-0 ${
                        isPlayingFull
                          ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 ring-4 ring-amber-500/20'
                          : 'bg-brand-500 hover:bg-brand-400 text-white ring-4 ring-brand-500/25'
                      }`}
                    >
                      {isPlayingFull ? (
                        <Pause size={24} className="fill-current" />
                      ) : (
                        <Play size={24} className="fill-current ml-1" />
                      )}
                    </button>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`w-2 h-2 rounded-full ${isPlayingFull ? 'bg-emerald-400 animate-ping' : 'bg-slate-500'}`} />
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                          {isPlayingFull ? 'Ijro etilmoqda' : 'Tinglashga tayyor'}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                        {isPlayingFull ? 'Tabiiy nemischa talaffuz' : 'Audioni to‘liq tinglang'}
                      </h3>
                      <div className="mt-1 flex items-center gap-2">
                        <SoundWaveVisualizer isPlaying={isPlayingFull} bars={8} size="md" color="bg-brand-400" />
                        <span className="text-xs text-slate-400 font-medium">
                          {isPlayingFull ? 'Suhbat davom etmoqda...' : 'Bosqichma-bosqich o‘rganing'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Speed Selector */}
                  <div className="flex flex-col sm:items-end gap-2 bg-white/5 backdrop-blur-md p-3 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                      <Gauge size={14} className="text-brand-400" />
                      <span>Ovoz tezligi:</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {[
                        { label: '0.75x', value: 0.75, desc: 'Sekin' },
                        { label: '1.0x', value: 1.0, desc: 'Oddiy' },
                        { label: '1.25x', value: 1.25, desc: 'Tez' },
                      ].map((rate) => {
                        const isCurrent = playbackRate === rate.value;
                        return (
                          <button
                            key={rate.label}
                            onClick={() => handleSpeedChange(rate.value)}
                            title={rate.desc}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                              isCurrent
                                ? 'bg-brand-500 text-white shadow-sm ring-2 ring-brand-400/40'
                                : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
                            }`}
                          >
                            {rate.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Dialogue breakdown */}
              {current.dialogue && current.dialogue.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Dialog qismlari ({current.dialogue.length} ta jumlalar)
                    </h4>
                    <span className="text-[11px] text-slate-400">
                      Har bir jumlani alohida tinglashingiz mumkin
                    </span>
                  </div>

                  {current.dialogue.map((line: { speaker: string; textDe: string; textUz: string }, idx: number) => {
                    const isEven = idx % 2 === 0;
                    return (
                      <div
                        key={`${line.speaker}-${idx}`}
                        className={`p-4 rounded-2xl border transition-all ${
                          isEven
                            ? 'bg-slate-50/80 dark:bg-slate-800/60 border-slate-200/80 dark:border-slate-700/80'
                            : 'bg-brand-50/30 dark:bg-brand-950/20 border-brand-100 dark:border-brand-900/50'
                        } flex items-start justify-between gap-3`}
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${
                              isEven 
                                ? 'bg-brand-100 dark:bg-brand-900/80 text-brand-700 dark:text-brand-300'
                                : 'bg-amber-100 dark:bg-amber-900/80 text-amber-800 dark:text-amber-300'
                            }`}>
                              {line.speaker.charAt(0)}
                            </span>
                            <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                              {line.speaker}
                            </span>
                          </div>
                          <p className="text-sm font-semibold text-slate-900 dark:text-white pl-7">
                            {line.textDe}
                          </p>
                          {showTranslation && (
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 pl-7 italic">
                              {line.textUz}
                            </p>
                          )}
                        </div>
                        <AudioButton text={line.textDe} size="sm" />
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Transcript Toggle Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => setShowTranscript(!showTranscript)}
                  className="inline-flex items-center text-xs font-semibold px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
                >
                  {showTranscript ? <EyeOff size={14} className="mr-1.5" /> : <Eye size={14} className="mr-1.5" />}
                  {showTranscript ? 'Nemischa matnni yashirish' : 'Nemischa matnni ko‘rish'}
                </button>
                <button
                  onClick={() => setShowTranslation(!showTranslation)}
                  className="inline-flex items-center text-xs font-semibold px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
                >
                  {showTranslation ? <EyeOff size={14} className="mr-1.5" /> : <Eye size={14} className="mr-1.5" />}
                  {showTranslation ? 'O‘zbekcha tarjimani yashirish' : 'O‘zbekcha tarjimani ko‘rish'}
                </button>
              </div>

              {showTranscript && (
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm whitespace-pre-line text-slate-800 dark:text-slate-200 font-sans leading-relaxed">
                  {current.transcriptDe}
                </div>
              )}

              {showTranslation && !current.dialogue && (
                <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-sm whitespace-pre-line text-amber-950 dark:text-amber-200 font-sans leading-relaxed">
                  {current.translationUz}
                </div>
              )}

              {/* Questions */}
              {current.questions && current.questions.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base">
                        Tushunish savollari:
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Audioni tinglab, to‘g‘ri javob variantlarini tanlang
                      </p>
                    </div>

                    {checked && (
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300">
                        <span>Natija:</span>
                        <strong className={correctCount === totalQuestions ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}>
                          {correctCount} / {totalQuestions}
                        </strong>
                      </div>
                    )}
                  </div>

                  {checked && (
                    <div className={`p-4 rounded-2xl border flex items-center justify-between gap-4 ${
                      correctCount === totalQuestions
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                        : 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200'
                    }`}>
                      <div className="flex items-center gap-3">
                        <Sparkles size={20} className={correctCount === totalQuestions ? 'text-emerald-600' : 'text-amber-600'} />
                        <div>
                          <p className="text-sm font-bold">
                            {correctCount === totalQuestions 
                              ? 'Ajoyib natija! Barcha savollarga to‘g‘ri javob berdingiz!'
                              : `Siz ${totalQuestions} tadan ${correctCount} tasiga to‘g‘ri javob berdingiz. Xatolarni tekshirib qayta urinib ko‘ring.`}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={handleResetQuiz}
                        className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-750 flex items-center gap-1.5 flex-shrink-0"
                      >
                        <RotateCcw size={13} />
                        <span>Qayta topshirish</span>
                      </button>
                    </div>
                  )}

                  {current.questions.map((q: { id: string; questionUz: string; options: string[]; correctIndex: number; explanationUz: string }, qIdx: number) => (
                    <div key={q.id} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                      <div className="flex items-start gap-2">
                        <span className="w-6 h-6 rounded-lg bg-brand-100 dark:bg-brand-900/60 text-brand-700 dark:text-brand-300 text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                          {qIdx + 1}
                        </span>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">
                          {q.questionUz}
                        </p>
                      </div>

                      <div className="space-y-2 pt-1 pl-8">
                        {q.options.map((opt: string, optIdx: number) => {
                          const isSelected = answers[q.id] === optIdx;
                          let optStyle = 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:border-brand-300 dark:hover:border-brand-500 hover:bg-slate-50/70 dark:hover:bg-slate-750';
                          if (isSelected) optStyle = 'border-brand-500 dark:border-brand-500 bg-brand-50/80 dark:bg-brand-950/60 text-brand-950 dark:text-brand-100 ring-2 ring-brand-500/20';
                          if (checked) {
                            if (optIdx === q.correctIndex) optStyle = 'border-emerald-500 dark:border-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-950 dark:text-emerald-200 font-bold ring-1 ring-emerald-500';
                            else if (isSelected) optStyle = 'border-red-400 dark:border-red-600 bg-red-50 dark:bg-red-950/60 text-red-950 dark:text-red-200';
                          }

                          return (
                            <button
                              key={`${q.id}-opt-${optIdx}`}
                              onClick={() => handleSelectOption(q.id, optIdx)}
                              disabled={checked}
                              className={`w-full p-3 rounded-xl border text-left text-xs sm:text-sm font-medium flex items-center justify-between transition-all ${optStyle}`}
                            >
                              <span>{opt}</span>
                              {checked && optIdx === q.correctIndex && <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400" />}
                              {checked && isSelected && optIdx !== q.correctIndex && <XCircle size={16} className="text-red-500 dark:text-red-400" />}
                            </button>
                          );
                        })}
                      </div>

                      {checked && q.explanationUz && (
                        <div className="pl-8 pt-1 text-xs text-slate-500 dark:text-slate-400 italic">
                          💡 Tushuntirish: {q.explanationUz}
                        </div>
                      )}
                    </div>
                  ))}

                  <div className="flex justify-end pt-2">
                    <button
                      onClick={() => setChecked(true)}
                      disabled={checked || Object.keys(answers).length === 0}
                      className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm transition shadow-sm disabled:opacity-50 active:scale-95"
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

