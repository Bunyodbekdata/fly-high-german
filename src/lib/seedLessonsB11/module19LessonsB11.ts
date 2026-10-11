import { Lesson } from '../../types/database';

export const MODULE_19_B11_LESSONS: Lesson[] = [
  // ==========================================
  // LEKTION 55: Freundschaft & Vertrauen
  // ==========================================
  {
    id: 'les-55',
    moduleId: 'mod-b1-1-3',
    levelCode: 'b1-1',
    titleDe: 'Freundschaft & Vertrauen',
    titleUz: 'Haqiqiy do‘stlik, ishonch va qadriyatlar',
    descriptionUz: 'Do‘stlik mezonlari, ishonch, Genitiv (qaratqich kelishigi) va Genitiv predloglari (wegen, trotz, während, statt).',
    orderIndex: 55,
    estimatedMinutes: 45,
    isPublished: true,
    objectivesUz: [
      'Insoniy munosabatlar va do‘stlik xususiyatlarini muhokama qilish',
      'Genitiv kelishigi (des / der / des / der) shakllarini to‘liq o‘rganish',
      'Genitiv talab qiluvchi predloglar (wegen, trotz, während, statt) bilan gaplar tuzish'
    ],
    warmUp: {
      situationUz: 'Yaqin do‘stingiz bilan yillar davomida mustahkam saqlanib qolgan ishonch va qiyin damlarda bir-biringizni qo‘llab-quvvatlaganingiz haqida o‘ylayapsiz.',
      curiosityQuestionUz: '"Yomon ob-havoga qaramasdan" yoki "Do‘stimning yordami sababli" degan jumlalarni nemis tilida Genitiv orqali qanday aytamiz?',
      miniDialogue: [
        { speaker: 'Jonas', textDe: 'Trotz des schlechten Wetters haben wir uns gestern im Café getroffen.', textUz: 'Noqulay ob-havoga qaramasdan, kecha kafeda uchrashdik.' },
        { speaker: 'Klara', textDe: 'Ein echter Freund ist eben wegen seiner Zuverlässigkeit so wertvoll.', textUz: 'Haqiqiy do‘st o‘zining ishonchliligi sababli ham shunchalik qadrlidir.' }
      ],
      hintUz: '"trotz" (qaramasdan) va "wegen" (tufayli, sababli) predloglari adabiy nemis tilida Genitiv talab qiladi.'
    },
    contextDialogue: {
      titleDe: 'Was einen wahren Freund ausmacht',
      titleUz: 'Haqiqiy do‘stni nima belgilaydi?',
      situationUz: 'Ikkita do‘st uzoq yillik do‘stlikning siri va o‘zaro ishonch haqida suhbatlashmoqda.',
      lines: [
        { speaker: 'Jonas', textDe: 'Klara, wir kennen uns jetzt schon seit der Grundschule. Was schätzt du an unserer Freundschaft am meisten?', textUz: 'Klara, biz boshlang‘ich maktabdan beri bir-birimizni taniymiz. Do‘stligimizda eng ko‘p nimani qadrlaysan?' },
        { speaker: 'Klara', textDe: 'Vor allem dein ehrliches Feedback. Statt falscher Komplimente sagst du mir immer die Wahrheit.', textUz: 'Avvalo samimiy fikrlaringni. Soxta xushomadlar o‘rniga sen menga doimo haqiqatni aytasan.' },
        { speaker: 'Jonas', textDe: 'Das beruht auf Gegenseitigkeit. Während schwieriger Lebensphasen warst du immer an meiner Seite.', textUz: 'Bu o‘zaro teng asoslangan. Hayotimning qiyin bosqichlari davomida doim yonimda bo‘lgansan.' },
        { speaker: 'Klara', textDe: 'Genau das bedeutet Vertrauen: Man kann sich aufeinander verlassen, trotz großer Entfernungen.', textUz: 'Aynan mana shu ishonchni anglatadi: Katta masofalarga qaramasdan, bir-biriga suyanish mumkin.' }
      ],
      usefulPhrases: [
        { german: 'schätzen an (+ Dat)', uzbek: '...dagi xislatni qadrlamoq' },
        { german: 'beruhen auf (+ Dat)', uzbek: '...ga asoslanmoq' },
        { german: 'sich verlassen auf (+ Akk)', uzbek: '...ga suyanmoq, ishonmoq' },
        { german: 'trotz großer Entfernungen', uzbek: 'katta masofalarga qaramasdan' }
      ],
      culturalNoteUz: 'Germaniyada "Freund" (do‘st) va "Bekannter" (tanish) so‘zlari qat‘iy ajratiladi. "Do‘st" deb faqat yillar davomida sinovdan o‘tgan juda yaqin insonlar ataladi.'
    },
    vocabulary: [
      {
        id: 'voc-b1-7-1',
        lessonId: 'les-55',
        levelCode: 'b1-1',
        german: 'die Freundschaft',
        article: 'die',
        plural: 'die Freundschaften',
        uzbek: 'do‘stlik',
        exampleDe: 'Wahre Freundschaft hält ein Leben lang.',
        exampleUz: 'Haqiqiy do‘stlik butun umr saqlanib qoladi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-7-2',
        lessonId: 'les-55',
        levelCode: 'b1-1',
        german: 'das Vertrauen',
        article: 'das',
        uzbek: 'ishonch',
        exampleDe: 'Ohne gegenseitiges Vertrauen funktioniert keine Beziehung.',
        exampleUz: 'O‘zaro ishonchsiz hech qanday munosabat ish bermaydi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-7-3',
        lessonId: 'les-55',
        levelCode: 'b1-1',
        german: 'die Zuverlässigkeit',
        article: 'die',
        uzbek: 'ishonchlilik, mas‘uliyatlilik',
        exampleDe: 'Zuverlässigkeit ist eine unverzichtbare Eigenschaft.',
        exampleUz: 'Ishonchlilik — ajralmas muhim fazilatdir.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-7-4',
        lessonId: 'les-55',
        levelCode: 'b1-1',
        german: 'ehrlich',
        article: null,
        plural: null,
        uzbek: 'samimiy, rostgo‘y',
        exampleDe: 'Ein ehrlicher Rat tut manchmal weh, hilft aber enorm.',
        exampleUz: 'Samimiy maslahat ba‘zan og‘ir botsa-da, juda katta yordam beradi.',
        wordType: 'adjective'
      },
      {
        id: 'voc-b1-7-5',
        lessonId: 'les-55',
        levelCode: 'b1-1',
        german: 'enttäuschen',
        article: null,
        plural: null,
        uzbek: 'umidsizlantirmoq, ko‘nglini qoldirmoq',
        exampleDe: 'Er hat mich noch nie im Leben enttäuscht.',
        exampleUz: 'U hayotimda biror marta ham ko‘nglimni qoldirmagan.',
        wordType: 'verb'
      },
      {
        id: 'voc-b1-7-6',
        lessonId: 'les-55',
        levelCode: 'b1-1',
        german: 'die Verlässlichkeit',
        article: 'die',
        uzbek: 'tayanch bo‘la olishlik',
        exampleDe: 'Verlässlichkeit gibt Sicherheit im Leben.',
        exampleUz: 'Suyana olishlik hayotda xotirjamlik bag‘ishlaydi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-7-7',
        lessonId: 'les-55',
        levelCode: 'b1-1',
        german: 'die Eigenschaft',
        article: 'die',
        plural: 'die Eigenschaften',
        uzbek: 'fazilat, xususiyat',
        exampleDe: 'Welche Eigenschaften schätzt du an deinen Kollegen?',
        exampleUz: 'Hamkasblaringda qaysi fazilatlarni qadrlaysan?',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-7-8',
        lessonId: 'les-55',
        levelCode: 'b1-1',
        german: 'geheim',
        article: null,
        plural: null,
        uzbek: 'maxfiy, sirli',
        exampleDe: 'Gute Freunde können Geheimnisse bewahren.',
        exampleUz: 'Yaxshi do‘stlar sirlarni saqlay oladilar.',
        wordType: 'adjective'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'Quyidagi gaplardagi otlarning artikllari va qo‘shimchalariga e‘tibor bering. Genitiv qanday yasalmoqda?',
      discoveryExamples: [
        {
          german: 'Das Auto des Vaters steht vor dem Haus.',
          highlight: 'des Vaters',
          uzbek: 'Otamning mashinasi uy oldida turibdi.'
        },
        {
          german: 'Wegen des schlechten Wetters blieben wir zu Hause.',
          highlight: 'des schlechten Wetters',
          uzbek: 'Yomon ob-havo tufayli uyda qoldik.'
        },
        {
          german: 'Trotz der großen Probleme gab er nicht auf.',
          highlight: 'der großen Probleme',
          uzbek: 'Katta muammolarga qaramasdan u taslim bo‘lmadi.'
        }
      ],
      patternExplanationUz: 'Genitiv (qaratqich kelishigi — kimning? nimaning?) artikllari: der/das uchun "des" (va otga -(e)s qo‘shiladi), die uchun "der", ko‘plik uchun "der". "wegen", "trotz", "während", "statt" predloglaridan keyin ham Genitiv keladi.',
      ruleFormulaUz: 'des + Ot-(e)s (der/das) | der + Ot (die/Plural)'
    },
    grammar: [
      {
        id: 'gra-55',
        lessonId: 'les-55',
        levelCode: 'b1-1',
        titleDe: 'Der Genitiv und Präpositionen mit Genitiv',
        titleUz: 'Qaratqich kelishigi (Genitiv) va Genitiv predloglari',
        summaryUz: 'Wessen? (kimning? nimaning?) savoliga javob beradi: des Mannes, der Frau, des Kindes, der Freunde.',
        explanationUz: `1. **Artikllar va ot qo‘shimchalari:**
- Maskulin: **des** Mannes / Freund**es** (-(e)s oladi)
- Neutrum: **des** Kind**es** / Auto**s** (-(e)s oladi)
- Feminin: **der** Frau / Mutter (ot o‘zgarmaydi)
- Plural: **der** Freunde / Kinder (ot o‘zgarmaydi)

2. **Genitiv talab qiluvchi 4 ta asosiy predlog:**
- **wegen** (tufayli / sababli): *wegen des Regens* (yomg‘ir tufayli)
- **trotz** (qaramasdan): *trotz der Müdigkeit* (charchoqqa qaramasdan)
- **während** (davomida / paytida): *während des Urlaubs* (ta‘til davomida)
- **statt / anstatt** (o‘rniga): *statt des Kaffees* (qahva o‘rniga)`,
        tables: [
          {
            title: 'Genitiv artikllari va predloglari',
            headers: ['Jins', 'Aniq artikl', 'Noaniq artikl', 'Ot qo‘shimchasi'],
            rows: [
              ['Maskulin (der)', 'des', 'eines', '+ -(e)s'],
              ['Neutrum (das)', 'des', 'eines', '+ -(e)s'],
              ['Feminin (die)', 'der', 'einer', '—'],
              ['Plural (die)', 'der', 'meiner / keiner', '—']
            ]
          }
        ],
        examples: [
          {
            german: 'Trotz des starken Regens machten wir einen langen Spaziergang.',
            uzbek: 'Kuchli yomg‘irga qaramasdan, biz uzoq sayr qildik.',
            highlight: 'Trotz des starken Regens'
          },
          {
            german: 'Wegen einer Erkältung konnte sie nicht am Unterricht teilnehmen.',
            uzbek: 'Shamollash tufayli u darsda qatnasha olmadi.',
            highlight: 'Wegen einer Erkältung'
          }
        ],
        commonMistakes: [
          {
            incorrect: 'Wegen dem Wetter (og‘zaki Dativ).',
            correct: 'Wegen des Wetters (adabiy Genitiv).',
            explanationUz: 'Og‘zaki tilda Dativ uchrasa ham, B1 imtihoni va adabiy nemis tilida qat‘iy Genitiv talab qilinadi.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Freundschaften im Erwachsenenalter',
      titleUz: 'Kattalar o‘rtasidagi do‘stlik',
      situationUz: 'Psixolog yosh o‘tgan sari yangi do‘stlar topish nima uchun qiyinlashishi haqida fikr yuritmoqda.',
      audioTranscriptDe: 'Psychologin: Während der Schul- und Studienzeit entstehen Freundschaften ganz spontan. Man sieht sich täglich und teilt viele Erlebnisse. Im Erwachsenenleben wird es jedoch schwieriger. Wegen des vollen Terminkalenders und beruflicher Verpflichtungen fehlt oft die Zeit für Treffen. Trotz dieser Herausforderungen lohnt es sich, alte Kontakte zu pflegen. Statt oberflächlicher Bekanntschaften in den sozialen Netzwerken brauchen wir Menschen, die uns wirklich zuhören.',
      translationUz: 'Psixolog: Maktab va talabalik davrida do‘stliklar juda tabiiy va o‘z-o‘zidan vujudga keladi. Insonlar har kuni ko‘rishadi va ko‘plab kechinmalarni baham ko‘rishadi. Kattalar hayotida esa bu qiyinlashadi. Rejalarning to‘laligi va kasbiy majburiyatlar sababli ko‘pincha uchrashuvlarga vaqt yetishmaydi. Ushbu qiyinchiliklarga qaramasdan, eski aloqalarni asrab-avaylash arziydi. Ijtimoiy tarmoqlardagi yuzaki tanishlar o‘rniga bizni chindan tinglaydigan insonlar kerak.',
      stage1Global: {
        instructionUz: '1-Bosqich: Psixologning ta‘kidlashicha, kattalarda do‘stlik uchun nima yetishmaydi?',
        questionUz: 'Kattalikda uchrashuvlar kamayishining asosiy sababi nima?',
        options: ['Qiziqishlarning yo‘qligi', 'Bandlik va kasbiy majburiyatlar', 'Telefonlarning qimmatligi'],
        correctIndex: 1,
        explanationUz: '"Wegen des vollen Terminkalenders und beruflicher Verpflichtungen fehlt oft die Zeit".'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Genitiv predloglarini eshitib ma‘nosini toping.',
        questions: [
          {
            id: 'l55-q1',
            questionUz: 'Ijtimoiy tarmoqdagi yuzaki tanishlar o‘rniga kimlar kerak?',
            options: ['Bizni chindan tinglaydigan odamlar', 'Ko‘p puli bor insonlar', 'Chet ellik hamkasblar'],
            correctIndex: 0,
            explanationUz: '"Statt oberflächlicher Bekanntschaften ... brauchen wir Menschen, die uns wirklich zuhören".'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Psychologin', textDe: 'Wegen des Terminkalenders fehlt oft die Zeit.', textUz: 'Jadval tig‘izligi tufayli ko‘pincha vaqt yetishmaydi.' },
          { speaker: 'Psychologin', textDe: 'Trotz dieser Hürden lohnt sich echte Freundschaft.', textUz: 'Ushbu to‘siqlarga qaramasdan, chin do‘stlik bunga arziydi.' }
        ],
        keyVocabulary: [
          { german: 'der Terminkalender', uzbek: 'rejalashtirilgan ishlar kundaligi' },
          { german: 'oberflächlich', uzbek: 'yuzaki' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-55',
        lessonId: 'les-55',
        levelCode: 'b1-1',
        titleDe: 'Eine Freundschaft über Grenzen hinweg',
        titleUz: 'Chegaralarni yengib o‘tgan do‘stlik',
        textDe: 'Trotz der großen geografischen Distanz zwischen Berlin und Taschkent sind Max und Farhod seit über zehn Jahren beste Freunde. Sie lernten sich während eines Austauschprogramms kennen. Wegen beruflicher Projekte leben sie heute auf verschiedenen Kontinenten. Doch dank moderner Videotelefonie sprechen sie jede Woche miteinander. "Statt langer Pausen telefonieren wir regelmäßig. Wahre Freundschaft scheitert nicht an Kilometern", sagt Farhod mit einem Lächeln.',
        translationUz: 'Berlin va Toshkent o‘rtasidagi katta geografik masofaga qaramasdan, Maks va Farhod o‘n yildan ortiq vaqtdan beri eng yaqin do‘stlardir. Ular talabalar almashinuv dasturi davomida tanishgan edilar. Kasbiy loyihalar tufayli ular bugun turli qit‘alarda yashashadi. Ammo zamonaviy videoaloqa sharofati bilan har hafta bir-birlari bilan suhbatlashishadi. "Uzoq tanaffuslar o‘rniga biz muntazam qo‘ng‘iroqlashamiz. Chin do‘stlik kilometrlarga yengilmaydi", deydi Farhod tabassum bilan.',
        vocabularyHints: [
          { german: 'das Austauschprogramm', uzbek: 'talabalar almashinuv dasturi' },
          { german: 'scheitern an (+ Dat)', uzbek: '...sababli puchga chiqmoq, yengilmoq' }
        ],
        questions: [
          {
            id: 'q-rea-55-1',
            questionUz: 'Farhod va Maks qachon tanishgan edilar?',
            options: ['Internet orqali o‘tgan yili', 'Talabalar almashinuv dasturi davomida', 'Universitetda o‘qituvchi bo‘lganda'],
            correctIndex: 1,
            explanationUz: 'Matnda "Sie lernten sich während eines Austauschprogramms kennen" deb ta‘kidlangan.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-55',
      lessonId: 'les-55',
      levelCode: 'b1-1',
      taskDe: 'Schreiben Sie über Ihren besten Freund mit "trotz" und "wegen".',
      taskUz: 'Eng yaqin do‘stingiz haqida "trotz" va "wegen" (Genitiv) yordamida yozing.',
      instructionUz: 'Uni necha yildan beri tanishingizni va qaysi fazilatlarini qadrlashingizni tushuntiring.',
      hints: ['Wegen seiner Hilfsbereitschaft...', 'Trotz stressiger Phasen...'],
      sampleSolutionDe: 'Mein bester Freund heißt Timur. Wegen seiner großen Hilfsbereitschaft kann ich mich immer auf ihn verlassen. Trotz unserer vollen Terminkalender treffen wir uns jedes Wochenende zum Sport. Er ist ein treuer Begleiter.',
      scaffold: {
        openingDe: 'Über meinen besten Freund:',
        closingDe: 'Ich schätze unsere Freundschaft sehr.',
        usefulPhrasesDe: ['Wegen seiner/ihrer...', 'Trotz der Entfernung...', 'Statt...']
      }
    },
    shadowing: [
      {
        id: 'sha-55',
        lessonId: 'les-55',
        levelCode: 'b1-1',
        sentenceDe: 'Trotz der großen Entfernung zwischen unseren Ländern pflegen wir unsere wertvolle Freundschaft.',
        translationUz: 'Mamlakatlarimiz o‘rtasidagi katta masofaga qaramasdan, biz qimmatli do‘stligimizni asrab-avaylaymiz.',
        phoneticHint: '[Trotz der gro-sen Ent-fer-nung tsvi-shen un-ze-ren Lên-dern pfle-gen vir un-ze-re vert-fol-le Froynt-shaft]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-55-q1',
        type: 'fill-blank',
        questionUz: 'Genitiv artikli va qo‘shimchasini qo‘ying: "Wegen des schlechten _____ (das Wetter) blieben alle zu Hause."',
        blankSentence: 'Wegen des schlechten [blank] blieben alle zu Hause.',
        options: ['Wetters', 'Wetter', 'Wetteren', 'Wetterem'],
        correctAnswer: 'Wetters',
        explanationUz: 'das Wetter Genitivda "des Wetters" bo‘ladi (-(e)s qo‘shimchasi bilan).',
        mistakeTipUz: '❌ das/der otlar Genitivda -(e)s oladi: des Wetters.'
      },
      {
        id: 'prac-55-q2',
        type: 'multiple-choice',
        questionUz: '"qaramasdan" ma‘nosidagi Genitiv predlogi qaysi?',
        options: ['trotz', 'wegen', 'während', 'statt'],
        correctAnswer: 'trotz',
        explanationUz: '"trotz" = qaramasdan (Trotz der Müdigkeit - charchoqqa qaramasdan).',
        mistakeTipUz: '❌ "trotz" qarama-qarshilikni (qaramasdan) bildiradi.'
      },
      {
        id: 'prac-55-q3',
        type: 'word-order',
        questionUz: 'Gapni to‘g‘ri tuzing:',
        scrambledWords: ['des', 'Statt', 'er', 'Kaffees,', 'trank', 'Tee'],
        correctAnswer: 'Statt des Kaffees, trank er Tee',
        explanationUz: 'Statt des Kaffees (Genitiv) + trank (fe‘l) + er (ega) + Tee.',
        mistakeTipUz: '❌ Statt des Kaffees trank er Tee.'
      }
    ]
  },

  // ==========================================
  // LEKTION 56: Konflikte und Lösungen
  // ==========================================
  {
    id: 'les-56',
    moduleId: 'mod-b1-1-3',
    levelCode: 'b1-1',
    titleDe: 'Konflikte und Lösungen',
    titleUz: 'Nizolar, kelishmovchiliklar va murosaga kelish',
    descriptionUz: 'Munozaralar, tushunmovchiliklarni hal etish, Relativsätze mit Präpositionen (predlogli nisbiy gaplar: mit dem, über die, auf den).',
    orderIndex: 56,
    estimatedMinutes: 45,
    isPublished: true,
    objectivesUz: [
      'Nizoli vaziyatlar va ularning yechimi haqida bahslashish',
      'Predlogli nisbiy gaplar (Relativsätze mit Präpositionen) tuzilishini o‘rganish',
      'Murosa (Kompromiss) topish va kechirim so‘rash madaniyatini ifodalash'
    ],
    warmUp: {
      situationUz: 'Kollektivda yoki oilada fikrlar to‘qnash kelganda, janjallashmasdan xotirjam va konstruktiv tarzda murosa topish yo‘llarini izlayapsiz.',
      curiosityQuestionUz: '"Men u bilan gaplashgan hamkasbim" yoki "Biz u haqida bahslashgan mavzu" jumlasi nemis tilida qanday bog‘lanadi?',
      miniDialogue: [
        { speaker: 'Jan', textDe: 'Ist das der Kollege, mit dem du dich gestritten hast?', textUz: 'Sen u bilan tortishib qolgan hamkasbing shumi?' },
        { speaker: 'Sara', textDe: 'Ja, aber das ist das Problem, über das wir bereits gesprochen haben. Wir haben einen Kompromiss gefunden.', textUz: 'Ha, ammo bu biz allaqachon gaplashib olgan muammodir. Biz murosa topdik.' }
      ],
      hintUz: 'Nisbiy gaplarda predlog nisbiy olmoshdan oldin keladi va kelishikni boshqaradi: mit dem (Dativ), über das (Akkusativ).'
    },
    contextDialogue: {
      titleDe: 'Ein klärendes Gespräch',
      titleUz: 'Oydinlik kirituvchi suhbat',
      situationUz: 'Ikki tomon kelishmovchilikdan so‘ng ochiq suhbatlashib, vaziyatni yumshatmoqda.',
      lines: [
        { speaker: 'Jan', textDe: 'Sara, danke, dass du dir Zeit nimmst. Es gibt einige Punkte, über die wir dringend reden müssen.', textUz: 'Sara, vaqt ajratganing uchun rahmat. Biz zudlik bilan gaplashib olishimiz kerak bo‘lgan bir nechta nuqtalar bor.' },
        { speaker: 'Sara', textDe: 'Ich bin ganz deiner Meinung. Das Missverständnis, über das wir uns geärgert haben, beruhte nur auf schlechter Kommunikation.', textUz: 'Fikringga to‘liq qo‘shilaman. Bizning jahlimizni chiqargan tushunmovchilik shunchaki yomon muloqotga asoslangan edi.' },
        { speaker: 'Jan', textDe: 'Genau. Du bist eine Kollegin, auf die ich mich immer verlassen möchte.', textUz: 'To‘g‘ri. Sen men doim suyanishni istaydigan hamkasbsan.' },
        { speaker: 'Sara', textDe: 'Lass uns vereinbaren: Wenn es wieder Unklarheiten gibt, sprechen wir sofort miteinander!', textUz: 'Keling, kelishib olamiz: agar yana noaniqliklar bo‘lsa, darhol bir-birimiz bilan gaplashamiz!' }
      ],
      usefulPhrases: [
        { german: 'das Missverständnis', uzbek: 'tushunmovchilik' },
        { german: 'der Kompromiss', uzbek: 'murosa, o‘zaro yon berish' },
        { german: 'einen Streit beilegen', uzbek: 'nizoni bartaraf etmoq' },
        { german: 'auf gleicher Augenhöhe sprechen', uzbek: 'teng huquqli va hurmat bilan gaplashmoq' }
      ],
      culturalNoteUz: 'Germaniyada ish joyidagi ziddiyatlarni shaxsiylashtirmasdan, "sachlich" (obyektiv va faktlarga tayangan holda) muhokama qilish professional odob sanaladi.'
    },
    vocabulary: [
      {
        id: 'voc-b1-8-1',
        lessonId: 'les-56',
        levelCode: 'b1-1',
        german: 'der Konflikt',
        article: 'der',
        plural: 'die Konflikte',
        uzbek: 'nizo, ziddiyat',
        exampleDe: 'Konflikte gehören zum Alltag, wichtig ist die Lösung.',
        exampleUz: 'Ziddiyatlar kundalik hayotning bir qismidir, asosiysi ularning yechimidir.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-8-2',
        lessonId: 'les-56',
        levelCode: 'b1-1',
        german: 'der Kompromiss',
        article: 'der',
        plural: 'die Kompromisse',
        uzbek: 'murosa',
        exampleDe: 'Beide Seiten mussten einen Kompromiss eingehen.',
        exampleUz: 'Har ikki tomon murosaga kelishi kerak bo‘ldi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-8-3',
        lessonId: 'les-56',
        levelCode: 'b1-1',
        german: 'das Missverständnis',
        article: 'das',
        plural: 'die Missverständnisse',
        uzbek: 'tushunmovchilik',
        exampleDe: 'Das war nur ein bedauerliches Missverständnis.',
        exampleUz: 'Bu shunchaki afsuslanarli tushunmovchilik edi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-8-4',
        lessonId: 'les-56',
        levelCode: 'b1-1',
        german: 'verzeihen',
        article: null,
        plural: null,
        uzbek: 'kechirmoq, afv etmoq',
        exampleDe: 'Kannst du mir meinen Fehler verzeihen?',
        exampleUz: 'Xatoyimni kechira olasanmi?',
        wordType: 'verb'
      },
      {
        id: 'voc-b1-8-5',
        lessonId: 'les-56',
        levelCode: 'b1-1',
        german: 'die Einigung',
        article: 'die',
        plural: 'die Einigungen',
        uzbek: 'kelishuv, yakdil qaror',
        exampleDe: 'Nach langen Verhandlungen erzielten sie eine Einigung.',
        exampleUz: 'Uzoq muzokaralardan so‘ng ular kelishuvga erishdilar.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-8-6',
        lessonId: 'les-56',
        levelCode: 'b1-1',
        german: 'sachlich',
        article: null,
        plural: null,
        uzbek: 'vazmin, faktlarga asoslangan, xolis',
        exampleDe: 'Wir sollten diese Debatte sachlich führen.',
        exampleUz: 'Bu bahsni xolis va vazmin tarzda olib borishimiz kerak.',
        wordType: 'adjective'
      },
      {
        id: 'voc-b1-8-7',
        lessonId: 'les-56',
        levelCode: 'b1-1',
        german: 'die Frustration',
        article: 'die',
        uzbek: 'umidsizlik, hafsala pir bo‘lishi',
        exampleDe: 'Ständige Vorwürfe führen zu großer Frustration.',
        exampleUz: 'Doimiy ayblovlar katta hafsalasizlikka olib keladi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-8-8',
        lessonId: 'les-56',
        levelCode: 'b1-1',
        german: 'vermeiden',
        article: null,
        plural: null,
        uzbek: 'oldini olmoq, saqlanmoq',
        exampleDe: 'Solche Fehler können leicht vermieden werden.',
        exampleUz: 'Bunday xatolarning oldini osonlikcha olish mumkin.',
        wordType: 'verb'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'Quyidagi nisbiy gaplardagi predlog va olmoshlarga diqqat qiling:',
      discoveryExamples: [
        {
          german: 'Das ist der Freund, mit dem ich reise.',
          highlight: 'mit dem',
          uzbek: 'Bu men u bilan sayohat qiladigan do‘stimdir (mit + Dativ Maskulin).'
        },
        {
          german: 'Das ist das Thema, über das wir streiten.',
          highlight: 'über das',
          uzbek: 'Bu biz u haqida bahslashayotgan mavzudir (über + Akkusativ Neutrum).'
        },
        {
          german: 'Das sind die Kollegen, auf die ich warte.',
          highlight: 'auf die',
          uzbek: 'Bu men ularni kutayotgan hamkasblarimdir (auf + Akkusativ Plural).'
        }
      ],
      patternExplanationUz: 'Agar nisbiy gapdagi fe‘l maxsus predlog talab qilsa (sprechen über, warten auf, reisen mit), bu predlog nisbiy olmoshdan OLDINGA o‘tadi va kelishikni (Akkusativ yoki Dativ) belgilaydi.',
      ruleFormulaUz: 'Predlog + Relativpronomen (Dativ / Akkusativ) + ... + Fe‘l (oxirida)'
    },
    grammar: [
      {
        id: 'gra-56',
        lessonId: 'les-56',
        levelCode: 'b1-1',
        titleDe: 'Relativsätze mit Präpositionen',
        titleUz: 'Predlogli nisbiy gaplar (Relativsätze mit Präpositionen)',
        summaryUz: 'Fe‘lning predlogi nisbiy olmoshdan oldinga qo‘yiladi: mit dem, an die, für das.',
        explanationUz: `Qanday yasaladi?
1. Asosiy gapdagi aniqlanayotgan so‘zning jinsini aniqlang (der Mann, die Frau, das Buch, die Freunde).
2. Ergash gapdagi fe‘l qaysi predlog va kelishik talab qilishini toping:
   - *warten **auf** (+ Akk)*
   - *sprechen **mit** (+ Dat)*
   - *sich interessieren **für** (+ Akk)*
   - *träumen **von** (+ Dat)*
3. Predlogni nisbiy olmosh bilan birga qo‘ying:
   - der Mann + mit: **mit dem**
   - die Frau + mit: **mit der**
   - das Kind + mit: **mit dem**
   - die Kollegen + mit: **mit denen** (Plural Dativ!)`,
        tables: [
          {
            title: 'Predlogli nisbiy olmoshlar (Akkusativ va Dativ)',
            headers: ['Kelishik', 'Maskulin', 'Feminin', 'Neutrum', 'Plural'],
            rows: [
              ['Akkusativ (für/auf)', 'für den / auf den', 'für die / auf die', 'für das / auf das', 'für die / auf die'],
              ['Dativ (mit/von)', 'mit dem / von dem', 'mit der / von der', 'mit dem / von dem', 'mit denen / von denen']
            ]
          }
        ],
        examples: [
          {
            german: 'Das ist die Kollegin, mit der ich das Projekt leite.',
            uzbek: 'Bu men u bilan loyihani boshqarayotgan hamkasbamdir.',
            highlight: 'mit der'
          },
          {
            german: 'Hier sind die Dokumente, nach denen Sie gefragt haben.',
            uzbek: 'Mana siz ular haqida so‘ragan hujjatlar.',
            highlight: 'nach denen'
          }
        ],
        commonMistakes: [
          {
            incorrect: 'Das ist der Mann, den ich mit arbeite.',
            correct: 'Das ist der Mann, mit dem ich arbeite.',
            explanationUz: 'Predlog gap ichida qolib ketmaydi, u to‘g‘ridan-to‘g‘ri nisbiy olmoshdan oldin kelishi shart.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Konfliktlösung im Teamcoaching',
      titleUz: 'Jamoaviy kouchingda nizolarni hal qilish',
      situationUz: 'Kompaniya treneri xodimlar o‘rtasidagi tushunmovchiliklarni qanday bartaraf etishni o‘rgatmoqda.',
      audioTranscriptDe: 'Trainer: In jedem Team gibt es Momente, in denen Meinungen aufeinanderprallen. Wichtig ist die Haltung, mit der wir dem anderen begegnen. Wenn Vorwürfe laut werden, schaltet das Gegenüber auf Abwehr. Stattdessen sollten wir über die Gefühle sprechen, die die Situation in uns auslöst. Die Kollegen, mit denen wir täglich zusammenarbeiten, sind keine Gegner, sondern Partner. Nur durch Zuhören entsteht die Vertrauensbasis, auf der produktive Lösungen wachsen können.',
      translationUz: 'Trener: Har qanday jamoada fikrlar to‘qnash keladigan lahzalar bo‘ladi. Muhimi — biz boshqasiga qanday munosabat bilan yondashishimizdir. Agar ayblovlar yangrasa, qarshi tomon himoyalanishga o‘tadi. Buning o‘rniga vaziyat bizda uyg‘otayotgan hissiyotlar haqida gapirishimiz kerak. Biz har kuni birga ishlaydigan hamkasblarimiz raqib emas, balki hamkordir. Faqat tinglash orqaligina samarali yechimlar unib chiqadigan ishonch poydevori paydo bo‘ladi.',
      stage1Global: {
        instructionUz: '1-Bosqich: Trenerning asosiy g‘oyasi nima?',
        questionUz: 'Hamkasblarga qanday munosabatda bo‘lish kerak?',
        options: ['Raqib sifatida', 'Hamkor sifatida', 'Befarq begona sifatida'],
        correctIndex: 1,
        explanationUz: '"...sind keine Gegner, sondern Partner" deb ta‘kidlandi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Nisbiy gaplarni aniqlang.',
        questions: [
          {
            id: 'l56-q1',
            questionUz: 'Samarali yechimlar qanday poydevorda o‘sishi mumkin?',
            options: ['Pul mukofotlari ustida', 'Tinglash orqali paydo bo‘ladigan ishonch poydevorida', 'Qat‘iy jazolash tizimida'],
            correctIndex: 1,
            explanationUz: '"...die Vertrauensbasis, auf der produktive Lösungen wachsen können".'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Trainer', textDe: 'Die Kollegen, mit denen wir arbeiten, sind Partner.', textUz: 'Biz ular bilan ishlaydigan hamkasblar — hamkorlardir.' },
          { speaker: 'Teilnehmer', textDe: 'Das ist eine wichtige Erkenntnis.', textUz: 'Bu juda muhim xulosa.' }
        ],
        keyVocabulary: [
          { german: 'aufeinanderprallen', uzbek: 'to‘qnash kelmoq' },
          { german: 'die Vertrauensbasis', uzbek: 'ishonch asosi, poydevori' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-56',
        lessonId: 'les-56',
        levelCode: 'b1-1',
        titleDe: 'Gewaltfreie Kommunikation im Alltag',
        titleUz: 'Kundalik hayotda tajovuzsiz muloqot',
        textDe: 'Das Konzept der "Gewaltfreien Kommunikation" (GFK), das von Marshall Rosenberg entwickelt wurde, hilft weltweit Millionen Menschen bei der Streitbeilegung. Statt Anschuldigungen wie "Du hörst mir nie zu!" formuliert man vier Schritte: 1. Beobachtung ("Wenn du aufs Handy schaust..."), 2. Gefühl ("...fühle ich mich ignoriert"), 3. Bedürfnis ("...weil mir Aufmerksamkeit wichtig ist"), 4. Bitte ("Könntest du das Handy weglegen?"). Menschen, mit denen man so spricht, reagieren fast immer kooperativ.',
        translationUz: 'Marshall Rozenberg tomonidan ishlab chiqilgan "Tajovuzsiz muloqot" (GFK) konsepsiyasi butun dunyo bo‘ylab millionlab odamlarga nizolarni bartaraf etishda yordam bermoqda. "Meni aslo eshitmaysan!" kabi ayblovlar o‘rniga 4 ta qadam ifodalanadi: 1. Kuzatuv ("Telefonga qaraganingda..."), 2. Hissiyot ("...o‘zimni e‘tibordan chetda his qilaman"), 3. Ehtiyoj ("...chunki menga e‘tibor muhim"), 4. Iltimos ("Telefonni chetga qo‘ya olarmiding?"). Insonlar, agar ular bilan shunday gaplashilsa, deyarli har doim hamkorlik ruhida javob qaytarishadi.',
        vocabularyHints: [
          { german: 'die Anschuldigung', uzbek: 'ayblov' },
          { german: 'das Bedürfnis', uzbek: 'ehtiyoj' }
        ],
        questions: [
          {
            id: 'q-rea-56-1',
            questionUz: 'Tajovuzsiz muloqotning ikkinchi qadami nima?',
            options: ['Ayblov bildirish', 'O‘z hissiyotini aytish', 'Telefonni o‘chirish'],
            correctIndex: 1,
            explanationUz: 'Matnda "2. Gefühl: ...fühle ich mich ignoriert" deb ko‘rsatilgan.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-56',
      lessonId: 'les-56',
      levelCode: 'b1-1',
      taskDe: 'Beschreiben Sie eine Person, mit der Sie gerne zusammenarbeiten oder Zeit verbringen.',
      taskUz: 'Siz u bilan ishlashni yoki vaqt o‘tkazishni yaxshi ko‘radigan inson haqida predlogli nisbiy gap bilan yozing.',
      instructionUz: '"mit dem / mit der / auf den" konstruktsiyalaridan foydalaning.',
      hints: ['Das ist ein Mensch, mit dem...', 'Das ist die Kollegin, auf die...'],
      sampleSolutionDe: 'Mein Kollege Farhod ist eine Person, mit der ich mich hervorragend verstehe. Bei schwierigen Aufgaben ist er der Partner, auf den ich mich immer verlassen kann. Wir finden für jedes Problem, über das wir diskutieren, eine gute Lösung.',
      scaffold: {
        openingDe: 'Über eine besondere Person:',
        closingDe: 'Ich bin froh über diese Zusammenarbeit.',
        usefulPhrasesDe: ['...ist jemand, mit dem...', '...ist eine Person, auf die...', '...das Thema, über das...']
      }
    },
    shadowing: [
      {
        id: 'sha-56',
        lessonId: 'les-56',
        levelCode: 'b1-1',
        sentenceDe: 'Das Missverständnis, über das wir uns geärgert hatten, konnte durch ein offenes Gespräch gelöst werden.',
        translationUz: 'Bizning jahlimizni chiqargan tushunmovchilik ochiq suhbat orqali hal etildi.',
        phoneticHint: '[Das Miss-fer-shtênt-nis, yuber das vir uns ge-êr-gert hat-ten, konn-te durh ayn of-fe-nes Ge-shprêh ge-löst ver-den]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-56-q1',
        type: 'fill-blank',
        questionUz: 'To‘g‘ri nisbiy olmoshni qo‘ying: "Das ist der Freund, mit _____ (der Freund - Dativ) ich verreise."',
        blankSentence: 'Das ist der Freund, mit [blank] ich verreise.',
        options: ['dem', 'den', 'der', 'des'],
        correctAnswer: 'dem',
        explanationUz: '"mit" Dativ talab qiladi. "der Freund" Dativda "dem" bo‘ladi.',
        mistakeTipUz: '❌ mit + Dativ Maskulin = mit dem.'
      },
      {
        id: 'prac-56-q2',
        type: 'multiple-choice',
        questionUz: '"Das ist das Problem, _____ wir sprechen müssen (über + Akkusativ Neutrum)."',
        options: ['über das', 'über dem', 'über den', 'über die'],
        correctAnswer: 'über das',
        explanationUz: '"das Problem" Akkusativda "über das" bo‘ladi.',
        mistakeTipUz: '❌ über + das Problem = über das.'
      },
      {
        id: 'prac-56-q3',
        type: 'word-order',
        questionUz: 'Gapni to‘g‘ri tuzing:',
        scrambledWords: ['ich', 'Kollegen,', 'die', 'auf', 'Das', 'warte', 'sind'],
        correctAnswer: 'Das sind die Kollegen, auf die ich warte',
        explanationUz: 'Das sind die Kollegen (1) + auf die (2) + ich (3) + warte (4).',
        mistakeTipUz: '❌ Das sind die Kollegen, auf die ich warte.'
      }
    ]
  },

  // ==========================================
  // LEKTION 57: Familie und moderne Lebensformen
  // ==========================================
  {
    id: 'les-57',
    moduleId: 'mod-b1-1-3',
    levelCode: 'b1-1',
    titleDe: 'Familie und moderne Lebensformen',
    titleUz: 'Oila modellari, qarindoshlar va zamonaviy hayot',
    descriptionUz: 'An‘anaviy va zamonaviy oila turlari (Patchwork-Familie, Single), Relativpronomen im Dativ und Genitiv (dessen, deren, denen).',
    orderIndex: 57,
    estimatedMinutes: 45,
    isPublished: true,
    objectivesUz: [
      'Zamonaviy oila shakllari va jamiyatdagi o‘zgarishlar haqida fikr bildirish',
      'Nisbiy olmoshlarning Dativ (denen) va Genitiv (dessen, deren) shakllarini egallash',
      'Avlodlar o‘rtasidagi munosabatlarni tasvirlash'
    ],
    warmUp: {
      situationUz: 'Katta oilaviy tadbirda turli avlod vakillari — buva-buvilar, ota-onalar va yoshlar zamonaviy hayot tarzi haqida suhbatlashmoqda.',
      curiosityQuestionUz: '"Bolalari chet elda yashaydigan o‘sha kishi" deganda "uning bolalari" nisbiy olmoshi nemischa qanday bo‘ladi?',
      miniDialogue: [
        { speaker: 'Felix', textDe: 'Kennst du Herrn Berger, dessen Sohn in Berlin studiert?', textUz: 'O‘g‘li Berlinda o‘qiydigan janob Bergerni taniysanmi?' },
        { speaker: 'Lara', textDe: 'Ja, und das ist Frau Meier, deren Tochter Ärztin geworden ist.', textUz: 'Ha, anavi esa qizi shifokor bo‘lgan Meier xonim.' }
      ],
      hintUz: 'Egalik nisbiy olmoshlari Genitivda erkak/neytral jins uchun "dessen", ayol/ko‘plik uchun "deren" shaklida bo‘ladi.'
    },
    contextDialogue: {
      titleDe: 'Familie im 21. Jahrhundert',
      titleUz: 'XXI asrda oila',
      situationUz: 'Ikki do‘st zamonaviy jamiyatdagi oila shakllari va an‘analar haqida bahslashmoqda.',
      lines: [
        { speaker: 'Felix', textDe: 'Lara, wie hat sich die Familienstruktur in Deutschland in den letzten Jahrzehnten verändert?', textUz: 'Lara, Germaniyada so‘nggi o‘n yilliklarda oila tuzilmasi qanday o‘zgardi?' },
        { speaker: 'Lara', textDe: 'Sehr stark. Neben der klassischen Familie gibt es immer mehr Patchwork-Familien und Alleinerziehende, deren Alltag viel Organisation erfordert.', textUz: 'Juda kuchli. Klassik oila yonida tobora ko‘proq aralash oilalar va kundalik hayoti katta tartibni talab qiladigan yolg‘iz ota-onalar bor.' },
        { speaker: 'Felix', textDe: 'Und was ist mit Großeltern, denen der Kontakt zu den Enkeln besonders wichtig ist?', textUz: 'Nevaralari bilan muloqot o‘ta muhim bo‘lgan buva-buvilar-chi?' },
        { speaker: 'Lara', textDe: 'Viele wohnen heute in Mehrgenerationenhäusern, wo Jung und Alt voneinander profitieren.', textUz: 'Ko‘plari bugun yoshlar va keksalar bir-biriga foyda keltiradigan ko‘p avlodli uylarda yashashadi.' }
      ],
      usefulPhrases: [
        { german: 'die Patchwork-Familie', uzbek: 'aralash oila (avvalgi nikohdagi farzandlar bilan)' },
        { german: 'alleinerziehend', uzbek: 'farzandini yolg‘iz tarbiyalayotgan' },
        { german: 'das Mehrgenerationenhaus', uzbek: 'turli avlodlar birga yashaydigan uy' },
        { german: 'profitieren von (+ Dat)', uzbek: '...dan manfaat / foyda ko‘rmoq' }
      ],
      culturalNoteUz: 'Germaniyada "Mehrgenerationenhäuser" (ko‘p avlodli uylar) davlat loyihasi bo‘lib, keksalar yolg‘iz qolmasligi va bolalarga qarab turishi uchun maxsus markazlar yaratilgan.'
    },
    vocabulary: [
      {
        id: 'voc-b1-9-1',
        lessonId: 'les-57',
        levelCode: 'b1-1',
        german: 'die Patchwork-Familie',
        article: 'die',
        plural: 'die Patchwork-Familien',
        uzbek: 'aralash oila',
        exampleDe: 'In einer Patchwork-Familie leben Kinder aus verschiedenen Beziehungen zusammen.',
        exampleUz: 'Aralash oilada turli nikohlardan bo‘lgan bolalar birga yashaydilar.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-9-2',
        lessonId: 'les-57',
        levelCode: 'b1-1',
        german: 'der Alleinerziehende',
        article: 'der',
        plural: 'die Alleinerziehenden',
        uzbek: 'yolg‘iz ota yoki ona',
        exampleDe: 'Alleinerziehende leisten täglich Enormes.',
        exampleUz: 'Yolg‘iz ota-onalar har kuni ulkan mehnat qilishadi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-9-3',
        lessonId: 'les-57',
        levelCode: 'b1-1',
        german: 'die Generation',
        article: 'die',
        plural: 'die Generationen',
        uzbek: 'avlod',
        exampleDe: 'Der Dialog zwischen den Generationen ist unverzichtbar.',
        exampleUz: 'Avlodlar o‘rtasidagi muloqot juda zarur.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-9-4',
        lessonId: 'les-57',
        levelCode: 'b1-1',
        german: 'die Verwandtschaft',
        article: 'die',
        uzbek: 'qarindosh-urug‘chilik',
        exampleDe: 'Zu Festen kommt die ganze Verwandtschaft zusammen.',
        exampleUz: 'Bayramlarda butun qarindoshlar yig‘iladi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-9-5',
        lessonId: 'les-57',
        levelCode: 'b1-1',
        german: 'zusammenhalten',
        article: null,
        plural: null,
        uzbek: 'birdam bo‘lmoq, jips bo‘lmoq',
        exampleDe: 'In schwierigen Zeiten muss eine Familie zusammenhalten.',
        exampleUz: 'Qiyin damlarda oila jips bo‘lishi kerak.',
        wordType: 'verb'
      },
      {
        id: 'voc-b1-9-6',
        lessonId: 'les-57',
        levelCode: 'b1-1',
        german: 'die Lebensform',
        article: 'die',
        plural: 'die Lebensformen',
        uzbek: 'turmush tarzi, hayot shakli',
        exampleDe: 'Heute gibt es viele verschiedene Lebensformen.',
        exampleUz: 'Bugun ko‘plab turfa xil turmush shakllari mavjud.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-9-7',
        lessonId: 'les-57',
        levelCode: 'b1-1',
        german: 'harmonisch',
        article: null,
        plural: null,
        uzbek: 'ahil, totuv',
        exampleDe: 'Sie führen ein harmonisches Familienleben.',
        exampleUz: 'Ular ahil oilaviy hayot kechirishmoqda.',
        wordType: 'adjective'
      },
      {
        id: 'voc-b1-9-8',
        lessonId: 'les-57',
        levelCode: 'b1-1',
        german: 'aufziehen',
        article: null,
        plural: null,
        uzbek: 'tarbiyalamoq, katta qilmoq (farzandni)',
        exampleDe: 'Sie hat drei Kinder erfolgreich aufgezogen.',
        exampleUz: 'U uch farzandni muvaffaqiyatli tarbiyalab voyaga yetkazdi.',
        wordType: 'verb'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'Quyidagi gaplardagi "dessen", "deren" va "denen" so‘zlariga e‘tibor bering:',
      discoveryExamples: [
        {
          german: 'Das ist der Mann, dessen Auto gestohlen wurde.',
          highlight: 'dessen',
          uzbek: 'Bu mashinasi (uning mashinasi) o‘g‘irlangan kishi.'
        },
        {
          german: 'Das ist die Frau, deren Tochter im Ausland lebt.',
          highlight: 'deren',
          uzbek: 'Bu qizi (uning qizi) chet elda yashaydigan ayol.'
        },
        {
          german: 'Das sind die Großeltern, denen wir immer helfen.',
          highlight: 'denen',
          uzbek: 'Bu biz doim ularga (Dativ Plural) yordam beradigan buva-buvilar.'
        }
      ],
      patternExplanationUz: 'Egalik nisbiy olmoshlari Genitivda: erkak va neytral jins uchun "dessen" (uning), ayol jinsi va ko‘plik uchun "deren" (uning / ularning). Dativ ko‘plikdagi nisbiy olmosh esa "denen" (ularga) bo‘ladi.',
      ruleFormulaUz: 'Genitiv: dessen (der/das) | deren (die/Plural) || Dativ Plural: denen'
    },
    grammar: [
      {
        id: 'gra-57',
        lessonId: 'les-57',
        levelCode: 'b1-1',
        titleDe: 'Relativpronomen im Dativ Plural und Genitiv',
        titleUz: 'Nisbiy olmoshlar: Dativ Plural (denen) va Genitiv (dessen, deren)',
        summaryUz: 'dessen (uning - erkak/neytral), deren (uning/ularning - ayol/ko‘plik), denen (ularga - Dativ).',
        explanationUz: `1. **Genitiv nisbiy olmoshlari (Egalik: uning / kimningki):**
Asosiy gapdagi shaxsga qarab tanlanadi (orqasidan kelgan otning jinsiga qarab emas!):
- Erkak kishi: *der Mann, **dessen** Name...* (Ismi ... bo‘lgan kishi)
- Bola / Neytral: *das Kind, **dessen** Fahrrad...* (Velosipedi ... bo‘lgan bola)
- Ayol kishi: *die Frau, **deren** Mann...* (Eri ... bo‘lgan ayol)
- Ko‘plik: *die Eltern, **deren** Kinder...* (Farzandlari ... bo‘lgan ota-ona)

2. **Dativ Plural nisbiy olmoshi (denen):**
- *Das sind die Freunde, **denen** ich vertraue.* (Bu men ishonadigan do‘stlarimdir — vertrauen + Dativ).`,
        tables: [
          {
            title: 'Nisbiy olmoshlarning to‘liq jadvali (Nom, Akk, Dat, Gen)',
            headers: ['Kelishik', 'Maskulin', 'Feminin', 'Neutrum', 'Plural'],
            rows: [
              ['Nominativ', 'der', 'die', 'das', 'die'],
              ['Akkusativ', 'den', 'die', 'das', 'die'],
              ['Dativ', 'dem', 'der', 'dem', 'denen'],
              ['Genitiv', 'dessen', 'deren', 'dessen', 'deren']
            ]
          }
        ],
        examples: [
          {
            german: 'Wir haben Nachbarn, deren Kinder sehr musikalisch sind.',
            uzbek: 'Bizning farzandlari juda musiqiy qobiliyatli bo‘lgan qo‘shnilarimiz bor.',
            highlight: 'deren'
          },
          {
            german: 'Hier sind die Kollegen, denen wir für die Unterstützung danken.',
            uzbek: 'Mana biz yordamlari uchun ularga minnatdorchilik bildiradigan hamkasblar.',
            highlight: 'denen'
          }
        ],
        commonMistakes: [
          {
            incorrect: 'Die Frau, dessen Auto... (xato: ayol jinsi uchun dessen emas).',
            correct: 'Die Frau, deren Auto...',
            explanationUz: 'Ayol jinsi (die Frau) uchun Genitiv nisbiy olmosh doimo "deren" bo‘ladi.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Leben im Mehrgenerationenhaus',
      titleUz: 'Ko‘p avlodli uyda yashash',
      situationUz: 'Katta oila a‘zolari bir tom ostida turli avlodlar qanday totuv yashayotganini tushuntirmoqda.',
      audioTranscriptDe: 'Frau Sommer: Vor drei Jahren zogen wir in ein Mehrgenerationenhaus. Oben wohnen meine Eltern, deren Gesundheit etwas Unterstützung braucht. Unten wohne ich mit meinen Kindern. Nebenan lebt ein junger Student, dessen Familie weit weg wohnt. Wir helfen uns gegenseitig: Die Großeltern passen auf die Enkel auf, denen das gemeinsame Kochen großen Spaß macht. Und der Student hilft bei Computerproblemen.',
      translationUz: 'Sommer xonim: Uch yil oldin biz ko‘p avlodli uyga ko‘chib o‘tdik. Yuqori qavatda salomatligi biroz yordamga muhtoj bo‘lgan ota-onam yashashadi. Pastda esa men farzandlarim bilan yashayman. Yonimizda oilasi uzoqda yashaydigan yosh talaba istiqomat qiladi. Biz bir-birimizga yordam beramiz: Buva-buvilar birga ovqat pishirish katta zavq bag‘ishlaydigan nevaralarga qarab turishadi. Talaba esa kompyuter muammolarida ko‘maklashadi.',
      stage1Global: {
        instructionUz: '1-Bosqich: Ushbu uyda kimlar birga yashamoqda?',
        questionUz: 'Ko‘p avlodli uyning afzalligi nimada?',
        options: ['Ijara narxi qimmatligida', 'Turli avlodlar bir-biriga yordam bera olishida', 'Shahar markazidan uzoqligida'],
        correctIndex: 1,
        explanationUz: '"Wir helfen uns gegenseitig" — hamma bir-biriga yordam beradi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Qaysi nisbiy olmoshlar ishlatildi?',
        questions: [
          {
            id: 'l57-q1',
            questionUz: 'Talabaning oilasi qayerda yashaydi?',
            options: ['Xuddi shu ko‘chada', 'Uzoqda', 'Chet elda emas, qo‘shni xonada'],
            correctIndex: 1,
            explanationUz: '"...dessen Familie weit weg wohnt".'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Frau Sommer', textDe: 'Meine Eltern, deren Gesundheit Unterstützung braucht.', textUz: 'Salomatligi yordamga muhtoj bo‘lgan ota-onam.' },
          { speaker: 'Frau Sommer', textDe: 'Ein Student, dessen Familie weit weg wohnt.', textUz: 'Oilasi uzoqda yashaydigan talaba.' }
        ],
        keyVocabulary: [
          { german: 'das Mehrgenerationenhaus', uzbek: 'ko‘p avlodli xonadon' },
          { german: 'aufpassen auf (+ Akk)', uzbek: 'qarab turmoq, parvarishlamoq' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-57',
        lessonId: 'les-57',
        levelCode: 'b1-1',
        titleDe: 'Moderne Familienmodelle in Deutschland',
        titleUz: 'Germaniyada zamonaviy oila modellari',
        textDe: 'Das traditionelle Bild von Vater, Mutter und zwei Kindern ist in Deutschland längst nicht mehr das einzige Modell. Rund jedes dritte Kind wächst heute bei Eltern auf, deren Lebensformen sich verändert haben. Immer häufiger gründen getrennte Eltern neue Partnerschaften, aus denen Patchwork-Familien entstehen. Für Kinder bedeutet dies oft ein erweitertes soziales Netzwerk mit zusätzlichen Bezugspersonen, denen sie vertrauen können. Wichtig für das Gelingen ist gegenseitiger Respekt.',
        translationUz: 'Ota, ona va ikki farzanddan iborat an‘anaviy tasavvur Germaniyada allaqachon yagona model bo‘lmay qolgan. Har uchinchi bola bugun hayot shakli o‘zgargan ota-onalarda ulg‘aymoqda. Ajrashgan ota-onalar tobora ko‘proq yangi nikohlar qurib, ulardan aralash oilalar paydo bo‘lmoqda. Bolalar uchun bu ko‘pincha ular ishonishi mumkin bo‘lgan qo‘shimcha yaqin insonlar bilan kengaygan ijtimoiy muhitni anglatadi. Muvaffaqiyat uchun eng muhimi — o‘zaro hurmatdir.',
        vocabularyHints: [
          { german: 'die Bezugsperson', uzbek: 'ishonchli yaqin inson' },
          { german: 'das Gelingen', uzbek: 'muvaffaqiyat, yaxshi chiqish' }
        ],
        questions: [
          {
            id: 'q-rea-57-1',
            questionUz: 'Aralash oilalarda yaxshi munosabatlar uchun nima muhim?',
            options: ['Katta daromad', 'O‘zaro hurmat', 'Bir xil xarakter'],
            correctIndex: 1,
            explanationUz: 'Matnda "Wichtig für das Gelingen ist gegenseitiger Respekt" deyilgan.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-57',
      lessonId: 'les-57',
      levelCode: 'b1-1',
      taskDe: 'Beschreiben Sie Ihre Familie oder Verwandtschaft mit "dessen" oder "deren".',
      taskUz: 'Oilangiz yoki qarindoshlaringiz haqida "dessen" yoki "deren" yordamida yozing.',
      instructionUz: 'Qarindoshlaringizdan kimning kasbi yoki mashg‘uloti nima ekanini bayon qiling.',
      hints: ['Ich habe einen Onkel, dessen Sohn...', 'Das ist meine Tante, deren Tochter...'],
      sampleSolutionDe: 'In meiner Familie halten alle fest zusammen. Ich habe einen Onkel, dessen Sohn in Deutschland Medizin studiert. Meine Tante, deren Töchter wunderschön Klavier spielen, lädt uns oft zu Festen ein. Wir sind Verwandte, denen Zusammenhalt sehr wichtig ist.',
      scaffold: {
        openingDe: 'Meine Familie und Verwandtschaft:',
        closingDe: 'Familie ist das Fundament.',
        usefulPhrasesDe: ['...dessen Sohn...', '...deren Kinder...', '...denen wir vertrauen']
      }
    },
    shadowing: [
      {
        id: 'sha-57',
        lessonId: 'les-57',
        levelCode: 'b1-1',
        sentenceDe: 'Wir schätzen unsere hilfsbereiten Nachbarn, deren Unterstützung für uns im Alltag unbezahlbar ist.',
        translationUz: 'Biz kundalik hayotda yordami biz uchun bebahol bo‘lgan oqko‘ngil qo‘shnilarimizni qadrlaymiz.',
        phoneticHint: '[Vir shêt-tsen un-ze-re hilfs-be-ray-ten Nah-barn, de-ren Un-ter-shtyut-tsung fyur uns im All-tag un-be-tsahl-bar ist]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-57-q1',
        type: 'fill-blank',
        questionUz: '"dessen" yoki "deren": "Das ist mein Kollege, _____ (der Kollege) Frau als Journalistin arbeitet."',
        blankSentence: 'Das ist mein Kollege, [blank] Frau als Journalistin arbeitet.',
        options: ['dessen', 'deren', 'dem', 'denen'],
        correctAnswer: 'dessen',
        explanationUz: '"der Kollege" erkak jinsi bo‘lgani uchun Genitiv nisbiy olmoshi "dessen" bo‘ladi.',
        mistakeTipUz: '❌ Erkak jinsi uchun: dessen.'
      },
      {
        id: 'prac-57-q2',
        type: 'multiple-choice',
        questionUz: '"Das sind die Freunde, _____ ich vertraue (vertrauen + Dativ Plural)."',
        options: ['denen', 'die', 'deren', 'dessen'],
        correctAnswer: 'denen',
        explanationUz: 'Dativ Plural nisbiy olmoshi "denen" hisoblanadi.',
        mistakeTipUz: '❌ Dativ Plural nisbiy olmosh shakli: denen.'
      },
      {
        id: 'prac-57-q3',
        type: 'word-order',
        questionUz: 'Gapni to‘g‘ri tuzing:',
        scrambledWords: ['Frau,', 'Tochter', 'studiert', 'die', 'Das', 'ist', 'deren'],
        correctAnswer: 'Das ist die Frau, deren Tochter studiert',
        explanationUz: 'Das ist die Frau (1) + deren Tochter (2) + studiert (3).',
        mistakeTipUz: '❌ Das ist die Frau, deren Tochter studiert.'
      }
    ]
  }
];
