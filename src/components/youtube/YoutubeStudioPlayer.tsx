import React, { useState, useEffect } from 'react';
import { YoutubeLessonVideo, YoutubeChannel, UserVideoNote } from '../../types/youtube';
import { YoutubeStorageService, extractYoutubeId } from '../../data/youtubeCourses';
import { audioService } from '../../lib/audio';
import { 
  X, 
  Play, 
  Pause, 
  RotateCcw, 
  Mic, 
  MicOff, 
  Volume2, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  ListFilter, 
  Edit3, 
  Sparkles, 
  BookmarkCheck, 
  Headphones,
  BookMarked,
  Plus,
  Trash2,
  BookOpen
} from 'lucide-react';

interface YoutubeStudioPlayerProps {
  video: YoutubeLessonVideo;
  channel: YoutubeChannel;
  allChannelVideos: YoutubeLessonVideo[];
  onClose: () => void;
  onSelectVideo: (video: YoutubeLessonVideo) => void;
}

export const YoutubeStudioPlayer: React.FC<YoutubeStudioPlayerProps> = ({
  video,
  channel,
  allChannelVideos,
  onClose,
  onSelectVideo
}) => {
  const [activeTab, setActiveTab] = useState<'shadowing' | 'vocab' | 'playlist'>('shadowing');
  const [isPlayingNative, setIsPlayingNative] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState<string | null>(null);
  const [recordedAudios, setRecordedAudios] = useState<Record<string, string>>({});
  const [completedPhrases, setCompletedPhrases] = useState<Record<string, boolean>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(() => {
    return YoutubeStorageService.getCompletedVideoIds().has(video.id);
  });

  // URL override state
  const [isEditingUrl, setIsEditingUrl] = useState(false);
  const [customUrlInput, setCustomUrlInput] = useState('');

  // Personal Vocabulary Notes State
  const [notes, setNotes] = useState<UserVideoNote[]>(() => {
    try {
      const saved = localStorage.getItem(`fgn_video_notes_${video.id}`);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [newGerman, setNewGerman] = useState('');
  const [newUzbek, setNewUzbek] = useState('');
  const [newArticle, setNewArticle] = useState<string>('');
  const [newExample, setNewExample] = useState('');

  // Reload notes when active video changes
  useEffect(() => {
    try {
      const saved = localStorage.getItem(`fgn_video_notes_${video.id}`);
      setNotes(saved ? JSON.parse(saved) : []);
    } catch {
      setNotes([]);
    }
    // Reset inputs
    setNewGerman('');
    setNewUzbek('');
    setNewArticle('');
    setNewExample('');
  }, [video.id]);

  const effectiveId = YoutubeStorageService.getVideoEffectiveId(video);
  const embedUrl = `https://www.youtube-nocookie.com/embed/${effectiveId}?autoplay=1&rel=0&modestbranding=1`;

  // Find previous and next video in this channel
  const currentIndex = allChannelVideos.findIndex(v => v.id === video.id);
  const prevVideo = currentIndex > 0 ? allChannelVideos[currentIndex - 1] : null;
  const nextVideo = currentIndex < allChannelVideos.length - 1 ? allChannelVideos[currentIndex + 1] : null;

  const handleToggleCompleted = () => {
    const newState = YoutubeStorageService.toggleVideoCompleted(video.id);
    setIsCompleted(newState);
  };

  const handlePlayNative = async (phraseId: string, text: string) => {
    if (isPlayingNative === phraseId) {
      audioService.stop();
      setIsPlayingNative(null);
      return;
    }
    setIsPlayingNative(phraseId);
    await audioService.speak(text, 0.88);
    setIsPlayingNative(null);
  };

  const handleToggleRecord = async (phraseId: string) => {
    if (isRecording === phraseId) {
      const audioUrl = await audioService.stopRecording();
      setIsRecording(null);
      if (audioUrl) {
        setRecordedAudios(prev => ({ ...prev, [phraseId]: audioUrl }));
        setCompletedPhrases(prev => ({ ...prev, [phraseId]: true }));
      }
    } else {
      if (isRecording) {
        await audioService.stopRecording();
      }
      const started = await audioService.startRecording();
      if (started) {
        setIsRecording(phraseId);
      }
    }
  };

  const handlePlayRecording = (phraseId: string) => {
    const url = recordedAudios[phraseId];
    if (url) {
      audioService.playAudioUrl(url);
    }
  };

  const handleSaveCustomUrl = () => {
    if (customUrlInput.trim()) {
      YoutubeStorageService.setVideoUrl(video.id, customUrlInput.trim());
      setIsEditingUrl(false);
      setCustomUrlInput('');
    }
  };

  // Vocabulary Note handlers
  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGerman.trim() || !newUzbek.trim()) return;

    let detectedArticle = newArticle;
    let cleanGerman = newGerman.trim();

    // Auto-detect article if typed as "der Tisch", "die Lampe", "das Buch"
    if (!detectedArticle) {
      if (/^der\s+/i.test(cleanGerman)) {
        detectedArticle = 'der';
        cleanGerman = cleanGerman.replace(/^der\s+/i, '');
      } else if (/^die\s+/i.test(cleanGerman)) {
        detectedArticle = 'die';
        cleanGerman = cleanGerman.replace(/^die\s+/i, '');
      } else if (/^das\s+/i.test(cleanGerman)) {
        detectedArticle = 'das';
        cleanGerman = cleanGerman.replace(/^das\s+/i, '');
      }
    }

    const newNote: UserVideoNote = {
      id: 'note_' + Date.now(),
      videoId: video.id,
      german: cleanGerman,
      uzbek: newUzbek.trim(),
      article: detectedArticle || null,
      example: newExample.trim() || undefined,
      createdAt: new Date().toISOString()
    };

    const updated = [newNote, ...notes];
    setNotes(updated);
    try {
      localStorage.setItem(`fgn_video_notes_${video.id}`, JSON.stringify(updated));
    } catch (err) {
      console.error('Failed to save note', err);
    }

    // Reset inputs
    setNewGerman('');
    setNewUzbek('');
    setNewArticle('');
    setNewExample('');
  };

  const handleDeleteNote = (noteId: string) => {
    const updated = notes.filter(n => n.id !== noteId);
    setNotes(updated);
    try {
      localStorage.setItem(`fgn_video_notes_${video.id}`, JSON.stringify(updated));
    } catch (err) {
      console.error('Failed to delete note', err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col justify-between overflow-hidden animate-in fade-in duration-200">
      {/* Studio Top Navigation Bar */}
      <header className="h-16 bg-slate-900 border-b border-slate-800 px-4 sm:px-6 flex items-center justify-between flex-shrink-0 text-white">
        <div className="flex items-center space-x-3 truncate">
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition flex items-center space-x-1.5 text-xs font-bold"
          >
            <ChevronLeft size={16} />
            <span className="hidden sm:inline">Katalogga qaytish</span>
          </button>

          <div className="h-5 w-px bg-slate-800 hidden sm:block" />

          <div className="flex flex-col truncate">
            <div className="flex items-center space-x-2">
              <span className="px-2 py-0.5 rounded-md bg-brand-600 text-[10px] font-extrabold uppercase">
                {channel.name}
              </span>
              <span className="text-xs text-slate-400 font-semibold truncate">
                {video.episodeNumber}-dars ({video.duration} min)
              </span>
            </div>
            <h2 className="text-sm font-bold text-white truncate max-w-md sm:max-w-xl">
              {video.titleUz}
            </h2>
          </div>
        </div>

        {/* Right Action Tools */}
        <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
          {/* Mark as Completed Toggle */}
          <button
            onClick={handleToggleCompleted}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition ${
              isCompleted
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <BookmarkCheck size={15} className={isCompleted ? "text-white" : "text-slate-400"} />
            <span className="hidden md:inline">{isCompleted ? 'Dars o‘zlashtirildi' : 'Tugallangan deb belgilash'}</span>
          </button>

          {/* Quick Edit YouTube Link */}
          <button
            onClick={() => setIsEditingUrl(!isEditingUrl)}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
            title="YouTube havolasini o‘zgartirish"
          >
            <Edit3 size={15} />
          </button>

          {/* Close Studio Button */}
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white transition"
            title="Yopish (Esc)"
          >
            <X size={18} />
          </button>
        </div>
      </header>

      {/* Main Studio Body: Video Player (Left) + Interactive Studio (Right) */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Left: Responsive Distraction-Free YouTube Cinema Frame */}
        <div className="flex-1 bg-black flex flex-col justify-center items-center relative overflow-hidden p-2 sm:p-4">
          <div className="w-full max-w-5xl aspect-video bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-slate-800/80 relative">
            <iframe
              src={embedUrl}
              title={video.titleUz}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Quick Player Bar: Previous / Next Episode Navigation */}
          <div className="w-full max-w-5xl flex items-center justify-between mt-3 px-2 text-xs">
            <button
              onClick={() => prevVideo && onSelectVideo(prevVideo)}
              disabled={!prevVideo}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition"
            >
              <ChevronLeft size={16} />
              <span>Oldingi dars: #{prevVideo ? prevVideo.episodeNumber : '-'}</span>
            </button>

            <span className="text-slate-400 font-medium hidden sm:inline">
              Nemischa nomi: <span className="text-slate-200 font-semibold">{video.titleDe}</span>
            </span>

            <button
              onClick={() => nextVideo && onSelectVideo(nextVideo)}
              disabled={!nextVideo}
              className="flex items-center space-x-1.5 px-4 py-1.5 rounded-xl bg-brand-600 text-white hover:bg-brand-500 disabled:opacity-30 disabled:cursor-not-allowed font-bold transition shadow-sm"
            >
              <span>Keyingi dars: #{nextVideo ? nextVideo.episodeNumber : '-'}</span>
              <ChevronRight size={16} />
            </button>
          </div>

          {/* YouTube Link Customizer Modal if opened */}
          {isEditingUrl && (
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-full max-w-lg bg-slate-900 border border-slate-700 p-4 rounded-2xl shadow-2xl z-30 space-y-3 animate-in fade-in">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white flex items-center space-x-1.5">
                  <Edit3 size={13} className="text-brand-400" />
                  <span>Ushbu dars uchun YouTube havolasini yangilash</span>
                </span>
                <button onClick={() => setIsEditingUrl(false)} className="text-slate-400 hover:text-white">
                  <X size={15} />
                </button>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                YouTube video havolasi (masalan, <code>https://youtube.com/watch?v=...</code> yoki video ID) kiriting:
              </p>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="https://www.youtube.com/watch?v=0nnjCGekoBg"
                  value={customUrlInput}
                  onChange={(e) => setCustomUrlInput(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
                />
                <button
                  onClick={handleSaveCustomUrl}
                  className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs transition"
                >
                  Saqlash
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right: Shadowing Studio & Interactive Practice Panel */}
        <div className="w-full lg:w-[440px] xl:w-[480px] bg-slate-900 border-t lg:border-t-0 lg:border-l border-slate-800 flex flex-col justify-between overflow-hidden flex-shrink-0">
          {/* Panel Tab Switcher */}
          <div className="flex items-center border-b border-slate-800 p-2 gap-1 bg-slate-950/60">
            <button
              onClick={() => setActiveTab('shadowing')}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 transition ${
                activeTab === 'shadowing'
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Mic size={14} />
              <span>Shadowing ({video.shadowingPhrases.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('vocab')}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 transition ${
                activeTab === 'vocab'
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <BookMarked size={14} />
              <span>Lug‘at daftari ({notes.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('playlist')}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 transition ${
                activeTab === 'playlist'
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <ListFilter size={14} />
              <span>Pleylist ({allChannelVideos.length})</span>
            </button>
          </div>

          {/* Panel Content (Scrollable) */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* TAB 1: SHADOWING TALAFFUZ VA TAKRORLASH */}
            {activeTab === 'shadowing' && (
              <div className="space-y-4">
                <div className="bg-brand-950/40 border border-brand-800/50 rounded-2xl p-3.5 space-y-1">
                  <h4 className="text-xs font-extrabold text-brand-300 flex items-center space-x-1.5">
                    <Headphones size={14} />
                    <span>Shadowing qanday ishlaydi?</span>
                  </h4>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Videoni tomosha qiling, nemischa jumlani eshiting va 🎙 <strong>Takrorlash</strong> tugmasini bosib darhol ovozingizni yozib oling.
                  </p>
                </div>

                {video.shadowingPhrases.map((phrase, idx) => {
                  const isDone = completedPhrases[phrase.id];
                  const hasRecording = recordedAudios[phrase.id];
                  const recordingThis = isRecording === phrase.id;
                  const playingThis = isPlayingNative === phrase.id;

                  return (
                    <div
                      key={phrase.id}
                      className="bg-slate-950 rounded-2xl border border-slate-800 p-4 space-y-3 shadow-sm hover:border-slate-700 transition"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono text-[10px] text-brand-400 bg-brand-950/80 px-2 py-0.5 rounded-md">
                          Jumla #{idx + 1}
                        </span>
                        {isDone && (
                          <span className="text-[10px] font-bold text-emerald-400 flex items-center space-x-1">
                            <CheckCircle2 size={12} />
                            <span>Bajarildi</span>
                          </span>
                        )}
                      </div>

                      {/* German sentence */}
                      <div>
                        <h4 className="text-base font-extrabold text-white leading-snug">
                          "{phrase.german}"
                        </h4>
                        {phrase.phoneticHint && (
                          <p className="text-[11px] font-mono text-brand-300/80 mt-1">
                            {phrase.phoneticHint}
                          </p>
                        )}
                        <p className="text-xs text-slate-400 mt-1 font-medium">
                          {phrase.uzbek}
                        </p>
                      </div>

                      {/* Audio Controls */}
                      <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-800/80">
                        {/* Listen Native TTS */}
                        <button
                          onClick={() => handlePlayNative(phrase.id, phrase.german)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition ${
                            playingThis
                              ? 'bg-brand-500 text-white animate-pulse'
                              : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                          }`}
                        >
                          {playingThis ? <Pause size={13} /> : <Play size={13} />}
                          <span>{playingThis ? 'To‘xtatish' : 'Tinglash'}</span>
                        </button>

                        {/* Record Voice Button */}
                        <button
                          onClick={() => handleToggleRecord(phrase.id)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition ${
                            recordingThis
                              ? 'bg-red-600 text-white animate-pulse ring-2 ring-red-400'
                              : 'bg-slate-800 hover:bg-brand-600 text-slate-200 hover:text-white'
                          }`}
                        >
                          {recordingThis ? <MicOff size={13} /> : <Mic size={13} />}
                          <span>{recordingThis ? 'Yozishni to‘xtatish' : '🎙 Takrorlash'}</span>
                        </button>

                        {/* Playback student's voice */}
                        {hasRecording && (
                          <button
                            onClick={() => handlePlayRecording(phrase.id)}
                            className="px-3 py-1.5 rounded-xl bg-emerald-950/80 border border-emerald-700/60 hover:bg-emerald-900 text-emerald-300 text-xs font-bold flex items-center space-x-1.5 transition"
                          >
                            <Volume2 size={13} />
                            <span>Ovozingizni eshitish</span>
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* TAB 2: SHAXSIY LUG'AT DAFTARI (YANGI SO'ZLARNI NOTE QILISH) */}
            {activeTab === 'vocab' && (
              <div className="space-y-5 animate-in fade-in duration-200">
                {/* Header note banner */}
                <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-amber-400 flex items-center space-x-1.5">
                      <BookMarked size={15} />
                      <span>Shaxsiy Lug‘at Daftari</span>
                    </span>
                    <span className="text-[11px] font-bold text-slate-400 bg-slate-900 px-2.5 py-0.5 rounded-full border border-slate-800">
                      {notes.length} ta so‘z yozildi
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Videoni tomosha qilish davomida o‘zingiz bilmagan har qanday yangi so‘z yoki iborani shu yerga yozib boring. Ular avtomatik saqlanib boradi.
                  </p>
                </div>

                {/* Form to Note Down a New Word */}
                <form
                  onSubmit={handleAddNote}
                  className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-3 shadow-md"
                >
                  <div className="text-xs font-extrabold text-slate-200 flex items-center space-x-1.5">
                    <Plus size={14} className="text-brand-400" />
                    <span>Yangi so‘z qo‘shish</span>
                  </div>

                  {/* German Word input */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Nemischa so‘z yoki ibora:
                    </label>
                    <input
                      type="text"
                      placeholder="masalan: der Bahnhof, anrufen..."
                      value={newGerman}
                      onChange={(e) => setNewGerman(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
                    />
                  </div>

                  {/* Article selector buttons */}
                  <div className="flex items-center space-x-2 pt-0.5">
                    <span className="text-[10px] text-slate-400 font-semibold">Artikl:</span>
                    {(['der', 'die', 'das'] as const).map((art) => (
                      <button
                        key={art}
                        type="button"
                        onClick={() => setNewArticle(newArticle === art ? '' : art)}
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase transition ${
                          newArticle === art
                            ? art === 'der'
                              ? 'bg-blue-600 text-white'
                              : art === 'die'
                              ? 'bg-rose-600 text-white'
                              : 'bg-amber-600 text-white'
                            : 'bg-slate-900 border border-slate-700 text-slate-400 hover:text-white'
                        }`}
                      >
                        {art}
                      </button>
                    ))}
                    {newArticle && (
                      <button
                        type="button"
                        onClick={() => setNewArticle('')}
                        className="text-[10px] text-slate-500 hover:text-slate-300 underline"
                      >
                        Bekor qilish
                      </button>
                    )}
                  </div>

                  {/* Uzbek Meaning input */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      O‘zbekcha tarjimasi / ma’nosi:
                    </label>
                    <input
                      type="text"
                      placeholder="masalan: vokzal, temiryo‘l bekati..."
                      value={newUzbek}
                      onChange={(e) => setNewUzbek(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
                    />
                  </div>

                  {/* Optional Example Sentence */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Namuna gap yoki eslatma (ixtiyoriy):
                    </label>
                    <input
                      type="text"
                      placeholder="masalan: Wir treffen uns am Bahnhof."
                      value={newExample}
                      onChange={(e) => setNewExample(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={!newGerman.trim() || !newUzbek.trim()}
                    className="w-full py-2 px-3 rounded-xl bg-brand-600 hover:bg-brand-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-xs flex items-center justify-center space-x-1.5 transition shadow-sm"
                  >
                    <Plus size={14} />
                    <span>Lug‘atga saqlash</span>
                  </button>
                </form>

                {/* Noted Words List */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-300 px-1">
                    <span>Yozilgan so‘zlar ro‘yxati</span>
                    <span className="text-[11px] text-slate-500 font-semibold">{notes.length} ta qayd</span>
                  </div>

                  {notes.length > 0 ? (
                    notes.map((note) => (
                      <div
                        key={note.id}
                        className="bg-slate-950 rounded-2xl border border-slate-800 p-3.5 flex items-start justify-between gap-3 hover:border-slate-700 transition"
                      >
                        <div className="space-y-1 flex-1">
                          <div className="flex items-center space-x-2">
                            {note.article && (
                              <span
                                className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                                  note.article === 'der'
                                    ? 'bg-blue-950 text-blue-400 border border-blue-800/60'
                                    : note.article === 'die'
                                    ? 'bg-rose-950 text-rose-400 border border-rose-800/60'
                                    : 'bg-amber-950 text-amber-400 border border-amber-800/60'
                                }`}
                              >
                                {note.article}
                              </span>
                            )}
                            <h4 className="text-sm font-extrabold text-white">
                              {note.german}
                            </h4>
                          </div>

                          <p className="text-xs text-slate-300 font-medium">
                            {note.uzbek}
                          </p>

                          {note.example && (
                            <p className="text-[11px] text-slate-500 italic bg-slate-900/60 px-2 py-0.5 rounded inline-block">
                              "{note.example}"
                            </p>
                          )}
                        </div>

                        {/* Actions: Listen & Delete */}
                        <div className="flex items-center space-x-1.5 flex-shrink-0">
                          {/* Speak German Word */}
                          <button
                            type="button"
                            onClick={() =>
                              audioService.speak(
                                (note.article ? `${note.article} ` : '') + note.german,
                                0.88
                              )
                            }
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-brand-600 text-slate-300 hover:text-white transition"
                            title="Talaffuzini tinglash"
                          >
                            <Volume2 size={14} />
                          </button>

                          {/* Delete Note */}
                          <button
                            type="button"
                            onClick={() => handleDeleteNote(note.id)}
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-red-600 text-slate-400 hover:text-white transition"
                            title="O‘chirish"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-8 text-center bg-slate-950/60 rounded-2xl border border-dashed border-slate-800 text-slate-400 space-y-2">
                      <BookOpen size={28} className="mx-auto text-slate-600" />
                      <p className="text-xs font-bold text-slate-300">
                        Hozircha hech qanday so‘z yozilmadi
                      </p>
                      <p className="text-[11px] text-slate-500 max-w-xs mx-auto leading-relaxed">
                        Videoni tinglash davomida yangi yoki tushunarsiz so‘z uchrasa, yuqoridagi formadan foydalanib o‘z lug‘atingizga saqlang!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 3: PLEYLIST VA BOSHQALAR */}
            {activeTab === 'playlist' && (
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-300 mb-1 flex items-center justify-between">
                  <span>{channel.name} — Barcha darslar</span>
                  <span className="text-[11px] text-slate-500">{allChannelVideos.length} ta dars</span>
                </div>

                {allChannelVideos.map((ep) => {
                  const isCurrent = ep.id === video.id;
                  const isDone = YoutubeStorageService.getCompletedVideoIds().has(ep.id);

                  return (
                    <div
                      key={ep.id}
                      onClick={() => onSelectVideo(ep)}
                      className={`p-3 rounded-2xl cursor-pointer flex items-center justify-between transition ${
                        isCurrent
                          ? 'bg-brand-950/80 border border-brand-600 text-white'
                          : 'bg-slate-950 hover:bg-slate-800/60 border border-slate-800/80 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center space-x-3 truncate">
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs flex-shrink-0 ${
                          isCurrent
                            ? 'bg-brand-600 text-white'
                            : isDone
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                            : 'bg-slate-800 text-slate-400'
                        }`}>
                          {isDone ? '✓' : ep.episodeNumber}
                        </div>
                        <div className="truncate">
                          <h5 className="text-xs font-bold truncate text-slate-200">
                            {ep.titleUz}
                          </h5>
                          <span className="text-[10px] text-slate-400 block truncate">
                            {ep.titleDe} • {ep.duration} min
                          </span>
                        </div>
                      </div>

                      {isCurrent && (
                        <span className="text-[10px] font-black text-brand-400 bg-brand-900/60 px-2 py-0.5 rounded-md flex-shrink-0">
                          Hozirgi
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
