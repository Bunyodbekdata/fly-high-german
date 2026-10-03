import { Lesson } from '../../types/database';

export const MODULE_6_A12_LESSONS: Lesson[] = [
  // ==========================================
  // LEKTION 16: Mein Kopf tut weh (Körperteile & Schmerzen)
  // ==========================================
  {
    id: 'les-16',
    moduleId: 'mod-a1-2-2',
    levelCode: 'a1-2',
    titleDe: 'Lektion 16: Mein Kopf tut weh',
    titleUz: '16-Dars: Boshim og‘riyapti (Tana a‘zolari va og‘riqni ifodalash)',
    descriptionUz: 'Tana a‘zolari (Kopf, Auge, Ohr, Nase, Hals, Bauch, Rücken, Arm, Bein, Hand, Fuß), og‘riqni aytish ("weh tun": tut weh / tun weh) va kishilik holati.',
    orderIndex: 16,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Inson tana a‘zolarini artikli bilan ayta olish (der Kopf, das Auge, die Hand, das Bein)',
      'Og‘riq va shikoyatlarni to‘g‘ri ifodalash ("Mein Kopf tut weh", "Meine Augen tun weh")',
      'Birovning hol-ahvolini so‘rash ("Was fehlt dir / Ihnen?", "Wie geht es dir?")'
    ],
    warmUp: {
      situationUz: 'Ertalab uyg‘onganingizda shamollab qolganingizni sezasiz: boshingiz og‘rib, tomog‘ingiz qichiyapti. Do‘stingizga holatingizni tushuntirmoqchisiz.',
      curiosityQuestionUz: 'Nemis tilida "Boshim og‘riyapti" deganda "tut weh", lekin "Ko‘zlarim og‘riyapti" deganda nega "tun weh" (-n bilan) deyiladi?',
      miniDialogue: [
        { speaker: 'Lukas', textDe: 'Du siehst gar nicht gut aus. Was fehlt dir?', textUz: 'Ranging yaxshi emas. Senga nima bo‘ldi?' },
        { speaker: 'Sardor', textDe: 'Mein Kopf tut sehr weh und mein Hals brennt.', textUz: 'Boshim juda og‘riyapti va tomog‘im achishyapti.' }
      ],
      hintUz: 'Birlikdagi tana a‘zosi uchun "tut weh", ko‘plikdagilar (die Augen, die Ohren) uchun esa "tun weh" deyiladi.'
    },
    contextDialogue: {
      titleDe: 'Ich fühle mich nicht wohl',
      titleUz: 'O‘zimni yaxshi his qilmayapman',
      situationUz: 'Talabalar yotoqxonasida xonadosh do‘stlar bir-birlarining salomatligi haqida qayg‘urmoqda.',
      lines: [
        { speaker: 'Lisa', textDe: 'Hallo Tim, kommst du heute mit zum Sport?', textUz: 'Salom Tim, bugun sportga birga borasanmi?' },
        { speaker: 'Tim', textDe: 'Nein, leider kann ich nicht. Ich fühle mich überhaupt nicht wohl.', textUz: 'Yo‘q, afsuski bora olmayman. O‘zimni umuman yaxshi his qilmayapman.' },
        { speaker: 'Lisa', textDe: 'Oh je! Was tut dir denn weh?', textUz: 'Voy, qayering og‘riyapti?' },
        { speaker: 'Tim', textDe: 'Mein Rücken tut furchtbar weh und ich habe auch starke Kopfschmerzen.', textUz: 'Belim dahshatli og‘riyapti va qattiq bosh og‘rig‘im ham bor.' },
        { speaker: 'Lisa', textDe: 'Hast du auch Fieber gemessen?', textUz: 'Isitmani ham o‘lchadingmi?' },
        { speaker: 'Tim', textDe: 'Ja, 38,2 Grad. Ich glaube, ich habe eine echte Grippe.', textUz: 'Ha, 38,2 daraja. Menimcha, haqiqiy gripp bo‘ldim.' },
        { speaker: 'Lisa', textDe: 'Bleib bloß im Bett! Ich koche dir sofort einen heißen Kräutertee.', textUz: 'Faqat yotoqda yot! Hozirroq senga issiq giyohli choy damlab beraman.' }
      ],
      usefulPhrases: [
        { german: 'Was fehlt Ihnen / dir?', uzbek: 'Qayeringiz bezovta qilyapti? / Nima bo‘ldi?' },
        { german: 'Mein ... tut weh. / Meine ... tun weh.', uzbek: 'Mening ... og‘riyapti (birlik / ko‘plik).' },
        { german: 'Ich habe Kopfschmerzen / Bauchschmerzen.', uzbek: 'Boshim / qornim og‘riyapti.' },
        { german: 'Gute Besserung!', uzbek: 'Tezroq sog‘ayib keting!' }
      ],
      culturalNoteUz: 'Germaniyada bemor bo‘lgan kishiga doimo "Gute Besserung!" (Tezroq shifo tilayman!) deb aytiladi.'
    },
    vocabulary: [
      {
        id: 'voc-m6-1',
        lessonId: 'les-16',
        levelCode: 'a1-2',
        german: 'der Kopf',
        article: 'der',
        plural: 'die Köpfe',
        uzbek: 'bosh',
        exampleDe: 'Mein Kopf tut weh.',
        exampleUz: 'Boshim og‘riyapti.',
        wordType: 'noun'
      },
      {
        id: 'voc-m6-2',
        lessonId: 'les-16',
        levelCode: 'a1-2',
        german: 'das Auge',
        article: 'das',
        plural: 'die Augen',
        uzbek: 'ko‘z',
        exampleDe: 'Meine Augen tun weh.',
        exampleUz: 'Ko‘zlarim og‘riyapti.',
        wordType: 'noun'
      },
      {
        id: 'voc-m6-3',
        lessonId: 'les-16',
        levelCode: 'a1-2',
        german: 'das Ohr',
        article: 'das',
        plural: 'die Ohren',
        uzbek: 'quloq',
        exampleDe: 'Das rechte Ohr tut weh.',
        exampleUz: 'O‘ng qulog‘im og‘riyapti.',
        wordType: 'noun'
      },
      {
        id: 'voc-m6-4',
        lessonId: 'les-16',
        levelCode: 'a1-2',
        german: 'die Nase',
        article: 'die',
        plural: 'die Nasen',
        uzbek: 'burun',
        exampleDe: 'Meine Nase läuft.',
        exampleUz: 'Burnim oqyapti.',
        wordType: 'noun'
      },
      {
        id: 'voc-m6-5',
        lessonId: 'les-16',
        levelCode: 'a1-2',
        german: 'der Hals',
        article: 'der',
        plural: 'die Hälse',
        uzbek: 'tomoq, bo‘yin',
        exampleDe: 'Ich habe Halsschmerzen.',
        exampleUz: 'Tomog‘im og‘riyapti.',
        wordType: 'noun'
      },
      {
        id: 'voc-m6-6',
        lessonId: 'les-16',
        levelCode: 'a1-2',
        german: 'der Bauch',
        article: 'der',
        plural: 'die Bäuche',
        uzbek: 'qorin',
        exampleDe: 'Mein Bauch tut weh.',
        exampleUz: 'Qornim og‘riyapti.',
        wordType: 'noun'
      },
      {
        id: 'voc-m6-7',
        lessonId: 'les-16',
        levelCode: 'a1-2',
        german: 'der Rücken',
        article: 'der',
        plural: 'die Rücken',
        uzbek: 'orqa, bel, yelka',
        exampleDe: 'Der Rücken tut nach dem Sport weh.',
        exampleUz: 'Sportdan keyin belim og‘riyapti.',
        wordType: 'noun'
      },
      {
        id: 'voc-m6-8',
        lessonId: 'les-16',
        levelCode: 'a1-2',
        german: 'die Hand',
        article: 'die',
        plural: 'die Hände',
        uzbek: 'qo‘l (kaft)',
        exampleDe: 'Wasche deine Hände!',
        exampleUz: 'Qo‘llaringni yuv!',
        wordType: 'noun'
      },
      {
        id: 'voc-m6-9',
        lessonId: 'les-16',
        levelCode: 'a1-2',
        german: 'das Bein',
        article: 'das',
        plural: 'die Beine',
        uzbek: 'oyoq (boldir/son)',
        exampleDe: 'Mein linkes Bein tut weh.',
        exampleUz: 'Chap oyog‘im og‘riyapti.',
        wordType: 'noun'
      },
      {
        id: 'voc-m6-10',
        lessonId: 'les-16',
        levelCode: 'a1-2',
        german: 'weh|tun',
        article: null,
        plural: null,
        uzbek: 'og‘rimoq, og‘riq bermoq',
        exampleDe: 'Was tut Ihnen weh?',
        exampleUz: 'Qayeringiz og‘riyapti?',
        wordType: 'verb'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: '"weh tun" fe‘lining birlik va ko‘plik otlar bilan ishlatilishiga qarang:',
      discoveryExamples: [
        { german: 'Der Kopf (Singular) tut weh.', highlight: 'tut weh', uzbek: 'Bosh (birlik) -> tut weh' },
        { german: 'Die Augen (Plural) tun weh.', highlight: 'tun weh', uzbek: 'Ko‘zlar (ko‘plik) -> tun weh' }
      ],
      patternExplanationUz: '"weh tun" ajraladigan fe‘l. Agar og‘riyotgan tana a‘zosi birlikda bo‘lsa "tut weh", agar ko‘plikda bo‘lsa "tun weh" bo‘ladi.',
      ruleFormulaUz: 'Singular: ... tut weh | Plural: ... tun weh'
    },
    grammar: [
      {
        id: 'gra-m6-1',
        lessonId: 'les-16',
        levelCode: 'a1-2',
        titleDe: 'Das Verb "weh tun" & Schmerzausdrücke',
        titleUz: '"weh tun" fe‘li va og‘riq ifodalari',
        summaryUz: 'Og‘riqni ifodalashning 2 ta asosiy usuli bor: 1) Tana a‘zosi + tut weh / tun weh; 2) Ich habe + ...schmerzen (Kopfschmerzen, Halsschmerzen).',
        explanationUz: `**1. "weh tun" fe‘li bilan:**
- Birlikda: *Mein Kopf **tut weh**.* (Boshim og‘riyapti.)
- Birlikda: *Mein Zahn **tut weh**.* (Tishim og‘riyapti.)
- Ko‘plikda: *Meine Beine **tun weh**.* (Oyoqlarim og‘riyapti.)
- Ko‘plikda: *Meine Ohren **tun weh**.* (Quloqlarim og‘riyapti.)

**2. "...schmerzen" qo‘shma oti bilan (haben + Akkusativ):**
Tana a‘zosi nomiga **-schmerzen** qo‘shiladi:
- *der Kopf* + *Schmerzen* -> **Kopfschmerzen** (*Ich habe Kopfschmerzen.*)
- *der Bauch* + *Schmerzen* -> **Bauchschmerzen** (*Ich habe Bauchschmerzen.*)
- *der Zahn* + *Schmerzen* -> **Zahnschmerzen** (*Ich habe Zahnschmerzen.*)
- *der Hals* + *Schmerzen* -> **Halsschmerzen** (*Ich habe Halsschmerzen.*)`,
        wordOrderRuleUz: 'weh tun ajraladi: tuslangan fe‘l 2-o‘rinda, "weh" so‘zi gapning eng oxirida: "Mein Rücken tut weh."',
        tables: [
          {
            title: 'Og‘riq ifodalash modellari',
            headers: ['Tana a‘zosi', 'weh tun bilan', 'haben + Schmerzen bilan'],
            rows: [
              ['der Kopf (bosh)', 'Mein Kopf tut weh.', 'Ich habe Kopfschmerzen.'],
              ['der Bauch (qorin)', 'Mein Bauch tut weh.', 'Ich habe Bauchschmerzen.'],
              ['der Zahn (tish)', 'Mein Zahn tut weh.', 'Ich habe Zahnschmerzen.'],
              ['die Ohren (quloqlar)', 'Meine Ohren tun weh.', 'Ich habe Ohrenschmerzen.']
            ]
          }
        ],
        examples: [
          { german: 'Tut dir dein Arm weh?', uzbek: 'Qo‘ling og‘riyaptimi?', highlight: 'Tut ... weh' },
          { german: 'Er hat starke Halsschmerzen.', uzbek: 'Uning tomog‘i qattiq og‘riyapti.', highlight: 'Halsschmerzen' }
        ],
        commonMistakes: [
          {
            incorrect: 'Meine Augen tut weh.',
            correct: 'Meine Augen tun weh.',
            explanationUz: '"die Augen" ko‘plikda bo‘lgani sababli "tun weh" bo‘lishi shart.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Was fehlt Ihnen denn?',
      titleUz: 'Sizga nima bo‘ldi?',
      situationUz: 'O‘qituvchi darsga kela olmagan talaba bilan telefonda gaplashmoqda.',
      audioTranscriptDe: 'Lehrer: Guten Morgen Sardor! Warum bist du heute nicht im Kurs?\nSardor: Guten Morgen Herr Müller. Es tut mir leid, ich bin krank. Mein Kopf und mein Hals tun sehr weh und ich huste viel.\nLehrer: Oje, das klingt nach einer Grippe. Warst du schon beim Arzt?\nSardor: Noch nicht, ich habe um 14 Uhr einen Termin bei der Praxis.\nLehrer: Gut, dann ruh dich aus und gute Besserung!',
      translationUz: 'O‘qituvchi: Xayrli tong Sardor! Nega bugun darsda emassan?\nSardor: Xayrli tong janob Myuller. Uzr so‘rayman, men kasalman. Boshim va tomog‘im juda og‘riyapti va ko‘p yo‘talyapman.\nO‘qituvchi: Voy, bu grippga o‘xshayapti. Shifokorga bordingmi?\nSardor: Hali yo‘q, soat 14:00 da poliklinikada qabulga yozilganman.\nO‘qituvchi: Yaxshi, unda dam olgin va tezroq shifo tilayman!',
      stage1Global: {
        instructionUz: '1-Bosqich: Sardor nima sababdan darsga kelmaganini aniqlang.',
        questionUz: 'Sardor nima uchun darsga kela olmadi?',
        options: ['Uxlab qolgani uchun', 'Kasal bo‘lib qolgani uchun (krank)', 'Poyezd kechikkani uchun', 'Sayohatda bo‘lgani uchun'],
        correctIndex: 1,
        explanationUz: 'Sardor "ich bin krank. Mein Kopf und mein Hals tun weh" dedi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Tafsilotlarni aniqlang.',
        questions: [
          {
            id: 'l16-q1',
            questionUz: 'Sardor shifokorga soat nechada boradi?',
            options: ['Soat 10:00 da', 'Soat 12:00 da', 'Soat 14:00 da (um 14 Uhr)', 'Ertaga'],
            correctIndex: 2,
            explanationUz: 'U "ich habe um 14 Uhr einen Termin" deb aytdi.'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Lehrer', textDe: 'Warum bist du nicht im Kurs?', textUz: 'Nega darsda emassan?' },
          { speaker: 'Sardor', textDe: 'Ich bin krank, mein Hals tut weh.', textUz: 'Kasalman, tomog‘im og‘riyapti.' }
        ],
        keyVocabulary: [
          { german: 'krank', uzbek: 'kasal' },
          { german: 'Gute Besserung!', uzbek: 'Tezroq sog‘ayib keting!' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-m6-1',
        lessonId: 'les-16',
        levelCode: 'a1-2',
        titleDe: 'Krankmeldung an die Sprachschule',
        titleUz: 'Til maktabiga kasallik xati',
        textDe: 'Sehr geehrte Frau Sommer, leider kann ich diese Woche nicht am Deutschkurs teilnehmen. Seit gestern habe ich hohes Fieber und starke Halsschmerzen. Mein Arzt sagt, ich habe eine Mandelentzündung und muss mindestens fünf Tage im Bett bleiben. Die Hausaufgaben schickt mir meine Mitschülerin Anna per E-Mail. Mit freundlichen Grüßen, Dilnoza Karimova.',
        translationUz: 'Hurmatli xonim Sommer, afsuski bu hafta nemis tili kursida qatnasha olmayman. Kechadan beri yuqori isitma va kuchli tomoq og‘rig‘im bor. Shifokorim angina (bodomcha bezlari shamollashi) bo‘lganimni va kamida besh kun yotoqda qolishim shartligini aytdi. Uy vazifalarini kursdoshim Anna elektron pochta orqali yuboradi. Hurmat bilan, Dilnoza Karimova.',
        vocabularyHints: [
          { german: 'die Krankmeldung', uzbek: 'kasallik haqida xabar/ma‘lumotnoma' },
          { german: 'hohes Fieber', uzbek: 'yuqori isitma' },
          { german: 'mindestens', uzbek: 'kamida' }
        ],
        questions: [
          {
            id: 'rq-m6-1',
            questionUz: 'Dilnoza necha kun yotoqda qolishi kerak?',
            options: ['Bitta kun', 'Kamida besh kun (mindestens fünf Tage)', 'Ikki hafta', 'Bir oy'],
            correctIndex: 1,
            explanationUz: 'Matnda "muss mindestens fünf Tage im Bett bleiben" deb ko‘rsatilgan.'
          }
        ]
      }
    ],
    writingScaffold: {
      taskTitleUz: 'O‘qituvchiga kasallik xati yozish',
      promptUz: 'Kasal bo‘lib qolganingiz, qayeringiz og‘riyotgani va darsga kela olmasligingiz haqida 3-4 jumla yozing.',
      taskInstructionsUz: '1. Hurmat bilan boshlang (Liebe Frau Sommer / Lieber Herr Müller)\n2. Kasal ekanligingizni va nima og‘riyotganini ayting (Ich bin krank. Mein... tut weh)\n3. Darsga kela olmasligingizni bildiring\n4. Yakunlang (Viele Grüße)',
      controlledScaffolding: {
        stepTitleUz: 'Jumla namunalari:',
        sentenceStarters: [
          'Liebe(r)...,',
          'ich kann heute leider nicht kommen, weil ich krank bin.',
          'Mein Kopf und mein Hals tun weh.',
          'Viele Grüße'
        ]
      },
      usefulVocabulary: [
        { german: 'krank sein', uzbek: 'kasal bo‘lmoq' },
        { german: 'tut weh', uzbek: 'og‘riyapti' },
        { german: 'das Fieber', uzbek: 'isitma' }
      ],
      modelAnswerDe: 'Liebe Frau Sommer, leider kann ich heute nicht zum Unterricht kommen. Ich bin krank und habe hohes Fieber. Mein Kopf tut sehr weh. Ich gehe heute zum Arzt. Viele Grüße, Sardor.',
      modelAnswerUz: 'Hurmatli xonim Sommer, afsuski bugun darsga bora olmayman. Men kasalman va yuqori isitmay bor. Boshim juda og‘riyapti. Bugun shifokorga boraman. Salomlar bilan, Sardor.'
    },
    shadowing: [
      {
        id: 'sha-m6-1',
        lessonId: 'les-16',
        levelCode: 'a1-2',
        sentenceDe: 'Mein Kopf tut sehr weh und ich habe Halsschmerzen.',
        translationUz: 'Boshim juda og‘riyapti va tomoq og‘rig‘im bor.',
        phoneticHint: '[Mayn Kopf tut ze:r ve: unt iç ha:-be Hals-shmer-tsen.]',
        orderIndex: 1
      },
      {
        id: 'sha-m6-2',
        lessonId: 'les-16',
        levelCode: 'a1-2',
        sentenceDe: 'Was fehlt Ihnen denn? - Ich fühle mich nicht wohl.',
        translationUz: 'Sizga nima bo‘ldi? - O‘zimni yaxshi his qilmayapman.',
        phoneticHint: '[Vas fe:lt I:-nen den? - Iç fy:-le miç niçt vo:l.]',
        orderIndex: 2
      }
    ],
    practice: [
      {
        id: 'ex-m6-1',
        lessonId: 'les-16',
        type: 'multiple-choice',
        questionUz: 'Ko‘plikdagi tana a‘zosi bilan qaysi birikma to‘g‘ri keladi: "Meine Beine _____."',
        options: ['tut weh', 'tun weh', 'weh tut', 'tun wehen'],
        correctAnswer: 'tun weh',
        explanationUz: '"Meine Beine" ko‘plikda bo‘lgani uchun "tun weh" ishlatiladi.',
        mistakeTipUz: '❌ Ko‘plikdagi tana a‘zolari uchun "tun weh" bo‘ladi.'
      },
      {
        id: 'ex-m6-2',
        lessonId: 'les-16',
        type: 'fill-blank',
        questionUz: 'Mos so‘zni qo‘ying: "Ich habe starke _____, mein Kopf tut so weh."',
        blankSentence: 'Ich habe starke [blank], mein Kopf tut so weh.',
        options: ['Kopfschmerzen', 'Halsschmerzen', 'Bauchschmerzen', 'Zahnschmerzen'],
        correctAnswer: 'Kopfschmerzen',
        explanationUz: 'Bosh og‘rig‘i nemis tilida "Kopfschmerzen" deyiladi.',
        mistakeTipUz: '❌ Bosh og‘rig‘i "Kopfschmerzen" bo‘ladi.'
      }
    ],
    listening: [],
    writing: []
  },

  // ==========================================
  // LEKTION 17: Beim Arzt (Symptome & der Imperativ)
  // ==========================================
  {
    id: 'les-17',
    moduleId: 'mod-a1-2-2',
    levelCode: 'a1-2',
    titleDe: 'Lektion 17: Beim Arzt',
    titleUz: '17-Dars: Shifokor qabulida (Alomatlar, dorilar va Buyruq mayli - Imperativ)',
    descriptionUz: 'Shifokor ko‘rigi (beim Arzt, in der Praxis), dorilar (Tabletten, Tropfen, Salbe, Rezept), shifokor ko‘rsatmalari va Imperativ (buyruq/maslahat mayli: Sie / du / ihr).',
    orderIndex: 17,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Shifokor qabulida kasallik alomatlarini tushuntirish (Husten, Schnupfen, Fieber)',
      'Dorixonadan dori sotib olish (Rezept, Tabletten, Tropfen)',
      'Imperativ (buyruq mayli) shakllarini yasash (Trinken Sie! / Trink! / Trinkt!)'
    ],
    warmUp: {
      situationUz: 'Poliklinikada (Praxis) shifokor xonasiga kirdingiz. Shifokor sizdan qayeringiz bezovta qilayotganini so‘ramoqda.',
      curiosityQuestionUz: 'Nemis shifokori bemorga "Ko‘p choy iching!" deb maslahat berganda nima uchun fe‘l 1-o‘ringa chiqadi (Trinken Sie viel Tee)?',
      miniDialogue: [
        { speaker: 'Arzt', textDe: 'Guten Tag! Was fehlt Ihnen denn?', textUz: 'Xayrli kun! Qayeringiz bezovta qilyapti?' },
        { speaker: 'Patient', textDe: 'Guten Tag, Herr Doktor. Ich habe starken Husten und Fieber.', textUz: 'Xayrli kun, janob doktor. Kuchli yo‘talim va isitmay bor.' }
      ],
      hintUz: 'Buyruq va maslahat maylida (Imperativ) fe‘l doimo gapning eng boshida turadi: Machen Sie den Mund auf!'
    },
    contextDialogue: {
      titleDe: 'Untersuchung beim Hausarzt',
      titleUz: 'Oilaviy shifokor ko‘rigida',
      situationUz: 'Dr. Bergmann bemor Dilnozani ko‘rikdan o‘tkazib, unga dori va maslahatlar bermoqda.',
      lines: [
        { speaker: 'Dr. Bergmann', textDe: 'Bitte nehmen Sie Platz. Seit wann haben Sie die Schmerzen?', textUz: 'Iltimos, o‘tiring. Og‘riq qachondan beri bezovta qilyapti?' },
        { speaker: 'Dilnoza', textDe: 'Seit zwei Tagen. Ich kann nachts kaum schlafen.', textUz: 'Ikki kundan beri. Kechalari deyarli uxlay olmayapman.' },
        { speaker: 'Dr. Bergmann', textDe: 'Machen Sie bitte den Mund auf und sagen Sie "Aah".', textUz: 'Iltimos, og‘zingizni oching va "Aah" deng.' },
        { speaker: 'Dilnoza', textDe: 'Aaaaah.', textUz: 'Aaaaah.' },
        { speaker: 'Dr. Bergmann', textDe: 'Ja, Ihr Hals ist stark entzündet. Sie haben eine akute Bronchitis.', textUz: 'Ha, tomog‘ingiz qattiq qizargan. Sizda o‘tkir bronxit.' },
        { speaker: 'Dilnoza', textDe: 'Muss ich Antibiotika nehmen?', textUz: 'Antibiotik ichishim shartmi?' },
        { speaker: 'Dr. Bergmann', textDe: 'Nein, das ist nicht nötig. Aber nehmen Sie diese Tabletten dreimal täglich nach dem Essen und trinken Sie viel warmen Tee!', textUz: 'Yo‘q, hojat yo‘q. Ammo mana bu tabletkalarni kuniga 3 mahal ovqatdan keyin iching va ko‘p issiq choy iching!' }
      ],
      usefulPhrases: [
        { german: 'Machen Sie bitte den Mund auf!', uzbek: 'Iltimos, og‘zingizni oching!' },
        { german: 'Nehmen Sie die Tabletten...', uzbek: 'Tabletkalarni qabul qiling...' },
        { german: 'dreimal täglich vor / nach dem Essen', uzbek: 'kuniga uch mahal ovqatdan oldin / keyin' },
        { german: 'Bleiben Sie ein paar Tage im Bett!', uzbek: 'Bir necha kun yotoqda dam oling!' }
      ],
      culturalNoteUz: 'Germaniyada shifokorlar har doim ham antibiotik yozib beraverishmaydi, avval tabiiy vositalar, dam olish va choy tavsiya etiladi.'
    },
    vocabulary: [
      {
        id: 'voc-m6-11',
        lessonId: 'les-17',
        levelCode: 'a1-2',
        german: 'der Husten',
        article: 'der',
        plural: null,
        uzbek: 'yo‘tal',
        exampleDe: 'Haben Sie starken Husten?',
        exampleUz: 'Kuchli yo‘talingiz bormi?',
        wordType: 'noun'
      },
      {
        id: 'voc-m6-12',
        lessonId: 'les-17',
        levelCode: 'a1-2',
        german: 'der Schnupfen',
        article: 'der',
        plural: null,
        uzbek: 'tumov, burun oqishi',
        exampleDe: 'Ich habe Schnupfen.',
        exampleUz: 'Menda tumov bor.',
        wordType: 'noun'
      },
      {
        id: 'voc-m6-13',
        lessonId: 'les-17',
        levelCode: 'a1-2',
        german: 'das Fieber',
        article: 'das',
        plural: null,
        uzbek: 'isitma, tana harorati',
        exampleDe: 'Er hat hohes Fieber.',
        exampleUz: 'Uning isitmasi baland.',
        wordType: 'noun'
      },
      {
        id: 'voc-m6-14',
        lessonId: 'les-17',
        levelCode: 'a1-2',
        german: 'das Rezept',
        article: 'das',
        plural: 'die Rezepte',
        uzbek: 'shifokor retsepti (dori uchun)',
        exampleDe: 'Hier ist Ihr Rezept für die Apotheke.',
        exampleUz: 'Mana dorixona uchun retseptingiz.',
        wordType: 'noun'
      },
      {
        id: 'voc-m6-15',
        lessonId: 'les-17',
        levelCode: 'a1-2',
        german: 'die Tablette',
        article: 'die',
        plural: 'die Tabletten',
        uzbek: 'tabletka, dori tabletkasi',
        exampleDe: 'Nehmen Sie zwei Tabletten am Tag.',
        exampleUz: 'Kunda ikkita tabletka iching.',
        wordType: 'noun'
      },
      {
        id: 'voc-m6-16',
        lessonId: 'les-17',
        levelCode: 'a1-2',
        german: 'die Tropfen',
        article: 'die',
        plural: 'die Tropfen',
        uzbek: 'tomchilar (dori)',
        exampleDe: 'Die Tropfen helfen gegen Husten.',
        exampleUz: 'Tomchilar yo‘talga yordam beradi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m6-17',
        lessonId: 'les-17',
        levelCode: 'a1-2',
        german: 'untersuchen',
        article: null,
        plural: null,
        uzbek: 'tibbiy ko‘rikdan o‘tkazmoq',
        exampleDe: 'Der Arzt untersucht den Patienten.',
        exampleUz: 'Shifokor bemorni ko‘rikdan o‘tkazyapti.',
        wordType: 'verb'
      },
      {
        id: 'voc-m6-18',
        lessonId: 'les-17',
        levelCode: 'a1-2',
        german: 'nehmen',
        article: null,
        plural: null,
        uzbek: 'olmoq, qabul qilmoq (dori)',
        exampleDe: 'Er nimmt regelmäßig Medikamente.',
        exampleUz: 'U muntazam dori qabul qiladi.',
        wordType: 'verb'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'Buyruq gaplardagi fe‘l shakllariga (Sie, du, ihr) e‘tibor bering:',
      discoveryExamples: [
        { german: 'Trinken Sie viel Wasser! (Sie)', highlight: 'Trinken Sie', uzbek: 'Siz uchun: fe‘l + Sie' },
        { german: 'Trink viel Wasser! (du)', highlight: 'Trink (-st va du yo‘qoladi!)', uzbek: 'Sen uchun: faqat o‘zak qoladi!' },
        { german: 'Trinkt viel Wasser! (ihr)', highlight: 'Trinkt (ihr yo‘qoladi)', uzbek: 'Sizlar uchun: o‘zak + t' }
      ],
      patternExplanationUz: 'Nemis tilida Imperativ (buyruq mayli) 3 xil shaxsga qaratiladi: Sie-shaklida fe‘l + Sie saqlanadi; du-shaklida -st va du tushib qoladi; ihr-shaklida ihr tushib faqat -t qoladi.',
      ruleFormulaUz: 'Sie: Gehen Sie! | du: Geh! (du va -st yo‘q) | ihr: Geht! (ihr yo‘q)'
    },
    grammar: [
      {
        id: 'gra-m6-2',
        lessonId: 'les-17',
        levelCode: 'a1-2',
        titleDe: 'Der Imperativ (Befehlsform & Ratschläge)',
        titleUz: 'Buyruq mayli (Imperativ: Sie, du, ihr)',
        summaryUz: 'Buyruq, iltimos va shifokor maslahatlari berishda Imperativ ishlatiladi. Fe‘l doimo 1-o‘rinda keladi!',
        explanationUz: `**1. Sie-Form (Rasmiy, hurmat shakli):**
Fe‘l 1-o‘ringa chiqadi va orqasidan **Sie** keladi:
- *Trinken Sie viel Tee!* (Ko‘p choy iching!)
- *Kommen Sie bitte rein!* (Iltimos, ichkariga kiring!)
- *Nehmen Sie die Tabletten!* (Tabletkalarni qabul qiling!)
*Istisno:* **sein** fe‘li: ***Seien Sie ruhig!*** (Vazmin bo‘ling!)

**2. du-Form (Do‘stona, yakka shaxsga):**
"du" kishilik olmoshi va fe‘ldagi **-st** qo‘shimchasi TUSHIB QOLADI:
- *du machst* -> ***Mach** die Tür auf!* (Eshikni och!)
- *du trinkst* -> ***Trink** Wasser!* (Suv ich!)
- *du liest* -> ***Lies** das Buch!* (Kitobni o‘qi!)
- *du fährst* -> ***Fahr** vorsichtig!* (Umlaut tushib qoladi!)
*Istisno:* **sein** fe‘li: ***Sei** brav!* (Odobli bo‘l!)

**3. ihr-Form (Do‘stona, ko‘pchilikka):**
"ihr" olmoshi tushib qoladi, fe‘l o‘zagiga **-t** saqlanadi:
- *ihr macht* -> ***Macht** die Hausaufgaben!* (Vazifalarni qilinglar!)
- *ihr trinkt* -> ***Trinkt** Tee!* (Choy ichinglar!)`,
        wordOrderRuleUz: 'Imperativda tuslangan fe‘l qat‘iy ravishda 1-O‘RINDA keladi!',
        tables: [
          {
            title: 'Imperativ yasash qoidalari',
            headers: ['Shaxs', 'Hozirgi zamon', 'Imperativ (Buyruq)', 'O‘zbekcha ma‘nosi'],
            rows: [
              ['Sie (Siz)', 'Sie trinken', 'Trinken Sie!', 'Iching!'],
              ['du (sen)', 'du trinkst', 'Trink!', 'Ich!'],
              ['ihr (sizlar)', 'ihr trinkt', 'Trinkt!', 'Ichinglar!'],
              ['Sie (sein)', 'Sie sind', 'Seien Sie pünktlich!', 'O‘z vaqtida bo‘ling!'],
              ['du (sein)', 'du bist', 'Sei ruhig!', 'Tinch bo‘l!']
            ]
          }
        ],
        examples: [
          { german: 'Bleiben Sie heute im Bett!', uzbek: 'Bugun yotoqda qoling!', highlight: 'Bleiben Sie' },
          { german: 'Nimm deine Medizin!', uzbek: 'Doringni ich / ol!', highlight: 'Nimm' }
        ],
        commonMistakes: [
          {
            incorrect: 'Trinkst das Wasser!',
            correct: 'Trink das Wasser!',
            explanationUz: '"du" uchun buyruq maylida "-st" qo‘shimchasi tushib qoladi: Trink!'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'In der Apotheke',
      titleUz: 'Dorixonada',
      situationUz: 'Mijoz shifokor retsepti bilan dorixonaga keldi.',
      audioTranscriptDe: 'Apotheker: Guten Tag! Wie kann ich Ihnen helfen?\nKunde: Guten Tag, ich habe hier ein Rezept von Dr. Bergmann.\nApotheker: Moment bitte... Ja, das sind Antibiotika und ein Hustensaft. Nehmen Sie die Tabletten morgens und abends nach dem Essen mit einem Glas Wasser. Und den Saft dreimal täglich einen Löffel.\nKunde: Muss ich etwas zuzahlen?\nApotheker: Nur fünf Euro Rezeptgebühr, bitte.',
      translationUz: 'Dorixonachi: Xayrli kun! Sizga qanday yordam bera olaman?\nMijoz: Xayrli kun, menda Dr. Bergmann bergan retsept bor.\nDorixonachi: Bir daqiqa, iltimos... Ha, bular antibiotik va bitta yo‘tal siropi. Tabletkalarni ertalab va kechqurun ovqatdan keyin bir stakan suv bilan iching. Siropni esa kuniga uch mahal bir qoshiqdan.\nMijoz: Qo‘shimcha pul to‘lashim kerakmi?\nDorixonachi: Faqat 5 yevro retsept to‘lovi, marhamat.',
      stage1Global: {
        instructionUz: '1-Bosqich: Xarid joyi va maqsadi.',
        questionUz: 'Mijoz dorixonaga nima maqsadda keldi?',
        options: ['Kosmetika sotib olish uchun', 'Shifokor retsepti bo‘yicha dori olish uchun (Rezept einlösen)', 'Shifokor bilan uchrashish uchun', 'Qon bosimini o‘lchash uchun'],
        correctIndex: 1,
        explanationUz: 'U "ich habe hier ein Rezept von Dr. Bergmann" dedi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Dorining qabul qilish tartibi.',
        questions: [
          {
            id: 'l17-q1',
            questionUz: 'Tabletkalarni kuniga necha mahal ichish buyurildi?',
            options: ['Faqat ertalab', 'Ertalab va kechqurun (morgens und abends)', 'Kuniga besh mahal', 'Haftada bir marta'],
            correctIndex: 1,
            explanationUz: 'Dorixonachi "Nehmen Sie die Tabletten morgens und abends" dedi.'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Apotheker', textDe: 'Nehmen Sie die Tabletten morgens und abends.', textUz: 'Tabletkalarni ertalab va kechqurun iching.' },
          { speaker: 'Kunde', textDe: 'Vielen Dank für die Erklärung.', textUz: 'Tushuntirish uchun katta rahmat.' }
        ],
        keyVocabulary: [
          { german: 'der Hustensaft', uzbek: 'yo‘tal siropi' },
          { german: 'die Rezeptgebühr', uzbek: 'retsept bo‘yicha majburiy to‘lov' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-m6-2',
        lessonId: 'les-17',
        titleDe: 'Packungsbeilage: Paracetamol 500mg',
        titleUz: 'Dori yo‘riqnomasi: Paratsetamol 500mg',
        textDe: 'Anwendung: Gegen leichte bis mäßig starke Schmerzen (Kopfschmerzen, Zahnschmerzen) und Fieber. Dosierung: Erwachsene und Jugendliche ab 12 Jahren nehmen 1 bis 2 Tabletten als Einzeldosis. Die maximale Tagesdosis beträgt 8 Tabletten (4000 mg). Nehmen Sie die Tabletten unzerkaut mit reichlich Flüssigkeit ein. Wenn das Fieber länger als drei Tage anhält, konsultieren Sie bitte sofort einen Arzt.',
        translationUz: 'Qo‘llanilishi: Yengildan o‘rtacha kuchli og‘riqlarga qarshi (bosh og‘rig‘i, tish og‘rig‘i) va isitmada. Dozalash: Kattalar va 12 yoshdan oshgan o‘smirlar bir martalik doza sifatida 1-2 tabletka qabul qilishadi. Maksimal sutkalik doza 8 tabletka (4000 mg). Tabletkalarni chaynamasdan ko‘p miqdordagi suyuqlik bilan iching. Agar isitma uch kundan ortiq davom etsa, darhol shifokor bilan maslahatlashing.',
        vocabularyHints: [
          { german: 'die Packungsbeilage', uzbek: 'dori yo‘riqnomasi' },
          { german: 'die Dosierung', uzbek: 'dozalash' },
          { german: 'konsultieren', uzbek: 'maslahatlashmoq' }
        ],
        questions: [
          {
            id: 'rq-m6-2',
            questionUz: 'Bir kunda ko‘pi bilan (maksimal) nechta tabletka ichish mumkin?',
            options: ['2 tabletka', '4 tabletka', '8 tabletka (8 Tabletten)', '10 tabletka'],
            correctIndex: 2,
            explanationUz: 'Yo‘riqnomada "Die maximale Tagesdosis beträgt 8 Tabletten" deb yozilgan.'
          }
        ]
      }
    ],
    writingScaffold: {
      taskTitleUz: 'Kasal do‘stingizga maslahat berish xati',
      promptUz: 'Kasal bo‘lib qolgan do‘stingizga Imperativ (Buyruq mayli) ishlatib 3 ta foydali maslahat yozing ("Bleib...", "Trink...", "Geh...").',
      taskInstructionsUz: '1. Hol-ahvol so‘rang (Wie geht es dir?)\n2. Yotoqda dam olishni buyuring (Bleib im Bett!)\n3. Choy ichish va shifokorga borishni ayting (Trink Tee! Geh zum Arzt!)',
      controlledScaffolding: {
        stepTitleUz: 'Jumla namunalari:',
        sentenceStarters: [
          'Lieber...,',
          'Bleib bitte im Bett!',
          'Trink viel heißen Tee!',
          'Geh unbedingt zum Arzt!'
        ]
      },
      usefulVocabulary: [
        { german: 'Bleib im Bett!', uzbek: 'Yotoqda yot!' },
        { german: 'Trink viel Tee!', uzbek: 'Ko‘p choy ich!' },
        { german: 'Geh zum Arzt!', uzbek: 'Shifokorga bor!' }
      ],
      modelAnswerDe: 'Lieber Ali, du bist krank? Bleib unbedingt im Bett und ruh dich aus! Trink viel heißen Tee mit Zitrone. Geh heute noch zum Arzt und nimm deine Medikamente. Gute Besserung! Dein Sardor.',
      modelAnswerUz: 'Qadrdonim Ali, kasalmisan? Albatta yotoqda qol va dam ol! Limonli ko‘p issiq choy ich. Bugunoq shifokorga bor va dorilaringni qabul qil. Tezroq sog‘ayib ket! Sening Sardoring.'
    },
    shadowing: [
      {
        id: 'sha-m6-3',
        lessonId: 'les-17',
        levelCode: 'a1-2',
        sentenceDe: 'Trinken Sie viel Tee und bleiben Sie im Bett!',
        translationUz: 'Ko‘p choy iching va yotoqda dam oling!',
        phoneticHint: '[Trin-ken Zi: fi:l Te: unt blay-ben Zi: im Bet!]',
        orderIndex: 1
      },
      {
        id: 'sha-m6-4',
        lessonId: 'les-17',
        levelCode: 'a1-2',
        sentenceDe: 'Nimm diese Tabletten dreimal täglich nach dem Essen.',
        translationUz: 'Bu tabletkalarni kuniga uch mahal ovqatdan so‘ng ich.',
        phoneticHint: '[Nim di:-ze Tab-let-ten dray-ma:l te:k-liç na:x dem Es-sen.]',
        orderIndex: 2
      }
    ],
    practice: [
      {
        id: 'ex-m6-3',
        lessonId: 'les-17',
        type: 'multiple-choice',
        questionUz: '"trinken" fe‘lining "du" uchun to‘g‘ri buyruq (Imperativ) shakli qaysi?',
        options: ['Trinkst!', 'Trink!', 'Trinke du!', 'Trinken!'],
        correctAnswer: 'Trink!',
        explanationUz: '"du" uchun buyruq maylida "-st" va "du" tushib qoladi: "Trink!".',
        mistakeTipUz: '❌ "du" buyrug‘ida faqat fe‘l negizi qoladi: Trink!'
      },
      {
        id: 'ex-m6-4',
        lessonId: 'les-17',
        type: 'fill-blank',
        questionUz: '"Sie" uchun buyruq shaklini qo‘ying: "_____ Sie bitte den Mund auf!"',
        blankSentence: '[blank] Sie bitte den Mund auf!',
        options: ['Machen', 'Macht', 'Mach', 'Gemacht'],
        correctAnswer: 'Machen',
        explanationUz: '"Sie" bilan buyruq fe‘l infinitiviga teng bo‘ladi: "Machen Sie!".',
        mistakeTipUz: '❌ "Sie" bilan fe‘l "Machen Sie" bo‘ladi.'
      }
    ],
    listening: [],
    writing: []
  },

  // ==========================================
  // LEKTION 18: Gesund leben (Ernährung, Fitness & sollen)
  // ==========================================
  {
    id: 'les-18',
    moduleId: 'mod-a1-2-2',
    levelCode: 'a1-2',
    titleDe: 'Lektion 18: Gesund leben',
    titleUz: '18-Dars: Sog‘lom yashash (Sport, to‘g‘ri ovqatlanish va "sollen" modal fe‘li)',
    descriptionUz: 'Sog‘lom turmush tarzi, fitnes va to‘g‘ri ovqatlanish, maslahat va tavsiya beruvchi "sollen" modal fe‘li (kerak / lozim) hamda können/müssen bilan taqqoslash.',
    orderIndex: 18,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Sog‘lom turmush tarzi va odatlarni tasvirlash (Sport treiben, gesund essen, spazieren gehen)',
      '"sollen" modal fe‘lining tuslanishini o‘rganish (ich soll, du sollst, er soll)',
      'Birovga shifokor yoki do‘stona tavsiyalar berish ("Du sollst mehr schlafen")'
    ],
    warmUp: {
      situationUz: 'Do‘stingiz doimo charchoqdan va stressdan shikoyat qilmoqda. Unga ko‘proq dam olishni va sport bilan shug‘ullanishni tavsiya qilmoqchisiz.',
      curiosityQuestionUz: 'Nemis tilida "Shifokor menga ko‘p suv ichishni aytdi" degan tavsiya qaysi modal fe‘l bilan ifodalanadi?',
      miniDialogue: [
        { speaker: 'Anna', textDe: 'Was hat der Arzt gesagt?', textUz: 'Shifokor nima dedi?' },
        { speaker: 'Ben', textDe: 'Ich soll weniger Kaffee trinken und mehr Sport machen.', textUz: 'Men kamroq qahva ichishim va ko‘proq sport bilan shug‘ullanishim kerak ekan.' }
      ],
      hintUz: '"sollen" modal fe‘li uchinchi shaxs (shifokor, ota-ona) bergan topshiriq va tavsiyalarni ifodalash uchun ishlatiladi.'
    },
    contextDialogue: {
      titleDe: 'Tipps für ein gesundes Leben',
      titleUz: 'Sog‘lom hayot uchun maslahatlar',
      situationUz: 'Fitnes murabbiyi yangi a‘zoga salomatlik va mashg‘ulotlar rejasi bo‘yicha yo‘l-yo‘riq ko‘rsatmoqda.',
      lines: [
        { speaker: 'Trainer', textDe: 'Hallo Max! Wie oft machst du in der Woche Sport?', textUz: 'Salom Maks! Haftada necha marta sport bilan shug‘ullanasan?' },
        { speaker: 'Max', textDe: 'Bisher fast gar nicht. Ich sitze den ganzen Tag im Büro vor dem Computer.', textUz: 'Shu paytgacha deyarli yo‘q. Butun kun ofisda kompyuter qarshisida o‘tiraman.' },
        { speaker: 'Trainer', textDe: 'Das ist nicht gut für deinen Rücken. Du sollst mindestens dreimal pro Woche trainieren.', textUz: 'Bu beling uchun yaxshi emas. Sen haftasiga kamida 3 marta shug‘ullanishing lozim.' },
        { speaker: 'Max', textDe: 'Und wie steht es mit der Ernährung?', textUz: 'Ovqatlanish borasidachi?' },
        { speaker: 'Trainer', textDe: 'Du sollst viel frisches Obst und Gemüse essen und täglich zwei Liter Wasser trinken. Vermeide zu viel Zucker!', textUz: 'Ko‘p yangi meva va sabzavotlar yeyishing hamda kuniga ikki litr suv ichishing lozim. Ko‘p shakardan saqlan!' },
        { speaker: 'Max', textDe: 'Verstanden! Ich fange heute direkt damit an.', textUz: 'Tushundim! Bugundanoq bunga kirishaman.' }
      ],
      usefulPhrases: [
        { german: 'Du sollst... / Sie sollen...', uzbek: 'Siz ... qilishingiz lozim (tavsiya)' },
        { german: 'Sport treiben / Sport machen', uzbek: 'sport bilan shug‘ullanmoq' },
        { german: 'sich gesund ernähren', uzbek: 'sog‘lom ovqatlanmoq' },
        { german: 'spazieren gehen', uzbek: 'sayr qilmoq, piyoda yurmoq' }
      ],
      culturalNoteUz: 'Germaniyada har ikkinchi fuqaro biror sport klubi (Sportverein) a‘zosi hisoblanadi va velosipedda yurish kundalik hayotning ajralmas qismidir.'
    },
    vocabulary: [
      {
        id: 'voc-m6-19',
        lessonId: 'les-18',
        levelCode: 'a1-2',
        german: 'gesund',
        article: null,
        plural: null,
        uzbek: 'sog‘lom, foydali',
        exampleDe: 'Äpfel sind sehr gesund.',
        exampleUz: 'Olma juda foydali.',
        wordType: 'adjective'
      },
      {
        id: 'voc-m6-20',
        lessonId: 'les-18',
        levelCode: 'a1-2',
        german: 'die Gesundheit',
        article: 'die',
        plural: null,
        uzbek: 'salomatlik, sog‘liq',
        exampleDe: 'Gesundheit ist das Wichtigste.',
        exampleUz: 'Salomatlik eng muhim narsadir.',
        wordType: 'noun'
      },
      {
        id: 'voc-m6-21',
        lessonId: 'les-18',
        levelCode: 'a1-2',
        german: 'sollen',
        article: null,
        plural: null,
        uzbek: 'lozim bo‘lmoq, tavsiya etilmoq',
        exampleDe: 'Du sollst viel schlafen.',
        exampleUz: 'Ko‘p uxlashing lozim.',
        wordType: 'verb'
      },
      {
        id: 'voc-m6-22',
        lessonId: 'les-18',
        levelCode: 'a1-2',
        german: 'Sport treiben',
        article: null,
        plural: null,
        uzbek: 'sport bilan shug‘ullanmoq',
        exampleDe: 'Ich treibe regelmäßig Sport.',
        exampleUz: 'Men muntazam sport bilan shug‘ullanaman.',
        wordType: 'verb'
      },
      {
        id: 'voc-m6-23',
        lessonId: 'les-18',
        levelCode: 'a1-2',
        german: 'spazieren gehen',
        article: null,
        plural: null,
        uzbek: 'sayr qilmoq, aylanmoq',
        exampleDe: 'Am Abend gehe ich spazieren.',
        exampleUz: 'Kechqurun sayrga chiqaman.',
        wordType: 'verb'
      },
      {
        id: 'voc-m6-24',
        lessonId: 'les-18',
        levelCode: 'a1-2',
        german: 'sich ausruhen',
        article: null,
        plural: null,
        uzbek: 'dam olmoq, hordiq chiqarmoq',
        exampleDe: 'Ruh dich gut aus!',
        exampleUz: 'Yaxshilab dam ol!',
        wordType: 'verb'
      },
      {
        id: 'voc-m6-25',
        lessonId: 'les-18',
        levelCode: 'a1-2',
        german: 'der Stress',
        article: 'der',
        plural: null,
        uzbek: 'stress, asabiylik',
        exampleDe: 'Ich habe viel Stress bei der Arbeit.',
        exampleUz: 'Ishda stressim ko‘p.',
        wordType: 'noun'
      },
      {
        id: 'voc-m6-26',
        lessonId: 'les-18',
        levelCode: 'a1-2',
        german: 'die Ernährung',
        article: 'die',
        plural: null,
        uzbek: 'ovqatlanish, taomnoma',
        exampleDe: 'Eine gesunde Ernährung ist wichtig.',
        exampleUz: 'Sog‘lom ovqatlanish muhim.',
        wordType: 'noun'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: '"sollen" fe‘lining tuslanishiga e‘tibor bering:',
      discoveryExamples: [
        { german: 'Ich soll mehr Wasser trinken.', highlight: 'Ich soll', uzbek: 'Men ichishim lozim' },
        { german: 'Du sollst nicht rauchen.', highlight: 'Du sollst', uzbek: 'Sen chekmasliging lozim' },
        { german: 'Er soll im Bett bleiben.', highlight: 'Er soll', uzbek: 'U yotoqda qolishi lozim (ich va er bir xil!)' }
      ],
      patternExplanationUz: '"sollen" modal fe‘li boshqa modal fe‘llar kabi "ich" va "er/sie/es" shaxslarida bir xil shaklga ega ("soll") va oxirgi fe‘l gap oxirida infinitiv bo‘ladi.',
      ruleFormulaUz: 'sollen: ich soll, du sollst, er/sie soll, wir sollen, ihr sollt, sie/Sie sollen'
    },
    grammar: [
      {
        id: 'gra-m6-3',
        lessonId: 'les-18',
        levelCode: 'a1-2',
        titleDe: 'Das Modalverb "sollen" für Ratschläge',
        titleUz: '"sollen" modal fe‘li va tavsiya berish',
        summaryUz: '"sollen" boshqa birovning (shifokor, ota-ona) tavsiyasi yoki buyrug‘ini yetkazishda ishlatiladi ("kerak / lozim").',
        explanationUz: `**1. "sollen" fe‘li tuslanishi:**
- ich **soll**
- du **sollst**
- er / sie / es **soll** (ich va er bir xil!)
- wir **sollen**
- ihr **sollt**
- sie / Sie **sollen**

**2. Modal fe‘llar taqqoslanishi:**
- **können** (imkoniyat): *Ich kann Sport machen.* (Sport qila olaman.)
- **müssen** (qat‘iy majburiyat): *Ich muss Medikamente nehmen.* (Dori ichishim shart.)
- **sollen** (tavsiya / shifokor maslahati): *Der Arzt sagt, ich soll viel schlafen.* (Shifokor ko‘p uxlashim kerakligini aytdi.)

**3. Satzklammer (Qavs qoidasi):**
- *Du **sollst** jeden Tag zwei Liter Wasser **trinken**.*`,
        wordOrderRuleUz: '"sollen" 2-o‘rinda, asosiy fe‘l esa infinitivda gap oxirida: "Sie sollen sich ausruhen."',
        tables: [
          {
            title: 'Modalfe‘llar farqi',
            headers: ['Modalfe‘l', 'Ma‘nosi', 'Namuna gap', 'Tarjimasi'],
            rows: [
              ['können', 'qobiliyat / imkoniyat', 'Ich kann schwimmen.', 'Men suza olaman.'],
              ['müssen', 'majburiyat (shart)', 'Ich muss zum Arzt gehen.', 'Men shifokorga borishim shart.'],
              ['sollen', 'tavsiya / maslahat', 'Du sollst Sport treiben.', 'Sen sport bilan shug‘ullanishing lozim.']
            ]
          }
        ],
        examples: [
          { german: 'Was soll ich tun?', uzbek: 'Men nima qilishim lozim?', highlight: 'soll ich tun' },
          { german: 'Sie sollen keinen Alkohol trinken.', uzbek: 'Siz spirtli ichimlik ichmasligingiz lozim.', highlight: 'sollen ... trinken' }
        ],
        commonMistakes: [
          {
            incorrect: 'Er sollt mehr schlafen.',
            correct: 'Er soll mehr schlafen.',
            explanationUz: '"er/sie/es" uchun "soll" bo‘ladi: er soll.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Gesundheitstipps im Radio',
      titleUz: 'Radiodagi salomatlik maslahatlari',
      situationUz: 'Ertalabki radiodasturda shifokor tinglovchilarga foydali tavsiyalar bermoqda.',
      audioTranscriptDe: 'Radiomoderator: Willkommen zu unserer Sendung "Fit und Gesund"! Heute im Studio: Dr. Claudia Weber. Frau Dr. Weber, was ist Ihr wichtigster Tipp für den Frühling?\nDr. Weber: Mein wichtigster Tipp ist: Bewegen Sie sich an der frischen Luft! Sie sollen täglich mindestens dreißig Minuten spazieren gehen. Und trinken Sie morgens vor dem Frühstück ein großes Glas Wasser. Das weckt den Körper auf!',
      translationUz: 'Radioboshlovchi: "Fit va sog‘lom" eshittirishimizga xush kelibsiz! Bugun studiyamizda Dr. Klaudia Veber. Doktor Veber, bahor uchun eng muhim maslahatingiz nima?\nDr. Veber: Mening eng muhim maslahatim: toza havoda harakatlaning! Siz har kuni kamida o‘ttiz daqiqa sayr qilishingiz lozim. Va ertalab nonushtadan oldin bir katta stakan suv iching. Bu organizmni uyg‘otadi!',
      stage1Global: {
        instructionUz: '1-Bosqich: Shifokorning bosh maslahatini tushuning.',
        questionUz: 'Shifokor nima qilishni tavsiya qilmoqda?',
        options: ['Ko‘p uxlashni', 'Toza havoda harakatlanishni va suv ichishni (Bewegen an der frischen Luft)', 'Faqat dori ichishni', 'Televizor ko‘rishni'],
        correctIndex: 1,
        explanationUz: 'Dr. Veber "Bewegen Sie sich an der frischen Luft!" dedi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Vaqt me‘yorini aniqlang.',
        questions: [
          {
            id: 'l18-q1',
            questionUz: 'Kunda kamida necha daqiqa sayr qilish lozimligi aytildi?',
            options: ['O‘n daqiqa', 'Kamida 30 daqiqa (mindestens dreißig Minuten)', 'Ikki soat', 'Besh daqiqa'],
            correctIndex: 1,
            explanationUz: 'U "täglich mindestens dreißig Minuten spazieren gehen" dedi.'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Moderator', textDe: 'Was ist Ihr wichtigster Tipp?', textUz: 'Eng muhim maslahatingiz nima?' },
          { speaker: 'Dr. Weber', textDe: 'Sie sollen täglich 30 Minuten spazieren gehen.', textUz: 'Har kuni 30 daqiqa sayr qilishingiz lozim.' }
        ],
        keyVocabulary: [
          { german: 'die frische Luft', uzbek: 'toza havo' },
          { german: 'aufwecken', uzbek: 'uyg‘otmoq' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-m6-3',
        lessonId: 'les-18',
        titleDe: 'Gesundheitsregeln für das Büro',
        titleUz: 'Ofis uchun salomatlik qoidalari',
        textDe: 'Viele Menschen sitzen täglich acht Stunden am Schreibtisch. Das ist ungesund für den Rücken und die Augen. Gesundheitsexperten empfehlen: 1. Stehen Sie jede Stunde einmal kurz auf und machen Sie Dehnübungen. 2. Trinken Sie ausreichend Wasser, mindestens 1,5 Liter pro Tag. 3. Gehen Sie in der Mittagspause an die frische Luft. 4. Nehmen Sie die Treppe statt des Aufzugs. So bleiben Sie auch bei der Arbeit fit!',
        translationUz: 'Ko‘p odamlar har kuni yozuv stoli atrofida sakkiz soatlab o‘tirishadi. Bu bel va ko‘zlar uchun zararli. Salomatlik mutaxassislari tavsiya etishadi: 1. Har soatda bir marta qisqa o‘rningizdan turing va cho‘zilish mashqlarini bajaring. 2. Yetarlicha suv iching, kuniga kamida 1,5 litr. 3. Tushlik tanaffusida toza havoga chiqing. 4. Lift o‘rniga zinapoyadan foydalaning. Shunda ishda ham baquvvat bo‘lib qolasiz!',
        vocabularyHints: [
          { german: 'ungesund', uzbek: 'zararli, nosog‘lom' },
          { german: 'die Treppe', uzbek: 'zina, zinapoya' },
          { german: 'ausreichend', uzbek: 'yetarli miqdorda' }
        ],
        questions: [
          {
            id: 'rq-m6-3',
            questionUz: 'Mutaxassislar lift o‘rniga nimadan foydalanishni maslahat bermoqda?',
            options: ['Avtomobildan', 'Zinapoyadan (die Treppe statt des Aufzugs)', 'Eskalatordan', 'Yugurishdan'],
            correctIndex: 1,
            explanationUz: 'Matnda "Nehmen Sie die Treppe statt des Aufzugs" deyilgan.'
          }
        ]
      }
    ],
    writingScaffold: {
      taskTitleUz: 'Sog‘lom turmush tarzi bo‘yicha maslahatlar yozish',
      promptUz: 'Do‘stingizga "sollen" modal fe‘lini ishlatib, sog‘lom bo‘lish uchun 3-4 ta qoida yozing ("Du sollst...").',
      taskInstructionsUz: '1. Suv ichish haqida maslahat bering\n2. Sport bilan shug‘ullanishni ayting\n3. Qaysi zararli narsadan tiyilish kerakligini yozing',
      controlledScaffolding: {
        stepTitleUz: 'Jumla namunalari:',
        sentenceStarters: [
          'Du sollst jeden Tag viel Wasser trinken.',
          'Du sollst regelmäßig Sport...',
          'Du sollst nicht so viel Zucker...'
        ]
      },
      usefulVocabulary: [
        { german: 'Wasser trinken', uzbek: 'suv ichmoq' },
        { german: 'Sport treiben', uzbek: 'sport bilan shug‘ullanmoq' },
        { german: 'gesund essen', uzbek: 'sog‘lom ovqatlanmoq' }
      ],
      modelAnswerDe: 'Für eine gute Gesundheit sollst du jeden Tag zwei Liter Wasser trinken. Du sollst dreimal pro Woche Sport treiben oder joggen gehen. Du sollst viel frisches Obst essen und nicht zu spät schlafen gehen.',
      modelAnswerUz: 'Yaxshi salomatlik uchun har kuni 2 litr suv ichishing lozim. Haftada uch marta sport bilan shug‘ullanishing yoki yugurishing kerak. Ko‘p yangi meva yeyishing va juda kech uxlamasliging lozim.'
    },
    shadowing: [
      {
        id: 'sha-m6-5',
        lessonId: 'les-18',
        levelCode: 'a1-2',
        sentenceDe: 'Du sollst viel frisches Obst essen und Sport treiben.',
        translationUz: 'Ko‘p yangi meva yeyishing va sport bilan shug‘ullanishing lozim.',
        phoneticHint: '[Du zollst fi:l fri-shes Opst es-sen unt Shport tray-ben.]',
        orderIndex: 1
      },
      {
        id: 'sha-m6-6',
        lessonId: 'les-18',
        levelCode: 'a1-2',
        sentenceDe: 'Der Arzt sagt, ich soll mich im Bett ausruhen.',
        translationUz: 'Shifokor mening yotoqda dam olishim kerakligini aytdi.',
        phoneticHint: '[Der Artst zakt, iç zoll miç im Bet aus-ru:-en.]',
        orderIndex: 2
      }
    ],
    practice: [
      {
        id: 'ex-m6-5',
        lessonId: 'les-18',
        type: 'multiple-choice',
        questionUz: '"sollen" fe‘lining "er" shaxsiga mos shakli qaysi?',
        options: ['er sollt', 'er soll', 'er sollst', 'er sollen'],
        correctAnswer: 'er soll',
        explanationUz: '"ich" va "er/sie/es" shaxslarida shakl bir xil bo‘ladi: "er soll".',
        mistakeTipUz: '❌ "er" uchun "soll" bo‘ladi.'
      },
      {
        id: 'ex-m6-6',
        lessonId: 'les-18',
        type: 'word-order',
        questionUz: '"sollen" modal fe‘li bilan gapni to‘g‘ri tuzing:',
        scrambledWords: ['sollst', 'Du', 'trinken', 'Wasser', 'viel'],
        correctAnswer: 'Du sollst viel Wasser trinken',
        explanationUz: 'Du (1) + sollst (2) + viel Wasser (3) + trinken (infinitiv gap oxirida).',
        mistakeTipUz: '❌ Asosiy fe‘l "trinken" gap oxirida keladi.'
      }
    ],
    listening: [],
    writing: []
  }
];
