import React from 'react';
import { YoutubeChannel } from '../../types/youtube';
import { YoutubeStorageService } from '../../data/youtubeCourses';
import { PlayCircle, CheckCircle, Video, BookOpen, ArrowRight, Sparkles } from 'lucide-react';

interface YoutubeChannelCardProps {
  channel: YoutubeChannel;
  onSelect: (channel: YoutubeChannel) => void;
}

export const YoutubeChannelCard: React.FC<YoutubeChannelCardProps> = ({ channel, onSelect }) => {
  const progress = YoutubeStorageService.getChannelProgress(channel.id, channel.totalVideos);

  return (
    <div 
      onClick={() => onSelect(channel)}
      className="group relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between hover:-translate-y-1"
    >
      {/* Top Banner with Gradient */}
      <div className={`h-28 bg-gradient-to-r ${channel.bannerGradient} relative p-5 flex items-start justify-between overflow-hidden`}>
        {/* Decorative backdrop shapes */}
        <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-white/10 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />
        <div className="absolute -left-4 -top-4 w-20 h-20 bg-white/10 rounded-full blur-lg" />

        <div className="relative z-10 flex items-center space-x-2">
          <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[11px] font-bold rounded-full border border-white/25 shadow-sm flex items-center space-x-1">
            <Sparkles size={12} className="text-amber-300" />
            <span>{channel.badge}</span>
          </span>
          <span className="px-2.5 py-1 bg-black/30 backdrop-blur-md text-white text-[10px] font-black rounded-full uppercase tracking-wider">
            {channel.level.toUpperCase()}
          </span>
        </div>

        {/* Video Count Badge */}
        <div className="relative z-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-2xl shadow-sm text-slate-800 dark:text-white text-xs font-extrabold flex items-center space-x-1.5">
          <Video size={13} className="text-brand-600 dark:text-brand-400" />
          <span>{channel.totalVideos} ta video</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          {/* Avatar and Channel Name */}
          <div className="flex items-center space-x-3.5 -mt-10 relative z-20">
            <div className="w-14 h-14 rounded-2xl p-1 bg-white dark:bg-slate-900 shadow-md border border-slate-100 dark:border-slate-800">
              <img 
                src={channel.avatarUrl} 
                alt={channel.name} 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="pt-4">
              <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                {channel.name}
              </h3>
              <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                {channel.instructorUz}
              </p>
            </div>
          </div>

          {/* Course title & description */}
          <div>
            <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 line-clamp-1 mb-1">
              {channel.courseTitleUz}
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
              {channel.descriptionUz}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {channel.tags.slice(0, 3).map((tag, idx) => (
              <span 
                key={idx}
                className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 text-[10px] font-semibold"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Progress & Action */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-3">
          {/* Progress bar */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center space-x-1">
                <CheckCircle size={12} className={progress.completed > 0 ? "text-emerald-500" : "text-slate-400"} />
                <span>O‘zlashtirish:</span>
              </span>
              <span className="font-bold text-slate-800 dark:text-slate-200 text-xs">
                {progress.completed} / {channel.totalVideos} ta ({progress.percentage}%)
              </span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-brand-600 dark:bg-brand-500 rounded-full transition-all duration-500"
                style={{ width: `${progress.percentage}%` }}
              />
            </div>
          </div>

          {/* Open Button */}
          <button 
            type="button"
            className="w-full py-2.5 px-4 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-brand-600 dark:hover:bg-brand-600 text-white font-bold text-xs flex items-center justify-center space-x-2 transition-all duration-200 shadow-sm group-hover:bg-brand-600"
          >
            <PlayCircle size={15} />
            <span>Kanal darslarini ko‘rish ({channel.totalVideos} ta video)</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
