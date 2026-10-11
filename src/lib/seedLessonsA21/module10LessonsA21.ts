import { Lesson } from '../../types/database';

export const MODULE_10_A21_LESSONS: Lesson[] = [
  // ==========================================
  // LEKTION 28: Reisevorbereitung und Buchung
  // ==========================================
  {
    id: 'les-28',
    moduleId: 'mod-a2-1-2',
    levelCode: 'a2-1',
    titleDe: 'Lektion 28: Reisevorbereitung und Buchung',
    titleUz: '28-Dars: Sayohatga tayyorgarlik va chipta olish (Bilvosita savollar - ob va Fragewörter)',
    descriptionUz: 'Poyezd va samolyot chiptalarini band qilish, safar rejalari hamda "ob" (bormi-yo‘qmi) va so‘roq so‘zlar bilan bilvosita muloyim savollar berish.',
    orderIndex: 28,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Temir yo‘l va avia sayohatlarini nemis tilida mustaqil rejalashtirish',
      'Bilvosita xushmuomala savollarni (Können Sie mir sagen, ob/wann...) to‘g‘ri tuzish',
      'Chipta va marshrut ma‘lumotlarini tushunish'
    ],
    warmUp: {
      situationUz: 'Poyezd bekatida ma‘lumotlar oynachasiga yaqinlashdingiz va poyezd kechikadimi-yo‘qmi deb muloyim so‘ramoqchisiz.',
      curiosityQuestionUz: '"Poyezd o‘z vaqtida keladimi-yo‘qligini ayta olasizmi?" gapi nemischa qanday aytiladi?',
      miniDialogue: [
        { speaker: 'Reisender', textDe: 'Entschuldigung, wissen Sie, ob der ICE nach Berlin pünktlich ist?', textUz: 'Kechirasiz, Berlinga boradigan ICE poyezdi o‘z vaqtida keladimi-yo‘qligini bilasizmi?' },
        { speaker: 'Bahn-Beamter', textDe: 'Ja, der Zug hat heute keine Verspätung.', textUz: 'Ha, poyezd bugun kechikmayapti.' }
      ],
      hintUz: '"Wissen Sie, ob..." dan keyin tuslangan fe‘l eng oxirida turadi!'
    },
    contextDialogue: {
      titleDe: 'Am Fahrkartenschalter',
      titleUz: 'Chiptaxona kassasida',
      situationUz: 'Aziz Frankfurt vokzalida Myunxenga chipta sotib olmoqda.',
      lines: [
        { speaker: 'Aziz', textDe: 'Guten Tag! Ich möchte eine Fahrkarte nach München kaufen.', textUz: 'Xayrli kun! Myunxenga poyezd chiptasi sotib olmoqchi edim.' },
        { speaker: 'Bahn-Mitarbeiter', textDe: 'Guten Tag! Möchten Sie einfach oder hin und zurück fahren?', textUz: 'Xayrli kun! Bir tomongami yoki borish-qaytishgami?' },
        { speaker: 'Aziz', textDe: 'Hin und zurück, bitte. Können Sie mir sagen, wann der nächste Zug abfährt?', textUz: 'Borish va qaytish, iltimos. Keyingi poyezd qachon jo‘nashini ayta olasizmi?' },
        { speaker: 'Bahn-Mitarbeiter', textDe: 'Der nächste ICE fährt um 10:15 Uhr von Gleis 7 ab.', textUz: 'Keyingi ICE soat 10:15 da 7-yo‘ldan jo‘naydi.' },
        { speaker: 'Aziz', textDe: 'Wissen Sie auch, ob ich im Zug einen Sitzplatz reservieren kann?', textUz: 'Poyezdda o‘rindiq band qila olamanmi-yo‘qligini ham bilasizmi?' },
        { speaker: 'Bahn-Mitarbeiter', textDe: 'Ja, das kostet 5 Euro extra. Ich reserviere Ihnen gerne einen Fensterplatz.', textUz: 'Ha, bu qo‘shimcha 5 yevro turadi. Sizga deraza yonidan o‘rin band qilib beraman.' },
        { speaker: 'Aziz', textDe: 'Vielen Dank, das nehme ich!', textUz: 'Katta rahmat, shuni olaman!' }
      ],
      usefulPhrases: [
        { german: 'einfach oder hin und zurück?', uzbek: 'bir tomongami yoki borish-qaytish?' },
        { german: 'von Gleis ... abfahren', uzbek: '... yo‘ldan (platformadan) jo‘namoq' },
        { german: 'einen Sitzplatz reservieren', uzbek: 'o‘rindiq band qilmoq' },
        { german: 'Können Sie mir sagen, ob...', uzbek: '...-mi yoki yo‘qligini ayta olasizmi?' }
      ],
      culturalNoteUz: 'Germaniyada Deutsche Bahn (DB) poyezdlarida o‘rindiqni oldindan band qilish (Sitzplatzreservierung) uzoq safarlarda juda muhim, chunki poyezd to‘lib ketishi mumkin.'
    },
    vocabulary: [
      {
        id: 'voc-m10-1',
        lessonId: 'les-28',
        levelCode: 'a2-1',
        german: 'die Fahrkarte',
        article: 'die',
        plural: 'die Fahrkarten',
        uzbek: 'yo‘l chiptasi',
        exampleDe: 'Haben Sie Ihre Fahrkarte dabei?',
        exampleUz: 'Yo‘l chiptangiz yoningizdami?',
        wordType: 'noun'
      },
      {
        id: 'voc-m10-2',
        lessonId: 'les-28',
        levelCode: 'a2-1',
        german: 'das Gleis',
        article: 'das',
        plural: 'die Gleise',
        uzbek: 'temir yo‘l platformasi, rels yo‘li',
        exampleDe: 'Der Zug fährt von Gleis 3 ab.',
        exampleUz: 'Poyezd 3-yo‘ldan jo‘naydi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m10-3',
        lessonId: 'les-28',
        levelCode: 'a2-1',
        german: 'die Abfahrt',
        article: 'die',
        plural: 'die Abfahrten',
        uzbek: 'jo‘nash vaqti, harakatlanish',
        exampleDe: 'Die Abfahrt ist um 14:30 Uhr.',
        exampleUz: 'Jo‘nash soat 14:30 da.',
        wordType: 'noun'
      },
      {
        id: 'voc-m10-4',
        lessonId: 'les-28',
        levelCode: 'a2-1',
        german: 'die Verspätung',
        article: 'die',
        plural: 'die Verspätungen',
        uzbek: 'kechikish',
        exampleDe: 'Der Zug hat zehn Minuten Verspätung.',
        exampleUz: 'Poyezd o‘n daqiqa kechikmoqda.',
        wordType: 'noun'
      },
      {
        id: 'voc-m10-5',
        lessonId: 'les-28',
        levelCode: 'a2-1',
        german: 'pünktlich',
        article: null,
        plural: null,
        uzbek: 'o‘z vaqtida, aniq',
        exampleDe: 'Der Bus kommt immer pünktlich.',
        exampleUz: 'Avtobus doimo o‘z vaqtida keladi.',
        wordType: 'adjective'
      },
      {
        id: 'voc-m10-6',
        lessonId: 'les-28',
        levelCode: 'a2-1',
        german: 'buchen',
        article: null,
        plural: null,
        uzbek: 'band qilmoq (bron qilmoq)',
        exampleDe: 'Ich möchte online ein Ticket buchen.',
        exampleUz: 'Men onlayn chipta band qilmoqchiman.',
        wordType: 'verb'
      }
    ],
    grammar: [
      {
        id: 'gra-m10-1',
        lessonId: 'les-28',
        levelCode: 'a2-1',
        titleDe: 'Indirekte Fragesätze (Bilvosita savol gaplar)',
        titleUz: 'Xushmuomala bilvosita savollar: "ob" va so‘roq so‘zlar bilan',
        summaryUz: 'Muloyim savollarda (Wissen Sie, ob...? / Können Sie mir sagen, wann...?) so‘roq ergash gapga aylanadi va fe‘l eng oxirida turadi.',
        explanationUz: `To‘g‘ridan-to‘g‘ri savol (Direkte Frage) o‘rniga ko‘pincha xushmuomalalik bilan bilvosita savol beriladi:

1. **Ha/Yo‘q savollari (Ja/Nein-Fragen)** bilvosita savolda **"ob"** (-mi yoki yo‘qmi) bog‘lovchisi bilan yasaladi:
- To‘g‘ri savol: *Ist der Zug pünktlich?* (Poyezd vaqtida keladimi?)
- Bilvosita savol: *Wissen Sie, **ob** der Zug pünktlich **ist**?* (Poyezd vaqtida keladimi-yo‘qmi bilasizmi?)

2. **So‘roq so‘zli savollar (W-Fragen)** bilvosita savolda o‘sha so‘roq so‘zi (wann, wo, wie viel...) bilan yasaladi:
- To‘g‘ri savol: *Wann fährt der Zug ab?*
- Bilvosita savol: *Können Sie mir sagen, **wann** der Zug **abfährt**?*

Oltin qoida: **Tuslangan fe‘l har doim gap oxiriga o‘tadi!**`,
        tables: [
          {
            title: 'Direkt vs. Indirekt taqqosi',
            headers: ['To‘g‘ridan-to‘g‘ri savol', 'Kirish iborasi', 'Bilvosita savol (fe‘l oxirida)'],
            rows: [
              ['Hat der Zug Verspätung?', 'Können Sie mir sagen,', 'ob der Zug Verspätung hat?'],
              ['Wo ist Gleis 4?', 'Wissen Sie,', 'wo Gleis 4 ist?'],
              ['Wie viel kostet das Ticket?', 'Ich möchte wissen,', 'wie viel das Ticket kostet.']
            ]
          }
        ],
        examples: [
          {
            german: 'Können Sie mir sagen, wie lange die Fahrt dauert?',
            uzbek: 'Safar qancha vaqt davom etishini ayta olasizmi?',
            highlight: 'wie lange ... dauert'
          },
          {
            german: 'Ich weiß nicht, ob das Museum heute geöffnet ist.',
            uzbek: 'Muzey bugun ochiqmi-yo‘qmi, bilmayman.',
            highlight: 'ob ... ist'
          }
        ]
      }
    ],
    listening: [
      {
        id: 'lis-m10-1',
        lessonId: 'les-28',
        levelCode: 'a2-1',
        titleDe: 'Durchsage am Bahnhof',
        titleUz: 'Vokzaldagi diktor e‘loni',
        transcriptDe: 'Achtung an Gleis 7: Der ICE 574 nach Hamburg Altona, planmäßige Abfahrt 11:20 Uhr, hat heute circa 15 Minuten Verspätung. Grund dafür ist eine technische Störung. Wir bitten um Ihr Verständnis.',
        translationUz: '7-yo‘ldagi yo‘lovchilar diqqatiga: Gamburg Altonaga ketuvchi ICE 574 poyezdi, jadval bo‘yicha jo‘nash soati 11:20, bugun taxminan 15 daqiqa kechikadi. Bunga sabab texnik nosozlik. Tushunishingizni so‘raymiz.',
        dialogue: [
          { speaker: 'Ansage', textDe: 'Der ICE nach Hamburg hat heute circa 15 Minuten Verspätung.', textUz: 'Gamburg poyezdi bugun taxminan 15 daqiqa kechikadi.' }
        ],
        questions: [
          {
            id: 'q-lis-m10-1',
            questionUz: 'Poyezd qancha kechikmoqda?',
            options: ['Taxminan 15 daqiqa', 'Bir soat', 'Umuman kechikmayapti'],
            correctIndex: 0,
            explanationUz: 'E‘londa "hat heute circa 15 Minuten Verspätung" deyilgan.'
          }
        ]
      }
    ],
    reading: [
      {
        id: 'read-m10-1',
        lessonId: 'les-28',
        levelCode: 'a2-1',
        titleDe: 'Online-Fahrplanauskunft',
        titleUz: 'Onlayn poyezdlar jadvali ma‘lumoti',
        textDe: 'Verbindung: Frankfurt (Main) Hbf nach München Hbf\nAbfahrt: 09:15 Uhr, Gleis 5 (ICE 621)\nAnkunft: 12:35 Uhr, Gleis 18\nDauer: 3 Std. 20 Min., ohne Umsteigen\nHinweis: Bordrestaurant geöffnet, WLAN kostenlos verfügbar.\nTicketpreis: 49,90 Euro (Sparpreis mit Sitzplatzreservierung)',
        textUz: 'Yo‘nalish: Frankfurt bosh vokzalidan Myunxen bosh vokzaliga\nJo‘nash: 09:15, 5-yo‘l (ICE 621)\nYetib borish: 12:35, 18-yo‘l\nDavomiyligi: 3 soat 20 daqiqa, poyezd almashtirishsiz (to‘g‘ridan-to‘g‘ri)\nEslatma: Vagon-restoran ochiq, bepul Wi-Fi mavjud.\nChipta narxi: 49,90 yevro (o‘rindiq band qilish bilan birga arzon narx)',
        questions: [
          {
            id: 'q-read-m10-1',
            questionUz: 'Frankfurtdan Myunxengacha poyezd almashtirish kerakmi?',
            options: ['Yo‘q, to‘g‘ridan-to‘g‘ri (ohne Umsteigen)', 'Ha, ikki marta', 'Faqat avtobusga o‘tish kerak'],
            correctIndex: 0,
            explanationUz: 'Jadvalda "ohne Umsteigen" (almashtirishsiz) deb yozilgan.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-m10-1',
      lessonId: 'les-28',
      levelCode: 'a2-1',
      taskDe: 'Formulieren Sie zwei höfliche Fragen mit "Wissen Sie, ob..." und "Können Sie mir sagen, wann...".',
      taskUz: '"Wissen Sie, ob..." va "Können Sie mir sagen, wann..." yordamida ikkita xushmuomala bilvosita savol tuzing.',
      instructionUz: 'Vokzal xodimidan poyezd vaqti va chipta narxi haqida so‘rang.',
      hints: ['Wissen Sie, ob der Zug...', 'Können Sie mir sagen, wann...'],
      sampleSolutionDe: 'Wissen Sie, ob der Zug nach Berlin pünktlich ist? Können Sie mir sagen, wann der nächste ICE abfährt?',
      scaffold: {
        openingDe: 'Entschuldigung,',
        closingDe: 'Vielen Dank im Voraus!',
        usefulPhrasesDe: ['Wissen Sie, ob...', 'Können Sie mir sagen, wie viel...']
      }
    },
    shadowing: [
      {
        id: 'sha-m10-1',
        lessonId: 'les-28',
        levelCode: 'a2-1',
        sentenceDe: 'Können Sie mir bitte sagen, ob der Zug nach München Verspätung hat?',
        translationUz: 'Myunxenga boruvchi poyezd kechikadimi-yo‘qligini menga ayta olasizmi?',
        phoneticHint: '[Kön-nen Zi mir bit-te za-gen, ob der Suk nah Mün-hen Fer-shpe-tung hat?]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-m10-1-q1',
        type: 'word-order',
        questionUz: 'Bilvosita savolni to‘g‘ri tartibda tuzing (fe‘l oxirida!):',
        scrambledWords: ['Wissen', 'Sie,', 'der', 'wann', 'abfährt?', 'Zug'],
        correctAnswer: 'Wissen Sie, wann der Zug abfährt?',
        explanationUz: 'Wissen Sie (1) + wann (2) + der Zug (3) + abfährt (4)?',
        mistakeTipUz: '❌ Bilvosita savollarda tuslangan fe‘l eng oxirida turadi: wann der Zug abfährt?'
      },
      {
        id: 'prac-m10-1-q2',
        type: 'fill-blank',
        questionUz: '"-mi yoki yo‘qmi" ma‘nosidagi to‘g‘ri bog‘lovchini qo‘ying: "Können Sie mir sagen, _____ der Zug pünktlich ist?"',
        blankSentence: 'Können Sie mir sagen, [blank] der Zug pünktlich ist?',
        options: ['ob', 'dass', 'weil', 'wann'],
        correctAnswer: 'ob',
        explanationUz: 'Ha/Yo‘q savollarida "ob" (-mi yo‘qmi) ishlatiladi.',
        mistakeTipUz: '❌ "ob" bog‘lovchisi noaniqlikni ("-mi") ifodalaydi.'
      },
      {
        id: 'prac-m10-1-q3',
        type: 'multiple-choice',
        questionUz: '"Ist das Museum geöffnet?" savolining xushmuomala bilvosita shakli qaysi?',
        options: [
          'Wissen Sie, ob das Museum geöffnet ist?',
          'Wissen Sie, ob ist das Museum geöffnet?',
          'Wissen Sie, dass das Museum geöffnet ist?',
          'Wissen Sie, warum das Museum geöffnet ist?'
        ],
        correctAnswer: 'Wissen Sie, ob das Museum geöffnet ist?',
        explanationUz: '"ob das Museum geöffnet ist" — fe‘l (ist) eng oxirida.',
        mistakeTipUz: '❌ "ob ist das Museum" noto‘g‘ri. Fe‘l oxiriga o‘tadi: "ob das Museum geöffnet ist?".'
      }
    ]
  },

  // ==========================================
  // LEKTION 29: Im Hotel und Reklamation
  // ==========================================
  {
    id: 'les-29',
    moduleId: 'mod-a2-1-2',
    levelCode: 'a2-1',
    titleDe: 'Lektion 29: Im Hotel und Reklamation',
    titleUz: '29-Dars: Mehmonxonada va shikoyat bildirish (Sifatlarning noaniq artikl bilan turlanishi)',
    descriptionUz: 'Mehmonxona xizmatlari, xonadagi nosozliklar haqida shikoyat bildirish va noaniq artikl (ein/eine) bilan sifat turlanishi.',
    orderIndex: 29,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Mehmonxonada xona band qilish va xizmatlar haqida so‘rash',
      'Noaniq artikldan keyin sifat qo‘shimchalarini (-er, -e, -es, -en) to‘g‘ri qo‘llash',
      'Xonadagi muammolar yuzasidan xushmuomala e‘tiroz bildirish'
    ],
    warmUp: {
      situationUz: 'Mehmonxonaga joylashdingiz, ammo xonadagi konditsioner ishlamayapti yoki sochiqlar yo‘q.',
      curiosityQuestionUz: '"Bizga katta va sokin xona kerak" nemischa qanday aytiladi?',
      miniDialogue: [
        { speaker: 'Gast', textDe: 'Wir suchen ein ruhiges Zimmer mit einem schönen Balkon.', textUz: 'Biz chiroyli balkoni bor sokin xona qidiryapmiz.' },
        { speaker: 'Rezeptionist', textDe: 'Ich habe ein wunderbares Zimmer im dritten Stock für Sie.', textUz: 'Siz uchun uchinchi qavatda ajoyib xonam bor.' }
      ],
      hintUz: 'Noaniq artikldan (ein/eine) keyin sifatlar rod va kelishikka mos qo‘shimcha oladi!'
    },
    contextDialogue: {
      titleDe: 'An der Hotelrezeption',
      titleUz: 'Mehmonxona resepshinida',
      situationUz: 'Oydin xonadagi nosozlik yuzasidan resepshnga qo‘ng‘iroq qilmoqda.',
      lines: [
        { speaker: 'Rezeption', textDe: 'Guten Abend, Rezeption Hotel Sonnenblick. Was kann ich für Sie tun?', textUz: 'Xayrli kech, Sonnenblick mehmonxonasi resepshini. Qanday yordam bera olaman?' },
        { speaker: 'Oydin', textDe: 'Guten Abend. Hier ist Oydin aus Zimmer 204. Ich habe leider ein kleines Problem.', textUz: 'Xayrli kech. Bu 204-xonadan Oydin. Menda kichik bir muammo bor edi.' },
        { speaker: 'Rezeption', textDe: 'Ja bitte, worum geht es?', textUz: 'Ha, marhamat, nima bo‘ldi?' },
        { speaker: 'Oydin', textDe: 'Die Heizung funktioniert nicht und es ist sehr kalt. Außerdem haben wir keinen Föhn im Bad.', textUz: 'Isitish tizimi ishlamayapti va juda sovuq. Bundan tashqari hammomda fen yo‘q.' },
        { speaker: 'Rezeption', textDe: 'Oh, das tut mir sehr leid! Wir schicken sofort einen Techniker vorbei und bringen Ihnen einen neuen Föhn.', textUz: 'Voy, juda afsusdaman! Darhol texnik mutaxassis yuboramiz va yangi fen keltiramiz.' },
        { speaker: 'Oydin', textDe: 'Das ist sehr nett, vielen Dank!', textUz: 'Juda xushmuomilasiz, katta rahmat!' }
      ],
      usefulPhrases: [
        { german: 'ein Problem melden', uzbek: 'muammo haqida xabar bermoq' },
        { german: 'Die Heizung / Klimaanlage funktioniert nicht.', uzbek: 'Isitgich / konditsioner ishlamayapti.' },
        { german: 'jemanden vorbeischicken', uzbek: 'kimnidir (xodimni) yubormoq' },
        { german: 'Es tut mir leid.', uzbek: 'Kechirasiz / afsusdaman.' }
      ],
      culturalNoteUz: 'Germaniyada mehmonxonada e‘tiroz bildirilganda shaxsiy ayblovsiz, xotirjam va aniq fakt bilan "Es tut mir leid, aber..." deb murojaat qilinadi.'
    },
    vocabulary: [
      {
        id: 'voc-m10-7',
        lessonId: 'les-29',
        levelCode: 'a2-1',
        german: 'das Doppelzimmer',
        article: 'das',
        plural: 'die Doppelzimmer',
        uzbek: 'ikki kishilik xona',
        exampleDe: 'Wir haben ein Doppelzimmer gebucht.',
        exampleUz: 'Biz ikki kishilik xona band qildik.',
        wordType: 'noun'
      },
      {
        id: 'voc-m10-8',
        lessonId: 'les-29',
        levelCode: 'a2-1',
        german: 'die Rezeption',
        article: 'die',
        plural: 'die Rezeptionen',
        uzbek: 'qabulxona, resepshn',
        exampleDe: 'Melden Sie sich bitte an der Rezeption.',
        exampleUz: 'Iltimos, resepshnda ro‘yxatdan o‘ting.',
        wordType: 'noun'
      },
      {
        id: 'voc-m10-9',
        lessonId: 'les-29',
        levelCode: 'a2-1',
        german: 'die Heizung',
        article: 'die',
        plural: 'die Heizungen',
        uzbek: 'isitish tizimi (batareya)',
        exampleDe: 'Die Heizung ist kalt.',
        exampleUz: 'Isitish batareyasi sovuq.',
        wordType: 'noun'
      },
      {
        id: 'voc-m10-10',
        lessonId: 'les-29',
        levelCode: 'a2-1',
        german: 'kaputt',
        article: null,
        plural: null,
        uzbek: 'buzilgan, ishdan chiqqan',
        exampleDe: 'Die Lampe ist leider kaputt.',
        exampleUz: 'Chiroq afsuski buzilgan.',
        wordType: 'adjective'
      },
      {
        id: 'voc-m10-11',
        lessonId: 'les-29',
        levelCode: 'a2-1',
        german: 'reparieren',
        article: null,
        plural: null,
        uzbek: 'tuzatmoq, ta‘mirlamoq',
        exampleDe: 'Können Sie die Klimaanlage reparieren?',
        exampleUz: 'Konditsionerni tuza olasizmi?',
        wordType: 'verb'
      },
      {
        id: 'voc-m10-12',
        lessonId: 'les-29',
        levelCode: 'a2-1',
        german: 'die Beschwerde',
        article: 'die',
        plural: 'die Beschwerden',
        uzbek: 'shikoyat, e‘tiroz',
        exampleDe: 'Ich möchte eine Beschwerde einreichen.',
        exampleUz: 'Men shikoyat bildirmoqchiman.',
        wordType: 'noun'
      }
    ],
    grammar: [
      {
        id: 'gra-m10-2',
        lessonId: 'les-29',
        levelCode: 'a2-1',
        titleDe: 'Adjektivdeklination nach unbestimmtem Artikel',
        titleUz: 'Sifatlarning noaniq artikl (ein/eine/kein) bilan turlanishi',
        summaryUz: 'Noaniq artikl otning jinsini to‘liq ko‘rsatolmagan hollarda, sifat o‘ziga tegishli rod qo‘shimchasini oladi (-er, -es, -e).',
        explanationUz: `Noaniq artikl (ein, eine, ein) va inkor (kein, keine) dan keyin sifat qo‘shimchalari:

1. **Nominativ (Bosh kelishik):**
- Maskulin (der): ein neu**er** Fernseher (chunki "ein" da rod belgisi yo‘q, shuning uchun -er)
- Neutrum (das): ein schön**es** Zimmer (-es)
- Feminin (die): eine groß**e** Dusche (-e)
- Plural: keine neu**en** Handtücher (-en)

2. **Akkusativ (Tushum kelishik):**
- Maskulin: einen neu**en** Fernseher (-en)
- Neutrum: ein schön**es** Zimmer (-es)
- Feminin: eine groß**e** Dusche (-e)
- Plural: keine neu**en** Handtücher (-en)

3. **Dativ (Jo‘nalish kelishik):**
- Dativda barcha jinslar va ko‘plikda sifat doimo **-en** qo‘shimchasini oladi!
- mit einem schön**en** Balkon, in einer ruhig**en** Straße.`,
        tables: [
          {
            title: 'Noaniq artikl bilan sifat qo‘shimchalari',
            headers: ['Kelishik', 'Muzskoy (der)', 'Neytral (das)', 'Jenskiy (die)', 'Ko‘plik (keine)'],
            rows: [
              ['Nominativ', 'ein schöner Balkon', 'ein schönes Zimmer', 'eine schöne Aussicht', 'keine schönen Zimmer'],
              ['Akkusativ', 'einen schönen Balkon', 'ein schönes Zimmer', 'eine schöne Aussicht', 'keine schönen Zimmer'],
              ['Dativ', 'einem schönen Balkon', 'einem schönen Zimmer', 'einer schönen Aussicht', 'keinen schönen Zimmern']
            ]
          }
        ],
        examples: [
          {
            german: 'Wir haben ein gemütliches Zimmer gebucht.',
            uzbek: 'Biz shinam xona band qildik.',
            highlight: 'gemütliches Zimmer'
          },
          {
            german: 'Er sucht einen ruhigen Arbeitsplatz.',
            uzbek: 'U sokin ish joyi qidirmoqda.',
            highlight: 'einen ruhigen'
          }
        ]
      }
    ],
    listening: [
      {
        id: 'lis-m10-2',
        lessonId: 'les-29',
        levelCode: 'a2-1',
        titleDe: 'Gespräch mit dem Zimmerservice',
        titleUz: 'Xona xizmati bilan muloqot',
        transcriptDe: 'Hallo Rezeption, hier spricht Herr Schmidt aus Zimmer 105. Wir haben ein kleines Problem im Badezimmer. Es gibt kein warmes Wasser und die Dusche tropft ununterbrochen.\nDas tut uns leid, Herr Schmidt. Wir schicken sofort unseren Hausmeister vorbei.',
        translationUz: 'Salom resepshn, 105-xonadan janob Shmidt gapiryapti. Hammomda kichik muammo bor. Issiq suv yo‘q va dush to‘xtovsiz tomchilab turibdi.\nKechirasiz, janob Shmidt. Darhol santexnik ustani yuboramiz.',
        dialogue: [
          { speaker: 'Herr Schmidt', textDe: 'Es gibt kein warmes Wasser und die Dusche tropft.', textUz: 'Issiq suv yo‘q va dush tomchilab turibdi.' }
        ],
        questions: [
          {
            id: 'q-lis-m10-2',
            questionUz: '105-xonadagi asosiy muammo nima?',
            options: ['Issiq suv yo‘qligi va dush tomchilashi', 'Televizor yo‘qligi', 'Kalit yo‘qolgani'],
            correctIndex: 0,
            explanationUz: 'Janob Shmidt "Es gibt kein warmes Wasser" deb shikoyat qildi.'
          }
        ]
      }
    ],
    reading: [
      {
        id: 'read-m10-2',
        lessonId: 'les-29',
        levelCode: 'a2-1',
        titleDe: 'Hotelbewertung im Internet',
        titleUz: 'Internetdagi mehmonxona taqrizi',
        textDe: 'Hotel Alpenblick — Bewertung von Familie Becker (4 von 5 Sternen):\n\nWir hatten einen sehr angenehmen Aufenthalt. Unser Zimmer hatte einen wunderschönen Ausblick auf die Berge und ein sehr bequemes Bett. Das Frühstücksbuffet war reichhaltig mit frischem Obst und leckerem Kaffee. Ein kleiner Kritikpunkt: Das WLAN war im zweiten Stock etwas langsam. Trotzdem kommen wir gerne wieder!',
        textUz: 'Alpenblick mehmonxonasi — Bekker oilasidan baho (5 dan 4 yulduz):\n\nBizda juda yoqimli dam olish bo‘ldi. Xonamizdan tog‘larga ajoyib manzara va juda qulay karavot bor edi. Nonushta bufeti yangi mevalar va mazali qahva bilan to‘kin edi. Kichik tanqid: ikkinchi qavatda Wi-Fi biroz sekin edi. Shunga qaramay, yana bajonidil kelamiz!',
        questions: [
          {
            id: 'q-read-m10-2',
            questionUz: 'Mehmonxonadagi yagona kichik kamchilik nima edi?',
            options: ['Ikkinchi qavatda Wi-Fi sekinligi', 'Ovqat yoqmagani', 'Xona sovuqligi'],
            correctIndex: 0,
            explanationUz: 'Taqrizda "Das WLAN war im zweiten Stock etwas langsam" deb yozilgan.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-m10-2',
      lessonId: 'les-29',
      levelCode: 'a2-1',
      taskDe: 'Schreiben Sie eine E-Mail an ein Hotel und fragen Sie nach einem Zimmer.',
      taskUz: 'Mehmonxonaga xat yozib, xona va narxlar haqida ma‘lumot so‘rang.',
      instructionUz: 'Sifatlarning noaniq artikl bilan turlanishidan foydalaning (ein ruhiges Zimmer, einen schönen Ausblick).',
      hints: ['Wir suchen ein ruhiges Zimmer...', 'Haben Sie ein freies Doppelzimmer?'],
      sampleSolutionDe: 'Sehr geehrte Damen und Herren, wir möchten vom 15. bis 20. Juli ein ruhiges Doppelzimmer mit einem schönen Balkon buchen. Haben Sie in diesem Zeitraum noch ein freies Zimmer? Mit freundlichen Grüßen, Aziz Rahimov',
      scaffold: {
        openingDe: 'Sehr geehrte Damen und Herren,',
        closingDe: 'Mit freundlichen Grüßen',
        usefulPhrasesDe: ['Ich möchte ein Zimmer buchen...', 'Gibt es einen schönen Balkon?']
      }
    },
    shadowing: [
      {
        id: 'sha-m10-2',
        lessonId: 'les-29',
        levelCode: 'a2-1',
        sentenceDe: 'Wir haben ein sehr schönes Zimmer mit einem herrlichen Ausblick auf die Berge gebucht.',
        translationUz: 'Biz tog‘larga ajoyib manzarasi bor juda chiroyli xona band qildik.',
        phoneticHint: '[Vir ha-ben ayn zer shö-nes Tsim-mer mit ay-nem her-rli-hen Aus-blik auf di Ber-ge ge-buht]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-m10-2-q1',
        type: 'fill-blank',
        questionUz: 'Sifat qo‘shimchasini to‘g‘ri qo‘ying (Neutrum): "Wir suchen ein _____ Zimmer."',
        blankSentence: 'Wir suchen ein [blank] Zimmer.',
        options: ['ruhiges', 'ruhiger', 'ruhige', 'ruhigen'],
        correctAnswer: 'ruhiges',
        explanationUz: 'das Zimmer (Neutrum) noaniq artikldan (ein) keyin -es oladi: ein ruhiges Zimmer.',
        mistakeTipUz: '❌ Neutrum uchun: ein ruhiges Zimmer.'
      },
      {
        id: 'prac-m10-2-q2',
        type: 'multiple-choice',
        questionUz: '"Men qulay karavotga ega xona xohlayman" (Akkusativ, Maskulin):',
        options: [
          'Ich möchte ein bequemes Bett und einen großen Schrank.',
          'Ich möchte ein bequemer Bett und ein großer Schrank.',
          'Ich möchte einen bequemes Bett und einen große Schrank.',
          'Ich möchte ein bequemen Bett und ein großes Schrank.'
        ],
        correctAnswer: 'Ich möchte ein bequemes Bett und einen großen Schrank.',
        explanationUz: 'das Bett → ein bequemes Bett; der Schrank (Akkusativ) → einen großen Schrank.',
        mistakeTipUz: '❌ Akkusativda der Schrank → einen großen Schrank.'
      },
      {
        id: 'prac-m10-2-q3',
        type: 'word-order',
        questionUz: 'Gapni to‘g‘ri tartibda tuzing:',
        scrambledWords: ['hat', 'Zimmer', 'Unser', 'einen', 'Balkon', 'großen'],
        correctAnswer: 'Unser Zimmer hat einen großen Balkon',
        explanationUz: 'Unser Zimmer (1) + hat (2) + einen großen Balkon (3).',
        mistakeTipUz: '❌ Akkusativda der Balkon: einen großen Balkon.'
      }
    ]
  },

  // ==========================================
  // LEKTION 30: Reisepannen und Erlebnisse
  // ==========================================
  {
    id: 'les-30',
    moduleId: 'mod-a2-1-2',
    levelCode: 'a2-1',
    titleDe: 'Lektion 30: Reisepannen und Erlebnisse',
    titleUz: '30-Dars: Sayohat sarguzashtlari va kutilmagan hodisalar (Vaqt predloglari - vor, nach, bei, in)',
    descriptionUz: 'Safardagi kutilmagan hodisalar, bagaj kechikishi hamda Dativ bilan qo‘llanuvchi vaqt predloglari (vor dem Flug, nach der Reise, beim Essen, in zwei Tagen).',
    orderIndex: 30,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Sayohatdagi qiziq voqealar va muammolarni hikoya qila olish',
      'Vaqt predloglarini (vor, nach, bei, in + Dativ) aniq qo‘llash',
      'Yo‘qolgan bagaj yoki kechikishlar yuzasidan murojaat qilish'
    ],
    warmUp: {
      situationUz: 'Aeroportda chamadoningiz kelmadi va siz yo‘qolgan buyumlar (Lost and Found) bo‘limiga bordingiz.',
      curiosityQuestionUz: '"Parvozdan oldin pasportimni tekshirdim" nemischa qanday aytiladi?',
      miniDialogue: [
        { speaker: 'Passagier', textDe: 'Was soll ich nach der Landung machen?', textUz: 'Qo‘ngandan keyin nima qilishim kerak?' },
        { speaker: 'Begleiter', textDe: 'Gehen Sie direkt zur Gepäckausgabe.', textUz: 'To‘g‘ri bagaj topshirish zonasiga boring.' }
      ],
      hintUz: '"vor", "nach", "bei", "in" vaqt predloglari har doim Dativ kelishigini talab qiladi!'
    },
    contextDialogue: {
      titleDe: 'Koffer weg am Flughafen',
      titleUz: 'Aeroportda chamadon yo‘qolishi',
      situationUz: 'Malika Frankfurt aeroportida yo‘qolgan chamadoni haqida ariza yozmoqda.',
      lines: [
        { speaker: 'Malika', textDe: 'Guten Tag, mein Koffer ist leider nicht auf dem Gepäckband angekommen.', textUz: 'Xayrli kun, afsuski mening chamadonim bagaj lentasida kelmadi.' },
        { speaker: 'Mitarbeiter', textDe: 'Guten Tag. Zeigen Sie mir bitte Ihren Gepäckabschnitt und Ihr Ticket.', textUz: 'Xayrli kun. Iltimos, bagaj taloningiz va chiptangizni ko‘rsating.' },
        { speaker: 'Malika', textDe: 'Hier, bitte. Beim Einsteigen in Taschkent habe ich den Koffer noch gesehen.', textUz: 'Mana, marhamat. Toshkentda samolyotga chiqayotganda chamadonni ko‘rgan edim.' },
        { speaker: 'Mitarbeiter', textDe: 'Keine Sorge. Nach dem Flug bleibt Gepäck manchmal im Transitbereich hängen.', textUz: 'Xavotir olmang. Parvozdan keyin ba‘zan bagaj tranzit zonasida qolib ketadi.' },
        { speaker: 'Malika', textDe: 'Wann kann ich mit meinem Koffer rechnen?', textUz: 'Chamadonim qachon yetib keladi?' },
        { speaker: 'Mitarbeiter', textDe: 'In einem Tag bringen wir ihn direkt zu Ihrem Hotel.', textUz: 'Bir kundan keyin uni to‘g‘ri mehmonxonangizga yetkazib beramiz.' },
        { speaker: 'Malika', textDe: 'Vielen Dank für Ihre Hilfe!', textUz: 'Yordamingiz uchun katta rahmat!' }
      ],
      usefulPhrases: [
        { german: 'das Gepäck abholen / aufgeben', uzbek: 'bagajni olmoq / topshirmoq' },
        { german: 'den Koffer verlieren', uzbek: 'chamadonni yo‘qotmoq' },
        { german: 'beim Einsteigen', uzbek: 'samolyotga/poyezdga chiqish paytida' },
        { german: 'in zwei Tagen', uzbek: 'ikki kundan keyin' }
      ],
      culturalNoteUz: 'Aeroportlarda bagaj kechikkan taqdirda yo‘lovchiga zaruriy gigiyena vositalari uchun kompensatsiya yoki Favqulodda to‘plam (Emergency Kit) taqdim etiladi.'
    },
    vocabulary: [
      {
        id: 'voc-m10-13',
        lessonId: 'les-30',
        levelCode: 'a2-1',
        german: 'das Gepäck',
        article: 'das',
        plural: null,
        uzbek: 'bagaj, yuk',
        exampleDe: 'Wo kann ich mein Gepäck abholen?',
        exampleUz: 'Yukimni qayerdan olsam bo‘ladi?',
        wordType: 'noun'
      },
      {
        id: 'voc-m10-14',
        lessonId: 'les-30',
        levelCode: 'a2-1',
        german: 'der Koffer',
        article: 'der',
        plural: 'die Koffer',
        uzbek: 'chamadon',
        exampleDe: 'Mein Koffer ist rot und ziemlich schwer.',
        exampleUz: 'Mening chamadonim qizil va ancha og‘ir.',
        wordType: 'noun'
      },
      {
        id: 'voc-m10-15',
        lessonId: 'les-30',
        levelCode: 'a2-1',
        german: 'der Flughafen',
        article: 'der',
        plural: 'die Flughäfen',
        uzbek: 'aeroport',
        exampleDe: 'Wir müssen zwei Stunden vor dem Flug am Flughafen sein.',
        exampleUz: 'Biz parvozdan ikki soat oldin aeroportda bo‘lishimiz kerak.',
        wordType: 'noun'
      },
      {
        id: 'voc-m10-16',
        lessonId: 'les-30',
        levelCode: 'a2-1',
        german: 'verpassen',
        article: null,
        plural: null,
        uzbek: 'o‘tkazib yubormoq, kechikib qolmoq (poyezdga/samolyotga)',
        exampleDe: 'Ich habe den Zug knapp verpasst.',
        exampleUz: 'Men poyezdga ozgina qolganda kechikdim.',
        wordType: 'verb'
      },
      {
        id: 'voc-m10-17',
        lessonId: 'les-30',
        levelCode: 'a2-1',
        german: 'erleben',
        article: null,
        plural: null,
        uzbek: 'boshdan kechirmoq, tajribadan o‘tkazmoq',
        exampleDe: 'Wir haben auf der Reise viel Schönes erlebt.',
        exampleUz: 'Biz safarda ko‘plab go‘zal voqealarni boshdan kechirdik.',
        wordType: 'verb'
      },
      {
        id: 'voc-m10-18',
        lessonId: 'les-30',
        levelCode: 'a2-1',
        german: 'fantastisch',
        article: null,
        plural: null,
        uzbek: 'ajoyib, hayratlanarli',
        exampleDe: 'Die Aussicht war einfach fantastisch.',
        exampleUz: 'Manzara shunchaki ajoyib edi.',
        wordType: 'adjective'
      }
    ],
    grammar: [
      {
        id: 'gra-m10-3',
        lessonId: 'les-30',
        levelCode: 'a2-1',
        titleDe: 'Temporale Präpositionen mit Dativ (Vaqt predloglari)',
        titleUz: 'vor, nach, bei, in + Dativ vaqt ifodalari',
        summaryUz: '"vor" (oldin), "nach" (keyin), "bei" (paytida) va "in" (-dan keyin kelajakda) predloglari doimo DATIV bilan ishlatiladi.',
        explanationUz: `Vaqtni bildiruvchi to‘rtta asosiy predlog:

1. **vor (+ Dativ)** — ...dan oldin:
- vor dem Frühstück (nonushtadan oldin)
- vor der Reise (safardan oldin)
- vor einem Jahr (bir yil oldin)

2. **nach (+ Dativ)** — ...dan keyin:
- nach dem Unterricht (darsdan keyin)
- nach der Arbeit (ishdan keyin)

3. **bei (+ Dativ, qisqartmasi beim)** — ...paytida / davomida:
- beim Essen (ovqatlanish paytida)
- beim Lernen (o‘rganish paytida)

4. **in (+ Dativ)** — ...dan keyin (kelajakda):
- in einer Woche (bir haftadan keyin)
- in zwei Monaten (ikki oydan keyin)

Eslab qoling: Dativda der/das → **dem**, die → **der**, ko‘plik → **den ...n**.`,
        tables: [
          {
            title: 'Vaqt predloglari jadvali',
            headers: ['Predlog', 'Ma‘nosi', 'Maskulin / Neutrum', 'Feminin'],
            rows: [
              ['vor', '...dan oldin', 'vor dem Flug', 'vor der Abreise'],
              ['nach', '...dan keyin', 'nach dem Urlaub', 'nach der Ankunft'],
              ['bei', '...paytida', 'beim (bei dem) Frühstück', 'bei der Arbeit'],
              ['in', '...dan so‘ng', 'in einem Monat', 'in einer Stunde']
            ]
          }
        ],
        examples: [
          {
            german: 'Nach der Arbeit treffe ich meine Freunde.',
            uzbek: 'Ishdan keyin men do‘stlarim bilan uchrashaman.',
            highlight: 'Nach der Arbeit'
          },
          {
            german: 'Wir fliegen in zwei Tagen nach Deutschland.',
            uzbek: 'Biz ikki kundan keyin Germaniyaga uchamiz.',
            highlight: 'in zwei Tagen'
          }
        ]
      }
    ],
    listening: [
      {
        id: 'lis-m10-3',
        lessonId: 'les-30',
        levelCode: 'a2-1',
        titleDe: 'Reisebericht aus den Alpen',
        titleUz: 'Alp tog‘laridan sayohat hikoyasi',
        transcriptDe: 'Letztes Wochenende waren wir in den Alpen. Vor der Wanderung haben wir den Wetterbericht geprüft. Alles schien perfekt. Aber beim Abstieg hat es plötzlich angefangen stark zu regnen. Nach zwei Stunden im Regen kamen wir endlich in einer gemütlichen Berghütte an. Das war ein echtes Abenteuer!',
        translationUz: 'O‘tgan dam olish kunlari biz Alp tog‘larida edik. Sayrdan oldin ob-havo ma‘lumotini tekshirdik. Hammasi ajoyib ko‘ringandi. Ammo tog‘dan tushish paytida to‘satdan kuchli yomg‘ir yog‘a boshladi. Yomg‘ir ostidagi ikki soatdan keyin biz nihoyat shinam tog‘ kulbasiga yetib keldik. Bu haqiqiy sarguzasht bo‘ldi!',
        dialogue: [
          { speaker: 'Erzähler', textDe: 'Beim Abstieg hat es plötzlich angefangen zu regnen.', textUz: 'Tog‘dan tushayotganda to‘satdan yomg‘ir yog‘a boshladi.' }
        ],
        questions: [
          {
            id: 'q-lis-m10-3',
            questionUz: 'Sayohatchilar qachon ob-havo ma‘lumotini tekshirgan edilar?',
            options: ['Sayrdan oldin (Vor der Wanderung)', 'Yomg‘ir paytida', 'Tog‘dan qaytgach'],
            correctIndex: 0,
            explanationUz: 'Matnda "Vor der Wanderung haben wir den Wetterbericht geprüft" deyilgan.'
          }
        ]
      }
    ],
    reading: [
      {
        id: 'read-m10-3',
        lessonId: 'les-30',
        levelCode: 'a2-1',
        titleDe: 'Tipps gegen Reisepannen',
        titleUz: 'Sayohatdagi noxushliklarga qarshi maslahatlar',
        textDe: '1. Vor der Reise: Machen Sie immer Kopien von Ihrem Reisepass und Ihren Flugtickets.\n2. Am Flughafen: Seien Sie mindestens zwei Stunden vor dem Abflug am Check-in-Schalter.\n3. Beim Packen: Wichtige Medikamente und Wertsachen gehören immer ins Handgepäck, nicht in den Koffer!\n4. Nach der Ankunft: Überprüfen Sie sofort Ihr Gepäck, bevor Sie den Flughafen verlassen.',
        textUz: '1. Safardan oldin: Doimo pasportingiz va chiptalaringiz nusxasini oling.\n2. Aeroportda: Parvozdan kamida ikki soat oldin ro‘yxatdan o‘tish stolida bo‘ling.\n3. Chamadon yig‘ishda: Muhim dorilar va qimmatbaho buyumlar doimo qo‘l yukida bo‘lishi shart, chamadonda emas!\n4. Yetib borgach: Aeroportdan chiqishdan oldin darhol yukingizni tekshiring.',
        questions: [
          {
            id: 'q-read-m10-3',
            questionUz: 'Muhim dorilar qayerda saqlanishi kerak?',
            options: ['Qo‘l yukida (Handgepäck)', 'Katta chamadonda', 'Mehmonxonada'],
            correctIndex: 0,
            explanationUz: 'Maslahatda "gehören immer ins Handgepäck" (doimo qo‘l yukida bo‘lsin) deb yozilgan.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-m10-3',
      lessonId: 'les-30',
      levelCode: 'a2-1',
      taskDe: 'Erzählen Sie von einer Reise oder einem Ausflug.',
      taskUz: 'Biror sayohatingiz yoki sayringiz haqida hikoya qiling.',
      instructionUz: '"vor dem...", "nach der...", "beim..." va "in..." predloglaridan foydalaning.',
      hints: ['Vor der Reise war ich...', 'Nach der Ankunft...', 'Beim Ausflug...'],
      sampleSolutionDe: 'Vor der Reise habe ich meinen Koffer gepackt. Beim Flug habe ich ein Buch gelesen. Nach der Landung in Frankfurt habe ich meine Freunde getroffen. In zwei Wochen fahre ich wieder nach Deutschland.',
      scaffold: {
        openingDe: 'Meine Reise:',
        closingDe: 'Das war ein tolles Erlebnis!',
        usefulPhrasesDe: ['Vor dem Flug...', 'Nach der Ankunft...', 'Beim Essen...']
      }
    },
    shadowing: [
      {
        id: 'sha-m10-3',
        lessonId: 'les-30',
        levelCode: 'a2-1',
        sentenceDe: 'Vor dem Flug waren wir sehr aufgeregt, aber nach der Landung hat alles super geklappt.',
        translationUz: 'Parvozdan oldin biz juda hayajonda edik, lekin qo‘ngandan so‘ng hammasi ajoyib o‘tdi.',
        phoneticHint: '[For dem Flug va-ren vir zer auf-ge-regt, a-ber nah der Lan-dung hat al-les zu-per ge-klapt]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-m10-3-q1',
        type: 'fill-blank',
        questionUz: 'To‘g‘ri Dativ shaklini qo‘ying: "Wir frühstücken vor _____ Abfahrt."',
        blankSentence: 'Wir frühstücken vor [blank] Abfahrt.',
        options: ['der', 'dem', 'den', 'die'],
        correctAnswer: 'der',
        explanationUz: 'die Abfahrt (Feminin) Dativda "der" bo‘ladi: vor der Abfahrt.',
        mistakeTipUz: '❌ Feminin Dativda "der" oladi: vor der Abfahrt.'
      },
      {
        id: 'prac-m10-3-q2',
        type: 'multiple-choice',
        questionUz: '"Ular bir oydan keyin kelishadi" gapi qaysi?',
        options: [
          'Sie kommen in einem Monat.',
          'Sie kommen vor einem Monat.',
          'Sie kommen nach einem Monat.',
          'Sie kommen bei einem Monat.'
        ],
        correctAnswer: 'Sie kommen in einem Monat.',
        explanationUz: 'Kelajakda "...dan keyin" ma‘nosida "in + Dativ" (in einem Monat) ishlatiladi.',
        mistakeTipUz: '❌ Kelajakdagi muddat uchun "in" ishlatiladi: in einem Monat.'
      },
      {
        id: 'prac-m10-3-q3',
        type: 'word-order',
        questionUz: 'Gapni to‘g‘ri tartibda tuzing:',
        scrambledWords: ['Nach', 'trinke', 'der', 'Kaffee', 'Arbeit', 'ich'],
        correctAnswer: 'Nach der Arbeit trinke ich Kaffee',
        explanationUz: 'Nach der Arbeit (1) + trinke (2) + ich (3) + Kaffee.',
        mistakeTipUz: '❌ 2-o‘rinda tuslangan fe‘l (trinke) turishi shart!'
      }
    ]
  }
];
