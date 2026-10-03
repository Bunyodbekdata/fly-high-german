import { ExerciseItem } from '../types/database';

export interface ModuleReviewData {
  moduleId: string;
  levelCode: string;
  titleDe: string;
  titleUz: string;
  summaryUz: string;
  checklistUz: string[];
  keyVocab: { german: string; article?: string; plural?: string; uzbek: string }[];
  grammarNotesUz: { title: string; explanation: string }[];
  miniTest: ExerciseItem[];
}

export const MODULE_REVIEWS: Record<string, ModuleReviewData> = {
  // ==========================================
  // A1.1 MODUL 1: Erstes Kennenlernen (Lektion 1, 2, 3)
  // ==========================================
  'mod-1': {
    moduleId: 'mod-1',
    levelCode: 'a1-1',
    titleDe: 'Wiederholung & Mini-Test: Erstes Kennenlernen',
    titleUz: '1-Modul Takrori va Mini-Test: Dastlabki tanishuv va muloqot',
    summaryUz: 'Ushbu modulda siz salomlashuv, o‘zingizni tanishtirish, kasblar, oila a‘zolari, "sein" va "haben" fe‘llari tuslanishi hamda egalik olmoshlarini (mein/dein) o‘rgandingiz.',
    checklistUz: [
      'Rasmiy va norasmiy salomlashish (Hallo, Guten Tag, Auf Wiedersehen, Tschüss)',
      'Ism, mamlakat va yashash shahrini aytish (Ich heiße..., Ich komme aus..., Ich wohne in...)',
      'Kasb va mashg‘ulotni ifodalash (Ich bin Journalist / Lehrerin)',
      'Oila a‘zolarini tanishtirish (mein Vater, meine Mutter, meine Geschwister)',
      '"sein" va "haben" fe‘llarining tuslanishini bilish',
      'W-Fragen (Wie? Woher? Wo? Was?) va Ja/Nein savollarini tuza olish'
    ],
    keyVocab: [
      { german: 'der Name', article: 'der', plural: 'die Namen', uzbek: 'ism' },
      { german: 'das Land', article: 'das', plural: 'die Länder', uzbek: 'mamlakat' },
      { german: 'die Sprache', article: 'die', plural: 'die Sprachen', uzbek: 'til' },
      { german: 'der Beruf', article: 'der', plural: 'die Berufe', uzbek: 'kasb' },
      { german: 'die Familie', article: 'die', plural: 'die Familien', uzbek: 'oila' },
      { german: 'der Vater', article: 'der', plural: 'die Väter', uzbek: 'ota' },
      { german: 'die Mutter', article: 'die', plural: 'die Mütter', uzbek: 'ona' },
      { german: 'haben', uzbek: 'ega bo‘lmoq' },
      { german: 'sein', uzbek: 'bo‘lmoq' }
    ],
    grammarNotesUz: [
      {
        title: 'Fe‘lning 2-o‘rinda kelishi (Verbposition 2)',
        explanation: 'Nemis tilida darak gaplarda va W-savollarda tuslangan fe‘l doimo 2-o‘rinda turadi: "Ich wohne in Berlin", "Woher kommst du?".'
      },
      {
        title: 'sein va haben fe‘llari',
        explanation: 'sein: ich bin, du bist, er ist, wir sind, ihr seid, sie/Sie sind. haben: ich habe, du hast, er hat, wir haben, ihr habt, sie/Sie haben.'
      }
    ],
    miniTest: [
      {
        id: 'rev-m1-q1',
        type: 'multiple-choice',
        questionUz: '"Men Germaniyadan kelganman" gapining to‘g‘ri shaklini tanlang:',
        options: ['Ich komme aus Deutschland.', 'Ich wohne aus Deutschland.', 'Ich heiße Deutschland.', 'Ich bin in Deutschland kommen.'],
        correctAnswer: 'Ich komme aus Deutschland.',
        explanationUz: 'Kelib chiqish uchun "kommen aus" ishlatiladi.',
        mistakeTipUz: '❌ Kelib chiqish uchun "aus", shaharda yashash uchun "in" ishlatiladi.'
      },
      {
        id: 'rev-m1-q2',
        type: 'fill-blank',
        questionUz: '"sein" fe‘lining to‘g‘ri shaklini qo‘ying: "Was _____ Sie von Beruf?"',
        blankSentence: 'Was [blank] Sie von Beruf?',
        options: ['sind', 'ist', 'seid', 'bin'],
        correctAnswer: 'sind',
        explanationUz: '"Sie" (hurmat shakli) uchun "sind" ishlatiladi: "Was sind Sie von Beruf?".',
        mistakeTipUz: '❌ "Sie" uchun "sind" bo‘ladi.'
      },
      {
        id: 'rev-m1-q3',
        type: 'multiple-choice',
        questionUz: '"Bu mening onam" jumlasi qanday to‘g‘ri bo‘ladi?',
        options: ['Das ist mein Mutter.', 'Das ist meine Mutter.', 'Das ist dein Mutter.', 'Das ist meinst Mutter.'],
        correctAnswer: 'Das ist meine Mutter.',
        explanationUz: '"die Mutter" ayol jinsida bo‘lgani uchun "meine Mutter" bo‘ladi.',
        mistakeTipUz: '❌ Ayol jinsidagi otlar uchun "meine" ishlatiladi.'
      }
    ]
  },

  // ==========================================
  // A1.1 MODUL 2: Gegenstände und Einkaufen (Lektion 4, 5, 6)
  // ==========================================
  'mod-2': {
    moduleId: 'mod-2',
    levelCode: 'a1-1',
    titleDe: 'Wiederholung & Mini-Test: Gegenstände und Einkaufen',
    titleUz: '2-Modul Takrori va Mini-Test: Buyumlar va xarid qilish',
    summaryUz: 'Ushbu modulda siz mebel va xona jihozlari, ranglar, aniq va noaniq artikllar (der/die/das, ein/eine), inkor artikl (kein/keine), ko‘plik shakllari va Akkusativ (tushum kelishigi)ni o‘rgandingiz.',
    checklistUz: [
      'Mebel va ofis jihozlarini bilish (Tisch, Stuhl, Bett, Sofa, Lampe, Computer, Stift)',
      'Aniq artikllar (der, das, die) va ularning olmoshlari (er, es, sie)ni to‘g‘ri ishlatish',
      'Noaniq artikl (ein, eine) va inkor (kein, keine) farqini bilish',
      'Akkusativ kelishigida faqat muzskoy jins o‘zgarishini bilish (den / einen / keinen)',
      '"brauchen", "haben", "suchen" fe‘llaridan keyin Akkusativni to‘g‘ri qo‘llash'
    ],
    keyVocab: [
      { german: 'der Tisch', article: 'der', plural: 'die Tische', uzbek: 'stol' },
      { german: 'der Stuhl', article: 'der', plural: 'die Stühle', uzbek: 'stul' },
      { german: 'das Bett', article: 'das', plural: 'die Betten', uzbek: 'karovot' },
      { german: 'die Lampe', article: 'die', plural: 'die Lampen', uzbek: 'lampa' },
      { german: 'der Stift', article: 'der', plural: 'die Stifte', uzbek: 'ruchka' },
      { german: 'das Buch', article: 'das', plural: 'die Bücher', uzbek: 'kitob' },
      { german: 'brauchen', uzbek: 'kerak bo‘lmoq' },
      { german: 'suchen', uzbek: 'qidirmoq' }
    ],
    grammarNotesUz: [
      {
        title: 'Akkusativ kelishigi qoidasi',
        explanation: 'Akkusativda FAQAT erkak jinsi (Maskulin) o‘zgaradi: der -> den, ein -> einen, kein -> keinen. Sredniy (das) va Jenskiy (die) esa o‘zgarishsiz qoladi!'
      }
    ],
    miniTest: [
      {
        id: 'rev-m2-q1',
        type: 'multiple-choice',
        questionUz: '"Menga bitta stul kerak" gapida "der Stuhl" Akkusativda qanday bo‘ladi?',
        options: ['Ich brauche einen Stuhl.', 'Ich brauche ein Stuhl.', 'Ich brauche eine Stuhl.', 'Ich brauche der Stuhl.'],
        correctAnswer: 'Ich brauche einen Stuhl.',
        explanationUz: '"der Stuhl" muzskoy rod bo‘lib, Akkusativda "einen Stuhl" bo‘ladi.',
        mistakeTipUz: '❌ Muzskoy rod Akkusativda "einen" oladi.'
      },
      {
        id: 'rev-m2-q2',
        type: 'fill-blank',
        questionUz: '"das Bett" so‘zining o‘rniga to‘g‘ri olmoshni qo‘ying: "Das Bett ist sehr bequem. _____ ist neu."',
        blankSentence: 'Das Bett ist sehr bequem. [blank] ist neu.',
        options: ['Es', 'Er', 'Sie', 'Ihn'],
        correctAnswer: 'Es',
        explanationUz: '"das" artiklidagi otlar "es" olmoshi bilan almashtiriladi.',
        mistakeTipUz: '❌ "das" rodidagi so‘zlar olmoshi "es" bo‘ladi.'
      },
      {
        id: 'rev-m2-q3',
        type: 'multiple-choice',
        questionUz: '"die Brille" so‘zining inkor shakli qaysi?',
        options: ['kein Brille', 'keine Brille', 'nicht Brille', 'keinen Brille'],
        correctAnswer: 'keine Brille',
        explanationUz: '"die Brille" ayol jinsida bo‘lgani sababli inkor shakli "keine Brille" bo‘ladi.',
        mistakeTipUz: '❌ "die" rodidagi so‘zlar uchun "keine" ishlatiladi.'
      }
    ]
  },

  // ==========================================
  // A1.1 MODUL 3: Essen, Trinken und Freizeit (Lektion 7, 8, 9)
  // ==========================================
  'mod-3': {
    moduleId: 'mod-3',
    levelCode: 'a1-1',
    titleDe: 'Wiederholung & Mini-Test: Essen, Trinken und Freizeit',
    titleUz: '3-Modul Takrori va Mini-Test: Yegulik, ichimlik va bo‘sh vaqt',
    summaryUz: 'Ushbu modulda siz xobbi va qiziqishlar, hafta kunlari (Montag-Sonntag), unlisi o‘zgaruvchi fe‘llar (lesen, fahren, treffen, essen), oziq-ovqatlar, bozorlik va narx so‘rashni o‘rgandingiz.',
    checklistUz: [
      'Hafta kunlarini va "am Montag", "am Wochenende" iboralarini to‘g‘ri qo‘llash',
      'Kuchli fe‘llarning "du" va "er" da unli o‘zgarishini bilish (du liest, er fährt, du isst)',
      'Oziq-ovqat mahsulotlarini artikllari bilan aytish (das Brot, das Fleisch, der Käse, die Milch)',
      'Bozor va supermarketda narx so‘rash va "Ich möchte bitte..." deb xarid qilish',
      'O‘lchov birliklarini bilish (ein Kilo, 200 Gramm, eine Flasche, ein Liter)'
    ],
    keyVocab: [
      { german: 'das Hobby', article: 'das', plural: 'die Hobbys', uzbek: 'xobbi' },
      { german: 'das Wochenende', article: 'das', plural: 'die Wochenenden', uzbek: 'dam olish kunlari' },
      { german: 'das Brot', article: 'das', plural: 'die Brote', uzbek: 'non' },
      { german: 'das Fleisch', article: 'das', uzbek: 'go‘sht' },
      { german: 'der Käse', article: 'der', uzbek: 'pishloq' },
      { german: 'der Apfel', article: 'der', plural: 'die Äpfel', uzbek: 'olma' },
      { german: 'das Kilo', article: 'das', plural: 'die Kilos', uzbek: 'kilogramm' },
      { german: 'lesen', uzbek: 'o‘qimoq' },
      { german: 'fahren', uzbek: 'bormoq (transportda)' }
    ],
    grammarNotesUz: [
      {
        title: 'Unlisi o‘zgaruvchi fe‘llar (Vokalwechsel)',
        explanation: 'Faqat "du" va "er/sie/es" shaxsida: lesen -> du liest, er liest; fahren -> du fährst, er fährt; essen -> du isst, er isst.'
      }
    ],
    miniTest: [
      {
        id: 'rev-m3-q1',
        type: 'multiple-choice',
        questionUz: '"fahren" fe‘lining "du" shaxsiga mos shaklini tanlang:',
        options: ['du fahrst', 'du fährst', 'du fahrt', 'du fahren'],
        correctAnswer: 'du fährst',
        explanationUz: '"fahren" fe‘li "du" da o‘zak unlisini ä ga almashtiradi: "du fährst".',
        mistakeTipUz: '❌ "fahren" fe‘li "du" da Umlaut oladi: du fährst.'
      },
      {
        id: 'rev-m3-q2',
        type: 'word-order',
        questionUz: 'Gapni to‘g‘ri tartibda tuzing (Fe‘l 2-o‘rinda turishi shart!):',
        scrambledWords: ['Am', 'ich', 'Samstag', 'Freunde', 'treffe'],
        correctAnswer: 'Am Samstag treffe ich Freunde',
        explanationUz: 'Am Samstag (1) + treffe (2) + ich (3) + Freunde (4).',
        mistakeTipUz: '❌ Vaqt iborasidan keyin darhol tuslangan fe‘l keladi.'
      },
      {
        id: 'rev-m3-q3',
        type: 'fill-blank',
        questionUz: '"möchten" fe‘lining to‘g‘ri shaklini qo‘ying: "Ich _____ bitte zwei Kilo Äpfel."',
        blankSentence: 'Ich [blank] bitte zwei Kilo Äpfel.',
        options: ['möchte', 'möchtest', 'möchtet', 'möchten'],
        correctAnswer: 'möchte',
        explanationUz: '"ich" bilan "möchte" bo‘ladi.',
        mistakeTipUz: '❌ "ich" uchun "möchte" ishlatiladi.'
      }
    ]
  },

  // ==========================================
  // A1.1 MODUL 4: Zeit, Alltag und Wohnen (Lektion 10, 11, 12)
  // ==========================================
  'mod-4': {
    moduleId: 'mod-4',
    levelCode: 'a1-1',
    titleDe: 'Wiederholung & Mini-Test: Zeit, Alltag und Wohnen',
    titleUz: '4-Modul Takrori va Mini-Test: Vaqt, kun tartibi va yashash joyi',
    summaryUz: 'Ushbu modulda siz soat vaqti (rasmiy va norasmiy), vaqt predloglari (um, am, von... bis...), ajraladigan fe‘llar (aufstehen, anfangen, einkaufen) hamda xonadon xonalarini o‘rgandingiz.',
    checklistUz: [
      'Soat necha bo‘lganini so‘rash va aytish (halb drei = 14:30, Viertel vor / nach)',
      'Vaqt predloglarini to‘g‘ri qo‘llash (um 8 Uhr, am Morgen, von 9 bis 17 Uhr)',
      'Ajraladigan fe‘llarni (aufstehen, einkaufen, fernsehen) gap oxiriga qo‘yish qoidasi',
      'Kvartira xonalarini bilish (Wohnzimmer, Schlafzimmer, Küche, Bad, Balkon)',
      'Sifatlar yordamida uyni tasvirlash (hell, ruhig, groß, klein, teuer, billig)'
    ],
    keyVocab: [
      { german: 'die Uhrzeit', article: 'die', plural: 'die Uhrzeiten', uzbek: 'soat vaqti' },
      { german: 'halb', uzbek: 'yarim' },
      { german: 'aufstehen', uzbek: 'o‘rnidan turmoq' },
      { german: 'anfangen', uzbek: 'boshlanmoq' },
      { german: 'einkaufen', uzbek: 'xarid qilmoq' },
      { german: 'die Wohnung', article: 'die', plural: 'die Wohnungen', uzbek: 'kvartira' },
      { german: 'das Zimmer', article: 'das', plural: 'die Zimmer', uzbek: 'xona' },
      { german: 'die Küche', article: 'die', plural: 'die Küchen', uzbek: 'oshxona' },
      { german: 'das Bad', article: 'das', plural: 'die Bäder', uzbek: 'hammom' }
    ],
    grammarNotesUz: [
      {
        title: 'Ajraladigan fe‘llar qoidasi (Trennbare Verben)',
        explanation: 'Tuslangan fe‘l 2-o‘rinda turadi, ajraluvchi prefiks (auf-, an-, ein-, fern-) esa gapning ENG OXIRIDA bo‘ladi: "Ich stehe um 7 Uhr auf."'
      }
    ],
    miniTest: [
      {
        id: 'rev-m4-q1',
        type: 'multiple-choice',
        questionUz: '"halb fünf" so‘zlashuvda qaysi soatni bildiradi?',
        options: ['05:30', '04:30', '05:15', '04:15'],
        correctAnswer: '04:30',
        explanationUz: '"halb fünf" 04:30 ni bildiradi (soat beshgacha yarim soat qoldi).',
        mistakeTipUz: '❌ "halb fünf" bu 4:30 dir.'
      },
      {
        id: 'rev-m4-q2',
        type: 'word-order',
        questionUz: 'Ajraladigan fe‘l bilan gap tuzing (Prefiks oxirida bo‘lsin!):',
        scrambledWords: ['um', 'Ich', 'stehe', 'auf', 'sieben', 'Uhr'],
        correctAnswer: 'Ich stehe um sieben Uhr auf',
        explanationUz: 'Ich (1) + stehe (2) + um sieben Uhr (3) + auf (oxirida).',
        mistakeTipUz: '❌ Ajraladigan prefiks "auf" gapning eng oxirida keladi.'
      },
      {
        id: 'rev-m4-q3',
        type: 'fill-blank',
        questionUz: 'Aniq soat vaqti oldidan qaysi predlog qo‘yiladi: "Der Kurs fängt _____ 9 Uhr an."',
        blankSentence: 'Der Kurs fängt [blank] 9 Uhr an.',
        options: ['um', 'am', 'im', 'von'],
        correctAnswer: 'um',
        explanationUz: 'Soat oldidan doimo "um" keladi: "um 9 Uhr".',
        mistakeTipUz: '❌ Soat oldidan "um" ishlatiladi.'
      }
    ]
  },

  // ==========================================
  // A1.2 MODUL 5: Unterwegs und Orientierung (Lektion 13, 14, 15)
  // ==========================================
  'mod-a1-2-1': {
    moduleId: 'mod-a1-2-1',
    levelCode: 'a1-2',
    titleDe: 'Wiederholung & Mini-Test: Unterwegs und Orientierung',
    titleUz: '5-Modul Takrori va Mini-Test: Shahar bo‘ylab va yo‘l topish',
    summaryUz: 'Ushbu modulda siz shaharda yo‘l so‘rash va yo‘nalish ko‘rsatish (geradeaus, nach links/rechts), "mit + Dativ" (mit dem Bus, mit der Bahn) hamda mehmonxonada xona band qilish va modal fe‘llarni (können, müssen) o‘rgandingiz.',
    checklistUz: [
      'Shahardagi binolarni aytish (Bahnhof, Post, Bank, Apotheke, Hotel)',
      'Yo‘l ko‘rsatish (Gehen Sie geradeaus, biegen Sie nach links ab)',
      'Transport vositalari bilan "mit + Dativ" ni to‘g‘ri qo‘llash (mit dem Bus, mit der U-Bahn)',
      'Mehmonxona xonasini band qilish va qulayliklar haqida so‘rash',
      '"können" va "müssen" modal fe‘llari bilan gap tuzish (ikkinchi fe‘l gap oxirida!)'
    ],
    keyVocab: [
      { german: 'der Bahnhof', article: 'der', plural: 'die Bahnhöfe', uzbek: 'vokzal' },
      { german: 'die Post', article: 'die', uzbek: 'pochta' },
      { german: 'der Bus', article: 'der', plural: 'die Busse', uzbek: 'avtobus' },
      { german: 'der Zug', article: 'der', plural: 'die Züge', uzbek: 'poyezd' },
      { german: 'die U-Bahn', article: 'die', plural: 'die U-Bahnen', uzbek: 'metro' },
      { german: 'das Hotel', article: 'das', plural: 'die Hotels', uzbek: 'mehmonxona' },
      { german: 'können', uzbek: 'qila olmoq' },
      { german: 'müssen', uzbek: 'shart bo‘lmoq' }
    ],
    grammarNotesUz: [
      {
        title: 'mit + Dativ qoidasi',
        explanation: 'Barcha transport vositalari bilan "mit" keladi va Dativ talab qiladi: mit dem Bus (der), mit dem Auto (das), mit der U-Bahn (die).'
      },
      {
        title: 'Modalfe‘llarda Satzklammer qoidasi',
        explanation: 'Modal fe‘l 2-o‘rinda, asosiy fe‘l esa infinitiv holida gapning ENG OXIRIDA bo‘ladi: "Ich muss morgen früh arbeiten."'
      }
    ],
    miniTest: [
      {
        id: 'rev-m5-q1',
        type: 'multiple-choice',
        questionUz: '"mit" predlogidan keyin "die U-Bahn" qanday bo‘ladi?',
        options: ['mit der U-Bahn', 'mit die U-Bahn', 'mit dem U-Bahn', 'mit den U-Bahn'],
        correctAnswer: 'mit der U-Bahn',
        explanationUz: '"U-Bahn" ayol jinsida bo‘lib, "mit" dan keyin Dativda "der" bo‘ladi.',
        mistakeTipUz: '❌ Ayol jinsidagi otlar Dativda "der" oladi.'
      },
      {
        id: 'rev-m5-q2',
        type: 'fill-blank',
        questionUz: '"müssen" modal fe‘lining to‘g‘ri shaklini qo‘ying: "Wir _____ bis 11 Uhr auschecken."',
        blankSentence: 'Wir [blank] bis 11 Uhr auschecken.',
        options: ['müssen', 'muss', 'müsst', 'musst'],
        correctAnswer: 'müssen',
        explanationUz: '"wir" bilan "müssen" bo‘ladi.',
        mistakeTipUz: '❌ "wir" uchun "müssen" ishlatiladi.'
      },
      {
        id: 'rev-m5-q3',
        type: 'multiple-choice',
        questionUz: '"die Post" so‘ziga "zu" predlogi qo‘shilganda qanday qisqaradi?',
        options: ['zur Post', 'zum Post', 'zu Post', 'zu dem Post'],
        correctAnswer: 'zur Post',
        explanationUz: '"zu + der Post = zur Post" bo‘ladi.',
        mistakeTipUz: '❌ "die" rodidagi so‘zlar bilan "zur" ishlatiladi.'
      }
    ]
  },

  // ==========================================
  // A1.2 MODUL 6: Gesundheit und Körper (Lektion 16, 17, 18)
  // ==========================================
  'mod-a1-2-2': {
    moduleId: 'mod-a1-2-2',
    levelCode: 'a1-2',
    titleDe: 'Wiederholung & Mini-Test: Gesundheit und Körper',
    titleUz: '6-Modul Takrori va Mini-Test: Salomatlik va inson tanasi',
    summaryUz: 'Ushbu modulda siz inson tana a‘zolari, og‘riq ifodalash ("weh tun": tut weh / tun weh), shifokor qabuli va dori-darmonlar, Buyruq mayli (Imperativ) hamda "sollen" modal fe‘lini o‘rgandingiz.',
    checklistUz: [
      'Inson tana a‘zolarini nomlash (der Kopf, das Auge, der Rücken, der Bauch, das Bein)',
      'Og‘riqni to‘g‘ri aytish (Mein Kopf tut weh / Meine Augen tun weh)',
      'Imperativ (buyruq mayli) shakllarini qo‘llash (Trinken Sie! / Trink! / Trinkt!)',
      'Shifokor ko‘rsatmalari va dorixona so‘zlarini bilish (Rezept, Tabletten, Tropfen)',
      '"sollen" modal fe‘li orqali maslahat va tavsiya berish ("Du sollst mehr schlafen")'
    ],
    keyVocab: [
      { german: 'der Kopf', article: 'der', plural: 'die Köpfe', uzbek: 'bosh' },
      { german: 'das Auge', article: 'das', plural: 'die Augen', uzbek: 'ko‘z' },
      { german: 'der Rücken', article: 'der', uzbek: 'bel, orqa' },
      { german: 'das Fieber', article: 'das', uzbek: 'isitma' },
      { german: 'das Rezept', article: 'das', plural: 'die Rezepte', uzbek: 'retsept' },
      { german: 'die Tablette', article: 'die', plural: 'die Tabletten', uzbek: 'tabletka' },
      { german: 'weh tun', uzbek: 'og‘rimoq' },
      { german: 'sollen', uzbek: 'lozim bo‘lmoq' }
    ],
    grammarNotesUz: [
      {
        title: 'Imperativ (Buyruq mayli) qoidalari',
        explanation: 'Sie: Trinken Sie! (fe‘l 1-o‘rinda + Sie). du: Trink! (-st va du yo‘qoladi). ihr: Trinkt! (ihr yo‘qoladi, -t qoladi).'
      }
    ],
    miniTest: [
      {
        id: 'rev-m6-q1',
        type: 'multiple-choice',
        questionUz: 'Ko‘plikdagi tana a‘zosi bilan qaysi ifoda to‘g‘ri: "Meine Augen _____."',
        options: ['tun weh', 'tut weh', 'weh tun', 'tun wehen'],
        correctAnswer: 'tun weh',
        explanationUz: '"Meine Augen" ko‘plikda bo‘lgani uchun "tun weh" ishlatiladi.',
        mistakeTipUz: '❌ Ko‘plik uchun "tun weh" bo‘ladi.'
      },
      {
        id: 'rev-m6-q2',
        type: 'fill-blank',
        questionUz: '"du" uchun to‘g‘ri buyruq shaklini qo‘ying: "_____ viel Wasser!" (trinken)',
        blankSentence: '[blank] viel Wasser!',
        options: ['Trink', 'Trinkst', 'Trinken', 'Trinkt'],
        correctAnswer: 'Trink',
        explanationUz: '"du" uchun buyruq maylida "-st" va "du" tushib qoladi: "Trink!".',
        mistakeTipUz: '❌ "du" buyrug‘ida "Trink!" bo‘ladi.'
      },
      {
        id: 'rev-m6-q3',
        type: 'multiple-choice',
        questionUz: '"sollen" fe‘lining "er" shaxsiga mos shakli qaysi?',
        options: ['er soll', 'er sollt', 'er sollst', 'er sollen'],
        correctAnswer: 'er soll',
        explanationUz: '"er" uchun "soll" bo‘ladi: "Der Arzt sagt, er soll im Bett bleiben".',
        mistakeTipUz: '❌ "er" uchun "soll" bo‘ladi.'
      }
    ]
  },

  // ==========================================
  // A1.2 MODUL 7: Wohnen und Arbeitswelt (Lektion 19, 20, 21)
  // ==========================================
  'mod-a1-2-3': {
    moduleId: 'mod-a1-2-3',
    levelCode: 'a1-2',
    titleDe: 'Wiederholung & Mini-Test: Wohnen und Arbeitswelt',
    titleUz: '7-Modul Takrori va Mini-Test: Uy jihozlash va ish faoliyati',
    summaryUz: 'Ushbu modulda siz o‘zgaruvchan predloglarni (Wechselpräpositionen) "Wo?" (Dativ) va "Wohin?" (Akkusativ) savollari bilan, holat va harakat fe‘llarini (stehen/stellen, liegen/legen) hamda "dürfen" va "wollen" modal fe‘llarini o‘rgandingiz.',
    checklistUz: [
      '"Wo?" (qayerda?) so‘rog‘i bilan Dativ kelishigini to‘g‘ri qo‘llash (auf dem Tisch, an der Wand)',
      '"Wohin?" (qayerga?) so‘rog‘i bilan Akkusativ kelishigini to‘g‘ri qo‘llash (auf den Tisch, an die Wand)',
      'Fe‘llar juftligini farqlash (stehen/stellen, liegen/legen, hängen/hängen)',
      'Kasbiy faoliyat va ish qoidalarini tasvirlash',
      '"dürfen" (ruxsat/taqiq) va "wollen" (niyat/istak) modal fe‘llarini tuslash'
    ],
    keyVocab: [
      { german: 'der Teppich', article: 'der', plural: 'die Teppiche', uzbek: 'gilam' },
      { german: 'die Wand', article: 'die', plural: 'die Wände', uzbek: 'devor' },
      { german: 'das Regal', article: 'das', plural: 'die Regale', uzbek: 'javon' },
      { german: 'stehen / stellen', uzbek: 'turmoq / qo‘ymoq' },
      { german: 'liegen / legen', uzbek: 'yotmoq / yotqizmoq' },
      { german: 'der Traumberuf', article: 'der', plural: 'die Traumberufe', uzbek: 'orzudagi kasb' },
      { german: 'dürfen', uzbek: 'ruxsat bo‘lmoq' },
      { german: 'wollen', uzbek: 'xohlamoq, niyat qilmoq' }
    ],
    grammarNotesUz: [
      {
        title: 'Wo? (Dativ) vs. Wohin? (Akkusativ)',
        explanation: '1) Wo? (qayerda? - tinch holat) -> Dativ: "Das Buch liegt auf dem Tisch." 2) Wohin? (qayerga? - harakat) -> Akkusativ: "Ich lege das Buch auf den Tisch."'
      }
    ],
    miniTest: [
      {
        id: 'rev-m7-q1',
        type: 'multiple-choice',
        questionUz: '"Wohin?" (qayerga?) so‘rog‘i bilan "der Tisch" qanday shaklga kiradi?',
        options: ['auf den Tisch', 'auf dem Tisch', 'auf der Tisch', 'auf das Tisch'],
        correctAnswer: 'auf den Tisch',
        explanationUz: '"Wohin?" Akkusativ talab qiladi: der Tisch -> den Tisch.',
        mistakeTipUz: '❌ "Wohin?" so‘rog‘ida muzskoy rod "den" oladi.'
      },
      {
        id: 'rev-m7-q2',
        type: 'fill-blank',
        questionUz: '"dürfen" fe‘lining "man" bilan to‘g‘ri shaklini qo‘ying: "Hier _____ man nicht rauchen."',
        blankSentence: 'Hier [blank] man nicht rauchen.',
        options: ['darf', 'darfst', 'dürfen', 'darft'],
        correctAnswer: 'darf',
        explanationUz: '"man" kishilik olmoshi bilan "darf" bo‘ladi: "Hier darf man nicht rauchen".',
        mistakeTipUz: '❌ "man" uchun "darf" bo‘ladi.'
      },
      {
        id: 'rev-m7-q3',
        type: 'multiple-choice',
        questionUz: '"Wo?" (qayerda?) so‘rog‘iga to‘g‘ri javob qaysi?',
        options: ['Das Bild hängt an der Wand.', 'Das Bild hängt an die Wand.', 'Das Bild hängt an den Wand.', 'Das Bild hängt in die Wand.'],
        correctAnswer: 'Das Bild hängt an der Wand.',
        explanationUz: '"Wo?" Dativ talab qiladi: die Wand -> an der Wand.',
        mistakeTipUz: '❌ "Wo?" so‘rog‘ida die Wand -> an der Wand bo‘ladi.'
      }
    ]
  },

  // ==========================================
  // A1.2 MODUL 8: Freizeit, Pläne und Vergangenheit (Lektion 22, 23, 24)
  // ==========================================
  'mod-a1-2-4': {
    moduleId: 'mod-a1-2-4',
    levelCode: 'a1-2',
    titleDe: 'Wiederholung & Mini-Test: Freizeit, Pläne und Vergangenheit',
    titleUz: '8-Modul Takrori va Mini-Test: Rejalar, bayramlar va o‘tgan zamon',
    summaryUz: 'Ushbu modulda siz kiyim-kechak va ob-havo, bayramlar va taklifnomalar, sanalar, "weil" (chunki) sabab ergash gapi hamda nemis tilidagi asosiy o‘tgan zamon — Das Perfekt (haben va sein bilan)ni to‘liq o‘rgandingiz.',
    checklistUz: [
      'Kiyimlarni va ob-havoni tasvirlay olish (Es regnet, es schneit, die Sonne scheint)',
      'Bayram va tug‘ilgan kunlarni tabriklash ("Herzlichen Glückwunsch!")',
      '"weil" ergash gapida tuslangan fe‘lni gapning ENG OXIRIGA qo‘yish',
      'Perfekt zamonida "haben" va "sein" yordamchi fe‘llarini to‘g‘ri tanlash',
      'Qoidali va noto‘g‘ri fe‘llarning Partizip II shaklini yasash va gap oxiriga qo‘yish'
    ],
    keyVocab: [
      { german: 'die Jacke', article: 'die', plural: 'die Jacken', uzbek: 'kurtka' },
      { german: 'das Wetter', article: 'das', uzbek: 'ob-havo' },
      { german: 'der Geburtstag', article: 'der', plural: 'die Geburtstage', uzbek: 'tug‘ilgan kun' },
      { german: 'das Geschenk', article: 'das', plural: 'die Geschenke', uzbek: 'sovg‘a' },
      { german: 'weil', uzbek: 'chunki' },
      { german: 'gestern', uzbek: 'kecha' },
      { german: 'gemacht', uzbek: 'qilgan (Partizip II)' },
      { german: 'gefahren', uzbek: 'borgan (Partizip II)' }
    ],
    grammarNotesUz: [
      {
        title: 'Perfekt zamoni (haben vs. sein)',
        explanation: 'Harakat va joy o‘zgarishi (fahren, gehen, fliegen, kommen) bo‘lsa "sein", qolgan ko‘pchilik hollarda "haben" ishlatiladi. Partizip II doimo gapning eng oxirida turadi!'
      },
      {
        title: 'weil (chunki) ergash gapi',
        explanation: '"weil" kelgan gapda tuslangan fe‘l qat‘iy ravishda gapning eng oxirida keladi: "Ich bleibe zu Hause, weil ich krank bin."'
      }
    ],
    miniTest: [
      {
        id: 'rev-m8-q1',
        type: 'word-order',
        questionUz: '"weil" bilan gapni to‘g‘ri so‘z tartibida tuzing (Fe‘l oxirida!):',
        scrambledWords: ['ich', 'bleibe', 'weil', 'bin', 'krank', 'Ich', 'zu', 'Hause,'],
        correctAnswer: 'Ich bleibe zu Hause, weil ich krank bin',
        explanationUz: '"weil" dan keyin: weil ich (ega) + krank + bin (fe‘l eng oxirida).',
        mistakeTipUz: '❌ "weil" ergash gapida tuslangan fe‘l eng oxirgi so‘z bo‘ladi.'
      },
      {
        id: 'rev-m8-q2',
        type: 'multiple-choice',
        questionUz: '"fahren" fe‘li bilan Perfektda qaysi yordamchi fe‘l ishlatiladi?',
        options: ['sein (Ich bin gefahren)', 'haben (Ich habe gefahren)', 'werden (Ich werde gefahren)', 'machen'],
        correctAnswer: 'sein (Ich bin gefahren)',
        explanationUz: '"fahren" joy o‘zgarishi bo‘lgani sababli doimo "sein" oladi: "Ich bin gefahren".',
        mistakeTipUz: '❌ Harakat fe‘llari Perfektda "sein" bilan tuslanadi.'
      },
      {
        id: 'rev-m8-q3',
        type: 'word-order',
        questionUz: 'Perfekt zamonidagi gapni to‘g‘ri tuzing (Partizip II oxirida!):',
        scrambledWords: ['habe', 'Ich', 'meine', 'Hausaufgaben', 'gestern', 'gemacht'],
        correctAnswer: 'Ich habe gestern meine Hausaufgaben gemacht',
        explanationUz: 'Ich (1) + habe (2) + gestern meine Hausaufgaben (3) + gemacht (Partizip II eng oxirida).',
        mistakeTipUz: '❌ Partizip II "gemacht" gapning eng oxirida turishi shart.'
      }
    ]
  }
};
