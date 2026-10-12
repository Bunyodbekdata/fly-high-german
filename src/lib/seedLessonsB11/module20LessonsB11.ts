import { Lesson } from '../../types/database';

export const MODULE_20_B11_LESSONS: Lesson[] = [
  // ==========================================
  // LEKTION 58: Geld, Banken und Finanzen
  // ==========================================
  {
    id: 'les-58',
    moduleId: 'mod-b1-1-4',
    levelCode: 'b1-1',
    titleDe: 'Geld, Banken und Finanzen',
    titleUz: 'Pul, banklar, investitsiya va orzular',
    descriptionUz: 'Moliyaviy savodxonlik, bank xizmatlari, Konjunktiv II der Gegenwart (hätte, wäre, würde + Infinitiv: xayoliy orzular va shartlar).',
    orderIndex: 58,
    estimatedMinutes: 45,
    isPublished: true,
    objectivesUz: [
      'Bank xizmatlari, jamg‘arma va moliyaviy rejalar haqida so‘zlashish',
      'Konjunktiv II (istak, orzu va noreal shart) shakllarini qo‘llash',
      '"Agar ko‘p pulim bo‘lganida edi..." tipidagi xayoliy gaplarni tuza olish'
    ],
    warmUp: {
      situationUz: 'Katta miqdordagi mablag‘ yutib olganingizni yoki cheksiz imkoniyatingiz borligini tasavvur qilyapsiz. Bu pulni qayerga sarflardingiz?',
      curiosityQuestionUz: '"Agar boy bo‘lganimda edi, dunyo bo‘ylab sayohat qilgan bo‘lardim" jumlasi nemischa qanday aytiladi?',
      miniDialogue: [
        { speaker: 'Fabian', textDe: 'Was würdest du tun, wenn du eine Million Euro gewinnen würdest?', textUz: 'Agar bir million yevro yutib olganingda nima qilgan bo‘larding?' },
        { speaker: 'Laura', textDe: 'Wenn ich so viel Geld hätte, würde ich sofort mein eigenes Unternehmen gründen.', textUz: 'Agar menda shuncha pul bo‘lganida, darhol o‘z korxonamni ochgan bo‘lardim.' }
      ],
      hintUz: 'Real bo‘lmagan xayoliy orzular uchun Konjunktiv II: "wäre" (bo‘lganimda), "hätte" (menda bo‘lganida) va "würde + Infinitiv" qo‘llaniladi.'
    },
    contextDialogue: {
      titleDe: 'Finanzplanung und Zukunftsträume',
      titleUz: 'Moliyaviy rejalashtirish va orzular',
      situationUz: 'Bank maslahatchisi va mijoz investitsiya va jamg‘arma imkoniyatlarini muhokama qilmoqda.',
      lines: [
        { speaker: 'Bankberater', textDe: 'Guten Tag, Herr Alimov. Wie kann ich Ihnen bei Ihren Finanzen behilflich sein?', textUz: 'Xayrli kun, janob Olimov. Moliyangiz bo‘yicha sizga qanday yordam bera olaman?' },
        { speaker: 'Herr Alimov', textDe: 'Ich möchte ein Sparkonto eröffnen. Wenn die Zinsen höher wären, würde ich mein Erspartes langfristig anlegen.', textUz: 'Men jamg‘arma hisob raqami ochmoqchiman. Agar foizlar balandroq bo‘lganida edi, tejab qo‘ygan pulimni uzoq muddatga investitsiya qilgan bo‘lardim.' },
        { speaker: 'Bankberater', textDe: 'Verständlich. Anleger, die bereit sind, ein kleines Risiko einzugehen, könnten auch in nachhaltige Fonds investieren.', textUz: 'Tushunarli. Kichik risk qilishga tayyor bo‘lgan investorlar barqaror fondlarga ham investitsiya qilishlari mumkin edi.' },
        { speaker: 'Herr Alimov', textDe: 'Das klingt interessant! Könnten Sie mir dazu nähere Informationen geben?', textUz: 'Bu qiziq tuyuladi! Bu haqda menga batafsil ma‘lumot bera olarmidingiz?' }
      ],
      usefulPhrases: [
        { german: 'das Girokonto eröffnen', uzbek: 'joriy hisob raqam ochmoq' },
        { german: 'Geld anlegen / investieren', uzbek: 'pulni foydali investitsiya qilmoq' },
        { german: 'die Zinsen', uzbek: 'foizlar (bank depoziti yoki krediti)' },
        { german: 'ein Risiko eingehen', uzbek: 'tavakkal qilmoq, riskka qo‘l urmoq' }
      ],
      culturalNoteUz: 'Germaniyada aholining katta qismi pullarini xavfsiz bank hisoblarida (Sparbuch) saqlashni afzal ko‘radi, aksiyalar va fondlarga investitsiya qilish esa asta-sekin ommalashmoqda.'
    },
    vocabulary: [
      {
        id: 'voc-b1-10-1',
        lessonId: 'les-58',
        levelCode: 'b1-1',
        german: 'das Girokonto',
        article: 'das',
        plural: 'die Girokonten',
        uzbek: 'joriy bank hisobi (maosh va kartalar uchun)',
        exampleDe: 'Mein Gehalt wird monatlich auf mein Girokonto überwiesen.',
        exampleUz: 'Maoshim har oy joriy hisobimga o‘tkazib beriladi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-10-2',
        lessonId: 'les-58',
        levelCode: 'b1-1',
        german: 'die Überweisung',
        article: 'die',
        plural: 'die Überweisungen',
        uzbek: 'pul o‘tkazmasi',
        exampleDe: 'Ich tätige die Überweisung per Online-Banking.',
        exampleUz: 'Men pul o‘tkazmasini onlayn-banking orqali amalga oshiraman.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-10-3',
        lessonId: 'les-58',
        levelCode: 'b1-1',
        german: 'das Ersparte',
        article: 'das',
        uzbek: 'jamg‘arma, tejab qo‘yilgan pul',
        exampleDe: 'Sie hat ihr gesamtes Erspartes in die Ausbildung investiert.',
        exampleUz: 'U barcha jamg‘armasini ta‘limga investitsiya qildi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-10-4',
        lessonId: 'les-58',
        levelCode: 'b1-1',
        german: 'Zinsen',
        article: 'die',
        plural: 'die Zinsen',
        uzbek: 'foiz stavkalari',
        exampleDe: 'Die Zinsen für Baukredite sind wieder gestiegen.',
        exampleUz: 'Ipoteka kreditlari bo‘yicha foizlar yana oshdi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-10-5',
        lessonId: 'les-58',
        levelCode: 'b1-1',
        german: 'sparen',
        article: null,
        plural: null,
        uzbek: 'pul tejamoq, jamg‘armoq',
        exampleDe: 'Er spart jeden Monat einen festen Betrag.',
        exampleUz: 'U har oy belgilangan miqdorda pul tejaydi.',
        wordType: 'verb'
      },
      {
        id: 'voc-b1-10-6',
        lessonId: 'les-58',
        levelCode: 'b1-1',
        german: 'Schulden',
        article: 'die',
        plural: 'die Schulden',
        uzbek: 'qarzlar',
        exampleDe: 'Man sollte vermeiden, hohe Schulden zu machen.',
        exampleUz: 'Katta qarzga botishdan saqlanish kerak.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-10-7',
        lessonId: 'les-58',
        levelCode: 'b1-1',
        german: 'großzügig',
        article: null,
        plural: null,
        uzbek: 'saxiy, qo‘li ochiq',
        exampleDe: 'Sie spendete eine großzügige Summe für Waisenkinder.',
        exampleUz: 'U yetim bolalar uchun saxovatli mablag‘ ehson qildi.',
        wordType: 'adjective'
      },
      {
        id: 'voc-b1-10-8',
        lessonId: 'les-58',
        levelCode: 'b1-1',
        german: 'ausgeben',
        article: null,
        plural: null,
        uzbek: 'sarflamoq, xarjlamoq',
        exampleDe: 'Er gibt zu viel Geld für unnötige Dinge aus.',
        exampleUz: 'U keraksiz narsalarga ko‘p pul sarflaydi.',
        wordType: 'verb'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'Quyidagi noreal shart va orzu gaplarida fe‘llarga e‘tibor bering:',
      discoveryExamples: [
        {
          german: 'Wenn ich mehr Geld hätte, würde ich ein Haus kaufen.',
          highlight: 'hätte / würde ... kaufen',
          uzbek: 'Agar ko‘proq pulim bo‘lganida edi, uy sotib olgan bo‘lardim.'
        },
        {
          german: 'Wenn er gesund wäre, käme er zur Party.',
          highlight: 'wäre / käme',
          uzbek: 'Agar u sog‘lom bo‘lganida edi, bazmga kelgan bo‘lardi.'
        }
      ],
      patternExplanationUz: 'Konjunktiv II hozirgi zamonda real bo‘lmagan shart va istaklarni bildiradi. haben -> hätte, sein -> wäre. Boshqa fe‘llar uchun deyarli har doim "würde + Infinitiv" qo‘llaniladi.',
      ruleFormulaUz: 'Wenn + Ega + ... + hätte/wäre, würde + Ega + ... + Infinitiv'
    },
    grammar: [
      {
        id: 'gra-58',
        lessonId: 'les-58',
        levelCode: 'b1-1',
        titleDe: 'Der Konjunktiv II der Gegenwart (Wünsche & Irreale Bedingungen)',
        titleUz: 'Konjunktiv II (Istak, orzu va noreal shart gaplari)',
        summaryUz: 'Real bo‘lmagan orzular va xayollar: Wenn ich reich wäre, hätte ich ein Schloss va würde reisen.',
        explanationUz: `Konjunktiv II hozirgi zamonda quyidagi asosiy shakllarga ega:

1. **sein fe‘li:**
   - ich **wäre** (men bo‘lganimda edi)
   - du **wärest**
   - er/sie/es **wäre**
   - wir **wären**
   - ihr **wäret**
   - sie/Sie **wären**

2. **haben fe‘li:**
   - ich **hätte** (menda bo‘lganida edi)
   - du **hättest**
   - er/sie/es **hätte**
   - wir **hätten**
   - ihr **hättet**
   - sie/Sie **hätten**

3. **Barcha boshqa fe‘llar uchun umumiy qoida:**
   **würde + Infinitiv** (qilar edim):
   *Ich **würde** mehr Sport treiben.* (Ko‘proq sport bilan shug‘ullangan bo‘lardim.)
   *Wenn ich Zeit hätte, **würde** ich dir **helfen**.* (Vaqtim bo‘lganida, senga yordam bergan bo‘lardim.)`,
        tables: [
          {
            title: 'Konjunktiv II asosiy shakllari',
            headers: ['Asl fe‘l', 'Konjunktiv II (ich/er/sie)', 'Misol'],
            rows: [
              ['sein', 'wäre', 'Wenn ich frei wäre...'],
              ['haben', 'hätte', 'Wenn ich Geld hätte...'],
              ['können', 'könnte', 'Ich könnte helfen...'],
              ['müssen', 'müsste', 'Ich müsste lernen...'],
              ['boshqa fe‘llar', 'würde + Infinitiv', 'Ich würde ein Auto kaufen...']
            ]
          }
        ],
        examples: [
          {
            german: 'Wenn ich Bundeskanzler wäre, würde ich mehr für Bildung investieren.',
            uzbek: 'Agar men kansler bo‘lganimda, ta‘limga ko‘proq investitsiya kiritgan bo‘lardim.',
            highlight: 'wäre / würde investieren'
          },
          {
            german: 'An deiner Stelle würde ich das Geld nicht ausgeben.',
            uzbek: 'Sening o‘rningda bo‘lganimda, bu pulni sarflamagan bo‘lardim.',
            highlight: 'würde ... ausgeben'
          }
        ],
        commonMistakes: [
          {
            incorrect: 'Wenn ich habe Geld, ich würde kaufen ein Auto.',
            correct: 'Wenn ich Geld hätte, würde ich ein Auto kaufen.',
            explanationUz: 'Shart gapda "habe" emas "hätte", va asosiy gap fe‘l bilan boshlanadi: "würde ich... kaufen".'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Was würden Sie mit einer Million tun?',
      titleUz: 'Bir million yevro bilan nima qilgan bo‘lardingiz?',
      situationUz: 'Ko‘cha so‘rovnomasida o‘tkinchilardan kutilmagan boylik haqida fikrlari so‘ralmoqda.',
      audioTranscriptDe: 'Reporter: Entschuldigung! Eine kurze Frage für unser Straßenmagazin: Was würden Sie tun, wenn Sie morgen eine Million Euro auf Ihrem Konto hätten?\nPassantin: Oh, das wäre fantastisch! Wenn ich so viel Geld hätte, würde ich zuerst die Schulden meiner Eltern abbezahlen. Dann würde ich meinen Job kündigen und eine Weltreise machen. Einen Teil des Geldes würde ich für soziale Projekte spenden. Geld allein macht nicht glücklich, aber es würde mir absolute Freiheit schenken.',
      translationUz: 'Muxbir: Kechirasiz! Jurnalimiz uchun qisqa savol: Agar ertaga hisobingizda bir million yevro bo‘lib qolganida, nima qilgan bo‘lardingiz?\nO‘tkinchi ayol: O, bu ajoyib bo‘lardi! Agar menda shuncha pul bo‘lganida, avvalo ota-onamning qarzlarini to‘lagan bo‘lardim. So‘ngra ishimdan bo‘shab, dunyo bo‘ylab sayohatga chiqardim. Mablag‘ning bir qismini esa ijtimoiy loyihalarga ehson qilgan bo‘lardim. Pulning o‘zi baxt keltirmaydi, ammo u menga to‘laqonli erkinlik ato etgan bo‘lardi.',
      stage1Global: {
        instructionUz: '1-Bosqich: O‘tkinchi ayol pulni birinchi bo‘lib nimaga sarflardi?',
        questionUz: 'U birinchi bo‘lib nima qilishini aytdi?',
        options: ['Qimmatbaho mashina sotib olardi', 'Ota-onasining qarzlarini to‘lardi', 'Bankka qo‘yardi'],
        correctIndex: 1,
        explanationUz: '"...würde ich zuerst die Schulden meiner Eltern abbezahlen".'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Tafsilotlarni aniqlang.',
        questions: [
          {
            id: 'l58-q1',
            questionUz: 'Ayolning fikricha bu pul unga nima taqdim etardi?',
            options: ['Mashhurlik', 'Mutlaq erkinlik', 'Yangi do‘stlar'],
            correctIndex: 1,
            explanationUz: '"...aber es würde mir absolute Freiheit schenken".'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Passantin', textDe: 'Wenn ich so viel Geld hätte, würde ich reisen.', textUz: 'Agar shuncha pulim bo‘lganida, sayohat qilgan bo‘lardim.' },
          { speaker: 'Reporter', textDe: 'Das ist ein schöner Traum!', textUz: 'Bu go‘zal bir orzu!' }
        ],
        keyVocabulary: [
          { german: 'abbezahlen (Schulden)', uzbek: 'qarzni uzmoq / to‘lamoq' },
          { german: 'die absolute Freiheit', uzbek: 'mutlaq erkinlik' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-58',
        lessonId: 'les-58',
        levelCode: 'b1-1',
        titleDe: 'Macht Geld wirklich glücklich?',
        titleUz: 'Pul chindan ham baxt keltiradimi?',
        textDe: 'Wirtschaftswissenschaftler untersuchen seit Jahrzehnten die Verbindung zwischen Wohlstand und Lebenszufriedenheit. Das berühmte "Easterlin-Paradox" besagt: Mehr Geld macht Menschen nur bis zu einem bestimmten Einkommen glücklicher. Wenn grundlegende Bedürfnisse wie Wohnen, Essen und Gesundheit gesichert sind, steigt das Glücksniveau kaum noch an. Viel wichtiger für das seelische Wohlbefinden sind stabile Beziehungen, Gesundheit und eine sinnvolle Tätigkeit.',
        translationUz: 'Iqtisodchi olimlar o‘nlab yillardan beri farovonlik va hayotdan mamnunlik o‘rtasidagi bog‘liqlikni tadqiq qilmoqdalar. Mashhur "Isterlin paradoksi" shuni ta‘kidlaydiki: ko‘proq pul insonlarni faqat ma‘lum bir daromad darajasigacha baxtliroq qiladi. Uy-joy, oziq-ovqat va salomatlik kabi bazaviy ehtiyojlar ta‘minlangach, baxt darajasi deyarli ko‘tarilmaydi. Ruhiy xotirjamlik uchun barqaror munosabatlar, sog‘liq va mazmunli faoliyat ancha muhimroqdir.',
        vocabularyHints: [
          { german: 'der Wohlstand', uzbek: 'farovonlik, boylik' },
          { german: 'das Wohlbefinden', uzbek: 'ruhiy-jismoniy qoniqish, xotirjamlik' }
        ],
        questions: [
          {
            id: 'q-rea-58-1',
            questionUz: 'Isterlin paradoksiga ko‘ra qo‘shimcha pul qachondan boshlab baxtni oshirmaydi?',
            options: ['Boshlang‘ich bazaviy ehtiyojlar qondirilgach', 'Bir million yevrodan so‘ng', 'Hech qachon oshirmaydi'],
            correctIndex: 0,
            explanationUz: 'Matnda "Wenn grundlegende Bedürfnisse... gesichert sind, steigt das Glücksniveau kaum noch an" deb ko‘rsatilgan.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-58',
      lessonId: 'les-58',
      levelCode: 'b1-1',
      taskDe: 'Was würden Sie tun, wenn Sie unbegrenzt Zeit und Geld hätten? Schreiben Sie mit Konjunktiv II.',
      taskUz: 'Agar cheksiz vaqtingiz va pulingiz bo‘lganida edi, nima qilardingiz? Konjunktiv II (wäre, hätte, würde) yordamida yozing.',
      instructionUz: 'Qayerga borgan bo‘lardingiz va kimga yordam bergan bo‘lardingiz?',
      hints: ['Wenn ich reich wäre, würde ich...', 'Wenn ich viel Zeit hätte...'],
      sampleSolutionDe: 'Wenn ich unbegrenzt viel Zeit und Geld hätte, würde ich zuerst eine moderne Schule für Kinder in meinem Dorf bauen. Dann würde ich mit meiner Familie um die ganze Welt reisen. Ich würde jeden Tag neue Sprachen lernen und hilfsbedürftige Menschen unterstützen.',
      scaffold: {
        openingDe: 'Meine Wünsche und Träume:',
        closingDe: 'Träume motivieren uns jeden Tag.',
        usefulPhrasesDe: ['Wenn ich ... hätte, würde ich...', 'Wenn ich ... wäre, ...', 'Ich könnte...']
      }
    },
    shadowing: [
      {
        id: 'sha-58',
        lessonId: 'les-58',
        levelCode: 'b1-1',
        sentenceDe: 'Wenn ich mehr finanzielle Mittel hätte, würde ich sofort mein eigenes innovatives Projekt starten.',
        translationUz: 'Agar menda ko‘proq moliyaviy imkoniyat bo‘lganida, darhol o‘z innovatsion loyihamni boshlagan bo‘lardim.',
        phoneticHint: '[Venn ih mehr fi-nan-tsyel-le Mit-tel hêt-te, vyr-de ih zo-fort mayn ay-ge-nes in-no-va-ti-fe Pro-yekt shtahr-ten]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-58-q1',
        type: 'fill-blank',
        questionUz: '"haben" fe‘lining Konjunktiv II shaklini qo‘ying: "Wenn ich mehr Zeit _____, würde ich mehr lesen."',
        blankSentence: 'Wenn ich mehr Zeit [blank], würde ich mehr lesen.',
        options: ['hätte', 'habe', 'hatte', 'hätten'],
        correctAnswer: 'hätte',
        explanationUz: '"ich" uchun "haben" Konjunktiv II da "hätte" bo‘ladi.',
        mistakeTipUz: '❌ Orzu/shart uchun: Wenn ich Zeit hätte.'
      },
      {
        id: 'prac-58-q2',
        type: 'multiple-choice',
        questionUz: '"An deiner Stelle _____ ich den Vertrag nicht unterschreiben."',
        options: ['würde', 'werde', 'wurde', 'wäre'],
        correctAnswer: 'würde',
        explanationUz: '"An deiner Stelle würde ich..." (Sening o‘rningda bo‘lganimda... qilardim).',
        mistakeTipUz: '❌ Maslahat uchun: An deiner Stelle würde ich...'
      },
      {
        id: 'prac-58-q3',
        type: 'word-order',
        questionUz: 'Gapni to‘g‘ri tuzing:',
        scrambledWords: ['ich', 'reich', 'reisen', 'Wenn', 'wäre,', 'würde', 'ich'],
        correctAnswer: 'Wenn ich reich wäre, würde ich reisen',
        explanationUz: 'Wenn ich reich wäre (1) + würde ich (2) + reisen (3).',
        mistakeTipUz: '❌ Wenn ich reich wäre, würde ich reisen.'
      }
    ]
  },

  // ==========================================
  // LEKTION 59: Konsumverhalten & Online-Shopping
  // ==========================================
  {
    id: 'les-59',
    moduleId: 'mod-b1-1-4',
    levelCode: 'b1-1',
    titleDe: 'Konsumverhalten & Online-Shopping',
    titleUz: 'Xarid odatlari, onlayn-shoping va tanlov',
    descriptionUz: 'Iste‘mol madaniyati, internet orqali xarid qilish, Zweiteilige Konnektoren (juft bog‘lovchilar: zwar ... aber, entweder ... oder).',
    orderIndex: 59,
    estimatedMinutes: 45,
    isPublished: true,
    objectivesUz: [
      'Onlayn xaridlar, qaytarishlar va narx-sifat mutanosibligini muhokama qilish',
      'Juft bog‘lovchilar: "zwar ... aber" (to‘g‘ri-yu, lekin) va "entweder ... oder" (yo ... yoki) ni o‘rganish',
      'Ijobiy va salbiy tomonlarni solishtirib xulosa chiqarish'
    ],
    warmUp: {
      situationUz: 'Internet do‘konda yangi noutbuk tanlayapsiz. Narxi arzon bo‘lgani bilan, yetkazib berish muddati juda uzoq ekanini ko‘rdingiz.',
      curiosityQuestionUz: '"Bu kiyim chiroyli-yu, lekin qimmat" yoki "Biz yo bugun sotib olamiz, yoki kutamiz" jumlalari qanday juft bog‘lovchilar bilan aytiladi?',
      miniDialogue: [
        { speaker: 'Tim', textDe: 'Hast du die Jacke online bestellt?', textUz: 'Kurtkani onlayn buyurtma qildingmi?' },
        { speaker: 'Nina', textDe: 'Ja, sie ist zwar sehr modisch, aber der Stoff gefällt mir nicht besonders.', textUz: 'Ha, u zamonaviy-yu, lekin matosi menga unchalik yoqmadi.' }
      ],
      hintUz: '"zwar ... aber" to‘g‘ri ekanini tan olib, keyin zidlikni bildiradi; "entweder ... oder" esa muqobil tanlovni ko‘rsatadi.'
    },
    contextDialogue: {
      titleDe: 'Kaufentscheidungen im Netz',
      titleUz: 'Tarmoqda xarid qarorlari',
      situationUz: 'Ikki xaridor internet orqali buyurtma berishning qulayliklari va kamchiliklarini muhokama qilmoqda.',
      lines: [
        { speaker: 'Tim', textDe: 'Nina, bestellst du deine Kleidung eigentlich nur noch im Internet?', textUz: 'Nina, kiyimlaringni faqat internetdan buyurtma qilyapsanmi?' },
        { speaker: 'Nina', textDe: 'Nicht immer. Online-Shopping ist zwar bequem, aber man kann die Sachen vorher nicht anprobieren.', textUz: 'Doim emas. Onlayn xarid qulay-yu, ammo buyumlarni oldindan kiyib ko‘rib bo‘lmaydi.' },
        { speaker: 'Tim', textDe: 'Stimmt. Und die vielen Rücksendungen belasten die Umwelt enorm.', textUz: 'To‘g‘ri. Ko‘plab qaytarishlar esa atrof-muhitga katta yuk bo‘ladi.' },
        { speaker: 'Nina', textDe: 'Deshalb mache ich es so: Entweder kaufe ich gezielt im Fachgeschäft oder ich bestelle nur Dinge, die ich wirklich brauche.', textUz: 'Shuning uchun men shunday qilaman: Yo ixtisoslashgan do‘kondan maqsadli sotib olaman, yoki faqat chindan kerak bo‘lgan narsalarni buyurtma qilaman.' }
      ],
      usefulPhrases: [
        { german: 'zwar ... aber', uzbek: 'to‘g‘ri-yu ..., lekin ...' },
        { german: 'entweder ... oder', uzbek: 'yo ... yoki ...' },
        { german: 'die Rücksendung', uzbek: 'tovarni qaytarib yuborish' },
        { german: 'anprobieren', uzbek: 'kiyib ko‘rmoq (do‘konda)' }
      ],
      culturalNoteUz: 'Germaniyada onlayn xaridlarni 14 kun ichida bepul qaytarish (Widerrufsrecht) qonuniy kafolatlangan, shu bois qaytarishlar soni juda yuqori.'
    },
    vocabulary: [
      {
        id: 'voc-b1-11-1',
        lessonId: 'les-59',
        levelCode: 'b1-1',
        german: 'die Rücksendung',
        article: 'die',
        plural: 'die Rücksendungen',
        uzbek: 'tovarni qaytarish (retur)',
        exampleDe: 'Die Rücksendung war innerhalb von 14 Tagen kostenlos.',
        exampleUz: 'Tovarni qaytarish 14 kun ichida bepul edi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-11-2',
        lessonId: 'les-59',
        levelCode: 'b1-1',
        german: 'das Schnäppchen',
        article: 'das',
        plural: 'die Schnäppchen',
        uzbek: 'juda arzon, omadli xarid',
        exampleDe: 'Ich habe im Winterschlussverkauf ein echtes Schnäppchen gemacht.',
        exampleUz: 'Qishki chegirmada juda arzon, ajoyib narsa sotib oldim.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-11-3',
        lessonId: 'les-59',
        levelCode: 'b1-1',
        german: 'die Bewertung',
        article: 'die',
        plural: 'die Bewertungen',
        uzbek: 'mijozlar sharhi / bahosi',
        exampleDe: 'Vor dem Kauf lese ich immer die Bewertungen anderer Kunden.',
        exampleUz: 'Xariddan oldin boshqa xaridorlarning sharhlarini doim o‘qiyman.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-11-4',
        lessonId: 'les-59',
        levelCode: 'b1-1',
        german: 'der Lieferdienst',
        article: 'der',
        plural: 'die Lieferdienste',
        uzbek: 'yetkazib berish xizmati',
        exampleDe: 'Der Lieferdienst brachte das Paket pünktlich an.',
        exampleUz: 'Yetkazib berish xizmati posilkani o‘z vaqtida yetkazdi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-11-5',
        lessonId: 'les-59',
        levelCode: 'b1-1',
        german: 'widerrufen',
        article: null,
        plural: null,
        uzbek: 'bekor qilmoq (shartnoma yoki buyurtmani)',
        exampleDe: 'Sie können den Kaufvertrag schriftlich widerrufen.',
        exampleUz: 'Siz oldi-sotdi shartnomasini yozma ravishda bekor qila olasiz.',
        wordType: 'verb'
      },
      {
        id: 'voc-b1-11-6',
        lessonId: 'les-59',
        levelCode: 'b1-1',
        german: 'umtauschen',
        article: null,
        plural: null,
        uzbek: 'almashtirmoq (boshqa o‘lchamga)',
        exampleDe: 'Kann ich das T-Shirt in eine andere Größe umtauschen?',
        exampleUz: 'Futbolkani boshqa o‘lchamga almashtira olamanmi?',
        wordType: 'verb'
      },
      {
        id: 'voc-b1-11-7',
        lessonId: 'les-59',
        levelCode: 'b1-1',
        german: 'hochwertig',
        article: null,
        plural: null,
        uzbek: 'yuqori sifatli',
        exampleDe: 'Hochwertige Kleidung hält viele Jahre.',
        exampleUz: 'Sifatli kiyim ko‘p yillar xizmat qiladi.',
        wordType: 'adjective'
      },
      {
        id: 'voc-b1-11-8',
        lessonId: 'les-59',
        levelCode: 'b1-1',
        german: 'nachhaltig',
        article: null,
        plural: null,
        uzbek: 'barqaror, ekologik sof',
        exampleDe: 'Immer mehr Verbraucher achten auf nachhaltigen Konsum.',
        exampleUz: 'Borgan sari ko‘proq iste‘molchilar ekologik xaridga e‘tibor qaratmoqdalar.',
        wordType: 'adjective'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'Quyidagi gaplardagi bog‘lovchilar juftligiga qarang. Ular qanday ma‘no bermoqda?',
      discoveryExamples: [
        {
          german: 'Das Produkt ist zwar teuer, aber die Qualität ist hervorragend.',
          highlight: 'zwar ... aber',
          uzbek: 'Mahsulot qimmat-ku (to‘g‘ri), lekin sifati a‘lo darajada.'
        },
        {
          german: 'Wir können entweder bar zahlen oder mit Karte.',
          highlight: 'entweder ... oder',
          uzbek: 'Biz yo naqd pulda to‘lay olamiz, yoki karta bilan.'
        }
      ],
      patternExplanationUz: '"zwar ... aber" (qarama-qarshilik): birinchi qism faktni tasdiqlaydi, "aber" esa cheklov qo‘yadi. "entweder ... oder" (tanlov): ikki imkoniyatdan birini tanlash kerakligini bildiradi.',
      ruleFormulaUz: 'zwar [holat], aber [qarama-qarshilik] || entweder [A] oder [B]'
    },
    grammar: [
      {
        id: 'gra-59',
        lessonId: 'les-59',
        levelCode: 'b1-1',
        titleDe: 'Zweiteilige Konnektoren: "zwar ... aber" und "entweder ... oder"',
        titleUz: 'Juft bog‘lovchilar: "zwar ... aber" va "entweder ... oder"',
        summaryUz: '"zwar ... aber" (rost-u, lekin), "entweder ... oder" (yo ... yoki muqobil tanlov).',
        explanationUz: `Juft bog‘lovchilar B1 darajasida nutqni ancha boy va professional ko‘rsatadi:

1. **zwar ... aber (cheklash / qisman rozilik):**
   - *Das Smartphone ist **zwar** modern, **aber** der Akku hält nicht lange.* (Smartfon zamonaviy-ku, lekin quvvati uzoqqa yetmaydi.)
   - Gap tartibi: "aber" dan keyin odatiy darak gap tartibi (V2) saqlanadi.

2. **entweder ... oder (muqobil tanlov):**
   - *Wir fahren **entweder** mit dem Zug **oder** wir nehmen das Auto.* (Biz yo poyezdda boramiz, yoki mashinada.)
   - *Entweder du kommst pünktlich, oder wir fangen ohne dich an.*`,
        tables: [
          {
            title: 'Juft bog‘lovchilar vazifalari',
            headers: ['Bog‘lovchi', 'Mantiqiy vazifasi', 'Misol'],
            rows: [
              ['zwar ... aber', 'Faktni tan olish + Zidlik', 'Er lernt zwar viel, aber er besteht nicht.'],
              ['entweder ... oder', 'Ikkidan birini tanlash', 'Entweder heute oder morgen.']
            ]
          }
        ],
        examples: [
          {
            german: 'Online-Shopping spart zwar Zeit, aber es schadet oft lokalen Geschäften.',
            uzbek: 'Onlayn xarid vaqtni tejaydi-yu, biroq mahalliy do‘konlarga zarar keltiradi.',
            highlight: 'zwar ... aber'
          },
          {
            german: 'Du musst dich entscheiden: Entweder du sparst das Geld oder du kaufst das Fahrrad.',
            uzbek: 'Sen bir qarorga kelishing kerak: Yo pulni tejaysan, yoki velosipedni sotib olasan.',
            highlight: 'Entweder ... oder'
          }
        ],
        commonMistakes: [
          {
            incorrect: 'Entweder ich gehe ins Kino oder ich gehe nicht.',
            correct: 'Entweder gehe ich ins Kino oder ich bleibe zu Hause.',
            explanationUz: '"Entweder" gap boshida kelsa, fe‘l inversiya bilan kelishi mumkin: Entweder gehe ich...'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Das Phänomen der Retouren',
      titleUz: 'Tovarlarni qaytarish fenomeni',
      situationUz: 'Logistika mutaxassisi internet xaridlarida qaytarishlar ortib borayotgani haqida tushuntirmoqda.',
      audioTranscriptDe: 'Experte: Deutschland ist Europameister bei den Retouren. Fast jedes vierte online bestellte Paket wird zurückgeschickt. Das liegt daran, dass der Rückversand für Kunden zwar extrem bequem und oft kostenlos ist, aber für Händler und Umwelt hohe Kosten verursacht. Kleidung wird oft in mehreren Größen bestellt. Entweder die Unternehmen führen Gebühren für Rücksendungen ein, oder die Kunden müssen bewusster einkaufen. Ein "Weiter so" ist ökologisch nicht tragbar.',
      translationUz: 'Ekspert: Germaniya tovarlarni qaytarish bo‘yicha Yevropa chempioni. Internetda buyurtma qilingan har to‘rtinchi posilka qaytarib yuboriladi. Bunga sabab — tovar qaytarish xaridorlar uchun juda qulay va ko‘pincha bepul-u, ammo sotuvchilar va atrof-muhit uchun katta xarajat keltiradi. Kiyimlar ko‘pincha bir nechta o‘lchamda buyurtma qilinadi. Yo kompaniyalar qaytarish uchun to‘lov joriy qilishi kerak, yoki xaridorlar ongliroq xarid qilishlari lozim. Bunday davom etishi ekologik jihatdan chidab bo‘lmas holatdir.',
      stage1Global: {
        instructionUz: '1-Bosqich: Germaniyada onlayn buyurtmalarning qanchasi qaytariladi?',
        questionUz: 'Har nechta posilkadan biri qaytarilmoqda?',
        options: ['Har ikkinchisi', 'Deyarli har to‘rttadan biri', 'Faqat har o‘ntadan biri'],
        correctIndex: 1,
        explanationUz: '"Fast jedes vierte online bestellte Paket wird zurückgeschickt".'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Ekspert qanday ikkita muqobil yechim ko‘rsatdi?',
        questions: [
          {
            id: 'l59-q1',
            questionUz: 'Ekspertning fikricha nima qilinishi kerak?',
            options: ['Internet butunlay yopilishi kerak', 'Yo to‘lov joriy qilinishi, yoki xaridorlar ongli xarid qilishi lozim', 'Hamma kiyimlarni do‘kondan olishi shart'],
            correctIndex: 1,
            explanationUz: '"Entweder die Unternehmen führen Gebühren ein, oder die Kunden müssen bewusster einkaufen".'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Experte', textDe: 'Retouren sind zwar bequem, aber sie schaden der Umwelt.', textUz: 'Qaytarishlar qulay-ku, lekin ular atrof-muhitga zarar beradi.' },
          { speaker: 'Experte', textDe: 'Entweder wir ändern uns, oder es gibt Gebühren.', textUz: 'Yo biz o‘zgaramiz, yoki to‘lovlar bo‘ladi.' }
        ],
        keyVocabulary: [
          { german: 'die Retoure', uzbek: 'qaytarilgan tovar' },
          { german: 'ökologisch nicht tragbar', uzbek: 'ekologik jihatdan qabul qilib bo‘lmas' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-59',
        lessonId: 'les-59',
        levelCode: 'b1-1',
        titleDe: 'Slow Fashion: Die Gegenbewegung zum Massenkonsum',
        titleUz: 'Sekin moda: Ommaviy xaridorlikka qarshi harakat',
        textDe: 'Jedes Jahr werden weltweit Milliarden Kleidungsstücke produziert, die oft nur wenige Male getragen werden. "Fast Fashion" ist zwar billig, aber die Arbeitsbedingungen in den Fabriken sind oft katastrophal. Immer mehr junge Menschen schließen sich deshalb der "Slow Fashion"-Bewegung an. Sie kaufen entweder Secondhand-Kleidung oder investieren in hochwertige, langlebige Stücke. Das schont nicht nur den Geldbeutel, sondern setzt auch ein klares Zeichen für den Klimaschutz.',
        translationUz: 'Har yili dunyo bo‘ylab milliardlab kiyim-kechak ishlab chiqariladi va ular ko‘pincha bir necha martagina kiyiladi. "Tezkor moda" arzon-u, ammo fabrikalardagi ish sharoitlari ko‘pincha ayanchli. Shu sababli tobora ko‘proq yoshlar "Sekin moda" harakatiga qo‘shilmoqdalar. Ular yo ikkilamchi kiyimlarni sotib olishadi, yoki yuqori sifatli va uzoqqa chidaydigan kiyimlarga sarmoya kiritishadi. Bu nafaqat hamyonni tejaydi, balki iqlim muhofazasi uchun aniq qadam bo‘ladi.',
        vocabularyHints: [
          { german: 'langlebig', uzbek: 'uzoq muddat chidaydigan' },
          { german: 'schonen (Geldbeutel)', uzbek: 'tejamoq, asramoq' }
        ],
        questions: [
          {
            id: 'q-rea-59-1',
            questionUz: 'Sekin moda tarafdorlari qanday kiyimlarni tanlashadi?',
            options: ['Eng arzon kiyimlarni', 'Yo second-hand, yoki yuqori sifatli uzoq chidaydigan kiyimlarni', 'Har hafta yangi kiyimlarni'],
            correctIndex: 1,
            explanationUz: 'Matnda "Sie kaufen entweder Secondhand-Kleidung oder investieren in hochwertige, langlebige Stücke" deyilgan.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-59',
      lessonId: 'les-59',
      levelCode: 'b1-1',
      taskDe: 'Vergleichen Sie Online-Shopping und Einkaufen im Geschäft mit "zwar ... aber" und "entweder ... oder".',
      taskUz: 'Onlayn va an‘anaviy xaridni "zwar ... aber" va "entweder ... oder" juft bog‘lovchilari yordamida qiyoslang.',
      instructionUz: 'Qaysi biri sizga ko‘proq yoqishini va nima uchunligini tushuntiring.',
      hints: ['Online-Shopping ist zwar..., aber...', 'Ich kaufe entweder... oder...'],
      sampleSolutionDe: 'Online-Shopping ist zwar sehr zeitsparend, aber man kann die Qualität nicht sofort fühlen. Beim Einkaufen im Geschäft wird man zwar persönlich beraten, aber die Auswahl ist oft kleiner. Ich mache es so: Entweder kaufe ich Elektronik online oder ich gehe für Kleidung direkt in die Stadt.',
      scaffold: {
        openingDe: 'Mein Einkaufsverhalten:',
        closingDe: 'Beide Optionen haben Vor- und Nachteile.',
        usefulPhrasesDe: ['...ist zwar ..., aber...', 'Entweder ... oder ...', 'Man spart zwar...']
      }
    },
    shadowing: [
      {
        id: 'sha-59',
        lessonId: 'les-59',
        levelCode: 'b1-1',
        sentenceDe: 'Online-Shopping ist zwar bequem, aber wir sollten entweder bewusster einkaufen oder lokale Geschäfte unterstützen.',
        translationUz: 'Onlayn xarid qulay-ku, lekin biz yo ongliroq xarid qilishimiz, yoki mahalliy do‘konlarni qo‘llab-quvvatlashimiz kerak.',
        phoneticHint: '[On-layn Shop-ping ist tsvar be-kvem, a-ber vir zoll-ten ent-ve-der be-vusster ayn-kau-fen o-der lo-ka-le Ge-shêf-te un-ter-shtyt-tsen]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-59-q1',
        type: 'fill-blank',
        questionUz: 'Juft bog‘lovchining ikkinchi qismini qo‘ying: "Das Hotel war zwar günstig, _____ der Service war schrecklich."',
        blankSentence: 'Das Hotel war zwar günstig, [blank] der Service war schrecklich.',
        options: ['aber', 'oder', 'und', 'denn'],
        correctAnswer: 'aber',
        explanationUz: '"zwar" ning jufti doimo "aber" bo‘ladi (zwar ... aber).',
        mistakeTipUz: '❌ "zwar" ga "aber" mos keladi.'
      },
      {
        id: 'prac-59-q2',
        type: 'multiple-choice',
        questionUz: '"Entweder wir nehmen den Zug um 8 Uhr, _____ wir kommen zu spät."',
        options: ['oder', 'aber', 'sondern', 'und'],
        correctAnswer: 'oder',
        explanationUz: '"entweder" ga juft qilib "oder" ishlatiladi (entweder ... oder).',
        mistakeTipUz: '❌ "entweder" ning jufti "oder".'
      },
      {
        id: 'prac-59-q3',
        type: 'word-order',
        questionUz: 'Gapni to‘g‘ri tuzing:',
        scrambledWords: ['zwar', 'Das', 'neu,', 'ist', 'Auto', 'aber', 'teuer'],
        correctAnswer: 'Das Auto ist zwar neu, aber teuer',
        explanationUz: 'Das Auto (1) + ist (2) + zwar neu (3) + aber teuer (4).',
        mistakeTipUz: '❌ Das Auto ist zwar neu, aber teuer.'
      }
    ]
  },

  // ==========================================
  // LEKTION 60: Kultur, Theater und Musik
  // ==========================================
  {
    id: 'les-60',
    moduleId: 'mod-b1-1-4',
    levelCode: 'b1-1',
    titleDe: 'Kultur, Theater und Musik',
    titleUz: 'Madaniyat, teatr, musiqa va san‘at',
    descriptionUz: 'Madaniy tadbirlar, spektakllar, Partizip I als Adjektiv (sifat vazifasidagi Partizip I: der lachende Junge, das schlafende Kind).',
    orderIndex: 60,
    estimatedMinutes: 45,
    isPublished: true,
    objectivesUz: [
      'Madaniy tadbirlar, spektakl va konsertlar haqida taassurot almashish',
      'Partizip I (Infinitiv + d) ni sifat sifatida turlashni o‘rganish',
      'Jonli ijro va san‘at asarlariga nisbatan professional taqriz berish'
    ],
    warmUp: {
      situationUz: 'Kechqurun mashhur teatrda premyeraga tushdingiz. Zalda tomoshabinlarning hayajonli qarsaklari yangramoqda.',
      curiosityQuestionUz: '"Kulayotgan bola" yoki "Uxlayotgan bola" kabi davom etayotgan harakatni sifatga aylantirish nemis tilida qanday amalga oshiriladi?',
      miniDialogue: [
        { speaker: 'Simon', textDe: 'Wie fandest du das Theaterstück gestern Abend?', textUz: 'Kecha oqshomdagi spektakl senga qanday tuyuldi?' },
        { speaker: 'Paula', textDe: 'Großartig! Das applaudierende Publikum wollte die Schauspieler gar nicht von der Bühne lassen.', textUz: 'Ajoyib! Qarsak chalayotgan tomoshabinlar aktyorlarni sahnadan qo‘yib yuborishni xohlamasdi.' }
      ],
      hintUz: 'Infinitiv fe‘lga "d" harfi va sifat qo‘shimchasi qo‘shilsa, Partizip I yasaladi: applaudieren + d -> applaudierende.'
    },
    contextDialogue: {
      titleDe: 'Ein Abend in der Oper',
      titleUz: 'Operadagi unutilmas oqshom',
      situationUz: 'Ikki san‘at muxlisi yangi opera spektakli haqida taassurotlari bilan bo‘lishmoqda.',
      lines: [
        { speaker: 'Simon', textDe: 'Paula, die gestrige Aufführung von Mozarts "Zauberflöte" war wirklich magisch.', textUz: 'Paula, kechagi Motsartning "Sehrli nay" spektakli haqiqatan ham sehrli bo‘ldi.' },
        { speaker: 'Paula', textDe: 'Absolut! Besonders die singende Hauptdarstellerin hat mich tief berührt.', textUz: 'Mutlaqo! Ayniqsa qo‘shiq kuylayotgan bosh qahramon qalbimga chuqur yetib bordi.' },
        { speaker: 'Simon', textDe: 'Und das faszinierende Bühnenbild! Die leuchtenden Farben haben eine unglaubliche Atmosphäre geschaffen.', textUz: 'Va maftunkor sahna bezaklari-chi! Yarqirab turgan ranglar aqlbovar qilmas muhit yaratdi.' },
        { speaker: 'Paula', textDe: 'Kultur bereichert das Leben einfach enorm. Wir sollten öfter ins Theater gehen!', textUz: 'Madaniyat hayotni nihoyatda boyitadi. Biz teatrga tez-tez borishimiz kerak!' }
      ],
      usefulPhrases: [
        { german: 'die Aufführung', uzbek: 'spektakl, sahna asari' },
        { german: 'tief berühren', uzbek: 'qalbni chuqur larzaga solmoq' },
        { german: 'das Bühnenbild', uzbek: 'sahna dekoratsiyasi va bezaklari' },
        { german: 'bereichern', uzbek: 'boyitmoq (ma‘naviy jihatdan)' }
      ],
      culturalNoteUz: 'Germaniyada 140 dan ortiq davlat teatri va 130 ga yaqin professional orkestr mavjud bo‘lib, bu dunyodagi eng zich madaniy infratuzilmalardan biridir.'
    },
    vocabulary: [
      {
        id: 'voc-b1-12-1',
        lessonId: 'les-60',
        levelCode: 'b1-1',
        german: 'die Aufführung',
        article: 'die',
        plural: 'die Aufführungen',
        uzbek: 'spektakl, ijro',
        exampleDe: 'Die gestrige Aufführung war restlos ausverkauft.',
        exampleUz: 'Kechagi spektaklga barcha chiptalar to‘liq sotilib ketgandi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-12-2',
        lessonId: 'les-60',
        levelCode: 'b1-1',
        german: 'das Kunstwerk',
        article: 'das',
        plural: 'die Kunstwerke',
        uzbek: 'san‘at asari',
        exampleDe: 'Das Museum stellt Kunstwerke moderner Maler aus.',
        exampleUz: 'Muzey zamonaviy rassomlarning san‘at asarlarini namoyish etmoqda.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-12-3',
        lessonId: 'les-60',
        levelCode: 'b1-1',
        german: 'begeistern',
        article: null,
        plural: null,
        uzbek: 'lol qoldirmoq, ilhomlantirmoq',
        exampleDe: 'Die Musik konnte das gesamte Publikum begeistern.',
        exampleUz: 'Musiqa butun tomoshabinlarni lol qoldira oldi.',
        wordType: 'verb'
      },
      {
        id: 'voc-b1-12-4',
        lessonId: 'les-60',
        levelCode: 'b1-1',
        german: 'die Bühne',
        article: 'die',
        plural: 'die Bühnen',
        uzbek: 'sahna',
        exampleDe: 'Die Schauspieler betraten unter Applaus die Bühne.',
        exampleUz: 'Aktyorlar qarsaklar ostida sahnaga chiqishdi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-12-5',
        lessonId: 'les-60',
        levelCode: 'b1-1',
        german: 'stattfinden',
        article: null,
        plural: null,
        uzbek: 'bo‘lib o‘tmoq',
        exampleDe: 'Das Konzert findet im großen Saal statt.',
        exampleUz: 'Konsert katta zalda bo‘lib o‘tadi.',
        wordType: 'verb'
      },
      {
        id: 'voc-b1-12-6',
        lessonId: 'les-60',
        levelCode: 'b1-1',
        german: 'der Darsteller',
        article: 'der',
        plural: 'die Darsteller',
        uzbek: 'aktyor, ijrochi',
        exampleDe: 'Der Hauptdarsteller überzeugte mit starker Stimme.',
        exampleUz: 'Bosh qahramon ijrochisi kuchli ovozi bilan lol qoldirdi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-12-7',
        lessonId: 'les-60',
        levelCode: 'b1-1',
        german: 'faszinierend',
        article: null,
        plural: null,
        uzbek: 'maftunkor, sehrli',
        exampleDe: 'Es war eine faszinierende Vorstellung.',
        exampleUz: 'Bu maftunkor tomosha bo‘ldi.',
        wordType: 'adjective'
      },
      {
        id: 'voc-b1-12-8',
        lessonId: 'les-60',
        levelCode: 'b1-1',
        german: 'das Lampenfieber',
        article: 'das',
        uzbek: 'sahna hayajoni',
        exampleDe: 'Vor dem Auftritt hatte er starkes Lampenfieber.',
        exampleUz: 'Chiqish oldidan unda kuchli sahna hayajoni bor edi.',
        wordType: 'noun'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'Quyidagi sifatlarga e‘tibor bering. Ular qaysi fe‘llardan yasalgan va qanday ma‘no bildiryapti?',
      discoveryExamples: [
        {
          german: 'Das weinende Kind sucht seine Mutter.',
          highlight: 'Das weinende Kind',
          uzbek: 'Yig‘layotgan bola onasini qidirmoqda (weinen + d + e).'
        },
        {
          german: 'Der lachende Junge spielt im Park.',
          highlight: 'Der lachende Junge',
          uzbek: 'Kulayotgan bola bog‘da o‘ynamoqda (lachen + d + e).'
        }
      ],
      patternExplanationUz: 'Partizip I ayni paytda davom etayotgan faol harakatni sifatga aylantiradi. Yasash: Fe‘l infinitivi + d (singend, lachend, schlafend) va undan keyin odatiy sifat qo‘shimchalari (-e, -en, -er) qo‘shiladi.',
      ruleFormulaUz: 'Infinitiv + d + Sifat qo‘shimchasi (z.B. singend-e Frau)'
    },
    grammar: [
      {
        id: 'gra-60',
        lessonId: 'les-60',
        levelCode: 'b1-1',
        titleDe: 'Das Partizip I als Adjektiv',
        titleUz: 'Sifat vazifasidagi Partizip I',
        summaryUz: 'Ayni damda davom etayotgan harakatni sifat sifatida qo‘llash: schlafend -> das schlafende Kind.',
        explanationUz: `Partizip I nemis tilida hozirgi zamon sifatdoshi hisoblanadi.

1. **Yasalishi:**
   **Infinitiv** + **d**
   - spielen -> **spielend** (o‘ynayotgan)
   - weinen -> **weinend** (yig‘layotgan)
   - kochen -> **kochend** (qaynayotgan)

2. **Ot oldida sifat sifatida turlanishi:**
   Oddiy sifatlar kabi artikl va kelishikka mos qo‘shimcha oladi:
   - *der **spielende** Hund* (o‘ynayotgan it)
   - *die **singende** Frau* (kuylayotgan ayol)
   - *das **schlafende** Kind* (uxlayotgan bola)
   - *mit **zitternden** Händen* (titrayotgan qo‘llar bilan)`,
        tables: [
          {
            title: 'Partizip I yasalishi va qo‘llanishi',
            headers: ['Fe‘l', 'Partizip I shakli', 'Sifat sifatida (Nom. Mask / Fem / Neut)'],
            rows: [
              ['lachen', 'lachend', 'der lachende Mann / die lachende Frau / das lachende Kind'],
              ['brennen', 'brennend', 'das brennende Haus (yonayotgan uy)'],
              ['fliegen', 'fliegend', 'das fliegende Flugzeug (uchayotgan samolyot)']
            ]
          }
        ],
        examples: [
          {
            german: 'Das applaudierende Publikum stand begeistert auf.',
            uzbek: 'Qarsak chalayotgan tomoshabinlar hayrat bilan o‘rnidan turdi.',
            highlight: 'Das applaudierende Publikum'
          },
          {
            german: 'Vorsicht vor dem kochenden Wasser!',
            uzbek: 'Qaynayotgan suvdan ehtiyot bo‘ling!',
            highlight: 'dem kochenden Wasser'
          }
        ],
        commonMistakes: [
          {
            incorrect: 'Das weint Kind sucht seine Mutter.',
            correct: 'Das weinende Kind sucht seine Mutter.',
            explanationUz: 'Sifatdosh uchun fe‘lga "d" va sifat qo‘shimchasi qo‘shiladi: weinen + d + e = weinende.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Kritik zur Theaterpremiere',
      titleUz: 'Teatr premyerasiga taqriz',
      situationUz: 'Madaniyat jurnalisti kechagi teatr premyerasi haqida radio eshittirishda taqriz bermoqda.',
      audioTranscriptDe: 'Kritiker: Gestern Abend feierte Shakespeares "Hamlet" am Stadttheater Premiere. Die Inszenierung bot ein packendes Erlebnis. Besonders hervorzuheben ist die schauspielerische Leistung der Hauptfigur: Mit zitternder Stimme und brennenden Augen verkörperte er den inneren Konflikt des Prinzen meisterhaft. Das gebannt lauschende Publikum spendete am Ende zehn Minuten lang tosenden Applaus. Eine absolut lohnende Aufführung!',
      translationUz: 'Taqrizchi: Kecha oqshom shahar teatrida Shekspirning "Gamlet" asari premyerasi bo‘lib o‘tdi. Sahnalashtirish hayajonli taassurot qoldirdi. Ayniqsa bosh qahramonning aktyorlik mahoratini alohida ta‘kidlash lozim: Titrayotgan ovozi va yonib turgan ko‘zlari bilan u shahzodaning ichki ziddiyatini mohirona gavdalantirdi. Qiziqish bilan diqqat qilib tinglayotgan tomoshabinlar oxirida 10 daqiqa davomida guldurros qarsaklar yog‘dirishdi. Mutlaqo borishga arziydigan spektakl!',
      stage1Global: {
        instructionUz: '1-Bosqich: Taqrizchining spektakl haqidagi umumiy bahosi qanday?',
        questionUz: 'Taqrizchi asarni qanday baholadi?',
        options: ['Juda zerikarli deb', 'Mutlaqo borishga arziydigan, ajoyib asar deb', 'Muvaffaqiyatsiz deb'],
        correctIndex: 1,
        explanationUz: '"Eine absolut lohnende Aufführung!" deb yakunladi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Partizip I shakllarini eshitib ma‘nosini toping.',
        questions: [
          {
            id: 'l60-q1',
            questionUz: 'Aktyor shahzoda obrazini qanday ovoz bilan ijro etdi?',
            options: ['Baland baqirgan ovozda', 'Titrayotgan ovoz bilan (mit zitternder Stimme)', 'Pichirlab'],
            correctIndex: 1,
            explanationUz: '"Mit zitternder Stimme und brennenden Augen...".'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Kritiker', textDe: 'Das lauschende Publikum spendete tosenden Applaus.', textUz: 'Tinglayotgan tomoshabinlar jo‘shqin qarsaklar yog‘dirdi.' },
          { speaker: 'Moderator', textDe: 'Ein voller Erfolg für das Stadttheater!', textUz: 'Shahar teatri uchun to‘laqonli muvaffaqiyat!' }
        ],
        keyVocabulary: [
          { german: 'tosender Applaus', uzbek: 'guldurros qarsaklar' },
          { german: 'die Inszenierung', uzbek: 'sahnalashtirish' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-60',
        lessonId: 'les-60',
        levelCode: 'b1-1',
        titleDe: 'Straßenmusik: Die Bühne unter freiem Himmel',
        titleUz: 'Ko‘cha musiqasi: Ochiq osmon ostidagi sahna',
        textDe: 'In vielen europäischen Metropolen prägen Straßenmusiker das urbane Lebensgefühl. An belebten Plätzen bleiben eilende Passanten plötzlich stehen, um den Melodien zu lauschen. Ob klassische Geige oder mitreißende Gitarrenrhythmen – die Musik verwandelt graue Straßen in lebendige Konzertsäle. Für viele aufstrebende Künstler ist die Straße das beste Übungsfeld: Nirgendwo sonst erhält man direkteres Feedback als von einem spontan stehenbleibenden Publikum.',
        translationUz: 'Ko‘plab Yevropa poytaxtlarida ko‘cha musiqachilari shahar hayotining ruhini belgilab beradi. Gavjum maydonlarda shoshib ketayotgan yo‘lovchilar to‘satdan to‘xtab, kuylarga quloq solishadi. Klassik skripka bo‘ladimi yoki o‘ziga jalb qiluvchi gitara ritmlari bo‘ladimi — musiqa kulrang ko‘chalarni jonli konsert zallariga aylantiradi. Ko‘plab intiluvchan ijodkorlar uchun ko‘cha eng yaxshi mashq maydonidir: hech qayerda to‘satdan to‘xtab tinglayotgan tomoshabinchalik to‘g‘ridan-to‘g‘ri baho olib bo‘lmaydi.',
        vocabularyHints: [
          { german: 'mitreißend', uzbek: 'o‘ziga tortuvchi, jo‘shqin' },
          { german: 'aufstrebend', uzbek: 'kelajagi porloq, intiluvchan' }
        ],
        questions: [
          {
            id: 'q-rea-60-1',
            questionUz: 'Ko‘cha musiqachilari uchun ko‘cha nima sababdan yaxshi maydon hisoblanadi?',
            options: ['Ko‘p pul ishlash mumkinligi uchun', 'Tomoshabinlardan darhol to‘g‘ridan-to‘g‘ri baho olinishi uchun', 'Politsiya tekshirmagani uchun'],
            correctIndex: 1,
            explanationUz: 'Matnda "...erhält man direkteres Feedback als von einem spontan stehenbleibenden Publikum" deb aytilgan.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-60',
      lessonId: 'les-60',
      levelCode: 'b1-1',
      taskDe: 'Beschreiben Sie ein Konzert oder Theaterstück mit Partizip I.',
      taskUz: 'Biror konsert yoki spektakl haqida Partizip I (masalan: faszinierend, applaudierend, singend) sifatlari bilan taqriz yozing.',
      instructionUz: 'Qanday atmosfera bo‘lganini va tomoshabinlarning munosabatini tasvirlang.',
      hints: ['Das applaudierende Publikum...', 'Die singenden Musiker...'],
      sampleSolutionDe: 'Letztes Wochenende besuchte ich ein Konzert klassischer Musik. Die spielenden Musiker begeisterten den ganzen Saal. Das gebannt lauschende Publikum spendete nach jedem Stück großen Beifall. Es war ein tief berührendes Erlebnis.',
      scaffold: {
        openingDe: 'Meine Kulturkritik:',
        closingDe: 'Ein unvergesslicher Abend.',
        usefulPhrasesDe: ['Das ...de Publikum', 'Die spielenden Künstler...', 'Es war faszinierend...']
      }
    },
    shadowing: [
      {
        id: 'sha-60',
        lessonId: 'les-60',
        levelCode: 'b1-1',
        sentenceDe: 'Das begeisterte Publikum dankte den hervorragend spielenden Musikern mit lang anhaltendem Applaus.',
        translationUz: 'Lol qolgan tomoshabinlar ajoyib ijro etgan musiqachilarga uzoq davom etgan qarsaklar bilan minnatdorchilik bildirdi.',
        phoneticHint: '[Das be-gays-ter-te Pub-li-kum dank-te den her-fohr-ra-gent shpi-len-den Mu-zi-kern mit lang an-hal-ten-dem App-laus]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-60-q1',
        type: 'fill-blank',
        questionUz: '"lachen" fe‘lidan Partizip I yasang: "Das _____ (lachen) Kind rannte zur Mutter."',
        blankSentence: 'Das [blank] Kind rannte zur Mutter.',
        options: ['lachende', 'gelachte', 'lachend', 'lachendes'],
        correctAnswer: 'lachende',
        explanationUz: 'das Kind (Nominativ aniq artikl bilan): lachen + d + e = lachende.',
        mistakeTipUz: '❌ Aniq artikldan keyin Nominativ neytral: das lachende Kind.'
      },
      {
        id: 'prac-60-q2',
        type: 'multiple-choice',
        questionUz: '"brennend" so‘zining o‘zbekcha tarjimasi nima?',
        options: ['yonayotgan', 'yong‘in o‘chirilgan', 'qorong‘i'],
        correctAnswer: 'yonayotgan',
        explanationUz: 'brennen (yonmoq) + d = brennend (yonayotgan).',
        mistakeTipUz: '❌ Partizip I davom etayotgan harakat: yonayotgan.'
      },
      {
        id: 'prac-60-q3',
        type: 'word-order',
        questionUz: 'Gapni to‘g‘ri tuzing:',
        scrambledWords: ['spielende', 'Der', 'Hund', 'im', 'Park', 'rennt'],
        correctAnswer: 'Der spielende Hund rennt im Park',
        explanationUz: 'Der spielende Hund (1) + rennt (2) + im Park (3).',
        mistakeTipUz: '❌ Der spielende Hund rennt im Park.'
      }
    ]
  }
];
