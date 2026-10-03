import { Lesson } from '../../types/database';

export const MODULE_7_A12_LESSONS: Lesson[] = [
  // ==========================================
  // LEKTION 19: Die Wohnung einrichten (Wo? + Dativ)
  // ==========================================
  {
    id: 'les-19',
    moduleId: 'mod-a1-2-3',
    levelCode: 'a1-2',
    titleDe: 'Lektion 19: Die Wohnung einrichten',
    titleUz: '19-Dars: Xonadonni jihozlash (Mebellar o‘rni va "Wo?" + Dativ)',
    descriptionUz: 'Kvartirada mebellar joylashuvi, o‘rin-joy predloglari (Wechselpräpositionen: in, an, auf, unter, über, vor, hinter, neben, zwischen), "Wo?" (qayerda?) so‘rog‘i bilan Dativ va holat fe‘llari (stehen, liegen, hängen).',
    orderIndex: 19,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Xonadagi buyumlarning qayerda turganini tasvirlash (stehen, liegen, hängen)',
      '"Wo?" (qayerda?) savoli bilan Wechselpräpositionen doimo Dativ talab qilishini tushunish',
      'Predloglarni (auf dem Tisch, an der Wand, im Zimmer, neben dem Bett) to‘g‘ri qo‘llash'
    ],
    warmUp: {
      situationUz: 'Yangi ijaraga olingan kvartiraga ko‘chib o‘tdingiz va xonangizda buyumlar qayerda joylashganini do‘stingizga aytib bermoqchisiz.',
      curiosityQuestionUz: 'Nemis tilida "noutbuk stol ustida" deganda nega "auf dem Tisch" (dem bilan) deyiladi?',
      miniDialogue: [
        { speaker: 'Anna', textDe: 'Wo ist dein Laptop?', textUz: 'Noutbuging qayerda?' },
        { speaker: 'Karim', textDe: 'Er liegt auf dem Schreibtisch.', textUz: 'U yozuv stoli ustida yotibdi.' }
      ],
      hintUz: '"Wo?" (qayerda?) savoli bilan o‘rin-joy predloglari doimo Dativ kelishigini oladi.'
    },
    contextDialogue: {
      titleDe: 'Das neue Wohnzimmer',
      titleUz: 'Yangi mehmonxona',
      situationUz: 'Ikki xonadosh yangi jihozlangan mehmonxona mebellarini ko‘zdan kechirmoqda.',
      lines: [
        { speaker: 'Lea', textDe: 'Wow, unser Wohnzimmer sieht wirklich gemütlich aus!', textUz: 'Oho, mehmonxonamiz haqiqatan ham juda shinam ko‘rinyapti!' },
        { speaker: 'Moritz', textDe: 'Ja, das Sofa steht perfekt an der Wand. Und wo ist der Teppich?', textUz: 'Ha, divan devor yonida ajoyib turibdi. Gilam qayerda?' },
        { speaker: 'Lea', textDe: 'Der Teppich liegt unter dem Couchtisch.', textUz: 'Gilam kofe stoli ostida yotibdi.' },
        { speaker: 'Moritz', textDe: 'Und wo hängen die Bilder?', textUz: 'Rasmlar qayerda osilib turibdi?' },
        { speaker: 'Lea', textDe: 'Sie hängen an der Wand über dem Sofa. Und die Lampe steht zwischen dem Regal und dem Fenster.', textUz: 'Ular devorda, divan ustida osilib turibdi. Lampa esa javon va deraza o‘rtasida turibdi.' },
        { speaker: 'Moritz', textDe: 'Das gefällt mir sehr gut!', textUz: 'Bu menga juda yoqdi!' }
      ],
      usefulPhrases: [
        { german: 'Wo ist / steht / liegt / hängt...?', uzbek: '... qayerda turibdi / yotibdi / osilib turibdi?' },
        { german: 'auf dem Tisch / an der Wand', uzbek: 'stol ustida / devorda' },
        { german: 'unter dem Bett / über dem Sofa', uzbek: 'karovot tagida / divan ustida' },
        { german: 'zwischen dem Schrank und der Tür', uzbek: 'shkaf va eshik o‘rtasida' }
      ],
      culturalNoteUz: 'Nemis xonadonlarida mebel joylashtirishda tabiiy yorug‘likka (deraza oldiga yozuv stoli) va tartibga katta ahamiyat beriladi.'
    },
    vocabulary: [
      {
        id: 'voc-m7-1',
        lessonId: 'les-19',
        levelCode: 'a1-2',
        german: 'der Teppich',
        article: 'der',
        plural: 'die Teppiche',
        uzbek: 'gilam',
        exampleDe: 'Der Teppich liegt auf dem Boden.',
        exampleUz: 'Gilam pol ustida yotibdi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m7-2',
        lessonId: 'les-19',
        levelCode: 'a1-2',
        german: 'die Wand',
        article: 'die',
        plural: 'die Wände',
        uzbek: 'devor',
        exampleDe: 'Das Bild hängt an der Wand.',
        exampleUz: 'Rasm devorda osilib turibdi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m7-3',
        lessonId: 'les-19',
        levelCode: 'a1-2',
        german: 'das Regal',
        article: 'das',
        plural: 'die Regale',
        uzbek: 'polka, javon',
        exampleDe: 'Die Bücher stehen im Regal.',
        exampleUz: 'Kitoblar javonda turibdi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m7-4',
        lessonId: 'les-19',
        levelCode: 'a1-2',
        german: 'stehen',
        article: null,
        plural: null,
        uzbek: 'tik turmoq',
        exampleDe: 'Der Schrank steht in der Ecke.',
        exampleUz: 'Shkaf burchakda turibdi.',
        wordType: 'verb'
      },
      {
        id: 'voc-m7-5',
        lessonId: 'les-19',
        levelCode: 'a1-2',
        german: 'liegen',
        article: null,
        plural: null,
        uzbek: 'yotmoq (yotiq holatda)',
        exampleDe: 'Das Buch liegt auf dem Tisch.',
        exampleUz: 'Kitob stol ustida yotibdi.',
        wordType: 'verb'
      },
      {
        id: 'voc-m7-6',
        lessonId: 'les-19',
        levelCode: 'a1-2',
        german: 'hängen',
        article: null,
        plural: null,
        uzbek: 'osilib turmoq',
        exampleDe: 'Die Lampe hängt an der Decke.',
        exampleUz: 'Chiroq shiftda osilib turibdi.',
        wordType: 'verb'
      },
      {
        id: 'voc-m7-7',
        lessonId: 'les-19',
        levelCode: 'a1-2',
        german: 'neben',
        article: null,
        plural: null,
        uzbek: 'yonida',
        exampleDe: 'Der Stuhl steht neben dem Tisch.',
        exampleUz: 'Stul stol yonida turibdi.',
        wordType: 'preposition'
      },
      {
        id: 'voc-m7-8',
        lessonId: 'les-19',
        levelCode: 'a1-2',
        german: 'zwischen',
        article: null,
        plural: null,
        uzbek: 'o‘rtasida, orasida',
        exampleDe: 'Er sitzt zwischen zwei Freunden.',
        exampleUz: 'U ikki do‘sti o‘rtasida o‘tiribdi.',
        wordType: 'preposition'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: '"Wo?" (qayerda?) savoliga berilgan javoblardagi predlog va artikllarga e‘tibor bering:',
      discoveryExamples: [
        { german: 'auf dem Tisch (der Tisch)', highlight: 'auf dem', uzbek: 'stol ustida (der -> dem)' },
        { german: 'an der Wand (die Wand)', highlight: 'an der', uzbek: 'devorda (die -> der)' },
        { german: 'unter dem Bett (das Bett)', highlight: 'unter dem', uzbek: 'karovot tagida (das -> dem)' }
      ],
      patternExplanationUz: '"Wo?" (qayerda?) so‘rog‘i bilan 9 ta o‘rin-joy predlogi (an, auf, in, neben, unter, über, vor, hinter, zwischen) DOIMO DATIV oladi!',
      ruleFormulaUz: 'Wo? + Wechselpräposition + Dativ (dem, der, dem, den...-n)'
    },
    grammar: [
      {
        id: 'gra-m7-1',
        lessonId: 'les-19',
        levelCode: 'a1-2',
        titleDe: 'Wechselpräpositionen mit Dativ (Wo?)',
        titleUz: 'O‘zgaruvchan predloglar va Dativ ("Wo?" so‘rog‘i)',
        summaryUz: 'Buyumning qayerdaligini (Wo?) aytganda 9 ta predlog Dativ kelishigini talab qiladi. Holat fe‘llari: stehen, liegen, hängen.',
        explanationUz: `**1. 9 ta o‘zgaruvchan predlog (Wechselpräpositionen):**
- **an** (vertikal yuzada / yonida): *an der Wand* (devorda)
- **auf** (gorizontal ustida): *auf dem Tisch* (stol ustida)
- **in** (ichida): *im Zimmer (in + dem)*
- **neben** (yonida): *neben dem Schrank*
- **unter** (ostida, tagida): *unter dem Bett*
- **über** (tepasida, ustida - tegilmagan): *über dem Sofa*
- **vor** (oldida): *vor der Tür*
- **hinter** (orqasida): *hinter dem Haus*
- **zwischen** (o‘rtasida): *zwischen den Stühlen*

**2. Holat fe‘llari (Positionsverben — doimo "Wo? + Dativ"):**
- **stehen** (tik turmoq): *Der Stuhl steht im Zimmer.*
- **liegen** (yotmoq): *Der Stift liegt auf dem Heft.*
- **hängen** (osilib turmoq): *Die Uhr hängt an der Wand.*`,
        wordOrderRuleUz: 'Wo? so‘rog‘i: "Wo (1) steht (2) der Tisch? - Er steht (2) im Wohnzimmer (3)."',
        tables: [
          {
            title: 'Wechselpräpositionen Dativda',
            headers: ['Predlog', 'Dativdagi misol', 'O‘zbekcha tarjimasi'],
            rows: [
              ['auf', 'auf dem Tisch (der Tisch)', 'stol ustida'],
              ['an', 'an der Wand (die Wand)', 'devorda'],
              ['in', 'im Schrank (der Schrank)', 'shkaf ichida'],
              ['unter', 'unter dem Bett (das Bett)', 'karovot tagida'],
              ['neben', 'neben der Tür (die Tür)', 'eshik yonida'],
              ['zwischen', 'zwischen dem Bett und dem Tisch', 'karovot va stol o‘rtasida']
            ]
          }
        ],
        examples: [
          { german: 'Wo liegt mein Handy? - Es liegt auf dem Sofa.', uzbek: 'Telefonim qayerda? - U divan ustida yotibdi.', highlight: 'auf dem Sofa' },
          { german: 'Das Bild hängt an der Wand.', uzbek: 'Rasm devorda osilib turibdi.', highlight: 'an der Wand' }
        ],
        commonMistakes: [
          {
            incorrect: 'Das Buch liegt auf den Tisch.',
            correct: 'Das Buch liegt auf dem Tisch.',
            explanationUz: '"Wo?" (qayerda?) so‘rog‘iga "auf" Dativ talab qiladi: der Tisch -> dem Tisch.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Wo sind meine Schlüssel?',
      titleUz: 'Kalitlarim qayerda?',
      situationUz: 'Er-xotin uydan chiqishdan oldin kalitlarni qidirmoqda.',
      audioTranscriptDe: 'Jan: Schatz, hast du meine Autoschlüssel gesehen? Ich suche sie schon überall!\nKatja: Liegen sie nicht auf der Kommode im Flur?\nJan: Nein, da liegen nur Briefe.\nKatja: Schau mal im Wohnzimmer auf dem Tisch nach!\nJan: Auch nicht... Ah, hier sind sie! Sie stecken noch in der Jackentasche an der Garderobe!\nKatja: Na siehst du, typisch Jan!',
      translationUz: 'Yan: Azizim, mashinamning kalitlarini ko‘rdingmi? Ularni hamma yoqdan qidiryapman!\nKatya: Dahliqdagi komod ustida yotmayaptimi?\nYan: Yo‘q, u yerda faqat xatlar yotibdi.\nKatya: Mehmonxonada stol ustini qarab ko‘r-chi!\nYan: Bu yerda ham yo‘q... Axa, mana ular! Hali ham kiyim ilgichdagi kurtkamning cho‘ntagida turgan ekan!\nKatya: Ana ko‘rdingmi, odatiy Yan!',
      stage1Global: {
        instructionUz: '1-Bosqich: Yo‘qolgan buyumni aniqlang.',
        questionUz: 'Jan nimani qidirayotgan edi?',
        options: ['Telefonini', 'Mashina kalitlarini (Autoschlüssel)', 'Hamyonini', 'Ko‘zoynagini'],
        correctIndex: 1,
        explanationUz: 'Jan "hast du meine Autoschlüssel gesehen?" deb so‘radi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Kalitlar qayerdan topilganini aniqlang.',
        questions: [
          {
            id: 'l19-q1',
            questionUz: 'Kalitlar qayerda ekan?',
            options: ['Stol ustida', 'Komod ustida', 'Kiyim ilgichdagi kurtka cho‘ntagida (in der Jackentasche)', 'Moshina ichida'],
            correctIndex: 2,
            explanationUz: 'U "in der Jackentasche an der Garderobe" dedi.'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Jan', textDe: 'Wo sind meine Schlüssel?', textUz: 'Kalitlarim qayerda?' },
          { speaker: 'Katja', textDe: 'Liegen sie auf der Kommode?', textUz: 'Komod ustida yotibdimi?' }
        ],
        keyVocabulary: [
          { german: 'die Kommode', uzbek: 'tumbochka, komod' },
          { german: 'die Garderobe', uzbek: 'kiyim ilgich' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-m7-1',
        lessonId: 'les-19',
        levelCode: 'a1-2',
        titleDe: 'Mein Arbeitszimmer',
        titleUz: 'Mening ish xonam',
        textDe: 'In meinem Arbeitszimmer herrscht Ordnung. Der große Schreibtisch steht direkt am Fenster, weil dort das Licht am besten ist. Auf dem Schreibtisch steht mein Computer und daneben liegt ein Notizblock. Über dem Schreibtisch hängt ein großes Bücherregal an der Wand. Die Fachbücher stehen ordentlich im Regal. Auf dem Boden vor dem Tisch liegt ein weicher blauer Teppich. Hier kann ich sehr konzentriert arbeiten.',
        translationUz: 'Mening ish xonamda tartib hukmron. Katta yozuv stoli to‘g‘ridan-to‘g‘ri deraza yonida turibdi, chunki u yerda yorug‘lik eng yaxshi. Yozuv stoli ustida kompyuterim turibdi va uning yonida daftarcha yotibdi. Yozuv stoli tepasida devorda katta kitob javoni osilib turibdi. Mutaxassislik kitoblari javonda tartibli terilgan. Stol oldida polda yumshoq ko‘k gilam yotibdi. Bu yerda juda diqqatni jamlab ishlay olaman.',
        vocabularyHints: [
          { german: 'Ordnung herrschen', uzbek: 'tartib hukm surmoq' },
          { german: 'das Fachbuch', uzbek: 'mutaxassislik kitobi' },
          { german: 'konzentriert', uzbek: 'diqqat bilan, diqqatni jamlab' }
        ],
        questions: [
          {
            id: 'rq-m7-1',
            questionUz: 'Kitob javoni qayerda osilib turibdi?',
            options: ['Eshik orqasida', 'Devorda, yozuv stoli tepasida (an der Wand über dem Schreibtisch)', 'Pol ustida', 'Balkonda'],
            correctIndex: 1,
            explanationUz: 'Matnda "Über dem Schreibtisch hängt ein großes Bücherregal an der Wand" deyilgan.'
          }
        ]
      }
    ],
    writingScaffold: {
      taskTitleUz: 'Xonangizdagi buyumlar o‘rnini yozish',
      promptUz: 'Xonangizdagi buyumlar qayerda turgani haqida 3-4 jumla yozing (auf, an, unter, neben + Dativ ishlatib).',
      taskInstructionsUz: '1. Noutbuk yoki kitob qayerda yotganini yozing (liegt auf dem...)\n2. Rasm yoki soat qayerda osilganini yozing (hängt an der...)\n3. Shkaf yoki stol qayerda turganini yozing (steht neben...)',
      controlledScaffolding: {
        stepTitleUz: 'Jumla namunalari:',
        sentenceStarters: [
          'Mein Laptop liegt auf dem...',
          'Das Bild hängt an der...',
          'Der Schreibtisch steht neben dem...'
        ]
      },
      usefulVocabulary: [
        { german: 'auf dem Tisch', uzbek: 'stol ustida' },
        { german: 'an der Wand', uzbek: 'devorda' },
        { german: 'im Regal', uzbek: 'javonda' }
      ],
      modelAnswerDe: 'In meinem Zimmer steht das Bett an der Wand. Mein Laptop liegt auf dem Schreibtisch. Über dem Bett hängt ein schönes Foto. Der Teppich liegt auf dem Boden.',
      modelAnswerUz: 'Mening xonamda karovot devor yonida turibdi. Noutbugim yozuv stoli ustida yotibdi. Karovot tepasida chiroyli surat osilib turibdi. Gilam pol ustida yotibdi.'
    },
    shadowing: [
      {
        id: 'sha-m7-1',
        lessonId: 'les-19',
        levelCode: 'a1-2',
        sentenceDe: 'Der Laptop liegt auf dem Schreibtisch und das Bild hängt an der Wand.',
        translationUz: 'Noutbuk yozuv stoli ustida yotibdi va rasm devorda osilib turibdi.',
        phoneticHint: '[Der Lap-top li:kt auf dem Shrayp-tish unt das Bilt hengt an der Vant.]',
        orderIndex: 1
      },
      {
        id: 'sha-m7-2',
        lessonId: 'les-19',
        levelCode: 'a1-2',
        sentenceDe: 'Wo steht die Lampe? - Sie steht zwischen dem Bett und dem Schrank.',
        translationUz: 'Lampa qayerda turibdi? - U karovot va shkaf o‘rtasida turibdi.',
        phoneticHint: '[Vo: shte:t di: Lam-pe? - Zi: shte:t tsvi-shen dem Bet unt dem Shrank.]',
        orderIndex: 2
      }
    ],
    practice: [
      {
        id: 'ex-m7-1',
        lessonId: 'les-19',
        type: 'multiple-choice',
        questionUz: '"Wo?" (qayerda?) savoliga "die Wand" (devor) qanday artikl oladi?',
        options: ['an die Wand', 'an der Wand', 'an den Wand', 'an dem Wand'],
        correctAnswer: 'an der Wand',
        explanationUz: '"die Wand" ayol jinsida bo‘lib, "Wo?" so‘rog‘i bilan Dativda "der" bo‘ladi: "an der Wand".',
        mistakeTipUz: '❌ "die" rodidagi so‘zlar Dativda "der" bo‘ladi.'
      },
      {
        id: 'ex-m7-2',
        lessonId: 'les-19',
        type: 'fill-blank',
        questionUz: '"das Bett" bilan Dativ artiklini qo‘ying: "Die Katze schläft unter _____ Bett."',
        blankSentence: 'Die Katze schläft unter [blank] Bett.',
        options: ['dem', 'der', 'das', 'den'],
        correctAnswer: 'dem',
        explanationUz: '"das Bett" Dativda "dem Bett" bo‘ladi: "unter dem Bett".',
        mistakeTipUz: '❌ "das" rodidagi so‘zlar Dativda "dem" bo‘ladi.'
      }
    ],
    listening: [],
    writing: []
  },

  // ==========================================
  // LEKTION 20: Wohin stellen wir das Sofa? (Wohin? + Akkusativ)
  // ==========================================
  {
    id: 'les-20',
    moduleId: 'mod-a1-2-3',
    levelCode: 'a1-2',
    titleDe: 'Lektion 20: Wohin stellen wir das Sofa?',
    titleUz: '20-Dars: Divanni qayerga qo‘yamiz? (Ko‘chish va "Wohin?" + Akkusativ)',
    descriptionUz: 'Kvartiraga ko‘chish (Umzug), mebellarni joylashtirish, yo‘nalish harakat fe‘llari (stellen, legen, hängen) va "Wohin?" (qayerga?) so‘rog‘i bilan Akkusativ.',
    orderIndex: 20,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Yo‘nalish va harakat fe‘llarini bilish (stellen, legen, hängen)',
      '"Wohin?" (qayerga?) so‘rog‘i bilan Wechselpräpositionen doimo Akkusativ talab qilishini tushunish',
      'Harakat fe‘llari (stellen/legen) va holat fe‘llari (stehen/liegen) orasidagi farqni ajratish'
    ],
    warmUp: {
      situationUz: 'Yangi uyga ko‘chib kelyapsiz va yuk tashuvchilar bilan qaysi mebelni qayerga qo‘yish kerakligini maslahatlashyapsiz.',
      curiosityQuestionUz: 'Nemis tilida "Stolni xonaga qo‘yaman" deganda "stellen", lekin "Stol xonada turibdi" deganda nega "stehen" deyiladi?',
      miniDialogue: [
        { speaker: 'Helfer', textDe: 'Wohin stellen wir das Sofa?', textUz: 'Divanni qayerga qo‘yamiz?' },
        { speaker: 'Mieter', textDe: 'Stellt es bitte an die Wand neben das Fenster.', textUz: 'Iltimos, uni devor yoniga, deraza yoniga qo‘yinglar.' }
      ],
      hintUz: '"Wohin?" (qayerga?) harakatni bildiradi va Akkusativ oladi; "Wo?" (qayerda?) esa tinch holatni bildirib, Dativ oladi.'
    },
    contextDialogue: {
      titleDe: 'Der Umzug ins neue Zuhause',
      titleUz: 'Yangi uyga ko‘chish',
      situationUz: 'Sardor va uning do‘sti Tom xonaga og‘ir mebellarni joylashtirmoqda.',
      lines: [
        { speaker: 'Tom', textDe: 'Uff, dieser Schrank ist wirklich schwer! Wohin stellen wir ihn?', textUz: 'Uff, bu shkaf haqiqatan ham og‘ir! Uni qayerga qo‘yamiz?' },
        { speaker: 'Sardor', textDe: 'Stellen wir den Schrank am besten in die Ecke rechts.', textUz: 'Shkafni eng ma‘quli o‘ng burchakka qo‘yaylik.' },
        { speaker: 'Tom', textDe: 'Gute Idee. Und wohin legen wir den Teppich?', textUz: 'Yaxshi fikr. Gilamni qayerga to‘shaymiz (yotqizamiz)?' },
        { speaker: 'Sardor', textDe: 'Leg den Teppich bitte unter den Tisch mitten ins Zimmer.', textUz: 'Gilamni iltimos stol tagiga, xonaning o‘rtasiga to‘sha.' },
        { speaker: 'Tom', textDe: 'Und was machen wir mit der Lampe?', textUz: 'Chiroqni nima qilamiz?' },
        { speaker: 'Sardor', textDe: 'Die Lampe hängen wir über den Esstisch an die Decke.', textUz: 'Chiroqni ovqatlanish stoli tepasiga, shiftga osamiz.' }
      ],
      usefulPhrases: [
        { german: 'Wohin stellen / legen / hängen wir...?', uzbek: '...ni qayerga qo‘yamiz / to‘shaymiz / osamiz?' },
        { german: 'in die Ecke / an die Wand', uzbek: 'burchakka / devorga' },
        { german: 'auf den Boden / auf den Tisch', uzbek: 'polga / stol ustiga' },
        { german: 'den Schrank stellen (Akkusativ)', uzbek: 'shkafni qo‘ymoq' }
      ],
      culturalNoteUz: 'Germaniyada kvartiraga ko‘chishda do‘stlar ko‘pincha yordam berishadi va evaziga pizza va pivo bilan mehmondorchilik qilinadi (Umzugshelfer-Tradition).'
    },
    vocabulary: [
      {
        id: 'voc-m7-9',
        lessonId: 'les-20',
        levelCode: 'a1-2',
        german: 'der Umzug',
        article: 'der',
        plural: 'die Umzüge',
        uzbek: 'ko‘chish, yangi manzilga ko‘chib o‘tish',
        exampleDe: 'Der Umzug war sehr anstrengend.',
        exampleUz: 'Ko‘chish juda mashaqqatli bo‘ldi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m7-10',
        lessonId: 'les-20',
        levelCode: 'a1-2',
        german: 'der Karton / die Kiste',
        article: 'der',
        plural: 'die Kartons',
        uzbek: 'quti, karobka (yuk uchun)',
        exampleDe: 'Wir packen die Kartons ein.',
        exampleUz: 'Qutilarni taxlayapmiz.',
        wordType: 'noun'
      },
      {
        id: 'voc-m7-11',
        lessonId: 'les-20',
        levelCode: 'a1-2',
        german: 'stellen',
        article: null,
        plural: null,
        uzbek: 'tik qilib qo‘ymoq (harakat)',
        exampleDe: 'Wohin stellst du die Flasche?',
        exampleUz: 'Shishani qayerga qo‘yasan?',
        wordType: 'verb'
      },
      {
        id: 'voc-m7-12',
        lessonId: 'les-20',
        levelCode: 'a1-2',
        german: 'legen',
        article: null,
        plural: null,
        uzbek: 'yotqizib qo‘ymoq, to‘shamoq (harakat)',
        exampleDe: 'Er legt das Buch auf den Tisch.',
        exampleUz: 'U kitobni stol ustiga qo‘yyapti.',
        wordType: 'verb'
      },
      {
        id: 'voc-m7-13',
        lessonId: 'les-20',
        levelCode: 'a1-2',
        german: 'hängen (transitiv)',
        article: null,
        plural: null,
        uzbek: 'osmoq (harakat)',
        exampleDe: 'Ich hänge das Bild an die Wand.',
        exampleUz: 'Men rasmni devorga osyapman.',
        wordType: 'verb'
      },
      {
        id: 'voc-m7-14',
        lessonId: 'les-20',
        levelCode: 'a1-2',
        german: 'die Ecke',
        article: 'die',
        plural: 'die Ecken',
        uzbek: 'burchak',
        exampleDe: 'Stell den Besen in die Ecke.',
        exampleUz: 'Supurgini burchakka qo‘y.',
        wordType: 'noun'
      },
      {
        id: 'voc-m7-15',
        lessonId: 'les-20',
        levelCode: 'a1-2',
        german: 'die Decke',
        article: 'die',
        plural: 'die Decken',
        uzbek: 'shift; adyol',
        exampleDe: 'Die Lampe hängt an der Decke.',
        exampleUz: 'Lampa shiftda osilib turibdi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m7-16',
        lessonId: 'les-20',
        levelCode: 'a1-2',
        german: 'packen',
        article: null,
        plural: null,
        uzbek: 'yuklarni joylamoq, taxlamoq',
        exampleDe: 'Ich packe meine Koffer.',
        exampleUz: 'Chamadonlarimni joylayapman.',
        wordType: 'verb'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: '"Wo?" (Dativ) va "Wohin?" (Akkusativ) o‘rtasidagi farqqa e‘tibor bering:',
      discoveryExamples: [
        { german: 'Wohin? -> Ich stelle den Stuhl an den Tisch.', highlight: 'an den Tisch (Akkusativ)', uzbek: 'Qayerga? -> Harakat bor: an den (Akkusativ)' },
        { german: 'Wo? -> Der Stuhl steht an dem Tisch.', highlight: 'an dem Tisch (Dativ)', uzbek: 'Qayerda? -> Tinch holat: an dem (Dativ)' }
      ],
      patternExplanationUz: 'Fe‘llar juftligi: stellen/legen/hängen harakatni ifodalaydi va "Wohin?" savoliga javob berib Akkusativ talab qiladi. stehen/liegen/hängen esa holatni ifodalab Dativ talab qiladi.',
      ruleFormulaUz: 'Wohin? (harakat) -> stellen/legen + Akkusativ | Wo? (holat) -> stehen/liegen + Dativ'
    },
    grammar: [
      {
        id: 'gra-m7-2',
        lessonId: 'les-20',
        levelCode: 'a1-2',
        titleDe: 'Wechselpräpositionen mit Akkusativ (Wohin?)',
        titleUz: 'O‘zgaruvchan predloglar va Akkusativ ("Wohin?" so‘rog‘i)',
        summaryUz: '"Wohin?" (Qayerga?) so‘rog‘i bilan o‘zgaruvchan predloglar Akkusativ oladi. Harakat fe‘llari: stellen (qo‘ymoq), legen (yotqizmoq), hängen (osmoq).',
        explanationUz: `**1. Harakat fe‘llari vs. Holat fe‘llari:**
- **stellen** (tik qo‘ymoq, harakat -> **Wohin? + Akkusativ**) <-> **stehen** (turmoq, holat -> **Wo? + Dativ**)
- **legen** (yotiq qo‘ymoq, harakat -> **Wohin? + Akkusativ**) <-> **liegen** (yotmoq, holat -> **Wo? + Dativ**)
- **hängen** (osmoq, harakat -> **Wohin? + Akkusativ**) <-> **hängen** (osilib turmoq, holat -> **Wo? + Dativ**)

**2. Akkusativda artikllar:**
- **Maskulin (der):** **in den, auf den, an den**
- **Neutrum (das):** **in das (ins), auf das (aufs), an das (ans)**
- **Feminin (die):** **in die, auf die, an die**
- **Plural (die):** **in die, auf die, an die**

Misollar:
- *Ich **stelle** das Glas **auf den Tisch**.* (Akkusativ: der Tisch -> den Tisch)
- *Das Glas **steht auf dem Tisch**.* (Dativ: der Tisch -> dem Tisch)
- *Wir **hängen** das Bild **an die Wand**.* (Akkusativ)`,
        wordOrderRuleUz: 'Wohin? so‘rog‘ida fe‘l 2-o‘rinda: "Wohin (1) stellst (2) du (3) den Stuhl (4)?"',
        tables: [
          {
            title: 'Wo? (Dativ) vs. Wohin? (Akkusativ) solishtirish',
            headers: ['Savol', 'Fe‘llar', 'Kelishik', 'Namuna gap'],
            rows: [
              ['Wo? (Qayerda?)', 'stehen, liegen, hängen', 'Dativ', 'Der Schrank steht in der Ecke.'],
              ['Wohin? (Qayerga?)', 'stellen, legen, hängen', 'Akkusativ', 'Ich stelle den Schrank in die Ecke.']
            ]
          }
        ],
        examples: [
          { german: 'Wohin legst du die Schlüssel? - Auf den Tisch.', uzbek: 'Kalitlarni qayerga qo‘yyapsan? - Stol ustiga.', highlight: 'Auf den Tisch' },
          { german: 'Häng die Jacke bitte in den Schrank!', uzbek: 'Kurtkani shkafga osib qo‘y, iltimos!', highlight: 'in den Schrank' }
        ],
        commonMistakes: [
          {
            incorrect: 'Ich stelle das Buch auf dem Tisch.',
            correct: 'Ich stelle das Buch auf den Tisch.',
            explanationUz: '"stellen" harakat fe‘li bo‘lgani uchun "auf" Akkusativ oladi: der Tisch -> den Tisch.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Wohin mit den Möbeln?',
      titleUz: 'Mebellarni qayerga qo‘yamiz?',
      situationUz: 'Yangi uyga ko‘chgan oila mebel joylashtirishni muhokama qilmoqda.',
      audioTranscriptDe: 'Vater: Wohin stellen wir den großen Esstisch?\nMutter: Am besten mitten in die Küche, da haben wir genug Platz.\nSohn: Und wohin soll ich meine Spielsachen legen?\nMutter: Pack sie bitte alle in die Kiste und stell die Kiste unter dein Bett.\nSohn: Okay, mache ich sofort!',
      translationUz: 'Ota: Katta ovqatlanish stolini qayerga qo‘yamiz?\nOna: Eng ma‘quli oshxonaning o‘rtasiga, u yerda joyimiz yetarli.\nO‘g‘il: O‘yinchoqlarimni qayerga qo‘yay?\nOna: Iltimos, ularni qutiga joyla va qutini karovoting tagiga qo‘y.\nO‘g‘il: Xo‘p, hoziroq qilaman!',
      stage1Global: {
        instructionUz: '1-Bosqich: Oila nima bilan bandligini tushuning.',
        questionUz: 'Oila nimani rejalashtirmoqda?',
        options: ['Do‘konga borishni', 'Mebellar va narsalarni joylashtirishni (Möbel und Sachen platzieren)', 'Mehmon chaqirishni', 'Kvartirani sotishni'],
        correctIndex: 1,
        explanationUz: 'Ular stol va o‘yinchoqlarni qayerga qo‘yishni muhokama qilishmoqda.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Tafsilotlarni aniqlang.',
        questions: [
          {
            id: 'l20-q1',
            questionUz: 'O‘g‘il qutini qayerga qo‘yishi kerak?',
            options: ['Shkaf ichiga', 'Balkonga', 'Karovot tagiga (unter dein Bett)', 'Oshxonaga'],
            correctIndex: 2,
            explanationUz: 'Ona "stell die Kiste unter dein Bett" dedi.'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Vater', textDe: 'Wohin stellen wir den Tisch?', textUz: 'Stolni qayerga qo‘yamiz?' },
          { speaker: 'Mutter', textDe: 'Mitten in die Küche.', textUz: 'Oshxonaning o‘rtasiga.' }
        ],
        keyVocabulary: [
          { german: 'der Esstisch', uzbek: 'ovqatlanish stoli' },
          { german: 'die Spielsachen', uzbek: 'o‘yinchoqlar' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-m7-2',
        lessonId: 'les-20',
        levelCode: 'a1-2',
        titleDe: 'Ein anstrengender Umzugstag',
        titleUz: 'Mashaqqatli ko‘chish kuni',
        textDe: 'Gestern sind wir endlich in unsere neue Wohnung gezogen. Der Tag war sehr anstrengend. Viele Freunde haben uns geholfen. Zuerst haben wir alle Kartons in den Hausflur getragen. Dann haben wir die schweren Möbel aufgestellt: Das Sofa stellten wir ins Wohnzimmer, das Bett bauten wir im Schlafzimmer auf. Meine Bücher habe ich alle ordentlich ins Regal gestellt. Am Abend waren wir total müde, aber glücklich.',
        translationUz: 'Kecha nihoyat yangi xonadonimizga ko‘chib o‘tdik. Kun juda mashaqqatli o‘tdi. Ko‘plab do‘stlarimiz bizga yordam berishdi. Avval barcha qutilarni uy yo‘lagiga tashidik. Keyin og‘ir mebellarni o‘rnatdik: Divanni mehmonxonaga qo‘ydik, karovotni yotoqxonada yig‘dik. Kitoblarimni tartibli qilib javonga qo‘ydim. Kechqurun nihoyatda charchagan edik, ammo baxtiyor edik.',
        vocabularyHints: [
          { german: 'anstrengend', uzbek: 'mashaqqatli, toliqtiruvchi' },
          { german: 'aufbauen', uzbek: 'yig‘moq, o‘rnatmoq' },
          { german: 'glücklich', uzbek: 'baxtli' }
        ],
        questions: [
          {
            id: 'rq-m7-2',
            questionUz: 'Do‘stlar divanni qaysi xonaga qo‘yishdi?',
            options: ['Oshxonaga', 'Mehmonxonaga (ins Wohnzimmer)', 'Balkonga', 'Dahlizga'],
            correctIndex: 1,
            explanationUz: 'Matnda "Das Sofa stellten wir ins Wohnzimmer" deb yozilgan.'
          }
        ]
      }
    ],
    writingScaffold: {
      taskTitleUz: 'Mebel joylashtirish rejasini yozish',
      promptUz: 'Xonangizga mebellarni qayerga qo‘ymoqchi ekanligingiz haqida 3-4 jumla yozing ("stellen / legen / hängen" va Akkusativ bilan).',
      taskInstructionsUz: '1. Yozuv stolini qayerga qo‘yishingizni yozing (Ich stelle den Schreibtisch an...)\n2. Gilamni qayerga to‘shashingizni ayting (Ich lege den Teppich auf...)\n3. Rasm yoki chiroqni qayerga osishingizni bildiring (Ich hänge...)',
      controlledScaffolding: {
        stepTitleUz: 'Jumla namunalari:',
        sentenceStarters: [
          'Ich stelle den Schreibtisch an das...',
          'Ich lege den Teppich auf den...',
          'Ich hänge die Lampe an die...'
        ]
      },
      usefulVocabulary: [
        { german: 'stellen in / an / auf (Akkusativ)', uzbek: 'qo‘ymoq' },
        { german: 'legen auf (Akkusativ)', uzbek: 'yotqizmoq, to‘shamoq' },
        { german: 'hängen an (Akkusativ)', uzbek: 'osmoq' }
      ],
      modelAnswerDe: 'In meinem neuen Zimmer stelle ich den Schreibtisch direkt an das Fenster. Das Bett stelle ich an die Wand. Den Teppich lege ich auf den Boden vor das Bett. Ein schönes Bild hänge ich an die Wand.',
      modelAnswerUz: 'Yangi xonamda yozuv stolini to‘g‘ridan-to‘g‘ri deraza yoniga qo‘yaman. Karovotni devorga qo‘yaman. Gilamni karovot oldidagi polga to‘shayman. Chiroyli rasmni devorga osaman.'
    },
    shadowing: [
      {
        id: 'sha-m7-3',
        lessonId: 'les-20',
        levelCode: 'a1-2',
        sentenceDe: 'Wohin stellen wir den Schrank? - Stell ihn in die Ecke!',
        translationUz: 'Shkafni qayerga qo‘yamiz? - Uni burchakka qo‘y!',
        phoneticHint: '[Vo:-hin shtel-len vi:r den Shrank? - Shtel i:n in di: Ek-ke!]',
        orderIndex: 1
      },
      {
        id: 'sha-m7-4',
        lessonId: 'les-20',
        levelCode: 'a1-2',
        sentenceDe: 'Ich lege das Buch auf den Tisch und hänge das Bild an die Wand.',
        translationUz: 'Kitobni stol ustiga qo‘yaman va rasmni devorga osaman.',
        phoneticHint: '[Iç le:-ge das Bu:x auf den Tish unt heng-e das Bilt an di: Vant.]',
        orderIndex: 2
      }
    ],
    practice: [
      {
        id: 'ex-m7-3',
        lessonId: 'les-20',
        type: 'multiple-choice',
        questionUz: '"Wohin?" (qayerga?) so‘rog‘i bilan "der Tisch" qanday shaklga kiradi?',
        options: ['auf den Tisch', 'auf dem Tisch', 'auf der Tisch', 'auf das Tisch'],
        correctAnswer: 'auf den Tisch',
        explanationUz: '"Wohin?" Akkusativ talab qiladi: der Tisch -> den Tisch: "auf den Tisch".',
        mistakeTipUz: '❌ "Wohin?" so‘rog‘ida muzskoy rod "den" oladi.'
      },
      {
        id: 'ex-m7-4',
        lessonId: 'les-20',
        type: 'fill-blank',
        questionUz: 'Harakat fe‘lini qo‘ying: "Ich _____ das Buch auf den Tisch."',
        blankSentence: 'Ich [blank] das Buch auf den Tisch.',
        options: ['lege', 'liege', 'stehe', 'sitze'],
        correctAnswer: 'lege',
        explanationUz: 'Kitobni yotqizib qo‘yish harakati uchun "legen" ishlatiladi: "Ich lege das Buch".',
        mistakeTipUz: '❌ Harakat uchun "legen", tinch holat uchun esa "liegen" ishlatiladi.'
      }
    ],
    listening: [],
    writing: []
  },

  // ==========================================
  // LEKTION 21: Mein Traumberuf (Arbeitsalltag & dürfen / wollen)
  // ==========================================
  {
    id: 'les-21',
    moduleId: 'mod-a1-2-3',
    levelCode: 'a1-2',
    titleDe: 'Lektion 21: Mein Traumberuf',
    titleUz: '21-Dars: Orzudagi kasbim (Ish faoliyati va Modal fe‘llar: dürfen, wollen)',
    descriptionUz: 'Kasbiy faoliyat, ish joyi qoidalari, orzudagi kasb (Traumberuf), modal fe‘llar: "dürfen" (ruxsat/taqiq) va "wollen" (qat‘iy niyat/istak).',
    orderIndex: 21,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Kasbiy faoliyat va vazifalarni ifodalash (E-Mails schreiben, Kunden beraten, telefonieren)',
      '"dürfen" (ruxsat bo‘lmoq) va "wollen" (istamoq/xohlamoq) modal fe‘llarini tuslash',
      'Ish joyidagi taqiq va ruxsatlarni bildirish ("Hier darf man nicht rauchen")'
    ],
    warmUp: {
      situationUz: 'Kelajakdagi orzuingizdagi kasb haqida suhbatlashyapsiz. Qayerda ishlashni va qanday vazifalarni bajarishni xohlaysiz?',
      curiosityQuestionUz: 'Nemis tilida "Bu yerda mashina qo‘yish mumkin emas (taqiqlangan)" deyish uchun nima sababdan "dürfen" ishlatiladi?',
      miniDialogue: [
        { speaker: 'Sardor', textDe: 'Was ist dein Traumberuf, Felix?', textUz: 'Felix, sening orzuingdagi kasbing nima?' },
        { speaker: 'Felix', textDe: 'Ich will Softwareentwickler werden und bei Google arbeiten.', textUz: 'Men dasturchi bo‘lishni va Googleda ishlashni xohlayman.' }
      ],
      hintUz: '"dürfen" ruxsat va qonuniy huquqni bildiradi. "Hier darf man nicht..." esa qat‘iy taqiqni anglatadi.'
    },
    contextDialogue: {
      titleDe: 'Regeln am Arbeitsplatz',
      titleUz: 'Ish joyidagi qoidalar',
      situationUz: 'Kompaniya bo‘lim boshlig‘i yangi amaliyotchi talabaga ichki tartib-qoidalarni tushuntirmoqda.',
      lines: [
        { speaker: 'Chef', textDe: 'Guten Tag, Herr Rahimov! Willkommen im Team. Lassen Sie uns über die Arbeitsregeln sprechen.', textUz: 'Xayrli kun, janob Rahimov! Jamoamizga xush kelibsiz. Ish qoidalari haqida gaplashib olaylik.' },
        { speaker: 'Sardor', textDe: 'Sehr gern, Herr Weber.', textUz: 'Jon deb, janob Veber.' },
        { speaker: 'Chef', textDe: 'Ihre Arbeitszeit beginnt um 8:30 Uhr. Im Büro darf man Kaffee und Tee trinken, aber man darf hier natürlich nicht rauchen.', textUz: 'Ish vaqtingiz 8:30 da boshlanadi. Ofisda qahva va choy ichish mumkin, lekin bu yerda albatta chekish taqiqlanadi.' },
        { speaker: 'Sardor', textDe: 'Darf man das Firmen-WLAN auch für private Zwecke nutzen?', textUz: 'Kompaniya Wi-Fi tarmog‘idan shaxsiy maqsadlarda ham foydalanish mumkinmi?' },
        { speaker: 'Chef', textDe: 'In den Pausen dürfen Sie das gern tun. Was wollen Sie in den ersten Wochen lernen?', textUz: 'Tanaffuslarda bemalol foydalanishingiz mumkin. Dastlabki haftalarda nimani o‘rganishni xohlaysiz?' },
        { speaker: 'Sardor', textDe: 'Ich will unsere Kundensysteme verstehen und viele praktische Erfahrungen sammeln.', textUz: 'Men mijozlar tizimimizni tushunishni va ko‘plab amaliy tajriba orttirishni xohlayman.' }
      ],
      usefulPhrases: [
        { german: 'Was ist dein Traumberuf?', uzbek: 'Orzuingdagi kasb nima?' },
        { german: 'Ich will ... werden.', uzbek: 'Men ... bo‘lishni xohlayman.' },
        { german: 'Hier darf man (nicht)...', uzbek: 'Bu yerda ... mumkin (taqiqlanadi).' },
        { german: 'Darf ich hier parken?', uzbek: 'Bu yerga mashina qo‘ysam bo‘ladimi?' }
      ],
      culturalNoteUz: 'Germaniyada mehnat muhofazasi va qoidalari juda qat‘iy. "Rauchen verboten" (Chekish taqiqlangan) belgisi deyarli barcha yopiq jamoat binolarida amal qiladi.'
    },
    vocabulary: [
      {
        id: 'voc-m7-17',
        lessonId: 'les-21',
        levelCode: 'a1-2',
        german: 'der Traumberuf',
        article: 'der',
        plural: 'die Traumberufe',
        uzbek: 'orzudagi kasb',
        exampleDe: 'Pilot ist mein absoluter Traumberuf.',
        exampleUz: 'Uchuvchilik — mening orzudagi kasbim.',
        wordType: 'noun'
      },
      {
        id: 'voc-m7-18',
        lessonId: 'les-21',
        levelCode: 'a1-2',
        german: 'die Arbeitszeit',
        article: 'die',
        plural: 'die Arbeitszeiten',
        uzbek: 'ish vaqti',
        exampleDe: 'Meine Arbeitszeit ist flexibel.',
        exampleUz: 'Ish vaqtim erkin (moslashuvchan).',
        wordType: 'noun'
      },
      {
        id: 'voc-m7-19',
        lessonId: 'les-21',
        levelCode: 'a1-2',
        german: 'dürfen',
        article: null,
        plural: null,
        uzbek: 'ruxsat bo‘lmoq, huquqi bo‘lmoq',
        exampleDe: 'Darf ich hier sitzen?',
        exampleUz: 'Bu yerda o‘tirsam bo‘ladimi?',
        wordType: 'verb'
      },
      {
        id: 'voc-m7-20',
        lessonId: 'les-21',
        levelCode: 'a1-2',
        german: 'wollen',
        article: null,
        plural: null,
        uzbek: 'qat‘iy xohlamoq, niyat qilmoq',
        exampleDe: 'Was willst du werden?',
        exampleUz: 'Kim bo‘lishni xohlaysan?',
        wordType: 'verb'
      },
      {
        id: 'voc-m7-21',
        lessonId: 'les-21',
        levelCode: 'a1-2',
        german: 'rauchen',
        article: null,
        plural: null,
        uzbek: 'chekmoq (tamaki)',
        exampleDe: 'Hier darf man nicht rauchen.',
        exampleUz: 'Bu yerda chekish mumkin emas.',
        wordType: 'verb'
      },
      {
        id: 'voc-m7-22',
        lessonId: 'les-21',
        levelCode: 'a1-2',
        german: 'beraten',
        article: null,
        plural: null,
        uzbek: 'maslahat bermoq (mijozlarga)',
        exampleDe: 'Sie berät Kunden im Geschäft.',
        exampleUz: 'U do‘konda mijozlarga maslahat beradi.',
        wordType: 'verb'
      },
      {
        id: 'voc-m7-23',
        lessonId: 'les-21',
        levelCode: 'a1-2',
        german: 'die Erfahrung',
        article: 'die',
        plural: 'die Erfahrungen',
        uzbek: 'tajriba',
        exampleDe: 'Ich habe schon viel Erfahrung.',
        exampleUz: 'Menda ancha tajriba bor.',
        wordType: 'noun'
      },
      {
        id: 'voc-m7-24',
        lessonId: 'les-21',
        levelCode: 'a1-2',
        german: 'die Pause',
        article: 'die',
        plural: 'die Pausen',
        uzbek: 'tanaffus',
        exampleDe: 'Wir machen 15 Minuten Pause.',
        exampleUz: '15 daqiqa tanaffus qilamiz.',
        wordType: 'noun'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: '"dürfen" va "wollen" fe‘llarining tuslanishiga e‘tibor bering:',
      discoveryExamples: [
        { german: 'Ich darf / er darf', highlight: 'darf (Umlaut yo‘qoladi)', uzbek: 'ich va er shakli bir xil: darf' },
        { german: 'Ich will / er will', highlight: 'will (o -> i bo‘ldi)', uzbek: 'ich va er shakli bir xil: will' }
      ],
      patternExplanationUz: 'Barcha modal fe‘llar kabi "dürfen" va "wollen" ham birlikda (ich, du, er/sie/es) o‘zak unlisini o‘zgartiradi va ich hamda er/sie/es bir xil bo‘ladi (qo‘shimchasiz!).',
      ruleFormulaUz: 'dürfen: ich darf, du darfst, er darf | wollen: ich will, du willst, er will'
    },
    grammar: [
      {
        id: 'gra-m7-3',
        lessonId: 'les-21',
        levelCode: 'a1-2',
        titleDe: 'Die Modalverben "dürfen" und "wollen"',
        titleUz: '"dürfen" va "wollen" modal fe‘llari',
        summaryUz: '"dürfen" ruxsat va taqiqni, "wollen" esa qat‘iy niyat va xohishni bildiradi. Ikkinchi fe‘l gap oxirida infinitiv bo‘lib turadi.',
        explanationUz: `**1. "dürfen" (ruxsat bo‘lmoq) fe‘li tuslanishi:**
- ich **darf**
- du **darfst**
- er / sie / es **darf** (ich va er bir xil!)
- wir **dürfen**
- ihr **dürft**
- sie / Sie **dürfen**

*Muhim qoida:* **nicht dürfen = taqiqlangan!**
- *Hier **darf man nicht rauchen**.* (Bu yerda chekish taqiqlanadi!)
- *Hier **darf man nicht parken**.* (Bu yerda mashina qo‘yish mumkin emas!)

**2. "wollen" (qat‘iy istamoq) fe‘li tuslanishi:**
- ich **will**
- du **willst**
- er / sie / es **will** (ich va er bir xil!)
- wir **wollen**
- ihr **wollt**
- sie / Sie **wollen**

Misol:
- *Ich **will** Arzt **werden**.* (Men shifokor bo‘lishni xohlayman.)
- *Was **wollt** ihr am Wochenende **machen**?* (Dam olish kuni nima qilmoqchisizlar?)`,
        wordOrderRuleUz: 'Modal fe‘l 2-o‘rinda, ikkinchi fe‘l esa infinitivda gap oxirida: "Ich will Deutsch lernen."',
        tables: [
          {
            title: 'dürfen va wollen tuslanishi',
            headers: ['Shaxs', 'dürfen (ruxsat)', 'wollen (niyat/istak)'],
            rows: [
              ['ich', 'darf', 'will'],
              ['du', 'darfst', 'willst'],
              ['er / sie / es', 'darf', 'will'],
              ['wir', 'dürfen', 'wollen'],
              ['ihr', 'dürft', 'wollt'],
              ['sie / Sie', 'dürfen', 'wollen']
            ]
          }
        ],
        examples: [
          { german: 'Darf ich das Fenster aufmachen?', uzbek: 'Derazani ochsam maylimi?', highlight: 'Darf ... aufmachen' },
          { german: 'Er will in Deutschland studieren.', uzbek: 'U Germaniyada o‘qishni xohlaydi.', highlight: 'will ... studieren' }
        ],
        commonMistakes: [
          {
            incorrect: 'Er willt Arzt werden.',
            correct: 'Er will Arzt werden.',
            explanationUz: 'Modal fe‘llarda "er" uchun "will" bo‘ladi (ich bilan bir xil, -t qo‘shimchasiz!).'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Mein Traumberuf als Architektin',
      titleUz: 'Arxitektorlik — orzudagi kasbim',
      situationUz: 'Universitet talabasi o‘z kasbiy rejalari haqida intervyu bermoqda.',
      audioTranscriptDe: 'Interviewer: Anna, was studierst du und was ist dein Traumberuf?\nAnna: Ich studiere Architektur im vierten Semester. Mein Traumberuf ist Architektin für nachhaltige Gebäude.\nInterviewer: Warum willst du gerade das machen?\nAnna: Ich will umweltfreundliche Häuser aus Holz und Glas entwerfen. Ich will, dass die Städte grüner werden.\nInterviewer: Das ist ein tolles Ziel! Viel Erfolg dabei!',
      translationUz: 'Intervyu oluvchi: Anna, nima sohada o‘qiysan va orzuingdagi kasb nima?\nAnna: Men to‘rtinchi semestrda arxitektura bo‘yicha tahsil olyapman. Orzudagi kasbim — ekologik binolar arxitektori bo‘lish.\nIntervyu oluvchi: Nega aynan bu ishni qilishni xohlaysan?\nAnna: Men yog‘och va oynadan ekologik toza uylar loyihalashni xohlayman. Shaharlar yanada yashil bo‘lishini istayman.\nIntervyu oluvchi: Bu ajoyib maqsad! Omad yor bo‘lsin!',
      stage1Global: {
        instructionUz: '1-Bosqich: Annaning kasbiy maqsadini aniqlang.',
        questionUz: 'Anna kelajakda kim bo‘lib ishlashni xohlaydi?',
        options: ['O‘qituvchi', 'Ekologik binolar arxitektori (Architektin für nachhaltige Gebäude)', 'Dasturchi', 'Shifokor'],
        correctIndex: 1,
        explanationUz: 'Anna "Mein Traumberuf ist Architektin" dedi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Tafsilotlarni aniqlang.',
        questions: [
          {
            id: 'l21-q1',
            questionUz: 'Anna qaysi semestrda o‘qimoqda?',
            options: ['Birinchi semestrda', 'Ikkinchi semestrda', 'To‘rtinchi semestrda (im vierten Semester)', 'O‘qishni bitirgan'],
            correctIndex: 2,
            explanationUz: 'U "Ich studiere Architektur im vierten Semester" deb aytdi.'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Interviewer', textDe: 'Was ist dein Traumberuf?', textUz: 'Orzuingdagi kasbing nima?' },
          { speaker: 'Anna', textDe: 'Ich will umweltfreundliche Häuser entwerfen.', textUz: 'Ekologik toza uylar loyihalamoqchiman.' }
        ],
        keyVocabulary: [
          { german: 'nachhaltig / umweltfreundlich', uzbek: 'ekologik toza, tejamkor' },
          { german: 'entwerfen', uzbek: 'loyiha chizmoq' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-m7-3',
        lessonId: 'les-21',
        titleDe: 'Traumberuf Pilot',
        titleUz: 'Orzudagi kasb: Uchuvchilik',
        textDe: 'Viele Kinder träumen davon, Pilot zu werden. Doch der Weg ins Cockpit ist schwer. Man muss fließend Englisch und Deutsch sprechen. Außerdem darf man keine gesundheitlichen Probleme haben, besonders die Augen müssen perfekt sein. Piloten tragen eine enorme Verantwortung für Hunderte Passagiere. Aber sie dürfen um die ganze Welt reisen und fremde Länder kennenlernen. Für viele ist es der beste Beruf der Welt.',
        translationUz: 'Ko‘p bolalar uchuvchi bo‘lishni orzu qilishadi. Biroq samolyot boshqaruv kabinasigacha bo‘lgan yo‘l qiyin. Nemis va ingliz tillarida ravon gapirish shart. Bundan tashqari hech qanday sog‘liq muammolari bo‘lmasligi lozim, ayniqsa ko‘zlar a‘lo darajada bo‘lishi shart. Uchuvchilar yuzlab yo‘lovchilar uchun ulkan mas‘uliyatni o‘z zimmalariga oladilar. Ammo ular butun dunyo bo‘ylab sayohat qilishlari va begona mamlakatlar bilan tanishishlari mumkin. Ko‘pchilik uchun bu dunyodagi eng zo‘r kasbdir.',
        vocabularyHints: [
          { german: 'die Verantwortung', uzbek: 'mas‘uliyat, javobgarlik' },
          { german: 'der Passagier', uzbek: 'yo‘lovchi' },
          { german: 'um die ganze Welt', uzbek: 'butun dunyo bo‘ylab' }
        ],
        questions: [
          {
            id: 'rq-m7-3',
            questionUz: 'Uchuvchi bo‘lish uchun qaysi a‘zo ayniqsa mukammal bo‘lishi shart?',
            options: ['Quloqlar', 'Ko‘zlar (besonders die Augen müssen perfekt sein)', 'Tishlar', 'Oyoqlar'],
            correctIndex: 1,
            explanationUz: 'Matnda "besonders die Augen müssen perfekt sein" deyilgan.'
          }
        ]
      }
    ],
    writingScaffold: {
      taskTitleUz: 'O‘z orzuingizdagi kasb haqida yozish',
      promptUz: 'Orzuingizdagi kasb kim ekanligi, nima uchun aynan shu kasbni tanlaganingiz va nimalar qilishni xohlashingiz haqida 3-4 jumla yozing ("wollen" ishlatib).',
      taskInstructionsUz: '1. Orzuingizdagi kasbni ayting (Mein Traumberuf ist...)\n2. Kim bo‘lishni xohlayotganingizni yozing (Ich will... werden)\n3. Ishda nimalar qilishni xohlashingizni bildiring',
      controlledScaffolding: {
        stepTitleUz: 'Jumla namunalari:',
        sentenceStarters: [
          'Mein Traumberuf ist...',
          'Ich will... werden, weil...',
          'Ich will Menschen helfen / neue Programme entwickeln.'
        ]
      },
      usefulVocabulary: [
        { german: 'der Traumberuf', uzbek: 'orzudagi kasb' },
        { german: 'werden', uzbek: 'bo‘lmoq (kelajakda)' },
        { german: 'Ich will...', uzbek: 'Men ...ni xohlayman' }
      ],
      modelAnswerDe: 'Mein Traumberuf ist Arzt. Ich will Medizin studieren und kranken Menschen helfen. Als Arzt trage ich viel Verantwortung, aber die Arbeit ist sehr sinnvoll.',
      modelAnswerUz: 'Mening orzudagi kasbim — shifokorlik. Men tibbiyotda o‘qishni va kasal insonlarga yordam berishni xohlayman. Shifokor sifatida katta mas‘uliyat sezaman, ammo bu ish juda mazmunli.'
    },
    shadowing: [
      {
        id: 'sha-m7-5',
        lessonId: 'les-21',
        levelCode: 'a1-2',
        sentenceDe: 'Hier darf man nicht rauchen und nicht parken.',
        translationUz: 'Bu yerda chekish va mashina qo‘yish mumkin emas.',
        phoneticHint: '[Hi:r darf man niçt rau-xen unt niçt par-ken.]',
        orderIndex: 1
      },
      {
        id: 'sha-m7-6',
        lessonId: 'les-21',
        levelCode: 'a1-2',
        sentenceDe: 'Ich will in Deutschland studieren und Ingenieur werden.',
        translationUz: 'Men Germaniyada o‘qishni va muhandis bo‘lishni xohlayman.',
        phoneticHint: '[Iç vill in Doytsh-lant shtu-di:-ren unt In-je-nyø:r ver-den.]',
        orderIndex: 2
      }
    ],
    practice: [
      {
        id: 'ex-m7-5',
        lessonId: 'les-21',
        type: 'multiple-choice',
        questionUz: '"dürfen" fe‘lining "man" (kishilar) bilan to‘g‘ri shakli qaysi?',
        options: ['man darf', 'man darft', 'man dürfen', 'man dürft'],
        correctAnswer: 'man darf',
        explanationUz: '"man" kishilik olmoshi uchinchi shaxs birlikda (er/sie kabi) tuslanadi: "man darf".',
        mistakeTipUz: '❌ "man" uchun "darf" bo‘ladi: man darf.'
      },
      {
        id: 'ex-m7-6',
        lessonId: 'les-21',
        type: 'fill-blank',
        questionUz: '"wollen" fe‘lining "ich" shaxsiga mos shaklini qo‘ying: "Ich _____ Deutsch lernen."',
        blankSentence: 'Ich [blank] Deutsch lernen.',
        options: ['will', 'wolle', 'wollt', 'wollen'],
        correctAnswer: 'will',
        explanationUz: '"ich" bilan "wollen" fe‘li "will" bo‘ladi: "Ich will Deutsch lernen".',
        mistakeTipUz: '❌ "ich" uchun "will" ishlatiladi.'
      }
    ],
    listening: [],
    writing: []
  }
];
