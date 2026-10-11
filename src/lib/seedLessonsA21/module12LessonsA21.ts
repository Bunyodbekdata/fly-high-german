import { Lesson } from '../../types/database';

export const MODULE_12_A21_LESSONS: Lesson[] = [
  // ==========================================
  // LEKTION 34: Feste und Einladungen
  // ==========================================
  {
    id: 'les-34',
    moduleId: 'mod-a2-1-4',
    levelCode: 'a2-1',
    titleDe: 'Lektion 34: Feste und Einladungen',
    titleUz: '34-Dars: Bayramlar va taklifnomalar (Dativ va Akkusativ bilan fe‘llar)',
    descriptionUz: 'Tug‘ilgan kun, to‘y va bayram tadbirlariga taklifnomalar hamda ikkita to‘ldiruvchi (Dativ - kimga va Akkusativ - nimani) oluvchi fe‘llar.',
    orderIndex: 34,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Nemischa taklifnomalarni yozish va taklifga javob qaytarish',
      'Ikkita to‘ldiruvchili fe‘llarda (schenken, geben, schicken) so‘z tartibini to‘g‘ri qo‘llash',
      'Bayram tabriklarini ifodalash'
    ],
    warmUp: {
      situationUz: 'Germaniyalik do‘stingiz sizni tug‘ilgan kun ziyofatiga taklif qildi va siz unga sovg‘a olmoqchisiz.',
      curiosityQuestionUz: '"Men do‘stimga qiziqarli kitob sovg‘a qilaman" nemischa qanday aytiladi?',
      miniDialogue: [
        { speaker: 'Freund', textDe: 'Was schenkst du Michael zum Geburtstag?', textUz: 'Mixaelga tug‘ilgan kuniga nima sovg‘a qilasan?' },
        { speaker: 'Aziz', textDe: 'Ich schenke ihm ein spannendes Buch über Usbekistan.', textUz: 'Men unga O‘zbekiston haqidagi qiziqarli kitob sovg‘a qilaman.' }
      ],
      hintUz: 'Ikkita ot to‘ldiruvchi kelsa, har doim Dativ (shaxs - kimga) oldin, Akkusativ (narsa - nimani) keyin keladi!'
    },
    contextDialogue: {
      titleDe: 'Die Einladung zur Geburtstagsparty',
      titleUz: 'Tug‘ilgan kun ziyofatiga taklifnoma',
      situationUz: 'Laura Azizga o‘zining tug‘ilgan kun ziyofati taklifnomasini bermoqda.',
      lines: [
        { speaker: 'Laura', textDe: 'Hallo Aziz! Am Samstag feiere ich meinen Geburtstag und lade dich ganz herzlich ein.', textUz: 'Salom Aziz! Shanba kuni tug‘ilgan kunimni nishonlayman va seni chin dildan taklif qilaman.' },
        { speaker: 'Aziz', textDe: 'Vielen Dank für die Einladung, Laura! Ich komme sehr gerne. Wann fängt die Party an?', textUz: 'Taklif uchun katta rahmat, Laura! Jon deb boraman. Ziyofat soat nechada boshlanadi?' },
        { speaker: 'Laura', textDe: 'Um 19:00 Uhr bei mir zu Hause. Wir grillen im Garten.', textUz: 'Soat 19:00 da uyimda. Bog‘da gril qilamiz.' },
        { speaker: 'Aziz', textDe: 'Kann ich dir etwas mitbringen? Einen Salat oder Getränke?', textUz: 'Senga biror narsa olib kelaymi? Salat yoki ichimliklar?' },
        { speaker: 'Laura', textDe: 'Das wäre toll! Du kannst meiner Schwester einen leckeren Kuchen mitbringen.', textUz: 'Bu ajoyib bo‘lardi! Singlimga mazali tort olib kelsang bo‘ladi.' },
        { speaker: 'Aziz', textDe: 'Abgemacht! Ich freue mich schon riesig darauf.', textUz: 'Kelishdik! Buni juda intiqlik bilan kutyapman.' }
      ],
      usefulPhrases: [
        { german: 'herzlich einladen zu', uzbek: '...ga chin dildan taklif qilmoq' },
        { german: 'jemandem etwas schenken / mitbringen', uzbek: 'kimgadir nimadir sovg‘a qilmoq / olib kelmoq' },
        { german: 'Herzlichen Glückwunsch zum Geburtstag!', uzbek: 'Tug‘ilgan kuningiz bilan chin yurakdan qutlayman!' },
        { german: 'Vielen Dank für die Einladung!', uzbek: 'Taklif uchun katta rahmat!' }
      ],
      culturalNoteUz: 'Germaniyada tug‘ilgan kunni oldindan tabriklash yomon alomat (Unglück) hisoblanadi. Faqat tug‘ilgan kun sanasi boshlangach tabriklash odat tusiga kirgan.'
    },
    vocabulary: [
      {
        id: 'voc-m12-1',
        lessonId: 'les-34',
        levelCode: 'a2-1',
        german: 'die Einladung',
        article: 'die',
        plural: 'die Einladungen',
        uzbek: 'taklifnoma',
        exampleDe: 'Ich habe eine Einladung bekommen.',
        exampleUz: 'Men taklifnoma oldim.',
        wordType: 'noun'
      },
      {
        id: 'voc-m12-2',
        lessonId: 'les-34',
        levelCode: 'a2-1',
        german: 'die Feier',
        article: 'die',
        plural: 'die Feiern',
        uzbek: 'bayram, tantana, ziyofat',
        exampleDe: 'Die Feier findet am Samstag statt.',
        exampleUz: 'Tantana shanba kuni bo‘lib o‘tadi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m12-3',
        lessonId: 'les-34',
        levelCode: 'a2-1',
        german: 'schenken',
        article: null,
        plural: null,
        uzbek: 'sovg‘a qilmoq',
        exampleDe: 'Was schenkst du deinen Eltern?',
        exampleUz: 'Ota-onangga nima sovg‘a qilasan?',
        wordType: 'verb'
      },
      {
        id: 'voc-m12-4',
        lessonId: 'les-34',
        levelCode: 'a2-1',
        german: 'mitbringen',
        article: null,
        plural: null,
        uzbek: 'o‘zi bilan olib kelmoq',
        exampleDe: 'Ich bringe einen Kuchen mit.',
        exampleUz: 'Men tort olib kelaman.',
        wordType: 'verb'
      },
      {
        id: 'voc-m12-5',
        lessonId: 'les-34',
        levelCode: 'a2-1',
        german: 'gratulieren',
        article: null,
        plural: null,
        uzbek: 'tabriklamoq (+ Dativ)',
        exampleDe: 'Ich gratuliere dir von Herzen!',
        exampleUz: 'Seni chin dildan qutlayman!',
        wordType: 'verb'
      },
      {
        id: 'voc-m12-6',
        lessonId: 'les-34',
        levelCode: 'a2-1',
        german: 'der Gast',
        article: 'der',
        plural: 'die Gäste',
        uzbek: 'mehmon',
        exampleDe: 'Wir haben heute viele Gäste.',
        exampleUz: 'Bugun mehmonlarimiz ko‘p.',
        wordType: 'noun'
      }
    ],
    grammar: [
      {
        id: 'gra-m12-1',
        lessonId: 'les-34',
        levelCode: 'a2-1',
        titleDe: 'Verben mit Dativ und Akkusativ (Ikkita to‘ldiruvchili fe‘llar)',
        titleUz: 'Dativ (kimga) va Akkusativ (nimani) talab qiluvchi fe‘llar',
        summaryUz: 'schenken, geben, schicken, mitbringen kabi fe‘llar ikkita to‘ldiruvchi oladi: inson/shaxs Dativda, narsa Akkusativda keladi.',
        explanationUz: `Ayrim fe‘llar bir vaqtning o‘zida ham DATIV (kimga?), ham AKKUSATIV (nimani?) to‘ldiruvchisini talab qiladi.

Mashhur fe‘llar:
- **schenken** (kimgadir nimadir sovg‘a qilmoq)
- **geben** (kimgadir nimadir bermoq)
- **schicken / senden** (kimgadir nimadir jo‘natmoq)
- **mitbringen** (kimgadir nimadir olib kelmoq)
- **erklären** (kimgadir nimadir tushuntirmoq)

Oltin qoida (ikkita ot qatnashganda):
**Subyekt + Fe‘l + DATIV (shaxs) + AKKUSATIV (narsa).**
- *Ich schenke **meinem Vater** (Dativ) **ein Buch** (Akkusativ).*
- *Er gibt **seiner Freundin** (Dativ) **einen Blumenstrauß** (Akkusativ).*`,
        tables: [
          {
            title: 'So‘z tartibi qoidasi',
            headers: ['Subyekt', 'Fe‘l', 'Dativ (kimga? shaxs)', 'Akkusativ (nimani? narsa)'],
            rows: [
              ['Ich', 'schenke', 'meinem Bruder', 'ein Smartphone.'],
              ['Wir', 'bringen', 'der Gastgeberin', 'Blumen mit.'],
              ['Der Lehrer', 'erklärt', 'den Schülern', 'die Grammatik.']
            ]
          }
        ],
        examples: [
          {
            german: 'Ich schicke meiner Kollegin die Unterlagen per E-Mail.',
            uzbek: 'Men hamkasbimga hujjatlarni elektron pochta orqali jo‘nataman.',
            highlight: 'meiner Kollegin die Unterlagen'
          },
          {
            german: 'Klaus gibt dem Kind einen Apfel.',
            uzbek: 'Klaus bolaga olma beryapti.',
            highlight: 'dem Kind einen Apfel'
          }
        ]
      }
    ],
    listening: [
      {
        id: 'lis-m12-1',
        lessonId: 'les-34',
        levelCode: 'a2-1',
        titleDe: 'Geschenkideen für die Kollegin',
        titleUz: 'Hamkasb uchun sovg‘a g‘oyalari',
        transcriptDe: 'Hallo Jonas, hast du schon eine Idee, was wir Frau Klein zum Abschied schenken können?\nSie liest doch so gerne. Wir könnten ihr einen Buchgutschein schenken.\nGute Idee! Und dazu kaufen wir ihr einen schönen Blumenstrauß.',
        translationUz: 'Salom Yonas, xayrlashuv munosabati bilan Klein xonimga nima sovg‘a qilishimiz mumkinligi haqida g‘oyang bormi?\nU kitob o‘qishni juda yoqtiradi-ku. Biz unga kitob sertifikati sovg‘a qilishimiz mumkin.\nYaxshi g‘oya! Va unga qo‘shib chiroyli guldasta sotib olamiz.',
        dialogue: [
          { speaker: 'Kollege', textDe: 'Wir könnten ihr einen Buchgutschein und Blumen schenken.', textUz: 'Biz unga kitob sertifikati va gullar sovg‘a qilishimiz mumkin.' }
        ],
        questions: [
          {
            id: 'q-lis-m12-1',
            questionUz: 'Hamkasblar Klein xonimga nima sovg‘a qilmoqchi?',
            options: ['Kitob sertifikati va gullar (Buchgutschein und Blumen)', 'Yangi telefon', 'Shirinliklar'],
            correctIndex: 0,
            explanationUz: 'Suhbatda "Buchgutschein... und dazu einen schönen Blumenstrauß" tanlandi.'
          }
        ]
      }
    ],
    reading: [
      {
        id: 'read-m12-1',
        lessonId: 'les-34',
        levelCode: 'a2-1',
        titleDe: 'Einladungstext auf einer Postkarte',
        titleUz: 'Otkritkadagi taklifnoma matni',
        textDe: 'Liebe Freunde,\n\nich werde am 25. August 30 Jahre alt! Das möchte ich gebührend mit euch feiern. Die Feier beginnt um 18:00 Uhr in der Strandbar am Wannsee. Für Essen und Musik ist gesorgt. Bitte gebt mir bis zum 15. August Bescheid, ob ihr kommen könnt.\n\nIch freue mich auf euch!\nEure Julia',
        textUz: 'Qadrli do‘stlar,\n\nmen 25-avgustda 30 yoshga to‘laman! Buni sizlar bilan munosib nishonlamoqchiman. Bayram Wannsee bo‘yidagi Strandbarda soat 18:00 da boshlanadi. Taom va musiqa tayyor. Iltimos, 15-avgustgacha kela olasizmi-yo‘qligini menga xabar qiling.\n\nSizlarni intizorlik bilan kutaman!\nSizlarning Yuliyangiz',
        questions: [
          {
            id: 'q-read-m12-1',
            questionUz: 'Mehmonlar qachongacha kela olishlarini ma‘lum qilishlari kerak?',
            options: ['15-avgustgacha (bis zum 15. August)', '25-avgustgacha', 'Hech qanday muddat yo‘q'],
            correctIndex: 0,
            explanationUz: 'Matnda "Bitte gebt mir bis zum 15. August Bescheid" deyilgan.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-m12-1',
      lessonId: 'les-34',
      levelCode: 'a2-1',
      taskDe: 'Antworten Sie auf eine Einladung zur Geburtstagsfeier.',
      taskUz: 'Tug‘ilgan kun taklifnomasiga javob xati yozing.',
      instructionUz: 'Taklif uchun minnatdorchilik bildiring va nima olib kelishingizni ayting.',
      hints: ['Vielen Dank für die Einladung!', 'Ich komme sehr gerne...', 'Ich bringe... mit.'],
      sampleSolutionDe: 'Liebe Julia, vielen Dank für die Einladung zu deinem Geburtstag! Ich komme sehr gerne und freue mich auf die Feier. Soll ich dir einen Kuchen mitbringen? Bis Samstag, Aziz',
      scaffold: {
        openingDe: 'Liebe Julia,',
        closingDe: 'Liebe Grüße, Aziz',
        usefulPhrasesDe: ['Vielen Dank für die Einladung...', 'Ich bringe dir gerne etwas mit...']
      }
    },
    shadowing: [
      {
        id: 'sha-m12-1',
        lessonId: 'les-34',
        levelCode: 'a2-1',
        sentenceDe: 'Ich schenke meiner Freundin zum Geburtstag ein schönes Buch und gratuliere ihr von Herzen.',
        translationUz: 'Men dugonamga tug‘ilgan kuniga chiroyli kitob sovg‘a qilaman va uni chin dildan qutlayman.',
        phoneticHint: '[Ih shen-ke may-ner Froynd-in tsum Ge-burt-stag ayn shö-nes Buh unt gra-tu-li-re ir fon Her-tsen]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-m12-1-q1',
        type: 'fill-blank',
        questionUz: 'To‘g‘ri Dativ shaklini qo‘ying: "Ich schenke _____ Vater eine Krawatte."',
        blankSentence: 'Ich schenke [blank] Vater eine Krawatte.',
        options: ['meinem', 'meinen', 'mein', 'meiner'],
        correctAnswer: 'meinem',
        explanationUz: 'der Vater (Maskulin) Dativda "meinem" bo‘ladi: Ich schenke meinem Vater.',
        mistakeTipUz: '❌ Maskulin Dativda -em qo‘shimchasini oladi: meinem Vater.'
      },
      {
        id: 'prac-m12-1-q2',
        type: 'word-order',
        questionUz: 'Gapni to‘g‘ri tartibda tuzing (Dativ oldin, Akkusativ keyin!):',
        scrambledWords: ['Er', 'gibt', 'einen', 'seiner', 'Apfel', 'Mutter'],
        correctAnswer: 'Er gibt seiner Mutter einen Apfel',
        explanationUz: 'Er (1) + gibt (2) + seiner Mutter (Dativ shaxs) + einen Apfel (Akkusativ narsa).',
        mistakeTipUz: '❌ Shaxs (seiner Mutter) narsadan (einen Apfel) oldin turadi.'
      },
      {
        id: 'prac-m12-1-q3',
        type: 'multiple-choice',
        questionUz: '"gratulieren" fe‘li qaysi kelishikni talab qiladi?',
        options: ['Dativ (Ich gratuliere dir)', 'Akkusativ (Ich gratuliere dich)', 'Genitiv', 'Nominativ'],
        correctAnswer: 'Dativ (Ich gratuliere dir)',
        explanationUz: '"gratulieren" fe‘li doimo Dativ talab qiladi: Ich gratuliere dir / Ihnen.',
        mistakeTipUz: '❌ "gratulieren" faqat Dativ bilan ishlatiladi: dir / Ihnen.'
      }
    ]
  },

  // ==========================================
  // LEKTION 35: Geschenke und Glückwünsche
  // ==========================================
  {
    id: 'les-35',
    moduleId: 'mod-a2-1-4',
    levelCode: 'a2-1',
    titleDe: 'Lektion 35: Geschenke und Glückwünsche',
    titleUz: '35-Dars: Sovg‘alar va tabriklar (Dativ va Akkusativ olmoshlari)',
    descriptionUz: 'Sovg‘a tanlash, tabriknomalar va olmoshlarning ketma-ketligi (Er gibt es mir / Ich schenke es ihr).',
    orderIndex: 35,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Turli bayramlar (to‘y, yangi yil, yubiley) uchun mos tabrik so‘zlarini bilish',
      'Dativ va Akkusativ kishilik olmoshlarini (es mir / es ihr) to‘g‘ri qo‘llash',
      'Sovg‘alar uchun minnatdorchilik bildirish'
    ],
    warmUp: {
      situationUz: 'Do‘stingizga sovg‘a olgan edingiz. Boshqa do‘stingiz: "Kitobni unga berdingmi?" deb so‘ramoqda.',
      curiosityQuestionUz: '"Ha, men uni unga berdim" nemis tilida qanday aytiladi?',
      miniDialogue: [
        { speaker: 'Freund', textDe: 'Hast du Anna das Geschenk gegeben?', textUz: 'Annaga sovg‘ani berdingmi?' },
        { speaker: 'Ben', textDe: 'Ja, ich habe es ihr gestern gegeben.', textUz: 'Ha, kecha uni unga berdim.' }
      ],
      hintUz: 'Agar narsa olmosh bo‘lsa (es), u har doim Dativ olmoshidan (ihr/mir) OLDINGA chiqadi: "es ihr"!'
    },
    contextDialogue: {
      titleDe: 'Das perfekte Geschenk',
      titleUz: 'Ideal sovg‘a',
      situationUz: 'Sara va Feliks onalarining yubileyiga sovg‘a xarid qilish haqida maslahatlashmoqda.',
      lines: [
        { speaker: 'Sara', textDe: 'Hast du schon ein Geschenk für Mama gekauft?', textUz: 'Oyi uchun sovg‘a sotib oldingmi?' },
        { speaker: 'Feliks', textDe: 'Ja, ich habe ihr ein wunderschönes Parfüm gekauft. Wann gibst du ihr dein Geschenk?', textUz: 'Ha, unga ajoyib atir sotib oldim. Sen sovg‘angni unga qachon berasan?' },
        { speaker: 'Sara', textDe: 'Ich habe einen Gutschein für ein Wellnesswochenende. Ich gebe ihn ihr am Sonntag beim Frühstück.', textUz: 'Menda dam olish oromgohi sertifikati bor. Uni unga yakshanba kuni nonushtada beraman.' },
        { speaker: 'Feliks', textDe: 'Toll! Sie wird sich sicher riesig darüber freuen.', textUz: 'Ajoyib! U bundan albatta behad xursand bo‘ladi.' },
        { speaker: 'Sara', textDe: 'Wir schreiben noch eine schöne Karte zusammen und unterschreiben beide.', textUz: 'Yana birgalikda chiroyli tabriknoma yozib, ikkalamiz qo‘l qo‘yamiz.' }
      ],
      usefulPhrases: [
        { german: 'einen Gutschein schenken', uzbek: 'sovg‘a vaucheri (sertifikat) bermoq' },
        { german: 'Ich gebe es ihm / ihr.', uzbek: 'Men uni unga beraman.' },
        { german: 'Alles Gute zum Jubiläum!', uzbek: 'Yubiley muborak bo‘lsin!' },
        { german: 'sich bedanken für (+ Akk)', uzbek: '...uchun minnatdorchilik bildirmoq' }
      ],
      culturalNoteUz: 'Germaniyada "Gutschein" (kitob do‘koni, konsert yoki SPA vaucheri) juda ommabop va hurmatli sovg‘a hisoblanadi, chunki inson o‘ziga yoqqan narsani o‘zi tanlay oladi.'
    },
    vocabulary: [
      {
        id: 'voc-m12-7',
        lessonId: 'les-35',
        levelCode: 'a2-1',
        german: 'das Geschenk',
        article: 'das',
        plural: 'die Geschenke',
        uzbek: 'sovg‘a',
        exampleDe: 'Das ist ein Geschenk für dich.',
        exampleUz: 'Bu sen uchun sovg‘a.',
        wordType: 'noun'
      },
      {
        id: 'voc-m12-8',
        lessonId: 'les-35',
        levelCode: 'a2-1',
        german: 'der Gutschein',
        article: 'der',
        plural: 'die Gutscheine',
        uzbek: 'vaucher, sovg‘a sertifikati',
        exampleDe: 'Ein Gutschein ist immer eine gute Idee.',
        exampleUz: 'Vaucher doimo yaxshi g‘oya.',
        wordType: 'noun'
      },
      {
        id: 'voc-m12-9',
        lessonId: 'les-35',
        levelCode: 'a2-1',
        german: 'die Überraschung',
        article: 'die',
        plural: 'die Überraschungen',
        uzbek: 'kutilmagan sovg‘a (syurpriz)',
        exampleDe: 'Das war eine tolle Überraschung!',
        exampleUz: 'Bu ajoyib syurpriz bo‘ldi!',
        wordType: 'noun'
      },
      {
        id: 'voc-m12-10',
        lessonId: 'les-35',
        levelCode: 'a2-1',
        german: 'aussuchen',
        article: null,
        plural: null,
        uzbek: 'tanlamoq, saralab olmoq',
        exampleDe: 'Du kannst dir etwas Schönes aussuchen.',
        exampleUz: 'Sen o‘zingga yoqqan chiroyli narsani tanlab olishing mumkin.',
        wordType: 'verb'
      },
      {
        id: 'voc-m12-11',
        lessonId: 'les-35',
        levelCode: 'a2-1',
        german: 'wunderschön',
        article: null,
        plural: null,
        uzbek: 'nihoyatda go‘zal, jozibali',
        exampleDe: 'Die Blumen sind wunderschön.',
        exampleUz: 'Gullar nihoyatda go‘zal.',
        wordType: 'adjective'
      },
      {
        id: 'voc-m12-12',
        lessonId: 'les-35',
        levelCode: 'a2-1',
        german: 'die Glückwunschkarte',
        article: 'die',
        plural: 'die Glückwunschkarten',
        uzbek: 'tabriknoma otkritkasi',
        exampleDe: 'Ich schreibe eine Glückwunschkarte.',
        exampleUz: 'Men tabriknoma yozmoqdaman.',
        wordType: 'noun'
      }
    ],
    grammar: [
      {
        id: 'gra-m12-2',
        lessonId: 'les-35',
        levelCode: 'a2-1',
        titleDe: 'Pronomen im Dativ und Akkusativ (Olmoshlar ketma-ketligi)',
        titleUz: 'Dativ va Akkusativ olmoshlari: "es mir / es ihr"',
        summaryUz: 'Agar gapda to‘ldiruvchilar olmosh bilan ifodalansa, AKKUSATIV olmoshi (ihn/sie/es) har doim DATIV olmoshidan (mir/dir/ihm/ihr/uns/ihnen) oldin keladi.',
        explanationUz: `Olmoshlar ketma-ketligi qoidalari:

1. **Agar ikkala to‘ldiruvchi ham OT bo‘lsa:**
- Dativ (shaxs) birinchi, Akkusativ (narsa) ikkinchi keladi:
  *Ich gebe **meinem Freund** (Dat) **das Buch** (Akk).*

2. **Agar narsa OLMOSH bo‘lsa (es, ihn, sie):**
- Akkusativ olmoshi doimo Dativdan OLDINGA o‘tadi!
  *Ich gebe **es** (Akk) **meinem Freund** (Dat).*
  *Ich gebe **es** (Akk) **ihm** (Dat).*

Qisqa formulalar:
- das Buch (es) → *Ich gebe **es ihm**.* (Men uni unga beraman.)
- den Schlüssel (ihn) → *Ich gebe **ihn dir**.* (Men uni senga beraman.)
- die Tasche (sie) → *Ich gebe **sie ihr**.* (Men uni unga beraman.)`,
        tables: [
          {
            title: 'Kishilik olmoshlari Dativ va Akkusativda',
            headers: ['Nominativ', 'Dativ (kimga?)', 'Akkusativ (kimni/nimani?)'],
            rows: [
              ['ich', 'mir', 'mich'],
              ['du', 'dir', 'dich'],
              ['er', 'ihm', 'ihn'],
              ['es', 'ihm', 'es'],
              ['sie', 'ihr', 'sie'],
              ['wir', 'uns', 'uns'],
              ['ihr', 'euch', 'euch'],
              ['sie / Sie', 'ihnen / Ihnen', 'sie / Sie']
            ]
          }
        ],
        examples: [
          {
            german: 'Klaus hat mir das Buch geschenkt. Er hat es mir geschenkt.',
            uzbek: 'Klaus menga kitobni sovg‘a qildi. U uni menga sovg‘a qildi.',
            highlight: 'es mir geschenkt'
          },
          {
            german: 'Kannst du mir bitte das Salz geben? — Ja, ich gebe es dir.',
            uzbek: 'Menga tuzni uzatib yubora olasanmi? — Ha, uni senga beraman.',
            highlight: 'gebe es dir'
          }
        ]
      }
    ],
    listening: [
      {
        id: 'lis-m12-2',
        lessonId: 'les-35',
        levelCode: 'a2-1',
        titleDe: 'Glückwünsche zur Hochzeit',
        titleUz: 'To‘y tabriklari',
        transcriptDe: 'Liebe Julia, lieber Marco! Wir gratulieren euch ganz herzlich zu eurer Hochzeit und wünschen euch für die gemeinsame Zukunft alles Gute, viel Liebe und Gesundheit! Hier ist ein kleines Geschenk von uns. Wir hoffen, es gefällt euch!',
        translationUz: 'Qadrli Yuliya, qadrli Marko! Sizlarni to‘yingiz bilan chin dildan qutlaymiz va birgalikdagi kelajagingiz uchun barcha ezgu tilaklarni, cheksiz mehr va mustahkam salomatlik tilaymiz! Mana bu bizdan kichik sovg‘a. Umid qilamizki, u sizlarga yoqadi!',
        dialogue: [
          { speaker: 'Gast', textDe: 'Wir gratulieren euch herzlich zur Hochzeit und wünschen euch alles Gute!', textUz: 'Sizlarni to‘y bilan qutlaymiz va ezgu tilaklar bildiramiz!' }
        ],
        questions: [
          {
            id: 'q-lis-m12-2',
            questionUz: 'Mehmonlar qaysi munosabat bilan tabriklashmoqda?',
            options: ['To‘y munosabati bilan (zur Hochzeit)', 'Yangi uy olgani uchun', 'Imtihondan o‘tgani uchun'],
            correctIndex: 0,
            explanationUz: 'Nutqda "Wir gratulieren euch ganz herzlich zu eurer Hochzeit" deyilgan.'
          }
        ]
      }
    ],
    reading: [
      {
        id: 'read-m12-2',
        lessonId: 'les-35',
        levelCode: 'a2-1',
        titleDe: 'Typische Glückwünsche auf Deutsch',
        titleUz: 'Nemis tilidagi odatiy tabriklar',
        textDe: 'Zu verschiedenen Anlässen gibt es in Deutschland feste Formulierungen:\n\n- Geburtstag: "Herzlichen Glückwunsch zum Geburtstag! Alles Gute für das neue Lebensjahr!"\n- Hochzeit: "Herzlichen Glückwunsch zur Vermählung! Wir wünschen euch eine glückliche Ehe!"\n- Neues Jahr: "Einen guten Rutsch ins neue Jahr und viel Erfolg!"\n- Gute Besserung: "Gute Besserung und werd schnell wieder gesund!"',
        textUz: 'Germaniyada turli voqealar uchun barqaror tabrik iboralari mavjud:\n\n- Tug‘ilgan kun: "Tug‘ilgan kun muborak! Yangi yoshingizda barcha ezguliklar yor bo‘lsin!"\n- To‘y: "Nikoh to‘yingiz bilan qutlaymiz! Sizga baxtli oilaviy hayot tilaymiz!"\n- Yangi yil: "Yangi yilga omon-eson qadam qo‘ying va katta muvaffaqiyatlar tilaymiz!"\n- Shifo tilash: "Tezroq sog‘ayib keting!"',
        questions: [
          {
            id: 'q-read-m12-2',
            questionUz: 'Kasal bo‘lgan kishiga qanday tilak bildiriladi?',
            options: ['Gute Besserung! (Tezroq sog‘ayib keting!)', 'Guten Rutsch!', 'Herzlichen Glückwunsch!'],
            correctIndex: 0,
            explanationUz: 'Kasal bo‘lgan kishiga nemis tilida "Gute Besserung!" deyiladi.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-m12-2',
      lessonId: 'les-35',
      levelCode: 'a2-1',
      taskDe: 'Schreiben Sie eine kurze Glückwunschkarte an eine Freundin zum Geburtstag.',
      taskUz: 'Dugonangizga tug‘ilgan kuni munosabati bilan tabriknoma yozing.',
      instructionUz: 'Tabrik iboralarini va sovg‘a haqidagi gapni qo‘shing.',
      hints: ['Liebe..., herzlichen Glückwunsch...', 'Ich wünsche dir...'],
      sampleSolutionDe: 'Liebe Lisa, herzlichen Glückwunsch zum Geburtstag! Ich wünsche dir von Herzen viel Gesundheit, Glück und Erfolg. Ich habe ein kleines Buch für dich gekauft und gebe es dir heute Abend. Alles Liebe, Malika',
      scaffold: {
        openingDe: 'Liebe Lisa,',
        closingDe: 'Alles Liebe, Malika',
        usefulPhrasesDe: ['Herzlichen Glückwunsch zum Geburtstag...', 'Ich gebe es dir heute Abend...']
      }
    },
    shadowing: [
      {
        id: 'sha-m12-2',
        lessonId: 'les-35',
        levelCode: 'a2-1',
        sentenceDe: 'Ich habe das Geschenk für dich gekauft und gebe es dir heute Abend auf der Party.',
        translationUz: 'Men sovg‘ani sen uchun sotib oldim va uni bugun kechqurun ziyofatda senga beraman.',
        phoneticHint: '[Ih ha-be das Ge-shenk fyur dih ge-kauft unt ge-be es dir hoy-te A-bent auf der Par-ti]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-m12-2-q1',
        type: 'word-order',
        questionUz: 'Olmoshlarni to‘g‘ri tartibda qo‘ying (es + mir!):',
        scrambledWords: ['Er', 'gibt', 'das', 'es', 'Buch:', 'mir'],
        correctAnswer: 'Er gibt es mir',
        explanationUz: 'Akkusativ olmoshi (es) Dativ olmoshidan (mir) oldin keladi: Er gibt es mir.',
        mistakeTipUz: '❌ "Er gibt mir es" noto‘g‘ri. To‘g‘risi: Er gibt es mir.'
      },
      {
        id: 'prac-m12-2-q2',
        type: 'fill-blank',
        questionUz: 'To‘g‘ri Dativ olmoshini tanlang: "Ich schenke _____ (sie - qiz bola) ein Buch."',
        blankSentence: 'Ich schenke [blank] ein Buch.',
        options: ['ihr', 'ihm', 'sie', 'ihnen'],
        correctAnswer: 'ihr',
        explanationUz: '"sie" (u - ayol) Dativda "ihr" bo‘ladi: Ich schenke ihr ein Buch.',
        mistakeTipUz: '❌ Ayol kishiga (sie) Dativda: ihr.'
      },
      {
        id: 'prac-m12-2-q3',
        type: 'multiple-choice',
        questionUz: '"Men uni (der Schlüssel - ihn) senga beraman" gapi qaysi?',
        options: [
          'Ich gebe ihn dir.',
          'Ich gebe dir ihn.',
          'Ich gebe es dir.',
          'Ich gebe ihn dich.'
        ],
        correctAnswer: 'Ich gebe ihn dir.',
        explanationUz: 'Akkusativ olmoshi (ihn) Dativdan (dir) oldin turadi: Ich gebe ihn dir.',
        mistakeTipUz: '❌ Akkusativ olmoshi Dativdan oldin: "Ich gebe ihn dir".'
      }
    ]
  },

  // ==========================================
  // LEKTION 36: Traditionen und Feste in DACH
  // ==========================================
  {
    id: 'les-36',
    moduleId: 'mod-a2-1-4',
    levelCode: 'a2-1',
    titleDe: 'Lektion 36: Traditionen und Feste in DACH',
    titleUz: '36-Dars: Germaniya, Avstriya va Shveytsariyada milliy an‘analar (Bog‘lovchi olmoshli ergash gaplar - Relativsätze)',
    descriptionUz: 'Rojdestvo (Weihnachten), Pasxa (Ostern), Oktoberfest va milliy urf-odatlar hamda Nominativ va Akkusativdagi bog‘lovchi ergash gaplar (Relativsätze).',
    orderIndex: 36,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'DACH mamlakatlari (Germaniya, Avstriya, Shveytsariya) madaniy bayramlarini bilish',
      'Bog‘lovchi olmoshlar (der, die, das, den) bilan Relativsatz tuzish',
      'Insonlar va buyumlarga qo‘shimcha tavsif bera olish'
    ],
    warmUp: {
      situationUz: 'Germaniyada dekabr oyida mashhur Rojdestvo yarmarkasiga (Weihnachtsmarkt) bordingiz va do‘stingizga u yerdagi qiziq an‘analar haqida aytib beryapsiz.',
      curiosityQuestionUz: '"Bu har yili millionlab odamlar tashrif buyuradigan bayram" nemischa qanday ifodalanadi?',
      miniDialogue: [
        { speaker: 'Tourist', textDe: 'Was ist der Weihnachtsmarkt genau?', textUz: 'Rojdestvo bozori nima o‘zi?' },
        { speaker: 'Berliner', textDe: 'Das ist eine Tradition, die seit Jahrhunderten existiert.', textUz: 'Bu asrlar davomida mavjud bo‘lgan an‘anadir.' }
      ],
      hintUz: 'Relativsatz otga aniqlik kiritadi va uning fe‘li har doim gap oxirida turadi!'
    },
    contextDialogue: {
      titleDe: 'Auf dem Weihnachtsmarkt in Nürnberg',
      titleUz: 'Nyurnberg Rojdestvo bozorida',
      situationUz: 'Nodir va nemis do‘sti Maksimilian Germaniyadagi eng qadimiy Rojdestvo bozorida aylanmoqda.',
      lines: [
        { speaker: 'Maksimilian', textDe: 'Willkommen auf dem Nürnberger Christkindlesmarkt, Nodir! Das ist einer der ältesten Märkte, die es in Deutschland gibt.', textUz: 'Nyurnberg Rojdestvo bozoriga xush kelibsiz, Nodir! Bu Germaniyada mavjud bo‘lgan eng qadimgi bozorlardan biridir.' },
        { speaker: 'Nodir', textDe: 'Die Lichter und der Duft nach gebrannten Mandeln sind unglaublich! Was trinken die Leute da drüben?', textUz: 'Chiroqlar va qovurilgan bodom isi aql bovar qilmas darajada! U yoqdagi odamlar nima ichishyapti?' },
        { speaker: 'Maksimilian', textDe: 'Das ist Kinderpunsch oder Glühwein. Das ist ein heißes Getränk, das im Winter sehr beliebt ist.', textUz: 'Bu bolalar punshi yoki glyuvayn. Bu qishda juda mashhur bo‘lgan issiq ichimlik.' },
        { speaker: 'Nodir', textDe: 'Und diese kleinen Figuren aus Holz? Wer hat die gemacht?', textUz: 'Va mana bu yog‘ochdan yasalgan kichik haykalchalar-chi? Ularni kim yasagan?' },
        { speaker: 'Maksimilian', textDe: 'Das sind traditionelle Handwerker, die aus dem Erzgebirge kommen.', textUz: 'Bular Erzgebirge tog‘laridan kelgan an‘anaviy hunarmandlardir.' },
        { speaker: 'Nodir', textDe: 'Ich kaufe eine Figur für meine Familie. Das ist ein Souvenir, das sie sicher lieben werden!', textUz: 'Oilam uchun bitta haykalcha olaman. Bu ular albatta yaxshi ko‘radigan esdalik sovg‘asidir!' }
      ],
      usefulPhrases: [
        { german: 'der Weihnachtsmarkt', uzbek: 'Rojdestvo yarmarkasi' },
        { german: 'eine Tradition pflegen', uzbek: 'an‘anani asrab-avaylamoq' },
        { german: 'das Souvenir, das...', uzbek: '...bo‘lgan esdalik sovg‘asi' },
        { german: 'der Mann, der...', uzbek: '...bo‘lgan kishi' }
      ],
      culturalNoteUz: 'Germaniyada 24-dekabr (Heiligabend) oila davrasida archa atrofida sovg‘alar ulashish (Bescherung) bilan nishonlanadi. 25 va 26-dekabr esa rasmiy dam olish kunlaridir.'
    },
    vocabulary: [
      {
        id: 'voc-m12-13',
        lessonId: 'les-36',
        levelCode: 'a2-1',
        german: 'der Brauch',
        article: 'der',
        plural: 'die Bräuche',
        uzbek: 'urf-odat, an‘ana',
        exampleDe: 'Das ist ein alter deutscher Brauch.',
        exampleUz: 'Bu qadimiy nemis urf-odati.',
        wordType: 'noun'
      },
      {
        id: 'voc-m12-14',
        lessonId: 'les-36',
        levelCode: 'a2-1',
        german: 'die Tradition',
        article: 'die',
        plural: 'die Traditionen',
        uzbek: 'an‘ana',
        exampleDe: 'Wir pflegen diese Tradition seit vielen Jahren.',
        exampleUz: 'Biz bu an‘anani ko‘p yillardan beri davom ettiramiz.',
        wordType: 'noun'
      },
      {
        id: 'voc-m12-15',
        lessonId: 'les-36',
        levelCode: 'a2-1',
        german: 'der Feiertag',
        article: 'der',
        plural: 'die Feiertage',
        uzbek: 'bayram kuni (dam olish kuni)',
        exampleDe: 'Morgen ist ein gesetzlicher Feiertag.',
        exampleUz: 'Ertaga rasmiy bayram kuni.',
        wordType: 'noun'
      },
      {
        id: 'voc-m12-16',
        lessonId: 'les-36',
        levelCode: 'a2-1',
        german: 'schmücken',
        article: null,
        plural: null,
        uzbek: 'bezatmoq',
        exampleDe: 'Wir schmücken den Tannenbaum.',
        exampleUz: 'Biz archani bezatyapmiz.',
        wordType: 'verb'
      },
      {
        id: 'voc-m12-17',
        lessonId: 'les-36',
        levelCode: 'a2-1',
        german: 'backen',
        article: null,
        plural: null,
        uzbek: 'pishirmoq (pechene, non)',
        exampleDe: 'Im Dezember backen wir Plätzchen.',
        exampleUz: 'Dekabrda biz pechenelar pishiramiz.',
        wordType: 'verb'
      },
      {
        id: 'voc-m12-18',
        lessonId: 'les-36',
        levelCode: 'a2-1',
        german: 'gemütlich',
        article: null,
        plural: null,
        uzbek: 'shinam, rohatbaxsh',
        exampleDe: 'Das Wohnzimmer ist sehr gemütlich.',
        exampleUz: 'Mehmonxona juda shinam.',
        wordType: 'adjective'
      }
    ],
    grammar: [
      {
        id: 'gra-m12-3',
        lessonId: 'les-36',
        levelCode: 'a2-1',
        titleDe: 'Relativsätze im Nominativ und Akkusativ (Bog‘lovchi ergash gaplar)',
        titleUz: 'Bog‘lovchi olmoshlar: der, die, das, den (Qaysiki / -gan)',
        summaryUz: 'Relativsatz oldingi otga izoh beradi ("qaysiki..."). Bog‘lovchi olmosh otning rodiga mos keladi, fe‘l esa gap oxirida turadi.',
        explanationUz: `Relativsatz (Aniqlovchi ergash gap) oldinda kelgan ot haqida qo‘shimcha ma‘lumot beradi:

1. **Nominativda bog‘lovchi olmoshlar:**
- Maskulin: *der Mann, **der** Deutsch lernt* (Nemischa o‘rganayotgan kishi)
- Neutrum: *das Kind, **das** dort spielt* (U yerda o‘ynayotgan bola)
- Feminin: *die Frau, **die** hier wohnt* (Bu yerda yashovchi ayol)
- Plural: *die Freunde, **die** mich besuchen* (Meni ziyorat qiluvchi do‘stlar)

2. **Akkusativda bog‘lovchi olmoshlar:**
- Maskulin: *der Film, **den** ich gestern gesehen habe* (Kecha men ko‘rgan film)
- Neutrum: *das Buch, **das** ich lese* (Men o‘qiyotgan kitob)
- Feminin: *die Stadt, **die** wir lieben* (Biz sevadigan shahar)
- Plural: *die Geschenke, **die** sie gekauft hat* (U sotib olgan sovg‘alar)

Eslab qoling: **Ergash gapda fe‘l doimo eng oxirida turadi!**`,
        tables: [
          {
            title: 'Relativpronomen (Bog‘lovchi olmoshlar) jadvali',
            headers: ['Kelishik', 'Maskulin', 'Neutrum', 'Feminin', 'Plural'],
            rows: [
              ['Nominativ', 'der', 'das', 'die', 'die'],
              ['Akkusativ', 'den', 'das', 'die', 'die']
            ]
          }
        ],
        examples: [
          {
            german: 'Das ist der Kuchen, den ich selbst gebacken habe.',
            uzbek: 'Bu men o‘zim pishirgan tort.',
            highlight: 'den ich selbst gebacken habe'
          },
          {
            german: 'Kennen Sie die Frau, die dort drüben steht?',
            uzbek: 'U yerda turgan ayolni taniysizmi?',
            highlight: 'die dort drüben steht'
          }
        ]
      }
    ],
    listening: [
      {
        id: 'lis-m12-3',
        lessonId: 'les-36',
        levelCode: 'a2-1',
        titleDe: 'Feste im Jahreskreis in Deutschland',
        titleUz: 'Germaniyada yil fasllari bayramlari',
        transcriptDe: 'In Deutschland gibt es das ganze Jahr über Feste. Im Frühling feiern die Menschen Ostern, wo die Kinder Schokoladeneier im Garten suchen. Im Herbst gibt es das weltberühmte Oktoberfest in München, das Millionen Touristen anzieht. Und der Dezember ist die Zeit der Weihnachtsmärkte, die für eine ganz besondere Gemütlichkeit sorgen.',
        translationUz: 'Germaniyada yil davomida bayramlar o‘tkaziladi. Bahorda odamlar Pasxa bayramini nishonlaydilar, unda bolalar bog‘da shokoladli tuxumlarni qidiradilar. Kuzda Myunxenda millionlab sayyohlarni jalb qiluvchi dunyoga mashhur Oktoberfest bo‘lib o‘tadi. Dekabr esa o‘zgacha shinamlik bag‘ishlovchi Rojdestvo yarmarkalari vaqtidir.',
        dialogue: [
          { speaker: 'Moderator', textDe: 'Im Herbst gibt es das Oktoberfest, das Millionen Touristen anzieht.', textUz: 'Kuzda millionlab sayyohlarni jalb qiluvchi Oktoberfest bo‘lib o‘tadi.' }
        ],
        questions: [
          {
            id: 'q-lis-m12-3',
            questionUz: 'Bolalar bahorda Pasxada bog‘da nima qidiradilar?',
            options: ['Shokoladli tuxumlar (Schokoladeneier)', 'Yog‘och o‘yinchoqlar', 'Kitoblar'],
            correctIndex: 0,
            explanationUz: 'Matnda "wo die Kinder Schokoladeneier im Garten suchen" deb aytilgan.'
          }
        ]
      }
    ],
    reading: [
      {
        id: 'read-m12-3',
        lessonId: 'les-36',
        levelCode: 'a2-1',
        titleDe: 'Das Münchner Oktoberfest',
        titleUz: 'Myunxendagi Oktoberfest',
        textDe: 'Das Oktoberfest in München ist das größte Volksfest der Welt. Es beginnt jedes Jahr Mitte September und dauert rund zwei Wochen. Über sechs Millionen Besucher aus aller Welt kommen nach Bayern. Sie tragen traditionelle Trachten wie Lederhosen und Dirndl, essen gebratene Hähnchen und Brezeln und hören traditionelle Blasmusik in den Festzelten.',
        textUz: 'Myunxendagi Oktoberfest dunyodagi eng katta xalq saylidir. U har yili sentabr o‘rtalarida boshlanadi va qariyb ikki hafta davom etadi. Butun dunyodan olti milliondan ortiq mehmon Bavariyaga keladi. Ular Lederhosen va Dirndl kabi milliy liboslarni kiyadilar, qovurilgan tovuq va pretzellar yeydilar hamda chodirlarda milliy puflama musiqani tinglaydilar.',
        questions: [
          {
            id: 'q-read-m12-3',
            questionUz: 'Oktoberfestga har yili qancha mehmon tashrif buyuradi?',
            options: ['Olti milliondan ortiq (Über sechs Millionen)', 'Bir million', 'Faqat Myunxen aholisi'],
            correctIndex: 0,
            explanationUz: 'Matnda "Über sechs Millionen Besucher aus aller Welt" deb yozilgan.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-m12-3',
      lessonId: 'les-36',
      levelCode: 'a2-1',
      taskDe: 'Beschreiben Sie ein Fest oder eine Tradition mit einem Relativsatz.',
      taskUz: 'Biror bayram yoki an‘anani bog‘lovchi ergash gap (Relativsatz) yordamida tasvirlang.',
      instructionUz: '"der...", "die...", "das..." yoki "den..." bog‘lovchi olmoshini ishlating.',
      hints: ['Navruz ist ein Fest, das...', 'Das ist ein Feiertag, den...'],
      sampleSolutionDe: 'Nawruz ist ein traditionelles Frühlingsfest, das wir in Usbekistan jedes Jahr im März feiern. Es ist ein Fest, das alle Menschen zusammenbringt.',
      scaffold: {
        openingDe: 'Ein besonderes Fest:',
        closingDe: 'Das ist eine wichtige Tradition.',
        usefulPhrasesDe: ['Das ist ein Fest, das...', 'Das sind Menschen, die...']
      }
    },
    shadowing: [
      {
        id: 'sha-m12-3',
        lessonId: 'les-36',
        levelCode: 'a2-1',
        sentenceDe: 'Weihnachten ist ein traditionelles Fest, das man in Deutschland gemütlich mit der Familie feiert.',
        translationUz: 'Rojdestvo — Germaniyada oila davrasida shinam nishonlanadigan an‘anaviy bayramdir.',
        phoneticHint: '[Vay-nah-ten ist ayn tra-di-tsyo-nel-les Fest, das man in Doytsh-land ge-myut-lih mit der Fa-mi-li-e fay-ert]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-m12-3-q1',
        type: 'fill-blank',
        questionUz: 'To‘g‘ri bog‘lovchi olmoshni qo‘ying (Akkusativ Maskulin): "Das ist der Film, _____ ich gestern gesehen habe."',
        blankSentence: 'Das ist der Film, [blank] ich gestern gesehen habe.',
        options: ['den', 'der', 'das', 'dem'],
        correctAnswer: 'den',
        explanationUz: 'der Film (Akkusativda ko‘rganim) "den" bo‘ladi: den ich gestern gesehen habe.',
        mistakeTipUz: '❌ Maskulin Akkusativda "den" bo‘ladi: den ich gesehen habe.'
      },
      {
        id: 'prac-m12-3-q2',
        type: 'multiple-choice',
        questionUz: 'Qaysi Relativsatz to‘g‘ri tuzilgan?',
        options: [
          'Das ist die Frau, die neben mir wohnt.',
          'Das ist die Frau, die wohnt neben mir.',
          'Das ist die Frau, der neben mir wohnt.',
          'Das ist die Frau, das neben mir wohnt.'
        ],
        correctAnswer: 'Das ist die Frau, die neben mir wohnt.',
        explanationUz: 'die Frau (Feminin) → die, fe‘l (wohnt) eng oxirida turadi.',
        mistakeTipUz: '❌ Relativsatzda fe‘l oxirida turadi: "die neben mir wohnt".'
      },
      {
        id: 'prac-m12-3-q3',
        type: 'word-order',
        questionUz: 'Relativsatzni to‘g‘ri tartibda tuzing:',
        scrambledWords: ['Das', 'Buch,', 'ist', 'das', 'ich', 'das', 'lese.'],
        correctAnswer: 'Das ist das Buch, das ich lese.',
        explanationUz: 'Das ist das Buch, (bosh gap) + das ich lese (fe‘l oxirida).',
        mistakeTipUz: '❌ Ergash gapda tuslangan fe‘l eng oxirida: "das ich lese".'
      }
    ]
  }
];
