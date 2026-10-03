import { PronunciationRule } from '../types/database';

export const PRONUNCIATION_RULES: PronunciationRule[] = [
  // 1. UMLAUTS & ESZETT
  {
    id: 'pr-ae',
    symbol: 'ä / Ä',
    category: 'umlauts',
    nameUz: 'A-Umlaut',
    pronunciationUz: 'Ochiq [e] kabi talaffuz qilinadi',
    soundHintUz: 'O‘zbek tilidagi "ertak" so‘zidagi "e" kabi og‘iz kengroq ochilib aytiladi.',
    examples: [
      { german: 'Käse', phonetic: '[ke:ze]', uzbek: 'pishloq' },
      { german: 'Äpfel', phonetic: '[epfel]', uzbek: 'olmalar' },
      { german: 'Mädchen', phonetic: '[me:txen]', uzbek: 'qiz bola' }
    ]
  },
  {
    id: 'pr-oe',
    symbol: 'ö / Ö',
    category: 'umlauts',
    nameUz: 'O-Umlaut',
    pronunciationUz: 'Lablar oldinga yumaloqlanib [o‘] aytiladi',
    soundHintUz: 'Lablarni [o] kabi doira qilib, [e] tovushini chiqarishga harakat qiling.',
    examples: [
      { german: 'schön', phonetic: '[shø:n]', uzbek: 'chiroyli' },
      { german: 'hören', phonetic: '[hø:ren]', uzbek: 'tinglamoq' },
      { german: 'Können', phonetic: '[kønen]', uzbek: 'qila olmoq' }
    ]
  },
  {
    id: 'pr-ue',
    symbol: 'ü / Ü',
    category: 'umlauts',
    nameUz: 'U-Umlaut',
    pronunciationUz: 'Lablar oldinga cho‘zilib aytiladigan yumshoq [yu/u]',
    soundHintUz: 'Lablarni hushtak chalgandek cho‘zib, [i] deb talaffuz qilishga urining.',
    examples: [
      { german: 'über', phonetic: '[y:ber]', uzbek: 'haqida / ustida' },
      { german: 'Tschüss', phonetic: '[tshyus]', uzbek: 'xayr' },
      { german: 'müde', phonetic: '[my:de]', uzbek: 'charchagan' }
    ]
  },
  {
    id: 'pr-ss',
    symbol: 'ß',
    category: 'umlauts',
    nameUz: 'Eszett (Scharfes S)',
    pronunciationUz: 'Har doim jarangli emas, qat‘iy jarangiz [s] deb o‘qiladi',
    soundHintUz: 'Hech qachon [z] o‘qilmaydi. Faqat cho‘ziq unlilardan so‘ng keladi.',
    examples: [
      { german: 'heißen', phonetic: '[haysen]', uzbek: 'nomlanmoq' },
      { german: 'groß', phonetic: '[gro:s]', uzbek: 'katta' },
      { german: 'Straße', phonetic: '[shtra:se]', uzbek: 'ko‘cha' }
    ]
  },

  // 2. DIPHTHONGS (IKKI UNLI BIRIKMASI)
  {
    id: 'pr-ei',
    symbol: 'ei / ai',
    category: 'diphthongs',
    nameUz: 'EI diftongi',
    pronunciationUz: '[ay] deb o‘qiladi',
    soundHintUz: 'O‘zbekcha "may" so‘zidagi "ay" kabi o‘qiladi.',
    examples: [
      { german: 'mein', phonetic: '[mayn]', uzbek: 'mening' },
      { german: 'nein', phonetic: '[nayn]', uzbek: 'yo‘q' },
      { german: 'zwei', phonetic: '[tsfay]', uzbek: 'ikki (2)' }
    ]
  },
  {
    id: 'pr-ie',
    symbol: 'ie',
    category: 'diphthongs',
    nameUz: 'IE birikmasi',
    pronunciationUz: 'Cho‘ziq [i:] deb o‘qiladi',
    soundHintUz: '[ye] emas, balki bir oz cho‘zilgan toza [i:] tovushi.',
    examples: [
      { german: 'Sie', phonetic: '[zi:]', uzbek: 'Siz (hurmat)' },
      { german: 'wie', phonetic: '[vi:]', uzbek: 'qanday' },
      { german: 'sieben', phonetic: '[zi:ben]', uzbek: 'yetti (7)' }
    ]
  },
  {
    id: 'pr-eu',
    symbol: 'eu / äu',
    category: 'diphthongs',
    nameUz: 'EU va ÄU diftonglari',
    pronunciationUz: '[oy] deb o‘qiladi',
    soundHintUz: 'O‘zbekcha "boy" so‘zidagi "oy" kabi talaffuz qilinadi.',
    examples: [
      { german: 'heute', phonetic: '[hoyte]', uzbek: 'bugun' },
      { german: 'Deutschland', phonetic: '[doytshlant]', uzbek: 'Germaniya' },
      { german: 'Häuser', phonetic: '[hoyzer]', uzbek: 'uylar' }
    ]
  },
  {
    id: 'pr-au',
    symbol: 'au',
    category: 'diphthongs',
    nameUz: 'AU diftongi',
    pronunciationUz: '[au] deb o‘qiladi',
    soundHintUz: 'Tez aytiladigan [au] tovushi.',
    examples: [
      { german: 'Auto', phonetic: '[auto]', uzbek: 'avtomobil' },
      { german: 'Frau', phonetic: '[frau]', uzbek: 'ayol / xonim' },
      { german: 'auf Wiedersehen', phonetic: '[auf vi:derze:en]', uzbek: 'ko‘rishguncha' }
    ]
  },

  // 3. CONSONANTS & CLUSTERS (UNDOSHLAR VA BIRIKMALAR)
  {
    id: 'pr-sch',
    symbol: 'sch',
    category: 'consonants',
    nameUz: 'SCH birikmasi',
    pronunciationUz: '[sh] deb o‘qiladi',
    soundHintUz: 'O‘zbekcha yumshoq [sh] tovushi.',
    examples: [
      { german: 'Schule', phonetic: '[shu:le]', uzbek: 'maktab' },
      { german: 'schreiben', phonetic: '[shrayben]', uzbek: 'yozmoq' },
      { german: 'Tisch', phonetic: '[tish]', uzbek: 'stol' }
    ]
  },
  {
    id: 'pr-sp-st',
    symbol: 'sp / st',
    category: 'consonants',
    nameUz: 'So‘z boshidagi SP va ST',
    pronunciationUz: '[shp] va [sht] deb o‘qiladi',
    soundHintUz: 'Faqat so‘z yoki o‘zak boshida kelsa [shp] va [sht] o‘qiladi.',
    examples: [
      { german: 'Sport', phonetic: '[shport]', uzbek: 'sport' },
      { german: 'Stadt', phonetic: '[shtat]', uzbek: 'shahar' },
      { german: 'sprechen', phonetic: '[shprexen]', uzbek: 'gapirmoq' }
    ]
  },
  {
    id: 'pr-ch',
    symbol: 'ch',
    category: 'consonants',
    nameUz: 'CH tovushi',
    pronunciationUz: 'a, o, u dan so‘ng [x], qolgan hollarda yumshoq [ç]',
    soundHintUz: '"ich" so‘zida yumshoq shivirlashga yaqin [ç], "Buch" so‘zida esa tomoqdan chiqadigan [x].',
    examples: [
      { german: 'ich', phonetic: '[iç]', uzbek: 'men' },
      { german: 'Buch', phonetic: '[bu:x]', uzbek: 'kitob' },
      { german: 'Küche', phonetic: '[ky:çe]', uzbek: 'oshxona' }
    ]
  },
  {
    id: 'pr-w',
    symbol: 'w',
    category: 'consonants',
    nameUz: 'W harfi',
    pronunciationUz: 'Har doim [v] deb o‘qiladi',
    soundHintUz: 'Inglizchadan farqli o‘laroq, nemischada "w" faqat [v] tovushini beradi.',
    examples: [
      { german: 'wohnen', phonetic: '[vo:nen]', uzbek: 'yashamoq' },
      { german: 'Wasser', phonetic: '[vaser]', uzbek: 'suv' },
      { german: 'wer', phonetic: '[ve:r]', uzbek: 'kim' }
    ]
  },
  {
    id: 'pr-v',
    symbol: 'v',
    category: 'consonants',
    nameUz: 'V harfi',
    pronunciationUz: 'Nemischa so‘zlarda [f] deb o‘qiladi',
    soundHintUz: 'Faqat xalqaro so‘zlarda (masalan, Vase) [v] o‘qiladi.',
    examples: [
      { german: 'Vater', phonetic: '[fa:ter]', uzbek: 'ota' },
      { german: 'vier', phonetic: '[fi:r]', uzbek: 'to‘rt (4)' },
      { german: 'viel', phonetic: '[fi:l]', uzbek: 'ko‘p' }
    ]
  },
  {
    id: 'pr-z',
    symbol: 'z',
    category: 'consonants',
    nameUz: 'Z harfi',
    pronunciationUz: 'Doimo [ts] deb o‘qiladi',
    soundHintUz: 'Hech qachon [z] o‘qilmaydi. Masalan "Zimmer" -> [tsimmer].',
    examples: [
      { german: 'Zimmer', phonetic: '[tsimmer]', uzbek: 'xona' },
      { german: 'Zeit', phonetic: '[tsayt]', uzbek: 'vaqt' },
      { german: 'zehn', phonetic: '[tse:n]', uzbek: 'o‘n (10)' }
    ]
  }
];
