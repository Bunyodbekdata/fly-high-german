import { Lesson } from '../../types/database';

export const MODULE_21_B12_LESSONS: Lesson[] = [
  // ==========================================
  // LEKTION 61: Nachhaltiges Reisen & Ökotourismus
  // ==========================================
  {
    id: 'les-61',
    moduleId: 'mod-b1-2-1',
    levelCode: 'b1-2',
    titleDe: 'Nachhaltiges Reisen & Ökotourismus',
    titleUz: 'Barqaror sayohat, ekoturizm va tabiat',
    descriptionUz: 'Ekoturizm, atrof-muhitga zararsiz sayohat, Partizip II als Adjektiv (sifat vazifasidagi Partizip II: das gebuchte Hotel, die reservierten Plätze).',
    orderIndex: 61,
    estimatedMinutes: 45,
    isPublished: true,
    objectivesUz: [
      'Ekologik sof sayohat va tabiatni muhofaza qilish haqida bahslashish',
      'Partizip II (tugallangan harakat sifati) yasalishi va turlanishini egallash',
      'Mehmonxona, poyezd va ekskursiyalarni tasvirlash'
    ],
    warmUp: {
      situationUz: 'Yozgi ta‘tilga chipta va mehmonxona tanlayapsiz. Samolyot o‘rniga tezyurar poyezdda borib, tabiatga zarar yetkazmaslikka qaror qildingiz.',
      curiosityQuestionUz: '"Band qilingan mehmonxona" yoki "Yopilgan yo‘llar" degan jumlalarda fe‘ldan sifat qanday yasaladi?',
      miniDialogue: [
        { speaker: 'Matthias', textDe: 'Hast du das gebuchte Hotelzimmer schon bezahlt?', textUz: 'Band qilingan mehmonxona xonasiga to‘lov qildingmi?' },
        { speaker: 'Clara', textDe: 'Ja, und wir fahren mit der Bahn, um den CO2-Ausstoß zu reduzieren.', textUz: 'Ha, va biz karbonat angidrid chiqindisini kamaytirish uchun poyezdda boramiz.' }
      ],
      hintUz: 'Partizip II (bajarib bo‘lingan harakat) ot oldida sifat bo‘lib keladi va sifat qo‘shimchalarini oladi.'
    },
    contextDialogue: {
      titleDe: 'Urlaub mit grünem Gewissen',
      titleUz: 'Tabiat oldida vijdon bilan ta‘til',
      situationUz: 'Ikki sayohatchi dam olish maskanini ekologik mezonlarga ko‘ra qanday tanlaganlarini muhokama qilmoqda.',
      lines: [
        { speaker: 'Matthias', textDe: 'Clara, wohin geht eure diesjährige Urlaubsreise?', textUz: 'Klara, bu yilgi ta‘til sayohatingiz qayerga bo‘ladi?' },
        { speaker: 'Clara', textDe: 'Wir haben uns für eine Wanderreise in den Schweizer Alpen entschieden. Die gebuchte Unterkunft bezieht ihren Strom zu 100 Prozent aus Solarenergie.', textUz: 'Biz Shveysariya Alplarida piyoda sayohatni tanladik. Band qilingan mehmonxona o‘z elektr quvvatini 100 foiz quyosh energiyasidan oladi.' },
        { speaker: 'Matthias', textDe: 'Klingt großartig! Und wie reist ihr an?', textUz: 'Ajoyib eshitiladi! Qanday yetib borasizlar?' },
        { speaker: 'Clara', textDe: 'Mit dem Nachtzug. Statt der anstrengenden Flüge genießen wir die entspannte Fahrt durch die Landschaften.', textUz: 'Tungi poyezdda. Charchatadigan parvozlar o‘rniga manzaralar bo‘ylab xotirjam safardan zavqlanamiz.' }
      ],
      usefulPhrases: [
        { german: 'der Ökotourismus', uzbek: 'ekoturizm' },
        { german: 'der CO2-Ausstoß', uzbek: 'karbonat angidrid chiqindisi' },
        { german: 'die gebuchte Unterkunft', uzbek: 'band qilingan yashash joyi' },
        { german: 'ein grünes Gewissen haben', uzbek: 'tabiat oldida vijdoni toza bo‘lmoq' }
      ],
      culturalNoteUz: 'Germaniyada "Sanfter Tourismus" (mayin turizm) keng tarqalgan bo‘lib, ko‘plab nemislar qisqa masofalarga samolyot o‘rniga "Deutsche Bahn" poyezdlaridan foydalanishadi.'
    },
    vocabulary: [
      {
        id: 'voc-b1-13-1',
        lessonId: 'les-61',
        levelCode: 'b1-2',
        german: 'der Ökotourismus',
        article: 'der',
        uzbek: 'ekoturizm',
        exampleDe: 'Ökotourismus schützt die Natur und unterstützt Einheimische.',
        exampleUz: 'Ekoturizm tabiatni asraydi va mahalliy aholini qo‘llab-quvvatlaydi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-13-2',
        lessonId: 'les-61',
        levelCode: 'b1-2',
        german: 'die Unterkunft',
        article: 'die',
        plural: 'die Unterkünfte',
        uzbek: 'turar-joy, mehmonxona',
        exampleDe: 'Wir suchen eine gemütliche Unterkunft auf dem Land.',
        exampleUz: 'Biz qishloqda shinam turar-joy qidirmoqdamiz.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-13-3',
        lessonId: 'les-61',
        levelCode: 'b1-2',
        german: 'vermeiden',
        article: null,
        plural: null,
        uzbek: 'oldini olmoq, saqlanmoq',
        exampleDe: 'Man sollte unnötigen Plastikmüll vermeiden.',
        exampleUz: 'Keraksiz plastik chiqindilaridan saqlanish lozim.',
        wordType: 'verb'
      },
      {
        id: 'voc-b1-13-4',
        lessonId: 'les-61',
        levelCode: 'b1-2',
        german: 'die Umweltbelastung',
        article: 'die',
        plural: 'die Umweltbelastungen',
        uzbek: 'atrof-muhitga yetkazilgan zarar / yuk',
        exampleDe: 'Flugreisen verursachen eine hohe Umweltbelastung.',
        exampleUz: 'Aviaparvozlar atrof-muhitga katta yuk bo‘ladi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-13-5',
        lessonId: 'les-61',
        levelCode: 'b1-2',
        german: 'nachhaltig',
        article: null,
        plural: null,
        uzbek: 'barqaror, tabiatga mos',
        exampleDe: 'Nachhaltiges Handeln sichert die Zukunft unserer Kinder.',
        exampleUz: 'Barqaror harakat bolalarimiz kelajagini ta‘minlaydi.',
        wordType: 'adjective'
      },
      {
        id: 'voc-b1-13-6',
        lessonId: 'les-61',
        levelCode: 'b1-2',
        german: 'das Reiseziel',
        article: 'das',
        plural: 'die Reiseziele',
        uzbek: 'sayohat manzili',
        exampleDe: 'Italien ist ein sehr beliebtes Reiseziel.',
        exampleUz: 'Italiya juda mashhur sayohat manzilidir.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-13-7',
        lessonId: 'les-61',
        levelCode: 'b1-2',
        german: 'entschleunigen',
        article: null,
        plural: null,
        uzbek: 'shoshilmasdan sokin dam olmoq',
        exampleDe: 'In den Bergen kann man herrlich entschleunigen.',
        exampleUz: 'Tog‘larda juda sokin va xotirjam dam olish mumkin.',
        wordType: 'verb'
      },
      {
        id: 'voc-b1-13-8',
        lessonId: 'les-61',
        levelCode: 'b1-2',
        german: 'begegnen',
        article: null,
        plural: null,
        uzbek: 'uchratmoq, duch kelmoq (+ Dativ)',
        exampleDe: 'Auf Reisen begegnet man vielen spannenden Menschen.',
        exampleUz: 'Sayohatda ko‘plab qiziqarli insonlarni uchratasan.',
        wordType: 'verb'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'Quyidagi sifatlarning yasalishiga qarang. Ular qaysi fe‘llardan olingan va harakat tugallanganmi?',
      discoveryExamples: [
        {
          german: 'Das gebuchte Zimmer ist bezahlt.',
          highlight: 'Das gebuchte Zimmer',
          uzbek: 'Band qilingan xona to‘langan (buchen -> gebucht + e).'
        },
        {
          german: 'Die geschlossene Tür konnte nicht geöffnet werden.',
          highlight: 'Die geschlossene Tür',
          uzbek: 'Yopilgan eshik ochilmadi (schließen -> geschlossen + e).'
        }
      ],
      patternExplanationUz: 'Partizip II tugallangan harakat natijasini bildiruvchi sifat vazifasida keladi (masalan: gebucht -> gebuchtes Hotel). U oddiy sifatlar kabi artikl va kelishikka mos sifat qo‘shimchasini oladi.',
      ruleFormulaUz: 'Partizip II (ge-...-t / ge-...-en) + Sifat qo‘shimchasi + Ot'
    },
    grammar: [
      {
        id: 'gra-61',
        lessonId: 'les-61',
        levelCode: 'b1-2',
        titleDe: 'Das Partizip II als Adjektiv',
        titleUz: 'Sifat vazifasidagi Partizip II (Tugallangan sifatdosh)',
        summaryUz: 'Bajarib bo‘lingan harakat natijasi: buchen -> das gebuchte Hotel (band qilingan mehmonxona).',
        explanationUz: `Partizip II ot oldida aniqlovchi-sifat bo‘lib kelganda passiv yoki tugallangan ma‘noni ifodalaydi.

1. **Yasalishi:**
   Fe‘lning Partizip II shakli olinadi va odatiy sifat qo‘shimchasi qo‘shiladi:
   - *reparieren* -> repariert -> *das **reparierte** Auto* (ta‘mirlangan mashina)
   - *öffnen* -> geöffnet -> *die **geöffnete** Tür* (ochilgan eshik)
   - *schreiben* -> geschrieben -> *der **geschriebene** Brief* (yozilgan xat)

2. **Partizip I va Partizip II farqi:**
   - **Partizip I** (davom etayotgan harakat): *das **kochende** Wasser* (qaynayotgan suv)
   - **Partizip II** (tugallangan natija): *das **gekochte** Ei* (pishirilgan tuxum)`,
        tables: [
          {
            title: 'Partizip II ning turlanishi (Nominativ)',
            headers: ['Jins', 'Partizip II sifat', 'Misol'],
            rows: [
              ['Maskulin', 'der / ein gebrauchte(r) Wagen', 'ishlatilgan mashina'],
              ['Feminin', 'die / eine bezahlte Rechnung', 'to‘langan hisob-kitob'],
              ['Neutrum', 'das / ein gebuchtes Ticket', 'sotib olingan chipta'],
              ['Plural', 'die reservierten Plätze', 'band qilingan o‘rinlar']
            ]
          }
        ],
        examples: [
          {
            german: 'Alle reservierten Plätze im Speisewagen waren besetzt.',
            uzbek: 'Vagon-restorandagi barcha band qilingan joylar band edi.',
            highlight: 'reservierten Plätze'
          },
          {
            german: 'Wir tranken frisch gepressten Orangensaft.',
            uzbek: 'Biz yangi siqilgan apelsin sharbati ichdik.',
            highlight: 'frisch gepressten'
          }
        ],
        commonMistakes: [
          {
            incorrect: 'Das buchen Zimmer (xato).',
            correct: 'Das gebuchte Zimmer.',
            explanationUz: 'Tugallangan harakat sifatdoshi uchun Partizip II (gebucht) qo‘llanadi.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Mit dem Nachtzug durch Europa',
      titleUz: 'Tungi poyezd bilan Yevropa bo‘ylab',
      situationUz: 'Sayohatchi bloger tungi poyezdda sayohat qilish afzalliklari haqida hikoya qilmoqda.',
      audioTranscriptDe: 'Bloger: Immer mehr Reisende verzichten auf kurze Flüge und wählen den Nachtzug. Ich habe die neu eröffnete Strecke von Berlin nach Paris getestet. Das reservierte Schlafwagenabteil war erstaunlich komfortabel. Während man schläft, bewegt sich der Zug umweltfreundlich ans Ziel. Am Morgen wacht man mitten in der erwachten Stadt auf, ohne lange Wartezeiten am Flughafen. Das ist gelebter Klimaschutz mit hohem Komfort!',
      translationUz: 'Bloger: Tobora ko‘proq sayohatchilar qisqa parvozlardan voz kechib, tungi poyezdni tanlamoqdalar. Men yaqinda ochilgan Berlin-Parij yo‘nalishini sinab ko‘rdim. Band qilingan yotoq vagon kupesi hayratlanarli darajada qulay edi. Inson uxlayotgan paytda, poyezd ekologik toza tarzda manzil sari harakatlanadi. Ertalab esa aeroportdagi uzoq kutishlarsiz, to‘g‘ridan-to‘g‘ri uyg‘ongan shahar markazida ko‘z ochasiz. Bu yuqori qulaylikka ega real iqlim muhofazasidir!',
      stage1Global: {
        instructionUz: '1-Bosqich: Bloger qaysi yo‘nalishni sinab ko‘rdi?',
        questionUz: 'Bloger qaysi yangi ochilgan yo‘nalish haqida gapirdi?',
        options: ['Rimdan Madridga', 'Berlindan Parijga', 'Myunxendan Venaga'],
        correctIndex: 1,
        explanationUz: '"...die neu eröffnete Strecke von Berlin nach Paris getestet".'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Partizip II sifatlarini aniqlang.',
        questions: [
          {
            id: 'l61-q1',
            questionUz: 'Tungi poyezdning qanday afzalligi tilga olindi?',
            options: ['Chiptaning tekinligi', 'Aeroportdagi kutishlarsiz to‘g‘ridan-to‘g‘ri shahar markazida uyg‘onish', 'Internetning bepul ekanligi'],
            correctIndex: 1,
            explanationUz: '"Am Morgen wacht man mitten in der erwachten Stadt auf, ohne lange Wartezeiten am Flughafen".'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Bloger', textDe: 'Das reservierte Schlafwagenabteil war sehr komfortabel.', textUz: 'Band qilingan kupe juda qulay edi.' },
          { speaker: 'Hörer', textDe: 'Eine tolle Alternative zum Fliegen!', textUz: 'Uchishga ajoyib alternativa!' }
        ],
        keyVocabulary: [
          { german: 'das Schlafwagenabteil', uzbek: 'poyezddagi yotoq kupe' },
          { german: 'neu eröffnet', uzbek: 'yangi ochilgan' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-61',
        lessonId: 'les-61',
        levelCode: 'b1-2',
        titleDe: 'Ökotourismus: Hoffnung für bedrohte Regionen',
        titleUz: 'Ekoturizm: Xavf ostidagi hududlar uchun najot',
        textDe: 'Der Massentourismus hinterlässt weltweit zerstörte Naturlandschaften und überfüllte Städte. Als Gegenmodell setzt der Ökotourismus auf Respekt vor Umwelt und Kultur. In geschützten Nationalparks finanzieren Besucher durch Eintrittsgelder wichtige Artenschutzprojekte. Reisende übernachten in familiengeführten Gasthöfen und essen regional erzeugte Produkte. So bleibt das Geld direkt vor Ort, während die unberührte Natur für kommende Generationen bewahrt wird.',
        translationUz: 'Ommaviy turizm butun dunyo bo‘ylab vayron bo‘lgan tabiat manzaralari va to‘lib-toshgan shaharlarni ortda qoldirmoqda. Unga muqobil model sifatida ekoturizm atrof-muhit va madaniyatga hurmatni asos qilib oladi. Muhofaza etiladigan milliy bog‘larda tashrif buyuruvchilar kirish to‘lovlari orqali turlarni asrash bo‘yicha muhim loyihalarni moliyalashtiradilar. Sayohatchilar oilaviy boshqariladigan mehmonxonalarda tunab, mahalliy ishlab chiqarilgan mahsulotlarni iste‘mol qiladilar. Shunday qilib, pul to‘g‘ridan-to‘g‘ri hududning o‘zida qoladi, bokira tabiat esa kelgusi avlodlar uchun saqlab qolinadi.',
        vocabularyHints: [
          { german: 'der Massentourismus', uzbek: 'ommaviy turizm' },
          { german: 'unberührt (Natur)', uzbek: 'inson oyog‘i tegmagan, bokira' }
        ],
        questions: [
          {
            id: 'q-rea-61-1',
            questionUz: 'Ekoturizmda sayyohlarning pullari qanday foyda keltiradi?',
            options: ['Faqat katta xalqaro mehmonxonalarga ketadi', 'To‘g‘ridan-to‘g‘ri mahalliy hududda qolib, tabiatni saqlashga xizmat qiladi', 'Yangi aeroportlar qurishga sarflanadi'],
            correctIndex: 1,
            explanationUz: 'Matnda "So bleibt das Geld direkt vor Ort, während die unberührte Natur... bewahrt wird" deb ta‘kidlangan.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-61',
      lessonId: 'les-61',
      levelCode: 'b1-2',
      taskDe: 'Beschreiben Sie Ihre Traumreise mit Partizip II als Adjektiv.',
      taskUz: 'Orzuingizdagi sayohatni Partizip II sifatlari (das gebuchte Hotel, die geplanten Routen) yordamida yozing.',
      instructionUz: 'Qayerga borishingizni va sayohatingiz nima uchun tabiatga mos ekanini tushuntiring.',
      hints: ['Das gebuchte Hotel liegt...', 'Die geplante Reise führt nach...'],
      sampleSolutionDe: 'Meine Traumreise ist ein Wanderurlaub in den Bergen. Das gebuchte Holzhaus wird komplett mit Sonnenenergie versorgt. Auf den geplanten Bergtouren genießen wir die frische Luft und essen regional erzeugte Spezialitäten.',
      scaffold: {
        openingDe: 'Meine nachhaltige Traumreise:',
        closingDe: 'So reist man mit Verantwortung.',
        usefulPhrasesDe: ['Das gebuchte...', 'Die geplanten...', 'Regional hergestellte Produkte...']
      }
    },
    shadowing: [
      {
        id: 'sha-61',
        lessonId: 'les-61',
        levelCode: 'b1-2',
        sentenceDe: 'Die gebuchte Reise mit dem modernen Nachtzug bot höchsten Komfort bei minimaler Umweltbelastung.',
        translationUz: 'Zamonaviy tungi poyezddagi band qilingan safar minimal ekologik zarar bilan eng yuqori qulaylikni taqdim etdi.',
        phoneticHint: '[Di ge-buh-te Ray-ze mit dem mo-der-nen Naht-tsuk bot hëh-sten Kom-for bay mi-ni-ma-ler Um-velt-be-las-tung]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-61-q1',
        type: 'fill-blank',
        questionUz: '"buchen" fe‘lining Partizip II sifat shaklini qo‘ying: "Das _____ (buchen) Ticket liegt auf dem Tisch."',
        blankSentence: 'Das [blank] Ticket liegt auf dem Tisch.',
        options: ['gebuchte', 'gebuchtes', 'buchende', 'gebucht'],
        correctAnswer: 'gebuchte',
        explanationUz: 'Aniq artikldan keyin neytral Nominativ: das gebuchte Ticket.',
        mistakeTipUz: '❌ das Ticket uchun aniq artikldan keyin: das gebuchte Ticket.'
      },
      {
        id: 'prac-61-q2',
        type: 'multiple-choice',
        questionUz: '"Die reparierte Uhr funktioniert wieder einwandfrei" gapi nimani bildiradi?',
        options: [
          'Ta‘mirlangan soat yana benuqson ishlamoqda.',
          'Soatni ta‘mirlash kerak.',
          'Soat ta‘mirlanayotgan paytda buzildi.'
        ],
        correctAnswer: 'Ta‘mirlangan soat yana benuqson ishlamoqda.',
        explanationUz: 'repariert = allaqachon ta‘mirlab bo‘lingan.',
        mistakeTipUz: '❌ Partizip II tugallangan ishni ko‘rsatadi.'
      },
      {
        id: 'prac-61-q3',
        type: 'word-order',
        questionUz: 'Gapni to‘g‘ri tuzing:',
        scrambledWords: ['geöffneten', 'Wir', 'die', 'betraten', 'Räume'],
        correctAnswer: 'Wir betraten die geöffneten Räume',
        explanationUz: 'Wir (1) + betraten (2) + die geöffneten Räume (3).',
        mistakeTipUz: '❌ Wir betraten die geöffneten Räume.'
      }
    ]
  },

  // ==========================================
  // LEKTION 62: Im Ausland leben & Kulturschock
  // ==========================================
  {
    id: 'les-62',
    moduleId: 'mod-b1-2-1',
    levelCode: 'b1-2',
    titleDe: 'Im Ausland leben & Kulturschock',
    titleUz: 'Chet elda yashash, madaniyatlar to‘qnashuvi va moslashish',
    descriptionUz: 'Musofirchilik, madaniy tafovutlar, Zweiteilige Konnektoren (weder ... noch / je ... desto/umso).',
    orderIndex: 62,
    estimatedMinutes: 45,
    isPublished: true,
    objectivesUz: [
      'Chet elda hayot boshlash va madaniy moslashuv jarayonini muhokama qilish',
      'Juft bog‘lovchilar: "weder ... noch" (na ... va na) va "je ... desto" (qanchalik ... shunchalik) ni o‘rganish',
      'Turli mentalitetlar va urf-odatlarni tushunish'
    ],
    warmUp: {
      situationUz: 'Yangi mamlakatga ko‘chib o‘tdingiz. Boshida barcha narsa begona va noqulay tuyuldi, ammo vaqt o‘tishi bilan til va odatlarni o‘rganib, o‘zingizni erkin his qila boshladingiz.',
      curiosityQuestionUz: '"Tilni qanchalik ko‘p mashq qilsangiz, shunchalik tez gapirib ketasiz" jumlasi nemischa qanday tuziladi?',
      miniDialogue: [
        { speaker: 'Elias', textDe: 'Wie war dein Start in Deutschland?', textUz: 'Germaniyadagi dastlabki davring qanday o‘tdi?' },
        { speaker: 'Jasur', textDe: 'Am Anfang sprach ich weder fließend Deutsch noch verstand ich die Bürokratie. Aber je länger ich hier lebe, desto vertrauter wird alles.', textUz: 'Boshida na ravon nemischa gapirardim, na byurokratiyani tushunardim. Ammo bu yerda qancha uzoq yashasam, barcha narsa shunchalik qadrdon bo‘lib bormoqda.' }
      ],
      hintUz: '"weder ... noch" inkor juftligi (na bu, na u); "je + Komparativ ..., desto + Komparativ" esa mutanosiblikni ko‘rsatadi.'
    },
    contextDialogue: {
      titleDe: 'Der Weg durch den Kulturschock',
      titleUz: 'Madaniy shokdan moslashuvgacha',
      situationUz: 'Chet ellik talaba va mahalliy mentor integratsiya bosqichlari haqida fikr almashmoqda.',
      lines: [
        { speaker: 'Mentor', textDe: 'Jasur, viele internationale Studierende erleben in den ersten Monaten ein Wechselbad der Gefühle.', textUz: 'Jasur, ko‘plab xalqaro talabalar dastlabki oylarda his-tuyg‘ularning keskin o‘zgarishini boshdan kechiradilar.' },
        { speaker: 'Jasur', textDe: 'Das kenne ich gut. Am Anfang hatte ich weder engen Kontakt zu Nachbarn noch fand ich mich im Alltag sofort zurecht.', textUz: 'Buni yaxshi bilaman. Boshida na qo‘shnilar bilan yaqin muloqotim bor edi, na kundalik hayotga darhol ko‘nikib ketdim.' },
        { speaker: 'Mentor', textDe: 'Und was hat dir am meisten geholfen, anzukommen?', textUz: 'Va moslashib ketishingga eng ko‘p nima yordam berdi?' },
        { speaker: 'Jasur', textDe: 'Der Sportverein! Je aktiver man am gesellschaftlichen Leben teilnimmt, umso schneller fühlt man sich integriert.', textUz: 'Sport klubi! Inson ijtimoiy hayotda qanchalik faol ishtirok etsa, o‘zini shunchalik tez jamiyatga qo‘shilgandek his qiladi.' }
      ],
      usefulPhrases: [
        { german: 'der Kulturschock', uzbek: 'madaniy shok (yangi muhitdagi dastlabki noqulaylik)' },
        { german: 'weder ... noch', uzbek: 'na ... va na ...' },
        { german: 'je ... desto / umso', uzbek: 'qanchalik ... shunchalik ...' },
        { german: 'sich einleben', uzbek: 'yangi joyga o‘rganib / moslashib ketmoq' }
      ],
      culturalNoteUz: 'Nemis madaniyatida to‘g‘riso‘zlik va his-tuyg‘ularni ortiqcha bo‘rttirmaslik odatiy hol. Bu ko‘pincha yangi kelganlarga dastlab sovuqqonlikdek tuyulishi mumkin.'
    },
    vocabulary: [
      {
        id: 'voc-b1-14-1',
        lessonId: 'les-62',
        levelCode: 'b1-2',
        german: 'der Kulturschock',
        article: 'der',
        uzbek: 'madaniy shok',
        exampleDe: 'Der Kulturschock ist eine normale Phase bei Auslandsaufenthalten.',
        exampleUz: 'Madaniy shok chet elda bo‘lishning tabiiy bir bosqichidir.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-14-2',
        lessonId: 'les-62',
        levelCode: 'b1-2',
        german: 'die Gewohnheit',
        article: 'die',
        plural: 'die Gewohnheiten',
        uzbek: 'odat, ko‘nikma',
        exampleDe: 'Alte Gewohnheiten legt man im Ausland schnell ab.',
        exampleUz: 'Eski odatlardan chet elda tezda voz kechiladi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-14-3',
        lessonId: 'les-62',
        levelCode: 'b1-2',
        german: 'sich einleben',
        article: null,
        plural: null,
        uzbek: 'o‘rganib ketmoq, joylashib olmoq',
        exampleDe: 'Nach ein paar Monaten hatte ich mich gut eingelebt.',
        exampleUz: 'Bir necha oydan so‘ng yaxshi o‘rganib ketdim.',
        wordType: 'verb'
      },
      {
        id: 'voc-b1-14-4',
        lessonId: 'les-62',
        levelCode: 'b1-2',
        german: 'das Heimweh',
        article: 'das',
        uzbek: 'vatan sog‘inchi, uyni qumsash',
        exampleDe: 'Heimweh gehört zu Beginn oft dazu.',
        exampleUz: 'Boshida uyni sog‘inish ko‘p uchraydi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-14-5',
        lessonId: 'les-62',
        levelCode: 'b1-2',
        german: 'die Aufgeschlossenheit',
        article: 'die',
        uzbek: 'ochiq ko‘ngillilik, yangilikka intilish',
        exampleDe: 'Mit Aufgeschlossenheit findet man überall neue Freunde.',
        exampleUz: 'Ochiq ko‘ngillilik bilan hamma joyda yangi do‘stlar topish mumkin.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-14-6',
        lessonId: 'les-62',
        levelCode: 'b1-2',
        german: 'integrieren',
        article: null,
        plural: null,
        uzbek: 'jamiyatga qo‘shilmoq, integratsiyalashmoq',
        exampleDe: 'Sprache ist der Schlüssel, um sich zu integrieren.',
        exampleUz: 'Til — jamiyatga qo‘shilishning kalitidir.',
        wordType: 'verb'
      },
      {
        id: 'voc-b1-14-7',
        lessonId: 'les-62',
        levelCode: 'b1-2',
        german: 'die Mentalität',
        article: 'die',
        plural: 'die Mentalitäten',
        uzbek: 'mentalitet, tafakkur tarzi',
        exampleDe: 'Man muss die Mentalität des Gastlandes respektieren.',
        exampleUz: 'Mezbon mamlakatning mentalitetini hurmat qilish lozim.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-14-8',
        lessonId: 'les-62',
        levelCode: 'b1-2',
        german: 'überwinden',
        article: null,
        plural: null,
        uzbek: 'yengib o‘tmoq (qiyinchilikni)',
        exampleDe: 'Sie konnte alle Sprachbarrieren überwinden.',
        exampleUz: 'U barcha til to‘siqlarini yengib o‘ta oldi.',
        wordType: 'verb'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'Quyidagi gaplarga diqqat qiling: "weder... noch" va "je... desto" qanday so‘z tartibi bilan kelmoqda?',
      discoveryExamples: [
        {
          german: 'Er spricht weder Englisch noch Französisch.',
          highlight: 'weder ... noch',
          uzbek: 'U na inglizcha, na fransuzcha gapiradi.'
        },
        {
          german: 'Je mehr du übst, desto besser sprichst du.',
          highlight: 'Je mehr ... desto besser',
          uzbek: 'Qancha ko‘p mashq qilsang, shuncha yaxshi gapirasan.'
        }
      ],
      patternExplanationUz: '1. "weder ... noch" ikki tomonlama inkor bildiradi ("nicht" so‘zi kerak emas!). 2. "je" qismida qiyosiy daraja (Komparativ) kelib fe‘l oxirga boradi, "desto / umso" qismida esa qiyosiy darajadan so‘ng darhol fe‘l (V2) keladi.',
      ruleFormulaUz: 'weder [A] noch [B] || Je + Komparativ ... Fe‘l (oxirida), desto + Komparativ + Fe‘l + Ega'
    },
    grammar: [
      {
        id: 'gra-62',
        lessonId: 'les-62',
        levelCode: 'b1-2',
        titleDe: 'Zweiteilige Konnektoren: "weder ... noch" und "je ... desto / umso"',
        titleUz: 'Juft bog‘lovchilar: "weder ... noch" va "je ... desto"',
        summaryUz: '"weder ... noch" (na u, na bu), "je ... desto/umso" (qanchalik ..., shunchalik ...).',
        explanationUz: `1. **weder ... noch (ikki karra inkor):**
   Hech qanday qo‘shimcha "nicht" yoki "kein" ishlatilmaydi:
   *Ich habe **weder** Zeit **noch** Geld.* (Menda na vaqt bor, na pul.)
   *Er trinkt **weder** Kaffee **noch** Tee.*

2. **je ... desto / umso (mutanosiblik):**
   - **je-qismi (ergash gap):** *Je* + Komparativ + Ega + ... + Fe‘l (oxirida).
   - **desto-qismi (asosiy gap):** *Desto / Umso* + Komparativ + Fe‘l + Ega + ...
   *Misol:*
   * **Je** mehr Vokabeln du lernst, **desto** leichter fällt dir das Verstehen.*
   (Qancha ko‘p so‘z o‘rgansang, tushunish shuncha oson kechadi.)`,
        tables: [
          {
            title: 'je ... desto gap tartibi',
            headers: ['Bog‘lovchi', 'Komparativ', 'Gapning qolgan qismi', 'Fe‘l o‘rni'],
            rows: [
              ['Je', 'fleißiger', 'du lernst,', 'fe‘l oxirida (Nebensatz)'],
              ['desto / umso', 'schneller', 'machst du Fortschritte.', 'fe‘l 2-o‘rinda (Hauptsatz)']
            ]
          }
        ],
        examples: [
          {
            german: 'Je früher wir losfahren, desto weniger Stau haben wir.',
            uzbek: 'Qancha erta yo‘lga chiqsak, tirbandlik shuncha kam bo‘ladi.',
            highlight: 'Je früher ... desto weniger'
          },
          {
            german: 'Sie hatte weder Angst noch Zweifel.',
            uzbek: 'Unda na qo‘rquv, na shubha bor edi.',
            highlight: 'weder ... noch'
          }
        ],
        commonMistakes: [
          {
            incorrect: 'Je du mehr lernst, desto du sprichst besser.',
            correct: 'Je mehr du lernst, desto besser sprichst du.',
            explanationUz: 'Komparativ so‘z "je" va "desto" dan darhol keyin kelishi shart: Je mehr ..., desto besser...'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Vier Phasen der Anpassung',
      titleUz: 'Moslashuvning to‘rt bosqichi',
      situationUz: 'Madaniyatlararo psixolog yangi mamlakatga moslashish jarayonini tushuntirmoqda.',
      audioTranscriptDe: 'Psychologe: Wenn Menschen ins Ausland ziehen, durchlaufen sie fast immer vier Phasen. Zuerst kommt die Flitterwochen-Phase: Alles ist aufregend und wunderbar. Doch nach einigen Wochen folgt der Kulturschock: Weder das Essen schmeckt wie zu Hause, noch versteht man die ungeschriebenen Regeln der Einheimischen. Aber keine Sorge: Je mehr man mit den Menschen vor Ort spricht, umso schneller folgt die Erholungsphase. Am Ende steht die gelungene Integration.',
      translationUz: 'Psixolog: Odamlar chet elga ko‘chib o‘tganda deyarli doim to‘rtta bosqichni bosib o‘tadi. Dastlab "asal oyi" bosqichi keladi: hamma narsa hayajonli va ajoyib. Biroq bir necha haftadan so‘ng madaniy shok boshlanadi: na ovqatlar uydagidek tatıydi, na mahalliy aholining yozilmagan qoidalarini tushunib bo‘ladi. Ammo xavotir olmang: inson mahalliy odamlar bilan qancha ko‘p muloqot qilsa, tiklanish bosqichi shuncha tez keladi. Oxirida esa muvaffaqiyatli integratsiya turadi.',
      stage1Global: {
        instructionUz: '1-Bosqich: Psixologning fikricha ikkinchi bosqich nima deb ataladi?',
        questionUz: 'Ikkinchi bosqich qaysi?',
        options: ['Asal oyi bosqichi', 'Kulturschok (madaniy shok)', 'Uyga qaytish'],
        correctIndex: 1,
        explanationUz: '"Doch nach einigen Wochen folgt der Kulturschock".'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Tiklanish bosqichini nima tezlashtiradi?',
        questions: [
          {
            id: 'l62-q1',
            questionUz: 'Tiklanish jarayonini nima tezlashtiradi?',
            options: ['Faqat uyda o‘tirish', 'Mahalliy insonlar bilan ko‘proq suhbatlashish', 'Televizor tomosha qilish'],
            correctIndex: 1,
            explanationUz: '"Je mehr man mit den Menschen vor Ort spricht, umso schneller folgt die Erholungsphase".'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Psychologe', textDe: 'Weder das Essen schmeckt, noch versteht man die Regeln.', textUz: 'Na ovqat tatıydi, na qoidalarni tushunib bo‘ladi.' },
          { speaker: 'Psychologe', textDe: 'Je mehr man spricht, umso schneller lernt man.', textUz: 'Qancha ko‘p gaplashilsa, shuncha tez o‘rganiladi.' }
        ],
        keyVocabulary: [
          { german: 'die Flitterwochen-Phase', uzbek: 'asal oyi bosqichi (dastlabki quvonch)' },
          { german: 'die ungeschriebenen Regeln', uzbek: 'yozilmagan qoidalar' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-62',
        lessonId: 'les-62',
        levelCode: 'b1-2',
        titleDe: 'Pünktlichkeit und Privatsphäre: Deutsche Eigenheiten',
        titleUz: 'Vaqtga rioya va shaxsiy daxlsizlik: Nemislarga xos jihatlar',
        textDe: 'Viele Einwanderer in Deutschland berichten von ähnlichen Überraschungen im Alltag. Pünktlichkeit ist weder eine bloße Floskel noch eine unverbindliche Empfehlung: Fünf Minuten zu spät gilt bereits als unhöflich. Zudem wird großer Wert auf Privatsphäre gelegt. Während man in südlichen Kulturen spontan bei Freunden vorbeischaut, verabredet man sich hier oft Wochen im Voraus. Je besser man diese kulturellen Codes versteht, desto leichter fällt das Miteinander.',
        translationUz: 'Germaniyadagi ko‘plab immigrantlar kundalik hayotdagi shunga o‘xshash kutilmagan jihatlar haqida so‘zlab berishadi. Vaqtga rioya qilish na quruq gap, na ixtiyoriy tavsiyadir: 5 daqiqa kechikish allaqachon hurmatsizlik sanaladi. Bundan tashqari, shaxsiy daxlsizlikka katta e‘tibor beriladi. Janubiy madaniyatlarda do‘stlarnikiga to‘satdan kirib borish odatiy bo‘lsa, bu yerda ko‘pincha haftalar oldin uchrashuv belgilanadi. Inson ushbu madaniy belgilarni qanchalik yaxshi tushunsa, birgalikdagi hayot shunchalik yengil kechadi.',
        vocabularyHints: [
          { german: 'die Floskel', uzbek: 'quruq gap, rasmiyatchilik' },
          { german: 'die Privatsphäre', uzbek: 'shaxsiy daxlsizlik, xilvatlik' }
        ],
        questions: [
          {
            id: 'q-rea-62-1',
            questionUz: 'Germaniyada 5 daqiqa kechikish qanday qabul qilinadi?',
            options: ['Odatiy hol deb', 'Unhöflich (odobga to‘g‘ri kelmaydigan deb)', 'Xursandchilik bilan'],
            correctIndex: 1,
            explanationUz: 'Matnda "Fünf Minuten zu spät gilt bereits als unhöflich" deb yozilgan.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-62',
      lessonId: 'les-62',
      levelCode: 'b1-2',
      taskDe: 'Schreiben Sie über Ihre Erfahrungen mit einer fremden Kultur mit "je ... desto" und "weder ... noch".',
      taskUz: 'Begona madaniyat yoki chet tili bilan tanishuvingiz haqida "je ... desto" va "weder ... noch" yordamida yozing.',
      instructionUz: 'Dastlabki qiyinchiliklar va vaqt o‘tishi bilan qanday ko‘nikkaningizni bayon qiling.',
      hints: ['Je mehr ich lerne, desto...', 'Am Anfang konnte ich weder... noch...'],
      sampleSolutionDe: 'Als ich anfing, Deutsch zu lernen, verstand ich weder die Grammatik noch die Aussprache. Aber ich gab nicht auf. Je intensiver ich jeden Tag lerne, desto selbstbewusster spreche ich. Heute fühle ich mich in der deutschen Sprache sehr wohl.',
      scaffold: {
        openingDe: 'Meine Erfahrungen:',
        closingDe: 'Übung macht den Meister.',
        usefulPhrasesDe: ['weder ... noch ...', 'Je mehr ..., desto ...', 'Am Anfang...']
      }
    },
    shadowing: [
      {
        id: 'sha-62',
        lessonId: 'les-62',
        levelCode: 'b1-2',
        sentenceDe: 'Je intensiver man sich mit der neuen Kultur beschäftigt, desto schneller überwindet man alle Hürden.',
        translationUz: 'Inson yangi madaniyat bilan qanchalik chuqur shug‘ullansa, barcha to‘siqlarni shunchalik tez yengib o‘tadi.',
        phoneticHint: '[Ye in-ten-zi-fer man zih mit der noy-en Kul-tur be-shêf-tikt, des-to shnel-ler yuber-vin-det man al-le Hyr-den]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-62-q1',
        type: 'fill-blank',
        questionUz: '"je" va "desto": "_____ mehr man liest, desto klüger wird man."',
        blankSentence: '[blank] mehr man liest, desto klüger wird man.',
        options: ['Je', 'Desto', 'Wenn', 'Wie'],
        correctAnswer: 'Je',
        explanationUz: 'Birinchi ergash gap "Je" bilan boshlanadi: Je mehr... desto klüger.',
        mistakeTipUz: '❌ Birinchi qismda doimo "Je" bo‘ladi.'
      },
      {
        id: 'prac-62-q2',
        type: 'multiple-choice',
        questionUz: '"Er hat weder ein Auto noch ein Fahrrad" jumlasi nimani bildiradi?',
        options: [
          'Unda na mashina, na velosiped bor (ikkalasi ham yo‘q).',
          'Unda mashina ham, velosiped ham bor.',
          'U velosipedni mashinadan afzal ko‘radi.'
        ],
        correctAnswer: 'Unda na mashina, na velosiped bor (ikkalasi ham yo‘q).',
        explanationUz: '"weder ... noch" ikki karra inkor ma‘nosini beradi.',
        mistakeTipUz: '❌ weder ... noch = na u, na bu.'
      },
      {
        id: 'prac-62-q3',
        type: 'word-order',
        questionUz: 'Gapni to‘g‘ri tuzing:',
        scrambledWords: ['Je', 'desto', 'du', 'schneller', 'läufst,', 'bist', 'du', 'da'],
        correctAnswer: 'Je schneller du läufst, desto schneller bist du da',
        explanationUz: 'Je schneller du läufst (1) + desto schneller bist du da (2).',
        mistakeTipUz: '❌ Je schneller du läufst, desto schneller bist du da.'
      }
    ]
  },

  // ==========================================
  // LEKTION 63: Mobilität der Zukunft
  // ==========================================
  {
    id: 'les-63',
    moduleId: 'mod-b1-2-1',
    levelCode: 'b1-2',
    titleDe: 'Mobilität der Zukunft',
    titleUz: 'Kelajak transporti va harakatchanlik',
    descriptionUz: 'Elektromobillar, shahar transporti, Infinitivkonstruktionen (ohne ... zu / (an)statt ... zu: -masdan / o‘rniga).',
    orderIndex: 63,
    estimatedMinutes: 45,
    isPublished: true,
    objectivesUz: [
      'Kelajak transport turlari va aqlli shaharlar haqida so‘zlashish',
      '"ohne ... zu" (-masdan) va "(an)statt ... zu" (o‘rniga) infinitiv birikmalarini o‘rganish',
      'Ekologik transport muammolari va yechimlarini tahlil qilish'
    ],
    warmUp: {
      situationUz: 'Katta shaharlarda tirbandliklar va havoning ifloslanishi ortib bormoqda. Odamlar shaxsiy mashinadan voz kechib, velosiped va elektr skuterlarga o‘tmoqda.',
      curiosityQuestionUz: '"U tirbandlikda kutmasdan velosipedda ketdi" yoki "Mashina sotib olish o‘rniga ijara qildi" qanday aytiladi?',
      miniDialogue: [
        { speaker: 'Nils', textDe: 'Fährst du immer noch mit dem Auto zur Arbeit?', textUz: 'Ishga hali ham mashinada boryapsanmi?' },
        { speaker: 'Sven', textDe: 'Nein, anstatt im Stau zu stehen, fahre ich jetzt mit der S-Bahn. Man kommt an, ohne sich zu ärgern.', textUz: 'Yo‘q, tirbandlikda turish o‘rniga endi poyezdda ketyapman. Asabiylashmasdan yetib borasan.' }
      ],
      hintUz: '"ohne ... zu" (qilmasdan) va "anstatt ... zu" (qilish o‘rniga) konstruksiyalarida fe‘l infinitividan oldin "zu" qo‘yiladi.'
    },
    contextDialogue: {
      titleDe: 'Autofreie Innenstädte',
      titleUz: 'Avtomobilsiz shahar markazlari',
      situationUz: 'Ikki shahar faoli markaziy ko‘chalarni piyodalar zonasiga aylantirish loyihasini muhokama qilmoqda.',
      lines: [
        { speaker: 'Nils', textDe: 'Sven, hast du gehört? Der Stadtrat plant, das Zentrum komplett autofrei zu gestalten.', textUz: 'Sven, eshitdingmi? Shahar kengashi markazni butunlay avtomobilsiz qilishni rejalashtirmoqda.' },
        { speaker: 'Sven', textDe: 'Endlich! Anstatt die Stadt mit Abgasen zu verpesten, sollten wir mehr Raum für Fußgänger und Radfahrer schaffen.', textUz: 'Nihoyat! Shaharni tutun bilan zaharlash o‘rniga piyodalar va velosipedchilar uchun ko‘proq joy yaratishimiz kerak.' },
        { speaker: 'Nils', textDe: 'Aber wie transportieren die Geschäfte ihre Waren, ohne den Verkehr zu blockieren?', textUz: 'Ammo do‘konlar yo‘l harakatini to‘sib qo‘ymasdan tovarlarini qanday tashiydi?' },
        { speaker: 'Sven', textDe: 'Dafür gibt es moderne elektrische Lastenräder. Die liefern alles pünktlich, ohne Lärm zu machen.', textUz: 'Buning uchun zamonaviy elektr yuk velosipedlari bor. Ular shovqin ko‘tarmasdan hamma narsani o‘z vaqtida yetkazadi.' }
      ],
      usefulPhrases: [
        { german: 'autofrei', uzbek: 'avtomobilsiz' },
        { german: 'ohne ... zu (+ Infinitiv)', uzbek: '...masdan' },
        { german: 'anstatt ... zu (+ Infinitiv)', uzbek: '...ning o‘rniga' },
        { german: 'die Abgase', uzbek: 'chiqindi tutun gazlari' }
      ],
      culturalNoteUz: 'Frayburg (Vauban mahallasi) kabi bir qator nemis shaharlarida avtomobilsiz hududlar muvaffaqiyatli sinovdan o‘tgan va dunyoga namuna bo‘lmoqda.'
    },
    vocabulary: [
      {
        id: 'voc-b1-15-1',
        lessonId: 'les-63',
        levelCode: 'b1-2',
        german: 'die Mobilität',
        article: 'die',
        uzbek: 'harakatchanlik, transport imkoniyati',
        exampleDe: 'Die urbane Mobilität muss klimafreundlicher werden.',
        exampleUz: 'Shahar harakatchanligi iqlimga do‘stona bo‘lishi lozim.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-15-2',
        lessonId: 'les-63',
        levelCode: 'b1-2',
        german: 'das Elektroauto',
        article: 'das',
        plural: 'die Elektroautos',
        uzbek: 'elektromobil',
        exampleDe: 'Elektroautos stoßen lokal keine Abgase aus.',
        exampleUz: 'Elektromobillar mahalliy darajada zararli tutun chiqarmaydi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-15-3',
        lessonId: 'les-63',
        levelCode: 'b1-2',
        german: 'der Radweg',
        article: 'der',
        plural: 'die Radwege',
        uzbek: 'velosiped yo‘lagi',
        exampleDe: 'Die Stadt baut das Netz der Radwege stetig aus.',
        exampleUz: 'Shahar veloyo‘laklar tarmog‘ini tinimsiz kengaytirmoqda.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-15-4',
        lessonId: 'les-63',
        levelCode: 'b1-2',
        german: 'die Ladeinfrastruktur',
        article: 'die',
        uzbek: 'quvvatlash infratuzilmasi',
        exampleDe: 'Eine flächendeckende Ladeinfrastruktur ist unverzichtbar.',
        exampleUz: 'Hamma joyni qamrab oluvchi quvvatlash infratuzilmasi zarur.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-15-5',
        lessonId: 'les-63',
        levelCode: 'b1-2',
        german: 'blockieren',
        article: null,
        plural: null,
        uzbek: 'to‘sib qo‘ymoq',
        exampleDe: 'Falsch geparkte Autos blockieren die Rettungswagen.',
        exampleUz: 'Noto‘g‘ri qo‘yilgan mashinalar tez yordam mashinalarini to‘sib qo‘yadi.',
        wordType: 'verb'
      },
      {
        id: 'voc-b1-15-6',
        lessonId: 'les-63',
        levelCode: 'b1-2',
        german: 'umsteigen',
        article: null,
        plural: null,
        uzbek: 'boshqa transportga o‘tmoq',
        exampleDe: 'Viele Pendler steigen vom Auto auf die Bahn um.',
        exampleUz: 'Ko‘plab qatnovchilar mashinadan poyezdga o‘tmoqdalar.',
        wordType: 'verb'
      },
      {
        id: 'voc-b1-15-7',
        lessonId: 'les-63',
        levelCode: 'b1-2',
        german: 'der Fußgänger',
        article: 'der',
        plural: 'die Fußgänger',
        uzbek: 'piyoda',
        exampleDe: 'Die Fußgängerzone gehört allein den Menschen zu Fuß.',
        exampleUz: 'Piyodalar zonasi faqat piyoda yuruvchilarga tegishlidir.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-15-8',
        lessonId: 'les-63',
        levelCode: 'b1-2',
        german: 'nachhaltig',
        article: null,
        plural: null,
        uzbek: 'barqaror, tabiatni tejovchi',
        exampleDe: 'Nachhaltige Mobilität schont Ressourcen.',
        exampleUz: 'Barqaror transport resurslarni asraydi.',
        wordType: 'adjective'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'Quyidagi gaplardagi "ohne ... zu" va "anstatt ... zu" tuzilishlariga e‘tibor bering:',
      discoveryExamples: [
        {
          german: 'Er ging an mir vorbei, ohne mich zu grüßen.',
          highlight: 'ohne mich zu grüßen',
          uzbek: 'U salom bermasdan (salom bermasdan turib) yonimdan o‘tib ketdi.'
        },
        {
          german: 'Anstatt ein Auto zu kaufen, fährt sie Fahrrad.',
          highlight: 'Anstatt ein Auto zu kaufen',
          uzbek: 'Mashina sotib olish o‘rniga, u velosipedda yuradi.'
        }
      ],
      patternExplanationUz: 'Har ikki konstruksiyada ham ikkala gapning egasi BIR XIL bo‘lishi kerak. Gap oxirida "zu + Infinitiv" keladi (ajraladigan fe‘llarda "an-zu-fangen", "ein-zu-steigen").',
      ruleFormulaUz: 'ohne / (an)statt + ... + (ajraladigan old qo‘shimcha +) zu + Infinitiv'
    },
    grammar: [
      {
        id: 'gra-63',
        lessonId: 'les-63',
        levelCode: 'b1-2',
        titleDe: 'Infinitivkonstruktionen: "ohne ... zu" und "(an)statt ... zu"',
        titleUz: 'Infinitiv konstruksiyalar: "ohne ... zu" va "(an)statt ... zu"',
        summaryUz: '"ohne ... zu" (-masdan), "(an)statt ... zu" (o‘rniga). Ega bir xil bo‘lishi shart.',
        explanationUz: `1. **ohne ... zu (-masdan, -masdan turib):**
   Bir harakatning kutilgan ikkinchi harakatsiz sodir bo‘lganini bildiradi.
   *Er verließ das Büro, **ohne** Tschüss **zu sagen**.* (U xayrlashmasdan idorani tark etdi.)
   *Ajraladigan fe‘llarda:* *ohne **ein-zu-steigen**.*

2. **(an)statt ... zu (qilish o‘rniga):**
   Kutilgan to‘g‘ri harakat o‘rniga boshqa ish qilinganini ko‘rsatadi.
   * **Anstatt** fleißig **zu lernen**, spielte er Computerspiele.* (Qunt bilan o‘qish o‘rniga, u kompyuter o‘yinlari o‘ynadi.)

*Qoida:* Agar ikkala gapning egasi har xil bo‘lsa, infinitiv emas, "ohne dass" yoki "anstatt dass" ergash gapi ishlatiladi:
*Er ging weg, **ohne dass** ich es bemerkte.* (Men buni sezmagan holda u ketib qoldi).`,
        tables: [
          {
            title: 'Infinitiv konstruksiyalar',
            headers: ['Konstruksiya', 'Ma‘nosi', 'Misol gap'],
            rows: [
              ['ohne ... zu', '-masdan', 'ohne zu zögern (ikkilanmasdan)'],
              ['(an)statt ... zu', 'o‘rniga', 'anstatt zu meckern (noliydigan bo‘lish o‘rniga)']
            ]
          }
        ],
        examples: [
          {
            german: 'Er fuhr mit dem Fahrrad, anstatt das teure Taxi zu nehmen.',
            uzbek: 'Qimmat taksiga o‘tirish o‘rniga, u velosipedda bordi.',
            highlight: 'anstatt ... zu nehmen'
          },
          {
            german: 'Sie fand den Weg, ohne auf die Karte zu schauen.',
            uzbek: 'U xaritaga qaramasdan yo‘lni topdi.',
            highlight: 'ohne ... zu schauen'
          }
        ],
        commonMistakes: [
          {
            incorrect: 'Er geht weg ohne zu sagen nichts.',
            correct: 'Er geht weg, ohne etwas zu sagen.',
            explanationUz: 'Nemis tilida inkor "ohne" so‘zining o‘zida mavjud bo‘lgani uchun "nichts" emas "etwas" keladi.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Kopenhagen: Das Fahrradparadies',
      titleUz: 'Kopengagen: Velosipedchilar jannati',
      situationUz: 'Shaharsoz Daniya poytaxtining transport tajribasini tahlil qilmoqda.',
      audioTranscriptDe: 'Stadtplaner: Kopenhagen zeigt der Welt, wie moderne Mobilität funktioniert. Über 60 Prozent der Einwohner fahren täglich mit dem Rad zur Arbeit. Anstatt Milliarden in Autobahnen zu investieren, baute die Stadt breite Fahrrad-Schnellwege mit grüner Welle. Man radelt entspannt durch die Metropole, ohne an roten Ampeln stoppen zu müssen. Die Lebensqualität ist enorm gestiegen, während die Luftverschmutzung drastisch gesunken ist.',
      translationUz: 'Shaharsoz: Kopengagen butun dunyoga zamonaviy transport qanday ishlashini ko‘rsatmoqda. Aholining 60 foizdan ortig‘i har kuni ishga velosipedda boradi. Shahar avtomagistrallarga milliardlab mablag‘ sarflash o‘rniga, "yashil to‘lqin"ga ega keng tezyurar veloyo‘laklar qurdi. Odamlar qizil chiroqda to‘xtamasdan, metropoliya bo‘ylab xotirjam velosiped haydashadi. Hayot sifati nihoyatda oshdi, havoning ifloslanishi esa keskin kamaydi.',
      stage1Global: {
        instructionUz: '1-Bosqich: Kopengagendagi aholining qancha qismi ishga velosipedda qatnaydi?',
        questionUz: 'Velosipedda qatnaydigan aholi ulushi qancha?',
        options: ['10 foiz', '60 foizdan ortiq', 'Faqat yoshlar'],
        correctIndex: 1,
        explanationUz: '"Über 60 Prozent der Einwohner fahren täglich mit dem Rad zur Arbeit".'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: "ohne ... zu" iborasini aniqlang.',
        questions: [
          {
            id: 'l63-q1',
            questionUz: 'Velosipedchilar qayerda to‘xtashga majbur bo‘lmaydi?',
            options: ['Do‘konlar oldida', 'Qizil svetoforlarda (yashil to‘lqin tufayli)', 'Ko‘priklarda'],
            correctIndex: 1,
            explanationUz: '"...ohne an roten Ampeln stoppen zu müssen".'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Stadtplaner', textDe: 'Anstatt Autobahnen zu bauen, schuf man Radwege.', textUz: 'Avtomagistrallar qurish o‘rniga veloyo‘laklar yaratildi.' },
          { speaker: 'Moderator', textDe: 'Ein zukunftsweisendes Konzept!', textUz: 'Kelajakka yo‘naltirilgan konsepsiya!' }
        ],
        keyVocabulary: [
          { german: 'die grüne Welle', uzbek: 'yashil to‘lqin (ketma-ket yashil chiroq yonishi)' },
          { german: 'zukunftsweisend', uzbek: 'istiqbolli, kelajakka yo‘l ko‘rsatuvchi' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-63',
        lessonId: 'les-63',
        levelCode: 'b1-2',
        titleDe: 'Autonomes Fahren: Utopie oder baldige Realität?',
        titleUz: 'Haydovchisiz avtomobillar: Xayolmi yoki yaqin haqiqat?',
        textDe: 'Selbstfahrende Fahrzeuge könnten den Verkehr revolutionieren. Anstatt ein eigenes Auto zu besitzen, werden Menschen in Zukunft per App autonome Shuttles rufen. Sensoren und künstliche Intelligenz steuern die Wagen sicher durch den Verkehr, ohne dass menschliche Fehler passieren. Dies könnte Parkplatzflächen überflüssig machen und Städte in grüne Parks verwandeln. Allerdings müssen rechtliche Fragen zur Haftung bei Unfällen noch abschließend geklärt werden.',
        translationUz: 'O‘ziyurar transport vositalari yo‘l harakatini inqilobiy o‘zgartirishi mumkin. Kelajakda odamlar shaxsiy mashinaga egalik qilish o‘rniga, ilova orqali avtonom shatllarni chaqirishadi. Datchiklar va sun‘iy intellekt insoniy xatolarga yo‘l qo‘ymasdan avtomobillarni xavfsiz boshqaradi. Bu avtoturargohlarni keraksiz qilib, shaharlarni yashil bog‘larga aylantirishi mumkin. Biroq baxtsiz hodisalarda javobgarlik bo‘yicha huquqiy masalalar hali uzil-kesil hal etilishi lozim.',
        vocabularyHints: [
          { german: 'autonom', uzbek: 'mustaqil, haydovchisiz' },
          { german: 'überflüssig machen', uzbek: 'keraksiz qilib qo‘ymoq' }
        ],
        questions: [
          {
            id: 'q-rea-63-1',
            questionUz: 'Haydovchisiz transportning qaysi masalasi hali to‘liq hal bo‘lmagan?',
            options: ['Batareya quvvati', 'Avariya holatidagi huquqiy javobgarlik masalasi', 'Rangini tanlash'],
            correctIndex: 1,
            explanationUz: 'Matnda "Allerdings müssen rechtliche Fragen zur Haftung bei Unfällen noch abschließend geklärt werden" deyilgan.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-63',
      lessonId: 'les-63',
      levelCode: 'b1-2',
      taskDe: 'Wie bewegen Sie sich im Alltag fort? Schreiben Sie mit "ohne ... zu" und "anstatt ... zu".',
      taskUz: 'Kundalik transport odatlaringiz haqida "ohne ... zu" va "anstatt ... zu" yordamida yozing.',
      instructionUz: 'Qaysi transportdan foydalanishingizni va nima uchunligini tushuntiring.',
      hints: ['Anstatt mit dem Auto zu fahren,...', 'Ich gehe zu Fuß, ohne...'],
      sampleSolutionDe: 'In meinem Alltag fahre ich meistens mit dem Fahrrad. Anstatt im Stau zu stehen, komme ich schnell an mein Ziel. Ich genieße den Weg zur Arbeit an der frischen Luft, ohne Geld für teures Benzin auszugeben.',
      scaffold: {
        openingDe: 'Meine Mobilität im Alltag:',
        closingDe: 'Das ist gesund und umweltfreundlich.',
        usefulPhrasesDe: ['Anstatt ... zu fahren', 'ohne Geld auszugeben...', 'Ich bevorzuge...']
      }
    },
    shadowing: [
      {
        id: 'sha-63',
        lessonId: 'les-63',
        levelCode: 'b1-2',
        sentenceDe: 'Anstatt im Stau zu warten, fahre ich mit dem Fahrrad durch den Park, ohne mich zu stressen.',
        translationUz: 'Tirbandlikda kutish o‘rniga, men stressga tushmasdan park orqali velosipedda ketyapman.',
        phoneticHint: '[An-shtatt im Shtau tsu var-ten, fah-re ih mit dem Fah-rat durh den Park, oh-ne mih tsu shtres-sen]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-63-q1',
        type: 'fill-blank',
        questionUz: '"ohne" dan keyin infinitivni to‘g‘ri qo‘ying: "Er ging nach Hause, ohne ein Wort _____ (sagen)."',
        blankSentence: 'Er ging nach Hause, ohne ein Wort [blank].',
        options: ['zu sagen', 'sagen', 'gesagt', 'sagte'],
        correctAnswer: 'zu sagen',
        explanationUz: '"ohne ... zu + Infinitiv": zu sagen.',
        mistakeTipUz: '❌ Infinitivdan oldin "zu" bo‘lishi shart: zu sagen.'
      },
      {
        id: 'prac-63-q2',
        type: 'multiple-choice',
        questionUz: '"Anstatt zu kochen, haben wir Pizza bestellt" jumlasi nimani anglatadi?',
        options: [
          'Ovqat pishirish o‘rniga pitsa buyurtma qildik.',
          'Ovqat pishirib, keyin pitsa yedik.',
          'Pitsa pishirishni xohladik.'
        ],
        correctAnswer: 'Ovqat pishirish o‘rniga pitsa buyurtma qildik.',
        explanationUz: '"anstatt ... zu" = ...ning o‘rniga.',
        mistakeTipUz: '❌ anstatt ... zu = o‘rniga.'
      },
      {
        id: 'prac-63-q3',
        type: 'word-order',
        questionUz: 'Gapni to‘g‘ri tuzing:',
        scrambledWords: ['zu', 'ging', 'Er', 'fragen', 'ohne'],
        correctAnswer: 'Er ging ohne zu fragen',
        explanationUz: 'Er ging (1) + ohne (2) + zu fragen (3).',
        mistakeTipUz: '❌ Er ging ohne zu fragen.'
      }
    ]
  }
];
