import { Lesson } from '../../types/database';

export const MODULE_24_B12_LESSONS: Lesson[] = [
  // ==========================================
  // LEKTION 70: Wissenschaft & Künstliche Intelligenz
  // ==========================================
  {
    id: 'les-70',
    moduleId: 'mod-b1-2-4',
    levelCode: 'b1-2',
    titleDe: 'Wissenschaft & Künstliche Intelligenz',
    titleUz: 'Ilm-fan, sun‘iy intellekt va "indem / dadurch, dass"',
    descriptionUz: 'Kiberxavfsizlik, raqamlashtirish, sun‘iy intellekt (KI) va usul-vosita ma‘nosidagi modal bog‘lovchilar: indem va dadurch, dass.',
    orderIndex: 70,
    estimatedMinutes: 45,
    isPublished: true,
    objectivesUz: [
      'Sun‘iy intellekt va raqamli innovatsiyalar haqida fikr bildirish',
      '"indem" va "dadurch, dass" modal bog‘lovchilarini to‘g‘ri qo‘llash',
      'Biror maqsadga qaysi yo‘l yoki vosita orqali erishishni ifodalash'
    ],
    warmUp: {
      situationUz: 'Ishxona yoki o‘qishda sun‘iy intellekt vositalaridan foydalanib vaqtni tejayapsiz. Hamkasbingizga: "Kishi sun‘iy intellekt yordamida matnlarni tahlil qilish orqali vaqtni tejashi mumkin" deb tushuntirmoqdasiz.',
      curiosityQuestionUz: 'Nemis tilida "shunday qilish orqali", "ushbu yo‘l bilan" ma‘nosini qaysi bog‘lovchilar orqali ifodalaymiz?',
      miniDialogue: [
        { speaker: 'Fabian', textDe: 'Wie optimiert ihr eure Arbeit im Team?', textUz: 'Jamoangizdagi ishni qanday optimallashtiryapsiz?' },
        { speaker: 'Mira', textDe: 'Wir sparen viel Zeit, indem wir Routineaufgaben durch KI automatisieren.', textUz: 'Biz odatiy vazifalarni sun‘iy intellekt orqali avtomatlashtirish yo‘li bilan ko‘p vaqt tejayapmiz.' }
      ],
      hintUz: '"indem" va "dadurch, dass" "qanday qilib? qaysi vosita orqali?" degan savolga javob beruvchi ergash gaplarni hosil qiladi va fe‘l gap oxiriga boradi.'
    },
    contextDialogue: {
      titleDe: 'Künstliche Intelligenz im Arbeitsalltag',
      titleUz: 'Ish jarayonida sun‘iy intellekt',
      situationUz: 'Ikki dasturchi va ma‘lumotlar tahlilchisi sun‘iy intellektning kasblarga ta‘siri haqida muhokama qilmoqda.',
      lines: [
        { speaker: 'Fabian', textDe: 'Mira, glaubst du, dass künstliche Intelligenz viele Arbeitsplätze vernichten wird?', textUz: 'Mira, sun‘iy intellekt ko‘plab ish o‘rinlarini yo‘q qiladi deb o‘ylaysanmi?' },
        { speaker: 'Mira', textDe: 'Nicht unbedingt. Ich denke, Arbeitnehmer profitieren davon, indem sie lästige Routinearbeiten an Algorithmen abgeben.', textUz: 'Unchalik emas. O‘ylaymanki, xodimlar zerikarli ishlarni algoritmlarga topshirish orqali foyda ko‘rishadi.' },
        { speaker: 'Fabian', textDe: 'Stimmt. Dadurch, dass Maschinen repetitive Aufgaben schneller erledigen, bleibt uns mehr Raum für kreatives Denken.', textUz: 'To‘g‘ri. Mashinalar vazifalarni tezroq bajarishi orqali bizda ijodiy fikrlash uchun ko‘proq joy qoladi.' },
        { speaker: 'Mira', textDe: 'Genau. Allerdings müssen wir den Datenschutz stärken, indem wir transparente Regeln schaffen.', textUz: 'Aynan shunday. Biroq biz shaffof qoidalar yaratish orqali ma‘lumotlar xavfsizligini kuchaytirishimiz shart.' }
      ],
      usefulPhrases: [
        { german: 'die Künstliche Intelligenz (KI)', uzbek: 'sun‘iy intellekt' },
        { german: 'Routineaufgaben abgeben', uzbek: 'odatiy ishlarni topshirmoq' },
        { german: 'repetitive Aufgaben', uzbek: 'takrorlanuvchi vazifalar' },
        { german: 'den Datenschutz stärken', uzbek: 'ma‘lumotlar himoyasini kuchaytirmoq' }
      ],
      culturalNoteUz: 'Germaniyada "Datenschutz" (ma‘lumotlar maxfiyligi) juda yuqori qadriyat hisoblanadi. GDPR qonunlari sun‘iy intellekt modellarini inson huquqlariga moslashga majbur qiladi.'
    },
    vocabulary: [
      {
        id: 'voc-b1-20-1',
        lessonId: 'les-70',
        levelCode: 'b1-2',
        german: 'die Künstliche Intelligenz',
        article: 'die',
        uzbek: 'sun‘iy intellekt (KI)',
        exampleDe: 'Künstliche Intelligenz revolutioniert die Medizin.',
        exampleUz: 'Sun‘iy intellekt tibbiyotda inqilob qilmoqda.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-20-2',
        lessonId: 'les-70',
        levelCode: 'b1-2',
        german: 'der Algorithmus',
        article: 'der',
        plural: 'die Algorithmen',
        uzbek: 'algoritm',
        exampleDe: 'Der Algorithmus analysiert riesige Datenmengen.',
        exampleUz: 'Algoritm ulkan hajmdagi ma‘lumotlarni tahlil qiladi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-20-3',
        lessonId: 'les-70',
        levelCode: 'b1-2',
        german: 'der Datenschutz',
        article: 'der',
        uzbek: 'ma‘lumotlar xavfsizligi va maxfiyligi',
        exampleDe: 'Strenger Datenschutz schützt die Privatsphäre.',
        exampleUz: 'Qat‘iy ma‘lumotlar xavfsizligi shaxsiy hayotni himoya qiladi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-20-4',
        lessonId: 'les-70',
        levelCode: 'b1-2',
        german: 'optimieren',
        article: null,
        uzbek: 'optimallashtirmoq',
        exampleDe: 'Moderne Software hilft dabei, Arbeitsabläufe zu optimieren.',
        exampleUz: 'Zamonaviy dasturiy ta‘minot ish jarayonlarini optimallashtiradi.',
        wordType: 'verb'
      },
      {
        id: 'voc-b1-20-5',
        lessonId: 'les-70',
        levelCode: 'b1-2',
        german: 'die Automatisierung',
        article: 'die',
        uzbek: 'avtomatlashtirish',
        exampleDe: 'Die Automatisierung entlastet Mitarbeiter.',
        exampleUz: 'Avtomatlashtirish xodimlarni yengillatadi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-20-6',
        lessonId: 'les-70',
        levelCode: 'b1-2',
        german: 'der Fortschritt',
        article: 'der',
        plural: 'die Fortschritte',
        uzbek: 'taraqqiyot, ilgarilash',
        exampleDe: 'Wissenschaftlicher Fortschritt bringt neue Chancen.',
        exampleUz: 'Ilmiy taraqqiyot yangi imkoniyatlar olib keladi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-20-7',
        lessonId: 'les-70',
        levelCode: 'b1-2',
        german: 'effizient',
        article: null,
        uzbek: 'samarali, unumdor',
        exampleDe: 'Mit den richtigen Werkzeugen arbeitet man effizienter.',
        exampleUz: 'To‘g‘ri qurollar bilan inson samaraliroq ishlaydi.',
        wordType: 'adjective'
      },
      {
        id: 'voc-b1-20-8',
        lessonId: 'les-70',
        levelCode: 'b1-2',
        german: 'ersetzen',
        article: null,
        uzbek: 'o‘rnini bosmoq',
        exampleDe: 'Maschinen können menschliche Empathie niemals ganz ersetzen.',
        exampleUz: 'Mashinalar insoniy mehr-oqibat o‘rnini bosa olmaydi.',
        wordType: 'verb'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'Quyidagi jumlalarga qarang: Qanday qilib maqsadga erishilmoqda?',
      discoveryExamples: [
        {
          german: 'Man lernt schneller, indem man täglich spricht.',
          highlight: 'indem man täglich spricht',
          uzbek: 'Har kuni gaplashish orqali tezroq o‘rganiladi.'
        },
        {
          german: 'Dadurch, dass man täglich spricht, lernt man schneller.',
          highlight: 'Dadurch, dass man täglich spricht',
          uzbek: 'Har kuni gaplashish orqali kishi tezroq o‘rganadi.'
        }
      ],
      patternExplanationUz: '"indem" va "dadurch, dass" modal ergash gaplar bo‘lib, "qanday qilib / nima orqali?" degan savolga javob beradi va fe‘l eng oxirida turadi.',
      ruleFormulaUz: 'Hauptsatz + , indem / dadurch, dass + ... + Verb am Ende.'
    },
    grammar: [
      {
        id: 'gra-70',
        lessonId: 'les-70',
        levelCode: 'b1-2',
        titleDe: 'Modale Nebensätze: indem & dadurch, dass',
        titleUz: 'Usul-vosita ergash gaplari: indem va dadurch, dass',
        summaryUz: 'Maqsadga erishish usuli va vositasini ifodalash: indem va dadurch, dass (qilish orqali).',
        explanationUz: `"indem" va "dadurch, dass" bir xil ma‘noga ega:
1. *Man spart Energie, **indem** man das Licht ausschaltet.* (Chiroqni o‘chirish orqali energiya tejaydi.)
2. *Dadurch, dass neue Technologien entstehen, verändern sich viele Berufe.* (Yangi texnologiyalar paydo bo‘lishi orqali kasblar o‘zgarmoqda.)`,
        tables: [
          {
            title: 'indem va dadurch, dass solishtirmasi',
            headers: ['Bog‘lovchi', 'Gapdagi o‘rni', 'Misol'],
            rows: [
              ['indem', 'Ergash gap (fe‘l oxirda)', 'Er lernt, indem er viel liest.'],
              ['dadurch, dass', 'Ergash gap (fe‘l oxirda)', 'Dadurch, dass er viel liest, lernt er schnell.']
            ]
          }
        ],
        examples: [
          {
            german: 'Man spart viel Energie, indem man Geräte abschaltet.',
            uzbek: 'Uskunalarni o‘chirish orqali ko‘p energiya tejaladi.',
            highlight: 'indem man Geräte abschaltet'
          },
          {
            german: 'Dadurch, dass neue Technologien entstehen, entstehen neue Arbeitsplätze.',
            uzbek: 'Yangi texnologiyalar paydo bo‘lishi orqali yangi ish o‘rinlari yaratilmoqda.',
            highlight: 'Dadurch, dass neue Technologien entstehen'
          }
        ],
        commonMistakes: [
          {
            incorrect: 'Er lernt, indem er hört Musik.',
            correct: 'Er lernt, indem er Musik hört.',
            explanationUz: '"indem" ergash gap bog‘lovchisi, fe‘l (hört) oxirida bo‘lishi shart.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Künstliche Intelligenz im Alltag',
      titleUz: 'Kundalik hayotda sun‘iy intellekt',
      situationUz: 'Ikki dasturchi sun‘iy intellekt afzalliklari haqida suhbatlashmoqda.',
      audioTranscriptDe: 'Fabian: Mira, glaubst du, dass KI viele Arbeitsplätze vernichten wird?\nMira: Nicht unbedingt. Arbeitnehmer profitieren davon, indem sie Routinearbeiten abgeben.\nFabian: Stimmt. Dadurch, dass Maschinen repetitive Aufgaben schneller erledigen, bleibt mehr Raum für Kreativität.\nMira: Genau. Allerdings müssen wir den Datenschutz stärken, indem wir transparente Regeln schaffen.',
      translationUz: 'Fabian: Mira, sun‘iy intellekt ish o‘rinlarini yo‘q qiladi deb o‘ylaysanmi?\nMira: Unchalik emas. Xodimlar odatiy ishlarni topshirish orqali foyda ko‘rishadi.\nFabian: To‘g‘ri. Mashinalar ishlarni tezroq bajarishi orqali ijodkorlik uchun ko‘proq joy qoladi.\nMira: Shunday. Biroq shaffof qoidalar orqali ma‘lumotlar xavfsizligini kuchaytirishimiz kerak.',
      stage1Global: {
        instructionUz: '1-Bosqich: Mira sun‘iy intellekt haqida nima deb hisoblaydi?',
        questionUz: 'Mira sun‘iy intellektning ish o‘rinlariga ta‘siri haqida nima deb hisoblaydi?',
        options: ['Barcha ishlarni butunlay to‘xtatadi', 'Insonlar odatiy ishlarni unga topshirib ijodga ko‘proq vaqt topishadi', 'Uni butunlay taqiqlash kerak'],
        correctIndex: 1,
        explanationUz: 'Mira xodimlar odatiy ishlarni topshirish orqali foyda olishini aytadi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Vosita va usulni aniqlang.',
        questions: [
          {
            id: 'l70-q1',
            questionUz: 'Ma‘lumotlar xavfsizligini qanday kuchaytirish lozim?',
            options: ['Kompyuterni o‘chirish orqali', 'Shaffof qoidalar yaratish orqali (indem wir Regeln schaffen)', 'Hech narsa qilmaslik'],
            correctIndex: 1,
            explanationUz: 'Mira: "...indem wir transparente Regeln schaffen" deydi.'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Mira', textDe: 'Wir sparen Zeit, indem wir Routine abgeben.', textUz: 'Odatiy ishlarni topshirish orqali vaqt tejaymiz.' },
          { speaker: 'Fabian', textDe: 'Dadurch bleibt Raum für Kreativität.', textUz: 'Shu orqali ijodkorlikka joy qoladi.' }
        ],
        keyVocabulary: [
          { german: 'die Routine', uzbek: 'bir xil odatiy ish' },
          { german: 'der Datenschutz', uzbek: 'ma‘lumotlar himoyasi' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-70',
        lessonId: 'les-70',
        levelCode: 'b1-2',
        titleDe: 'Künstliche Intelligenz in der Medizin',
        titleUz: 'Tibbiyotda sun‘iy intellekt',
        textDe: 'Moderne Diagnoseprogramme unterstützen Ärzte heute dabei, Krankheiten früher zu erkennen. Indem Systeme Millionen von Bildern mit Datenbanken abgleichen, entdecken sie feine Gewebeveränderungen. Dadurch gewinnen Mediziner wertvolle Zeit für das persönliche Gespräch mit ihren Patienten.',
        translationUz: 'Zamonaviy tashxis dasturlari shifokorlarga kasalliklarni ertaroq aniqlashda yordam bermoqda. Tizimlar millionlab tasvirlarni solishtirish orqali nozik to‘qima o‘zgarishlarini topmoqda. Bu orqali shifokorlar bemorlar bilan shaxsan muloqot qilish uchun qimmatli vaqtga ega bo‘lmoqdalar.',
        vocabularyHints: [
          { german: 'abgleichen', uzbek: 'solishtirmoq' },
          { german: 'gewinnen (Zeit)', uzbek: 'vaqt yutmoq' }
        ],
        questions: [
          {
            id: 'q-rea-70-1',
            questionUz: 'Sun‘iy intellekt tibbiyotda kasalliklarni qanday yo‘l bilan aniqlamoqda?',
            options: ['Faqat dori berish orqali', 'Millionlab tasvirlarni solishtirish orqali (indem)', 'Operatsiyani to‘xtatish orqali'],
            correctIndex: 1,
            explanationUz: 'Matnda: "Indem Systeme Millionen von Bildern... abgleichen" deb aytilgan.'
          }
        ]
      }
    ],
    writing: {
      taskDe: 'Schreiben Sie einen Forumsbeitrag (ca. 80-100 Wörter) zum Thema: "Wie nutze ich digitale Hilfsmittel beim Sprachenlernen?". Verwenden Sie "indem" oder "dadurch, dass".',
      taskUz: '"Til o‘rganishda raqamli vositalardan qanday foydalanaman?" mavzusida forum xabari yozing (taxminan 80-100 so‘z). "indem" yoki "dadurch, dass" dan foydalaning.',
      instructionUz: 'Kamida 2 marta vosita bog‘lovchilarini qo‘llang.',
      hints: ['Ich lerne neue Vokabeln, indem ich Apps nutze.', 'Dadurch, dass ich Podcasts höre, verstehe ich besser.'],
      sampleSolutionDe: 'In meinem Deutschkurs nutze ich fast täglich moderne Apps. Ich verbessere meine Grammatik, indem ich kurze Texte schreibe und sie korrigieren lasse. Dadurch, dass ich sofort Feedback erhalte, lerne ich viel schneller. Außerdem erweitere ich meinen Wortschatz, indem ich digitale Karteikarten auf dem Smartphone wiederhole. Durch diese Werkzeuge wird das Lernen abwechslungsreicher.',
      scaffold: {
        openingDe: 'Digitale Werkzeuge sind sehr nützlich...',
        closingDe: 'Abschließend hilft die richtige Kombination aus Technik und Fleiß.',
        usefulPhrasesDe: ['Ich lerne schneller, indem ich...', 'Dadurch, dass ich...', 'Man spart Zeit, indem...']
      }
    },
    shadowing: [
      {
        id: 'sha-70',
        lessonId: 'les-70',
        levelCode: 'b1-2',
        sentenceDe: 'Man kann Arbeitsabläufe optimieren, indem man intelligente Algorithmen für Routineaufgaben einsetzt.',
        translationUz: 'Odatiy vazifalar uchun aqlli algoritmlarni qo‘llash orqali kishi ish jarayonlarini optimallashtirishi mumkin.',
        phoneticHint: '[Man kan Ar-bayts-ap-loy-fe op-ti-mi-ren, in-dem man in-tel-li-gen-te Al-go-rit-men für Ru-ti-ne-auf-ga-ben ayn-zetst]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-70-q1',
        type: 'fill-blank',
        questionUz: 'Modal ergash gap bog‘lovchisini tanlang: "Er verbesserte sein Deutsch, _____ er täglich deutsche Podcasts hörte."',
        blankSentence: 'Er verbesserte sein Deutsch, [blank] er täglich deutsche Podcasts hörte.',
        options: ['indem', 'obwohl', 'während', 'damit'],
        correctAnswer: 'indem',
        explanationUz: '"indem" vosita va usulni bildiradi: har kuni podkast eshitish orqali nemis tilini yaxshiladi.',
        mistakeTipUz: '❌ usul/vosita uchun: indem (eshitish orqali).'
      },
      {
        id: 'prac-70-q2',
        type: 'multiple-choice',
        questionUz: 'Qaysi jumla to‘g‘ri so‘z tartibiga ega?',
        options: [
          'Dadurch, dass er viel liest, er erweitert seinen Wortschatz.',
          'Dadurch, dass er viel liest, erweitert er seinen Wortschatz.',
          'Dadurch, dass er liest viel, erweitert er seinen Wortschatz.'
        ],
        correctAnswer: 'Dadurch, dass er viel liest, erweitert er seinen Wortschatz.',
        explanationUz: '"Dadurch, dass" ergash gapidan keyin bosh gap fe‘l (erweitert) bilan boshlanadi.',
        mistakeTipUz: '❌ Bosh gap darhol fe‘l bilan boshlanadi: erweitert er...'
      },
      {
        id: 'prac-70-q3',
        type: 'word-order',
        questionUz: 'Gapni to‘g‘ri tartibda tuzing:',
        scrambledWords: ['spart', 'Man', 'Strom', 'Geräte', 'abschaltet', 'indem', 'man'],
        correctAnswer: 'Man spart Strom indem man Geräte abschaltet',
        explanationUz: 'Man (1) + spart (2) + Strom (3), + indem (4) + man (5) + Geräte (6) + abschaltet (7).',
        mistakeTipUz: '❌ indem ergash gapida fe‘l (abschaltet) oxirida bo‘ladi.'
      }
    ]
  },

  // ==========================================
  // LEKTION 71: Lebenslanges Lernen & Karriereziele
  // ==========================================
  {
    id: 'les-71',
    moduleId: 'mod-b1-2-4',
    levelCode: 'b1-2',
    titleDe: 'Lebenslanges Lernen & Karriereziele',
    titleUz: 'Uzluksiz ta‘lim, karyera va bog‘lovchi ravishlar',
    descriptionUz: 'Malaka oshirish (Weiterbildung), karyera bosqichlari, mantiqiy bog‘lovchi ravishlar: deshalb, trotzdem, folglich, stattdessen, allerdings.',
    orderIndex: 71,
    estimatedMinutes: 45,
    isPublished: true,
    objectivesUz: [
      'Kasbiy rejalashtirish va malaka oshirish kurslari haqida suhbatlashish',
      'Bog‘lovchi ravishlarni to‘g‘ri qo‘llash',
      'Bog‘lovchi ravishlardan keyin fe‘lning 2-o‘rinda kelishi qoidasini egallash'
    ],
    warmUp: {
      situationUz: 'Kasbiy tajribangizni oshirish uchun yangi kursga yozildingiz. Hamkasbingiz: "Darslar qiyin, shunga qaramay (trotzdem) men qatnashyapman; demak (folglich) tez orada ko‘tarilaman" deb reja tuzmoqda.',
      curiosityQuestionUz: '"deshalb", "trotzdem", "folglich", "allerdings" kabi so‘zlardan keyin nemischa gapda ega (ich/er) keladimi yoki fe‘lmi?',
      miniDialogue: [
        { speaker: 'Simon', textDe: 'Machst du die Weiterbildung neben dem Beruf?', textUz: 'Ish bilan birga malaka oshirish kursini qilyapsanmi?' },
        { speaker: 'Carla', textDe: 'Ja, es ist anstrengend; trotzdem lerne ich jeden Abend. Folglich erhalte ich im Herbst mein Diplom.', textUz: 'Ha, bu mashaqqatli; shunga qaramay har oqshom o‘qiyapman. Natijada kuzda diplomimni olaman.' }
      ],
      hintUz: 'Bog‘lovchi ravishlar gap boshida kelsa, darhol tuslangan fe‘l keladi: ravish + fe‘l + ega (trotzdem lerne ich...).'
    },
    contextDialogue: {
      titleDe: 'Investition in die Zukunft',
      titleUz: 'Kelajakka sarmoya',
      situationUz: 'Ikki mutaxassis ishdan so‘ng o‘qish va yangi kasbiy ko‘nikmalarni egallash haqida fikr almashmoqda.',
      lines: [
        { speaker: 'Simon', textDe: 'Carla, du hast dich für den IT-Projektmanagement-Kurs angemeldet, stimmt’s?', textUz: 'Karla, IT loyihalarni boshqarish kursiga yozilding, to‘g‘rimi?' },
        { speaker: 'Carla', textDe: 'Ja. Die Anforderungen am Markt steigen rasant; deshalb muss man sich ständig weiterbilden.', textUz: 'Ha. Bozordagi talablar oshmoqda; shuning uchun inson doimiy malaka oshirishi shart.' },
        { speaker: 'Simon', textDe: 'Aber hast du überhaupt noch Freizeit?', textUz: 'Lekin sening bo‘sh vaqting qolyaptimi o‘zi?' },
        { speaker: 'Carla', textDe: 'Wenig. Allerdings macht es riesigen Spaß. Stattdessen verbringe ich weniger Zeit vor dem Fernseher.', textUz: 'Juda kam. Biroq bu katta zavq bag‘ishlamoqda. Buning o‘rniga men televizor oldida kamroq vaqt o‘tkazyapman.' }
      ],
      usefulPhrases: [
        { german: 'das lebenslange Lernen', uzbek: 'uzluksiz ta‘lim' },
        { german: 'die Weiterbildung', uzbek: 'malaka oshirish' },
        { german: 'deshalb / folglich', uzbek: 'shuning uchun / natijada' },
        { german: 'allerdings / trotzdem', uzbek: 'ammo / shunga qaramay' }
      ],
      culturalNoteUz: 'Germaniyada xodimlarning "Bildungsurlaub" (ta‘lim ta‘tili) huquqi bor: yiliga 5 kun ish haqi saqlangan holda o‘quv kurslariga borish qonun bilan kafolatlangan.'
    },
    vocabulary: [
      {
        id: 'voc-b1-21-1',
        lessonId: 'les-71',
        levelCode: 'b1-2',
        german: 'die Weiterbildung',
        article: 'die',
        plural: 'die Weiterbildungen',
        uzbek: 'malaka oshirish kursi',
        exampleDe: 'Eine Weiterbildung verbessert die Aufstiegschancen.',
        exampleUz: 'Malaka oshirish ko‘tarilish imkoniyatlarini yaxshilaydi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-21-2',
        lessonId: 'les-71',
        levelCode: 'b1-2',
        german: 'die Qualifikation',
        article: 'die',
        plural: 'die Qualifikationen',
        uzbek: 'malaka, mutaxassislik darajasi',
        exampleDe: 'Für diese Stelle ist eine Qualifikation erforderlich.',
        exampleUz: 'Bu lavozim uchun qo‘shimcha malaka talab qilinadi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-21-3',
        lessonId: 'les-71',
        levelCode: 'b1-2',
        german: 'das Karriereziel',
        article: 'das',
        plural: 'die Karriereziele',
        uzbek: 'karyera maqsadi',
        exampleDe: 'Mein Karriereziel ist eine Führungsposition.',
        exampleUz: 'Mening karyera maqsadim rahbarlik lavozimidir.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-21-4',
        lessonId: 'les-71',
        levelCode: 'b1-2',
        german: 'trotzdem',
        article: null,
        uzbek: 'shunga qaramay, baribir',
        exampleDe: 'Er war müde, trotzdem lernte er weiter.',
        exampleUz: 'U charchagan edi, shunga qaramay o‘qishda davom etdi.',
        wordType: 'adverb'
      },
      {
        id: 'voc-b1-21-5',
        lessonId: 'les-71',
        levelCode: 'b1-2',
        german: 'folglich',
        article: null,
        uzbek: 'demak, natijada',
        exampleDe: 'Er hat hart trainiert, folglich gewann er den Wettkampf.',
        exampleUz: 'U qattiq shug‘ullandi, natijada g‘olib chiqdi.',
        wordType: 'adverb'
      },
      {
        id: 'voc-b1-21-6',
        lessonId: 'les-71',
        levelCode: 'b1-2',
        german: 'allerdings',
        article: null,
        uzbek: 'biroq, ammo',
        exampleDe: 'Der Kurs ist sehr gut, allerdings verlangt er viel Disziplin.',
        exampleUz: 'Kurs juda yaxshi, biroq u katta tartib-intizom talab qiladi.',
        wordType: 'adverb'
      },
      {
        id: 'voc-b1-21-7',
        lessonId: 'les-71',
        levelCode: 'b1-2',
        german: 'stattdessen',
        article: null,
        uzbek: 'buning o‘rniga',
        exampleDe: 'Er ging nicht ins Kino, stattdessen las er ein Buch.',
        exampleUz: 'U kinoga bormadi, buning o‘rniga kitob o‘qidi.',
        wordType: 'adverb'
      },
      {
        id: 'voc-b1-21-8',
        lessonId: 'les-71',
        levelCode: 'b1-2',
        german: 'erwerben',
        article: null,
        uzbek: 'egallamoq (bilim, tajriba)',
        exampleDe: 'Im Seminar konnte sie praktische Erfahrungen erwerben.',
        exampleUz: 'Seminarda u amaliy tajribalarni egalladi.',
        wordType: 'verb'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'Quyidagi jumlalarda ravishdan keyin nima kelayotganiga e‘tibor bering:',
      discoveryExamples: [
        {
          german: 'Er war krank; deshalb ging er zum Arzt.',
          highlight: 'deshalb ging er',
          uzbek: 'U kasal edi; shuning uchun shifokorga bordi.'
        },
        {
          german: 'Es regnete; trotzdem machten wir einen Spaziergang.',
          highlight: 'trotzdem machten wir',
          uzbek: 'Yomg‘ir yog‘ardi; shunga qaramay sayr qildik.'
        }
      ],
      patternExplanationUz: 'Bog‘lovchi ravishlar (deshalb, trotzdem, folglich, stattdessen, allerdings) bosh gapning 1-o‘rnida kelsa, fe‘l darhol 2-o‘rinda keladi (Inversiya: Adverb + Verb + Subjekt).',
      ruleFormulaUz: 'Adverb + finites Verb + Subjekt + ...'
    },
    grammar: [
      {
        id: 'gra-71',
        lessonId: 'les-71',
        levelCode: 'b1-2',
        titleDe: 'Konjunktionaladverbien: deshalb, trotzdem, folglich, allerdings',
        titleUz: 'Bog‘lovchi ravishlar va ularning gapdagi o‘rni',
        summaryUz: 'deshalb (shuning uchun), trotzdem (shunga qaramay), folglich (natijada) so‘zlaridan keyin darhol tuslangan fe‘l keladi.',
        explanationUz: `Bog‘lovchi ravishlar mustaqil bosh gaplarni mantiqan bog‘laydi va ulardan keyin fe‘l 2-o‘rinda turadi:
- **deshalb / deswegen:** sabab-oqibat (shuning uchun)
- **trotzdem:** zidlik (shunga qaramay)
- **folglich:** mantiqiy xulosa (demak, natijada)
- **allerdings:** cheklov (ammo, biroq)
- **stattdessen:** muqobil (buning o‘rniga)`,
        tables: [
          {
            title: 'Bog‘lovchi ravishlar ma‘nolari',
            headers: ['Ravish', 'Mantiqiy aloqa', 'Misol'],
            rows: [
              ['deshalb', 'Sabab / Natija', 'Er lernt; deshalb besteht er die Prüfung.'],
              ['trotzdem', 'Zidlik', 'Es war kalt; trotzdem ging er schwimmen.'],
              ['folglich', 'Mantiqiy oqibat', 'Der Flug fiel aus; folglich kamen wir zu spät.']
            ]
          }
        ],
        examples: [
          {
            german: 'Sie möchte Karriere machen; folglich arbeitet sie zielstrebig.',
            uzbek: 'U karyera qilishni xohlaydi; natijada maqsadli ishlamoqda.',
            highlight: 'folglich arbeitet sie'
          },
          {
            german: 'Der Kurs war anspruchsvoll; trotzdem haben alle bestanden.',
            uzbek: 'Kurs talabchan edi; shunga qaramay hamma o‘tdi.',
            highlight: 'trotzdem haben alle'
          }
        ],
        commonMistakes: [
          {
            incorrect: 'Deshalb er ging nach Hause.',
            correct: 'Deshalb ging er nach Hause.',
            explanationUz: '"deshalb"dan keyin fe‘l (ging) darhol 2-o‘rinda kelishi shart.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Investition in die Zukunft',
      titleUz: 'Kelajakka sarmoya',
      situationUz: 'Karla va Simon o‘qish va malaka oshirish haqida suhbatlashmoqda.',
      audioTranscriptDe: 'Simon: Carla, du hast dich für den IT-Kurs angemeldet, stimmt’s?\nCarla: Ja. Die Anforderungen am Markt steigen rasant; deshalb muss man sich ständig weiterbilden.\nSimon: Aber hast du überhaupt noch Freizeit?\nCarla: Wenig. Allerdings macht es riesigen Spaß. Stattdessen verbringe ich weniger Zeit vor dem Fernseher.',
      translationUz: 'Simon: Karla, IT kursiga yozilding, to‘g‘rimi?\nCarla: Ha. Bozordagi talablar oshmoqda; shuning uchun doimiy o‘qish kerak.\nSimon: Lekin bo‘sh vaqting qolyaptimi?\nCarla: Kam. Biroq bu katta zavq beradi. Buning o‘rniga televizor oldida kamroq vaqt o‘tkazaman.',
      stage1Global: {
        instructionUz: '1-Bosqich: Karla nima sababdan kursga yozildi?',
        questionUz: 'Karla nima sababdan kursga yozildi?',
        options: ['Bo‘sh vaqti ko‘pligi uchun', 'Bozordagi talablar oshib borayotgani sababli (deshalb)', 'Majbur bo‘lgani uchun'],
        correctIndex: 1,
        explanationUz: 'Karla talablar oshgani uchun malaka oshirish kerakligini aytadi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Ravishlarga e‘tibor bering.',
        questions: [
          {
            id: 'l71-q1',
            questionUz: 'Karla o‘qish uchun qaysi odatini o‘zgartirdi?',
            options: ['Ishdan bo‘shadi', 'Televizor oldida kamroq vaqt o‘tkazmoqda (stattdessen)', 'Sportni to‘xtatdi'],
            correctIndex: 1,
            explanationUz: 'Karla: "Stattdessen verbringe ich weniger Zeit vor dem Fernseher" deydi.'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Carla', textDe: 'Deshalb muss man sich weiterbilden.', textUz: 'Shuning uchun o‘qish kerak.' },
          { speaker: 'Simon', textDe: 'Trotzdem brauchst du Erholung.', textUz: 'Shunga qaramay senga dam kerak.' }
        ],
        keyVocabulary: [
          { german: 'deshalb', uzbek: 'shuning uchun' },
          { german: 'trotzdem', uzbek: 'shunga qaramay' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-71',
        lessonId: 'les-71',
        levelCode: 'b1-2',
        titleDe: 'Lebenslanges Lernen im Beruf',
        titleUz: 'Kasbda uzluksiz ta‘lim',
        textDe: 'Die fortschreitende Digitalisierung verändert Arbeitsabläufe in Rekordzeit; deshalb ist kontinuierliche Weiterbildung heute eine grundlegende Strategie auf dem Arbeitsmarkt. Viele Arbeitnehmer empfinden die Doppelbelastung als anstrengend; trotzdem nehmen über sechzig Prozent regelmäßig an Fortbildungen teil.',
        translationUz: 'Raqamlashtirish ish jarayonlarini rekord tezlikda o‘zgartirmoqda; shuning uchun uzluksiz malaka oshirish bugun asosiy strategiyadir. Ko‘plab xodimlar ikki baravar yuklamani og‘ir deb bilishadi; shunga qaramay 60 foizdan ortiq inson muntazam kurslarda qatnashadi.',
        vocabularyHints: [
          { german: 'die Doppelbelastung', uzbek: 'ikki karra yuklama' },
          { german: 'die Fortbildung', uzbek: 'malaka oshirish' }
        ],
        questions: [
          {
            id: 'q-rea-71-1',
            questionUz: 'Nima sababdan uzluksiz malaka oshirish zaruriyatga aylandi?',
            options: ['Barcha kasblar tugatilgani uchun', 'Raqamlashtirish ishlarni tez o‘zgartirayotgani uchun (deshalb)', 'Boshqa ish qolmagani uchun'],
            correctIndex: 1,
            explanationUz: 'Matnda raqamlashtirish sababli uzluksiz ta‘lim zarurligi aytilgan.'
          }
        ]
      }
    ],
    writing: {
      taskDe: 'Schreiben Sie einen Aufsatz (ca. 80-100 Wörter) über Ihre Karrierepläne. Verwenden Sie mindestens drei Konjunktionaladverbien (deshalb, trotzdem, folglich, allerdings, stattdessen).',
      taskUz: 'Karyera rejalaringiz haqida insho yozing (taxminan 80-100 so‘z). Kamida uchta bog‘lovchi ravishdan foydalaning.',
      instructionUz: 'Ravishdan keyin fe‘lning 2-o‘rinda kelishiga qat‘iy rioya qiling.',
      hints: ['Deshalb lerne ich Deutsch.', 'Trotzdem gebe ich nicht auf.'],
      sampleSolutionDe: 'In den nächsten Jahren habe ich mir ehrgeizige Ziele gesetzt. Ich möchte in Deutschland als Ingenieur arbeiten. Deshalb lerne ich jeden Tag fleißig Deutsch. Die Grammatik ist anspruchsvoll; trotzdem verliere ich nie den Mut. Folglich verbessern sich meine Kenntnisse von Tag zu Tag. Stattdessen verbringe ich meine Abende mit Fachbüchern. Allerdings weiß ich, dass Fleiß der Schlüssel zum Erfolg ist.',
      scaffold: {
        openingDe: 'Für meine Zukunft habe ich klare Ziele...',
        closingDe: 'Ich bin sicher, dass sich meine Arbeit auszahlen wird.',
        usefulPhrasesDe: ['Deshalb lerne ich...', 'Trotzdem verliere ich nicht...', 'Folglich verbessern sich...']
      }
    },
    shadowing: [
      {
        id: 'sha-71',
        lessonId: 'les-71',
        levelCode: 'b1-2',
        sentenceDe: 'Die Weiterbildung war sehr anspruchsvoll; trotzdem hat sie meine Karrierechancen entscheidend verbessert.',
        translationUz: 'Malaka oshirish juda talabchan edi; shunga qaramay u mening karyera imkoniyatlarimni tubdan yaxshiladi.',
        phoneticHint: '[Di Vay-ter-bil-dung var zer an-shhpruh-s-fol; trots-dem hat zi may-ne Ka-ri-e-re-shan-sen ent-shay-dent fer-bes-sert]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-71-q1',
        type: 'fill-blank',
        questionUz: 'Gapni mantiqiy bog‘lovchi ravish bilan to‘ldiring: "Er war sehr müde; _____ arbeitete er bis spät in die Nacht weiter."',
        blankSentence: 'Er war sehr müde; [blank] arbeitete er bis spät in die Nacht weiter.',
        options: ['trotzdem', 'weil', 'obwohl', 'damit'],
        correctAnswer: 'trotzdem',
        explanationUz: '"trotzdem" (shunga qaramay) zidlikni bildiradi: trotzdem arbeitete er.',
        mistakeTipUz: '❌ Ravish + fe‘l: trotzdem arbeitete er.'
      },
      {
        id: 'prac-71-q2',
        type: 'multiple-choice',
        questionUz: 'Qaysi jumlada so‘z tartibi to‘g‘ri?',
        options: ['Deshalb ich habe die Prüfung bestanden.', 'Deshalb habe ich die Prüfung bestanden.', 'Deshalb die Prüfung habe ich bestanden.'],
        correctAnswer: 'Deshalb habe ich die Prüfung bestanden.',
        explanationUz: '"deshalb"dan keyin tuslangan fe‘l keladi: Deshalb habe ich...',
        mistakeTipUz: '❌ Inversiya: deshalb + habe + ich.'
      },
      {
        id: 'prac-71-q3',
        type: 'word-order',
        questionUz: 'Gapni to‘g‘ri tartibda tuzing:',
        scrambledWords: ['studiert', 'er', 'Stattdessen', 'zu', 'Hause'],
        correctAnswer: 'Stattdessen studiert er zu Hause',
        explanationUz: 'Stattdessen (1) + studiert (2) + er (3) + zu Hause (4).',
        mistakeTipUz: '❌ Stattdessen + studiert + er...'
      }
    ]
  },

  // ==========================================
  // LEKTION 72: B1-Gesamtwiederholung & Goethe B1 Prüfungstraining
  // ==========================================
  {
    id: 'les-72',
    moduleId: 'mod-b1-2-4',
    levelCode: 'b1-2',
    titleDe: 'B1-Gesamtwiederholung & Goethe B1 Prüfungstraining',
    titleUz: 'B1 Yakuniy takrorlash va Goethe/telc B1 Imtihoniga tayyorgarlik',
    descriptionUz: 'Butun B1 darajasi grammatikasi va ko‘nikmalarining umumiy sintezi: Konjunktiv II, Passiv, Relativsätze, Konnektoren, Lesen, Hören, Schreiben, Sprechen imtihon modullari strategiyalari.',
    orderIndex: 72,
    estimatedMinutes: 50,
    isPublished: true,
    objectivesUz: [
      'B1 darajasining barcha asosiy grammatik mavzularini tizimlashtirish',
      'Goethe-Zertifikat B1 / telc Deutsch B1 imtihoni tuzilmasini egallash',
      'Schreiben va Sprechen qismlari uchun yuqori ball beruvchi qoliplarni o‘zlashtirish'
    ],
    warmUp: {
      situationUz: 'Siz B1 darajasining so‘nggi darsiga yetib keldingiz! Oldinda Goethe-Zertifikat B1 imtihoni turibdi. Do‘stingiz bilan imtihonning 4 ta moduli (Lesen, Hören, Schreiben, Sprechen) bo‘yicha takrorlash qilyapsiz.',
      curiosityQuestionUz: 'Goethe B1 imtihonida eng yuqori ball olish uchun qaysi grammatik tuzilmalar xatingizda va nutqingizda aks etishi kerak?',
      miniDialogue: [
        { speaker: 'Prüfer', textDe: 'Herzlich willkommen zur B1-Prüfung! Sind Sie gut vorbereitet?', textUz: 'B1 imtihoniga xush kelibsiz! Yaxshi tayyorgarlik ko‘rdingizmi?' },
        { speaker: 'Kandidat', textDe: 'Ja, ich habe alle Grammatikthemen wiederholt und freue mich auf die Aufgaben!', textUz: 'Ha, men barcha grammatik mavzularni takrorladim va topshiriqlarni mamnuniyat bilan kutmoqdaman!' }
      ],
      hintUz: 'B1 imtihonida murakkab bog‘lovchilar (obwohl, indem), Passiv, Konjunktiv II va nisbiy gaplar sizning darajangizni ko‘rsatadi.'
    },
    contextDialogue: {
      titleDe: 'Generalprobe für das Zertifikat B1',
      titleUz: 'B1 sertifikati uchun bosh repetitsiya',
      situationUz: 'Ikki nomzod imtihon xonasiga kirishdan oldin oxirgi strategiyalarni muhokama qilmoqda.',
      lines: [
        { speaker: 'David', textDe: 'Nora, vor welchem Modul hast du am meisten Respekt?', textUz: 'Nora, qaysi moduldan eng ko‘p hayajonlanyapsan?' },
        { speaker: 'Nora', textDe: 'Vor dem Schreiben. Aber ich habe mir feste Redemittel eingeprägt: Entschuldigung, Begründung, Gegenvorschlag.', textUz: 'Yozishdan. Lekin men mustahkam iboralarni yodladim: uzr, sabab va qarshi taklif.' },
        { speaker: 'David', textDe: 'Beim Sprechen kommt es darauf an, flüssig zu argumentieren und Fragen zu stellen.', textUz: 'Gapirishda esa ravon dalil keltirish va savol berish muhim.' },
        { speaker: 'Nora', textDe: 'Wir haben so fleißig gelernt. Wir werden das B1-Zertifikat mit Bravour bestehen!', textUz: 'Biz shunchalik tirishqoqlik bilan o‘rgandik. B1 sertifikatini a‘lo topshiramiz!' }
      ],
      usefulPhrases: [
        { german: 'das Goethe-Zertifikat B1', uzbek: 'Gyote B1 xalqaro sertifikati' },
        { german: 'mit Bravour bestehen', uzbek: 'a‘lo darajada topshirmoq' },
        { german: 'feste Redemittel einprägen', uzbek: 'nutq qoliplarini yodlab olmoq' },
        { german: 'die Generalprobe', uzbek: 'bosh repetitsiya' }
      ],
      culturalNoteUz: 'Goethe-Zertifikat B1 Germaniyada fuqarolik olish (Einbürgerung) va kasbiy ta‘lim (Ausbildung) uchun rasmiy talab qilinadigan darajadir.'
    },
    vocabulary: [
      {
        id: 'voc-b1-22-1',
        lessonId: 'les-72',
        levelCode: 'b1-2',
        german: 'das Zertifikat',
        article: 'das',
        plural: 'die Zertifikate',
        uzbek: 'sertifikat',
        exampleDe: 'Das B1-Zertifikat öffnet Türen zu Ausbildung und Beruf.',
        exampleUz: 'B1 sertifikati ta‘lim va kasb eshiklarini ochadi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-22-2',
        lessonId: 'les-72',
        levelCode: 'b1-2',
        german: 'die Prüfungsvorbereitung',
        article: 'die',
        uzbek: 'imtihonga tayyorgarlik',
        exampleDe: 'Eine gute Prüfungsvorbereitung nimmt die Prüfungsangst.',
        exampleUz: 'Yaxshi imtihon tayyorgarligi qo‘rquvni ketkazadi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-22-3',
        lessonId: 'les-72',
        levelCode: 'b1-2',
        german: 'das Redemittel',
        article: 'das',
        plural: 'die Redemittel',
        uzbek: 'nutq qolipi',
        exampleDe: 'Passende Redemittel helfen bei der Präsentation.',
        exampleUz: 'Mos nutq qoliplari taqdimotda yordam beradi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-22-4',
        lessonId: 'les-72',
        levelCode: 'b1-2',
        german: 'bewältigen',
        article: null,
        uzbek: 'uddalamoq, yengmoq',
        exampleDe: 'Mit Ausdauer kann man jede Hürde bewältigen.',
        exampleUz: 'Matonat bilan har qanday to‘siqni yengsa bo‘ladi.',
        wordType: 'verb'
      },
      {
        id: 'voc-b1-22-5',
        lessonId: 'les-72',
        levelCode: 'b1-2',
        german: 'die Argumentation',
        article: 'die',
        plural: 'die Argumentationen',
        uzbek: 'dalillash',
        exampleDe: 'Eine klare Argumentation überzeugt die Prüfer.',
        exampleUz: 'Aniq dalillash imtihon oluvchilarni ishontiradi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-22-6',
        lessonId: 'les-72',
        levelCode: 'b1-2',
        german: 'zusammenfassen',
        article: null,
        uzbek: 'umumlashtirmoq, xulosa qilmoq',
        exampleDe: 'Am Ende sollte man die Punkte zusammenfassen.',
        exampleUz: 'Oxirida fikrlarni xulosa qilish lozim.',
        wordType: 'verb'
      },
      {
        id: 'voc-b1-22-7',
        lessonId: 'les-72',
        levelCode: 'b1-2',
        german: 'selbstbewusst',
        article: null,
        uzbek: 'o‘ziga ishongan',
        exampleDe: 'Gehen Sie ruhig und selbstbewusst in die Prüfung.',
        exampleUz: 'Imtihonga xotirjam va o‘zingizga ishongan holda kiring.',
        wordType: 'adjective'
      },
      {
        id: 'voc-b1-22-8',
        lessonId: 'les-72',
        levelCode: 'b1-2',
        german: 'bestehen',
        article: null,
        uzbek: 'muvaffaqiyatli topshirmoq (o‘tmoq)',
        exampleDe: 'Sie hat die B1-Prüfung erfolgreich bestanden.',
        exampleUz: 'U B1 imtihonini muvaffaqiyatli topshirdi.',
        wordType: 'verb'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'B1 darajasining 4 xil asosiy gap turini ko‘rib chiqing:',
      discoveryExamples: [
        {
          german: 'Passiv: Das Projekt wurde pünktlich abgeschlossen.',
          highlight: 'wurde abgeschlossen',
          uzbek: 'Loyiha o‘z vaqtida yakunlandi (Passiv).'
        },
        {
          german: 'Konjunktiv II: Hätte ich mehr Zeit, würde ich reisen.',
          highlight: 'Hätte / würde reisen',
          uzbek: 'Vaqtim bo‘lsa edi, sayohat qilardim (Konjunktiv II).'
        },
        {
          german: 'Konnektoren: Er spricht sowohl Deutsch als auch Englisch.',
          highlight: 'sowohl ... als auch',
          uzbek: 'U ham nemischa, ham inglizcha gapiradi.'
        }
      ],
      patternExplanationUz: 'B1 imtihonida muvaffaqiyat garovi: Passiv, Konjunktiv II, Relativsätze va juft bog‘lovchilarni (sowohl...als auch, weder...noch, indem) to‘g‘ri qo‘llashdir.',
      ruleFormulaUz: 'B1 muvaffaqiyati = Boy leksika + Murakkab bog‘lovchilar + Aniq grammatika'
    },
    grammar: [
      {
        id: 'gra-72',
        lessonId: 'les-72',
        levelCode: 'b1-2',
        titleDe: 'B1-Grammatik-Kompakt & Prüfungstraining',
        titleUz: 'B1 Grammatika kompas va Imtihon strategiyasi',
        summaryUz: 'B1 imtihonining 4 moduli (Lesen, Hören, Schreiben, Sprechen) va asosiy nutq qoliplari.',
        explanationUz: `Goethe B1 imtihoni 4 moduldan iborat:
1. **Lesen (65 daqiqa):** 5 qism (faktlar, e‘lonlar, fikrlar).
2. **Hören (40 daqiqa):** 4 qism (xabarlar, suhbatlar, munozara).
3. **Schreiben (60 daqiqa):** 3 qism (do‘stga xat, forum posti, rasmiy uzr xati).
4. **Sprechen (15 daqiqa):** 3 qism (rejalashtirish, taqdimot, savollarga javob).`,
        tables: [
          {
            title: 'Muhim Redemittel iboralari',
            headers: ['Funksiya', 'Nemischa ibora', 'Misol'],
            rows: [
              ['Fikr bildirish', 'Meiner Meinung nach ...', 'Meiner Meinung nach ist das wichtig.'],
              ['Taklif kiritish', 'Wie wäre es, wenn wir...', 'Wie wäre es, wenn wir uns treffen?'],
              ['E‘tiroz bildirish', 'Da bin ich anderer Meinung.', 'Das sehe ich anders.']
            ]
          }
        ],
        examples: [
          {
            german: 'Obwohl das Thema komplex ist, lässt sich eine Lösung finden.',
            uzbek: 'Mavzu murakkab bo‘lishiga qaramay, yechim topish mumkin.',
            highlight: 'Obwohl ... lässt sich finden'
          },
          {
            german: 'Zusammenfassend möchte ich betonen, dass diese Erfahrung mein Leben bereichert hat.',
            uzbek: 'Xulosa qilib aytganda, bu tajriba hayotimni boyitdi.',
            highlight: 'Zusammenfassend'
          }
        ],
        commonMistakes: [
          {
            incorrect: 'Weil es ist interessant...',
            correct: 'Weil es interessant ist...',
            explanationUz: '"weil" ergash gapida fe‘l eng oxirida turishi shart.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Generalprobe für das Zertifikat B1',
      titleUz: 'B1 sertifikati uchun bosh repetitsiya',
      situationUz: 'Nomzodlar imtihon oldidan oxirgi maslahatlarni muhokama qilmoqda.',
      audioTranscriptDe: 'David: Nora, vor welchem Modul hast du Respekt?\nNora: Vor dem Schreiben. Aber ich habe mir feste Redemittel eingeprägt: Entschuldigung, Begründung, Gegenvorschlag.\nDavid: Beim Sprechen kommt es auf flüssiges Argumentieren an.\nNora: Wir haben fleißig gelernt. Wir werden das B1-Zertifikat mit Bravour bestehen!',
      translationUz: 'David: Nora, qaysi moduldan hayajonlanyapsan?\nNora: Yozishdan. Lekin tayyor iboralarni yodladim: uzr, sabab, qarshi taklif.\nDavid: Gapirishda esa ravon dalil keltirish muhim.\nNora: Tirishqoqlik bilan o‘rgandik. B1 sertifikatini a‘lo topshiramiz!',
      stage1Global: {
        instructionUz: '1-Bosqich: Nomzodlarning kayfiyati qanday?',
        questionUz: 'Nomzodlar B1 imtihoni oldidan o‘zlarini qanday his qilmoqdalar?',
        options: ['Qo‘rquvda va voz kechmoqchi', 'Ishonch bilan to‘la (mit Bravour bestehen)', 'Vaqtni adashtirib qo‘yishgan'],
        correctIndex: 1,
        explanationUz: 'Nora imtihonni a‘lo topshirishlariga ishonadi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Yozish strategiyasini aniqlang.',
        questions: [
          {
            id: 'l72-q1',
            questionUz: 'Nora xat yozishda qaysi ketma-ketlikni rejalashtirgan?',
            options: ['Faqat salomlashish', 'Uzr so‘rash, sababini aytish va qarshi taklif berish', 'Bitta gap yozish'],
            correctIndex: 1,
            explanationUz: 'Nora: "Entschuldigung, Begründung, Gegenvorschlag" ketma-ketligini aytadi.'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Nora', textDe: 'Wir werden das Zertifikat bestehen!', textUz: 'Sertifikatni topshiramiz!' },
          { speaker: 'David', textDe: 'Viel Erfolg in der Prüfung!', textUz: 'Imtihonda muvaffaqiyat!' }
        ],
        keyVocabulary: [
          { german: 'das Zertifikat', uzbek: 'sertifikat' },
          { german: 'bestehen', uzbek: 'o‘tmoq / topshirmoq' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-72',
        lessonId: 'les-72',
        levelCode: 'b1-2',
        titleDe: 'Erfolgreich zum Goethe-Zertifikat B1',
        titleUz: 'Goethe B1 sertifikatiga muvaffaqiyatli yo‘l',
        textDe: 'Das Goethe-Zertifikat B1 bestätigt die selbstständige Sprachverwendung. Im Modul Lesen empfiehlt es sich, zuerst die Aufgaben und Signalwörter zu überfliegen. Beim Hören ist die Einlesezeit entscheidend. Im Modul Schreiben punkten Teilnehmer durch Absätze und Konnektoren, während beim Sprechen Interaktion und Spontaneität im Vordergrund stehen.',
        translationUz: 'Goethe-Zertifikat B1 tildan mustaqil foydalanishni tasdiqlaydi. O‘qishda avval topshiriq va kalit so‘zlarni ko‘zdan kechirish kerak. Tinglashda o‘qib olish vaqti muhim. Yozishda abzaslar va bog‘lovchilar yuqori ball keltiradi, gapirishda esa faol muloqot va tabiiylik asosiy o‘rinda turadi.',
        vocabularyHints: [
          { german: 'überfliegen', uzbek: 'ko‘zdan kechirmoq' },
          { german: 'die Interaktion', uzbek: 'o‘zaro muloqot' }
        ],
        questions: [
          {
            id: 'q-rea-72-1',
            questionUz: 'Tinglash (Hören) modulida qaysi taktika hal qiluvchi hisoblanadi?',
            options: ['Audio oldidan savollarni o‘qib olish (Einlesezeit)', 'Faqat oxirgi javobni belgilash', 'Eshitmaslik'],
            correctIndex: 0,
            explanationUz: 'Matnda: "Beim Hören ist die Einlesezeit entscheidend" deb aytilgan.'
          }
        ]
      }
    ],
    writing: {
      taskDe: 'Sie haben das Niveau B1 abgeschlossen! Schreiben Sie einen Brief (ca. 80-100 Wörter) an Ihre Deutschlehrkraft. Bedanken Sie sich und beschreiben Sie Ihre Zukunftspläne.',
      taskUz: 'Siz B1 darajasini tamomladingiz! O‘qituvchingizga minnatdorchilik xati yozing (taxminan 80-100 so‘z). Rahmat ayting va kelajak rejalaringizni bayon qiling.',
      instructionUz: 'B1 grammatikasi va bog‘lovchilaridan foydalaning.',
      hints: ['Liebe Lehrerin / Lieber Lehrer,', 'Vielen Dank für Ihre Unterstützung.', 'Mein nächstes Ziel ist B2.'],
      sampleSolutionDe: 'Liebe Lehrerin,\n\nheute habe ich die letzte Lektion des Niveaus B1 abgeschlossen und möchte mich herzlich bei Ihnen bedanken. Dank Ihres Unterrichts habe ich gelernt, komplexe Texte zu verstehen und mich frei auf Deutsch zu unterhalten. Die Übungen zur Grammatik und zum Sprechen haben mir großes Selbstvertrauen gegeben. Mein nächstes Ziel ist es, die Goethe-Zertifikat B1 Prüfung erfolgreich abzulegen und mit dem B2-Kurs zu beginnen. Vielen Dank für alles!\n\nHerzliche Grüße\nAzizbek',
      scaffold: {
        openingDe: 'Liebe Lehrerin / Lieber Lehrer [Name],',
        closingDe: 'Herzliche Grüße,',
        usefulPhrasesDe: ['Dank Ihres Unterrichts...', 'Mein nächstes Ziel ist...', 'Vielen Dank für alles!']
      }
    },
    shadowing: [
      {
        id: 'sha-72',
        lessonId: 'les-72',
        levelCode: 'b1-2',
        sentenceDe: 'Mit Fleiß, Begeisterung und Ausdauer habe ich das gesamte B1-Niveau erfolgreich gemeistert!',
        translationUz: 'G‘ayrat, ishtiyoq va matonat bilan men butun B1 darajasini a‘lo darajada egalladim!',
        phoneticHint: '[Mit Flayss, Be-gays-te-rung und Aus-dau-er ha-be ih das ge-zam-te Beh-Ayns-Ni-vo er-folk-rayh ge-mays-tert]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-72-q1',
        type: 'fill-blank',
        questionUz: 'To‘g‘ri juft bog‘lovchini tanlang: "Er spricht _____ fließend Deutsch als auch Englisch."',
        blankSentence: 'Er spricht [blank] fließend Deutsch als auch Englisch.',
        options: ['sowohl', 'weder', 'entweder', 'zwar'],
        correctAnswer: 'sowohl',
        explanationUz: '"sowohl ... als auch" juft bog‘lovchisi: u ham nemischa, ham inglizcha ravon gapiradi.',
        mistakeTipUz: '❌ ham ... ham: sowohl ... als auch.'
      },
      {
        id: 'prac-72-q2',
        type: 'multiple-choice',
        questionUz: 'Qaysi jumla o‘tgan zamon Konjunktiv II qoidasiga to‘liq mos?',
        options: [
          'Wenn ich mehr gelernt hätte, hätte ich die Prüfung bestanden.',
          'Wenn ich mehr lernte, bestand ich die Prüfung.',
          'Wenn ich würde gelernt haben, hätte ich bestanden.'
        ],
        correctAnswer: 'Wenn ich mehr gelernt hätte, hätte ich die Prüfung bestanden.',
        explanationUz: 'hätte + Partizip II (gelernt hätte) va hätte bestanden.',
        mistakeTipUz: '❌ O‘tgan zamon Konjunktiv II: hätte/wäre + Partizip II.'
      },
      {
        id: 'prac-72-q3',
        type: 'word-order',
        questionUz: 'Gapni to‘g‘ri tartibda tuzing:',
        scrambledWords: ['Prüfung', 'Wir', 'die', 'B1', 'bestehen', 'werden'],
        correctAnswer: 'Wir werden die B1 Prüfung bestehen',
        explanationUz: 'Wir (1) + werden (2) + die B1 Prüfung (3) + bestehen (4).',
        mistakeTipUz: '❌ Futur I: werden + Infinitiv oxirida.'
      }
    ]
  }
];
