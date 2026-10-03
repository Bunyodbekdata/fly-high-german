import { Lesson } from '../../types/database';

export const MODULE_2_LESSONS: Lesson[] = [
  // ==========================================
  // LEKTION 4: Der Tisch ist schön! (Möbel, Farben & bestimmter Artikel)
  // ==========================================
  {
    id: 'les-4',
    moduleId: 'mod-2',
    levelCode: 'a1-1',
    titleDe: 'Lektion 4: Der Tisch ist schön!',
    titleUz: '4-Dars: Stol juda chiroyli! (Mebellar, ranglar va aniq artikllar)',
    descriptionUz: 'Mebel va buyumlar nomlari, nemis tilidagi aniq artikllar (der, das, die), kishilik olmoshlari (er, es, sie), ranglar va sifatlar.',
    orderIndex: 4,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Asosiy mebel va buyumlarni nemischa nomlash (Tisch, Stuhl, Bett, Sofa, Lampe, Schrank)',
      'Aniq artikllar (der, das, die) va ularning rodga mos olmoshlari (er, es, sie)ni qo‘llash',
      'Ranglar va sifatlar yordamida buyumlarni tasvirlash (schön, bequem, neu, alt, teuer, billig)'
    ],
    warmUp: {
      situationUz: 'IKEA yoki mebel do‘konida xonangiz uchun yangi jihozlar tanlayapsiz. Do‘stingiz bilan mebellarning ko‘rinishi va rangini muhokama qilmoqdasiz.',
      curiosityQuestionUz: 'Nemis tilida nega stolga "u" (er), kitobga "u" (es), lampaga "u" (sie) deb murojaat qilinadi?',
      miniDialogue: [
        { speaker: 'Lukas', textDe: 'Schau mal, der Tisch ist sehr schön!', textUz: 'Qara, bu stol juda chiroyli!' },
        { speaker: 'Sardor', textDe: 'Ja, er ist schön, aber er ist auch sehr teuer.', textUz: 'Ha, u chiroyli, lekin ayni paytda juda qimmat.' }
      ],
      hintUz: 'Nemis tilida har bir buyumning jinsi bor: der Tisch = er (u), das Bett = es (u), die Lampe = sie (u).'
    },
    contextDialogue: {
      titleDe: 'Im Möbelgeschäft',
      titleUz: 'Mebel do‘konida',
      situationUz: 'Lukas va Elena yangi talabalar yotoqxonasi uchun mebel xarid qilmoqda.',
      lines: [
        { speaker: 'Elena', textDe: 'Guck mal, Lukas! Wie findest du das Sofa hier?', textUz: 'Qara, Lukas! Mana bu divan haqida nima deysan?' },
        { speaker: 'Lukas', textDe: 'Das Sofa? Es ist sehr modern und bequem. Welche Farbe hat es?', textUz: 'Divanmi? U juda zamonaviy va qulay. U qanaqa rangda?' },
        { speaker: 'Elena', textDe: 'Es ist dunkelblau. Und schau mal den Stuhl an!', textUz: 'U to‘q ko‘k rangda. Anavi stulga ham qara!' },
        { speaker: 'Lukas', textDe: 'Der Stuhl ist nicht schlecht. Er ist praktisch. Was kostet er?', textUz: 'Stul yomon emas. U juda qulay (amaliy). Narxi qancha ekan?' },
        { speaker: 'Elena', textDe: 'Er kostet nur 45 Euro. Der Preis ist wirklich günstig!', textUz: 'U bor-yo‘g‘i 45 yevro turadi. Narxi haqiqatan ham arzon!' }
      ],
      usefulPhrases: [
        { german: 'Wie findest du...?', uzbek: '...ni qanday baholaysan / fikring qanday?' },
        { german: 'Der Tisch ist sehr schön / modern.', uzbek: 'Stol juda chiroyli / zamonaviy.' },
        { german: 'Was kostet der / das / die...?', uzbek: '...ning narxi qancha?' },
        { german: 'Er / Es / Sie ist teuer / billig / günstig.', uzbek: 'U qimmat / arzon / qulay narxda.' }
      ],
      culturalNoteUz: 'Germaniyada mebellar sifatli va uzoq vaqt xizmat qilishiga katta e‘tibor beriladi. "günstig" so‘zi "sifatiga yarasha arzon" degan ma‘noni bildiradi.'
    },
    vocabulary: [
      {
        id: 'voc-m2-1',
        lessonId: 'les-4',
        levelCode: 'a1-1',
        german: 'der Tisch',
        article: 'der',
        plural: 'die Tische',
        uzbek: 'stol',
        exampleDe: 'Der Tisch ist groß und braun.',
        exampleUz: 'Stol katta va jigarrang.',
        wordType: 'noun'
      },
      {
        id: 'voc-m2-2',
        lessonId: 'les-4',
        levelCode: 'a1-1',
        german: 'der Stuhl',
        article: 'der',
        plural: 'die Stühle',
        uzbek: 'stul',
        exampleDe: 'Der Stuhl ist sehr bequem.',
        exampleUz: 'Stul juda qulay.',
        wordType: 'noun'
      },
      {
        id: 'voc-m2-3',
        lessonId: 'les-4',
        levelCode: 'a1-1',
        german: 'das Bett',
        article: 'das',
        plural: 'die Betten',
        uzbek: 'karovot, yotoq',
        exampleDe: 'Das Bett ist neu.',
        exampleUz: 'Karovot yangi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m2-4',
        lessonId: 'les-4',
        levelCode: 'a1-1',
        german: 'das Sofa',
        article: 'das',
        plural: 'die Sofas',
        uzbek: 'divan',
        exampleDe: 'Das Sofa ist grün und weich.',
        exampleUz: 'Divan yashil va yumshoq.',
        wordType: 'noun'
      },
      {
        id: 'voc-m2-5',
        lessonId: 'les-4',
        levelCode: 'a1-1',
        german: 'die Lampe',
        article: 'die',
        plural: 'die Lampen',
        uzbek: 'chiroq, lampa',
        exampleDe: 'Die Lampe ist sehr hell.',
        exampleUz: 'Lampa juda yorug‘.',
        wordType: 'noun'
      },
      {
        id: 'voc-m2-6',
        lessonId: 'les-4',
        levelCode: 'a1-1',
        german: 'der Schrank',
        article: 'der',
        plural: 'die Schränke',
        uzbek: 'shkaf',
        exampleDe: 'Der Schrank ist aus Holz.',
        exampleUz: 'Shkaf yog‘ochdan yasalgan.',
        wordType: 'noun'
      },
      {
        id: 'voc-m2-7',
        lessonId: 'les-4',
        levelCode: 'a1-1',
        german: 'schön',
        article: null,
        plural: null,
        uzbek: 'chiroyli, go‘zal',
        exampleDe: 'Das Bild ist sehr schön.',
        exampleUz: 'Rasm juda chiroyli.',
        wordType: 'adjective'
      },
      {
        id: 'voc-m2-8',
        lessonId: 'les-4',
        levelCode: 'a1-1',
        german: 'teuer',
        article: null,
        plural: null,
        uzbek: 'qimmat',
        exampleDe: 'Das Auto ist zu teuer.',
        exampleUz: 'Mashina juda qimmat.',
        wordType: 'adjective'
      },
      {
        id: 'voc-m2-9',
        lessonId: 'les-4',
        levelCode: 'a1-1',
        german: 'billig',
        article: null,
        plural: null,
        uzbek: 'arzon',
        exampleDe: 'Der Stift ist billig.',
        exampleUz: 'Ruchka arzon.',
        wordType: 'adjective'
      },
      {
        id: 'voc-m2-10',
        lessonId: 'les-4',
        levelCode: 'a1-1',
        german: 'die Farbe',
        article: 'die',
        plural: 'die Farben',
        uzbek: 'rang',
        exampleDe: 'Welche Farbe gefällt dir?',
        exampleUz: 'Qaysi rang senga yoqadi?',
        wordType: 'noun'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'Quyidagi gaplarda mebel nomlari va ularning o‘rniga kelayotgan olmoshlarga e‘tibor bering:',
      discoveryExamples: [
        { german: 'Der Tisch ist alt. Er ist braun.', highlight: 'Der Tisch -> Er', uzbek: 'Stol eski. U jigarrang.' },
        { german: 'Das Bett ist neu. Es ist weiß.', highlight: 'Das Bett -> Es', uzbek: 'Karovot yangi. U oq.' },
        { german: 'Die Lampe ist schön. Sie ist gelb.', highlight: 'Die Lampe -> Sie', uzbek: 'Lampa chiroyli. U sariq.' }
      ],
      patternExplanationUz: 'Nemis tilida jonsiz buyumlar ham o‘z artikliga qarab kishilik olmoshi oladi: der -> er, das -> es, die -> sie.',
      ruleFormulaUz: 'der-Nomen = er; das-Nomen = es; die-Nomen = sie'
    },
    grammar: [
      {
        id: 'gra-m2-1',
        lessonId: 'les-4',
        levelCode: 'a1-1',
        titleDe: 'Bestimmter Artikel & Personalpronomen (er / es / sie)',
        titleUz: 'Aniq artikllar (der / das / die) va kishilik olmoshlari',
        summaryUz: 'Har bir nemischa ot artikl bilan o‘rganiladi. Otni takrorlamaslik uchun uning rodiga mos er, es yoki sie olmoshi ishlatiladi.',
        explanationUz: `Nemis tilida otlarning uchta grammatik jinsi bor:
1. **Maskulin (muzskoy):** **der** Tisch -> olmoshi: **er**
2. **Neutrum (sredniy):** **das** Bett -> olmoshi: **es**
3. **Feminin (jenskiy):** **die** Lampe -> olmoshi: **sie**
4. **Plural (ko‘plik):** **die** Stühle -> olmoshi: **sie** (ular)

Misollar:
- *Wo ist **der Schrank**? - **Er** steht hier.* (Shkaf qayerda? - U shu yerda turibdi.)
- *Wie findest du **das Sofa**? - **Es** ist sehr modern.* (Divanni qanday baholaysan? - U juda zamonaviy.)
- *Ist **die Lampe** neu? - Nein, **sie** ist alt.* (Lampa yangimi? - Yo‘q, u eski.)`,
        wordOrderRuleUz: 'Sifatlar "sein" fe‘lidan keyin kelganda qo‘shimcha olmaydi: "Der Tisch ist schön" (sifat o‘zgarmaydi).',
        tables: [
          {
            title: 'Aniq artikl va almashtiruvchi olmoshlar',
            headers: ['Grammatik jins', 'Aniq artikl', 'Olmosh', 'Namuna'],
            rows: [
              ['Maskulin (muzskoy)', 'der', 'er', 'der Stuhl -> er ist bequem'],
              ['Neutrum (sredniy)', 'das', 'es', 'das Bett -> es ist groß'],
              ['Feminin (jenskiy)', 'die', 'sie', 'die Lampe -> sie ist hell'],
              ['Plural (ko‘plik)', 'die', 'sie', 'die Tische -> sie sind teuer']
            ]
          }
        ],
        examples: [
          { german: 'Der Tisch ist sehr teuer.', uzbek: 'Stol juda qimmat.', highlight: 'Der Tisch / teuer' },
          { german: 'Das Zimmer ist hell und ruhig.', uzbek: 'Xona yorug‘ va tinch.', highlight: 'hell und ruhig' },
          { german: 'Die Farbe ist blau.', uzbek: 'Rangi ko‘k.', highlight: 'blau' }
        ],
        commonMistakes: [
          {
            incorrect: 'Wo ist der Tisch? - Es ist hier.',
            correct: 'Wo ist der Tisch? - Er ist hier.',
            explanationUz: '"der Tisch" muzskoy jinsda bo‘lgani uchun uning olmoshi "er" bo‘ladi, "es" emas.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Wie gefällt dir das Zimmer?',
      titleUz: 'Xona senga qanday yoqyapti?',
      situationUz: 'Do‘stlar yangi ijaraga olingan xonani ko‘zdan kechirmoqda.',
      audioTranscriptDe: 'Leon: Wie gefällt dir mein neues Zimmer?\nKlara: Es ist toll! Der Schrank ist sehr groß und das Bett ist super modern.\nLeon: Und wie findest du den Schreibtisch?\nKlara: Er ist praktisch, aber die Lampe dort ist etwas dunkel.\nLeon: Stimmt, ich kaufe eine neue Lampe.',
      translationUz: 'Leon: Mening yangi xonam senga qanday yoqyapti?\nKlara: Ajoyib! Shkaf juda katta va karovot juda zamonaviy.\nLeon: Yozuv stoli haqida nima deysan?\nKlara: U juda qulay, lekin anavi chiroq biroz qorong‘i ekan.\nLeon: To‘g‘ri, men yangi chiroq sotib olaman.',
      stage1Global: {
        instructionUz: '1-Bosqich: Xona haqida umumiy fikrni aniqlang.',
        questionUz: 'Klara Leoning yangi xonasini qanday baholadi?',
        options: ['Juda yomon', 'Ajoyib (Es ist toll)', 'Juda tor', 'Juda qimmat'],
        correctIndex: 1,
        explanationUz: 'Klara "Es ist toll!" deb ijobiy baholadi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Tafsilotlarni aniqlang.',
        questions: [
          {
            id: 'l4-q1',
            questionUz: 'Qaysi jihoz Klara nazarida biroz qorong‘i (etwas dunkel)?',
            options: ['Der Schrank (shkaf)', 'Die Lampe (lampa)', 'Das Bett (karovot)', 'Der Schreibtisch (stol)'],
            correctIndex: 1,
            explanationUz: 'Klara "die Lampe dort ist etwas dunkel" deb aytdi.'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Leon', textDe: 'Wie gefällt dir mein neues Zimmer?', textUz: 'Yangi xonam qanday yoqyapti?' },
          { speaker: 'Klara', textDe: 'Es ist toll!', textUz: 'U ajoyib!' }
        ],
        keyVocabulary: [
          { german: 'toll', uzbek: 'ajoyib' },
          { german: 'etwas dunkel', uzbek: 'biroz qorong‘i' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-m2-1',
        lessonId: 'les-4',
        titleDe: 'Mein Lieblingszimmer',
        titleUz: 'Mening sevimli xonam',
        textDe: 'Ich habe ein schönes Zimmer. Der Schreibtisch steht am Fenster. Er ist aus Holz und braun. Auf dem Schreibtisch steht eine Lampe. Sie ist weiß und sehr modern. Neben dem Tisch steht das Bett. Es ist sehr bequem. Ich liebe mein Zimmer!',
        translationUz: 'Mening chiroyli xonam bor. Yozuv stoli deraza yonida turibdi. U yog‘ochdan va jigarrang. Yozuv stoli ustida lampa turibdi. U oq va juda zamonaviy. Stol yonida karovot turibdi. U juda qulay. Men xonamni yaxshi ko‘raman!',
        vocabularyHints: [
          { german: 'das Fenster', uzbek: 'deraza' },
          { german: 'aus Holz', uzbek: 'yog‘ochdan' },
          { german: 'bequem', uzbek: 'qulay' }
        ],
        questions: [
          {
            id: 'rq-m2-1',
            questionUz: 'Lampa qanday rangda?',
            options: ['Jigarrang (braun)', 'Oq (weiß)', 'Qora (schwarz)', 'Yashil (grün)'],
            correctIndex: 1,
            explanationUz: 'Matnda "Sie ist weiß und sehr modern" deb yozilgan.'
          }
        ]
      }
    ],
    writingScaffold: {
      taskTitleUz: 'O‘z xonangizdagi mebellarni tasvirlash',
      promptUz: 'Xonangizdagi 3 ta mebel nomini yozing, ularning rangi va qulayligini tasvirlang.',
      taskInstructionsUz: '1. Xonangiz haqida ayting (Mein Zimmer ist...)\n2. Stol yoki shkaf haqida (Der Tisch / Der Schrank ist... Er ist...)\n3. Karovot yoki lampa haqida (Das Bett / Die Lampe ist...)',
      controlledScaffolding: {
        stepTitleUz: 'Shablonlar:',
        sentenceStarters: [
          'Mein Zimmer ist...',
          'Der Tisch ist... Er ist...',
          'Das Bett ist... Es ist...',
          'Die Lampe ist... Sie ist...'
        ]
      },
      usefulVocabulary: [
        { german: 'der Tisch', uzbek: 'stol' },
        { german: 'das Bett', uzbek: 'karovot' },
        { german: 'die Lampe', uzbek: 'lampa' },
        { german: 'bequem / modern', uzbek: 'qulay / zamonaviy' }
      ],
      modelAnswerDe: 'Mein Zimmer ist klein, aber sehr gemütlich. Der Schreibtisch ist groß und er ist weiß. Das Bett ist sehr bequem. Die Lampe ist gelb und schön.',
      modelAnswerUz: 'Mening xonam kichik, lekin juda shinam. Yozuv stoli katta va u oq. Karovot juda qulay. Lampa sariq va chiroyli.'
    },
    shadowing: [
      {
        id: 'sha-m2-1',
        lessonId: 'les-4',
        levelCode: 'a1-1',
        sentenceDe: 'Der Tisch ist sehr schön, aber er ist teuer.',
        translationUz: 'Stol juda chiroyli, lekin u qimmat.',
        phoneticHint: '[Der Tish ist ze:r shø:n, a:-ber er ist toy-er.]',
        orderIndex: 1
      },
      {
        id: 'sha-m2-2',
        lessonId: 'les-4',
        levelCode: 'a1-1',
        sentenceDe: 'Das Sofa ist dunkelblau und es ist sehr bequem.',
        translationUz: 'Divan to‘q ko‘k rangda va u juda qulay.',
        phoneticHint: '[Das Zo-fa ist dun-kel-blau unt es ist ze:r be-kve:m.]',
        orderIndex: 2
      }
    ],
    practice: [
      {
        id: 'ex-m2-1',
        lessonId: 'les-4',
        type: 'multiple-choice',
        questionUz: '"das Bett" (karovot) so‘zining o‘rniga qaysi olmosh ishlatiladi?',
        options: ['er', 'es', 'sie', 'ihn'],
        correctAnswer: 'es',
        explanationUz: '"das" artiklidagi neytral (sredniy) otlar "es" olmoshi bilan almashtiriladi.',
        mistakeTipUz: '❌ "das" rodidagi so‘zlar uchun olmosh "es" bo‘ladi.'
      },
      {
        id: 'ex-m2-2',
        lessonId: 'les-4',
        type: 'fill-blank',
        questionUz: '"die Lampe" ga mos olmoshni qo‘ying: "Die Lampe ist neu. _____ ist sehr hell."',
        blankSentence: 'Die Lampe ist neu. [blank] ist sehr hell.',
        options: ['Sie', 'Er', 'Es', 'Ihn'],
        correctAnswer: 'Sie',
        explanationUz: '"die Lampe" ayol jinsida bo‘lgani uchun "sie" olmoshi qo‘yiladi.',
        mistakeTipUz: '❌ "die" rodidagi so‘zlar olmoshi "sie" bo‘ladi.'
      }
    ],
    listening: [],
    writing: []
  },

  // ==========================================
  // LEKTION 5: Was ist das? (Gegenstände, Materialien & Plural)
  // ==========================================
  {
    id: 'les-5',
    moduleId: 'mod-2',
    levelCode: 'a1-1',
    titleDe: 'Lektion 5: Was ist das?',
    titleUz: '5-Dars: Bu nima? (Buyumlar, shakl va materiallar, ko‘plik shakllari)',
    descriptionUz: 'Kundalik buyumlar nomlari, materiallar (Holz, Glas, Metall, Plastik), noaniq artikl (ein/eine), inkor artikl (kein/keine) va otlarning ko‘plik shakllari.',
    orderIndex: 5,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Kundalik buyumlarni tanish va nomlash (Brille, Schlüssel, Buch, Handy, Stift)',
      'Noaniq artikl (ein, eine) va inkor artikl (kein, keine)ni to‘g‘ri qo‘llash',
      'Nemis tilidagi asosiy ko‘plik qo‘shimchalarini (-e, -er, -(e)n, -s) o‘rganish'
    ],
    warmUp: {
      situationUz: 'Stol ustida sizga notanish bo‘lgan buyum turibdi. Do‘stingizdan uning nimaligini va nimadan qilinganligini so‘ramoqchisiz.',
      curiosityQuestionUz: 'Nemis tilida "Bu qalam emas, bu ruchka" deyish uchun nima sababdan "nicht" emas, "kein" ishlatiladi?',
      miniDialogue: [
        { speaker: 'Anna', textDe: 'Was ist das? Ist das ein Bleistift?', textUz: 'Bu nima? Bu qalammi?' },
        { speaker: 'Felix', textDe: 'Nein, das ist kein Bleistift, das ist ein Kugelschreiber.', textUz: 'Yo‘q, bu qalam emas, bu sharikli ruchka.' }
      ],
      hintUz: 'Nemis tilida otlarning inkori uchun "kein/keine" (hech qanday ... emas) artikli ishlatiladi.'
    },
    contextDialogue: {
      titleDe: 'Fundbüro (Topilmalar idorasi)',
      titleUz: 'Topilmalar idorasida',
      situationUz: 'Universitet kutubxonasida yo‘qolgan buyumlar bo‘yicha xodim bilan suhbat.',
      lines: [
        { speaker: 'Student', textDe: 'Entschuldigung, ich suche meine Brille und meine Schlüssel.', textUz: 'Kechirasiz, men ko‘zoynagim va kalitlarimni qidiryapman.' },
        { speaker: 'Beamter', textDe: 'Ist das hier Ihre Brille? Sie ist aus Metall und schwarz.', textUz: 'Mana bu sizning ko‘zoynagingizmi? U metalldan va qora rangda.' },
        { speaker: 'Student', textDe: 'Nein, das ist keine Metallbrille. Meine Brille ist aus Plastik und braun.', textUz: 'Yo‘q, bu metall ko‘zoynak emas. Mening ko‘zoynagim plastikdan va jigarrang.' },
        { speaker: 'Beamter', textDe: 'Und haben Sie auch ein Buch verloren?', textUz: 'Kitob ham yo‘qotganmidingiz?' },
        { speaker: 'Student', textDe: 'Nein, kein Buch, aber zwei Stifte und ein Notizbuch.', textUz: 'Yo‘q, kitob emas, ikkita ruchka va bitta daftarcha.' }
      ],
      usefulPhrases: [
        { german: 'Was ist das? - Das ist ein / eine...', uzbek: 'Bu nima? - Bu ...' },
        { german: 'Das ist kein / keine...', uzbek: 'Bu ... emas (inkor)' },
        { german: 'Aus welchem Material ist das?', uzbek: 'Bu qaysi materialdan qilingan?' },
        { german: 'aus Holz / Glas / Metall / Plastik / Papier', uzbek: 'yog‘ochdan / oynadan / metalldan / plastikdan / qog‘ozdan' }
      ],
      culturalNoteUz: 'Germaniyada yo‘qolgan buyumlar uchun har bir shahar va bekatda "Fundbüro" (Topilmalar idorasi) faoliyat yuritadi.'
    },
    vocabulary: [
      {
        id: 'voc-m2-11',
        lessonId: 'les-5',
        levelCode: 'a1-1',
        german: 'das Buch',
        article: 'das',
        plural: 'die Bücher',
        uzbek: 'kitob',
        exampleDe: 'Das Buch ist sehr spannend.',
        exampleUz: 'Kitob juda qiziqarli.',
        wordType: 'noun'
      },
      {
        id: 'voc-m2-12',
        lessonId: 'les-5',
        levelCode: 'a1-1',
        german: 'die Brille',
        article: 'die',
        plural: 'die Brillen',
        uzbek: 'ko‘zoynak',
        exampleDe: 'Wo ist meine Brille?',
        exampleUz: 'Ko‘zoynagim qayerda?',
        wordType: 'noun'
      },
      {
        id: 'voc-m2-13',
        lessonId: 'les-5',
        levelCode: 'a1-1',
        german: 'der Schlüssel',
        article: 'der',
        plural: 'die Schlüssel',
        uzbek: 'kalit',
        exampleDe: 'Der Schlüssel passt nicht.',
        exampleUz: 'Kalit tushmayapti.',
        wordType: 'noun'
      },
      {
        id: 'voc-m2-14',
        lessonId: 'les-5',
        levelCode: 'a1-1',
        german: 'das Handy',
        article: 'das',
        plural: 'die Handys',
        uzbek: 'mobil telefon',
        exampleDe: 'Mein Handy ist neu.',
        exampleUz: 'Telefonim yangi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m2-15',
        lessonId: 'les-5',
        levelCode: 'a1-1',
        german: 'das Holz',
        article: 'das',
        plural: null,
        uzbek: 'yog‘och',
        exampleDe: 'Der Tisch ist aus Holz.',
        exampleUz: 'Stol yog‘ochdan.',
        wordType: 'noun'
      },
      {
        id: 'voc-m2-16',
        lessonId: 'les-5',
        levelCode: 'a1-1',
        german: 'das Glas',
        article: 'das',
        plural: 'die Gläser',
        uzbek: 'oyna, shisha; stakan',
        exampleDe: 'Die Flasche ist aus Glas.',
        exampleUz: 'Shisha shishadan yasalgan.',
        wordType: 'noun'
      },
      {
        id: 'voc-m2-17',
        lessonId: 'les-5',
        levelCode: 'a1-1',
        german: 'das Papier',
        article: 'das',
        plural: null,
        uzbek: 'qog‘oz',
        exampleDe: 'Ich brauche ein Blatt Papier.',
        exampleUz: 'Menga bir varaq qog‘oz kerak.',
        wordType: 'noun'
      },
      {
        id: 'voc-m2-18',
        lessonId: 'les-5',
        levelCode: 'a1-1',
        german: 'rund',
        article: null,
        plural: null,
        uzbek: 'dumaloq',
        exampleDe: 'Der Tisch ist rund.',
        exampleUz: 'Stol dumaloq.',
        wordType: 'adjective'
      },
      {
        id: 'voc-m2-19',
        lessonId: 'les-5',
        levelCode: 'a1-1',
        german: 'eckig',
        article: null,
        plural: null,
        uzbek: 'burchakli, to‘rtburchak',
        exampleDe: 'Das Bild ist eckig.',
        exampleUz: 'Rasm to‘rtburchak.',
        wordType: 'adjective'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'Noaniq artikl va inkor artiklining rodlar bo‘yicha o‘zgarishiga qarang:',
      discoveryExamples: [
        { german: 'ein Tisch (der) -> kein Tisch', highlight: 'ein / kein', uzbek: 'bitta stol -> stol emas' },
        { german: 'ein Buch (das) -> kein Buch', highlight: 'ein / kein', uzbek: 'bitta kitob -> kitob emas' },
        { german: 'eine Lampe (die) -> keine Lampe', highlight: 'eine / keine', uzbek: 'bitta chiroq -> chiroq emas' },
        { german: 'Bücher (Plural) -> keine Bücher', highlight: 'keine', uzbek: 'kitoblar -> kitoblar emas (ko‘plikda ein bo‘lmaydi!)' }
      ],
      patternExplanationUz: 'der va das uchun "ein/kein", die uchun esa "eine/keine". Ko‘plikda "ein" bo‘lmaydi, lekin inkor uchun "keine" ishlatiladi.',
      ruleFormulaUz: 'der/das: ein / kein; die: eine / keine; Plural: -- / keine'
    },
    grammar: [
      {
        id: 'gra-m2-2',
        lessonId: 'les-5',
        levelCode: 'a1-1',
        titleDe: 'Unbestimmter Artikel, Negativartikel & Plural',
        titleUz: 'Noaniq artikl (ein), inkor artikl (kein) va ko‘plik',
        summaryUz: 'Buyum birinchi marta tilga olinganda ein/eine, inkor qilinganda kein/keine ishlatiladi. Ko‘plikda otlar turli qo‘shimchalar oladi.',
        explanationUz: `**1. Noaniq artikl (ein / eine):**
Noma‘lum yoki birinchi marta aytilayotgan buyumlar uchun:
- *Das ist **ein** Stift.* (der Stift)
- *Das ist **ein** Buch.* (das Buch)
- *Das ist **eine** Brille.* (die Brille)
*Diqqat:* Ko‘plikda noaniq artikl ishlatilmaydi: *Das sind Bücher.*

**2. Inkor artikli (kein / keine):**
Ot oldidan kelib, uni inkor qiladi ("hech qanday ... emas"):
- *Das ist **kein** Stift.* (Bu qalam emas.)
- *Das ist **kein** Buch.* (Bu kitob emas.)
- *Das ist **keine** Tasche.* (Bu sumka emas.)
- *Das sind **keine** Fotos.* (Bular fotosuratlar emas.)

**3. Otlarning ko‘plik shakli (Plural):**
Nemis tilida ko‘plik 5 xil usulda yasaladi:
1. **-e:** *der Tisch -> die Tische*
2. **-(e)n:** *die Lampe -> die Lampen, die Frau -> die Frauen*
3. **-er (+ Umlaut):** *das Buch -> die Bücher, das Bild -> die Bilder*
4. **-s:** *das Handy -> die Handys, das Sofa -> die Sofas*
5. **qo‘shimchasiz (-):** *der Schlüssel -> die Schlüssel, der Koffer -> die Koffer*`,
        wordOrderRuleUz: 'kein faqat otlar oldidan keladi! Sifatlar va fe‘llar uchun "nicht" ishlatiladi.',
        tables: [
          {
            title: 'Artikllar tizimi (Nominativ)',
            headers: ['Grammatik jins', 'Aniq artikl', 'Noaniq artikl', 'Inkor artikl'],
            rows: [
              ['Maskulin (der)', 'der Stift', 'ein Stift', 'kein Stift'],
              ['Neutrum (das)', 'das Buch', 'ein Buch', 'kein Buch'],
              ['Feminin (die)', 'die Tasche', 'eine Tasche', 'keine Tasche'],
              ['Plural (die)', 'die Bücher', '-- Bücher', 'keine Bücher']
            ]
          }
        ],
        examples: [
          { german: 'Ist das ein Handy? - Nein, das ist kein Handy.', uzbek: 'Bu telefonmi? - Yo‘q, bu telefon emas.', highlight: 'ein / kein' },
          { german: 'Hier liegen zwei Bücher.', uzbek: 'Bu yerda ikkita kitob yotibdi.', highlight: 'Bücher' }
        ],
        commonMistakes: [
          {
            incorrect: 'Das ist nicht ein Buch.',
            correct: 'Das ist kein Buch.',
            explanationUz: 'Nemis tilida "nicht ein" o‘rniga deyarli doimo "kein" artikli ishlatiladi.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Was liegt auf dem Tisch?',
      titleUz: 'Stol ustida nima yotibdi?',
      situationUz: 'O‘qituvchi o‘quvchilardan stol ustidagi narsalarni nomlashni so‘ramoqda.',
      audioTranscriptDe: 'Lehrerin: Was liegt hier auf dem Tisch? Ist das ein Wörterbuch?\nSchüler: Nein, das ist kein Wörterbuch, das ist ein Notizbuch.\nLehrerin: Richtig. Und was sind das hier?\nSchüler: Das sind drei Stifte und zwei Schlüssel.\nLehrerin: Sehr gut gemacht!',
      translationUz: 'O‘qituvchi: Bu yerda stol ustida nima yotibdi? Bu lug‘atmi?\nO‘quvchi: Yo‘q, bu lug‘at emas, bu daftarcha.\nO‘qituvchi: To‘g‘ri. Bu yerdagilar nima?\nO‘quvchi: Bular uchta ruchka va ikkita kalit.\nO‘qituvchi: Juda yaxshi!',
      stage1Global: {
        instructionUz: '1-Bosqich: Suhbat qayerda va nima haqida bo‘layotganini tushuning.',
        questionUz: 'O‘quvchi stol ustidagi narsalarni qanday aniqladi?',
        options: ['Hammasini xato aytdi', 'To‘g‘ri aniqladi: daftarcha, qalamlar va kalitlar', 'Faqat kitobni ko‘rdi', 'Stol bo‘sh edi'],
        correctIndex: 1,
        explanationUz: 'O‘quvchi barcha narsalarni to‘g‘ri nomladi va o‘qituvchi "Sehr gut" dedi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Aniq son va buyumlarni belgilang.',
        questions: [
          {
            id: 'l5-q1',
            questionUz: 'Stol ustida nechta kalit bor edi?',
            options: ['Bitta', 'Ikkita (zwei Schlüssel)', 'Uchta', 'Kalit yo‘q edi'],
            correctIndex: 1,
            explanationUz: 'O‘quvchi "zwei Schlüssel" dedi.'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Lehrerin', textDe: 'Ist das ein Wörterbuch?', textUz: 'Bu lug‘atmi?' },
          { speaker: 'Schüler', textDe: 'Nein, das ist kein Wörterbuch.', textUz: 'Yo‘q, bu lug‘at emas.' }
        ],
        keyVocabulary: [
          { german: 'das Wörterbuch', uzbek: 'lug‘at kitobi' },
          { german: 'das Notizbuch', uzbek: 'yozuv daftarchasi' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-m2-2',
        lessonId: 'les-5',
        titleDe: 'Meine Schultasche',
        titleUz: 'Mening maktab sumkam',
        textDe: 'In meiner Tasche habe ich viele Sachen. Hier ist ein Buch für Deutsch und ein Heft. Ich habe auch ein Mäppchen mit fünf Stiften und einem Radiergummi. Mein Handy ist natürlich auch in der Tasche. Aber ich habe keine Schere und kein Lineal dabei.',
        translationUz: 'Mening sumkamda ko‘plab narsalar bor. Mana nemis tili uchun bitta kitob va bitta daftar. Menda yana beshta ruchka va bitta o‘chirg‘ichli penal bor. Telefonim ham albatta sumkada. Ammo menda qaychi va chizg‘ich yo‘q.',
        vocabularyHints: [
          { german: 'das Heft', uzbek: 'daftar' },
          { german: 'das Mäppchen', uzbek: 'penal' },
          { german: 'der Radiergummi', uzbek: 'o‘chirg‘ich' }
        ],
        questions: [
          {
            id: 'rq-m2-2',
            questionUz: 'Muallifning sumkasida nima YO‘Q?',
            options: ['Kitob va daftar', 'Qaychi va chizg‘ich (keine Schere, kein Lineal)', 'Telefon', 'Ruchkalar'],
            correctIndex: 1,
            explanationUz: 'Matnda "Aber ich habe keine Schere und kein Lineal dabei" deyilgan.'
          }
        ]
      }
    ],
    writingScaffold: {
      taskTitleUz: 'Sumkangizdagi buyumlarni sanab yozish',
      promptUz: 'Sumkangizda nimalar borligi va nimalar yo‘qligi haqida 3-4 jumla yozing (ein / kein ishlatib).',
      taskInstructionsUz: '1. Sumkangiz borligini ayting (Ich habe eine Tasche)\n2. Undagi 2 ta buyumni "ein/eine" bilan yozing\n3. Unda yo‘q bo‘lgan 1 ta buyumni "kein/keine" bilan yozing',
      controlledScaffolding: {
        stepTitleUz: 'Jumla shablonlari:',
        sentenceStarters: [
          'In meiner Tasche ist ein...',
          'Ich habe auch eine...',
          'Aber ich habe kein / keine...'
        ]
      },
      usefulVocabulary: [
        { german: 'die Tasche', uzbek: 'sumka' },
        { german: 'das Buch', uzbek: 'kitob' },
        { german: 'der Stift', uzbek: 'ruchka' }
      ],
      modelAnswerDe: 'In meiner Tasche habe ich ein Buch und ein Notizbuch. Ich habe auch ein Handy und zwei Stifte. Aber ich habe keine Brille.',
      modelAnswerUz: 'Sumkamda bitta kitob va bitta daftarcha bor. Menda yana bitta telefon va ikkita ruchka bor. Ammo ko‘zoynagim yo‘q.'
    },
    shadowing: [
      {
        id: 'sha-m2-3',
        lessonId: 'les-5',
        levelCode: 'a1-1',
        sentenceDe: 'Das ist kein Stift, das ist eine Brille.',
        translationUz: 'Bu ruchka emas, bu ko‘zoynak.',
        phoneticHint: '[Das ist kayn Shtift, das ist ay-ne Bril-le.]',
        orderIndex: 1
      },
      {
        id: 'sha-m2-4',
        lessonId: 'les-5',
        levelCode: 'a1-1',
        sentenceDe: 'Die Tische sind aus Holz und die Gläser sind rund.',
        translationUz: 'Stollar yog‘ochdan va stakanlar dumaloq.',
        phoneticHint: '[Di: Ti-she zint aus Holts unt di: Gle:-zer zint runt.]',
        orderIndex: 2
      }
    ],
    practice: [
      {
        id: 'ex-m2-3',
        lessonId: 'les-5',
        type: 'multiple-choice',
        questionUz: '"die Brille" so‘zining inkor shakli qaysi?',
        options: ['kein Brille', 'keine Brille', 'nicht Brille', 'keinen Brille'],
        correctAnswer: 'keine Brille',
        explanationUz: '"die Brille" ayol jinsida bo‘lgani sababli "keine Brille" bo‘ladi.',
        mistakeTipUz: '❌ Ayol jinsidagi otlar uchun inkor "keine" bo‘ladi.'
      },
      {
        id: 'ex-m2-4',
        lessonId: 'les-5',
        type: 'fill-blank',
        questionUz: '"das Buch" so‘zining ko‘plik shaklini yozing: "Auf dem Tisch liegen drei _____."',
        blankSentence: 'Auf dem Tisch liegen drei [blank].',
        options: ['Bücher', 'Buche', 'Buchs', 'Büchern'],
        correctAnswer: 'Bücher',
        explanationUz: '"das Buch" ko‘plikda Umlaut va -er oladi: "die Bücher".',
        mistakeTipUz: '❌ "das Buch" ning ko‘pligi "die Bücher" bo‘ladi.'
      }
    ],
    listening: [],
    writing: []
  },

  // ==========================================
  // LEKTION 6: Ich brauche einen Stift (Büro & Akkusativ)
  // ==========================================
  {
    id: 'les-6',
    moduleId: 'mod-2',
    levelCode: 'a1-1',
    titleDe: 'Lektion 6: Ich brauche einen Stift',
    titleUz: '6-Dars: Menga ruchka kerak (Ofis buyumlari va Akkusativ kelishigi)',
    descriptionUz: 'Ish joyi va ofis jihozlari (Computer, Drucker, Kalender), nemis tilidagi Akkusativ (tushum kelishigi) qoidasi: den / einen / keinen.',
    orderIndex: 6,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Ofis va ish qurollari nomlarini o‘rganish (Computer, Drucker, Maus, Kalender)',
      'Akkusativ kelishigida faqat muzskoy jins o‘zgarishini (der -> den, ein -> einen) bilish',
      '"brauchen", "haben", "suchen", "finden" fe‘llari bilan to‘g‘ri gap tuzish'
    ],
    warmUp: {
      situationUz: 'Ofisda yoki darsda topshiriq bajarayapsiz. Ruchkangiz yozmay qoldi va hamkasbingizdan ruchka so‘ramoqchisiz.',
      curiosityQuestionUz: 'Nemis tilida "Menda kompyuter bor" deganda nima uchun "der Computer" birdaniga "einen Computer" ga aylanadi?',
      miniDialogue: [
        { speaker: 'Max', textDe: 'Hast du einen Stift für mich?', textUz: 'Menga bergani bitta ruchkang bormi?' },
        { speaker: 'Sophie', textDe: 'Ja, hier bitte! Ich habe zwei Stifte.', textUz: 'Ha, mana marhamat! Menda ikkita ruchka bor.' }
      ],
      hintUz: 'Nemis tilida "haben" (ega bo‘lmoq) va "brauchen" (muhtoj bo‘lmoq) fe‘llaridan keyin doimo Akkusativ keladi.'
    },
    contextDialogue: {
      titleDe: 'Am Arbeitsplatz im Büro',
      titleUz: 'Ofisdagi ish joyida',
      situationUz: 'Yangi ish boshlagan xodim hamkasbidan kerakli ofis jihozlarini so‘ramoqda.',
      lines: [
        { speaker: 'Tim', textDe: 'Hallo Sandra, ich brauche Hilfe. Wo finde ich Büromaterial?', textUz: 'Salom Sandra, menga yordam kerak. Ofis jihozlarini qayerdan topsam bo‘ladi?' },
        { speaker: 'Sandra', textDe: 'Was brauchst du denn genau, Tim?', textUz: 'Senga aynan nima kerak, Tim?' },
        { speaker: 'Tim', textDe: 'Ich brauche einen neuen Laptop, einen Kalender und einen Stift.', textUz: 'Menga yangi noutbuk, bitta taqvim va bitta ruchka kerak.' },
        { speaker: 'Sandra', textDe: 'Einen Laptop haben wir hier im Schrank. Und den Kalender findest du auf dem Tisch dort.', textUz: 'Noutbuk mana bu shkafda bor. Taqvimni esa anavi stol ustidan topasan.' },
        { speaker: 'Tim', textDe: 'Vielen Dank! Hast du auch einen Drucker?', textUz: 'Katta rahmat! Printering ham bormi?' },
        { speaker: 'Sandra', textDe: 'Ja, wir haben einen Farbdrucker im Flur.', textUz: 'Ha, yo‘lakda rangli printerimiz bor.' }
      ],
      usefulPhrases: [
        { german: 'Ich brauche einen / ein / eine...', uzbek: 'Menga ... kerak' },
        { german: 'Ich suche den / das / die...', uzbek: 'Men ...ni qidiryapman' },
        { german: 'Hast du einen / ein / eine...?', uzbek: 'Sendan ... bormi?' },
        { german: 'Ich habe keinen / kein / keine...', uzbek: 'Menda ... yo‘q' }
      ],
      culturalNoteUz: 'Nemis ofislarida har bir buyum o‘z joyida tartib bilan saqlanadi ("Ordnung muss sein" — Tartib bo‘lishi shart).'
    },
    vocabulary: [
      {
        id: 'voc-m2-20',
        lessonId: 'les-6',
        levelCode: 'a1-1',
        german: 'der Computer',
        article: 'der',
        plural: 'die Computer',
        uzbek: 'kompyuter',
        exampleDe: 'Der Computer ist sehr schnell.',
        exampleUz: 'Kompyuter juda tez ishlaydi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m2-21',
        lessonId: 'les-6',
        levelCode: 'a1-1',
        german: 'der Drucker',
        article: 'der',
        plural: 'die Drucker',
        uzbek: 'printer',
        exampleDe: 'Ich brauche einen Drucker.',
        exampleUz: 'Menga printer kerak.',
        wordType: 'noun'
      },
      {
        id: 'voc-m2-22',
        lessonId: 'les-6',
        levelCode: 'a1-1',
        german: 'der Stift',
        article: 'der',
        plural: 'die Stifte',
        uzbek: 'ruchka, qalam',
        exampleDe: 'Hast du einen Stift?',
        exampleUz: 'Ruchkang bormi?',
        wordType: 'noun'
      },
      {
        id: 'voc-m2-23',
        lessonId: 'les-6',
        levelCode: 'a1-1',
        german: 'der Kalender',
        article: 'der',
        plural: 'die Kalender',
        uzbek: 'taqvim, kalendar',
        exampleDe: 'Der Kalender hängt an der Wand.',
        exampleUz: 'Taqvim devorda osilib turibdi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m2-24',
        lessonId: 'les-6',
        levelCode: 'a1-1',
        german: 'das Handy',
        article: 'das',
        plural: 'die Handys',
        uzbek: 'mobil telefon',
        exampleDe: 'Ich suche mein Handy.',
        exampleUz: 'Men telefonimni qidiryapman.',
        wordType: 'noun'
      },
      {
        id: 'voc-m2-25',
        lessonId: 'les-6',
        levelCode: 'a1-1',
        german: 'die Maus',
        article: 'die',
        plural: 'die Mäuse',
        uzbek: 'sichqoncha (kompyuter)',
        exampleDe: 'Die Maus funktioniert nicht.',
        exampleUz: 'Sichqoncha ishlamayapti.',
        wordType: 'noun'
      },
      {
        id: 'voc-m2-26',
        lessonId: 'les-6',
        levelCode: 'a1-1',
        german: 'brauchen',
        article: null,
        plural: null,
        uzbek: 'muhtoj bo‘lmoq, kerak bo‘lmoq',
        exampleDe: 'Was brauchst du?',
        exampleUz: 'Senga nima kerak?',
        wordType: 'verb'
      },
      {
        id: 'voc-m2-27',
        lessonId: 'les-6',
        levelCode: 'a1-1',
        german: 'suchen',
        article: null,
        plural: null,
        uzbek: 'qidirmoq, izlamoq',
        exampleDe: 'Ich suche meinen Schlüssel.',
        exampleUz: 'Men kalitimni qidiryapman.',
        wordType: 'verb'
      },
      {
        id: 'voc-m2-28',
        lessonId: 'les-6',
        levelCode: 'a1-1',
        german: 'finden',
        article: null,
        plural: null,
        uzbek: 'topmoq',
        exampleDe: 'Ich finde den Stift nicht.',
        exampleUz: 'Men ruchkani topa olmayapman.',
        wordType: 'verb'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'Akkusativ kelishigida har bir rodning o‘zgarishiga diqqat qiling. Faqat qaysi rod o‘zgaryapti?',
      discoveryExamples: [
        { german: 'der Tisch -> Ich brauche den / einen Tisch.', highlight: 'den / einen', uzbek: 'Muzskoy o‘zgardi!' },
        { german: 'das Buch -> Ich brauche das / ein Buch.', highlight: 'das / ein', uzbek: 'Sredniy O‘ZGARMAYDI!' },
        { german: 'die Lampe -> Ich brauche die / eine Lampe.', highlight: 'die / eine', uzbek: 'Jenskiy O‘ZGARMAYDI!' }
      ],
      patternExplanationUz: 'Akkusativ kelishigida FAQTGINA Muzskoy (der) o‘zgaradi: der -> den, ein -> einen, kein -> keinen. Sredniy (das) va Jenskiy (die) o‘zgarishsiz qoladi!',
      ruleFormulaUz: 'Akkusativ: der -> den (einen, keinen); das -> das (ein, kein); die -> die (eine, keine)'
    },
    grammar: [
      {
        id: 'gra-m2-3',
        lessonId: 'les-6',
        levelCode: 'a1-1',
        titleDe: 'Der Akkusativ (Wen? oder Was?)',
        titleUz: 'Akkusativ (Tushum kelishigi — KitobNI, qalamNI)',
        summaryUz: 'O‘zbek tilidagi "-ni" qo‘shimchasi nemis tilida Akkusativ deyiladi. Akkusativda faqat erkak jinsi (Maskulin) o‘zgaradi.',
        explanationUz: `Akkusativ kelishigi **"Wen?" (Kimni?)** yoki **"Was?" (Nimani?)** so‘rog‘iga javob beradi.

Quyidagi fe‘llardan keyin kelgan to‘ldiruvchi doimo **Akkusativ** bo‘lishi shart:
- **haben** (ega bo‘lmoq)
- **brauchen** (kerak bo‘lmoq)
- **suchen** (qidirmoq)
- **finden** (topmoq)
- **kaufen** (sotib olmoq)

**O‘zgarish qoidasi:**
- **Maskulin (der):** **der -> den** | **ein -> einen** | **kein -> keinen** | **mein -> meinen**
- **Neutrum (das):** **das -> das** | **ein -> ein** | **kein -> kein** (O‘ZGARMADI)
- **Feminin (die):** **die -> die** | **eine -> eine** | **keine -> keine** (O‘ZGARMADI)
- **Plural (die):** **die -> die** | **keine -> keine** (O‘ZGARMADI)`,
        wordOrderRuleUz: 'Fe‘l 2-o‘rinda, Akkusativ to‘ldiruvchi esa fe‘ldan keyin keladi: "Ich (1) habe (2) einen Computer (3)".',
        tables: [
          {
            title: 'Nominativ vs. Akkusativ solishtirma jadvali',
            headers: ['Rod', 'Nominativ (Bosh kelishik)', 'Akkusativ (Tushum kelishigi)'],
            rows: [
              ['Maskulin (der)', 'der / ein / kein Tisch', 'den / einen / keinen Tisch'],
              ['Neutrum (das)', 'das / ein / kein Buch', 'das / ein / kein Buch'],
              ['Feminin (die)', 'die / eine / keine Lampe', 'die / eine / keine Lampe'],
              ['Plural (die)', 'die / -- / keine Stifte', 'die / -- / keine Stifte']
            ]
          }
        ],
        examples: [
          { german: 'Ich habe einen Bruder.', uzbek: 'Mening akam bor.', highlight: 'einen Bruder' },
          { german: 'Er sucht den Schlüssel.', uzbek: 'U kalitni qidiryapti.', highlight: 'den Schlüssel' },
          { german: 'Wir brauchen kein Auto.', uzbek: 'Bizga mashina kerak emas.', highlight: 'kein Auto' }
        ],
        commonMistakes: [
          {
            incorrect: 'Ich habe ein Bruder.',
            correct: 'Ich habe einen Bruder.',
            explanationUz: '"Bruder" muzskoy rod bo‘lgani uchun "haben" dan keyin "einen Bruder" bo‘lishi shart.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Im Büro: Wer hat den Schlüssel?',
      titleUz: 'Ofisda: Kalit kimda?',
      situationUz: 'Hamkasblar muhim hujjatlar saqlanadigan xona kalitini qidirmoqda.',
      audioTranscriptDe: 'Herr Meyer: Guten Morgen Frau Braun! Suchen Sie etwas?\nFrau Braun: Ja, ich suche den Schlüssel für das Archiv. Haben Sie ihn?\nHerr Meyer: Nein, ich habe keinen Schlüssel. Aber fragen Sie mal Herrn Weber, er braucht das Archiv heute auch.\nFrau Braun: Danke, ich frage ihn gleich.',
      translationUz: 'Janob Meyer: Xayrli tong, xonim Braun! Biror narsa qidiryapsizmi?\nXonim Braun: Ha, men arxiv kalitini qidiryapman. Sizdami u?\nJanob Meyer: Yo‘q, menda kalit yo‘q. Lekin janob Veberdan so‘rab ko‘ring, arxiv unga ham bugun kerak edi.\nXonim Braun: Rahmat, hoziroq so‘rayman.',
      stage1Global: {
        instructionUz: '1-Bosqich: Xonim Braun nima qidirayotganini aniqlang.',
        questionUz: 'Xonim Braun nimani qidirmoqda?',
        options: ['Kompyuterni', 'Arxiv kalitini (den Schlüssel)', 'Telefonini', 'Yangi printerni'],
        correctIndex: 1,
        explanationUz: 'U "ich suche den Schlüssel für das Archiv" dedi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Tafsilotlarni aniqlang.',
        questions: [
          {
            id: 'l6-q1',
            questionUz: 'Janob Meyerda kalit bormi?',
            options: ['Ha, uning cho‘ntagida', 'Yo‘q, unda kalit yo‘q (keinen Schlüssel)', 'Kalit stolda', 'Kalit eshikda'],
            correctIndex: 1,
            explanationUz: 'Janob Meyer "Nein, ich habe keinen Schlüssel" dedi.'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Herr Meyer', textDe: 'Suchen Sie etwas?', textUz: 'Biror narsa qidiryapsizmi?' },
          { speaker: 'Frau Braun', textDe: 'Ich suche den Schlüssel.', textUz: 'Men kalitni qidiryapman.' }
        ],
        keyVocabulary: [
          { german: 'das Archiv', uzbek: 'arxiv' },
          { german: 'fragen', uzbek: 'so‘ramoq' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-m2-3',
        lessonId: 'les-6',
        titleDe: 'Mein erster Arbeitstag',
        titleUz: 'Mening birinchi ish kunim',
        textDe: 'Heute ist mein erster Arbeitstag. Mein Büro ist sehr modern. Ich habe einen großen Schreibtisch und einen bequemen Stuhl. Auf dem Tisch steht ein schneller Computer. Ich brauche noch einen Notizblock und einen Kugelschreiber. Meine Kollegin gibt mir alles. Ich finde die Arbeit hier super!',
        translationUz: 'Bugun mening birinchi ish kunim. Mening ofisim juda zamonaviy. Menda katta yozuv stoli va qulay stul bor. Stol ustida tezkor kompyuter turibdi. Menga yana bitta qog‘oz bloknoti va bitta sharikli ruchka kerak. Hamkasbim menga hamma narsani berdi. Bu yerdagi ish menga juda yoqyapti!',
        vocabularyHints: [
          { german: 'der Notizblock', uzbek: 'bloknot' },
          { german: 'die Kollegin', uzbek: 'hamkasb (ayol)' }
        ],
        questions: [
          {
            id: 'rq-m2-3',
            questionUz: 'Yangi xodimga nimalar kerak bo‘ldi?',
            options: ['Yangi kompyuter', 'Bloknot va sharikli ruchka (einen Notizblock und einen Kugelschreiber)', 'Telefon', 'Mebel'],
            correctIndex: 1,
            explanationUz: 'Matnda "Ich brauche noch einen Notizblock und einen Kugelschreiber" deyilgan.'
          }
        ]
      }
    ],
    writingScaffold: {
      taskTitleUz: 'Sizga kerak bo‘lgan ofis qurollari ro‘yxatini tuzish',
      promptUz: 'Ish yoki o‘qish uchun nimalar kerakligi va nimalaringiz borligi haqida 3-4 jumla yozing (Akkusativ qoidasiga amal qiling).',
      taskInstructionsUz: '1. "Ich habe..." deb bitta narsangizni yozing\n2. "Ich brauche einen / ein / eine..." deb kerakli narsani yozing\n3. "Ich suche..." deb qidirayotgan buyumingizni yozing',
      controlledScaffolding: {
        stepTitleUz: 'Jumla namunalari:',
        sentenceStarters: [
          'Ich habe einen / ein...',
          'Ich brauche einen neuen...',
          'Ich suche meinen...'
        ]
      },
      usefulVocabulary: [
        { german: 'der Laptop / den Laptop', uzbek: 'noutbuk' },
        { german: 'der Stift / einen Stift', uzbek: 'ruchka' },
        { german: 'brauchen / suchen', uzbek: 'kerak bo‘lmoq / qidirmoq' }
      ],
      modelAnswerDe: 'Ich habe einen Laptop und ein Notizbuch. Aber ich brauche noch einen Stift. Wo finde ich den Drucker?',
      modelAnswerUz: 'Menda noutbuk va bitta daftarcha bor. Lekin menga yana bitta ruchka kerak. Printerni qayerdan topsam bo‘ladi?'
    },
    shadowing: [
      {
        id: 'sha-m2-5',
        lessonId: 'les-6',
        levelCode: 'a1-1',
        sentenceDe: 'Ich brauche einen Stift und einen Kalender.',
        translationUz: 'Menga ruchka va taqvim kerak.',
        phoneticHint: '[Iç brau-xe ay-nen Shtift unt ay-nen Ka-len-der.]',
        orderIndex: 1
      },
      {
        id: 'sha-m2-6',
        lessonId: 'les-6',
        levelCode: 'a1-1',
        sentenceDe: 'Hast du den Schlüssel für das Büro?',
        translationUz: 'Ofis kaliti sendami?',
        phoneticHint: '[Hast du den Shlys-sel fy:r das By:-ro?]',
        orderIndex: 2
      }
    ],
    practice: [
      {
        id: 'ex-m2-5',
        lessonId: 'les-6',
        type: 'multiple-choice',
        questionUz: '"Menga bitta stol kerak" gapida "der Tisch" qanday shaklga o‘zgaradi?',
        options: ['Ich brauche ein Tisch.', 'Ich brauche einen Tisch.', 'Ich brauche einem Tisch.', 'Ich brauche der Tisch.'],
        correctAnswer: 'Ich brauche einen Tisch.',
        explanationUz: '"brauchen" Akkusativ talab qiladi. "der Tisch" -> "einen Tisch" bo‘ladi.',
        mistakeTipUz: '❌ Muzskoy rod Akkusativda "einen" oladi: einen Tisch.'
      },
      {
        id: 'ex-m2-6',
        lessonId: 'les-6',
        type: 'fill-blank',
        questionUz: '"haben" fe‘lidan keyin to‘g‘ri inkor artiklini qo‘ying: "Ich habe _____ Computer."',
        blankSentence: 'Ich habe [blank] Computer.',
        options: ['keinen', 'kein', 'keine', 'nicht'],
        correctAnswer: 'keinen',
        explanationUz: '"der Computer" muzskoy bo‘lib, Akkusativda "keinen Computer" bo‘ladi.',
        mistakeTipUz: '❌ "der" rodidagi otlar Akkusativ inkorida "keinen" oladi.'
      }
    ],
    listening: [],
    writing: []
  }
];
