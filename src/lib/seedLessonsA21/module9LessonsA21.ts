import { Lesson } from '../../types/database';

export const MODULE_9_A21_LESSONS: Lesson[] = [
  // ==========================================
  // LEKTION 25: Am Arbeitsplatz und im Büro
  // ==========================================
  {
    id: 'les-25',
    moduleId: 'mod-a2-1-1',
    levelCode: 'a2-1',
    titleDe: 'Lektion 25: Am Arbeitsplatz und im Büro',
    titleUz: '25-Dars: Ish joyida va ofisda (Modal fe‘llarning o‘tgan zamoni)',
    descriptionUz: 'Ishxona jihozlari, ofis faoliyati, telefon muloqoti va modal fe‘llarning Präteritum o‘tgan zamoni (musste, konnte, durfte, wollte).',
    orderIndex: 25,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Ofis jihozlari va kundalik ish vazifalarini nemis tilida nomlash',
      'Modal fe‘llarning o‘tgan zamon shakllarini (musste, konnte, wollte) to‘g‘ri qo‘llash',
      'Ishdagi majburiyatlar va imkoniyatlar haqida gapirib berish'
    ],
    warmUp: {
      situationUz: 'Kompaniyada yangi ish boshladingiz. Hamkasbingiz sizga ofis qoidalari va kechagi majlis haqida ma‘lumot bermoqda.',
      curiosityQuestionUz: 'Nemis tilida "Men kecha kechgacha ishlashim kerak edi" qanday aytiladi?',
      miniDialogue: [
        { speaker: 'Kollege', textDe: 'Musstest du gestern lange im Büro bleiben?', textUz: 'Kecha ofisda uzoq qolishing kerak edimi?' },
        { speaker: 'Aziz', textDe: 'Ja, ich musste einen wichtigen Bericht fertig schreiben.', textUz: 'Ha, men muhim hisobotni yozib tugatishim kerak edi.' }
      ],
      hintUz: 'Og‘zaki nutqda ham modal fe‘llar uchun Perfekt emas, aynan Präteritum (musste, konnte, wollte) ishlatiladi!'
    },
    contextDialogue: {
      titleDe: 'Ein anstrengender Arbeitstag',
      titleUz: 'Ofisdagi og‘ir ish kuni',
      situationUz: 'Aziz va uning hamkasbi Laura ish kunidagi vazifalar haqida suhbatlashmoqda.',
      lines: [
        { speaker: 'Laura', textDe: 'Hallo Aziz! Wie war dein Tag gestern?', textUz: 'Salom Aziz! Kechagi kuning qanday o‘tdi?' },
        { speaker: 'Aziz', textDe: 'Ziemlich stressig! Der Drucker war kaputt und ich konnte die Dokumente nicht ausdrucken.', textUz: 'Ancha asabiy! Printer buzilgan edi va men hujjatlarni chop eta olmadim.' },
        { speaker: 'Laura', textDe: 'Oh je. Und was hast du dann gemacht?', textUz: 'Voy, keyin nima qilding?' },
        { speaker: 'Aziz', textDe: 'Ich musste den IT-Support anrufen. Zum Glück konnten sie das Problem schnell lösen.', textUz: 'IT bo‘limiga qo‘ng‘iroq qilishimga to‘g‘ri keldi. Xayriyatki, ular muammoni tez hal qila olishdi.' },
        { speaker: 'Laura', textDe: 'Wolltest du nicht gestern pünktlich Feierabend machen?', textUz: 'Kechagi kuni ishdan vaqtida ketmoqchi emasmidinkmi?' },
        { speaker: 'Aziz', textDe: 'Doch, aber der Chef wollte noch die Präsentation sehen.', textUz: 'Shunday edi, ammo boshliq taqdimotni ko‘rmoqchi bo‘ldi.' },
        { speaker: 'Laura', textDe: 'Dann hast du dir heute einen pünktlichen Feierabend verdient!', textUz: 'Unday bo‘lsa, bugun vaqtida ketishga to‘la haqlisan!' }
      ],
      usefulPhrases: [
        { german: 'Feierabend machen', uzbek: 'ish kunini tugatmoq, dam olishga chiqmoq' },
        { german: 'eine E-Mail weiterleiten', uzbek: 'xatni boshqaga yo‘naltirmoq' },
        { german: 'einen Termin verschieben', uzbek: 'uchrashuv vaqtini ko‘chirmoq' },
        { german: 'Dokumente ausdrucken', uzbek: 'hujjatlarni chop etmoq' }
      ],
      culturalNoteUz: 'Germaniyada "Feierabend" (ishdan keyingi shaxsiy vaqt) qadriyat hisoblanadi. Ish vaqti tugagach, xodimlarni bezovta qilmaslik odat tusiga kirgan.'
    },
    vocabulary: [
      {
        id: 'voc-m9-1',
        lessonId: 'les-25',
        levelCode: 'a2-1',
        german: 'der Feierabend',
        article: 'der',
        plural: 'die Feierabende',
        uzbek: 'ishdan keyingi dam olish vaqti',
        exampleDe: 'Schönen Feierabend!',
        exampleUz: 'Ishdan keyingi vaqtingiz maroqli o‘tsin!',
        wordType: 'noun'
      },
      {
        id: 'voc-m9-2',
        lessonId: 'les-25',
        levelCode: 'a2-1',
        german: 'die Besprechung',
        article: 'die',
        plural: 'die Besprechungen',
        uzbek: 'majlis, yig‘ilish',
        exampleDe: 'Wir haben um 14:00 Uhr eine Besprechung.',
        exampleUz: 'Soat 14:00 da majlisimiz bor.',
        wordType: 'noun'
      },
      {
        id: 'voc-m9-3',
        lessonId: 'les-25',
        levelCode: 'a2-1',
        german: 'der Drucker',
        article: 'der',
        plural: 'die Drucker',
        uzbek: 'printer',
        exampleDe: 'Der Drucker hat kein Papier mehr.',
        exampleUz: 'Printerda qog‘oz qolmabdi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m9-4',
        lessonId: 'les-25',
        levelCode: 'a2-1',
        german: 'ausdrucken',
        article: null,
        plural: null,
        uzbek: 'chop etmoq (printerda)',
        exampleDe: 'Können Sie diesen Vertrag ausdrucken?',
        exampleUz: 'Ushbu shartnomani chop eta olasizmi?',
        wordType: 'verb'
      },
      {
        id: 'voc-m9-5',
        lessonId: 'les-25',
        levelCode: 'a2-1',
        german: 'die Überstunde',
        article: 'die',
        plural: 'die Überstunden',
        uzbek: 'qo‘shimcha ish soati (overtime)',
        exampleDe: 'Gestern habe ich zwei Überstunden gemacht.',
        exampleUz: 'Kecha men ikki soat ortiqcha ishladim.',
        wordType: 'noun'
      },
      {
        id: 'voc-m9-6',
        lessonId: 'les-25',
        levelCode: 'a2-1',
        german: 'lösen',
        article: null,
        plural: null,
        uzbek: 'hal qilmoq, yechmoq',
        exampleDe: 'Wir müssen das Problem sofort lösen.',
        exampleUz: 'Biz muammoni darhol hal qilishimiz kerak.',
        wordType: 'verb'
      }
    ],
    grammar: [
      {
        id: 'gra-m9-1',
        lessonId: 'les-25',
        levelCode: 'a2-1',
        titleDe: 'Modalverben im Präteritum (Modal fe‘llarning o‘tgan zamoni)',
        titleUz: 'Modal fe‘llar: müssen, können, wollen, dürfen o‘tgan zamonda',
        summaryUz: 'Modal fe‘llarning o‘tgan zamoni og‘zaki va yozma nutqda faqat Präteritum shaklida (musste, konnte, wollte, durfte) qo‘llanadi.',
        explanationUz: `Nemis tilida modal fe‘llar o‘tgan zamonda tuslanganda umumiy xususiyatga ega:
1. Umlautlar (ä, ö, ü) tushib qoladi: müssen → musste, können → konnte, dürfen → durfte.
2. Ich va er/sie/es shakllari bir xil bo‘ladi (qo‘shimchasiz -te bilan tugaydi).
3. Gapning oxirida asosiy fe‘l infinitiv (boshlang‘ich) shaklida turadi.

Formula:
**Subyekt + Modalverb im Präteritum (2-o‘rinda) + ... + Infinitiv (gap oxirida).**
Masalan: *Ich **musste** gestern bis 19 Uhr **arbeiten**.*`,
        tables: [
          {
            title: 'Modal fe‘llarning Präteritum tuslanishi',
            headers: ['Shaxs', 'müssen (kerak edi)', 'können (qo‘lidan kelgan edi)', 'wollen (xohlagan edi)', 'dürfen (ruxsat bor edi)'],
            rows: [
              ['ich', 'musste', 'konnte', 'wollte', 'durfte'],
              ['du', 'musstest', 'konntest', 'wolltest', 'durftest'],
              ['er / sie / es', 'musste', 'konnte', 'wollte', 'durfte'],
              ['wir', 'mussten', 'konnten', 'wollten', 'durften'],
              ['ihr', 'musstet', 'konntet', 'wolltet', 'durftet'],
              ['sie / Sie', 'mussten', 'konnten', 'wollten', 'durften']
            ]
          }
        ],
        examples: [
          {
            german: 'Früher konnte ich kein Deutsch sprechen.',
            uzbek: 'Ilgari men nemischa gapira olmas edim.',
            highlight: 'konnte ... sprechen'
          },
          {
            german: 'Wir durften das Büro nicht vor 18:00 Uhr verlassen.',
            uzbek: 'Bizga soat 18:00 dan oldin ofisni tark etishga ruxsat berilmas edi.',
            highlight: 'durften ... verlassen'
          }
        ]
      }
    ],
    listening: [
      {
        id: 'lis-m9-1',
        lessonId: 'les-25',
        levelCode: 'a2-1',
        titleDe: 'Telefonat mit dem IT-Support',
        titleUz: 'IT qo‘llab-quvvatlash xizmati bilan telefon suhbati',
        transcriptDe: 'Guten Tag, IT-Support Müller hier. Was kann ich für Sie tun?\nHallo Herr Müller, hier ist Aziz aus der Buchhaltung. Unser Drucker im Büro funktioniert seit heute Morgen nicht. Ich musste wichtige Rechnungen drucken, aber das Gerät reagiert überhaupt nicht.\nHaben Sie die Kabel überprüft?\nJa, alles ist angeschlossen. Gestern konnten wir noch drucken.\nGut, ich komme in zehn Minuten vorbei und schaue mir das an.',
        translationUz: 'Xayrli kun, IT xizmatidan Myuller. Qanday yordam bera olaman?\nSalom janob Myuller, bu buxgalteriyadan Aziz. Bugun ertalabdan beri ofisimizdagi printer ishlamayapti. Men muhim hisob-fakturalarni chop etishim kerak edi, lekin qurilma umuman javob bermayapti.\nKabellarni tekshirib ko‘rdingizmi?\nHa, hammasi ulangan. Kecha bemalol chop eta olgandik.\nYaxshi, men o‘n daqiqada boraman va ko‘rib beraman.',
        dialogue: [
          { speaker: 'Herr Müller', textDe: 'Guten Tag, IT-Support Müller hier. Was kann ich für Sie tun?', textUz: 'Xayrli kun, IT xizmati Myuller. Qanday yordam bera olaman?' },
          { speaker: 'Aziz', textDe: 'Unser Drucker funktioniert nicht. Ich musste Rechnungen drucken.', textUz: 'Printerimiz ishlamayapti. Men hisoblarni chop etishim kerak edi.' },
          { speaker: 'Herr Müller', textDe: 'Ich komme in zehn Minuten vorbei und schaue mir das an.', textUz: 'Men o‘n daqiqada boraman va ko‘rib beraman.' }
        ],
        questions: [
          {
            id: 'q-lis-m9-1',
            questionUz: 'Aziz nima sababdan IT bo‘limiga qo‘ng‘iroq qildi?',
            options: ['Printer ishlamay qolgani sababli', 'Yangi kompyuter buyurtma qilish uchun', 'Majlisga kechikkani uchun'],
            correctIndex: 0,
            explanationUz: 'Aziz ofisdagi printer ishlamay qolgani va hisoblarni chop eta olmagani uchun qo‘ng‘iroq qildi.'
          }
        ]
      }
    ],
    reading: [
      {
        id: 'read-m9-1',
        lessonId: 'les-25',
        levelCode: 'a2-1',
        titleDe: 'E-Mail an das Team',
        titleUz: 'Jamoaga yo‘llangan elektron xat',
        textDe: 'Liebe Kolleginnen und Kollegen,\n\ngestern konnten wir das Projekt für unseren neuen Kunden erfolgreich abschließen. Ich weiß, dass alle im Team viele Überstunden machen mussten. Dafür möchte ich mich ganz herzlich bei Ihnen bedanken!\nHeute machen wir um 16:30 Uhr gemeinsam Feierabend und trinken einen Kaffee zusammen.\n\nBeste Grüße,\nFrau Sommer (Abteilungsleiterin)',
        textUz: 'Hurmatli hamkasblar,\n\nkecha biz yangi mijozimiz uchun loyihani muvaffaqiyatli yakunlashga erishdik. Bilamanki, jamoadagi har bir kishi ko‘plab ortiqcha soatlar ishlashiga to‘g‘ri keldi. Buning uchun sizlarga chin dildan minnatdorchilik bildiraman!\nBugun soat 16:30 da hammamiz birgalikda ishni yakunlaymiz va qahva ichamiz.\n\nEzgu tilaklar bilan,\nSommer xonim (Bo‘lim boshlig‘i)',
        questions: [
          {
            id: 'q-read-m9-1',
            questionUz: 'Xodimlar nega ortiqcha soat (Überstunden) ishlashga majbur bo‘lishdi?',
            options: ['Loyiha yakunlanishi kerak bo‘lgani uchun', 'Printer buzilgani sababli', 'Boshliq kasal bo‘lib qolgani uchun'],
            correctIndex: 0,
            explanationUz: 'Xatda aytilishicha, yangi mijoz loyihasini yakunlash uchun xodimlar ko‘p ishlashgan.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-m9-1',
      lessonId: 'les-25',
      levelCode: 'a2-1',
      taskDe: 'Schreiben Sie eine kurze Nachricht an Ihren Kollegen.',
      taskUz: 'Hamkasbingizga qisqa xabar yozing.',
      instructionUz: 'Kechagi kuni nima uchun uchrashuvga kela olmaganingizni tushuntiring (musste / konnte fe‘llarini ishlating).',
      hints: ['Kecha shifokorga borishim kerak edi (musste zum Arzt gehen)', 'Telefon qila olmadim (konnte nicht anrufen)'],
      sampleSolutionDe: 'Hallo Markus, es tut mir leid, dass ich gestern nicht zur Besprechung kommen konnte. Ich hatte starke Zahnschmerzen und musste dringend zum Zahnarzt gehen. Bis morgen im Büro!',
      scaffold: {
        openingDe: 'Hallo Markus,',
        closingDe: 'Viele Grüße, Aziz',
        usefulPhrasesDe: ['Ich konnte leider nicht kommen...', 'Ich musste dringend...', 'Es tut mir leid, dass...']
      }
    },
    shadowing: [
      {
        id: 'sha-m9-1',
        lessonId: 'les-25',
        levelCode: 'a2-1',
        sentenceDe: 'Gestern musste ich viele Überstunden machen, aber heute mache ich pünktlich Feierabend.',
        translationUz: 'Kecha men ko‘p ortiqcha ishlashim kerak edi, lekin bugun o‘z vaqtida ishni yakunlayman.',
        phoneticHint: '[Ges-tern mus-te ih fi-le Yuber-shtun-den ma-xen, a-ber hoy-te ma-xe ih pünk-tlih Fay-er-a-bent]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-m9-1-q1',
        type: 'fill-blank',
        questionUz: '"müssen" fe‘lining Präteritum shaklini qo‘ying: "Gestern _____ ich lange arbeiten."',
        blankSentence: 'Gestern [blank] ich lange arbeiten.',
        options: ['musste', 'muss', 'mussten', 'müsste'],
        correctAnswer: 'musste',
        explanationUz: '"ich" uchun "müssen" fe‘lining Präteritum shakli "musste" bo‘ladi (Umlautsizz!).',
        mistakeTipUz: '❌ Modal fe‘l o‘tgan zamonda umlautsiz qo‘llanadi: ich musste.'
      },
      {
        id: 'prac-m9-1-q2',
        type: 'multiple-choice',
        questionUz: '"Biz printer buzilgani uchun hujjatlarni chop eta olmadik" gapining to‘g‘ri shakli qaysi?',
        options: [
          'Wir konnten die Dokumente nicht ausdrucken.',
          'Wir konntet die Dokumente nicht ausdrucken.',
          'Wir können die Dokumente nicht ausdrucken.',
          'Wir durften die Dokumente nicht ausdrucken.'
        ],
        correctAnswer: 'Wir konnten die Dokumente nicht ausdrucken.',
        explanationUz: '"wir" uchun "können" fe‘lining o‘tgan zamon shakli "konnten" bo‘ladi.',
        mistakeTipUz: '❌ "wir konnten" (biz qila oldik / qila olmadik).'
      },
      {
        id: 'prac-m9-1-q3',
        type: 'word-order',
        questionUz: 'Gapni to‘g‘ri tartibda tuzing:',
        scrambledWords: ['Früher', 'konnte', 'kein', 'er', 'Deutsch'],
        correctAnswer: 'Früher konnte er kein Deutsch',
        explanationUz: 'Früher (1) + konnte (2) + er (3) + kein Deutsch.',
        mistakeTipUz: '❌ 2-o‘rinda modal fe‘l (konnte) turishi shart!'
      }
    ]
  },

  // ==========================================
  // LEKTION 26: Stellensuche und Bewerbung
  // ==========================================
  {
    id: 'les-26',
    moduleId: 'mod-a2-1-1',
    levelCode: 'a2-1',
    titleDe: 'Lektion 26: Stellensuche und Bewerbung',
    titleUz: '26-Dars: Ish qidirish va rezyume (weil va dass ergash gaplari)',
    descriptionUz: 'Ish e‘lonlari, rezyume (Lebenslauf), suhbatga tayyorgarlik hamda "weil" (chunki) va "dass" (ki/ekanligini) bilan bog‘langan ergash gaplar.',
    orderIndex: 26,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Ish e‘lonlari talablarini tushunish va rezyume qismlarini bilish',
      '"weil" (chunki) va "dass" (ekanligini) bog‘lovchilarida fe‘l o‘rnini (oxirida) to‘g‘ri qo‘llash',
      'Ishga ariza topshirish sabablarini nemis tilida ifodalash'
    ],
    warmUp: {
      situationUz: 'Siz Germaniyada nufuzli IT yoki muhandislik kompaniyasiga ishga ariza topshirmoqchisiz.',
      curiosityQuestionUz: '"Men bu kompaniyada ishlamoqchiman, chunki bu yerda tajriba orttirishim mumkin" gapi nemischa qanday tuziladi?',
      miniDialogue: [
        { speaker: 'Interviewer', textDe: 'Warum bewerben Sie sich bei uns?', textUz: 'Nima uchun bizning kompaniyamizga ariza topshirdingiz?' },
        { speaker: 'Bewerber', textDe: 'Weil ich neue Erfahrungen sammeln möchte.', textUz: 'Chunki men yangi tajribalar orttirishni xohlayman.' }
      ],
      hintUz: '"weil" va "dass" dan keyin tuslangan fe‘l har doim gapning ENG OXIRIGA o‘tadi!'
    },
    contextDialogue: {
      titleDe: 'Das Vorstellungsgespräch',
      titleUz: 'Ish suhbati (Intervyu)',
      situationUz: 'Aziz kompaniya kadrlar bo‘limi rahbari bilan suhbatdan o‘tmoqda.',
      lines: [
        { speaker: 'Frau Weber', textDe: 'Guten Tag, Herr Rahimov! Schön, dass Sie da sind.', textUz: 'Xayrli kun, janob Rahimov! Kelganingizdan juda xursandmiz.' },
        { speaker: 'Aziz', textDe: 'Guten Tag, Frau Weber! Vielen Dank für die Einladung zum Vorstellungsgespräch.', textUz: 'Xayrli kun, Weber xonim! Suhbatga taklif qilganingiz uchun katta rahmat.' },
        { speaker: 'Frau Weber', textDe: 'Ich habe in Ihrem Lebenslauf gesehen, dass Sie schon drei Jahre Berufserfahrung haben.', textUz: 'Rezyumeingizda uch yillik ish tajribangiz borligini ko‘rdim.' },
        { speaker: 'Aziz', textDe: 'Ja, das stimmt. Ich bewerbe mich bei Ihnen, weil Ihre Projekte sehr innovativ sind.', textUz: 'Ha, shunday. Loyihalaringiz juda innovatsion bo‘lgani uchun sizga topshirdim.' },
        { speaker: 'Frau Weber', textDe: 'Können Sie gut im Team arbeiten?', textUz: 'Jamoada yaxshi ishlay olasizmi?' },
        { speaker: 'Aziz', textDe: 'Ja, ich glaube, dass Teamarbeit der Schlüssel zum Erfolg ist.', textUz: 'Ha, ishonamanki, jamoaviy ish muvaffaqiyat kalitidir.' },
        { speaker: 'Frau Weber', textDe: 'Das klingt sehr gut. Wir melden uns bis Freitag bei Ihnen.', textUz: 'Bu juda ajoyib. Juma kunigacha siz bilan bog‘lanamiz.' }
      ],
      usefulPhrases: [
        { german: 'sich bewerben um / bei', uzbek: '...ga ishga ariza topshirmoq' },
        { german: 'der Lebenslauf', uzbek: 'rezyume (tarjimai hol)' },
        { german: 'Berufserfahrung haben', uzbek: 'kasbiy tajribaga ega bo‘lmoq' },
        { german: 'Ich glaube, dass...', uzbek: 'Men ishonamanki / o‘ylaymanki...' }
      ],
      culturalNoteUz: 'Germaniyada ish arizasi to‘liq paket (Bewerbungsmappe) tarzida: Anschreiben (ilova xati), Lebenslauf (rezyume) va diplomlar bilan birga taqdim etiladi.'
    },
    vocabulary: [
      {
        id: 'voc-m9-7',
        lessonId: 'les-26',
        levelCode: 'a2-1',
        german: 'die Bewerbung',
        article: 'die',
        plural: 'die Bewerbungen',
        uzbek: 'ishga ariza topshirish, ariza hujjati',
        exampleDe: 'Ich habe meine Bewerbung per E-Mail geschickt.',
        exampleUz: 'Men arizamni elektron pochta orqali yubordim.',
        wordType: 'noun'
      },
      {
        id: 'voc-m9-8',
        lessonId: 'les-26',
        levelCode: 'a2-1',
        german: 'der Lebenslauf',
        article: 'der',
        plural: 'die Lebensläufe',
        uzbek: 'rezyume, tarjimai hol',
        exampleDe: 'Mein Lebenslauf ist tabellarisch aufgebaut.',
        exampleUz: 'Mening rezyumem jadval ko‘rinishida tuzilgan.',
        wordType: 'noun'
      },
      {
        id: 'voc-m9-9',
        lessonId: 'les-26',
        levelCode: 'a2-1',
        german: 'die Erfahrung',
        article: 'die',
        plural: 'die Erfahrungen',
        uzbek: 'tajriba',
        exampleDe: 'Ich habe viel Erfahrung in diesem Bereich.',
        exampleUz: 'Mening bu sohada ko‘p tajribam bor.',
        wordType: 'noun'
      },
      {
        id: 'voc-m9-10',
        lessonId: 'les-26',
        levelCode: 'a2-1',
        german: 'das Vorstellungsgespräch',
        article: 'das',
        plural: 'die Vorstellungsgespräche',
        uzbek: 'ish suhbati (intervyu)',
        exampleDe: 'Morgen habe ich ein Vorstellungsgespräch.',
        exampleUz: 'Ertaga mening ish suhbatim bor.',
        wordType: 'noun'
      },
      {
        id: 'voc-m9-11',
        lessonId: 'les-26',
        levelCode: 'a2-1',
        german: 'die Stelle',
        article: 'die',
        plural: 'die Stellen',
        uzbek: 'ish o‘rni, lavozim',
        exampleDe: 'Diese Stelle ist ab sofort frei.',
        exampleUz: 'Bu lavozim hozirdan boshlab bo‘sh.',
        wordType: 'noun'
      },
      {
        id: 'voc-m9-12',
        lessonId: 'les-26',
        levelCode: 'a2-1',
        german: 'teamfähig',
        article: null,
        plural: null,
        uzbek: 'jamoada ishlay oladigan',
        exampleDe: 'Er ist sehr freundlich und teamfähig.',
        exampleUz: 'U juda xushmuomala va jamoada yaxshi ishlay oladi.',
        wordType: 'adjective'
      }
    ],
    grammar: [
      {
        id: 'gra-m9-2',
        lessonId: 'les-26',
        levelCode: 'a2-1',
        titleDe: 'Nebensätze mit "weil" und "dass" (Ergash gaplar)',
        titleUz: '"weil" (chunki) va "dass" (-ki / ekanligini) bog‘lovchilari',
        summaryUz: '"weil" va "dass" bog‘lovchilari ergash gap (Nebensatz) yasaydi va ulardan keyin tuslangan fe‘l gapning eng oxirida turadi.',
        explanationUz: `Nemis tilida "weil" (chunki / sababli) va "dass" (-ki / deb / ekanligini) ergash gap bog‘lovchilaridir.
Eng muhim oltin qoida:
**Ergash gapda tuslangan fe‘l doimo GAPNING ENG OXIRIGA suriladi!**

Taqqoslash:
- Bosh gap: *Ich lerne Deutsch.* (Fe‘l 2-o‘rinda)
- Bosh gap: *Ich möchte in München arbeiten.*
- "weil" bilan bog‘langanda:
  *Ich lerne Deutsch, **weil** ich in München arbeiten **möchte**.* (möchte eng oxirida!)
- "dass" bilan bog‘langanda:
  *Ich weiß, **dass** Deutsch lernen wichtig **ist**.* (ist eng oxirida!)`,
        tables: [
          {
            title: 'Asosiy gap va Ergash gap qiyosi',
            headers: ['Bosh gap (Hauptsatz)', 'Bog‘lovchi', 'O‘rtadagi bo‘laklar', 'Tuslangan fe‘l (Endstellung)'],
            rows: [
              ['Ich freue mich,', 'dass', 'Sie heute zu uns', 'kommen.'],
              ['Er bewerbt sich,', 'weil', 'er eine neue Stelle', 'sucht.'],
              ['Ich glaube,', 'dass', 'wir die Prüfung', 'bestehen.']
            ]
          }
        ],
        examples: [
          {
            german: 'Ich bleibe heute zu Hause, weil ich krank bin.',
            uzbek: 'Men bugun uyda qolaman, chunki kasalman.',
            highlight: 'weil ... bin'
          },
          {
            german: 'Der Chef sagt, dass wir morgen früher anfangen müssen.',
            uzbek: 'Boshliq ertaga ertaroq boshlashimiz kerakligini aytdi.',
            highlight: 'dass ... müssen'
          }
        ]
      }
    ],
    listening: [
      {
        id: 'lis-m9-2',
        lessonId: 'les-26',
        levelCode: 'a2-1',
        titleDe: 'Warum haben Sie sich beworben?',
        titleUz: 'Nima sababdan ushbu lavozimga ariza berdingiz?',
        transcriptDe: 'Herr Rahimov, warum interessieren Sie sich für diese Stelle?\nIch interessiere mich für diese Stelle, weil ich meine Deutschkenntnisse vertiefen möchte und weil Ihre Firma einen ausgezeichneten Ruf hat. Ich habe gesehen, dass Sie international arbeiten. Das gefällt mir sehr.',
        translationUz: 'Janob Rahimov, nima uchun bu lavozim sizni qiziqtiradi?\nMen bu lavozimga qiziqaman, chunki nemis tili bilimlarimni chuqurlashtirmoqchiman va sizning kompaniyangiz ajoyib obro‘ga ega. Men xalqaro miqyosda ishlashingizni ko‘rdim. Bu menga juda yoqadi.',
        dialogue: [
          { speaker: 'Interviewer', textDe: 'Warum interessieren Sie sich für diese Stelle?', textUz: 'Nima uchun bu lavozim sizni qiziqtiradi?' },
          { speaker: 'Aziz', textDe: 'Weil Ihre Firma einen ausgezeichneten Ruf hat und international arbeitet.', textUz: 'Chunki kompaniyangiz ajoyib obro‘ga ega va xalqaro ishlaydi.' }
        ],
        questions: [
          {
            id: 'q-lis-m9-2',
            questionUz: 'Aziz nima uchun ushbu kompaniyada ishlamoqchi?',
            options: ['Kompaniya obro‘li va xalqaro miqyosda ishlagani uchun', 'Ofis uyiga juda yaqin bo‘lgani sababli', 'Faqat do‘sti taklif qilgani uchun'],
            correctIndex: 0,
            explanationUz: 'Aziz kompaniyaning ajoyib obro‘si (Ruf) va xalqaro faoliyati sababli ariza berganini aytdi.'
          }
        ]
      }
    ],
    reading: [
      {
        id: 'read-m9-2',
        lessonId: 'les-26',
        levelCode: 'a2-1',
        titleDe: 'Stellenanzeige: Software-Entwickler gesucht',
        titleUz: 'Ish e‘loni: Dasturiy ta‘minot ishlab chiquvchisi kerak',
        textDe: 'Wir suchen ab sofort einen engagierten Software-Entwickler (m/w/d) in Berlin.\n\nIhre Aufgaben:\n- Entwicklung moderner Webanwendungen\n- Zusammenarbeit im internationalen Team\n\nIhr Profil:\n- Gute Deutsch- und Englischkenntnisse\n- Sie arbeiten gerne im Team und sind flexibel\n\nWir bieten:\n- Flexible Arbeitszeiten und Weiterbildungsmöglichkeiten\n\nBewerben Sie sich jetzt online!',
        textUz: 'Berlinda zudlik bilan g‘ayratli dasturchi (erkak/ayol) qidirilmoqda.\n\nVazifalaringiz:\n- Zamonaviy veb-ilovalarni ishlab chiqish\n- Xalqaro jamoada hamkorlik qilish\n\nTalablar:\n- Nemis va ingliz tillarini yaxshi bilish\n- Jamoada ishlashni yoqtirish va moslashuvchanlik\n\nBiz taklif qilamiz:\n- Qulay ish soatlari va malaka oshirish imkoniyatlari\n\nHoziroq onlayn ariza topshiring!',
        questions: [
          {
            id: 'q-read-m9-2',
            questionUz: 'Nomzoddan qaysi tillarni bilish talab qilinadi?',
            options: ['Nemis va ingliz tillari', 'Faqat nemis tili', 'Nemis va fransuz tillari'],
            correctIndex: 0,
            explanationUz: 'E‘londa "Gute Deutsch- und Englischkenntnisse" talab qilingan.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-m9-2',
      lessonId: 'les-26',
      levelCode: 'a2-1',
      taskDe: 'Schreiben Sie zwei Sätze mit "weil" und "dass".',
      taskUz: '"weil" va "dass" bog‘lovchilaridan foydalanib ikkita gap yozing.',
      instructionUz: 'Nima uchun nemis tilini o‘rganayotganingizni va kelajakdagi orzuingizni bayon qiling.',
      hints: ['Ich lerne Deutsch, weil...', 'Ich hoffe, dass...'],
      sampleSolutionDe: 'Ich lerne Deutsch, weil ich in Deutschland studieren möchte. Ich hoffe, dass ich bald die B1-Prüfung bestehe.',
      scaffold: {
        openingDe: 'Sehr geehrte Damen und Herren,',
        closingDe: 'Mit freundlichen Grüßen',
        usefulPhrasesDe: ['Ich bewerbe mich, weil...', 'Ich weiß, dass...']
      }
    },
    shadowing: [
      {
        id: 'sha-m9-2',
        lessonId: 'les-26',
        levelCode: 'a2-1',
        sentenceDe: 'Ich bewerbe mich bei Ihnen, weil ich in einem internationalen Team arbeiten möchte.',
        translationUz: 'Men xalqaro jamoada ishlashni xohlaganim sababli sizga ariza topshirmoqdaman.',
        phoneticHint: '[Ih be-ver-be mih bay I-nen, vayl ih in ay-nem in-ter-nat-syo-na-len Tim ar-bay-ten möh-te]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-m9-2-q1',
        type: 'word-order',
        questionUz: '"weil" ergash gapini to‘g‘ri so‘z tartibida tuzing (fe‘l oxirida!):',
        scrambledWords: ['weil', 'lerne', 'ich', 'Deutsch,', 'ich', 'Deutschland', 'liebe'],
        correctAnswer: 'Ich lerne Deutsch, weil ich Deutschland liebe',
        explanationUz: '"weil" dan keyin fe‘l (liebe) eng oxirida turadi.',
        mistakeTipUz: '❌ Ergash gapda tuslangan fe‘l eng oxirida turishi shart: weil ich Deutschland liebe.'
      },
      {
        id: 'prac-m9-2-q2',
        type: 'fill-blank',
        questionUz: 'To‘g‘ri bog‘lovchini tanlang: "Ich weiß, _____ er morgen kommt."',
        blankSentence: 'Ich weiß, [blank] er morgen kommt.',
        options: ['dass', 'weil', 'denn', 'aber'],
        correctAnswer: 'dass',
        explanationUz: '"U ertaga kelishini bilaman" ma‘nosida "dass" ishlatiladi.',
        mistakeTipUz: '❌ "dass" = deb / ekanligini.'
      },
      {
        id: 'prac-m9-2-q3',
        type: 'multiple-choice',
        questionUz: 'Qaysi gap grammatik jihatdan to‘g‘ri tuzilgan?',
        options: [
          'Er bleibt zu Hause, weil er krank ist.',
          'Er bleibt zu Hause, weil er ist krank.',
          'Er bleibt zu Hause, dass er krank ist.',
          'Er bleibt zu Hause, weil krank er ist.'
        ],
        correctAnswer: 'Er bleibt zu Hause, weil er krank ist.',
        explanationUz: '"weil er krank ist" — "weil" dan keyin fe‘l "ist" eng oxirida turadi.',
        mistakeTipUz: '❌ "weil er ist krank" noto‘g‘ri. Fe‘l doimo oxirida: "weil er krank ist".'
      }
    ]
  },

  // ==========================================
  // LEKTION 27: Ausbildung und Karriere
  // ==========================================
  {
    id: 'les-27',
    moduleId: 'mod-a2-1-1',
    levelCode: 'a2-1',
    titleDe: 'Lektion 27: Ausbildung und Karriere',
    titleUz: '27-Dars: Kasbiy ta‘lim va martaba (O‘zlik fe‘llari - Reflexive Verben)',
    descriptionUz: 'Germaniyada dual kasb-hunar ta‘limi (Ausbildung), karyera bosqichlari hamda o‘zlik fe‘llari (sich bewerben, sich freuen, sich interessieren).',
    orderIndex: 27,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Germaniyadagi "Ausbildung" (dual ta‘lim) tizimi haqida suhbatlasha olish',
      'O‘zlik olmoshlarini (mich, dich, sich, uns, euch, sich) to‘g‘ri qo‘llash',
      'Qiziqishlar va kelajak maqsadlarini ifodalash'
    ],
    warmUp: {
      situationUz: 'Germaniyada ko‘plab yoshlar universitetdan tashqari amaliy "Ausbildung" (hunar ta‘limi) yo‘nalishini tanlaydilar.',
      curiosityQuestionUz: '"Men bu sohaga juda qiziqaman" nemis tilida qanday ifodalanadi?',
      miniDialogue: [
        { speaker: 'Lehrer', textDe: 'Wofür interessierst du dich?', textUz: 'Nimaga qiziqasan?' },
        { speaker: 'Schüler', textDe: 'Ich interessiere mich für moderne Technologie.', textUz: 'Men zamonaviy texnologiyalarga qiziqaman.' }
      ],
      hintUz: '"sich interessieren" fe‘li o‘zlik olmoshi (mich/dich/sich) bilan birga keladi!'
    },
    contextDialogue: {
      titleDe: 'Eine Ausbildung in Deutschland',
      titleUz: 'Germaniyada kasb-hunar ta‘limi',
      situationUz: 'Nodir nemis do‘sti Florian bilan Germaniyadagi Ausbildung imkoniyatlarini muhokama qilmoqda.',
      lines: [
        { speaker: 'Florian', textDe: 'Nodir, hast du dich schon für einen Beruf entschieden?', textUz: 'Nodir, biror kasb tanlashga qaror qildingmi?' },
        { speaker: 'Nodir', textDe: 'Ja, ich interessiere mich sehr für Mechatronik.', textUz: 'Ha, men mexatronika sohasiga juda qiziqaman.' },
        { speaker: 'Florian', textDe: 'Das ist toll! In Deutschland gibt es viele gute Ausbildungsplätze dafür.', textUz: 'Bu ajoyib! Germaniyada buning uchun ko‘plab yaxshi ta‘lim o‘rinlari bor.' },
        { speaker: 'Nodir', textDe: 'Ich bewerbe mich gerade bei drei Firmen in Stuttgart.', textUz: 'Men hozir Shtutgartdagi uchta kompaniyaga ariza topshiryapman.' },
        { speaker: 'Florian', textDe: 'Freust du dich schon auf die Ausbildung?', textUz: 'Ta‘lim boshlanishini intizorlik bilan kutyapsanmi?' },
        { speaker: 'Nodir', textDe: 'Sehr! Ich freue mich darauf, Praxis und Theorie zu verbinden.', textUz: 'Juda ham! Amaliyot va nazariyani birlashtirishdan xursandman.' }
      ],
      usefulPhrases: [
        { german: 'sich entscheiden für', uzbek: '...ni tanlashga qaror qilmoq' },
        { german: 'sich interessieren für', uzbek: '...ga qiziqmoq' },
        { german: 'sich freuen auf (+ Akk)', uzbek: 'bo‘lajak voqeani intiqlik bilan kutmoq' },
        { german: 'sich freuen über (+ Akk)', uzbek: 'bo‘lib o‘tgan voqeadan xursand bo‘lmoq' }
      ],
      culturalNoteUz: 'Dual Ausbildung — Germaniyaning eng mashhur ta‘lim tizimi bo‘lib, talaba haftada 3 kun korxonada ishlab maosh oladi, 2 kun kasb maktabida o‘qiydi.'
    },
    vocabulary: [
      {
        id: 'voc-m9-13',
        lessonId: 'les-27',
        levelCode: 'a2-1',
        german: 'die Ausbildung',
        article: 'die',
        plural: 'die Ausbildungen',
        uzbek: 'kasbiy ta‘lim (hunar o‘rganish)',
        exampleDe: 'Er macht eine Ausbildung zum Mechatroniker.',
        exampleUz: 'U mexatronik bo‘yicha kasbiy ta‘lim olmoqda.',
        wordType: 'noun'
      },
      {
        id: 'voc-m9-14',
        lessonId: 'les-27',
        levelCode: 'a2-1',
        german: 'der Ausbildungsplatz',
        article: 'der',
        plural: 'die Ausbildungsplätze',
        uzbek: 'kasbiy ta‘lim o‘rni',
        exampleDe: 'Ich habe einen tollen Ausbildungsplatz gefunden.',
        exampleUz: 'Men ajoyib kasbiy ta‘lim o‘rni topdim.',
        wordType: 'noun'
      },
      {
        id: 'voc-m9-15',
        lessonId: 'les-27',
        levelCode: 'a2-1',
        german: 'sich interessieren',
        article: null,
        plural: null,
        uzbek: 'qiziqmoq',
        exampleDe: 'Ich interessiere mich für Sprachen.',
        exampleUz: 'Men tillarga qiziqaman.',
        wordType: 'verb'
      },
      {
        id: 'voc-m9-16',
        lessonId: 'les-27',
        levelCode: 'a2-1',
        german: 'sich freuen',
        article: null,
        plural: null,
        uzbek: 'xursand bo‘lmoq',
        exampleDe: 'Wir freuen uns auf das Wochenende.',
        exampleUz: 'Biz dam olish kunlarini intizorlik bilan kutyapmiz.',
        wordType: 'verb'
      },
      {
        id: 'voc-m9-17',
        lessonId: 'les-27',
        levelCode: 'a2-1',
        german: 'der Erfolg',
        article: 'der',
        plural: 'die Erfolge',
        uzbek: 'muvaffaqiyat',
        exampleDe: 'Viel Erfolg bei der Prüfung!',
        exampleUz: 'Imtihonda katta muvaffaqiyat tilayman!',
        wordType: 'noun'
      },
      {
        id: 'voc-m9-18',
        lessonId: 'les-27',
        levelCode: 'a2-1',
        german: 'die Praxis',
        article: 'die',
        plural: null,
        uzbek: 'amaliyot',
        exampleDe: 'In der Ausbildung lernt man viel Praxis.',
        exampleUz: 'Ausbildungda ko‘p amaliyot o‘rganiladi.',
        wordType: 'noun'
      }
    ],
    grammar: [
      {
        id: 'gra-m9-3',
        lessonId: 'les-27',
        levelCode: 'a2-1',
        titleDe: 'Reflexive Verben (O‘zlik fe‘llari va o‘zlik olmoshlari)',
        titleUz: 'O‘zlik fe‘llari: sich freuen, sich interessieren, sich bewerben',
        summaryUz: 'O‘zlik fe‘llari har doim "sich" (o‘zini/o‘zi) olmoshining tegishli shaxs shakli (mich, dich, sich, uns, euch, sich) bilan tuslanadi.',
        explanationUz: `Nemis tilida harakat subyektning o‘ziga qaytganda o‘zlik fe‘llari (Reflexive Verben) ishlatiladi.
Lug‘atda ular "sich" bilan beriladi (masalan: sich freuen).

O‘zlik olmoshlari (Akkusativ):
- ich → **mich** (Ich freue mich)
- du → **dich** (Du freust dich)
- er / sie / es → **sich** (Er freut sich)
- wir → **uns** (Wir freuen uns)
- ihr → **euch** (Ihr freut euch)
- sie / Sie → **sich** (Sie freuen sich)

Muhim fe‘llar va predloglar:
- *sich interessieren **für** (+ Akk)*: Ich interessiere mich für Musik.
- *sich freuen **auf** (+ Akk)* (kelajakdagi quvonch): Wir freuen uns auf den Urlaub.
- *sich bewerben **bei/um** (+ Akk)*: Er bewirbt sich um die Stelle.`,
        tables: [
          {
            title: 'sich freuen fe‘lining hozirgi zamonda tuslanishi',
            headers: ['Shaxs', 'Fe‘l', 'O‘zlik olmoshi', 'Namuna gap'],
            rows: [
              ['ich', 'freue', 'mich', 'Ich freue mich sehr.'],
              ['du', 'freust', 'dich', 'Freust du dich?'],
              ['er/sie', 'freut', 'sich', 'Er freut sich auf die Reise.'],
              ['wir', 'freuen', 'uns', 'Wir freuen uns auf das Fest.'],
              ['ihr', 'freut', 'euch', 'Freut ihr euch?'],
              ['sie/Sie', 'freuen', 'sich', 'Sie freuen sich über das Geschenk.']
            ]
          }
        ],
        examples: [
          {
            german: 'Ich interessiere mich für Medizin.',
            uzbek: 'Men tibbiyotga qiziqaman.',
            highlight: 'interessiere mich'
          },
          {
            german: 'Wir treffen uns morgen um acht Uhr.',
            uzbek: 'Biz ertaga soat sakkizda uchrashamiz.',
            highlight: 'treffen uns'
          }
        ]
      }
    ],
    listening: [
      {
        id: 'lis-m9-3',
        lessonId: 'les-27',
        levelCode: 'a2-1',
        titleDe: 'Beratung im Berufsinformationszentrum (BIZ)',
        titleUz: 'Kasbga yo‘naltirish markazida maslahat',
        transcriptDe: 'Guten Tag, Herr Rahimov. Willkommen im Berufsinformationszentrum. Wie kann ich Ihnen helfen?\nGuten Tag! Ich interessiere mich für eine Ausbildung im IT-Bereich und möchte mich über die Voraussetzungen informieren.\nSehr gerne. Eine Ausbildung als Fachinformatiker dauert in der Regel drei Jahre. Sie lernen im Betrieb und in der Berufsschule.',
        translationUz: 'Xayrli kun, janob Rahimov. Kasb markaziga xush kelibsiz. Qanday yordam bera olaman?\nXayrli kun! Men IT sohasidagi Ausbildungga qiziqaman va talablar haqida ma‘lumot olmoqchiman.\nJon deb. Dasturchi-mutaxassis ta‘limi odatda uch yil davom etadi. Siz korxonada va kasb maktabida ta‘lim olasiz.',
        dialogue: [
          { speaker: 'Berater', textDe: 'Wie kann ich Ihnen helfen?', textUz: 'Sizga qanday yordam bera olaman?' },
          { speaker: 'Nodir', textDe: 'Ich interessiere mich für eine Ausbildung im IT-Bereich.', textUz: 'Men IT sohasidagi ta‘limga qiziqaman.' }
        ],
        questions: [
          {
            id: 'q-lis-m9-3',
            questionUz: 'Fachinformatiker ta‘limi odatda qancha davom etadi?',
            options: ['Odatda uch yil', 'Faqat olti oy', 'Besh yil'],
            correctIndex: 0,
            explanationUz: 'Suhbatda aytilganidek: "Eine Ausbildung... dauert in der Regel drei Jahre" (odatda 3 yil).'
          }
        ]
      }
    ],
    reading: [
      {
        id: 'read-m9-3',
        lessonId: 'les-27',
        levelCode: 'a2-1',
        titleDe: 'Das duale Ausbildungssystem in Deutschland',
        titleUz: 'Germaniyada dual ta‘lim tizimi',
        textDe: 'Das duale Ausbildungssystem in Deutschland ist weltweit bekannt. Junge Menschen lernen nicht nur in der Berufsschule, sondern arbeiten auch direkt in einem Unternehmen. Sie bekommen vom ersten Tag an ein monatliches Gehalt. Nach zwei bis drei Jahren machen sie eine Abschlussprüfung und haben sehr gute Chancen auf dem Arbeitsmarkt.',
        textUz: 'Germaniyadagi dual ta‘lim tizimi butun dunyoda mashhur. Yoshlar nafaqat kasb maktabida o‘qiydilar, balki to‘g‘ridan-to‘g‘ri korxonada ham ishlaydilar. Ular birinchi kundan boshlab oylik maosh oladilar. Ikki yoki uch yildan so‘ng yakuniy imtihon topshiradilar va mehnat bozorida ajoyib imkoniyatlarga ega bo‘ladilar.',
        questions: [
          {
            id: 'q-read-m9-3',
            questionUz: 'Dual ta‘limdagi talabalarga birinchi kundan nima beriladi?',
            options: ['Oylik maosh (Gehalt)', 'Faqat bepul tushlik', 'Mashina'],
            correctIndex: 0,
            explanationUz: 'Matnda keltirilgan: "Sie bekommen vom ersten Tag an ein monatliches Gehalt" (birinchi kundan oylik maosh oladilar).'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-m9-3',
      lessonId: 'les-27',
      levelCode: 'a2-1',
      taskDe: 'Beschreiben Sie Ihre beruflichen Interessen.',
      taskUz: 'Kasbiy qiziqishlaringizni tasvirlang.',
      instructionUz: '"Ich interessiere mich für..." va "Ich freue mich auf..." iboralarini ishlating.',
      hints: ['Ich interessiere mich für...', 'In Zukunft möchte ich...'],
      sampleSolutionDe: 'Ich interessiere mich sehr für Informatik und moderne Technologien. Ich freue mich auf meine zukünftige Ausbildung in Deutschland.',
      scaffold: {
        openingDe: 'Mein Berufswunsch:',
        closingDe: 'Das ist mein Ziel.',
        usefulPhrasesDe: ['Ich interessiere mich für...', 'Ich freue mich darauf...']
      }
    },
    shadowing: [
      {
        id: 'sha-m9-3',
        lessonId: 'les-27',
        levelCode: 'a2-1',
        sentenceDe: 'Ich interessiere mich für diese Ausbildung und freue mich auf die neue Herausforderung.',
        translationUz: 'Men ushbu kasbiy ta‘limga qiziqaman va yangi sinovni intiqlik bilan kutyapman.',
        phoneticHint: '[Ih in-te-res-si-re mih fyur di-ze Aus-bil-dung unt froy-e mih auf di noy-e He-raus-for-de-rung]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-m9-3-q1',
        type: 'fill-blank',
        questionUz: 'To‘g‘ri o‘zlik olmoshini qo‘ying: "Ich freue _____ auf den Urlaub."',
        blankSentence: 'Ich freue [blank] auf den Urlaub.',
        options: ['mich', 'dich', 'sich', 'uns'],
        correctAnswer: 'mich',
        explanationUz: '"ich" uchun o‘zlik olmoshi "mich" bo‘ladi: Ich freue mich.',
        mistakeTipUz: '❌ "ich" bilan "mich" ishlatiladi.'
      },
      {
        id: 'prac-m9-3-q2',
        type: 'multiple-choice',
        questionUz: '"Ular yangi uyga ko‘chishdan xursandlar" gapi qaysi?',
        options: [
          'Sie freuen sich auf die neue Wohnung.',
          'Sie freut sich auf die neue Wohnung.',
          'Sie freuen mich auf die neue Wohnung.',
          'Sie freuen euch auf die neue Wohnung.'
        ],
        correctAnswer: 'Sie freuen sich auf die neue Wohnung.',
        explanationUz: '"sie" (ular) uchun "freuen sich" to‘g‘ri shakl.',
        mistakeTipUz: '❌ Ular uchun o‘zlik olmoshi "sich" bo‘ladi: Sie freuen sich.'
      },
      {
        id: 'prac-m9-3-q3',
        type: 'word-order',
        questionUz: 'Gapni to‘g‘ri tartibda tuzing:',
        scrambledWords: ['Wofür', 'dich?', 'du', 'interessierst'],
        correctAnswer: 'Wofür interessierst du dich?',
        explanationUz: 'Wofür (1) + interessierst (2) + du (3) + dich (4)?',
        mistakeTipUz: '❌ W-savollarda fe‘l 2-o‘rinda: Wofür interessierst du dich?'
      }
    ]
  }
];
