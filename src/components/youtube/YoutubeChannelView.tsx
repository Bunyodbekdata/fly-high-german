import React, { useState, useMemo } from 'react';
import { YoutubeChannel, YoutubeLessonVideo } from '../../types/youtube';
import { YoutubeStorageService, getYoutubeThumbnailUrl } from '../../data/youtubeCourses';
import { 
  ArrowLeft, 
  Search, 
  Play, 
  CheckCircle2, 
  Circle, 
  Sparkles, 
  Video, 
  Filter, 
  Clock, 
  BookOpen,
  Headphones
} from 'lucide-react';

interface YoutubeChannelViewProps {
  channel: YoutubeChannel;
  videos: YoutubeLessonVideo[];
  onBack: () => void;
  onSelectVideo: (video: YoutubeLessonVideo) => void;
}

export const YoutubeChannelView: React.FC<YoutubeChannelViewProps> = ({
  channel,
  videos,
  onBack,
  onSelectVideo
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [rangeFilter, setRangeFilter] = useState<'all' | '1-20' | '21-40' | '41-60' | '61-77'>('all');
  const [showOnlyUnwatched, setShowOnlyUnwatched] = useState(false);
  const [completedIds, setCompletedIds] = useState<Set<string>>(() => 
    YoutubeStorageService.getCompletedVideoIds()
  );

  const handleToggleWatched = (e: React.MouseEvent, videoId: string) => {
    e.stopPropagation();
    YoutubeStorageService.toggleVideoCompleted(videoId);
    setCompletedIds(new Set(YoutubeStorageService.getCompletedVideoIds()));
  };

  // Filtered lessons
  const filteredVideos = useMemo(() => {
    return videos.filter((video) => {
      // Search
      const matchesSearch = 
        video.titleUz.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.titleDe.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;

      // Range Filter
      if (rangeFilter === '1-20' && (video.episodeNumber < 1 || video.episodeNumber > 20)) return false;
      if (rangeFilter === '21-40' && (video.episodeNumber < 21 || video.episodeNumber > 40)) return false;
      if (rangeFilter === '41-60' && (video.episodeNumber < 41 || video.episodeNumber > 60)) return false;
      if (rangeFilter === '61-77' && (video.episodeNumber < 61 || video.episodeNumber > 77)) return false;

      // Watched Filter
      if (showOnlyUnwatched && completedIds.has(video.id)) return false;

      return true;
    });
  }, [videos, searchQuery, rangeFilter, showOnlyUnwatched, completedIds]);

  const progress = YoutubeStorageService.getChannelProgress(channel.id, channel.totalVideos);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Breadcrumb & Back Action */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 px-4 py-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-bold text-xs sm:text-sm shadow-sm transition hover:shadow"
        >
          <ArrowLeft size={16} />
          <span>Barcha kanallarga qaytish</span>
        </button>

        <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <span>Daraja:</span>
          <span className="px-2.5 py-0.5 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 font-extrabold uppercase border border-brand-200 dark:border-brand-800">
            {channel.level.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Channel Hero Header Card */}
      <div className="relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-hidden p-6 sm:p-8">
        <div className={`absolute top-0 left-0 right-0 h-24 bg-gradient-to-r ${channel.bannerGradient}`} />

        <div className="relative z-10 pt-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          {/* Avatar and Channel Meta */}
          <div className="flex items-start space-x-4">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl p-1 bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 flex-shrink-0">
              <img
                src={channel.avatarUrl}
                alt={channel.name}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div className="space-y-1.5 pt-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-0.5 rounded-full bg-brand-50 dark:bg-brand-950/80 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800 text-[11px] font-extrabold">
                  {channel.badge}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {channel.instructorUz}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                {channel.name}
              </h1>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                {channel.descriptionUz}
              </p>
            </div>
          </div>

          {/* Overall Progress Badge */}
          <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl p-4 min-w-[220px] flex-shrink-0 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-500 dark:text-slate-400">O‘zlashtirish:</span>
              <span className="font-black text-slate-900 dark:text-white">
                {progress.completed} / {channel.totalVideos} ({progress.percentage}%)
              </span>
            </div>
            <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                style={{ width: `${progress.percentage}%` }}
              />
            </div>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 text-center">
              Har bir darsni tomosha qiling va shadowing mashqini bajaring
            </p>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              placeholder="Dars mavzusi, alifbo, artikl, grammatika..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 shadow-sm"
            />
          </div>

          {/* Toggle Unwatched */}
          <button
            onClick={() => setShowOnlyUnwatched(!showOnlyUnwatched)}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold border transition flex items-center justify-center space-x-1.5 flex-shrink-0 ${
              showOnlyUnwatched
                ? 'bg-brand-600 text-white border-brand-600 shadow-sm'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <Filter size={14} />
            <span>Faqat ko‘rilmaganlar</span>
          </button>
        </div>

        {/* Range filter buttons (e.g. 1-20, 21-40...) */}
        {channel.totalVideos > 25 && (
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none text-xs">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider pl-1 mr-1">
              Bosqichlar:
            </span>
            <button
              onClick={() => setRangeFilter('all')}
              className={`px-3 py-1.5 rounded-xl font-bold transition flex-shrink-0 ${
                rangeFilter === 'all'
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50'
              }`}
            >
              Barcha darslar ({videos.length})
            </button>

            <button
              onClick={() => setRangeFilter('1-20')}
              className={`px-3 py-1.5 rounded-xl font-bold transition flex-shrink-0 ${
                rangeFilter === '1-20'
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50'
              }`}
            >
              1 - 20 darslar
            </button>

            <button
              onClick={() => setRangeFilter('21-40')}
              className={`px-3 py-1.5 rounded-xl font-bold transition flex-shrink-0 ${
                rangeFilter === '21-40'
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50'
              }`}
            >
              21 - 40 darslar
            </button>

            <button
              onClick={() => setRangeFilter('41-60')}
              className={`px-3 py-1.5 rounded-xl font-bold transition flex-shrink-0 ${
                rangeFilter === '41-60'
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50'
              }`}
            >
              41 - 60 darslar
            </button>

            {channel.totalVideos > 60 && (
              <button
                onClick={() => setRangeFilter('61-77')}
                className={`px-3 py-1.5 rounded-xl font-bold transition flex-shrink-0 ${
                  rangeFilter === '61-77'
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50'
                }`}
              >
                61 - {channel.totalVideos} darslar
              </button>
            )}
          </div>
        )}
      </div>

      {/* Videos Grid */}
      {filteredVideos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredVideos.map((video) => {
            const isDone = completedIds.has(video.id);
            const thumbUrl = getYoutubeThumbnailUrl(video.youtubeId);

            return (
              <div
                key={video.id}
                onClick={() => onSelectVideo(video)}
                className="group relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
                  <img
                    src={thumbUrl}
                    alt={video.titleUz}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Episode Number badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-extrabold flex items-center space-x-1">
                    <span>{video.episodeNumber}-dars</span>
                  </div>

                  {/* Watched check button */}
                  <button
                    type="button"
                    onClick={(e) => handleToggleWatched(e, video.id)}
                    className={`absolute top-3 right-3 p-1.5 rounded-xl backdrop-blur-md transition ${
                      isDone
                        ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                        : 'bg-black/50 hover:bg-black/70 text-white/70 hover:text-white border border-white/20'
                    }`}
                    title={isDone ? "O‘zlashtirilgan (o‘chirish uchun bosing)" : "Tugallangan deb belgilash"}
                  >
                    {isDone ? <CheckCircle2 size={16} /> : <Circle size={16} />}
                  </button>

                  {/* Play Hover Button in center */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                      <Play size={20} className="fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Duration badge */}
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-lg bg-black/70 backdrop-blur-md text-white text-[10px] font-bold flex items-center space-x-1">
                    <Clock size={11} />
                    <span>{video.duration}</span>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-2 leading-snug">
                      {video.titleUz}
                    </h3>

                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 line-clamp-1">
                      {video.titleDe}
                    </p>

                    <p className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {video.descriptionUz}
                    </p>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {video.topics.slice(0, 3).map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-medium"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom features bar */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                      <Headphones size={13} className="text-brand-500" />
                      <span>{video.shadowingPhrases.length} ta jumla</span>
                    </div>

                    <button
                      type="button"
                      className="px-3.5 py-1.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-brand-600 dark:hover:bg-brand-600 text-white font-bold text-xs flex items-center space-x-1.5 transition group-hover:bg-brand-600"
                    >
                      <Play size={12} className="fill-current" />
                      <span>Darsni ochish</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="p-16 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
          <p className="text-base font-bold text-slate-700 dark:text-slate-300">
            Qidiruv bo‘yicha video darslar topilmadi
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Filtrlarni tozalab ko‘ring yoki boshqa so‘z bilan qidiring.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setRangeFilter('all');
              setShowOnlyUnwatched(false);
            }}
            className="px-4 py-2 rounded-xl bg-brand-600 text-white font-bold text-xs shadow-sm hover:bg-brand-700 transition"
          >
            Filtrlarni bekor qilish
          </button>
        </div>
      )}
    </div>
  );
};
