import { Lesson } from '../../types/database';

export const MODULE_8_A12_LESSONS: Lesson[] = [
  // ==========================================
  // LEKTION 22: Kleidung und Wetter (Kleidung, Farben & Wetter)
  // ==========================================
  {
    id: 'les-22',
    moduleId: 'mod-a1-2-4',
    levelCode: 'a1-2',
    titleDe: 'Lektion 22: Kleidung und Wetter',
    titleUz: '22-Dars: Kiyim-kechak va ob-havo (Kiyimlar, ranglar va ko‘rsatish olmoshlari)',
    descriptionUz: 'Kiyim-kechak xaridi (Hemd, Hose, Kleid, Pullover, Jacke, Schuhe), ob-havo va fasllar (Es regnet, es schneit, die Sonne scheint) hamda ko‘rsatish olmoshlari (der da, die da, das da).',
    orderIndex: 22,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Asosiy kiyim-kechaklarni nemischa nomlay olish (das Hemd, die Hose, das Kleid, die Schuhe)',
      'Ob-havoni tasvirlash (Es ist sonnig / windig / kalt / warm, es regnet)',
      'Kiyim do‘konida o‘lcham va rang bo‘yicha tanlash ("Welche Größe haben Sie?")'
    ],
    warmUp: {
      situationUz: 'Ertalab ko‘chaga chiqishdan oldin ob-havoni tekshiryapsiz: yomg‘ir yog‘yaptimi yoki quyosh charqlab turibdimi? Shunga qarab kiyim tanlashingiz kerak.',
      curiosityQuestionUz: 'Nemis tilida "Yomg‘ir yog‘yapti" deganda nima sababdan "Es regnet" deb jonsiz "es" ishlatiladi?',
      miniDialogue: [
        { speaker: 'Lukas', textDe: 'Wie ist das Wetter heute?', textUz: 'Bugun ob-havo qanday?' },
        { speaker: 'Anna', textDe: 'Es ist ziemlich kalt und es regnet. Zieh eine warme Jacke an!', textUz: 'Ancha sovuq va yomg‘ir yog‘yapti. Issiq kurtka kiyib ol!' }
      ],
      hintUz: 'Tabiat hodisalari (Es regnet, es schneit, es ist kalt) doimo shaxssiz "es" olmoshi bilan aytiladi.'
    },
    contextDialogue: {
      titleDe: 'Im Kleidergeschäft',
      titleUz: 'Kiyim do‘konida',
      situationUz: 'Mijoz qishki kiyimlar bo‘limida yangi kurtka va sviter tanlamoqda.',
      lines: [
        { speaker: 'Verkäuferin', textDe: 'Guten Tag! Kann ich Ihnen behilflich sein?', textUz: 'Xayrli kun! Sizga yordam bera olamanmi?' },
        { speaker: 'Kunde', textDe: 'Ja bitte, ich suche eine warme Winterjacke. Es wird draußen langsam sehr kalt.', textUz: 'Ha iltimos, men issiq qishki kurtka qidiryapman. Tashqarida asta-sekin juda sovuq bo‘lyapti.' },
        { speaker: 'Verkäuferin', textDe: 'Welche Größe tragen Sie denn?', textUz: 'Qaysi o‘lchamni kiyasiz?' },
        { speaker: 'Kunde', textDe: 'Ich trage Größe M oder L. Haben Sie die schwarze Jacke da drüben in Größe L?', textUz: 'Men M yoki L o‘lcham kiyaman. Anavi qora kurtkaning L o‘lchami bormi?' },
        { speaker: 'Verkäuferin', textDe: 'Ja, hier bitte sehr. Probieren Sie die Jacke gern in der Umkleidekabine an.', textUz: 'Ha, mana marhamat. Kurtkani bemalol kiyinish xonasida kiyib ko‘ring.' },
        { speaker: 'Kunde', textDe: 'Danke, sie passt perfekt! Was kostet die Jacke?', textUz: 'Rahmat, u juda loyiq keldi! Kurtka necha pul turadi?' }
      ],
      usefulPhrases: [
        { german: 'Wie ist das Wetter heute? - Es regnet / schneit.', uzbek: 'Bugun ob-havo qanday? - Yomg‘ir / qor yog‘yapti.' },
        { german: 'Es ist sonnig / windig / warm / kalt.', uzbek: 'Quyoshli / shamolli / iliq / sovuq.' },
        { german: 'Welche Größe haben Sie? - Ich trage Größe...', uzbek: 'O‘lchamingiz qanday? - Men ... o‘lcham kiyaman.' },
        { german: 'Die Jacke passt mir gut / steht mir gut.', uzbek: 'Kurtka menga to‘g‘ri keldi / yarashdi.' }
      ],
      culturalNoteUz: 'Germaniyada ob-havo tez o‘zgaruvchan bo‘lgani sababli nemislar har doim soyabon (Regenschirm) yoki suv o‘tkazmaydigan kurtka olib yurishadi.'
    },
    vocabulary: [
      {
        id: 'voc-m8-1',
        lessonId: 'les-22',
        levelCode: 'a1-2',
        german: 'die Jacke',
        article: 'die',
        plural: 'die Jacken',
        uzbek: 'kurtka, nimcha',
        exampleDe: 'Zieh deine Jacke an.',
        exampleUz: 'Kurtkangni kiyib ol.',
        wordType: 'noun'
      },
      {
        id: 'voc-m8-2',
        lessonId: 'les-22',
        levelCode: 'a1-2',
        german: 'die Hose',
        article: 'die',
        plural: 'die Hosen',
        uzbek: 'shim',
        exampleDe: 'Die Hose ist zu lang.',
        exampleUz: 'Shim juda uzun.',
        wordType: 'noun'
      },
      {
        id: 'voc-m8-3',
        lessonId: 'les-22',
        levelCode: 'a1-2',
        german: 'das Hemd',
        article: 'das',
        plural: 'die Hemden',
        uzbek: 'ko‘ylak (erkaklar ko‘ylagi)',
        exampleDe: 'Er trägt ein weißes Hemd.',
        exampleUz: 'U oq ko‘ylak kiygan.',
        wordType: 'noun'
      },
      {
        id: 'voc-m8-4',
        lessonId: 'les-22',
        levelCode: 'a1-2',
        german: 'das Kleid',
        article: 'das',
        plural: 'die Kleider',
        uzbek: 'ko‘ylak (ayollar ko‘ylagi)',
        exampleDe: 'Das Kleid steht dir ausgezeichnet.',
        exampleUz: 'Ko‘ylak senga juda yarashibdi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m8-5',
        lessonId: 'les-22',
        levelCode: 'a1-2',
        german: 'der Schuh',
        article: 'der',
        plural: 'die Schuhe',
        uzbek: 'poyabzal, oyoq kiyim',
        exampleDe: 'Meine Schuhe sind neu.',
        exampleUz: 'Poyabzalim yangi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m8-6',
        lessonId: 'les-22',
        levelCode: 'a1-2',
        german: 'der Pullover',
        article: 'der',
        plural: 'die Pullover',
        uzbek: 'sviter, jemper',
        exampleDe: 'Der Pullover ist warm und weich.',
        exampleUz: 'Sviter issiq va yumshoq.',
        wordType: 'noun'
      },
      {
        id: 'voc-m8-7',
        lessonId: 'les-22',
        levelCode: 'a1-2',
        german: 'das Wetter',
        article: 'das',
        plural: null,
        uzbek: 'ob-havo',
        exampleDe: 'Das Wetter ist heute herrlich.',
        exampleUz: 'Bugun ob-havo ajoyib.',
        wordType: 'noun'
      },
      {
        id: 'voc-m8-8',
        lessonId: 'les-22',
        levelCode: 'a1-2',
        german: 'regnen',
        article: null,
        plural: null,
        uzbek: 'yomg‘ir yog‘moq',
        exampleDe: 'Es regnet den ganzen Tag.',
        exampleUz: 'Kun bo‘yi yomg‘ir yog‘yapti.',
        wordType: 'verb'
      },
      {
        id: 'voc-m8-9',
        lessonId: 'les-22',
        levelCode: 'a1-2',
        german: 'die Sonne',
        article: 'die',
        plural: null,
        uzbek: 'quyosh',
        exampleDe: 'Die Sonne scheint hell.',
        exampleUz: 'Quyosh charqlab porlamoqda.',
        wordType: 'noun'
      },
      {
        id: 'voc-m8-10',
        lessonId: 'les-22',
        levelCode: 'a1-2',
        german: 'an|ziehen',
        article: null,
        plural: null,
        uzbek: 'kiyinmoq, kiyib olmoq',
        exampleDe: 'Ich ziehe den Mantel an.',
        exampleUz: 'Paltomni kiyib olyapman.',
        wordType: 'verb'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'Kiyim tanlaganda va ob-havoda "der da / die da" ko‘rsatish olmoshlariga qarang:',
      discoveryExamples: [
        { german: 'Welche Jacke? - Die da! (die Jacke)', highlight: 'Die da', uzbek: 'Anavi (jenskiy)!' },
        { german: 'Welcher Pullover? - Der da! (der Pullover)', highlight: 'Der da', uzbek: 'Anavi (muzskoy)!' },
        { german: 'Welches Kleid? - Das da! (das Kleid)', highlight: 'Das da', uzbek: 'Anavi (sredniy)!' }
      ],
      patternExplanationUz: 'Nemis tilida buyumni ko‘rsatib "anavi" demoqchi bo‘lsak, uning artikli yoniga "da" so‘zi qo‘shiladi: der da, die da, das da.',
      ruleFormulaUz: 'der da (Maskulin) | die da (Feminin / Plural) | das da (Neutrum)'
    },
    grammar: [
      {
        id: 'gra-m8-1',
        lessonId: 'les-22',
        levelCode: 'a1-2',
        titleDe: 'Demonstrativpronomen (der / die / das da) & Wetterausdrücke',
        titleUz: 'Ko‘rsatish olmoshlari va ob-havo iboralari',
        summaryUz: '"der da / die da / das da" ko‘rsatish olmoshlari xaridda juda ko‘p ishlatiladi. Ob-havo iboralari esa "es" olmoshi bilan yasaladi.',
        explanationUz: `**1. Demonstrativpronomen (Ko‘rsatish olmoshlari):**
So‘zlashuvda takrorlamaslik va aniq ko‘rsatish uchun:
- *Welchen Rock möchten Sie? - **Den da**.* (Akkusativ)
- *Welcher Mantel gefällt dir? - **Der da**.* (Nominativ)
- *Welches Hemd nimmst du? - **Das da**.*

**2. Ob-havo iboralari (Das Wetter):**
- *Es regnet.* (Yomg‘ir yog‘yapti.)
- *Es schneit.* (Qor yog‘yapti.)
- *Die Sonne scheint.* (Quyosh charqlamoqda.)
- *Es ist warm / heiß / kalt / kühl.* (Iliq / issiq / sovuq / salqin.)
- *Es ist windig / bewölkt / neblig.* (Shamolli / bulutli / tumanli.)`,
        wordOrderRuleUz: 'Shaxssiz gaplarda "es" 1-o‘rinda yoki darak gapda 3-o‘rinda: "Heute regnet es."',
        tables: [
          {
            title: 'Ko‘rsatish olmoshlari',
            headers: ['Grammatik jins', 'Nominativ', 'Akkusativ'],
            rows: [
              ['Maskulin (der)', 'der da', 'den da'],
              ['Neutrum (das)', 'das da', 'das da'],
              ['Feminin (die)', 'die da', 'die da'],
              ['Plural (die)', 'die da', 'die da']
            ]
          }
        ],
        examples: [
          { german: 'Heute scheint den ganzen Tag die Sonne.', uzbek: 'Bugun kun bo‘yi quyosh porlab turibdi.', highlight: 'scheint ... die Sonne' },
          { german: 'Nimmst du diese Hose? - Nein, die da!', uzbek: 'Mana bu shimni olasanmi? - Yo‘q, anavinisini!', highlight: 'die da' }
        ],
        commonMistakes: [
          {
            incorrect: 'Heute ist Regen.',
            correct: 'Heute regnet es.',
            explanationUz: 'Nemis tilida yomg‘ir yog‘ishi "es regnet" fe‘li bilan ifodalanadi.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Der Wetterbericht für Deutschland',
      titleUz: 'Germaniya bo‘yicha ob-havo ma‘lumoti',
      situationUz: 'Radioda ertangi kun uchun ob-havo prognozi eshittirilmoqda.',
      audioTranscriptDe: 'Sprecherin: Und hier ist der Wetterbericht für morgen: Im Norden an der Ostsee bleibt es bewölkt und regnerisch bei kühlen 12 Grad. Im Westen und in der Mitte scheint ab Mittag oft die Sonne bei angenehmen 20 Grad. Im Süden in Bayern gibt es am Nachmittag kurze Gewitter, die Temperaturen erreichen bis zu 24 Grad.',
      translationUz: 'Suxandon: Va mana ertangi kun uchun ob-havo ma‘lumoti: Shimolda Boltiq dengizi bo‘yida bulutli va yomg‘irli bo‘lib, salqin 12 daraja bo‘ladi. G‘arbda va markazda tushdan keyin tez-tez quyosh charqlaydi va yoqimli 20 daraja bo‘ladi. Janubda Bavariyada tushdan keyin qisqa muddatli momaqaldiroq kutilmoqda, harorat 24 darajagacha ko‘tariladi.',
      stage1Global: {
        instructionUz: '1-Bosqich: Germaniya shimolidagi ob-havoni aniqlang.',
        questionUz: 'Shimolda (im Norden) ob-havo qanday bo‘ladi?',
        options: ['Issiq va quyoshli', 'Bulutli va yomg‘irli (bewölkt und regnerisch)', 'Qor yog‘adi', 'Quruq'],
        correctIndex: 1,
        explanationUz: 'Suxandon "bleibt es bewölkt und regnerisch bei kühlen 12 Grad" dedi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Haroratni aniqlang.',
        questions: [
          {
            id: 'l22-q1',
            questionUz: 'G‘arbda harorat necha daraja bo‘ladi?',
            options: ['12 Grad', '20 Grad (zwanzig Grad)', '30 Grad', '5 Grad'],
            correctIndex: 1,
            explanationUz: 'E‘londa "bei angenehmen 20 Grad" deb aytildi.'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Sprecherin', textDe: 'Im Norden bleibt es bewölkt und regnerisch.', textUz: 'Shimolda bulutli va yomg‘irli bo‘ladi.' },
          { speaker: 'Sprecherin', textDe: 'Im Westen scheint die Sonne.', textUz: 'G‘arbda quyosh charqlaydi.' }
        ],
        keyVocabulary: [
          { german: 'bewölkt', uzbek: 'bulutli' },
          { german: 'das Gewitter', uzbek: 'momaqaldiroq, chaqmoq' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-m8-1',
        lessonId: 'les-22',
        titleDe: 'Klamotten für jede Jahreszeit',
        titleUz: 'Har fasl uchun kiyimlar',
        textDe: 'In Deutschland braucht man Kleidung für vier Jahreszeiten. Im Frühling wird es wärmer, aber eine leichte Jacke ist immer nötig. Im Sommer tragen die Menschen gern T-Shirts, Shorts und Sandalen. Die Temperaturen können über 30 Grad steigen. Im Herbst regnet es oft und es ist windig, da braucht man feste Schuhe und einen Regenschirm. Im Winter schneit es in den Bergen und man zieht warme Stiefel, Handschuhe, Schal und Mütze an.',
        translationUz: 'Germaniyada to‘rt fasl uchun ham kiyim-kechak kerak bo‘ladi. Bahorda havo isiydi, ammo yengil kurtka har doim zarur. Yozda odamlar futbolkalar, shortilar va sandallar kiyishni yoqtirishadi. Harorat 30 darajadan oshishi mumkin. Kuzda tez-tez yomg‘ir yog‘adi va shamol bo‘ladi, shuning uchun pishiq poyabzal va soyabon kerak bo‘ladi. Qishda tog‘larda qor yog‘adi va qalin etiklar, qo‘lqoplar, sharf va bosh kiyim kiyiladi.',
        vocabularyHints: [
          { german: 'die Jahreszeit', uzbek: 'fasl, yil fasli' },
          { german: 'der Regenschirm', uzbek: 'soyabon' },
          { german: 'die Handschuhe', uzbek: 'qo‘lqoplar' }
        ],
        questions: [
          {
            id: 'rq-m8-1',
            questionUz: 'Kuzda (im Herbst) nima sababdan soyabon (Regenschirm) kerak bo‘ladi?',
            options: ['Quyoshdan saqlanish uchun', 'Tez-tez yomg‘ir yoqqani sababli (es regnet oft)', 'Qordan saqlanish uchun', 'Chiroyli ko‘rinish uchun'],
            correctIndex: 1,
            explanationUz: 'Matnda "Im Herbst regnet es oft und es ist windig" deyilgan.'
          }
        ]
      }
    ],
    writingScaffold: {
      taskTitleUz: 'Bugungi kiyinishingiz va ob-havo haqida yozish',
      promptUz: 'Bugun ob-havo qandayligi va nimalar kiyib olganingiz haqida 3-4 jumla yozing ("Heute ist es...", "Ich trage...").',
      taskInstructionsUz: '1. Ob-havoni tasvirlang (Heute ist es sonnig / kalt...)\n2. Ustingizdagi kiyimlarni yozing (Ich trage eine Hose, ein Hemd...)\n3. Rangi va qulayligini bildiring',
      controlledScaffolding: {
        stepTitleUz: 'Jumla namunalari:',
        sentenceStarters: [
          'Heute ist das Wetter...',
          'Es ist ziemlich kalt / warm.',
          'Ich trage heute...',
          'Meine Jacke ist...'
        ]
      },
      usefulVocabulary: [
        { german: 'das Wetter ist schön', uzbek: 'ob-havo chiroyli' },
        { german: 'tragen', uzbek: 'kiyib yurmoq' },
        { german: 'die Jacke / die Hose', uzbek: 'kurtka / shim' }
      ],
      modelAnswerDe: 'Heute ist das Wetter sehr schön und die Sonne scheint. Es ist angenehm warm. Ich trage eine blaue Jeanshose, ein weißes T-Shirt und bequeme Sportschuhe.',
      modelAnswerUz: 'Bugun ob-havo juda chiroyli va quyosh charqlamoqda. Yoqimli iliq. Men ko‘k jinsi shim, oq futbolka va qulay sport poyabzali kiyib olganman.'
    },
    shadowing: [
      {
        id: 'sha-m8-1',
        lessonId: 'les-22',
        levelCode: 'a1-2',
        sentenceDe: 'Heute scheint die Sonne und es ist angenehm warm.',
        translationUz: 'Bugun quyosh charqlamoqda va yoqimli iliq.',
        phoneticHint: '[Hoy-te shaynt di: Zon-ne unt es ist an-ge-ne:m varm.]',
        orderIndex: 1
      },
      {
        id: 'sha-m8-2',
        lessonId: 'les-22',
        levelCode: 'a1-2',
        sentenceDe: 'Welche Jacke gefällt dir besser? - Die da drüben!',
        translationUz: 'Qaysi kurtka senga ko‘proq yoqyapti? - Anavi yerdagisi!',
        phoneticHint: '[Vel-çe Yak-ke ge-fellt dir bes-ser? - Di: da dry:-ben!]',
        orderIndex: 2
      }
    ],
    practice: [
      {
        id: 'ex-m8-1',
        lessonId: 'les-22',
        type: 'multiple-choice',
        questionUz: '"Yomg‘ir yog‘yapti" nemis tilida to‘g‘ri qanday aytiladi?',
        options: ['Es regnet.', 'Es macht Regen.', 'Der Regen ist.', 'Es ist regnen.'],
        correctAnswer: 'Es regnet.',
        explanationUz: 'Nemis tilida shaxssiz ifoda: "Es regnet." bo‘ladi.',
        mistakeTipUz: '❌ "Es regnet." to‘g‘ri shakl.'
      },
      {
        id: 'ex-m8-2',
        lessonId: 'les-22',
        type: 'fill-blank',
        questionUz: '"das Hemd" uchun ko‘rsatish olmoshini qo‘ying: "Welches Hemd nimmst du? - _____ da."',
        blankSentence: 'Welches Hemd nimmst du? - [blank] da.',
        options: ['Das', 'Der', 'Die', 'Den'],
        correctAnswer: 'Das',
        explanationUz: '"das Hemd" sredniy rod bo‘lgani uchun "Das da" bo‘ladi.',
        mistakeTipUz: '❌ "das" rodidagi so‘zlar uchun "Das da" ishlatiladi.'
      }
    ],
    listening: [],
    writing: []
  },

  // ==========================================
  // LEKTION 23: Ein Fest feiern (Einladungen & der Kausalsatz "weil")
  // ==========================================
  {
    id: 'les-23',
    moduleId: 'mod-a1-2-4',
    levelCode: 'a1-2',
    titleDe: 'Lektion 23: Ein Fest feiern',
    titleUz: '23-Dars: Bayram nishonlash (Taklifnomalar, sanalar va "weil" ergash gapi)',
    descriptionUz: 'Bayramlar va tug‘ilgan kun (Geburtstag, Fest, Party), taklifnoma yozish va unga javob qaytarish, sanalar va tartib sonlar (am ersten Mai) hamda "weil" (chunki) sabab ergash gapi.',
    orderIndex: 23,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Bayram yoki tug‘ilgan kunga taklifnoma yozish va tabriklash ("Herzlichen Glückwunsch!")',
      'Sanalar va tartib sonlarni aytish (am ersten, am zweiten, am zwanzigsten)',
      '"weil" (chunki) bog‘lovchisi bilan ergash gap tuzish va fe‘lni gapning ENG OXIRIGA qo‘yish'
    ],
    warmUp: {
      situationUz: 'Do‘stingiz tug‘ilgan kun partysiga taklif qildi. Biroq siz imtihonga tayyorlanishingiz kerakligi sababli kela olmasligingizni tushuntirmoqchisiz.',
      curiosityQuestionUz: 'Nemis tilida "Men kela olmayman, chunki dars qilishim kerak" deganda nima uchun "kerak" fe‘li eng oxiriga tushib qoladi?',
      miniDialogue: [
        { speaker: 'Maxim', textDe: 'Kommst du am Samstag zu meiner Geburtstagsparty?', textUz: 'Shanba kuni tug‘ilgan kunimga kelasanmi?' },
        { speaker: 'Sardor', textDe: 'Ich würde gern kommen, aber ich kann nicht, weil ich für die Prüfung lernen muss.', textUz: 'Jon deb borardim, lekin bora olmayman, chunki imtihonga o‘qishim kerak.' }
      ],
      hintUz: '"weil" (chunki) bog‘lovchisi kelganda, ergash gapdagi barcha tuslangan fe‘llar gapning eng oxiriga suriladi.'
    },
    contextDialogue: {
      titleDe: 'Die Einladung zur Geburtstagsparty',
      titleUz: 'Tug‘ilgan kunga taklifnoma',
      situationUz: 'Anna do‘stlarini o‘zining 25 yoshlik yubileyiga taklif qilmoqda.',
      lines: [
        { speaker: 'Anna', textDe: 'Hallo zusammen! Nächste Woche am 15. Mai habe ich Geburtstag.', textUz: 'Barchaga salom! Keyingi hafta 15-mayda tug‘ilgan kunim.' },
        { speaker: 'Florian', textDe: 'Toll! Wie alt wirst du denn?', textUz: 'Ajoyib! Necha yoshga to‘lasan?' },
        { speaker: 'Anna', textDe: 'Ich werde fünfundzwanzig! Ich feiere am Samstagabend eine große Party im Garten. Könnt ihr alle kommen?', textUz: 'Yigirma beshga to‘laman! Shanba oqshomida bog‘da katta bazm qilmoqchiman. Hammangiz kela olasizmi?' },
        { speaker: 'Florian', textDe: 'Ja super, ich komme auf jeden Fall! Soll ich etwas mitbringen?', textUz: 'Ha ajoyib, men albatta boraman! Biror narsa olib kelaymi?' },
        { speaker: 'Anna', textDe: 'Bring gern einen Salat oder etwas zu trinken mit. Wir grillen nämlich Würstchen.', textUz: 'Salat yoki ichishga biror narsa keltirsang bo‘ladi. Negaki biz sosiska qovuramiz.' },
        { speaker: 'Florian', textDe: 'Klasse, ich freue mich schon riesig darauf!', textUz: 'Zo‘r, men buni intiqlik bilan kutyapman!' }
      ],
      usefulPhrases: [
        { german: 'Herzlichen Glückwunsch zum Geburtstag!', uzbek: 'Tug‘ilgan kuningiz bilan chin yurakdan tabriklayman!' },
        { german: 'Ich lade dich herzlich ein.', uzbek: 'Seni chin dildan taklif qilaman.' },
        { german: 'Ich kann leider nicht kommen, weil...', uzbek: 'Afsuski kela olmayman, chunki...' },
        { german: 'am ersten / am fünfzehnten Mai', uzbek: 'birinchi / o‘n beshinchi mayda' }
      ],
      culturalNoteUz: 'Germaniyada tug‘ilgan kundan oldin tabriklash yomon alomat (Unglück) hisoblanadi. Doimo aynan o‘sha kuni yoki undan keyin tabriklanadi!'
    },
    vocabulary: [
      {
        id: 'voc-m8-11',
        lessonId: 'les-23',
        levelCode: 'a1-2',
        german: 'der Geburtstag',
        article: 'der',
        plural: 'die Geburtstage',
        uzbek: 'tug‘ilgan kun',
        exampleDe: 'Wann hast du Geburtstag?',
        exampleUz: 'Tug‘ilgan kuning qachon?',
        wordType: 'noun'
      },
      {
        id: 'voc-m8-12',
        lessonId: 'les-23',
        levelCode: 'a1-2',
        german: 'die Einladung',
        article: 'die',
        plural: 'die Einladungen',
        uzbek: 'taklifnoma, taklif',
        exampleDe: 'Danke für die Einladung!',
        exampleUz: 'Taklif uchun rahmat!',
        wordType: 'noun'
      },
      {
        id: 'voc-m8-13',
        lessonId: 'les-23',
        levelCode: 'a1-2',
        german: 'das Fest / die Party',
        article: 'das',
        plural: 'die Feste / die Partys',
        uzbek: 'bayram, tantana / bazm',
        exampleDe: 'Wir feiern ein schönes Fest.',
        exampleUz: 'Chiroyli bayram nishonlayapmiz.',
        wordType: 'noun'
      },
      {
        id: 'voc-m8-14',
        lessonId: 'les-23',
        levelCode: 'a1-2',
        german: 'feiern',
        article: null,
        plural: null,
        uzbek: 'nishonlamoq, bayram qilmoq',
        exampleDe: 'Wir feiern Silvester zusammen.',
        exampleUz: 'Yangi yilni birga nishonlaymiz.',
        wordType: 'verb'
      },
      {
        id: 'voc-m8-15',
        lessonId: 'les-23',
        levelCode: 'a1-2',
        german: 'das Geschenk',
        article: 'das',
        plural: 'die Geschenke',
        uzbek: 'sovg‘a',
        exampleDe: 'Hier ist ein Geschenk für dich.',
        exampleUz: 'Mana bu sen uchun sovg‘a.',
        wordType: 'noun'
      },
      {
        id: 'voc-m8-16',
        lessonId: 'les-23',
        levelCode: 'a1-2',
        german: 'weil',
        article: null,
        plural: null,
        uzbek: 'chunki, sababli',
        exampleDe: 'Ich lerne, weil ich die Prüfung bestehen will.',
        exampleUz: 'Men o‘qiyapman, chunki imtihondan o‘tishni xohlayman.',
        wordType: 'conjunction'
      },
      {
        id: 'voc-m8-17',
        lessonId: 'les-23',
        levelCode: 'a1-2',
        german: 'gratulieren',
        article: null,
        plural: null,
        uzbek: 'tabriklamoq (+ Dativ)',
        exampleDe: 'Ich gratuliere dir von Herzen!',
        exampleUz: 'Seni chin yurakdan tabriklayman!',
        wordType: 'verb'
      },
      {
        id: 'voc-m8-18',
        lessonId: 'les-23',
        levelCode: 'a1-2',
        german: 'mitbringen',
        article: null,
        plural: null,
        uzbek: 'o‘zi bilan birga olib kelmoq',
        exampleDe: 'Bring bitte Blumen mit.',
        exampleUz: 'Iltimos gullar olib kel.',
        wordType: 'verb'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: '"weil" (chunki) dan keyingi gapda fe‘l qayerda turganiga e‘tibor bering:',
      discoveryExamples: [
        { german: 'Ich bleibe zu Hause. Ich bin krank.', highlight: 'bin (2-o‘rinda)', uzbek: 'Oddiy gapda fe‘l 2-o‘rinda' },
        { german: 'Ich bleibe zu Hause, weil ich krank bin.', highlight: 'weil ... bin (oxirida!)', uzbek: 'weil kelganda "bin" gap oxiriga o‘tdi!' }
      ],
      patternExplanationUz: '"weil" (chunki) ergashtiruvchi bog‘lovchi bo‘lib, u boshlagan ergash gapda (Nebensatz) tuslangan fe‘l QAT‘IY RAVIShDA GAPNING ENG OXIRIDA turadi.',
      ruleFormulaUz: 'Asosiy gap, + weil + Ega + ... + tuslangan fe‘l (oxirida).'
    },
    grammar: [
      {
        id: 'gra-m8-2',
        lessonId: 'les-23',
        levelCode: 'a1-2',
        titleDe: 'Kausalsatz mit "weil" & Ordinalzahlen',
        titleUz: '"weil" (chunki) sabab ergash gapi va tartib sonlar',
        summaryUz: '"Warum?" (Nega?) so‘rog‘iga "weil" bilan javob beriladi va fe‘l gap oxiriga boradi. Sanalar tartib sonlar orqali aytiladi (am ersten Mai).',
        explanationUz: `**1. "weil" bilan sabab ergash gapi (Nebensatz):**
"weil" bog‘lovchisidan keyin tuslangan fe‘l gapning eng oxirgi so‘zi bo‘ladi!
- *Warum kommst du nicht?*
- *Ich komme nicht, **weil ich keine Zeit habe**.* (habe oxirida!)
- *Er lernt Deutsch, **weil er in Berlin studieren möchte**.* (möchte oxirida!)

**2. Ordinalzahlen (Tartib sonlar va sana):**
Sanani aytganda **am** predlogi va songa **-ten** qo‘shimchasi qo‘shiladi (1 dan 19 gacha: -ten; 20 dan boshlab: -sten):
- der 1. Mai -> **am ersten Mai**
- der 3. Oktober -> **am dritten Oktober**
- der 20. Juli -> **am zwanzigsten Juli**
- der 31. Dezember -> **am einunddreißigsten Dezember**`,
        wordOrderRuleUz: '"weil" dan keyin tuslangan fe‘l qat‘iy ravishda gapning eng oxirida turadi!',
        tables: [
          {
            title: 'Tartib sonlar (Ordinalzahlen)',
            headers: ['Raqam', 'Asosiy son', 'Tartib son (am + ...ten)'],
            rows: [
              ['1.', 'eins', 'am ersten'],
              ['2.', 'zwei', 'am zweiten'],
              ['3.', 'drei', 'am dritten'],
              ['7.', 'sieben', 'am siebten'],
              ['15.', 'fünfzehn', 'am fünfzehnten'],
              ['20.', 'zwanzig', 'am zwanzigsten']
            ]
          }
        ],
        examples: [
          { german: 'Ich kann nicht kommen, weil ich arbeiten muss.', uzbek: 'Men kela olmayman, chunki ishlashim kerak.', highlight: 'weil ... muss' },
          { german: 'Mein Geburtstag ist am vierten Juni.', uzbek: 'Tug‘ilgan kunim to‘rtinchi iyunda.', highlight: 'am vierten Juni' }
        ],
        commonMistakes: [
          {
            incorrect: 'Ich lerne Deutsch, weil ich möchte in Deutschland leben.',
            correct: 'Ich lerne Deutsch, weil ich in Deutschland leben möchte.',
            explanationUz: '"weil" dan keyin tuslangan "möchte" fe‘li eng oxirga borishi shart.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Telefonische Absage einer Party',
      titleUz: 'Bazmga kela olmaslik haqida qo‘ng‘iroq',
      situationUz: 'Do‘st o‘rtog‘iga qo‘ng‘iroq qilib, tug‘ilgan kunga nima sababdan bora olmasligini tushuntirmoqda.',
      audioTranscriptDe: 'Leon: Hallo Max! Du, ich rufe wegen deiner Party am Samstag an.\nMax: Hallo Leon! Ja, kommst du?\nLeon: Leider kann ich nicht kommen, weil meine Schwester am Samstag heiratet. Die ganze Familie feiert in Hamburg.\nMax: Oh, das verstehe ich natürlich! Schade, dass du nicht da bist, aber richte deiner Schwester herzliche Glückwünsche aus!\nLeon: Mache ich gern. Viel Spaß bei deiner Feier!',
      translationUz: 'Leon: Salom Maks! Shanba kungi bazming bo‘yicha qo‘ng‘iroq qilyapman.\nMaks: Salom Leon! Ha, kelasanmi?\nLeon: Afsuski kela olmayman, chunki shanba kuni singlim turmushga chiqyapti (to‘yi bo‘lyapti). Butun oilamiz Gamburgda nishonlaydi.\nMaks: O, buni tushunaman albatta! Kela olmasliging achinarli, lekin singlingga chin dildan tabrigimni yetkazib qo‘y!\nLeon: Jon deb yetkazaman. Bayraming maroqli o‘tsin!',
      stage1Global: {
        instructionUz: '1-Bosqich: Leonning qo‘ng‘iroq qilish sababini aniqlang.',
        questionUz: 'Leon nima uchun Maxning tug‘ilgan kuniga bora olmaydi?',
        options: ['Kasal bo‘lib qolgani uchun', 'Singlisining to‘yi bo‘layotgani sababli (weil seine Schwester heiratet)', 'Imtihoni borligi uchun', 'Uxlab qolgani uchun'],
        correctIndex: 1,
        explanationUz: 'Leon "weil meine Schwester am Samstag heiratet" deb sababini aytdi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Tafsilotlarni aniqlang.',
        questions: [
          {
            id: 'l23-q1',
            questionUz: 'Leonning oilasi to‘yni qaysi shaharda nishonlaydi?',
            options: ['Berlinda', 'Gamburgda (in Hamburg)', 'Myunxenda', 'Köln shahrida'],
            correctIndex: 1,
            explanationUz: 'Leon "Die ganze Familie feiert in Hamburg" dedi.'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Leon', textDe: 'Leider kann ich nicht kommen.', textUz: 'Afsuski kela olmayman.' },
          { speaker: 'Leon', textDe: 'Weil meine Schwester heiratet.', textUz: 'Chunki singlim turmushga chiqyapti.' }
        ],
        keyVocabulary: [
          { german: 'heiraten', uzbek: 'turmush qurmoq, uylanmoq' },
          { german: 'die Feier', uzbek: 'tantana, bazm' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-m8-2',
        lessonId: 'les-23',
        titleDe: 'Einladung zur Einweihungsparty',
        titleUz: 'Uy to‘yiga taklifnoma',
        textDe: 'Liebe Freunde, wir sind endlich umgezogen! Unsere neue Wohnung ist fertig und das wollen wir gebührend mit euch feiern. Wir laden euch herzlich zu unserer Einweihungsparty am Samstag, den 24. Juni ab 18:00 Uhr ein. Für Essen und Getränke ist gesorgt. Bitte gebt uns bis zum 20. Juni Bescheid, ob ihr kommen könnt, damit wir planen können. Wir freuen uns riesig auf euch! Herzliche Grüße, Jonas und Sara.',
        translationUz: 'Aziz do‘stlar, biz nihoyat ko‘chib o‘tdik! Yangi xonadonimiz tayyor va buni sizlar bilan munosib nishonlamoqchimiz. Sizlarni 24-iyun shanba kuni soat 18:00 dan boshlab uy to‘yimizga chin dildan taklif qilamiz. Yegulik va ichimliklar tayyorlab qo‘yiladi. Iltimos, rejalashtirishimiz uchun 20-iyungacha kela olasizmi-yo‘qmi xabar bering. Sizlarni intiqlik bilan kutamiz! Samimiy salomlar bilan, Yonas va Sara.',
        vocabularyHints: [
          { german: 'die Einweihungsparty', uzbek: 'uy to‘yi bazmi' },
          { german: 'Bescheid geben', uzbek: 'xabar bermoq, ma‘lum qilmoq' }
        ],
        questions: [
          {
            id: 'rq-m8-2',
            questionUz: 'Mehmonlar eng kechi bilan qaysi sanagacha xabar berishlari kerak?',
            options: ['18-iyungacha', '20-iyungacha (bis zum 20. Juni)', '24-iyungacha', 'Ixtiyoriy'],
            correctIndex: 1,
            explanationUz: 'Matnda "Bitte gebt uns bis zum 20. Juni Bescheid" deb yozilgan.'
          }
        ]
      }
    ],
    writingScaffold: {
      taskTitleUz: 'Taklifnomaga javob xati yozish',
      promptUz: 'Do‘stingizning taklifnomasiga javob yozing: nega kela olishingiz yoki kela olmasligingizni "weil" bog‘lovchisini ishlatib tushuntiring.',
      taskInstructionsUz: '1. Taklif uchun minnatdorchilik bildiring (Danke für die Einladung)\n2. Kela olishingiz yoki olmasligingizni "weil" bilan ayting\n3. Bayram bilan tabriklang (Herzlichen Glückwunsch)',
      controlledScaffolding: {
        stepTitleUz: 'Jumla namunalari:',
        sentenceStarters: [
          'Liebe(r)...,',
          'vielen Dank für die nette Einladung!',
          'Ich komme sehr gern, weil...',
          'Ich kann leider nicht kommen, weil ich...'
        ]
      },
      usefulVocabulary: [
        { german: 'Vielen Dank für die Einladung', uzbek: 'Taklif uchun katta rahmat' },
        { german: 'weil ich Zeit habe', uzbek: 'chunki vaqtim bor' },
        { german: 'Alles Gute!', uzbek: 'Barcha ezgu tilaklar!' }
      ],
      modelAnswerDe: 'Liebe Sara, vielen Dank für die Einladung zu deiner Einweihungsparty! Ich komme sehr gern, weil ich am Samstag frei habe und deine neue Wohnung sehen möchte. Soll ich etwas mitbringen? Bis Samstag! Dein Sardor.',
      modelAnswerUz: 'Qadrdonim Sara, uy to‘yingizga taklif uchun katta rahmat! Men jon deb boraman, chunki shanba kuni bo‘shman va yangi xonadoningizni ko‘rmoqchiman. Biror narsa olib boraymi? Shanbagacha! Sening Sardoring.'
    },
    shadowing: [
      {
        id: 'sha-m8-3',
        lessonId: 'les-23',
        levelCode: 'a1-2',
        sentenceDe: 'Ich kann nicht kommen, weil ich für die Prüfung lernen muss.',
        translationUz: 'Men kela olmayman, chunki imtihonga o‘qishim kerak.',
        phoneticHint: '[Iç kann niçt kom-men, vayl iç fy:r di: Pry:-fung ler-nen mus.]',
        orderIndex: 1
      },
      {
        id: 'sha-m8-4',
        lessonId: 'les-23',
        levelCode: 'a1-2',
        sentenceDe: 'Herzlichen Glückwunsch zum Geburtstag und alles Gute!',
        translationUz: 'Tug‘ilgan kuningiz bilan tabriklayman va barcha ezgu tilaklarni tilayman!',
        phoneticHint: '[Herts-li-çen Glyk-vunsh tsum Ge-burts-tak unt al-les Gu:-te!]',
        orderIndex: 2
      }
    ],
    practice: [
      {
        id: 'ex-m8-3',
        lessonId: 'les-23',
        type: 'word-order',
        questionUz: '"weil" ergash gapini to‘g‘ri so‘z tartibida tuzing (Fe‘l oxirida!):',
        scrambledWords: ['ich', 'bleibe', 'weil', 'bin', 'krank', 'Ich', 'zu', 'Hause,'],
        correctAnswer: 'Ich bleibe zu Hause, weil ich krank bin',
        explanationUz: '"weil" dan keyin: weil ich (ega) + krank + bin (fe‘l eng oxirida).',
        mistakeTipUz: '❌ "weil" ergash gapida tuslangan fe‘l eng oxirgi so‘z bo‘ladi.'
      },
      {
        id: 'ex-m8-4',
        lessonId: 'les-23',
        type: 'fill-blank',
        questionUz: 'Sana uchun to‘g‘ri tartib son qo‘shimchasini tanlang: "Mein Geburtstag ist am _____ Mai."',
        blankSentence: 'Mein Geburtstag ist am [blank] Mai.',
        options: ['fünfzehnten', 'fünfzehn', 'fünfzehnte', 'fünfzehnter'],
        correctAnswer: 'fünfzehnten',
        explanationUz: '"am" dan keyin tartib son "-ten" qo‘shimchasi bilan keladi: "am fünfzehnten Mai".',
        mistakeTipUz: '❌ "am" bilan tartib son "-ten" oladi.'
      }
    ],
    listening: [],
    writing: []
  },

  // ==========================================
  // LEKTION 24: Was hast du am Wochenende gemacht? (Das Perfekt)
  // ==========================================
  {
    id: 'les-24',
    moduleId: 'mod-a1-2-4',
    levelCode: 'a1-2',
    titleDe: 'Lektion 24: Was hast du am Wochenende gemacht?',
    titleUz: '24-Dars: Dam olish kuni nima qilding? (O‘tgan zamon — Das Perfekt)',
    descriptionUz: 'Nemis og‘zaki nutqidagi asosiy o‘tgan zamon (Das Perfekt), yordamchi fe‘llar (haben va sein), Partizip II yasalishi (ge-...-t va ge-...-en) hamda A1 bosqichi yakuni.',
    orderIndex: 24,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'O‘tgan zamonda hikoya qila olish (Gestern habe ich gelernt, am Sonntag bin ich gereist)',
      '"haben" va "sein" yordamchi fe‘llarini to‘g‘ri tanlay olish',
      'Qoidali va noto‘g‘ri fe‘llarning Partizip II shaklini yasash va gap oxiriga qo‘yish'
    ],
    warmUp: {
      situationUz: 'Dushanba kuni ertalab til maktabiga keldingiz. Do‘stlaringiz dam olish kunlari qanday o‘tganini bir-birlaridan so‘rashmoqda.',
      curiosityQuestionUz: 'Nemis tilida "Kecha futbol o‘ynadim" deganda nima uchun "habe gespielt", lekin "Berlinga bordim" deganda "bin gefahren" (sein bilan) deyiladi?',
      miniDialogue: [
        { speaker: 'Lukas', textDe: 'Was hast du am Wochenende gemacht?', textUz: 'Dam olish kunlari nima qilding?' },
        { speaker: 'Sardor', textDe: 'Ich habe Deutsch gelernt und am Sonntag bin ich nach Potsdam gefahren.', textUz: 'Nemis tilini o‘rgandim va yakshanba kuni Potsdamga bordim.' }
      ],
      hintUz: 'Harakat va joy o‘zgarishi (fahren, gehen, fliegen) bilan "sein", boshqa holatlarda esa "haben" yordamchi fe‘li ishlatiladi.'
    },
    contextDialogue: {
      titleDe: 'Ein schönes Wochenende in Berlin',
      titleUz: 'Berlindagi ajoyib dam olish kuni',
      situationUz: 'Kollej kafesida ikki kursdosh o‘tgan dam olish kunlarini qanday o‘tkazganlarini gaplashmoqda.',
      lines: [
        { speaker: 'Elena', textDe: 'Guten Morgen Sardor! Wie war dein Wochenende?', textUz: 'Xayrli tong Sardor! Dam olish kuning qanday o‘tdi?' },
        { speaker: 'Sardor', textDe: 'Sehr schön! Am Samstag habe ich lange geschlafen und dann habe ich mit Freunden gekocht.', textUz: 'Juda ajoyib! Shanba kuni uzoq uxladim va keyin do‘stlarim bilan ovqat pishirdim.' },
        { speaker: 'Elena', textDe: 'Habt ihr usbekischen Plov gemacht?', textUz: 'O‘zbekcha palov qildingizmi?' },
        { speaker: 'Sardor', textDe: 'Ja, genau! Es hat fantastisch geschmeckt. Und was hast du gemacht?', textUz: 'Ha, xuddi shunday! Fantastik darajada mazali bo‘ldi. Sendachi, nima qilding?' },
        { speaker: 'Elena', textDe: 'Ich bin am Sonntag mit dem Zug an die Ostsee gefahren. Ich bin am Strand spazieren gegangen und habe viele Fotos gemacht.', textUz: 'Men yakshanba kuni poyezdda Boltiq dengiziga bordim. Sohilda sayr qildim va ko‘plab suratlar oldim.' },
        { speaker: 'Sardor', textDe: 'Toll! Wann bist du zurückgekommen?', textUz: 'Ajoyib! Qachon qaytib kelding?' },
        { speaker: 'Elena', textDe: 'Ich bin gestern Abend um 21 Uhr wieder in Berlin angekommen.', textUz: 'Kecha kechqurun soat 21:00 da yana Berlinga yetib keldim.' }
      ],
      usefulPhrases: [
        { german: 'Was hast du gestern / am Wochenende gemacht?', uzbek: 'Kecha / dam olish kuni nima qilding?' },
        { german: 'Ich habe gelernt / gekocht / gespielt / gearbeitet.', uzbek: 'Men o‘rgandim / pishirdim / o‘ynadim / ishladim.' },
        { german: 'Ich bin gefahren / gegangen / geflogen.', uzbek: 'Men bordim / yurdim / uchdim.' },
        { german: 'Es hat Spaß gemacht!', uzbek: 'Bu juda maroqli bo‘ldi!' }
      ],
      culturalNoteUz: 'Nemis og‘zaki nutqida o‘tgan voqealarni hikoya qilishda deyarli 100% holatda Perfekt ishlatiladi. Präteritum (war, hatte fe‘llaridan tashqari) asosan kitoblarda yoziladi.'
    },
    vocabulary: [
      {
        id: 'voc-m8-19',
        lessonId: 'les-24',
        levelCode: 'a1-2',
        german: 'gestern',
        article: null,
        plural: null,
        uzbek: 'kecha',
        exampleDe: 'Gestern habe ich Sport gemacht.',
        exampleUz: 'Kecha men sport bilan shug‘ullandim.',
        wordType: 'adverb'
      },
      {
        id: 'voc-m8-20',
        lessonId: 'les-24',
        levelCode: 'a1-2',
        german: 'vorgestern',
        article: null,
        plural: null,
        uzbek: 'o‘tgan kuni, kechadan oldingi kuni',
        exampleDe: 'Vorgestern war das Wetter schön.',
        exampleUz: 'O‘tgan kuni ob-havo yaxshi edi.',
        wordType: 'adverb'
      },
      {
        id: 'voc-m8-21',
        lessonId: 'les-24',
        levelCode: 'a1-2',
        german: 'letzte Woche',
        article: null,
        plural: null,
        uzbek: 'o‘tgan hafta',
        exampleDe: 'Letzte Woche bin ich nach Köln gefahren.',
        exampleUz: 'O‘tgan hafta Kölnga bordim.',
        wordType: 'expression'
      },
      {
        id: 'voc-m8-22',
        lessonId: 'les-24',
        levelCode: 'a1-2',
        german: 'gemacht (machen)',
        article: null,
        plural: null,
        uzbek: 'qildi, bajardi (Partizip II)',
        exampleDe: 'Ich habe meine Hausaufgaben gemacht.',
        exampleUz: 'Men uy vazifalarimni qildim.',
        wordType: 'verb'
      },
      {
        id: 'voc-m8-23',
        lessonId: 'les-24',
        levelCode: 'a1-2',
        german: 'gelernt (lernen)',
        article: null,
        plural: null,
        uzbek: 'o‘rgandi (Partizip II)',
        exampleDe: 'Wir haben viel Deutsch gelernt.',
        exampleUz: 'Biz ko‘p nemis tilini o‘rgandik.',
        wordType: 'verb'
      },
      {
        id: 'voc-m8-24',
        lessonId: 'les-24',
        levelCode: 'a1-2',
        german: 'gefahren (fahren)',
        article: null,
        plural: null,
        uzbek: 'bordi, haydadi (sein bilan Partizip II)',
        exampleDe: 'Er ist nach Berlin gefahren.',
        exampleUz: 'U Berlinga bordi.',
        wordType: 'verb'
      },
      {
        id: 'voc-m8-25',
        lessonId: 'les-24',
        levelCode: 'a1-2',
        german: 'gegangen (gehen)',
        article: null,
        plural: null,
        uzbek: 'bordi, piyoda ketdi (sein bilan Partizip II)',
        exampleDe: 'Sie ist ins Kino gegangen.',
        exampleUz: 'U kinoga bordi.',
        wordType: 'verb'
      },
      {
        id: 'voc-m8-26',
        lessonId: 'les-24',
        levelCode: 'a1-2',
        german: 'gegessen (essen)',
        article: null,
        plural: null,
        uzbek: 'yedi (Partizip II)',
        exampleDe: 'Ich habe einen Apfel gegessen.',
        exampleUz: 'Men bitta olma yedim.',
        wordType: 'verb'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'Perfekt zamonining 2 ta qismiga va ularning gapdagi o‘rniga e‘tibor bering:',
      discoveryExamples: [
        { german: 'Ich habe gestern Deutsch gelernt.', highlight: 'habe (Pos. 2) ... gelernt (Ende)', uzbek: 'haben 2-o‘rinda, gelernt esa gapning eng oxirida!' },
        { german: 'Wir sind nach München gefahren.', highlight: 'sind (Pos. 2) ... gefahren (Ende)', uzbek: 'sind 2-o‘rinda, gefahren esa gapning eng oxirida!' }
      ],
      patternExplanationUz: 'Perfekt zamoni ikkita fe‘ldan tashkil topadi: 1) Yordamchi fe‘l (haben yoki sein) hozirgi zamonda 2-o‘rinda tuslanadi; 2) Asosiy fe‘lning Partizip II shakli GAPNING ENG OXIRIDA turadi.',
      ruleFormulaUz: 'haben / sein (Pos. 2) + ... + Partizip II (Satzende)'
    },
    grammar: [
      {
        id: 'gra-m8-3',
        lessonId: 'les-24',
        levelCode: 'a1-2',
        titleDe: 'Das Perfekt mit "haben" und "sein"',
        titleUz: 'O‘tgan zamon (Das Perfekt) — haben va sein bilan',
        summaryUz: 'Nemis so‘zlashuv tilidagi asosiy o‘tgan zamon. Harakat va joy o‘zgarishi bo‘lsa "sein", qolgan ko‘pchilik hollarda esa "haben" ishlatiladi.',
        explanationUz: `**1. Perfekt formulasi:**
**haben / sein** (hozirgi zamonda tuslanadi) + ... + **Partizip II** (gap oxirida).

**2. Qachon "sein" ishlatiladi?**
- A nuqtadan B nuqtaga **joy o‘zgarishi / harakat:** *gehen, fahren, fliegen, kommen, reisen*
- **Holat o‘zgarishi:** *aufstehen (o‘rnidan turmoq), einschlafen (uxlab qolmoq)*
- *sein* va *bleiben* fe‘llari bilan: *Ich bin in Berlin gewesen / geblieben.*

**3. Qachon "haben" ishlatiladi?**
Qolgan barcha holatlarda (deyarli 80% fe‘llar): *machen, lernen, kochen, essen, trinken, kaufen, arbeiten, schlafen...*

**4. Partizip II qanday yasaladi?**
- **Qoidali fe‘llar:** **ge-** + fe‘l o‘zagi + **-t**
  - *lernen -> ge-lern-t*
  - *machen -> ge-mach-t*
  - *kochen -> ge-koch-t*
- **-ieren bilan tugagan fe‘llar (ge- olmaydi!):**
  - *studieren -> studiert*
  - *telefonieren -> telefoniert*
  - *reservieren -> reserviert*
- **Noto‘g‘ri (kuchli) fe‘llar (yod olinadi):**
  - *fahren -> ge-fahr-en*
  - *gehen -> ge-gang-en*
  - *essen -> ge-gess-en*
  - *trinken -> ge-trunk-en*
  - *schreiben -> ge-schrieb-en*`,
        wordOrderRuleUz: 'Partizip II har doim darak gapning ham, so‘roq gapning ham ENG OXIRGI SO‘ZI bo‘ladi!',
        tables: [
          {
            title: 'haben vs. sein bilan Perfekt namunalari',
            headers: ['Yordamchi fe‘l', 'Infinitiv', 'Partizip II', 'Namuna gap'],
            rows: [
              ['haben', 'lernen', 'gelernt', 'Ich habe Deutsch gelernt.'],
              ['haben', 'machen', 'gemacht', 'Was hast du gemacht?'],
              ['haben', 'essen', 'gegessen', 'Er hat einen Apfel gegessen.'],
              ['sein', 'fahren', 'gefahren', 'Wir sind nach Köln gefahren.'],
              ['sein', 'gehen', 'gegangen', 'Sie ist nach Hause gegangen.'],
              ['sein', 'aufstehen', 'aufgestanden', 'Ich bin um 7 Uhr aufgestanden.']
            ]
          }
        ],
        examples: [
          { german: 'Gestern habe ich meine Hausaufgaben gemacht.', uzbek: 'Kecha men uy vazifalarimni bajardim.', highlight: 'habe ... gemacht' },
          { german: 'Am Wochenende bin ich nach Hamburg gefahren.', uzbek: 'Dam olish kuni men Gamburgga bordim.', highlight: 'bin ... gefahren' }
        ],
        commonMistakes: [
          {
            incorrect: 'Ich habe nach Berlin gefahren.',
            correct: 'Ich bin nach Berlin gefahren.',
            explanationUz: '"fahren" joy o‘zgarishi bo‘lgani uchun yordamchi fe‘l "sein" (bin) bo‘ladi.'
          },
          {
            incorrect: 'Ich habe gelernt gestern Deutsch.',
            correct: 'Ich habe gestern Deutsch gelernt.',
            explanationUz: 'Partizip II "gelernt" qat‘iy ravishda gapning eng oxirida turishi shart.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Was hast du am Wochenende erlebt?',
      titleUz: 'Dam olish kunlari nimalarni boshdan kechirding?',
      situationUz: 'Do‘stlar dushanba kuni bir-birlarining dam olish kunlari taassurotlari bilan bo‘lishmoqda.',
      audioTranscriptDe: 'Moritz: Hallo Sarah! Hast du am Wochenende etwas Schönes gemacht?\nSarah: Ja, total! Am Samstag habe ich meine beste Freundin in Leipzig besucht. Wir haben in einem netten Café gefrühstückt und dann haben wir die Stadt besichtigt.\nMoritz: Und wie seid ihr gefahren?\nSarah: Wir sind mit dem ICE gefahren, das hat nur eine Stunde gedauert. Am Sonntag habe ich dann den ganzen Tag auf dem Sofa entspannt und ein tolles Buch gelesen.',
      translationUz: 'Morits: Salom Sara! Dam olish kunlari biror qiziq ish qildingmi?\nSara: Ha, juda ham! Shanba kuni Leyptsigda eng yaqin dugonamnikiga mehmonga bordim. Shiramgina qahvaxonada nonushta qildik va keyin shaharni aylandik.\nMorits: Qanday transportda bordingizlar?\nSara: Biz ICE tezyurar poyezdida bordik, bor-yo‘g‘i bir soat vaqt ketdi. Yakshanba kuni esa kun bo‘yi divanda hordiq chiqardim va ajoyib kitob o‘qidim.',
      stage1Global: {
        instructionUz: '1-Bosqich: Saraning dam olish kunidagi asosiy sayohatini tushuning.',
        questionUz: 'Sarah shanba kuni qaysi shaharga mehmonga bordi?',
        options: ['Berlinga', 'Leypsig shahriga (nach Leipzig)', 'Drezdenga', 'Myunxenga'],
        correctIndex: 1,
        explanationUz: 'Sarah "habe ich meine beste Freundin in Leipzig besucht" dedi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Transport vositasi va vaqtni aniqlang.',
        questions: [
          {
            id: 'l24-q1',
            questionUz: 'Leypsiggacha poyezdda qancha vaqt ketdi?',
            options: ['Uch soat', 'Faqat bir soat (nur eine Stunde)', 'Yarim soat', 'Besh soat'],
            correctIndex: 1,
            explanationUz: 'U "das hat nur eine Stunde gedauert" dedi.'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Moritz', textDe: 'Wie seid ihr gefahren?', textUz: 'Qanday bordingizlar?' },
          { speaker: 'Sarah', textDe: 'Wir sind mit dem ICE gefahren.', textUz: 'Biz ICE poyezdida bordik.' }
        ],
        keyVocabulary: [
          { german: 'besuchen', uzbek: 'ziyorat qilmoq, mehmonga bormoq' },
          { german: 'entspannen', uzbek: 'hordiq chiqarmoq, rohatlanmoq' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-m8-3',
        lessonId: 'les-24',
        titleDe: 'Mein Rückblick auf das Sprachniveau A1',
        titleUz: 'A1 bosqichiga yakuniy nigoh',
        textDe: 'Vor vier Monaten habe ich mit dem Deutschlernen begonnen. Am Anfang konnte ich nur "Guten Tag" und "Auf Wiedersehen" sagen. Aber jetzt habe ich schon 24 Lektionen gelernt! Ich habe gelernt, wie man sich vorstellt, wie man im Supermarkt einkauft und wie man nach dem Weg fragt. Gestern habe ich zum ersten Mal eine ganze E-Mail auf Deutsch ohne Hilfe geschrieben. Ich bin sehr stolz auf meine Fortschritte. Jetzt bin ich bereit für A2!',
        translationUz: 'To‘rt oy oldin nemis tilini o‘rganishni boshlagan edim. Boshida faqat "Xayrli kun" va "Ko‘rishguncha xayr" deya olardim xolos. Ammo hozir allaqachon 24 ta darsni o‘rganib bo‘ldim! O‘zimni qanday tanishtirishni, supermarketda qanday xarid qilishni va yo‘l so‘rashni o‘rgandim. Kecha birinchi marta hech kimning yordamisiz to‘liq elektron xatni nemis tilida yozdim. O‘z yutuqlarimdan juda faxrlanaman. Endi men A2 bosqichiga tayyorman!',
        vocabularyHints: [
          { german: 'der Rückblick', uzbek: 'xulosa, o‘tmishga nazar' },
          { german: 'stolz sein auf', uzbek: '...dan faxrlanmoq' },
          { german: 'der Fortschritt', uzbek: 'yutuq, ilgarilash' }
        ],
        questions: [
          {
            id: 'rq-m8-3',
            questionUz: 'Muallif kecha nemis tilida nima qildi?',
            options: ['Kino ko‘rdi', 'Birinchi marta mustaqil butun bir xat yozdi (eine ganze E-Mail geschrieben)', 'Imtihon topshirdi', 'Yangi dars boshladi'],
            correctIndex: 1,
            explanationUz: 'Matnda "Gestern habe ich zum ersten Mal eine ganze E-Mail auf Deutsch ohne Hilfe geschrieben" deb yozilgan.'
          }
        ]
      }
    ],
    writingScaffold: {
      taskTitleUz: 'O‘tgan dam olish kuningiz haqida hisobot yozish',
      promptUz: 'O‘tgan hafta oxirida nimalar qilganingiz haqida Perfekt zamonini ishlatib 4-5 jumla yozing ("Ich habe... gelernt", "Ich bin... gefahren").',
      taskInstructionsUz: '1. Soat nechada turganingizni yozing (Ich bin um... aufgestanden)\n2. Nima yeganingiz yoki pishirganingizni ayting (Ich habe... gegessen/gekocht)\n3. Qayerga borganingizni yozing (Ich bin nach... gefahren)\n4. Kechqurun nima qilganingizni bildiring',
      controlledScaffolding: {
        stepTitleUz: 'Jumla namunalari:',
        sentenceStarters: [
          'Am Samstag bin ich um... Uhr aufgestanden.',
          'Zuerst habe ich gemütlich gefrühstückt.',
          'Am Nachmittag bin ich mit Freunden...',
          'Am Abend habe ich ein Buch gelesen.'
        ]
      },
      usefulVocabulary: [
        { german: 'aufgestanden (sein)', uzbek: 'o‘rnidan turdi' },
        { german: 'gekocht (haben)', uzbek: 'ovqat pishirdi' },
        { german: 'gefahren (sein)', uzbek: 'bordi' }
      ],
      modelAnswerDe: 'Am Samstag bin ich um acht Uhr aufgestanden. Dann habe ich mit meiner Familie gefrühstückt. Am Nachmittag habe ich Fußball gespielt und Freunde getroffen. Am Sonntag bin ich in den Park gefahren und habe spazieren gegangen. Es war ein tolles Wochenende!',
      modelAnswerUz: 'Shanba kuni soat sakkizda uyg‘ondim. Keyin oilam bilan nonushta qildim. Tushdan keyin futbol o‘ynadim va do‘stlarim bilan uchrashdim. Yakshanba kuni parkka bordim va sayr qildim. Bu ajoyib dam olish kuni bo‘ldi!'
    },
    shadowing: [
      {
        id: 'sha-m8-5',
        lessonId: 'les-24',
        levelCode: 'a1-2',
        sentenceDe: 'Was hast du am Wochenende gemacht? - Ich habe Deutsch gelernt.',
        translationUz: 'Dam olish kunlari nima qilding? - Men nemis tilini o‘rgandim.',
        phoneticHint: '[Vas hast du am Vo-xen-en-de ge-maxt? - Iç ha:-be Doytsh ge-lernt.]',
        orderIndex: 1
      },
      {
        id: 'sha-m8-6',
        lessonId: 'les-24',
        levelCode: 'a1-2',
        sentenceDe: 'Gestern bin ich mit dem Zug nach Berlin gefahren.',
        translationUz: 'Kecha poyezdda Berlinga bordim.',
        phoneticHint: '[Ges-tern bin iç mit dem Tsu:k na:x Ber-li:n ge-fa:-ren.]',
        orderIndex: 2
      }
    ],
    practice: [
      {
        id: 'ex-m8-5',
        lessonId: 'les-24',
        type: 'multiple-choice',
        questionUz: '"fahren" fe‘li bilan Perfektda qaysi yordamchi fe‘l ishlatiladi?',
        options: ['haben (Ich habe gefahren)', 'sein (Ich bin gefahren)', 'werden (Ich werde gefahren)', 'machen'],
        correctAnswer: 'sein (Ich bin gefahren)',
        explanationUz: '"fahren" joy o‘zgarishi (harakat) bo‘lgani sababli doimo "sein" oladi: "Ich bin gefahren".',
        mistakeTipUz: '❌ Harakat fe‘llari Perfektda "sein" bilan tuslanadi.'
      },
      {
        id: 'ex-m8-6',
        lessonId: 'les-24',
        type: 'word-order',
        questionUz: 'Perfekt zamonidagi gapni to‘g‘ri so‘z tartibida joylashtiring (Partizip II oxirida!):',
        scrambledWords: ['habe', 'Ich', 'meine', 'Hausaufgaben', 'gestern', 'gemacht'],
        correctAnswer: 'Ich habe gestern meine Hausaufgaben gemacht',
        explanationUz: 'Ich (1) + habe (2) + gestern meine Hausaufgaben (3) + gemacht (Partizip II eng oxirida).',
        mistakeTipUz: '❌ Partizip II "gemacht" gapning eng oxirida turishi shart.'
      }
    ],
    listening: [],
    writing: []
  }
];
