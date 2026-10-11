import { Lesson } from '../../types/database';

export const MODULE_16_A22_LESSONS: Lesson[] = [
  // ==========================================
  // LEKTION 46: Pläne für die Zukunft und Berufswelt
  // ==========================================
  {
    id: 'les-46',
    moduleId: 'mod-a2-2-4',
    levelCode: 'a2-2',
    titleDe: 'Lektion 46: Pläne für die Zukunft und Berufswelt',
    titleUz: '46-Dars: Kelajak rejalari va kasbiy orzular (Kelasi zamon - Futur I)',
    descriptionUz: 'Kelajak rejalari, niyatlar, prognozlar hamda kelasi zamon shakli — Futur I (werden + Infinitiv: Ich werde in Berlin studieren).',
    orderIndex: 46,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Kelajak rejalari va kasbiy orzularini nemis tilida ishonch bilan bayon qilish',
      '"werden + Infinitiv" (Futur I) kelasi zamon formulasini to‘g‘ri qo‘llash',
      'Kelajak haqida bashorat va taxminlar bildirish'
    ],
    warmUp: {
      situationUz: 'A2 darajasini muvaffaqiyatli tugatgach, kelgusi yili nimalar qilmoqchi ekanligingiz haqida o‘ylayapsiz.',
      curiosityQuestionUz: '"Men kelasi yili Germaniyada o‘qiyman va yangi do‘stlar orttiraman" nemischa qanday aytiladi?',
      miniDialogue: [
        { speaker: 'Freund', textDe: 'Was wirst du nach dem Deutschkurs machen?', textUz: 'Nemis tili kursidan keyin nima qilmoqchisan?' },
        { speaker: 'Aziz', textDe: 'Ich werde mich für ein Studium in München bewerben.', textUz: 'Men Myunxenda o‘qish uchun ariza topshiraman.' }
      ],
      hintUz: 'Futur I zamoni "werden" (tuslanadi) va asosiy fe‘lning infinitivi (gap oxirida) bilan yasaladi!'
    },
    contextDialogue: {
      titleDe: 'Unsere Pläne für das nächste Jahr',
      titleUz: 'Kelgusi yil uchun rejalarimiz',
      situationUz: 'Aziz va Madina nemis tili darsidan so‘ng kelajak orzulari haqida suhbatlashmoqda.',
      lines: [
        { speaker: 'Madina', textDe: 'Aziz, wir haben fast das ganze A2-Niveau geschafft! Was wirst du als Nächstes tun?', textUz: 'Aziz, biz deyarli butun A2 darajasini tugatdik! Keyingi navbatda nima qilmoqchisan?' },
        { speaker: 'Aziz', textDe: 'Ich werde mich intensiv auf das B1-Zertifikat vorbereiten. Nächstes Jahr werde ich nach Frankfurt fliegen.', textUz: 'Men B1 sertifikatiga jiddiy tayyorgarlik ko‘raman. Kelasi yili Frankfurtga uchib ketaman.' },
        { speaker: 'Madina', textDe: 'Wirst du dort studieren oder arbeiten?', textUz: 'U yerda o‘qiysanmi yoki ishlaysanmi?' },
        { speaker: 'Aziz', textDe: 'Ich werde zuerst ein Fachpraktikum in einem Software-Unternehmen machen. Und du?', textUz: 'Avval dasturiy ta‘minot kompaniyasida mutaxassislik amaliyotini o‘tayman. O‘zing-chi?' },
        { speaker: 'Madina', textDe: 'Ich werde eine Ausbildung zur Krankenschwester beginnen. Deutschland braucht qualifizierte Fachkräfte.', textUz: 'Men hamshiralik bo‘yicha Ausbildung boshlayman. Germaniyaga malakali mutaxassislar kerak.' },
        { speaker: 'Aziz', textDe: 'Das ist ein fantastischer Plan! Wir werden unsere Ziele ganz bestimmt erreichen.', textUz: 'Bu ajoyib reja! Biz maqsadlarimizga albatta erishamiz.' }
      ],
      usefulPhrases: [
        { german: 'Pläne für die Zukunft schmieden', uzbek: 'kelajak uchun rejalar tuzmoq' },
        { german: 'ein Ziel erreichen', uzbek: 'maqsadga erishmoq' },
        { german: 'Ich werde mich vorbereiten.', uzbek: 'Men tayyorgarlik ko‘raman.' },
        { german: 'Wir werden Erfolg haben!', uzbek: 'Biz muvaffaqiyat qozonamiz!' }
      ],
      culturalNoteUz: 'Germaniyada kelajak rejalarini tuzishda realistik muddatlar va bosqichma-bosqich reja (Schritt-für-Schritt-Plan) ishlab chiqish qadrlanadi.'
    },
    vocabulary: [
      {
        id: 'voc-m16-1',
        lessonId: 'les-46',
        levelCode: 'a2-2',
        german: 'der Plan',
        article: 'der',
        plural: 'die Pläne',
        uzbek: 'reja',
        exampleDe: 'Was sind deine Pläne für den Sommer?',
        exampleUz: 'Yoz uchun rejalaring qanday?',
        wordType: 'noun'
      },
      {
        id: 'voc-m16-2',
        lessonId: 'les-46',
        levelCode: 'a2-2',
        german: 'das Ziel',
        article: 'das',
        plural: 'die Ziele',
        uzbek: 'maqsad',
        exampleDe: 'Ich habe mein Ziel erreicht.',
        exampleUz: 'Men o‘z maqsadimga erishdim.',
        wordType: 'noun'
      },
      {
        id: 'voc-m16-3',
        lessonId: 'les-46',
        levelCode: 'a2-2',
        german: 'erreichen',
        article: null,
        plural: null,
        uzbek: 'erishmoq, yetmoq',
        exampleDe: 'Wir werden unsere Ziele erreichen.',
        exampleUz: 'Biz maqsadlarimizga erishamiz.',
        wordType: 'verb'
      },
      {
        id: 'voc-m16-4',
        lessonId: 'les-46',
        levelCode: 'a2-2',
        german: 'die Karriere',
        article: 'die',
        plural: 'die Karrieren',
        uzbek: 'martaba, karyera',
        exampleDe: 'Sie möchte Karriere im IT-Bereich machen.',
        exampleUz: 'U IT sohasida martabaga erishmoqchi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m16-5',
        lessonId: 'les-46',
        levelCode: 'a2-2',
        german: 'erfolgreich',
        article: null,
        plural: null,
        uzbek: 'muvaffaqiyatli',
        exampleDe: 'Ich wünsche dir ein erfolgreiches Jahr!',
        exampleUz: 'Senga muvaffaqiyatli yil tilayman!',
        wordType: 'adjective'
      },
      {
        id: 'voc-m16-6',
        lessonId: 'les-46',
        levelCode: 'a2-2',
        german: 'zuversichtlich',
        article: null,
        plural: null,
        uzbek: 'ishonchi komil, nekbin',
        exampleDe: 'Ich blicke zuversichtlich in die Zukunft.',
        exampleUz: 'Men kelajakka ishonch bilan qarayman.',
        wordType: 'adjective'
      }
    ],
    grammar: [
      {
        id: 'gra-m16-1',
        lessonId: 'les-46',
        levelCode: 'a2-2',
        titleDe: 'Das Futur I (Kelasi zamon shakli)',
        titleUz: 'werden + Infinitiv (Kelasi zamon)',
        summaryUz: 'Futur I "werden" yordamchi fe‘lining hozirgi zamon shakli va asosiy fe‘lning infinitivi (gap oxirida) orqali yasaladi.',
        explanationUz: `Kelasi zamon (Futur I) kelajakdagi niyatlar, qat‘iy va‘dalar yoki kelajak bashoratlarini bildiradi.

Formulasi:
**Subyekt + werden (2-o‘rinda tuslanadi) + ... + Infinitiv (gapning eng oxirida).**

"werden" fe‘lining hozirgi zamonda tuslanishi:
- ich **werde** (men qilaman)
- du **wirst** (sen qilasan)
- er / sie / es **wird** (u qiladi)
- wir **werden** (biz qilamiz)
- ihr **werdet** (sizlar qilasizlar)
- sie / Sie **werden** (ular / Siz qilasiz)

Masalan:
- *Ich **werde** nächstes Jahr Deutsch **lernen**.*
- *Wir **werden** die Prüfung sicher **bestehen**.*`,
        tables: [
          {
            title: 'Futur I formulasi va tuslanishi',
            headers: ['Shaxs', 'werden', 'To‘ldiruvchi', 'Infinitiv (oxirida)'],
            rows: [
              ['ich', 'werde', 'nach Berlin', 'reisen.'],
              ['du', 'wirst', 'die Prüfung', 'bestehen.'],
              ['er/sie', 'wird', 'ein Auto', 'kaufen.'],
              ['wir', 'werden', 'zusammen', 'feiern.'],
              ['ihr', 'werdet', 'viel', 'lernen.'],
              ['sie/Sie', 'werden', 'Erfolg', 'haben.']
            ]
          }
        ],
        examples: [
          {
            german: 'Im nächsten Monat werde ich eine neue Stelle anfangen.',
            uzbek: 'Kelasi oyda men yangi ish boshlayman.',
            highlight: 'werde ... anfangen'
          },
          {
            german: 'Alles wird gut werden!',
            uzbek: 'Hammasi yaxshi bo‘ladi!',
            highlight: 'wird ... werden'
          }
        ]
      }
    ],
    listening: [
      {
        id: 'lis-m16-1',
        lessonId: 'les-46',
        levelCode: 'a2-2',
        titleDe: 'Interview: Was bringt die Zukunft?',
        titleUz: 'Intervyu: Kelajak nimalarni va‘da qiladi?',
        transcriptDe: 'Hallo Sophie! Du hast gerade deine Ausbildung abgeschlossen. Was wirst du in den nächsten fünf Jahren machen?\nIch werde zuerst zwei Jahre lang Berufserfahrung in München sammeln. Danach werde ich vielleicht für ein Jahr ins Ausland gehen, um mein Englisch zu verbessern. Und in fünf Jahren werde ich hoffentlich ein eigenes kleines Team leiten.',
        translationUz: 'Salom Sofi! Sen endigina kasbiy ta‘limni tamomlading. Kelgusi besh yilda nimalar qilmoqchisan?\nMen avval Myunxenda ikki yil ish tajribasi to‘playman. Shundan so‘ng ingliz tilimni yaxshilash uchun bir yilga xorijga boraman. Va besh yildan so‘ng o‘zimning kichik jamoamga rahbarlik qilaman deb umid qilaman.',
        dialogue: [
          { speaker: 'Sophie', textDe: 'Ich werde zuerst zwei Jahre lang Berufserfahrung sammeln.', textUz: 'Avval ikki yil davomida ish tajribasi to‘playman.' }
        ],
        questions: [
          {
            id: 'q-lis-m16-1',
            questionUz: 'Sofi dastlabki ikki yilda nima qiladi?',
            options: ['Myunxenda ish tajribasi to‘playdi (Berufserfahrung sammeln)', 'Universitetga o‘qishga kiradi', 'Uyda dam oladi'],
            correctIndex: 0,
            explanationUz: 'Sofi "Ich werde zuerst zwei Jahre lang Berufserfahrung in München sammeln" dedi.'
          }
        ]
      }
    ],
    reading: [
      {
        id: 'read-m16-1',
        lessonId: 'les-46',
        levelCode: 'a2-2',
        titleDe: 'Die Arbeitswelt von morgen',
        titleUz: 'Ertangi kun mehnat bozori',
        textDe: 'Wie wird die Arbeitswelt in zehn Jahren aussehen? Experten sagen voraus: Digitale Technologien und künstliche Intelligenz werden viele Berufe verändern. Aber menschliche Fähigkeiten wie Kreativität, Teamfähigkeit und Fremdsprachenkenntnisse werden noch wichtiger werden. Wer lebenslang lernt und flexibel bleibt, wird auch in Zukunft beste Karrierechancen haben.',
        textUz: 'O‘n yildan keyin mehnat bozori qanday ko‘rinishga ega bo‘ladi? Mutaxassislar bashorat qilmoqda: Raqamli texnologiyalar va sun‘iy intellekt ko‘plab kasblarni o‘zgartiradi. Ammo ijodkorlik, jamoada ishlash va chet tillarini bilish kabi insoniy fazilatlar yanada muhimroq bo‘ladi. Hayot davomida o‘rganuvchi va moslashuvchan bo‘lgan inson kelajakda ham eng yaxshi martaba imkoniyatlariga ega bo‘ladi.',
        questions: [
          {
            id: 'q-read-m16-1',
            questionUz: 'Kelajakda qanday fazilatlar yanada muhimroq bo‘ladi?',
            options: ['Ijodkorlik, jamoaviy ish va chet tillari', 'Faqat jismoniy kuch', 'Hech qanday o‘zgarish bo‘lmaydi'],
            correctIndex: 0,
            explanationUz: 'Matnda "Kreativität, Teamfähigkeit und Fremdsprachenkenntnisse werden noch wichtiger werden" deb yozilgan.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-m16-1',
      lessonId: 'les-46',
      levelCode: 'a2-2',
      taskDe: 'Schreiben Sie über Ihre Pläne für das nächste Jahr im Futur I.',
      taskUz: 'Kelgusi yilgi rejalaringiz haqida Futur I (werde ... machen) yordamida yozing.',
      instructionUz: 'Qayerga bormoqchi ekanligingizni va qanday maqsadlaringiz borligini bayon qiling.',
      hints: ['Nächstes Jahr werde ich...', 'Ich werde die Prüfung bestehen...'],
      sampleSolutionDe: 'Nächstes Jahr werde ich die B1-Prüfung erfolgreich bestehen. Danach werde ich mich für ein Studium in Deutschland bewerben. Ich werde fleißig lernen und neue Erfahrungen sammeln.',
      scaffold: {
        openingDe: 'Meine Pläne für die Zukunft:',
        closingDe: 'Ich werde mein Bestes geben!',
        usefulPhrasesDe: ['Ich werde ... lernen', 'Ich werde nach Deutschland reisen...']
      }
    },
    shadowing: [
      {
        id: 'sha-m16-1',
        lessonId: 'les-46',
        levelCode: 'a2-2',
        sentenceDe: 'Nächstes Jahr werde ich die Prüfung erfolgreich bestehen und in Deutschland studieren.',
        translationUz: 'Kelasi yili men imtihondan muvaffaqiyatli o‘taman va Germaniyada ta‘lim olaman.',
        phoneticHint: '[Nêh-stes Yar ver-de ih di Pryu-fung er-folg-rayh be-shte-hen unt in Doytsh-land shtu-di-ren]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-m16-1-q1',
        type: 'fill-blank',
        questionUz: '"werden" fe‘lining to‘g‘ri shaklini qo‘ying (du): "Was _____ du nächstes Jahr machen?"',
        blankSentence: 'Was [blank] du nächstes Jahr machen?',
        options: ['wirst', 'werdest', 'wird', 'werden'],
        correctAnswer: 'wirst',
        explanationUz: '"du" uchun "werden" shakli "wirst" bo‘ladi: Was wirst du machen?',
        mistakeTipUz: '❌ du wirst.'
      },
      {
        id: 'prac-m16-1-q2',
        type: 'word-order',
        questionUz: 'Futur I gapini to‘g‘ri tartibda tuzing (infinitiv oxirida!):',
        scrambledWords: ['nach', 'fliegen.', 'werde', 'Deutschland', 'Ich'],
        correctAnswer: 'Ich werde nach Deutschland fliegen.',
        explanationUz: 'Ich werde (1) + nach Deutschland + fliegen (infinitiv oxirida).',
        mistakeTipUz: '❌ Asosiy fe‘l infinitiv shaklda eng oxirida turadi: "fliegen".'
      },
      {
        id: 'prac-m16-1-q3',
        type: 'multiple-choice',
        questionUz: '"Biz maqsadimizga erishamiz" gapi Futur I da qaysi?',
        options: [
          'Wir werden unser Ziel erreichen.',
          'Wir wird unser Ziel erreichen.',
          'Wir werden unser Ziel erreicht.',
          'Wir wollt unser Ziel erreichen.'
        ],
        correctAnswer: 'Wir werden unser Ziel erreichen.',
        explanationUz: '"wir werden" + infinitiv (erreichen).',
        mistakeTipUz: '❌ wir werden ... erreichen.'
      }
    ]
  },

  // ==========================================
  // LEKTION 47: Sprachenlernen und Auslandsaufenthalt
  // ==========================================
  {
    id: 'les-47',
    moduleId: 'mod-a2-2-4',
    levelCode: 'a2-2',
    titleDe: 'Lektion 47: Sprachenlernen und Auslandsaufenthalt',
    titleUz: '47-Dars: Til o‘rganish va xorijdagi hayot (Maqsad ergash gaplari - um... zu va damit)',
    descriptionUz: 'Chet tillarini samarali o‘zlashtirish, xorijiy almashinuv dasturlari hamda maqsad ergash gaplari (um... zu + Infinitiv va damit + Fe‘l oxirida).',
    orderIndex: 47,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Til o‘rganish usullari va chet eldagi amaliyotni tasvirlash',
      '"um ... zu" (bitta subyekt) va "damit" (turli subyektlar) farqini bilish',
      'Maqsad va niyatlarni grammatik to‘g‘ri ifodalash'
    ],
    warmUp: {
      situationUz: 'Nima maqsadda nemis tilini qunt bilan o‘rganayotganingizni chet ellik do‘stingizga tushuntiryapsiz.',
      curiosityQuestionUz: '"Men Germaniyada erkin gaplashish uchun har kuni so‘z yodlayapman" nemischa qanday aytiladi?',
      miniDialogue: [
        { speaker: 'Lehrer', textDe: 'Wozu lernst du jeden Tag Vokabeln?', textUz: 'Har kuni so‘zlarni nima maqsadda yodlayapsan?' },
        { speaker: 'Student', textDe: 'Ich lerne Vokabeln, um fließend Deutsch zu sprechen.', textUz: 'Nemis tilida ravon gapirish uchun so‘z yodlayapman.' }
      ],
      hintUz: 'Agar bosh gap va maqsad gapining egasi bir xil odam bo‘lsa "um ... zu", har xil bo‘lsa "damit" ishlatiladi!'
    },
    contextDialogue: {
      titleDe: 'Ein Semester in Heidelberg',
      titleUz: 'Haydelbergda bir semestr',
      situationUz: 'Zilola Germaniyadagi til amaliyoti va o‘qish tajribasi haqida o‘rtoqlashmoqda.',
      lines: [
        { speaker: 'Markus', textDe: 'Zilola, dein Deutsch ist in den letzten Monaten so viel besser geworden!', textUz: 'Zilola, nemis tiling so‘nggi oylarda ancha yaxshilanibdi!' },
        { speaker: 'Zilola', textDe: 'Danke, Markus! Ich bin nach Heidelberg gekommen, um an der Universität zu studieren und die Kultur kennenzulernen.', textUz: 'Rahmat, Markus! Men universitetda o‘qish va madaniyat bilan tanishish uchun Haydelbergga keldim.' },
        { speaker: 'Markus', textDe: 'Sprichst du auch im Alltag viel Deutsch?', textUz: 'Kundalik hayotda ham ko‘p nemischa gaplashasanmi?' },
        { speaker: 'Zilola', textDe: 'Ja, ich wohne in einer deutschen WG (Wohngemeinschaft), damit ich jeden Tag mit Muttersprachlern sprechen kann.', textUz: 'Ha, har kuni ona tili vakillari bilan gaplasha olishim uchun nemis talabalar turar-joyida yashayapman.' },
        { speaker: 'Markus', textDe: 'Das ist die beste Methode, um schnell fließend zu werden.', textUz: 'Bu tezda ravon gapirishga erishishning eng yaxshi usulidir.' },
        { speaker: 'Zilola', textDe: 'Stimmt! Die Sprachpraxis im echten Leben ist unersetzlich.', textUz: 'To‘g‘ri! Haqiqiy hayotdagi til amaliyotining o‘rnini hech narsa bosa olmaydi.' }
      ],
      usefulPhrases: [
        { german: 'um ... zu + Infinitiv', uzbek: '...qilish uchun (maqsad)' },
        { german: 'damit + Nebensatz', uzbek: '...bo‘lishi uchun (boshqa shaxs maqsadida)' },
        { german: 'fließend sprechen', uzbek: 'ravon (ravonlik bilan) gapirmoq' },
        { german: 'die Sprachpraxis vertiefen', uzbek: 'til amaliyotini chuqurlashtirmoq' }
      ],
      culturalNoteUz: 'Germaniyada talabalar ko‘pincha bir nechta kishi bitta katta kvartirani birgalikda ijaraga olib yashaydilar — bu "WG" (Wohngemeinschaft) deb ataladi va til o‘rganish uchun ajoyib muhitdir.'
    },
    vocabulary: [
      {
        id: 'voc-m16-7',
        lessonId: 'les-47',
        levelCode: 'a2-2',
        german: 'der Aufenthalt',
        article: 'der',
        plural: 'die Aufenthalte',
        uzbek: 'turish, bo‘lish (vaqtinchalik yashash)',
        exampleDe: 'Mein Aufenthalt in Deutschland war wunderbar.',
        exampleUz: 'Germaniyadagi bo‘lishim ajoyib o‘tdi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m16-8',
        lessonId: 'les-47',
        levelCode: 'a2-2',
        german: 'der Fortschritt',
        article: 'der',
        plural: 'die Fortschritte',
        uzbek: 'yutuq, o‘sish, progress',
        exampleDe: 'Du machst große Fortschritte beim Deutschlernen.',
        exampleUz: 'Nemis tili o‘rganishda katta o‘sishga erishmoqdasan.',
        wordType: 'noun'
      },
      {
        id: 'voc-m16-9',
        lessonId: 'les-47',
        levelCode: 'a2-2',
        german: 'fließend',
        article: null,
        plural: null,
        uzbek: 'ravon, tutilmasdan',
        exampleDe: 'Sie spricht fließend drei Sprachen.',
        exampleUz: 'U uchta tilda ravon gapiradi.',
        wordType: 'adjective'
      },
      {
        id: 'voc-m16-10',
        lessonId: 'les-47',
        levelCode: 'a2-2',
        german: 'verbessern',
        article: null,
        plural: null,
        uzbek: 'yaxshilamoq, rivojlantirmoq',
        exampleDe: 'Ich möchte meine Aussprache verbessern.',
        exampleUz: 'Talaffuzimni yaxshilamoqchiman.',
        wordType: 'verb'
      },
      {
        id: 'voc-m16-11',
        lessonId: 'les-47',
        levelCode: 'a2-2',
        german: 'der Austausch',
        article: 'der',
        plural: 'die Austausche',
        uzbek: 'almashinuv (talabalar almashinuvi)',
        exampleDe: 'Er nimmt an einem Schüleraustausch teil.',
        exampleUz: 'U o‘quvchilar almashinuvida ishtirok etmoqda.',
        wordType: 'noun'
      },
      {
        id: 'voc-m16-12',
        lessonId: 'les-47',
        levelCode: 'a2-2',
        german: 'motivieren',
        article: null,
        plural: null,
        uzbek: 'rag‘batlantirmoq, ruhlantirmoq',
        exampleDe: 'Gute Noten motivieren mich.',
        exampleUz: 'Yaxshi baholar meni ruhlantiradi.',
        wordType: 'verb'
      }
    ],
    grammar: [
      {
        id: 'gra-m16-2',
        lessonId: 'les-47',
        levelCode: 'a2-2',
        titleDe: 'Finale Nebensätze: um... zu vs. damit',
        titleUz: 'Maqsad ergash gaplari: "um ... zu" va "damit"',
        summaryUz: 'Subyekt bir xil bo‘lsa "um ... zu + Infinitiv", subyektlar har xil bo‘lsa "damit + Ergash gap fe‘li oxirida" qo‘llanadi.',
        explanationUz: `Maqsadni (Wozu? Warum? — Nima maqsadda?) ifodalashning ikki usuli mavjud:

1. **um ... zu + Infinitiv (Subyekt bir xil bo‘lganda):**
- Ikkala harakatni ham bitta inson bajaradi:
- *Ich lerne Deutsch.* + *Ich möchte in Berlin studieren.*
- → *Ich lerne Deutsch, **um** in Berlin **zu studieren**.*
  (Berlinda o‘qish uchun nemis tili o‘rganyapman.)

2. **damit (Subyektlar turli xil bo‘lganda):**
- Bitta inson harakat qiladi, maqsad esa boshqa insonga tegishli bo‘ladi:
- *Ich erkläre die Grammatik.* + *Die Schüler verstehen sie.*
- → *Ich erkläre die Grammatik, **damit** die Schüler sie **verstehen**.*
  (O‘quvchilar tushunishi uchun men grammatikani tushuntiryapman.)

Eslab qoling:
- "damit" har doim to‘liq ergash gap yasaydi va fe‘l eng oxirida turadi!
- "um ... zu" gapida ega takrorlanmaydi, fe‘l infinitivda "zu" bilan keladi.`,
        tables: [
          {
            title: 'um ... zu va damit taqqosi',
            headers: ['Struktura', 'Qachon ishlatiladi?', 'Namuna gap'],
            rows: [
              ['um ... zu + Infinitiv', 'Subyekt bir xil (Ich / Ich)', 'Ich beeile mich, um den Bus zu erreichen.'],
              ['damit + Nebensatz', 'Subyekt har xil (Ich / Du)', 'Ich gebe dir mein Buch, damit du lernen kannst.'],
              ['damit + Nebensatz', 'Subyekt bir xil bo‘lsa ham mumkin', 'Ich lerne viel, damit ich bestehe.']
            ]
          }
        ],
        examples: [
          {
            german: 'Wir sparen Geld, um eine Reise nach Europa zu machen.',
            uzbek: 'Yevropaga sayohat qilish uchun pul tejayapmiz.',
            highlight: 'um ... zu machen'
          },
          {
            german: 'Der Lehrer spricht langsam, damit alle ihn verstehen.',
            uzbek: 'Barcha uni tushunishi uchun o‘qituvchi sekin gapirmoqda.',
            highlight: 'damit alle ihn verstehen'
          }
        ]
      }
    ],
    listening: [
      {
        id: 'lis-m16-2',
        lessonId: 'les-47',
        levelCode: 'a2-2',
        titleDe: 'Erfahrungsbericht: Sprachreise nach Wien',
        titleUz: 'Vena shahriga til safari taassuroti',
        transcriptDe: 'Diesen Sommer war ich für vier Wochen in Wien, um meine Deutschkenntnisse zu vertiefen. Ich habe jeden Vormittag einen Intensivkurs besucht und nachmittags Museen besichtigt. Um die Sprache aktiv zu sprechen, habe ich mich mit Einheimischen im Kaffeehaus unterhalten. Nach diesem Monat fühle ich mich beim Sprechen viel sicherer!',
        translationUz: 'Bu yozda men nemis tili bilimlarimni chuqurlashtirish uchun to‘rt hafta Venada bo‘ldim. Har kuni tushgacha intensiv kursda o‘qidim va tushdan keyin muzeylarni tomosha qildim. Tilda faol gaplashish uchun qahvaxonada mahalliy aholi bilan suhbatlashdim. Bu oydan so‘ng so‘zlashuvda o‘zimni ancha ishonchli sezyapman!',
        dialogue: [
          { speaker: 'Reisender', textDe: 'Ich war in Wien, um meine Deutschkenntnisse zu vertiefen.', textUz: 'Nemis tili bilimlarimni chuqurlashtirish uchun Venada edim.' }
        ],
        questions: [
          {
            id: 'q-lis-m16-2',
            questionUz: 'Muallif nima maqsadda Venaga borgan edi?',
            options: ['Nemis tili bilimlarini chuqurlashtirish uchun (um Deutschkenntnisse zu vertiefen)', 'Faqat dam olish uchun', 'Ish qidirish uchun'],
            correctIndex: 0,
            explanationUz: 'Muallif "um meine Deutschkenntnisse zu vertiefen" deb aytdi.'
          }
        ]
      }
    ],
    reading: [
      {
        id: 'read-m16-2',
        lessonId: 'les-47',
        levelCode: 'a2-2',
        titleDe: 'Tipps zum schnellen Sprachenlernen',
        titleUz: 'Tilni tez o‘rganish sirlari',
        textDe: 'Wie lernt man eine Fremdsprache am besten? Hier sind drei bewährte Methoden:\n1. Regelmäßigkeit: Lernen Sie lieber jeden Tag 20 Minuten intensiv, als einmal pro Woche drei Stunden.\n2. Medien nutzen: Schauen Sie deutsche Filme mit deutschen Untertiteln, um Ihr Hörverstehen zu schulen.\n3. Keine Angst vor Fehlern: Sprechen Sie bei jeder Gelegenheit, um Sprachhemmungen abzubauen. Fehler gehören zum Lernen dazu!',
        textUz: 'Chet tilini eng yaxshi qanday o‘rganish mumkin? Mana uchta sinalgan usul:\n1. Muntazamlik: Haftada bir marta uch soat o‘rniga har kuni 20 daqiqadan intensiv o‘rgangan ma‘qul.\n2. Medialardan foydalanish: Tinglab tushunishingizni rivojlantirish uchun nemischa filmlarni nemischa subtitr bilan tomosha qiling.\n3. Xatolardan qo‘rqmaslik: Gapirishdagi qo‘rquvni yengish uchun har qanday imkoniyatda gapiring. Xatolar o‘rganishning ajralmas qismidir!',
        questions: [
          {
            id: 'q-read-m16-2',
            questionUz: 'Kuniga qancha vaqt o‘rganish tavsiya qilinadi?',
            options: ['Har kuni 20 daqiqa (jeden Tag 20 Minuten)', 'Faqat dam olish kuni 5 soat', 'Har soatda'],
            correctIndex: 0,
            explanationUz: 'Matnda "jeden Tag 20 Minuten intensiv" tavsiya qilingan.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-m16-2',
      lessonId: 'les-47',
      levelCode: 'a2-2',
      taskDe: 'Schreiben Sie zwei Sätze mit "um ... zu" und "damit".',
      taskUz: '"um ... zu" va "damit" konstruksiyalaridan foydalanib ikkita maqsad gapi yozing.',
      instructionUz: 'Nima maqsadda nemis tilini o‘rganayotganingizni tushuntiring.',
      hints: ['Ich lerne Deutsch, um... zu...', 'Ich lerne fleißig, damit meine Eltern...'],
      sampleSolutionDe: 'Ich lerne jeden Tag Deutsch, um fließend mit Muttersprachlern sprechen zu können. Ich gebe mir viel Mühe, damit ich bald ein Stipendium bekomme.',
      scaffold: {
        openingDe: 'Meine Motivation:',
        closingDe: 'Deshalb gebe ich nicht auf!',
        usefulPhrasesDe: ['Ich lerne Deutsch, um ... zu ...', 'Ich mache das, damit ...']
      }
    },
    shadowing: [
      {
        id: 'sha-m16-2',
        lessonId: 'les-47',
        levelCode: 'a2-2',
        sentenceDe: 'Ich lerne fleißig Deutsch, um an einer deutschen Universität erfolgreich zu studieren.',
        translationUz: 'Men Germaniya universitetida muvaffaqiyatli ta‘lim olish uchun nemis tilini qunt bilan o‘rganmoqdaman.',
        phoneticHint: '[Ih ler-ne flay-sih Doytsh, um an ay-ner doyt-shen U-ni-ver-zi-têt er-folg-rayh tsu shtu-di-ren]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-m16-2-q1',
        type: 'word-order',
        questionUz: '"um ... zu" gapini to‘g‘ri tuzing (zu + fe‘l oxirida!):',
        scrambledWords: ['lerne,', 'Deutsch', 'Ich', 'zu', 'studieren.', 'um'],
        correctAnswer: 'Ich lerne Deutsch, um zu studieren.',
        explanationUz: 'Ich lerne Deutsch, (bosh gap) + um + zu studieren (oxirida).',
        mistakeTipUz: '❌ "um ... zu studieren" shaklida keladi.'
      },
      {
        id: 'prac-m16-2-q2',
        type: 'fill-blank',
        questionUz: 'Subyektlar har xil bo‘lsa qaysi bog‘lovchi tanlanadi? "Ich spreche langsam, _____ du mich verstehst."',
        blankSentence: 'Ich spreche langsam, [blank] du mich verstehst.',
        options: ['damit', 'um', 'weil', 'dass'],
        correctAnswer: 'damit',
        explanationUz: 'Subyektlar har xil (Ich / du) bo‘lgani uchun "damit" ishlatiladi.',
        mistakeTipUz: '❌ Har xil shaxs bo‘lganda: damit.'
      },
      {
        id: 'prac-m16-2-q3',
        type: 'multiple-choice',
        questionUz: 'Qaysi gap grammatik jihatdan to‘g‘ri?',
        options: [
          'Er spart Geld, um ein Auto zu kaufen.',
          'Er spart Geld, um ein Auto kaufen.',
          'Er spart Geld, damit ein Auto zu kaufen.',
          'Er spart Geld, um zu ein Auto kaufen.'
        ],
        correctAnswer: 'Er spart Geld, um ein Auto zu kaufen.',
        explanationUz: '"um ... zu kaufen" — to‘g‘ri maqsad konstruksiyasi.',
        mistakeTipUz: '❌ "um ein Auto zu kaufen".'
      }
    ]
  },

  // ==========================================
  // LEKTION 48: Fit für das Goethe-Zertifikat A2
  // ==========================================
  {
    id: 'les-48',
    moduleId: 'mod-a2-2-4',
    levelCode: 'a2-2',
    titleDe: 'Lektion 48: Fit für das Goethe-Zertifikat A2',
    titleUz: '48-Dars: Goethe-Zertifikat A2 imtihoniga tayyorgarlik va yakuniy xulosa',
    descriptionUz: 'A2 xalqaro imtihonining 4 ta bo‘limi (Lesen, Hören, Schreiben, Sprechen), imtihon strategiyalari va butun A2 darajasining yakuniy sarhisobi.',
    orderIndex: 48,
    estimatedMinutes: 30,
    isPublished: true,
    objectivesUz: [
      'Goethe / telc A2 imtihoni strukturasini to‘liq bilish',
      '4 ta ko‘nikma bo‘yicha vaqtni to‘g‘ri taqsimlash strategiyalarini egallash',
      'A2 darajasidagi barcha asosiy grammatik qoidalarni mustahkamlash'
    ],
    warmUp: {
      situationUz: 'Tabriklaymiz! Siz A1 va A2 darajalarining barcha 48 ta darsini to‘liq o‘rganib chiqdingiz. Bugun A2 yakuniy imtihoniga tayyorgarlik ko‘ramiz!',
      curiosityQuestionUz: '"Men Goethe A2 imtihoniga to‘liq tayyorman va yuqori ball olaman" nemischa qanday aytiladi?',
      miniDialogue: [
        { speaker: 'Prüfer', textDe: 'Sind Sie bereit für die A2-Prüfung?', textUz: 'A2 imtihoniga tayyormisiz?' },
        { speaker: 'Kandidat', textDe: 'Ja, ich habe fleißig geübt und fühle mich sehr gut vorbereitet!', textUz: 'Ha, men qunt bilan shug‘ullandim va o‘zimni juda yaxshi tayyor his qilyapman!' }
      ],
      hintUz: 'A2 imtihonida eng muhimi — xotirjamlik, berilgan matn va audiodagi kalit so‘zlarga (Schlüsselwörter) e‘tibor qaratish!'
    },
    contextDialogue: {
      titleDe: 'Die mündliche A2-Prüfung',
      titleUz: 'Og‘zaki A2 imtihoni',
      situationUz: 'Kandidatlar imtihon oluvchi o‘qituvchi bilan so‘zlashuv bo‘limida (Sprechen).',
      lines: [
        { speaker: 'Prüferin', textDe: 'Guten Tag! Herzlich willkommen zur mündlichen Prüfung des Goethe-Zertifikats A2. Stellen Sie sich bitte kurz vor.', textUz: 'Xayrli kun! Goethe A2 og‘zaki imtihoniga xush kelibsiz. Iltimos, o‘zingizni qisqacha tanishtiring.' },
        { speaker: 'Kandidat Aziz', textDe: 'Sehr gerne. Mein Name ist Aziz Rahimov, ich bin 24 Jahre alt und komme aus Usbekistan. Ich lebe jetzt seit sechs Monaten in Berlin und lerne Deutsch.', textUz: 'Jon deb. Mening ismim Aziz Rahimov, 24 yoshdaman va O‘zbekistondanman. Hozir olti oydan beri Berlinda yashab, nemis tili o‘rganyapman.' },
        { speaker: 'Prüferin', textDe: 'Vielen Dank. Im zweiten Teil erzählen Sie bitte etwas aus Ihrem Alltag. Was machen Sie an einem typischen Wochenende?', textUz: 'Katta rahmat. Ikkinchi qismda kundalik hayotingizdan biror narsa so‘zlab bering. Odatdagi dam olish kunida nimalar qilasiz?' },
        { speaker: 'Kandidat Aziz', textDe: 'Wenn das Wetter schön ist, fahre ich mit dem Fahrrad an den See. Manchmal treffe ich mich mit Freunden, um gemeinsam zu kochen oder ins Kino zu gehen.', textUz: 'Agar havo yaxshi bo‘lsa, velosipedda ko‘lga boraman. Ba‘zan birgalikda ovqat pishirish yoki kinoga borish uchun do‘stlarim bilan uchrashaman.' },
        { speaker: 'Prüferin', textDe: 'Ausgezeichnet! Sie haben flüssig gesprochen und schöne Satzstrukturen verwendet. Herzlichen Glückwunsch!', textUz: 'A‘lo darajada! Siz ravon gapirdingiz va chiroyli gap tuzilmalaridan foydalandingiz. Qutlayman!' }
      ],
      usefulPhrases: [
        { german: 'sich auf die Prüfung vorbereiten', uzbek: 'imtihonga tayyorgarlik ko‘rmoq' },
        { german: 'die Prüfung bestehen', uzbek: 'imtihondan muvaffaqiyatli o‘tmoq' },
        { german: 'flüssig und verständlich sprechen', uzbek: 'ravon va tushunarli gapirmoq' },
        { german: 'das Goethe-Zertifikat A2', uzbek: 'Goethe A2 xalqaro sertifikati' }
      ],
      culturalNoteUz: 'Goethe-Zertifikat A2 xalqaro miqyosda tan olinadi va Germaniyada viza olish, oila bilan birlashish hamda ko‘plab ish o‘rinlariga kirishda rasmiy hujjat sifatida qabul qilinadi.'
    },
    vocabulary: [
      {
        id: 'voc-m16-13',
        lessonId: 'les-48',
        levelCode: 'a2-2',
        german: 'die Prüfung',
        article: 'die',
        plural: 'die Prüfungen',
        uzbek: 'imtihon, sinov',
        exampleDe: 'Morgen habe ich meine Deutschprüfung.',
        exampleUz: 'Ertaga mening nemis tili imtihonim bor.',
        wordType: 'noun'
      },
      {
        id: 'voc-m16-14',
        lessonId: 'les-48',
        levelCode: 'a2-2',
        german: 'das Zertifikat',
        article: 'das',
        plural: 'die Zertifikate',
        uzbek: 'sertifikat, guvohnoma',
        exampleDe: 'Ich habe das A2-Zertifikat erhalten.',
        exampleUz: 'Men A2 sertifikatini oldim.',
        wordType: 'noun'
      },
      {
        id: 'voc-m16-15',
        lessonId: 'les-48',
        levelCode: 'a2-2',
        german: 'bestehen',
        article: null,
        plural: null,
        uzbek: 'muvaffaqiyatli topshirmoq (imtihondan o‘tmoq)',
        exampleDe: 'Er hat die Prüfung mit sehr gut bestanden.',
        exampleUz: 'U imtihonni a‘lo bahoga topshirdi.',
        wordType: 'verb'
      },
      {
        id: 'voc-m16-16',
        lessonId: 'les-48',
        levelCode: 'a2-2',
        german: 'das Ergebnis',
        article: 'das',
        plural: 'die Ergebnisse',
        uzbek: 'natija',
        exampleDe: 'Das Ergebnis war fantastisch!',
        exampleUz: 'Natija ajoyib bo‘ldi!',
        wordType: 'noun'
      },
      {
        id: 'voc-m16-17',
        lessonId: 'les-48',
        levelCode: 'a2-2',
        german: 'konzentriert',
        article: null,
        plural: null,
        uzbek: 'diqqatni jamlagan',
        exampleDe: 'Bleiben Sie während der Prüfung konzentriert.',
        exampleUz: 'Imtihon paytida diqqatingizni jamlang.',
        wordType: 'adjective'
      },
      {
        id: 'voc-m16-18',
        lessonId: 'les-48',
        levelCode: 'a2-2',
        german: 'bereit',
        article: null,
        plural: null,
        uzbek: 'tayyor',
        exampleDe: 'Wir sind bereit für die nächste Stufe.',
        exampleUz: 'Biz keyingi bosqichga tayyormiz.',
        wordType: 'adjective'
      }
    ],
    grammar: [
      {
        id: 'gra-m16-3',
        lessonId: 'les-48',
        levelCode: 'a2-2',
        titleDe: 'Gesamtwiederholung A2 Grammatik (A2 Grammatik yakuniy xulosasi)',
        titleUz: 'A2 darajasidagi barcha asosiy grammatik strukturalar',
        summaryUz: 'A2 darajasi: Perfekt, Präteritum (Modalverben), Wechselpräpositionen, Nebensätze (weil, dass, wenn, obwohl, indirekte Fragen, Relativsätze), Adjektivdeklination va Infinitiv mit zu.',
        explanationUz: `Siz A2 bosqichida quyidagi buyuk grammatik cho‘qqilarni zabt etdingiz:

1. **Zamonlar (Tempora):**
- Perfekt: *Ich habe gelernt / Ich bin gefahren.*
- Präteritum der Modalverben: *musste, konnte, wollte, durfte.*
- Futur I: *Ich werde Deutsch lernen.*

2. **Ergash gaplar (Nebensätze mit Verb am Ende):**
- weil (sabab): *..., weil ich Zeit habe.*
- dass (to‘ldiruvchi): *..., dass er kommt.*
- wenn (shart/vaqt): *Wenn es regnet, ...*
- obwohl (to‘siqsiz): *Obwohl es kalt ist, ...*
- ob va W-savollar: *Wissen Sie, ob/wann der Zug kommt?*
- Relativsatz: *der Mann, der Deutsch spricht.*

3. **Sifatlarning turlanishi (Adjektivdeklination):**
- Aniq artikl bilan: *der neue Film, den neuen Film*
- Noaniq artikl bilan: *ein schönes Zimmer, einen großen Balkon*
- Artiklsiz: *frisches Obst, heißen Tee*

4. **Konstruksiyalar:**
- Infinitiv mit "zu": *Es ist gesund, Sport zu treiben.*
- um ... zu vs. damit: *Ich lerne, um zu bestehen.*
- nicht brauchen ... zu: *Du brauchst nicht zu warten.*
- Konjunktiv II: *Könnten Sie bitte...? / Würden Sie bitte...?*`,
        tables: [
          {
            title: 'A2 Ergash gaplar qisqa ma‘lumotnomasi',
            headers: ['Bog‘lovchi', 'Ma‘nosi', 'Fe‘l o‘rni'],
            rows: [
              ['weil', 'chunki, sababli', 'Gapning eng oxirida'],
              ['dass', 'ki, ekanligini', 'Gapning eng oxirida'],
              ['wenn', 'agar, qachonki', 'Gapning eng oxirida'],
              ['obwohl', 'qaramasdan', 'Gapning eng oxirida'],
              ['ob', '-mi yoki yo‘qmi', 'Gapning eng oxirida'],
              ['um ... zu', 'qilish uchun', 'zu + Infinitiv gap oxirida']
            ]
          }
        ],
        examples: [
          {
            german: 'Herzlichen Glückwunsch! Sie beherrschen die A2-Grammatik.',
            uzbek: 'Tabriklaymiz! Siz A2 grammatikasini to‘liq o‘zlashtirdingiz.',
            highlight: 'beherrschen die A2-Grammatik'
          }
        ]
      }
    ],
    listening: [
      {
        id: 'lis-m16-3',
        lessonId: 'les-48',
        levelCode: 'a2-2',
        titleDe: 'Strategien für das Goethe-Zertifikat A2',
        titleUz: 'Goethe A2 imtihoni strategiyalari',
        transcriptDe: 'Liebe Prüfungskandidaten! Herzlich willkommen zur Vorbereitung auf das Goethe-Zertifikat A2. Für den Teil "Hören" gilt: Lesen Sie zuerst aufmerksam die Aufgaben, bevor das Audio startet. Markieren Sie die Schlüsselwörter. Beim ersten Hören verstehen Sie den Gesamtzusammenhang, beim zweiten Hören überprüfen Sie Ihre Antwort. Bleiben Sie ruhig — Sie schaffen das!',
        translationUz: 'Hurmatli imtihon qatnashchilari! Goethe A2 imtihoniga tayyorgarlikka xush kelibsiz. "Hören" (eshitish) bo‘limi uchun qoida: Audio boshlanishidan oldin topshiriqlarni diqqat bilan o‘qib chiqing. Kalit so‘zlarni belgilang. Birinchi eshitishda umumiy mazmunni tushuning, ikkinchi eshitishda esa javobingizni tekshiring. Xotirjam bo‘ling — siz buni albatta uddalaysiz!',
        dialogue: [
          { speaker: 'Prüfer', textDe: 'Lesen Sie aufmerksam die Aufgaben und markieren Sie die Schlüsselwörter.', textUz: 'Topshiriqlarni diqqat bilan o‘qing va kalit so‘zlarni belgilang.' }
        ],
        questions: [
          {
            id: 'q-lis-m16-3',
            questionUz: 'Audio boshlanishidan oldin nima qilish tavsiya etildi?',
            options: ['Topshiriqlarni o‘qish va kalit so‘zlarni belgilash', 'Darhol javobni belgilash', 'Ko‘zni yumib o‘tirish'],
            correctIndex: 0,
            explanationUz: 'Tavsiyada "Lesen Sie zuerst aufmerksam die Aufgaben... Markieren Sie die Schlüsselwörter" deb aytilgan.'
          }
        ]
      }
    ],
    reading: [
      {
        id: 'read-m16-3',
        lessonId: 'les-48',
        levelCode: 'a2-2',
        titleDe: 'Übersicht über die Prüfungsteile des A2-Zertifikats',
        titleUz: 'A2 sertifikati imtihon bo‘limlari sharhi',
        textDe: 'Das Goethe-Zertifikat A2 besteht aus vier Modulen:\n1. Lesen (30 Minuten): Zeitungsberichte, E-Mails, Kleinanzeigen und Hinweisschilder verstehen.\n2. Hören (circa 30 Minuten): Alltägliche Gespräche, Durchsagen und Telefonnachrichten verstehen.\n3. Schreiben (30 Minuten): Eine persönliche E-Mail oder Mitteilung verfassen (circa 30-40 Wörter).\n4. Sprechen (circa 15 Minuten): Sich vorstellen, Fragen stellen und beantworten, sowie gemeinsam etwas aushandeln.\nGesamtergebnis: Mindestens 60 von 100 Punkten zum Bestehen!',
        textUz: 'Goethe-Zertifikat A2 to‘rtta moduldan iborat:\n1. Lesen (30 daqiqa): Gazeta xabarlari, elektron xatlar, e‘lonlar va ko‘cha belgilarini tushunish.\n2. Hören (taxminan 30 daqiqa): Kundalik suhbatlar, diktor e‘lonlari va telefon xabarlarini tushunish.\n3. Schreiben (30 daqiqa): Shaxsiy elektron xat yoki xabarnoma yozish (taxminan 30-40 so‘z).\n4. Sprechen (taxminan 15 daqiqa): O‘zini tanishtirish, savol berish va javob berish, birgalikda biror narsani kelishish.\nUmumiy natija: O‘tish uchun 100 balldan kamida 60 ball!',
        questions: [
          {
            id: 'q-read-m16-3',
            questionUz: 'Imtihondan o‘tish uchun kamida necha ball to‘plash kerak?',
            options: ['Kamida 60 ball (Mindestens 60 Punkte)', 'Kamida 90 ball', 'Barcha 100 ball'],
            correctIndex: 0,
            explanationUz: 'Sharhda "Mindestens 60 von 100 Punkten zum Bestehen" deb aniq ko‘rsatilgan.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-m16-3',
      lessonId: 'les-48',
      levelCode: 'a2-2',
      taskDe: 'Schreiben Sie eine E-Mail an Ihren Sprachlehrer zum erfolgreichen A2-Abschluss.',
      taskUz: 'Nemis tili o‘qituvchingizga A2 bosqichini muvaffaqiyatli yakunlaganingiz haqida minnatdorchilik xati yozing.',
      instructionUz: 'O‘rgangan bilimlaringiz va kelgusi rejalaringizni bayon qiling.',
      hints: ['Liebe/r Frau/Herr..., ich habe die A2-Stufe abgeschlossen.', 'Vielen Dank für Ihre Unterstützung!'],
      sampleSolutionDe: 'Liebe Frau Sommer, ich habe heute die letzte Lektion des A2-Niveaus abgeschlossen! Ich möchte mich ganz herzlich bei Ihnen für die tolle Unterstützung bedanken. Nächstes Jahr werde ich mich auf die B1-Prüfung vorbereiten. Mit besten Grüßen, Aziz Rahimov',
      scaffold: {
        openingDe: 'Sehr geehrte/r Frau/Herr ...,',
        closingDe: 'Mit freundlichen Grüßen, Aziz',
        usefulPhrasesDe: ['Ich habe das A2-Niveau geschafft!', 'Vielen Dank für alles...']
      }
    },
    shadowing: [
      {
        id: 'sha-m16-3',
        lessonId: 'les-48',
        levelCode: 'a2-2',
        sentenceDe: 'Ich habe das A2-Niveau erfolgreich gemeistert und fühle mich bestens vorbereitet für die nächste Stufe.',
        translationUz: 'Men A2 darajasini muvaffaqiyatli egalladim va keyingi bosqichga o‘zimni to‘liq tayyor his qilyapman.',
        phoneticHint: '[Ih ha-be das A-tsvay Ni-vo er-folg-rayh ge-mays-tert unt fyuh-le mih bes-tens for-be-ray-tet fyur di nêh-ste Shtu-fe]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-m16-3-q1',
        type: 'multiple-choice',
        questionUz: 'Goethe-Zertifikat A2 imtihonida o‘tish balli qancha?',
        options: [
          'Kamida 60 ball (60%)',
          'Kamida 50 ball',
          'Kamida 80 ball',
          'Kamida 100 ball'
        ],
        correctAnswer: 'Kamida 60 ball (60%)',
        explanationUz: 'A2 xalqaro imtihonidan o‘tish uchun kamida 60 ball (60%) to‘plash talab qilinadi.',
        mistakeTipUz: '❌ O‘tish bali: 60% (60 ball).'
      },
      {
        id: 'prac-m16-3-q2',
        type: 'word-order',
        questionUz: 'Xulosa gapini to‘g‘ri tuzing:',
        scrambledWords: ['A2-Niveau', 'haben', 'Wir', 'erfolgreich', 'das', 'abgeschlossen.'],
        correctAnswer: 'Wir haben das A2-Niveau erfolgreich abgeschlossen.',
        explanationUz: 'Wir haben (1) + das A2-Niveau (2) + erfolgreich abgeschlossen (3).',
        mistakeTipUz: '❌ Perfekt shakli: haben ... abgeschlossen.'
      },
      {
        id: 'prac-m16-3-q3',
        type: 'fill-blank',
        questionUz: 'To‘g‘ri fe‘lni qo‘ying: "Wir werden die Prüfung sicher _____."',
        blankSentence: 'Wir werden die Prüfung sicher [blank].',
        options: ['bestehen', 'bestanden', 'besteht', 'bestand'],
        correctAnswer: 'bestehen',
        explanationUz: 'Futur I da "werden" dan keyin infinitiv (bestehen) keladi.',
        mistakeTipUz: '❌ Infinitiv shaklda: bestehen.'
      }
    ]
  }
];
