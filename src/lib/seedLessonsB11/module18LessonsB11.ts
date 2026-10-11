import { Lesson } from '../../types/database';

export const MODULE_18_B11_LESSONS: Lesson[] = [
  // ==========================================
  // LEKTION 52: Moderne Arbeitswelten
  // ==========================================
  {
    id: 'les-52',
    moduleId: 'mod-b1-1-2',
    levelCode: 'b1-1',
    titleDe: 'Moderne Arbeitswelten',
    titleUz: 'Zamonaviy kasbiy muhit va masofaviy ish',
    descriptionUz: 'Masofaviy ish (Homeoffice), moslashuvchan ish soatlari, Passiv Präsens (majhul nisbat: werden + Partizip II).',
    orderIndex: 52,
    estimatedMinutes: 45,
    isPublished: true,
    objectivesUz: [
      'Zamonaviy ish sharoitlari (Homeoffice, Gleitzeit) haqida suhbatlashish',
      'Passiv Präsens formulasi va qo‘llanishini mukammal o‘rganish',
      'Ish jarayonidagi vazifalarni majhul nisbatda ifodalash'
    ],
    warmUp: {
      situationUz: 'Kompaniyangizda yangi masofaviy ishlash tizimi joriy etilmoqda va har bir xodimga o‘z vazifalarini rejalashtirish taklif qilinmoqda.',
      curiosityQuestionUz: 'Nemis tilida "E-maillar har kuni ertalab tekshiriladi" yoki "Hisobot tayyorlanmoqda" deb kim bajargani emas, ishning o‘zi muhim bo‘lganda qanday gap tuziladi?',
      miniDialogue: [
        { speaker: 'David', textDe: 'Wie läuft die Umstellung auf das Homeoffice?', textUz: 'Uydan ishlashga o‘tish qanday ketyapti?' },
        { speaker: 'Elena', textDe: 'Sehr gut! Die Aufgaben werden digital verteilt und die Ergebnisse wöchentlich besprochen.', textUz: 'Juda yaxshi! Vazifalar raqamli tarzda taqsimlanmoqda va natijalar har hafta muhokama qilinmoqda.' }
      ],
      hintUz: 'Ish-harakat kim tomonidan emas, balki nimaning bajarilayotgani muhim bo‘lsa, Passiv (majhul nisbat) qo‘llaniladi.'
    },
    contextDialogue: {
      titleDe: 'Digitales Arbeiten im Team',
      titleUz: 'Jamoada raqamli ishlash',
      situationUz: 'Boshqaruvchi va xodim yangi loyihada vazifalar qanday bajarilishini muhokama qilmoqda.',
      lines: [
        { speaker: 'David', textDe: 'Elena, werden die neuen Kundendaten schon im CRM-System gespeichert?', textUz: 'Elena, yangi mijozlar ma‘lumotlari CRM tizimida saqlanmoqdami?' },
        { speaker: 'Elena', textDe: 'Ja, die Daten werden gerade geprüft und anschließend automatisch hochgeladen.', textUz: 'Ha, ma‘lumotlar hozir tekshirilmoqda va so‘ngra avtomatik tarzda yuklanadi.' },
        { speaker: 'David', textDe: 'Ausgezeichnet. Und wann wird der Monatsbericht an die Geschäftsleitung geschickt?', textUz: 'Ajoyib. Oylik hisobot rahbariyatga qachon yuboriladi?' },
        { speaker: 'Elena', textDe: 'Er wird morgen früh fertiggestellt und sofort versendet.', textUz: 'U ertaga ertalab yakunlanadi va darhol jo‘natiladi.' }
      ],
      usefulPhrases: [
        { german: 'das Homeoffice', uzbek: 'uydan turib ishlash' },
        { german: 'die Gleitzeit', uzbek: 'moslashuvchan ish vaqti' },
        { german: 'hochladen', uzbek: 'internetga yuklamoq' },
        { german: 'erledigen', uzbek: 'bajarmoq, ado etmoq' }
      ],
      culturalNoteUz: 'Germaniyada korxonalarning qariyb 70% qismi xodimlarga haftasiga 2-3 kun uydan ishlash (hybrides Arbeiten) imkoniyatini taqdim etadi.'
    },
    vocabulary: [
      {
        id: 'voc-b1-4-1',
        lessonId: 'les-52',
        levelCode: 'b1-1',
        german: 'das Homeoffice',
        article: 'das',
        uzbek: 'uydan masofaviy ishlash',
        exampleDe: 'Ich arbeite zweimal pro Woche im Homeoffice.',
        exampleUz: 'Men haftada ikki marta uydan ishlayman.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-4-2',
        lessonId: 'les-52',
        levelCode: 'b1-1',
        german: 'die Gleitzeit',
        article: 'die',
        uzbek: 'moslashuvchan ish jadvali',
        exampleDe: 'Dank Gleitzeit kann ich meine Arbeitszeit flexibel einteilen.',
        exampleUz: 'Moslashuvchan grafik tufayli ish vaqtimni erkin taqsimlay olaman.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-4-3',
        lessonId: 'les-52',
        levelCode: 'b1-1',
        german: 'die Vereinbarkeit',
        article: 'die',
        uzbek: 'uyg‘unlashtirish, birga olib borish',
        exampleDe: 'Die Vereinbarkeit von Familie und Beruf ist vielen wichtig.',
        exampleUz: 'Oila va kasbni uyg‘unlashtirish ko‘pchilik uchun muhim.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-4-4',
        lessonId: 'les-52',
        levelCode: 'b1-1',
        german: 'erledigen',
        article: null,
        plural: null,
        uzbek: 'bajarmoq, bitirmoq',
        exampleDe: 'Diese dringende Aufgabe muss sofort erledigt werden.',
        exampleUz: 'Bu shoshilinch vazifa darhol bajarilishi kerak.',
        wordType: 'verb'
      },
      {
        id: 'voc-b1-4-5',
        lessonId: 'les-52',
        levelCode: 'b1-1',
        german: 'die Videokonferenz',
        article: 'die',
        plural: 'die Videokonferenzen',
        uzbek: 'videokonferensiya',
        exampleDe: 'Um zehn Uhr findet eine wichtige Videokonferenz statt.',
        exampleUz: 'Soat o‘nda muhim videokonferensiya bo‘lib o‘tadi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-4-6',
        lessonId: 'les-52',
        levelCode: 'b1-1',
        german: 'speichern',
        article: null,
        plural: null,
        uzbek: 'saqlamoq (fayl yoki ma‘lumotni)',
        exampleDe: 'Vergessen Sie nicht, das Dokument regelmäßig zu speichern.',
        exampleUz: 'Hujjatni muntazam saqlab borishni unutmang.',
        wordType: 'verb'
      },
      {
        id: 'voc-b1-4-7',
        lessonId: 'les-52',
        levelCode: 'b1-1',
        german: 'der Feierabend',
        article: 'der',
        uzbek: 'ish kuni yakuni, hordiq vaqti',
        exampleDe: 'Schönen Feierabend allerseits!',
        exampleUz: 'Barchaga yaxshi dam olish tilayman (ishdan so‘ng)!',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-4-8',
        lessonId: 'les-52',
        levelCode: 'b1-1',
        german: 'produktiv',
        article: null,
        plural: null,
        uzbek: 'samarali, sermahsul',
        exampleDe: 'Heute war ein sehr produktiver Arbeitstag.',
        exampleUz: 'Bugun juda samarali ish kuni bo‘ldi.',
        wordType: 'adjective'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'Aktiv (faol) va Passiv (majhul) gaplarni solishtiring. Ega va to‘ldiruvchi qanday o‘zgargan?',
      discoveryExamples: [
        {
          german: 'Aktiv: Der Mitarbeiter schreibt den Bericht.',
          highlight: 'schreibt',
          uzbek: 'Xodim hisobotni yozmoqda.'
        },
        {
          german: 'Passiv: Der Bericht wird (vom Mitarbeiter) geschrieben.',
          highlight: 'wird ... geschrieben',
          uzbek: 'Hisobot (xodim tomonidan) yozilmoqda.'
        }
      ],
      patternExplanationUz: 'Aktiv gapdagi Akkusativ to‘ldiruvchi (den Bericht) Passiv gapda bosh kelishikdagi egaga (Der Bericht) aylanadi. Formulasi: werden (tuslanadi) + Partizip II (oxirida). Bajaruvchi shaxs kerak bo‘lsa "von + Dativ" orqali beriladi.',
      ruleFormulaUz: 'Passiv Präsens = werden (hozirgi zamonda) + ... + Partizip II'
    },
    grammar: [
      {
        id: 'gra-52',
        lessonId: 'les-52',
        levelCode: 'b1-1',
        titleDe: 'Das Passiv Präsens (Vorgangspassiv)',
        titleUz: 'Hozirgi zamon majhul nisbati (Passiv Präsens)',
        summaryUz: 'Ish-harakat kim tomonidan bajarilganidan ko‘ra, harakatning o‘zi muhim bo‘lganda qo‘llaniladi.',
        explanationUz: `Passiv nemis tilida matbuot, texnika, qonun va rasmiy idora yozishmalarida eng asosiy grammatik shakllardan biridir.

Formulasi:
**werden** (2-o‘rinda shaxsga qarab tuslanadi) + ... + **Partizip II** (gapning eng oxirida).

Shaxslar bo‘yicha tuslanishi:
- ich **werde** gefragt
- du **wirst** gefragt
- er/sie/es **wird** gefragt
- wir **werden** gefragt
- ihr **werdet** gefragt
- sie/Sie **werden** gefragt

Bajaruvchi shaxsni ko‘rsatish:
- Inson / muallif: **von + Dativ** (*Das Buch wird vom Autor vorgestellt.*)
- Vosita / sabab: **durch + Akkusativ** (*Der Wald wird durch Feuer zerstört.*)`,
        tables: [
          {
            title: 'Aktivdan Passivga o‘tish',
            headers: ['Aktiv gap', 'Passiv shakli', 'O‘zbekcha tarjimasi'],
            rows: [
              ['Man repariert das Auto.', 'Das Auto wird repariert.', 'Mashina ta‘mirlanmoqda.'],
              ['Der Chef liest die E-Mail.', 'Die E-Mail wird vom Chef gelesen.', 'Xat boshliq tomonidan o‘qilmoqda.'],
              ['Wir laden die Dateien hoch.', 'Die Dateien werden hochgeladen.', 'Fayllar yuklanmoqda.']
            ]
          }
        ],
        examples: [
          {
            german: 'In Deutschland werden täglich Millionen Tassen Kaffee getrunken.',
            uzbek: 'Germaniyada har kuni millionlab finjon qahva ichiladi.',
            highlight: 'werden ... getrunken'
          },
          {
            german: 'Die Software wird ständig aktualisiert.',
            uzbek: 'Dasturiy ta‘minot doimiy ravishda yangilanib boriladi.',
            highlight: 'wird ... aktualisiert'
          }
        ],
        commonMistakes: [
          {
            incorrect: 'Das Haus wird gebaut von der Arbeiter.',
            correct: 'Das Haus wird von den Arbeitern gebaut.',
            explanationUz: 'Partizip II (gebaut) gapning eng oxirida kelishi shart va "von" predlogi Dativ talab qiladi.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Ein typischer Tag im modernen Büro',
      titleUz: 'Zamonaviy ofisdagi odatiy ish kuni',
      situationUz: 'Bir kompaniyaning IT bo‘limida ish kuni qanday tashkil etilgani haqida audio lavha.',
      audioTranscriptDe: 'In unserem Unternehmen beginnt der Arbeitstag flexibel zwischen 7 und 9 Uhr. Jeden Morgen werden die Aufgaben im Team besprochen. Dringende Kundenanfragen werden sofort bearbeitet. Alle Dokumente werden in der Cloud gespeichert, damit auch Kollegen im Homeoffice Zugriff darauf haben. Einmal pro Woche wird ein großes Firmenmeeting abgehalten, bei dem neue Projekte vorgestellt werden.',
      translationUz: 'Bizning korxonada ish kuni soat 7 dan 9 gacha moslashuvchan boshlanadi. Har kuni ertalab jamoada vazifalar muhokama qilinadi. Shoshilinch mijoz murojaatlari darhol ko‘rib chiqiladi. Barcha hujjatlar bulutli xotirada saqlanadi, shunda uydan ishlayotgan hamkasblar ham ulardan foydalana oladi. Haftada bir marta yangi loyihalar taqdim etiladigan katta korxona yig‘ilishi o‘tkaziladi.',
      stage1Global: {
        instructionUz: '1-Bosqich: Kompaniyada hujjatlar qayerda saqlanadi?',
        questionUz: 'Hujjatlar nima uchun bulutli xotirada saqlanadi?',
        options: ['Qog‘ozni tejash uchun', 'Uydan ishlayotgan hamkasblar ham kira olishi uchun', 'Server buzilib qolgani sababli'],
        correctIndex: 1,
        explanationUz: '"damit auch Kollegen im Homeoffice Zugriff darauf haben" deb ta‘kidlandi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Passiv fe‘llarni tinglang va aniqlang.',
        questions: [
          {
            id: 'l52-q1',
            questionUz: 'Kompaniyada katta yig‘ilish necha marta o‘tkaziladi?',
            options: ['Har kuni', 'Haftada bir marta', 'Oyda bir marta'],
            correctIndex: 1,
            explanationUz: '"Einmal pro Woche wird ein großes Firmenmeeting abgehalten".'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Sprecher', textDe: 'Jeden Morgen werden die Aufgaben besprochen.', textUz: 'Har tong vazifalar muhokama qilinadi.' },
          { speaker: 'Sprecher', textDe: 'Dringende Anfragen werden sofort bearbeitet.', textUz: 'Shoshilinch so‘rovlar darhol ko‘rib chiqiladi.' }
        ],
        keyVocabulary: [
          { german: 'die Anfrage', uzbek: 'so‘rov, murojaat' },
          { german: 'abhalten (Meeting)', uzbek: 'o‘tkazmoq (yig‘ilishni)' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-52',
        lessonId: 'les-52',
        levelCode: 'b1-1',
        titleDe: 'Arbeiten 4.0: Wie verändert sich der Beruf?',
        titleUz: 'Mehnat 4.0: Kasblar qanday o‘zgarmoqda?',
        textDe: 'Die Digitalisierung hat die Arbeitswelt grundlegend verändert. Feste Arbeitsplätze werden zunehmend durch flexible Schreibtische ersetzt. In vielen Berufen wird nicht mehr kontrolliert, wie viele Stunden jemand im Büro sitzt, sondern welche Ergebnisse erzielt werden. Allerdings bringt diese Freiheit auch Herausforderungen mit sich: Die Grenze zwischen Arbeit und Freizeit wird oft verwischt. Psychologen raten deshalb dazu, nach Feierabend dienstliche Benachrichtigungen konsequent auszuschalten.',
        translationUz: 'Raqamlashtirish mehnat olamini tubdan o‘zgartirdi. Doimiy qat‘iy ish stollari borgan sari moslashuvchan o‘rinlar bilan almashtirilmoqda. Ko‘plab kasblarda insonning ofisda necha soat o‘tirgani emas, qanday natijalarga erishgani nazorat qilinadi. Biroq bu erkinlik o‘zi bilan qiyinchiliklarni ham keltiradi: ish va dam olish o‘rtasidagi chegara ko‘pincha xiralashib ketadi. Shu sababli psixologlar ishdan so‘ng xizmat bildirishnomalarini qat‘iy o‘chirib qo‘yishni tavsiya qilishadi.',
        vocabularyHints: [
          { german: 'die Digitalisierung', uzbek: 'raqamlashtirish' },
          { german: 'verwischen', uzbek: 'xiralashmoq, chegarasi yo‘qolmoq' }
        ],
        questions: [
          {
            id: 'q-rea-52-1',
            questionUz: 'Zamonaviy kasblarda asosan nima nazorat qilinmoqda?',
            options: ['Ofisda o‘tirilgan soatlar soni', 'Erishilgan aniq natijalar', 'Kiyinish uslubi'],
            correctIndex: 1,
            explanationUz: 'Matnda "...sondern welche Ergebnisse erzielt werden" deb aytilgan.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-52',
      lessonId: 'les-52',
      levelCode: 'b1-1',
      taskDe: 'Beschreiben Sie Ihren Arbeitsalltag mit dem Passiv Präsens.',
      taskUz: 'Ish yoki o‘qish joyingizdagi jarayonlarni Passiv Präsens (wird / werden) yordamida yozing.',
      instructionUz: 'Nimalar tekshirilishi, qanday fayllar yuklanishi va qanday qarorlar qabul qilinishini bayon qiling.',
      hints: ['Bei uns werden täglich...', 'Die E-Mails werden...', 'Das Projekt wird...'],
      sampleSolutionDe: 'In meinem Arbeitsalltag werden viele Aufgaben digital erledigt. Morgens werden zuerst die E-Mails beantwortet. Danach werden wichtige Berichte geschrieben und im System gespeichert. Einmal pro Woche werden neue Pläne im Team besprochen.',
      scaffold: {
        openingDe: 'In meinem Arbeitsbereich:',
        closingDe: 'So läuft ein normaler Tag ab.',
        usefulPhrasesDe: ['Es wird ... gemacht', 'Die Aufgaben werden erledigt', 'Berichte werden geschrieben...']
      }
    },
    shadowing: [
      {
        id: 'sha-52',
        lessonId: 'les-52',
        levelCode: 'b1-1',
        sentenceDe: 'In unserem Unternehmen werden alle wichtigen Dokumente sicher in der Cloud gespeichert.',
        translationUz: 'Bizning korxonada barcha muhim hujjatlar ishonchli tarzda bulutli xotirada saqlanadi.',
        phoneticHint: '[In un-ze-rem Un-ter-ne-men ver-den al-le vih-ti-gen Do-ku-men-te zi-her in der Klaut ge-shpay-hert]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-52-q1',
        type: 'fill-blank',
        questionUz: '"werden" fe‘lining ko‘plik shaklini qo‘ying: "Die neuen Produkte _____ weltweit verkauft."',
        blankSentence: 'Die neuen Produkte [blank] weltweit verkauft.',
        options: ['werden', 'wird', 'wurden', 'worden'],
        correctAnswer: 'werden',
        explanationUz: '"Die neuen Produkte" ko‘plikda bo‘lgani uchun "werden" ishlatiladi.',
        mistakeTipUz: '❌ Ko‘plik uchun: sie werden verkauft.'
      },
      {
        id: 'prac-52-q2',
        type: 'multiple-choice',
        questionUz: '"Der Mechaniker repariert das Auto" jumlasining to‘g‘ri Passiv shakli qaysi?',
        options: [
          'Das Auto wird vom Mechaniker repariert.',
          'Das Auto ist vom Mechaniker reparieren.',
          'Das Auto wurde repariert gestern.',
          'Der Mechaniker wird das Auto reparieren.'
        ],
        correctAnswer: 'Das Auto wird vom Mechaniker repariert.',
        explanationUz: 'Passiv Präsens: Das Auto (ega) + wird (fe‘l) + vom Mechaniker + repariert (Partizip II oxirida).',
        mistakeTipUz: '❌ Passiv formulasi: wird + ... + Partizip II.'
      },
      {
        id: 'prac-52-q3',
        type: 'word-order',
        questionUz: 'Gapni to‘g‘ri so‘z tartibida tuzing:',
        scrambledWords: ['wird', 'Das', 'morgen', 'unterschrieben', 'Dokument'],
        correctAnswer: 'Das Dokument wird morgen unterschrieben',
        explanationUz: 'Das Dokument (1) + wird (2) + morgen (3) + unterschrieben (Partizip II oxirida).',
        mistakeTipUz: '❌ Partizip II "unterschrieben" gapning eng oxirida turadi.'
      }
    ]
  },

  // ==========================================
  // LEKTION 53: Vorstellungsgespräch & Bewerbung
  // ==========================================
  {
    id: 'les-53',
    moduleId: 'mod-b1-1-2',
    levelCode: 'b1-1',
    titleDe: 'Vorstellungsgespräch & Bewerbung',
    titleUz: 'Ish suhbati va arizalar tahlili',
    descriptionUz: 'Ishga kirish suhbati, o‘z kuchli tomonlarini ko‘rsatish, Passiv mit Modalverben (muss / kann ... Partizip II + werden).',
    orderIndex: 53,
    estimatedMinutes: 45,
    isPublished: true,
    objectivesUz: [
      'Germaniyada ish suhbati (Vorstellungsgespräch) qoidalarini o‘zlashtirish',
      'Modal fe‘llar bilan majhul nisbat (Passiv mit Modalverben) formulasini o‘rganish',
      'Kuchli va zaif tomonlar haqida madaniy javob berish'
    ],
    warmUp: {
      situationUz: 'Nufuzli xalqaro kompaniyada rezyumeyingiz qabul qilindi va sizni ish suhbatiga taklif qilishdi.',
      curiosityQuestionUz: '"Bu vazifa bugun bajarilishi kerak" jumlasi nemischa qanday aytiladi?',
      miniDialogue: [
        { speaker: 'Bewerber', textDe: 'Müssen die Zeugnisse im Original vorgelegt werden?', textUz: 'Diplom va tavsiyanomalar asl nusxada taqdim etilishi kerakmi?' },
        { speaker: 'Personalchefin', textDe: 'Nein, die Unterlagen können vorab als PDF hochgeladen werden.', textUz: 'Yo‘q, hujjatlar oldindan PDF ko‘rinishida yuklanishi mumkin.' }
      ],
      hintUz: 'Modal fe‘l kelganda: modal fe‘l tuslanadi, Partizip II va "werden" infinitivda eng oxirida keladi.'
    },
    contextDialogue: {
      titleDe: 'Das entscheidende Bewerbungsgespräch',
      titleUz: 'Hal qiluvchi ish suhbati',
      situationUz: 'Kadrlar bo‘limi boshlig‘i nomzod bilan lavozim talablari haqida gaplashmoqda.',
      lines: [
        { speaker: 'Frau Krüger', textDe: 'Guten Tag, Herr Karimov! Warum sollten wir uns für Sie entscheiden?', textUz: 'Xayrli kun, janob Karimov! Nima sababdan biz sizni tanlashimiz kerak?' },
        { speaker: 'Herr Karimov', textDe: 'Weil ich mehrjährige Erfahrung im Projektmanagement mitbringe und mich schnell in neue Teams einarbeite.', textUz: 'Chunki men loyiha boshqaruvida ko‘p yillik tajribaga egaman va yangi jamoalarga tez moslashaman.' },
        { speaker: 'Frau Krüger', textDe: 'Sehr gut. In dieser Position müssen oft schwierige Entscheidungen unter Zeitdruck getroffen werden.', textUz: 'Juda yaxshi. Bu lavozimda ko‘pincha vaqt tig‘izligida qiyin qarorlar qabul qilinishi kerak.' },
        { speaker: 'Herr Karimov', textDe: 'Damit kann ich gut umgehen. Ich bleibe auch in stressigen Momenten ruhig und lösungsorientiert.', textUz: 'Buni uddalay olaman. Men stressli vaziyatlarda ham xotirjam va yechimga yo‘naltirilgan bo‘lib qolaman.' }
      ],
      usefulPhrases: [
        { german: 'sich einarbeiten', uzbek: 'yangi ishga kirishib ketmoq, o‘rganmoq' },
        { german: 'Entscheidungen treffen', uzbek: 'qarorlar qabul qilmoq' },
        { german: 'unter Zeitdruck', uzbek: 'vaqt tig‘izligida, shoshilinchda' },
        { german: 'lösungsorientiert', uzbek: 'yechimga qaratilgan' }
      ],
      culturalNoteUz: 'Nemis ish suhbatlarida kamtarlikdan ko‘ra aniq faktlar va yutuqlar (masalan: "Men loyihani 15% tezroq bajarganman") ko‘proq qadrlanadi.'
    },
    vocabulary: [
      {
        id: 'voc-b1-5-1',
        lessonId: 'les-53',
        levelCode: 'b1-1',
        german: 'die Stärke',
        article: 'die',
        plural: 'die Stärken',
        uzbek: 'kuchli tomon, ijobiy xislat',
        exampleDe: 'Eine meiner größten Stärken ist Zuverlässigkeit.',
        exampleUz: 'Mening eng katta kuchli tomonlarimdan biri — ishonchlilikdir.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-5-2',
        lessonId: 'les-53',
        levelCode: 'b1-1',
        german: 'die Schwäche',
        article: 'die',
        plural: 'die Schwächen',
        uzbek: 'zaif tomon, kamchilik',
        exampleDe: 'Im Gespräch sollte man Schwächen ehrlich, aber positiv darstellen.',
        exampleUz: 'Suhbatda kamchiliklarni samimiy, ammo ijobiy qilib ko‘rsatish lozim.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-5-3',
        lessonId: 'les-53',
        levelCode: 'b1-1',
        german: 'die Gehaltsvorstellung',
        article: 'die',
        plural: 'die Gehaltsvorstellungen',
        uzbek: 'maosh bo‘yicha talab / umid',
        exampleDe: 'Welche Gehaltsvorstellung haben Sie für diese Stelle?',
        exampleUz: 'Ushbu lavozim uchun qanday maosh kutmoqdasiz?',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-5-4',
        lessonId: 'les-53',
        levelCode: 'b1-1',
        german: 'die Qualifikation',
        article: 'die',
        plural: 'die Qualifikationen',
        uzbek: 'malaka, mutaxassislik darajasi',
        exampleDe: 'Ihre Qualifikationen passen perfekt zu unserem Anforderungsprofil.',
        exampleUz: 'Sizning malakangiz bizning talablarimizga to‘liq mos keladi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-5-5',
        lessonId: 'les-53',
        levelCode: 'b1-1',
        german: 'überzeugen',
        article: null,
        plural: null,
        uzbek: 'ishontirmoq',
        exampleDe: 'Er konnte die Kommission mit seinem Fachwissen überzeugen.',
        exampleUz: 'U komissiyani o‘zining sohaga oid bilimlari bilan ishontira oldi.',
        wordType: 'verb'
      },
      {
        id: 'voc-b1-5-6',
        lessonId: 'les-53',
        levelCode: 'b1-1',
        german: 'belastbar',
        article: null,
        plural: null,
        uzbek: 'stressga chidamli, bardoshli',
        exampleDe: 'In diesem Beruf muss man sehr belastbar sein.',
        exampleUz: 'Bu kasbda juda chidamli bo‘lish talab etiladi.',
        wordType: 'adjective'
      },
      {
        id: 'voc-b1-5-7',
        lessonId: 'les-53',
        levelCode: 'b1-1',
        german: 'das Anschreiben',
        article: 'das',
        plural: 'die Anschreiben',
        uzbek: 'ishga ilova xati (motivatsion xat)',
        exampleDe: 'Das Anschreiben sollte individuell formuliert werden.',
        exampleUz: 'Ilova xati har bir ish uchun alohida yozilishi kerak.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-5-8',
        lessonId: 'les-53',
        levelCode: 'b1-1',
        german: 'beilegen',
        article: null,
        plural: null,
        uzbek: 'ilova qilmoq, qo‘shib yubormoq',
        exampleDe: 'Ich habe alle Zeugnisse der Bewerbung beigelegt.',
        exampleUz: 'Arizaga barcha diplom va baholarni ilova qildim.',
        wordType: 'verb'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'Quyidagi gaplarga e‘tibor bering. Modal fe‘l va Passiv qanday birlashgan?',
      discoveryExamples: [
        {
          german: 'Diese Aufgabe muss heute erledigt werden.',
          highlight: 'muss ... erledigt werden',
          uzbek: 'Bu vazifa bugun bajarilishi shart.'
        },
        {
          german: 'Das Problem kann schnell gelöst werden.',
          highlight: 'kann ... gelöst werden',
          uzbek: 'Muammo tezda hal etilishi mumkin.'
        }
      ],
      patternExplanationUz: 'Modal fe‘l tuslanib 2-o‘rinda turadi, gapning oxiriga esa avval asosiy fe‘lning Partizip II shakli, so‘ng "werden" ning infinitiv shakli tushadi.',
      ruleFormulaUz: 'Modalverb (tuslangan) + ... + Partizip II + werden'
    },
    grammar: [
      {
        id: 'gra-53',
        lessonId: 'les-53',
        levelCode: 'b1-1',
        titleDe: 'Das Passiv mit Modalverben im Präsens',
        titleUz: 'Modal fe‘llar bilan majhul nisbat (Passiv mit Modalverben)',
        summaryUz: 'Majburiyat yoki imkoniyatni majhul nisbatda bildirish: muss/kann ... Partizip II + werden.',
        explanationUz: `Modal fe‘llar bilan Passiv formulasi:
**Modal fe‘l** (ich muss, das kann, die Dokumente sollen) + ... + **Partizip II** + **werden** (infinitivda).

Misollar:
1. **müssen (shart / majbur):**
   *Die Rechnung **muss** sofort **bezahlt werden**.* (Hisob darhol to‘lanishi shart.)
2. **können (mumkin / imkon bor):**
   *Der Termin **kann** online **verschoben werden**.* (Uchrashuv vaqti onlayn o‘zgartirilishi mumkin.)
3. **dürfen (ruxsat bor / inkorida taqiqlanadi):**
   *Hier **darf** nicht **geraucht werden**.* (Bu yerda chekish taqiqlanadi / chekilishi mumkin emas.)
4. **sollen (maslahat / talab):**
   *Die Unterlagen **sollen** bis Freitag **eingereicht werden**.* (Hujjatlar jumagacha topshirilishi lozim.)`,
        tables: [
          {
            title: 'Modal fe‘llar bilan Passiv namunalari',
            headers: ['Modal fe‘l', 'Passiv gap', 'O‘zbekcha tarjimasi'],
            rows: [
              ['müssen', 'Das Formular muss ausgefüllt werden.', 'Formulyar to‘ldirilishi kerak.'],
              ['können', 'Fehler können korrigiert werden.', 'Xatolar tuzatilishi mumkin.'],
              ['dürfen (inkor)', 'Fotos dürfen hier nicht gemacht werden.', 'Bu yerda suratga tushirish taqiqlanadi.']
            ]
          }
        ],
        examples: [
          {
            german: 'Alle Fragen müssen wahrheitsgemäß beantwortet werden.',
            uzbek: 'Barcha savollarga to‘g‘ri va haqqoniy javob berilishi shart.',
            highlight: 'müssen ... beantwortet werden'
          },
          {
            german: 'Die Arbeitszeit kann flexibel vereinbart werden.',
            uzbek: 'Ish vaqti moslashuvchan tarzda kelishib olinishi mumkin.',
            highlight: 'kann ... vereinbart werden'
          }
        ],
        commonMistakes: [
          {
            incorrect: 'Das Dokument muss werden unterschrieben.',
            correct: 'Das Dokument muss unterschrieben werden.',
            explanationUz: '"werden" eng oxirida keladi: Partizip II (unterschrieben) + werden.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Tipps fürs Vorstellungsgespräch',
      titleUz: 'Ish suhbati uchun maslahatlar',
      situationUz: 'Karyera bo‘yicha ekspert muvaffaqiyatli suhbatdan o‘tish sirlarini ochib bermoqda.',
      audioTranscriptDe: 'Expertin: Ein erfolgreiches Vorstellungsgespräch erfordert gute Vorbereitung. Vor dem Termin muss die Website des Unternehmens gründlich studiert werden. Fragen zu eigenen Schwächen sollten nicht vermieden, sondern klug formuliert werden. Pünktlichkeit ist oberstes Gebot: Es darf auf keinen Fall zu spät gekommen werden. Und vergessen Sie nicht: Auch vom Bewerber dürfen am Ende eigene Fragen gestellt werden!',
      translationUz: 'Ekspert: Muvaffaqiyatli ish suhbati puxta tayyorgarlikni talab qiladi. Uchrashuvdan oldin korxona veb-sayti sinchiklab o‘rganilishi shart. O‘z zaif tomonlari haqidagi savollardan qochmasdan, ularga oqilona javob berilishi kerak. Vaqtga rioya qilish — eng oliy qoida: hech qanday holatda kechikilmasligi lozim. Va unutmang: oxirida nomzod tomonidan ham o‘z savollari berilishi mumkin!',
      stage1Global: {
        instructionUz: '1-Bosqich: Ekspert qanday tavsiya berdi?',
        questionUz: 'Uchrashuvdan oldin nima qilinishi shart?',
        options: ['Yangi kostyum sotib olinishi kerak', 'Kompaniya sayti sinchiklab o‘rganilishi shart', 'Do‘stlar bilan maslahatlashish lozim'],
        correctIndex: 1,
        explanationUz: '"Vor dem Termin muss die Website des Unternehmens gründlich studiert werden".'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Tafsilotlarni aniqlang.',
        questions: [
          {
            id: 'l53-q1',
            questionUz: 'Suhbat oxirida nomzodga nima qilishga ruxsat etiladi?',
            options: ['Kompaniyani tark etishi mumkin', 'O‘z savollarini berishi mumkin', 'Qarorni darhol talab qilishi shart'],
            correctIndex: 1,
            explanationUz: '"...dürfen am Ende eigene Fragen gestellt werden".'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Expertin', textDe: 'Die Website muss gründlich studiert werden.', textUz: 'Sayt sinchiklab o‘rganilishi shart.' },
          { speaker: 'Expertin', textDe: 'Es dürfen auch eigene Fragen gestellt werden.', textUz: 'O‘z savollari ham berilishi mumkin.' }
        ],
        keyVocabulary: [
          { german: 'das oberste Gebot', uzbek: 'eng asosiy qoida' },
          { german: 'klug formulieren', uzbek: 'oqilona ifodalamoq' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-53',
        lessonId: 'les-53',
        levelCode: 'b1-1',
        titleDe: 'Die Kunst der Selbstpräsentation',
        titleUz: 'O‘zini tanishtirish san‘ati',
        textDe: 'Im Vorstellungsgespräch entscheidet oft der erste Eindruck. Psychologen haben herausgefunden, dass Sympathie innerhalb weniger Sekunden aufgebaut wird. Daher muss auf Körpersprache, Blickkontakt und einen festen Händedruck geachtet werden. Im Hauptteil des Gesprächs sollte die eigene Motivation deutlich gemacht werden. Zeigen Sie, welchen Mehrwert Sie dem Unternehmen bringen können. Gehaltsverhandlungen sollten allerdings nicht direkt zu Beginn angesprochen werden.',
        translationUz: 'Ish suhbatida ko‘pincha birinchi taassurot hal qiluvchi rol o‘ynaydi. Psixologlar xayrixohlik bir necha soniya ichida shakllanishini aniqlashgan. Shu sababli tana tili, nigoh muloqoti va dadil qo‘l berib ko‘rishishga e‘tibor qaratilishi shart. Suhbatning asosiy qismida shaxsiy motivatsiya aniq ko‘rsatilishi kerak. Korxonaga qanday qo‘shimcha qiymat bera olishingizni ko‘rsating. Biroq maosh muzokaralari suhbat boshidanoq ko‘tarilmasligi kerak.',
        vocabularyHints: [
          { german: 'der Mehrwert', uzbek: 'qo‘shimcha foyda / qiymat' },
          { german: 'der Händedruck', uzbek: 'qo‘l berib ko‘rishish' }
        ],
        questions: [
          {
            id: 'q-rea-53-1',
            questionUz: 'Maosh haqidagi muzokaralar qachon qilinmasligi kerak?',
            options: ['Suhbat boshidanoq', 'Suhbat oxirida', 'Hech qachon'],
            correctIndex: 0,
            explanationUz: 'Matnda "Gehaltsverhandlungen sollten allerdings nicht direkt zu Beginn angesprochen werden" deb aytilgan.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-53',
      lessonId: 'les-53',
      levelCode: 'b1-1',
      taskDe: 'Schreiben Sie drei Regeln für ein Bewerbungsgespräch mit Passiv + Modalverb.',
      taskUz: 'Ish suhbati bo‘yicha 3 ta qoidani "muss / darf / kann ... werden" shaklida yozing.',
      instructionUz: 'Kiyinish, tayyorgarlik va o‘zini tutish qoidalarini keltiring.',
      hints: ['Die Kleidung muss...', 'Fragen sollten...', 'Es darf nicht...'],
      sampleSolutionDe: 'Vor dem Gespräch muss das Unternehmen genau recherchiert werden. Es sollte professionelle Kleidung gewählt werden. Auf keinen Fall darf zu spät zum Termin erschienen werden.',
      scaffold: {
        openingDe: 'Wichtige Regeln fürs Gespräch:',
        closingDe: 'So hinterlässt man einen guten Eindruck.',
        usefulPhrasesDe: ['...muss vorbereitet werden', '...sollte beachtet werden', 'Es darf nicht...']
      }
    },
    shadowing: [
      {
        id: 'sha-53',
        lessonId: 'les-53',
        levelCode: 'b1-1',
        sentenceDe: 'In einem professionellen Vorstellungsgespräch müssen alle Fragen ehrlich und kompetent beantwortet werden.',
        translationUz: 'Professional ish suhbatida barcha savollarga samimiy va bilimdonlik bilan javob berilishi shart.',
        phoneticHint: '[In ay-nem pro-fes-syo-nel-len For-shtel-lungs-ge-shprêh mys-sen al-le Fra-gen ehr-lih unt kom-pe-tent be-ant-vor-tet ver-den]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-53-q1',
        type: 'fill-blank',
        questionUz: 'Gapni to‘ldiring: "Der Vertrag muss bis morgen unterschrieben _____."',
        blankSentence: 'Der Vertrag muss bis morgen unterschrieben [blank].',
        options: ['werden', 'wird', 'worden', 'haben'],
        correctAnswer: 'werden',
        explanationUz: 'Modal fe‘l bilan Passiv oxirida "werden" infinitivda bo‘ladi.',
        mistakeTipUz: '❌ Modalverb + Partizip II + werden: unterschrieben werden.'
      },
      {
        id: 'prac-53-q2',
        type: 'multiple-choice',
        questionUz: '"Bu topshiriq kechiktirilmasligi kerak" qaysi gapda to‘g‘ri ifodalangan?',
        options: [
          'Diese Aufgabe darf nicht verschoben werden.',
          'Diese Aufgabe wird nicht verschoben dürfen.',
          'Diese Aufgabe muss nicht verschoben.'
        ],
        correctAnswer: 'Diese Aufgabe darf nicht verschoben werden.',
        explanationUz: 'Taqiq / nojo‘yalik uchun "darf nicht ... Partizip II + werden" qo‘llaniladi.',
        mistakeTipUz: '❌ darf nicht verschoben werden.'
      },
      {
        id: 'prac-53-q3',
        type: 'word-order',
        questionUz: 'Gapni to‘g‘ri so‘z tartibida tuzing:',
        scrambledWords: ['können', 'online', 'Die', 'werden', 'hochgeladen', 'Dokumente'],
        correctAnswer: 'Die Dokumente können online hochgeladen werden',
        explanationUz: 'Die Dokumente (1) + können (2) + online (3) + hochgeladen (4) + werden (5).',
        mistakeTipUz: '❌ Partizip II va werden ketma-ket gap oxirida turadi: hochgeladen werden.'
      }
    ]
  },

  // ==========================================
  // LEKTION 54: Rechte, Pflichten und Arbeitsvertrag
  // ==========================================
  {
    id: 'les-54',
    moduleId: 'mod-b1-1-2',
    levelCode: 'b1-1',
    titleDe: 'Rechte, Pflichten und Arbeitsvertrag',
    titleUz: 'Mehnat shartnomasi, huquqlar va majburiyatlar',
    descriptionUz: 'Ish shartnomasi bandlari, mehnat huquqi, Passiv Präteritum (wurde + Partizip II).',
    orderIndex: 54,
    estimatedMinutes: 45,
    isPublished: true,
    objectivesUz: [
      'Mehnat shartnomasidagi huquq va majburiyatlarni tushunish',
      'Passiv Präteritum (o‘tgan zamon majhul nisbati) formulasini o‘rganish',
      'Ishdan bo‘shash, ta‘til va sinov muddati (Probezeit) haqida gapirish'
    ],
    warmUp: {
      situationUz: 'Yangi ishga kirganingizda sizga 10 sahifalik nemischa mehnat shartnomasi (Arbeitsvertrag) taqdim etildi.',
      curiosityQuestionUz: '"Shartnoma kecha imzolandi" yoki "Korxona 1990-yilda tashkil topgan" deganda o‘tgan zamon majhul nisbati qanday yasaladi?',
      miniDialogue: [
        { speaker: 'Markus', textDe: 'Wann wurde dein Arbeitsvertrag eigentlich unterschrieben?', textUz: 'Mehnat shartnomang qachon imzolandi o‘zi?' },
        { speaker: 'Anna', textDe: 'Er wurde letzte Woche unterzeichnet, nachdem alle Bedingungen geklärt worden waren.', textUz: 'Barcha shartlar kelishib olingach, u o‘tgan hafta imzolandi.' }
      ],
      hintUz: 'O‘tgan zamonda majhul nisbat uchun "werden" ning Präteritum shakli: wurde / wurden ishlatiladi.'
    },
    contextDialogue: {
      titleDe: 'Der neue Arbeitsvertrag',
      titleUz: 'Yangi mehnat shartnomasi',
      situationUz: 'Yurist va xodim shartnoma bandlarini va o‘tgan hafta qanday o‘zgarishlar kiritilganini ko‘rib chiqmoqda.',
      lines: [
        { speaker: 'Rechtsanwalt', textDe: 'Frau Weber, Ihr Vertrag wurde von unserer Rechtsabteilung geprüft.', textUz: 'Veber xonim, sizning shartnomangiz yuridik bo‘limimiz tomonidan tekshirildi.' },
        { speaker: 'Frau Weber', textDe: 'Wurden meine Wünsche bezüglich der Probezeit berücksichtigt?', textUz: 'Sinov muddati bo‘yicha istaklarim inobatga olindimi?' },
        { speaker: 'Rechtsanwalt', textDe: 'Ja, die Probezeit wurde auf drei Monate verkürzt und der Urlaubsanspruch wurde auf 30 Tage erhöht.', textUz: 'Ha, sinov muddati uch oyga qisqartirildi va ta‘til huquqi 30 kunga oshirildi.' },
        { speaker: 'Frau Weber', textDe: 'Hervorragend! Dann kann der Vertrag jetzt unterschrieben werden.', textUz: 'Juda soz! Unda shartnoma endi imzolanishi mumkin.' }
      ],
      usefulPhrases: [
        { german: 'die Probezeit', uzbek: 'sinov muddati' },
        { german: 'der Urlaubsanspruch', uzbek: 'ta‘tilga bo‘lgan huquq' },
        { german: 'berücksichtigen', uzbek: 'hisobga olmoq, inobatga olmoq' },
        { german: 'die Kündigungsfrist', uzbek: 'ishdan bo‘shash haqida oldindan ogohlantirish muddati' }
      ],
      culturalNoteUz: 'Germaniyada sinov muddati (Probezeit) odatda 3 oydan 6 oygacha davom etadi. Bu davrda har ikki tomon shartnomani 2 hafta ichida bekor qila oladi.'
    },
    vocabulary: [
      {
        id: 'voc-b1-6-1',
        lessonId: 'les-54',
        levelCode: 'b1-1',
        german: 'der Arbeitsvertrag',
        article: 'der',
        plural: 'die Arbeitsverträge',
        uzbek: 'mehnat shartnomasi',
        exampleDe: 'Der Arbeitsvertrag regelt Gehalt und Arbeitszeit.',
        exampleUz: 'Mehnat shartnomasi maosh va ish soatlarini tartibga soladi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-6-2',
        lessonId: 'les-54',
        levelCode: 'b1-1',
        german: 'die Probezeit',
        article: 'die',
        plural: 'die Probezeiten',
        uzbek: 'sinov muddati',
        exampleDe: 'Während der Probezeit gilt eine verkürzte Kündigungsfrist.',
        exampleUz: 'Sinov muddati davomida qisqartirilgan ogohlantirish muddati amal qiladi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-6-3',
        lessonId: 'les-54',
        levelCode: 'b1-1',
        german: 'die Kündigung',
        article: 'die',
        plural: 'die Kündigungen',
        uzbek: 'ishdan bo‘shash / bo‘shatish arizasi',
        exampleDe: 'Die Kündigung muss schriftlich erfolgen.',
        exampleUz: 'Ishdan bo‘shash yozma shaklda amalga oshirilishi shart.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-6-4',
        lessonId: 'les-54',
        levelCode: 'b1-1',
        german: 'die Überstunde',
        article: 'die',
        plural: 'die Überstunden',
        uzbek: 'qo‘shimcha ish soati (overtime)',
        exampleDe: 'Werden Überstunden bezahlt oder durch Freizeit ausgeglichen?',
        exampleUz: 'Qo‘shimcha soatlar uchun pul to‘lanadimi yoki dam olish bilan qoplanadimi?',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-6-5',
        lessonId: 'les-54',
        levelCode: 'b1-1',
        german: 'die Pflicht',
        article: 'die',
        plural: 'die Pflichten',
        uzbek: 'burch, majburiyat',
        exampleDe: 'Pünktlichkeit gehört zu den grundlegenden Pflichten.',
        exampleUz: 'Vaqtga rioya qilish asosiy majburiyatlar qatoriga kiradi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-6-6',
        lessonId: 'les-54',
        levelCode: 'b1-1',
        german: 'das Recht',
        article: 'das',
        plural: 'die Rechte',
        uzbek: 'huquq',
        exampleDe: 'Jeder Arbeitnehmer hat ein Recht auf bezahlten Urlaub.',
        exampleUz: 'Har bir ishchi haq to‘lanadigan ta‘til huquqiga ega.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-6-7',
        lessonId: 'les-54',
        levelCode: 'b1-1',
        german: 'unterzeichnen',
        article: null,
        plural: null,
        uzbek: 'imzolamoq',
        exampleDe: 'Beide Parteien haben den Vertrag gestern unterzeichnet.',
        exampleUz: 'Har ikki tomon shartnomani kecha imzolashdi.',
        wordType: 'verb'
      },
      {
        id: 'voc-b1-6-8',
        lessonId: 'les-54',
        levelCode: 'b1-1',
        german: 'befristet',
        article: null,
        plural: null,
        uzbek: 'muddatli (vaqtinchalik shartnoma)',
        exampleDe: 'Die Stelle ist zunächst auf ein Jahr befristet.',
        exampleUz: 'Lavozim dastlab bir yil muddatga belgilangan.',
        wordType: 'adjective'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'Quyidagi gaplarga qarang: Hozirgi zamon (Präsens) va O‘tgan zamon (Präteritum) majhul nisbati o‘rtasidagi farq nimada?',
      discoveryExamples: [
        {
          german: 'Präsens: Das Dokument wird heute geprüft.',
          highlight: 'wird ... geprüft',
          uzbek: 'Hujjat bugun tekshirilmoqda.'
        },
        {
          german: 'Präteritum: Das Dokument wurde gestern geprüft.',
          highlight: 'wurde ... geprüft',
          uzbek: 'Hujjat kecha tekshirildi.'
        }
      ],
      patternExplanationUz: 'O‘tgan zamonda "werden" o‘rniga uning Präteritum shakli "wurde" (birlikda) yoki "wurden" (ko‘plikda) ishlatiladi. Partizip II esa o‘zgarmasdan gap oxirida qoladi.',
      ruleFormulaUz: 'Passiv Präteritum = wurde / wurden + ... + Partizip II'
    },
    grammar: [
      {
        id: 'gra-54',
        lessonId: 'les-54',
        levelCode: 'b1-1',
        titleDe: 'Das Passiv Präteritum',
        titleUz: 'O‘tgan zamon majhul nisbati (Passiv Präteritum)',
        summaryUz: 'O‘tmishda sodir bo‘lgan jarayon va voqealarni hikoya qilishda qo‘llaniladi: wurde + Partizip II.',
        explanationUz: `Gazeta maqolalari, tarixiy voqealar va rasmiy hisobotlarda Passiv Präteritum juda ko‘p ishlatiladi.

Formulasi:
**wurde / wurden** + ... + **Partizip II** (gap oxirida).

Tuslanishi:
- ich **wurde** informiert
- du **wurdest** informiert
- er/sie/es **wurde** informiert
- wir **wurden** informiert
- ihr **wurdet** informiert
- sie/Sie **wurden** informiert`,
        tables: [
          {
            title: 'Passiv Präteritum va Aktiv taqqoslanishi',
            headers: ['Aktiv Präteritum', 'Passiv Präteritum', 'O‘zbekcha tarjimasi'],
            rows: [
              ['Man baute das Haus 1990.', 'Das Haus wurde 1990 gebaut.', 'Uy 1990-yilda qurilgan.'],
              ['Der Chef kündigte den Vertrag.', 'Der Vertrag wurde gekündigt.', 'Shartnoma bekor qilindi.'],
              ['Die Polizei fand die Dokumente.', 'Die Dokumente wurden gefunden.', 'Hujjatlar topildi.']
            ]
          }
        ],
        examples: [
          {
            german: 'Die Berliner Mauer wurde im Jahr 1989 geöffnet.',
            uzbek: 'Berlin devori 1989-yilda ochildi.',
            highlight: 'wurde ... geöffnet'
          },
          {
            german: 'Alle Bewerber wurden per E-Mail benachrichtigt.',
            uzbek: 'Barcha nomzodlar elektron pochta orqali xabardor qilindi.',
            highlight: 'wurden ... benachrichtigt'
          }
        ],
        commonMistakes: [
          {
            incorrect: 'Das Dokument war gestern unterschrieben.',
            correct: 'Das Dokument wurde gestern unterschrieben.',
            explanationUz: 'Jarayon uchun "wurde" ishlatiladi. "war unterschrieben" bu holat (Zustandspassiv) hisoblanadi.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Rechtsberatung: Probleme mit dem Chef',
      titleUz: 'Huquqiy maslahat: Ish beruvchi bilan nizo',
      situationUz: 'Radiodagi huquqiy eshittirishda ishdan nohaq bo‘shatilgan xodim advokatdan maslahat so‘ramoqda.',
      audioTranscriptDe: 'Anrufer: Guten Tag! Letzte Woche wurde mir ganz plötzlich gekündigt, obwohl ich seit fünf Jahren zuverlässig in der Firma arbeite. Angeblich wurden im Betrieb Stellen abgebaut. War diese Kündigung überhaupt legal?\nAnwältin: Eine Kündigung muss immer gut begründet werden. Wurde der Betriebsrat vor der Kündigung informiert? Wenn der Betriebsrat nicht angehört wurde, ist die Kündigung unwirksam. Außerdem muss die gesetzliche Kündigungsfrist von mehreren Monaten eingehalten werden!',
      translationUz: 'Qo‘ng‘iroq qiluvchi: Salom! O‘tgan hafta to‘satdan meni ishdan bo‘shatishdi, holbuki men besh yildan beri kompaniyada ishonchli ishlab kelayotgandim. Aytishlaricha, korxonada shtatlar qisqartirilgan emish. Bu ishdan bo‘shatish qonuniy edimi?\nAdvokat: Ishdan bo‘shatish har doim asosli bo‘lishi shart. Bo‘shatishdan oldin kasaba uyushmasi (Betriebsrat) xabardor qilindimi? Agar kasaba uyushmasi tinglanmagan bo‘lsa, bo‘shatish o‘z kuchiga ega emas. Bundan tashqari, bir necha oylik qonuniy ogohlantirish muddatiga rioya qilinishi kerak!',
      stage1Global: {
        instructionUz: '1-Bosqich: Xodim nima sababdan shikoyat qilmoqda?',
        questionUz: 'Qo‘ng‘iroq qiluvchining asosiy muammosi nima?',
        options: ['Maoshi kamaytirilgani', 'To‘satdan ishdan bo‘shatilgani', 'Ta‘til berilmagani'],
        correctIndex: 1,
        explanationUz: '"Letzte Woche wurde mir ganz plötzlich gekündigt".'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Huquqiy qoidani aniqlang.',
        questions: [
          {
            id: 'l54-q1',
            questionUz: 'Qanday holatda ishdan bo‘shatish o‘z kuchini yo‘qotadi?',
            options: ['Agar maosh oshirilgan bo‘lsa', 'Agar kasaba uyushmasi tinglanmagan bo‘lsa', 'Agar yangi xodim olingan bo‘lsa'],
            correctIndex: 1,
            explanationUz: '"Wenn der Betriebsrat nicht angehört wurde, ist die Kündigung unwirksam".'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Anrufer', textDe: 'Mir wurde ganz plötzlich gekündigt.', textUz: 'Meni to‘satdan ishdan bo‘shatishdi.' },
          { speaker: 'Anwältin', textDe: 'Wurde der Betriebsrat vorher informiert?', textUz: 'Kasaba uyushmasi oldindan xabardor qilindimi?' }
        ],
        keyVocabulary: [
          { german: 'der Betriebsrat', uzbek: 'korxona xodimlari kengashi / kasaba uyushmasi' },
          { german: 'unwirksam', uzbek: 'kuchsiz, yuridik ahamiyatga ega emas' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-54',
        lessonId: 'les-54',
        levelCode: 'b1-1',
        titleDe: 'Geschichte des deutschen Arbeitsrechts',
        titleUz: 'Nemis mehnat huquqi tarixi',
        textDe: 'Im 19. Jahrhundert gab es für Arbeiter kaum Schutzrechte. Arbeitstage von 14 Stunden waren keine Seltenheit. Erst durch die industrielle Revolution und gewerkschaftliche Kämpfe wurden schrittweise Reformen durchgesetzt. 1883 wurde die gesetzliche Krankenversicherung von Otto von Bismarck eingeführt. Später wurden der Acht-Stunden-Tag und der bezahlte Erholungsurlaub gesetzlich verankert. Heute gilt das deutsche Arbeitsrecht als eines der sozialsten weltweit.',
        translationUz: 'XIX asrda ishchilar uchun deyarli hech qanday himoya huquqlari yo‘q edi. 14 soatlik ish kunlari kamyob hodisa emasdi. Faqat sanoat inqilobi va kasaba uyushmalari kurashlari natijasida bosqichma-bosqich islohotlar hayotga tatbiq etildi. 1883-yilda Otto fon Bismark tomonidan davlat tibbiy sug‘urtasi joriy qilindi. Keyinchalik 8 soatlik ish kuni va haq to‘lanadigan ta‘til qonuniy mustahkamlandi. Bugun nemis mehnat huquqi dunyodagi eng ijtimoiy qonunlardan biri hisoblanadi.',
        vocabularyHints: [
          { german: 'durchsetzen', uzbek: 'tatbiq etmoq, amalga oshirmoq' },
          { german: 'verankern', uzbek: 'qonunda mustahkamlamoq' }
        ],
        questions: [
          {
            id: 'q-rea-54-1',
            questionUz: '1883-yilda Germaniyada nima joriy qilingan edi?',
            options: ['Pensiya yoshi', 'Davlat tibbiy sug‘urtasi', 'Haftalik 4 kunlik ish'],
            correctIndex: 1,
            explanationUz: 'Matnda "1883 wurde die gesetzliche Krankenversicherung... eingeführt" deb yozilgan.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-54',
      lessonId: 'les-54',
      levelCode: 'b1-1',
      taskDe: 'Beschreiben Sie ein historisches oder persönliches Ereignis im Passiv Präteritum.',
      taskUz: 'Tarixiy yoki shaxsiy biror voqeani Passiv Präteritum (wurde / wurden) yordamida yozing.',
      instructionUz: 'Qachon qurilgani, tashkil etilgani yoki o‘zgartirilganini bayon qiling.',
      hints: ['Im Jahr ... wurde...', 'Das Gebäude wurde...', 'Viele Reformen wurden...'],
      sampleSolutionDe: 'Unsere Universität wurde im Jahr 1920 gegründet. Vor zwei Jahren wurde ein modernes Bibliotheksgebäude gebaut. Alle Vorlesungssäle wurden mit neuester Computertechnik ausgestattet.',
      scaffold: {
        openingDe: 'Ein Blick in die Vergangenheit:',
        closingDe: 'So entwickelte sich der Ort.',
        usefulPhrasesDe: ['...wurde gegründet', '...wurde gebaut', '...wurden ausgestattet']
      }
    },
    shadowing: [
      {
        id: 'sha-54',
        lessonId: 'les-54',
        levelCode: 'b1-1',
        sentenceDe: 'Der Arbeitsvertrag wurde nach eingehender juristischer Prüfung von beiden Seiten unterzeichnet.',
        translationUz: 'Mehnat shartnomasi chuqur yuridik tekshiruvdan so‘ng har ikki tomon tomonidan imzolandi.',
        phoneticHint: '[Der Ar-bayts-fer-trag vur-de nah ayn-ge-hen-der yu-ri-sti-sher Pryu-fung fon bay-den Zay-ten un-ter-tsayh-net]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-54-q1',
        type: 'fill-blank',
        questionUz: '"wurde" yoki "wurden": "Die Verträge _____ gestern von allen Beteiligten unterzeichnet."',
        blankSentence: 'Die Verträge [blank] gestern von allen Beteiligten unterzeichnet.',
        options: ['wurden', 'wurde', 'worden', 'waren'],
        correctAnswer: 'wurden',
        explanationUz: '"Die Verträge" ko‘plik bo‘lgani sababli "wurden" to‘g‘ri shakl.',
        mistakeTipUz: '❌ Ko‘plik uchun: wurden unterzeichnet.'
      },
      {
        id: 'prac-54-q2',
        type: 'multiple-choice',
        questionUz: '"Das Gesetz wurde 1995 beschlossen" jumlasi qaysi zamonda?',
        options: [
          'Passiv Präteritum (o‘tgan zamon majhul nisbati)',
          'Passiv Präsens (hozirgi zamon majhul nisbati)',
          'Plusquamperfekt'
        ],
        correctAnswer: 'Passiv Präteritum (o‘tgan zamon majhul nisbati)',
        explanationUz: 'wurde + Partizip II (beschlossen) = Passiv Präteritum.',
        mistakeTipUz: '❌ "wurde" ko‘rdingizmi — bu Passiv Präteritum.'
      },
      {
        id: 'prac-54-q3',
        type: 'word-order',
        questionUz: 'Gapni to‘g‘ri tuzing:',
        scrambledWords: ['wurde', 'Die', 'Krankenversicherung', '1883', 'eingeführt'],
        correctAnswer: 'Die Krankenversicherung wurde 1883 eingeführt',
        explanationUz: 'Die Krankenversicherung (1) + wurde (2) + 1883 (3) + eingeführt (oxirida).',
        mistakeTipUz: '❌ Die Krankenversicherung wurde 1883 eingeführt.'
      }
    ]
  }
];
