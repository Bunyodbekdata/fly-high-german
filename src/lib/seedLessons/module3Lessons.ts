import { Lesson } from '../../types/database';

export const MODULE_3_LESSONS: Lesson[] = [
  // ==========================================
  // LEKTION 7: Hast du heute Zeit? (Hobbys, Wochentage & Vokalwechsel)
  // ==========================================
  {
    id: 'les-7',
    moduleId: 'mod-3',
    levelCode: 'a1-1',
    titleDe: 'Lektion 7: Hast du heute Zeit?',
    titleUz: '7-Dars: Bugun vaqting bormi? (Xobbi, hafta kunlari va unlisi o‘zgaruvchi fe‘llar)',
    descriptionUz: 'Bo‘sh vaqt va sevimli mashg‘ulotlar, hafta kunlari (Montag bis Sonntag), o‘zak unlisi o‘zgaruvchi noaniq fe‘llar (lesen, fahren, sprechen) va V2 so‘z tartibi.',
    orderIndex: 7,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Bo‘sh vaqtdagi sevimli mashg‘ulotlarni aytish (Fußball spielen, Musik hören, Bücher lesen)',
      'Hafta kunlarini va "am Montag", "am Wochenende" iboralarini to‘g‘ri qo‘llash',
      'Kuchli fe‘llarning "du" va "er/sie"da unli o‘zgarishini o‘zlashtirish (e -> i/ie, a -> ä)'
    ],
    warmUp: {
      situationUz: 'Dam olish kunlari yaqinlashmoqda. Nemis do‘stingiz bilan darsdan keyin birga nima qilishni rejalashtirmoqchisiz.',
      curiosityQuestionUz: 'Nemis tilida "Shanba kuni men futbol o‘ynayman" deganda, nima uchun fe‘l 2-o‘rinda qolib, olmosh fe‘ldan keyinga o‘tadi?',
      miniDialogue: [
        { speaker: 'Felix', textDe: 'Hast du am Samstag Zeit? Gehen wir ins Kino?', textUz: 'Shanba kuni vaqting bormi? Kinoga boramizmi?' },
        { speaker: 'Sardor', textDe: 'Am Samstag fahre ich nach Potsdam. Aber am Sonntag habe ich Zeit!', textUz: 'Shanba kuni men Potsdamga boraman. Lekin yakshanba kuni bo‘shman!' }
      ],
      hintUz: 'Vaqt iborasi (Am Samstag) gap boshiga chiqsa, fe‘l qat‘iy ravishda 2-o‘rinda qoladi: Am Samstag fahre ich...'
    },
    contextDialogue: {
      titleDe: 'Was machst du in deiner Freizeit?',
      titleUz: 'Bo‘sh vaqtingda nima qilasan?',
      situationUz: 'Universitet oshxonasida ikki talaba dam olish kunlari rejalari haqida suhbatlashmoqda.',
      lines: [
        { speaker: 'Nora', textDe: 'Sardor, was machst du am Wochenende gern?', textUz: 'Sardor, dam olish kunlari nima qilishni yoqtirasan?' },
        { speaker: 'Sardor', textDe: 'Ich spiele sehr gern Fußball und treffe meine Freunde. Und du?', textUz: 'Men futbol o‘ynashni juda yoqtiraman va do‘stlarim bilan uchrashaman. Sendachi?' },
        { speaker: 'Nora', textDe: 'Ich lese gern Romane und fahre oft Fahrrad.', textUz: 'Men romanlar o‘qishni yaxshi ko‘raman va ko‘pincha velosiped haydayman.' },
        { speaker: 'Sardor', textDe: 'Liest du auf Deutsch oder auf Englisch?', textUz: 'Nemischa o‘qiysanmi yoki inglizcha?' },
        { speaker: 'Nora', textDe: 'Meistens auf Deutsch. Liest du auch gern?', textUz: 'Ko‘pincha nemischa. Sen ham o‘qishni yoqtirasanmi?' },
        { speaker: 'Sardor', textDe: 'Ja, aber am liebsten höre ich Musik oder koche.', textUz: 'Ha, lekin eng yoqtirganim musiqa tinglash yoki ovqat pishirish.' }
      ],
      usefulPhrases: [
        { german: 'Was machst du am Wochenende?', uzbek: 'Dam olish kunlari nima qilasan?' },
        { german: 'Ich spiele / lese / koche gern.', uzbek: 'Men mamnuniyat bilan ... o‘ynayman / o‘qiyman / pishiraman.' },
        { german: 'Hast du am ... Zeit?', uzbek: '... kuni vaqting bormi?' },
        { german: 'am Montag / am Dienstag / am Wochenende', uzbek: 'dushanbada / seshanbada / dam olish kunlarida' }
      ],
      culturalNoteUz: 'Germaniyada dam olish kunlari (Wochenende — shanba va yakshanba) sport, tabiat qo‘ynida sayr va oila davrasi uchun ajratiladi.'
    },
    vocabulary: [
      {
        id: 'voc-m3-1',
        lessonId: 'les-7',
        levelCode: 'a1-1',
        german: 'die Freizeit',
        article: 'die',
        plural: null,
        uzbek: 'bo‘sh vaqt',
        exampleDe: 'In meiner Freizeit lerne ich Deutsch.',
        exampleUz: 'Bo‘sh vaqtimda nemis tilini o‘rganaman.',
        wordType: 'noun'
      },
      {
        id: 'voc-m3-2',
        lessonId: 'les-7',
        levelCode: 'a1-1',
        german: 'das Hobby',
        article: 'das',
        plural: 'die Hobbys',
        uzbek: 'xobbi, sevimli mashg‘ulot',
        exampleDe: 'Mein Hobby ist Fotografieren.',
        exampleUz: 'Mening xobbiyim suratga olish.',
        wordType: 'noun'
      },
      {
        id: 'voc-m3-3',
        lessonId: 'les-7',
        levelCode: 'a1-1',
        german: 'der Montag',
        article: 'der',
        plural: 'die Montage',
        uzbek: 'dushanba',
        exampleDe: 'Am Montag beginnt der Kurs.',
        exampleUz: 'Dushanba kuni kurs boshlanadi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m3-4',
        lessonId: 'les-7',
        levelCode: 'a1-1',
        german: 'das Wochenende',
        article: 'das',
        plural: 'die Wochenenden',
        uzbek: 'hafta oxiri, dam olish kunlari',
        exampleDe: 'Schönes Wochenende!',
        exampleUz: 'Dam olish kunlaringiz maroqli o‘tsin!',
        wordType: 'noun'
      },
      {
        id: 'voc-m3-5',
        lessonId: 'les-7',
        levelCode: 'a1-1',
        german: 'lesen',
        article: null,
        plural: null,
        uzbek: 'o‘qimoq (kitob/gazeta)',
        exampleDe: 'Er liest gern Zeitungen.',
        exampleUz: 'U gazeta o‘qishni yoqtiradi.',
        wordType: 'verb'
      },
      {
        id: 'voc-m3-6',
        lessonId: 'les-7',
        levelCode: 'a1-1',
        german: 'fahren',
        article: null,
        plural: null,
        uzbek: 'haydamoq, transportda bormoq',
        exampleDe: 'Fährst du mit dem Fahrrad?',
        exampleUz: 'Velosipedda borasanmi?',
        wordType: 'verb'
      },
      {
        id: 'voc-m3-7',
        lessonId: 'les-7',
        levelCode: 'a1-1',
        german: 'treffen',
        article: null,
        plural: null,
        uzbek: 'uchrashmoq',
        exampleDe: 'Am Abend treffe ich Freunde.',
        exampleUz: 'Kechqurun do‘stlar bilan uchrashaman.',
        wordType: 'verb'
      },
      {
        id: 'voc-m3-8',
        lessonId: 'les-7',
        levelCode: 'a1-1',
        german: 'spielen',
        article: null,
        plural: null,
        uzbek: 'o‘ynamoq',
        exampleDe: 'Wir spielen gern Fußball.',
        exampleUz: 'Biz futbol o‘ynashni yoqtiramiz.',
        wordType: 'verb'
      },
      {
        id: 'voc-m3-9',
        lessonId: 'les-7',
        levelCode: 'a1-1',
        german: 'schwimmen',
        article: null,
        plural: null,
        uzbek: 'cho‘milmoq, suzmoq',
        exampleDe: 'Im Sommer schwimme ich oft.',
        exampleUz: 'Yozda tez-tez suzaman.',
        wordType: 'verb'
      },
      {
        id: 'voc-m3-10',
        lessonId: 'les-7',
        levelCode: 'a1-1',
        german: 'gern',
        article: null,
        plural: null,
        uzbek: 'jon deb, xush ko‘rib',
        exampleDe: 'Ich trinke gern Kaffee.',
        exampleUz: 'Men qahvani yaxshi ko‘rib ichaman.',
        wordType: 'adverb'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: '"lesen", "fahren", "treffen" fe‘llarining "ich", "du", "er" shakllariga qarang. Nima o‘zgaryapti?',
      discoveryExamples: [
        { german: 'ich lese -> du liest -> er liest', highlight: 'e -> ie', uzbek: 'unli e dan ie ga aylandi' },
        { german: 'ich fahre -> du fährst -> er fährt', highlight: 'a -> ä', uzbek: 'a harfi ä ga aylandi' },
        { german: 'ich treffe -> du triffst -> er trifft', highlight: 'e -> i', uzbek: 'e harfi i ga aylandi' }
      ],
      patternExplanationUz: 'Kuchli (noto‘g‘ri) fe‘llarda faqat "du" va "er/sie/es" shaxslarida o‘zakdagi unli o‘zgaradi. "ich", "wir", "ihr", "sie/Sie" da esa o‘zgarmaydi!',
      ruleFormulaUz: 'Vokalwechsel faqat du va er/sie/es da: e -> i/ie, a -> ä'
    },
    grammar: [
      {
        id: 'gra-m3-1',
        lessonId: 'les-7',
        levelCode: 'a1-1',
        titleDe: 'Verben mit Vokalwechsel & Wochentage',
        titleUz: 'O‘zak unlisi o‘zgaruvchi fe‘llar va hafta kunlari',
        summaryUz: 'lesen, fahren, sprechen, treffen kabi fe‘llar du va er/sie/es da o‘zak unlisini o‘zgartiradi. Hafta kunlari bilan "am" predlogi ishlatiladi.',
        explanationUz: `**1. O‘zak unlisining o‘zgarishi (Vokalwechsel):**
Kuchli fe‘llarning hozirgi zamonda tuslanishida **du** va **er/sie/es** shaxsida unli almashadi:
- **e -> ie:** *lesen* (ich lese, du **liest**, er **liest**)
- **e -> i:** *sprechen* (ich spreche, du **sprichst**, er **spricht**)
- **e -> i:** *treffen* (ich treffe, du **triffst**, er **trifft**)
- **a -> ä:** *fahren* (ich fahre, du **fährst**, er **fährt**)
- **a -> ä:** *schlafen* (ich schlafe, du **schläfst**, er **schläft**)

**2. Wochentage (Hafta kunlari):**
Barcha hafta kunlari erkak jinsida (**der**) va ular bilan **am** (an + dem) predlogi ishlatiladi:
- der Montag -> **am Montag** (dushanba kuni)
- der Dienstag -> **am Dienstag** (seshanba kuni)
- der Mittwoch -> **am Mittwoch** (chorshanba kuni)
- der Donnerstag -> **am Donnerstag** (payshanba kuni)
- der Freitag -> **am Freitag** (juma kuni)
- der Samstag / Sonnabend -> **am Samstag** (shanba kuni)
- der Sonntag -> **am Sonntag** (yakshanba kuni)
- das Wochenende -> **am Wochenende** (dam olish kunlari)

**3. Gapdagi so‘z tartibi (V2 qoidasi):**
Agar gap vaqt iborasi bilan boshlansa, fe‘l 2-o‘rinda qoladi:
- *Am Sonntag (1) **fahre** (2) ich (3) nach Berlin.*`,
        wordOrderRuleUz: 'Vaqt iborasi gap boshiga kelsa, fe‘l 2-o‘rinda turadi: "Am Sonntag (1) treffe (2) ich (3) Freunde."',
        tables: [
          {
            title: 'Vokalwechsel bilan tuslanuvchi fe‘llar jadvali',
            headers: ['Shaxs', 'lesen (e -> ie)', 'fahren (a -> ä)', 'treffen (e -> i)'],
            rows: [
              ['ich', 'lese', 'fahre', 'treffe'],
              ['du', 'liest', 'fährst', 'triffst'],
              ['er / sie / es', 'liest', 'fährt', 'trifft'],
              ['wir', 'lesen', 'fahren', 'treffen'],
              ['ihr', 'lest', 'fahrt', 'trefft'],
              ['sie / Sie', 'lesen', 'fahren', 'treffen']
            ]
          }
        ],
        examples: [
          { german: 'Er liest jeden Abend ein Buch.', uzbek: 'U har oqshom kitob o‘qiydi.', highlight: 'liest' },
          { german: 'Fährst du am Freitag nach Hause?', uzbek: 'Juma kuni uyga borasanmi?', highlight: 'Fährst' },
          { german: 'Am Wochenende schlafe ich lange.', uzbek: 'Dam olish kunlari uzoq uxlayman.', highlight: 'schlafe' }
        ],
        commonMistakes: [
          {
            incorrect: 'Du fahrst sehr schnell.',
            correct: 'Du fährst sehr schnell.',
            explanationUz: '"fahren" fe‘li "du" da albatta Umlaut (ä) oladi: du fährst.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Was machst du am Wochenende?',
      titleUz: 'Dam olish kunlari nima qilasan?',
      situationUz: 'Do‘stlar shanba va yakshanba kunlari nima bilan shug‘ullanishlarini rejalashtirmoqda.',
      audioTranscriptDe: 'Stefan: Hallo Lisa! Was machst du am Samstag?\nLisa: Am Samstagmorgen schlafe ich lange und am Nachmittag treffe ich meine Freundin Maria.\nStefan: Und was macht ihr zusammen?\nLisa: Wir fahren Fahrrad im Park und am Abend gehen wir ins Kino. Kommst du mit?\nStefan: Ja gerne, super Idee!',
      translationUz: 'Stefan: Salom Liza! Shanba kuni nima qilasan?\nLiza: Shanba kuni ertalab uzoq uxlayman, tushdan keyin esa dugonam Mariya bilan uchrashaman.\nStefan: Birga nima qilasizlar?\nLiza: Parkda velosiped haydaymiz va kechqurun kinoga boramiz. Sen ham borasanmi?\nStefan: Ha jon deb, ajoyib g‘oya!',
      stage1Global: {
        instructionUz: '1-Bosqich: Suhbatning bosh maqsadini tushuning.',
        questionUz: 'Lisa shanba kuni kechqurun qayerga bormoqchi?',
        options: ['Maktabga', 'Kinoga (ins Kino)', 'Bozorga', 'Ishga'],
        correctIndex: 1,
        explanationUz: 'Lisa "am Abend gehen wir ins Kino" dedi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Tafsilotlarni aniqlang.',
        questions: [
          {
            id: 'l7-q1',
            questionUz: 'Lisa tushdan keyin parkda nima qiladi?',
            options: ['Kitob o‘qiydi', 'Velosiped haydaydi (fahren Fahrrad)', 'Suzadi', 'Futbol o‘ynaydi'],
            correctIndex: 1,
            explanationUz: 'U "Wir fahren Fahrrad im Park" deb aytdi.'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Stefan', textDe: 'Was machst du am Samstag?', textUz: 'Shanba kuni nima qilasan?' },
          { speaker: 'Lisa', textDe: 'Wir fahren Fahrrad im Park.', textUz: 'Biz parkda velosiped haydaymiz.' }
        ],
        keyVocabulary: [
          { german: 'das Kino', uzbek: 'kinoteatr' },
          { german: 'zusammen', uzbek: 'birgalikda' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-m3-1',
        lessonId: 'les-7',
        titleDe: 'Mein perfektes Wochenende',
        titleUz: 'Mening eng ajoyib dam olish kunim',
        textDe: 'Am Wochenende habe ich endlich frei. Am Samstag stehe ich um neun Uhr auf. Ich frühstücke gemütlich mit meiner Familie. Am Nachmittag spiele ich Tennis oder treffe meine Freunde im Café. Am Sonntag lese ich gern mein Lieblingsbuch oder höre klassische Musik. Am Sonntagabend koche ich für alle ein leckeres Abendessen.',
        translationUz: 'Dam olish kunlari nihoyat bo‘sh bo‘laman. Shanba kuni soat to‘qqizda uyg‘onaman. Oilam bilan shoshilmasdan nonushta qilaman. Tushdan keyin tennis o‘ynayman yoki qahvaxonada do‘stlarim bilan uchrashaman. Yakshanba kuni sevimli kitobimni o‘qiyman yoki mumtoz musiqa tinglayman. Yakshanba oqshomida barchaga mazali kechki ovqat pishiraman.',
        vocabularyHints: [
          { german: 'endlich frei', uzbek: 'nihoyat bo‘sh / ozod' },
          { german: 'gemütlich', uzbek: 'rohatlanib, shinamgina' },
          { german: 'lecker', uzbek: 'mazali, shirin' }
        ],
        questions: [
          {
            id: 'rq-m3-1',
            questionUz: 'Muallif yakshanba kuni kechqurun nima qiladi?',
            options: ['Kechki ovqat pishiradi (kocht ein leckeres Abendessen)', 'Tennis o‘ynaydi', 'Kinoga boradi', 'Dars qiladi'],
            correctIndex: 0,
            explanationUz: 'Matnda "Am Sonntagabend koche ich für alle ein leckeres Abendessen" deyilgan.'
          }
        ]
      }
    ],
    writingScaffold: {
      taskTitleUz: 'Hafta kunlaridagi rejalaringizni yozish',
      promptUz: 'Dam olish kunlari nima qilishingiz haqida 3-4 jumla yozing (am Samstag / am Sonntag iboralarini ishlating).',
      taskInstructionsUz: '1. Shanba kuni nima qilishingizni yozing\n2. Qanday xobbi bilan shug‘ullanishingizni bildiring\n3. Yakshanba kungi rejangizni ayting',
      controlledScaffolding: {
        stepTitleUz: 'Jumla shablonlari:',
        sentenceStarters: [
          'Am Samstag spiele / treffe ich...',
          'In meiner Freizeit lese ich gern...',
          'Am Sonntag fahre ich...'
        ]
      },
      usefulVocabulary: [
        { german: 'am Samstag / am Sonntag', uzbek: 'shanbada / yakshanbada' },
        { german: 'Fußball spielen', uzbek: 'futbol o‘ynamoq' },
        { german: 'Freunde treffen', uzbek: 'do‘stlar bilan ko‘rishmoq' }
      ],
      modelAnswerDe: 'Am Samstag schlafe ich lange und treffe meine Freunde. In meiner Freizeit spiele ich sehr gern Fußball. Am Sonntag lese ich ein deutsches Buch.',
      modelAnswerUz: 'Shanba kuni uzoq uxlayman va do‘stlarim bilan uchrashaman. Bo‘sh vaqtimda futbol o‘ynashni juda yoqtiraman. Yakshanba kuni nemischa kitob o‘qiyman.'
    },
    shadowing: [
      {
        id: 'sha-m3-1',
        lessonId: 'les-7',
        levelCode: 'a1-1',
        sentenceDe: 'Am Samstag fahre ich mit dem Fahrrad in den Park.',
        translationUz: 'Shanba kuni velosipedda parkka boraman.',
        phoneticHint: '[Am Zam-stak fa:-re iç mit dem Fa:r-ra:t in den Park.]',
        orderIndex: 1
      },
      {
        id: 'sha-m3-2',
        lessonId: 'les-7',
        levelCode: 'a1-1',
        sentenceDe: 'Liest du gern Bücher oder triffst du Freunde?',
        translationUz: 'Kitob o‘qishni yoqtirasanmi yoki do‘stlar bilan uchrashishnimi?',
        phoneticHint: '[Li:st du gern By:-çer o-der triffst du Froynde?]',
        orderIndex: 2
      }
    ],
    practice: [
      {
        id: 'ex-m3-1',
        lessonId: 'les-7',
        type: 'multiple-choice',
        questionUz: '"fahren" fe‘lining "du" shaxsiga mos shaklini tanlang:',
        options: ['du fahrst', 'du fährst', 'du fahrt', 'du fahren'],
        correctAnswer: 'du fährst',
        explanationUz: '"fahren" fe‘li "du" da o‘zak unlisini ä ga almashtiradi: "du fährst".',
        mistakeTipUz: '❌ "fahren" fe‘li "du" da Umlaut oladi: du fährst.'
      },
      {
        id: 'ex-m3-2',
        lessonId: 'les-7',
        type: 'word-order',
        questionUz: 'Gap bo‘laklarini to‘g‘ri tartibda joylashtiring (Fe‘l 2-o‘rinda bo‘lishi shart!):',
        scrambledWords: ['Am', 'ich', 'Sonntag', 'Freunde', 'treffe'],
        correctAnswer: 'Am Sonntag treffe ich Freunde',
        explanationUz: 'Am Sonntag (1) + treffe (2) + ich (3) + Freunde (4).',
        mistakeTipUz: '❌ Vaqt iborasidan keyin darhol tuslangan fe‘l keladi.'
      }
    ],
    listening: [],
    writing: []
  },

  // ==========================================
  // LEKTION 8: Am Wochenende koche ich (Lebensmittel & Mahlzeiten)
  // ==========================================
  {
    id: 'les-8',
    moduleId: 'mod-3',
    levelCode: 'a1-1',
    titleDe: 'Lektion 8: Am Wochenende koche ich',
    titleUz: '8-Dars: Dam olish kuni ovqat pishiraman (Oziq-ovqat va taomlar)',
    descriptionUz: 'Oziq-ovqat mahsulotlari (Brot, Fleisch, Käse, Milch, Obst, Gemüse), taomlar, pishirish, sevimli yeguliklar va "gern / nicht gern" iboralari.',
    orderIndex: 8,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Asosiy oziq-ovqat mahsulotlarini artikli bilan aytish (das Brot, das Fleisch, der Käse, die Milch)',
      'Sevimli taomlar va ichimliklarni ifodalash (Ich esse gern... / Ich trinke gern...)',
      'Mahlzeiten (Frühstück, Mittagessen, Abendessen) haqida suhbatlasha olish'
    ],
    warmUp: {
      situationUz: 'Kechki ovqatga do‘stlaringizni taklif qilmoqchisiz. Nima pishirishni va kim nima yeyishni yoqtirishini so‘ramoqdasiz.',
      curiosityQuestionUz: 'Nemis tilida nima sababdan "Men go‘sht yemayman" deganda "Ich esse nicht Fleisch" emas, "Ich esse kein Fleisch" deyiladi?',
      miniDialogue: [
        { speaker: 'Lukas', textDe: 'Was isst du gern zu Mittag?', textUz: 'Tushlikka nima yeyishni yoqtirasan?' },
        { speaker: 'Sardor', textDe: 'Ich esse sehr gern Plov und frischen Salat.', textUz: 'Men palov va yangi salatni juda yaxshi ko‘rib yeyman.' }
      ],
      hintUz: 'Oziq-ovqat nomlari oldidan noaniq miqdorda inkor uchun "kein/keine" ishlatiladi.'
    },
    contextDialogue: {
      titleDe: 'Was kochen wir heute Abend?',
      titleUz: 'Bugun kechqurun nima pishiramiz?',
      situationUz: 'Talabalar yotoqxonasida umumiy kechki ovqat tayyorlashmoqda.',
      lines: [
        { speaker: 'Hanna', textDe: 'Julian, hast du Hunger? Was kochen wir heute Abend?', textUz: 'Yulian, qorning ochdimi? Bugun kechqurun nima pishiramiz?' },
        { speaker: 'Julian', textDe: 'Ja, ich habe großen Hunger! Machen wir Pasta mit Tomatensauce?', textUz: 'Ha, qornim juda och! Tomat sousli pasta tayyorlaymizmi?' },
        { speaker: 'Hanna', textDe: 'Gute Idee! Haben wir alle Zutaten im Kühlschrank?', textUz: 'Yaxshi g‘oya! Sovutgichda hamma masalliqlar bormi?' },
        { speaker: 'Julian', textDe: 'Wir haben Nudeln, Tomaten und Zwiebeln. Aber wir haben keinen Käse und kein Fleisch.', textUz: 'Bizda makaron, pomidor va piyoz bor. Lekin pishloq va go‘sht yo‘q.' },
        { speaker: 'Hanna', textDe: 'Kein Problem, ich esse sowieso kein Fleisch, ich bin Vegetarierin.', textUz: 'Muammo yo‘q, men baribir go‘sht yemayman, men vegetarianman.' },
        { speaker: 'Julian', textDe: 'Super, dann brauchen wir nur noch etwas Käse aus dem Supermarkt.', textUz: 'Ajoyib, unda supermarketdan faqat ozgina pishloq olsak bo‘ldi.' }
      ],
      usefulPhrases: [
        { german: 'Ich habe Hunger / Ich habe Durst.', uzbek: 'Qornim ochdi / Chanqadim.' },
        { german: 'Was isst du gern?', uzbek: 'Nimani yaxshi ko‘rib yeysan?' },
        { german: 'Ich esse gern... / Ich trinke gern...', uzbek: 'Men ...ni yoqtirib yeyman / ichaman.' },
        { german: 'Das schmeckt sehr lecker!', uzbek: 'Bu juda mazali tatir ekan!' }
      ],
      culturalNoteUz: 'Germaniyada non (das Brot) madaniyati juda boy — 3000 dan ortiq non turlari mavjud va kechki ovqat ko‘pincha "Abendbrot" (sovuq non, pishloq, kolbasa) deb ataladi.'
    },
    vocabulary: [
      {
        id: 'voc-m3-11',
        lessonId: 'les-8',
        levelCode: 'a1-1',
        german: 'das Lebensmittel',
        article: 'das',
        plural: 'die Lebensmittel',
        uzbek: 'oziq-ovqat mahsuloti',
        exampleDe: 'Wir kaufen frische Lebensmittel.',
        exampleUz: 'Biz yangi oziq-ovqatlar xarid qilamiz.',
        wordType: 'noun'
      },
      {
        id: 'voc-m3-12',
        lessonId: 'les-8',
        levelCode: 'a1-1',
        german: 'das Brot',
        article: 'das',
        plural: 'die Brote',
        uzbek: 'non',
        exampleDe: 'Deutsches Brot ist weltberühmt.',
        exampleUz: 'Nemis noni butun dunyoga mashhur.',
        wordType: 'noun'
      },
      {
        id: 'voc-m3-13',
        lessonId: 'les-8',
        levelCode: 'a1-1',
        german: 'das Fleisch',
        article: 'das',
        plural: null,
        uzbek: 'go‘sht',
        exampleDe: 'Ich esse kein Rindfleisch.',
        exampleUz: 'Men mol go‘shti yemayman.',
        wordType: 'noun'
      },
      {
        id: 'voc-m3-14',
        lessonId: 'les-8',
        levelCode: 'a1-1',
        german: 'der Käse',
        article: 'der',
        plural: null,
        uzbek: 'pishloq, sir',
        exampleDe: 'Der Käse schmeckt gut.',
        exampleUz: 'Pishloq mazali.',
        wordType: 'noun'
      },
      {
        id: 'voc-m3-15',
        lessonId: 'les-8',
        levelCode: 'a1-1',
        german: 'die Milch',
        article: 'die',
        plural: null,
        uzbek: 'sut',
        exampleDe: 'Kaffee mit Milch, bitte.',
        exampleUz: 'Sutli qahva, iltimos.',
        wordType: 'noun'
      },
      {
        id: 'voc-m3-16',
        lessonId: 'les-8',
        levelCode: 'a1-1',
        german: 'das Obst',
        article: 'das',
        plural: null,
        uzbek: 'mevalar',
        exampleDe: 'Obst ist sehr gesund.',
        exampleUz: 'Mevalar juda foydali.',
        wordType: 'noun'
      },
      {
        id: 'voc-m3-17',
        lessonId: 'les-8',
        levelCode: 'a1-1',
        german: 'das Gemüse',
        article: 'das',
        plural: null,
        uzbek: 'sabzavotlar',
        exampleDe: 'Wir essen viel frisches Gemüse.',
        exampleUz: 'Biz ko‘p yangi sabzavotlar yeymiz.',
        wordType: 'noun'
      },
      {
        id: 'voc-m3-18',
        lessonId: 'les-8',
        levelCode: 'a1-1',
        german: 'das Frühstück',
        article: 'das',
        plural: null,
        uzbek: 'nonushta',
        exampleDe: 'Zum Frühstück esse ich Müsli.',
        exampleUz: 'Nonushtaga myusli yeyman.',
        wordType: 'noun'
      },
      {
        id: 'voc-m3-19',
        lessonId: 'les-8',
        levelCode: 'a1-1',
        german: 'kochen',
        article: null,
        plural: null,
        uzbek: 'ovqat pishirmoq, qaynatmoq',
        exampleDe: 'Am Abend koche ich gern.',
        exampleUz: 'Kechqurun jon deb ovqat pishiraman.',
        wordType: 'verb'
      },
      {
        id: 'voc-m3-20',
        lessonId: 'les-8',
        levelCode: 'a1-1',
        german: 'lecker',
        article: null,
        plural: null,
        uzbek: 'mazali, shirin',
        exampleDe: 'Die Suppe ist sehr lecker.',
        exampleUz: 'Sho‘rva juda mazali.',
        wordType: 'adjective'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: '"essen" (yemoq) fe‘lining "du" va "er" shakllariga qarang:',
      discoveryExamples: [
        { german: 'Ich esse einen Apfel.', highlight: 'esse', uzbek: 'Men olma yeyapman.' },
        { german: 'Du isst Brot.', highlight: 'isst', uzbek: 'Sen non yeyapsan (e -> i bo‘ldi).' },
        { german: 'Er isst gern Fleisch.', highlight: 'isst', uzbek: 'U go‘sht yeyishni yoqtiradi (du va er bir xil!).' }
      ],
      patternExplanationUz: '"essen" fe‘li ham kuchli fe‘l bo‘lib, "du" va "er/sie/es" shaxslarida e -> i ga aylanadi: du isst, er isst.',
      ruleFormulaUz: 'essen: ich esse, du isst, er/sie isst, wir essen, ihr esst, sie essen'
    },
    grammar: [
      {
        id: 'gra-m3-2',
        lessonId: 'les-8',
        levelCode: 'a1-1',
        titleDe: 'Das Verb "essen" & Akkusativ bei Lebensmitteln',
        titleUz: '"essen" fe‘li tuslanishi va taomlarda Akkusativ',
        summaryUz: '"essen" va "trinken" fe‘llaridan keyin oziq-ovqatlar Akkusativda keladi (einen Apfel, ein Brot, eine Banane).',
        explanationUz: `**1. "essen" (yemoq) fe‘li tuslanishi:**
- ich **esse**
- du **isst** (e -> i)
- er / sie / es **isst** (e -> i)
- wir **essen**
- ihr **esst**
- sie / Sie **essen**

**2. "trinken" (ichmoq) fe‘li tuslanishi:**
Qoidali fe‘l: *ich trinke, du trinkst, er trinkt, wir trinken...*

**3. Oziq-ovqatlar bilan Akkusativ:**
- *Ich esse **einen** Apfel.* (der Apfel -> einen Apfel)
- *Ich trinke **einen** Kaffee.* (der Kaffee -> einen Kaffee)
- *Ich esse **ein** Brot.* (das Brot -> ein Brot)
- *Ich trinke **eine** Milch.* (die Milch -> eine Milch)

Inkor shakli:
- *Ich esse **keinen** Fisch.* (der Fisch -> keinen)
- *Ich esse **kein** Fleisch.* (das Fleisch -> kein)
- *Ich trinke **keine** Cola.* (die Cola -> keine)`,
        wordOrderRuleUz: '"gern" so‘zi fe‘ldan keyin keladi: "Ich trinke gern Tee" (Men choyni yaxshi ko‘rib ichaman).',
        tables: [
          {
            title: 'essen va trinken fe‘llari',
            headers: ['Shaxs', 'essen (yemoq)', 'trinken (ichmoq)', 'Namuna'],
            rows: [
              ['ich', 'esse', 'trinke', 'Ich esse einen Salat.'],
              ['du', 'isst', 'trinkst', 'Was isst du gern?'],
              ['er/sie', 'isst', 'trinkt', 'Er trinkt gern Wasser.'],
              ['wir', 'essen', 'trinken', 'Wir essen zusammen.'],
              ['ihr', 'esst', 'trinkt', 'Was esst ihr?'],
              ['sie/Sie', 'essen', 'trinken', 'Trinken Sie Kaffee?']
            ]
          }
        ],
        examples: [
          { german: 'Ich esse gern Obst und Gemüse.', uzbek: 'Men meva va sabzavotlarni yoqtirib yeyman.', highlight: 'esse gern' },
          { german: 'Er isst keinen Fisch.', uzbek: 'U baliq yemaydi.', highlight: 'keinen Fisch' }
        ],
        commonMistakes: [
          {
            incorrect: 'Du esst ein Apfel.',
            correct: 'Du isst einen Apfel.',
            explanationUz: '"du" uchun "isst" bo‘ladi va "Apfel" muzskoy bo‘lgani uchun Akkusativda "einen Apfel" bo‘ladi.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Was isst du zum Frühstück?',
      titleUz: 'Nonushtaga nima yeysan?',
      situationUz: 'Talabalar nonushta odatlari haqida o‘zaro fikr almashmoqda.',
      audioTranscriptDe: 'Marco: Guten Morgen Sarah! Was isst du normalerweise zum Frühstück?\nSarah: Ich trinke eine Tasse Kaffee mit Milch und esse ein Brötchen mit Butter und Marmelade. Und du?\nMarco: Ich esse lieber Müsli mit Joghurt und Früchten. Und ich trinke immer Orangensaft.\nSarah: Das ist sehr gesund!',
      translationUz: 'Marko: Xayrli tong, Sara! Odatda nonushtaga nima yeysan?\nSara: Men sutli bir finjon qahva ichaman va sariyog‘ hamda murabboli bulochka yeyman. Sendachi?\nMarko: Men yaxshisi yogurt va mevali myusli yeyman. Va har doim apelsin sharbati ichaman.\nSara: Bu juda foydali!',
      stage1Global: {
        instructionUz: '1-Bosqich: Suhbat qaysi taom haqida ekanini aniqlang.',
        questionUz: 'Suhbat qaysi vaqtdagi ovqat haqida ketmoqda?',
        options: ['Mittagessen (tushlik)', 'Frühstück (nonushta)', 'Abendessen (kechki ovqat)', 'Bozorlik'],
        correctIndex: 1,
        explanationUz: 'Ular "zum Frühstück" (nonushtaga nima yeysan) deb so‘rashdi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Tafsilotlarni aniqlang.',
        questions: [
          {
            id: 'l8-q1',
            questionUz: 'Marco nonushtaga nima ichadi?',
            options: ['Kaffee (qahva)', 'Tee (choy)', 'Orangensaft (apelsin sharbati)', 'Kola'],
            correctIndex: 2,
            explanationUz: 'Marko "ich trinke immer Orangensaft" dedi.'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Marco', textDe: 'Was isst du zum Frühstück?', textUz: 'Nonushtaga nima yeysan?' },
          { speaker: 'Sarah', textDe: 'Ein Brötchen mit Butter und Marmelade.', textUz: 'Sariyog‘ va murabboli bulochka.' }
        ],
        keyVocabulary: [
          { german: 'das Brötchen', uzbek: 'bulochka' },
          { german: 'die Marmelade', uzbek: 'murabbo, jem' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-m3-2',
        lessonId: 'les-8',
        titleDe: 'Essen in Deutschland und Usbekistan',
        titleUz: 'Germaniya va O‘zbekistonda taomlar',
        textDe: 'In Deutschland essen viele Menschen morgens Brot oder Brötchen mit Käse, Schinken oder Marmelade. Mittags gibt es oft ein warmes Gericht, zum Beispiel Kartoffeln mit Fleisch und Gemüse. Abends essen viele Familien kalt: Brot mit Aufschnitt. In Usbekistan kochen wir abends oft warm. Unser Nationalgericht ist Plov. Es ist sehr lecker und beliebt.',
        translationUz: 'Germaniyada ko‘pchilik insonlar ertalab pishloq, vetchina yoki murabbo bilan non yo bulochka yeyishadi. Tushlikda ko‘pincha issiq taom, masalan, go‘sht va sabzavotli kartoshka bo‘ladi. Kechqurun ko‘plab oilalar yengil sovuq ovqat yeyishadi: non va pishloq-kolbasa. O‘zbekistonda esa kechqurun ko‘pincha issiq ovqat pishiramiz. Milliy taomimiz palovdir. U juda mazali va mashhur.',
        vocabularyHints: [
          { german: 'warmes Gericht', uzbek: 'issiq taom' },
          { german: 'die Kartoffel', uzbek: 'kartoshka' },
          { german: 'das Nationalgericht', uzbek: 'milliy taom' }
        ],
        questions: [
          {
            id: 'rq-m3-2',
            questionUz: 'Nemis oilalari kechki ovqatda (Abendbrot) ko‘pincha nima yeyishadi?',
            options: ['Issiq sho‘rva', 'Sovuq taom: non, pishloq va vetchina', 'Faqat mevalar', 'Palov'],
            correctIndex: 1,
            explanationUz: 'Matnda "Abends essen viele Familien kalt: Brot mit Aufschnitt" deb ta‘kidlangan.'
          }
        ]
      }
    ],
    writingScaffold: {
      taskTitleUz: 'O‘z ovqatlanish odatlaringiz haqida yozish',
      promptUz: 'Nonushta va tushlikda nimalar yeyishingiz va ichishingiz haqida 3-4 jumla yozing.',
      taskInstructionsUz: '1. Nonushtaga nima yeyishingizni yozing (Zum Frühstück esse ich...)\n2. Nima ichishingizni bildiring (Ich trinke gern...)\n3. Qaysi taomni yoqtirmasligingizni inkor bilan yozing (Ich esse kein...)',
      controlledScaffolding: {
        stepTitleUz: 'Jumla namunalari:',
        sentenceStarters: [
          'Zum Frühstück esse ich...',
          'Ich trinke am liebsten...',
          'Zu Mittag esse ich gern...',
          'Aber ich esse kein / keine...'
        ]
      },
      usefulVocabulary: [
        { german: 'das Frühstück', uzbek: 'nonushta' },
        { german: 'das Mittagessen', uzbek: 'tushlik' },
        { german: 'lecker', uzbek: 'mazali' }
      ],
      modelAnswerDe: 'Zum Frühstück esse ich Brot mit Käse und ein Ei. Ich trinke sehr gern schwarzen Tee mit Zitrone. Zu Mittag esse ich Reis mit Gemüse. Ich esse kein Schweinefleisch.',
      modelAnswerUz: 'Nonushtaga pishloqli non va tuxum yeyman. Limonli qora choyni juda yaxshi ko‘rib ichaman. Tushlikka sabzavotli guruch yeyman. Men cho‘chqa go‘shti yemayman.'
    },
    shadowing: [
      {
        id: 'sha-m3-3',
        lessonId: 'les-8',
        levelCode: 'a1-1',
        sentenceDe: 'Was isst du gern zum Frühstück? - Ich esse Brot mit Käse.',
        translationUz: 'Nonushtaga nima yeyishni yoqtirasan? - Pishloqli non yeyman.',
        phoneticHint: '[Vas isst du gern tsum Fry:-shtyk? - Iç es-se Brot mit Ke:-ze.]',
        orderIndex: 1
      },
      {
        id: 'sha-m3-4',
        lessonId: 'les-8',
        levelCode: 'a1-1',
        sentenceDe: 'Das Essen schmeckt wirklich sehr lecker!',
        translationUz: 'Taom haqiqatan ham juda mazali ekan!',
        phoneticHint: '[Das Es-sen shmekt virk-liç ze:r lek-ker!]',
        orderIndex: 2
      }
    ],
    practice: [
      {
        id: 'ex-m3-3',
        lessonId: 'les-8',
        type: 'multiple-choice',
        questionUz: '"essen" fe‘lining "er" shaxsiga mos shakli qaysi?',
        options: ['er esst', 'er isst', 'er esse', 'er essen'],
        correctAnswer: 'er isst',
        explanationUz: '"essen" fe‘li "er" da "isst" bo‘ladi: "er isst gern Fleisch".',
        mistakeTipUz: '❌ "er" uchun "isst" ishlatiladi.'
      },
      {
        id: 'ex-m3-4',
        lessonId: 'les-8',
        type: 'fill-blank',
        questionUz: 'To‘g‘ri inkor artiklini qo‘ying: "Ich esse _____ Fleisch, ich bin Vegetarier."',
        blankSentence: 'Ich esse [blank] Fleisch, ich bin Vegetarier.',
        options: ['kein', 'keinen', 'keine', 'nicht'],
        correctAnswer: 'kein',
        explanationUz: '"das Fleisch" sredniy rod bo‘lgani uchun Akkusativ inkori "kein Fleisch" bo‘ladi.',
        mistakeTipUz: '❌ "das" rodidagi otlar Akkusativda "kein" oladi.'
      }
    ],
    listening: [],
    writing: []
  },

  // ==========================================
  // LEKTION 9: Was kostet der Apfel? (Einkaufen, Preise & Maße)
  // ==========================================
  {
    id: 'les-9',
    moduleId: 'mod-3',
    levelCode: 'a1-1',
    titleDe: 'Lektion 9: Was kostet der Apfel?',
    titleUz: '9-Dars: Olma necha pul turadi? (Supermarket, narxlar va o‘lchov birliklari)',
    descriptionUz: 'Bozor va supermarketda xarid, narx so‘rash (Was kostet...?), xushmuomala istak (Ich möchte...), o‘lchov birliklari (Kilo, Gramm, Liter, Packung) va valyuta (Euro, Cent).',
    orderIndex: 9,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Bozorda yoki do‘konda narx so‘rash va to‘lash (Was kostet das? / Wie viel macht das?)',
      'Xushmuomalalik bilan xarid qilish ("Ich möchte bitte...", "Ich hätte gern...")',
      'O‘lchov va og‘irlik birliklarini to‘g‘ri qo‘llash (ein Kilo Äpfel, 200 Gramm Käse, eine Flasche Milch)'
    ],
    warmUp: {
      situationUz: 'Nemis shahrida haftalik oziq-ovqat bozoriga (Wochenmarkt) bordingiz. Yangi uzilgan meva va sabzavotlar xarid qilmoqchisiz.',
      curiosityQuestionUz: 'Nemis tilida "Menga 1 kilo olma bering" deganda "I give me" deb buyruq beriladimi yoki "Ich möchte..." deb xushmuomalalik bilan so‘raladimi?',
      miniDialogue: [
        { speaker: 'Verkäufer', textDe: 'Guten Tag! Was darf es sein?', textUz: 'Xayrli kun! Nima xohlaysiz?' },
        { speaker: 'Kunde', textDe: 'Guten Tag! Ich möchte bitte ein Kilo Tomaten.', textUz: 'Xayrli kun! Menga bir kilo pomidor bering, iltimos.' }
      ],
      hintUz: 'Germaniyada xaridor do‘konda doimo "Ich möchte bitte..." (Men ...ni xohlardim) deb xushmuomala so‘raydi.'
    },
    contextDialogue: {
      titleDe: 'Auf dem Wochenmarkt',
      titleUz: 'Haftalik bozorda',
      situationUz: 'Xaridor bozordagi meva-sabzavot rastasidan xarid qilmoqda.',
      lines: [
        { speaker: 'Verkäufer', textDe: 'Hallo! Wer ist an der Reihe? Kann ich Ihnen helfen?', textUz: 'Salom! Kimning navbati? Sizga yordam bera olamanmi?' },
        { speaker: 'Frau Bauer', textDe: 'Ja, bitte. Ich hätte gern zwei Kilo Äpfel und ein Kilo Bananen.', textUz: 'Ha, iltimos. Menga ikki kilo olma va bir kilo banan bersangiz.' },
        { speaker: 'Verkäufer', textDe: 'Welche Äpfel möchten Sie? Die roten oder die grünen?', textUz: 'Qaysi olmalardan xohlaysiz? Qizillaridanmi yoki yashillaridan?' },
        { speaker: 'Frau Bauer', textDe: 'Die roten, bitte. Was kosten die Äpfel?', textUz: 'Qizillaridan, iltimos. Olmaning narxi qancha?' },
        { speaker: 'Verkäufer', textDe: 'Das Kilo kostet zwei Euro neunzig. Brauchen Sie sonst noch etwas?', textUz: 'Kilosi ikki yevro to‘qson sent turadi. Yana biror narsa kerakmi?' },
        { speaker: 'Frau Bauer', textDe: 'Ja, noch 200 Gramm Käse und eine Flasche Mineralwasser.', textUz: 'Ha, yana 200 gramm pishloq va bir shisha ma‘danli suv.' },
        { speaker: 'Verkäufer', textDe: 'Das macht zusammen acht Euro fünfzig, bitte.', textUz: 'Hammasi birga sakkiz yevro ellik sent bo‘ldi.' }
      ],
      usefulPhrases: [
        { german: 'Was kostet das? / Was kosten die Äpfel?', uzbek: 'Bu qancha turadi? / Olma necha pul?' },
        { german: 'Ich möchte bitte...', uzbek: 'Menga ... bersangiz, iltimos.' },
        { german: 'Sonst noch etwas?', uzbek: 'Yana biror narsami?' },
        { german: 'Das ist alles, danke.', uzbek: 'Hammasi shu, rahmat.' },
        { german: 'Wie viel macht das? - Das macht zusammen...', uzbek: 'Hammasi qancha bo‘ldi? - Jami ... bo‘ldi.' }
      ],
      culturalNoteUz: 'Germaniyada ko‘plab bozorlar va kichik novvoyxonalarda kichik summalar uchun naqd pul (Bargeld) afzal ko‘riladi.'
    },
    vocabulary: [
      {
        id: 'voc-m3-21',
        lessonId: 'les-9',
        levelCode: 'a1-1',
        german: 'der Apfel',
        article: 'der',
        plural: 'die Äpfel',
        uzbek: 'olma',
        exampleDe: 'Ein Apfel am Tag ist gesund.',
        exampleUz: 'Kunda bir olma sog‘liqqa foydali.',
        wordType: 'noun'
      },
      {
        id: 'voc-m3-22',
        lessonId: 'les-9',
        levelCode: 'a1-1',
        german: 'die Banane',
        article: 'die',
        plural: 'die Bananen',
        uzbek: 'banan',
        exampleDe: 'Die Bananen sind reif und süß.',
        exampleUz: 'Bananlar pishgan va shirin.',
        wordType: 'noun'
      },
      {
        id: 'voc-m3-23',
        lessonId: 'les-9',
        levelCode: 'a1-1',
        german: 'die Tomate',
        article: 'die',
        plural: 'die Tomaten',
        uzbek: 'pomidor',
        exampleDe: 'Ich brauche drei Tomaten.',
        exampleUz: 'Menga uchta pomidor kerak.',
        wordType: 'noun'
      },
      {
        id: 'voc-m3-24',
        lessonId: 'les-9',
        levelCode: 'a1-1',
        german: 'das Kilo / das Kilogramm',
        article: 'das',
        plural: 'die Kilos',
        uzbek: 'kilogramm',
        exampleDe: 'Ein Kilo Kartoffeln, bitte.',
        exampleUz: 'Bir kilo kartoshka, iltimos.',
        wordType: 'noun'
      },
      {
        id: 'voc-m3-25',
        lessonId: 'les-9',
        levelCode: 'a1-1',
        german: 'das Gramm',
        article: 'das',
        plural: null,
        uzbek: 'gramm',
        exampleDe: 'Geben Sie mir bitte 200 Gramm Butter.',
        exampleUz: 'Menga 200 gramm sariyog‘ bering, iltimos.',
        wordType: 'noun'
      },
      {
        id: 'voc-m3-26',
        lessonId: 'les-9',
        levelCode: 'a1-1',
        german: 'der Liter',
        article: 'der',
        plural: 'die Liter',
        uzbek: 'litr',
        exampleDe: 'Ein Liter Milch kostet 1,19 Euro.',
        exampleUz: 'Bir litr sut 1,19 yevro turadi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m3-27',
        lessonId: 'les-9',
        levelCode: 'a1-1',
        german: 'die Flasche',
        article: 'die',
        plural: 'die Flaschen',
        uzbek: 'shisha, butilka',
        exampleDe: 'Eine Flasche Wasser, bitte.',
        exampleUz: 'Bir shisha suv, iltimos.',
        wordType: 'noun'
      },
      {
        id: 'voc-m3-28',
        lessonId: 'les-9',
        levelCode: 'a1-1',
        german: 'die Packung',
        article: 'die',
        plural: 'die Packungen',
        uzbek: 'quti, pachka',
        exampleDe: 'Eine Packung Tee kostet zwei Euro.',
        exampleUz: 'Bir quti choy ikki yevro turadi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m3-29',
        lessonId: 'les-9',
        levelCode: 'a1-1',
        german: 'kosten',
        article: null,
        plural: null,
        uzbek: 'narxda turmoq, baholanmoq',
        exampleDe: 'Was kostet das Brot?',
        exampleUz: 'Non qancha turadi?',
        wordType: 'verb'
      },
      {
        id: 'voc-m3-30',
        lessonId: 'les-9',
        levelCode: 'a1-1',
        german: 'der Euro / der Cent',
        article: 'der',
        plural: 'die Euro / die Cents',
        uzbek: 'yevro / sent',
        exampleDe: 'Das macht 4 Euro und 50 Cent.',
        exampleUz: 'Bu 4 yevro 50 sent bo‘ladi.',
        wordType: 'noun'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'Xushmuomalalik bilan xarid qilgandagi "möchten" fe‘liga e‘tibor bering:',
      discoveryExamples: [
        { german: 'Ich möchte einen Apfel.', highlight: 'Ich möchte', uzbek: 'Men bitta olma xohlardim (istardim).' },
        { german: 'Was möchten Sie?', highlight: 'möchten Sie', uzbek: 'Siz nima xohlaysiz?' },
        { german: 'Wir möchten zwei Kilo Äpfel.', highlight: 'Wir möchten', uzbek: 'Biz 2 kilo olma xohlardik.' }
      ],
      patternExplanationUz: '"möchten" xushmuomala istak va iltimosni bildiradi: ich möchte, du möchtest, er/sie möchte, wir möchten, ihr möchtet, sie/Sie möchten.',
      ruleFormulaUz: 'Ich möchte + Akkusativ-Objekt (einen / ein / eine...)'
    },
    grammar: [
      {
        id: 'gra-m3-3',
        lessonId: 'les-9',
        levelCode: 'a1-1',
        titleDe: 'Das Verb "möchten" & Mengenangaben',
        titleUz: '"möchten" fe‘li va miqdor-o‘lchov birliklari',
        summaryUz: '"Ich möchte..." xushmuomala buyurtma va xarid uchun qo‘llaniladi. Miqdor aytganda ko‘plikda ham o‘lchov birligi ko‘pincha birlikda qoladi.',
        explanationUz: `**1. "möchten" (istamoq / xohlamoq) fe‘li tuslanishi:**
- ich **möchte**
- du **möchtest**
- er / sie / es **möchte** (ich va er/sie bir xil!)
- wir **möchten**
- ihr **möchtet**
- sie / Sie **möchten**

**2. Narx aytish va so‘rash:**
- *Was kostet der Apfel?* -> *Er kostet 1 Euro.* (birlikda: kostet)
- *Was kosten die Äpfel?* -> *Sie kosten 2,50 Euro.* (ko‘plikda: kosten)
- *2,50 € = zwei Euro fünfzig* (Cent so‘zi ko‘pincha tushirib qoldiriladi).

**3. Mengenangaben (Miqdor va o‘lchov birliklari):**
Nemis tilida o‘lchov birligidan keyin ot to‘g‘ridan-to‘g‘ri qo‘yiladi (predlogsiz):
- *ein Kilo Äpfel* (bir kilo olma)
- *zwei Kilo Kartoffeln* (ikki kilo kartoshka — Kilo birlikda qoladi!)
- *eine Flasche Wasser* (bir shisha suv)
- *zwei Flaschen Saft* (ikki shisha sharbat)
- *200 Gramm Käse* (200 gramm pishloq)
- *eine Packung Kaffee* (bir quti qahva)`,
        wordOrderRuleUz: 'Xaridda tuslangan "möchte" 2-o‘rinda turadi: "Ich (1) möchte (2) bitte zwei Äpfel (3)".',
        tables: [
          {
            title: 'Mengenangaben (O‘lchov birliklari namunalari)',
            headers: ['Birlik', 'Nemischa namuna', 'O‘zbekcha tarjimasi'],
            rows: [
              ['das Kilo', 'ein Kilo Tomaten', 'bir kilo pomidor'],
              ['das Gramm', '500 Gramm Fleisch', '500 gramm go‘sht'],
              ['der Liter', 'ein Liter Milch', 'bir litr sut'],
              ['die Flasche', 'eine Flasche Öl', 'bir shisha o‘simlik yog‘i'],
              ['die Packung', 'eine Packung Tee', 'bir quti choy'],
              ['das Stück', 'ein Stück Kuchen', 'bir bo‘lak pirog']
            ]
          }
        ],
        examples: [
          { german: 'Ich möchte bitte zwei Kilo Bananen.', uzbek: 'Menga 2 kilo banan bersangiz, iltimos.', highlight: 'Ich möchte' },
          { german: 'Was kostet das Kilo Tomaten?', uzbek: 'Bir kilo pomidor qancha turadi?', highlight: 'Was kostet' }
        ],
        commonMistakes: [
          {
            incorrect: 'Er möchtet ein Kilo Äpfel.',
            correct: 'Er möchte ein Kilo Äpfel.',
            explanationUz: '"er/sie/es" uchun "möchte" bo‘ladi (ich bilan bir xil shaklda): er möchte.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Im Supermarkt an der Kasse',
      titleUz: 'Supermarket kassasida',
      situationUz: 'Xaridor kassa oldida mahsulotlar uchun hisob-kitob qilmoqda.',
      audioTranscriptDe: 'Kassierer: Guten Tag! Haben Sie eine Kundenkarte?\nKunde: Nein, habe ich nicht.\nKassierer: Das macht dann 14 Euro und 75 Cent, bitte.\nKunde: Kann ich mit Karte bezahlen?\nKassierer: Ja natürlich, bitte hier einstecken oder auflegen... Danke sehr! Und hier ist Ihr Bon.\nKunde: Vielen Dank, schönen Tag noch!',
      translationUz: 'Kassir: Xayrli kun! Mijozlik kartangiz bormi?\nMijoz: Yo‘q, menda yo‘q.\nKassir: Unda jami 14 yevro va 75 sent bo‘ldi, iltimos.\nMijoz: Karta bilan to‘lasam bo‘ladimi?\nKassir: Ha albatta, iltimos bu yerga kiriting yoki tekkizing... Katta rahmat! Mana sizning chekingiz.\nMijoz: Katta rahmat, kuningiz xayrli o‘tsin!',
      stage1Global: {
        instructionUz: '1-Bosqich: To‘lov usulini aniqlang.',
        questionUz: 'Xaridor xarid uchun qanday to‘ladi?',
        options: ['Naqd pul bilan (Bargeld)', 'Bank kartasi bilan (mit Karte)', 'To‘lamadi', 'Kupon bilan'],
        correctIndex: 1,
        explanationUz: 'Mijoz "Kann ich mit Karte bezahlen?" deb so‘radi va kassir ruxsat berdi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Tafsilotlarni aniqlang.',
        questions: [
          {
            id: 'l9-q1',
            questionUz: 'Jami to‘lov summasi qancha bo‘ldi?',
            options: ['10 Euro', '14 Euro 75 Cent', '20 Euro', '14 Euro 50 Cent'],
            correctIndex: 1,
            explanationUz: 'Kassir "14 Euro und 75 Cent" dedi.'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Kassierer', textDe: 'Das macht 14 Euro und 75 Cent.', textUz: '14 yevro 75 sent bo‘ldi.' },
          { speaker: 'Kunde', textDe: 'Kann ich mit Karte bezahlen?', textUz: 'Karta bilan to‘lasam bo‘ladimi?' }
        ],
        keyVocabulary: [
          { german: 'mit Karte bezahlen', uzbek: 'karta bilan to‘lamoq' },
          { german: 'der Bon / die Quittung', uzbek: 'chek, kvitansiya' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-m3-3',
        lessonId: 'les-9',
        titleDe: 'Einkaufszettel für das Wochenende',
        titleUz: 'Hafta oxiri uchun xarid ro‘yxati',
        textDe: 'Samstag ist Einkaufstag. Ich schreibe einen Einkaufszettel: Wir brauchen zwei Kilo Kartoffeln, ein Kilo Karotten und 500 Gramm Tomaten. Für das Frühstück kaufe ich eine Packung Kaffee, zwei Liter Milch und ein Glas Honig. Die Äpfel kaufe ich lieber frisch auf dem Markt, dort sind sie günstiger als im Supermarkt.',
        translationUz: 'Shanba — xarid kuni. Men xarid ro‘yxatini yozyapman: Bizga ikki kilo kartoshka, bir kilo sabzi va 500 gramm pomidor kerak. Nonushta uchun bir quti qahva, ikki litr sut va bir banka asal sotib olaman. Olmalarni yaxshisi bozordan yangi uzilganini olaman, u yerda supermarketdagiga qaraganda arzonroq.',
        vocabularyHints: [
          { german: 'der Einkaufszettel', uzbek: 'xaridlar ro‘yxati' },
          { german: 'die Karotte', uzbek: 'sabzi' },
          { german: 'der Honig', uzbek: 'asal' }
        ],
        questions: [
          {
            id: 'rq-m3-3',
            questionUz: 'Muallif nima uchun olmalarni bozordan olmoqchi?',
            options: ['Bozor yaqin bo‘lgani uchun', 'Bozorda ular arzonroq bo‘lgani uchun (günstiger als im Supermarkt)', 'Supermarket yopiq bo‘lgani uchun', 'Olma yoqmagani uchun'],
            correctIndex: 1,
            explanationUz: 'Matnda "dort sind sie günstiger als im Supermarkt" deb sabab ko‘rsatilgan.'
          }
        ]
      }
    ],
    writingScaffold: {
      taskTitleUz: 'Bozorlik / do‘kon xarid ro‘yxatini tuzish',
      promptUz: 'Do‘kondan sotib olmoqchi bo‘lgan 3-4 ta mahsulot nomini miqdori bilan yozing ("Ich möchte..." va "ein Kilo...", "eine Flasche..." iboralarini ishlating).',
      taskInstructionsUz: '1. Menga ... kerak deb boshlang\n2. Ikki xil sabzavot/mevani miqdori bilan yozing\n3. Ichimlik yoki sut mahsulotini yozing',
      controlledScaffolding: {
        stepTitleUz: 'Jumla shablonlari:',
        sentenceStarters: [
          'Ich gehe heute einkaufen.',
          'Ich möchte bitte zwei Kilo...',
          'Ich brauche auch eine Flasche...',
          'Und 300 Gramm...'
        ]
      },
      usefulVocabulary: [
        { german: 'das Kilo Äpfel', uzbek: 'bir kilo olma' },
        { german: 'eine Flasche Milch', uzbek: 'bir shisha sut' },
        { german: 'Gramm Käse', uzbek: 'gramm pishloq' }
      ],
      modelAnswerDe: 'Guten Tag! Ich möchte bitte ein Kilo Äpfel und zwei Kilo Kartoffeln. Haben Sie auch frische Milch? Ich nehme zwei Flaschen. Was kostet das zusammen?',
      modelAnswerUz: 'Xayrli kun! Menga bir kilo olma va ikki kilo kartoshka bersangiz. Yangi sut ham bormi? Ikkita shisha olaman. Hammasi birga qancha bo‘ladi?'
    },
    shadowing: [
      {
        id: 'sha-m3-5',
        lessonId: 'les-9',
        levelCode: 'a1-1',
        sentenceDe: 'Was kosten die Äpfel? - Das Kilo kostet zwei Euro fünfzig.',
        translationUz: 'Olma necha pul turadi? - Kilosi ikki yevro ellik sent turadi.',
        phoneticHint: '[Vas kos-ten di: Ep-fel? - Das Ki-lo kos-tet tsvay Oy-ro fynf-tsih.]',
        orderIndex: 1
      },
      {
        id: 'sha-m3-6',
        lessonId: 'les-9',
        levelCode: 'a1-1',
        sentenceDe: 'Ich möchte bitte ein Kilo Tomaten und eine Flasche Wasser.',
        translationUz: 'Menga bir kilo pomidor va bir shisha suv bersangiz, iltimos.',
        phoneticHint: '[Iç møç-te bit-te ayn Ki-lo To-ma:-ten unt ay-ne Flas-she Vas-ser.]',
        orderIndex: 2
      }
    ],
    practice: [
      {
        id: 'ex-m3-5',
        lessonId: 'les-9',
        type: 'multiple-choice',
        questionUz: '"möchten" fe‘lining "ich" va "er" shaxsidagi to‘g‘ri shakli qaysi?',
        options: ['möchte', 'möchtest', 'möchtet', 'möchten'],
        correctAnswer: 'möchte',
        explanationUz: '"ich" va "er/sie/es" shaxslarida shakl bir xil: "ich möchte", "er möchte".',
        mistakeTipUz: '❌ "ich" va "er" da "möchte" bo‘ladi.'
      },
      {
        id: 'ex-m3-6',
        lessonId: 'les-9',
        type: 'fill-blank',
        questionUz: 'Ko‘plikdagi ot uchun fe‘l shaklini qo‘ying: "Was _____ die Bananen?"',
        blankSentence: 'Was [blank] die Bananen?',
        options: ['kosten', 'kostet', 'koste', 'gekostet'],
        correctAnswer: 'kosten',
        explanationUz: '"die Bananen" ko‘plikda bo‘lgani uchun fe‘l ham ko‘plikda bo‘ladi: "kosten".',
        mistakeTipUz: '❌ Ko‘plikdagi otlar uchun "kosten" ishlatiladi.'
      }
    ],
    listening: [],
    writing: []
  }
];
