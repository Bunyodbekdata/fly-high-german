import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { storageService } from '../lib/storage';
import { CEFRLevelCode } from '../types/database';
import { YoutubeChannel, YoutubeLessonVideo, YoutubeLevel } from '../types/youtube';
import { 
  YOUTUBE_CHANNELS, 
  ALL_YOUTUBE_VIDEOS, 
  YoutubeStorageService 
} from '../data/youtubeCourses';
import { YoutubeChannelCard } from '../components/youtube/YoutubeChannelCard';
import { YoutubeChannelView } from '../components/youtube/YoutubeChannelView';
import { YoutubeStudioPlayer } from '../components/youtube/YoutubeStudioPlayer';
import { LevelBadge } from '../components/common/Badge';
import { audioService } from '../lib/audio';
import { 
  Video, 
  Mic, 
  MicOff, 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  CheckCircle2, 
  Sparkles, 
  Tv, 
  Compass,
  Search,
  Check
} from 'lucide-react';

const YOUTUBE_MAJOR_LEVELS: { id: YoutubeLevel; label: string; desc: string }[] = [
  { id: 'a1', label: 'A1 Darajasi', desc: 'Boshlang‘ich bosqich' },
  { id: 'a2', label: 'A2 Darajasi', desc: 'Davomiy bosqich' },
  { id: 'b1', label: 'B1 Darajasi', desc: 'O‘rta bosqich' },
  { id: 'b2', label: 'B2 Darajasi', desc: 'Yuqori o‘rta bosqich' },
];

export const ShadowingPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const classicLevels = storageService.getLevels();

  // Mode: 'youtube' or 'classic'
  const [mode, setMode] = useState<'youtube' | 'classic'>('youtube');

  // Level filter for YouTube channels: 'a1', 'a2', 'b1', 'b2', 'all'
  const initialLevel = (searchParams.get('level') as YoutubeLevel | 'all') || 'a1';
  const [selectedLevel, setSelectedLevel] = useState<YoutubeLevel | 'all'>(initialLevel);

  // Selected Channel & Active Video for Studio
  const [selectedChannel, setSelectedChannel] = useState<YoutubeChannel | null>(() => {
    const channelParam = searchParams.get('channel');
    if (channelParam) {
      return YOUTUBE_CHANNELS.find(c => c.id === channelParam) || null;
    }
    return null;
  });

  const [activeVideo, setActiveVideo] = useState<YoutubeLessonVideo | null>(() => {
    const videoParam = searchParams.get('video');
    if (videoParam) {
      return ALL_YOUTUBE_VIDEOS.find(v => v.id === videoParam) || null;
    }
    return null;
  });

  // --- Classic Shadowing State ---
  const [selectedClassicLevel, setSelectedClassicLevel] = useState<string>('a1-1');
  const classicList = storageService.getAllShadowing(
    selectedClassicLevel === 'all' ? undefined : (selectedClassicLevel as CEFRLevelCode)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlayingClassic, setIsPlayingClassic] = useState(false);
  const [isRecordingClassic, setIsRecordingClassic] = useState(false);
  const [recordedUrl, setRecordedUrl] = useState<string | null>(null);
  const [completedSentences, setCompletedSentences] = useState<Record<string, boolean>>({});

  const currentClassic = classicList[currentIndex] || classicList[0];

  // Sync URL params
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedLevel) params.set('level', selectedLevel);
    if (selectedChannel) params.set('channel', selectedChannel.id);
    if (activeVideo) params.set('video', activeVideo.id);
    setSearchParams(params, { replace: true });
  }, [selectedLevel, selectedChannel, activeVideo, setSearchParams]);

  // Filter channels based on selected unified major level (A1, A2, B1, B2)
  const displayedChannels = YOUTUBE_CHANNELS.filter(c => {
    if (selectedLevel === 'all') return true;
    return c.level === selectedLevel;
  });

  // Get videos for selected channel
  const channelVideos = selectedChannel
    ? ALL_YOUTUBE_VIDEOS.filter(v => v.channelId === selectedChannel.id)
    : [];

  // Classic mode audio handlers
  const handlePlayClassic = async (rate: number = 0.85) => {
    if (!currentClassic) return;
    if (isPlayingClassic) {
      audioService.stop();
      setIsPlayingClassic(false);
      return;
    }
    setIsPlayingClassic(true);
    await audioService.speak(currentClassic.sentenceDe, rate);
    setIsPlayingClassic(false);
  };

  const handleToggleRecordClassic = async () => {
    if (isRecordingClassic) {
      const url = await audioService.stopRecording();
      setIsRecordingClassic(false);
      if (url) {
        setRecordedUrl(url);
        if (currentClassic) {
          setCompletedSentences(prev => ({ ...prev, [currentClassic.id]: true }));
        }
      }
    } else {
      setRecordedUrl(null);
      const started = await audioService.startRecording();
      if (started) {
        setIsRecordingClassic(true);
      }
    }
  };

  const handlePlayRecordingClassic = () => {
    if (recordedUrl) {
      audioService.playAudioUrl(recordedUrl);
    }
  };

  // Stats for the level
  const levelStats = YoutubeStorageService.getLevelProgress(selectedLevel);
  const totalChannelsCount = displayedChannels.length;
  const totalVideosInLevel = displayedChannels.reduce((acc, c) => acc + c.totalVideos, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8 animate-in fade-in duration-300">
      {/* Top Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-slate-200/80 dark:border-slate-800">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-800 text-xs font-black uppercase tracking-wider flex items-center space-x-1.5">
              <Sparkles size={12} className="text-amber-500" />
              <span>Video & Shadowing Studio</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Nemis tili video darslari & Talaffuz
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
            YouTube'dagi yetakchi kanallar (Ibrat Farzandlari, Nemis Tili Praktikumi va boshqalar) darslarini umumiy darajalar (A1, A2, B1) bo‘yicha tomosha qiling va darhol mikrofonga baland ovozda takrorlang.
          </p>
        </div>

        {/* Global Mode Switcher: Video-Darslar vs Klassik Darslik Mashqlari */}
        <div className="bg-slate-100 dark:bg-slate-800/80 p-1.5 rounded-2xl flex items-center space-x-1 flex-shrink-0 border border-slate-200/60 dark:border-slate-700/60 shadow-inner">
          <button
            onClick={() => setMode('youtube')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold flex items-center space-x-2 transition ${
              mode === 'youtube'
                ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Tv size={15} />
            <span>🎬 YouTube Video-Darslar</span>
          </button>

          <button
            onClick={() => setMode('classic')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold flex items-center space-x-2 transition ${
              mode === 'classic'
                ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Mic size={15} />
            <span>🎙 Darslik mashqlari</span>
          </button>
        </div>
      </div>

      {/* ======================================================== */}
      {/* MODE 1: YOUTUBE MULTI-CHANNEL & VIDEO STUDIO             */}
      {/* ======================================================== */}
      {mode === 'youtube' && (
        <div className="space-y-8">
          {/* Level Selector Bar (Unified A1, A2, B1, B2) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                1. O‘rganmoqchi bo‘lgan darajangizni tanlang:
              </span>
              <span className="text-xs text-brand-600 dark:text-brand-400 font-bold hidden sm:inline">
                {selectedLevel === 'a1' && `A1 darajasida jami ${totalVideosInLevel} ta video dars mavjud`}
                {selectedLevel === 'a2' && `A2 darajasida jami ${totalVideosInLevel} ta video dars mavjud`}
                {selectedLevel === 'b1' && `B1 darajasida jami ${totalVideosInLevel} ta video dars mavjud`}
                {selectedLevel === 'b2' && `B2 darajasida darslar mavjud`}
                {selectedLevel === 'all' && `Barcha darajalarda jami ${ALL_YOUTUBE_VIDEOS.length} ta dars`}
              </span>
            </div>

            {/* Level Tabs: A1, A2, B1, B2, Barchasi */}
            <div className="flex items-center space-x-2.5 overflow-x-auto pb-2 scrollbar-none">
              {YOUTUBE_MAJOR_LEVELS.map((lvl) => {
                const isSelected = selectedLevel === lvl.id;
                const channelCount = YOUTUBE_CHANNELS.filter(c => c.level === lvl.id).length;

                return (
                  <button
                    key={lvl.id}
                    onClick={() => {
                      setSelectedLevel(lvl.id);
                      setSelectedChannel(null);
                      setActiveVideo(null);
                    }}
                    className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center space-x-2.5 flex-shrink-0 ${
                      isSelected
                        ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/25 scale-[1.02]'
                        : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span className="font-extrabold text-sm">{lvl.label}</span>
                    {channelCount > 0 && (
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black ${
                        isSelected 
                          ? 'bg-white/20 text-white' 
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                      }`}>
                        {channelCount} kanal
                      </span>
                    )}
                  </button>
                );
              })}

              <button
                onClick={() => {
                  setSelectedLevel('all');
                  setSelectedChannel(null);
                  setActiveVideo(null);
                }}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition flex-shrink-0 ${
                  selectedLevel === 'all'
                    ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/25'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                Barcha darajalar ({YOUTUBE_CHANNELS.length} kanal)
              </button>
            </div>
          </div>

          {/* If a channel is selected: Show the dedicated Channel Video Catalog View */}
          {selectedChannel ? (
            <YoutubeChannelView
              channel={selectedChannel}
              videos={channelVideos}
              onBack={() => {
                setSelectedChannel(null);
                setActiveVideo(null);
              }}
              onSelectVideo={(video) => setActiveVideo(video)}
            />
          ) : (
            /* If no channel is selected: Show Channels for this Level */
            <div className="space-y-6">
              {/* Level Quick Stats strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">
                    Mavjud kanallar
                  </span>
                  <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
                    {totalChannelsCount} ta kanal
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">
                    Jami video darslar
                  </span>
                  <p className="text-xl sm:text-2xl font-black text-brand-600 dark:text-brand-400 mt-1">
                    {totalVideosInLevel} ta dars
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">
                    O‘zlashtirildi
                  </span>
                  <p className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1">
                    {levelStats.completed} ta dars
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">
                    O‘zlashtirish foizi
                  </span>
                  <p className="text-xl sm:text-2xl font-black text-brand-600 dark:text-brand-400 mt-1">
                    {levelStats.percentage}%
                  </p>
                </div>
              </div>

              {/* Channels Grid Header */}
              <div className="flex items-center justify-between pt-2">
                <div>
                  <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                    {selectedLevel.toUpperCase()} Darajasi uchun tavsiya etilgan kanallar
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    O‘zingizga ma’qul kanalni tanlang va barcha video darslarini ketma-ketlikda o‘rganing:
                  </p>
                </div>
              </div>

              {/* Channels Grid */}
              {displayedChannels.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {displayedChannels.map((channel) => (
                    <YoutubeChannelCard
                      key={channel.id}
                      channel={channel}
                      onSelect={(c) => setSelectedChannel(c)}
                    />
                  ))}
                </div>
              ) : (
                <div className="p-16 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 text-slate-400 space-y-2">
                  <Video size={36} className="mx-auto text-slate-300 dark:text-slate-600" />
                  <h4 className="text-base font-bold text-slate-700 dark:text-slate-300">
                    Ushbu daraja uchun YouTube kanallar qo‘shilmoqda
                  </h4>
                  <p className="text-xs text-slate-500">
                    Iltimos, A1 yoki A2 darajasini tanlang — u yerda kanallar va video darsliklar to‘liq mavjud.
                  </p>
                  <button
                    onClick={() => setSelectedLevel('a1')}
                    className="mt-2 px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-bold transition shadow-sm"
                  >
                    A1 darajasiga o‘tish
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Active Video Studio Player (Modal / Cinema Frame) */}
          {activeVideo && selectedChannel && (
            <YoutubeStudioPlayer
              video={activeVideo}
              channel={selectedChannel}
              allChannelVideos={channelVideos}
              onClose={() => setActiveVideo(null)}
              onSelectVideo={(newVideo) => setActiveVideo(newVideo)}
            />
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* MODE 2: KLASSIK DARSLIK SHADOWING MASHQLARI              */}
      {/* ======================================================== */}
      {mode === 'classic' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          {/* Level Tabs for Classic mode */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            {classicLevels.map((lvl) => (
              <button
                key={lvl.code}
                onClick={() => {
                  setSelectedClassicLevel(lvl.code);
                  setCurrentIndex(0);
                  setRecordedUrl(null);
                }}
                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition flex-shrink-0 ${
                  selectedClassicLevel === lvl.code
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                }`}
              >
                {lvl.code.toUpperCase()} Darslik jumlalari
              </button>
            ))}
          </div>

          {/* Classic Interactive Card */}
          {currentClassic ? (
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-sm text-center space-y-8">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider bg-brand-50 dark:bg-brand-950 px-3 py-1 rounded-full">
                  Jumla: {currentIndex + 1} / {classicList.length}
                </span>
                <LevelBadge code={currentClassic.levelCode} />
              </div>

              <div className="space-y-4 py-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                  Nemischa jumla (Hochdeutsch):
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                  "{currentClassic.sentenceDe}"
                </h2>

                {currentClassic.phoneticHint && (
                  <p className="text-xs sm:text-sm font-mono text-brand-600 dark:text-brand-400 bg-brand-50/70 dark:bg-brand-950/70 inline-block px-3 py-1 rounded-lg">
                    {currentClassic.phoneticHint}
                  </p>
                )}

                <p className="text-base sm:text-lg font-medium text-slate-600 dark:text-slate-300 mt-3 max-w-lg mx-auto">
                  {currentClassic.translationUz}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <button
                  onClick={() => handlePlayClassic(0.85)}
                  className={`px-6 py-3.5 rounded-2xl font-bold text-sm flex items-center space-x-2 transition shadow-sm ${
                    isPlayingClassic
                      ? 'bg-brand-700 text-white animate-pulse'
                      : 'bg-brand-600 hover:bg-brand-700 text-white'
                  }`}
                >
                  {isPlayingClassic ? <Pause size={18} /> : <Play size={18} className="fill-current" />}
                  <span>{isPlayingClassic ? 'To‘xtatish' : '▶ Tinglash (Listen)'}</span>
                </button>

                <button
                  onClick={() => handlePlayClassic(1.0)}
                  className="px-5 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-sm flex items-center space-x-1.5 transition"
                >
                  <RotateCcw size={16} />
                  <span>🔁 Qayta eshitish</span>
                </button>

                <button
                  onClick={handleToggleRecordClassic}
                  className={`px-6 py-3.5 rounded-2xl font-bold text-sm flex items-center space-x-2 transition shadow-sm ${
                    isRecordingClassic
                      ? 'bg-red-600 text-white animate-pulse ring-4 ring-red-200'
                      : 'bg-slate-900 dark:bg-slate-800 hover:bg-black text-white'
                  }`}
                >
                  {isRecordingClassic ? <MicOff size={18} /> : <Mic size={18} />}
                  <span>{isRecordingClassic ? 'Yozishni to‘xtatish' : '🎙 Takrorlash (Repeat)'}</span>
                </button>
              </div>

              {/* Recorded Audio Playback */}
              {recordedUrl && (
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 inline-flex items-center space-x-3 animate-in fade-in">
                  <CheckCircle2 size={20} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-emerald-950 dark:text-emerald-200">
                    Ovozingiz muvaffaqiyatli saqlandi!
                  </span>
                  <button
                    onClick={handlePlayRecordingClassic}
                    className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition flex items-center space-x-1"
                  >
                    <Volume2 size={14} />
                    <span>Eshitish</span>
                  </button>
                </div>
              )}

              {/* Next / Previous Sentence */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => {
                    if (currentIndex > 0) {
                      setCurrentIndex(prev => prev - 1);
                      setRecordedUrl(null);
                    }
                  }}
                  disabled={currentIndex === 0}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition"
                >
                  ← Oldingi jumla
                </button>

                <button
                  onClick={() => {
                    if (currentIndex + 1 < classicList.length) {
                      setCurrentIndex(prev => prev + 1);
                      setRecordedUrl(null);
                    }
                  }}
                  disabled={currentIndex + 1 >= classicList.length}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-black text-white text-xs font-semibold transition disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Keyingi jumla →
                </button>
              </div>
            </div>
          ) : (
            <div className="p-16 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 text-slate-400">
              Ushbu daraja uchun darslik mashqlari mavjud emas.
            </div>
          )}
        </div>
      )}
    </div>
  );
};
