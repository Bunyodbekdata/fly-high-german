import { Lesson } from '../../types/database';

export const MODULE_23_B12_LESSONS: Lesson[] = [
  // ==========================================
  // LEKTION 67: Ehrenamt & Bürgersinn
  // ==========================================
  {
    id: 'les-67',
    moduleId: 'mod-b1-2-3',
    levelCode: 'b1-2',
    titleDe: 'Ehrenamt & Bürgersinn',
    titleUz: 'Ko‘ngillilar faoliyati, jamiyat va N-turlanish',
    descriptionUz: 'Ijtimoiy yordam, ko‘ngillilik (Ehrenamt), fuqarolik burchi, N-Deklination der Substantive (zaif otlarning N-qo‘shimchasi bilan turlanishi: der Kunde, der Student, der Kollege, der Nachbar, der Herr).',
    orderIndex: 67,
    estimatedMinutes: 45,
    isPublished: true,
    objectivesUz: [
      'Ko‘ngillilar loyihalari va ijtimoiy faollik haqida suhbatlashish',
      'N-Deklination (zaif otlar) qoidalarini Akkusativ, Dativ va Genitivda to‘g‘ri qo‘llash',
      'Xayriya tashkilotlari faoliyatini ifodalash'
    ],
    warmUp: {
      situationUz: 'Do‘stingiz haftada ikki soat bolalar shifoxonasida ko‘ngilli (Freiwilliger) bo‘lib kitob o‘qib beradi. U yangi qo‘shnisi (der Nachbar) va talaba (der Student) bilan birga loyiha boshlaganini aytmoqda.',
      curiosityQuestionUz: '"Ich kenne den Studenten" yoki "mit dem Kollegen" degan jumlalarda ot oxiriga nima uchun "-en" qo‘shilyapti?',
      miniDialogue: [
        { speaker: 'Felix', textDe: 'Hast du schon mit dem neuen Nachbarn über das Hilfsprojekt gesprochen?', textUz: 'Yordam loyihasi haqida yangi qo‘shni bilan gaplashdingmi?' },
        { speaker: 'Lena', textDe: 'Ja, ich habe gestern dem Studenten und dem Kollegen davon erzählt. Beide wollen mitmachen!', textUz: 'Ha, kecha talabaga va hamkasbga bu haqda aytdim. Ikkalasi ham qatnashmoqchi!' }
      ],
      hintUz: 'Nemis tilidagi ba‘zi erkak jinsidagi otlar (N-Deklination) Nominativ birlikdan tashqari barcha kelishiklarda -(e)n qo‘shimchasini oladi.'
    },
    contextDialogue: {
      titleDe: 'Gemeinsam stark im Stadtteil',
      titleUz: 'Mahallada birgalikda kuchlimiz',
      situationUz: 'Mahalla ijtimoiy markazida ko‘ngillilar yoshlar va qariyalarga yordam ko‘rsatish loyihasini rejalashtirmoqda.',
      lines: [
        { speaker: 'Felix', textDe: 'Lena, wie viele Freiwillige haben wir für das Sommerfest der Senioren?', textUz: 'Lena, qariyalar yozgi bayrami uchun nechta ko‘ngillimiz bor?' },
        { speaker: 'Lena', textDe: 'Ich habe gestern mit einem ausländischen Studenten und unserem netten Nachbarn gesprochen. Sie bringen noch einen Kollegen mit.', textUz: 'Men kecha bir chet ellik talaba va yoqimli qo‘shnimiz bilan gaplashdim. Ular yana bir hamkasbni ham olib kelishadi.' },
        { speaker: 'Felix', textDe: 'Das ist klasse! Wir müssen dem Herrn von der Stadtverwaltung noch Bescheid geben.', textUz: 'Ajoyib! Shahar hokimiyatidagi janobga ham xabar berishimiz kerak.' },
        { speaker: 'Lena', textDe: 'Schon erledigt. Ohne den tatkräftigen Einsatz dieser Menschen wäre so ein Projekt undenkbar.', textUz: 'Bajarib bo‘lindi. Bu insonlarning faol mehnatisiz bunday loyihani tasavvur ham qilib bo‘lmasdi.' }
      ],
      usefulPhrases: [
        { german: 'das Ehrenamt', uzbek: 'ko‘ngillilik faoliyati' },
        { german: 'der Bürgersinn', uzbek: 'fuqarolik mas‘uliyati' },
        { german: 'Bescheid geben', uzbek: 'xabar bermoq' },
        { german: 'tatkräftiger Einsatz', uzbek: 'faol mehnat' }
      ],
      culturalNoteUz: 'Germaniyada 16 milliondan ortiq inson "Ehrenamt" (bepul ijtimoiy xizmat) bilan shug‘ullanadi.'
    },
    vocabulary: [
      {
        id: 'voc-b1-17-1',
        lessonId: 'les-67',
        levelCode: 'b1-2',
        german: 'das Ehrenamt',
        article: 'das',
        plural: 'die Ehrenämter',
        uzbek: 'ko‘ngillilar xizmati, faxriy ijtimoiy lavozim',
        exampleDe: 'Ein Ehrenamt bereichert das Leben und hilft der Gemeinschaft.',
        exampleUz: 'Ko‘ngillilar faoliyati hayotni boyitadi va jamiyatga yordam beradi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-17-2',
        lessonId: 'les-67',
        levelCode: 'b1-2',
        german: 'der Freiwillige',
        article: 'der',
        plural: 'die Freiwilligen',
        uzbek: 'ko‘ngilli (volontyor)',
        exampleDe: 'Viele Freiwillige engagieren sich bei der Tafel.',
        exampleUz: 'Ko‘plab ko‘ngillilar xayriya fondida faollik ko‘rsatmoqda.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-17-3',
        lessonId: 'les-67',
        levelCode: 'b1-2',
        german: 'der Nachbar',
        article: 'der',
        plural: 'die Nachbarn',
        uzbek: 'qo‘shni (N-Deklination)',
        exampleDe: 'Ich helfe meinem älteren Nachbarn beim Einkauf.',
        exampleUz: 'Men keksa qo‘shnimga bozorlik qilishda yordamlashaman.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-17-4',
        lessonId: 'les-67',
        levelCode: 'b1-2',
        german: 'der Kollege',
        article: 'der',
        plural: 'die Kollegen',
        uzbek: 'hamkasb (N-Deklination)',
        exampleDe: 'Er arbeitet eng mit dem neuen Kollegen zusammen.',
        exampleUz: 'U yangi hamkasb bilan yaqindan hamkorlik qiladi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-17-5',
        lessonId: 'les-67',
        levelCode: 'b1-2',
        german: 'sich engagieren',
        article: null,
        uzbek: 'faol qatnashmoq, jon kuydirmoq (für + Akk.)',
        exampleDe: 'Sie engagiert sich für den Tierschutz.',
        exampleUz: 'U jonivorlarni himoya qilish uchun kurashadi.',
        wordType: 'verb'
      },
      {
        id: 'voc-b1-17-6',
        lessonId: 'les-67',
        levelCode: 'b1-2',
        german: 'der Bürger',
        article: 'der',
        plural: 'die Bürger',
        uzbek: 'fuqaro',
        exampleDe: 'Die Bürger stimmten über den Bau des Parks ab.',
        exampleUz: 'Fuqarolar park qurilishi bo‘yicha ovoz berishdi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-17-7',
        lessonId: 'les-67',
        levelCode: 'b1-2',
        german: 'die Spende',
        article: 'die',
        plural: 'die Spenden',
        uzbek: 'xayriya, ehson',
        exampleDe: 'Die Organisation finanziert sich durch Spenden.',
        exampleUz: 'Tashkilot xayriyalar hisobiga moliyalashtiriladi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-17-8',
        lessonId: 'les-67',
        levelCode: 'b1-2',
        german: 'gemeinnützig',
        article: null,
        uzbek: 'notijorat, jamiyat manfaati uchun',
        exampleDe: 'Das ist ein gemeinnütziger Verein ohne Gewinnabsicht.',
        exampleUz: 'Bu foyda olish maqsadi bo‘lmagan notijorat jamiyatidir.',
        wordType: 'adjective'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'Quyidagi jumlalarda otlarning kelishiklardagi shakllariga qarang:',
      discoveryExamples: [
        {
          german: 'Nominativ: Der Student liest ein Buch.',
          highlight: 'Der Student',
          uzbek: 'Talaba kitob o‘qiyapti (Nom).'
        },
        {
          german: 'Akkusativ: Ich kenne den Studenten schon lange.',
          highlight: 'den Studenten',
          uzbek: 'Men bu talabani ancha vaqtdan beri taniyman (Akk).'
        },
        {
          german: 'Dativ: Wir helfen dem Studenten bei der Wohnungssuche.',
          highlight: 'dem Studenten',
          uzbek: 'Biz talabaga uy izlashda yordam beryapmiz (Dat).'
        }
      ],
      patternExplanationUz: 'Nemis tilidagi ba‘zi erkak jinsidagi otlar (N-Deklination) Nominativ birlikdan tashqari barcha holatlarda -(e)n qo‘shimchasini oladi (des/dem/den Studenten, des/dem/den Nachbarn).',
      ruleFormulaUz: 'Nom: der ... | Akk: den ...-en | Dat: dem ...-en | Gen: des ...-en'
    },
    grammar: [
      {
        id: 'gra-67',
        lessonId: 'les-67',
        levelCode: 'b1-2',
        titleDe: 'N-Deklination der maskulinen Substantive',
        titleUz: 'Erkak jinsidagi otlarning N-turlanishi (Schwache Nomen)',
        summaryUz: 'Maskulin otlar guruhi (Student, Kollege, Nachbar, Herr) barcha qiya kelishiklarda -(e)n oladi.',
        explanationUz: `N-Deklination guruhiga faqat erkak jinsidagi otlar kiradi:
1. -e bilan tugovchi erkak shaxslar: der Kollege, der Kunde, der Junge, der Neffe.
2. Chet tildan kirgan -ent, -ant, -ist, -at bilan tugovchilar: der Student, der Polizist, der Tourist, der Praktikant.
3. Maxsus otlar: der Nachbar, der Herr (den/dem/des Herrn), der Mensch (den/dem/des Menschen).`,
        tables: [
          {
            title: 'N-Deklination birlikda turlanishi',
            headers: ['Kelishik', 'der Kollege', 'der Student', 'der Herr'],
            rows: [
              ['Nominativ', 'der Kollege', 'der Student', 'der Herr'],
              ['Akkusativ', 'den Kollegen', 'den Studenten', 'den Herrn'],
              ['Dativ', 'dem Kollegen', 'dem Studenten', 'dem Herrn'],
              ['Genitiv', 'des Kollegen', 'des Studenten', 'des Herrn']
            ]
          }
        ],
        examples: [
          {
            german: 'Ich habe gestern den netten Nachbarn im Flur getroffen.',
            uzbek: 'Kecha koridorda yoqimli qo‘shnini uchratdim.',
            highlight: 'den netten Nachbarn'
          },
          {
            german: 'Geben Sie bitte dem Kunden diese Quittung.',
            uzbek: 'Iltimos, mijozga ushbu kvitansiyani bering.',
            highlight: 'dem Kunden'
          }
        ],
        commonMistakes: [
          {
            incorrect: 'Ich frage den Kollege.',
            correct: 'Ich frage den Kollegen.',
            explanationUz: '"der Kollege" N-Deklination bo‘lib, Akkusativda "den Kollegen" bo‘ladi.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Gemeinsam stark im Stadtteil',
      titleUz: 'Mahallada birgalikda kuchlimiz',
      situationUz: 'Ko‘ngillilar keksalarga yordam loyihasini tayyorlamoqda.',
      audioTranscriptDe: 'Felix: Lena, wie viele Freiwillige haben wir für das Sommerfest der Senioren?\nLena: Ich habe gestern mit einem ausländischen Studenten und unserem netten Nachbarn gesprochen. Sie bringen noch einen Kollegen mit.\nFelix: Das ist klasse! Wir müssen dem Herrn von der Stadtverwaltung noch Bescheid geben.\nLena: Schon erledigt.',
      translationUz: 'Felix: Lena, keksalar bayrami uchun nechta ko‘ngillimiz bor?\nLena: Kecha chet ellik talaba va yoqimli qo‘shnimiz bilan gaplashdim. Ular yana bir hamkasbni olib kelishadi.\nFelix: Ajoyib! Shahar boshqarmasidagi janobga ham xabar berishimiz kerak.\nLena: Bajarib bo‘lindi.',
      stage1Global: {
        instructionUz: '1-Bosqich: Tadbir kimlar uchun tayyorlanmoqda?',
        questionUz: 'Ko‘ngillilar kimlar uchun tadbir tayyorlamoqda?',
        options: ['Sport musobaqasi uchun', 'Keksalar (Senioren) uchun yozgi bayram', 'Maktab ta‘miri uchun'],
        correctIndex: 1,
        explanationUz: 'Tadbir keksalar yozgi bayrami (Sommerfest der Senioren) uchun.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: N-Deklination shakllariga e‘tibor bering.',
        questions: [
          {
            id: 'l67-q1',
            questionUz: 'Lena kimlar bilan gaplashganini aytdi?',
            options: ['Faqat oshpazlar bilan', 'Bir talaba va qo‘shni bilan (Studenten, Nachbarn)', 'Hech kim rozi bo‘lmadi'],
            correctIndex: 1,
            explanationUz: 'Lena: "mit einem ausländischen Studenten und unserem netten Nachbarn" deydi.'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Felix', textDe: 'Wir müssen dem Herrn Bescheid geben.', textUz: 'Janobga xabar berishimiz kerak.' },
          { speaker: 'Lena', textDe: 'Schon erledigt. Die Helfer sind bereit.', textUz: 'Bajarib bo‘lindi. Yordamchilar tayyor.' }
        ],
        keyVocabulary: [
          { german: 'der Student (-en)', uzbek: 'talaba' },
          { german: 'der Herr (-n)', uzbek: 'janob' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-67',
        lessonId: 'les-67',
        levelCode: 'b1-2',
        titleDe: 'Freiwilliges Engagement in Deutschland',
        titleUz: 'Germaniyada ko‘ngillilar faoliyati',
        textDe: 'Ob bei der Feuerwehr, im Sportverein oder bei der Tafel: Das Ehrenamt hat in Deutschland eine große Tradition. Fast 40 Prozent der Menschen ab 14 Jahren engagieren sich freiwillig für das Gemeinwohl. Viele Studenten und junge Leute nutzen ein Freiwilliges Soziales Jahr (FSJ), um soziale Kompetenzen zu erwerben.',
        translationUz: 'O‘t o‘chiruvchilar safida, sport klubida yoki xayriya fondida bo‘ladimi: ko‘ngillilik Germaniyada katta an‘anaga ega. 14 yoshdan oshgan aholining deyarli 40 foizi bepul mehnat qiladi. Ko‘plab talabalar va yoshlar ijtimoiy ko‘nikmalarni egallash uchun FSJ dasturidan foydalanadilar.',
        vocabularyHints: [
          { german: 'das Gemeinwohl', uzbek: 'jamiyat farovonligi' },
          { german: 'erwerben', uzbek: 'egallamoq' }
        ],
        questions: [
          {
            id: 'q-rea-67-1',
            questionUz: 'Germaniyada aholining qancha qismi ko‘ngillilik bilan shug‘ullanadi?',
            options: ['Faqat 5 foizi', 'Deyarli 40 foizi', 'Faqat nafaqaxo‘rlar'],
            correctIndex: 1,
            explanationUz: 'Matnda: "Fast 40 Prozent der Menschen..." deb ko‘rsatilgan.'
          }
        ]
      }
    ],
    writing: {
      taskDe: 'Sie möchten sich für ein soziales Ehrenamt bewerben. Schreiben Sie ein Motivationsschreiben (ca. 80-100 Wörter). Verwenden Sie Nomen mit N-Deklination (Kollegen, Herrn, Studenten, Nachbarn).',
      taskUz: 'Ijtimoiy ko‘ngillilik loyihasiga ariza yozing (taxminan 80-100 so‘z). N-Deklination otlaridan foydalaning.',
      instructionUz: 'der Herr -> Sehr geehrter Herr..., der Student / Kollege / Nachbar kabi so‘zlarni to‘g‘ri turlang.',
      hints: ['Sehr geehrter Herr Müller,', 'Als Student möchte ich mich engagieren.'],
      sampleSolutionDe: 'Sehr geehrter Herr Schneider,\n\nmit großem Interesse bewerbe ich mich um ein Ehrenamt in Ihrem Stadtteilprojekt. Als Student an der Universität möchte ich mich aktiv in der Gesellschaft engagieren. Ich habe bereits meinem älteren Nachbarn beim Einkaufen geholfen. Zusammen mit einem hilfsbereiten Kollegen würde ich gerne Senioren im Alltag unterstützen. Ich freue mich auf Ihre Antwort.\n\nMit freundlichen Grüßen\nAzizbek Karimov',
      scaffold: {
        openingDe: 'Sehr geehrter Herr [Name],',
        closingDe: 'Mit freundlichen Grüßen,',
        usefulPhrasesDe: ['Als engagierter Student', 'Ich habe meinem Nachbarn geholfen', 'Mit freundlichen Grüßen']
      }
    },
    shadowing: [
      {
        id: 'sha-67',
        lessonId: 'les-67',
        levelCode: 'b1-2',
        sentenceDe: 'Ich habe dem neuen Studenten und dem hilfsbereiten Nachbarn für ihre Unterstützung gedankt.',
        translationUz: 'Men yangi talabaga va yordamga shay qo‘shniga ularning qo‘llab-quvvatlashi uchun minnatdorchilik bildirdim.',
        phoneticHint: '[Ih ha-be dem noy-en Shtu-den-ten und dem hilfs-be-ray-ten Nah-barn für ih-re Un-ter-stüt-tsung ge-dankt]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-67-q1',
        type: 'fill-blank',
        questionUz: 'Otning to‘g‘ri shaklini qo‘ying (N-Deklination): "Kennen Sie diesen _____ (der Kollege)?"',
        blankSentence: 'Kennen Sie diesen [blank]?',
        options: ['Kollegen', 'Kollege', 'Kolleges', 'Kollegem'],
        correctAnswer: 'Kollegen',
        explanationUz: '"der Kollege" Akkusativda "diesen Kollegen" bo‘ladi.',
        mistakeTipUz: '❌ N-Deklination: Akkusativda -n: diesen Kollegen.'
      },
      {
        id: 'prac-67-q2',
        type: 'multiple-choice',
        questionUz: 'Qaysi jumla to‘g‘ri tuzilgan?',
        options: ['Ich habe mit dem Herr gesprochen.', 'Ich habe mit dem Herrn gesprochen.', 'Ich habe mit dem Herres gesprochen.'],
        correctAnswer: 'Ich habe mit dem Herrn gesprochen.',
        explanationUz: '"der Herr" Dativda: mit dem Herrn.',
        mistakeTipUz: '❌ der Herr -> mit dem Herrn.'
      },
      {
        id: 'prac-67-q3',
        type: 'word-order',
        questionUz: 'Gapni to‘g‘ri tartibda tuzing:',
        scrambledWords: ['geholfen', 'Wir', 'haben', 'Nachbarn', 'dem', 'älteren'],
        correctAnswer: 'Wir haben dem älteren Nachbarn geholfen',
        explanationUz: 'Wir (1) + haben (2) + dem älteren Nachbarn (3) + geholfen (4).',
        mistakeTipUz: '❌ Dativ obyekti: dem älteren Nachbarn.'
      }
    ]
  },

  // ==========================================
  // LEKTION 68: Demokratie, Rechte und Medienfreiheit
  // ==========================================
  {
    id: 'les-68',
    moduleId: 'mod-b1-2-3',
    levelCode: 'b1-2',
    titleDe: 'Demokratie, Rechte und Medienfreiheit',
    titleUz: 'Demokratiya, huquqlar va Passiv muqobillari',
    descriptionUz: 'Saylov tizimi, so‘z erkinligi, sud va fuqarolik huquqlari, Passiv-Ersatzformen (sein + zu + Infinitiv; sich lassen + Infinitiv).',
    orderIndex: 68,
    estimatedMinutes: 45,
    isPublished: true,
    objectivesUz: [
      'Demokratik institutlar va ommaviy axborot erkinligi haqida fikr bildirish',
      '"sein + zu + Infinitiv" (muss / kann gemacht werden) ni qo‘llash',
      '"sich lassen + Infinitiv" (kann gemacht werden) konstruksiyasini egallash'
    ],
    warmUp: {
      situationUz: 'Kutubxonada huquqiy qonunlar to‘plamini o‘qiyapsiz. Bir moddada "Dieses Problem ist sofort zu lösen" va "Das Gesetz lässt sich leicht erklären" deb yozilgan.',
      curiosityQuestionUz: '"Bu muammoni hal qilish shart" yoki "Bu qonun oson tushuntirilishi mumkin" degan ma‘nolar nemis tilida modal fe‘lsiz qanday ifodalanadi?',
      miniDialogue: [
        { speaker: 'Hannah', textDe: 'Ist dieses Dokument schwer zu verstehen?', textUz: 'Ushbu hujjatni tushunish qiyinmi?' },
        { speaker: 'Markus', textDe: 'Nein, der Text lässt sich ganz einfach lesen und der Antrag ist bis morgen auszufüllen.', textUz: 'Yo‘q, matn juda oson o‘qiladi va ariza ertagacha to‘ldirilishi shart.' }
      ],
      hintUz: '"sein + zu + Infinitiv" majburiyat yoki imkoniyatni (muss/kann), "sich lassen + Infinitiv" esa imkoniyatni (kann) bildiradi.'
    },
    contextDialogue: {
      titleDe: 'Informiert entscheiden',
      titleUz: 'Xabardor bo‘lib qaror qabul qilish',
      situationUz: 'Ikki fuqaro saylovlar arafasida erkin matbuot va qonunlarning tushunarliligi haqida fikr almashmoqda.',
      lines: [
        { speaker: 'Hannah', textDe: 'Markus, gehst du am Sonntag zur Bundestagswahl?', textUz: 'Markus, yakshanba kuni saylovga borasanmi?' },
        { speaker: 'Markus', textDe: 'Selbstverständlich! Wählen ist ein Grundrecht, das unbedingt wahrzunehmen ist.', textUz: 'Albatta! Ovoz berish — mutlaqo foydalanilishi kerak bo‘lgan asosiy huquqdir.' },
        { speaker: 'Hannah', textDe: 'Stimmt. Aber manche Wahlprogramme lassen sich kaum verstehen.', textUz: 'To‘g‘ri. Ammo ba‘zi dasturlarni zo‘rg‘a tushunish mumkin.' },
        { speaker: 'Markus', textDe: 'Dafür gibt es unabhängige Medien. Komplexe Politik lässt sich nämlich durchaus verständlich vermitteln.', textUz: 'Buning uchun mustaqil OAV bor. Murakkab siyosatni bemalol tushunarli yetkazish mumkin.' }
      ],
      usefulPhrases: [
        { german: 'das Grundrecht', uzbek: 'asosiy huquq' },
        { german: 'wahrnehmen', uzbek: 'foydalanmoq (huquqdan)' },
        { german: 'sich verstehen lassen', uzbek: 'tushunilishi mumkin bo‘lmoq' },
        { german: 'die Pressefreiheit', uzbek: 'matbuot erkinligi' }
      ],
      culturalNoteUz: 'Germaniyada Konstitutsiya "Grundgesetz" deb ataladi. Uning 1-moddasida "Die Würde des Menschen ist unantastbar" deyilgan.'
    },
    vocabulary: [
      {
        id: 'voc-b1-18-1',
        lessonId: 'les-68',
        levelCode: 'b1-2',
        german: 'die Demokratie',
        article: 'die',
        plural: 'die Demokratien',
        uzbek: 'demokratiya',
        exampleDe: 'Demokratie lebt von der Beteiligung der Bürger.',
        exampleUz: 'Demokratiya fuqarolarning ishtiroki bilan yashaydi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-18-2',
        lessonId: 'les-68',
        levelCode: 'b1-2',
        german: 'das Grundgesetz',
        article: 'das',
        uzbek: 'konstitutsiya, asosiy qonun',
        exampleDe: 'Das Grundgesetz schützt die Menschenwürde.',
        exampleUz: 'Konstitutsiya inson sha‘nini himoya qiladi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-18-3',
        lessonId: 'les-68',
        levelCode: 'b1-2',
        german: 'die Meinungsfreiheit',
        article: 'die',
        uzbek: 'fikr va so‘z erkinligi',
        exampleDe: 'Meinungsfreiheit ist ein zentrales Grundrecht.',
        exampleUz: 'So‘z erkinligi markaziy asosiy huquqdir.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-18-4',
        lessonId: 'les-68',
        levelCode: 'b1-2',
        german: 'die Wahl',
        article: 'die',
        plural: 'die Wahlen',
        uzbek: 'saylov',
        exampleDe: 'Die Bürger gehen am Sonntag zur freien Wahl.',
        exampleUz: 'Fuqarolar yakshanba kuni erkin saylovga borishadi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-18-5',
        lessonId: 'les-68',
        levelCode: 'b1-2',
        german: 'lösen',
        article: null,
        uzbek: 'hal qilmoq, yechmoq',
        exampleDe: 'Dieser Konflikt lässt sich friedlich lösen.',
        exampleUz: 'Bu mojaro tinch yo‘l bilan hal qilinishi mumkin.',
        wordType: 'verb'
      },
      {
        id: 'voc-b1-18-6',
        lessonId: 'les-68',
        levelCode: 'b1-2',
        german: 'die Pressefreiheit',
        article: 'die',
        uzbek: 'matbuot erkinligi',
        exampleDe: 'Ohne Pressefreiheit gibt es keine transparente Kontrolle.',
        exampleUz: 'Matbuot erkinligisiz shaffof nazorat bo‘lmaydi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-18-7',
        lessonId: 'les-68',
        levelCode: 'b1-2',
        german: 'überprüfen',
        article: null,
        uzbek: 'tekshirmoq',
        exampleDe: 'Die Fakten sind vor der Veröffentlichung genau zu überprüfen.',
        exampleUz: 'Faktlar chop etilishidan oldin aniq tekshirilishi shart.',
        wordType: 'verb'
      },
      {
        id: 'voc-b1-18-8',
        lessonId: 'les-68',
        levelCode: 'b1-2',
        german: 'unantastbar',
        article: null,
        uzbek: 'daxlsiz',
        exampleDe: 'Die Würde des Menschen ist unantastbar.',
        exampleUz: 'Inson qadr-qimmati daxlsizdir.',
        wordType: 'adjective'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'Quyidagi jumlalarni Passiv shakli bilan solishtiring:',
      discoveryExamples: [
        {
          german: 'Passiv: Die Aufgabe muss erledigt werden.',
          highlight: 'muss erledigt werden',
          uzbek: 'Vazifa bajarilishi shart.'
        },
        {
          german: 'Ersatzform 1: Die Aufgabe ist zu erledigen.',
          highlight: 'ist zu erledigen',
          uzbek: 'Vazifa bajarilishi shart (sein + zu + Infinitiv).'
        },
        {
          german: 'Ersatzform 2: Das Problem lässt sich lösen.',
          highlight: 'lässt sich lösen',
          uzbek: 'Muammo hal bo‘lishi mumkin (sich lassen + Infinitiv).'
        }
      ],
      patternExplanationUz: 'Passiv muqobillari: 1) "sein + zu + Infinitiv" = majburiyat yoki imkoniyat (muss/kann ... werden); 2) "sich lassen + Infinitiv" = imkoniyat (kann ... werden).',
      ruleFormulaUz: '1. sein + zu + Infinitiv | 2. sich lassen + Infinitiv'
    },
    grammar: [
      {
        id: 'gra-68',
        lessonId: 'les-68',
        levelCode: 'b1-2',
        titleDe: 'Passiv-Ersatzformen',
        titleUz: 'Majhul nisbat muqobillari (Passiv-Ersatzformen)',
        summaryUz: 'Passiv o‘rniga "sein + zu + Infinitiv" va "sich lassen + Infinitiv" ishlatilishi.',
        explanationUz: `Passiv-Ersatzformen rasmiy va yozma tilda Passiv o‘rnida ko‘p uchraydi:
1. **sein + zu + Infinitiv:**
   - Majburiyat: *Der Antrag ist auszufüllen.* (= muss ausgefüllt werden)
   - Imkoniyat: *Der Text ist leicht zu verstehen.* (= kann verstanden werden)
2. **sich lassen + Infinitiv:**
   - Imkoniyat: *Das Problem lässt sich lösen.* (= kann gelöst werden)`,
        tables: [
          {
            title: 'Passiv muqobillari',
            headers: ['Konstruksiya', 'Ma‘nosi', 'Misol', 'Passiv shakli'],
            rows: [
              ['sein + zu + Inf.', 'müssen (shart)', 'Der Brief ist zu senden.', 'muss gesendet werden'],
              ['sich lassen + Inf.', 'können (mumkin)', 'Die Tür lässt sich öffnen.', 'kann geöffnet werden']
            ]
          }
        ],
        examples: [
          {
            german: 'Alle Fragen sind bis Freitag zu beantworten.',
            uzbek: 'Barcha savollarga jumagacha javob berilishi shart.',
            highlight: 'sind zu beantworten'
          },
          {
            german: 'Diese Tür lässt sich nicht abschließen.',
            uzbek: 'Bu eshik qulflanmaydi (qulflanishi mumkin emas).',
            highlight: 'lässt sich nicht abschließen'
          }
        ],
        commonMistakes: [
          {
            incorrect: 'Das Auto lässt sich zu reparieren.',
            correct: 'Das Auto lässt sich reparieren.',
            explanationUz: '"sich lassen" bilan "zu" ishlatilmaydi, faqat sof infinitiv keladi.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Informiert entscheiden',
      titleUz: 'Xabardor bo‘lib qaror qabul qilish',
      situationUz: 'Ikki fuqaro saylov va matbuot haqida suhbatlashmoqda.',
      audioTranscriptDe: 'Hannah: Markus, gehst du am Sonntag zur Wahl?\nMarkus: Selbstverständlich! Wählen ist ein Grundrecht, das unbedingt wahrzunehmen ist.\nHannah: Aber manche Wahlprogramme lassen sich kaum verstehen.\nMarkus: Dafür gibt es freie Medien. Komplexe Politik lässt sich verständlich vermitteln.',
      translationUz: 'Hannah: Markus, yakshanba kuni saylovga borasanmi?\nMarkus: Albatta! Ovoz berish — foydalanilishi kerak bo‘lgan asosiy huquqdir.\nHannah: Lekin ba‘zi dasturlarni zo‘rg‘a tushunish mumkin.\nMarkus: Buning uchun erkin matbuot bor. Siyosatni tushunarli yetkazish mumkin.',
      stage1Global: {
        instructionUz: '1-Bosqich: Markus ovoz berish haqida qanday fikrda?',
        questionUz: 'Markus nima uchun ovoz berishni muhim deb biladi?',
        options: ['Sovg‘a beriladi', 'Bu asosiy huquq bo‘lib, undan foydalanish shart', 'Faqat jarima solinmasligi uchun'],
        correctIndex: 1,
        explanationUz: 'Markus: "...ein Grundrecht, das unbedingt wahrzunehmen ist" deydi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Passiv muqobillari ma‘nosini tushuning.',
        questions: [
          {
            id: 'l68-q1',
            questionUz: 'Markus siyosatni qanday tushunish mumkinligini aytdi?',
            options: ['Erkin matbuot orqali tushuntirilishi mumkin (lässt sich vermitteln)', 'Siyosatni tushunib bo‘lmaydi', 'Faqat kitob o‘qish kerak'],
            correctIndex: 0,
            explanationUz: 'Markus: "...lässt sich verständlich vermitteln" deb ta‘kidlaydi.'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Markus', textDe: 'Das Recht ist wahrzunehmen.', textUz: 'Huquqdan foydalanilishi shart.' },
          { speaker: 'Hannah', textDe: 'Politik lässt sich verständlich erklären.', textUz: 'Siyosatni tushunarli tushuntirish mumkin.' }
        ],
        keyVocabulary: [
          { german: 'das Grundrecht', uzbek: 'asosiy huquq' },
          { german: 'wahrnehmen', uzbek: 'foydalanmoq' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-68',
        lessonId: 'les-68',
        levelCode: 'b1-2',
        titleDe: 'Das Grundgesetz der Bundesrepublik',
        titleUz: 'Germaniya Asosiy qonuni',
        textDe: 'Am 23. Mai 1949 trat das Grundgesetz in Kraft. Gleich im ersten Artikel heißt es: "Die Würde des Menschen ist unantastbar." Alle staatlichen Maßnahmen lassen sich vor unabhängigen Gerichten überprüfen. Eine funktionierende Demokratie ist von jeder Generation aufs Neue zu verteidigen.',
        translationUz: '1949-yil 23-mayda Grundgesetz kuchga kirdi. Birinchi moddada "Inson qadr-qimmati daxlsizdir" deb yozilgan. Davlat qarorlari mustaqil sudlar oldida tekshirilishi mumkin. Demokratiya har bir avlod tomonidan himoya qilinishi lozim.',
        vocabularyHints: [
          { german: 'die Würde', uzbek: 'qadr-qimmat' },
          { german: 'unantastbar', uzbek: 'daxlsiz' }
        ],
        questions: [
          {
            id: 'q-rea-68-1',
            questionUz: 'Germaniya Konstitutsiyasining 1-moddasida nima belgilangan?',
            options: ['Soliqlar har yili oshirilishi', 'Inson qadr-qimmati daxlsiz ekanligi (unantastbar)', 'Bitta rahbar qaror qilishi'],
            correctIndex: 1,
            explanationUz: 'Matnda: "Die Würde des Menschen ist unantastbar" deb yozilgan.'
          }
        ]
      }
    ],
    writing: {
      taskDe: 'Verfassen Sie einen kurzen Meinungsbeitrag (ca. 80-100 Wörter) zum Thema: "Warum freie Medien wichtig sind". Verwenden Sie "sein + zu + Infinitiv" und "sich lassen + Infinitiv".',
      taskUz: '"Nega erkin matbuot muhim?" mavzusida fikr bildiring (taxminan 80-100 so‘z). "sein + zu" va "sich lassen" dan foydalaning.',
      instructionUz: 'Kamida bittadan konstruktsiyani to‘g‘ri qo‘llang.',
      hints: ['Die Pressefreiheit ist zu verteidigen.', 'Fehler lassen sich aufdecken.'],
      sampleSolutionDe: 'In einer modernen Gesellschaft spielen unabhängige Journalisten eine wichtige Rolle. Die Pressefreiheit ist unbedingt zu verteidigen. Durch kritische Berichte lassen sich politische Fehler rechtzeitig aufdecken. Ohne freie Medien kann eine Demokratie nicht transparent funktionieren. Deshalb ist die Informationsfreiheit mit allen Mitteln zu schützen.',
      scaffold: {
        openingDe: 'Ich bin der Überzeugung, dass freie Medien unverzichtbar sind...',
        closingDe: 'Aus diesen Gründen ist die Pressefreiheit zu verteidigen.',
        usefulPhrasesDe: ['ist zu verteidigen', 'lässt sich leicht aufdecken', 'lassen sich bekämpfen']
      }
    },
    shadowing: [
      {
        id: 'sha-68',
        lessonId: 'les-68',
        levelCode: 'b1-2',
        sentenceDe: 'Die Grundrechte der Bürger lassen sich nicht einschränken und sind von allen zu respektieren.',
        translationUz: 'Fuqarolarning asosiy huquqlarini cheklab bo‘lmaydi va ular hamma tomonidan hurmat qilinishi shart.',
        phoneticHint: '[Di Grund-reh-te der Bür-ger las-sen zih niht ayn-shren-ken und zint fon al-len tsu res-pek-ti-ren]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-68-q1',
        type: 'fill-blank',
        questionUz: '"sich lassen" bilan to‘g‘ri shaklni tanlang: "Dieses schwere Problem _____ ganz einfach lösen."',
        blankSentence: 'Dieses schwere Problem [blank] ganz einfach lösen.',
        options: ['lässt sich', 'ist zu', 'wird sich', 'kann sich'],
        correctAnswer: 'lässt sich',
        explanationUz: '"lässt sich + Infinitiv" = hal qilinishi mumkin.',
        mistakeTipUz: '❌ lässt sich lösen (zu yo‘q!).'
      },
      {
        id: 'prac-68-q2',
        type: 'multiple-choice',
        questionUz: '"Die Hausaufgaben sind bis morgen zu machen" jumlasi nimani anglatadi?',
        options: [
          'Vazifalarni ertaga qilish taqiqlanadi.',
          'Vazifalar ertagacha qilinishi shart (müssen gemacht werden).',
          'Vazifalar allaqachon bajarib bo‘lingan.'
        ],
        correctAnswer: 'Vazifalar ertagacha qilinishi shart (müssen gemacht werden).',
        explanationUz: '"sein + zu + Infinitiv" majburiyat ma‘nosida qo‘llanadi.',
        mistakeTipUz: '❌ sind zu machen = müssen gemacht werden.'
      },
      {
        id: 'prac-68-q3',
        type: 'word-order',
        questionUz: 'Gapni to‘g‘ri tartibda tuzing:',
        scrambledWords: ['zu', 'ist', 'Der', 'auszufüllen', 'Antrag', 'sofort'],
        correctAnswer: 'Der Antrag ist sofort auszufüllen',
        explanationUz: 'Der Antrag (1) + ist (2) + sofort (3) + auszufüllen (4).',
        mistakeTipUz: '❌ sein + zu + Infinitiv: ist auszufüllen.'
      }
    ]
  },

  // ==========================================
  // LEKTION 69: Sprache, Mehrsprachigkeit und Identität
  // ==========================================
  {
    id: 'les-69',
    moduleId: 'mod-b1-2-3',
    levelCode: 'b1-2',
    titleDe: 'Sprache, Mehrsprachigkeit und Identität',
    titleUz: 'Til, ko‘p tillilik va sifatlarning otlashishi',
    descriptionUz: 'Madaniyatlararo muloqot, chet tillarini o‘rganish, milliy va shaxsiy o‘zlik, Adjektive und Partizipien als Nomen (der/die Jugendliche, ein Angestellter, das Gute, etwas Schönes).',
    orderIndex: 69,
    estimatedMinutes: 45,
    isPublished: true,
    objectivesUz: [
      'Ko‘p tillilik va chet tilini bilishning afzalliklarini muhokama qilish',
      'Otlashgan sifatlarning (der Jugendliche, ein Jugendlicher) turlanishini egallash',
      '"etwas Gutes", "nichts Neues" kabi iboralarni to‘g‘ri qo‘llash'
    ],
    warmUp: {
      situationUz: 'Kompaniyada turli mamlakatlardan kelgan xodimlar ishlaydi. Suhbatda "der Angestellte", "die Jugendlichen" va "etwas Interessantes" so‘zlari ishlatilmoqda.',
      curiosityQuestionUz: 'Nemis tilida sifatlar otga aylanganda (der Jugendliche, das Gute) ular ot kabi bosh harf bilan yozilsa-da, nega sifat kabi turlanadi?',
      miniDialogue: [
        { speaker: 'Tariq', textDe: 'Hast du schon etwas Neues über den Deutschkurs gehört?', textUz: 'Nemis tili kursi haqida biror yangilik eshitdingmi?' },
        { speaker: 'Elena', textDe: 'Ja, viele Jugendliche und Erwachsene haben sich bereits angemeldet.', textUz: 'Ha, ko‘plab o‘smirlar va kattalar allaqachon ro‘yxatdan o‘tdilar.' }
      ],
      hintUz: 'Sifatlar otlashganda bosh harf bilan yoziladi, lekin sifat qo‘shimchalarini oladi (ein Jugendlicher, der Jugendliche).'
    },
    contextDialogue: {
      titleDe: 'Zwei Sprachen, eine Welt',
      titleUz: 'Ikki til, bitta olam',
      situationUz: 'Ikki do‘st ikki tillilik va madaniy o‘zlik haqida suhbatlashmoqda.',
      lines: [
        { speaker: 'Tariq', textDe: 'Elena, du bist zweisprachig aufgewachsen. Fühlst du dich als Deutsche oder Spanierin?', textUz: 'Elena, sen ikki tilli muhitda o‘sgansan. O‘zingni nemisdek his qilasanmi yoki ispaniyalikdek?' },
        { speaker: 'Elena', textDe: 'Ich sehe darin etwas ganz Besonderes. Jede Sprache eröffnet eine neue Denkweise.', textUz: 'Men bunda butunlay o‘zgacha narsani ko‘raman. Har bir til yangi fikrlash tarzini ochib beradi.' },
        { speaker: 'Tariq', textDe: 'Viele Jugendliche wechseln mühelos zwischen den Kulturen.', textUz: 'Ko‘plab o‘smirlar madaniyatlar o‘rtasida qiyinchiliksiz o‘tishadi.' },
        { speaker: 'Elena', textDe: 'Genau. Für viele Erwachsene ist Mehrsprachigkeit im Beruf ein Vorteil.', textUz: 'Aynan shunday. Ko‘plab kattalar uchun ko‘p tillilik kasbda katta ustunlikdir.' }
      ],
      usefulPhrases: [
        { german: 'die Mehrsprachigkeit', uzbek: 'ko‘p tillilik' },
        { german: 'zweisprachig aufwachsen', uzbek: 'ikki tilli muhitda o‘smoq' },
        { german: 'etwas Besonderes', uzbek: 'alohida bir narsa' },
        { german: 'ein großer Vorteil', uzbek: 'katta ustunlik' }
      ],
      culturalNoteUz: 'Germaniyada har to‘rtinchi insonning kelib chiqishi boshqa madaniyatlarga borib taqaladi. Ko‘p tillilik mamlakat iqtisodiyotining muhim ustunidir.'
    },
    vocabulary: [
      {
        id: 'voc-b1-19-1',
        lessonId: 'les-69',
        levelCode: 'b1-2',
        german: 'die Mehrsprachigkeit',
        article: 'die',
        uzbek: 'ko‘p tillilik',
        exampleDe: 'Mehrsprachigkeit fördert die Flexibilität.',
        exampleUz: 'Ko‘p tillilik moslashuvchanlikni oshiradi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-19-2',
        lessonId: 'les-69',
        levelCode: 'b1-2',
        german: 'die Identität',
        article: 'die',
        plural: 'die Identitäten',
        uzbek: 'o‘zlik, shaxsiyat',
        exampleDe: 'Die Muttersprache ist ein Teil unserer Identität.',
        exampleUz: 'Ona tili bizning o‘zligimizning bir qismidir.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-19-3',
        lessonId: 'les-69',
        levelCode: 'b1-2',
        german: 'der Jugendliche',
        article: 'der',
        plural: 'die Jugendlichen',
        uzbek: 'o‘smir',
        exampleDe: 'Viele Jugendliche lernen heute Fremdsprachen.',
        exampleUz: 'Bugun ko‘plab o‘smirlar chet tillarini o‘rganmoqda.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-19-4',
        lessonId: 'les-69',
        levelCode: 'b1-2',
        german: 'der Erwachsene',
        article: 'der',
        plural: 'die Erwachsenen',
        uzbek: 'katta yoshli inson',
        exampleDe: 'Auch Erwachsene können erfolgreich Sprachen lernen.',
        exampleUz: 'Kattalar ham tillarni muvaffaqiyatli o‘rgana oladilar.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-19-5',
        lessonId: 'les-69',
        levelCode: 'b1-2',
        german: 'der Angestellte',
        article: 'der',
        plural: 'die Angestellten',
        uzbek: 'xodim, xizmatchi',
        exampleDe: 'Die Angestellten sprechen fließend Deutsch.',
        exampleUz: 'Xodimlar nemis tilida ravon gaplashadilar.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-19-6',
        lessonId: 'les-69',
        levelCode: 'b1-2',
        german: 'das Gute',
        article: 'das',
        uzbek: 'yaxshilik, ezgulik',
        exampleDe: 'Man sollte immer an das Gute glauben.',
        exampleUz: 'Inson doim ezgulikka ishonishi kerak.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-19-7',
        lessonId: 'les-69',
        levelCode: 'b1-2',
        german: 'aufwachsen',
        article: null,
        uzbek: 'ulg‘aymoq, katta bo‘lmoq',
        exampleDe: 'Er ist mehrsprachig aufgewachsen.',
        exampleUz: 'U ko‘p tilli muhitda ulg‘aygan.',
        wordType: 'verb'
      },
      {
        id: 'voc-b1-19-8',
        lessonId: 'les-69',
        levelCode: 'b1-2',
        german: 'vertraut',
        article: null,
        uzbek: 'qadrdon, tanish',
        exampleDe: 'Der Klang der Heimatsprache klingt vertraut.',
        exampleUz: 'Ona tilining sadosi qadrdon eshitiladi.',
        wordType: 'adjective'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'Quyidagi jumlalarda artikl o‘zgarganda sifat qo‘shimchasiga nima bo‘layotganiga qarang:',
      discoveryExamples: [
        {
          german: 'Aniq artikl: Der Jugendliche liest ein Buch.',
          highlight: 'Der Jugendliche',
          uzbek: 'O‘smir kitob o‘qiyapti (-e).'
        },
        {
          german: 'Noaniq artikl: Ein Jugendlicher liest ein Buch.',
          highlight: 'Ein Jugendlicher',
          uzbek: 'Bir o‘smir kitob o‘qiyapti (-er).'
        },
        {
          german: 'Neytral: Ich habe etwas Schönes gekauft.',
          highlight: 'etwas Schönes',
          uzbek: 'Men chiroyli bir narsa sotib oldim (-es).'
        }
      ],
      patternExplanationUz: 'Sifatlar otga aylanganda bosh harf bilan yoziladi va sifat kabi turlanadi (der Jugendliche, ein Jugendlicher). "etwas / nichts" dan keyin esa -es qo‘shiladi (etwas Gutes, nichts Neues).',
      ruleFormulaUz: 'der Jugendliche / ein Jugendlicher | das Gute / etwas Gutes'
    },
    grammar: [
      {
        id: 'gra-69',
        lessonId: 'les-69',
        levelCode: 'b1-2',
        titleDe: 'Adjektive und Partizipien als Nomen',
        titleUz: 'Otlashgan sifat va sifatdoshlar (Substantivierte Adjektive)',
        summaryUz: 'Sifatlar bosh harf bilan yozilib otlashadi, lekin sifat kabi turlanadi: ein Jugendlicher, etwas Schönes.',
        explanationUz: `Sifatlar shaxs yoki mavhum tushunchalarni ifodalash uchun otga aylanadi:
1. **Shaxslar:** *der Jugendliche* (aniq), *ein Jugendlicher* (noaniq), *die Jugendlichen* (ko‘plik).
2. **Mavhum tushunchalar:** *das Gute*, *das Neue*, *das Schöne*.
3. **etwas / nichts dan keyin:** *etwas Interessantes*, *nichts Neues*.`,
        tables: [
          {
            title: 'Jugendliche(r) turlanishi',
            headers: ['Kelishik', 'der / ein (Maskulin)', 'die / viele (Plural)'],
            rows: [
              ['Nominativ', 'der Jugendliche / ein Jugendlicher', 'die / viele Jugendliche'],
              ['Akkusativ', 'den / einen Jugendlichen', 'die / viele Jugendliche'],
              ['Dativ', 'dem / einem Jugendlichen', 'den / vielen Jugendlichen']
            ]
          }
        ],
        examples: [
          {
            german: 'Ich habe heute einen alten Bekannten getroffen.',
            uzbek: 'Bugun eski bir tanishimni uchratdim.',
            highlight: 'einen alten Bekannten'
          },
          {
            german: 'Gibt es heute etwas Neues in den Nachrichten?',
            uzbek: 'Bugun yangiliklarda biror yangilik bormi?',
            highlight: 'etwas Neues'
          }
        ],
        commonMistakes: [
          {
            incorrect: 'Ein Jugendliche wartet draußen.',
            correct: 'Ein Jugendlicher wartet draußen.',
            explanationUz: '"ein" noaniq artikli bilan bosh kelishikda "-er" qo‘shiladi: ein Jugendlicher.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Zwei Sprachen, eine Welt',
      titleUz: 'Ikki til, bitta olam',
      situationUz: 'Ikki do‘st ko‘p tillilik boyligi haqida suhbatlashmoqda.',
      audioTranscriptDe: 'Tariq: Elena, du bist zweisprachig aufgewachsen. Fühlst du dich als Deutsche oder Spanierin?\nElena: Ich sehe darin etwas ganz Besonderes. Jede Sprache eröffnet eine neue Denkweise.\nTariq: Das stimmt. Viele Jugendliche wechseln mühelos zwischen den Kulturen.\nElena: Genau. Für viele Erwachsene ist Mehrsprachigkeit ein Riesenvorteil.',
      translationUz: 'Tariq: Elena, ikki tilli muhitda o‘sgansan. O‘zingni kim deb his qilasan?\nElena: Men bunda alohida bir narsani ko‘raman. Har bir til yangi fikrlash tarzini beradi.\nTariq: Bu to‘g‘ri. O‘smirlar madaniyatlar o‘rtasida oson o‘tishadi.\nElena: Aynan. Kattalar uchun ko‘p tillilik katta ustunlik.',
      stage1Global: {
        instructionUz: '1-Bosqich: Elena ikki tillilik haqida nima deydi?',
        questionUz: 'Elena ikki tilli ulg‘ayganiga qanday munosabatda?',
        options: ['Faqat bitta tilni bilishni xohlaydi', 'Buni o‘zgacha boylik va yangi fikrlash tarzi deb biladi', 'Tillarini unutganini aytadi'],
        correctIndex: 1,
        explanationUz: 'Elena: "...etwas ganz Besonderes. Jede Sprache eröffnet eine neue Denkweise" deydi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Otlashgan sifatlarga diqqat qiling.',
        questions: [
          {
            id: 'l69-q1',
            questionUz: 'Elena kattalar (Erwachsene) uchun ko‘p tillilik nimani berishini aytadi?',
            options: ['Katta ustunlik (ein Riesenvorteil)', 'Faqat qiyinchilik', 'Hech narsa bermaydi'],
            correctIndex: 0,
            explanationUz: 'Elena ko‘p tillilik katta ustunlik ekanini aytadi.'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Elena', textDe: 'Ich sehe darin etwas ganz Besonderes.', textUz: 'Men bunda alohida narsani ko‘raman.' },
          { speaker: 'Tariq', textDe: 'Für Jugendliche ist es eine Chance.', textUz: 'O‘smirlar uchun bu imkoniyatdir.' }
        ],
        keyVocabulary: [
          { german: 'etwas Besonderes', uzbek: 'alohida bir narsa' },
          { german: 'die Jugendlichen', uzbek: 'o‘smirlar' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-69',
        lessonId: 'les-69',
        levelCode: 'b1-2',
        titleDe: 'Mehrsprachigkeit als Brücke',
        titleUz: 'Ko‘p tillilik ko‘prik sifatida',
        textDe: 'In einer globalen Welt wachsen immer mehr Kinder mit zwei oder mehr Sprachen auf. Moderne Studien beweisen: Mehrsprachige Kinder und Jugendliche entwickeln oft eine höhere Flexibilität. Für viele Angestellte ist das Beherrschen mehrerer Sprachen der Schlüssel zum Erfolg.',
        translationUz: 'Dunyo bo‘ylab bolalar ikki yoki undan ortiq til bilan ulg‘aymoqda. Tadqiqotlar isbotlaydi: ko‘p tilli bolalar va o‘smirlar yuqori moslashuvchanlikka ega bo‘ladilar. Ko‘plab xodimlar uchun tillarni bilish muvaffaqiyat kalitidir.',
        vocabularyHints: [
          { german: 'die Flexibilität', uzbek: 'moslashuvchanlik' },
          { german: 'der Angestellte', uzbek: 'xodim' }
        ],
        questions: [
          {
            id: 'q-rea-69-1',
            questionUz: 'Tadqiqotlar ko‘p tillilik haqida nimani isbotladi?',
            options: ['Miyani toliqtirishini', 'Ko‘p tilli bolalar va o‘smirlar yuqori moslashuvchanlikka ega bo‘lishini', 'Faqat bitta til yetarli ekanini'],
            correctIndex: 1,
            explanationUz: 'Matnda tadqiqotlar ko‘p tilli bolalarda yuqori moslashuvchanlik bo‘lishini ko‘rsatgani aytilgan.'
          }
        ]
      }
    ],
    writing: {
      taskDe: 'Schreiben Sie einen persönlichen Text (ca. 80-100 Wörter) zum Thema: "Fremdsprachen in meinem Leben". Nutzen Sie substantivierte Adjektive (etwas Neues, Jugendliche, Erwachsene).',
      taskUz: '"Hayotimda chet tillari" mavzusida insho yozing (taxminan 80-100 so‘z). Otlashgan sifatlardan foydalaning.',
      instructionUz: 'Kamida 2 ta otlashgan sifat shaklini ishlating.',
      hints: ['Für mich ist das Sprachenlernen etwas Besonderes.', 'Sowohl Jugendliche als auch Erwachsene profitieren.'],
      sampleSolutionDe: 'Fremdsprachen spielen in meinem Leben eine zentrale Rolle. Für mich ist das Sprachenlernen etwas ganz Besonderes, weil jedes neue Wort meinen Horizont erweitert. Sowohl für Jugendliche als auch für Erwachsene eröffnet Mehrsprachigkeit enorme Möglichkeiten im Beruf. Das Beste daran ist, dass man neue Freunde kennenlernt. Ich wünsche jedem Mut, etwas Neues auszuprobieren.',
      scaffold: {
        openingDe: 'Sprachen verbinden Menschen...',
        closingDe: 'Zusammenfassend ist Mehrsprachigkeit ein unbezahlbarer Schatz.',
        usefulPhrasesDe: ['etwas ganz Besonderes', 'das Beste daran', 'für Erwachsene']
      }
    },
    shadowing: [
      {
        id: 'sha-69',
        lessonId: 'les-69',
        levelCode: 'b1-2',
        sentenceDe: 'Beim Sprachenlernen entdeckt man immer wieder etwas Neues und lernt viele nette Bekannte kennen.',
        translationUz: 'Til o‘rganishda inson doimo yangi bir narsani kashf etadi va ko‘plab yoqimli tanishlar orttiradi.',
        phoneticHint: '[Baym Shpra-hen-ler-nen ent-dekt man im-mer vi-der et-vas Noy-es und lernt fi-le net-te Be-kann-te ken-nen]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-69-q1',
        type: 'fill-blank',
        questionUz: '"etwas" so‘zidan keyin sifat shaklini tanlang: "Hast du heute etwas _____ (interessant) gelesen?"',
        blankSentence: 'Hast du heute etwas [blank] gelesen?',
        options: ['Interessantes', 'interessant', 'Interessante', 'Interessantem'],
        correctAnswer: 'Interessantes',
        explanationUz: '"etwas" dan keyin: etwas Interessantes.',
        mistakeTipUz: '❌ etwas + Adjektiv-es: etwas Interessantes.'
      },
      {
        id: 'prac-69-q2',
        type: 'multiple-choice',
        questionUz: 'Qaysi shakl noaniq artikl bilan to‘g‘ri turlangan?',
        options: ['Draußen wartet ein Jugendliche.', 'Draußen wartet ein Jugendlicher.', 'Draußen wartet ein Jugendlichen.'],
        correctAnswer: 'Draußen wartet ein Jugendlicher.',
        explanationUz: '"ein" bilan Maskulin: ein Jugendlicher.',
        mistakeTipUz: '❌ ein Jugendlicher (der bo‘lsa: der Jugendliche).'
      },
      {
        id: 'prac-69-q3',
        type: 'word-order',
        questionUz: 'Gapni to‘g‘ri tartibda tuzing:',
        scrambledWords: ['alles', 'wünsche', 'Ich', 'Gute', 'dir'],
        correctAnswer: 'Ich wünsche dir alles Gute',
        explanationUz: 'Ich (1) + wünsche (2) + dir (3) + alles (4) + Gute (5).',
        mistakeTipUz: '❌ alles Gute.'
      }
    ]
  }
];
