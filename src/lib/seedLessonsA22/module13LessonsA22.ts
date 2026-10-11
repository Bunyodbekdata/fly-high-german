import { Lesson } from '../../types/database';

export const MODULE_13_A22_LESSONS: Lesson[] = [
  // ==========================================
  // LEKTION 37: Wohnungssuche und Mietvertrag
  // ==========================================
  {
    id: 'les-37',
    moduleId: 'mod-a2-2-1',
    levelCode: 'a2-2',
    titleDe: 'Lektion 37: Wohnungssuche und Mietvertrag',
    titleUz: '37-Dars: Kvartira qidirish va ijara shartnomasi (Harakat va holat fe‘llari - stellen/stehen, legen/liegen)',
    descriptionUz: 'Kvartira e‘lonlari, ijara shartnomasi (Mietvertrag), garov puli (Kaution) hamda Wechselpräpositionen bilan harakat va holat fe‘llari (Wohin? Akkusativ vs. Wo? Dativ).',
    orderIndex: 37,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Germaniyada kvartira e‘lonlari va ijara shartlarini tushunish',
      'Harakat (stellen, legen, hängen + Akk) va holat (stehen, liegen, hängen + Dat) fe‘llarini farqlash',
      'Xonada mebellarni joylashtirishni tasvirlash'
    ],
    warmUp: {
      situationUz: 'Yangi ijaraga olingan kvartiraga ko‘chib o‘tdingiz va mebellarni qayerga qo‘yishni rejalashtiryapsiz.',
      curiosityQuestionUz: '"Men kitob javonini devor yoniga qo‘ymoqchiman" nemis tilida qanday aytiladi?',
      miniDialogue: [
        { speaker: 'Freund', textDe: 'Wohin stellst du das Bücherregal?', textUz: 'Kitob javonini qayerga qo‘ymoqchisan?' },
        { speaker: 'Aziz', textDe: 'Ich stelle das Regal an die Wand neben das Fenster.', textUz: 'Javonni deraza yonidagi devorga qo‘yaman.' }
      ],
      hintUz: 'Qayerga? (Wohin?) savoliga harakat fe‘li + AKKUSATIV, Qayerda? (Wo?) savoliga esa holat fe‘li + DATIV keladi!'
    },
    contextDialogue: {
      titleDe: 'Die Wohnungsbesichtigung in Frankfurt',
      titleUz: 'Frankfurtda kvartirani ko‘rish',
      situationUz: 'Aziz uy egasi janob Shuls bilan kvartirani ko‘rib chiqmoqda.',
      lines: [
        { speaker: 'Herr Schulz', textDe: 'Guten Tag, Herr Rahimov! Das ist die 2-Zimmer-Wohnung. Sie hat 65 Quadratmeter und einen Balkon.', textUz: 'Xayrli kun, janob Rahimov! Bu 2 xonali kvartira. U 65 kvadrat metr va balkonga ega.' },
        { speaker: 'Aziz', textDe: 'Die Wohnung ist sehr hell und ruhig! Wie hoch ist die Warmmiete?', textUz: 'Kvartira juda yorug‘ va sokin ekan! Issiq ijara haqi (barcha to‘lovlar bilan) qancha?' },
        { speaker: 'Herr Schulz', textDe: 'Die Kaltmiete beträgt 750 Euro, plus 200 Euro Nebenkosten. Die Kaution sind drei Monatskaltmieten.', textUz: 'Sof ijara 750 yevro, qo‘shimcha kommunal 200 yevro. Garov puli (depozit) uch oylik sof ijara miqdorida.' },
        { speaker: 'Aziz', textDe: 'Das passt gut in mein Budget. Wo kann ich meine Waschmaschine anschließen?', textUz: 'Bu byudjetimga to‘g‘ri keladi. Kir yuvish mashinamni qayerga ulasam bo‘ladi?' },
        { speaker: 'Herr Schulz', textDe: 'Im Waschkeller. Sie können die Maschine dort unten aufstellen.', textUz: 'Yerto‘ladagi kirxonada. Mashinangizni u yerga o‘rnatishingiz mumkin.' },
        { speaker: 'Aziz', textDe: 'Sehr gut. Ich würde die Wohnung gerne mieten!', textUz: 'Juda yaxshi. Kvartirani bajonidil ijaraga olgan bo‘lardim!' }
      ],
      usefulPhrases: [
        { german: 'die Warmmiete / Kaltmiete', uzbek: 'umumiy ijara / sof ijara' },
        { german: 'die Kaution hinterlegen', uzbek: 'garov puli (depozit) to‘lamoq' },
        { german: 'die Nebenkosten (Heizung, Wasser, Müll)', uzbek: 'kommunal to‘lovlar' },
        { german: 'den Mietvertrag unterschreiben', uzbek: 'ijara shartnomasini imzolamoq' }
      ],
      culturalNoteUz: 'Germaniyada ijarachilar huquqi kuchli himoyalangan. Ijara shartnomasida uy egasi garov pulini (Kaution) alohida foizli hisob raqamida saqlashi qonunan belgilangan.'
    },
    vocabulary: [
      {
        id: 'voc-m13-1',
        lessonId: 'les-37',
        levelCode: 'a2-2',
        german: 'die Kaution',
        article: 'die',
        plural: 'die Kautionen',
        uzbek: 'garov puli, depozit',
        exampleDe: 'Die Kaution beträgt zwei Monatsmieten.',
        exampleUz: 'Garov puli ikki oylik ijara haqiga teng.',
        wordType: 'noun'
      },
      {
        id: 'voc-m13-2',
        lessonId: 'les-37',
        levelCode: 'a2-2',
        german: 'die Nebenkosten',
        article: 'die',
        plural: 'die Nebenkosten',
        uzbek: 'kommunal to‘lovlar',
        exampleDe: 'Die Nebenkosten sind in der Miete enthalten.',
        exampleUz: 'Kommunal to‘lovlar ijara haqiga kiritilgan.',
        wordType: 'noun'
      },
      {
        id: 'voc-m13-3',
        lessonId: 'les-37',
        levelCode: 'a2-2',
        german: 'der Umzug',
        article: 'der',
        plural: 'die Umzüge',
        uzbek: 'ko‘chib o‘tish',
        exampleDe: 'Der Umzug war sehr anstrengend.',
        exampleUz: 'Ko‘chib o‘tish juda mashaqqatli bo‘ldi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m13-4',
        lessonId: 'les-37',
        levelCode: 'a2-2',
        german: 'stellen',
        article: null,
        plural: null,
        uzbek: 'tik qilib qo‘ymoq (+ Akkusativ)',
        exampleDe: 'Ich stelle die Vase auf den Tisch.',
        exampleUz: 'Men vazani stol ustiga qo‘ymoqdaman.',
        wordType: 'verb'
      },
      {
        id: 'voc-m13-5',
        lessonId: 'les-37',
        levelCode: 'a2-2',
        german: 'stehen',
        article: null,
        plural: null,
        uzbek: 'tik turmoq (+ Dativ)',
        exampleDe: 'Die Vase steht auf dem Tisch.',
        exampleUz: 'Vaza stol ustida turibdi.',
        wordType: 'verb'
      },
      {
        id: 'voc-m13-6',
        lessonId: 'les-37',
        levelCode: 'a2-2',
        german: 'legen',
        article: null,
        plural: null,
        uzbek: 'yotiq holatda qo‘ymoq (+ Akkusativ)',
        exampleDe: 'Er legt das Buch auf das Sofa.',
        exampleUz: 'U kitobni divan ustiga qo‘ymoqda.',
        wordType: 'verb'
      }
    ],
    grammar: [
      {
        id: 'gra-m13-1',
        lessonId: 'les-37',
        levelCode: 'a2-2',
        titleDe: 'Verben der Position und Richtung (stellen/stehen, legen/liegen)',
        titleUz: 'Harakat fe‘llari (Akkusativ) va Holat fe‘llari (Dativ)',
        summaryUz: 'Harakat bildiruvchi juftliklar (stellen, legen, hängen) AKKUSATIV oladi; turg‘un holat bildiruvchilar (stehen, liegen, hängen) DATIV oladi.',
        explanationUz: `Nemis tilida buyumlarning joylashuvi uchun maxsus fe‘l juftliklari mavjud:

1. **Harakat (Yo‘nalish - Wohin? + Akkusativ):**
- **stellen** (tik qo‘ymoq): *Ich stelle das Glas **auf den Tisch**.*
- **legen** (yotiq qo‘ymoq): *Ich lege den Teppich **auf den Boden**.*
- **hängen** (ilmoq): *Ich hänge das Bild **an die Wand**.*

2. **Holat (Turg‘unlik - Wo? + Dativ):**
- **stehen** (tik turmoq): *Das Glas steht **auf dem Tisch**.*
- **liegen** (yotiq turmoq): *Der Teppich liegt **auf dem Boden**.*
- **hängen** (ilib turmoq): *Das Bild hängt **an der Wand**.*

Eslab qoling:
- stellen, legen, setzen — doimiy Akkusativ talab qiladi (kuchli harakat).
- stehen, liegen, sitzen — doimiy Dativ talab qiladi (tinch holat).`,
        tables: [
          {
            title: 'Harakat va Holat juftliklari',
            headers: ['Harakat (Wohin? + Akk)', 'Namuna', 'Holat (Wo? + Dat)', 'Namuna'],
            rows: [
              ['stellen (tik qo‘ymoq)', 'Ich stelle den Stuhl in die Ecke.', 'stehen (tik turmoq)', 'Der Stuhl steht in der Ecke.'],
              ['legen (yotiq qo‘ymoq)', 'Sie legt das Buch auf das Bett.', 'liegen (yotmoq)', 'Das Buch liegt auf dem Bett.'],
              ['hängen (ilmoq)', 'Er hängt die Lampe über den Tisch.', 'hängen (osilib turmoq)', 'Die Lampe hängt über dem Tisch.']
            ]
          }
        ],
        examples: [
          {
            german: 'Wohin hast du meine Brille gelegt? — Sie liegt auf dem Schreibtisch.',
            uzbek: 'Ko‘zoynagimni qayerga qo‘yding? — U yozuv stoli ustida yotibdi.',
            highlight: 'gelegt ... liegt auf dem Schreibtisch'
          },
          {
            german: 'Wir stellen den neuen Schrank neben das Fenster.',
            uzbek: 'Biz yangi shkafni deraza yoniga qo‘yamiz.',
            highlight: 'stellen ... neben das Fenster'
          }
        ]
      }
    ],
    listening: [
      {
        id: 'lis-m13-1',
        lessonId: 'les-37',
        levelCode: 'a2-2',
        titleDe: 'Telefongespräch über eine Wohnungsanzeige',
        titleUz: 'Kvartira e‘loni bo‘yicha telefon suhbati',
        transcriptDe: 'Guten Tag, mein Name ist Aziz Rahimov. Ich rufe wegen Ihrer Anzeige für die 2-Zimmer-Wohnung in Bockenheim an. Ist die Wohnung noch frei?\nJa, Herr Rahimov, die Wohnung ist noch zu haben. Die Miete beträgt 680 Euro kalt, die Nebenkosten liegen bei 180 Euro. Einzugstermin ist der 1. Oktober. Hätten Sie morgen Zeit für eine Besichtigung?',
        translationUz: 'Xayrli kun, mening ismim Aziz Rahimov. Bokenxaymdagi 2 xonali kvartira e‘loningiz bo‘yicha qo‘ng‘iroq qilyapman. Kvartira hali bo‘shmi?\nHa, janob Rahimov, kvartira hali bo‘sh. Sof ijara 680 yevro, kommunal to‘lovlar 180 yevro atrofida. Ko‘chib kirish sanasi 1-oktabr. Ertaga ko‘rish uchun vaqtingiz bormi?',
        dialogue: [
          { speaker: 'Vermieter', textDe: 'Einzugstermin ist der 1. Oktober. Hätten Sie Zeit für eine Besichtigung?', textUz: 'Ko‘chib kirish 1-oktabrda. Ko‘rish uchun vaqtingiz bormi?' }
        ],
        questions: [
          {
            id: 'q-lis-m13-1',
            questionUz: 'Kvartiraga qachon ko‘chib kirish mumkin?',
            options: ['1-oktabrdan (1. Oktober)', 'Darhol bugundan', 'Kelasi yil'],
            correctIndex: 0,
            explanationUz: 'Suhbatda "Einzugstermin ist der 1. Oktober" deb aytilgan.'
          }
        ]
      }
    ],
    reading: [
      {
        id: 'read-m13-1',
        lessonId: 'les-37',
        levelCode: 'a2-2',
        titleDe: 'Wohnungsanzeige in der Zeitung',
        titleUz: 'Gazetadagi kvartira e‘loni',
        textDe: 'Schöne, helle 3-Zimmer-Wohnung in München-Schwabing zu vermieten.\nGröße: 78 qm mit sonnigem Balkon und Einbauküche (EBK).\nLage: 3 Gehminuten zur U-Bahn, ruhige Seitenstraße.\nKaltmiete: 950 Euro + 220 Euro Nebenkosten.\nKaution: 3 Monatskaltmieten.\nHaustiere nach Vereinbarung. Frei ab sofort.\nKontakt: immobilien-schwabing@muenchen.de',
        textUz: 'Myunxen-Shvabingda ijaraga beriladigan chiroyli, yorug‘ 3 xonali kvartira.\nMaydoni: 78 kv.m, quyoshli balkon va o‘rnatilgan oshxona mebeli (EBK) bilan.\nJoylashuvi: metro bekatigacha 3 daqiqalik piyoda yo‘l, sokin ko‘cha.\nSof ijara: 950 yevro + 220 yevro kommunal to‘lovlar.\nGarov puli: 3 oylik sof ijara.\nUy hayvonlari kelishuv asosida. Hozirdan bo‘sh.\nAloqa: immobilien-schwabing@muenchen.de',
        questions: [
          {
            id: 'q-read-m13-1',
            questionUz: 'Metrogacha piyoda necha daqiqalik yo‘l?',
            options: ['3 daqiqa (3 Gehminuten)', '15 daqiqa', 'Yarim soat'],
            correctIndex: 0,
            explanationUz: 'E‘londa "3 Gehminuten zur U-Bahn" deyilgan.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-m13-1',
      lessonId: 'les-37',
      levelCode: 'a2-2',
      taskDe: 'Beschreiben Sie, wie Sie Ihr Zimmer einrichten.',
      taskUz: 'Xonangizni qanday jihozlashingizni tasvirlang.',
      instructionUz: '"stellen", "legen" (Akkusativ) va "stehen", "liegen" (Dativ) fe‘llaridan foydalaning.',
      hints: ['Ich stelle den Schreibtisch ans Fenster.', 'Das Bett steht in der Ecke.'],
      sampleSolutionDe: 'In meinem neuen Zimmer stelle ich den Schreibtisch direkt ans Fenster, weil dort viel Licht ist. Das bequeme Bett steht in der Ecke. An die Wand hänge ich ein schönes Bild von meiner Familie.',
      scaffold: {
        openingDe: 'Meine Zimmereinrichtung:',
        closingDe: 'So fühle ich mich zu Hause wohl.',
        usefulPhrasesDe: ['Ich stelle ... an die Wand', 'Auf dem Boden liegt ein Teppich...']
      }
    },
    shadowing: [
      {
        id: 'sha-m13-1',
        lessonId: 'les-37',
        levelCode: 'a2-2',
        sentenceDe: 'Ich stelle den Schreibtisch ans Fenster und das Bett steht in der ruhigen Ecke.',
        translationUz: 'Men yozuv stolini deraza yoniga qo‘yaman, karavot esa sokin burchakda turibdi.',
        phoneticHint: '[Ih shtel-le den Shrayb-tish ans Fen-ster unt das Bet shtet in der ru-hi-gen Ek-ke]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-m13-1-q1',
        type: 'fill-blank',
        questionUz: 'Harakat fe‘li (Wohin? Akkusativ) uchun to‘g‘ri artiklni qo‘ying: "Ich stelle die Vase auf _____ Tisch."',
        blankSentence: 'Ich stelle die Vase auf [blank] Tisch.',
        options: ['den', 'dem', 'der', 'das'],
        correctAnswer: 'den',
        explanationUz: 'stellen (harakat, Wohin?) der Tisch Akkusativda "den Tisch" bo‘ladi.',
        mistakeTipUz: '❌ Harakat fe‘lida Akkusativ: auf den Tisch.'
      },
      {
        id: 'prac-m13-1-q2',
        type: 'fill-blank',
        questionUz: 'Holat fe‘li (Wo? Dativ) uchun to‘g‘ri artiklni qo‘ying: "Die Vase steht auf _____ Tisch."',
        blankSentence: 'Die Vase steht auf [blank] Tisch.',
        options: ['dem', 'den', 'das', 'der'],
        correctAnswer: 'dem',
        explanationUz: 'stehen (holat, Wo?) der Tisch Dativda "dem Tisch" bo‘ladi.',
        mistakeTipUz: '❌ Holat fe‘lida Dativ: auf dem Tisch.'
      },
      {
        id: 'prac-m13-1-q3',
        type: 'word-order',
        questionUz: 'Gapni to‘g‘ri tartibda tuzing:',
        scrambledWords: ['an', 'hängt', 'Bild', 'Das', 'der', 'Wand.'],
        correctAnswer: 'Das Bild hängt an der Wand.',
        explanationUz: 'Das Bild (1) + hängt (2) + an der Wand (Dativ turg‘un holat).',
        mistakeTipUz: '❌ Holat fe‘lida Dativ: an der Wand.'
      }
    ]
  },

  // ==========================================
  // LEKTION 38: Nachbarschaft und Hausordnung
  // ==========================================
  {
    id: 'les-38',
    moduleId: 'mod-a2-2-1',
    levelCode: 'a2-2',
    titleDe: 'Lektion 38: Nachbarschaft und Hausordnung',
    titleUz: '38-Dars: Qo‘shnichilik va uy qoidalari (Konjunktiv II: Xushmuomala iltimoslar - könnten/würden)',
    descriptionUz: 'Uy qoidalari (Hausordnung), sokinlik vaqtlari (Ruhezeiten) hamda "könnten" va "würden" yordamida o‘ta xushmuomala iltimos va maslahatlar berish.',
    orderIndex: 38,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Nemis uylaridagi ichki tartib va sokinlik soatlarini bilish',
      'Konjunktiv II (Könnten Sie bitte... / Würden Sie bitte...) orqali muloyim iltimos qilish',
      'Qo‘shnilar bilan nizolarni madaniy hal etish'
    ],
    warmUp: {
      situationUz: 'Kechqurun qo‘shningiz juda baland musiqa qo‘ymoqda va siz undan musiqani sal pasaytirishni muloyim so‘ramoqchisiz.',
      curiosityQuestionUz: '"Musiqani biroz pasaytirib bera olarmidingiz?" nemis tilida qanday aytiladi?',
      miniDialogue: [
        { speaker: 'Nachbar', textDe: 'Könnten Sie bitte die Musik etwas leiser machen?', textUz: 'Musiqani biroz pasaytirib bera olarmidingiz?' },
        { speaker: 'Mieter', textDe: 'Oh, Entschuldigung! Ich wusste nicht, dass es so laut ist.', textUz: 'Voy, kechirasiz! Shunchalik baland ekanini bilmabman.' }
      ],
      hintUz: 'Buyruq (Machen Sie leiser!) o‘rniga Konjunktiv II (Könnten Sie bitte... machen?) qo‘llash juda yuqori madaniyat belgisidir!'
    },
    contextDialogue: {
      titleDe: 'Ein freundliches Gespräch im Treppenhaus',
      titleUz: 'Zinapoyada xushmuomala suhbat',
      situationUz: 'Nodir va qo‘shnisi Schneider xonim zinapoyada uchrashib qolishdi.',
      lines: [
        { speaker: 'Frau Schneider', textDe: 'Guten Tag, Herr Rahimov! Wie gefällt Ihnen die neue Wohnung?', textUz: 'Xayrli kun, janob Rahimov! Yangi kvartira sizga yoqyaptimi?' },
        { speaker: 'Nodir', textDe: 'Guten Tag, Frau Schneider! Sehr gut, danke. Alle Nachbarn sind sehr nett.', textUz: 'Xayrli kun, Shnayder xonim! Juda yaxshi, rahmat. Barcha qo‘shnilar juda samimiy.' },
        { speaker: 'Frau Schneider', textDe: 'Das freut mich. Dürfte ich Sie um einen kleinen Gefallen bitten?', textUz: 'Bundan xursandman. Sizdan bir kichik iltimos qilsam maylimi?' },
        { speaker: 'Nodir', textDe: 'Ja natürlich, gerne. Worum geht es?', textUz: 'Ha albatta, bajonidil. Nima haqida ekan?' },
        { speaker: 'Frau Schneider', textDe: 'Könnten Sie bitte am Samstag mein Paket annehmen? Ich bin den ganzen Tag unterwegs.', textUz: 'Shanba kuni mening posilkamni qabul qilib bera olarmidingiz? Men kun bo‘yi safarda bo‘laman.' },
        { speaker: 'Nodir', textDe: 'Sehr gerne, das mache ich für Sie!', textUz: 'Jon deb, buni siz uchun bajaraman!' },
        { speaker: 'Frau Schneider', textDe: 'Vielen herzlichen Dank! Das ist wirklich sehr aufmerksam.', textUz: 'Chin yurakdan katta rahmat! Bu haqiqatan ham juda e‘tiborli.' }
      ],
      usefulPhrases: [
        { german: 'Dürfte ich Sie um einen Gefallen bitten?', uzbek: 'Sizdan bir iltimos qilsam maylimi?' },
        { german: 'Könnten Sie bitte...?', uzbek: '...qila olarmidingiz, iltimos?' },
        { german: 'Würden Sie bitte...?', uzbek: '...qilib bera olarmidingiz?' },
        { german: 'die Ruhezeiten beachten', uzbek: 'sokinlik vaqtlariga rioya qilmoq' }
      ],
      culturalNoteUz: 'Germaniyada "Ruhezeit" (odatda 22:00 dan 06:00 gacha va yakshanba kunlari to‘liq) qonun bilan himoyalangan. Bu vaqtda baland tovush chiqarish, burg‘ilash (bohren) yoki changyutgich ishlatish taqiqlanadi.'
    },
    vocabulary: [
      {
        id: 'voc-m13-7',
        lessonId: 'les-38',
        levelCode: 'a2-2',
        german: 'der Nachbar',
        article: 'der',
        plural: 'die Nachbarn',
        uzbek: 'qo‘shni',
        exampleDe: 'Unsere Nachbarn sind sehr hilfsbereit.',
        exampleUz: 'Bizning qo‘shnilarimiz juda yordamsevar.',
        wordType: 'noun'
      },
      {
        id: 'voc-m13-8',
        lessonId: 'les-38',
        levelCode: 'a2-2',
        german: 'die Hausordnung',
        article: 'die',
        plural: 'die Hausordnungen',
        uzbek: 'uy ichki tartib-qoidalari',
        exampleDe: 'Bitte lesen Sie die Hausordnung.',
        exampleUz: 'Iltimos, uy qoidalarini o‘qib chiqing.',
        wordType: 'noun'
      },
      {
        id: 'voc-m13-9',
        lessonId: 'les-38',
        levelCode: 'a2-2',
        german: 'der Lärm',
        article: 'der',
        plural: null,
        uzbek: 'shovqin-suron',
        exampleDe: 'Bitte vermeiden Sie unnötigen Lärm.',
        exampleUz: 'Iltimos, ortiqcha shovqinga yo‘l qo‘ymang.',
        wordType: 'noun'
      },
      {
        id: 'voc-m13-10',
        lessonId: 'les-38',
        levelCode: 'a2-2',
        german: 'stören',
        article: null,
        plural: null,
        uzbek: 'xalal bermoq, bezovta qilmoq',
        exampleDe: 'Störe ich Sie?',
        exampleUz: 'Sizga xalal bermayapmanmi?',
        wordType: 'verb'
      },
      {
        id: 'voc-m13-11',
        lessonId: 'les-38',
        levelCode: 'a2-2',
        german: 'leise',
        article: null,
        plural: null,
        uzbek: 'sekin, sokin, past ovozda',
        exampleDe: 'Seien Sie bitte ab 22:00 Uhr leise.',
        exampleUz: 'Iltimos, soat 22:00 dan keyin sokin bo‘ling.',
        wordType: 'adjective'
      },
      {
        id: 'voc-m13-12',
        lessonId: 'les-38',
        levelCode: 'a2-2',
        german: 'der Gefallen',
        article: 'der',
        plural: 'die Gefallen',
        uzbek: 'iltimos, yaxshilik',
        exampleDe: 'Können Sie mir einen Gefallen tun?',
        exampleUz: 'Menga bir yaxshilik (iltimos) qilib bera olasizmi?',
        wordType: 'noun'
      }
    ],
    grammar: [
      {
        id: 'gra-m13-2',
        lessonId: 'les-38',
        levelCode: 'a2-2',
        titleDe: 'Konjunktiv II: Höfliche Bitten (Xushmuomala iltimoslar)',
        titleUz: 'Könnten Sie / Würden Sie + Infinitiv',
        summaryUz: 'Buyruq o‘rniga o‘ta yuqori xushmuomalalik bilan iltimos qilish uchun "könnten" va "würden" shakllari qo‘llanadi.',
        explanationUz: `Kundalik hayotda va ayniqsa notanish kishilar yoki qo‘shnilar bilan muloqotda Konjunktiv II shakli juda muhim:

1. **könnten (imkoniyat iltimosi):**
- *Könnten Sie mir bitte helfen?* (Menga yordam bera olarmidingiz?)
- *Könntest du bitte das Fenster schließen?* (Derazani yopib bera olarmiding?)

2. **würden + Infinitiv (harakat iltimosi):**
- *Würden Sie bitte leiser sprechen?* (Past ovozda gapirib bera olarmidingiz?)
- *Ich würde gerne einen Kaffee trinken.* (Qahva ichgan bo‘lardim.)

3. **hätte / wäre (orzular va istaklar):**
- *Ich hätte gern ein Glas Wasser.* (Menga bir stakan suv bersangiz yaxshi bo‘lardi.)
- *Das wäre sehr nett!* (Bu juda soz bo‘lardi!)`,
        tables: [
          {
            title: 'können va werden fe‘llarining Konjunktiv II tuslanishi',
            headers: ['Shaxs', 'könnten (bera olarmidingiz)', 'würden + Infinitiv (qilarmidingiz)'],
            rows: [
              ['ich', 'könnte', 'würde'],
              ['du', 'könntest', 'würdest'],
              ['er / sie / es', 'könnte', 'würde'],
              ['wir', 'könnten', 'würden'],
              ['ihr', 'könntet', 'würdet'],
              ['sie / Sie', 'könnten', 'würden']
            ]
          }
        ],
        examples: [
          {
            german: 'Könnten Sie mir bitte sagen, wo der Müllplatz ist?',
            uzbek: 'Chiqindi tashlash joyi qayerdaligini aytib bera olarmidingiz?',
            highlight: 'Könnten Sie mir bitte sagen'
          },
          {
            german: 'Würden Sie bitte die Musik etwas leiser machen?',
            uzbek: 'Musiqani biroz pasaytirib bera olarmidingiz?',
            highlight: 'Würden Sie bitte ... machen'
          }
        ]
      }
    ],
    listening: [
      {
        id: 'lis-m13-2',
        lessonId: 'les-38',
        levelCode: 'a2-2',
        titleDe: 'Gespräch über die Hausordnung',
        titleUz: 'Uy qoidalari haqida suhbat',
        transcriptDe: 'Entschuldigung Herr Wagner, könnten Sie am Sonntag bitte nicht bohren? Es ist Sonntag und da gilt laut Hausordnung ganztägig Ruhezeit.\nAch so, das tut mir leid! Ich wusste nicht, dass man sonntags gar nicht bohren darf. Ich höre sofort auf und mache morgen weiter.',
        translationUz: 'Kechirasiz janob Vagner, yakshanba kuni iltimos devorni parmalab teshmasangiz (drel ishlatmasangiz)? Bugun yakshanba va uy qoidasiga ko‘ra kun bo‘yi sokinlik vaqti hisoblanadi.\nShundaymi, kechirasiz! Yakshanba kuni umuman teshish mumkin emasligini bilmabman. Darhol to‘xtataman va ertaga davom ettiraman.',
        dialogue: [
          { speaker: 'Nachbarin', textDe: 'Könnten Sie bitte am Sonntag nicht bohren? Es gilt ganztägig Ruhezeit.', textUz: 'Iltimos, yakshanbada devor teshmaysizmi? Kun bo‘yi sokinlik vaqti amal qiladi.' }
        ],
        questions: [
          {
            id: 'q-lis-m13-2',
            questionUz: 'Yakshanba kuni uy qoidasiga ko‘ra qanday tartib o‘rnatilgan?',
            options: ['Kun bo‘yi sokinlik vaqti (ganztägig Ruhezeit)', 'Ziyofat qilish vaqti', 'Faqat kechqurun sokinlik'],
            correctIndex: 0,
            explanationUz: 'Qo‘shni ayol "da gilt laut Hausordnung ganztägig Ruhezeit" deb tushuntirdi.'
          }
        ]
      }
    ],
    reading: [
      {
        id: 'read-m13-2',
        lessonId: 'les-38',
        levelCode: 'a2-2',
        titleDe: 'Auszug aus einer deutschen Hausordnung',
        titleUz: 'Nemis uy ichki tartib-qoidasidan ko‘chirma',
        textDe: 'HAUSORDNUNG — Wichtige Regeln für alle Bewohner:\n\n1. Ruhezeiten: Von 13:00 bis 15:00 Uhr (Mittagsruhe) und von 22:00 bis 07:00 Uhr (Nachtruhe) ist jeder Lärm zu vermeiden. Musizieren ist nur außerhalb dieser Zeiten erlaubt.\n2. Mülltrennung: Der Müll muss sorgfältig getrennt werden (Papier, Plastik/Gelber Sack, Bio und Restmüll).\n3. Flur und Treppenhaus: Fluchtwege müssen frei bleiben. Schuhe und Fahrräder dürfen nicht im Treppenhaus abgestellt werden.',
        textUz: 'UY QOIDALARI — Barcha yashovchilar uchun muhim qoidalar:\n\n1. Sokinlik vaqtlari: Soat 13:00 dan 15:00 gacha (tushki sokinlik) va 22:00 dan 07:00 gacha (tungi sokinlik) har qanday shovqindan saqlanish shart. Musiqa mashg‘ulotlari faqat ushbu soatlardan tashqarida ruxsat etiladi.\n2. Chiqindi saralash: Chiqindi qat‘iy saralanishi shart (qog‘oz, plastik, bio va umumiy chiqindi).\n3. Yo‘lak va zinapoya: Favqulodda chiqish yo‘llari bo‘sh bo‘lishi lozim. Poyabzallar va velosipedlarni zinapoyada qoldirish taqiqlanadi.',
        questions: [
          {
            id: 'q-read-m13-2',
            questionUz: 'Tungi sokinlik (Nachtruhe) qaysi soatlar oralig‘ida amal qiladi?',
            options: ['Soat 22:00 dan 07:00 gacha', 'Faqat yarim tunda', '20:00 dan 06:00 gacha'],
            correctIndex: 0,
            explanationUz: 'Qoidada "von 22:00 bis 07:00 Uhr (Nachtruhe)" deb belgilangan.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-m13-2',
      lessonId: 'les-38',
      levelCode: 'a2-2',
      taskDe: 'Schreiben Sie eine freundliche Bitte an Ihren Nachbarn mit Konjunktiv II.',
      taskUz: 'Qo‘shningizga Konjunktiv II (Könnten Sie / Würden Sie) yordamida muloyim iltimosnoma yozing.',
      instructionUz: 'Posilkani qabul qilib turishini yoki gulni sug‘orib turishini iltimos qiling.',
      hints: ['Könnten Sie bitte...', 'Würden Sie mir einen Gefallen tun?'],
      sampleSolutionDe: 'Lieber Herr Müller, ich bin ab morgen für drei Tage verreist. Könnten Sie bitte meine Blumen auf dem Balkon gießen und mein Paket annehmen? Das wäre sehr nett von Ihnen! Vielen Dank im Voraus, Aziz',
      scaffold: {
        openingDe: 'Lieber Herr Müller,',
        closingDe: 'Herzliche Grüße, Aziz',
        usefulPhrasesDe: ['Könnten Sie bitte...', 'Das wäre sehr nett von Ihnen...']
      }
    },
    shadowing: [
      {
        id: 'sha-m13-2',
        lessonId: 'les-38',
        levelCode: 'a2-2',
        sentenceDe: 'Könnten Sie mir bitte einen Gefallen tun und mein Paket am Samstag annehmen?',
        translationUz: 'Iltimos, menga bir yaxshilik qilib, shanba kuni posilkamni qabul qilib bera olarmidingiz?',
        phoneticHint: '[Kön-nen Zi mir bit-te ay-nen Ge-fal-len tun unt mayn Pa-ket am Zam-stag an-ne-men]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-m13-2-q1',
        type: 'fill-blank',
        questionUz: 'Konjunktiv II xushmuomala shaklini qo‘ying: "_____ Sie mir bitte helfen?"',
        blankSentence: '[blank] Sie mir bitte helfen?',
        options: ['Könnten', 'Können', 'Kann', 'Konnte'],
        correctAnswer: 'Könnten',
        explanationUz: 'Eng xushmuomala shakl "Könnten Sie..." hisoblanadi.',
        mistakeTipUz: '❌ Xushmuomala iltimosda "Könnten Sie..." ishlatiladi.'
      },
      {
        id: 'prac-m13-2-q2',
        type: 'multiple-choice',
        questionUz: '"Eshikni yopib bera olarmidingiz?" muloyim iltimosi qaysi?',
        options: [
          'Würden Sie bitte die Tür schließen?',
          'Schließen Sie sofort die Tür!',
          'Werden Sie die Tür schließen?',
          'Wollen Sie die Tür schließen?'
        ],
        correctAnswer: 'Würden Sie bitte die Tür schließen?',
        explanationUz: '"Würden Sie bitte... schließen?" — Konjunktiv II ning xushmuomala iltimos shakli.',
        mistakeTipUz: '❌ Muloyim iltimosda "Würden Sie bitte..." qo‘llanadi.'
      },
      {
        id: 'prac-m13-2-q3',
        type: 'word-order',
        questionUz: 'Gapni to‘g‘ri tartibda tuzing:',
        scrambledWords: ['bitte', 'Könnten', 'Sie', 'leiser', 'sprechen?'],
        correctAnswer: 'Könnten Sie bitte leiser sprechen?',
        explanationUz: 'Könnten (1) + Sie (2) + bitte (3) + leiser (4) + sprechen (5)?',
        mistakeTipUz: '❌ Savol gap "Könnten Sie bitte..." bilan boshlanadi.'
      }
    ]
  },

  // ==========================================
  // LEKTION 39: Möbel, Renovierung und Einrichtung
  // ==========================================
  {
    id: 'les-39',
    moduleId: 'mod-a2-2-1',
    levelCode: 'a2-2',
    titleDe: 'Lektion 39: Möbel, Renovierung und Einrichtung',
    titleUz: '39-Dars: Uyni ta‘mirlash va jihozlash (Artiklsiz sifat turlanishi - Nullartikel)',
    descriptionUz: 'Devorlarni bo‘yash, yangi mebellar, qulay interyer dizayni hamda artiklsiz (Nullartikel) sifat turlanishi (frisches Obst, schönes Holz, kalter Kaffee).',
    orderIndex: 39,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Uyni ta‘mirlash va xonalarni jihozlash so‘z boyligini egallash',
      'Artikl bo‘lmaganda sifatning o‘ziga rod qo‘shimchalarini olishini tushunish',
      'Mebel materiallari (yog‘och, shisha, metall) haqida fikr bildirish'
    ],
    warmUp: {
      situationUz: 'Yangi kvartirangiz devorini bo‘yamoqchisiz va qurilish do‘koniga (Baumarkt) bordingiz.',
      curiosityQuestionUz: '"Bizga sifatli yog‘och mebellar va oq bo‘yoq kerak" nemischa qanday aytiladi?',
      miniDialogue: [
        { speaker: 'Verkäufer', textDe: 'Welche Farbe möchten Sie kaufen?', textUz: 'Qanday rangdagi bo‘yoq sotib olmoqchisiz?' },
        { speaker: 'Kunde', textDe: 'Ich suche helle Farbe für das Wohnzimmer.', textUz: 'Men mehmonxona uchun yorug‘ bo‘yoq qidiryapman.' }
      ],
      hintUz: 'Artikl yo‘q bo‘lsa (Nullartikel), sifat xuddi aniq artikl kabi to‘liq rod belgisini o‘ziga oladi: helle Farbe, frisches Holz!'
    },
    contextDialogue: {
      titleDe: 'Im Baumarkt und Möbelhaus',
      titleUz: 'Qurilish do‘koni va mebel uyida',
      situationUz: 'Kamola va uning turmush o‘rtog‘i yangi xona uchun mebel va bo‘yoq tanlamoqda.',
      lines: [
        { speaker: 'Kamola', textDe: 'Schau mal, dieser Tisch aus echtem Holz gefällt mir sehr gut.', textUz: 'Qara, haqiqiy yog‘ochdan yasalgan bu stol menga juda yoqdi.' },
        { speaker: 'Farrux', textDe: 'Ja, massives Holz sieht immer gemütlich aus. Aber er ist ziemlich schwer.', textUz: 'Ha, sifatli pishiq yog‘och doimo shinam ko‘rinadi. Lekin u ancha og‘ir ekan.' },
        { speaker: 'Kamola', textDe: 'Dafür hält er viele Jahre. Wir brauchen auch noch weiße Wandfarbe für das Schlafzimmer.', textUz: 'Buning evaziga u ko‘p yillar xizmat qiladi. Yotoqxona uchun oq devor bo‘yog‘i ham kerak.' },
        { speaker: 'Farrux', textDe: 'Genau. Und wie wäre es mit neuen Vorhängen? Bunte Vorhänge bringen mehr Leben in den Raum.', textUz: 'Xuddi shunday. Yangi pardalar-chi? Rang-barang pardalar xonaga ko‘proq fayz kiritadi.' },
        { speaker: 'Kamola', textDe: 'Eine hervorragende Idee! Dann lass uns alles zusammen bestellen.', textUz: 'Ajoyib g‘oya! Unda hammasini birgalikda buyurtma qilaylik.' }
      ],
      usefulPhrases: [
        { german: 'die Wand streichen', uzbek: 'devorni bo‘yamoq' },
        { german: 'aus echtem Holz / Glas', uzbek: 'haqiqiy yog‘ochdan / shishadan' },
        { german: 'Möbel aufbauen', uzbek: 'mebellarni yig‘moq (montaj qilmoq)' },
        { german: 'eine gemütliche Atmosphäre', uzbek: 'shinam muhit' }
      ],
      culturalNoteUz: 'Germaniyada "Baumarkt" (Obi, Bauhaus, Hornbach) juda mashhur. Nemislar uylarini o‘z qo‘llari bilan ta‘mirlashni (Do-It-Yourself / Heimwerken) juda sevadilar.'
    },
    vocabulary: [
      {
        id: 'voc-m13-13',
        lessonId: 'les-39',
        levelCode: 'a2-2',
        german: 'die Wand',
        article: 'die',
        plural: 'die Wände',
        uzbek: 'devor',
        exampleDe: 'Wir streichen die Wände weiß.',
        exampleUz: 'Biz devorlarni oq rangga bo‘yayapmiz.',
        wordType: 'noun'
      },
      {
        id: 'voc-m13-14',
        lessonId: 'les-39',
        levelCode: 'a2-2',
        german: 'der Vorhang',
        article: 'der',
        plural: 'die Vorhänge',
        uzbek: 'parda',
        exampleDe: 'Die neuen Vorhänge passen perfekt.',
        exampleUz: 'Yangi pardalar juda mos tushdi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m13-15',
        lessonId: 'les-39',
        levelCode: 'a2-2',
        german: 'streichen',
        article: null,
        plural: null,
        uzbek: 'bo‘yamoq (kraska qilmoq)',
        exampleDe: 'Am Wochenende streichen wir die Küche.',
        exampleUz: 'Dam olish kunlari oshxonani bo‘yaymiz.',
        wordType: 'verb'
      },
      {
        id: 'voc-m13-16',
        lessonId: 'les-39',
        levelCode: 'a2-2',
        german: 'das Holz',
        article: 'das',
        plural: null,
        uzbek: 'yog‘och',
        exampleDe: 'Der Tisch ist aus massivem Holz.',
        exampleUz: 'Stol pishiq yog‘ochdan yasalgan.',
        wordType: 'noun'
      },
      {
        id: 'voc-m13-17',
        lessonId: 'les-39',
        levelCode: 'a2-2',
        german: 'renovieren',
        article: null,
        plural: null,
        uzbek: 'ta‘mirlamoq, yangilamoq',
        exampleDe: 'Wir müssen die alte Wohnung renovieren.',
        exampleUz: 'Eski kvartirani ta‘mirlashimiz kerak.',
        wordType: 'verb'
      },
      {
        id: 'voc-m13-18',
        lessonId: 'les-39',
        levelCode: 'a2-2',
        german: 'das Werkzeug',
        article: 'das',
        plural: 'die Werkzeuge',
        uzbek: 'asbob-uskuna (instrument)',
        exampleDe: 'Hast du das passende Werkzeug dabei?',
        exampleUz: 'Mos asbob-uskunang yoningdami?',
        wordType: 'noun'
      }
    ],
    grammar: [
      {
        id: 'gra-m13-3',
        lessonId: 'les-39',
        levelCode: 'a2-2',
        titleDe: 'Adjektivdeklination ohne Artikel (Nullartikel)',
        titleUz: 'Artiklsiz sifat turlanishi (frisches Obst, schönes Holz)',
        summaryUz: 'Oldinda hech qanday artikl bo‘lmaganda, sifat xuddi aniq artiklning (der/die/das) oxirgi harflari kabi mustaqil rod qo‘shimchalarini oladi.',
        explanationUz: `Sanoqsiz moddiy otlar (choy, qahva, meva, yog‘och) va ko‘plikdagi artiklsiz otlar oldidan sifat kelsa:

Sifat aniq artikl o‘rnini bosadi va uning tugallanishini oladi:
1. **Maskulin (der):**
- Nominativ: **frischer** Kaffee (-er xuddi der kabi)
- Akkusativ: **frischen** Kaffee (-en xuddi den kabi)
- Dativ: **frischem** Kaffee (-em xuddi dem kabi)

2. **Neutrum (das):**
- Nominativ / Akkusativ: **frisches** Brot (-es xuddi das kabi)
- Dativ: **frischem** Brot (-em xuddi dem kabi)

3. **Feminin (die):**
- Nominativ / Akkusativ: **frische** Milch (-e xuddi die kabi)
- Dativ: **frischer** Milch (-er xuddi der kabi)

4. **Ko‘plik (Plural):**
- Nominativ / Akkusativ: **bunte** Vorhänge (-e xuddi die kabi)
- Dativ: **bunten** Vorhängen (-en xuddi den kabi).`,
        tables: [
          {
            title: 'Nullartikel (Artiklsiz) sifat qo‘shimchalari',
            headers: ['Kelishik', 'Maskulin', 'Neutrum', 'Feminin', 'Plural'],
            rows: [
              ['Nominativ', 'guter Tee', 'frisches Obst', 'kalte Milch', 'neue Möbel'],
              ['Akkusativ', 'guten Tee', 'frisches Obst', 'kalte Milch', 'neue Möbel'],
              ['Dativ', 'gutem Tee', 'frischem Obst', 'kalter Milch', 'neuen Möbeln']
            ]
          }
        ],
        examples: [
          {
            german: 'Wir trinken morgens gerne heißen Tee.',
            uzbek: 'Biz ertalab issiq choy ichishni yoqtiramiz.',
            highlight: 'heißen Tee'
          },
          {
            german: 'Der Tisch ist aus dunklem Holz gefertigt.',
            uzbek: 'Stol to‘q rangli yog‘ochdan yasalgan.',
            highlight: 'dunklem Holz'
          }
        ]
      }
    ],
    listening: [
      {
        id: 'lis-m13-3',
        lessonId: 'les-39',
        levelCode: 'a2-2',
        titleDe: 'Beratung im Baumarkt',
        titleUz: 'Qurilish do‘konida maslahat',
        transcriptDe: 'Guten Tag, kann ich Ihnen helfen?\nJa bitte, wir möchten unser Wohnzimmer renovieren und suchen gute Farbe für die Wände. Was können Sie empfehlen?\nFür das Wohnzimmer empfehle ich hochwertige Dispersionsfarbe. Sie deckt schon beim ersten Anstrich und trocknet sehr schnell.\nSuper, dann nehmen wir zwei Eimer weiße Farbe.',
        translationUz: 'Xayrli kun, yordam bera olamanmi?\nHa iltimos, biz mehmonxonamizni ta‘mirlamoqchimiz va devorlar uchun sifatli bo‘yoq qidiryapmiz. Nima tavsiya qilasiz?\nMehmonxona uchun yuqori sifatli dispersiya bo‘yog‘ini tavsiya qilaman. U birinchi bo‘yashdayoq to‘liq qoplaydi va tez quriydi.\nAjoyib, unda ikki chelak oq bo‘yoq olamiz.',
        dialogue: [
          { speaker: 'Berater', textDe: 'Ich empfehle hochwertige Dispersionsfarbe. Sie deckt sofort.', textUz: 'Yuqori sifatli dispersiya bo‘yog‘ini tavsiya qilaman. U darhol qoplaydi.' }
        ],
        questions: [
          {
            id: 'q-lis-m13-3',
            questionUz: 'Xaridorlar necha chelak oq bo‘yoq sotib olishdi?',
            options: ['Ikki chelak (zwei Eimer)', 'Besh chelak', 'Bir chelak'],
            correctIndex: 0,
            explanationUz: 'Xaridor "dann nehmen wir zwei Eimer weiße Farbe" deb aytdi.'
          }
        ]
      }
    ],
    reading: [
      {
        id: 'read-m13-3',
        lessonId: 'les-39',
        levelCode: 'a2-2',
        titleDe: 'DIY: Tipps für die Wohnungsrenovierung',
        titleUz: 'Uy ta‘miri bo‘yicha maslahatlar',
        textDe: 'Eine Wohnung selbst zu renovieren spart viel Geld und macht Spaß! Hier sind drei einfache Tipps:\n1. Vorbereitung: Decken Sie den Boden gründlich mit Plastikfolie ab, bevor Sie streichen.\n2. Gutes Werkzeug: Sparen Sie nicht an Pinseln und Farbrollern. Billiges Werkzeug verliert Borsten und hinterlässt Streifen.\n3. Ausreichend lüften: Öffnen Sie nach dem Streichen die Fenster, damit frische Luft hineinströmt und die Farbe schnell trocknet.',
        textUz: 'Kvartirani o‘z qo‘li bilan ta‘mirlash ko‘p pulni tejaydi va zavq bag‘ishlaydi! Mana uchta oddiy maslahat:\n1. Tayyorgarlik: Bo‘yashdan oldin polni polietilen plyonka bilan yaxshilab yoping.\n2. Yaxshi asbob: Cho‘tka va roliklardan tejamang. Arzon asbob tuklarini to‘kadi va chiziq qoldiradi.\n3. Yetarlicha shamollatish: Bo‘yashdan so‘ng toza havo kirishi va bo‘yoq tez qurishi uchun derazalarni oching.',
        questions: [
          {
            id: 'q-read-m13-3',
            questionUz: 'Bo‘yashdan so‘ng nima uchun derazalarni ochish kerak?',
            options: ['Toza havo kirishi va bo‘yoq tez qurishi uchun', 'Qo‘shnilar ko‘rishi uchun', 'Qorong‘i bo‘lishi uchun'],
            correctIndex: 0,
            explanationUz: 'Matnda "damit frische Luft hineinströmt und die Farbe schnell trocknet" deb tushuntirilgan.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-m13-3',
      lessonId: 'les-39',
      levelCode: 'a2-2',
      taskDe: 'Beschreiben Sie Ihre Traumwohnung mit artikellosen Adjektiven.',
      taskUz: 'Orzuingizdagi uyni artiklsiz sifatlar (frisches Obst, helles Holz) yordamida tasvirlang.',
      instructionUz: 'Qanday materiallar va ranglar sizga yoqishini bayon qiling.',
      hints: ['Meine Traumwohnung hat helles Holz...', 'Ich mag bequeme Möbel...'],
      sampleSolutionDe: 'Meine Traumwohnung hat große Fenster und helle Wände. Im Wohnzimmer stehen moderne Möbel aus echtem Holz. Auf dem Balkon trinke ich morgens gerne heißen Kaffee und esse frisches Obst.',
      scaffold: {
        openingDe: 'Meine Traumwohnung:',
        closingDe: 'Dort fühle ich mich glücklich.',
        usefulPhrasesDe: ['...hat helle Wände', 'Möbel aus echtem Holz...']
      }
    },
    shadowing: [
      {
        id: 'sha-m13-3',
        lessonId: 'les-39',
        levelCode: 'a2-2',
        sentenceDe: 'Im Wohnzimmer haben wir moderne Möbel aus echtem Holz und trinken morgens frischen Kaffee.',
        translationUz: 'Mehmonxonada bizda haqiqiy yog‘ochdan zamonaviy mebellar bor va ertalab yangi qahva ichamiz.',
        phoneticHint: '[Im Vohn-tsim-mer ha-ben vir mo-der-ne Mö-bel aus eh-tem Holts unt trin-ken mor-gens fri-shen Kaf-fe]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-m13-3-q1',
        type: 'fill-blank',
        questionUz: 'Artiklsiz sifat qo‘shimchasini qo‘ying (Neutrum): "Ich esse gerne _____ Obst."',
        blankSentence: 'Ich esse gerne [blank] Obst.',
        options: ['frisches', 'frischer', 'frische', 'frischem'],
        correctAnswer: 'frisches',
        explanationUz: 'das Obst (Neutrum) artiklsiz bo‘lganda -es oladi: frisches Obst.',
        mistakeTipUz: '❌ Neutrum uchun: frisches Obst.'
      },
      {
        id: 'prac-m13-3-q2',
        type: 'multiple-choice',
        questionUz: '"Ular ertalab issiq choy (der Tee - Akkusativ) ichishadi" gapi qaysi?',
        options: [
          'Sie trinken heißen Tee.',
          'Sie trinken heißer Tee.',
          'Sie trinken heißes Tee.',
          'Sie trinken heiße Tee.'
        ],
        correctAnswer: 'Sie trinken heißen Tee.',
        explanationUz: 'der Tee (Akkusativ) artiklsiz shaklda -en oladi: heißen Tee.',
        mistakeTipUz: '❌ Maskulin Akkusativ artiklsiz: heißen Tee.'
      },
      {
        id: 'prac-m13-3-q3',
        type: 'word-order',
        questionUz: 'Gapni to‘g‘ri tartibda tuzing:',
        scrambledWords: ['aus', 'ist', 'Tisch', 'Der', 'dunklem', 'Holz.'],
        correctAnswer: 'Der Tisch ist aus dunklem Holz.',
        explanationUz: 'Der Tisch ist (1) + aus dunklem Holz (Dativ Neutrum).',
        mistakeTipUz: '❌ Dativ Neutrum artiklsiz: aus dunklem Holz.'
      }
    ]
  }
];
