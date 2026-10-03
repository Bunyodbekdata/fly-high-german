import { Lesson } from '../../types/database';

export const MODULE_5_A12_LESSONS: Lesson[] = [
  // ==========================================
  // LEKTION 13: Wo ist der Bahnhof? (Orientierung & Wegbeschreibung)
  // ==========================================
  {
    id: 'les-13',
    moduleId: 'mod-a1-2-1',
    levelCode: 'a1-2',
    titleDe: 'Lektion 13: Wo ist der Bahnhof?',
    titleUz: '13-Dars: Vokzal qayerda? (Shaharda yo‘l topish va yo‘nalish ko‘rsatish)',
    descriptionUz: 'Shaharda binolar va muassasalar (Bahnhof, Post, Bank, Apotheke, Hotel), yo‘nalish ko‘rsatish (geradeaus, nach links, nach rechts) va Dativ predloglari (zu, nach, an... vorbei).',
    orderIndex: 13,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Shahardagi muhim binolarni nomlash (der Bahnhof, die Bank, die Post, das Museum, die Apotheke)',
      'Yo‘l so‘rash va yo‘nalishni tushuntirish (Gehen Sie geradeaus, biegen Sie nach links ab)',
      '"zu" va "nach" predloglari bilan shahar bo‘ylab harakatni ifodalash'
    ],
    warmUp: {
      situationUz: 'Katta nemis shahriga birinchi bor keldingiz va markaziy poyezd vokzaliga qanday borishni o‘tkinchidan so‘ramoqchisiz.',
      curiosityQuestionUz: 'Nemis tilida "to‘g‘riga boring, keyin o‘ngga buriling" qanday ifodalanadi?',
      miniDialogue: [
        { speaker: 'Tourist', textDe: 'Entschuldigung, wo ist der Bahnhof?', textUz: 'Kechirasiz, vokzal qayerda?' },
        { speaker: 'Passant', textDe: 'Gehen Sie immer geradeaus und dann nach rechts.', textUz: 'Doimo to‘g‘riga boring va keyin o‘ngga buriling.' }
      ],
      hintUz: 'Nemislar yo‘l so‘raganda "Entschuldigen Sie bitte..." deb juda muloyim boshlashadi.'
    },
    contextDialogue: {
      titleDe: 'Wegbeschreibung in Köln',
      titleUz: 'Kölnda yo‘l so‘rash',
      situationUz: 'Sayyoh yo‘ldan o‘tayotgan mahalliy aholi vakilidan muzeyga yo‘l so‘ramoqda.',
      lines: [
        { speaker: 'Herr Rahimov', textDe: 'Entschuldigung, wissen Sie, wo das Römisch-Germanische Museum ist?', textUz: 'Kechirasiz, Rim-German muzeyi qayerdaligini bilmaysizmi?' },
        { speaker: 'Passantin', textDe: 'Ja, das ist ganz in der Nähe. Gehen Sie diese Straße hier geradeaus bis zur Ampel.', textUz: 'Ha, bu juda yaqinda. Mana bu ko‘chadan to svetaforgacha to‘g‘riga boring.' },
        { speaker: 'Herr Rahimov', textDe: 'Und an der Ampel?', textUz: 'Svetafordan keyinchi?' },
        { speaker: 'Passantin', textDe: 'Biegen Sie an der Ampel nach links ab. Gehen Sie am Dom vorbei.', textUz: 'Svetaforda chapga buriling. Kölner Dom ibodatxonasi yonidan o‘ting.' },
        { speaker: 'Herr Rahimov', textDe: 'Ist das Museum direkt neben dem Dom?', textUz: 'Muzey to‘g‘ridan-to‘g‘ri Dom yonidami?' },
        { speaker: 'Passantin', textDe: 'Genau, direkt gegenüber vom Dom. Sie können es nicht verfehlen!', textUz: 'Xuddi shunday, to‘g‘ridan-to‘g‘ri Dom ro‘parasida. Topolmay qolmaysiz!' },
        { speaker: 'Herr Rahimov', textDe: 'Vielen herzlichen Dank!', textUz: 'Chin dildan katta rahmat!' }
      ],
      usefulPhrases: [
        { german: 'Entschuldigung, wo ist... / wie komme ich zu...?', uzbek: 'Kechirasiz, ... qayerda? / ...ga qanday borsam bo‘ladi?' },
        { german: 'immer geradeaus', uzbek: 'doimo to‘g‘riga' },
        { german: 'nach links / nach rechts', uzbek: 'chapga / o‘ngga' },
        { german: 'an der Ampel / an der Kreuzung', uzbek: 'svetaforda / chorrahada' },
        { german: 'in der Nähe / weit weg', uzbek: 'yaqinda / uzoqda' }
      ],
      culturalNoteUz: 'Germaniyada yo‘l ko‘rsatilganda ko‘pincha mashhur belgilar (Dom, Rathaus, Post) asos qilib olinadi.'
    },
    vocabulary: [
      {
        id: 'voc-m5-1',
        lessonId: 'les-13',
        levelCode: 'a1-2',
        german: 'der Bahnhof',
        article: 'der',
        plural: 'die Bahnhöfe',
        uzbek: 'vokzal, temir yo‘l bekati',
        exampleDe: 'Wo ist der Hauptbahnhof?',
        exampleUz: 'Bosh vokzal qayerda?',
        wordType: 'noun'
      },
      {
        id: 'voc-m5-2',
        lessonId: 'les-13',
        levelCode: 'a1-2',
        german: 'die Post',
        article: 'die',
        plural: null,
        uzbek: 'pochta',
        exampleDe: 'Ich muss zur Post gehen.',
        exampleUz: 'Men pochtaga borishim kerak.',
        wordType: 'noun'
      },
      {
        id: 'voc-m5-3',
        lessonId: 'les-13',
        levelCode: 'a1-2',
        german: 'die Bank',
        article: 'die',
        plural: 'die Banken',
        uzbek: 'bank',
        exampleDe: 'Gibt es hier eine Bank?',
        exampleUz: 'Bu yerda bank bormi?',
        wordType: 'noun'
      },
      {
        id: 'voc-m5-4',
        lessonId: 'les-13',
        levelCode: 'a1-2',
        german: 'die Apotheke',
        article: 'die',
        plural: 'die Apotheken',
        uzbek: 'dorixona',
        exampleDe: 'Die Apotheke ist gleich um die Ecke.',
        exampleUz: 'Dorixona burchakning narigi tomonida.',
        wordType: 'noun'
      },
      {
        id: 'voc-m5-5',
        lessonId: 'les-13',
        levelCode: 'a1-2',
        german: 'das Museum',
        article: 'das',
        plural: 'die Museen',
        uzbek: 'muzey',
        exampleDe: 'Das Museum ist heute geöffnet.',
        exampleUz: 'Muzey bugun ochiq.',
        wordType: 'noun'
      },
      {
        id: 'voc-m5-6',
        lessonId: 'les-13',
        levelCode: 'a1-2',
        german: 'geradeaus',
        article: null,
        plural: null,
        uzbek: 'to‘g‘riga',
        exampleDe: 'Gehen Sie bitte geradeaus.',
        exampleUz: 'Iltimos, to‘g‘riga boring.',
        wordType: 'adverb'
      },
      {
        id: 'voc-m5-7',
        lessonId: 'les-13',
        levelCode: 'a1-2',
        german: 'links / rechts',
        article: null,
        plural: null,
        uzbek: 'chapda (chapga) / o‘ngda (o‘ngga)',
        exampleDe: 'Biegen Sie nach rechts ab.',
        exampleUz: 'O‘ng tomonga buriling.',
        wordType: 'adverb'
      },
      {
        id: 'voc-m5-8',
        lessonId: 'les-13',
        levelCode: 'a1-2',
        german: 'die Ampel',
        article: 'die',
        plural: 'die Ampeln',
        uzbek: 'svetafor',
        exampleDe: 'An der Ampel halten wir an.',
        exampleUz: 'Svetaforda to‘xtaymiz.',
        wordType: 'noun'
      },
      {
        id: 'voc-m5-9',
        lessonId: 'les-13',
        levelCode: 'a1-2',
        german: 'die Kreuzung',
        article: 'die',
        plural: 'die Kreuzungen',
        uzbek: 'chorraha',
        exampleDe: 'An der nächsten Kreuzung nach links.',
        exampleUz: 'Keyingi chorrahada chapga.',
        wordType: 'noun'
      },
      {
        id: 'voc-m5-10',
        lessonId: 'les-13',
        levelCode: 'a1-2',
        german: 'ab|biegen',
        article: null,
        plural: null,
        uzbek: 'burilmoq (ko‘chaga)',
        exampleDe: 'Hier biegen wir ab.',
        exampleUz: 'Bu yerda burilamiz.',
        wordType: 'verb'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: '"nach" va "zu" predloglarining yo‘nalishdagi qo‘llanishiga qarang:',
      discoveryExamples: [
        { german: 'nach links / nach rechts', highlight: 'nach', uzbek: 'yo‘nalishlar bilan: nach' },
        { german: 'zum Bahnhof (zu + dem)', highlight: 'zum (zu + dem)', uzbek: 'der Bahnhof -> zum Bahnhof' },
        { german: 'zur Post (zu + der)', highlight: 'zur (zu + der)', uzbek: 'die Post -> zur Post' }
      ],
      patternExplanationUz: '"nach" so‘zi yo‘nalishlar (nach links, nach rechts) va shaharlar/davlatlar bilan ishlatiladi. Shaxs yoki binolar tomon borish uchun esa "zu + Dativ" (zum / zur) qo‘llaniladi.',
      ruleFormulaUz: 'zu + dem = zum; zu + der = zur; nach + links/rechts'
    },
    grammar: [
      {
        id: 'gra-m5-1',
        lessonId: 'les-13',
        levelCode: 'a1-2',
        titleDe: 'Lokale Angaben & Die Präposition "zu" (+ Dativ)',
        titleUz: 'O‘rin-joy ko‘rsatish va "zu" predlogi (+ Dativ)',
        summaryUz: 'Shahar bo‘ylab yo‘nalish berishda buyruq mayli (Gehen Sie...) va "zu + Dativ" (zum / zur) ishlatiladi.',
        explanationUz: `**1. Yo‘l ko‘rsatish iboralari:**
- *Gehen Sie immer geradeaus.* (Doimo to‘g‘riga boring.)
- *Biegen Sie nach links / nach rechts ab.* (Chapga / o‘ngga buriling.)
- *Biegen Sie an der Kreuzung / Ampel ab.* (Chorrahada / svetaforda buriling.)
- *Gehen Sie an der Bank vorbei.* (Bank yonidan o‘tib keting.)

**2. "zu" predlogi va Dativ qisqartmasi:**
"zu" doimo **Dativ** kelishigini talab qiladi va artikl bilan qo‘shilib ketadi:
- **zu + dem = zum:**
  - *der Bahnhof* -> *Ich gehe **zum** Bahnhof.*
  - *das Museum* -> *Ich gehe **zum** Museum.*
- **zu + der = zur:**
  - *die Bank* -> *Ich gehe **zur** Bank.*
  - *die Post* -> *Ich gehe **zur** Post.*
  - *die Apotheke* -> *Ich gehe **zur** Apotheke.*`,
        wordOrderRuleUz: 'Buyruq gapda tuslangan fe‘l 1-o‘ringa chiqadi: "Biegen (1) Sie (2) nach rechts ab (oxirida)."',
        tables: [
          {
            title: 'zu predlogining Dativda birikishi',
            headers: ['Bosh kelishik (Nominativ)', 'zu + Dativ', 'Qisqargan shakli', 'Ma‘nosi'],
            rows: [
              ['der Bahnhof', 'zu dem Bahnhof', 'zum Bahnhof', 'vokzalga'],
              ['das Hotel', 'zu dem Hotel', 'zum Hotel', 'mehmonxonaga'],
              ['die Bank', 'zu der Bank', 'zur Bank', 'bankka'],
              ['die Post', 'zu der Post', 'zur Post', 'pochta idorasiga']
            ]
          }
        ],
        examples: [
          { german: 'Wie komme ich zum Bahnhof?', uzbek: 'Vokzalga qanday borsam bo‘ladi?', highlight: 'zum Bahnhof' },
          { german: 'Sie müssen zur Post gehen.', uzbek: 'Siz pochtaga borishingiz kerak.', highlight: 'zur Post' }
        ],
        commonMistakes: [
          {
            incorrect: 'Ich gehe zu die Bank.',
            correct: 'Ich gehe zur Bank.',
            explanationUz: '"zu" dan keyin "die" Dativda "der" bo‘ladi va "zur" deb qisqaradi.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Entschuldigung, wo geht es zum Rathaus?',
      titleUz: 'Kechirasiz, meriyaga qanday boriladi?',
      situationUz: 'Shaharda adashib qolgan sayyoh yo‘l ko‘rsatishni so‘ramoqda.',
      audioTranscriptDe: 'Tourist: Entschuldigung! Können Sie mir helfen? Wo ist das Rathaus?\nDame: Ja natürlich. Gehen Sie hier geradeaus bis zum Marktplatz. Dann sehen Sie eine große Kirche. Hinter der Kirche biegen Sie nach rechts ab, da ist direkt das Rathaus.\nTourist: Also bis zum Marktplatz und dann hinter der Kirche nach rechts?\nDame: Ganz genau, in fünf Minuten sind Sie da.\nTourist: Vielen Dank für Ihre Hilfe!',
      translationUz: 'Sayyoh: Kechirasiz! Menga yordam bera olasizmi? Meriya (shahar hokimligi) qayerda?\nXonim: Ha albatta. Bu yerdan to bozor maydonigacha to‘g‘riga boring. Keyin katta cherkovni ko‘rasiz. Cherkov orqasidan o‘ngga buriling, meriya to‘g‘ridan-to‘g‘ri o‘sha yerda.\nSayyoh: Demak bozor maydonigacha va keyin cherkov orqasidan o‘nggami?\nXonim: Xuddi shunday, besh daqiqada yetib borasiz.\nSayyoh: Yordamingiz uchun katta rahmat!',
      stage1Global: {
        instructionUz: '1-Bosqich: Sayyoh qayerga bormoqchiligini aniqlang.',
        questionUz: 'Sayyoh qaysi binoni qidirmoqda?',
        options: ['Vokzalni', 'Das Rathaus (meriya / hokimlik)', 'Dorixonani', 'Kutubxonani'],
        correctIndex: 1,
        explanationUz: 'U "Wo ist das Rathaus?" deb so‘radi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Qancha vaqt ketishini aniqlang.',
        questions: [
          {
            id: 'l13-q1',
            questionUz: 'Piyoda meriyagacha necha daqiqalik yo‘l?',
            options: ['Besh daqiqa (in fünf Minuten)', 'Yarim soat', 'Bir soat', 'O‘n besh daqiqa'],
            correctIndex: 0,
            explanationUz: 'Xonim "in fünf Minuten sind Sie da" deb aytdi.'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Tourist', textDe: 'Wo ist das Rathaus?', textUz: 'Meriya qayerda?' },
          { speaker: 'Dame', textDe: 'Gehen Sie hier geradeaus.', textUz: 'Bu yerdan to‘g‘riga boring.' }
        ],
        keyVocabulary: [
          { german: 'das Rathaus', uzbek: 'meriya, ratusha' },
          { german: 'der Marktplatz', uzbek: 'bozor maydoni' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-m5-1',
        lessonId: 'les-13',
        titleDe: 'Stadtplan und Sehenswürdigkeiten',
        titleUz: 'Shahar xaritasi va diqqatga sazovor joylar',
        textDe: 'Willkommen in Heidelberg! Unser Hotel liegt mitten in der Altstadt. Wenn Sie zum Schloss möchten, gehen Sie einfach die Hauptstraße entlang bis zum Kornmarkt. Dort fährt die Bergbahn direkt zum Schloss. Möchten Sie zur alten Brücke? Dann biegen Sie am Marktplatz nach links ab und gehen zur Fußgängerzone. Es sind nur 300 Meter.',
        translationUz: 'Xaydelbergga xush kelibsiz! Bizning mehmonxonamiz qadimiy shahar markazida joylashgan. Agar qasrga bormoqchi bo‘lsangiz, Kornmarkt maydonigacha asosiy ko‘cha bo‘ylab yuring. U yerdan dor yo‘li to‘g‘ridan-to‘g‘ri qasrga olib chiqadi. Qadimgi ko‘prikkachi? Unda Marktplatzda chapga buriling va piyodalar hududiga o‘ting. Bor-yo‘g‘i 300 metr.',
        vocabularyHints: [
          { german: 'das Schloss', uzbek: 'qasr, saroy' },
          { german: 'die Brücke', uzbek: 'ko‘prik' },
          { german: 'die Fußgängerzone', uzbek: 'piyodalar ko‘chasi' }
        ],
        questions: [
          {
            id: 'rq-m5-1',
            questionUz: 'Mehmonxonadan ko‘prikgacha bo‘lgan masofa qancha?',
            options: ['3 kilometr', '300 metr (nur 300 Meter)', '5 daqiqa metroda', '1 kilometr'],
            correctIndex: 1,
            explanationUz: 'Matnda "Es sind nur 300 Meter" deb yozilgan.'
          }
        ]
      }
    ],
    writingScaffold: {
      taskTitleUz: 'Mehmoningizga yo‘l ko‘rsatish xati',
      promptUz: 'Do‘stingizga uyingizga yoki maktabingizga qanday yetib olishni tushuntiruvchi 3-4 jumla yozing ("Gehen Sie...", "Biegen Sie...").',
      taskInstructionsUz: '1. Vokzaldan boshlang\n2. Qayergacha to‘g‘ri yurish kerakligini ayting\n3. Chapga yoki o‘ngga burilishni ko‘rsating',
      controlledScaffolding: {
        stepTitleUz: 'Jumla namunalari:',
        sentenceStarters: [
          'Vom Bahnhof gehen Sie geradeaus bis...',
          'An der Ampel biegen Sie nach... ab.',
          'Mein Haus ist direkt neben...'
        ]
      },
      usefulVocabulary: [
        { german: 'geradeaus gehen', uzbek: 'to‘g‘riga yurmoq' },
        { german: 'nach links / rechts abbiegen', uzbek: 'chapga / o‘ngga burilmoq' },
        { german: 'die Ampel / die Kreuzung', uzbek: 'svetafor / chorraha' }
      ],
      modelAnswerDe: 'Vom Hauptbahnhof gehen Sie immer geradeaus bis zur Post. An der Kreuzung biegen Sie nach rechts ab. Mein Haus ist direkt neben der Apotheke.',
      modelAnswerUz: 'Bosh vokzaldan pochtagacha doimo to‘g‘riga yurasiz. Chorrahada o‘ngga burilasiz. Mening uyim to‘g‘ridan-to‘g‘ri dorixona yonida.'
    },
    shadowing: [
      {
        id: 'sha-m5-1',
        lessonId: 'les-13',
        levelCode: 'a1-2',
        sentenceDe: 'Entschuldigung, wie komme ich am besten zum Bahnhof?',
        translationUz: 'Kechirasiz, vokzalga qanday qilib eng qulay borsa bo‘ladi?',
        phoneticHint: '[Ent-shul-di-gung, vi: kom-me iç am bes-ten tsum Ba:n-ho:f?]',
        orderIndex: 1
      },
      {
        id: 'sha-m5-2',
        lessonId: 'les-13',
        levelCode: 'a1-2',
        sentenceDe: 'Gehen Sie geradeaus und biegen Sie nach links ab.',
        translationUz: 'To‘g‘riga boring va chap tomonga buriling.',
        phoneticHint: '[Ge:-en Zi: ge-ra:-de-aus unt bi:-gen Zi: na:x links ap.]',
        orderIndex: 2
      }
    ],
    practice: [
      {
        id: 'ex-m5-1',
        lessonId: 'les-13',
        type: 'multiple-choice',
        questionUz: '"die Post" so‘zi bilan "zu" predlogi qo‘shilganda qanday shaklga kiradi?',
        options: ['zum Post', 'zur Post', 'zu dem Post', 'zu das Post'],
        correctAnswer: 'zur Post',
        explanationUz: '"zu + der Post = zur Post" bo‘ladi.',
        mistakeTipUz: '❌ "die" artiklidagi so‘zlar bilan "zur" (zu der) ishlatiladi.'
      },
      {
        id: 'ex-m5-2',
        lessonId: 'les-13',
        type: 'fill-blank',
        questionUz: 'To‘g‘ri predlogni qo‘ying: "Gehen Sie immer _____ bis zur Kreuzung."',
        blankSentence: 'Gehen Sie immer [blank] bis zur Kreuzung.',
        options: ['geradeaus', 'links', 'rechts', 'vorbei'],
        correctAnswer: 'geradeaus',
        explanationUz: '"to‘g‘riga yurmoq" nemis tilida "geradeaus gehen" bo‘ladi.',
        mistakeTipUz: '❌ To‘g‘riga borish uchun "geradeaus" so‘zi ishlatiladi.'
      }
    ],
    listening: [],
    writing: []
  },

  // ==========================================
  // LEKTION 14: Fahren wir mit der U-Bahn? (Verkehrsmittel & mit + Dativ)
  // ==========================================
  {
    id: 'les-14',
    moduleId: 'mod-a1-2-1',
    levelCode: 'a1-2',
    titleDe: 'Lektion 14: Fahren wir mit der U-Bahn?',
    titleUz: '14-Dars: Metroda boramizmi? (Transport vositalari va "mit + Dativ")',
    descriptionUz: 'Jamoat transporti turlari (Bus, Zug, U-Bahn, Straßenbahn, Fahrrad, Auto, Taxi), chipta xaridi va eng muhim grammatik qoida: "mit" + Dativ (mit dem Bus, mit der Bahn).',
    orderIndex: 14,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Transport vositalari nomlarini o‘rganish (der Bus, der Zug, die U-Bahn, das Auto, das Fahrrad)',
      '"mit" predlogidan keyin doimo Dativ kelishigi ishlatilishini bilish',
      'Avtomatdan chipta xarid qilish va yo‘nalish so‘rash'
    ],
    warmUp: {
      situationUz: 'Aeroportga yoki darsga yetib olishingiz kerak. Do‘stingiz taksida borishni taklif qilyapti, siz esa metro tezroq deb hisoblaysiz.',
      curiosityQuestionUz: 'Nemis tilida "avtobusda" deganda nega "in dem Bus" emas, "mit dem Bus" (avtobus bilan) deyiladi?',
      miniDialogue: [
        { speaker: 'Sardor', textDe: 'Fahren wir mit dem Taxi oder mit der U-Bahn?', textUz: 'Taksida boramizmi yoki metrodami?' },
        { speaker: 'Lukas', textDe: 'Mit der U-Bahn, das ist viel schneller und günstiger!', textUz: 'Metroda, bu ancha tezroq va arzonroq!' }
      ],
      hintUz: 'Nemis tilida barcha transport vositalari bilan harakatlanganda "mit + Dativ" predlogi ishlatiladi.'
    },
    contextDialogue: {
      titleDe: 'Am Fahrkartenautomaten',
      titleUz: 'Chipta sotish avtomatida',
      situationUz: 'Berlin metrosida talaba Sardor chipta sotib olmoqda.',
      lines: [
        { speaker: 'Sardor', textDe: 'Lukas, wie komme ich am schnellsten zum Alexanderplatz?', textUz: 'Lukas, Aleksandrplattsga qanday eng tez yetib borsam bo‘ladi?' },
        { speaker: 'Lukas', textDe: 'Am besten fährst du mit der U-Bahnlinie U2.', textUz: 'Eng ma‘quli U2 metro yo‘nalishida borasan.' },
        { speaker: 'Sardor', textDe: 'Welche Fahrkarte brauche ich dafür?', textUz: 'Buning uchun qaysi chipta kerak bo‘ladi?' },
        { speaker: 'Lukas', textDe: 'Du brauchst einen Einzelfahrschein für den Bereich AB.', textUz: 'Senga AB zonasi uchun bir martalik chipta kerak.' },
        { speaker: 'Sardor', textDe: 'Was kostet der Fahrschein?', textUz: 'Chipta narxi qancha?' },
        { speaker: 'Lukas', textDe: 'Er kostet drei Euro fünfzig. Vergiss nicht, die Fahrkarte am Automaten zu entwerten!', textUz: 'U 3 yevro 50 sent turadi. Chiptani avtomatda kompostir qilishni unutma!' }
      ],
      usefulPhrases: [
        { german: 'Fahren wir mit dem / mit der...?', uzbek: '...da boramizmi?' },
        { german: 'Ich fahre mit dem Bus / mit dem Zug / mit der Bahn.', uzbek: 'Men avtobusda / poyezdda / poyezdda boraman.' },
        { german: 'die Fahrkarte / der Fahrschein', uzbek: 'transport chiptasi' },
        { german: 'an der Haltestelle', uzbek: 'bekatda' }
      ],
      culturalNoteUz: 'Germaniyada jamoat transportida turniketlar yo‘q, ammo tekshiruvchilar (Kontrolleur) qattiq nazorat qiladi. Chiptasiz yurish jarimasi kamida 60 yevro!'
    },
    vocabulary: [
      {
        id: 'voc-m5-11',
        lessonId: 'les-14',
        levelCode: 'a1-2',
        german: 'der Bus',
        article: 'der',
        plural: 'die Busse',
        uzbek: 'avtobus',
        exampleDe: 'Ich fahre mit dem Bus.',
        exampleUz: 'Men avtobusda yuraman.',
        wordType: 'noun'
      },
      {
        id: 'voc-m5-12',
        lessonId: 'les-14',
        levelCode: 'a1-2',
        german: 'der Zug',
        article: 'der',
        plural: 'die Züge',
        uzbek: 'poyezd',
        exampleDe: 'Der Zug kommt pünktlich an.',
        exampleUz: 'Poyezd o‘z vaqtida yetib keladi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m5-13',
        lessonId: 'les-14',
        levelCode: 'a1-2',
        german: 'die U-Bahn',
        article: 'die',
        plural: 'die U-Bahnen',
        uzbek: 'metro (yer osti poyezdi)',
        exampleDe: 'Die U-Bahn fährt alle fünf Minuten.',
        exampleUz: 'Metro har besh daqiqada yuradi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m5-14',
        lessonId: 'les-14',
        levelCode: 'a1-2',
        german: 'die Straßenbahn / die Tram',
        article: 'die',
        plural: 'die Straßenbahnen',
        uzbek: 'tramvay',
        exampleDe: 'Nehmen wir die Straßenbahn?',
        exampleUz: 'Tramvayga o‘tiramizmi?',
        wordType: 'noun'
      },
      {
        id: 'voc-m5-15',
        lessonId: 'les-14',
        levelCode: 'a1-2',
        german: 'das Auto',
        article: 'das',
        plural: 'die Autos',
        uzbek: 'avtomobil, mashina',
        exampleDe: 'Er fährt mit dem Auto zur Arbeit.',
        exampleUz: 'U ishga mashinada boradi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m5-16',
        lessonId: 'les-14',
        levelCode: 'a1-2',
        german: 'das Fahrrad',
        article: 'das',
        plural: 'die Fahrräder',
        uzbek: 'velosiped',
        exampleDe: 'Viele Studenten fahren mit dem Fahrrad.',
        exampleUz: 'Ko‘plab talabalar velosipedda yurishadi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m5-17',
        lessonId: 'les-14',
        levelCode: 'a1-2',
        german: 'das Flugzeug',
        article: 'das',
        plural: 'die Flugzeuge',
        uzbek: 'samolyot',
        exampleDe: 'Wir fliegen mit dem Flugzeug.',
        exampleUz: 'Biz samolyotda uchamiz.',
        wordType: 'noun'
      },
      {
        id: 'voc-m5-18',
        lessonId: 'les-14',
        levelCode: 'a1-2',
        german: 'die Fahrkarte',
        article: 'die',
        plural: 'die Fahrkarten',
        uzbek: 'chipta',
        exampleDe: 'Haben Sie Ihre Fahrkarte dabei?',
        exampleUz: 'Chiptangiz yoningizdami?',
        wordType: 'noun'
      },
      {
        id: 'voc-m5-19',
        lessonId: 'les-14',
        levelCode: 'a1-2',
        german: 'die Haltestelle',
        article: 'die',
        plural: 'die Haltestellen',
        uzbek: 'bekat (avtobus / tramvay)',
        exampleDe: 'Die nächste Haltestelle ist Universität.',
        exampleUz: 'Keyingi bekat — Universitet.',
        wordType: 'noun'
      },
      {
        id: 'voc-m5-20',
        lessonId: 'les-14',
        levelCode: 'a1-2',
        german: 'das Gleis',
        article: 'das',
        plural: 'die Gleise',
        uzbek: 'perron, temir yo‘l platformasi',
        exampleDe: 'Der Zug fährt von Gleis 3 ab.',
        exampleUz: 'Poyezd 3-yo‘lakdan jo‘naydi.',
        wordType: 'noun'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: '"mit" predlogidan keyingi artikllar o‘zgarishiga e‘tibor bering:',
      discoveryExamples: [
        { german: 'der Bus -> mit dem Bus', highlight: 'der -> dem', uzbek: 'Muzskoy dem ga aylandi' },
        { german: 'das Auto -> mit dem Auto', highlight: 'das -> dem', uzbek: 'Sredniy ham dem ga aylandi!' },
        { german: 'die U-Bahn -> mit der U-Bahn', highlight: 'die -> der', uzbek: 'Jenskiy esa der ga aylandi!' }
      ],
      patternExplanationUz: '"mit" predlogi bilan doimo DATIV kelishigi ishlatiladi: der va das bo‘lsa "dem", die bo‘lsa "der".',
      ruleFormulaUz: 'mit + Dativ: mit dem (der/das) | mit der (die) | mit den ...-n (Plural)'
    },
    grammar: [
      {
        id: 'gra-m5-2',
        lessonId: 'les-14',
        levelCode: 'a1-2',
        titleDe: 'Die Präposition "mit" + Dativ',
        titleUz: '"mit" predlogi va Dativ kelishigi',
        summaryUz: 'Transport vositasi vositasida harakatlanganda nemis tilida "mit + Dativ" ishlatiladi. der/das -> dem, die -> der bo‘ladi.',
        explanationUz: `**Dativ kelishigida artikllar o‘zgarishi:**
- **Maskulin (der):** **der -> dem** (*mit dem Bus, mit dem Zug*)
- **Neutrum (das):** **das -> dem** (*mit dem Auto, mit dem Fahrrad, mit dem Flugzeug*)
- **Feminin (die):** **die -> der** (*mit der U-Bahn, mit der Straßenbahn, mit der Bahn*)
- **Plural (die):** **die -> den (+ n):** (*mit den Zügen, mit den Fahrrädern*)

**Piyoda yurish:**
Piyoda yurish uchun "mit" ishlatilmaydi, uning o‘rniga:
- ***zu Fuß gehen*** (piyoda bormoq): *Ich gehe zu Fuß zur Schule.*`,
        wordOrderRuleUz: '"mit" predlogli birikma odatda fe‘ldan keyin keladi: "Ich fahre mit dem Bus."',
        tables: [
          {
            title: 'Transport vositalari bilan "mit + Dativ"',
            headers: ['Bosh kelishik (Nominativ)', 'mit + Dativ', 'O‘zbekcha tarjimasi'],
            rows: [
              ['der Bus', 'mit dem Bus', 'avtobusda'],
              ['der Zug', 'mit dem Zug', 'poyezdda'],
              ['das Auto', 'mit dem Auto', 'mashinada'],
              ['das Fahrrad', 'mit dem Fahrrad', 'velosipedda'],
              ['die U-Bahn', 'mit der U-Bahn', 'metroda'],
              ['die Straßenbahn', 'mit der Straßenbahn', 'tramvayda']
            ]
          }
        ],
        examples: [
          { german: 'Fährst du mit dem Bus oder mit der Bahn?', uzbek: 'Avtobusda borasanmi yoki poyezddami?', highlight: 'mit dem / mit der' },
          { german: 'Ich fahre jeden Tag mit dem Fahrrad.', uzbek: 'Men har kuni velosipedda yuraman.', highlight: 'mit dem Fahrrad' }
        ],
        commonMistakes: [
          {
            incorrect: 'Ich fahre mit der Bus.',
            correct: 'Ich fahre mit dem Bus.',
            explanationUz: '"Bus" erkak jinsida (der Bus) bo‘lgani uchun Dativda "mit dem Bus" bo‘ladi.'
          },
          {
            incorrect: 'Ich fahre mit Fuß.',
            correct: 'Ich gehe zu Fuß.',
            explanationUz: 'Piyoda yurish "zu Fuß gehen" deb aytiladi.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Durchsage am Bahnhof',
      titleUz: 'Vokzaldagi e‘lon',
      situationUz: 'Poyezd kutayotgan yo‘lovchilar perronda e‘lonni tinglamoqda.',
      audioTranscriptDe: 'Durchsage: Achtung an Gleis 5! Der Intercity-Express ICE 725 nach München über Nürnberg, planmäßige Abfahrt um 10 Uhr 15, fährt heute mit etwa 20 Minuten Verspätung ein. Grund dafür ist eine technische Störung. Wir bitten um Entschuldigung.',
      translationUz: 'E‘lon: 5-yo‘lakdagi yo‘lovchilar diqqatiga! Nyurnberg orqali Myunxenga boruvchi, soat 10:15 da jo‘nashi kerak bo‘lgan ICE 725 tezyurar poyezdi bugun taxminan 20 daqiqa kechikish bilan keladi. Bunga sabab texnik nosozlikdir. Uzr so‘raymiz.',
      stage1Global: {
        instructionUz: '1-Bosqich: E‘lon nima haqida ekanini aniqlang.',
        questionUz: 'E‘londa poyezd haqida nima aytildi?',
        options: ['Bekor qilinganligi', '20 daqiqa kechikishi (Verspätung)', 'Erta yetib kelganligi', 'Boshqa bekatga ketganligi'],
        correctIndex: 1,
        explanationUz: 'E‘londa "fährt heute mit etwa 20 Minuten Verspätung ein" deb e‘lon qilindi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Tafsilotlarni aniqlang.',
        questions: [
          {
            id: 'l14-q1',
            questionUz: 'Poyezd qaysi yo‘lakka (Gleis) keladi?',
            options: ['Gleis 1', 'Gleis 3', 'Gleis 5 (fünf)', 'Gleis 10'],
            correctIndex: 2,
            explanationUz: 'E‘lon boshida "Achtung an Gleis 5!" deyilgan.'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Durchsage', textDe: 'Achtung an Gleis 5!', textUz: '5-yo‘lakdagi yo‘lovchilar diqqatiga!' },
          { speaker: 'Durchsage', textDe: 'Der Zug fährt mit Verspätung ein.', textUz: 'Poyezd kechikish bilan kelmoqda.' }
        ],
        keyVocabulary: [
          { german: 'die Verspätung', uzbek: 'kechikish' },
          { german: 'die Störung', uzbek: 'nosozlik, to‘sqinlik' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-m5-2',
        lessonId: 'les-14',
        levelCode: 'a1-2',
        titleDe: 'Mobil in Berlin',
        titleUz: 'Berlinda harakatlanish',
        textDe: 'In Berlin braucht man kein eigenes Auto. Der öffentliche Nahverkehr ist hervorragend. Es gibt S-Bahnen, U-Bahnen, Busse und Trams. Mit der U-Bahnlinie U2 oder U6 kommt man schnell durch die ganze Stadt. Viele Berliner fahren auch gern mit dem Fahrrad, denn es gibt viele Fahrradwege. Touristen können an jeder Station Tagestickets kaufen.',
        translationUz: 'Berlinda shaxsiy mashina kerak emas. Jamoat transporti a‘lo darajada. Shahar poyezdlari (S-Bahn), metrolar (U-Bahn), avtobuslar va tramvaylar bor. U2 yoki U6 metro yo‘nalishida butun shahar bo‘ylab tez yetib borish mumkin. Ko‘plab berlinliklar velosipedda yurishni ham yoqtirishadi, chunki veloyo‘laklar ko‘p. Sayyohlar esa har bir bekatdan kunlik chiptalar olishlari mumkin.',
        vocabularyHints: [
          { german: 'der Nahverkehr', uzbek: 'shahar jamoat transporti' },
          { german: 'hervorragend', uzbek: 'a‘lo darajada' },
          { german: 'das Tagesticket', uzbek: 'kunlik chipta' }
        ],
        questions: [
          {
            id: 'rq-m5-2',
            questionUz: 'Berlinliklar nega shaxsiy mashinaga ko‘p ehtiyoj sezmaydilar?',
            options: ['Benzin yo‘qligi sababli', 'Jamoat transporti a‘lo darajada bo‘lgani uchun (öffentlicher Nahverkehr ist hervorragend)', 'Yurish taqiqlanganligi sababli', 'Shahar kichikligi uchun'],
            correctIndex: 1,
            explanationUz: 'Matnda "Der öffentliche Nahverkehr ist hervorragend" deb ta‘kidlangan.'
          }
        ]
      }
    ],
    writingScaffold: {
      taskTitleUz: 'Har kungi transport tanlovingiz haqida yozish',
      promptUz: 'Ishga yoki o‘qishga qaysi transport vositasida borishingiz haqida 3-4 jumla yozing ("mit dem / mit der" iborasini to‘g‘ri qo‘llang).',
      taskInstructionsUz: '1. O‘qishga qanday borishingizni ayting\n2. Qaysi transportni afzal ko‘rishingizni yozing\n3. Qachon piyoda yurishingizni bildiring (zu Fuß)',
      controlledScaffolding: {
        stepTitleUz: 'Jumla namunalari:',
        sentenceStarters: [
          'Ich fahre jeden Tag mit dem / mit der...',
          'Manchmal fahre ich auch mit...',
          'Wenn das Wetter schön ist, gehe ich zu Fuß.'
        ]
      },
      usefulVocabulary: [
        { german: 'mit dem Bus / mit der U-Bahn', uzbek: 'avtobusda / metroda' },
        { german: 'mit dem Fahrrad', uzbek: 'velosipedda' },
        { german: 'zu Fuß gehen', uzbek: 'piyoda yurmoq' }
      ],
      modelAnswerDe: 'Ich fahre jeden Morgen mit der U-Bahn zur Universität. Manchmal nehme ich auch den Bus. Wenn das Wetter schön ist, fahre ich gern mit dem Fahrrad.',
      modelAnswerUz: 'Men har kuni ertalab metroda universitetga boraman. Ba‘zan avtobusga ham chiqaman. Havo yaxshi bo‘lsa, velosipedda yurishni yaxshi ko‘raman.'
    },
    shadowing: [
      {
        id: 'sha-m5-3',
        lessonId: 'les-14',
        levelCode: 'a1-2',
        sentenceDe: 'Fährst du lieber mit dem Bus oder mit der U-Bahn?',
        translationUz: 'Avtobusda yurishni ma‘qul ko‘rasanmi yoki metrodami?',
        phoneticHint: '[Fe:rst du li:-ber mit dem Bus o-der mit der U:-ba:n?]',
        orderIndex: 1
      },
      {
        id: 'sha-m5-4',
        lessonId: 'les-14',
        levelCode: 'a1-2',
        sentenceDe: 'Ich fahre jeden Tag mit dem Fahrrad zur Arbeit.',
        translationUz: 'Men har kuni velosipedda ishga boraman.',
        phoneticHint: '[Iç fa:-re ye:-den Tak mit dem Fa:r-ra:t tsur Ar-bayt.]',
        orderIndex: 2
      }
    ],
    practice: [
      {
        id: 'ex-m5-3',
        lessonId: 'les-14',
        type: 'multiple-choice',
        questionUz: '"mit" predlogidan keyin "die U-Bahn" qanday bo‘ladi?',
        options: ['mit die U-Bahn', 'mit der U-Bahn', 'mit dem U-Bahn', 'mit den U-Bahn'],
        correctAnswer: 'mit der U-Bahn',
        explanationUz: '"U-Bahn" ayol jinsida bo‘lib, "mit" dan keyin Dativda "der" bo‘ladi: "mit der U-Bahn".',
        mistakeTipUz: '❌ Ayol jinsidagi so‘zlar Dativda "der" oladi.'
      },
      {
        id: 'ex-m5-4',
        lessonId: 'les-14',
        type: 'fill-blank',
        questionUz: '"das Auto" bilan to‘g‘ri artiklni qo‘ying: "Er fährt mit _____ Auto."',
        blankSentence: 'Er fährt mit [blank] Auto.',
        options: ['dem', 'der', 'das', 'den'],
        correctAnswer: 'dem',
        explanationUz: '"das Auto" sredniy rod bo‘lib, Dativda "dem" bo‘ladi: "mit dem Auto".',
        mistakeTipUz: '❌ "das" rodidagi so‘zlar Dativda "dem" bo‘ladi.'
      }
    ],
    listening: [],
    writing: []
  },

  // ==========================================
  // LEKTION 15: Im Hotel (Hotelreservierung & Modalverben können / müssen)
  // ==========================================
  {
    id: 'les-15',
    moduleId: 'mod-a1-2-1',
    levelCode: 'a1-2',
    titleDe: 'Lektion 15: Im Hotel',
    titleUz: '15-Dars: Mehmonxonada (Xona band qilish va Modal fe‘llar: können, müssen)',
    descriptionUz: 'Mehmonxonada xona band qilish (Einzelzimmer, Doppelzimmer, mit Frühstück), muammolarni xabar qilish va modal fe‘llar: "können" (qila olmoq) hamda "müssen" (shart bo‘lmoq).',
    orderIndex: 15,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Mehmonxona xonasini band qilish (Ich möchte ein Einzelzimmer / Doppelzimmer)',
      '"können" (imkoniyat) va "müssen" (majburiyat) modal fe‘llarini to‘g‘ri tuslash',
      'Modal fe‘l bilan gap tuzganda ikkinchi fe‘lni infinitiv holida gap oxiriga qo‘yish (Satzklammer)'
    ],
    warmUp: {
      situationUz: 'Germaniyaga sayohatga bordingiz va mehmonxona resepshinida buyurtma qilingan xonangiz kalitini olmoqchisiz.',
      curiosityQuestionUz: 'Nemis tilida "Men bu yerda qolishim shart" deganda nima sababdan "müssen" 2-o‘rinda kelib, asosiy fe‘l eng oxirga tushadi?',
      miniDialogue: [
        { speaker: 'Rezeptionist', textDe: 'Guten Tag! Haben Sie eine Reservierung?', textUz: 'Xayrli kun! Band qilganmidingiz?' },
        { speaker: 'Gast', textDe: 'Guten Tag! Ja, mein Name ist Sardor Rahimov. Ich habe ein Einzelzimmer reserviert.', textUz: 'Xayrli kun! Ha, ismim Sardor Rahimov. Bitta bir kishilik xona band qilganman.' }
      ],
      hintUz: 'Nemis tilida modal fe‘llar 2-o‘rinda tuslanadi, gapning asosiy ma‘nodagi fe‘li esa gap oxirida noaniq (infinitiv) shaklda turadi.'
    },
    contextDialogue: {
      titleDe: 'An der Hotelrezeption',
      titleUz: 'Mehmonxona resepshinida',
      situationUz: 'Mehmonxonaga kelgan sayyoh xona olish va qulayliklar haqida ma‘lumot so‘ramoqda.',
      lines: [
        { speaker: 'Empfangschef', textDe: 'Guten Abend! Herzlich willkommen im Hotel Stadtblick. Wie kann ich Ihnen helfen?', textUz: 'Xayrli kech! Stadtblick mehmonxonasiga xush kelibsiz. Sizga qanday yordam bera olaman?' },
        { speaker: 'Frau Alimova', textDe: 'Guten Abend! Haben Sie noch ein freies Doppelzimmer für zwei Nächte?', textUz: 'Xayrli kech! Sizda ikki kechaga bo‘sh ikki kishilik xona bormi?' },
        { speaker: 'Empfangschef', textDe: 'Ja, wir haben noch ein schönes Zimmer im dritten Stock mit Blick auf den Park.', textUz: 'Ha, uchinchi qavatda parkka qaragan chiroyli xonamiz bor.' },
        { speaker: 'Frau Alimova', textDe: 'Ist das Frühstück im Preis inbegriffen?', textUz: 'Nonushta narx ichiga kiritilganmi?' },
        { speaker: 'Empfangschef', textDe: 'Ja, das Frühstücksbuffet können Sie von 7 bis 10 Uhr nutzen.', textUz: 'Ha, soat 7 dan 10 gacha shved stoli nonushtasidan foydalanishingiz mumkin.' },
        { speaker: 'Frau Alimova', textDe: 'Wunderbar. Kann ich mit Kreditkarte bezahlen?', textUz: 'Ajoyib. Kredit karta bilan to‘lasam bo‘ladimi?' },
        { speaker: 'Empfangschef', textDe: 'Selbstverständlich. Hier ist Ihre Zimmerkarte für Zimmer 304. Der Aufzug ist gleich links.', textUz: 'Albatta. Mana 304-xona uchun elektron kalitingiz. Lift roppa-rosa chap tomonda.' }
      ],
      usefulPhrases: [
        { german: 'Ich möchte ein Zimmer reservieren.', uzbek: 'Xona band qilmoqchiman.' },
        { german: 'das Einzelzimmer / das Doppelzimmer', uzbek: 'bir kishilik xona / ikki kishilik xona' },
        { german: 'mit Frühstück / ohne Frühstück', uzbek: 'nonushtali / nonushtasiz' },
        { german: 'Wie ist das WLAN-Passwort?', uzbek: 'Wi-Fi paroli qanday?' },
        { german: 'Die Klimaanlage funktioniert nicht.', uzbek: 'Konditsioner ishlamayapti.' }
      ],
      culturalNoteUz: 'Germaniyada mehmonxonalarda ro‘yxatdan o‘tish (Check-in) vaqti odatda soat 14:00 yoki 15:00 dan boshlanadi, chiqish (Check-out) esa 11:00 gacha amalga oshiriladi.'
    },
    vocabulary: [
      {
        id: 'voc-m5-21',
        lessonId: 'les-15',
        levelCode: 'a1-2',
        german: 'das Hotel',
        article: 'das',
        plural: 'die Hotels',
        uzbek: 'mehmonxona',
        exampleDe: 'Das Hotel ist sehr modern.',
        exampleUz: 'Mehmonxona juda zamonaviy.',
        wordType: 'noun'
      },
      {
        id: 'voc-m5-22',
        lessonId: 'les-15',
        levelCode: 'a1-2',
        german: 'das Einzelzimmer',
        article: 'das',
        plural: 'die Einzelzimmer',
        uzbek: 'bir kishilik xona',
        exampleDe: 'Ich brauche ein Einzelzimmer.',
        exampleUz: 'Menga bir kishilik xona kerak.',
        wordType: 'noun'
      },
      {
        id: 'voc-m5-23',
        lessonId: 'les-15',
        levelCode: 'a1-2',
        german: 'das Doppelzimmer',
        article: 'das',
        plural: 'die Doppelzimmer',
        uzbek: 'ikki kishilik xona',
        exampleDe: 'Haben Sie ein Doppelzimmer frei?',
        exampleUz: 'Bo‘sh ikki kishilik xonangiz bormi?',
        wordType: 'noun'
      },
      {
        id: 'voc-m5-24',
        lessonId: 'les-15',
        levelCode: 'a1-2',
        german: 'der Schlüssel / die Zimmerkarte',
        article: 'der',
        plural: 'die Schlüssel',
        uzbek: 'kalit / xona kartasi',
        exampleDe: 'Hier ist Ihr Schlüssel.',
        exampleUz: 'Mana sizning kalitingiz.',
        wordType: 'noun'
      },
      {
        id: 'voc-m5-25',
        lessonId: 'les-15',
        levelCode: 'a1-2',
        german: 'der Aufzug / der Fahrstuhl',
        article: 'der',
        plural: 'die Aufzüge',
        uzbek: 'lift',
        exampleDe: 'Der Aufzug ist da drüben.',
        exampleUz: 'Lift anavi yerda.',
        wordType: 'noun'
      },
      {
        id: 'voc-m5-26',
        lessonId: 'les-15',
        levelCode: 'a1-2',
        german: 'können',
        article: null,
        plural: null,
        uzbek: 'qila olmoq, eplay olmoq (imkoniyat/qobiliyat)',
        exampleDe: 'Kann ich Ihnen helfen?',
        exampleUz: 'Sizga yordam bera olamanmi?',
        wordType: 'verb'
      },
      {
        id: 'voc-m5-27',
        lessonId: 'les-15',
        levelCode: 'a1-2',
        german: 'müssen',
        article: null,
        plural: null,
        uzbek: 'majbur bo‘lmoq, shart bo‘lmoq',
        exampleDe: 'Ich muss morgen früh aufstehen.',
        exampleUz: 'Ertaga erta turishim shart.',
        wordType: 'verb'
      },
      {
        id: 'voc-m5-28',
        lessonId: 'les-15',
        levelCode: 'a1-2',
        german: 'funktionieren',
        article: null,
        plural: null,
        uzbek: 'ishlamoq, soz holatda bo‘lmoq',
        exampleDe: 'Die Dusche funktioniert nicht.',
        exampleUz: 'Dush ishlamayapti.',
        wordType: 'verb'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'Modal fe‘lli gaplarda ikkinchi fe‘lning shakli va gapdagi o‘rniga e‘tibor bering:',
      discoveryExamples: [
        { german: 'Ich kann gut Deutsch sprechen.', highlight: 'kann (Pos. 2) ... sprechen (Ende)', uzbek: 'kann 2-o‘rinda, sprechen esa eng oxirida!' },
        { german: 'Wir müssen um 11 Uhr das Zimmer verlassen.', highlight: 'müssen (Pos. 2) ... verlassen (Ende)', uzbek: 'müssen 2-o‘rinda, verlassen oxirida!' }
      ],
      patternExplanationUz: 'Modal fe‘l gapda 2-o‘rinda tuslanadi, asosiy ma‘nodagi ikkinchi fe‘l esa infinitiv (o‘zgarmas) shaklda gapning ENG OXIRIGA tushadi (Satzklammer).',
      ruleFormulaUz: 'Modalverb (Pos. 2) + ... + Infinitiv (Satzende)'
    },
    grammar: [
      {
        id: 'gra-m5-3',
        lessonId: 'les-15',
        levelCode: 'a1-2',
        titleDe: 'Die Modalverben "können" und "müssen"',
        titleUz: '"können" va "müssen" modal fe‘llari',
        summaryUz: '"können" imkoniyat va qobiliyatni ("qila olmoq"), "müssen" esa zarurat va majburiyatni ("shart / kerak") bildiradi. Ikkinchi fe‘l gap oxirida infinitiv bo‘lib turadi.',
        explanationUz: `**1. "können" (qila olmoq) fe‘li tuslanishi:**
- ich **kann** (Umlaut yo‘qoladi!)
- du **kannst**
- er / sie / es **kann** (ich va er bir xil!)
- wir **können**
- ihr **könnt**
- sie / Sie **können**

**2. "müssen" (majbur bo‘lmoq / kerak) fe‘li tuslanishi:**
- ich **muss** (Umlaut yo‘qoladi!)
- du **musst**
- er / sie / es **muss** (ich va er bir xil!)
- wir **müssen**
- ihr **müsst**
- sie / Sie **müssen**

**3. Satzklammer (Qavs qoidasi):**
- *Ich **kann** heute nicht **kommen**.* (Men bugun kela olmayman.)
- *Sie **müssen** das Formular **ausfüllen**.* (Siz anketani to‘ldirishingiz shart.)
- *Hier **kann** man gut **schlafen**.* (Bu yerda yaxshi uxlash mumkin.)`,
        wordOrderRuleUz: 'Modal fe‘l 2-o‘rinda, asosiy fe‘l esa doimo gap oxirida infinitivda: "Ich muss (2) heute arbeiten (oxirida)."',
        tables: [
          {
            title: 'können va müssen tuslanish jadvali',
            headers: ['Shaxs', 'können (qila olmoq)', 'müssen (shart bo‘lmoq)'],
            rows: [
              ['ich', 'kann', 'muss'],
              ['du', 'kannst', 'musst'],
              ['er / sie / es', 'kann', 'muss'],
              ['wir', 'können', 'müssen'],
              ['ihr', 'könnt', 'müsst'],
              ['sie / Sie', 'können', 'müssen']
            ]
          }
        ],
        examples: [
          { german: 'Kann ich bitte den Schlüssel haben?', uzbek: 'Kalitni olsam bo‘ladimi, iltimos?', highlight: 'Kann ... haben' },
          { german: 'Wir müssen bis 11 Uhr auschecken.', uzbek: 'Biz soat 11 gacha chiqib ketishimiz shart.', highlight: 'müssen ... auschecken' }
        ],
        commonMistakes: [
          {
            incorrect: 'Er kannt schwimmen.',
            correct: 'Er kann schwimmen.',
            explanationUz: 'Modal fe‘llarda "er" qo‘shimcha olmaydi va "ich" bilan bir xil bo‘ladi: er kann.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Ein Problem im Hotelzimmer',
      titleUz: 'Mehmonxona xonasidagi muammo',
      situationUz: 'Mehmon xonadagi nosozlik sababli resepshinga qo‘ng‘iroq qilmoqda.',
      audioTranscriptDe: 'Gast: Hallo, Rezeption? Hier ist Herr Weber aus Zimmer 205.\nRezeption: Ja, Herr Weber, was kann ich für Sie tun?\nGast: In meinem Zimmer funktioniert die Heizung nicht und es ist sehr kalt. Außerdem kann ich das Fenster nicht richtig schließen.\nRezeption: Das tut uns sehr leid! Ich schicke sofort unseren Haustechniker zu Ihnen nach oben.',
      translationUz: 'Mehmon: Salom, resepshinmi? Bu 205-xonadan janob Veber.\nResepshin: Ha, janob Veber, sizga qanday yordam bera olaman?\nMehmon: Xonamda isitish tizimi (batareya) ishlamayapti va juda sovuq. Bundan tashqari derazani to‘g‘ri yopa olmayapman.\nResepshin: Biz bundan juda afsusdamiz! Hozirroq texnik ustamizni yoningizga yuqoriga yuboraman.',
      stage1Global: {
        instructionUz: '1-Bosqich: Muammoning tub mohiyatini tushuning.',
        questionUz: 'Mehmon nima sababdan resepshinga qo‘ng‘iroq qildi?',
        options: ['Ovqat buyurtma qilish uchun', 'Isitish va deraza ishlamayotgani sababli (Heizung funktioniert nicht)', 'Hisobni to‘lash uchun', 'Chipta so‘rash uchun'],
        correctIndex: 1,
        explanationUz: 'Janob Veber "die Heizung funktioniert nicht und es ist sehr kalt" dedi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Xona raqamini aniqlang.',
        questions: [
          {
            id: 'l15-q1',
            questionUz: 'Mehmon nechanchi xonada yashamoqda?',
            options: ['Zimmer 105', 'Zimmer 205', 'Zimmer 305', 'Zimmer 405'],
            correctIndex: 1,
            explanationUz: 'U "Hier ist Herr Weber aus Zimmer 205" dedi.'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Gast', textDe: 'Die Heizung funktioniert nicht.', textUz: 'Isitish ishlamayapti.' },
          { speaker: 'Rezeption', textDe: 'Ich schicke sofort einen Techniker.', textUz: 'Hoziroq ustani yuboraman.' }
        ],
        keyVocabulary: [
          { german: 'die Heizung', uzbek: 'isitish batareyasi' },
          { german: 'der Haustechniker', uzbek: 'bino ustasi, santexnik' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-m5-3',
        lessonId: 'les-15',
        titleDe: 'Hotelinformation für unsere Gäste',
        titleUz: 'Mehmonlarimiz uchun ma‘lumotnoma',
        textDe: 'Liebe Gäste, willkommen im Hotel Alpenrose! Das Frühstücksbuffet steht Ihnen täglich von 6:30 bis 10:00 Uhr zur Verfügung. Unser Wellnessbereich mit Sauna und Pool ist von 15 bis 22 Uhr geöffnet. Bitte beachten Sie: Sie müssen am Abreisetag Ihr Zimmer bis spätestens 11:00 Uhr freigeben. Kostenloses Highspeed-WLAN können Sie im gesamten Haus mit dem Passwort "Alpen2026" nutzen. Einen schönen Aufenthalt!',
        translationUz: 'Hurmatli mehmonlar, Alpenrose mehmonxonasiga xush kelibsiz! Shved stoli nonushtasi har kuni 6:30 dan 10:00 gacha xizmatingizda. Sauna va basseynli dam olish hududimiz soat 15:00 dan 22:00 gacha ochiq. Iltimos e‘tibor bering: Jo‘nab ketish kunida xonangizni eng kechi bilan soat 11:00 gacha topshirishingiz shart. Butun bino bo‘ylab bepul tezkor Wi-Fi tarmog‘idan "Alpen2026" paroli orqali foydalanishingiz mumkin. Maroqli hordiq tilaymiz!',
        vocabularyHints: [
          { german: 'zur Verfügung stehen', uzbek: 'ixtiyoringizda bo‘lmoq' },
          { german: 'am Abreisetag', uzbek: 'jo‘nab ketish kunida' },
          { german: 'der Aufenthalt', uzbek: 'tashrif, yashash muddati' }
        ],
        questions: [
          {
            id: 'rq-m5-3',
            questionUz: 'Mehmonlar xonani eng kechi bilan soat nechada bo‘shatishlari kerak?',
            options: ['10:00 da', '11:00 da (bis spätestens 11:00 Uhr)', '12:00 da', '14:00 da'],
            correctIndex: 1,
            explanationUz: 'Matnda "bis spätestens 11:00 Uhr freigeben" deb yozilgan.'
          }
        ]
      }
    ],
    writingScaffold: {
      taskTitleUz: 'Mehmonxonaga xona band qilish xati yozish',
      promptUz: 'Mehmonxonaga elektron xat yozib, qaysi kunga, nechta xona va nonushta kerakligini bildiring ("Ich möchte ein... reservieren", "Können Sie...").',
      taskInstructionsUz: '1. Rasmiy salomlashing (Sehr geehrte Damen und Herren)\n2. Qaysi sanaga bir kishilik yoki ikki kishilik xona kerakligini yozing\n3. Nonushta va narxini so‘rang\n4. Hurmat bilan yakunlang (Mit freundlichen Grüßen)',
      controlledScaffolding: {
        stepTitleUz: 'Jumla namunalari:',
        sentenceStarters: [
          'Sehr geehrte Damen und Herren,',
          'ich möchte ein Doppelzimmer von... bis... reservieren.',
          'Ist das Frühstück im Preis inbegriffen?',
          'Mit freundlichen Grüßen'
        ]
      },
      usefulVocabulary: [
        { german: 'reservieren', uzbek: 'band qilmoq' },
        { german: 'das Einzelzimmer / Doppelzimmer', uzbek: 'bir / ikki kishilik xona' },
        { german: 'das Frühstück', uzbek: 'nonushta' }
      ],
      modelAnswerDe: 'Sehr geehrte Damen und Herren, ich möchte ein Einzelzimmer für drei Nächte vom 10. bis 13. Mai reservieren. Was kostet das Zimmer mit Frühstück? Kann ich mit Kreditkarte bezahlen? Mit freundlichen Grüßen, Sardor Rahimov.',
      modelAnswerUz: 'Hurmatli xonimlar va janoblar, men 10-maydan 13-maygacha uch kechaga bir kishilik xona band qilmoqchiman. Nonushta bilan xona narxi qancha bo‘ladi? Kredit karta bilan to‘lasam bo‘ladimi? Hurmat bilan, Sardor Rahimov.'
    },
    shadowing: [
      {
        id: 'sha-m5-5',
        lessonId: 'les-15',
        levelCode: 'a1-2',
        sentenceDe: 'Kann ich bitte ein Doppelzimmer mit Frühstück reservieren?',
        translationUz: 'Nonushtali ikki kishilik xona band qilsam bo‘ladimi, iltimos?',
        phoneticHint: '[Kann iç bit-te ayn Dop-pel-tsim-mer mit Fry:-shtyk re-zer-vi:-ren?]',
        orderIndex: 1
      },
      {
        id: 'sha-m5-6',
        lessonId: 'les-15',
        levelCode: 'a1-2',
        sentenceDe: 'Wir müssen bis elf Uhr das Zimmer verlassen.',
        translationUz: 'Biz soat o‘n birgacha xonani bo‘shatishimiz shart.',
        phoneticHint: '[Vi:r mys-sen bis elf U:r das Tsim-mer fer-las-sen.]',
        orderIndex: 2
      }
    ],
    practice: [
      {
        id: 'ex-m5-5',
        lessonId: 'les-15',
        type: 'multiple-choice',
        questionUz: '"können" fe‘lining "er" shaxsiga mos shakli qaysi?',
        options: ['er könnt', 'er kann', 'er kannt', 'er können'],
        correctAnswer: 'er kann',
        explanationUz: '"er" uchun "kann" bo‘ladi: er kann gut Deutsch sprechen.',
        mistakeTipUz: '❌ "er" uchun "kann" ishlatiladi.'
      },
      {
        id: 'ex-m5-6',
        lessonId: 'les-15',
        type: 'word-order',
        questionUz: 'Modal fe‘lli gapni to‘g‘ri so‘z tartibida tuzing (Asosiy fe‘l oxirida!):',
        scrambledWords: ['muss', 'Ich', 'morgen', 'arbeiten', 'früh'],
        correctAnswer: 'Ich muss morgen früh arbeiten',
        explanationUz: 'Ich (1) + muss (2) + morgen früh (3) + arbeiten (eng oxirida infinitiv).',
        mistakeTipUz: '❌ Modal fe‘lli gapda ikkinchi fe‘l gapning eng oxirida keladi.'
      }
    ],
    listening: [],
    writing: []
  }
];
