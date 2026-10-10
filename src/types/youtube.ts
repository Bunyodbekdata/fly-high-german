import { GermanArticle } from './database';

export type YoutubeLevel = 'a1' | 'a2' | 'b1' | 'b2' | string;

export interface ShadowingPhrase {
  id: string;
  german: string;
  uzbek: string;
  phoneticHint?: string;
}

export interface VideoVocabulary {
  german: string;
  uzbek: string;
  article?: 'der' | 'die' | 'das' | string | null;
  plural?: string;
}

export interface UserVideoNote {
  id: string;
  videoId: string;
  german: string;
  uzbek: string;
  article?: 'der' | 'die' | 'das' | string | null;
  example?: string;
  createdAt: string;
}

export interface YoutubeLessonVideo {
  id: string;
  channelId: string;
  level: YoutubeLevel;
  episodeNumber: number;
  titleUz: string;
  titleDe: string;
  descriptionUz: string;
  youtubeId: string; // 11-char ID or full URL
  duration: string;
  topics: string[];
  shadowingPhrases: ShadowingPhrase[];
  keyVocabulary: VideoVocabulary[];
}

export interface YoutubeChannel {
  id: string;
  name: string;
  level: YoutubeLevel;
  courseTitleUz: string;
  badge: string;
  instructorUz: string;
  descriptionUz: string;
  avatarUrl: string;
  bannerGradient: string;
  totalVideos: number;
  tags: string[];
  externalPlaylistUrl?: string;
}
