import { Lesson } from '../../types/database';

export const MODULE_11_A21_LESSONS: Lesson[] = [
  // ==========================================
  // LEKTION 31: Medienkonsum und digitale Welt
  // ==========================================
  {
    id: 'les-31',
    moduleId: 'mod-a2-1-3',
    levelCode: 'a2-1',
    titleDe: 'Lektion 31: Medienkonsum und digitale Welt',
    titleUz: '31-Dars: Raqamli dunyo va axborot vositalari (Sifat darajalari - Komparativ va Superlativ)',
    descriptionUz: 'Smartfon, internet, ijtimoiy tarmoqlar va ilovalar hamda sifatlarning qiyosiy (Komparativ) va orttirma (Superlativ) darajalari.',
    orderIndex: 31,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Zamonaviy gadjetlar va media vositalaridan foydalanishni tasvirlash',
      'Sifat darajalarini (schneller als, am besten, so... wie) to‘g‘ri qo‘llash',
      'Ikkita narsani o‘zaro taqqoslash va afzalliklarini aytish'
    ],
    warmUp: {
      situationUz: 'Yangi noutbuk yoki smartfon sotib olmoqchisiz va ikki modelni do‘konda taqqoslayapsiz.',
      curiosityQuestionUz: '"Bu telefon boshqasidan ko‘ra tezroq va qulayroq" nemis tilida qanday aytiladi?',
      miniDialogue: [
        { speaker: 'Kunde', textDe: 'Welches Smartphone ist besser?', textUz: 'Qaysi smartfon yaxshiroq?' },
        { speaker: 'Verkäufer', textDe: 'Dieses Modell ist schneller als das alte, aber es ist auch teurer.', textUz: 'Bu model eskisiga qaraganda tezroq, lekin ancha qimmatroq ham.' }
      ],
      hintUz: 'Taqqoslashda "als" (ko‘ra), tenglikda esa "so ... wie" (kabi / singari) ishlatiladi!'
    },
    contextDialogue: {
      titleDe: 'Wie nutzt du dein Smartphone?',
      titleUz: 'Smartfoningdan qanday foydalanasan?',
      situationUz: 'Sardor va uning kursdoshi Hanna raqamli vositalar haqida suhbatlashmoqda.',
      lines: [
        { speaker: 'Hanna', textDe: 'Sardor, wie viele Stunden am Tag bist du online?', textUz: 'Sardor, bir kunda necha soat onlaynsiz?' },
        { speaker: 'Sardor', textDe: 'Wahrscheinlich mehr als drei Stunden. Ich nutze mein Smartphone für das Studium und soziale Netzwerke.', textUz: 'Ehtimol, uch soatdan ko‘p. Smartfonimdan o‘qish va ijtimoiy tarmoqlar uchun foydalanaman.' },
        { speaker: 'Hanna', textDe: 'Lernst du lieber mit Büchern oder mit Apps?', textUz: 'Kitoblar bilan o‘rganishni afzal ko‘rasanmi yoki ilovalar bilanmi?' },
        { speaker: 'Sardor', textDe: 'Mit Apps lerne ich viel schneller als mit traditionellen Büchern. Aber am liebsten kombiniere ich beides.', textUz: 'Ilovalar bilan an‘anaviy kitoblarga qaraganda ancha tez o‘rganaman. Lekin eng ma‘quli ikkalasini birlashtirish.' },
        { speaker: 'Hanna', textDe: 'Stimmt! Digitale Medien sind praktisch, aber Pausen sind genauso wichtig.', textUz: 'To‘g‘ri! Raqamli media qulay, ammo tanaffuslar ham xuddi shunday muhim.' }
      ],
      usefulPhrases: [
        { german: 'online sein / surfen', uzbek: 'onlayn bo‘lmoq / internetda kezmoq' },
        { german: 'eine App herunterladen', uzbek: 'ilovani yuklab olmoq' },
        { german: 'schneller als...', uzbek: '...ga qaraganda tezroq' },
        { german: 'am liebsten...', uzbek: 'eng ma‘qul ko‘rganim...' }
      ],
      culturalNoteUz: 'Germaniyada ma‘lumotlar xavfsizligi (Datenschutz) juda qat‘iy himoyalanadi. Odamlar onlayn xarid va ilovalarda shaxsiy maxfiylikka katta e‘tibor berishadi.'
    },
    vocabulary: [
      {
        id: 'voc-m11-1',
        lessonId: 'les-31',
        levelCode: 'a2-1',
        german: 'das Netzwerk',
        article: 'das',
        plural: 'die Netzwerke',
        uzbek: 'ijtimoiy tarmoq, tizim',
        exampleDe: 'Ich bin in sozialen Netzwerken aktiv.',
        exampleUz: 'Men ijtimoiy tarmoqlarda faolman.',
        wordType: 'noun'
      },
      {
        id: 'voc-m11-2',
        lessonId: 'les-31',
        levelCode: 'a2-1',
        german: 'die App',
        article: 'die',
        plural: 'die Apps',
        uzbek: 'mobil ilova',
        exampleDe: 'Diese Wörterbuch-App ist sehr nützlich.',
        exampleUz: 'Bu lug‘at ilovasi juda foydali.',
        wordType: 'noun'
      },
      {
        id: 'voc-m11-3',
        lessonId: 'les-31',
        levelCode: 'a2-1',
        german: 'herunterladen',
        article: null,
        plural: null,
        uzbek: 'yuklab olmoq (download)',
        exampleDe: 'Wo kann ich die Datei herunterladen?',
        exampleUz: 'Faylni qayerdan yuklab olsam bo‘ladi?',
        wordType: 'verb'
      },
      {
        id: 'voc-m11-4',
        lessonId: 'les-31',
        levelCode: 'a2-1',
        german: 'nützlich',
        article: null,
        plural: null,
        uzbek: 'foydali',
        exampleDe: 'Das ist ein sehr nützlicher Tipp.',
        exampleUz: 'Bu juda foydali maslahat.',
        wordType: 'adjective'
      },
      {
        id: 'voc-m11-5',
        lessonId: 'les-31',
        levelCode: 'a2-1',
        german: 'praktisch',
        article: null,
        plural: null,
        uzbek: 'qulay, amaliy',
        exampleDe: 'Laptops sind sehr praktisch für die Reise.',
        exampleUz: 'Noutbuklar safar uchun juda qulay.',
        wordType: 'adjective'
      },
      {
        id: 'voc-m11-6',
        lessonId: 'les-31',
        levelCode: 'a2-1',
        german: 'vergleichen',
        article: null,
        plural: null,
        uzbek: 'taqqoslamoq, qiyoslamoq',
        exampleDe: 'Wir sollten die Preise vergleichen.',
        exampleUz: 'Biz narxlarni taqqoslab ko‘rishimiz kerak.',
        wordType: 'verb'
      }
    ],
    grammar: [
      {
        id: 'gra-m11-1',
        lessonId: 'les-31',
        levelCode: 'a2-1',
        titleDe: 'Komparativ und Superlativ (Sifat darajalari)',
        titleUz: 'Qiyosiy (-er als) va orttirma (am ...-sten) daraja',
        summaryUz: 'Oddiy sifatga -er qo‘shilib qiyosiy daraja (schneller als), "am" va "-sten" bilan esa orttirma daraja (am schnellsten) yasaladi.',
        explanationUz: `Sifatlarning uchta darajasi:

1. **Positiv (Oddiy daraja):**
- Tenglik: **so + Sifat + wie** (kabi, teng)
- *Mein Handy ist **so schnell wie** deins.* (Mening telefonim senikidek tez.)

2. **Komparativ (Qiyosiy daraja):**
- Formula: **Sifat + -er + als**
- Bir bo‘g‘inli unlilar ko‘pincha umlaut oladi (a→ä, o→ö, u→ü):
  alt → **älter als**, groß → **größer als**, warm → **wärmer als**.
- *Der Zug ist **schneller als** der Bus.*

3. **Superlativ (Orttirma daraja):**
- Formula: **am + Sifat + -(e)sten**
- schnell → **am schnellsten**, billig → **am billigsten**, groß → **am größten**.

Nog‘to‘g‘ri (tartibsiz) sifatlar (yodlash shart!):
- gut → **besser** → **am besten** (yaxshi - yaxshiroq - eng yaxshi)
- viel → **mehr** → **am meisten** (ko‘p - ko‘proq - eng ko‘p)
- gern → **lieber** → **am liebsten** (jon deb - afzal - eng ma‘qul)`,
        tables: [
          {
            title: 'Sifat darajalari taqqoslash jadvali',
            headers: ['Positiv', 'Komparativ (+ als)', 'Superlativ (am ...sten)'],
            rows: [
              ['schnell (tez)', 'schneller als', 'am schnellsten'],
              ['alt (eski/qari)', 'älter als', 'am ältesten'],
              ['teuer (qimmat)', 'teurer als', 'am teuersten'],
              ['gut (yaxshi)', 'besser als', 'am besten'],
              ['viel (ko‘p)', 'mehr als', 'am meisten'],
              ['gern (jon deb)', 'lieber als', 'am liebsten']
            ]
          }
        ],
        examples: [
          {
            german: 'Mein neuer Laptop ist viel schneller als der alte.',
            uzbek: 'Mening yangi noutbukim eskisidan ancha tezroq.',
            highlight: 'schneller als'
          },
          {
            german: 'Am liebsten trinke ich morgens frischen Kaffee.',
            uzbek: 'Ertalab eng yoqtirib ichadiganim yangi qahvadir.',
            highlight: 'Am liebsten'
          }
        ]
      }
    ],
    listening: [
      {
        id: 'lis-m11-1',
        lessonId: 'les-31',
        levelCode: 'a2-1',
        titleDe: 'Umfrage: Wie informieren Sie sich?',
        titleUz: 'So‘rovnoma: Yangiliklarni qayerdan olasiz?',
        transcriptDe: 'Guten Tag! Wir machen eine Umfrage zum Thema Mediennutzung. Wie informieren Sie sich über aktuelle Nachrichten?\nFrüher habe ich jeden Tag Zeitung gelesen. Aber heute nutze ich fast nur noch Online-Nachrichten auf dem Smartphone. Das geht viel schneller und ist bequemer als die gedruckte Zeitung.',
        translationUz: 'Xayrli kun! Media iste‘moli mavzusida so‘rov o‘tkazyapmiz. Yangiliklardan qanday xabardor bo‘lasiz?\nIlgari har kuni gazeta o‘qirdim. Ammo bugun deyarli faqat smartfondagi onlayn yangiliklardan foydalanaman. Bu bosma gazetadan ko‘ra ancha tezroq va qulayroq.',
        dialogue: [
          { speaker: 'Passant', textDe: 'Online-Nachrichten sind viel schneller und bequemer als die Zeitung.', textUz: 'Onlayn yangiliklar gazetaga qaraganda ancha tez va qulay.' }
        ],
        questions: [
          {
            id: 'q-lis-m11-1',
            questionUz: 'Ishtirokchi nima uchun onlayn yangiliklarni afzal ko‘radi?',
            options: ['Tezroq va qulayroq bo‘lgani uchun (schneller und bequemer)', 'Gazeta yo‘qligi sababli', 'Televizor buzilgani uchun'],
            correctIndex: 0,
            explanationUz: 'Ishtirokchi "Das geht viel schneller und ist bequemer als die Zeitung" deb javob berdi.'
          }
        ]
      }
    ],
    reading: [
      {
        id: 'read-m11-1',
        lessonId: 'les-31',
        levelCode: 'a2-1',
        titleDe: 'Digitale Medien im Alltag',
        titleUz: 'Kundalik hayotda raqamli axborot vositalari',
        textDe: 'Eine aktuelle Studie in Deutschland zeigt: Junge Erwachsene zwischen 18 und 29 Jahren verbringen täglich durchschnittlich fast vier Stunden am Smartphone. Sie hören Musik über Streaming-Dienste, schauen Videos und chatten mit Freunden. Fast 70 Prozent sagen, dass das Smartphone für sie das wichtigste Gerät im Alltag ist — wichtiger als der Fernseher oder das Radio.',
        textUz: 'Germaniyada o‘tkazilgan so‘nggi tadqiqot shuni ko‘rsatadiki: 18 yoshdan 29 yoshgacha bo‘lgan yoshlar kuniga o‘rtacha deyarli to‘rt soatni smartfonda o‘tkazadilar. Ular striming xizmatlari orqali musiqa tinglaydilar, video ko‘radilar va do‘stlari bilan yozishadilar. Qariyb 70 foizi smartfon ular uchun kundalik hayotdagi eng muhim qurilma — televizor yoki radiodan ko‘ra muhimroq ekanini aytadi.',
        questions: [
          {
            id: 'q-read-m11-1',
            questionUz: 'Yoshlarning 70 foizi uchun eng muhim qurilma nima?',
            options: ['Smartfon (das Smartphone)', 'Radio', 'Bosma kitob'],
            correctIndex: 0,
            explanationUz: 'Matnda "das Smartphone für sie das wichtigste Gerät im Alltag ist" deb ta‘kidlangan.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-m11-1',
      lessonId: 'les-31',
      levelCode: 'a2-1',
      taskDe: 'Vergleichen Sie zwei Medien oder Aktivitäten (z.B. Buch vs. E-Book).',
      taskUz: 'Ikkita media vositasini yoki mashg‘ulotni qiyoslang (masalan, kitob va elektron kitob).',
      instructionUz: 'Komparativ va Superlativ shakllarini ishlating (...ist schneller/besser als...; am liebsten...).',
      hints: ['E-Books sind leichter als...', 'Ich lese lieber...'],
      sampleSolutionDe: 'E-Books sind praktischer als normale Bücher, weil man viele Bücher auf einem Gerät speichern kann. Aber gedruckte Bücher riechen besser. Am liebsten lese ich abends im Bett ein echtes Buch.',
      scaffold: {
        openingDe: 'Mein Vergleich:',
        closingDe: 'Das ist meine Meinung.',
        usefulPhrasesDe: ['...ist praktischer als...', 'Am besten gefällt mir...']
      }
    },
    shadowing: [
      {
        id: 'sha-m11-1',
        lessonId: 'les-31',
        levelCode: 'a2-1',
        sentenceDe: 'Mit dieser neuen App lerne ich Deutsch viel schneller und erfolgreicher als früher.',
        translationUz: 'Ushbu yangi ilova bilan men nemis tilini ilgarigidan ancha tezroq va muvaffaqiyatliroq o‘rganmoqdaman.',
        phoneticHint: '[Mit di-zer noy-en Ep ler-ne ih Doytsh fil shnel-ler unt er-folg-ray-her als fryu-er]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-m11-1-q1',
        type: 'fill-blank',
        questionUz: '"gut" sifatining qiyosiy darajasini qo‘ying: "Dieses Handy ist _____ als mein altes."',
        blankSentence: 'Dieses Handy ist [blank] als mein altes.',
        options: ['besser', 'guter', 'am besten', 'mehr'],
        correctAnswer: 'besser',
        explanationUz: '"gut" sifatining Komparativ shakli noto‘g‘ri o‘zgaradi: gut → besser.',
        mistakeTipUz: '❌ "guter" deb bo‘lmaydi! To‘g‘risi: besser.'
      },
      {
        id: 'prac-m11-1-q2',
        type: 'multiple-choice',
        questionUz: '"Poyezd samolyotga qaraganda sekinroq" gapi qaysi?',
        options: [
          'Der Zug ist langsamer als das Flugzeug.',
          'Der Zug ist so langsam wie das Flugzeug.',
          'Der Zug ist am langsamsten als das Flugzeug.',
          'Der Zug ist mehr langsam als das Flugzeug.'
        ],
        correctAnswer: 'Der Zug ist langsamer als das Flugzeug.',
        explanationUz: 'langsam → langsamer als das Flugzeug.',
        mistakeTipUz: '❌ Taqqoslashda "langsamer als" qo‘llanadi.'
      },
      {
        id: 'prac-m11-1-q3',
        type: 'word-order',
        questionUz: 'Gapni to‘g‘ri tartibda tuzing:',
        scrambledWords: ['Am', 'Kaffee', 'ich', 'trinke', 'liebsten'],
        correctAnswer: 'Am liebsten trinke ich Kaffee',
        explanationUz: 'Am liebsten (1) + trinke (2) + ich (3) + Kaffee.',
        mistakeTipUz: '❌ Fe‘l (trinke) 2-o‘rinda kelishi shart!'
      }
    ]
  },

  // ==========================================
  // LEKTION 32: Kultur, Film und Theater
  // ==========================================
  {
    id: 'les-32',
    moduleId: 'mod-a2-1-3',
    levelCode: 'a2-1',
    titleDe: 'Lektion 32: Kultur, Film und Theater',
    titleUz: '32-Dars: Madaniyat, kino va teatr (Sifatlarning aniq artikl bilan turlanishi)',
    descriptionUz: 'Kino, spektakl, konsertga tashrif buyurish, taassurotlar va aniq artikldan (der/die/das) keyin sifat turlanishi.',
    orderIndex: 32,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Madaniy tadbirlar haqida suhbatlashish va taassurotlar almashish',
      'Aniq artikldan keyin sifat qo‘shimchalarini (-e yoki -en) to‘g‘ri qo‘llash',
      'Kino yoki teatr spektakliga baho bera olish'
    ],
    warmUp: {
      situationUz: 'Do‘stingiz bilan kecha kinoteatrga bordingiz va yangi premyera filmini muhokama qilyapsiz.',
      curiosityQuestionUz: '"Senga yangi nemischa film yoqdimi?" qanday aytiladi?',
      miniDialogue: [
        { speaker: 'Freund', textDe: 'Wie fandest du den neuen Film?', textUz: 'Yangi film senga qanday tuyuldi?' },
        { speaker: 'Jasur', textDe: 'Die spannende Geschichte hat mir sehr gut gefallen!', textUz: 'Hayajonli syujet menga juda yoqdi!' }
      ],
      hintUz: 'Aniq artikldan keyin sifatlar faqat ikkita qo‘shimcha oladi: -e yoki -en!'
    },
    contextDialogue: {
      titleDe: 'Ein Abend im Theater',
      titleUz: 'Teatrdagi oqshom',
      situationUz: 'Jasur va Emma Berlindagi mashhur teatrda spektakl tomosha qilishmoqda.',
      lines: [
        { speaker: 'Emma', textDe: 'Jasur, schau mal, das alte Theatergebäude ist wirklich beeindruckend.', textUz: 'Jasur, qara, eski teatr binosi haqiqatdan ham hayratlanarli.' },
        { speaker: 'Jasur', textDe: 'Ja, wunderschön! Haben wir gute Plätze?', textUz: 'Ha, nihoyatda go‘zal! Bizda yaxshi o‘rinlar bormi?' },
        { speaker: 'Emma', textDe: 'Ja, wir sitzen in der dritten Reihe. Wir können die bekannten Schauspieler ganz nah sehen.', textUz: 'Ha, uchinchi qatorda o‘tiramiz. Mashhur aktyorlarni juda yaqindan ko‘ra olamiz.' },
        { speaker: 'Jasur', textDe: 'Ich hoffe, dass das moderne Theaterstück nicht zu lang ist.', textUz: 'Umid qilamanki, zamonaviy pyesa juda uzun emasdir.' },
        { speaker: 'Emma', textDe: 'Keine Sorge, die Aufführung dauert nur zwei Stunden und es gibt eine Pause.', textUz: 'Xavotir olma, namoyish atigi ikki soat davom etadi va tanaffus bor.' },
        { speaker: 'Jasur', textDe: 'Perfekt! Dann lass uns reingehen.', textUz: 'Ajoyib! Unda ichkariga kiraylik.' }
      ],
      usefulPhrases: [
        { german: 'eine Aufführung / Vorstellung besuchen', uzbek: 'spektakl tomosha qilmoq' },
        { german: 'in der ersten / zweiten Reihe sitzen', uzbek: 'birinchi / ikkinchi qatorda o‘tirmoq' },
        { german: 'den Film spannend finden', uzbek: 'filmni hayajonli deb topmoq' },
        { german: 'Karten reservieren', uzbek: 'chiptalarni band qilmoq' }
      ],
      culturalNoteUz: 'Germaniyada teatr madaniyati juda rivojlangan. Deyarli har bir yirik shaharda davlat tomonidan qo‘llab-quvvatlanadigan Stadttheater (Shahar teatri) va Opera uylari mavjud.'
    },
    vocabulary: [
      {
        id: 'voc-m11-7',
        lessonId: 'les-32',
        levelCode: 'a2-1',
        german: 'die Aufführung',
        article: 'die',
        plural: 'die Aufführungen',
        uzbek: 'sahna ko‘rinishi, spektakl namoyishi',
        exampleDe: 'Die Aufführung beginnt um 19:30 Uhr.',
        exampleUz: 'Spektakl namoyishi 19:30 da boshlanadi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m11-8',
        lessonId: 'les-32',
        levelCode: 'a2-1',
        german: 'der Schauspieler',
        article: 'der',
        plural: 'die Schauspieler',
        uzbek: 'aktyor',
        exampleDe: 'Er ist ein sehr bekannter Schauspieler.',
        exampleUz: 'U juda mashhur aktyor.',
        wordType: 'noun'
      },
      {
        id: 'voc-m11-9',
        lessonId: 'les-32',
        levelCode: 'a2-1',
        german: 'spannend',
        article: null,
        plural: null,
        uzbek: 'hayajonli, qiziqarli (intriguing)',
        exampleDe: 'Der Film war von Anfang bis Ende spannend.',
        exampleUz: 'Film boshidan oxirigacha hayajonli edi.',
        wordType: 'adjective'
      },
      {
        id: 'voc-m11-10',
        lessonId: 'les-32',
        levelCode: 'a2-1',
        german: 'langweilig',
        article: null,
        plural: null,
        uzbek: 'zerikarli',
        exampleDe: 'Das Buch war leider etwas langweilig.',
        exampleUz: 'Kitob afsuski biroz zerikarli edi.',
        wordType: 'adjective'
      },
      {
        id: 'voc-m11-11',
        lessonId: 'les-32',
        levelCode: 'a2-1',
        german: 'die Reihe',
        article: 'die',
        plural: 'die Reihen',
        uzbek: 'qator (teatrda/kinoda)',
        exampleDe: 'Unsere Plätze sind in der fünften Reihe.',
        exampleUz: 'Bizning o‘rinlarimiz beshinchi qatorda.',
        wordType: 'noun'
      },
      {
        id: 'voc-m11-12',
        lessonId: 'les-32',
        levelCode: 'a2-1',
        german: 'empfehlen',
        article: null,
        plural: null,
        uzbek: 'tavsiya qilmoq',
        exampleDe: 'Welchen Film kannst du mir empfehlen?',
        exampleUz: 'Menga qaysi filmni tavsiya qila olasan?',
        wordType: 'verb'
      }
    ],
    grammar: [
      {
        id: 'gra-m11-2',
        lessonId: 'les-32',
        levelCode: 'a2-1',
        titleDe: 'Adjektivdeklination nach bestimmtem Artikel',
        titleUz: 'Sifatlarning aniq artikl (der/die/das) bilan turlanishi',
        summaryUz: 'Aniq artikldan keyin sifatlar faqat ikkita qo‘shimcha oladi: Nominativda va Neutrum/Feminin Akkusativda "-e", qolgan barcha holatlarda esa "-en".',
        explanationUz: `Aniq artikl (der, die, das) otning rodini va kelishigini allaqachon aniq ko‘rsatib turadi. Shuning uchun sifat oddiy qo‘shimcha oladi:

1. **-e qo‘shimchasi faqat 5 ta holatda keladi:**
- Nominativ Maskulin: **der** neu**e** Film
- Nominativ Neutrum: **das** neu**e** Theater
- Nominativ Feminin: **die** neu**e** Musik
- Akkusativ Neutrum: **das** neu**e** Theater
- Akkusativ Feminin: **die** neu**e** Musik

2. **Qolgan barcha holatlarda doimo -en qo‘shiladi!**
- Akkusativ Maskulin: **den** neu**en** Film
- Dativ (barcha jinslar): **dem** neu**en** Film, **der** neu**en** Musik
- Ko‘plik (barcha kelishiklarda): **die** neu**en** Filme.`,
        tables: [
          {
            title: 'Aniq artikl bilan sifat turlanishi',
            headers: ['Kelishik', 'Maskulin (der)', 'Neutrum (das)', 'Feminin (die)', 'Plural (die)'],
            rows: [
              ['Nominativ', 'der neue Film', 'das neue Theater', 'die neue Show', 'die neuen Filme'],
              ['Akkusativ', 'den neuen Film', 'das neue Theater', 'die neue Show', 'die neuen Filme'],
              ['Dativ', 'dem neuen Film', 'dem neuen Theater', 'der neuen Show', 'den neuen Filmen']
            ]
          }
        ],
        examples: [
          {
            german: 'Wir haben den neuen Film im Kino gesehen.',
            uzbek: 'Biz kinoda yangi filmni ko‘rdik.',
            highlight: 'den neuen Film'
          },
          {
            german: 'Das alte Theatergebäude steht unter Denkmalschutz.',
            uzbek: 'Eski teatr binosi tarixiy yodgorlik sifatida himoyalanadi.',
            highlight: 'Das alte Theatergebäude'
          }
        ]
      }
    ],
    listening: [
      {
        id: 'lis-m11-2',
        lessonId: 'les-32',
        levelCode: 'a2-1',
        titleDe: 'Kritik nach dem Kinobesuch',
        titleUz: 'Kinodan keyingi fikr-mulohaza',
        transcriptDe: 'Hallo Sarah, wie war der neue Actionfilm gestern?\nEhrlich gesagt, der Anfang war spannend, aber das Ende fand ich ziemlich enttäuschend. Die bekannten Schauspieler haben gut gespielt, aber die Geschichte war unlogisch. Ich würde dir den Film nicht unbedingt empfehlen.',
        translationUz: 'Salom Sara, kechagi yangi jangari film qanday o‘tdi?\nRostini aytsam, boshi qiziq edi, ammo oxiri ancha hafsalani pir qildi. Mashhur aktyorlar yaxshi o‘ynashdi, ammo syujet mantiqsiz edi. Men senga bu filmni unchalik tavsiya qilmagan bo‘lardim.',
        dialogue: [
          { speaker: 'Sarah', textDe: 'Die bekannten Schauspieler haben gut gespielt, aber das Ende war enttäuschend.', textUz: 'Mashhur aktyorlar yaxshi o‘ynashdi, ammo oxiri hafsalani pir qildi.' }
        ],
        questions: [
          {
            id: 'q-lis-m11-2',
            questionUz: 'Saraga filmning qaysi qismi yoqmadi?',
            options: ['Filmning oxiri (das Ende)', 'Boshi', 'Musiqasi'],
            correctIndex: 0,
            explanationUz: 'Sara "das Ende fand ich ziemlich enttäuschend" deb aytdi.'
          }
        ]
      }
    ],
    reading: [
      {
        id: 'read-m11-2',
        lessonId: 'les-32',
        levelCode: 'a2-1',
        titleDe: 'Berliner Kulturkalender',
        titleUz: 'Berlin madaniyat taqvimi',
        textDe: 'Tipps für das Wochenende in Berlin:\n\n1. Deutsches Theater: Das klassische Stück "Faust" von Goethe mit den besten Schauspielern der Stadt. Beginn: 19:00 Uhr.\n2. Kino Babylon: Der preisgekrönte Dokumentarfilm über die Berliner Mauer. Eintritt: 8 Euro.\n3. Philharmonie: Die Berliner Philharmoniker spielen klassische Meisterwerke von Beethoven. Karten im Vorverkauf sichern!',
        textUz: 'Berlinda dam olish kunlari uchun tavsiyalar:\n\n1. Nemis teatri: Gyotening klassik "Faust" asari shaharning eng yaxshi aktyorlari ijrosida. Boshlanishi: 19:00.\n2. Babylon kinoteatri: Berlin devori haqidagi mukofotga sazovor hujjatli film. Kirish: 8 yevro.\n3. Filarmoniya: Berlin filarmonik orkestri Betxovenning klassik durdonalarini ijro etadi. Chiptalarni oldindan xarid qiling!',
        questions: [
          {
            id: 'q-read-m11-2',
            questionUz: 'Deutsches Theaterda qaysi klassik asar qo‘yilmoqda?',
            options: ['Goethening "Faust" asari', 'Hamle', 'Romeo va Juletta'],
            correctIndex: 0,
            explanationUz: 'Taqvimda "Das klassische Stück Faust von Goethe" deb yozilgan.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-m11-2',
      lessonId: 'les-32',
      levelCode: 'a2-1',
      taskDe: 'Schreiben Sie eine kurze Film- oder Theaterkritik.',
      taskUz: 'Qisqa kino yoki teatr taqrizi yozing.',
      instructionUz: 'Aniq artikl bilan sifatlarni ishlating (der neue Film, die spannende Geschichte).',
      hints: ['Gestern habe ich den Film... gesehen.', 'Die Schauspieler waren...'],
      sampleSolutionDe: 'Gestern habe ich den neuen Film im Kino gesehen. Die spannende Handlung hat mir sehr gut gefallen. Die bekannten Schauspieler waren großartig. Ich kann den Film jedem empfehlen!',
      scaffold: {
        openingDe: 'Meine Filmkritik:',
        closingDe: 'Gesamtnote: 5 Sterne!',
        usefulPhrasesDe: ['Der neue Film...', 'Die spannende Geschichte...']
      }
    },
    shadowing: [
      {
        id: 'sha-m11-2',
        lessonId: 'les-32',
        levelCode: 'a2-1',
        sentenceDe: 'Wir haben den neuen Film im Kino gesehen und die spannende Handlung sehr genossen.',
        translationUz: 'Biz kinoda yangi filmni ko‘rdik va hayajonli syujetdan katta zavq oldik.',
        phoneticHint: '[Vir ha-ben den noy-en Film im Ki-no ge-ze-hen unt di shpan-nen-de Hand-lung zer ge-nos-sen]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-m11-2-q1',
        type: 'fill-blank',
        questionUz: 'Sifat qo‘shimchasini to‘g‘ri qo‘ying (Akkusativ, Maskulin): "Ich habe den _____ Film gesehen."',
        blankSentence: 'Ich habe den [blank] Film gesehen.',
        options: ['neuen', 'neue', 'neuer', 'neues'],
        correctAnswer: 'neuen',
        explanationUz: 'den (Akkusativ Maskulin) dan keyin sifat doimo -en oladi: den neuen Film.',
        mistakeTipUz: '❌ den Film bo‘lgani uchun sifatga -en qo‘shiladi: den neuen Film.'
      },
      {
        id: 'prac-m11-2-q2',
        type: 'multiple-choice',
        questionUz: 'Qaysi gap to‘g‘ri tuzilgan?',
        options: [
          'Das alte Theater ist sehr berühmt.',
          'Das alter Theater ist sehr berühmt.',
          'Das alten Theater ist sehr berühmt.',
          'Das altes Theater ist sehr berühmt.'
        ],
        correctAnswer: 'Das alte Theater ist sehr berühmt.',
        explanationUz: 'das Theater (Nominativ Neutrum) aniq artikldan keyin -e oladi: das alte Theater.',
        mistakeTipUz: '❌ Aniq artikldan keyin Neutrum sifatga -e oladi: das alte Theater.'
      },
      {
        id: 'prac-m11-2-q3',
        type: 'word-order',
        questionUz: 'Gapni to‘g‘ri tartibda tuzing:',
        scrambledWords: ['Wir', 'den', 'Schauspieler', 'kennen', 'bekannten'],
        correctAnswer: 'Wir kennen den bekannten Schauspieler',
        explanationUz: 'Wir (1) + kennen (2) + den bekannten Schauspieler (3).',
        mistakeTipUz: '❌ Fe‘l 2-o‘rinda: Wir kennen den bekannten Schauspieler.'
      }
    ]
  },

  // ==========================================
  // LEKTION 33: Hobbys, Musik und Sport
  // ==========================================
  {
    id: 'les-33',
    moduleId: 'mod-a2-1-3',
    levelCode: 'a2-1',
    titleDe: 'Lektion 33: Hobbys, Musik und Sport',
    titleUz: '33-Dars: Qiziqishlar, musiqa va sport ("wenn" shart ergash gaplari)',
    descriptionUz: 'Sevimli mashg‘ulotlar, sport to‘garaklari, konsertlar hamda "wenn" (agar / qachonki) shart va vaqt ergash gaplari.',
    orderIndex: 33,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Bo‘sh vaqt va sport mashg‘ulotlarini tasvirlash',
      '"wenn" bog‘lovchisi bilan shart gaplarni (Wenn ich Zeit habe, ...) to‘g‘ri tuzish',
      'Sport klublari va to‘garaklarga qatnashish shartlari haqida suhbatlashish'
    ],
    warmUp: {
      situationUz: 'Dam olish kunlarini qanday o‘tkazish haqida gaplashyapsiz: ob-havo yaxshi bo‘lsa velosipedda yurasiz, yomon bo‘lsa uyda qolasiz.',
      curiosityQuestionUz: '"Agar ob-havo yaxshi bo‘lsa, biz parkga boramiz" nemischa qanday aytiladi?',
      miniDialogue: [
        { speaker: 'Freund', textDe: 'Was machst du am Wochenende?', textUz: 'Dam olish kunlari nima qilasan?' },
        { speaker: 'Timur', textDe: 'Wenn das Wetter schön ist, fahre ich mit dem Fahrrad.', textUz: 'Agar havo yaxshi bo‘lsa, velosipedda sayr qilaman.' }
      ],
      hintUz: '"Wenn..." gapi oldinda kelsa, asosiy gap darhol FE‘L bilan boshlanadi: Wenn..., fahre ich!'
    },
    contextDialogue: {
      titleDe: 'Im Sportverein',
      titleUz: 'Sport to‘garagida',
      situationUz: 'Timur do‘sti Lukas bilan mahalliy sport klubiga a‘zo bo‘lish haqida gaplashmoqda.',
      lines: [
        { speaker: 'Lukas', textDe: 'Timur, hast du Lust, mit mir zum Fußballtraining zu kommen?', textUz: 'Timur, men bilan futbol mashg‘ulotiga borishni xohlaysanmi?' },
        { speaker: 'Timur', textDe: 'Sehr gerne! Wann trainiert ihr denn?', textUz: 'Jon deb! Qachon shug‘ullanasizlar o‘zi?' },
        { speaker: 'Lukas', textDe: 'Immer dienstags und donnerstags um 18:00 Uhr. Wenn du mitmachen möchtest, kannst du einfach vorbeikommen.', textUz: 'Har seshanba va payshanba soat 18:00 da. Agar qatnashmoqchi bo‘lsang, bemalol kelishing mumkin.' },
        { speaker: 'Timur', textDe: 'Brauche ich spezielle Sportkleidung?', textUz: 'Maxsus sport kiyimi kerakmi?' },
        { speaker: 'Lukas', textDe: 'Nur Sportschuhe und ein T-Shirt. Wenn dir das Training gefällt, kannst du Mitglied im Verein werden.', textUz: 'Faqat krossovka va futbolka. Agar mashg‘ulot senga yoqsa, klubga a‘zo bo‘lishing mumkin.' },
        { speaker: 'Timur', textDe: 'Toll! Wenn ich heute pünktlich Feierabend mache, komme ich direkt mit.', textUz: 'Ajoyib! Agar bugun ishni vaqtida tugatsam, to‘g‘ri birga boraman.' }
      ],
      usefulPhrases: [
        { german: 'im Sportverein trainieren', uzbek: 'sport to‘garagida shug‘ullanmoq' },
        { german: 'Mitglied werden', uzbek: 'a‘zo bo‘lmoq' },
        { german: 'Wenn du Zeit hast,...', uzbek: 'Agar vaqting bo‘lsa,...' },
        { german: 'Lust haben auf (+ Akk)', uzbek: '...ga ishtiyoqi (xohishi) bo‘lmoq' }
      ],
      culturalNoteUz: 'Germaniyada Sportverein (sport klublari) juda ommabop bo‘lib, aholining deyarli har uchinchi kishisi biron-bir mahalliy sport yoki madaniyat uyushmasiga a‘zodir.'
    },
    vocabulary: [
      {
        id: 'voc-m11-13',
        lessonId: 'les-33',
        levelCode: 'a2-1',
        german: 'der Verein',
        article: 'der',
        plural: 'die Vereine',
        uzbek: 'klub, jamiyat, to‘garak',
        exampleDe: 'Ich bin Mitglied in einem Sportverein.',
        exampleUz: 'Men sport klubining a‘zosiman.',
        wordType: 'noun'
      },
      {
        id: 'voc-m11-14',
        lessonId: 'les-33',
        levelCode: 'a2-1',
        german: 'das Training',
        article: 'das',
        plural: 'die Trainings',
        uzbek: 'mashg‘ulot, trenirovka',
        exampleDe: 'Das Training beginnt um 18:00 Uhr.',
        exampleUz: 'Mashg‘ulot soat 18:00 da boshlanadi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m11-15',
        lessonId: 'les-33',
        levelCode: 'a2-1',
        german: 'mitmachen',
        article: null,
        plural: null,
        uzbek: 'birga qatnashmoq',
        exampleDe: 'Möchtest du auch mitmachen?',
        exampleUz: 'Sen ham birga qatnashishni xohlaysanmi?',
        wordType: 'verb'
      },
      {
        id: 'voc-m11-16',
        lessonId: 'les-33',
        levelCode: 'a2-1',
        german: 'begeistert',
        article: null,
        plural: null,
        uzbek: 'ilhomlangan, qattiq qiziqqan',
        exampleDe: 'Er ist begeistert von klassischer Musik.',
        exampleUz: 'U klassik musiqadan qattiq ilhomlangan.',
        wordType: 'adjective'
      },
      {
        id: 'voc-m11-17',
        lessonId: 'les-33',
        levelCode: 'a2-1',
        german: 'aktiv',
        article: null,
        plural: null,
        uzbek: 'faol',
        exampleDe: 'Sie treibt sehr aktiv Sport.',
        exampleUz: 'U juda faol sport bilan shug‘ullanadi.',
        wordType: 'adjective'
      },
      {
        id: 'voc-m11-18',
        lessonId: 'les-33',
        levelCode: 'a2-1',
        german: 'die Mitgliedschaft',
        article: 'die',
        plural: 'die Mitgliedschaften',
        uzbek: 'a‘zolik',
        exampleDe: 'Die Mitgliedschaft kostet 20 Euro im Monat.',
        exampleUz: 'A‘zolik oyiga 20 yevro turadi.',
        wordType: 'noun'
      }
    ],
    grammar: [
      {
        id: 'gra-m11-3',
        lessonId: 'les-33',
        levelCode: 'a2-1',
        titleDe: 'Konditionale Nebensätze mit "wenn"',
        titleUz: '"wenn" (agar / qachonki) shart ergash gaplari',
        summaryUz: '"wenn" bog‘lovchisi shartni ifodalaydi. "wenn" gapida fe‘l eng oxirida turadi, bosh gap ikkinchi o‘rinda kelsa fe‘l bilan boshlanadi.',
        explanationUz: `"wenn" bog‘lovchisi o‘zbek tilidagi "-sa / agar ... bo‘lsa" qo‘shimchasiga to‘g‘ri keladi:

1. **"wenn" gapi boshida kelsa:**
- "wenn" ergash gapida tuslangan fe‘l eng oxirida turadi.
- Bosh gap darhol **fe‘l bilan** boshlanadi!
- Formula: **Wenn + ... + Fe‘l (1), + Fe‘l (2) + Subyekt + ...**
- Masalan: *Wenn das Wetter schön **ist**, **gehen** wir spazieren.*

2. **"wenn" gapi orqada kelsa:**
- Bosh gap odatdagidek boshlanadi (fe‘l 2-o‘rinda).
- *Wir gehen spazieren, **wenn** das Wetter schön **ist**.*`,
        tables: [
          {
            title: '"wenn" gaplarida so‘z tartibi',
            headers: ['1-qism', 'Bog‘lovchi va fe‘l', '2-qism', 'Bosh gap fe‘li'],
            rows: [
              ['Wenn ich Zeit', 'habe,', 'mache ich', 'Sport.'],
              ['Wenn es regnet,', 'bleiben wir', 'zu Hause.', ''],
              ['Ich rufe dich an,', 'wenn ich', 'fertig bin.', '']
            ]
          }
        ],
        examples: [
          {
            german: 'Wenn du Fragen hast, kannst du mich anrufen.',
            uzbek: 'Agar savollaring bo‘lsa, menga qo‘ng‘iroq qilishing mumkin.',
            highlight: 'Wenn ... hast, kannst du'
          },
          {
            german: 'Wir freuen uns, wenn du zur Party kommst.',
            uzbek: 'Ziyofatga kelsang, juda xursand bo‘lamiz.',
            highlight: 'wenn du ... kommst'
          }
        ]
      }
    ],
    listening: [
      {
        id: 'lis-m11-3',
        lessonId: 'les-33',
        levelCode: 'a2-1',
        titleDe: 'Anmeldung im Fitnessstudio',
        titleUz: 'Fitnes klubga a‘zo bo‘lish',
        transcriptDe: 'Guten Tag, ich möchte mich über Ihr Fitnessstudio informieren.\nSehr gerne! Wenn Sie sich heute anmelden, zahlen Sie im ersten Monat nur den halben Preis. Unser Studio hat täglich von 6:00 bis 23:00 Uhr geöffnet. Wenn Sie möchten, können Sie jetzt ein kostenloses Probetraining machen.\nDas klingt super! Das mache ich gerne.',
        translationUz: 'Xayrli kun, fitnes klubingiz haqida ma‘lumot olmoqchi edim.\nJon deb! Agar bugun ro‘yxatdan o‘tsangiz, birinchi oyda faqat yarim narxini to‘laysiz. Klubimiz har kuni soat 6:00 dan 23:00 gacha ochiq. Agar xohlasangiz, hozir bepul sinov mashg‘ulotini o‘tashingiz mumkin.\nBu ajoyib! Bajonidil shunday qilaman.',
        dialogue: [
          { speaker: 'Mitarbeiter', textDe: 'Wenn Sie sich heute anmelden, zahlen Sie im ersten Monat nur die Hälfte.', textUz: 'Agar bugun ro‘yxatdan o‘tsangiz, birinchi oyda yarmini to‘laysiz.' }
        ],
        questions: [
          {
            id: 'q-lis-m11-3',
            questionUz: 'Bugun a‘zo bo‘lganlarga qanday chegirma bor?',
            options: ['Birinchi oy yarim narx (halber Preis)', 'Bir yil bepul', 'Sovg‘aga sport kiyimi'],
            correctIndex: 0,
            explanationUz: 'Menejer "zahlen Sie im ersten Monat nur den halben Preis" deb tushuntirdi.'
          }
        ]
      }
    ],
    reading: [
      {
        id: 'read-m11-3',
        lessonId: 'les-33',
        levelCode: 'a2-1',
        titleDe: 'Vereinsleben in Deutschland',
        titleUz: 'Germaniyada klublar va jamoat hayoti',
        textDe: 'In Deutschland gibt es über 600.000 eingetragene Vereine. Besonders beliebt sind Sportvereine für Fußball, Tennis und Turnen. Aber auch Musikvereine und Chöre haben viele Mitglieder. Wenn man neu in eine deutsche Stadt zieht, ist ein Verein die beste Möglichkeit, schnell neue Freunde zu finden und die Sprache zu üben.',
        textUz: 'Germaniyada 600 000 dan ortiq ro‘yxatdan o‘tgan jamiyatlar (Vereine) mavjud. Ayniqsa futbol, tennis va gimnastika sport klublari juda mashhur. Shuningdek, musiqa uyushmalari va xor jamoalarining ham ko‘plab a‘zolari bor. Agar biror kishi yangi nemis shahriga ko‘chib kelsa, klubga a‘zo bo‘lish yangi do‘stlar topish va tilni amalda qo‘llashning eng yaxshi usulidir.',
        questions: [
          {
            id: 'q-read-m11-3',
            questionUz: 'Yangi shaharga ko‘chib kelganda klubga kirish nima uchun foydali?',
            options: ['Tez do‘stlar topish va til o‘rganish uchun', 'Faqat pul ishlash uchun', 'Uy olish uchun'],
            correctIndex: 0,
            explanationUz: 'Matnda: "die beste Möglichkeit, schnell neue Freunde zu finden und die Sprache zu üben" deb aytilgan.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-m11-3',
      lessonId: 'les-33',
      levelCode: 'a2-1',
      taskDe: 'Schreiben Sie zwei Sätze mit "wenn".',
      taskUz: '"wenn" bog‘lovchisi bilan ikkita shart gapi yozing.',
      instructionUz: 'Bo‘sh vaqtingizda nima qilishni yoqtirishingizni ifodalang.',
      hints: ['Wenn ich frei habe,...', 'Wenn das Wetter schön ist,...'],
      sampleSolutionDe: 'Wenn ich am Wochenende frei habe, spiele ich mit meinen Freunden Fußball. Wenn es regnet, lese ich ein Buch oder schaue einen Film.',
      scaffold: {
        openingDe: 'Meine Wochenendpläne:',
        closingDe: 'Sport macht mir viel Spaß!',
        usefulPhrasesDe: ['Wenn ich Zeit habe, ...', 'Wenn das Wetter schön ist, ...']
      }
    },
    shadowing: [
      {
        id: 'sha-m11-3',
        lessonId: 'les-33',
        levelCode: 'a2-1',
        sentenceDe: 'Wenn ich am Wochenende frei habe, treibe ich Sport und treffe meine Freunde.',
        translationUz: 'Agar dam olish kunlari bo‘sh bo‘lsam, sport bilan shug‘ullanaman va do‘stlarim bilan uchrashaman.',
        phoneticHint: '[Ven ih am Vo-xen-en-de fray ha-be, tray-be ih Shport unt tref-fe may-ne Froynd-e]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-m11-3-q1',
        type: 'word-order',
        questionUz: '"wenn" gapini to‘g‘ri tuzing (bosh gap fe‘l bilan boshlanadi!):',
        scrambledWords: ['Wenn', 'ich', 'habe,', 'Zeit', 'fahre', 'Fahrrad.', 'ich'],
        correctAnswer: 'Wenn ich Zeit habe, fahre ich Fahrrad.',
        explanationUz: 'Wenn ich Zeit habe, (ergash gap fe‘li oxirida) + fahre ich (bosh gap fe‘l bilan boshlanadi) + Fahrrad.',
        mistakeTipUz: '❌ Verguldan keyin bosh gap darhol fe‘l bilan boshlanadi: "fahre ich".'
      },
      {
        id: 'prac-m11-3-q2',
        type: 'fill-blank',
        questionUz: 'To‘g‘ri bog‘lovchini qo‘ying: "_____ du Hilfe brauchst, ruf mich an."',
        blankSentence: '[blank] du Hilfe brauchst, ruf mich an.',
        options: ['Wenn', 'Weil', 'Dass', 'Ob'],
        correctAnswer: 'Wenn',
        explanationUz: '"Agar yordam kerak bo‘lsa..." ma‘nosida "Wenn" ishlatiladi.',
        mistakeTipUz: '❌ "Wenn" = agar / qachonki.'
      },
      {
        id: 'prac-m11-3-q3',
        type: 'multiple-choice',
        questionUz: 'Qaysi gap to‘g‘ri tuzilgan?',
        options: [
          'Wenn das Wetter schön ist, gehen wir spazieren.',
          'Wenn das Wetter ist schön, wir gehen spazieren.',
          'Wenn das Wetter schön ist, wir gehen spazieren.',
          'Wenn ist das Wetter schön, gehen wir spazieren.'
        ],
        correctAnswer: 'Wenn das Wetter schön ist, gehen wir spazieren.',
        explanationUz: '"Wenn das Wetter schön ist," (fe‘l oxirida), "gehen wir..." (bosh gap fe‘l bilan boshlanadi).',
        mistakeTipUz: '❌ Verguldan keyin to‘g‘ridan-to‘g‘ri fe‘l keladi: "gehen wir".'
      }
    ]
  }
];
