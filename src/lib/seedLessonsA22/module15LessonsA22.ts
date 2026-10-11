import { Lesson } from '../../types/database';

export const MODULE_15_A22_LESSONS: Lesson[] = [
  // ==========================================
  // LEKTION 43: Umweltschutz im Alltag
  // ==========================================
  {
    id: 'les-43',
    moduleId: 'mod-a2-2-3',
    levelCode: 'a2-2',
    titleDe: 'Lektion 43: Umweltschutz im Alltag',
    titleUz: '43-Dars: Kundalik hayotda ekologiya ("obwohl" to‘siqsiz ergash gaplari)',
    descriptionUz: 'Chiqindilarni saralash (Mülltrennung), energiya va suvni tejash hamda "obwohl" (...ga qaramasdan / garchi) bilan to‘siqsiz ergash gaplar.',
    orderIndex: 43,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Ekologiya va atrof-muhitni asrash bo‘yicha nemischa atamalarni bilish',
      '"obwohl" bog‘lovchisi bilan ergash gap tuzish (fe‘l oxirida)',
      'Chiqindi saralash qoidalariga rioya qilishni tushuntirish'
    ],
    warmUp: {
      situationUz: 'Yomg‘ir yog‘ayotganiga qaramasdan, havoni ifloslantirmaslik uchun avtomobil o‘rniga velosipedda ishga boryapsiz.',
      curiosityQuestionUz: '"Yomg‘ir yog‘ayotganiga qaramasdan, velosipedda ketyapman" nemischa qanday aytiladi?',
      miniDialogue: [
        { speaker: 'Freund', textDe: 'Nimmst du nicht das Auto? Es regnet doch!', textUz: 'Mashinangni olmaysanmi? Axir yomg‘ir yog‘yapti-ku!' },
        { speaker: 'Umweltfreund', textDe: 'Obwohl es regnet, fahre ich mit dem Fahrrad.', textUz: 'Yomg‘ir yog‘ayotganiga qaramasdan, velosipedda ketyapman.' }
      ],
      hintUz: '"obwohl" xuddi "weil" kabi ergash gap yasaydi va unda fe‘l doimo eng oxirida turadi!'
    },
    contextDialogue: {
      titleDe: 'Mülltrennung in Deutschland',
      titleUz: 'Germaniyada chiqindilarni saralash',
      situationUz: 'Kamola va uning nemis qo‘shnisi Frau Bauer chiqindi idishlari oldida.',
      lines: [
        { speaker: 'Frau Bauer', textDe: 'Guten Tag, Kamola! Darf ich Ihnen kurz bei der Mülltrennung helfen?', textUz: 'Xayrli kun, Kamola! Chiqindilarni saralashda sizga biroz yordam bersam maylimi?' },
        { speaker: 'Kamola', textDe: 'Sehr gerne, danke! Es gibt so viele verschiedene Tonnen hier.', textUz: 'Jon deb, rahmat! Bu yerda juda ko‘p turli xil idishlar (baklar) bor ekan.' },
        { speaker: 'Frau Bauer', textDe: 'Ganz einfach: Die blaue Tonne ist für Papier, die braune für Bioabfälle und der Gelbe Sack für Plastikverpackungen.', textUz: 'Juda oddiy: Ko‘k idish qog‘oz uchun, jigar rang idish organik chiqindilar uchun va sariq qop plastik o‘ramlar uchun.' },
        { speaker: 'Kamola', textDe: 'Und der Restmüll kommt in die graue Tonne, richtig?', textUz: 'Qolgan umumiy chiqindi esa kulrang idishga tashlanadi, to‘g‘rimi?' },
        { speaker: 'Frau Bauer', textDe: 'Genau! Obwohl es am Anfang etwas kompliziert scheint, gewöhnt man sich sehr schnell daran.', textUz: 'Xuddi shunday! Garchi boshida biroz murakkab tuyulsa ham, odam bunga juda tez ko‘nikadi.' },
        { speaker: 'Kamola', textDe: 'Das ist wirklich ein tolles System für die Umwelt.', textUz: 'Bu tabiat uchun haqiqatan ham ajoyib tizim.' }
      ],
      usefulPhrases: [
        { german: 'den Müll trennen', uzbek: 'chiqindini saralamoq' },
        { german: 'die Umwelt schützen', uzbek: 'atrof-muhitni himoya qilmoq' },
        { german: 'Energie / Wasser sparen', uzbek: 'energiya / suvni tejamoq' },
        { german: 'Obwohl es schwierig ist,...', uzbek: 'Qiyin bo‘lishiga qaramasdan,...' }
      ],
      culturalNoteUz: 'Germaniyada chiqindilarni saralash (Mülltrennung) va shisha/plastik idishlarni garov tizimi (Pfandsystem) orqali qaytarish xalqaro ekologik standart hisoblanadi.'
    },
    vocabulary: [
      {
        id: 'voc-m15-1',
        lessonId: 'les-43',
        levelCode: 'a2-2',
        german: 'die Umwelt',
        article: 'die',
        plural: null,
        uzbek: 'atrof-muhit, tabiat',
        exampleDe: 'Wir müssen die Umwelt schützen.',
        exampleUz: 'Biz atrof-muhitni asrashimiz kerak.',
        wordType: 'noun'
      },
      {
        id: 'voc-m15-2',
        lessonId: 'les-43',
        levelCode: 'a2-2',
        german: 'der Müll',
        article: 'der',
        plural: null,
        uzbek: 'chiqindi, axlat',
        exampleDe: 'Wo kann ich den Müll entsorgen?',
        exampleUz: 'Chiqindini qayerga tashlasam bo‘ladi?',
        wordType: 'noun'
      },
      {
        id: 'voc-m15-3',
        lessonId: 'les-43',
        levelCode: 'a2-2',
        german: 'trennen',
        article: null,
        plural: null,
        uzbek: 'saralamoq, ajratmoq',
        exampleDe: 'In Deutschland trennt man den Müll.',
        exampleUz: 'Germaniyada chiqindi saralanadi.',
        wordType: 'verb'
      },
      {
        id: 'voc-m15-4',
        lessonId: 'les-43',
        levelCode: 'a2-2',
        german: 'sparen',
        article: null,
        plural: null,
        uzbek: 'tejamoq',
        exampleDe: 'Wir sollten Strom und Wasser sparen.',
        exampleUz: 'Biz elektr va suvni tejashimiz kerak.',
        wordType: 'verb'
      },
      {
        id: 'voc-m15-5',
        lessonId: 'les-43',
        levelCode: 'a2-2',
        german: 'umweltfreundlich',
        article: null,
        plural: null,
        uzbek: 'tabiatga zararsiz, ekologik',
        exampleDe: 'Fahrradfahren ist sehr umweltfreundlich.',
        exampleUz: 'Velosipedda yurish juda ekologik hisoblanadi.',
        wordType: 'adjective'
      },
      {
        id: 'voc-m15-6',
        lessonId: 'les-43',
        levelCode: 'a2-2',
        german: 'das Recycling',
        article: 'das',
        plural: null,
        uzbek: 'qayta ishlash',
        exampleDe: 'Recycling schont wertvolle Ressourcen.',
        exampleUz: 'Qayta ishlash qimmatli resurslarni asraydi.',
        wordType: 'noun'
      }
    ],
    grammar: [
      {
        id: 'gra-m15-1',
        lessonId: 'les-43',
        levelCode: 'a2-2',
        titleDe: 'Konzessive Nebensätze mit "obwohl"',
        titleUz: '"obwohl" (qaramasdan / garchi) to‘siqsiz ergash gaplari',
        summaryUz: '"obwohl" bog‘lovchisi kutilgan natijaga zid holatni ifodalaydi. "obwohl" gapida fe‘l eng oxirida turadi.',
        explanationUz: `"obwohl" o‘zbek tilidagi "...-ishiga qaramasdan / garchi ... bo‘lsa ham" ma‘nosiga to‘g‘ri keladi:

1. **"obwohl" gapi boshida kelsa:**
- "obwohl" gapida fe‘l eng oxirida turadi.
- Asosiy gap darhol FE‘L bilan boshlanadi!
- *Obwohl es kalt **ist**, **geht** er ohne Jacke raus.*
  (Sovuq bo‘lishiga qaramasdan, u kurtkasiz tashqariga chiqmoqda.)

2. **"obwohl" gapi ikkinchi o‘rinda kelsa:**
- *Er geht ohne Jacke raus, **obwohl** es kalt **ist**.*

Taqqoslash:
- weil = sabab (Ich bleibe zu Hause, weil es regnet.)
- obwohl = to‘siqqa qaramaslik (Ich gehe spazieren, obwohl es regnet.)`,
        tables: [
          {
            title: '"obwohl" gaplarida so‘z tartibi',
            headers: ['1-qism', 'Ergash gap fe‘li (oxirida)', '2-qism', 'Bosh gap fe‘li'],
            rows: [
              ['Obwohl das Ticket teuer', 'war,', 'habe ich', 'es gekauft.'],
              ['Obwohl er müde', 'ist,', 'lernt er', 'weiter.'],
              ['Wir fahren mit der Bahn,', '', 'obwohl das Auto', 'schneller ist.']
            ]
          }
        ],
        examples: [
          {
            german: 'Obwohl er viel gearbeitet hat, ist er nicht müde.',
            uzbek: 'U ko‘p ishlaganiga qaramasdan, charchamagan.',
            highlight: 'Obwohl ... gearbeitet hat, ist er'
          },
          {
            german: 'Sie kauft Bio-Produkte, obwohl sie teurer sind.',
            uzbek: 'U bio mahsulotlar qimmatroq bo‘lishiga qaramay, ularni sotib oladi.',
            highlight: 'obwohl sie teurer sind'
          }
        ]
      }
    ],
    listening: [
      {
        id: 'lis-m15-1',
        lessonId: 'les-43',
        levelCode: 'a2-2',
        titleDe: 'Umweltschutz im Alltag',
        titleUz: 'Kundalik hayotda tabiatni asrash',
        transcriptDe: 'Guten Tag, Herr Berg. Was tun Sie persönlich für den Umweltschutz?\nIch versuche, so oft wie möglich das Auto stehen zu lassen. Obwohl ich zehn Kilometer zur Arbeit habe, fahre ich fast jeden Tag mit dem E-Bike. Außerdem kaufe ich auf dem Wochenmarkt regional ein und vermeide Plastiktüten.',
        translationUz: 'Xayrli kun, janob Berg. Shaxsan siz tabiatni asrash uchun nima qilasiz?\nMen imkon qadar mashinamni haydamaslikka harakat qilaman. Ishimgacha o‘n kilometr bo‘lishiga qaramasdan, deyarli har kuni elektr velosipedda boraman. Bundan tashqari, haftalik bozordan mahalliy mahsulotlar olaman va plastik paketlardan qochaman.',
        dialogue: [
          { speaker: 'Herr Berg', textDe: 'Obwohl ich zehn Kilometer zur Arbeit habe, fahre ich mit dem Fahrrad.', textUz: 'Ishimgacha o‘n kilometr bo‘lishiga qaramasdan, velosipedda boraman.' }
        ],
        questions: [
          {
            id: 'q-lis-m15-1',
            questionUz: 'Janob Berg ishga qanday qatnaydi?',
            options: ['Elektr velosipedda (mit dem E-Bike)', 'Har kuni mashinada', 'Taksi bilan'],
            correctIndex: 0,
            explanationUz: 'Janob Berg "fahre ich fast jeden Tag mit dem E-Bike" deb aytdi.'
          }
        ]
      }
    ],
    reading: [
      {
        id: 'read-m15-1',
        lessonId: 'les-43',
        levelCode: 'a2-2',
        titleDe: 'Das Pfandsystem in Deutschland',
        titleUz: 'Germaniyada idishlar garov (Pfand) tizimi',
        textDe: 'In Deutschland gibt es ein einzigartiges Pfandsystem: Wenn Sie eine Getränkeflasche oder Dose im Supermarkt kaufen, zahlen Sie einen kleinen Betrag extra (z.B. 25 Cent Pfand für eine Plastikflasche). Wenn Sie die leere Flasche am Pfandautomaten zurückgeben, erhalten Sie einen Bon mit Ihrem Geld zurück. Dadurch werden über 98 Prozent der Plastikflaschen recycelt.',
        textUz: 'Germaniyada o‘ziga xos idish garov tizimi mavjud: Supermarketda ichimlik shishasi yoki bonkasini sotib olganingizda, qo‘shimcha kichik miqdor to‘laysiz (masalan, plastik shisha uchun 25 sent garov). Bo‘sh shishani qaytarish avtomatiga topshirganingizda, pulingiz qaytarilgan chek olasiz. Shu tufayli plastik idishlarning 98 foizdan ortig‘i qayta ishlanadi.',
        questions: [
          {
            id: 'q-read-m15-1',
            questionUz: 'Plastik idishlarning necha foizi qayta ishlanadi?',
            options: ['98 foizdan ortig‘i (über 98 Prozent)', '50 foizi', 'Faqat 10 foizi'],
            correctIndex: 0,
            explanationUz: 'Matnda "Dadurch werden über 98 Prozent der Plastikflaschen recycelt" deyilgan.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-m15-1',
      lessonId: 'les-43',
      levelCode: 'a2-2',
      taskDe: 'Schreiben Sie zwei Sätze mit "obwohl".',
      taskUz: '"obwohl" bog‘lovchisi yordamida ikkita gap yozing.',
      instructionUz: 'Tabiatni asrash yoki kundalik odatlaringiz haqida yozing.',
      hints: ['Obwohl es regnet,...', 'Ich kaufe Bio-Essen, obwohl...'],
      sampleSolutionDe: 'Obwohl das Fahrradfahren anstrengend ist, fahre ich jeden Tag zur Arbeit. Ich trenne meinen Müll sorgfältig, obwohl es etwas Zeit kostet.',
      scaffold: {
        openingDe: 'Mein Beitrag zum Umweltschutz:',
        closingDe: 'Jeder kleine Schritt hilft.',
        usefulPhrasesDe: ['Obwohl es schwierig ist, ...', 'Ich mache das, obwohl ...']
      }
    },
    shadowing: [
      {
        id: 'sha-m15-1',
        lessonId: 'les-43',
        levelCode: 'a2-2',
        sentenceDe: 'Obwohl Bio-Produkte etwas teurer sind, kaufen viele Menschen regional und nachhaltig ein.',
        translationUz: 'Bio mahsulotlar biroz qimmatroq bo‘lishiga qaramasdan, ko‘plab odamlar mahalliy va sifatli xarid qilmoqdalar.',
        phoneticHint: '[Op-vohl Bi-o Pro-duk-te et-vas toy-rer zint, kau-fen fi-le Men-shen re-gyo-nal unt nah-hal-tih ayn]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-m15-1-q1',
        type: 'word-order',
        questionUz: '"obwohl" gapini to‘g‘ri tuzing (bosh gap fe‘l bilan boshlanadi!):',
        scrambledWords: ['Obwohl', 'es', 'gehe', 'regnet,', 'ich', 'spazieren.'],
        correctAnswer: 'Obwohl es regnet, gehe ich spazieren.',
        explanationUz: 'Obwohl es regnet, (fe‘l oxirida) + gehe ich (bosh gap fe‘l bilan boshlanadi) + spazieren.',
        mistakeTipUz: '❌ Verguldan keyin bosh gap darhol fe‘l bilan boshlanadi: "gehe ich".'
      },
      {
        id: 'prac-m15-1-q2',
        type: 'fill-blank',
        questionUz: 'To‘g‘ri bog‘lovchini qo‘ying: "Er lernt weiter, _____ er sehr müde ist."',
        blankSentence: 'Er lernt weiter, [blank] er sehr müde ist.',
        options: ['obwohl', 'weil', 'dass', 'wenn'],
        correctAnswer: 'obwohl',
        explanationUz: '"Charchaganiga qaramasdan..." ma‘nosida "obwohl" ishlatiladi.',
        mistakeTipUz: '❌ Zidlik ma‘nosida: obwohl (qaramasdan).'
      },
      {
        id: 'prac-m15-1-q3',
        type: 'multiple-choice',
        questionUz: 'Qaysi gap grammatik jihatdan to‘g‘ri?',
        options: [
          'Obwohl es kalt ist, trägt er kein T-Shirt.',
          'Obwohl es ist kalt, er trägt kein T-Shirt.',
          'Obwohl es kalt ist, er trägt kein T-Shirt.',
          'Obwohl ist es kalt, trägt er kein T-Shirt.'
        ],
        correctAnswer: 'Obwohl es kalt ist, trägt er kein T-Shirt.',
        explanationUz: '"Obwohl es kalt ist," (fe‘l oxirida), "trägt er..." (bosh gap fe‘l bilan boshlanadi).',
        mistakeTipUz: '❌ "Obwohl es kalt ist, trägt er...".'
      }
    ]
  },

  // ==========================================
  // LEKTION 44: Wetter, Klima und Naturereignisse
  // ==========================================
  {
    id: 'les-44',
    moduleId: 'mod-a2-2-3',
    levelCode: 'a2-2',
    titleDe: 'Lektion 44: Wetter, Klima und Naturereignisse',
    titleUz: '44-Dars: Ob-havo, iqlim va tabiat hodisalari (Fe‘llarning hikoya o‘tgan zamoni - Präteritum)',
    descriptionUz: 'Iqlim o‘zgarishi, to‘fon, momaqaldiroq, qor bo‘roni hamda to‘g‘ri va noto‘g‘ri fe‘llarning Präteritum shakllari (sagte, kam, ging, sah, regnete, schien).',
    orderIndex: 44,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Ob-havo ma‘lumotlari va tabiat hodisalarini ifodalash',
      'Asosiy fe‘llarning Präteritum o‘tgan zamon shakllarini (ging, kam, sah, schien) qo‘llash',
      'Matn va xabarlardagi hikoya o‘tgan zamonini tushunish'
    ],
    warmUp: {
      situationUz: 'Kecha shaharda kutilmaganda kuchli momaqaldiroq (Gewitter) yuz berdi va qattiq yomg‘ir yog‘di.',
      curiosityQuestionUz: '"Kecha tushdan keyin kuchli momaqaldiroq bo‘ldi va yomg‘ir yog‘di" nemischa qanday aytiladi?',
      miniDialogue: [
        { speaker: 'Nachbar', textDe: 'Hast du das Unwetter gestern Abend mitbekommen?', textUz: 'Kechagi kuchli to‘fonni sezdingizmi?' },
        { speaker: 'Aziz', textDe: 'Ja, es donnerte und blitzte stundenlang.', textUz: 'Ha, soatlab momaqaldiroq guldurab, chaqmoq chaqdi.' }
      ],
      hintUz: 'Yozma xabarlarda, gazetalarda va ertaklarda Perfekt emas, Präteritum shakli qo‘llanadi!'
    },
    contextDialogue: {
      titleDe: 'Das schwere Unwetter in Süddeutschland',
      titleUz: 'Janubiy Germaniyadagi kuchli bo‘ron',
      situationUz: 'Nodir va do‘sti Lukas ob-havo yangiliklarini tomosha qilmoqda.',
      lines: [
        { speaker: 'Lukas', textDe: 'Nodir, hast du die Nachrichten gesehen? Gestern gab es im Süden ein schweres Unwetter.', textUz: 'Nodir, yangiliklarni ko‘rdingmi? Kecha janubda kuchli bo‘ron yuz berdi.' },
        { speaker: 'Nodir', textDe: 'Nein, was geschah denn genau?', textUz: 'Yo‘q, aniq nima sodir bo‘ldi o‘zi?' },
        { speaker: 'Lukas', textDe: 'Zuerst schien den ganzen Tag die Sonne und es war heiß. Aber am Abend zog plötzlich ein schweres Gewitter auf.', textUz: 'Avvaliga kun bo‘yi quyosh charaqlab, issiq bo‘ldi. Ammo kechqurun to‘satdan kuchli momaqaldiroq yopirildi.' },
        { speaker: 'Nodir', textDe: 'Gab es auch Schäden?', textUz: 'Talafotlar ham bo‘ldimi?' },
        { speaker: 'Lukas', textDe: 'Ja, der Wind riss Äste ab und die Feuerwehr musste viele Keller auspumpen.', textUz: 'Ha, shamol daraxt shoxlarini uzib tashladi va o‘t o‘chiruvchilar ko‘plab yerto‘lalardan suvni tortib olishga majbur bo‘lishdi.' },
        { speaker: 'Nodir', textDe: 'Zum Glück beruhigte sich das Wetter in der Nacht wieder.', textUz: 'Xayriyatki, tunda ob-havo yana tinchidi.' }
      ],
      usefulPhrases: [
        { german: 'Es blitzte und donnerte.', uzbek: 'Chaqmoq chaqdi va momaqaldiroq gulduradi.' },
        { german: 'Die Sonne schien.', uzbek: 'Quyosh charaqladi.' },
        { german: 'ein schweres Gewitter', uzbek: 'kuchli momaqaldiroq' },
        { german: 'stundenlang regnen', uzbek: 'soatlab yomg‘ir yog‘moq' }
      ],
      culturalNoteUz: 'Germaniyada iqlim mo‘’tadil bo‘lsa-da, so‘nggi yillarda yozda kuchli issiqlik to‘lqinlari (Hitzewellen) va kutilmagan kuchli yomg‘irlar tez-tez kuzatilmoqda.'
    },
    vocabulary: [
      {
        id: 'voc-m15-7',
        lessonId: 'les-44',
        levelCode: 'a2-2',
        german: 'das Gewitter',
        article: 'das',
        plural: 'die Gewitter',
        uzbek: 'momaqaldiroq, chaqmoqli bo‘ron',
        exampleDe: 'Ein schweres Gewitter zieht auf.',
        exampleUz: 'Kuchli momaqaldiroq yaqinlashmoqda.',
        wordType: 'noun'
      },
      {
        id: 'voc-m15-8',
        lessonId: 'les-44',
        levelCode: 'a2-2',
        german: 'das Klima',
        article: 'das',
        plural: null,
        uzbek: 'iqlim',
        exampleDe: 'Der Klimawandel betrifft uns alle.',
        exampleUz: 'Iqlim o‘zgarishi barchamizga daxldor.',
        wordType: 'noun'
      },
      {
        id: 'voc-m15-9',
        lessonId: 'les-44',
        levelCode: 'a2-2',
        german: 'scheinen',
        article: null,
        plural: null,
        uzbek: 'charaqlamoq, porlamoq (quyosh)',
        exampleDe: 'Gestern schien die Sonne den ganzen Tag.',
        exampleUz: 'Kecha kun bo‘yi quyosh charaqladi.',
        wordType: 'verb'
      },
      {
        id: 'voc-m15-10',
        lessonId: 'les-44',
        levelCode: 'a2-2',
        german: 'die Temperatur',
        article: 'die',
        plural: 'die Temperaturen',
        uzbek: 'harorat',
        exampleDe: 'Die Temperaturen steigen auf 30 Grad.',
        exampleUz: 'Harorat 30 darajagacha ko‘tariladi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m15-11',
        lessonId: 'les-44',
        levelCode: 'a2-2',
        german: 'stürmisch',
        article: null,
        plural: null,
        uzbek: 'bo‘ronli, dovulli',
        exampleDe: 'Heute ist es sehr stürmisch.',
        exampleUz: 'Bugun havo juda bo‘ronli.',
        wordType: 'adjective'
      },
      {
        id: 'voc-m15-12',
        lessonId: 'les-44',
        levelCode: 'a2-2',
        german: 'sinken',
        article: null,
        plural: null,
        uzbek: 'pasaymoq, tushmoq (harorat)',
        exampleDe: 'Die Temperaturen sinken in der Nacht.',
        exampleUz: 'Kechasi harorat pasayadi.',
        wordType: 'verb'
      }
    ],
    grammar: [
      {
        id: 'gra-m15-2',
        lessonId: 'les-44',
        levelCode: 'a2-2',
        titleDe: 'Das Präteritum der regelmäßigen und unregelmäßigen Verben',
        titleUz: 'Präteritum: fe‘llarning hikoya o‘tgan zamoni',
        summaryUz: 'Präteritum asosan gazeta, xabarlar va kitoblarda qo‘llanadi. Muntazam fe‘llar "-te", noto‘g‘ri fe‘llar esa o‘zak o‘zgarishi orqali yasaladi.',
        explanationUz: `Nemis tilida o‘tgan zamonning ikki turi bor:
- **Perfekt** (og‘zaki so‘zlashuvda)
- **Präteritum** (yozma nutqda, yangiliklarda va kitoblarda)

1. **Muntazam fe‘llar (Regelmäßige Verben):**
- O‘zakka **-te-** qo‘shimchasi qo‘shiladi:
- sagen → er sag**te** (aytdi)
- regnen → es regne**te** (yomg‘ir yog‘di)
- machen → ich mach**te** (qildim)

2. **Noto‘g‘ri fe‘llar (Unregelmäßige Verben):**
- O‘zakdagi unli o‘zgaradi (ich va er/sie/es shakllari bir xil va qo‘shimchasiz bo‘ladi):
- gehen → ging (bordi)
- kommen → kam (keldi)
- sehen → sah (ko‘rdi)
- scheinen → schien (charaqladi)
- geben → gab (berdi / es gab = bor edi)`,
        tables: [
          {
            title: 'Asosiy fe‘llarning Präteritum shakllari',
            headers: ['Infinitiv', 'Präteritum (er/sie/es)', 'Perfekt shakli', 'O‘zbekcha ma‘nosi'],
            rows: [
              ['gehen', 'ging', 'ist gegangen', 'bordi'],
              ['kommen', 'kam', 'ist gekommen', 'keldi'],
              ['sehen', 'sah', 'hat gesehen', 'ko‘rdi'],
              ['scheinen', 'schien', 'hat geschienen', 'porladi (quyosh)'],
              ['regnen', 'regnete', 'hat geregnet', 'yomg‘ir yog‘di'],
              ['geben', 'gab (es gab)', 'hat gegeben', 'bor edi']
            ]
          }
        ],
        examples: [
          {
            german: 'Gestern regnete es stundenlang und es gab starken Wind.',
            uzbek: 'Kecha soatlab yomg‘ir yog‘di va kuchli shamol bo‘ldi.',
            highlight: 'regnete ... gab'
          },
          {
            german: 'Die Sonne schien und die Kinder spielten im Park.',
            uzbek: 'Quyosh charaqladi va bolalar parkda o‘ynashdi.',
            highlight: 'schien ... spielten'
          }
        ]
      }
    ],
    listening: [
      {
        id: 'lis-m15-2',
        lessonId: 'les-44',
        levelCode: 'a2-2',
        titleDe: 'Wetterbericht im Fernsehen',
        titleUz: 'Televideniyeda ob-havo xabari',
        transcriptDe: 'Hier ist der Wetterbericht für morgen: Im Norden bleibt es stürmisch mit einzelnen Regenschauern bei maximal 16 Grad. Im Süden hingegen scheint den ganzen Tag die Sonne und die Temperaturen steigen auf sommerliche 27 Grad. Am Abend zieht von Westen her ein Gewitter auf.',
        translationUz: 'Ertangi kun ob-havo ma‘lumoti: Shimolda maksimal 16 daraja bilan bo‘ronli va qisqa muddatli yomg‘irli ob-havo saqlanib qoladi. Janubda esa aksincha, kun bo‘yi quyosh charaqlaydi va harorat yozgi 27 darajagacha ko‘tariladi. Kechqurun g‘arbdan momaqaldiroq yaqinlashadi.',
        dialogue: [
          { speaker: 'Meteorologe', textDe: 'Im Süden scheint den ganzen Tag die Sonne bei bis zu 27 Grad.', textUz: 'Janubda kun bo‘yi 27 darajagacha quyosh charaqlaydi.' }
        ],
        questions: [
          {
            id: 'q-lis-m15-2',
            questionUz: 'Janubda harorat necha darajagacha ko‘tariladi?',
            options: ['27 darajagacha (bis zu 27 Grad)', '16 darajagacha', '40 daraja'],
            correctIndex: 0,
            explanationUz: 'Xabarda "die Temperaturen steigen auf sommerliche 27 Grad" deyilgan.'
          }
        ]
      }
    ],
    reading: [
      {
        id: 'read-m15-2',
        lessonId: 'les-44',
        levelCode: 'a2-2',
        titleDe: 'Zeitungsmeldung: Das Rekordwetter im Juli',
        titleUz: 'Gazeta xabari: Iyuldagi rekord ob-havo',
        textDe: 'Der Deutsche Wetterdienst meldete gestern einen neuen Temperaturrekord. In vielen Städten stiegen die Thermometer auf über 38 Grad. Die Menschen suchten Abkühlung an Seen und in Freibädern. Ärzte warnten vor der starken Hitze und rieten dazu, mindestens drei Liter Wasser am Tag zu trinken. Erst am späten Abend brachte ein kühler Wind die ersehnte Erfrischung.',
        textUz: 'Germaniya ob-havo xizmati kecha yangi harorat rekordini ma‘lum qildi. Ko‘plab shaharlarda termometrlar 38 darajadan yuqoriga ko‘tarildi. Odamlar ko‘llar va ochiq hovuzlarda salqinlanishni izladilar. Shifokorlar kuchli jazirama haqida ogohlantirdilar va kuniga kamida uch litr suv ichishni maslahat berdilar. Faqat kechqurun salqin shamol uzoq kutilgan tetiklikni keltirdi.',
        questions: [
          {
            id: 'q-read-m15-2',
            questionUz: 'Shifokorlar kuchli issiqda kuniga qancha suv ichishni maslahat berdilar?',
            options: ['Kamida uch litr (mindestens drei Liter)', 'Bir litr', 'Faqat sharbat'],
            correctIndex: 0,
            explanationUz: 'Matnda "mindestens drei Liter Wasser am Tag zu trinken" deb yozilgan.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-m15-2',
      lessonId: 'les-44',
      levelCode: 'a2-2',
      taskDe: 'Beschreiben Sie das Wetter von gestern im Präteritum.',
      taskUz: 'Kechagi ob-havoni Präteritum (schien, regnete, war) shaklida tasvirlang.',
      instructionUz: 'Quyosh chiqqanini yoki yomg‘ir yog‘ganini hikoya qiling.',
      hints: ['Gestern schien die Sonne...', 'Am Abend regnete es...'],
      sampleSolutionDe: 'Gestern war das Wetter sehr schön. Den ganzen Tag schien die Sonne und es war angenehm warm. Am Abend zog ein kühler Wind auf, aber es regnete nicht.',
      scaffold: {
        openingDe: 'Der Wetterbericht von gestern:',
        closingDe: 'Ein schöner Sommertag!',
        usefulPhrasesDe: ['Die Sonne schien...', 'Es regnete...', 'Es gab Wind...']
      }
    },
    shadowing: [
      {
        id: 'sha-m15-2',
        lessonId: 'les-44',
        levelCode: 'a2-2',
        sentenceDe: 'Gestern schien die Sonne den ganzen Tag, aber am Abend zog plötzlich ein schweres Gewitter auf.',
        translationUz: 'Kecha kun bo‘yi quyosh charaqladi, ammo kechqurun to‘satdan kuchli momaqaldiroq yaqinlashdi.',
        phoneticHint: '[Ges-tern shin di Zon-ne den gan-tsen Tag, a-ber am A-bent tsog plöts-lih ayn shve-res Ge-vit-ter auf]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-m15-2-q1',
        type: 'fill-blank',
        questionUz: '"scheinen" fe‘lining Präteritum shaklini qo‘ying: "Gestern _____ die Sonne."',
        blankSentence: 'Gestern [blank] die Sonne.',
        options: ['schien', 'scheinte', 'geschienen', 'scheint'],
        correctAnswer: 'schien',
        explanationUz: '"scheinen" ning Präteritum shakli "schien" bo‘ladi.',
        mistakeTipUz: '❌ Noto‘g‘ri fe‘l: scheinen → schien.'
      },
      {
        id: 'prac-m15-2-q2',
        type: 'fill-blank',
        questionUz: '"gehen" fe‘lining Präteritum shaklini qo‘ying: "Wir _____ gestern nach Hause."',
        blankSentence: 'Wir [blank] gestern nach Hause.',
        options: ['gingen', 'gehten', 'gegangen', 'gingt'],
        correctAnswer: 'gingen',
        explanationUz: '"wir" uchun "gehen" fe‘lining Präteritum shakli "gingen" bo‘ladi.',
        mistakeTipUz: '❌ gehen → wir gingen.'
      },
      {
        id: 'prac-m15-2-q3',
        type: 'multiple-choice',
        questionUz: '"Kecha soatlab yomg‘ir yog‘di" gapi Präteritumda qanday bo‘ladi?',
        options: [
          'Gestern regnete es stundenlang.',
          'Gestern regnet es stundenlang.',
          'Gestern hat geregnet es stundenlang.',
          'Gestern regte es stundenlang.'
        ],
        correctAnswer: 'Gestern regnete es stundenlang.',
        explanationUz: 'regnen muntazam fe‘l: regnete.',
        mistakeTipUz: '❌ regnen → regnete.'
      }
    ]
  },

  // ==========================================
  // LEKTION 45: Stadt oder Land? Lebensformen im Vergleich
  // ==========================================
  {
    id: 'les-45',
    moduleId: 'mod-a2-2-3',
    levelCode: 'a2-2',
    titleDe: 'Lektion 45: Stadt oder Land? Lebensformen im Vergleich',
    titleUz: '45-Dars: Shahar yoki qishloq? Yashash tarzlari (Juft bog‘lovchilar - nicht nur... sondern auch)',
    descriptionUz: 'Shahar va qishloq hayotining afzallik hamda kamchiliklari va juft bog‘lovchilar (nicht nur... sondern auch, sowohl... als auch).',
    orderIndex: 45,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Shahar va qishloqdagi hayotni qiyosiy tahlil qila olish',
      'Juft bog‘lovchilarni (nicht nur ... sondern auch, sowohl ... als auch) to‘g‘ri qo‘llash',
      'Turar joy tanlash sabablarini asoslash'
    ],
    warmUp: {
      situationUz: 'Katta shovqinli shaharda yashash yaxshimi yoki sokin tabiat qo‘ynidami? Do‘stingiz bilan buni muhokama qilyapsiz.',
      curiosityQuestionUz: '"Shaharda nafaqat ko‘plab ish o‘rinlari, balki boy madaniy hayot ham bor" nemischa qanday aytiladi?',
      miniDialogue: [
        { speaker: 'Städter', textDe: 'In der Stadt gibt es nicht nur gute Jobs, sondern auch viele Theater.', textUz: 'Shaharda nafaqat yaxshi ishlar, balki ko‘plab teatrlar ham bor.' },
        { speaker: 'Dorfbewohner', textDe: 'Dafür haben wir auf dem Land sowohl saubere Luft als auch Ruhe.', textUz: 'Buning evaziga qishloqda bizda ham toza havo, ham sokinlik bor.' }
      ],
      hintUz: '"nicht nur ... sondern auch" (nafaqat ..., balki ... ham) bir vaqtning o‘zida ikkita ijobiy tomonni ifodalaydi!'
    },
    contextDialogue: {
      titleDe: 'Wo lebt man besser?',
      titleUz: 'Qayerda yashash yaxshiroq?',
      situationUz: 'Nodir va Hanna shahar va qishloq hayotini qiyoslamoqda.',
      lines: [
        { speaker: 'Nodir', textDe: 'Hanna, du bist auf dem Land aufgewachsen und lebst jetzt in Berlin. Was gefällt dir besser?', textUz: 'Hanna, sen qishloqda o‘sgansan va hozir Berlinda yashayapsan. Senga qaysi biri ko‘proq yoqadi?' },
        { speaker: 'Hanna', textDe: 'Beides hat Vorteile! In der Stadt hat man nicht nur tolle Karrieremöglichkeiten, sondern auch ein riesiges Kulturangebot.', textUz: 'Ikkalasining ham afzalliklari bor! Shaharda nafaqat ajoyib martaba imkoniyatlari, balki ulkan madaniy takliflar ham bor.' },
        { speaker: 'Nodir', textDe: 'Aber auf dem Land ist das Leben doch viel ruhiger, oder?', textUz: 'Lekin qishloqda hayot ancha sokinroq, shunday emasmi?' },
        { speaker: 'Hanna', textDe: 'Ja, absolut. Auf dem Land hat man sowohl einen eigenen Garten als auch viel Natur direkt vor der Haustür.', textUz: 'Ha, shubhasiz. Qishloqda ham shaxsiy bog‘ing, ham to‘g‘ri ostonangda ko‘p tabiat bor.' },
        { speaker: 'Nodir', textDe: 'Und die Mieten sind auf dem Land viel günstiger als in der Metropole.', textUz: 'Va qishloqda ijara narxlari megapolisga qaraganda ancha arzon.' },
        { speaker: 'Hanna', textDe: 'Das stimmt! Wenn ich älter bin, ziehe ich vielleicht wieder aufs Land zurück.', textUz: 'Bu haqiqat! Yoshiroq bo‘lganimda, ehtimol yana qishloqqa qaytib ko‘charman.' }
      ],
      usefulPhrases: [
        { german: 'nicht nur ..., sondern auch ...', uzbek: 'nafaqat ..., balki ... ham' },
        { german: 'sowohl ... als auch ...', uzbek: 'ham ..., ham ...' },
        { german: 'auf dem Land leben', uzbek: 'qishloqda yashamoq' },
        { german: 'in der Großstadt wohnen', uzbek: 'katta shaharda yashamoq' }
      ],
      culturalNoteUz: 'Germaniyada transport tizimi (S-Bahn va mintaqaviy poyezdlar) juda yaxshi yo‘lga qo‘yilganligi sababli, ko‘pchilik qishloqda yoki chekkada yashab, shaharga ishga qatnaydi (Pendler).'
    },
    vocabulary: [
      {
        id: 'voc-m15-13',
        lessonId: 'les-45',
        levelCode: 'a2-2',
        german: 'die Natur',
        article: 'die',
        plural: null,
        uzbek: 'tabiat',
        exampleDe: 'Ich verbringe viel Zeit in der Natur.',
        exampleUz: 'Men tabiatda ko‘p vaqt o‘tkazaman.',
        wordType: 'noun'
      },
      {
        id: 'voc-m15-14',
        lessonId: 'les-45',
        levelCode: 'a2-2',
        german: 'die Ruhe',
        article: 'die',
        plural: null,
        uzbek: 'sokinlik, tinchlik',
        exampleDe: 'Hier auf dem Land genieße ich die Ruhe.',
        exampleUz: 'Bu yerda qishloqda sokinlikdan huzurlanaman.',
        wordType: 'noun'
      },
      {
        id: 'voc-m15-15',
        lessonId: 'les-45',
        levelCode: 'a2-2',
        german: 'die Möglichkeit',
        article: 'die',
        plural: 'die Möglichkeiten',
        uzbek: 'imkoniyat',
        exampleDe: 'Die Stadt bietet viele Möglichkeiten.',
        exampleUz: 'Shahar ko‘plab imkoniyatlar taqdim etadi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m15-16',
        lessonId: 'les-45',
        levelCode: 'a2-2',
        german: 'bevorzugen',
        article: null,
        plural: null,
        uzbek: 'afzal ko‘rmoq',
        exampleDe: 'Ich bevorzuge das ruhige Leben.',
        exampleUz: 'Men sokin hayotni afzal ko‘raman.',
        wordType: 'verb'
      },
      {
        id: 'voc-m15-17',
        lessonId: 'les-45',
        levelCode: 'a2-2',
        german: 'lebendig',
        article: null,
        plural: null,
        uzbek: 'gavjum, jonli',
        exampleDe: 'Berlin ist eine sehr lebendige Stadt.',
        exampleUz: 'Berlin juda jonli shahar.',
        wordType: 'adjective'
      },
      {
        id: 'voc-m15-18',
        lessonId: 'les-45',
        levelCode: 'a2-2',
        german: 'der Pendler',
        article: 'der',
        plural: 'die Pendler',
        uzbek: 'boshqa shaharga ishga qatnovchi yo‘lovchi',
        exampleDe: 'Viele Pendler nutzen täglich den Zug.',
        exampleUz: 'Ko‘plab qatnovchilar har kuni poyezddan foydalanadi.',
        wordType: 'noun'
      }
    ],
    grammar: [
      {
        id: 'gra-m15-3',
        lessonId: 'les-45',
        levelCode: 'a2-2',
        titleDe: 'Zweiteilige Konnektoren (Juft bog‘lovchilar)',
        titleUz: 'nicht nur... sondern auch / sowohl... als auch',
        summaryUz: 'Juft bog‘lovchilar ikkita teng bo‘lakni yoki fikrni birlashtirishda qo‘llanadi va gap so‘z tartibini o‘zgartirmaydi.',
        explanationUz: `Juft bog‘lovchilar (Doppelkonnektoren) nutqni ancha boy va professional ko‘rsatadi:

1. **nicht nur ..., sondern auch ... (nafaqat ..., balki ... ham):**
- *Das Leben in der Stadt ist **nicht nur** aufregend, **sondern auch** praktisch.*
- *Er spricht **nicht nur** Deutsch, **sondern auch** fließend Englisch.*

2. **sowohl ... als auch ... (ham ..., ham ...):**
- *Wir haben **sowohl** ein Auto **als auch** zwei Fahrräder.*
- *Auf dem Land gibt es **sowohl** saubere Luft **als auch** viel Platz.*

3. **weder ... noch ... (na ..., na ... inkor):**
- *Er hat **weder** Zeit **noch** Geld.* (Unda na vaqt, na pul bor.)

Eslab qoling: Bu bog‘lovchilar oddiy bog‘lovchi bo‘lib, gap oxiriga fe‘l surilmaydi!`,
        tables: [
          {
            title: 'Juft bog‘lovchilar ma‘nosi va namunalari',
            headers: ['Bog‘lovchi', 'Ma‘nosi', 'Namuna gap'],
            rows: [
              ['nicht nur ... sondern auch', 'nafaqat ..., balki ... ham', 'Er lernt nicht nur Grammatik, sondern auch Aussprache.'],
              ['sowohl ... als auch', 'ham ..., ham ...', 'Sie mag sowohl Äpfel als auch Birnen.'],
              ['weder ... noch', 'na ..., na ...', 'Er trinkt weder Kaffee noch Tee.']
            ]
          }
        ],
        examples: [
          {
            german: 'Deutschland bietet nicht nur gute Universitäten, sondern auch hervorragende Arbeitsplätze.',
            uzbek: 'Germaniya nafaqat yaxshi universitetlar, balki ajoyib ish o‘rinlarini ham taqdim etadi.',
            highlight: 'nicht nur ... sondern auch'
          },
          {
            german: 'Wir brauchen sowohl einen Tisch als auch vier Stühle.',
            uzbek: 'Bizga ham stol, ham to‘rtta stul kerak.',
            highlight: 'sowohl ... als auch'
          }
        ]
      }
    ],
    listening: [
      {
        id: 'lis-m15-3',
        lessonId: 'les-45',
        levelCode: 'a2-2',
        titleDe: 'Stadtmensch oder Landmensch?',
        titleUz: 'Shahar odamimi yoki qishloq?',
        transcriptDe: 'Hallo Florian, wo möchtest du in Zukunft wohnen?\nFür mich kommt nur die Großstadt infrage. In der Stadt hat man nicht nur kurze Wege zur Arbeit, sondern auch rund um die Uhr geöffnete Supermärkte und tolle Cafés. Auf dem Land wäre es mir einfach viel zu langweilig.',
        translationUz: 'Salom Florian, kelajakda qayerda yashashni xohlaysan?\nMen uchun faqat katta shahar to‘g‘ri keladi. Shaharda nafaqat ishgacha qisqa yo‘l, balki tunu-kun ochiq supermarketlar va ajoyib qahvaxonalar ham bor. Qishloqda menga shunchaki juda zerikarli bo‘lardi.',
        dialogue: [
          { speaker: 'Florian', textDe: 'In der Stadt hat man nicht nur kurze Wege, sondern auch tolle Cafés.', textUz: 'Shaharda nafaqat qisqa masofalar, balki ajoyib kafelar ham bor.' }
        ],
        questions: [
          {
            id: 'q-lis-m15-3',
            questionUz: 'Florian nima uchun qishloqda yashashni xohlamaydi?',
            options: ['Juda zerikarli bo‘lgani uchun (zu langweilig)', 'Juda qimmat bo‘lgani sababli', 'Tabiat yoqmagani uchun'],
            correctIndex: 0,
            explanationUz: 'Florian "Auf dem Land wäre es mir einfach viel zu langweilig" deb tushuntirdi.'
          }
        ]
      }
    ],
    reading: [
      {
        id: 'read-m15-3',
        lessonId: 'les-45',
        levelCode: 'a2-2',
        titleDe: 'Der Trend zum Landleben in Deutschland',
        titleUz: 'Germaniyada qishloq hayotiga qiziqish trendi',
        textDe: 'Immer mehr junge Familien in Deutschland ziehen aus den teuren Großstädten aufs Land. Dank Homeoffice und schnellem Internet können viele Menschen von zu Hause aus arbeiten. Sie schätzen auf dem Land sowohl den niedrigeren Mietpreis als auch den Garten für die Kinder. Ein Nachteil bleibt jedoch der Nahverkehr: Ohne Auto ist man in kleinen Dörfern oft unbeweglich.',
        textUz: 'Germaniyada tobora ko‘proq yosh oilalar qimmat yirik shaharlardan qishloqqa ko‘chib o‘tmoqdalar. Uydan ishlash (Homeoffice) va tezkor internet tufayli ko‘pchilik o‘z uyidan turib ishlay oladi. Ular qishloqda ham arzon ijara narxini, ham bolalar uchun bog‘ni qadrlaydilar. Biroq bitta kamchilik — jamoat transporti: Avtomobilsiz kichik qishloqlarda harakatlanish ko‘pincha qiyin.',
        questions: [
          {
            id: 'q-read-m15-3',
            questionUz: 'Qishloq hayotining asosiy kamchiligi nima?',
            options: ['Avtomobilsiz harakatlanish qiyinligi', 'Internet yo‘qligi', 'Havoning sovuqligi'],
            correctIndex: 0,
            explanationUz: 'Matnda "Ohne Auto ist man in kleinen Dörfern oft unbeweglich" deb ta‘kidlangan.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-m15-3',
      lessonId: 'les-45',
      levelCode: 'a2-2',
      taskDe: 'Vergleichen Sie Stadt und Land mit "nicht nur ... sondern auch" und "sowohl ... als auch".',
      taskUz: 'Shahar va qishloqni "nicht nur ... sondern auch" va "sowohl ... als auch" juft bog‘lovchilari yordamida qiyoslang.',
      instructionUz: 'Qayerda yashash sizga yoqishini bayon qiling.',
      hints: ['Die Stadt bietet nicht nur..., sondern auch...', 'Auf dem Land gibt es sowohl... als auch...'],
      sampleSolutionDe: 'Ich lebe gerne in der Stadt, weil es hier nicht nur viele Arbeitsplätze, sondern auch tolle Kinos gibt. Aber auf dem Land gibt es sowohl saubere Luft als auch wunderschöne Natur.',
      scaffold: {
        openingDe: 'Mein Vergleich:',
        closingDe: 'Jeder Ort hat seine Vorteile.',
        usefulPhrasesDe: ['nicht nur ..., sondern auch ...', 'sowohl ... als auch ...']
      }
    },
    shadowing: [
      {
        id: 'sha-m15-3',
        lessonId: 'les-45',
        levelCode: 'a2-2',
        sentenceDe: 'Die Stadt bietet nicht nur viele Karrieremöglichkeiten, sondern auch ein reiches Kulturangebot.',
        translationUz: 'Shahar nafaqat ko‘plab martaba imkoniyatlari, balki boy madaniy takliflarni ham taqdim etadi.',
        phoneticHint: '[Di Shtat bi-tet niht nur fi-le Kar-ye-re-mög-lih-kay-ten, zon-dern auh ayn ray-hes Kul-tur-an-ge-bot]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-m15-3-q1',
        type: 'fill-blank',
        questionUz: 'Juft bog‘lovchining ikkinchi qismini qo‘ying: "Er spricht nicht nur Deutsch, _____ auch Englisch."',
        blankSentence: 'Er spricht nicht nur Deutsch, [blank] auch Englisch.',
        options: ['sondern', 'aber', 'oder', 'und'],
        correctAnswer: 'sondern',
        explanationUz: '"nicht nur" har doim "sondern auch" bilan juft bo‘ladi.',
        mistakeTipUz: '❌ "nicht nur ..., sondern auch...".'
      },
      {
        id: 'prac-m15-3-q2',
        type: 'fill-blank',
        questionUz: 'Juft bog‘lovchining ikkinchi qismini qo‘ying: "Wir haben sowohl ein Auto _____ zwei Fahrräder."',
        blankSentence: 'Wir haben sowohl ein Auto [blank] zwei Fahrräder.',
        options: ['als auch', 'sondern auch', 'weder', 'oder'],
        correctAnswer: 'als auch',
        explanationUz: '"sowohl" har doim "als auch" bilan juft bo‘ladi.',
        mistakeTipUz: '❌ "sowohl ..., als auch...".'
      },
      {
        id: 'prac-m15-3-q3',
        type: 'multiple-choice',
        questionUz: '"Unda na vaqt, na pul bor" gapi qaysi?',
        options: [
          'Er hat weder Zeit noch Geld.',
          'Er hat sowohl Zeit als auch Geld.',
          'Er hat nicht nur Zeit, sondern auch Geld.',
          'Er hat entweder Zeit oder Geld.'
        ],
        correctAnswer: 'Er hat weder Zeit noch Geld.',
        explanationUz: '"weder ... noch" inkor ma‘nosidagi juft bog‘lovchi: na vaqt, na pul.',
        mistakeTipUz: '❌ "weder ... noch" = na ..., na ...'
      }
    ]
  }
];
