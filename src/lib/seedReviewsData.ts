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
  },

  // ==========================================
  // A2.1 MODUL 9: Beruf, Arbeit und Bewerbung (Lektion 25, 26, 27)
  // ==========================================
  'mod-a2-1-1': {
    moduleId: 'mod-a2-1-1',
    levelCode: 'a2-1',
    titleDe: 'Wiederholung & Mini-Test: Beruf & Arbeit',
    titleUz: '9-Modul Takrori: Kasb, ish va rezyume',
    summaryUz: 'Ushbu modulda siz kasblar, ish intervyulari, modal fe‘llarning Präteritum shakli, weil va dass ergash gaplari hamda o‘zlik fe‘llarini o‘rgandingiz.',
    checklistUz: [
      'Kasbiy rezyume va tajribani tasvirlash (die Bewerbung, der Lebenslauf)',
      'Modal fe‘llarning o‘tgan zamonini ishlatish (musste, wollte, konnte)',
      '"weil" va "dass" ergash gaplarida fe‘lni gap oxiriga surish',
      'O‘zlik fe‘llarini Akkusativ olmoshlari bilan qo‘llash (sich freuen, sich interessieren)'
    ],
    keyVocab: [
      { german: 'die Bewerbung', article: 'die', plural: 'die Bewerbungen', uzbek: 'ish arizasi / rezyume' },
      { german: 'das Vorstellungsgespräch', article: 'das', plural: 'die Vorstellungsgespräche', uzbek: 'ish suhbati' },
      { german: 'die Erfahrung', article: 'die', plural: 'die Erfahrungen', uzbek: 'tajriba' },
      { german: 'sich bewerben', uzbek: 'ariza topshirmoq' },
      { german: 'sich freuen', uzbek: 'xursand bo‘lmoq' }
    ],
    grammarNotesUz: [
      {
        title: 'Modalverben im Präteritum',
        explanation: 'müssen -> musste, wollen -> wollte, können -> konnte. 1- va 3-shaxsda qo‘shimcha bo‘lmaydi: ich musste, er musste.'
      },
      {
        title: 'dass va weil ergash gaplari',
        explanation: 'Ikkala bog‘lovchidan keyin ham tuslanuvchi fe‘l gapning eng oxiriga suriladi: "... dass ich Deutsch lernen will."'
      }
    ],
    miniTest: [
      {
        id: 'rev-m9-q1',
        type: 'fill-blank',
        questionUz: '"können" fe‘lining Präteritum "ich" shaklini qo‘ying: "Gestern _____ ich nicht kommen."',
        blankSentence: 'Gestern [blank] ich nicht kommen.',
        options: ['konnte', 'kann', 'konntest', 'gekonnt'],
        correctAnswer: 'konnte',
        explanationUz: 'ich konnte - o‘tgan zamonda modal fe‘llar umlautsiz bo‘ladi.',
        mistakeTipUz: '❌ "ich konnte" to‘g‘ri shakl.'
      },
      {
        id: 'rev-m9-q2',
        type: 'multiple-choice',
        questionUz: '"sich interessieren" fe‘lining "ich" shaxsidagi o‘zlik olmoshi qaysi?',
        options: ['mich (Ich interessiere mich)', 'mir', 'sich', 'dich'],
        correctAnswer: 'mich (Ich interessiere mich)',
        explanationUz: 'sich interessieren fe‘li Akkusativ oladi: ich interessiere mich.',
        mistakeTipUz: '❌ "ich" uchun Akkusativ o‘zlik olmoshi "mich".'
      }
    ]
  },

  // ==========================================
  // A2.1 MODUL 10: Unterwegs, Reisen und Orientierung (Lektion 28, 29, 30)
  // ==========================================
  'mod-a2-1-2': {
    moduleId: 'mod-a2-1-2',
    levelCode: 'a2-1',
    titleDe: 'Wiederholung & Mini-Test: Reisen & Orientierung',
    titleUz: '10-Modul Takrori: Sayohat va yo‘nalish',
    summaryUz: 'Ushbu modulda sayohat, mehmonxona, bilvosita so‘roq gaplar, noaniq artikldan keyingi sifat qo‘shimchalari va vaqt predloglari mustahkamlandi.',
    checklistUz: [
      'Chipta va mehmonxona bron qilish iboralari',
      'Bilvosita savol berish (Wissen Sie, ob... / Wann...?)',
      'Noaniq artikldan keyin sifat turlanishi (ein schöner Tag, eine gute Reise)',
      'Vaqt predloglari bilan Dativ (vor dem Essen, nach der Arbeit, beim Kochen)'
    ],
    keyVocab: [
      { german: 'die Reise', article: 'die', plural: 'die Reisen', uzbek: 'sayohat' },
      { german: 'die Fahrkarte', article: 'die', plural: 'die Fahrkarten', uzbek: 'yo‘l chiptasi' },
      { german: 'das Gleis', article: 'das', plural: 'die Gleise', uzbek: 'poyezd yo‘li / platforma' },
      { german: 'pünktlich', uzbek: 'o‘z vaqtida' },
      { german: 'buchen', uzbek: 'bron qilmoq' }
    ],
    grammarNotesUz: [
      {
        title: 'Indirekte Fragen mit ob',
        explanation: 'Ha/yo‘q savolini bilvosita berishda "ob" ishlatiladi va fe‘l gap oxiriga suriladi: "Können Sie mir sagen, ob der Zug kommt?"'
      },
      {
        title: 'Temporale Präpositionen (vor, nach, bei, in)',
        explanation: 'Bu predloglar vaqt ma‘nosida doimo Dativ talab qiladi: vor dem Essen, nach der Pause.'
      }
    ],
    miniTest: [
      {
        id: 'rev-m10-q1',
        type: 'multiple-choice',
        questionUz: '"vor" predlogi bilan to‘g‘ri Dativ birikmasini toping (der Abflug):',
        options: ['vor dem Abflug', 'vor den Abflug', 'vor der Abflug', 'vor das Abflug'],
        correctAnswer: 'vor dem Abflug',
        explanationUz: 'der Abflug Dativda dem Abflug bo‘ladi: vor dem Abflug.',
        mistakeTipUz: '❌ Erkak jinsi Dativda "dem" bo‘ladi.'
      }
    ]
  },

  // ==========================================
  // A2.1 MODUL 11: Medien, Freizeit und Konsum (Lektion 31, 32, 33)
  // ==========================================
  'mod-a2-1-3': {
    moduleId: 'mod-a2-1-3',
    levelCode: 'a2-1',
    titleDe: 'Wiederholung & Mini-Test: Medien & Konsum',
    titleUz: '11-Modul Takrori: Media va qiyoslash',
    summaryUz: 'Ushbu modulda media, texnologiya, sifat darajalari (Komparativ/Superlativ), aniq artikldan keyin sifat turlanishi va wenn ergash gaplari o‘rganildi.',
    checklistUz: [
      'Smartfon, kompyuter va internet leksikasi',
      'Sifatlarni qiyoslash (schnell -> schneller als -> am schnellsten)',
      'Aniq artikldan keyin sifat qo‘shimchalari (der neue Computer, das alte Auto)',
      '"wenn" (agar / qachonki) shart ergash gaplarini tuza olish'
    ],
    keyVocab: [
      { german: 'die Nachricht', article: 'die', plural: 'die Nachrichten', uzbek: 'xabar / yangiliklar' },
      { german: 'das Smartphone', article: 'das', plural: 'die Smartphones', uzbek: 'smartfon' },
      { german: 'der Bildschirm', article: 'der', plural: 'die Bildschirme', uzbek: 'ekran' },
      { german: 'besser', uzbek: 'yaxshiroq' },
      { german: 'nutzen', uzbek: 'foydalanmoq' }
    ],
    grammarNotesUz: [
      {
        title: 'Komparativ und Superlativ',
        explanation: 'Qiyosiy darajada sifatga "-er" qo‘shiladi (als bilan: schneller als). Orttirma darajada "am ...-sten" bo‘ladi: am schnellsten.'
      },
      {
        title: 'Konditionalsätze mit "wenn"',
        explanation: '"wenn" ergash gapida fe‘l oxirga boradi: "Wenn ich Zeit habe, lese ich ein Buch."'
      }
    ],
    miniTest: [
      {
        id: 'rev-m11-q1',
        type: 'multiple-choice',
        questionUz: '"gut" sifatining orttirma darajasi (superlativ) qaysi?',
        options: ['am besten', 'am gutesten', 'am meisten gut', 'am liebesten'],
        correctAnswer: 'am besten',
        explanationUz: 'gut -> besser -> am besten.',
        mistakeTipUz: '❌ "gut" ning eng yuqori darajasi "am besten".'
      }
    ]
  },

  // ==========================================
  // A2.1 MODUL 12: Feste, Einladungen und Beziehungen (Lektion 34, 35, 36)
  // ==========================================
  'mod-a2-1-4': {
    moduleId: 'mod-a2-1-4',
    levelCode: 'a2-1',
    titleDe: 'Wiederholung & Mini-Test: Feste & Beziehungen',
    titleUz: '12-Modul Takrori: Bayramlar va nisbiy gaplar',
    summaryUz: 'Ushbu modulda bayramlar, sovg‘alar, ikki to‘ldiruvchili fe‘llar (Dativ + Akkusativ), olmoshlar tartibi va nisbiy gaplar (Relativsätze) mustahkamlandi.',
    checklistUz: [
      'Nemis bayramlari va tabriklari (Frohe Ostern, Frohe Weihnachten, Herzlichen Glückwunsch)',
      'Dativ va Akkusativ obyektlar tartibi (Ich schenke dem Freund ein Buch / Ich schenke es ihm)',
      'Nisbiy gaplarni Nominativ va Akkusativda to‘g‘ri bog‘lash (der Mann, der... / die Frau, die...)'
    ],
    keyVocab: [
      { german: 'das Geschenk', article: 'das', plural: 'die Geschenke', uzbek: 'sovg‘a' },
      { german: 'die Hochzeit', article: 'die', plural: 'die Hochzeiten', uzbek: 'to‘y' },
      { german: 'die Einladung', article: 'die', plural: 'die Einladungen', uzbek: 'taklifnoma' },
      { german: 'schenken', uzbek: 'sovg‘a qilmoq' },
      { german: 'feiern', uzbek: 'bayram qilmoq' }
    ],
    grammarNotesUz: [
      {
        title: 'Verben mit Dativ und Akkusativ',
        explanation: 'Agar ikkala to‘ldiruvchi ot bo‘lsa: Dativ (shaxs) oldin, Akkusativ (buyum) keyin: "Ich schenke meiner Mutter Blumen". Agar olmosh bo‘lsa: olmosh oldinga o‘tadi: "Ich schenke es ihr".'
      },
      {
        title: 'Relativsätze im Nominativ und Akkusativ',
        explanation: 'Nisbiy olmoshlar: der/das/die/die (Nom), den/das/die/die (Akk). Fe‘l doimo nisbiy gap oxirida turadi!'
      }
    ],
    miniTest: [
      {
        id: 'rev-m12-q1',
        type: 'multiple-choice',
        questionUz: 'Nisbiy gapni to‘ldiring: "Das ist das Auto, _____ mein Vater gekauft hat."',
        options: ['das', 'der', 'die', 'dem'],
        correctAnswer: 'das',
        explanationUz: 'das Auto neytral jinsda bo‘lib, ergash gapda Akkusativda "das" saqlanadi.',
        mistakeTipUz: '❌ das Auto uchun nisbiy olmosh "das" bo‘ladi.'
      }
    ]
  },

  // ==========================================
  // A2.2 MODUL 13: Wohnen, Zusammenleben und Nachbarschaft (Lektion 37, 38, 39)
  // ==========================================
  'mod-a2-2-1': {
    moduleId: 'mod-a2-2-1',
    levelCode: 'a2-2',
    titleDe: 'Wiederholung & Mini-Test: Wohnen & Zusammenleben',
    titleUz: '13-Modul Takrori: Yashash joyi va iltimoslar',
    summaryUz: 'Ushbu modulda uy-joy ijarasi, Wechselverben (stellen/stehen, legen/liegen), Konjunktiv II madaniy iltimoslari va artiklsiz sifatlar o‘rganildi.',
    checklistUz: [
      'Uy-joy e‘lonlarini tushunish va ijara so‘rash',
      'Harakat (stellen/legen + Akk) va holat (stehen/liegen + Dat) farqini bilish',
      'Konjunktiv II orqali iltimos bildirish (Könntest du..., Würdest du...)',
      'Artiklsiz sifat qo‘shimchalarini to‘g‘ri qo‘llash'
    ],
    keyVocab: [
      { german: 'die Miete', article: 'die', plural: 'die Mieten', uzbek: 'ijara haqi' },
      { german: 'die Kaution', article: 'die', plural: 'die Kautionen', uzbek: 'garov puli' },
      { german: 'die Nachbarschaft', article: 'die', plural: 'die Nachbarschaften', uzbek: 'qo‘shnichilik' },
      { german: 'stellen', uzbek: 'tik qo‘ymoq' },
      { german: 'liegen', uzbek: 'yotmoq / joylashmoq' }
    ],
    grammarNotesUz: [
      {
        title: 'stellen vs. stehen & legen vs. liegen',
        explanation: 'stellen / legen: harakat, Akkusativ (Wohin? - Ich stelle die Lampe auf den Tisch). stehen / liegen: tinch holat, Dativ (Wo? - Die Lampe steht auf dem Tisch).'
      },
      {
        title: 'Höfliche Bitten mit Konjunktiv II',
        explanation: 'Könntest du / Könnten Sie bitte... yoki Würdest du / Würden Sie bitte... + Infinitiv gap oxirida.'
      }
    ],
    miniTest: [
      {
        id: 'rev-m13-q1',
        type: 'multiple-choice',
        questionUz: '"Men gilamni polga yoymoqdaman (Akkusativ)" jumlasi qaysi?',
        options: [
          'Ich lege den Teppich auf den Boden.',
          'Ich liege den Teppich auf dem Boden.',
          'Ich stelle den Teppich auf dem Boden.',
          'Ich lege den Teppich auf dem Boden.'
        ],
        correctAnswer: 'Ich lege den Teppich auf den Boden.',
        explanationUz: 'Yotqizib qo‘yish "legen" + Wohin? Akkusativ (auf den Boden).',
        mistakeTipUz: '❌ Harakat uchun "legen" + Akkusativ: auf den Boden.'
      }
    ]
  },

  // ==========================================
  // A2.2 MODUL 14: Gesundheit, Ernährung und Lebensstil (Lektion 40, 41, 42)
  // ==========================================
  'mod-a2-2-2': {
    moduleId: 'mod-a2-2-2',
    levelCode: 'a2-2',
    titleDe: 'Wiederholung & Mini-Test: Gesundheit & Lebensstil',
    titleUz: '14-Modul Takrori: Salomatlik va tavsiyalar',
    summaryUz: 'Ushbu modulda sog‘liq, shifokor suhbati, Infinitiv mit "zu" birikmalari va "nicht brauchen ... zu" qoidasi o‘rganildi.',
    checklistUz: [
      'Alomatlar va kasalliklarni bayon qilish',
      'Infinitiv mit "zu" birikmalarini to‘g‘ri tuzish (Es ist wichtig, Sport zu treiben)',
      '"nicht brauchen ... zu" konstruksiyasini majburiyat yo‘qligida qo‘llash'
    ],
    keyVocab: [
      { german: 'die Gesundheit', article: 'die', uzbek: 'salomatlik' },
      { german: 'das Medikament', article: 'das', plural: 'die Medikamente', uzbek: 'dori vositasi' },
      { german: 'das Rezept', article: 'das', plural: 'die Rezepte', uzbek: 'retsept' },
      { german: 'untersuchen', uzbek: 'tibbiy ko‘rikdan o‘tkazmoq' },
      { german: 'empfehlen', uzbek: 'tavsiya qilmoq' }
    ],
    grammarNotesUz: [
      {
        title: 'Infinitiv mit "zu"',
        explanation: 'Es ist schön/wichtig... yoki Ich habe Lust/Zeit... birikmalaridan keyin fe‘l infinitivi oldidan "zu" qo‘yiladi: "... regelmäßig Sport zu treiben."'
      },
      {
        title: 'nicht brauchen ... zu = nicht müssen',
        explanation: '"Du brauchst heute nicht zur Arbeit zu gehen" = "Du musst heute nicht arbeiten".'
      }
    ],
    miniTest: [
      {
        id: 'rev-m14-q1',
        type: 'multiple-choice',
        questionUz: 'Ajraladigan fe‘llarda "zu" qayerga joylashadi?',
        options: [
          'Old qo‘shimcha va o‘zak o‘rtasiga (auf-zu-stehen)',
          'Fe‘lning eng boshiga (zu aufstehen)',
          'Fe‘lning oxiriga (aufstehen zu)',
          'Umuman ishlatilmaydi'
        ],
        correctAnswer: 'Old qo‘shimcha va o‘zak o‘rtasiga (auf-zu-stehen)',
        explanationUz: 'Ajraladigan fe‘llarda "zu" o‘rtaga kiradi: aufstehen -> aufzustehen.',
        mistakeTipUz: '❌ Ajraladigan fe‘llarda "zu" o‘rtada keladi: aufzustehen.'
      }
    ]
  },

  // ==========================================
  // A2.2 MODUL 15: Umwelt, Natur und Gesellschaft (Lektion 43, 44, 45)
  // ==========================================
  'mod-a2-2-3': {
    moduleId: 'mod-a2-2-3',
    levelCode: 'a2-2',
    titleDe: 'Wiederholung & Mini-Test: Umwelt & Natur',
    titleUz: '15-Modul Takrori: Ekologiya va o‘tmish tarixi',
    summaryUz: 'Ushbu modulda tabiatni asrash, obwohl to‘siqsiz ergash gapi, muntazam va nomuntazam fe‘llarning Präteritumi va juft bog‘lovchilar o‘rganildi.',
    checklistUz: [
      'Ekologik muammolar va energiyani tejash leksikasi',
      '"obwohl" bilan ergash gap tuzish va fe‘llarni to‘g‘ri joylashtirish',
      'Matnlardagi Präteritum fe‘llarini tushunish (ging, kam, sagte, lebte)',
      '"nicht nur ... sondern auch" juft bog‘lovchisi bilan murakkab fikr bildirish'
    ],
    keyVocab: [
      { german: 'die Umwelt', article: 'die', uzbek: 'atrof-muhit' },
      { german: 'der Müll', article: 'der', uzbek: 'chiqindi' },
      { german: 'die Energie', article: 'die', plural: 'die Energien', uzbek: 'energiya' },
      { german: 'schützen', uzbek: 'himoya qilmoq / asramoq' },
      { german: 'sparen', uzbek: 'tejamoq' }
    ],
    grammarNotesUz: [
      {
        title: 'Konzessivsätze mit "obwohl"',
        explanation: '"obwohl" (garchi, qaramasdan) ergash gapida tuslangan fe‘l oxirga boradi: "Obwohl es regnet, gehe ich spazieren."'
      },
      {
        title: 'Zweiteilige Konnektoren',
        explanation: '"nicht nur ... sondern auch" (nafaqat ..., balki ... ham): "Er spricht nicht nur Deutsch, sondern auch Spanisch."'
      }
    ],
    miniTest: [
      {
        id: 'rev-m15-q1',
        type: 'multiple-choice',
        questionUz: '"gehen" fe‘lining Präteritum shakli qaysi?',
        options: ['ging', 'gehte', 'gegangen', 'geht'],
        correctAnswer: 'ging',
        explanationUz: 'gehen -> ging -> ist gegangen.',
        mistakeTipUz: '❌ gehen ning Präteritum shakli "ging".'
      }
    ]
  },

  // ==========================================
  // A2.2 MODUL 16: Zukunft, Lebenspläne und A2-Abschluss (Lektion 46, 47, 48)
  // ==========================================
  'mod-a2-2-4': {
    moduleId: 'mod-a2-2-4',
    levelCode: 'a2-2',
    titleDe: 'Wiederholung & Mini-Test: Zukunft & Abschluss',
    titleUz: '16-Modul Takrori: Kelajak va A2 yakuni',
    summaryUz: 'Ushbu modulda kelajak rejalari, Futur I (werden + Infinitiv), um ... zu va damit farqi hamda A2 darajasidagi to‘liq kompleks tayyorgarlik yakunlandi.',
    checklistUz: [
      'Kelajakdagi orzu va rejalarni aytish (Futur I)',
      'Maqsad bildirishda "um ... zu" va "damit" ni to‘g‘ri ajratish',
      'Goethe-Zertifikat A2 imtihoni formatidagi test va topshiriqlarni yechish'
    ],
    keyVocab: [
      { german: 'die Zukunft', article: 'die', uzbek: 'kelajak' },
      { german: 'der Plan', article: 'der', plural: 'die Pläne', uzbek: 'reja' },
      { german: 'der Erfolg', article: 'der', plural: 'die Erfolge', uzbek: 'muvaffaqiyat' },
      { german: 'werden', uzbek: 'bo‘lmoq / aylanmoq' },
      { german: 'erreichen', uzbek: 'erishmoq' }
    ],
    grammarNotesUz: [
      {
        title: 'Futur I: werden + Infinitiv',
        explanation: 'Kelasi zamon formulasi: werden hozirgi zamonda tuslanadi, asosiy fe‘l esa infinitivda gap oxirida keladi: "Ich werde nächstes Jahr studieren."'
      },
      {
        title: 'Finalsätze: um ... zu vs. damit',
        explanation: 'Ega bitta bo‘lsa: "um ... zu + Infinitiv" (Ich lerne Deutsch, um in Deutschland zu arbeiten). Egalari har xil bo‘lsa: "damit + fe‘l" (Ich lerne Deutsch, damit mein Vater stolz auf mich ist).'
      }
    ],
    miniTest: [
      {
        id: 'rev-m16-q1',
        type: 'multiple-choice',
        questionUz: '"um ... zu" konstruktsiyasida fe‘l qanday shaklda bo‘ladi?',
        options: ['Infinitiv (asl shakli)', 'Partizip II', 'Präteritum', 'Tuslangan shakl'],
        correctAnswer: 'Infinitiv (asl shakli)',
        explanationUz: '"um ... zu" doimo fe‘lning asl infinitiv shakli bilan keladi: um Deutsch zu lernen.',
        mistakeTipUz: '❌ "zu" dan keyin doimo fe‘lning noaniq shakli (infinitiv) keladi.'
      }
    ]
  }
};
