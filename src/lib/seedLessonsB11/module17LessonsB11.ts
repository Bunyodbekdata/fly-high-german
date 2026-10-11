import { Lesson } from '../../types/database';

export const MODULE_17_B11_LESSONS: Lesson[] = [
  // ==========================================
  // LEKTION 49: Kindheit und Erinnerungen
  // ==========================================
  {
    id: 'les-49',
    moduleId: 'mod-b1-1-1',
    levelCode: 'b1-1',
    titleDe: 'Kindheit und Erinnerungen',
    titleUz: 'Bolalik xotiralari va o‘tmish voqealari',
    descriptionUz: 'Bolalik xotiralarini so‘zlab berish, Plusquamperfekt zamoni va "nachdem" bog‘lovchisi bilan zamonlar moslashuvi.',
    orderIndex: 49,
    estimatedMinutes: 45,
    isPublished: true,
    objectivesUz: [
      'Bolalik va o‘tmish xotiralari haqida batafsil hikoya qilish',
      'Plusquamperfekt (o‘tgan zamondan oldingi zamon) formulasini o‘rganish',
      '"nachdem" bog‘lovchisi orqali ketma-ket sodir bo‘lgan voqealarni ifodalash'
    ],
    warmUp: {
      situationUz: 'Eski fotoalbomni varaqlab, bolalikdagi eng yorqin xotiralar va qiziqarli voqealarni eslayapsiz.',
      curiosityQuestionUz: 'Nemis tilida bir o‘tgan voqeadan oldin yuz bergan boshqa voqea qanday zamon bilan ifodalanadi?',
      miniDialogue: [
        { speaker: 'Lukas', textDe: 'Weißt du noch, wie wir damals Baumhäuser gebaut haben?', textUz: 'O‘shanda qanday qilib daraxtda uychalar qurganimiz yodingdami?' },
        { speaker: 'Sophia', textDe: 'Ja, nachdem wir die Schule beendet hatten, verbrachten wir den ganzen Tag draußen.', textUz: 'Ha, maktabni tugatganimizdan so‘ng butun kunni ko‘chada o‘tkazardik.' }
      ],
      hintUz: '"nachdem" ergash gapida ish-harakat oldin tugallangan bo‘lsa, Plusquamperfekt ishlatiladi.'
    },
    contextDialogue: {
      titleDe: 'Ein Blick ins alte Fotoalbum',
      titleUz: 'Eski fotoalbomga nazar',
      situationUz: 'Ikki do‘st o‘smirlik davridagi suratlarni ko‘rib, bolalik xotiralarini muhokama qilmoqda.',
      lines: [
        { speaker: 'Lukas', textDe: 'Schau mal, Sophia! Dieses Foto entstand, nachdem wir nach Berlin gezogen waren.', textUz: 'Qara, Sofiya! Bu surat biz Berlinga ko‘chib o‘tganimizdan keyin olingan.' },
        { speaker: 'Sophia', textDe: 'Stimmt! Ich erinnere mich genau daran. Damals war alles noch so neu und aufregend.', textUz: 'To‘g‘ri! Men buni aniq eslayman. O‘shanda hamma narsa yangi va hayajonli edi.' },
        { speaker: 'Lukas', textDe: 'Nachdem ich meine ersten Freunde gefunden hatte, fühlte ich mich sofort wie zu Hause.', textUz: 'Dastlabki do‘stlarimni topganimdan keyin, o‘zimni darhol uydagidek his qildim.' },
        { speaker: 'Sophia', textDe: 'Die Kindheit verging so unglaublich schnell, findest du nicht auch?', textUz: 'Bolalik hayratlanarli darajada tez o‘tib ketdi, sen ham shunday deb o‘ylamaysanmi?' }
      ],
      usefulPhrases: [
        { german: 'sich erinnern an (+ Akk)', uzbek: '...ni eslamoq, xotirlamoq' },
        { german: 'damals', uzbek: 'o‘sha paytlarda, o‘shanda' },
        { german: 'wie zu Hause fühlen', uzbek: 'o‘zini uydagidek his qilmoq' },
        { german: 'vergehen (Zeit)', uzbek: 'vaqt o‘tmoq' }
      ],
      culturalNoteUz: 'Germaniyada bolalik xotiralari va mustaqillik muhim qadriyat hisoblanadi. Bolalar yoshligidan velosipedda mustaqil maktabga qatnaydi.'
    },
    vocabulary: [
      {
        id: 'voc-b1-1-1',
        lessonId: 'les-49',
        levelCode: 'b1-1',
        german: 'die Kindheit',
        article: 'die',
        uzbek: 'bolalik davri',
        exampleDe: 'Meine Kindheit war glücklich und voller Abenteuer.',
        exampleUz: 'Mening bolaligim baxtli va sarguzashtlarga boy edi.',
        wordType: 'noun',
        memoryHintUz: 'Kind (bola) + heit = bolalik'
      },
      {
        id: 'voc-b1-1-2',
        lessonId: 'les-49',
        levelCode: 'b1-1',
        german: 'die Erinnerung',
        article: 'die',
        plural: 'die Erinnerungen',
        uzbek: 'xotira, esdalik',
        exampleDe: 'Ich habe viele schöne Erinnerungen an meine Schulzeit.',
        exampleUz: 'Maktab davrim haqida ko‘plab chiroyli xotiralarim bor.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-1-3',
        lessonId: 'les-49',
        levelCode: 'b1-1',
        german: 'das Abenteuer',
        article: 'das',
        plural: 'die Abenteuer',
        uzbek: 'sarguzasht',
        exampleDe: 'Jeder Urlaub auf dem Land war ein großes Abenteuer.',
        exampleUz: 'Qishloqdagi har bir ta‘til katta sarguzasht edi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-1-4',
        lessonId: 'les-49',
        levelCode: 'b1-1',
        german: 'aufwachsen',
        article: null,
        plural: null,
        uzbek: 'ulg‘aymoq, voyaga yetmoq',
        exampleDe: 'Ich bin in einer kleinen Stadt aufgewachsen.',
        exampleUz: 'Men kichik bir shaharchada ulg‘ayganman.',
        wordType: 'verb'
      },
      {
        id: 'voc-b1-1-5',
        lessonId: 'les-49',
        levelCode: 'b1-1',
        german: 'damals',
        article: null,
        plural: null,
        uzbek: 'o‘shanda, o‘sha paytlarda',
        exampleDe: 'Damals hatten wir noch kein Internet.',
        exampleUz: 'O‘shanda bizda hali internet yo‘q edi.',
        wordType: 'adverb'
      },
      {
        id: 'voc-b1-1-6',
        lessonId: 'les-49',
        levelCode: 'b1-1',
        german: 'vermissen',
        article: null,
        plural: null,
        uzbek: 'soginmoq, qumsamoq',
        exampleDe: 'Manchmal vermisse ich die sorglose Zeit der Kindheit.',
        exampleUz: 'Ba‘zan bolalikning g‘amsiz damlarini sog‘inaman.',
        wordType: 'verb'
      },
      {
        id: 'voc-b1-1-7',
        lessonId: 'les-49',
        levelCode: 'b1-1',
        german: 'die Jugend',
        article: 'die',
        uzbek: 'o‘smirlik, yoshlik',
        exampleDe: 'In meiner Jugend habe ich viel Sport getrieben.',
        exampleUz: 'Yoshligimda ko‘p sport bilan shug‘ullanganman.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-1-8',
        lessonId: 'les-49',
        levelCode: 'b1-1',
        german: 'prägen',
        article: null,
        plural: null,
        uzbek: 'shakllantirmoq, chuqur iz qoldirmoq',
        exampleDe: 'Diese Erfahrungen haben meinen Charakter geprägt.',
        exampleUz: 'Ushbu tajribalar mening fe‘l-atvorimni shakllantirdi.',
        wordType: 'verb'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'Quyidagi gapda ikkita o‘tgan voqea berilgan. Qaysi biri oldinroq sodir bo‘lganiga va fe‘l shakllariga e‘tibor bering:',
      discoveryExamples: [
        {
          german: 'Nachdem wir nach Berlin gezogen waren, begann die Schule.',
          highlight: 'gezogen waren / begann',
          uzbek: 'Berlinga ko‘chib o‘tganimizdan so‘ng, maktab boshlandi.'
        },
        {
          german: 'Nachdem er die Hausaufgaben gemacht hatte, ging er schlafen.',
          highlight: 'gemacht hatte / ging',
          uzbek: 'U vazifalarini qilib bo‘lgach, uxlashga ketdi.'
        }
      ],
      patternExplanationUz: 'O‘tmishda bir voqea ikkinchisidan OLDIN sodir bo‘lganda Plusquamperfekt (hatte/war + Partizip II), keyingi voqea uchun esa Präteritum ishlatiladi.',
      ruleFormulaUz: 'Nachdem + Plusquamperfekt (hatte/war + Partizip II), ... + Präteritum'
    },
    grammar: [
      {
        id: 'gra-49',
        lessonId: 'les-49',
        levelCode: 'b1-1',
        titleDe: 'Das Plusquamperfekt und Temporalsätze mit "nachdem"',
        titleUz: 'O‘tgan zamondan oldingi zamon (Plusquamperfekt) va "nachdem"',
        summaryUz: 'Plusquamperfekt o‘tmishdagi ikki voqeadan oldinroq tugallanganini bildiradi.',
        explanationUz: `Plusquamperfekt quyidagicha yasaladi:
**hatte / war** (Präteritumda) + ... + **Partizip II** (gap oxirida).

Zamonlar moslashuvi (Vorzeitigkeit):
1. **Bosh gapda Präteritum bo‘lsa:**
   *Nachdem ich gegessen **hatte**, **ging** ich spazieren.* (Ovqatlanib bo‘lganimdan keyin sayrga chiqdim.)
2. **Bosh gapda Hozirgi zamon (Präsens) bo‘lsa:**
   *Nachdem ich gegessen **habe**, **gehe** ich spazieren.* (Perfekt + Präsens).`,
        tables: [
          {
            title: 'Plusquamperfekt tuslanishi (haben va sein bilan)',
            headers: ['Olmosh', 'machen (hatte)', 'gehen (war)'],
            rows: [
              ['ich', 'hatte gemacht', 'war gegangen'],
              ['du', 'hattest gemacht', 'warst gegangen'],
              ['er/sie/es', 'hatte gemacht', 'war gegangen'],
              ['wir', 'hatten gemacht', 'waren gegangen'],
              ['ihr', 'hattet gemacht', 'wart gegangen'],
              ['sie/Sie', 'hatten gemacht', 'waren gegangen']
            ]
          }
        ],
        examples: [
          {
            german: 'Nachdem sie das Studium abgeschlossen hatte, fand sie sofort eine Stelle.',
            uzbek: 'U o‘qishni tamomlaganidan so‘ng darhol ish topdi.',
            highlight: 'abgeschlossen hatte / fand'
          },
          {
            german: 'Als der Zug ankam, war Lukas schon abgereist.',
            uzbek: 'Poyezd yetib kelganda, Lukas allaqachon jo‘nab ketgan edi.',
            highlight: 'war abgereist'
          }
        ],
        commonMistakes: [
          {
            incorrect: 'Nachdem ich habe gelernt, ging ich ins Bett.',
            correct: 'Nachdem ich gelernt hatte, ging ich ins Bett.',
            explanationUz: 'Bosh gap o‘tgan zamonda (ging) bo‘lsa, nachdem gapida Perfekt (habe) emas, Plusquamperfekt (hatte) bo‘lishi shart.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Kindheitserinnerungen im Radio-Interview',
      titleUz: 'Radio intervyuda bolalik xotiralari',
      situationUz: 'Radioda taniqli yozuvchi o‘zining qishloqdagi bolaligi haqida suhbat bermoqda.',
      audioTranscriptDe: 'Moderator: Herr Weber, woran erinnern Sie sich am liebsten, wenn Sie an Ihre Kindheit denken?\nHerr Weber: An die Sommerferien bei meinen Großeltern auf dem Land! Nachdem wir die Prüfungen bestanden hatten, fuhren wir sofort zu ihnen. Dort gab es keinen Fernseher, aber wir bauten Flöße und spielten den ganzen Tag am Fluss. Nachdem ich ein Buch über Piraten gelesen hatte, träumte ich monatelang von großen Seereisen. Diese Zeit hat meine Fantasie als Autor entscheidend geprägt.',
      translationUz: 'Boshlovchi: Janob Veber, bolaligingizni eslaganingizda eng yoqimli narsa nima?\nJanob Veber: Qishloqdagi buva-buvimnikidagi yozgi ta‘til! Imtihonlarni topshirganimizdan so‘ng darhol ularnikiga yo‘l olardik. U yerda televizor yo‘q edi, ammo biz sol yasab, daryo bo‘yida kun bo‘yi o‘ynardik. Qaroqchilar haqidagi kitobni o‘qiganimdan so‘ng oylab buyuk dengiz sayohatlarini orzu qilganman. Bu davr mening yozuvchilik tasavvurimni shakllantirdi.',
      stage1Global: {
        instructionUz: '1-Bosqich (Global tushunish): Yozuvchining bolaligidagi eng sevimli xotirasi nima?',
        questionUz: 'Yozuvchi qaysi davrni eng yoqimli xotira sifatida ta‘kidlaydi?',
        options: ['Maktabdagi qishki ta‘tillarini', 'Qishloqda buva-buvisi bilan o‘tgan yozgi ta‘tilni', 'Shahardagi televizor tomosha qilgan kunlarini'],
        correctIndex: 1,
        explanationUz: 'Janob Veber qishloqdagi yozgi ta‘tillarini eng sevimli xotira deb aytdi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich (Batafsil tushunish): Matndagi voqealar ketma-ketligini aniqlang.',
        questions: [
          {
            id: 'l49-q1',
            questionUz: 'Ular qachon buva-buvisinikiga jo‘nab ketishardi?',
            options: ['Imtihonlarni muvaffaqiyatli topshirgandan so‘ng', 'Kitob yozib bo‘lgach', 'Qaroqchilar bilan uchrashgach'],
            correctIndex: 0,
            explanationUz: '"Nachdem wir die Prüfungen bestanden hatten, fuhren wir sofort zu ihnen" jumlasi buni tasdiqlaydi.'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Moderator', textDe: 'Woran erinnern Sie sich am liebsten?', textUz: 'Nimani eng yoqimli eslaysiz?' },
          { speaker: 'Herr Weber', textDe: 'An die Ferien auf dem Land, nachdem wir die Prüfungen bestanden hatten.', textUz: 'Imtihonlarni topshirganimizdan so‘ng qishloqdagi ta‘tilni.' }
        ],
        keyVocabulary: [
          { german: 'bestehen (Prüfung)', uzbek: 'imtihondan o‘tmoq' },
          { german: 'das Floß', uzbek: 'sol (yog‘och qayiq)' },
          { german: 'entscheidend prägen', uzbek: 'hal qiluvchi darajada shakllantirmoq' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-49',
        lessonId: 'les-49',
        levelCode: 'b1-1',
        titleDe: 'Eine Kindheit ohne Smartphone',
        titleUz: 'Smartfonsiz o‘tgan bolalik',
        textDe: 'Viele Menschen, die in den 1990er Jahren aufgewachsen sind, erinnern sich gerne an eine analoge Kindheit zurück. Bevor es Smartphones und soziale Medien gab, verbrachten Kinder ihre Nachmittage draußen. Man verabredete sich einfach persönlich an der Straßenecke. Nachdem die Kinder ihre Hausaufgaben beendet hatten, durften sie bis zum Abend spielen. Erst als die Straßenlaternen angingen, wusste jeder: Es ist Zeit fürs Abendessen.',
        translationUz: '1990-yillarda ulg‘aygan ko‘plab insonlar o‘zlarining analog bolaligini mamnuniyat bilan xotirlashadi. Smartfonlar va ijtimoiy tarmoqlar paydo bo‘lishidan oldin bolalar tushdan keyingi vaqtlarini ko‘chada o‘tkazishardi. Ko‘cha burchagida shunchaki uchrashuv belgilanardi. Bolalar vazifalarini tugatgach, kechgacha o‘ynashga ruxsat berilardi. Ko‘cha chiroqlari yongandagina hamma kechki ovqat vaqti kelganini tushunardi.',
        vocabularyHints: [
          { german: 'die Straßenlaterne', uzbek: 'ko‘cha chirog‘i' },
          { german: 'sich verabreden', uzbek: 'uchrashuv belgilamoq' }
        ],
        questions: [
          {
            id: 'q-rea-49-1',
            questionUz: 'Bolalar kechki ovqat vaqti bo‘lganini qanday bilishgan?',
            options: ['Ota-onalari qo‘ng‘iroq qilganda', 'Ko‘cha chiroqlari yonganda', 'Soat ovozi eshitilganda'],
            correctIndex: 1,
            explanationUz: 'Matnda "Erst als die Straßenlaternen angingen, wusste jeder..." deb yozilgan.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-49',
      lessonId: 'les-49',
      levelCode: 'b1-1',
      taskDe: 'Schreiben Sie einen kurzen Text über Ihre Kindheit mit "nachdem".',
      taskUz: 'Bolaligingizdagi unutilmas voqea haqida "nachdem" va Plusquamperfekt yordamida matn yozing.',
      instructionUz: 'Qayerda ulg‘ayganingizni va bolalikdagi sevimli mashg‘ulotingizni bayon qiling.',
      hints: ['Ich bin in... aufgewachsen.', 'Nachdem ich die Schule beendet hatte, habe ich...'],
      sampleSolutionDe: 'Ich bin in Taschkent aufgewachsen. Meine Kindheit war sehr aktiv. Nachdem ich meine Schularbeiten gemacht hatte, ging ich mit meinen Freunden Fußball spielen. Damals war das Leben herrlich unkompliziert.',
      scaffold: {
        openingDe: 'Meine Kindheitserinnerung:',
        closingDe: 'Diese Zeit werde ich nie vergessen.',
        usefulPhrasesDe: ['Ich erinnere mich an...', 'Nachdem ich ... hatte/war...', 'Damals...']
      }
    },
    shadowing: [
      {
        id: 'sha-49',
        lessonId: 'les-49',
        levelCode: 'b1-1',
        sentenceDe: 'Nachdem wir die Prüfungen bestanden hatten, verbrachten wir den ganzen Sommer am Fluss.',
        translationUz: 'Imtihonlarni topshirganimizdan so‘ng, butun yozni daryo bo‘yida o‘tkazdik.',
        phoneticHint: '[Nah-dem vir di Pryu-fun-gen be-shtan-den hat-ten, fer-brah-ten vir den gan-tsen Zom-mer am Fluss]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-49-q1',
        type: 'fill-blank',
        questionUz: 'Plusquamperfekt yordamchi fe‘lini to‘g‘ri qo‘ying: "Nachdem er nach Hause gekommen _____, kochte er Kaffee."',
        blankSentence: 'Nachdem er nach Hause gekommen [blank], kochte er Kaffee.',
        options: ['war', 'hatte', 'ist', 'wurde'],
        correctAnswer: 'war',
        explanationUz: '"kommen" harakat va siljish fe‘li bo‘lgani uchun Plusquamperfektda "war" oladi.',
        mistakeTipUz: '❌ Joy o‘zgarishi fe‘llari Plusquamperfektda "sein" (war) bilan yasaladi.'
      },
      {
        id: 'prac-49-q2',
        type: 'multiple-choice',
        questionUz: 'Qaysi gapda zamonlar moslashuvi to‘g‘ri qo‘llangan?',
        options: [
          'Nachdem ich das Buch gelesen hatte, gab ich es meinem Freund zurück.',
          'Nachdem ich das Buch gelesen habe, gab ich es meinem Freund zurück.',
          'Nachdem ich das Buch lese, gab ich es meinem Freund zurück.'
        ],
        correctAnswer: 'Nachdem ich das Buch gelesen hatte, gab ich es meinem Freund zurück.',
        explanationUz: 'Bosh gap Präteritumda (gab) bo‘lsa, nachdem gapi Plusquamperfektda (gelesen hatte) bo‘ladi.',
        mistakeTipUz: '❌ O‘tmishdagi oldinma-ketlik: nachdem + Plusquamperfekt, bosh gap + Präteritum.'
      },
      {
        id: 'prac-49-q3',
        type: 'word-order',
        questionUz: 'Gapni to‘g‘ri so‘z tartibida tuzing:',
        scrambledWords: ['hatte,', 'gearbeitet', 'Nachdem', 'er', 'lange', 'müde', 'war', 'er'],
        correctAnswer: 'Nachdem er lange gearbeitet hatte, war er müde',
        explanationUz: 'Ergash gapda fe‘l oxirida (gearbeitet hatte), bosh gap esa fe‘l bilan boshlanadi (war er).',
        mistakeTipUz: '❌ Ergash gap boshida kelsa, bosh gap darhol fe‘l bilan boshlanadi: Nachdem ..., war er müde.'
      }
    ]
  },

  // ==========================================
  // LEKTION 50: Meilensteine und Lebenswege
  // ==========================================
  {
    id: 'les-50',
    moduleId: 'mod-b1-1-1',
    levelCode: 'b1-1',
    titleDe: 'Meilensteine und Lebenswege',
    titleUz: 'Hayotning muhim bekatlari va tanlovlar',
    descriptionUz: 'Hayotdagi burilish nuqtalari, "als" va "wenn" temporale bog‘lovchilari farqi.',
    orderIndex: 50,
    estimatedMinutes: 45,
    isPublished: true,
    objectivesUz: [
      'Hayotdagi muhim voqealar va qarorlar haqida gapirish',
      '"als" (bir martalik o‘tgan voqea) va "wenn" (takroriy/hozirgi) farqini o‘zlashtirish',
      'Rezyume va tarjimai holni nemischa ifodalash'
    ],
    warmUp: {
      situationUz: 'Universitetni bitirish, birinchi ishga kirish yoki boshqa davlatga ko‘chish kabi hayotingizdagi eng muhim burilish nuqtalarini eslayapsiz.',
      curiosityQuestionUz: 'Nemis tilida "Qachonki men 18 yoshga to‘lganimda..." deganda "als" ishlatiladimi yoki "wenn"?',
      miniDialogue: [
        { speaker: 'Felix', textDe: 'Wann hast du beschlossen, Informatik zu studieren?', textUz: 'Informatikani o‘rganishga qachon qaror qilgansan?' },
        { speaker: 'Mia', textDe: 'Als ich meinen ersten Computer bekam, wusste ich sofort: Das ist meine Zukunft.', textUz: 'Birinchi kompyuterimni olganimda, darhol bildim: bu mening kelajagim.' }
      ],
      hintUz: 'O‘tmishda faqat BIR MARTA yuz bergan voqea uchun "als" ishlatiladi.'
    },
    contextDialogue: {
      titleDe: 'Entscheidungen, die das Leben verändern',
      titleUz: 'Hayotni o‘zgartirgan qarorlar',
      situationUz: 'Ikkita kasbdosh o‘z kasbiy yo‘li va muhim burilish nuqtalari haqida fikr almashmoqda.',
      lines: [
        { speaker: 'Felix', textDe: 'Mia, wie bist du eigentlich zu diesem Beruf gekommen?', textUz: 'Mia, o‘zi bu kasbga qanday kirib kelgansan?' },
        { speaker: 'Mia', textDe: 'Als ich 18 Jahre alt war, wollte ich eigentlich Musikerin werden. Aber meine Eltern rieten mir davon ab.', textUz: '18 yoshimda aslida musiqachi bo‘lmoqchi edim. Ammo ota-onam bu fikrdan qaytarishdi.' },
        { speaker: 'Felix', textDe: 'Und hast du diese Entscheidung jemals bereut?', textUz: 'Va bu qarordan hech afsuslanganmisan?' },
        { speaker: 'Mia', textDe: 'Nein, überhaupt nicht! Immer wenn ich ein neues Software-Projekt starte, spüre ich dieselbe Kreativität.', textUz: 'Yo‘q, aslo! Qachonki yangi dasturiy loyihani boshlasam, o‘sha ijodkorlikni his qilaman.' }
      ],
      usefulPhrases: [
        { german: 'der Meilenstein', uzbek: 'muhim bekat, burilish nuqtasi' },
        { german: 'abraten von (+ Dat)', uzbek: '...dan qaytarmoq, maslahat bermaslik' },
        { german: 'bereuen (+ Akk)', uzbek: 'afsuslanmoq, pushaymon bo‘lmoq' },
        { german: 'immer wenn', uzbek: 'har gal ... bo‘lganda' }
      ],
      culturalNoteUz: 'Germaniyada kasbiy yo‘lni 30 yoki 40 yoshda ham butunlay o‘zgartirish (Umschulung) odatiy va ijtimoiy qo‘llab-quvvatlanadigan jarayondir.'
    },
    vocabulary: [
      {
        id: 'voc-b1-2-1',
        lessonId: 'les-50',
        levelCode: 'b1-1',
        german: 'der Meilenstein',
        article: 'der',
        plural: 'die Meilensteine',
        uzbek: 'muhim bosqich, burilish nuqtasi',
        exampleDe: 'Der Hochschulabschluss war ein wichtiger Meilenstein in meinem Leben.',
        exampleUz: 'Oliy ma‘lumot to‘g‘risidagi diplom hayotimdagi muhim bekat edi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-2-2',
        lessonId: 'les-50',
        levelCode: 'b1-1',
        german: 'der Schulabschluss',
        article: 'der',
        plural: 'die Schulabschlüsse',
        uzbek: 'maktab attestati',
        exampleDe: 'Nach dem Schulabschluss machte er eine Ausbildung.',
        exampleUz: 'Maktabni bitirgach, u kasbiy ta‘lim oldi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-2-3',
        lessonId: 'les-50',
        levelCode: 'b1-1',
        german: 'beschließen',
        article: null,
        plural: null,
        uzbek: 'qaror qilmoq, ahd qilmoq',
        exampleDe: 'Sie beschloss, ins Ausland zu gehen.',
        exampleUz: 'U chet elga ketishga ahd qildi.',
        wordType: 'verb'
      },
      {
        id: 'voc-b1-2-4',
        lessonId: 'les-50',
        levelCode: 'b1-1',
        german: 'bereuen',
        article: null,
        plural: null,
        uzbek: 'afsuslanmoq',
        exampleDe: 'Ich habe meinen Schritt nie bereut.',
        exampleUz: 'Men tashlagan qadamimdan aslo afsuslanmaganman.',
        wordType: 'verb'
      },
      {
        id: 'voc-b1-2-5',
        lessonId: 'les-50',
        levelCode: 'b1-1',
        german: 'die Volljährigkeit',
        article: 'die',
        uzbek: 'balog‘at yoshi (18 yosh)',
        exampleDe: 'Mit der Volljährigkeit beginnt ein neuer Lebensabschnitt.',
        exampleUz: 'Balog‘at yoshiga yetish bilan hayotning yangi bosqichi boshlanadi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-2-6',
        lessonId: 'les-50',
        levelCode: 'b1-1',
        german: 'heiraten',
        article: null,
        plural: null,
        uzbek: 'turmush qurmoq, uylanmoq',
        exampleDe: 'Sie haben letztes Jahr geheiratet.',
        exampleUz: 'Ular o‘tgan yili turmush qurishdi.',
        wordType: 'verb'
      },
      {
        id: 'voc-b1-2-7',
        lessonId: 'les-50',
        levelCode: 'b1-1',
        german: 'der Wendepunkt',
        article: 'der',
        plural: 'die Wendepunkte',
        uzbek: 'burilish nuqtasi',
        exampleDe: 'Die Reise nach Deutschland war der Wendepunkt seiner Karriere.',
        exampleUz: 'Germaniyaga safar uning karyerasidagi burilish nuqtasi bo‘ldi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-2-8',
        lessonId: 'les-50',
        levelCode: 'b1-1',
        german: 'prägend',
        article: null,
        plural: null,
        uzbek: 'chuqur taassurot qoldiruvchi',
        exampleDe: 'Das war eine sehr prägende Erfahrung.',
        exampleUz: 'Bu juda katta taassurot qoldirgan tajriba edi.',
        wordType: 'adjective'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'Ushbu gaplardagi "als" va "wenn" ning o‘rniga va voqeaning necha marta sodir bo‘lganiga diqqat qiling:',
      discoveryExamples: [
        {
          german: 'Als ich nach Berlin kam, fand ich sofort eine Wohnung.',
          highlight: 'Als',
          uzbek: 'Berlinga kelganimda (bir marta, o‘tmishda), darhol kvartira topdim.'
        },
        {
          german: 'Immer wenn ich nach Berlin komme, besuche ich das Brandenburger Tor.',
          highlight: 'wenn',
          uzbek: 'Har gal Berlinga kelganimda (har safar, takroriy), Brandenburger Torga boraman.'
        }
      ],
      patternExplanationUz: 'O‘tmishdagi BIR MARTALIK aniq voqea uchun doimo "als", takroriy voqealar (immer wenn) yoki hozirgi/kelasi zamon uchun esa "wenn" ishlatiladi.',
      ruleFormulaUz: 'Als = o‘tmishda 1 marta | Wenn = har doim (immer wenn) yoki hozir/kelasi zamonda'
    },
    grammar: [
      {
        id: 'gra-50',
        lessonId: 'les-50',
        levelCode: 'b1-1',
        titleDe: 'Temporale Nebensätze: "als" vs. "wenn"',
        titleUz: 'Vaqt ergash gaplari: "als" va "wenn" farqi',
        summaryUz: '"als" faqat o‘tgan zamonda bir marta bo‘lgan voqeada qo‘llanadi, "wenn" esa takroriy yoki hozirgi voqeada.',
        explanationUz: `Ko‘pchilik til o‘rganuvchilar adashadigan eng mashhur qoida:
1. **als**:
   - Faqat O‘TGAN ZAMONDA (Präteritum / Perfekt / Plusquamperfekt).
   - Faqat BIR MARTA sodir bo‘lgan fakt yoki holat.
   - Misol: *Als ich ein Kind war...* (Bolaligimda — inson bir marta bola bo‘ladi).
2. **wenn**:
   - Hozirgi yoki kelasi zamonda (*Wenn ich Zeit habe...*).
   - O‘tgan zamonda TAKRORIY voqea bo‘lsa (*Immer wenn ich ihn sah...*).`,
        tables: [
          {
            title: 'als va wenn qiyosiy jadvali',
            headers: ['Bog‘lovchi', 'Zamon', 'Voqea xarakteri', 'Misol'],
            rows: [
              ['als', 'Faqat o‘tgan zamon', 'Bir martalik (einmalig)', 'Als ich das Abitur machte...'],
              ['wenn', 'Hozirgi / Kelasi', 'Shartli yoki payt', 'Wenn ich fertig bin...'],
              ['immer wenn', 'O‘tgan zamon', 'Takrorlanuvchi (mehrmals)', 'Immer wenn wir Ferien hatten...']
            ]
          }
        ],
        examples: [
          {
            german: 'Als ich 18 Jahre alt wurde, zog ich von zu Hause aus.',
            uzbek: '18 yoshga to‘lganimda, uydan alohida chiqib ketdim.',
            highlight: 'Als ... wurde'
          },
          {
            german: 'Jedes Mal wenn er anrief, freute ich mich.',
            uzbek: 'Har gal u qo‘ng‘iroq qilganda, men xursand bo‘lardim.',
            highlight: 'wenn ... anrief'
          }
        ],
        commonMistakes: [
          {
            incorrect: 'Wenn ich gestern nach Hause kam, schlief mein Bruder.',
            correct: 'Als ich gestern nach Hause kam, schlief mein Bruder.',
            explanationUz: 'Kecha bir marta sodir bo‘lgan o‘tgan voqea uchun "wenn" emas, "als" ishlatiladi.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Ein Wendepunkt im Berufsleben',
      titleUz: 'Kasbiy hayotdagi burilish nuqtasi',
      situationUz: 'Klara o‘zining muvaffaqiyatli startapini qanday boshlagani haqida intervyu bermoqda.',
      audioTranscriptDe: 'Journalist: Frau Klein, wann wussten Sie, dass Sie Ihr eigenes Unternehmen gründen wollen?\nKlara: Das war vor fünf Jahren. Als ich meinen alten Job verlor, war das zuerst ein riesiger Schock. Aber anstatt den Kopf hängen zu lassen, sah ich die Chance darin. Immer wenn ich früher mit Kunden sprach, merkte ich, dass eine einfache Software-Lösung fehlte. Also gründete ich mein eigenes Start-up. Heute beschäftige ich 15 Mitarbeiter.',
      translationUz: 'Jurnalist: Klara xonim, qachon o‘z kompaniyangizni ochishni xohlayotganingizni anglagansiz?\nKlara: Bu besh yil oldin edi. Eski ishimni yo‘qotganimda, bu dastlab katta zarba bo‘ldi. Ammo umidsizlikka tushish o‘rniga, unda yangi imkoniyatni ko‘rdim. Ilgari har gal mijozlar bilan suhbatlashganimda, oddiy dasturiy yechim yetishmasligini sezardim. Shunday qilib o‘z startapimni tuzdim. Bugun 15 nafar xodimga egaman.',
      stage1Global: {
        instructionUz: '1-Bosqich: Klara o‘z biznesini qachon boshlashga qaror qildi?',
        questionUz: 'Klaraning biznes boshlashiga nima turtki bo‘ldi?',
        options: ['Universitetni bitirishi', 'Eski ishidan ayrilishi', 'Katta meros olishi'],
        correctIndex: 1,
        explanationUz: 'Klara "Als ich meinen alten Job verlor..." deb eski ishini yo‘qotgan paytni aytib berdi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Tafsilotlarni aniqlang.',
        questions: [
          {
            id: 'l50-q1',
            questionUz: 'Klara ilgari mijozlar bilan gaplashganda nimani payqagan edi?',
            options: ['Odamlar pul to‘lashni istamasligini', 'Oddiy dasturiy yechim yo‘qligini', 'Xodimlar yetishmasligini'],
            correctIndex: 1,
            explanationUz: '"...merkte ich, dass eine einfache Software-Lösung fehlte".'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Klara', textDe: 'Als ich meinen alten Job verlor, sah ich die Chance.', textUz: 'Eski ishimni yo‘qotganimda, unda imkoniyatni ko‘rdim.' },
          { speaker: 'Journalist', textDe: 'Und was passierte danach?', textUz: 'Va undan keyin nima sodir bo‘ldi?' }
        ],
        keyVocabulary: [
          { german: 'den Job verlieren', uzbek: 'ishdan ayrilmoq' },
          { german: 'das Unternehmen gründen', uzbek: 'korxona tashkil etmoq' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-50',
        lessonId: 'les-50',
        levelCode: 'b1-1',
        titleDe: 'Vom Traum zum Beruf: Sarahs Weg',
        titleUz: 'Orzudan kasb sari: Saraning yo‘li',
        textDe: 'Als Sarah 16 Jahre alt war, träumte sie davon, Architektin zu werden. Sie liebte es, Gebäude zu zeichnen. Doch als sie die Aufnahmeprüfung an der Kunstakademie nicht bestand, schien ihr Traum zerstört. Sie begann eine Ausbildung im Buchhandel. Jedes Mal wenn ein neues Buch über moderne Architektur ankam, las sie es mit Begeisterung. Mit 25 Jahren wagte sie den Neuanfang und begann doch noch ein Architekturstudium. Heute leitet sie ihr eigenes Büro.',
        translationUz: 'Sara 16 yoshda bo‘lganida me‘mor bo‘lishni orzu qilardi. U binolar chizishni yaxshi ko‘rardi. Ammo san‘at akademiyasiga kirish imtihonidan o‘ta olmaganida, orzusi puchga chiqqandek tuyuldi. U kitob savdosida ta‘lim oldi. Zamonaviy me‘morchilik haqidagi yangi kitob kelgan har safar, uni zo‘r ishtiyoq bilan o‘qirdi. 25 yoshida u yangi boshlanishga jur‘at etdi va baribir arxitektura fakultetiga o‘qishga kirdi. Bugun u o‘z byurosini boshqarmoqda.',
        vocabularyHints: [
          { german: 'wagen', uzbek: 'jur‘at qilmoq' },
          { german: 'die Aufnahmeprüfung', uzbek: 'kirish imtihoni' }
        ],
        questions: [
          {
            id: 'q-rea-50-1',
            questionUz: 'Sara 25 yoshida qanday muhim qaror qabul qildi?',
            options: ['Kitob do‘konini sotib oldi', 'Arxitektura bo‘yicha o‘qishni boshladi', 'Chet elga ko‘chib ketdi'],
            correctIndex: 1,
            explanationUz: 'Matnda "begann doch noch ein Architekturstudium" deb ko‘rsatilgan.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-50',
      lessonId: 'les-50',
      levelCode: 'b1-1',
      taskDe: 'Schreiben Sie über einen wichtigen Meilenstein in Ihrem Leben.',
      taskUz: 'Hayotingizdagi muhim bekat haqida "als" yordamida yozing.',
      instructionUz: 'Voqea qachon sodir bo‘lganini va hayotingizga qanday ta‘sir qilganini tushuntiring.',
      hints: ['Als ich ... war, habe ich...', 'Das war ein wichtiger Wendepunkt...'],
      sampleSolutionDe: 'Als ich 18 Jahre alt war, begann ich mein Studium an der Universität. Es war das erste Mal, dass ich von meiner Familie getrennt lebte. Diese Erfahrung hat mich sehr selbstständig und stark gemacht.',
      scaffold: {
        openingDe: 'Ein wichtiger Meilenstein:',
        closingDe: 'Ich bin dankbar für diese Erfahrung.',
        usefulPhrasesDe: ['Als ich ... war, ...', 'Damals lernte ich, dass...', 'Es war ein Wendepunkt...']
      }
    },
    shadowing: [
      {
        id: 'sha-50',
        lessonId: 'les-50',
        levelCode: 'b1-1',
        sentenceDe: 'Als ich die Aufnahmeprüfung bestand, begann für mich ein völlig neues Kapitel des Lebens.',
        translationUz: 'Kirish imtihonidan o‘tganimda, men uchun hayotning mutlaqo yangi sahifasi ochildi.',
        phoneticHint: '[Als ih di Auf-nah-me-pryu-fung be-shtant, be-gann fyur mih ayn fël-lih noy-es Ka-pi-tel des Le-bens]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-50-q1',
        type: 'fill-blank',
        questionUz: '"als" yoki "wenn": "_____ ich gestern nach Hause kam, regnete es in Strömen."',
        blankSentence: '[blank] ich gestern nach Hause kam, regnete es in Strömen.',
        options: ['Als', 'Wenn', 'Wann', 'Weil'],
        correctAnswer: 'Als',
        explanationUz: 'Kecha sodir bo‘lgan bir martalik o‘tgan voqea uchun "Als" tanlanadi.',
        mistakeTipUz: '❌ O‘tgan zamonda bir marta yuz bergan holat uchun doimo "Als" ishlatiladi.'
      },
      {
        id: 'prac-50-q2',
        type: 'multiple-choice',
        questionUz: '"Immer ____ ich ihn treffe, sprechen wir über alte Zeiten." (Hozirgi takroriy holat)',
        options: ['wenn', 'als', 'wann', 'ob'],
        correctAnswer: 'wenn',
        explanationUz: '"Immer wenn" har safar sodir bo‘ladigan takroriy holatni bildiradi.',
        mistakeTipUz: '❌ Takroriy holatlar uchun "wenn" ishlatiladi: immer wenn.'
      },
      {
        id: 'prac-50-q3',
        type: 'word-order',
        questionUz: 'Gapni to‘g‘ri so‘z tartibida tuzing:',
        scrambledWords: ['Als', 'Deutsch', 'er', 'lernte,', 'war', 'er', 'Jahre', 'zehn', 'alt'],
        correctAnswer: 'Als er Deutsch lernte, war er zehn Jahre alt',
        explanationUz: 'Als ergash gapida fe‘l oxirida (lernte), bosh gap esa fe‘l bilan boshlanadi (war er).',
        mistakeTipUz: '❌ Ergash gapdan keyin bosh gap darhol fe‘l bilan boshlanadi: Als ..., war er...'
      }
    ]
  },

  // ==========================================
  // LEKTION 51: Zeitgefühl und Entschleunigung
  // ==========================================
  {
    id: 'les-51',
    moduleId: 'mod-b1-1-1',
    levelCode: 'b1-1',
    titleDe: 'Zeitgefühl und Entschleunigung',
    titleUz: 'Vaqt qadri, shoshilish va xotirjamlik',
    descriptionUz: 'Vaqtni to‘g‘ri boshqarish, hayot tezligi, "während" va "solange" bog‘lovchilari.',
    orderIndex: 51,
    estimatedMinutes: 45,
    isPublished: true,
    objectivesUz: [
      'Vaqt yetishmovchiligi va zamonaviy stress haqida mulohaza yuritish',
      '"während" (paytida / davomida) va "solange" (modomiki / davom etar ekan) bog‘lovchilarini qo‘llash',
      'Hordiq chiqarish va sekinlashish (Entschleunigung) madaniyatini o‘rganish'
    ],
    warmUp: {
      situationUz: 'Kuningiz tinimsiz yugur-yugur, xabarlarga javob berish va shoshilish bilan o‘tmoqda. Vaqtni to‘xtatib turishni xohlaysiz.',
      curiosityQuestionUz: '"Men dars qilayotgan paytimda, u musiqa tinglayotgan edi" degan gap nemischa qanday aytiladi?',
      miniDialogue: [
        { speaker: 'Ben', textDe: 'Ich habe das Gefühl, dass die Zeit heutzutage immer schneller rennt.', textUz: 'Menda hozirgi kunlarda vaqt borgan sari tezroq yugurayotgandek tuyg‘u bor.' },
        { speaker: 'Lea', textDe: 'Deshalb mache ich digitale Pausen. Während ich im Park spaziere, bleibt mein Handy stumm.', textUz: 'Shuning uchun men raqamli tanaffuslar qilaman. Bog‘da sayr qilayotganimda, telefonim o‘chiq turadi.' }
      ],
      hintUz: '"während" bir vaqtning o‘zida sodir bo‘layotgan ikkita jarayonni bog‘laydi.'
    },
    contextDialogue: {
      titleDe: 'Einfach mal abschalten',
      titleUz: 'Shunchaki hamma narsani o‘chirib qo‘yish',
      situationUz: 'Ikki hamkasb tushlik tanaffusida zamonaviy hayot tezligi va vaqtdan unumli foydalanish haqida gaplashmoqda.',
      lines: [
        { speaker: 'Ben', textDe: 'Lea, warum hast du heute so gute Laune? Dein Schreibtisch ist doch voll mit Akten.', textUz: 'Lea, nega bugun kayfiyating ajoyib? Axir stoling to‘la hujjatlar-ku.' },
        { speaker: 'Lea', textDe: 'Weil ich beschlossen habe, mich nicht mehr stressen zu lassen. Während andere sich aufregen, arbeite ich ruhig Schritt für Schritt.', textUz: 'Chunki ortiq stressga tushmaslikka qaror qildim. Boshqalar asabiylashayotgan paytda, men xotirjam qadam-baqadam ishlayapman.' },
        { speaker: 'Ben', textDe: 'Aber verlierst du dabei nicht zu viel Zeit?', textUz: 'Ammo shunda ko‘p vaqt yo‘qotmaysanmi?' },
        { speaker: 'Lea', textDe: 'Im Gegenteil! Solange man konzentriert bleibt, schafft man viel mehr als im Chaos.', textUz: 'Aksincha! Inson diqqatini jamlab turar ekan, betartiblikdagiga qaraganda ancha ko‘p narsaga ulguradi.' }
      ],
      usefulPhrases: [
        { german: 'abschalten (sich entspannen)', uzbek: 'miyani dam oldirmoq, chalg‘imoq' },
        { german: 'die Entschleunigung', uzbek: 'hayot sur‘atini sekinlashtirish, osoyishtalik' },
        { german: 'während (+ Nebensatz)', uzbek: '...ayotgan paytda, davomida' },
        { german: 'solange (+ Nebensatz)', uzbek: '...davom etar ekan, modomiki' }
      ],
      culturalNoteUz: 'Germaniyada "Feierabend" (ish kuni tugashi) va "Sonntagsruhe" (yakshanba tinchligi) qonuniy va madaniy jihatdan juda qat‘iy himoyalanadi.'
    },
    vocabulary: [
      {
        id: 'voc-b1-3-1',
        lessonId: 'les-51',
        levelCode: 'b1-1',
        german: 'die Entschleunigung',
        article: 'die',
        uzbek: 'sur‘atni sekinlashtirish, osoyishta hayot',
        exampleDe: 'Entschleunigung hilft gegen den täglichen Stress.',
        exampleUz: 'Sekinlashish kundalik stressga qarshi yordam beradi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-3-2',
        lessonId: 'les-51',
        levelCode: 'b1-1',
        german: 'die Geduld',
        article: 'die',
        uzbek: 'sabr-toqat',
        exampleDe: 'Man braucht viel Geduld beim Sprachenlernen.',
        exampleUz: 'Til o‘rganishda ko‘p sabr-toqat kerak.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-3-3',
        lessonId: 'les-51',
        levelCode: 'b1-1',
        german: 'sich beeilen',
        article: null,
        plural: null,
        uzbek: 'shoshilmoq',
        exampleDe: 'Wir müssen uns beeilen, sonst verpassen wir den Zug.',
        exampleUz: 'Shoshilishimiz kerak, aks holda poyezdni o‘tkazib yuboramiz.',
        wordType: 'verb'
      },
      {
        id: 'voc-b1-3-4',
        lessonId: 'les-51',
        levelCode: 'b1-1',
        german: 'verschwenden',
        article: null,
        plural: null,
        uzbek: 'behuda sarflamoq, isrof qilmoq',
        exampleDe: 'Verschwende deine kostbare Zeit nicht mit sinnlosem Scrollen.',
        exampleUz: 'Qimmatli vaqtingni ma‘nosiz lenta varaqlashga isrof qilma.',
        wordType: 'verb'
      },
      {
        id: 'voc-b1-3-5',
        lessonId: 'les-51',
        levelCode: 'b1-1',
        german: 'das Zeitmanagement',
        article: 'das',
        uzbek: 'vaqtni boshqarish',
        exampleDe: 'Ein gutes Zeitmanagement erhöht die Produktivität.',
        exampleUz: 'Yaxshi vaqt menejmenti samaradorlikni oshiradi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-3-6',
        lessonId: 'les-51',
        levelCode: 'b1-1',
        german: 'die Hektik',
        article: 'die',
        uzbek: 'shoshma-shosharlik, tartibsiz shoshilish',
        exampleDe: 'In der Großstadt herrscht oft große Hektik.',
        exampleUz: 'Katta shaharda ko‘pincha kuchli shoshma-shosharlik hukm suradi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-3-7',
        lessonId: 'les-51',
        levelCode: 'b1-1',
        german: 'ausnutzen',
        article: null,
        plural: null,
        uzbek: 'unumli foydalanmoq',
        exampleDe: 'Wir sollten den sonnigen Tag gut ausnutzen.',
        exampleUz: 'Quyoshli kundan unumli foydalanishimiz kerak.',
        wordType: 'verb'
      },
      {
        id: 'voc-b1-3-8',
        lessonId: 'les-51',
        levelCode: 'b1-1',
        german: 'wertvoll',
        article: null,
        plural: null,
        uzbek: 'qadrli, qimmatbaho',
        exampleDe: 'Zeit ist das wertvollste Gut.',
        exampleUz: 'Vaqt — eng qimmatbaho boylikdir.',
        wordType: 'adjective'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'Quyidagi gaplarda "während" va "solange" bog‘lovchilari qanday ma‘no ifodalamoqda va fe‘l qayerda joylashgan?',
      discoveryExamples: [
        {
          german: 'Während er kochte, hörte sie Musik.',
          highlight: 'Während ... kochte',
          uzbek: 'U ovqat pishirayotgan paytda, qiz musiqa tingladi.'
        },
        {
          german: 'Solange du krank bist, musst du im Bett bleiben.',
          highlight: 'Solange ... bist',
          uzbek: 'Modomiki kasal ekansan (kasalliging davom etar ekan), o‘rinda yotishing shart.'
        }
      ],
      patternExplanationUz: '"während" ikkita ish-harakatning bir vaqtda kechishini bildiradi. "solange" esa bitta holat davom etib turgan butun muddatni ifodalaydi. Ikkalasida ham fe‘l gap oxiriga suriladi.',
      ruleFormulaUz: 'Während / Solange + Ega + ... + Fe‘l (oxirida), [Asosiy gap]'
    },
    grammar: [
      {
        id: 'gra-51',
        lessonId: 'les-51',
        levelCode: 'b1-1',
        titleDe: 'Temporalsätze mit "während" und "solange"',
        titleUz: 'Vaqt ergash gaplari: "während" va "solange"',
        summaryUz: '"während" bir vaqtdalilikni (paytida), "solange" esa muddat davomiyligini (modomiki) ifodalaydi.',
        explanationUz: `1. **während (paytida, davomida):**
   Ikkita alohida harakat ayni bir daqiqada sodir bo‘layotganini ifodalaydi.
   *Während ich arbeite, darf mich niemand stören.* (Men ishlayotgan paytda hech kim xalaqit bermasin.)
   *Diqqat: "während" Genitiv predlogi sifatida ham kelishi mumkin: "während des Essens" (ovqatlanish paytida).*

2. **solange (modomiki, davom etar ekan):**
   Birinchi harakatning muddati ikkinchisiga to‘g‘ridan-to‘g‘ri bog‘liq ekanini bildiradi.
   *Solange es regnet, bleiben wir im Café.* (Yomg‘ir yog‘ib turar ekan, biz kafeda o‘tiramiz.)`,
        tables: [
          {
            title: 'während va solange taqqoslanishi',
            headers: ['Bog‘lovchi', 'Ma‘nosi', 'Misol gap'],
            rows: [
              ['während', 'bir vaqtning o‘zida (paytida)', 'Während er las, schlief sie ein.'],
              ['solange', 'davom etgan muddat davomida', 'Solange ich lebe, lerne ich.']
            ]
          }
        ],
        examples: [
          {
            german: 'Während die Kinder draußen spielten, bereiteten die Eltern das Abendessen vor.',
            uzbek: 'Bolalar ko‘chada o‘ynayotgan paytda, ota-onalari kechki ovqatni tayyorlashdi.',
            highlight: 'Während ... spielten'
          },
          {
            german: 'Solange du fleißig lernst, wirst du schnelle Fortschritte machen.',
            uzbek: 'Modomiki tirishqoqlik bilan o‘rganar ekansan, tez natijalarga erishasan.',
            highlight: 'Solange ... lernst'
          }
        ],
        commonMistakes: [
          {
            incorrect: 'Während ich koche das Essen, sie liest ein Buch.',
            correct: 'Während ich das Essen koche, liest sie ein Buch.',
            explanationUz: '"während" ergash gap bog‘lovchisi bo‘lgani uchun fe‘l oxirga borishi shart (koche).'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Digital Detox: Ein Experiment',
      titleUz: 'Raqamli detoks: Qiziqarli tajriba',
      situationUz: 'Bir jurnalist bir hafta davomida smartfonsiz yashash tajribasini hikoya qilmoqda.',
      audioTranscriptDe: 'Reporter: Eine Woche ohne Smartphone – ist das im 21. Jahrhundert überhaupt noch möglich? Ich habe den Selbstversuch gewagt. Am ersten Tag spürte ich ständige Unruhe. Aber schon am dritten Tag bemerkte ich die Vorteile: Während ich früher in der U-Bahn nur auf das Display starrte, las ich plötzlich wieder Bücher und beobachtete die Menschen. Solange das Handy ausgeschaltet war, fühlte ich mich viel freier und entspannter.',
      translationUz: 'Muxbir: Smartfonsiz bir hafta — XXI asrda buning iloji bormi? Men o‘zimda tajriba o‘tkazishga jur‘at qildim. Birinchi kuni doimiy bezovtalikni his qildim. Ammo uchinchi kuniyoq afzalliklarni payqadim: Ilgari metroda faqat ekranga tikilib o‘tirgan paytimda, endi to‘satdan yana kitob o‘qiy boshladim va odamlarni kuzatdim. Telefon o‘chiq bo‘lib turgan muddatda, o‘zimni ancha erkin va xotirjam his qildim.',
      stage1Global: {
        instructionUz: '1-Bosqich: Muxbir qanday tajriba o‘tkazdi?',
        questionUz: 'Tajribaning asosiy maqsadi nima edi?',
        options: ['Yangi smartfon sotib olish', 'Bir hafta smartfonsiz yashab ko‘rish', 'Metroda tekin yurish'],
        correctIndex: 1,
        explanationUz: 'Muxbir "Eine Woche ohne Smartphone" tajribasini o‘tkazganini ma‘lum qildi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Tafsilotlarni tekshiring.',
        questions: [
          {
            id: 'l51-q1',
            questionUz: 'Telefon o‘chiq bo‘lgan paytda muxbir o‘zini qanday his qildi?',
            options: ['Juda g‘amgin va zerikkan', 'Ancha erkin va xotirjam', 'Qo‘rquv va xavotirda'],
            correctIndex: 1,
            explanationUz: '"...fühlte ich mich viel freier und entspannter" jumlasi keltirilgan.'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Reporter', textDe: 'Während ich früher aufs Display starrte, lese ich jetzt Bücher.', textUz: 'Ilgari ekranga tikilgan paytimda, endi kitoblar o‘qimoqdaman.' },
          { speaker: 'Hörer', textDe: 'Das klingt nach echter Entschleunigung!', textUz: 'Bu haqiqiy xotirjamlikka o‘xshaydi!' }
        ],
        keyVocabulary: [
          { german: 'der Selbstversuch', uzbek: 'o‘zida sinab ko‘rish' },
          { german: 'aufs Display starren', uzbek: 'ekranga tikilib qolmoq' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-51',
        lessonId: 'les-51',
        levelCode: 'b1-1',
        titleDe: 'Die Kunst des Nichtstuns',
        titleUz: 'Hech narsa qilmaslik san‘ati',
        textDe: 'In unserer modernen Leistungsgesellschaft gilt ständige Beschäftigung als Statussymbol. Wer sagt: "Ich habe viel zu tun", wirkt wichtig. Doch Mediziner warnen vor chronischer Überlastung. Echte Erholung geschieht erst dann, wenn das Gehirn zur Ruhe kommt. Während man spazieren geht oder einfach aus dem Fenster schaut, ordnen sich Gedanken neu. Solange wir uns keine bewussten Pausen gönnen, leidet unsere Kreativität.',
        translationUz: 'Bizning zamonaviy muvaffaqiyatga yo‘naltirilgan jamiyatimizda doimiy band bo‘lish nufuz belgisi hisoblanadi. Kimki "Ishlarim boshimdan oshib yotibdi" desa, muhim shaxsidek ko‘rinadi. Biroq shifokorlar surunkali zo‘riqishdan ogohlantirmoqda. Haqiqiy hordiq miya tinchlangandagina yuz beradi. Sayr qilayotgan yoki shunchaki derazadan qarab turgan paytda, fikrlar yangitdan tartibga tushadi. Modomiki o‘zimizga ongli tanaffuslar bermas ekanmiz, ijodkorligimiz zarar ko‘radi.',
        vocabularyHints: [
          { german: 'die Leistungsgesellschaft', uzbek: 'samaradorlikka yo‘naltirilgan jamiyat' },
          { german: 'sich gönnen', uzbek: 'o‘ziga ravo ko‘rmoq, imkon bermoq' }
        ],
        questions: [
          {
            id: 'q-rea-51-1',
            questionUz: 'Shifokorlarning fikricha haqiqiy hordiq qachon sodir bo‘ladi?',
            options: ['Ko‘p pul topganda', 'Miya tinch holatga kelganda', 'Internetda yangilik o‘qiganda'],
            correctIndex: 1,
            explanationUz: 'Matnda "Echte Erholung geschieht erst dann, wenn das Gehirn zur Ruhe kommt" deyilgan.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-51',
      lessonId: 'les-51',
      levelCode: 'b1-1',
      taskDe: 'Wie entspannen Sie sich? Schreiben Sie ein paar Sätze mit "während" oder "solange".',
      taskUz: 'Qanday dam olasiz? "während" yoki "solange" yordamida bir nechta gap yozing.',
      instructionUz: 'Vaqtdan unumli foydalanish va hordiq chiqarish usullaringizni tasvirlang.',
      hints: ['Während ich Musik höre, entspanne ich mich...', 'Solange das Wetter schön ist...'],
      sampleSolutionDe: 'Nach einem anstrengenden Arbeitstag schalte ich mein Telefon aus. Während ich eine Tasse Tee trinke, lese ich ein spannendes Buch. Solange ich im Garten bin, vergesse ich alle Sorgen des Alltags.',
      scaffold: {
        openingDe: 'Meine Erholungsmethode:',
        closingDe: 'So tanke ich neue Energie.',
        usefulPhrasesDe: ['Während ich ... mache, ...', 'Solange ich ... bin, ...', 'Ich schalte ab...']
      }
    },
    shadowing: [
      {
        id: 'sha-51',
        lessonId: 'les-51',
        levelCode: 'b1-1',
        sentenceDe: 'Während andere sich stressen lassen, nehme ich mir bewusst Zeit für einen ruhigen Spaziergang.',
        translationUz: 'Boshqalar stressga tushayotgan paytda, men o‘zimga xotirjam sayr uchun ongli ravishda vaqt ajrataman.',
        phoneticHint: '[Vêh-rent an-de-re zih shtres-sen las-sen, ne-me ih mir be-vusst Tsayt fyur ay-nen ru-hi-gen Shpa-tsir-gang]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-51-q1',
        type: 'fill-blank',
        questionUz: 'Bog‘lovchini to‘g‘ri qo‘ying: "_____ ich im Büro saß, schien draußen herrlich die Sonne."',
        blankSentence: '[blank] ich im Büro saß, schien draußen herrlich die Sonne.',
        options: ['Während', 'Weil', 'Damit', 'Obwohl'],
        correctAnswer: 'Während',
        explanationUz: 'Bir vaqtda yuz bergan parallel voqealar uchun "Während" ishlatiladi.',
        mistakeTipUz: '❌ Parallel voqealar: Während ich im Büro saß...'
      },
      {
        id: 'prac-51-q2',
        type: 'multiple-choice',
        questionUz: '"Solange du Fieber hast, darfst du nicht aufstehen" gapi nimani anglatadi?',
        options: [
          'Harorat tushmaguncha o‘rningdan turishing taqiqlanadi.',
          'Harorating bo‘lgani uchun ko‘chaga chiqishing kerak.',
          'Harorat bo‘lmagan taqdirda ham o‘rinda yot.'
        ],
        correctAnswer: 'Harorat tushmaguncha o‘rningdan turishing taqiqlanadi.',
        explanationUz: '"solange" = harorat bo‘lib turgan butun muddat davomida.',
        mistakeTipUz: '❌ "solange" muddat davomiyligini ko‘rsatadi.'
      },
      {
        id: 'prac-51-q3',
        type: 'word-order',
        questionUz: 'Gapni to‘g‘ri tuzing:',
        scrambledWords: ['Solange', 'ich', 'Geld', 'spare', 'habe,', 'ich', 'kein'],
        correctAnswer: 'Solange ich kein Geld habe, spare ich',
        explanationUz: 'Solange ergash gapida fe‘l oxirida (habe), bosh gap fe‘l bilan boshlanadi (spare ich).',
        mistakeTipUz: '❌ Solange ich kein Geld habe, spare ich.'
      }
    ]
  }
];
