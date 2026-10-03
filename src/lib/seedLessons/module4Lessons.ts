import { Lesson } from '../../types/database';

export const MODULE_4_LESSONS: Lesson[] = [
  // ==========================================
  // LEKTION 10: Wie spät ist es? (Uhrzeit & Tageszeiten)
  // ==========================================
  {
    id: 'les-10',
    moduleId: 'mod-4',
    levelCode: 'a1-1',
    titleDe: 'Lektion 10: Wie spät ist es?',
    titleUz: '10-Dars: Soat necha bo‘ldi? (Vaqt, soat turlari va kun qismlari)',
    descriptionUz: 'Nemis tilida soat aytish (rasmiy: 14:30 va norasmiy: halb drei), kun qismlari (Morgen, Vormittag, Mittag, Abend) va vaqt predloglari (um, am, von... bis...).',
    orderIndex: 10,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Soat vaqtini so‘rash va aytish ("Wie spät ist es?" / "Wie viel Uhr ist es?")',
      'Rasmiy va so‘zlashuvdagi soat aytish farqini bilish (Viertel nach, halb, Viertel vor)',
      'Vaqt predloglarini (um ... Uhr, am Morgen, von ... bis ...) to‘g‘ri qo‘llash'
    ],
    warmUp: {
      situationUz: 'Poyezd bekatida turibsiz va soatingiz to‘xtab qolgan. Yonidagi yo‘lovchidan soat necha bo‘lganini so‘ramoqchisiz.',
      curiosityQuestionUz: 'Nemis tilida "soat 2 yarim bo‘ldi" deganda nemislar nima sababdan "halb zwei" (ikkining yarmi) emas, "halb drei" (uchning yarmi) deyishadi?',
      miniDialogue: [
        { speaker: 'Fahrgast', textDe: 'Entschuldigung, wie spät ist es?', textUz: 'Kechirasiz, soat necha bo‘ldi?' },
        { speaker: 'Passant', textDe: 'Es ist genau Viertel vor drei.', textUz: 'Roppa-rosa o‘n besh daqiqasi kam uch.' }
      ],
      hintUz: 'Nemis tilida "halb drei" soat 2:30 ni bildiradi (ya‘ni soat 3 gacha yarim soat qoldi degani).'
    },
    contextDialogue: {
      titleDe: 'Wann fährt der Zug ab?',
      titleUz: 'Poyezd soat nechada jo‘naydi?',
      situationUz: 'Vokzalda do‘stlar poyezd jo‘nash vaqtini muhokama qilmoqda.',
      lines: [
        { speaker: 'Simon', textDe: 'Wie viel Uhr ist es jetzt, Jonas?', textUz: 'Hozir soat necha bo‘ldi, Yonas?' },
        { speaker: 'Jonas', textDe: 'Es ist zehn nach zwei (14:10 Uhr).', textUz: 'Soat ikkidan o‘nta o‘tdi (14:10).' },
        { speaker: 'Simon', textDe: 'Und wann fährt unser Zug nach Hamburg ab?', textUz: 'Gamburgdagi poyezdimiz soat nechada jo‘naydi?' },
        { speaker: 'Jonas', textDe: 'Um vierzehn Uhr fünfundvierzig, also Viertel vor drei.', textUz: 'Soat o‘n to‘rtu qirq beshda, ya‘ni o‘n besh daqiqasi kam uchda.' },
        { speaker: 'Simon', textDe: 'Sehr gut, dann haben wir noch fünfunddreißig Minuten Zeit. Trinken wir einen Kaffee?', textUz: 'Juda soz, unda hali 35 daqiqa vaqtimiz bor ekan. Qahva ichamizmi?' },
        { speaker: 'Jonas', textDe: 'Ja gern, am Gleis 4 gibt es ein Café.', textUz: 'Ha jon deb, 4-yo‘lakda qahvaxona bor.' }
      ],
      usefulPhrases: [
        { german: 'Wie spät ist es? / Wie viel Uhr ist es?', uzbek: 'Soat necha bo‘ldi?' },
        { german: 'Es ist ... Uhr.', uzbek: 'Soat ... bo‘ldi.' },
        { german: 'halb ... / Viertel nach ... / Viertel vor ...', uzbek: '... yarim / ...dan 15 daqiqa o‘tdi / ...ga 15 daqiqa qoldi' },
        { german: 'Um wie viel Uhr? - Um ... Uhr.', uzbek: 'Soat nechada? - Soat ...da.' }
      ],
      culturalNoteUz: 'Germaniyada poyezd va transport jadvallarida doimo rasmiy 24 soatlik tizim ishlatiladi (masalan: 18:45 Uhr).'
    },
    vocabulary: [
      {
        id: 'voc-m4-1',
        lessonId: 'les-10',
        levelCode: 'a1-1',
        german: 'die Uhrzeit',
        article: 'die',
        plural: 'die Uhrzeiten',
        uzbek: 'soat vaqti',
        exampleDe: 'Wie ist die genaue Uhrzeit?',
        exampleUz: 'Aniq soat necha bo‘ldi?',
        wordType: 'noun'
      },
      {
        id: 'voc-m4-2',
        lessonId: 'les-10',
        levelCode: 'a1-1',
        german: 'die Stunde',
        article: 'die',
        plural: 'die Stunden',
        uzbek: 'soat (davomiylik, 60 daqiqa)',
        exampleDe: 'Der Unterricht dauert eine Stunde.',
        exampleUz: 'Dars bir soat davom etadi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m4-3',
        lessonId: 'les-10',
        levelCode: 'a1-1',
        german: 'die Minute',
        article: 'die',
        plural: 'die Minuten',
        uzbek: 'daqiqa, minut',
        exampleDe: 'Ich warte zehn Minuten.',
        exampleUz: 'Men o‘n daqiqa kutaman.',
        wordType: 'noun'
      },
      {
        id: 'voc-m4-4',
        lessonId: 'les-10',
        levelCode: 'a1-1',
        german: 'halb',
        article: null,
        plural: null,
        uzbek: 'yarim',
        exampleDe: 'Es ist halb fünf (16:30).',
        exampleUz: 'Soat to‘rt yarim bo‘ldi.',
        wordType: 'adjective'
      },
      {
        id: 'voc-m4-5',
        lessonId: 'les-10',
        levelCode: 'a1-1',
        german: 'das Viertel',
        article: 'das',
        plural: 'die Viertel',
        uzbek: 'chorak (15 daqiqa)',
        exampleDe: 'Viertel nach sechs (18:15).',
        exampleUz: 'Oltidan o‘n besh daqiqa o‘tdi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m4-6',
        lessonId: 'les-10',
        levelCode: 'a1-1',
        german: 'nach',
        article: null,
        plural: null,
        uzbek: '...dan o‘tdi (soatda)',
        exampleDe: 'Zehn nach acht.',
        exampleUz: 'Sakkizdan o‘nta o‘tdi.',
        wordType: 'preposition'
      },
      {
        id: 'voc-m4-7',
        lessonId: 'les-10',
        levelCode: 'a1-1',
        german: 'vor',
        article: null,
        plural: null,
        uzbek: '...ga qoldi (soatda)',
        exampleDe: 'Fünf vor neun.',
        exampleUz: 'To‘qqizga beshta qoldi.',
        wordType: 'preposition'
      },
      {
        id: 'voc-m4-8',
        lessonId: 'les-10',
        levelCode: 'a1-1',
        german: 'der Morgen',
        article: 'der',
        plural: 'die Morgen',
        uzbek: 'tong, ertalab',
        exampleDe: 'Am Morgen trinke ich Tee.',
        exampleUz: 'Ertalab choy ichaman.',
        wordType: 'noun'
      },
      {
        id: 'voc-m4-9',
        lessonId: 'les-10',
        levelCode: 'a1-1',
        german: 'der Abend',
        article: 'der',
        plural: 'die Abende',
        uzbek: 'oqshom, kechqurun',
        exampleDe: 'Am Abend bin ich zu Hause.',
        exampleUz: 'Kechqurun uyda bo‘laman.',
        wordType: 'noun'
      },
      {
        id: 'voc-m4-10',
        lessonId: 'les-10',
        levelCode: 'a1-1',
        german: 'pünktlich',
        article: null,
        plural: null,
        uzbek: 'o‘z vaqtida, aniq',
        exampleDe: 'Der Zug ist pünktlich.',
        exampleUz: 'Poyezd o‘z vaqtida keldi.',
        wordType: 'adjective'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'Soat aytishning ikki xil usuliga (rasmiy va so‘zlashuv) e‘tibor bering:',
      discoveryExamples: [
        { german: '14:15 -> vierzehn Uhr fünfzehn (Offiziell)', highlight: 'Uhr', uzbek: 'Rasmiy: soat so‘zi o‘rtada' },
        { german: '14:15 -> Viertel nach zwei (Inoffiziell)', highlight: 'Viertel nach', uzbek: 'Og‘zaki: ikkidan 15 daqiqa o‘tdi' },
        { german: '14:30 -> halb drei', highlight: 'halb drei', uzbek: 'Og‘zaki: uchni yarmi (2:30)!' }
      ],
      patternExplanationUz: 'Rasmiy vaqt 24 soatlik tizimda (14:30 = vierzehn Uhr dreißig). Og‘zaki so‘zlashuvda esa 12 soatlik: nach (o‘tdi), vor (qoldi), halb (yarim).',
      ruleFormulaUz: 'Vaqt uchun predlog: UM (um 8 Uhr); Sutka qismlari uchun: AM (am Morgen, am Abend)'
    },
    grammar: [
      {
        id: 'gra-m4-1',
        lessonId: 'les-10',
        levelCode: 'a1-1',
        titleDe: 'Die Uhrzeit & Temporale Präpositionen (um, am, von... bis)',
        titleUz: 'Soat vaqti va vaqt predloglari (um, am, von... bis)',
        summaryUz: 'Aniq soat vaqti oldidan "um", sutka qismlari va kunlar oldidan "am", muddat uchun esa "von ... bis ..." ishlatiladi.',
        explanationUz: `**1. Soat vaqti (Inoffizielle Uhrzeit — So‘zlashuvda):**
- 10:05 -> *fünf **nach** zehn* (o‘ndan 5 daqiqa o‘tdi)
- 10:15 -> ***Viertel nach** zehn* (o‘ndan 15 daqiqa o‘tdi)
- 10:20 -> *zwanzig **nach** zehn*
- 10:30 -> ***halb elf*** (soat 11 gacha yarim soat qoldi = 10 yarim!)
- 10:40 -> *zwanzig **vor** elf*
- 10:45 -> ***Viertel vor** elf* (o‘n birga 15 daqiqa qoldi)
- 10:55 -> *fünf **vor** elf*

**2. Rasmiy soat (Offizielle Uhrzeit — Radio, vokzal, TV):**
- 14:15 -> *vierzehn Uhr fünfzehn*
- 16:30 -> *sechzehn Uhr dreißig*
- 20:45 -> *zwanzig Uhr fünfundvierzig*

**3. Vaqt predloglari:**
- **um** + aniq soat: *um 8 Uhr, um halb neun*
- **am** + sutka qismlari va kunlar: *am Morgen, am Vormittag, am Nachmittag, am Abend* (*Istisno:* **in der Nacht**!)
- **von ... bis ...** (dan ... gacha): *von 9 bis 17 Uhr*`,
        wordOrderRuleUz: 'Vaqt so‘rog‘i "Um wie viel Uhr?" yoki "Wann?": "Wann beginnt der Kurs? - Um neun Uhr."',
        tables: [
          {
            title: 'Soat vaqtlari qiyosiy jadvali',
            headers: ['Vaqt', 'Offiziell (Rasmiy)', 'Inoffiziell (Og‘zaki)'],
            rows: [
              ['08:00', 'acht Uhr', 'acht Uhr'],
              ['08:15', 'acht Uhr fünfzehn', 'Viertel nach acht'],
              ['08:30', 'acht Uhr dreißig', 'halb neun'],
              ['08:45', 'acht Uhr fünfundvierzig', 'Viertel vor neun'],
              ['08:50', 'acht Uhr fünfzig', 'zehn vor neun']
            ]
          }
        ],
        examples: [
          { german: 'Der Kurs fängt um neun Uhr an.', uzbek: 'Dars soat to‘qqizda boshlanadi.', highlight: 'um neun Uhr' },
          { german: 'Ich arbeite von Montag bis Freitag.', uzbek: 'Men dushanbadan jumagacha ishlayman.', highlight: 'von Montag bis Freitag' }
        ],
        commonMistakes: [
          {
            incorrect: 'Es ist halb zwei (soat 2:30 demoqchi bo‘lsa).',
            correct: 'Es ist halb drei.',
            explanationUz: '2:30 nemis tilida "halb drei" bo‘ladi (keyingi soat aytiladi).'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Wann öffnet die Bank?',
      titleUz: 'Bank soat nechada ochiladi?',
      situationUz: 'Mijoz bank ish vaqtini bilish uchun ma‘lumotnomaga qo‘ng‘iroq qilmoqda.',
      audioTranscriptDe: 'Kunde: Guten Tag, ich möchte wissen: Wie sind Ihre Öffnungszeiten?\nAngestellte: Guten Tag! Wir haben von Montag bis Freitag von acht Uhr dreißig bis siebzehn Uhr geöffnet.\nKunde: Haben Sie auch am Samstag geöffnet?\nAngestellte: Nein, am Wochenende ist die Bank geschlossen.',
      translationUz: 'Mijoz: Xayrli kun, bilmoqchi edim: Ish vaqtlaringiz qanday?\nXodim: Xayrli kun! Dushanbadan jumagacha 8:30 dan 17:00 gacha ochiqmiz.\nMijoz: Shanba kuni ham ochiqmisizlar?\nXodim: Yo‘q, dam olish kunlari bank yopiq bo‘ladi.',
      stage1Global: {
        instructionUz: '1-Bosqich: Suhbatning asosiy maqsadini belgilang.',
        questionUz: 'Mijoz nima haqida so‘ramoqda?',
        options: ['Kredit olish haqida', 'Bankning ish vaqtlari haqida (Öffnungszeiten)', 'Pul o‘tkazmasi haqida', 'Hisob ochish haqida'],
        correctIndex: 1,
        explanationUz: 'Mijoz "Wie sind Ihre Öffnungszeiten?" deb so‘radi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Aniq soatni aniqlang.',
        questions: [
          {
            id: 'l10-q1',
            questionUz: 'Bank ertalab soat nechada ochiladi?',
            options: ['Soat 8:00 da', 'Soat 8:30 da (acht Uhr dreißig)', 'Soat 9:00 da', 'Soat 10:00 da'],
            correctIndex: 1,
            explanationUz: 'Xodim "von acht Uhr dreißig bis siebzehn Uhr" dedi.'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Kunde', textDe: 'Wie sind Ihre Öffnungszeiten?', textUz: 'Ish vaqtlaringiz qanday?' },
          { speaker: 'Angestellte', textDe: 'Von 8:30 bis 17:00 Uhr.', textUz: '8:30 dan 17:00 gacha.' }
        ],
        keyVocabulary: [
          { german: 'die Öffnungszeiten', uzbek: 'ish / qabul vaqtlari' },
          { german: 'geschlossen', uzbek: 'yopiq' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-m4-1',
        lessonId: 'les-10',
        titleDe: 'Termine für heute',
        titleUz: 'Bugungi uchrashuvlar',
        textDe: 'Mein Tag ist heute sehr voll: Um acht Uhr habe ich Deutschunterricht an der Sprachschule. Der Unterricht dauert bis elf Uhr. Um zwölf Uhr dreißig treffe ich meinen Kollegen zum Mittagessen. Am Nachmittag von vierzehn bis siebzehn Uhr arbeite ich am Computer. Und am Abend um Viertel vor acht gehe ich ins Fitnessstudio.',
        translationUz: 'Bugungi kunim juda to‘la: Soat sakkizda til maktabida nemis tili darsim bor. Dars soat o‘n birgacha davom etadi. Soat o‘n ikki yarimda tushlik uchun hamkasbim bilan uchrashaman. Tushdan keyin 14:00 dan 17:00 gacha kompyuterda ishlayman. Va kechqurun o‘n besh daqiqasi kam sakkizda fitnes klubiga boraman.',
        vocabularyHints: [
          { german: 'voll', uzbek: 'to‘la' },
          { german: 'dauern', uzbek: 'davom etmoq' },
          { german: 'das Fitnessstudio', uzbek: 'fitnes klubi' }
        ],
        questions: [
          {
            id: 'rq-m4-1',
            questionUz: 'Muallif soat nechada fitnesga boradi?',
            options: ['19:00 da', '19:45 da (Viertel vor acht)', '20:15 da', '18:30 da'],
            correctIndex: 1,
            explanationUz: 'Matnda "um Viertel vor acht (19:45) gehe ich ins Fitnessstudio" deb yozilgan.'
          }
        ]
      }
    ],
    writingScaffold: {
      taskTitleUz: 'Bugungi kun jadvalingizni yozish',
      promptUz: 'Bugun nimalar qilishingizni soatlar bilan (kamida 3 ta soat vaqti) yozing ("um... Uhr", "von... bis...").',
      taskInstructionsUz: '1. Ertalab soat nechada turishingizni yozing\n2. Qachon ish/o‘qish boshlanishini ayting\n3. Kechqurun nima qilishingizni yozing',
      controlledScaffolding: {
        stepTitleUz: 'Jumla namunalari:',
        sentenceStarters: [
          'Um... Uhr stehe ich auf.',
          'Von... bis... Uhr lerne / arbeite ich.',
          'Am Abend um... Uhr...'
        ]
      },
      usefulVocabulary: [
        { german: 'um ... Uhr', uzbek: 'soat ...da' },
        { german: 'von ... bis ...', uzbek: '...dan ...gacha' },
        { german: 'am Morgen / am Abend', uzbek: 'ertalab / kechqurun' }
      ],
      modelAnswerDe: 'Heute stehe ich um sieben Uhr auf. Von neun bis zwölf Uhr habe ich Unterricht. Am Nachmittag um halb vier treffe ich Freunde. Um zweiundzwanzig Uhr gehe ich schlafen.',
      modelAnswerUz: 'Bugun soat yettida uyg‘onaman. Soat to‘qqizdan o‘n ikkigacha darsim bor. Tushdan keyin soat uch yarimda do‘stlar bilan uchrashaman. Soat 22:00 da uxlashga yotaman.'
    },
    shadowing: [
      {
        id: 'sha-m4-1',
        lessonId: 'les-10',
        levelCode: 'a1-1',
        sentenceDe: 'Wie spät ist es? - Es ist genau halb drei.',
        translationUz: 'Soat necha bo‘ldi? - Roppa-rosa ikki yarim bo‘ldi.',
        phoneticHint: '[Vi: shpe:t ist es? - Es ist ge-nau halp dray.]',
        orderIndex: 1
      },
      {
        id: 'sha-m4-2',
        lessonId: 'les-10',
        levelCode: 'a1-1',
        sentenceDe: 'Der Unterricht beginnt pünktlich um neun Uhr.',
        translationUz: 'Dars o‘z vaqtida soat to‘qqizda boshlanadi.',
        phoneticHint: '[Der Un-ter-riçt be-ginnt pynkt-liç um noyn U:r.]',
        orderIndex: 2
      }
    ],
    practice: [
      {
        id: 'ex-m4-1',
        lessonId: 'les-10',
        type: 'multiple-choice',
        questionUz: '"halb fünf" so‘zlashuvda qaysi vaqtni bildiradi?',
        options: ['05:30', '04:30', '05:15', '04:15'],
        correctAnswer: '04:30',
        explanationUz: '"halb fünf" 04:30 ni bildiradi (soat beshgacha yarim soat qoldi).',
        mistakeTipUz: '❌ "halb fünf" bu 4:30 dir.'
      },
      {
        id: 'ex-m4-2',
        lessonId: 'les-10',
        type: 'fill-blank',
        questionUz: 'Aniq soat vaqti oldidan qo‘yiladigan to‘g‘ri predlogni tanlang: "Der Film fängt _____ 20 Uhr an."',
        blankSentence: 'Der Film fängt [blank] 20 Uhr an.',
        options: ['um', 'am', 'im', 'von'],
        correctAnswer: 'um',
        explanationUz: 'Aniq soat ko‘rsatkichi oldidan doimo "um" predlogi keladi: "um 20 Uhr".',
        mistakeTipUz: '❌ Soat oldidan "um", kunlar oldidan "am" ishlatiladi.'
      }
    ],
    listening: [],
    writing: []
  },

  // ==========================================
  // LEKTION 11: Mein Tag (Tagesablauf & trennbare Verben)
  // ==========================================
  {
    id: 'les-11',
    moduleId: 'mod-4',
    levelCode: 'a1-1',
    titleDe: 'Lektion 11: Mein Tag',
    titleUz: '11-Dars: Mening kunim (Kun tartibi va ajraladigan fe‘llar)',
    descriptionUz: 'Kun tartibi, ertalabdan kechgacha bo‘lgan harakatlar, ajraladigan fe‘llar (Trennbare Verben: aufstehen, anfangen, anrufen, einkaufen, fernsehen) va ularning gapdagi o‘rni.',
    orderIndex: 11,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Kun tartibingizni ertalabdan kechgacha batafsil tasvirlay olish',
      'Ajraladigan prefikslarni (auf-, an-, ein-, fern-, mit-) taniy olish',
      'Ajraladigan fe‘llar bilan gap tuzganda prefiksni gap oxiriga qo‘yish qoidasini qo‘llash'
    ],
    warmUp: {
      situationUz: 'Do‘stingiz bilan odatiy ish kuni qanday o‘tishi haqida suhbatlashyapsiz. Soat nechada turasiz va kechqurun nima qilasiz?',
      curiosityQuestionUz: 'Nemis tilida "Men soat yettida uyg‘onaman" deganda nega "Ich stehe um sieben Uhr auf" bo‘lib, "auf" eng oxiriga ketadi?',
      miniDialogue: [
        { speaker: 'Felix', textDe: 'Wann stehst du morgens auf?', textUz: 'Ertalab soat nechada turasan?' },
        { speaker: 'Sardor', textDe: 'Ich stehe meistens um 6:30 Uhr auf.', textUz: 'Men odatda 6:30 da o‘rnimdan turaman.' }
      ],
      hintUz: 'Ajraladigan fe‘llarning prefiksi darak gapda har doim gapning ENG OXIRIDA turadi.'
    },
    contextDialogue: {
      titleDe: 'Ein normaler Arbeitstag von Felix',
      titleUz: 'Felixning odatiy ish kuni',
      situationUz: 'Felix yangi hamkasbiga o‘zining kun tartibini so‘zlab bermoqda.',
      lines: [
        { speaker: 'Sardor', textDe: 'Felix, wie sieht dein normaler Tag aus?', textUz: 'Felix, sening odatiy kuning qanday o‘tadi?' },
        { speaker: 'Felix', textDe: 'Mein Wecker klingelt um sechs Uhr. Ich stehe sofort auf und dusche.', textUz: 'Budilnikim soat oltida jiringlaydi. Darhol o‘rnimdan turaman va dush qabul qilaman.' },
        { speaker: 'Sardor', textDe: 'Frühstückst du zu Hause?', textUz: 'Uyda nonushta qilasanmi?' },
        { speaker: 'Felix', textDe: 'Ja, ich frühstücke kurz. Um 7:30 Uhr fahre ich los. Die Arbeit fängt um 8:15 Uhr an.', textUz: 'Ha, qisqacha nonushta qilaman. 7:30 da yo‘lga chiqaman. Ish 8:15 da boshlanadi.' },
        { speaker: 'Sardor', textDe: 'Und wann hörst du mit der Arbeit auf?', textUz: 'Ishni soat nechada tugatasan?' },
        { speaker: 'Felix', textDe: 'Um 17 Uhr höre ich auf. Dann kaufe ich im Supermarkt ein und abends sehe ich fern.', textUz: 'Soat 17:00 da tugataman. Keyin supermarketda xarid qilaman va kechqurun televizor ko‘raman.' }
      ],
      usefulPhrases: [
        { german: 'aufstehen (steht ... auf)', uzbek: 'o‘rnidan turmoq (uyqudan)' },
        { german: 'anfangen (fängt ... an)', uzbek: 'boshlanmoq' },
        { german: 'aufhören (hört ... auf)', uzbek: 'tugatmoq, yakunlamoq' },
        { german: 'einkaufen (kauft ... ein)', uzbek: 'bozorlik qilmoq' },
        { german: 'fernsehen (sieht ... fern)', uzbek: 'televizor ko‘rmoq' },
        { german: 'anrufen (ruft ... an)', uzbek: 'telefon qilmoq' }
      ],
      culturalNoteUz: 'Germaniyada ish kuni erta boshlanishi odatiy hol. Ishdan keyin xarid qilish va o‘z vaqtida dam olishga katta ahamiyat beriladi.'
    },
    vocabulary: [
      {
        id: 'voc-m4-11',
        lessonId: 'les-11',
        levelCode: 'a1-1',
        german: 'aufstehen',
        article: null,
        plural: null,
        uzbek: 'o‘rnidan turmoq (uyqudan)',
        exampleDe: 'Ich stehe um sieben Uhr auf.',
        exampleUz: 'Men soat yettida turaman.',
        wordType: 'verb'
      },
      {
        id: 'voc-m4-12',
        lessonId: 'les-11',
        levelCode: 'a1-1',
        german: 'anfangen',
        article: null,
        plural: null,
        uzbek: 'boshlanmoq, boshlamoq',
        exampleDe: 'Der Film fängt gleich an.',
        exampleUz: 'Film hoziroq boshlanadi.',
        wordType: 'verb'
      },
      {
        id: 'voc-m4-13',
        lessonId: 'les-11',
        levelCode: 'a1-1',
        german: 'aufhören',
        article: null,
        plural: null,
        uzbek: 'to‘xtatmoq, tugatmoq',
        exampleDe: 'Wann hörst du auf?',
        exampleUz: 'Qachon tugatasan?',
        wordType: 'verb'
      },
      {
        id: 'voc-m4-14',
        lessonId: 'les-11',
        levelCode: 'a1-1',
        german: 'einkaufen',
        article: null,
        plural: null,
        uzbek: 'xarid qilmoq, bozorlik qilmoq',
        exampleDe: 'Wir kaufen am Nachmittag ein.',
        exampleUz: 'Biz tushdan keyin xarid qilamiz.',
        wordType: 'verb'
      },
      {
        id: 'voc-m4-15',
        lessonId: 'les-11',
        levelCode: 'a1-1',
        german: 'fernsehen',
        article: null,
        plural: null,
        uzbek: 'televizor ko‘rmoq',
        exampleDe: 'Er sieht jeden Abend fern.',
        exampleUz: 'U har oqshom televizor ko‘radi.',
        wordType: 'verb'
      },
      {
        id: 'voc-m4-16',
        lessonId: 'les-11',
        levelCode: 'a1-1',
        german: 'anrufen',
        article: null,
        plural: null,
        uzbek: 'qo‘ng‘iroq qilmoq, telefon qilmoq',
        exampleDe: 'Ich rufe dich morgen an.',
        exampleUz: 'Ertaga senga telefon qilaman.',
        wordType: 'verb'
      },
      {
        id: 'voc-m4-17',
        lessonId: 'les-11',
        levelCode: 'a1-1',
        german: 'mitkommen',
        article: null,
        plural: null,
        uzbek: 'birga bormoq / kelmoq',
        exampleDe: 'Kommst du mit ins Kino?',
        exampleUz: 'Kinoga birga borasanmi?',
        wordType: 'verb'
      },
      {
        id: 'voc-m4-18',
        lessonId: 'les-11',
        levelCode: 'a1-1',
        german: 'einschlafen',
        article: null,
        plural: null,
        uzbek: 'uyquga ketmoq',
        exampleDe: 'Ich schlafe schnell ein.',
        exampleUz: 'Men tezda uyquga ketaman.',
        wordType: 'verb'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'Gapdagi fe‘l va uning old qo‘shimchasi (prefiksi) joylashuviga e‘tibor bering:',
      discoveryExamples: [
        { german: 'Ich stehe um 7 Uhr auf.', highlight: 'stehe ... auf', uzbek: 'aufstehen fe‘li ikkiga bo‘lindi!' },
        { german: 'Er kauft im Supermarkt ein.', highlight: 'kauft ... ein', uzbek: 'einkaufen: kauft 2-o‘rinda, ein oxirida!' },
        { german: 'Sie ruft ihre Mutter an.', highlight: 'ruft ... an', uzbek: 'anrufen: ruft 2-o‘rinda, an oxirida!' }
      ],
      patternExplanationUz: 'Nemis tilida ko‘plab fe‘llarning prefiksi (auf-, an-, ein-, fern-, mit-) ajraladi. Fe‘l negizi 2-o‘rinda tuslanadi, prefiks esa GAPNING ENG OXIRIGA boradi!',
      ruleFormulaUz: 'Fe‘l negizi (2-o‘rinda) + ... + Prefiks (gapning eng oxirida)'
    },
    grammar: [
      {
        id: 'gra-m4-2',
        lessonId: 'les-11',
        levelCode: 'a1-1',
        titleDe: 'Trennbare Verben im Präsens',
        titleUz: 'Ajraladigan fe‘llar (Trennbare Verben)',
        summaryUz: 'Ajraladigan fe‘llar gapda ikkiga bo‘linadi: tuslangan fe‘l 2-o‘ringa keladi, ajraluvchi old qo‘shimcha (prefiks) esa gapning eng oxirida turadi.',
        explanationUz: `Nemis tilidagi eng muhim grammatik hodisalardan biri — **Trennbare Verben** (ajraladigan fe‘llar).

Eng ko‘p uchraydigan ajraluvchi prefikslar:
- **auf-** (*aufstehen, aufhören, aufmachen*)
- **an-** (*anfangen, anrufen, ankommen*)
- **ein-** (*einkaufen, einladen, einschlafen*)
- **fern-** (*fernsehen*)
- **mit-** (*mitkommen, mitbringen, mitmachen*)
- **ab-** (*abfahren, abholen*)

**Gapdagi o‘rni (Satzklammer — Qavs qoidasi):**
1. Fe‘lning tuslanuvchi o‘zagi darak gapda **2-o‘rinda** turadi.
2. Ajralgan prefiks esa gapning **ENG OXIRIDA** joylashadi.

Misollar:
- *Ich **stehe** morgens um sieben Uhr **auf**.*
- *Meine Schwester **ruft** mich heute Abend **an**.*
- *Am Wochenende **sieht** er bis Mitternacht **fern**.*

**So‘roq gapda (Ja/Nein-Frage):**
- ***Kommst** du heute Abend **mit**?* (Bugun kechqurun birga borasanmi?)`,
        wordOrderRuleUz: 'Ajraluvchi prefiks doimo gapning oxirgi so‘zi bo‘ladi!',
        tables: [
          {
            title: 'Ajraladigan fe‘llar namunalari',
            headers: ['Infinitiv', 'Tuslangan shakli', 'O‘zbekcha tarjimasi'],
            rows: [
              ['aufstehen', 'Ich stehe um 7 Uhr auf.', 'Men 7 da turaman.'],
              ['einkaufen', 'Er kauft Brot ein.', 'U non xarid qiladi.'],
              ['anrufen', 'Wir rufen Freunde an.', 'Biz do‘stlarga qo‘ng‘iroq qilamiz.'],
              ['fernsehen', 'Du siehst am Abend fern.', 'Sen kechqurun televizor ko‘rasan.'],
              ['mitkommen', 'Kommst du mit?', 'Birga borasanmi?']
            ]
          }
        ],
        examples: [
          { german: 'Der Kurs fängt um neun Uhr an.', uzbek: 'Kurs soat to‘qqizda boshlanadi.', highlight: 'fängt ... an' },
          { german: 'Ich schlafe immer sehr schnell ein.', uzbek: 'Men doim juda tez uxlab qolaman.', highlight: 'schlafe ... ein' }
        ],
        commonMistakes: [
          {
            incorrect: 'Ich aufstehe um sieben Uhr.',
            correct: 'Ich stehe um sieben Uhr auf.',
            explanationUz: 'Darak gapda "auf-" hech qachon fe‘l oldida qolmaydi, gap oxiriga suriladi.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Ein voller Tag',
      titleUz: 'Tig‘iz kun',
      situationUz: 'Nora do‘stiga o‘zining bugungi band kun tartibi haqida gapirib bermoqda.',
      audioTranscriptDe: 'Nora: Hallo David! Heute habe ich wirklich keine Minute Zeit.\nDavid: Warum denn? Was machst du heute alles?\nNora: Ich stehe um sechs Uhr auf, dann fängt um acht meine Arbeit an. Um siebzehn Uhr höre ich auf, dann kaufe ich im Supermarkt ein. Am Abend rufe ich noch meine Eltern an.\nDavid: Puh, das ist wirklich ein voller Tag!',
      translationUz: 'Nora: Salom Devid! Bugun bir daqiqa ham bo‘sh vaqtim yo‘q.\nDevid: Nega endi? Bugun nimalar qilasan?\nNora: Soat oltida turaman, keyin sakkizda ishim boshlanadi. Soat o‘n yettida tugataman, keyin supermarketdan xarid qilaman. Kechqurun esa ota-onamga telefon qilaman.\nDevid: Oho, bu haqiqatan ham tig‘iz kun ekan!',
      stage1Global: {
        instructionUz: '1-Bosqich: Noraning kayfiyati va bandligini tushuning.',
        questionUz: 'Noraning bugungi kuni qanday o‘tmoqda?',
        options: ['Butunlay bo‘sh', 'Juda band va tig‘iz (ein voller Tag)', 'Kasalxonada yotibdi', 'Sayohatda'],
        correctIndex: 1,
        explanationUz: 'U "Heute habe ich wirklich keine Minute Zeit" dedi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Tafsilotlarni aniqlang.',
        questions: [
          {
            id: 'l11-q1',
            questionUz: 'Nora kechqurun kimga qo‘ng‘iroq qiladi?',
            options: ['Hamkasbiga', 'Ota-onasiga (meine Eltern)', 'Shifokorga', 'O‘qituvchisiga'],
            correctIndex: 1,
            explanationUz: 'U "Am Abend rufe ich noch meine Eltern an" dedi.'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'David', textDe: 'Was machst du heute alles?', textUz: 'Bugun nimalar qilasan?' },
          { speaker: 'Nora', textDe: 'Ich stehe um sechs Uhr auf.', textUz: 'Soat oltida turaman.' }
        ],
        keyVocabulary: [
          { german: 'keine Minute Zeit', uzbek: 'bir daqiqa ham vaqt yo‘q' },
          { german: 'die Eltern', uzbek: 'ota-ona' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-m4-2',
        lessonId: 'les-11',
        titleDe: 'Mein Tagesablauf als Student',
        titleUz: 'Talaba sifatidagi kun tartibim',
        textDe: 'Ich heiße Karim und studiere in Berlin. Mein Tag fängt früh an: Ich stehe um 6:30 Uhr auf. Zuerst frühstücke ich und höre Radio. Um 7:45 Uhr fahre ich mit der U-Bahn zur Universität. Die Vorlesung beginnt um 8:30 Uhr. Nach der Uni kaufe ich oft im Supermarkt ein oder gehe in die Bibliothek. Am Abend koche ich mit meinen Mitbewohnern und wir sehen zusammen fern. Um 23 Uhr schlafe ich ein.',
        translationUz: 'Mening ismim Karim va men Berlinda tahsil olaman. Kunim erta boshlanadi: Men 6:30 da o‘rnimdan turaman. Avval nonushta qilaman va radio tinglayman. 7:45 da metroda universitetga boraman. Ma‘ruza 8:30 da boshlanadi. Universitetdan so‘ng ko‘pincha supermarketda xarid qilaman yoki kutubxonaga boraman. Kechqurun xonadoshlarim bilan ovqat pishiraman va birga televizor ko‘ramiz. Soat 23:00 da uyquga ketaman.',
        vocabularyHints: [
          { german: 'die Vorlesung', uzbek: 'ma‘ruza, dars' },
          { german: 'der Mitbewohner', uzbek: 'xonadosh' },
          { german: 'die Bibliothek', uzbek: 'kutubxona' }
        ],
        questions: [
          {
            id: 'rq-m4-2',
            questionUz: 'Karim universitetdan so‘ng nima qiladi?',
            options: ['Uxlaydi', 'Supermarketda xarid qiladi yoki kutubxonaga boradi', 'Uyga ketadi', 'Tennis o‘ynaydi'],
            correctIndex: 1,
            explanationUz: 'Matnda "kaufe ich oft im Supermarkt ein oder gehe in die Bibliothek" deyilgan.'
          }
        ]
      }
    ],
    writingScaffold: {
      taskTitleUz: 'O‘z kun tartibingiz haqida yozish',
      promptUz: 'Kundalik harakatlaringiz haqida kamida 2 ta ajraladigan fe‘l (aufstehen, einkaufen, fernsehen...) ishlatib 3-4 jumla yozing.',
      taskInstructionsUz: '1. Soat nechada turishingizni yozing\n2. Ish yoki o‘qish qachon boshlanishini ayting\n3. Kechqurun nima qilishingizni yozing',
      controlledScaffolding: {
        stepTitleUz: 'Jumla namunalari:',
        sentenceStarters: [
          'Ich stehe jeden Tag um... Uhr auf.',
          'Meine Arbeit fängt um... Uhr an.',
          'Am Abend kaufe ich... ein.',
          'Um... Uhr sehe ich fern.'
        ]
      },
      usefulVocabulary: [
        { german: 'aufstehen', uzbek: 'o‘rnidan turmoq' },
        { german: 'anfangen', uzbek: 'boshlanmoq' },
        { german: 'fernsehen', uzbek: 'televizor ko‘rmoq' }
      ],
      modelAnswerDe: 'Ich stehe jeden Morgen um sieben Uhr auf. Mein Deutschkurs fängt um neun Uhr an. Nach dem Kurs kaufe ich im Supermarkt ein. Am Abend sehe ich fern und um dreiundzwanzig Uhr schlafe ich ein.',
      modelAnswerUz: 'Men har tong soat yettida turaman. Nemis tili kursim soat to‘qqizda boshlanadi. Kursdan so‘ng supermarketda xarid qilaman. Kechqurun televizor ko‘raman va 23:00 da uxlayman.'
    },
    shadowing: [
      {
        id: 'sha-m4-3',
        lessonId: 'les-11',
        levelCode: 'a1-1',
        sentenceDe: 'Ich stehe jeden Tag um sieben Uhr auf und frühstücke.',
        translationUz: 'Men har kuni soat yettida turaman va nonushta qilaman.',
        phoneticHint: '[Iç shte:-e ye:-den Tak um zi:-ben U:r auf unt fry:-shtyk-ke.]',
        orderIndex: 1
      },
      {
        id: 'sha-m4-4',
        lessonId: 'les-11',
        levelCode: 'a1-1',
        sentenceDe: 'Wann fängt der Kurs an und wann hört er auf?',
        translationUz: 'Kurs qachon boshlanadi va qachon tugaydi?',
        phoneticHint: '[Van fengt der Kurs an unt van hø:rt er auf?]',
        orderIndex: 2
      }
    ],
    practice: [
      {
        id: 'ex-m4-3',
        lessonId: 'les-11',
        type: 'word-order',
        questionUz: 'Ajraladigan fe‘lli gapni to‘g‘ri tartibda joylashtiring (Prefiks oxirida bo‘lsin!):',
        scrambledWords: ['um', 'Ich', 'stehe', 'auf', 'sieben', 'Uhr'],
        correctAnswer: 'Ich stehe um sieben Uhr auf',
        explanationUz: 'Ich (1) + stehe (2) + um sieben Uhr (3) + auf (oxirida).',
        mistakeTipUz: '❌ Ajraladigan fe‘l prefiksi "auf" gapning eng oxirida turishi kerak.'
      },
      {
        id: 'ex-m4-4',
        lessonId: 'les-11',
        type: 'fill-blank',
        questionUz: '"anrufen" fe‘lining prefiksini to‘g‘ri qo‘ying: "Ich rufe dich heute Abend _____."',
        blankSentence: 'Ich rufe dich heute Abend [blank].',
        options: ['an', 'auf', 'ein', 'aus'],
        correctAnswer: 'an',
        explanationUz: '"anrufen" fe‘lining ajraluvchi prefiksi "an" bo‘lib, gap oxiriga boradi.',
        mistakeTipUz: '❌ "anrufen" fe‘li uchun "an" prefiksi ishlatiladi.'
      }
    ],
    listening: [],
    writing: []
  },

  // ==========================================
  // LEKTION 12: Willkommen in meiner Wohnung! (Wohnung & Zimmer)
  // ==========================================
  {
    id: 'les-12',
    moduleId: 'mod-4',
    levelCode: 'a1-1',
    titleDe: 'Lektion 12: Willkommen in meiner Wohnung!',
    titleUz: '12-Dars: Xonadonimga xush kelibsiz! (Kvartira, xonalar va ijara)',
    descriptionUz: 'Kvartira va xonalar (Wohnzimmer, Schlafzimmer, Küche, Bad, Flur, Balkon), sifatlar (groß, klein, hell, dunkel, ruhig, laut) va uy-joy e‘lonlari.',
    orderIndex: 12,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Xonadon xonalari nomlarini bilish (die Küche, das Bad, das Wohnzimmer, das Schlafzimmer)',
      'Kvartirani sifatlar bilan tasvirlash (hell, ruhig, modern, teuer, billig)',
      'Oddiy uy-joy e‘lonlarini (Zimmer, Miete, Nebenkosten) tushuna olish'
    ],
    warmUp: {
      situationUz: 'Yangi kvartiraga ko‘chib o‘tdingiz va uy to‘yi (Einweihungsparty) munosabati bilan do‘stlaringizni mehmonga chaqirdingiz.',
      curiosityQuestionUz: 'Nemis xonadonlarida nega hammom (Bad) va hojatxona (Toilette) ko‘pincha bitta xonada bo‘ladi va bu nemischa nima deyiladi?',
      miniDialogue: [
        { speaker: 'Gast', textDe: 'Herzlich willkommen! Deine Wohnung ist wirklich wunderschön!', textUz: 'Xush ko‘rdik! Kvartirang haqiqatan ham juda ajoyib!' },
        { speaker: 'Mieter', textDe: 'Danke schön! Kommt rein, hier ist das Wohnzimmer.', textUz: 'Rahmat! Kiringlar, mana bu mehmonxona.' }
      ],
      hintUz: 'Germaniyada poyabzal bilan uyga kirish ba‘zi xonadonlarda qabul qilinmaydi, mezbon ko‘pincha shippak taklif qiladi.'
    },
    contextDialogue: {
      titleDe: 'Wohnungsbesichtigung in München',
      titleUz: 'Münxenda kvartira ko‘rish',
      situationUz: 'Talaba Sardor ijaraga berilayotgan 2 xonali kvartirani ko‘zdan kechirmoqda.',
      lines: [
        { speaker: 'Vermieter', textDe: 'Guten Tag, Herr Rahimov! Kommen Sie bitte rein.', textUz: 'Xayrli kun, janob Rahimov! Iltimos, ichkariga kiring.' },
        { speaker: 'Sardor', textDe: 'Guten Tag! Vielen Dank. Wie groß ist die Wohnung?', textUz: 'Xayrli kun! Katta rahmat. Kvartira necha kvadrat metr?' },
        { speaker: 'Vermieter', textDe: 'Sie hat 55 Quadratmeter: zwei Zimmer, eine Küche und ein Bad.', textUz: 'U 55 kvadrat metr: ikkita xona, bitta oshxona va bitta hammom.' },
        { speaker: 'Sardor', textDe: 'Das Wohnzimmer ist sehr hell und hat einen schönen Balkon.', textUz: 'Mehmonxona juda yorug‘ ekan va chiroyli balkoni bor.' },
        { speaker: 'Vermieter', textDe: 'Ja, und das Schlafzimmer geht zum Garten, es ist sehr ruhig hier.', textUz: 'Ha, yotoqxona esa bog‘ tomonga qaragan, bu yer juda sokin.' },
        { speaker: 'Sardor', textDe: 'Wie hoch ist die Miete?', textUz: 'Ijara narxi qancha?' },
        { speaker: 'Vermieter', textDe: 'Die Kaltmiete beträgt 650 Euro plus 150 Euro Nebenkosten.', textUz: 'Asosiy ijara haqi 650 yevro va qo‘shimcha 150 yevro kommunal xarajatlar.' }
      ],
      usefulPhrases: [
        { german: 'Wie groß ist die Wohnung?', uzbek: 'Kvartira qanchalik katta?' },
        { german: 'Die Wohnung hat ... Zimmer.', uzbek: 'Kvartira ... ta xonaga ega.' },
        { german: 'Sie ist sehr hell / ruhig / modern.', uzbek: 'U juda yorug‘ / tinch / zamonaviy.' },
        { german: 'Wie viel kostet die Miete?', uzbek: 'Ijara narxi qancha?' },
        { german: 'Kaltmiete / Warmmiete', uzbek: 'Kommunalsiz toza ijara / Kommunal to‘lovlar qo‘shilgan ijara' }
      ],
      culturalNoteUz: 'Germaniyada ijara e‘lonlarida "Kaltmiete" (faqat xonadon ijarasi) va "Warmmiete" (isitish, suv, axlat to‘lovlari qo‘shilgan) farqlanadi.'
    },
    vocabulary: [
      {
        id: 'voc-m4-19',
        lessonId: 'les-12',
        levelCode: 'a1-1',
        german: 'die Wohnung',
        article: 'die',
        plural: 'die Wohnungen',
        uzbek: 'kvartira, xonadon',
        exampleDe: 'Meine Wohnung liegt im Zentrum.',
        exampleUz: 'Kvartiram markazda joylashgan.',
        wordType: 'noun'
      },
      {
        id: 'voc-m4-20',
        lessonId: 'les-12',
        levelCode: 'a1-1',
        german: 'das Zimmer',
        article: 'das',
        plural: 'die Zimmer',
        uzbek: 'xona',
        exampleDe: 'Die Wohnung hat drei Zimmer.',
        exampleUz: 'Kvartirada uchta xona bor.',
        wordType: 'noun'
      },
      {
        id: 'voc-m4-21',
        lessonId: 'les-12',
        levelCode: 'a1-1',
        german: 'die Küche',
        article: 'die',
        plural: 'die Küchen',
        uzbek: 'oshxona',
        exampleDe: 'Die Küche ist modern eingerichtet.',
        exampleUz: 'Oshxona zamonaviy jihozlangan.',
        wordType: 'noun'
      },
      {
        id: 'voc-m4-22',
        lessonId: 'les-12',
        levelCode: 'a1-1',
        german: 'das Bad / das Badezimmer',
        article: 'das',
        plural: 'die Bäder',
        uzbek: 'hammom',
        exampleDe: 'Das Bad hat eine Dusche.',
        exampleUz: 'Hammomda dush bor.',
        wordType: 'noun'
      },
      {
        id: 'voc-m4-23',
        lessonId: 'les-12',
        levelCode: 'a1-1',
        german: 'das Wohnzimmer',
        article: 'das',
        plural: 'die Wohnzimmer',
        uzbek: 'mehmonxona',
        exampleDe: 'Im Wohnzimmer steht ein Sofa.',
        exampleUz: 'Mehmonxonada divan turibdi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m4-24',
        lessonId: 'les-12',
        levelCode: 'a1-1',
        german: 'das Schlafzimmer',
        article: 'das',
        plural: 'die Schlafzimmer',
        uzbek: 'yotoqxona',
        exampleDe: 'Das Schlafzimmer ist ruhig.',
        exampleUz: 'Yotoqxona sokin.',
        wordType: 'noun'
      },
      {
        id: 'voc-m4-25',
        lessonId: 'les-12',
        levelCode: 'a1-1',
        german: 'der Balkon',
        article: 'der',
        plural: 'die Balkone',
        uzbek: 'balkon',
        exampleDe: 'Die Wohnung hat einen Balkon.',
        exampleUz: 'Kvartiraning balkoni bor.',
        wordType: 'noun'
      },
      {
        id: 'voc-m4-26',
        lessonId: 'les-12',
        levelCode: 'a1-1',
        german: 'die Miete',
        article: 'die',
        plural: 'die Mieten',
        uzbek: 'ijara haqi',
        exampleDe: 'Die Miete ist nicht zu teuer.',
        exampleUz: 'Ijara haqi unchalik qimmat emas.',
        wordType: 'noun'
      },
      {
        id: 'voc-m4-27',
        lessonId: 'les-12',
        levelCode: 'a1-1',
        german: 'hell',
        article: null,
        plural: null,
        uzbek: 'yorug‘',
        exampleDe: 'Das Zimmer ist sehr hell.',
        exampleUz: 'Xona juda yorug‘.',
        wordType: 'adjective'
      },
      {
        id: 'voc-m4-28',
        lessonId: 'les-12',
        levelCode: 'a1-1',
        german: 'ruhig',
        article: null,
        plural: null,
        uzbek: 'tinch, sokin',
        exampleDe: 'Hier ist es sehr ruhig.',
        exampleUz: 'Bu yer juda tinch.',
        wordType: 'adjective'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'Kvartira xonalarining artikllariga e‘tibor bering:',
      discoveryExamples: [
        { german: 'das Wohnzimmer / das Schlafzimmer / das Badezimmer', highlight: 'das ...zimmer', uzbek: '"Zimmer" bilan tugagan barcha so‘zlar DAS artiklini oladi!' },
        { german: 'die Küche / die Wohnung', highlight: 'die', uzbek: 'Oshxona va kvartira DIE artiklida' },
        { german: 'der Flur / der Balkon', highlight: 'der', uzbek: 'Yo‘lak va balkon DER artiklida' }
      ],
      patternExplanationUz: 'Nemis tilida qo‘shma otlarning jinsi oxirgi so‘zga bog‘liq: das Zimmer -> das Wohnzimmer, das Schlafzimmer, das Kinderzimmer.',
      ruleFormulaUz: 'Qo‘shma otlar oxirgi qismiga qarab artikl oladi: ...+ das Zimmer = das'
    },
    grammar: [
      {
        id: 'gra-m4-3',
        lessonId: 'les-12',
        levelCode: 'a1-1',
        titleDe: 'Wohnungsbeschreibung & Adjektive',
        titleUz: 'Kvartirani tasvirlash va sifatlar',
        summaryUz: 'Kvartira xonalari va ularning holatini bildirishda sifatlar o‘zgarmasdan (predikativ holatda) "sein" fe‘lidan keyin keladi.',
        explanationUz: `**1. Kvartira tuzilishi:**
- *Die Wohnung hat drei Zimmer, eine Küche und ein Bad.* (Kvartirada uchta xona, bitta oshxona va bitta hammom bor.)
- *Es gibt einen Balkon.* ("es gibt" dan keyin Akkusativ keladi: der Balkon -> einen Balkon).

**2. Kvartirani tasvirlash uchun sifatlar juftligi:**
- **groß** (katta) <-> **klein** (kichik)
- **hell** (yorug‘) <-> **dunkel** (qorong‘i)
- **ruhig** (tinch, sokin) <-> **laut** (shovqinli)
- **billig / günstig** (arzon) <-> **teuer** (qimmat)
- **modern** (zamonaviy) <-> **altmodisch** (eskicha)

**3. "sein" bilan sifatlarning qo‘llanishi:**
Sifat fe‘ldan keyin kelganda hech qanday qo‘shimcha olmaydi:
- *Das Zimmer ist **groß**.* (Xona katta.)
- *Die Küche ist **neu**.* (Oshxona yangi.)
- *Die Miete ist **günstig**.* (Ijara hamyonbop.)`,
        wordOrderRuleUz: '"es gibt" dan keyin Akkusativ keladi: "Es gibt einen (Akkusativ) Flur".',
        tables: [
          {
            title: 'Kvartira xonalari va artikllari',
            headers: ['Artikl', 'Nemischa nomi', 'O‘zbekcha tarjimasi'],
            rows: [
              ['das', 'das Wohnzimmer', 'mehmonxona'],
              ['das', 'das Schlafzimmer', 'yotoqxona'],
              ['das', 'das Bad / Badezimmer', 'hammom'],
              ['die', 'die Küche', 'oshxona'],
              ['der', 'der Flur', 'dahliz, yo‘lak'],
              ['der', 'der Balkon', 'balkon']
            ]
          }
        ],
        examples: [
          { german: 'Meine Wohnung ist sehr ruhig und hell.', uzbek: 'Mening kvartiram juda tinch va yorug‘.', highlight: 'ruhig und hell' },
          { german: 'Es gibt einen schönen Balkon.', uzbek: 'Chiroyli balkon bor.', highlight: 'einen schönen Balkon' }
        ],
        commonMistakes: [
          {
            incorrect: 'Die Wohnung hat ein Balkon.',
            correct: 'Die Wohnung hat einen Balkon.',
            explanationUz: '"haben" fe‘lidan keyin Akkusativ keladi: der Balkon -> einen Balkon.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Eine Traumwohnung in Berlin',
      titleUz: 'Berlindagi orzudagi kvartira',
      situationUz: 'Ikkita do‘st internetdagi yangi kvartira e‘lonini o‘qib muhokama qilmoqda.',
      audioTranscriptDe: 'Leon: Schau mal hier, Lea! Eine 3-Zimmer-Wohnung in Berlin-Mitte!\nLea: Wirklich? Wie teuer ist sie denn?\nLeon: Die Warmmiete ist 850 Euro. Sie hat 70 Quadratmeter, einen Südbalkon und eine Einbauküche.\nLea: Das klingt ja fantastisch! Ist sie auch ruhig?\nLeon: Ja, im Inserat steht: Sehr ruhige Lage direkt am Park.',
      translationUz: 'Leon: Mana bunga qara, Lea! Berlin-Mittedagi 3 xonali kvartira!\nLea: Rostdanmi? Narxi qancha ekan?\nLeon: Kommunallari bilan birga ijara haqi 850 yevro. U 70 kvadrat metr, janubga qaragan balkoni va jihozlangan oshxonasi bor.\nLea: Bu ajoyib eshitilyapti! U tinch joydami?\nLeon: Ha, e‘londa yozilgan: to‘g‘ridan-to‘g‘ri park bo‘yida, juda tinch joy.',
      stage1Global: {
        instructionUz: '1-Bosqich: Kvartira haqidagi umumiy ma‘lumotni tushuning.',
        questionUz: 'Leon va Lea qayerdagi kvartira haqida gaplashmoqda?',
        options: ['Myunxenda', 'Berlin-Mitteda (Berlin markazida)', 'Hamburgda', 'Kölnda'],
        correctIndex: 1,
        explanationUz: 'Leon "Eine 3-Zimmer-Wohnung in Berlin-Mitte" dedi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Narxni aniqlang.',
        questions: [
          {
            id: 'l12-q1',
            questionUz: 'Kvartiraning Warmmiete (umumiy ijara) narxi qancha?',
            options: ['600 Euro', '750 Euro', '850 Euro', '1000 Euro'],
            correctIndex: 2,
            explanationUz: 'Leon "Die Warmmiete ist 850 Euro" deb aytdi.'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Leon', textDe: 'Eine 3-Zimmer-Wohnung in Berlin.', textUz: 'Berlinda 3 xonali kvartira.' },
          { speaker: 'Lea', textDe: 'Wie teuer ist sie denn?', textUz: 'Narxi qancha ekan?' }
        ],
        keyVocabulary: [
          { german: 'die Warmmiete', uzbek: 'umumiy ijara (kommunali bilan)' },
          { german: 'die Einbauküche', uzbek: 'jihozlangan oshxona' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-m4-3',
        lessonId: 'les-12',
        titleDe: 'Wohnungsanzeige',
        titleUz: 'Kvartira e‘loni',
        textDe: 'Schöne 2-Zimmer-Wohnung in Hamburg ab sofort zu vermieten. Größe: 48 qm. Die Wohnung liegt im 2. Stock. Es gibt ein helles Wohnzimmer mit Parkett, ein ruhiges Schlafzimmer, eine kleine Küche mit Herd und Kühlschrank und ein modernes Duschbad. Ein Balkon ist ebenfalls vorhanden. Kaltmiete: 520 Euro, Nebenkosten: 120 Euro.',
        translationUz: 'Gamburgda chiroyli 2 xonali kvartira darhol ijaraga beriladi. Maydoni: 48 kv.m. Kvartira 2-qavatda joylashgan. Unda parketli yorug‘ mehmonxona, sokin yotoqxona, plita va sovutgichli kichik oshxona hamda zamonaviy dushli hammom bor. Shuningdek balkon mavjud. Kaltmiete: 520 yevro, kommunal: 120 yevro.',
        vocabularyHints: [
          { german: 'zu vermieten', uzbek: 'ijaraga beriladi' },
          { german: 'im 2. Stock', uzbek: '2-qavatda' },
          { german: 'der Herd', uzbek: 'oshxona plitasi' }
        ],
        questions: [
          {
            id: 'rq-m4-3',
            questionUz: 'Kvartira nechanchi qavatda joylashgan?',
            options: ['1-qavatda', '2-qavatda (im 2. Stock)', '3-qavatda', 'Tom ostida'],
            correctIndex: 1,
            explanationUz: 'Matnda "Die Wohnung liegt im 2. Stock" deb yozilgan.'
          }
        ]
      }
    ],
    writingScaffold: {
      taskTitleUz: 'O‘z kvartirangiz yoki xonangizni tasvirlash',
      promptUz: 'Kvartirangizda nechta xona borligi, ularning qandayligi va ijarasi haqida 3-4 jumla yozing.',
      taskInstructionsUz: '1. Nechta xonasi borligini yozing (Meine Wohnung hat... Zimmer)\n2. Xonalarni sifatlar bilan tasvirlang (Das Wohnzimmer ist hell...)\n3. Balkoni yoki oshxonasi haqida yozing',
      controlledScaffolding: {
        stepTitleUz: 'Jumla namunalari:',
        sentenceStarters: [
          'Meine Wohnung hat... Zimmer.',
          'Das Wohnzimmer ist sehr...',
          'Die Küche ist klein, aber...',
          'Es gibt auch einen...'
        ]
      },
      usefulVocabulary: [
        { german: 'das Wohnzimmer', uzbek: 'mehmonxona' },
        { german: 'hell / ruhig', uzbek: 'yorug‘ / tinch' },
        { german: 'der Balkon', uzbek: 'balkon' }
      ],
      modelAnswerDe: 'Meine Wohnung hat zwei Zimmer, eine Küche und ein Bad. Das Wohnzimmer ist sehr groß und hell. Die Wohnung hat auch einen schönen Balkon. Ich finde meine Wohnung super!',
      modelAnswerUz: 'Mening kvartiramda ikkita xona, oshxona va hammom bor. Mehmonxona juda katta va yorug‘. Kvartiraning chiroyli balkoni ham bor. Kvartiram menga juda yoqadi!'
    },
    shadowing: [
      {
        id: 'sha-m4-5',
        lessonId: 'les-12',
        levelCode: 'a1-1',
        sentenceDe: 'Die Wohnung hat drei Zimmer, eine Küche und einen Balkon.',
        translationUz: 'Kvartirada uchta xona, oshxona va balkon bor.',
        phoneticHint: '[Di: Vo:-nung hat dray Tsim-mer, ay-ne Ky:-çe unt ay-nen Bal-kon.]',
        orderIndex: 1
      },
      {
        id: 'sha-m4-6',
        lessonId: 'les-12',
        levelCode: 'a1-1',
        sentenceDe: 'Das Wohnzimmer ist sehr hell und ruhig.',
        translationUz: 'Mehmonxona juda yorug‘ va tinch.',
        phoneticHint: '[Das Vo:n-tsim-mer ist ze:r hel unt ru:-iç.]',
        orderIndex: 2
      }
    ],
    practice: [
      {
        id: 'ex-m4-5',
        lessonId: 'les-12',
        type: 'multiple-choice',
        questionUz: '"Küche" (oshxona) so‘zining artikli qaysi?',
        options: ['der Küche', 'das Küche', 'die Küche', 'den Küche'],
        correctAnswer: 'die Küche',
        explanationUz: '"Küche" ayol jinsida bo‘lib, artikli "die" bo‘ladi.',
        mistakeTipUz: '❌ Oshxona "die Küche" bo‘ladi.'
      },
      {
        id: 'ex-m4-6',
        lessonId: 'les-12',
        type: 'fill-blank',
        questionUz: '"es gibt" dan keyin to‘g‘ri artiklni qo‘ying: "In der Wohnung gibt es _____ Balkon."',
        blankSentence: 'In der Wohnung gibt es [blank] Balkon.',
        options: ['einen', 'ein', 'eine', 'der'],
        correctAnswer: 'einen',
        explanationUz: '"es gibt" Akkusativ talab qiladi: der Balkon -> einen Balkon.',
        mistakeTipUz: '❌ "es gibt" dan keyin muzskoy otlar "einen" oladi.'
      }
    ],
    listening: [],
    writing: []
  }
];
