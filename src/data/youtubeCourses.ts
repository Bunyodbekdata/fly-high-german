import { YoutubeChannel, YoutubeLessonVideo, ShadowingPhrase, VideoVocabulary, YoutubeLevel } from '../types/youtube';

export function extractYoutubeId(input: string): string {
  if (!input) return '';
  const trimmed = input.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }
  const shortMatch = trimmed.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch) return shortMatch[1];

  const longMatch = trimmed.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (longMatch) return longMatch[1];

  const embedMatch = trimmed.match(/embed\/([a-zA-Z0-9_-]{11})/);
  if (embedMatch) return embedMatch[1];

  const shortsMatch = trimmed.match(/shorts\/([a-zA-Z0-9_-]{11})/);
  if (shortsMatch) return shortsMatch[1];

  return trimmed;
}

export function getYoutubeThumbnailUrl(youtubeId: string): string {
  const cleanId = extractYoutubeId(youtubeId);
  if (!cleanId) return 'https://images.unsplash.com/photo-1527866959252-deab85ef7d1b?auto=format&fit=crop&w=640&q=80';
  return `https://img.youtube.com/vi/${cleanId}/mqdefault.jpg`;
}

// ----------------------------------------------------
// REAL YOUTUBE CHANNELS (A1 LEVEL CHANNELS PROVIDED BY USER)
// ----------------------------------------------------
export const YOUTUBE_CHANNELS: YoutubeChannel[] = [
  {
    id: 'ibrat-nemis-a1',
    name: 'Ibrat Farzandlari',
    level: 'a1',
    courseTitleUz: 'Nemis tilidan intensiv darslar (100 ta video)',
    badge: '100 ta dars • Rasmiy kurs',
    instructorUz: 'Ibrat Farzandlari ustozlari',
    descriptionUz: 'Yoshlar ishlari agentligining eng mashhur loyihasi. Salomlashish, tanishuvlar, grammatika, kundalik dialoglar va A1 imtihonga tayyorgarlik bo‘yicha 100 ta to‘liq video dars.',
    avatarUrl: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=200&h=200&q=80',
    bannerGradient: 'from-blue-700 via-indigo-700 to-purple-800',
    totalVideos: 100,
    tags: ['Noldan boshlash', 'Grammatika', 'Muloqot', 'A1', 'Ibrat'],
    externalPlaylistUrl: 'https://youtube.com/playlist?list=PLkREkayoYCyIYpyhgshcTvsBTsKU8oJUi'
  },
  {
    id: 'deutsch-dialoge-a1',
    name: 'Nemis Tili: Dialoglar & Talaffuz',
    level: 'a1',
    courseTitleUz: 'A1.1 Deutsch lernen mit Dialogen / Aussprache (49 ta video)',
    badge: '49 ta dars • Jonli talaffuz',
    instructorUz: 'Deutsch lernen mit Dialogen',
    descriptionUz: 'Nemis tilida tabiiy so‘zlashuv, kundalik muloqot dialoglari, fonetika va to‘g‘ri talaffuzga (Aussprache) ixtisoslashtirilgan 49 ta video darslik.',
    avatarUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=200&h=200&q=80',
    bannerGradient: 'from-amber-600 via-orange-600 to-rose-700',
    totalVideos: 49,
    tags: ['Dialoglar', 'Aussprache', 'Talaffuz', 'A1'],
    externalPlaylistUrl: 'https://youtube.com/playlist?list=PLvGPylmSp7lrvDQtaiBXdvndDfrxn60vE'
  },
  {
    id: 'nicos-weg-a1',
    name: 'Deutsche Welle: Nicos Weg (A1)',
    level: 'a1',
    courseTitleUz: 'Nicos Weg — A1 Einfach Deutsch lernen (80 ta qism)',
    badge: '80 ta dars • DW Rasmiy kursi',
    instructorUz: 'Deutsche Welle Akademiyasi',
    descriptionUz: 'Germaniyaning jahonga mashhur Deutsche Welle kanali tomonidan yaratilgan to‘liq A1 o‘quv filmi. Niko sarguzashtlari orqali kundalik nemis tilini noldan o‘rganish.',
    avatarUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=200&h=200&q=80',
    bannerGradient: 'from-emerald-600 via-teal-600 to-cyan-700',
    totalVideos: 80,
    tags: ['Deutsche Welle', 'Nicos Weg', 'A1', 'Video film'],
    externalPlaylistUrl: 'https://youtube.com/playlist?list=PLs7zUO7VPyJ6eoN6SmB1UcwvPUagK87ix'
  },
  {
    id: 'ibrat-nemis-a2',
    name: 'Ibrat Farzandlari (A2)',
    level: 'a2',
    courseTitleUz: 'Nemis tili A2 to‘liq kursi (50 ta video)',
    badge: '50 ta dars • Davomiy bosqich',
    instructorUz: 'Ibrat Farzandlari ustozlari',
    descriptionUz: 'A1 darajasini tugatganlar uchun davomiy bosqich: modal fe’llar, o‘tgan zamon (Perfekt), fe’l boshqaruvi va erkin so‘zlashuv mavzulari.',
    avatarUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=200&h=200&q=80',
    bannerGradient: 'from-purple-700 via-pink-700 to-rose-700',
    totalVideos: 50,
    tags: ['A2', 'Perfekt', 'Modalverben', 'So‘zlashuv']
  }
];

// MASTER LIST OF ALL VIDEOS
export const ALL_YOUTUBE_VIDEOS: YoutubeLessonVideo[] = [
  ...[
  {
    "id": "ibrat-a1-ep01",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 1,
    "titleUz": "1-dars: Tanishuvlar. Salomlashish va o'zini tanishtirish",
    "titleDe": "Tanishuvlar. Salomlashish va o'zini tanishtirish | 1-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 1-qismi. Mavzu: 1-dars: Tanishuvlar. Salomlashish va o'zini tanishtirish. Davomiyligi: 29:16.",
    "youtubeId": "gGc58MJBsxQ",
    "duration": "29:16",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-1-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 1.",
        "uzbek": "Xayrli kun! 1-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 1]"
      },
      {
        "id": "ib-1-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep02",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 2,
    "titleUz": "2-dars: Tanishuvlar Boshqalarni tanishtirish",
    "titleDe": "Tanishuvlar Boshqalarni tanishtirish | 2-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 2-qismi. Mavzu: 2-dars: Tanishuvlar Boshqalarni tanishtirish. Davomiyligi: 23:07.",
    "youtubeId": "XqJmcNmn7A4",
    "duration": "23:07",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-2-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 2.",
        "uzbek": "Xayrli kun! 2-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 2]"
      },
      {
        "id": "ib-2-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep03",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 3,
    "titleUz": "3-dars: Shaharlar",
    "titleDe": "Shaharlar | 3-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 3-qismi. Mavzu: 3-dars: Shaharlar. Davomiyligi: 40:55.",
    "youtubeId": "4GCvCAF3LOU",
    "duration": "40:55",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-3-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 3.",
        "uzbek": "Xayrli kun! 3-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 3]"
      },
      {
        "id": "ib-3-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep04",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 4,
    "titleUz": "4-dars: Shaharlar va davlatlar",
    "titleDe": "Shaharlar va davlatlar | 4-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 4-qismi. Mavzu: 4-dars: Shaharlar va davlatlar. Davomiyligi: 38:33.",
    "youtubeId": "K5AK5eADbh0",
    "duration": "38:33",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-4-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 4.",
        "uzbek": "Xayrli kun! 4-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 4]"
      },
      {
        "id": "ib-4-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep05",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 5,
    "titleUz": "5-dars: Millatlar",
    "titleDe": "Millatlar | 5-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 5-qismi. Mavzu: 5-dars: Millatlar. Davomiyligi: 18:55.",
    "youtubeId": "Pcs-61d7EbE",
    "duration": "18:55",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-5-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 5.",
        "uzbek": "Xayrli kun! 5-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 5]"
      },
      {
        "id": "ib-5-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep06",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 6,
    "titleUz": "6-dars: Tillar",
    "titleDe": "Tillar | 6-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 6-qismi. Mavzu: 6-dars: Tillar. Davomiyligi: 31:39.",
    "youtubeId": "gNjvnCOOsd8",
    "duration": "31:39",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-6-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 6.",
        "uzbek": "Xayrli kun! 6-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 6]"
      },
      {
        "id": "ib-6-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep07",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 7,
    "titleUz": "7-dars: Kasblar",
    "titleDe": "Kasblar | 7-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 7-qismi. Mavzu: 7-dars: Kasblar. Davomiyligi: 37:55.",
    "youtubeId": "Ep79YbRCvDQ",
    "duration": "37:55",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-7-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 7.",
        "uzbek": "Xayrli kun! 7-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 7]"
      },
      {
        "id": "ib-7-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep08",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 8,
    "titleUz": "8-dars: Ishxona",
    "titleDe": "Ishxona | 8-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 8-qismi. Mavzu: 8-dars: Ishxona. Davomiyligi: 26:10.",
    "youtubeId": "B8fmMIO7ygA",
    "duration": "26:10",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-8-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 8.",
        "uzbek": "Xayrli kun! 8-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 8]"
      },
      {
        "id": "ib-8-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep09",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 9,
    "titleUz": "9-dars: Ishxona buyumlari",
    "titleDe": "Ishxona buyumlari | 9-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 9-qismi. Mavzu: 9-dars: Ishxona buyumlari. Davomiyligi: 18:11.",
    "youtubeId": "dPhmYKPqWrw",
    "duration": "18:11",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-9-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 9.",
        "uzbek": "Xayrli kun! 9-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 9]"
      },
      {
        "id": "ib-9-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep10",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 10,
    "titleUz": "10-dars: Takrorlash | WIEDERHOLUNG",
    "titleDe": "Takrorlash | WIEDERHOLUNG | 10-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 10-qismi. Mavzu: 10-dars: Takrorlash | WIEDERHOLUNG. Davomiyligi: 33:42.",
    "youtubeId": "5GVEOpT7vyA",
    "duration": "33:42",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-10-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 10.",
        "uzbek": "Xayrli kun! 10-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 10]"
      },
      {
        "id": "ib-10-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep11",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 11,
    "titleUz": "11-dars: Gegenstände im Büro",
    "titleDe": "Gegenstände im Büro | 11-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 11-qismi. Mavzu: 11-dars: Gegenstände im Büro. Davomiyligi: 30:58.",
    "youtubeId": "E507qvzKAkc",
    "duration": "30:58",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-11-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 11.",
        "uzbek": "Xayrli kun! 11-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 11]"
      },
      {
        "id": "ib-11-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep12",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 12,
    "titleUz": "12-dars: Gegenstände im Büro 2",
    "titleDe": "Gegenstände im Büro 2 | 12-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 12-qismi. Mavzu: 12-dars: Gegenstände im Büro 2. Davomiyligi: 37:26.",
    "youtubeId": "O701zIp9-yc",
    "duration": "37:26",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-12-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 12.",
        "uzbek": "Xayrli kun! 12-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 12]"
      },
      {
        "id": "ib-12-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep13",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 13,
    "titleUz": "13-dars: Firma va kasblar",
    "titleDe": "Firma va kasblar | 13-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 13-qismi. Mavzu: 13-dars: Firma va kasblar. Davomiyligi: 11:27.",
    "youtubeId": "5PlGWrJ4WkY",
    "duration": "11:27",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-13-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 13.",
        "uzbek": "Xayrli kun! 13-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 13]"
      },
      {
        "id": "ib-13-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep14",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 14,
    "titleUz": "14-dars: Berufliche Kontakte austauschen",
    "titleDe": "Berufliche Kontakte austauschen | 14-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 14-qismi. Mavzu: 14-dars: Berufliche Kontakte austauschen. Davomiyligi: 27:21.",
    "youtubeId": "1ZQR69E4RUw",
    "duration": "27:21",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-14-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 14.",
        "uzbek": "Xayrli kun! 14-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 14]"
      },
      {
        "id": "ib-14-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep15",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 15,
    "titleUz": "15-dars: Uhrzeiten",
    "titleDe": "Uhrzeiten | 15-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 15-qismi. Mavzu: 15-dars: Uhrzeiten. Davomiyligi: 32:21.",
    "youtubeId": "qWRNuqwJvc0",
    "duration": "32:21",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-15-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 15.",
        "uzbek": "Xayrli kun! 15-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 15]"
      },
      {
        "id": "ib-15-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep16",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 16,
    "titleUz": "16-dars: Essen und Getränke",
    "titleDe": "Essen und Getränke | 16-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 16-qismi. Mavzu: 16-dars: Essen und Getränke. Davomiyligi: 29:43.",
    "youtubeId": "j-AmOKhKjnk",
    "duration": "29:43",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-16-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 16.",
        "uzbek": "Xayrli kun! 16-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 16]"
      },
      {
        "id": "ib-16-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep17",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 17,
    "titleUz": "17-dars: Essen und Getränke 2",
    "titleDe": "Essen und Getränke 2 | 17-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 17-qismi. Mavzu: 17-dars: Essen und Getränke 2. Davomiyligi: 45:51.",
    "youtubeId": "Hcgj0u-xOVk",
    "duration": "45:51",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-17-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 17.",
        "uzbek": "Xayrli kun! 17-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 17]"
      },
      {
        "id": "ib-17-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep18",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 18,
    "titleUz": "18-dars: Essen und Getränke 3",
    "titleDe": "Essen und Getränke 3 | 18-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 18-qismi. Mavzu: 18-dars: Essen und Getränke 3. Davomiyligi: 51:58.",
    "youtubeId": "ZpjTlxgzNm8",
    "duration": "51:58",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-18-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 18.",
        "uzbek": "Xayrli kun! 18-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 18]"
      },
      {
        "id": "ib-18-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep19",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 19,
    "titleUz": "19-dars: Essen und Getränke 4",
    "titleDe": "Essen und Getränke 4 | 19-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 19-qismi. Mavzu: 19-dars: Essen und Getränke 4. Davomiyligi: 43:41.",
    "youtubeId": "xcbhvHDHLkA",
    "duration": "43:41",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-19-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 19.",
        "uzbek": "Xayrli kun! 19-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 19]"
      },
      {
        "id": "ib-19-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep20",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 20,
    "titleUz": "20-dars: WIEDERHOLUNG",
    "titleDe": "WIEDERHOLUNG | 20-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 20-qismi. Mavzu: 20-dars: WIEDERHOLUNG. Davomiyligi: 12:14.",
    "youtubeId": "Yjcxstv-Cgw",
    "duration": "12:14",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-20-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 20.",
        "uzbek": "Xayrli kun! 20-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 20]"
      },
      {
        "id": "ib-20-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep21",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 21,
    "titleUz": "21-dars: Kleidung",
    "titleDe": "Kleidung | 21-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 21-qismi. Mavzu: 21-dars: Kleidung. Davomiyligi: 24:31.",
    "youtubeId": "_GKWAfNpBOk",
    "duration": "24:31",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-21-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 21.",
        "uzbek": "Xayrli kun! 21-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 21]"
      },
      {
        "id": "ib-21-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep22",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 22,
    "titleUz": "22-dars: Kleidung - 2",
    "titleDe": "Kleidung - 2 | 22-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 22-qismi. Mavzu: 22-dars: Kleidung - 2. Davomiyligi: 21:32.",
    "youtubeId": "pxm3B09K-1U",
    "duration": "21:32",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-22-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 22.",
        "uzbek": "Xayrli kun! 22-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 22]"
      },
      {
        "id": "ib-22-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep23",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 23,
    "titleUz": "23-dars: Kleidung - 3",
    "titleDe": "Kleidung - 3 | 23-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 23-qismi. Mavzu: 23-dars: Kleidung - 3. Davomiyligi: 25:08.",
    "youtubeId": "0J4RT7WAcZY",
    "duration": "25:08",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-23-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 23.",
        "uzbek": "Xayrli kun! 23-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 23]"
      },
      {
        "id": "ib-23-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep24",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 24,
    "titleUz": "24-dars: Kleidung - 4",
    "titleDe": "Kleidung - 4 | 24-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 24-qismi. Mavzu: 24-dars: Kleidung - 4. Davomiyligi: 22:48.",
    "youtubeId": "E4-LVnm5XzY",
    "duration": "22:48",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-24-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 24.",
        "uzbek": "Xayrli kun! 24-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 24]"
      },
      {
        "id": "ib-24-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep25",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 25,
    "titleUz": "25-dars: Kleidung - 5",
    "titleDe": "Kleidung - 5 | 25-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 25-qismi. Mavzu: 25-dars: Kleidung - 5. Davomiyligi: 16:13.",
    "youtubeId": "VD-ntKS0Bxs",
    "duration": "16:13",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-25-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 25.",
        "uzbek": "Xayrli kun! 25-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 25]"
      },
      {
        "id": "ib-25-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep26",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 26,
    "titleUz": "26-dars: Verkehrsmittel und Stadtpläne",
    "titleDe": "Verkehrsmittel und Stadtpläne | 26-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 26-qismi. Mavzu: 26-dars: Verkehrsmittel und Stadtpläne. Davomiyligi: 17:47.",
    "youtubeId": "5ANaNbvWWOs",
    "duration": "17:47",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-26-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 26.",
        "uzbek": "Xayrli kun! 26-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 26]"
      },
      {
        "id": "ib-26-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep27",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 27,
    "titleUz": "27-dars: Verkehrsmittel und Stadtpläne - 2",
    "titleDe": "Verkehrsmittel und Stadtpläne - 2 | 27-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 27-qismi. Mavzu: 27-dars: Verkehrsmittel und Stadtpläne - 2. Davomiyligi: 22:21.",
    "youtubeId": "Z0rtcUqfjrs",
    "duration": "22:21",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-27-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 27.",
        "uzbek": "Xayrli kun! 27-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 27]"
      },
      {
        "id": "ib-27-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep28",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 28,
    "titleUz": "28-dars: Verkehrsmittel und Stadtpläne - 3",
    "titleDe": "Verkehrsmittel und Stadtpläne - 3 | 28-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 28-qismi. Mavzu: 28-dars: Verkehrsmittel und Stadtpläne - 3. Davomiyligi: 16:00.",
    "youtubeId": "F6Icug0yeDM",
    "duration": "16:00",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-28-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 28.",
        "uzbek": "Xayrli kun! 28-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 28]"
      },
      {
        "id": "ib-28-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep29",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 29,
    "titleUz": "29-dars: Verkehrsmittel und Stadtpläne - 4",
    "titleDe": "Verkehrsmittel und Stadtpläne - 4 | 29-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 29-qismi. Mavzu: 29-dars: Verkehrsmittel und Stadtpläne - 4. Davomiyligi: 11:34.",
    "youtubeId": "hsNAItangIY",
    "duration": "11:34",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-29-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 29.",
        "uzbek": "Xayrli kun! 29-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 29]"
      },
      {
        "id": "ib-29-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep30",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 30,
    "titleUz": "30-dars: Nach dem weg fragen",
    "titleDe": "Nach dem weg fragen | 30-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 30-qismi. Mavzu: 30-dars: Nach dem weg fragen. Davomiyligi: 15:16.",
    "youtubeId": "nZOVICIBUto",
    "duration": "15:16",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-30-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 30.",
        "uzbek": "Xayrli kun! 30-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 30]"
      },
      {
        "id": "ib-30-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep31",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 31,
    "titleUz": "31-dars: Verkehrsmittel und Stadtpläne - 5",
    "titleDe": "Verkehrsmittel und Stadtpläne - 5 | 31-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 31-qismi. Mavzu: 31-dars: Verkehrsmittel und Stadtpläne - 5. Davomiyligi: 21:45.",
    "youtubeId": "Va14Qg-6VYs",
    "duration": "21:45",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-31-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 31.",
        "uzbek": "Xayrli kun! 31-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 31]"
      },
      {
        "id": "ib-31-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep32",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 32,
    "titleUz": "32-dars: Familie",
    "titleDe": "Familie | 32-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 32-qismi. Mavzu: 32-dars: Familie. Davomiyligi: 15:24.",
    "youtubeId": "c5ySA7VfJbI",
    "duration": "15:24",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-32-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 32.",
        "uzbek": "Xayrli kun! 32-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 32]"
      },
      {
        "id": "ib-32-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep33",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 33,
    "titleUz": "33-dars: Familie - 2",
    "titleDe": "Familie - 2 | 33-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 33-qismi. Mavzu: 33-dars: Familie - 2. Davomiyligi: 14:01.",
    "youtubeId": "1HJ-feRa0VU",
    "duration": "14:01",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-33-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 33.",
        "uzbek": "Xayrli kun! 33-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 33]"
      },
      {
        "id": "ib-33-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep34",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 34,
    "titleUz": "34-dars: Familie - 3",
    "titleDe": "Familie - 3 | 34-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 34-qismi. Mavzu: 34-dars: Familie - 3. Davomiyligi: 18:55.",
    "youtubeId": "L7VyJqW51Kw",
    "duration": "18:55",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-34-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 34.",
        "uzbek": "Xayrli kun! 34-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 34]"
      },
      {
        "id": "ib-34-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep35",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 35,
    "titleUz": "35-dars: Familie - 4",
    "titleDe": "Familie - 4 | 35-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 35-qismi. Mavzu: 35-dars: Familie - 4. Davomiyligi: 16:34.",
    "youtubeId": "g7kXiUw_bgk",
    "duration": "16:34",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-35-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 35.",
        "uzbek": "Xayrli kun! 35-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 35]"
      },
      {
        "id": "ib-35-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep36",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 36,
    "titleUz": "36-dars: Die Jahreszeiten und das Wetter",
    "titleDe": "Die Jahreszeiten und das Wetter | 36-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 36-qismi. Mavzu: 36-dars: Die Jahreszeiten und das Wetter. Davomiyligi: 19:14.",
    "youtubeId": "PVMDjVqRyMs",
    "duration": "19:14",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-36-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 36.",
        "uzbek": "Xayrli kun! 36-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 36]"
      },
      {
        "id": "ib-36-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep37",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 37,
    "titleUz": "37-dars: Die Jahreszeiten und das Wetter - 2",
    "titleDe": "Die Jahreszeiten und das Wetter - 2 | 37-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 37-qismi. Mavzu: 37-dars: Die Jahreszeiten und das Wetter - 2. Davomiyligi: 28:45.",
    "youtubeId": "MJ3fFlpHLRU",
    "duration": "28:45",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-37-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 37.",
        "uzbek": "Xayrli kun! 37-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 37]"
      },
      {
        "id": "ib-37-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep38",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 38,
    "titleUz": "38-dars: Freizeitaktivitäten",
    "titleDe": "Freizeitaktivitäten | 38-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 38-qismi. Mavzu: 38-dars: Freizeitaktivitäten. Davomiyligi: 13:37.",
    "youtubeId": "ZoD185uprbU",
    "duration": "13:37",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-38-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 38.",
        "uzbek": "Xayrli kun! 38-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 38]"
      },
      {
        "id": "ib-38-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep39",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 39,
    "titleUz": "39-dars: Freizeitaktivitäten - 2",
    "titleDe": "Freizeitaktivitäten - 2 | 39-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 39-qismi. Mavzu: 39-dars: Freizeitaktivitäten - 2. Davomiyligi: 26:03.",
    "youtubeId": "Bsfi3bsPZYA",
    "duration": "26:03",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-39-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 39.",
        "uzbek": "Xayrli kun! 39-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 39]"
      },
      {
        "id": "ib-39-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep40",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 40,
    "titleUz": "40-dars: Freizeitaktivitäten - 3",
    "titleDe": "Freizeitaktivitäten - 3 | 40-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 40-qismi. Mavzu: 40-dars: Freizeitaktivitäten - 3. Davomiyligi: 12:37.",
    "youtubeId": "L1Zg8PfUAqg",
    "duration": "12:37",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-40-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 40.",
        "uzbek": "Xayrli kun! 40-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 40]"
      },
      {
        "id": "ib-40-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep41",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 41,
    "titleUz": "41-dars: Freizeitaktivitäten - 4",
    "titleDe": "Freizeitaktivitäten - 4 | 41-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 41-qismi. Mavzu: 41-dars: Freizeitaktivitäten - 4. Davomiyligi: 21:08.",
    "youtubeId": "i91YuODWheM",
    "duration": "21:08",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-41-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 41.",
        "uzbek": "Xayrli kun! 41-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 41]"
      },
      {
        "id": "ib-41-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep42",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 42,
    "titleUz": "42-dars: Freizeitaktivitäten - 5",
    "titleDe": "Freizeitaktivitäten - 5 | 42-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 42-qismi. Mavzu: 42-dars: Freizeitaktivitäten - 5. Davomiyligi: 19:13.",
    "youtubeId": "zNV4u1Wc_Bc",
    "duration": "19:13",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-42-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 42.",
        "uzbek": "Xayrli kun! 42-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 42]"
      },
      {
        "id": "ib-42-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep43",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 43,
    "titleUz": "43-dars: Freizeitaktivitäten - 6",
    "titleDe": "Freizeitaktivitäten - 6 | 43-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 43-qismi. Mavzu: 43-dars: Freizeitaktivitäten - 6. Davomiyligi: 17:09.",
    "youtubeId": "fICHePuwzdU",
    "duration": "17:09",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-43-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 43.",
        "uzbek": "Xayrli kun! 43-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 43]"
      },
      {
        "id": "ib-43-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep44",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 44,
    "titleUz": "44-dars: Zugreisen",
    "titleDe": "Zugreisen | 44-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 44-qismi. Mavzu: 44-dars: Zugreisen. Davomiyligi: 20:22.",
    "youtubeId": "LK-QFQEcajg",
    "duration": "20:22",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-44-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 44.",
        "uzbek": "Xayrli kun! 44-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 44]"
      },
      {
        "id": "ib-44-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep45",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 45,
    "titleUz": "45-dars: Flug﻿- und Zugreisen",
    "titleDe": "Flug﻿- und Zugreisen | 45-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 45-qismi. Mavzu: 45-dars: Flug﻿- und Zugreisen. Davomiyligi: 16:55.",
    "youtubeId": "Akvw3gNCkFQ",
    "duration": "16:55",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-45-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 45.",
        "uzbek": "Xayrli kun! 45-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 45]"
      },
      {
        "id": "ib-45-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep46",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 46,
    "titleUz": "46-dars: Urlaubsplȁene",
    "titleDe": "Urlaubsplȁene | 46-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 46-qismi. Mavzu: 46-dars: Urlaubsplȁene. Davomiyligi: 16:22.",
    "youtubeId": "LzwYGauls88",
    "duration": "16:22",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-46-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 46.",
        "uzbek": "Xayrli kun! 46-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 46]"
      },
      {
        "id": "ib-46-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep47",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 47,
    "titleUz": "47-dars: MEHMONXONALAR",
    "titleDe": "MEHMONXONALAR | 47-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 47-qismi. Mavzu: 47-dars: MEHMONXONALAR. Davomiyligi: 19:08.",
    "youtubeId": "-cDjWhLddrI",
    "duration": "19:08",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-47-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 47.",
        "uzbek": "Xayrli kun! 47-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 47]"
      },
      {
        "id": "ib-47-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep48",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 48,
    "titleUz": "48-dars: Mehmonxonalar - 2",
    "titleDe": "Mehmonxonalar - 2 | 48-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 48-qismi. Mavzu: 48-dars: Mehmonxonalar - 2. Davomiyligi: 17:47.",
    "youtubeId": "nmy-12b85VI",
    "duration": "17:47",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-48-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 48.",
        "uzbek": "Xayrli kun! 48-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 48]"
      },
      {
        "id": "ib-48-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep49",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 49,
    "titleUz": "49-dars: Mehmonxonalar - 3",
    "titleDe": "Mehmonxonalar - 3 | 49-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 49-qismi. Mavzu: 49-dars: Mehmonxonalar - 3. Davomiyligi: 20:18.",
    "youtubeId": "FxAMbOPx2xk",
    "duration": "20:18",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-49-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 49.",
        "uzbek": "Xayrli kun! 49-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 49]"
      },
      {
        "id": "ib-49-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep50",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 50,
    "titleUz": "50-dars: Firma va Mahsulotlar",
    "titleDe": "Firma va Mahsulotlar | 50-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 50-qismi. Mavzu: 50-dars: Firma va Mahsulotlar. Davomiyligi: 22:12.",
    "youtubeId": "0TX8ER63-zs",
    "duration": "22:12",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-50-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 50.",
        "uzbek": "Xayrli kun! 50-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 50]"
      },
      {
        "id": "ib-50-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep51",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 51,
    "titleUz": "51-dars: Firma va Mahsulotlar - 2",
    "titleDe": "Firma va Mahsulotlar - 2 | 51-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 51-qismi. Mavzu: 51-dars: Firma va Mahsulotlar - 2. Davomiyligi: 16:29.",
    "youtubeId": "0ofY8bF1QgU",
    "duration": "16:29",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-51-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 51.",
        "uzbek": "Xayrli kun! 51-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 51]"
      },
      {
        "id": "ib-51-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep52",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 52,
    "titleUz": "52-dars: Firma va Mahsulotlar - 3",
    "titleDe": "Firma va Mahsulotlar - 3 | 52-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 52-qismi. Mavzu: 52-dars: Firma va Mahsulotlar - 3. Davomiyligi: 14:13.",
    "youtubeId": "KY03K5FAcjQ",
    "duration": "14:13",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-52-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 52.",
        "uzbek": "Xayrli kun! 52-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 52]"
      },
      {
        "id": "ib-52-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep53",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 53,
    "titleUz": "53-dars: Firma va Mahsulotlar - 4",
    "titleDe": "Firma va Mahsulotlar - 4 | 53-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 53-qismi. Mavzu: 53-dars: Firma va Mahsulotlar - 4. Davomiyligi: 15:14.",
    "youtubeId": "76dHGz7IW6c",
    "duration": "15:14",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-53-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 53.",
        "uzbek": "Xayrli kun! 53-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 53]"
      },
      {
        "id": "ib-53-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep54",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 54,
    "titleUz": "54-dars: Do'konlar va xarid",
    "titleDe": "Do'konlar va xarid | 54-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 54-qismi. Mavzu: 54-dars: Do'konlar va xarid. Davomiyligi: 12:07.",
    "youtubeId": "Bz_ODnSmwM8",
    "duration": "12:07",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-54-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 54.",
        "uzbek": "Xayrli kun! 54-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 54]"
      },
      {
        "id": "ib-54-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep55",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 55,
    "titleUz": "55-dars: Do'konlar va xarid(2-qism)",
    "titleDe": "Do'konlar va xarid(2-qism) | 55-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 55-qismi. Mavzu: 55-dars: Do'konlar va xarid(2-qism). Davomiyligi: 10:54.",
    "youtubeId": "c3IyEwQepUA",
    "duration": "10:54",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-55-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 55.",
        "uzbek": "Xayrli kun! 55-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 55]"
      },
      {
        "id": "ib-55-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep56",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 56,
    "titleUz": "56-dars: Do'konlar va xarid(3-qism)",
    "titleDe": "Do'konlar va xarid(3-qism) | 56-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 56-qismi. Mavzu: 56-dars: Do'konlar va xarid(3-qism). Davomiyligi: 13:15.",
    "youtubeId": "YsLzE_6y4XM",
    "duration": "13:15",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-56-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 56.",
        "uzbek": "Xayrli kun! 56-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 56]"
      },
      {
        "id": "ib-56-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep57",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 57,
    "titleUz": "57-dars: Do'konlar va xarid(4-qism)",
    "titleDe": "Do'konlar va xarid(4-qism) | 57-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 57-qismi. Mavzu: 57-dars: Do'konlar va xarid(4-qism). Davomiyligi: 10:41.",
    "youtubeId": "7EoaCjygVFA",
    "duration": "10:41",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-57-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 57.",
        "uzbek": "Xayrli kun! 57-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 57]"
      },
      {
        "id": "ib-57-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep58",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 58,
    "titleUz": "58-dars: Telefonda suhbat(1-qism)",
    "titleDe": "Telefonda suhbat(1-qism) | 58-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 58-qismi. Mavzu: 58-dars: Telefonda suhbat(1-qism). Davomiyligi: 12:26.",
    "youtubeId": "bacyFE40exw",
    "duration": "12:26",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-58-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 58.",
        "uzbek": "Xayrli kun! 58-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 58]"
      },
      {
        "id": "ib-58-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep59",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 59,
    "titleUz": "59-dars: Telefonda suhbat(2-qism)",
    "titleDe": "Telefonda suhbat(2-qism) | 59-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 59-qismi. Mavzu: 59-dars: Telefonda suhbat(2-qism). Davomiyligi: 13:17.",
    "youtubeId": "hZ6vQH-XfQI",
    "duration": "13:17",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-59-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 59.",
        "uzbek": "Xayrli kun! 59-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 59]"
      },
      {
        "id": "ib-59-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep60",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 60,
    "titleUz": "60-dars: Telefonda suhbat(3-qism)",
    "titleDe": "Telefonda suhbat(3-qism) | 60-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 60-qismi. Mavzu: 60-dars: Telefonda suhbat(3-qism). Davomiyligi: 13:21.",
    "youtubeId": "TZq75tufZas",
    "duration": "13:21",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-60-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 60.",
        "uzbek": "Xayrli kun! 60-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 60]"
      },
      {
        "id": "ib-60-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep61",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 61,
    "titleUz": "61-dars: Telefonda suhbat(4-qism)",
    "titleDe": "Telefonda suhbat(4-qism) | 61-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 61-qismi. Mavzu: 61-dars: Telefonda suhbat(4-qism). Davomiyligi: 15:34.",
    "youtubeId": "fwzja0y4kvA",
    "duration": "15:34",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-61-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 61.",
        "uzbek": "Xayrli kun! 61-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 61]"
      },
      {
        "id": "ib-61-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep62",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 62,
    "titleUz": "62-dars: Restoranlar (1-qism)",
    "titleDe": "Restoranlar (1-qism) | 62-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 62-qismi. Mavzu: 62-dars: Restoranlar (1-qism). Davomiyligi: 15:35.",
    "youtubeId": "aJX_S6MedQg",
    "duration": "15:35",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-62-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 62.",
        "uzbek": "Xayrli kun! 62-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 62]"
      },
      {
        "id": "ib-62-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep63",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 63,
    "titleUz": "63-dars: Restoranlar (2-qism)",
    "titleDe": "Restoranlar (2-qism) | 63-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 63-qismi. Mavzu: 63-dars: Restoranlar (2-qism). Davomiyligi: 21:09.",
    "youtubeId": "2MukM6YvFQE",
    "duration": "21:09",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-63-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 63.",
        "uzbek": "Xayrli kun! 63-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 63]"
      },
      {
        "id": "ib-63-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep64",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 64,
    "titleUz": "64-dars: Restoranlar (3-qism)",
    "titleDe": "Restoranlar (3-qism) | 64-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 64-qismi. Mavzu: 64-dars: Restoranlar (3-qism). Davomiyligi: 14:28.",
    "youtubeId": "LVgtz_NkzPs",
    "duration": "14:28",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-64-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 64.",
        "uzbek": "Xayrli kun! 64-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 64]"
      },
      {
        "id": "ib-64-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep65",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 65,
    "titleUz": "65-dars: Restoranlar (4-qism)",
    "titleDe": "Restoranlar (4-qism) | 65-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 65-qismi. Mavzu: 65-dars: Restoranlar (4-qism). Davomiyligi: 13:07.",
    "youtubeId": "44KkFJRaC0o",
    "duration": "13:07",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-65-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 65.",
        "uzbek": "Xayrli kun! 65-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 65]"
      },
      {
        "id": "ib-65-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep66",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 66,
    "titleUz": "66-dars: Savdo markazlari",
    "titleDe": "Savdo markazlari | 66-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 66-qismi. Mavzu: 66-dars: Savdo markazlari. Davomiyligi: 11:22.",
    "youtubeId": "odycwh_z6Fc",
    "duration": "11:22",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-66-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 66.",
        "uzbek": "Xayrli kun! 66-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 66]"
      },
      {
        "id": "ib-66-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep67",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 67,
    "titleUz": "67-dars: Savdo markazlari(2-qism)",
    "titleDe": "Savdo markazlari(2-qism) | 67-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 67-qismi. Mavzu: 67-dars: Savdo markazlari(2-qism). Davomiyligi: 14:31.",
    "youtubeId": "aSWAcP_nqZ0",
    "duration": "14:31",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-67-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 67.",
        "uzbek": "Xayrli kun! 67-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 67]"
      },
      {
        "id": "ib-67-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep68",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 68,
    "titleUz": "68-dars: Savdo markazlari(3-qism)",
    "titleDe": "Savdo markazlari(3-qism) | 68-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 68-qismi. Mavzu: 68-dars: Savdo markazlari(3-qism). Davomiyligi: 16:36.",
    "youtubeId": "IlshnUoUwKY",
    "duration": "16:36",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-68-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 68.",
        "uzbek": "Xayrli kun! 68-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 68]"
      },
      {
        "id": "ib-68-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep69",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 69,
    "titleUz": "69-dars: Savdo markazlari(4-qism)",
    "titleDe": "Savdo markazlari(4-qism) | 69-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 69-qismi. Mavzu: 69-dars: Savdo markazlari(4-qism). Davomiyligi: 12:47.",
    "youtubeId": "R50cjXcjPrg",
    "duration": "12:47",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-69-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 69.",
        "uzbek": "Xayrli kun! 69-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 69]"
      },
      {
        "id": "ib-69-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep70",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 70,
    "titleUz": "70-dars: Yo'l harakati vositalari",
    "titleDe": "Yo'l harakati vositalari | 70-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 70-qismi. Mavzu: 70-dars: Yo'l harakati vositalari. Davomiyligi: 12:13.",
    "youtubeId": "Ze0g42XvvtQ",
    "duration": "12:13",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-70-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 70.",
        "uzbek": "Xayrli kun! 70-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 70]"
      },
      {
        "id": "ib-70-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep71",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 71,
    "titleUz": "71-dars: Yo'l harakati vositalari(2-qism)",
    "titleDe": "Yo'l harakati vositalari(2-qism) | 71-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 71-qismi. Mavzu: 71-dars: Yo'l harakati vositalari(2-qism). Davomiyligi: 20:10.",
    "youtubeId": "VpiPWFLRikg",
    "duration": "20:10",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-71-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 71.",
        "uzbek": "Xayrli kun! 71-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 71]"
      },
      {
        "id": "ib-71-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep72",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 72,
    "titleUz": "72-dars: Yo'l harakati vositalari(3-qism)",
    "titleDe": "Yo'l harakati vositalari(3-qism) | 72-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 72-qismi. Mavzu: 72-dars: Yo'l harakati vositalari(3-qism). Davomiyligi: 17:03.",
    "youtubeId": "AA-P4h5kQjw",
    "duration": "17:03",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-72-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 72.",
        "uzbek": "Xayrli kun! 72-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 72]"
      },
      {
        "id": "ib-72-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep73",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 73,
    "titleUz": "73-dars: Uyda",
    "titleDe": "Uyda | 73-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 73-qismi. Mavzu: 73-dars: Uyda. Davomiyligi: 14:05.",
    "youtubeId": "vCfvYULJJH4",
    "duration": "14:05",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-73-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 73.",
        "uzbek": "Xayrli kun! 73-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 73]"
      },
      {
        "id": "ib-73-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep74",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 74,
    "titleUz": "74-dars: Uyda(2-qism)",
    "titleDe": "Uyda(2-qism) | 74-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 74-qismi. Mavzu: 74-dars: Uyda(2-qism). Davomiyligi: 14:51.",
    "youtubeId": "2wMQiLmDaeI",
    "duration": "14:51",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-74-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 74.",
        "uzbek": "Xayrli kun! 74-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 74]"
      },
      {
        "id": "ib-74-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep75",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 75,
    "titleUz": "75-dars: Uyda(3-qism)",
    "titleDe": "Uyda(3-qism) | 75-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 75-qismi. Mavzu: 75-dars: Uyda(3-qism). Davomiyligi: 11:09.",
    "youtubeId": "qH4hVJLoAyQ",
    "duration": "11:09",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-75-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 75.",
        "uzbek": "Xayrli kun! 75-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 75]"
      },
      {
        "id": "ib-75-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep76",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 76,
    "titleUz": "76-dars: Uyda(4-qism)",
    "titleDe": "Uyda(4-qism) | 76-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 76-qismi. Mavzu: 76-dars: Uyda(4-qism). Davomiyligi: 9:11.",
    "youtubeId": "gKd5JxkMguk",
    "duration": "9:11",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-76-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 76.",
        "uzbek": "Xayrli kun! 76-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 76]"
      },
      {
        "id": "ib-76-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep77",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 77,
    "titleUz": "77-dars: Aktivitaen in der Vergangenheit",
    "titleDe": "Aktivitaen in der Vergangenheit | 77-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 77-qismi. Mavzu: 77-dars: Aktivitaen in der Vergangenheit. Davomiyligi: 13:16.",
    "youtubeId": "fdOfun8NJf8",
    "duration": "13:16",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-77-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 77.",
        "uzbek": "Xayrli kun! 77-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 77]"
      },
      {
        "id": "ib-77-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep78",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 78,
    "titleUz": "78-dars: Bo'sh vaqt",
    "titleDe": "Bo'sh vaqt | 78-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 78-qismi. Mavzu: 78-dars: Bo'sh vaqt. Davomiyligi: 13:11.",
    "youtubeId": "x6wvK9ouWbo",
    "duration": "13:11",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-78-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 78.",
        "uzbek": "Xayrli kun! 78-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 78]"
      },
      {
        "id": "ib-78-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep79",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 79,
    "titleUz": "79-dars: Karyera(1-qism)",
    "titleDe": "Karyera(1-qism) | 79-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 79-qismi. Mavzu: 79-dars: Karyera(1-qism). Davomiyligi: 13:31.",
    "youtubeId": "1aY6Z0IFDNg",
    "duration": "13:31",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-79-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 79.",
        "uzbek": "Xayrli kun! 79-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 79]"
      },
      {
        "id": "ib-79-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep80",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 80,
    "titleUz": "80-dars: Karyera(2-qism)",
    "titleDe": "Karyera(2-qism) | 80-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 80-qismi. Mavzu: 80-dars: Karyera(2-qism). Davomiyligi: 9:42.",
    "youtubeId": "wKav8ZgE8fI",
    "duration": "9:42",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-80-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 80.",
        "uzbek": "Xayrli kun! 80-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 80]"
      },
      {
        "id": "ib-80-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep81",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 81,
    "titleUz": "81-dars: Karyera(3-qism)",
    "titleDe": "Karyera(3-qism) | 81-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 81-qismi. Mavzu: 81-dars: Karyera(3-qism). Davomiyligi: 8:29.",
    "youtubeId": "dO5nYSzdloc",
    "duration": "8:29",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-81-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 81.",
        "uzbek": "Xayrli kun! 81-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 81]"
      },
      {
        "id": "ib-81-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep82",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 82,
    "titleUz": "82-dars: Kun tartibi(1-qism)",
    "titleDe": "Kun tartibi(1-qism) | 82-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 82-qismi. Mavzu: 82-dars: Kun tartibi(1-qism). Davomiyligi: 14:55.",
    "youtubeId": "eVenbTjUjaw",
    "duration": "14:55",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-82-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 82.",
        "uzbek": "Xayrli kun! 82-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 82]"
      },
      {
        "id": "ib-82-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep83",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 83,
    "titleUz": "83-dars: Kun tartibi(2-qism)",
    "titleDe": "Kun tartibi(2-qism) | 83-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 83-qismi. Mavzu: 83-dars: Kun tartibi(2-qism). Davomiyligi: 16:38.",
    "youtubeId": "AFfuuSIslzY",
    "duration": "16:38",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-83-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 83.",
        "uzbek": "Xayrli kun! 83-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 83]"
      },
      {
        "id": "ib-83-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep84",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 84,
    "titleUz": "84-dars: Kun tartibi(3-qism)",
    "titleDe": "Kun tartibi(3-qism) | 84-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 84-qismi. Mavzu: 84-dars: Kun tartibi(3-qism). Davomiyligi: 11:07.",
    "youtubeId": "SvRhoTAqebI",
    "duration": "11:07",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-84-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 84.",
        "uzbek": "Xayrli kun! 84-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 84]"
      },
      {
        "id": "ib-84-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep85",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 85,
    "titleUz": "85-dars: O'quv materiallari",
    "titleDe": "O'quv materiallari | 85-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 85-qismi. Mavzu: 85-dars: O'quv materiallari. Davomiyligi: 11:22.",
    "youtubeId": "HZcQFp7V-m4",
    "duration": "11:22",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-85-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 85.",
        "uzbek": "Xayrli kun! 85-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 85]"
      },
      {
        "id": "ib-85-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep86",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 86,
    "titleUz": "86-dars: Bazmlar va uchrashuvlar",
    "titleDe": "Bazmlar va uchrashuvlar | 86-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 86-qismi. Mavzu: 86-dars: Bazmlar va uchrashuvlar. Davomiyligi: 13:18.",
    "youtubeId": "kC_JXCT_Nik",
    "duration": "13:18",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-86-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 86.",
        "uzbek": "Xayrli kun! 86-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 86]"
      },
      {
        "id": "ib-86-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep87",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 87,
    "titleUz": "87-dars: Bazmlar va uchrashuvlar(2-qism)",
    "titleDe": "Bazmlar va uchrashuvlar(2-qism) | 87-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 87-qismi. Mavzu: 87-dars: Bazmlar va uchrashuvlar(2-qism). Davomiyligi: 10:15.",
    "youtubeId": "GhM602Utxqo",
    "duration": "10:15",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-87-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 87.",
        "uzbek": "Xayrli kun! 87-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 87]"
      },
      {
        "id": "ib-87-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep88",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 88,
    "titleUz": "88-dars: Bazmlar va uchrashuvlar(3-qism)",
    "titleDe": "Bazmlar va uchrashuvlar(3-qism) | 88-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 88-qismi. Mavzu: 88-dars: Bazmlar va uchrashuvlar(3-qism). Davomiyligi: 10:34.",
    "youtubeId": "IpeBiAKQtiM",
    "duration": "10:34",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-88-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 88.",
        "uzbek": "Xayrli kun! 88-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 88]"
      },
      {
        "id": "ib-88-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep89",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 89,
    "titleUz": "89-dars: Salomatlik",
    "titleDe": "Salomatlik | 89-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 89-qismi. Mavzu: 89-dars: Salomatlik. Davomiyligi: 14:18.",
    "youtubeId": "mIa3c6CAXWU",
    "duration": "14:18",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-89-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 89.",
        "uzbek": "Xayrli kun! 89-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 89]"
      },
      {
        "id": "ib-89-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep90",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 90,
    "titleUz": "90-dars: Salomatlik(2-qism)",
    "titleDe": "Salomatlik(2-qism) | 90-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 90-qismi. Mavzu: 90-dars: Salomatlik(2-qism). Davomiyligi: 11:09.",
    "youtubeId": "nA0YoRkLe5k",
    "duration": "11:09",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-90-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 90.",
        "uzbek": "Xayrli kun! 90-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 90]"
      },
      {
        "id": "ib-90-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep91",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 91,
    "titleUz": "91-dars: Salomatlik(3-qism)",
    "titleDe": "Salomatlik(3-qism) | 91-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 91-qismi. Mavzu: 91-dars: Salomatlik(3-qism). Davomiyligi: 13:28.",
    "youtubeId": "E10jqkdCAI4",
    "duration": "13:28",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-91-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 91.",
        "uzbek": "Xayrli kun! 91-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 91]"
      },
      {
        "id": "ib-91-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep92",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 92,
    "titleUz": "92-dars: Salomatlik(4-qism)",
    "titleDe": "Salomatlik(4-qism) | 92-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 92-qismi. Mavzu: 92-dars: Salomatlik(4-qism). Davomiyligi: 9:13.",
    "youtubeId": "eLf_-czWnB4",
    "duration": "9:13",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-92-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 92.",
        "uzbek": "Xayrli kun! 92-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 92]"
      },
      {
        "id": "ib-92-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep93",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 93,
    "titleUz": "93-dars: Turizm",
    "titleDe": "Turizm | 93-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 93-qismi. Mavzu: 93-dars: Turizm. Davomiyligi: 13:05.",
    "youtubeId": "AX1wOX0gj5k",
    "duration": "13:05",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-93-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 93.",
        "uzbek": "Xayrli kun! 93-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 93]"
      },
      {
        "id": "ib-93-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep94",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 94,
    "titleUz": "94-dars: Turizm(2-qism)",
    "titleDe": "Turizm(2-qism) | 94-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 94-qismi. Mavzu: 94-dars: Turizm(2-qism). Davomiyligi: 12:07.",
    "youtubeId": "LvDvOU5uFXA",
    "duration": "12:07",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-94-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 94.",
        "uzbek": "Xayrli kun! 94-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 94]"
      },
      {
        "id": "ib-94-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep95",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 95,
    "titleUz": "95-dars: Turizm(3-qism)",
    "titleDe": "Turizm(3-qism) | 95-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 95-qismi. Mavzu: 95-dars: Turizm(3-qism). Davomiyligi: 13:24.",
    "youtubeId": "dmSyEu0uiIs",
    "duration": "13:24",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-95-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 95.",
        "uzbek": "Xayrli kun! 95-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 95]"
      },
      {
        "id": "ib-95-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep96",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 96,
    "titleUz": "96-dars: Turizm(4-qism)",
    "titleDe": "Turizm(4-qism) | 96-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 96-qismi. Mavzu: 96-dars: Turizm(4-qism). Davomiyligi: 12:12.",
    "youtubeId": "Nz_PpvjTDMM",
    "duration": "12:12",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-96-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 96.",
        "uzbek": "Xayrli kun! 96-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 96]"
      },
      {
        "id": "ib-96-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep97",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 97,
    "titleUz": "97-dars: Termine und besprechungen",
    "titleDe": "Termine und besprechungen | 97-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 97-qismi. Mavzu: 97-dars: Termine und besprechungen. Davomiyligi: 11:13.",
    "youtubeId": "Jrv5ZcXZhyE",
    "duration": "11:13",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-97-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 97.",
        "uzbek": "Xayrli kun! 97-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 97]"
      },
      {
        "id": "ib-97-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep98",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 98,
    "titleUz": "98-dars: Termine und besprechungen 2",
    "titleDe": "Termine und besprechungen 2 | 98-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 98-qismi. Mavzu: 98-dars: Termine und besprechungen 2. Davomiyligi: 11:13.",
    "youtubeId": "S57f2szDoyM",
    "duration": "11:13",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-98-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 98.",
        "uzbek": "Xayrli kun! 98-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 98]"
      },
      {
        "id": "ib-98-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep99",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 99,
    "titleUz": "99-dars: Termine und besprechungen 3",
    "titleDe": "Termine und besprechungen 3 | 99-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 99-qismi. Mavzu: 99-dars: Termine und besprechungen 3. Davomiyligi: 11:17.",
    "youtubeId": "4fEp8JKQdCY",
    "duration": "11:17",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-99-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 99.",
        "uzbek": "Xayrli kun! 99-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 99]"
      },
      {
        "id": "ib-99-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "ibrat-a1-ep100",
    "channelId": "ibrat-nemis-a1",
    "level": "a1",
    "episodeNumber": 100,
    "titleUz": "100-dars: Ta'til rejalari va ob-havo",
    "titleDe": "Ta'til rejalari va ob-havo | 100-dars | Nemis tilidan intensiv darslar",
    "descriptionUz": "Ibrat Farzandlari nemis tili A1 darslarining 100-qismi. Mavzu: 100-dars: Ta'til rejalari va ob-havo. Davomiyligi: 13:13.",
    "youtubeId": "v8BOOcuYmso",
    "duration": "13:13",
    "topics": [
      "Ibrat Farzandlari",
      "A1",
      "Intensiv dars"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-100-1",
        "german": "Guten Tag! Willkommen zur Lektion Nummer 100.",
        "uzbek": "Xayrli kun! 100-darsimizga xush kelibsiz.",
        "phoneticHint": "[Guten Tag! Vilkommen tsur Lektsion Nummer 100]"
      },
      {
        "id": "ib-100-2",
        "german": "Hören Sie aufmerksam zu und sprechen Sie laut nach.",
        "uzbek": "Diqqat bilan tinglang va baland ovozda takrorlang.",
        "phoneticHint": "[Hyoren zi aufmerkzam tsu und shprexen zi laut nax]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  }
],
  ...[
  {
    "id": "dialoge-a1-ep01",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 1,
    "titleUz": "1-dars: A1.1 Anfänger / sich vorstellen / das Alphabet / die Zahlen / Aussprache",
    "titleDe": "Online Deutsch lernen / A1.1 Anfänger / sich vorstellen / das Alphabet / die Zahlen / Aussprache",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 1-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "ql7J-srh6iA",
    "duration": "17:00",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-1-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-1-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep02",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 2,
    "titleUz": "2-dars: formell oder informell / sich vorstellen",
    "titleDe": "Deutsch lernen A1.1 / Lektion 2 / formell oder informell / sich vorstellen",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 2-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "cDYK2CGCI1s",
    "duration": "11:42",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-2-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-2-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep03",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 3,
    "titleUz": "3-dars: sich und andere vorstellen / Zahlen",
    "titleDe": "Deutsch lernen A1.1 / Lektion 3 / sich und andere vorstellen / Zahlen",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 3-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "uMi6ey3pMhY",
    "duration": "10:23",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-3-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-3-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep04",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 4,
    "titleUz": "4-dars: Deutsch lernen mit Dialogen / Personalpronomen im Nominativ / Aussprache",
    "titleDe": "Deutsch lernen mit Dialogen / Lektion 4 / Personalpronomen im Nominativ / Aussprache",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 4-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "RM3uoBnhh4w",
    "duration": "10:18",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-4-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-4-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep05",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 5,
    "titleUz": "5-dars: Deutsch lernen mit Dialogen | Lektion 5 | Hast du eine Freundin? einen Freund? | \"nicht\" oder \"kein\"",
    "titleDe": "Deutsch lernen mit Dialogen | Lektion 5 | Hast du eine Freundin? einen Freund? | \"nicht\" oder \"kein\"",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 5-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "0p2-crfRm2Q",
    "duration": "13:34",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-5-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-5-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep06",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 6,
    "titleUz": "6-dars: Deutsch lernen mit Dialogen / Was machst du gern?",
    "titleDe": "Deutsch lernen mit Dialogen / Lektion 6 / Was machst du gern?",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 6-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "M7LCjsavZYU",
    "duration": "15:08",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-6-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-6-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep07",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 7,
    "titleUz": "7-dars: Deutsch lernen mit Dialogen / Was machst du am Dienstag? / Aussprache \"ch\" und \"sch\"",
    "titleDe": "Deutsch lernen mit Dialogen / Lektion 7 / Was machst du am Dienstag? / Aussprache \"ch\" und \"sch\"",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 7-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "w-dn2q4vgWs",
    "duration": "10:45",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-7-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-7-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep08",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 8,
    "titleUz": "8-dars: Deutsch lernen mit Dialogen / Wie oft machst du Sport? / Aussprache \"ie\" und \"ei\"",
    "titleDe": "Deutsch lernen mit Dialogen / Lektion 8 / Wie oft machst du Sport? / Aussprache \"ie\" und \"ei\"",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 8-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "MtoRYSQGlx0",
    "duration": "11:28",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-8-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-8-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep09",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 9,
    "titleUz": "9-dars: Deutsch lernen mit Dialogen / Was kannst du gut? / Uhrzeit",
    "titleDe": "Deutsch lernen mit Dialogen / Lektion 9 / Was kannst du gut? / Uhrzeit",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 9-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "wX_cdHHIwr8",
    "duration": "10:33",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-9-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-9-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep10",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 10,
    "titleUz": "10-dars: Deutsch lernen mit Dialogen / trennbare Verben / Aussprache \"äu\", \"eu\" / Hörverstehen",
    "titleDe": "Deutsch lernen mit Dialogen / Lektion 10 / trennbare Verben / Aussprache \"äu\", \"eu\" / Hörverstehen",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 10-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "kPbIL58nSAM",
    "duration": "12:27",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-10-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-10-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep11",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 11,
    "titleUz": "11-dars: Deutsch lernen mit Dialogen / Das ist meine Familie. / Posssessivartikel / Kleidung",
    "titleDe": "Deutsch lernen mit Dialogen / Lektion 11 / Das ist meine Familie. / Posssessivartikel / Kleidung",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 11-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "tKEY6HDmzAo",
    "duration": "14:10",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-11-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-11-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep12",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 12,
    "titleUz": "12-dars: Deutsch lernen mit Dialogen / Was möchten Sie bestellen? / im Restaurant",
    "titleDe": "Deutsch lernen mit Dialogen / Lektion 12 / Was möchten Sie bestellen? / im Restaurant",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 12-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "bPVmTzL7D7I",
    "duration": "11:28",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-12-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-12-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep13",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 13,
    "titleUz": "13-dars: Deutsch lernen mit Dialogen / In welchem Stock ist die Apotheke? / Aussprache \"ch\"",
    "titleDe": "Deutsch lernen mit Dialogen / Lektion 13 / In welchem Stock ist die Apotheke? / Aussprache \"ch\"",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 13-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "mtbNsEcT2ds",
    "duration": "11:38",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-13-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-13-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep14",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 14,
    "titleUz": "14-dars: Deutsch lernen mit Dialogen / Wetter und Klima / Deutschland, Schweiz, Österreich",
    "titleDe": "Deutsch lernen mit Dialogen / Lektion 14 / Wetter und Klima / Deutschland, Schweiz, Österreich",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 14-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "BeHbtwH3bok",
    "duration": "11:05",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-14-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-14-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep15",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 15,
    "titleUz": "15-dars: Deutsch lernen mit Dialogen / Wie gefällt dir deine Wohnung? / Aussprache \"h\"",
    "titleDe": "Deutsch lernen mit Dialogen / Lektion 15 / Wie gefällt dir deine Wohnung? / Aussprache \"h\"",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 15-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "Sc95Ir2-A7I",
    "duration": "14:53",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-15-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-15-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep16",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 16,
    "titleUz": "16-dars: Deutsch lernen mit Dialogen / Als was arbeitest du? / Was ist dein Beruf?",
    "titleDe": "Deutsch lernen mit Dialogen / Lektion 16 / Als was arbeitest du? / Was ist dein Beruf?",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 16-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "HLsZ4jab3nc",
    "duration": "10:24",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-16-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-16-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep17",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 17,
    "titleUz": "17-dars: Deutsch lernen mit Dialogen / Wortschatz im Restaurant /sich beschweren / Aussprache",
    "titleDe": "Deutsch lernen mit Dialogen / Lektion 17 / Wortschatz im Restaurant /sich beschweren / Aussprache",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 17-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "VVESkXfyZEo",
    "duration": "12:18",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-17-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-17-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep18",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 18,
    "titleUz": "18-dars: Daniel und Tina verlieben sich | Deutsch lernen mit einfachen Geschichten | @Hallo Deutschschule",
    "titleDe": "Daniel und Tina verlieben sich | Deutsch lernen mit einfachen Geschichten | @Hallo Deutschschule",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 18-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "00UQcqRsLPo",
    "duration": "9:53",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-18-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-18-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep19",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 19,
    "titleUz": "19-dars: Deutsch lernen mit Dialogen / sich vorstellen / Personalpronomen / Akkusativ",
    "titleDe": "Deutsch lernen mit Dialogen / Lektion 19 / sich vorstellen / Personalpronomen / Akkusativ",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 19-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "DZc_IvpHetw",
    "duration": "17:06",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-19-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-19-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep20",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 20,
    "titleUz": "20-dars: Deutsch lernen mit Dialogen / kein oder nicht / Verben konjugieren / Satzstellung",
    "titleDe": "Deutsch lernen mit Dialogen / Lektion 20 / kein oder nicht / Verben konjugieren / Satzstellung",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 20-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "WFSXExWNcgw",
    "duration": "16:14",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-20-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-20-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep21",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 21,
    "titleUz": "21-dars: Deutsch lernen / Hast du Gefühle? / Hast du Emotionen? / Wie geht es dir?",
    "titleDe": "Deutsch lernen / Hast du Gefühle? / Hast du Emotionen? / Wie geht es dir?",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 21-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "BkGeuxChERM",
    "duration": "1:35",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-21-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-21-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep22",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 22,
    "titleUz": "22-dars: Online Deutsch lernen | einfache Dialoge für Anfänger üben | Konversation Deutsch als Fremdsprache",
    "titleDe": "Online Deutsch lernen | einfache Dialoge für Anfänger üben | Konversation Deutsch als Fremdsprache",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 22-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "VlAsD84WLvw",
    "duration": "18:37",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-22-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-22-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep23",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 23,
    "titleUz": "23-dars: Online Deutsch lernen | Einfache Dialoge üben | Grammatik und Wortschatz",
    "titleDe": "Online Deutsch lernen | Einfache Dialoge üben | Grammatik und Wortschatz",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 23-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "CLoRVyOpfGs",
    "duration": "21:55",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-23-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-23-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep24",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 24,
    "titleUz": "24-dars: Mein Onkel heisst Hanspeter. Er mag Sport. / Possessivartikel / Familie",
    "titleDe": "Deutsch lernen A1.1 / Mein Onkel heisst Hanspeter. Er mag Sport. / Possessivartikel / Familie",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 24-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "AP2B-rgnEM4",
    "duration": "11:43",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-24-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-24-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep25",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 25,
    "titleUz": "25-dars: Deutsch lernen | Quiz Artikel der, die oder das? | Dialog Einladung | Wortschatz Lebensmittel",
    "titleDe": "Deutsch lernen | Quiz Artikel der, die oder das? | Dialog Einladung | Wortschatz Lebensmittel",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 25-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "KDXPZfKVWW0",
    "duration": "10:44",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-25-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-25-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep26",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 26,
    "titleUz": "26-dars: Deutsch lernen A1 | die Körperteile | Wortschatz | Quiz | @Hallo Deutschschule",
    "titleDe": "Deutsch lernen A1 | die Körperteile | Wortschatz | Quiz | @Hallo Deutschschule",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 26-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "dfdAOZeDM1o",
    "duration": "25:28",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-26-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-26-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep27",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 27,
    "titleUz": "27-dars: Deutsch lernen / Ein Tag im Leben eines Superhelden! / Wortschatz Tagesablauf / Akkusativ",
    "titleDe": "Deutsch lernen / Ein Tag im Leben eines Superhelden! / Wortschatz Tagesablauf / Akkusativ",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 27-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "1VUcryF9RFk",
    "duration": "12:50",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-27-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-27-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep28",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 28,
    "titleUz": "28-dars: Deutsch lernen / Wortschatz Winter / Aussprache",
    "titleDe": "Deutsch lernen / Wortschatz Winter / Aussprache",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 28-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "vGpYgI8G7FY",
    "duration": "2:58",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-28-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-28-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep29",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 29,
    "titleUz": "29-dars: Deutsch lernen für Anfänger (A1.1) / Zahlen von 1-20 / Wortschatz",
    "titleDe": "Deutsch lernen für Anfänger (A1.1) / Zahlen von 1-20 / Wortschatz",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 29-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "OJHbBF1WxA4",
    "duration": "15:07",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-29-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-29-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep30",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 30,
    "titleUz": "30-dars: Die Zahlen von 20-100 / in der Pause / Was macht die Klasse von Herrn Weiss?",
    "titleDe": "Deutsch lernen A1.1 / Die Zahlen von 20-100 / in der Pause / Was macht die Klasse von Herrn Weiss?",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 30-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "xbVBjvceGZE",
    "duration": "10:44",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-30-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-30-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep31",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 31,
    "titleUz": "31-dars: Deutsch lernen A1 | TOP 100 Substantive | Artikel: der, die oder das?",
    "titleDe": "Deutsch lernen A1 | TOP 100 Substantive | Artikel: der, die oder das?",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 31-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "YuOD0RGb69Q",
    "duration": "13:28",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-31-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-31-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep32",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 32,
    "titleUz": "32-dars: Deutsch lernen | Die richtige Aussprache der Zischlaute \"CH\" und \"SCH\" mit Beispielsätzen üben!",
    "titleDe": "Deutsch lernen | Die richtige Aussprache der Zischlaute \"CH\" und \"SCH\" mit Beispielsätzen üben!",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 32-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "4TtlhrGEuM4",
    "duration": "17:30",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-32-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-32-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep33",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 33,
    "titleUz": "33-dars: Deutsch lernen A1 und A2 | Wörter mit den Umlauten ä, ö und ü | Wortschatz und Grammatik üben!",
    "titleDe": "Deutsch lernen A1 und A2 | Wörter mit den Umlauten ä, ö und ü | Wortschatz und Grammatik üben!",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 33-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "aQTc2UoBLGo",
    "duration": "15:31",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-33-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-33-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep34",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 34,
    "titleUz": "34-dars: Deutsch lernen mit Dialogen! Wähle dein Deutschniveau A1, A2, B1, B2 oder C1",
    "titleDe": "Deutsch lernen mit Dialogen! Wähle dein Deutschniveau A1, A2, B1, B2 oder C1",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 34-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "IUgy0FstEsc",
    "duration": "0:31",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-34-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-34-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep35",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 35,
    "titleUz": "35-dars: Gratis online Deutschkurse A1, A2, B1, B2 oder C1! | Wähle dein Deutschniveau!",
    "titleDe": "Gratis online Deutschkurse A1, A2, B1, B2 oder C1! | Wähle dein Deutschniveau!",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 35-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "lAqBtBGL9k0",
    "duration": "0:29",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-35-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-35-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep36",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 36,
    "titleUz": "36-dars: ✍ Werde Kanalmitglied der Hallo Deutschschule! Deutsch lernen mit Spaß!",
    "titleDe": "✍ Werde Kanalmitglied der Hallo Deutschschule! Deutsch lernen mit Spaß!",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 36-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "raHu7ho2inY",
    "duration": "1:25",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-36-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-36-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep37",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 37,
    "titleUz": "37-dars: Deutsch sprechen | buchstabieren üben | Grundkenntnisse Deutsch als Fremdsprache! A1",
    "titleDe": "Deutsch sprechen | buchstabieren üben | Grundkenntnisse Deutsch als Fremdsprache! A1",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 37-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "IAur9wYK01c",
    "duration": "16:57",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-37-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-37-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep38",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 38,
    "titleUz": "38-dars: Hallo Deutschschule! Deutsch lernen mit Spass! | 4K",
    "titleDe": "Hallo Deutschschule! Deutsch lernen mit Spass! | 4K",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 38-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "dffHnt5dOPY",
    "duration": "3:58",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-38-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-38-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep39",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 39,
    "titleUz": "39-dars: Deutsch lernen A1 | Fragen und Antworten zum Wortschatz Familie und Beziehungen!",
    "titleDe": "Deutsch lernen A1 | Fragen und Antworten zum Wortschatz Familie und Beziehungen!",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 39-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "AFT3hr_glaQ",
    "duration": "13:06",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-39-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-39-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep40",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 40,
    "titleUz": "40-dars: Deutsch lernen | Grundwortschatz für ein persönliches Gespräch | Lektion 1",
    "titleDe": "Deutsch lernen | Grundwortschatz für ein persönliches Gespräch | Lektion 1",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 40-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "8pzl2_sfsqQ",
    "duration": "17:46",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-40-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-40-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep41",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 41,
    "titleUz": "41-dars: Deutsch lernen A1 | Das Alphabet | Buchstaben und Beispiele",
    "titleDe": "Deutsch lernen A1 | Das Alphabet | Buchstaben und Beispiele",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 41-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "0Biv3YQa_SI",
    "duration": "15:15",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-41-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-41-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep42",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 42,
    "titleUz": "42-dars: Deutsch lernen A1 | Wichtige deutsche Wörter und Sätze",
    "titleDe": "Deutsch lernen A1 | Wichtige deutsche Wörter und Sätze",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 42-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "fTaCBnGM1KE",
    "duration": "14:07",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-42-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-42-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep43",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 43,
    "titleUz": "43-dars: Deutsch lernen A1 | Breaking-Verb | Deutsche Verben konjugieren | suchen | #shorts",
    "titleDe": "Deutsch lernen A1 | Breaking-Verb | Deutsche Verben konjugieren | suchen | #shorts",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 43-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "tNamomGCZgs",
    "duration": "0:36",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-43-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-43-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep44",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 44,
    "titleUz": "44-dars: Deutsch lernen A1 | Breaking-Verb | Deutsche Verben konjugieren | stehen | #shorts",
    "titleDe": "Deutsch lernen A1 | Breaking-Verb | Deutsche Verben konjugieren | stehen | #shorts",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 44-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "ZOgCAUJpRL8",
    "duration": "0:33",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-44-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-44-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep45",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 45,
    "titleUz": "45-dars: Deutsch lernen A1 | Breaking-Verb | Deutsche Verben konjugieren | machen | #shorts",
    "titleDe": "Deutsch lernen A1 | Breaking-Verb | Deutsche Verben konjugieren | machen | #shorts",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 45-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "LJyASeJpnD4",
    "duration": "0:42",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-45-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-45-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep46",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 46,
    "titleUz": "46-dars: Top 40 typische Fragen für Deutschanfänger! | Wortschatz, Verben, Vokabular @Hallo Deutschschule",
    "titleDe": "Top 40 typische Fragen für Deutschanfänger! | Wortschatz, Verben, Vokabular @Hallo Deutschschule",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 46-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "Gp6q7lwfYOk",
    "duration": "15:01",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-46-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-46-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep47",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 47,
    "titleUz": "47-dars: Top 20 wichtigsten Verben der Deutschen Sprache | Deutsch lernen Anfänger A1 | @Hallo Deutschschule",
    "titleDe": "Top 20 wichtigsten Verben der Deutschen Sprache | Deutsch lernen Anfänger A1 | @Hallo Deutschschule",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 47-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "_8Wrcs-4Klw",
    "duration": "18:03",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-47-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-47-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep48",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 48,
    "titleUz": "48-dars: Deutsch lernen für Anfänger | Lektion 1 | sich vorstellen, buchstabieren | @hallodeutschschule",
    "titleDe": "Deutsch lernen für Anfänger | Lektion 1 | sich vorstellen, buchstabieren | @hallodeutschschule",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 48-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "mRiD0jYpT5o",
    "duration": "22:57",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-48-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-48-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "dialoge-a1-ep49",
    "channelId": "deutsch-dialoge-a1",
    "level": "a1",
    "episodeNumber": 49,
    "titleUz": "49-dars: Deutsch lernen A1: Am Bahnhof – Uhrzeiten, Familie, Farben & trennbare Verben einfach erklärt!",
    "titleDe": "Deutsch lernen A1: Am Bahnhof – Uhrzeiten, Familie, Farben & trennbare Verben einfach erklärt!",
    "descriptionUz": "Nemis Tili Dialoglar va Talaffuz (Aussprache) kursining 49-darsi. Jonli muloqot va sof nemischa talaffuz.",
    "youtubeId": "9VdujCOCQzk",
    "duration": "17:20",
    "topics": [
      "Dialoglar",
      "Aussprache",
      "A1.1",
      "Talaffuz"
    ],
    "shadowingPhrases": [
      {
        "id": "dia-49-1",
        "german": "Hallo! Wie geht es dir heute? — Danke, sehr gut!",
        "uzbek": "Salom! Bugun ahvoling qanday? — Rahmat, juda yaxshi!",
        "phoneticHint": "[Hallo! Vi get es dir hoyte? — Danke, zer gut!]"
      },
      {
        "id": "dia-49-2",
        "german": "Übung macht den Meister im Deutschsprechen.",
        "uzbek": "Nemischa so‘zlashuvda mashq qilgan usta bo‘ladi.",
        "phoneticHint": "[Yubung maxt den Mayster im Doych-shprexen]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  }
],
  ...[
  {
    "id": "nicos-a1-ep01",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 1,
    "titleUz": "1-qism: der Titelsong (Geh deinen Weg)",
    "titleDe": "Deutsch lernen | Nicos Weg | der Titelsong (Geh deinen Weg)",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 1-qismi.",
    "youtubeId": "SrcZ2ud4T3o",
    "duration": "2:44",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-1-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-1-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep02",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 2,
    "titleUz": "2-qism: das Making-Of",
    "titleDe": "Nicos Weg – Einfach Deutsch lernen - das Making-Of",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 2-qismi.",
    "youtubeId": "k2yMdNbopgs",
    "duration": "3:27",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-2-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-2-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep03",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 3,
    "titleUz": "3-qism: Deutsch lernen (A1) | Nicos Weg | Folge 1: Hallo!",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 1: Hallo!",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 3-qismi.",
    "youtubeId": "dC6ZGLzdaTs",
    "duration": "1:37",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-3-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-3-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep04",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 4,
    "titleUz": "4-qism: Deutsch lernen (A1) | Nicos Weg | Folge 2: Kein Problem!",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 2: Kein Problem!",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 4-qismi.",
    "youtubeId": "upvuC9FR-xU",
    "duration": "1:51",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-4-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-4-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep05",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 5,
    "titleUz": "5-qism: Deutsch lernen (A1) | Nicos Weg | Folge 3: Tschüss!",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 3: Tschüss!",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 5-qismi.",
    "youtubeId": "idFrq0H1Af0",
    "duration": "1:28",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-5-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-5-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep06",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 6,
    "titleUz": "6-qism: Deutsch lernen (A1) | Nicos Weg | Folge 4: Von A bis Z",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 4: Von A bis Z",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 6-qismi.",
    "youtubeId": "-qAuGimugds",
    "duration": "1:49",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-6-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-6-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep07",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 7,
    "titleUz": "7-qism: Deutsch lernen (A1) | Nicos Weg | Folge 5: Ich heiße Emma",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 5: Ich heiße Emma",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 7-qismi.",
    "youtubeId": "FoYSUfsLcjA",
    "duration": "1:24",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-7-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-7-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep08",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 8,
    "titleUz": "8-qism: Deutsch lernen (A1) | Nicos Weg | Folge 6: Das ist Nico",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 6: Das ist Nico",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 8-qismi.",
    "youtubeId": "fZr-eVZ3YOs",
    "duration": "1:02",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-8-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-8-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep09",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 9,
    "titleUz": "9-qism: Deutsch lernen (A1) | Nicos Weg | Folge 7: Woher kommst du?",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 7: Woher kommst du?",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 9-qismi.",
    "youtubeId": "Q7ECRAQrzFc",
    "duration": "1:54",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-9-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-9-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep10",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 10,
    "titleUz": "10-qism: Deutsch lernen (A1) | Nicos Weg | Folge 8: Nico hat ein Problem",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 8: Nico hat ein Problem",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 10-qismi.",
    "youtubeId": "T89sIATrpBc",
    "duration": "1:44",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-10-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-10-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep11",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 11,
    "titleUz": "11-qism: Deutsch lernen (A1) | Nicos Weg | Folge 9: Zahlen von 1 bis 100",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 9: Zahlen von 1 bis 100",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 11-qismi.",
    "youtubeId": "p1dci7nBJRo",
    "duration": "1:50",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-11-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-11-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep12",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 12,
    "titleUz": "12-qism: Deutsch lernen (A1) | Nicos Weg | Folge 10: Wichtige Nummern",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 10: Wichtige Nummern",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 12-qismi.",
    "youtubeId": "5wyalwdmpzk",
    "duration": "1:46",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-12-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-12-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep13",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 13,
    "titleUz": "13-qism: Deutsch lernen (A1) | Nicos Weg | Folge 11: Adressen",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 11: Adressen",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 13-qismi.",
    "youtubeId": "AI9EmNzxXGE",
    "duration": "1:59",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-13-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-13-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep14",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 14,
    "titleUz": "14-qism: Deutsch lernen (A1) | Nicos Weg | Folge 12: Auf dem Amt",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 12: Auf dem Amt",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 14-qismi.",
    "youtubeId": "IhLqeX8QjSg",
    "duration": "2:16",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-14-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-14-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep15",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 15,
    "titleUz": "15-qism: Deutsch lernen (A1) | Nicos Weg | Folge 13: Was machst du hier?",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 13: Was machst du hier?",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 15-qismi.",
    "youtubeId": "VWDtpIIAgAI",
    "duration": "2:11",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-15-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-15-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep16",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 16,
    "titleUz": "16-qism: Deutsch lernen (A1) | Nicos Weg | Folge 14: Was trinkst du?",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 14: Was trinkst du?",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 16-qismi.",
    "youtubeId": "J71RxF7qU2o",
    "duration": "2:03",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-16-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-16-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep17",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 17,
    "titleUz": "17-qism: Deutsch lernen (A1) | Nicos Weg | Folge  15: Eine Pizza, bitte!",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge  15: Eine Pizza, bitte!",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 17-qismi.",
    "youtubeId": "w-Zea1mverM",
    "duration": "2:10",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-17-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-17-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep18",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 18,
    "titleUz": "18-qism: Deutsch lernen (A1) | Nicos Weg | Folge 16: Zahlen, bitte!",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 16: Zahlen, bitte!",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 18-qismi.",
    "youtubeId": "c7LTbMCKVNo",
    "duration": "1:40",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-18-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-18-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep19",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 19,
    "titleUz": "19-qism: Deutsch lernen (A1) | Nicos Weg | Folge 17: Ich war schon in Berlin",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 17: Ich war schon in Berlin",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 19-qismi.",
    "youtubeId": "IQ3cDBISOao",
    "duration": "2:09",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-19-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-19-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep20",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 20,
    "titleUz": "20-qism: Deutsch lernen (A1) | Nicos Weg | Folge 18: Wo liegt das?",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 18: Wo liegt das?",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 20-qismi.",
    "youtubeId": "3K991pj4Uic",
    "duration": "2:10",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-20-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-20-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep21",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 21,
    "titleUz": "21-qism: Deutsch lernen (A1) | Nicos Weg | Folge 19: In Europa",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 19: In Europa",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 21-qismi.",
    "youtubeId": "uJ6uLjJxX-8",
    "duration": "1:51",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-21-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-21-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep22",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 22,
    "titleUz": "22-qism: Deutsch lernen (A1) | Nicos Weg | Folge 20: Andere Länder",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 20: Andere Länder",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 22-qismi.",
    "youtubeId": "lvgs_iLBdvY",
    "duration": "1:54",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-22-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-22-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep23",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 23,
    "titleUz": "23-qism: Deutsch lernen (A1) | Nicos Weg | Folge 21: Was ist das?",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 21: Was ist das?",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 23-qismi.",
    "youtubeId": "9obS6QT10To",
    "duration": "1:34",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-23-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-23-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep24",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 24,
    "titleUz": "24-qism: Deutsch lernen (A1) | Nicos Weg | Folge 22: Wem gehört das?",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 22: Wem gehört das?",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 24-qismi.",
    "youtubeId": "MNx10ASRCwM",
    "duration": "1:25",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-24-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-24-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep25",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 25,
    "titleUz": "25-qism: Deutsch lernen (A1) | Nicos Weg | Folge 23: Ich habe kein …",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 23: Ich habe kein …",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 25-qismi.",
    "youtubeId": "P1ontBJYzhI",
    "duration": "2:10",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-25-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-25-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep26",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 26,
    "titleUz": "26-qism: Deutsch lernen (A1) | Nicos Weg | Folge 24: Das Auto ist rot",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 24: Das Auto ist rot",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 26-qismi.",
    "youtubeId": "368pARWAzGk",
    "duration": "1:55",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-26-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-26-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep27",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 27,
    "titleUz": "27-qism: Deutsch lernen (A1) | Nicos Weg | Folge 25: So wohne ich",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 25: So wohne ich",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 27-qismi.",
    "youtubeId": "bbZxpdieqIA",
    "duration": "1:27",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-27-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-27-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep28",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 28,
    "titleUz": "28-qism: Deutsch lernen (A1) | Nicos Weg | Folg 26: Meine Wohnung",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folg 26: Meine Wohnung",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 28-qismi.",
    "youtubeId": "YRWehEtSPQY",
    "duration": "2:14",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-28-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-28-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep29",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 29,
    "titleUz": "29-qism: Deutsch lernen (A1) | Nicos Weg | Folge 27: Sofa, Sessel und Tisch",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 27: Sofa, Sessel und Tisch",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 29-qismi.",
    "youtubeId": "s9y2sCNOzBk",
    "duration": "1:23",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-29-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-29-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep30",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 30,
    "titleUz": "30-qism: Deutsch lernen (A1) | Nicos Weg | Folge 28: Unser Haus",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 28: Unser Haus",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 30-qismi.",
    "youtubeId": "Q-qjyb9AsqM",
    "duration": "1:50",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-30-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-30-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep31",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 31,
    "titleUz": "31-qism: Deutsch lernen (A1) | Nicos Weg | Folge 29: Emmas Tag",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 29: Emmas Tag",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 31-qismi.",
    "youtubeId": "AGwxwx3TOdg",
    "duration": "1:38",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-31-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-31-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep32",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 32,
    "titleUz": "32-qism: Deutsch lernen (A1) | Nicos Weg | Folge 30: Tageszeiten",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 30: Tageszeiten",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 32-qismi.",
    "youtubeId": "jUElkIpQlNw",
    "duration": "1:21",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-32-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-32-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep33",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 33,
    "titleUz": "33-qism: Deutsch lernen (A1) | Nicos Weg | Folge 31: Am Sonntag koche ich",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 31: Am Sonntag koche ich",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 33-qismi.",
    "youtubeId": "f9kkMWEOxo0",
    "duration": "1:45",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-33-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-33-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep34",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 34,
    "titleUz": "34-qism: Deutsch lernen (A1) | Nicos Weg | Folge 32: Emmas Wochenende",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 32: Emmas Wochenende",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 34-qismi.",
    "youtubeId": "dqtdmvpa8D0",
    "duration": "1:45",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-34-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-34-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep35",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 35,
    "titleUz": "35-qism: Deutsch lernen (A1) | Nicos Weg | Folge 33: Wie spät ist es?",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 33: Wie spät ist es?",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 35-qismi.",
    "youtubeId": "SEV3kmyQCII",
    "duration": "2:11",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-35-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-35-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep36",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 36,
    "titleUz": "36-qism: Deutsch lernen (A1) | Nicos Weg | Folge 34: Hast du morgen Zeit?",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 34: Hast du morgen Zeit?",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 36-qismi.",
    "youtubeId": "Vvt6H_EvGX0",
    "duration": "1:43",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-36-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-36-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep37",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 37,
    "titleUz": "37-qism: Deutsch lernen (A1) | Nicos Weg | Folge 35: Wann spielen wir?",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 35: Wann spielen wir?",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 37-qismi.",
    "youtubeId": "_VUrkdITl8U",
    "duration": "1:44",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-37-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-37-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep38",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 38,
    "titleUz": "38-qism: Deutsch lernen (A1) | Nicos Weg | Folge 36: Zu spät?!",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 36: Zu spät?!",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 38-qismi.",
    "youtubeId": "2v6H7fnWuts",
    "duration": "1:33",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-38-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-38-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep39",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 39,
    "titleUz": "39-qism: Deutsch lernen (A1) | Nicos Weg | Folge 37: Ich bin Lehrerin",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 37: Ich bin Lehrerin",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 39-qismi.",
    "youtubeId": "rH8HMCr73RM",
    "duration": "1:45",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-39-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-39-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep40",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 40,
    "titleUz": "40-qism: Deutsch lernen (A1) | Nicos Weg | Folge 38: Mein Beruf",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 38: Mein Beruf",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 40-qismi.",
    "youtubeId": "a7LZ0QAG6DQ",
    "duration": "1:56",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-40-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-40-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep41",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 41,
    "titleUz": "41-qism: Deutsch lernen (A1) | Nicos Weg | Folge 39: Wo ist der Aufzug?",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 39: Wo ist der Aufzug?",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 41-qismi.",
    "youtubeId": "ymE5ZON70C0",
    "duration": "1:50",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-41-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-41-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep42",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 42,
    "titleUz": "42-qism: Deutsch lernen (A1) | Nicos Weg | Folge 40: Traumberufe",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 40: Traumberufe",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 42-qismi.",
    "youtubeId": "qaQd9wFy1l4",
    "duration": "1:46",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-42-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-42-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep43",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 43,
    "titleUz": "43-qism: Deutsch lernen (A1) | Nicos Weg | Folge 41: Wo ist der Bahnhof?",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 41: Wo ist der Bahnhof?",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 43-qismi.",
    "youtubeId": "Fz_AuTNFa8k",
    "duration": "2:11",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-43-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-43-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep44",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 44,
    "titleUz": "44-qism: Deutsch lernen (A1) | Nicos Weg | Folge 42: An der Ampel links",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 42: An der Ampel links",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 44-qismi.",
    "youtubeId": "5_pXp3akjr4",
    "duration": "1:57",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-44-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-44-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep45",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 45,
    "titleUz": "45-qism: Deutsch lernen (A1) | Nicos Weg | Folge 43: Mit Bus und Bahn",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 43: Mit Bus und Bahn",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 45-qismi.",
    "youtubeId": "4us1ZoH9K04",
    "duration": "1:13",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-45-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-45-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep46",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 46,
    "titleUz": "46-qism: Deutsch lernen (A1) | Nicos Weg | Folge 44: Im Büro",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 44: Im Büro",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 46-qismi.",
    "youtubeId": "dsPDJb2956A",
    "duration": "1:47",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-46-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-46-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep47",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 47,
    "titleUz": "47-qism: Deutsch lernen (A1) | Nicos Weg | Folge 45: Lebensmittel",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 45: Lebensmittel",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 47-qismi.",
    "youtubeId": "3tq7bRB9iu0",
    "duration": "1:43",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-47-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-47-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep48",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 48,
    "titleUz": "48-qism: Deutsch lernen (A1) | Nicos Weg | Folge 46: Ich mag (nicht)!",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 46: Ich mag (nicht)!",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 48-qismi.",
    "youtubeId": "sEu2PqmGrgw",
    "duration": "1:55",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-48-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-48-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep49",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 49,
    "titleUz": "49-qism: Deutsch lernen (A1) | Nicos Weg | Folge 47: Haushaltsarbeit",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 47: Haushaltsarbeit",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 49-qismi.",
    "youtubeId": "SIN9PejV-OI",
    "duration": "1:43",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-49-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-49-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep50",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 50,
    "titleUz": "50-qism: Deutsch lernen (A1) | Nicos Weg | Folge 48: Was macht dir Spaß?",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 48: Was macht dir Spaß?",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 50-qismi.",
    "youtubeId": "KeU3-5jr2fI",
    "duration": "1:50",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-50-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-50-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep51",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 51,
    "titleUz": "51-qism: Deutsch lernen (A1) | Nicos Weg | Folge 49: Mengen und Preise",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 49: Mengen und Preise",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 51-qismi.",
    "youtubeId": "ySrfaSqtdfw",
    "duration": "2:01",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-51-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-51-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep52",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 52,
    "titleUz": "52-qism: Deutsch lernen (A1) | Nicos Weg | Folge 50: Was darf es sein?",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 50: Was darf es sein?",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 52-qismi.",
    "youtubeId": "dOdHXwy0cME",
    "duration": "1:59",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-52-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-52-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep53",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 53,
    "titleUz": "53-qism: Deutsch lernen (A1) | Nicos Weg | Folge 51: Sonst noch etwas?",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 51: Sonst noch etwas?",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 53-qismi.",
    "youtubeId": "SRAk_KZlrwY",
    "duration": "1:45",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-53-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-53-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep54",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 54,
    "titleUz": "54-qism: Deutsch lernen (A1) | Nicos Weg | Folge 52: Wie viel Mehl?",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 52: Wie viel Mehl?",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 54-qismi.",
    "youtubeId": "0S3urnio_08",
    "duration": "1:35",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-54-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-54-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep55",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 55,
    "titleUz": "55-qism: Deutsch lernen (A1) | Nicos Weg | Folge 53: Wie war dein Urlaub?",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 53: Wie war dein Urlaub?",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 55-qismi.",
    "youtubeId": "3UJeXeiki9g",
    "duration": "1:18",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-55-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-55-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep56",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 56,
    "titleUz": "56-qism: Deutsch lernen (A1) | Nicos Weg | Folge 54: Jahreszeiten",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 54: Jahreszeiten",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 56-qismi.",
    "youtubeId": "b4ki5lMyd4Q",
    "duration": "1:56",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-56-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-56-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep57",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 57,
    "titleUz": "57-qism: Deutsch lernen (A1) | Nicos Weg | Folge 55: Der Ausflug",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 55: Der Ausflug",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 57-qismi.",
    "youtubeId": "chmqnserFqM",
    "duration": "1:24",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-57-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-57-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep58",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 58,
    "titleUz": "58-qism: Deutsch lernen (A1) | Nicos Weg | Folge 56: Wie wird das Wetter?",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 56: Wie wird das Wetter?",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 58-qismi.",
    "youtubeId": "qL1hgrjJScY",
    "duration": "1:27",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-58-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-58-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep59",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 59,
    "titleUz": "59-qism: Deutsch lernen (A1) | Nicos Weg | Folge 57: Das ist jetzt modern",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 57: Das ist jetzt modern",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 59-qismi.",
    "youtubeId": "DiNQle2s1lQ",
    "duration": "1:50",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-59-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-59-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep60",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 60,
    "titleUz": "60-qism: Deutsch lernen (A1) | Nicos Weg | Folge 58: Mein Lieblingspulli",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 58: Mein Lieblingspulli",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 60-qismi.",
    "youtubeId": "9iJnx2PESSk",
    "duration": "1:51",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-60-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-60-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep61",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 61,
    "titleUz": "61-qism: Deutsch lernen (A1) | Nicos Weg | Folge 59: Das passt gut!",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 59: Das passt gut!",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 61-qismi.",
    "youtubeId": "pCRS-oxE61k",
    "duration": "2:37",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-61-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-61-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep62",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 62,
    "titleUz": "62-qism: Deutsch lernen (A1) | Nicos Weg | Folge 60: Schick!",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 60: Schick!",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 62-qismi.",
    "youtubeId": "eYaoCcvPd_U",
    "duration": "1:41",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-62-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-62-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep63",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 63,
    "titleUz": "63-qism: Deutsch lernen (A1) | Nicos Weg | Folge 61: Meine Familie",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 61: Meine Familie",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 63-qismi.",
    "youtubeId": "6CQ32OWDyq4",
    "duration": "1:17",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-63-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-63-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep64",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 64,
    "titleUz": "64-qism: Deutsch lernen (A1) | Nicos Weg | Folge 62: Meine Eltern",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 62: Meine Eltern",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 64-qismi.",
    "youtubeId": "KJ-icYRJ29s",
    "duration": "1:42",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-64-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-64-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep65",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 65,
    "titleUz": "65-qism: Deutsch lernen (A1) | Nicos Weg | Folge 63: Meine Tante",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 63: Meine Tante",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 65-qismi.",
    "youtubeId": "4U9iAmC3rFQ",
    "duration": "1:44",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-65-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-65-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep66",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 66,
    "titleUz": "66-qism: Deutsch lernen (A1) | Nicos Weg | Folge 64: Mein Bruder",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 64: Mein Bruder",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 66-qismi.",
    "youtubeId": "oJmH9eD7Lao",
    "duration": "1:19",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-66-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-66-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep67",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 67,
    "titleUz": "67-qism: Deutsch lernen (A1) | Nicos Weg | Folge 65: Von Kopf bis Fuß",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 65: Von Kopf bis Fuß",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 67-qismi.",
    "youtubeId": "otY2T26FOP0",
    "duration": "1:34",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-67-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-67-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep68",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 68,
    "titleUz": "68-qism: Deutsch lernen (A1) | Nicos Weg | Folge 66: Bist du fit?",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 66: Bist du fit?",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 68-qismi.",
    "youtubeId": "B7MMM3SrSlg",
    "duration": "1:16",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-68-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-68-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep69",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 69,
    "titleUz": "69-qism: Deutsch lernen (A1) | Nicos Weg | Folge 67: Fitness",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 67: Fitness",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 69-qismi.",
    "youtubeId": "826-EwY51Fw",
    "duration": "1:29",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-69-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-69-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep70",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 70,
    "titleUz": "70-qism: Deutsch lernen (A1) | Nicos Weg | Folge 68: Ist das gesund?",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 68: Ist das gesund?",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 70-qismi.",
    "youtubeId": "DiMQTg7D7Ao",
    "duration": "1:19",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-70-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-70-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep71",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 71,
    "titleUz": "71-qism: Deutsch lernen (A1) | Nicos Weg | Folge 69: Geht es dir gut?",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 69: Geht es dir gut?",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 71-qismi.",
    "youtubeId": "0b66BzvKgMY",
    "duration": "1:16",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-71-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-71-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep72",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 72,
    "titleUz": "72-qism: Deutsch lernen (A1) | Nicos Weg | Folge 70: Beim Arzt",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 70: Beim Arzt",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 72-qismi.",
    "youtubeId": "cTJ1KFzmhbc",
    "duration": "1:44",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-72-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-72-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep73",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 73,
    "titleUz": "73-qism: Deutsch lernen (A1) | Nicos Weg | Folge 71: Gute Besserung!",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 71: Gute Besserung!",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 73-qismi.",
    "youtubeId": "ilp0CwKxdbY",
    "duration": "1:32",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-73-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-73-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep74",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 74,
    "titleUz": "74-qism: Deutsch lernen (A1) | Nicos Weg | Folge 72: Nehmen Sie …",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 72: Nehmen Sie …",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 74-qismi.",
    "youtubeId": "VWomWeeqsAk",
    "duration": "1:49",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-74-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-74-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep75",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 75,
    "titleUz": "75-qism: Deutsch lernen (A1) | Nicos Weg | Folge 73: Meine Heimat",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 73: Meine Heimat",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 75-qismi.",
    "youtubeId": "mkXWqvL3-hA",
    "duration": "1:23",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-75-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-75-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep76",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 76,
    "titleUz": "76-qism: Deutsch lernen (A1) | Nicos Weg | Folge 74: Leben in Deutschland",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 74: Leben in Deutschland",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 76-qismi.",
    "youtubeId": "ppIFbtiL1kQ",
    "duration": "1:41",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-76-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-76-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep77",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 77,
    "titleUz": "77-qism: Deutsch lernen (A1) | Nicos Weg | Folge 75: Anders als zu Hause",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 75: Anders als zu Hause",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 77-qismi.",
    "youtubeId": "k8_8CA5Ls94",
    "duration": "1:46",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-77-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-77-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep78",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 78,
    "titleUz": "78-qism: Deutsch lernen (A1) | Nicos Weg | Folge 76: Ich träume von …",
    "titleDe": "Deutsch lernen (A1) | Nicos Weg | Folge 76: Ich träume von …",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 78-qismi.",
    "youtubeId": "bgnox1SRrw8",
    "duration": "1:47",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-78-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-78-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep79",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 79,
    "titleUz": "79-qism: Deutsch lernen mit der DW | Nicos Weg | Rückblick A1",
    "titleDe": "Deutsch lernen mit der DW | Nicos Weg | Rückblick A1",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 79-qismi.",
    "youtubeId": "S_haCcudQZk",
    "duration": "3:10",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-79-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-79-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  },
  {
    "id": "nicos-a1-ep80",
    "channelId": "nicos-weg-a1",
    "level": "a1",
    "episodeNumber": 80,
    "titleUz": "80-qism: Tutorial: Wie nutze ich „Nicos Weg“?",
    "titleDe": "Tutorial: Wie nutze ich „Nicos Weg“?",
    "descriptionUz": "Deutsche Welle Nicos Weg A1 rasmiy o‘quv filmining 80-qismi.",
    "youtubeId": "sy3xEdPwmVw",
    "duration": "9:42",
    "topics": [
      "Deutsche Welle",
      "Nicos Weg",
      "A1",
      "Video film"
    ],
    "shadowingPhrases": [
      {
        "id": "nw-80-1",
        "german": "Hallo Nico! Willkommen in Deutschland.",
        "uzbek": "Salom Niko! Germaniyaga xush kelibsiz.",
        "phoneticHint": "[Hallo Niko! Vilkommen in Doychland]"
      },
      {
        "id": "nw-80-2",
        "german": "Ich lerne Deutsch Schritt für Schritt mit Nicos Weg.",
        "uzbek": "Men Nicos Weg bilan nemis tilini qadam-baqadam o‘rganmoqdaman.",
        "phoneticHint": "[Ix lerne Doych Shritt fyur Shritt mit Nikos Veg]"
      }
    ],
    "keyVocabulary": [
      {
        "german": "die Lektion",
        "uzbek": "dars",
        "article": "die"
      },
      {
        "german": "sprechen",
        "uzbek": "gapirmoq"
      },
      {
        "german": "das Wort",
        "uzbek": "so‘z",
        "article": "das"
      }
    ]
  }
],
  ...[
  {
    "id": "ibrat-a2-ep01",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 1,
    "titleUz": "1-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 1: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 1-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-1-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep02",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 2,
    "titleUz": "2-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 2: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 2-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-2-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep03",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 3,
    "titleUz": "3-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 3: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 3-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-3-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep04",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 4,
    "titleUz": "4-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 4: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 4-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-4-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep05",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 5,
    "titleUz": "5-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 5: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 5-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-5-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep06",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 6,
    "titleUz": "6-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 6: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 6-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-6-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep07",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 7,
    "titleUz": "7-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 7: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 7-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-7-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep08",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 8,
    "titleUz": "8-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 8: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 8-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-8-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep09",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 9,
    "titleUz": "9-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 9: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 9-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-9-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep10",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 10,
    "titleUz": "10-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 10: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 10-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-10-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep11",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 11,
    "titleUz": "11-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 11: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 11-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-11-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep12",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 12,
    "titleUz": "12-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 12: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 12-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-12-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep13",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 13,
    "titleUz": "13-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 13: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 13-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-13-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep14",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 14,
    "titleUz": "14-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 14: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 14-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-14-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep15",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 15,
    "titleUz": "15-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 15: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 15-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-15-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep16",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 16,
    "titleUz": "16-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 16: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 16-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-16-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep17",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 17,
    "titleUz": "17-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 17: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 17-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-17-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep18",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 18,
    "titleUz": "18-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 18: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 18-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-18-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep19",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 19,
    "titleUz": "19-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 19: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 19-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-19-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep20",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 20,
    "titleUz": "20-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 20: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 20-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-20-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep21",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 21,
    "titleUz": "21-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 21: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 21-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-21-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep22",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 22,
    "titleUz": "22-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 22: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 22-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-22-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep23",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 23,
    "titleUz": "23-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 23: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 23-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-23-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep24",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 24,
    "titleUz": "24-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 24: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 24-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-24-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep25",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 25,
    "titleUz": "25-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 25: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 25-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-25-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep26",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 26,
    "titleUz": "26-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 26: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 26-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-26-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep27",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 27,
    "titleUz": "27-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 27: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 27-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-27-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep28",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 28,
    "titleUz": "28-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 28: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 28-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-28-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep29",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 29,
    "titleUz": "29-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 29: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 29-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-29-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep30",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 30,
    "titleUz": "30-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 30: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 30-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-30-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep31",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 31,
    "titleUz": "31-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 31: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 31-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-31-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep32",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 32,
    "titleUz": "32-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 32: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 32-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-32-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep33",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 33,
    "titleUz": "33-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 33: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 33-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-33-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep34",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 34,
    "titleUz": "34-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 34: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 34-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-34-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep35",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 35,
    "titleUz": "35-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 35: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 35-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-35-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep36",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 36,
    "titleUz": "36-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 36: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 36-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-36-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep37",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 37,
    "titleUz": "37-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 37: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 37-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-37-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep38",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 38,
    "titleUz": "38-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 38: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 38-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-38-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep39",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 39,
    "titleUz": "39-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 39: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 39-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-39-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep40",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 40,
    "titleUz": "40-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 40: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 40-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-40-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep41",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 41,
    "titleUz": "41-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 41: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 41-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-41-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep42",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 42,
    "titleUz": "42-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 42: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 42-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-42-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep43",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 43,
    "titleUz": "43-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 43: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 43-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-43-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep44",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 44,
    "titleUz": "44-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 44: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 44-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-44-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep45",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 45,
    "titleUz": "45-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 45: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 45-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-45-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep46",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 46,
    "titleUz": "46-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 46: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 46-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-46-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep47",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 47,
    "titleUz": "47-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 47: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 47-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-47-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep48",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 48,
    "titleUz": "48-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 48: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 48-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-48-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep49",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 49,
    "titleUz": "49-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 49: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 49-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-49-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  },
  {
    "id": "ibrat-a2-ep50",
    "channelId": "ibrat-nemis-a2",
    "level": "a2",
    "episodeNumber": 50,
    "titleUz": "50-dars: A2 darajadagi mavzu va grammatika",
    "titleDe": "A2 Lektion 50: Grammatik und Konversation",
    "descriptionUz": "Ibrat Farzandlari A2 kursi 50-darsi.",
    "youtubeId": "0nnjCGekoBg",
    "duration": "15:30",
    "topics": [
      "A2",
      "Grammatika",
      "Muloqot"
    ],
    "shadowingPhrases": [
      {
        "id": "ib-a2-50-1",
        "german": "Ich habe heute einen interessanten Text auf Deutsch gelesen.",
        "uzbek": "Men bugun nemis tilida qiziqarli matn o‘qidim."
      }
    ],
    "keyVocabulary": [
      {
        "german": "der Text",
        "uzbek": "matn",
        "article": "der"
      }
    ]
  }
]
];

// LocalStorage helpers for watched videos & custom URL overrides
const YOUTUBE_COMPLETED_KEY = 'fgn_youtube_completed_videos';
const YOUTUBE_URL_OVERRIDES_KEY = 'fgn_youtube_url_overrides';

export class YoutubeStorageService {
  private static isBrowser = typeof window !== 'undefined';

  public static getCompletedVideoIds(): Set<string> {
    if (!this.isBrowser) return new Set();
    try {
      const data = localStorage.getItem(YOUTUBE_COMPLETED_KEY);
      return data ? new Set(JSON.parse(data)) : new Set();
    } catch {
      return new Set();
    }
  }

  public static toggleVideoCompleted(videoId: string): boolean {
    if (!this.isBrowser) return false;
    const completed = this.getCompletedVideoIds();
    let isNowCompleted = false;
    if (completed.has(videoId)) {
      completed.delete(videoId);
      isNowCompleted = false;
    } else {
      completed.add(videoId);
      isNowCompleted = true;
    }
    localStorage.setItem(YOUTUBE_COMPLETED_KEY, JSON.stringify(Array.from(completed)));
    return isNowCompleted;
  }

  public static getChannelProgress(channelId: string, totalVideos: number): { completed: number; total: number; percentage: number } {
    const completedSet = this.getCompletedVideoIds();
    const channelVideos = ALL_YOUTUBE_VIDEOS.filter(v => v.channelId === channelId);
    const count = channelVideos.filter(v => completedSet.has(v.id)).length;
    const total = totalVideos || channelVideos.length || 1;
    const percentage = Math.round((count / total) * 100);
    return { completed: count, total, percentage };
  }

  public static getLevelProgress(level: string): { completed: number; total: number; percentage: number } {
    const completedSet = this.getCompletedVideoIds();
    const levelVideos = ALL_YOUTUBE_VIDEOS.filter(v => level === 'all' || v.level === level);
    const count = levelVideos.filter(v => completedSet.has(v.id)).length;
    const total = levelVideos.length || 1;
    const percentage = Math.round((count / total) * 100);
    return { completed: count, total, percentage };
  }

  public static getUrlOverrides(): Record<string, string> {
    if (!this.isBrowser) return {};
    try {
      const data = localStorage.getItem(YOUTUBE_URL_OVERRIDES_KEY);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  }

  public static setVideoUrl(videoId: string, newUrlOrId: string) {
    if (!this.isBrowser) return;
    const overrides = this.getUrlOverrides();
    const cleanId = extractYoutubeId(newUrlOrId);
    overrides[videoId] = cleanId;
    localStorage.setItem(YOUTUBE_URL_OVERRIDES_KEY, JSON.stringify(overrides));
  }

  public static getVideoEffectiveId(video: YoutubeLessonVideo): string {
    const overrides = this.getUrlOverrides();
    if (overrides[video.id]) {
      return overrides[video.id];
    }
    return extractYoutubeId(video.youtubeId);
  }
}
