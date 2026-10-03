import { Lesson } from '../../types/database';

export const MODULE_1_LESSONS: Lesson[] = [
  // ==========================================
  // LEKTION 1: Hallo! Ich bin... (Begrüßung, Kennenlernen & Verben)
  // ==========================================
  {
    id: 'les-1',
    moduleId: 'mod-1',
    levelCode: 'a1-1',
    titleDe: 'Lektion 1: Hallo! Ich bin...',
    titleUz: '1-Dars: Salom! Men... (Salomlashuv va dastlabki tanishuv)',
    descriptionUz: 'Nemis tilida salomlashish, ism va kelib chiqishni so‘rash, W-Fragen so‘roq gaplari va fe‘llarning hozirgi zamonda tuslanishi.',
    orderIndex: 1,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Nemis tilida rasmiy va norasmiy salomlashish hamda xayrlashish',
      'O‘z ismingiz, mamlakatingiz va yashash shahringizni aytish',
      'W-Fragen (Wie? Woher? Wo? Was?) savollarini berish va fe‘llarni "ich/du/Sie"da tuslash'
    ],
    warmUp: {
      situationUz: 'Nemis tili kursining birinchi darsiga kirdingiz. Kursdoshingiz sizga jilmayib salom berdi va ismingizni so‘ramoqchi bo‘ldi.',
      curiosityQuestionUz: 'Nemis tilida "Mening ismim..." deyish uchun 3 xil usul borligini bilarmidingiz? Qaysi biri eng tabiiy eshitiladi?',
      miniDialogue: [
        { speaker: 'Lukas', textDe: 'Hallo! Ich bin Lukas. Und wie heißt du?', textUz: 'Salom! Men Lukasman. Sening isming nima?' },
        { speaker: 'Sardor', textDe: 'Hallo Lukas! Ich heiße Sardor. Freut mich!', textUz: 'Salom Lukas! Mening ismim Sardor. Tanishganimdan xursandman!' }
      ],
      hintUz: 'Nemislar tanishuvda qo‘l berib ko‘rishishadi va ko‘zga qarab salom berishadi.'
    },
    contextDialogue: {
      titleDe: 'Erster Tag im Sprachkurs',
      titleUz: 'Til kursidagi birinchi kun',
      situationUz: 'Münxendagi Gyote Institutida o‘zbekistonlik Sardor va germaniyalik Laura tanishmoqda.',
      lines: [
        { speaker: 'Laura', textDe: 'Guten Tag! Mein Name ist Laura Keller. Wie heißen Sie?', textUz: 'Xayrli kun! Mening ismim Laura Keller. Sizning ismingiz nima?' },
        { speaker: 'Sardor', textDe: 'Guten Tag, Frau Keller! Ich heiße Sardor Rahimov.', textUz: 'Xayrli kun, xonim Keller! Mening ismim Sardor Rahimov.' },
        { speaker: 'Laura', textDe: 'Woher kommen Sie, Herr Rahimov?', textUz: 'Qayerdan kelgansiz, janob Rahimov?' },
        { speaker: 'Sardor', textDe: 'Ich komme aus Usbekistan, aus Taschkent. Und woher kommen Sie?', textUz: 'Men O‘zbekistondan, Toshkentdanman. Siz qayerdansiz?' },
        { speaker: 'Laura', textDe: 'Ich komme aus Deutschland, aus München. Welche Sprachen sprechen Sie?', textUz: 'Men Germaniyadan, Myunxendanman. Qaysi tillarda gapirasiz?' },
        { speaker: 'Sardor', textDe: 'Ich spreche Usbekisch, Russisch und jetzt lerne ich Deutsch.', textUz: 'Men o‘zbekcha, ruscha gapiraman va hozir nemis tilini o‘rganyapman.' },
        { speaker: 'Laura', textDe: 'Sehr schön! Freut mich sehr.', textUz: 'Juda yaxshi! Tanishganimdan behad xursandman.' }
      ],
      usefulPhrases: [
        { german: 'Wie heißen Sie? / Wie heißt du?', uzbek: 'Ismingiz nima? / Isming nima?' },
        { german: 'Ich heiße... / Ich bin...', uzbek: 'Mening ismim... / Men...man' },
        { german: 'Woher kommen Sie? / Woher kommst du?', uzbek: 'Qayerdansiz? / Qayerdansan?' },
        { german: 'Ich komme aus...', uzbek: 'Men ...dan kelganman' },
        { german: 'Freut mich!', uzbek: 'Tanishganimdan xursandman!' }
      ],
      culturalNoteUz: 'Germaniyada kattalarga yoki notanishlarga "Sie" (Siz), tengdosh talabalarga esa "du" (sen) deb murojaat qilinadi.'
    },
    vocabulary: [
      {
        id: 'voc-m1-1',
        lessonId: 'les-1',
        levelCode: 'a1-1',
        german: 'heißen',
        article: null,
        plural: null,
        uzbek: 'nomlanmoq, ismi ... bo‘lmoq',
        exampleDe: 'Ich heiße Sardor.',
        exampleUz: 'Mening ismim Sardor.',
        wordType: 'verb'
      },
      {
        id: 'voc-m1-2',
        lessonId: 'les-1',
        levelCode: 'a1-1',
        german: 'der Name',
        article: 'der',
        plural: 'die Namen',
        uzbek: 'ism, familiya',
        exampleDe: 'Mein Name ist Lukas.',
        exampleUz: 'Mening ismim Lukas.',
        wordType: 'noun'
      },
      {
        id: 'voc-m1-3',
        lessonId: 'les-1',
        levelCode: 'a1-1',
        german: 'kommen aus',
        article: null,
        plural: null,
        uzbek: '...dan kelmoq (kelib chiqishi)',
        exampleDe: 'Woher kommst du? - Ich komme aus Usbekistan.',
        exampleUz: 'Qayerdansan? - Men O‘zbekistondanman.',
        wordType: 'verb'
      },
      {
        id: 'voc-m1-4',
        lessonId: 'les-1',
        levelCode: 'a1-1',
        german: 'wohnen in',
        article: null,
        plural: null,
        uzbek: '...da yashamoq',
        exampleDe: 'Ich wohne in Berlin.',
        exampleUz: 'Men Berlinda yashayman.',
        wordType: 'verb'
      },
      {
        id: 'voc-m1-5',
        lessonId: 'les-1',
        levelCode: 'a1-1',
        german: 'sprechen',
        article: null,
        plural: null,
        uzbek: 'gapirmoq',
        exampleDe: 'Er spricht sehr gut Deutsch.',
        exampleUz: 'U nemischa juda yaxshi gapiradi.',
        wordType: 'verb'
      },
      {
        id: 'voc-m1-6',
        lessonId: 'les-1',
        levelCode: 'a1-1',
        german: 'das Land',
        article: 'das',
        plural: 'die Länder',
        uzbek: 'mamlakat, davlat',
        exampleDe: 'Usbekistan ist ein sonniges Land.',
        exampleUz: 'O‘zbekiston quyoshli mamlakat.',
        wordType: 'noun'
      },
      {
        id: 'voc-m1-7',
        lessonId: 'les-1',
        levelCode: 'a1-1',
        german: 'die Sprache',
        article: 'die',
        plural: 'die Sprachen',
        uzbek: 'til',
        exampleDe: 'Deutsch ist eine schöne Sprache.',
        exampleUz: 'Nemis tili chiroyli til.',
        wordType: 'noun'
      },
      {
        id: 'voc-m1-8',
        lessonId: 'les-1',
        levelCode: 'a1-1',
        german: 'Guten Tag',
        article: null,
        plural: null,
        uzbek: 'Xayrli kun',
        exampleDe: 'Guten Tag, wie geht es Ihnen?',
        exampleUz: 'Xayrli kun, ishlaringiz qalay?',
        wordType: 'expression'
      },
      {
        id: 'voc-m1-9',
        lessonId: 'les-1',
        levelCode: 'a1-1',
        german: 'Auf Wiedersehen',
        article: null,
        plural: null,
        uzbek: 'Ko‘rishguncha xayr (rasmiy)',
        exampleDe: 'Auf Wiedersehen, bis morgen!',
        exampleUz: 'Ko‘rishguncha xayr, ertagacha!',
        wordType: 'expression'
      },
      {
        id: 'voc-m1-10',
        lessonId: 'les-1',
        levelCode: 'a1-1',
        german: 'Tschüss',
        article: null,
        plural: null,
        uzbek: 'Xayr (do‘stona, norasmiy)',
        exampleDe: 'Tschüss, mach\'s gut!',
        exampleUz: 'Xayr, yaxshi qol!',
        wordType: 'expression'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'Quyidagi gaplardagi fe‘l oxirlariga e‘tibor bering. Har bir shaxsda fe‘l qanday qo‘shimcha olyapti?',
      discoveryExamples: [
        { german: 'Ich komm-e aus Usbekistan.', highlight: '-e', uzbek: 'Men O‘zbekistondan kelganman.' },
        { german: 'Du komm-st aus Deutschland.', highlight: '-st', uzbek: 'Sen Germaniyadan kelgansan.' },
        { german: 'Sie komm-en aus Österreich.', highlight: '-en', uzbek: 'Siz Avstriyadan kelgansiz.' }
      ],
      patternExplanationUz: 'Nemis tilida har bir kishilik olmoshi (ich, du, er/sie/es, wir, ihr, sie/Sie) fe‘l negiziga o‘ziga xos qo‘shimcha ulaydi.',
      ruleFormulaUz: 'Fe‘l negizi + shaxs qo‘shimchasi (ich: -e, du: -st, er/sie: -t, wir/Sie: -en)'
    },
    grammar: [
      {
        id: 'gra-m1-1',
        lessonId: 'les-1',
        levelCode: 'a1-1',
        titleDe: 'Konjugation im Präsens & W-Fragen',
        titleUz: 'Hozirgi zamon fe‘l tuslanishi va W-savollar',
        summaryUz: 'Fe‘llar shaxslar bo‘yicha tuslanadi, darak gapda fe‘l 2-o‘rinda, so‘roq gapda esa W-so‘zdan keyin 2-o‘rinda turadi.',
        explanationUz: `Nemis tilida barcha fe‘llarning infinitiv (noaniq) shakli **-en** bilan tugaydi (masalan: *kommen, wohnen, lernen*).
Fe‘lni shaxslar bo‘yicha tuslash uchun **-en** olib tashlanadi va kishilik olmoshiga mos qo‘shimcha qo‘shiladi:

- **ich** (men) -> **-e** (*ich lerne*)
- **du** (sen) -> **-st** (*du lernst*)
- **er / sie / es** (u) -> **-t** (*er lernt*)
- **wir** (biz) -> **-en** (*wir lernen*)
- **ihr** (sizlar) -> **-t** (*ihr lernt*)
- **sie / Sie** (ular / Siz) -> **-en** (*Sie lernen*)

**W-Fragen (Maxsus so‘roq gaplar):**
1. **Wie?** — Qanday? (*Wie heißen Sie?*)
2. **Woher?** — Qayerdan? (*Woher kommst du?*)
3. **Wo?** — Qayerda? (*Wo wohnst du?*)
4. **Was?** — Nima? (*Was machst du?*)`,
        wordOrderRuleUz: 'Darak gapda ham, W-savolda ham tuslangan fe‘l qat‘iy ravishda 2-O‘RINDA turadi!',
        tables: [
          {
            title: 'kommen (kelmoq) va wohnen (yashamoq) fe‘llari tuslanishi',
            headers: ['Olmosh', 'kommen', 'wohnen', 'O‘zbekcha tarjimasi'],
            rows: [
              ['ich', 'komme', 'wohne', 'men kelaman / yashayman'],
              ['du', 'kommst', 'wohnst', 'sen kelasan / yashaysan'],
              ['er/sie/es', 'kommt', 'wohnt', 'u keladi / yashaydi'],
              ['wir', 'kommen', 'wohnen', 'biz kelamiz / yashaymiz'],
              ['ihr', 'kommt', 'wohnt', 'sizlar kelasiz / yashaysiz'],
              ['sie / Sie', 'kommen', 'wohnen', 'ular / Siz kelasiz']
            ]
          }
        ],
        examples: [
          { german: 'Ich wohne in Berlin.', uzbek: 'Men Berlinda yashayman.', highlight: 'wohne' },
          { german: 'Woher kommst du?', uzbek: 'Qayerdan kelgansan?', highlight: 'kommst' },
          { german: 'Heute lerne ich Deutsch.', uzbek: 'Bugun men nemis tilini o‘rganyapman.', highlight: 'lerne' }
        ],
        commonMistakes: [
          {
            incorrect: 'Ich kommst aus Usbekistan.',
            correct: 'Ich komme aus Usbekistan.',
            explanationUz: '"ich" bilan fe‘l qo‘shimchasi "-e" bo‘ladi, "-st" esa faqat "du" uchun ishlatiladi.'
          },
          {
            incorrect: 'Wo du wohnst?',
            correct: 'Wo wohnst du?',
            explanationUz: 'Nemischa so‘roq gapda fe‘l ikkinchi o‘rinda bo‘lishi shart: Wo (1) + wohnst (2) + du (3)?'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Gespräch im Deutschkurs',
      titleUz: 'Til kursidagi suhbat',
      situationUz: 'Ikki yangi o‘quvchi kurs boshlanishidan oldin dahlizda o‘zaro tanishmoqda.',
      audioTranscriptDe: 'Markus: Hallo, ich bin Markus. Wie heißt du?\nAlina: Hallo Markus! Ich heiße Alina.\nMarkus: Woher kommst du, Alina?\nAlina: Ich komme aus Italien, aus Rom. Und du?\nMarkus: Ich komme aus Österreich, aus Wien. Ich wohne jetzt hier in München.\nAlina: Schön! Ich spreche Italienisch und Englisch. Und du?\nMarkus: Ich spreche Deutsch und ein bisschen Französisch.',
      translationUz: 'Markus: Salom, men Markusman. Isming nima?\nAlina: Salom Markus! Mening ismim Alina.\nMarkus: Qayerdansan, Alina?\nAlina: Men Italiyadan, Rimdanman. Sendachi?\nMarkus: Men Avstriyadan, Venadanman. Hozir bu yerda Myunxenda yashayman.\nAlina: Ajoyib! Men italyancha va inglizcha gapiraman. Sendachi?\nMarkus: Men nemischa va ozgina fransuzcha gapiraman.',
      stage1Global: {
        instructionUz: '1-Bosqich (Umumiy tushunish): Dialogni tinglang va asosiy mavzuni aniqlang.',
        questionUz: 'Markus va Alina nima haqida gaplashmoqda?',
        options: ['Xarid qilish haqida', 'O‘zaro tanishuv va kelib chiqish haqida', 'Ish topish haqida', 'Mehmonxona xonasi haqida'],
        correctIndex: 1,
        explanationUz: 'Ular bir-birlarining ismlari, qayerdan ekanliklari va qaysi tillarda gapirishlari haqida so‘rashdi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich (Tafsilotlar): Dialogni qayta tinglang va aniq faktlarni belgilang.',
        questions: [
          {
            id: 'l1-q1',
            questionUz: 'Alina qaysi mamlakatdan kelgan?',
            options: ['Germaniyadan', 'Italiyadan (Rom)', 'Avstriyadan', 'O‘zbekistondan'],
            correctIndex: 1,
            explanationUz: 'Alina "Ich komme aus Italien, aus Rom" dedi.'
          },
          {
            id: 'l1-q2',
            questionUz: 'Markus hozir qayerda yashaydi?',
            options: ['Rimda', 'Venada', 'Myunxenda', 'Berlinda'],
            correctIndex: 2,
            explanationUz: 'Markus "Ich wohne jetzt hier in München" deb aytdi.'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Markus', textDe: 'Hallo, ich bin Markus. Wie heißt du?', textUz: 'Salom, men Markusman. Isming nima?' },
          { speaker: 'Alina', textDe: 'Hallo Markus! Ich heiße Alina.', textUz: 'Salom Markus! Mening ismim Alina.' },
          { speaker: 'Markus', textDe: 'Woher kommst du, Alina?', textUz: 'Qayerdansan, Alina?' },
          { speaker: 'Alina', textDe: 'Ich komme aus Italien, aus Rom.', textUz: 'Men Italiyadan, Rimdanman.' }
        ],
        keyVocabulary: [
          { german: 'Woher?', uzbek: 'Qayerdan?' },
          { german: 'jetzt', uzbek: 'hozir' },
          { german: 'hier', uzbek: 'bu yerda' },
          { german: 'ein bisschen', uzbek: 'biroz, ozgina' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-m1-1',
        lessonId: 'les-1',
        titleDe: 'Steckbrief: Das bin ich!',
        titleUz: 'Qisqa anketa: Bu menman!',
        textDe: 'Guten Tag! Mein Name ist Timur Alimov. Ich bin 22 Jahre alt und komme aus Usbekistan. Jetzt wohne ich in Berlin. Ich spreche Usbekisch, Russisch und lerne Deutsch an der Universität. Berlin ist sehr interessant und groß. Viele Grüße an alle!',
        translationUz: 'Xayrli kun! Mening ismim Temur Olimov. Men 22 yoshdaman va O‘zbekistondanman. Hozir Berlinda yashayman. Men o‘zbek, rus tillarida gapiraman va universitetda nemis tilini o‘rganmoqdaman. Berlin juda qiziqarli va katta. Barchaga salomlar!',
        vocabularyHints: [
          { german: 'das Jahr / die Jahre', uzbek: 'yil / yosh' },
          { german: 'an der Universität', uzbek: 'universitetda' },
          { german: 'interessant', uzbek: 'qiziqarli' }
        ],
        questions: [
          {
            id: 'rq-m1-1',
            questionUz: 'Temur qayerdan kelgan va hozir qayerda yashaydi?',
            options: ['Myunxendan kelgan, Toshkentda yashaydi', 'O‘zbekistondan kelgan, Berlinda yashaydi', 'Rossiyadan kelgan, Venada yashaydi', 'Germaniyadan kelgan, Rimda yashaydi'],
            correctIndex: 1,
            explanationUz: 'Matnda "komme aus Usbekistan. Jetzt wohne ich in Berlin" deyilgan.'
          },
          {
            id: 'rq-m1-2',
            questionUz: 'Temur universitetda qaysi tilni o‘rganmoqda?',
            options: ['Ingliz tili', 'Nemis tili', 'Fransuz tili', 'Italiya tili'],
            correctIndex: 1,
            explanationUz: 'Matnda "und lerne Deutsch an der Universität" deb ta‘kidlangan.'
          }
        ]
      }
    ],
    writingScaffold: {
      taskTitleUz: 'O‘zingiz haqingizda qisqa tanishtiruv yozish',
      promptUz: 'Nemis tili kursidagi doskaga o‘zingiz haqingizda 4 ta jumladan iborat qisqa xat yozing.',
      taskInstructionsUz: 'Quyidagi reja asosida yozing:\n1. Salomlashing (Hallo / Guten Tag)\n2. Ismingizni ayting (Ich heiße...)\n3. Kelib chiqish mamlakatingiz va yashash shahringiz (Ich komme aus... / Ich wohne in...)\n4. Gapiradigan tillaringiz (Ich spreche...)',
      controlledScaffolding: {
        stepTitleUz: 'Tayyor jumla boshlovchilari (Sentence Starters):',
        sentenceStarters: [
          'Guten Tag! Mein Name ist...',
          'Ich komme aus...',
          'Jetzt wohne ich in...',
          'Ich spreche Usbekisch und...'
        ],
        fillInGaps: [
          {
            promptUz: 'O‘z ismingizni qo‘ying:',
            template: 'Ich heiße [Ismingiz].',
            sampleCompletion: 'Ich heiße Sardor.'
          },
          {
            promptUz: 'Yashash joyingizni qo‘ying:',
            template: 'Ich wohne in [Shahringiz].',
            sampleCompletion: 'Ich wohne in Taschkent.'
          }
        ]
      },
      usefulVocabulary: [
        { german: 'Guten Tag / Hallo', uzbek: 'Xayrli kun / Salom' },
        { german: 'heißen / mein Name ist', uzbek: 'ismim ...' },
        { german: 'kommen aus', uzbek: '...dan kelganman' },
        { german: 'wohnen in', uzbek: '...da yashayman' },
        { german: 'sprechen', uzbek: 'gapirmoq' }
      ],
      modelAnswerDe: 'Guten Tag! Ich heiße Anvar. Ich komme aus Usbekistan und wohne in Samarkand. Ich spreche Usbekisch, Russisch und lerne Deutsch. Freut mich!',
      modelAnswerUz: 'Xayrli kun! Mening ismim Anvar. Men O‘zbekistondanman va Samarqandda yashayman. Men o‘zbek, rus tillarida gapiraman va nemis tilini o‘rganmoqdaman. Tanishganimdan xursandman!'
    },
    shadowing: [
      {
        id: 'sha-m1-1',
        lessonId: 'les-1',
        levelCode: 'a1-1',
        sentenceDe: 'Guten Tag! Ich heiße Sardor und komme aus Usbekistan.',
        translationUz: 'Xayrli kun! Mening ismim Sardor va men O‘zbekistondanman.',
        phoneticHint: '[Gu:tn tak! Iç hay-se Sar-dor unt kom-me aus Us-be-kis-tan.]',
        orderIndex: 1
      },
      {
        id: 'sha-m1-2',
        lessonId: 'les-1',
        levelCode: 'a1-1',
        sentenceDe: 'Wie heißen Sie und woher kommen Sie?',
        translationUz: 'Ismingiz nima va siz qayerdansiz?',
        phoneticHint: '[Vi: hay-sen Zi: unt vo-her kom-men Zi:?]',
        orderIndex: 2
      },
      {
        id: 'sha-m1-3',
        lessonId: 'les-1',
        levelCode: 'a1-1',
        sentenceDe: 'Ich spreche Usbekisch und lerne jetzt Deutsch.',
        translationUz: 'Men o‘zbekcha gapiraman va hozir nemis tilini o‘rganyapman.',
        phoneticHint: '[Iç shpre-çe Us-be-kish unt ler-ne yetst Doytch.]',
        orderIndex: 3
      },
      {
        id: 'sha-m1-4',
        lessonId: 'les-1',
        levelCode: 'a1-1',
        sentenceDe: 'Auf Wiedersehen und bis bald!',
        translationUz: 'Ko‘rishguncha xayr va tez orada ko‘rishguncha!',
        phoneticHint: '[Auf Vi:-der-ze:-en unt bis balt!]',
        orderIndex: 4
      }
    ],
    practice: [
      {
        id: 'ex-m1-1',
        lessonId: 'les-1',
        type: 'multiple-choice',
        questionUz: '"Woher kommst du?" savoliga eng to‘g‘ri javob qaysi?',
        options: ['Ich komme aus Usbekistan.', 'Ich wohne in Taschkent.', 'Ich heiße Jasur.', 'Ich spreche Deutsch.'],
        correctAnswer: 'Ich komme aus Usbekistan.',
        explanationUz: '"Woher?" (Qayerdan?) so‘rog‘iga "kommen aus..." (kelib chiqish) bilan javob beriladi.',
        mistakeTipUz: '❌ Yashash joyi uchun "wohnen in", kelib chiqish uchun esa "kommen aus" ishlatiladi.'
      },
      {
        id: 'ex-m1-2',
        lessonId: 'les-1',
        type: 'fill-blank',
        questionUz: '"wohnen" fe‘lining "du" shaxsiga mos shaklini qo‘ying:',
        blankSentence: 'Wo [blank] du?',
        options: ['wohnst', 'wohne', 'wohnt', 'wohnen'],
        correctAnswer: 'wohnst',
        explanationUz: '"du" shaxsida fe‘l negiziga "-st" qo‘shiladi: "wohnst".',
        mistakeTipUz: '❌ "du" bilan fe‘l doimo "-st" oladi: du wohnst, du kommst.'
      },
      {
        id: 'ex-m1-3',
        lessonId: 'les-1',
        type: 'word-order',
        questionUz: 'So‘zlarni to‘g‘ri tartibda joylashtiring (Fe‘l 2-o‘rinda turishi shart!):',
        scrambledWords: ['in', 'wohne', 'Ich', 'Berlin'],
        correctAnswer: 'Ich wohne in Berlin',
        explanationUz: 'Darak gap qoidasi: Ich (1) + wohne (2) + in Berlin (3).',
        mistakeTipUz: '❌ Nemis tilida tuslangan fe‘l qat‘iy ravishda 2-o‘rinda turadi.'
      },
      {
        id: 'ex-m1-4',
        lessonId: 'les-1',
        type: 'matching',
        questionUz: 'Savol va javoblarni to‘g‘ri moslashtiring:',
        pairs: [
          { left: 'Wie heißen Sie?', right: 'Ich heiße Laura.' },
          { left: 'Woher kommen Sie?', right: 'Aus Deutschland.' },
          { left: 'Wo wohnen Sie?', right: 'In München.' },
          { left: 'Welche Sprachen sprechen Sie?', right: 'Deutsch und Englisch.' }
        ],
        correctAnswer: null,
        explanationUz: 'Barcha savol va javoblar mantiqan to‘g‘ri juftlandi.'
      }
    ],
    listening: [],
    writing: []
  },

  // ==========================================
  // LEKTION 2: Ich bin Journalistin (Berufe & sein)
  // ==========================================
  {
    id: 'les-2',
    moduleId: 'mod-1',
    levelCode: 'a1-1',
    titleDe: 'Lektion 2: Ich bin Journalistin',
    titleUz: '2-Dars: Men jurnalistman (Kasblar va "sein" fe‘li)',
    descriptionUz: 'Kasblar, erkak va ayol kasb nomlari (-in), "sein" (bo‘lmoq) fe‘lining tuslanishi, inkor "nicht" va Ja/Nein savollari.',
    orderIndex: 2,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Kasbingiz va mashg‘ulotingiz haqida so‘rash va gapirish',
      'Erkak va ayol kasb nomlari farqini bilish (-in qo‘shimchasi)',
      '"sein" (bo‘lmoq) fe‘lini to‘g‘ri tuslash va "nicht" bilan inkor qilish'
    ],
    warmUp: {
      situationUz: 'Yangi tanishingiz bilan kofexanada suhbatlashyapsiz. U sizning kasbingiz nima ekanligini so‘radi.',
      curiosityQuestionUz: 'Nemis tilida nima sababdan "Men o‘qituvchiman" deganda "Ich bin ein Lehrer" deb noaniq artikl ishlatilmaydi?',
      miniDialogue: [
        { speaker: 'Thomas', textDe: 'Was bist du von Beruf?', textUz: 'Kasbing nima?' },
        { speaker: 'Malika', textDe: 'Ich bin Ärztin. Und du?', textUz: 'Men shifokorman (ayol). Sendachi?' },
        { speaker: 'Thomas', textDe: 'Ich bin Ingenieur bei Siemens.', textUz: 'Men Siemens kompaniyasida muhandisman.' }
      ],
      hintUz: 'Nemis tilida kasblar to‘g‘ridan-to‘g‘ri artiklsiz aytiladi: Ich bin Lehrer / Ich bin Student.'
    },
    contextDialogue: {
      titleDe: 'Auf einer Konferenz',
      titleUz: 'Konferensiyada tanishuv',
      situationUz: 'Frankfurtdagi xalqaro ko‘rgazmada ikki mutaxassis o‘zaro tashrif qog‘ozi almashmoqda.',
      lines: [
        { speaker: 'Herr Fischer', textDe: 'Guten Tag! Sind Sie Frau Alimova?', textUz: 'Xayrli kun! Siz xonim Olimovamisiz?' },
        { speaker: 'Frau Alimova', textDe: 'Ja, genau. Ich bin Gulnoza Alimova.', textUz: 'Ha, xuddi shunday. Men Gulnoza Olimovaman.' },
        { speaker: 'Herr Fischer', textDe: 'Sehr angenehm! Was sind Sie von Beruf?', textUz: 'Juda yoqimli! Kasbingiz nima?' },
        { speaker: 'Frau Alimova', textDe: 'Ich bin Journalistin. Ich arbeite für ein Medienunternehmen. Und was machen Sie?', textUz: 'Men jurnalistman. Media korxonasida ishlayman. Siz nima ish qilasiz?' },
        { speaker: 'Herr Fischer', textDe: 'Ich bin Informatiker bei Bosch.', textUz: 'Men Bosch kompaniyasida dasturchi/IT mutaxassisiman.' },
        { speaker: 'Frau Alimova', textDe: 'Sind Sie verheiratet?', textUz: 'Oilalimisiz?' },
        { speaker: 'Herr Fischer', textDe: 'Nein, ich bin nicht verheiratet, ich bin ledig.', textUz: 'Yo‘q, men uylanmaganman, bo‘ydoqman.' }
      ],
      usefulPhrases: [
        { german: 'Was sind Sie von Beruf?', uzbek: 'Kasbingiz nima? (rasmiy)' },
        { german: 'Was bist du von Beruf?', uzbek: 'Kasbing nima? (norasmiy)' },
        { german: 'Ich arbeite als... bei...', uzbek: 'Men ...da ... bo‘lib ishlayman' },
        { german: 'Ich bin Student / Studentin.', uzbek: 'Men talabaman.' },
        { german: 'ledig / verheiratet', uzbek: 'bo‘ydoq (turmush qurmagan) / oilali' }
      ],
      culturalNoteUz: 'Nemis tilida ayollar kasbiga doimo "-in" qo‘shiladi: der Lehrer -> die Lehrerin, der Arzt -> die Ärztin.'
    },
    vocabulary: [
      {
        id: 'voc-m1-11',
        lessonId: 'les-2',
        levelCode: 'a1-1',
        german: 'der Beruf',
        article: 'der',
        plural: 'die Berufe',
        uzbek: 'kasb, mutaxassislik',
        exampleDe: 'Was bist du von Beruf?',
        exampleUz: 'Kasbing nima?',
        wordType: 'noun'
      },
      {
        id: 'voc-m1-12',
        lessonId: 'les-2',
        levelCode: 'a1-1',
        german: 'der Lehrer',
        article: 'der',
        plural: 'die Lehrer',
        uzbek: 'o‘qituvchi (erkak)',
        exampleDe: 'Herr Becker ist Lehrer.',
        exampleUz: 'Janob Bekker o‘qituvchi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m1-13',
        lessonId: 'les-2',
        levelCode: 'a1-1',
        german: 'die Lehrerin',
        article: 'die',
        plural: 'die Lehrerinnen',
        uzbek: 'o‘qituvchi (ayol)',
        exampleDe: 'Frau Klein ist Lehrerin.',
        exampleUz: 'Xonim Klayn o‘qituvchi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m1-14',
        lessonId: 'les-2',
        levelCode: 'a1-1',
        german: 'der Arzt',
        article: 'der',
        plural: 'die Ärzte',
        uzbek: 'shifokor, vrach (erkak)',
        exampleDe: 'Der Arzt untersucht den Patienten.',
        exampleUz: 'Shifokor bemorni ko‘rikdan o‘tkazyapti.',
        wordType: 'noun'
      },
      {
        id: 'voc-m1-15',
        lessonId: 'les-2',
        levelCode: 'a1-1',
        german: 'die Ärztin',
        article: 'die',
        plural: 'die Ärztinnen',
        uzbek: 'shifokor (ayol)',
        exampleDe: 'Meine Schwester ist Ärztin.',
        exampleUz: 'Mening opam shifokor.',
        wordType: 'noun'
      },
      {
        id: 'voc-m1-16',
        lessonId: 'les-2',
        levelCode: 'a1-1',
        german: 'arbeiten als',
        article: null,
        plural: null,
        uzbek: '... bo‘lib ishlamoq',
        exampleDe: 'Ich arbeite als Ingenieur.',
        exampleUz: 'Men muhandis bo‘lib ishlayman.',
        wordType: 'verb'
      },
      {
        id: 'voc-m1-17',
        lessonId: 'les-2',
        levelCode: 'a1-1',
        german: 'der Student',
        article: 'der',
        plural: 'die Studenten',
        uzbek: 'talaba (erkak)',
        exampleDe: 'Er ist Student an der TU Berlin.',
        exampleUz: 'U Berlin Texnika Universitetida talaba.',
        wordType: 'noun'
      },
      {
        id: 'voc-m1-18',
        lessonId: 'les-2',
        levelCode: 'a1-1',
        german: 'die Studentin',
        article: 'die',
        plural: 'die Studentinnen',
        uzbek: 'talaba (qiz/ayol)',
        exampleDe: 'Nodira ist Studentin.',
        exampleUz: 'Nodira talaba.',
        wordType: 'noun'
      },
      {
        id: 'voc-m1-19',
        lessonId: 'les-2',
        levelCode: 'a1-1',
        german: 'ledig',
        article: null,
        plural: null,
        uzbek: 'bo‘ydoq / turmushga chiqmagan',
        exampleDe: 'Bist du verheiratet? - Nein, ich bin ledig.',
        exampleUz: 'Uylanganmisan? - Yo‘q, bo‘ydoqman.',
        wordType: 'adjective'
      },
      {
        id: 'voc-m1-20',
        lessonId: 'les-2',
        levelCode: 'a1-1',
        german: 'verheiratet',
        article: null,
        plural: null,
        uzbek: 'turmush qurgan, oilali',
        exampleDe: 'Wir sind seit fünf Jahren verheiratet.',
        exampleUz: 'Biz besh yildan beri oilalimiz.',
        wordType: 'adjective'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'Ushbu gaplardagi "sein" fe‘liga e‘tibor bering. Nega u o‘zagi butunlay o‘zgarib ketadi?',
      discoveryExamples: [
        { german: 'Ich bin Journalist.', highlight: 'bin', uzbek: 'Men jurnalistman.' },
        { german: 'Du bist Student.', highlight: 'bist', uzbek: 'Sen talabasan.' },
        { german: 'Er ist Arzt. Wir sind Kollegen.', highlight: 'ist / sind', uzbek: 'U shifokor. Biz hamkasbmiz.' }
      ],
      patternExplanationUz: '"sein" (bo‘lmoq) fe‘li noto‘g‘ri (tartibsiz) fe‘l bo‘lib, ingliz tilidagi "to be" kabi har bir shaxsda mustaqil shaklga ega.',
      ruleFormulaUz: 'sein: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind'
    },
    grammar: [
      {
        id: 'gra-m1-2',
        lessonId: 'les-2',
        levelCode: 'a1-1',
        titleDe: 'Das Verb "sein" & Negation mit "nicht"',
        titleUz: '"sein" fe‘li va "nicht" inkor yuklamasi',
        summaryUz: '"sein" fe‘li kasb, holat va sifatlarni bildiradi. "nicht" esa fe‘l va sifatlarni inkor qilishda ishlatiladi.',
        explanationUz: `**1. "sein" (bo‘lmoq) fe‘li:**
Nemis tilida holat va kasb aytganda "sein" fe‘li tushirib qoldirilmaydi (o‘zbek tilida "Men o‘qituvchiman" deyilsa, nemis tilida "Men o‘qituvchi BO‘LAMAN" — *Ich bin Lehrer* deyilishi shart).

**2. Ja/Nein-Fragen (Umumiy so‘roq gaplar):**
So‘roq gapda tuslangan fe‘l **1-o‘ringa** chiqadi:
- *Sind Sie Herr Fischer?* (Siz janob Fishermisiz?) -> *Ja, ich bin Herr Fischer.* / *Nein, ich bin nicht Herr Fischer.*

**3. "nicht" bilan inkor qilish:**
Sifatlar, fe‘llar va aniq otlarni inkor qilishda **nicht** ishlatiladi:
- *Ich bin **nicht** verheiratet.* (Men oilali emasman.)
- *Das ist **nicht** richtig.* (Bu to‘g‘ri emas.)`,
        wordOrderRuleUz: 'Ja/Nein savollarida tuslangan fe‘l 1-o‘rinda keladi: "Sind (1) Sie (2) Arzt?"',
        tables: [
          {
            title: 'sein fe‘lining tuslanishi',
            headers: ['Shaxs', 'sein shakli', 'Namuna', 'Tarjimasi'],
            rows: [
              ['ich', 'bin', 'Ich bin Arzt.', 'Men shifokorman.'],
              ['du', 'bist', 'Du bist Student.', 'Sen talabasan.'],
              ['er / sie / es', 'ist', 'Er ist Ingenieur.', 'U muhandis.'],
              ['wir', 'sind', 'Wir sind Kollegen.', 'Biz hamkasblarmiz.'],
              ['ihr', 'seid', 'Seid ihr Lehrer?', 'Sizlar o‘qituvchimisiz?'],
              ['sie / Sie', 'sind', 'Sie sind Journalistin.', 'Siz jurnalistsiz.']
            ]
          }
        ],
        examples: [
          { german: 'Ich bin nicht müde.', uzbek: 'Men charchagan emasman.', highlight: 'nicht' },
          { german: 'Bist du verheiratet?', uzbek: 'Uylanganmisan?', highlight: 'Bist' },
          { german: 'Er arbeitet als Architekt.', uzbek: 'U arxitektor bo‘lib ishlaydi.', highlight: 'arbeitet als' }
        ],
        commonMistakes: [
          {
            incorrect: 'Ich Lehrer.',
            correct: 'Ich bin Lehrer.',
            explanationUz: 'Nemis tilida "sein" fe‘li hech qachon tushirib qoldirilmaydi.'
          },
          {
            incorrect: 'Ihr sind Studenten.',
            correct: 'Ihr seid Studenten.',
            explanationUz: '"ihr" (sizlar) shaxsi uchun "sein" fe‘li "seid" bo‘ladi: ihr seid.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Wer ist das? Was macht er?',
      titleUz: 'Bu kim? U nima ish qiladi?',
      situationUz: 'Kompaniya xodimlari yangi kelgan hamkasblari haqida gaplashmoqda.',
      audioTranscriptDe: 'Julia: Wer ist der Mann dort? Ist das Herr Wagner?\nFlorian: Nein, das ist nicht Herr Wagner. Das ist Jan Novak.\nJulia: Was ist er von Beruf? Ist er auch Informatiker?\nFlorian: Nein, er ist nicht Informatiker. Er ist Journalist und arbeitet für unsere Marketingabteilung.\nJulia: Ist er verheiratet?\nFlorian: Nein, er ist ledig.',
      translationUz: 'Yuliya: Anavi kishi kim? Bu janob Vagnermi?\nFlorian: Yo‘q, bu janob Vagner emas. Bu Yan Novak.\nYuliya: Uning kasbi nima? U ham IT mutaxassisimi?\nFlorian: Yo‘q, u IT mutaxassisi emas. U jurnalist va bizning marketing bo‘limimizda ishlaydi.\nYuliya: U oilalimi?\nFlorian: Yo‘q, u bo‘ydoq.',
      stage1Global: {
        instructionUz: '1-Bosqich: Suhbatdoshlar kim haqida gaplashayotganini tushuning.',
        questionUz: 'Jan Novak kim va uning kasbi nima?',
        options: ['U shifokor', 'U jurnalist', 'U IT mutaxassisi', 'U o‘qituvchi'],
        correctIndex: 1,
        explanationUz: 'Florian "Er ist Journalist und arbeitet für unsere Marketingabteilung" dedi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Aniq tafsilotlarni belgilang.',
        questions: [
          {
            id: 'l2-q1',
            questionUz: 'Jan Novak oilalimi?',
            options: ['Ha, oilali', 'Yo‘q, u ledig (bo‘ydoq)', 'Ajrashgan', 'Aytilmagan'],
            correctIndex: 1,
            explanationUz: 'Florian "Nein, er ist ledig" deb javob berdi.'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Julia', textDe: 'Was ist er von Beruf?', textUz: 'Uning kasbi nima?' },
          { speaker: 'Florian', textDe: 'Er ist Journalist.', textUz: 'U jurnalist.' }
        ],
        keyVocabulary: [
          { german: 'von Beruf', uzbek: 'kasbi bo‘yicha' },
          { german: 'die Marketingabteilung', uzbek: 'marketing bo‘limi' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-m1-2',
        lessonId: 'les-2',
        titleDe: 'Visitenkarte & Kurzprofil',
        titleUz: 'Tashrif qog‘ozi va qisqa profil',
        textDe: 'Hallo! Mein Name ist Sarah Klein. Ich bin 28 Jahre alt und wohne in Frankfurt. Ich bin Architektin von Beruf und arbeite bei einer Baufirma. Mein Beruf ist sehr interessant. Ich bin nicht verheiratet, aber ich habe einen Hund. In meiner Freizeit lese ich gern Bücher.',
        translationUz: 'Salom! Mening ismim Sara Klayn. Men 28 yoshdaman va Frankfurtda yashayman. Men kasbim bo‘yicha arxitektorman va qurilish firmasining xodimiman. Kasbim juda qiziqarli. Men turmushga chiqmaganman, lekin kuchugim bor. Bo‘sh vaqtimda kitob o‘qishni yaxshi ko‘raman.',
        vocabularyHints: [
          { german: 'die Architektin', uzbek: 'arxitektor (ayol)' },
          { german: 'die Baufirma', uzbek: 'qurilish korxonasi' },
          { german: 'der Hund', uzbek: 'kuchuk, it' }
        ],
        questions: [
          {
            id: 'rq-m1-3',
            questionUz: 'Sarah Klein qayerda va kim bo‘lib ishlaydi?',
            options: ['Maktabda o‘qituvchi', 'Kasalxonada shifokor', 'Qurilish firmasining arxitektori', 'Bankda iqtisodchi'],
            correctIndex: 2,
            explanationUz: 'Matnda "Ich bin Architektin von Beruf und arbeite bei einer Baufirma" deyilgan.'
          }
        ]
      }
    ],
    writingScaffold: {
      taskTitleUz: 'O‘z kasbingiz haqida yozish',
      promptUz: 'O‘zingizning yoki do‘stingizning kasbi, qayerda ishlashi va oilaviy holati haqida 3-4 jumla yozing.',
      taskInstructionsUz: '1. Ismni ayting\n2. Kasbni ayting (Ich bin... / Ich arbeite als...)\n3. Ishlaydigan korxona yoki o‘qish joyini ayting\n4. Oilaviy holatni bildiring (ledig / verheiratet)',
      controlledScaffolding: {
        stepTitleUz: 'Jumla shablonlari:',
        sentenceStarters: [
          'Ich bin von Beruf...',
          'Ich arbeite bei...',
          'Ich bin (nicht) verheiratet.'
        ]
      },
      usefulVocabulary: [
        { german: 'der Beruf', uzbek: 'kasb' },
        { german: 'arbeiten als', uzbek: '... bo‘lib ishlamoq' },
        { german: 'bei (Firma)', uzbek: '...(kompaniya)da' }
      ],
      modelAnswerDe: 'Ich heiße Rustam. Ich bin Ingenieur von Beruf. Ich arbeite bei einem IT-Unternehmen in Taschkent. Ich bin verheiratet.',
      modelAnswerUz: 'Mening ismim Rustam. Men kasbim bo‘yicha muhandisman. Men Toshkentdagi IT korxonasida ishlayman. Men oilaliman.'
    },
    shadowing: [
      {
        id: 'sha-m1-5',
        lessonId: 'les-2',
        levelCode: 'a1-1',
        sentenceDe: 'Was sind Sie von Beruf? - Ich bin Ingenieur.',
        translationUz: 'Kasbingiz nima? - Men muhandisman.',
        phoneticHint: '[Vas zint Zi: fon Be-ruf? - Iç bin In-je-nyø:r.]',
        orderIndex: 1
      },
      {
        id: 'sha-m1-6',
        lessonId: 'les-2',
        levelCode: 'a1-1',
        sentenceDe: 'Sind Sie verheiratet? - Nein, ich bin ledig.',
        translationUz: 'Oilalimisiz? - Yo‘q, men bo‘ydoqman.',
        phoneticHint: '[Zint Zi: fer-hay-ra-tet? - Nayn, iç bin le:-diç.]',
        orderIndex: 2
      }
    ],
    practice: [
      {
        id: 'ex-m1-5',
        lessonId: 'les-2',
        type: 'fill-blank',
        questionUz: '"sein" fe‘lining to‘g‘ri shaklini qo‘ying: "Wir _____ Studenten an der Universität."',
        blankSentence: 'Wir [blank] Studenten an der Universität.',
        options: ['sind', 'seid', 'ist', 'bin'],
        correctAnswer: 'sind',
        explanationUz: '"wir" (biz) bilan "sein" fe‘li "sind" bo‘ladi: "wir sind".',
        mistakeTipUz: '❌ "wir" shaxsi uchun doimo "sind" ishlatiladi.'
      },
      {
        id: 'ex-m1-6',
        lessonId: 'les-2',
        type: 'multiple-choice',
        questionUz: 'Ayol shifokor nemis tilida qanday nomlanadi?',
        options: ['der Arzt', 'die Ärztin', 'die Arzt', 'das Ärztin'],
        correctAnswer: 'die Ärztin',
        explanationUz: 'Ayol kasb egalariga "-in" qo‘shimchasi va "die" artikli beriladi: die Ärztin.',
        mistakeTipUz: '❌ Ayol kasb nomlari doimo "die" artikli va "-in" qo‘shimchasi bilan yasaladi.'
      }
    ],
    listening: [],
    writing: []
  },

  // ==========================================
  // LEKTION 3: Das ist meine Familie (Familie & haben)
  // ==========================================
  {
    id: 'les-3',
    moduleId: 'mod-1',
    levelCode: 'a1-1',
    titleDe: 'Lektion 3: Das ist meine Familie',
    titleUz: '3-Dars: Bu mening oilam (Oila a‘zolari, "haben" fe‘li va egalik olmoshlari)',
    descriptionUz: 'Oila a‘zolari va qarindoshlar, "mein/dein" egalik olmoshlari, "haben" (ega bo‘lmoq) fe‘li va 0 dan 100 gacha sonlar.',
    orderIndex: 3,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Oila a‘zolaringizni tanishtirish (Vater, Mutter, Bruder, Schwester)',
      '"mein / meine" va "dein / deine" egalik olmoshlarini to‘g‘ri qo‘llash',
      '"haben" fe‘lini tuslash va 0 dan 100 gacha sonlarni aytish'
    ],
    warmUp: {
      situationUz: 'Telefoningizdagi oilaviy fotosuratni nemis do‘stingizga ko‘rsatyapsiz. U oilangiz a‘zolari bilan qiziqmoqda.',
      curiosityQuestionUz: 'Nima uchun erkak qarindoshga "mein Vater", ayol qarindoshga esa "meine Mutter" (-e qo‘shimchasi) deyiladi?',
      miniDialogue: [
        { speaker: 'Lukas', textDe: 'Wer ist das auf dem Foto?', textUz: 'Fotosuratdagi bu kim?' },
        { speaker: 'Sardor', textDe: 'Das ist mein Bruder. Er heißt Farhod.', textUz: 'Bu mening akam. Uning ismi Farhod.' },
        { speaker: 'Lukas', textDe: 'Und hast du auch Geschwister?', textUz: 'Aka-uka yoki opa-singillaring bormi?' },
        { speaker: 'Sardor', textDe: 'Ja, ich habe zwei Schwestern und einen Bruder.', textUz: 'Ha, mening ikkita singlim va bitta akam bor.' }
      ],
      hintUz: 'Nemis tilida "Geschwister" so‘zi barcha aka-uka va opa-singillarni birgalikda anglatadi.'
    },
    contextDialogue: {
      titleDe: 'Familienalbum',
      titleUz: 'Oilaviy fotoalbom',
      situationUz: 'Elena o‘zbekistonlik dugonasi Nilufarga o‘z oilasi haqida so‘zlab bermoqda.',
      lines: [
        { speaker: 'Nilufar', textDe: 'Elena, ist das deine Familie?', textUz: 'Elena, bu sening oilangmi?' },
        { speaker: 'Elena', textDe: 'Ja, das sind meine Eltern: mein Vater Thomas und meine Mutter Sabine.', textUz: 'Ha, bular mening ota-onam: otam Tomas va onam Zabine.' },
        { speaker: 'Nilufar', textDe: 'Wie alt sind deine Eltern?', textUz: 'Ota-onang necha yoshda?' },
        { speaker: 'Elena', textDe: 'Mein Vater ist 52 Jahre alt und meine Mutter ist 48.', textUz: 'Otam 52 yoshda, onam esa 48 yoshda.' },
        { speaker: 'Nilufar', textDe: 'Hast du auch Kinder?', textUz: 'Farzandlaring bormi?' },
        { speaker: 'Elena', textDe: 'Ja, ich habe einen Sohn. Er ist vier Jahre alt.', textUz: 'Ha, mening bitta o‘g‘lim bor. U to‘rt yoshda.' },
        { speaker: 'Nilufar', textDe: 'Wie süß! Und wo wohnen deine Großeltern?', textUz: 'Qanday yoqimtoy! Bobo-buving qayerda yashashadi?' },
        { speaker: 'Elena', textDe: 'Meine Großeltern wohnen in Hamburg.', textUz: 'Bobo-buvim Gamburgda yashashadi.' }
      ],
      usefulPhrases: [
        { german: 'Das ist mein Vater / meine Mutter.', uzbek: 'Bu mening otam / onam.' },
        { german: 'Hast du Geschwister / Kinder?', uzbek: 'Aka-ukalaring / bolalaring bormi?' },
        { german: 'Ich habe...', uzbek: 'Menda ... bor' },
        { german: 'Wie alt bist du / sind Sie?', uzbek: 'Yoshingiz nechida?' },
        { german: 'Ich bin ... Jahre alt.', uzbek: 'Men ... yoshdaman.' }
      ],
      culturalNoteUz: 'Nemis tilida yosh aytganda "haben" emas, "sein" ishlatiladi: Ich bin 20 Jahre alt (Men 20 yoshdaman).'
    },
    vocabulary: [
      {
        id: 'voc-m1-21',
        lessonId: 'les-3',
        levelCode: 'a1-1',
        german: 'die Familie',
        article: 'die',
        plural: 'die Familien',
        uzbek: 'oila',
        exampleDe: 'Meine Familie ist groß.',
        exampleUz: 'Mening oilam katta.',
        wordType: 'noun'
      },
      {
        id: 'voc-m1-22',
        lessonId: 'les-3',
        levelCode: 'a1-1',
        german: 'der Vater',
        article: 'der',
        plural: 'die Väter',
        uzbek: 'ota',
        exampleDe: 'Mein Vater arbeitet viel.',
        exampleUz: 'Otam ko‘p ishlaydi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m1-23',
        lessonId: 'les-3',
        levelCode: 'a1-1',
        german: 'die Mutter',
        article: 'die',
        plural: 'die Mütter',
        uzbek: 'ona',
        exampleDe: 'Meine Mutter kocht sehr gut.',
        exampleUz: 'Onam juda shirin ovqat pishiradi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m1-24',
        lessonId: 'les-3',
        levelCode: 'a1-1',
        german: 'die Eltern',
        article: 'die',
        plural: 'die Eltern',
        uzbek: 'ota-ona (doimo ko‘plikda)',
        exampleDe: 'Meine Eltern leben in Taschkent.',
        exampleUz: 'Ota-onam Toshkentda yashashadi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m1-25',
        lessonId: 'les-3',
        levelCode: 'a1-1',
        german: 'der Bruder',
        article: 'der',
        plural: 'die Brüder',
        uzbek: 'aka, uka',
        exampleDe: 'Ich habe einen Bruder.',
        exampleUz: 'Mening akam bor.',
        wordType: 'noun'
      },
      {
        id: 'voc-m1-26',
        lessonId: 'les-3',
        levelCode: 'a1-1',
        german: 'die Schwester',
        article: 'die',
        plural: 'die Schwestern',
        uzbek: 'opa, singil',
        exampleDe: 'Meine Schwester studiert Medizin.',
        exampleUz: 'Mening singlim tibbiyotda o‘qiydi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m1-27',
        lessonId: 'les-3',
        levelCode: 'a1-1',
        german: 'die Geschwister',
        article: 'die',
        plural: 'die Geschwister',
        uzbek: 'aka-uka va opa-singillar',
        exampleDe: 'Hast du Geschwister?',
        exampleUz: 'Aka-uka yoki opa-singillaring bormi?',
        wordType: 'noun'
      },
      {
        id: 'voc-m1-28',
        lessonId: 'les-3',
        levelCode: 'a1-1',
        german: 'der Sohn',
        article: 'der',
        plural: 'die Söhne',
        uzbek: 'o‘g‘il (farzand)',
        exampleDe: 'Das ist mein Sohn Timur.',
        exampleUz: 'Bu mening o‘g‘lim Temur.',
        wordType: 'noun'
      },
      {
        id: 'voc-m1-29',
        lessonId: 'les-3',
        levelCode: 'a1-1',
        german: 'die Tochter',
        article: 'die',
        plural: 'die Töchter',
        uzbek: 'qiz (farzand)',
        exampleDe: 'Ihre Tochter ist sehr klug.',
        exampleUz: 'Ularning qizi juda aqlli.',
        wordType: 'noun'
      },
      {
        id: 'voc-m1-30',
        lessonId: 'les-3',
        levelCode: 'a1-1',
        german: 'haben',
        article: null,
        plural: null,
        uzbek: 'ega bo‘lmoq, bor bo‘lmoq',
        exampleDe: 'Ich habe Zeit.',
        exampleUz: 'Mening vaqtim bor.',
        wordType: 'verb'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'Egalik olmoshlari (mein/meine) va "haben" fe‘lining "du" va "er" shakliga e‘tibor bering:',
      discoveryExamples: [
        { german: 'mein Vater (der)', highlight: 'mein', uzbek: 'mening otam (muzskoy)' },
        { german: 'meine Mutter (die)', highlight: 'meine', uzbek: 'mening onam (jenskiy)' },
        { german: 'du hast / er hat', highlight: 'hast / hat', uzbek: 'senda bor / unda bor ("b" harfi tushib qoladi)' }
      ],
      patternExplanationUz: 'Muzskoy va Sredniy rod uchun "mein/dein", Jenskiy va Ko‘plik uchun esa "-e" qo‘shilib "meine/deine" bo‘ladi.',
      ruleFormulaUz: 'der/das -> mein/dein; die (birlik va ko‘plik) -> meine/deine'
    },
    grammar: [
      {
        id: 'gra-m1-3',
        lessonId: 'les-3',
        levelCode: 'a1-1',
        titleDe: 'Possessivartikel & Das Verb "haben"',
        titleUz: 'Egalik olmoshlari (mein/dein) va "haben" fe‘li',
        summaryUz: 'Kimning narsasi yoki qarindoshi ekanligini aytish uchun mein/meine va dein/deine ishlatiladi. haben fe‘li esa egalikni bildiradi.',
        explanationUz: `**1. Possessivartikel (Egalik olmoshlari):**
- **der** (Muzskoy): *mein Vater, dein Bruder*
- **das** (Sredniy): *mein Kind, dein Auto*
- **die** (Jenskiy): *meine Mutter, deine Schwester*
- **die** (Ko‘plik): *meine Eltern, deine Geschwister*

**2. "haben" (ega bo‘lmoq / bor bo‘lmoq) fe‘li:**
E‘tibor bering, "du" va "er/sie/es" shaxsida **b** harfi tushib qoladi:
- *ich habe*
- *du **hast*** (du habst EMAS!)
- *er/sie/es **hat*** (er habt EMAS!)
- *wir haben*
- *ihr habt*
- *sie/Sie haben*

**3. Zahlen von 0 bis 100:**
Nemis tilida 21 dan boshlab avval birlik, keyin o‘nlik aytiladi:
- 21 = einundzwanzig (bir va yigirma)
- 35 = fünfunddreißig (besh va o‘ttiz)
- 100 = (ein)hundert`,
        wordOrderRuleUz: 'haben fe‘lidan keyin doimo Akkusativ (tushum kelishigi) keladi: "Ich habe einen Bruder" (Muzskoyda einen bo‘ladi).',
        tables: [
          {
            title: 'Possessivartikel Nominativda',
            headers: ['Rod / Jins', 'Artikl', 'mening (mein)', 'sening (dein)'],
            rows: [
              ['Maskulin (muzskoy)', 'der', 'mein Bruder', 'dein Bruder'],
              ['Neutrum (sredniy)', 'das', 'mein Kind', 'dein Kind'],
              ['Feminin (jenskiy)', 'die', 'meine Schwester', 'deine Schwester'],
              ['Plural (ko‘plik)', 'die', 'meine Eltern', 'deine Eltern']
            ]
          }
        ],
        examples: [
          { german: 'Hast du Geschwister?', uzbek: 'Aka-ukalaring bormi?', highlight: 'Hast' },
          { german: 'Das ist meine Mutter.', uzbek: 'Bu mening onam.', highlight: 'meine' },
          { german: 'Er ist 25 Jahre alt.', uzbek: 'U 25 yoshda.', highlight: 'Jahre alt' }
        ],
        commonMistakes: [
          {
            incorrect: 'Das ist mein Mutter.',
            correct: 'Das ist meine Mutter.',
            explanationUz: '"die Mutter" ayol jinsida bo‘lgani uchun "meine" bo‘lishi shart.'
          },
          {
            incorrect: 'Du habt ein Kind.',
            correct: 'Du hast ein Kind.',
            explanationUz: '"du" uchun "hast" bo‘ladi: du hast.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Familienfest in Köln',
      titleUz: 'Kölndagi oilaviy bayram',
      situationUz: 'Oila a‘zolari bayram dasturxoni atrofida yig‘ilgan.',
      audioTranscriptDe: 'Maximilian: Hallo Lisa! Ist das dein Bruder?\nLisa: Ja, das ist mein Bruder David. Er ist 18 Jahre alt.\nMaximilian: Und hast du auch eine Schwester?\nLisa: Nein, ich habe keine Schwester, aber David und ich haben viele Cousins.\nMaximilian: Wo wohnen deine Eltern?\nLisa: Meine Eltern wohnen hier in Köln.',
      translationUz: 'Maksimilian: Salom Liza! Bu sening akangmi?\nLiza: Ha, bu mening akam Devid. U 18 yoshda.\nMaksimilian: Sening singling ham bormi?\nLiza: Yo‘q, singlim yo‘q, lekin Devid va ikkalamizning ko‘plab amakivachchalarimiz bor.\nMaksimilian: Ota-onang qayerda yashashadi?\nLiza: Ota-onam shu yerda Kölnda yashashadi.',
      stage1Global: {
        instructionUz: '1-Bosqich: Dialogni tinglab, kimlar haqida gap ketayotganini aniqlang.',
        questionUz: 'David kim?',
        options: ['Lizaning otasi', 'Lizaning akasi', 'Lizaning o‘g‘li', 'Lizaning do‘sti'],
        correctIndex: 1,
        explanationUz: 'Lisa "Ja, das ist mein Bruder David" dedi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Tafsilotlarni aniqlang.',
        questions: [
          {
            id: 'l3-q1',
            questionUz: 'David necha yoshda?',
            options: ['15 yoshda', '18 yoshda (achtzehn)', '20 yoshda', '25 yoshda'],
            correctIndex: 1,
            explanationUz: 'Lisa "Er ist 18 Jahre alt" deb aytdi.'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Maximilian', textDe: 'Ist das dein Bruder?', textUz: 'Bu sening akangmi?' },
          { speaker: 'Lisa', textDe: 'Ja, das ist mein Bruder David.', textUz: 'Ha, bu mening akam Devid.' }
        ],
        keyVocabulary: [
          { german: 'der Bruder', uzbek: 'aka/uka' },
          { german: 'achtzehn', uzbek: 'o‘n sakkiz' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-m1-3',
        lessonId: 'les-3',
        titleDe: 'Meine Familie stellt sich vor',
        titleUz: 'Mening oilam tanishtiruvda',
        textDe: 'Ich heiße Jasur und bin 20 Jahre alt. Meine Familie lebt in Taschkent. Mein Vater heißt Anvar und ist Ingenieur. Meine Mutter heißt Lola und ist Lehrerin. Ich habe zwei Geschwister: einen Bruder und eine Schwester. Mein Bruder heißt Sanjar, er ist 14. Meine Schwester Madina ist erst 8 Jahre alt. Wir haben auch eine Katze.',
        translationUz: 'Mening ismim Jasur va men 20 yoshdaman. Oilam Toshkentda yashaydi. Otamning ismi Anvar va u muhandis. Onamning ismi Lola va u o‘qituvchi. Mening ikkita jigarlarim bor: bitta uka va bitta singil. Ukamning ismi Sanjar, u 14 yoshda. Singlim Madina endigina 8 yoshda. Shuningdek bizning mushugimiz bor.',
        vocabularyHints: [
          { german: 'die Katze', uzbek: 'mushuk' },
          { german: 'erst', uzbek: 'endigina, hali endi' }
        ],
        questions: [
          {
            id: 'rq-m1-4',
            questionUz: 'Jasurning nechta aka-uka va opa-singillari bor?',
            options: ['Farzandi yo‘q', 'Bitta ukasi va bitta singlisi (jami 2 ta)', 'Uchta akasi', 'Faqat bitta opasi'],
            correctIndex: 1,
            explanationUz: 'Matnda "Ich habe zwei Geschwister: einen Bruder und eine Schwester" deb yozilgan.'
          }
        ]
      }
    ],
    writingScaffold: {
      taskTitleUz: 'O‘z oilangiz haqida matn yozish',
      promptUz: 'O‘z oilangiz, ota-onangiz va aka-ukalaringiz haqida 4-5 jumlali qisqa tavsif yozing.',
      taskInstructionsUz: '1. Oilangiz qayerda yashashini yozing\n2. Otangiz va onangiz ismini, kasbini ayting\n3. Aka-uka yoki opa-singlingiz bormi, yoshini yozing',
      controlledScaffolding: {
        stepTitleUz: 'Namuna jumlalar:',
        sentenceStarters: [
          'Meine Familie wohnt in...',
          'Mein Vater heißt... und ist...',
          'Meine Mutter heißt... und ist...',
          'Ich habe einen Bruder / eine Schwester...'
        ]
      },
      usefulVocabulary: [
        { german: 'die Familie', uzbek: 'oila' },
        { german: 'mein Vater / meine Mutter', uzbek: 'otam / onam' },
        { german: 'Geschwister', uzbek: 'aka-uka va opa-singillar' }
      ],
      modelAnswerDe: 'Meine Familie wohnt in Samarkand. Mein Vater heißt Rustam und ist Arzt. Meine Mutter heißt Dildora und ist Lehrerin. Ich habe eine Schwester, sie heißt Kamila und ist 16 Jahre alt.',
      modelAnswerUz: 'Mening oilam Samarqandda yashaydi. Otamning ismi Rustam va u shifokor. Onamning ismi Dildora va u o‘qituvchi. Mening bitta singlim bor, ismi Kamila va u 16 yoshda.'
    },
    shadowing: [
      {
        id: 'sha-m1-7',
        lessonId: 'les-3',
        levelCode: 'a1-1',
        sentenceDe: 'Das ist mein Vater und das ist meine Mutter.',
        translationUz: 'Bu mening otam va bu mening onam.',
        phoneticHint: '[Das ist mayn Fa:-ter unt das ist may-ne Mut-ter.]',
        orderIndex: 1
      },
      {
        id: 'sha-m1-8',
        lessonId: 'les-3',
        levelCode: 'a1-1',
        sentenceDe: 'Hast du Geschwister? - Ja, ich habe zwei Brüder.',
        translationUz: 'Aka-ukalaring bormi? - Ha, mening ikkita akam bor.',
        phoneticHint: '[Hast du Ge-shvis-ter? - Ya, iç ha:-be tsvay Bry:-der.]',
        orderIndex: 2
      }
    ],
    practice: [
      {
        id: 'ex-m1-7',
        lessonId: 'les-3',
        type: 'multiple-choice',
        questionUz: '"Bu mening singlim" jumlasining to‘g‘ri shakli qaysi?',
        options: ['Das ist mein Schwester.', 'Das ist meine Schwester.', 'Das ist dein Schwester.', 'Das ist mein Bruder.'],
        correctAnswer: 'Das ist meine Schwester.',
        explanationUz: '"Schwester" ayol jinsida (die Schwester) bo‘lgani uchun "meine Schwester" bo‘ladi.',
        mistakeTipUz: '❌ Ayol jinsidagi otlar oldidan "meine" ishlatiladi.'
      },
      {
        id: 'ex-m1-8',
        lessonId: 'les-3',
        type: 'fill-blank',
        questionUz: '"haben" fe‘lining to‘g‘ri shaklini qo‘ying: "Er _____ einen Sohn und eine Tochter."',
        blankSentence: 'Er [blank] einen Sohn und eine Tochter.',
        options: ['hat', 'hast', 'haben', 'habt'],
        correctAnswer: 'hat',
        explanationUz: '"er/sie/es" uchun "haben" fe‘li "hat" bo‘ladi.',
        mistakeTipUz: '❌ "er" uchun "hat" ishlatiladi: er hat.'
      }
    ],
    listening: [],
    writing: []
  }
];
