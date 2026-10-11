import { Lesson } from '../../types/database';

export const MODULE_22_B12_LESSONS: Lesson[] = [
  // ==========================================
  // LEKTION 64: Mentale Gesundheit & Wohlbefinden
  // ==========================================
  {
    id: 'les-64',
    moduleId: 'mod-b1-2-2',
    levelCode: 'b1-2',
    titleDe: 'Mentale Gesundheit & Wohlbefinden',
    titleUz: 'Ruhiy salomatlik, stressni yengish va farovonlik',
    descriptionUz: 'Ruhiy xotirjamlik, meditatsiya, ish va hayot muvozanati (Work-Life-Balance), Konjunktiv II der Vergangenheit (o‘tmishdagi afsuslar: hätte/wäre + Partizip II).',
    orderIndex: 64,
    estimatedMinutes: 45,
    isPublished: true,
    objectivesUz: [
      'Stress omillari va ruhiy salomatlikni muhokama qilish',
      'O‘tmishdagi afsus va imkoniyatlarni Konjunktiv II der Vergangenheit orqali ifodalash',
      'Work-Life-Balance va dam olish usullari haqida maslahat berish'
    ],
    warmUp: {
      situationUz: 'Imtihondan oldin ko‘p tunlarni bedor o‘tkazdingiz va charchab qoldingiz. Do‘stingiz bilan suhbatda: "Agar ko‘proq uxlaganimda edi, imtihonni yaxshiroq topshirgan bo‘lardim" deb afsuslanmoqdasiz.',
      curiosityQuestionUz: 'Nemis tilida o‘tgan zamonda bo‘lmagan ish-harakat uchun afsuslanish (agar shunday bo‘lganda edi...) qanday yasaladi?',
      miniDialogue: [
        { speaker: 'Jonas', textDe: 'Ich bin so erschöpft. Hätte ich doch gestern früher geschlafen!', textUz: 'Men juda charchadim. Kecha ertaroq uxlaganimda edi!' },
        { speaker: 'Sophie', textDe: 'Ja, wärst du nicht so spät ins Bett gegangen, hättest du heute mehr Energie gehabt.', textUz: 'Ha, bunchalik kech yotmaganingda edi, bugun ko‘proq quvvating bo‘lardi.' }
      ],
      hintUz: 'Konjunktiv II der Vergangenheit = hätte / wäre + Partizip II. Bu tuzilma o‘tmishdagi bajarilmagan afsuslar uchun ishlatiladi.'
    },
    contextDialogue: {
      titleDe: 'Dem Stress entkommen',
      titleUz: 'Stressdan qutulish va xotirjamlik',
      situationUz: 'Katta kompaniyada ishlovchi ikki hamkasb ortiqcha yuklama va dam olish muvozanati haqida fikr almashmoqda.',
      lines: [
        { speaker: 'Jonas', textDe: 'Sophie, ich fühle mich in letzter Zeit völlig ausgebrannt. Die Deadlines hören einfach nicht auf.', textUz: 'Sofi, men so‘nggi paytlarda butunlay holdan toygan his qilyapman. Muddatlar hech tugamayapti.' },
        { speaker: 'Sophie', textDe: 'Das verstehe ich gut. Hättest du doch letzte Woche wie geplant Urlaub genommen!', textUz: 'Buni juda yaxshi tushunaman. O‘tgan hafta rejalashtirilgandek ta‘tilga chiqqaningda edi!' },
        { speaker: 'Jonas', textDe: 'Stimmt. Wenn ich damals Nein gesagt hätte, wäre ich jetzt nicht so gestresst. Ich muss lernen, Grenzen zu setzen.', textUz: 'To‘g‘ri. O‘shanda "yo‘q" deganimda edi, hozir bunchalik stressda bo‘lmasdim. Chegara qo‘yishni o‘rganishim kerak.' },
        { speaker: 'Sophie', textDe: 'Fang mit täglicher Achtsamkeit und Spaziergängen an. Deine Gesundheit ist wichtiger als jedes Projekt.', textUz: 'Kundalik ong xotirjamligi va sayr qilishdan boshla. Salomatliging har qanday loyihadan muhimroq.' }
      ],
      usefulPhrases: [
        { german: 'die mentale Gesundheit', uzbek: 'ruhiy salomatlik' },
        { german: 'sich ausgebrannt fühlen', uzbek: 'butunlay holdan toygan his qilmoq' },
        { german: 'Grenzen setzen', uzbek: 'chegaralarni belgilamoq' },
        { german: 'die Achtsamkeit', uzbek: 'ongli xotirjamlik (mindfulness)' }
      ],
      culturalNoteUz: 'Germaniyada ruhiy salomatlik va "Burnout-Prävention"ga juda jiddiy e‘tibor qaratiladi. Sug‘urta kompaniyalari (Krankenkassen) stressga qarshi bepul meditatsiya kurslarini moliyalashtiradi.'
    },
    vocabulary: [
      {
        id: 'voc-b1-14-1',
        lessonId: 'les-64',
        levelCode: 'b1-2',
        german: 'die mentale Gesundheit',
        article: 'die',
        uzbek: 'ruhiy salomatlik',
        exampleDe: 'Mentale Gesundheit ist genauso wichtig wie körperliche Fitness.',
        exampleUz: 'Ruhiy salomatlik jismoniy tayyorgarlik kabi muhimdir.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-14-2',
        lessonId: 'les-64',
        levelCode: 'b1-2',
        german: 'das Wohlbefinden',
        article: 'das',
        uzbek: 'farovonlik, o‘zini yaxshi his qilish',
        exampleDe: 'Regelmäßige Pausen fördern das allgemeine Wohlbefinden.',
        exampleUz: 'Muntazam tanaffuslar umumiy farovonlikni oshiradi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-14-3',
        lessonId: 'les-64',
        levelCode: 'b1-2',
        german: 'die Überlastung',
        article: 'die',
        plural: 'die Überlastungen',
        uzbek: 'ortiqcha yuklama, haddan tashqari charchash',
        exampleDe: 'Ständige Überlastung am Arbeitsplatz führt oft zu Burnout.',
        exampleUz: 'Ish joyidagi doimiy ortiqcha yuklama ko‘pincha burnoutga olib keladi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-14-4',
        lessonId: 'les-64',
        levelCode: 'b1-2',
        german: 'die Achtsamkeit',
        article: 'die',
        uzbek: 'onglilik, ichki xotirjamlikka diqqat (mindfulness)',
        exampleDe: 'Übungen zur Achtsamkeit helfen beim Stressabbau.',
        exampleUz: 'Achtsamkeit mashqlari stressni yengillatishga yordam beradi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-14-5',
        lessonId: 'les-64',
        levelCode: 'b1-2',
        german: 'bewältigen',
        article: null,
        uzbek: 'yengmoq, bartaraf etmoq',
        exampleDe: 'Man muss lernen, beruflichen Druck erfolgreich zu bewältigen.',
        exampleUz: 'Kishi kasbiy bosimni muvaffaqiyatli yengishni o‘rganishi kerak.',
        wordType: 'verb'
      },
      {
        id: 'voc-b1-14-6',
        lessonId: 'les-64',
        levelCode: 'b1-2',
        german: 'erschöpft',
        article: null,
        uzbek: 'tinka madori qurigan, nihoyatda charchagan',
        exampleDe: 'Nach der langen Arbeitswoche war sie völlig erschöpft.',
        exampleUz: 'Uzoq ish haftasidan so‘ng uning tinka madori butunlay qurigan edi.',
        wordType: 'adjective'
      },
      {
        id: 'voc-b1-14-7',
        lessonId: 'les-64',
        levelCode: 'b1-2',
        german: 'das Bedauern',
        article: 'das',
        uzbek: 'afsus, pushaymonlik',
        exampleDe: 'Mit großem Bedauern dachte er an die verpasste Gelegenheit.',
        exampleUz: 'Katta afsus bilan u qo‘ldan boy berilgan imkoniyat haqida o‘ylardi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-14-8',
        lessonId: 'les-64',
        levelCode: 'b1-2',
        german: 'abschalten',
        article: null,
        uzbek: 'ishdan uzilmoq, miyani dam oldirmoq',
        exampleDe: 'Am Wochenende kann er am besten beim Wandern abschalten.',
        exampleUz: 'Dam olish kunlarida u sayr qilish orqali barcha tashvishlardan uziladi.',
        wordType: 'verb'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'Quyidagi jumlalarni solishtiring. Hozirgi zamon Konjunktiv II bilan o‘tgan zamon Konjunktiv II o‘rtasidagi farqni sezyapsizmi?',
      discoveryExamples: [
        {
          german: 'Wenn ich Zeit hätte, würde ich spazieren gehen.',
          highlight: 'hätte / würde gehen',
          uzbek: 'Vaqtim bo‘lsa edi, sayrga chiqardim (hozir).'
        },
        {
          german: 'Wenn ich damals Zeit gehabt hätte, wäre ich mitgekommen.',
          highlight: 'gehabt hätte / wäre mitgekommen',
          uzbek: 'O‘shanda vaqtim bo‘lganda edi, birga borgan bo‘lardim (o‘tmishdagi afsus).'
        }
      ],
      patternExplanationUz: 'O‘tgan zamon Konjunktiv II (amalga oshmagan shart va afsuslar): hätte / wäre + Partizip II.',
      ruleFormulaUz: 'Wenn ... Partizip II + HÄTTE / WÄRE, HÄTTE / WÄRE ... Partizip II'
    },
    grammar: [
      {
        id: 'gra-64',
        lessonId: 'les-64',
        levelCode: 'b1-2',
        titleDe: 'Konjunktiv II der Vergangenheit',
        titleUz: 'O‘tgan zamon Konjunktiv II (Amalga oshmagan shart va afsuslar)',
        summaryUz: 'O‘tmishdagi o‘zgarmas vaziyatlar uchun afsus va faraz: hätte/wäre + Partizip II.',
        explanationUz: `Konjunktiv II der Vergangenheit o‘tmishda bajarilmagan ish-harakatlar haqida afsuslanganda qo‘llaniladi:
1. haben bilan: **hätte + Partizip II** (Wenn ich gelernt hätte...)
2. sein bilan: **wäre + Partizip II** (Wenn ich gefahren wäre...)
3. Orzu/Afsus gapi (Wunschsatz): **Hätte / Wäre ... doch / bloß ... !** (Hätte ich das doch gewusst!)`,
        tables: [
          {
            title: 'Konjunktiv II der Vergangenheit shakllari',
            headers: ['Yordamchi fe‘l', 'Partizip II', 'Namuna gap', 'Tarjimasi'],
            rows: [
              ['hätte', 'gearbeitet', 'Wenn er gearbeitet hätte,...', 'Agar u ishlaganda edi...'],
              ['wäre', 'gekommen', 'Wenn sie gekommen wäre,...', 'Agar u kelganida edi...'],
              ['hätte', 'geschlafen', 'Hätte ich doch geschlafen!', 'Qaniydi uxlaganimda edi!']
            ]
          }
        ],
        examples: [
          {
            german: 'Wenn ich gestern nicht so lange gearbeitet hätte, wäre ich nicht so müde gewesen.',
            uzbek: 'Kecha bunchalik uzoq ishlamaganimda edi, bunchalik charchamagan bo‘lardim.',
            highlight: 'gearbeitet hätte / wäre gewesen'
          },
          {
            german: 'Hätte ich bloß mehr für die Prüfung gelernt!',
            uzbek: 'Qaniydi imtihon uchun ko‘proq o‘qiganimda edi!',
            highlight: 'Hätte gelernt'
          }
        ],
        commonMistakes: [
          {
            incorrect: 'Wenn ich hätte Zeit gehabt...',
            correct: 'Wenn ich Zeit gehabt hätte...',
            explanationUz: 'Ergash gapda "hätte" eng oxirida turadi: gehabt hätte.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Dem Stress entkommen',
      titleUz: 'Stressdan qutulish va xotirjamlik',
      situationUz: 'Hamkasblar ishdan charchash va dam olish haqida suhbatlashmoqda.',
      audioTranscriptDe: 'Jonas: Sophie, ich fühle mich in letzter Zeit völlig ausgebrannt. Die Deadlines hören einfach nicht auf.\nSophie: Das verstehe ich gut. Hättest du doch letzte Woche wie geplant Urlaub genommen!\nJonas: Stimmt. Wenn ich damals Nein gesagt hätte, wäre ich jetzt nicht so gestresst.\nSophie: Fang mit täglicher Achtsamkeit und Spaziergängen an. Deine Gesundheit ist wichtiger als jedes Projekt.',
      translationUz: 'Jonas: Sofi, men so‘nggi paytlarda butunlay holdan toygan his qilyapman. Muddatlar hech tugamayapti.\nSophie: Buni tushunaman. O‘tgan hafta rejadagidek ta‘tilga chiqqaningda edi!\nJonas: To‘g‘ri. O‘shanda "yo‘q" deganimda edi, hozir bunchalik stressda bo‘lmasdim.\nSophie: Kundalik ong xotirjamligi va sayr qilishdan boshla. Salomatliging har qanday loyihadan muhimroq.',
      stage1Global: {
        instructionUz: '1-Bosqich: Jonasning asosiy muammosi nima?',
        questionUz: 'Jonas nima sababdan o‘zini yomon his qilmoqda?',
        options: ['U shamollab qolgan', 'Ishda haddan tashqari ko‘p ishlab, dam olmagani uchun charchagan', 'U yangi ish qidirmoqda'],
        correctIndex: 1,
        explanationUz: 'Jonas o‘zini ausgebrannt (holdan toygan) his qilmoqda.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Dialogdagi o‘tgan zamon afsusini aniqlang.',
        questions: [
          {
            id: 'l64-q1',
            questionUz: 'Sophie Jonasga o‘tgan hafta bo‘yicha qanday afsusni eslatdi?',
            options: ['Mashinasini ta‘mirlashini', 'Ta‘tilga chiqqanida bunchalik toliqmagan bo‘lishini', 'Sportzalga borishini'],
            correctIndex: 1,
            explanationUz: 'Sophie: "Hättest du doch letzte Woche wie geplant Urlaub genommen!" deydi.'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Jonas', textDe: 'Hätte ich damals doch Nein gesagt!', textUz: 'Qaniydi o‘shanda yo‘q deganimda edi!' },
          { speaker: 'Sophie', textDe: 'Deine Gesundheit ist wichtiger als jedes Projekt.', textUz: 'Salomatliging har qanday loyihadan muhimroq.' }
        ],
        keyVocabulary: [
          { german: 'die Achtsamkeit', uzbek: 'ongli xotirjamlik' },
          { german: 'ausgebrannt', uzbek: 'holdan toygan' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-64',
        lessonId: 'les-64',
        levelCode: 'b1-2',
        titleDe: 'Achtsamkeit im Berufsalltag: Strategien gegen das Ausbrennen',
        titleUz: 'Ish jarayonida ongli xotirjamlik: Burnoutga qarshi strategiyalar',
        textDe: 'In unserer modernen Leistungsgesellschaft klagen immer mehr Beschäftigte über Dauerstress und Erschöpfung. Viele Menschen gestehen sich ein: "Hätte ich früher auf die Signale meines Körpers gehört, wäre ich nicht in diese schwere Krise geraten."\n\nPsychologen betonen, dass körperliche Warnzeichen oft ignoriert werden. Einfache Übungen können helfen: Eine fünfminütige Atempause zwischen zwei Meetings oder der Verzicht auf das Smartphone während des Mittagessens beruhigen das Nervensystem.',
        translationUz: 'Zamonaviy jamiyatimizda borgan sari ko‘proq xodimlar doimiy stressdan shikoyat qilmoqdalar. Ko‘pchilik tan oladi: "Agar tanamning ogohlantirish signallariga avvalroq quloq solganimda edi, bu og‘ir inqirozga tushmagan bo‘lardim."\n\nPsixologlar ogohlantirish alomatlariga ko‘pincha e‘tibor berilmasligini aytishadi. Oddiy mashqlar yordam berishi mumkin: ikkita uchrashuv orasidagi 5 daqiqalik nafas tanaffusi yoki tushlik paytida telefondan voz kechish asab tizimini tinchlantiradi.',
        vocabularyHints: [
          { german: 'die Erschöpfung', uzbek: 'haddan tashqari charchash' },
          { german: 'beruhigen', uzbek: 'tinchlantirmoq' }
        ],
        questions: [
          {
            id: 'q-rea-64-1',
            questionUz: 'Matnga ko‘ra, odamlar o‘tmish haqida nima deb afsuslanishadi?',
            options: ['Kam maosh olganlaridan', 'O‘z tanalarining signallariga vaqtida quloq solmaganlaridan', 'Boshqa kasb tanlamaganlaridan'],
            correctIndex: 1,
            explanationUz: 'Matnda: "Hätte ich früher auf die Signale meines Körpers gehört..." deb keltirilgan.'
          }
        ]
      }
    ],
    writing: {
      taskDe: 'Schreiben Sie einen Blogbeitrag (ca. 80-100 Wörter) zum Thema: "Ein Tag, an dem ich alles anders gemacht hätte". Nutzen Sie Konjunktiv II der Vergangenheit.',
      taskUz: 'Mavzu bo‘yicha blog posti yozing (taxminan 80-100 so‘z): "Hamma narsani boshqacha qilgan bo‘lardim degan kunim". Konjunktiv II der Vergangenheit dan foydalaning.',
      instructionUz: 'hätte / wäre + Partizip II dan kamida 2 marta foydalaning.',
      hints: [
        'Hätte ich doch früher geschlafen!',
        'Wenn ich damals Nein gesagt hätte, wäre ich nicht so gestresst gewesen.'
      ],
      sampleSolutionDe: 'Jeder kennt Tage, die völlig schiefgehen. Wenn ich doch bloß früher ins Bett gegangen wäre! Am Morgen verschlief ich natürlich. Wäre ich pünktlich aufgestanden, hätte ich die Bahn nicht verpasst. Hätte ich mich besser vorbereitet, wäre alles viel ruhiger verlaufen. Daraus habe ich gelernt: Pausen sind eine Notwendigkeit.',
      scaffold: {
        openingDe: 'Manchmal wünscht man sich, man könnte die Zeit zurückdrehen...',
        closingDe: 'Daraus habe ich gelernt, dass Ruhe an erster Stelle stehen muss.',
        usefulPhrasesDe: ['Hätte ich doch...', 'Wäre ich damals nicht...', 'Wenn ich ... hätte']
      }
    },
    shadowing: [
      {
        id: 'sha-64',
        lessonId: 'les-64',
        levelCode: 'b1-2',
        sentenceDe: 'Wenn ich damals auf meinen Körper gehört hätte, wäre ich nicht so erschöpft gewesen.',
        translationUz: 'O‘shanda tanamga quloq solganimda edi, bunchalik tinka madorim qurimagan bo‘lardi.',
        phoneticHint: '[Ven ih dah-mals auf may-nen Kör-per ge-hört het-te, ve-re ih niht zo er-shöpf-t ge-ve-zen]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-64-q1',
        type: 'fill-blank',
        questionUz: 'Gapni Konjunktiv II der Vergangenheit bilan to‘ldiring: "Wenn er mehr gelernt _____, hätte er die Prüfung bestanden."',
        blankSentence: 'Wenn er mehr gelernt [blank], hätte er die Prüfung bestanden.',
        options: ['hätte', 'hatte', 'hast', 'wäre'],
        correctAnswer: 'hätte',
        explanationUz: '"lernen" fe‘li uchun: hätte gelernt.',
        mistakeTipUz: '❌ lernen + haben -> hätte gelernt.'
      },
      {
        id: 'prac-64-q2',
        type: 'multiple-choice',
        questionUz: '"Wäre ich früher losgefahren, hätte ich den Zug nicht verpasst" gapining ma‘nosi nima?',
        options: [
          'Ertaroq yo‘lga chiqdim va poyezdga ulgurdim.',
          'Ertaroq yo‘lga chiqqanimda edi, poyezdni o‘tkazib yubormagan bo‘lardim (lekin kech qoldim).',
          'Poyezd bekatida ertagacha kutishim kerak.'
        ],
        correctAnswer: 'Ertaroq yo‘lga chiqqanimda edi, poyezdni o‘tkazib yubormagan bo‘lardim (lekin kech qoldim).',
        explanationUz: 'Bu o‘tmishdagi amalga oshmagan voqea haqidagi afsus.',
        mistakeTipUz: '❌ Konjunktiv II o‘tmishda sodir bo‘lmagan faraziy holatni anglatadi.'
      },
      {
        id: 'prac-64-q3',
        type: 'word-order',
        questionUz: 'Afsus gapini to‘g‘ri tartibda tuzing:',
        scrambledWords: ['doch', 'Hätte', 'ich', 'gewusst', 'das'],
        correctAnswer: 'Hätte ich das doch gewusst',
        explanationUz: 'Irrealer Wunschsatz: Hätte (1) + ich (2) + das (3) + doch (4) + gewusst (5)!',
        mistakeTipUz: '❌ Fe‘l birinchi o‘rinda: Hätte ich das doch gewusst!'
      }
    ]
  },

  // ==========================================
  // LEKTION 65: Ernährungstrends & Bewusster Konsum
  // ==========================================
  {
    id: 'les-65',
    moduleId: 'mod-b1-2-2',
    levelCode: 'b1-2',
    titleDe: 'Ernährungstrends & Bewusster Konsum',
    titleUz: 'Oziqlanish tendensiyalari, ongli iste‘mol va fe‘llar predlogi',
    descriptionUz: 'Vegan, vegetarian, organik mahsulotlar (Bio-Produkte), doimiy predlogli fe‘llar (Verben mit festen Präpositionen) va pronominal olmoshlar (worauf/darauf, woran/daran).',
    orderIndex: 65,
    estimatedMinutes: 45,
    isPublished: true,
    objectivesUz: [
      'Zamonaviy oziqlanish tendensiyalari va Bio-mahsulotlarni muhokama qilish',
      'Predlogli fe‘llarni to‘g‘ri ishlatish',
      'Pronominal olmoshlar (worauf / darauf) va shaxs olmoshlari (auf wen / auf ihn) farqini egallash'
    ],
    warmUp: {
      situationUz: 'Supermarketda xaridor do‘sti bilan oziq-ovqat xarid qilmoqda. Mahsulot yorliqlaridagi tarkibni tekshirib, sog‘lom ovqatlanish haqida bahslashmoqda.',
      curiosityQuestionUz: '"Men bu haqida o‘ylayapman" va "Sen kim haqida o‘ylayapsan?" jumlalaridagi nemischa bog‘lovchi so‘zlar qanday yasaladi?',
      miniDialogue: [
        { speaker: 'Lukas', textDe: 'Worauf achtest du beim Einkaufen am meisten?', textUz: 'Xarid paytida eng ko‘p nimaga e‘tibor berasan?' },
        { speaker: 'Mia', textDe: 'Ich achte darauf, dass das Gemüse aus biologischem Anbau stammt.', textUz: 'Men sabzavotlarning organik yetishtirilgan bo‘lishiga e‘tibor qarataman.' }
      ],
      hintUz: 'Narsalar uchun: Wo(r) + Präposition (worauf, woran). Shaxslar uchun: Präposition + Pronomen (auf wen, an wen).'
    },
    contextDialogue: {
      titleDe: 'Bio oder konventionell?',
      titleUz: 'Organikmi yoki odatiy?',
      situationUz: 'Ikki talaba haftalik bozorlik chog‘ida vegan taomlar va ekologik toza mahsulotlar foydasini muhokama qilmoqda.',
      lines: [
        { speaker: 'Lukas', textDe: 'Mia, interessierst du dich eigentlich für pflanzliche Ernährung?', textUz: 'Mia, sen o‘zi o‘simlikka asoslangan oziqlanishga qiziqasanmi?' },
        { speaker: 'Mia', textDe: 'Ja, total! Ich beschäftige mich seit Monaten damit. Es tut meiner Gesundheit gut.', textUz: 'Ha, judayam! Men bir necha oydan beri bu bilan shug‘ullanyapman. Bu salomatligimga foydali.' },
        { speaker: 'Lukas', textDe: 'Aber Bio-Lebensmittel sind teurer. Woran liegt das eigentlich?', textUz: 'Lekin bio-mahsulotlar qimmatroq. Buning sababi nimada o‘zi?' },
        { speaker: 'Mia', textDe: 'Das liegt daran, dass ökologische Landwirtschaft mehr Handarbeit erfordert.', textUz: 'Bunga sabab shundaki, ekologik qishloq xo‘jaligi ko‘proq qo‘l mehnatini talab qiladi.' }
      ],
      usefulPhrases: [
        { german: 'achten auf (+ Akk.)', uzbek: '...ga e‘tibor bermoq' },
        { german: 'sich interessieren für (+ Akk.)', uzbek: '...ga qiziqmoq' },
        { german: 'liegen an (+ Dat.)', uzbek: 'sababi ...da bo‘lmoq' },
        { german: 'verzichten auf (+ Akk.)', uzbek: '...dan voz kechmoq' }
      ],
      culturalNoteUz: 'Germaniyada "Bio-Siegel" belgisi qonun bilan himoyalangan. Nemislarning 80 foizi muntazam ravishda Bio mahsulot xarid qiladi.'
    },
    vocabulary: [
      {
        id: 'voc-b1-15-1',
        lessonId: 'les-65',
        levelCode: 'b1-2',
        german: 'die Ernährung',
        article: 'die',
        uzbek: 'oziqlanish, ovqatlanish tartibi',
        exampleDe: 'Eine ausgewogene Ernährung stärkt das Immunsystem.',
        exampleUz: 'Muvozanatli ovqatlanish immunitet tizimini mustahkamlaydi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-15-2',
        lessonId: 'les-65',
        levelCode: 'b1-2',
        german: 'der Konsum',
        article: 'der',
        uzbek: 'iste‘mol',
        exampleDe: 'Bewusster Konsum reduziert Lebensmittelverschwendung.',
        exampleUz: 'Ongli iste‘mol isrofgarchilikni kamaytiradi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-15-3',
        lessonId: 'les-65',
        levelCode: 'b1-2',
        german: 'die Zutat',
        article: 'die',
        plural: 'die Zutaten',
        uzbek: 'masalliq, tarkibiy qism',
        exampleDe: 'Ich lese immer die Liste der Zutaten auf der Verpackung.',
        exampleUz: 'Men har doim qadoqdagi masalliqlar ro‘yxatini o‘qiyman.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-15-4',
        lessonId: 'les-65',
        levelCode: 'b1-2',
        german: 'verzichten',
        article: null,
        uzbek: 'voz kechmoq (auf + Akk.)',
        exampleDe: 'Viele Menschen verzichten auf Zucker und Fleisch.',
        exampleUz: 'Ko‘p odamlar shakar va go‘shtdan voz kechmoqdalar.',
        wordType: 'verb'
      },
      {
        id: 'voc-b1-15-5',
        lessonId: 'les-65',
        levelCode: 'b1-2',
        german: 'nachhaltig',
        article: null,
        uzbek: 'barqaror, ekologik',
        exampleDe: 'Nachhaltige Landwirtschaft schützt die Umwelt.',
        exampleUz: 'Barqaror qishloq xo‘jaligi atrof-muhitni asraydi.',
        wordType: 'adjective'
      },
      {
        id: 'voc-b1-15-6',
        lessonId: 'les-65',
        levelCode: 'b1-2',
        german: 'der Nährstoff',
        article: 'der',
        plural: 'die Nährstoffe',
        uzbek: 'oziq moddasi',
        exampleDe: 'Frisches Gemüse enthält wertvolle Nährstoffe.',
        exampleUz: 'Yangi sabzavotlar qimmatli oziq moddalarni o‘z ichiga oladi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-15-7',
        lessonId: 'les-65',
        levelCode: 'b1-2',
        german: 'pflanzlich',
        article: null,
        uzbek: 'o‘simlikka asoslangan',
        exampleDe: 'Pflanzliche Milchalternativen sind sehr beliebt.',
        exampleUz: 'O‘simlikka asoslangan sut muqobillari juda mashhur.',
        wordType: 'adjective'
      },
      {
        id: 'voc-b1-15-8',
        lessonId: 'les-65',
        levelCode: 'b1-2',
        german: 'beitragen',
        article: null,
        uzbek: 'hissa qo‘shmoq (zu + Dat.)',
        exampleDe: 'Jeder kann zum Klimaschutz beitragen.',
        exampleUz: 'Har bir inson iqlim muhofazasiga hissa qo‘sha oladi.',
        wordType: 'verb'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'Quyidagi savol va javoblarga e‘tibor bering. Narsalar va insonlar haqida so‘ralganda predlog qanday qo‘llanyapti?',
      discoveryExamples: [
        {
          german: 'Worauf wartest du? – Ich warte auf den Bus / darauf.',
          highlight: 'Worauf / darauf',
          uzbek: 'Nimani kutyapsan? – Avtobusni / shuni kutyapman (narsa).'
        },
        {
          german: 'Auf wen wartest du? – Ich warte auf meine Schwester / auf sie.',
          highlight: 'Auf wen / auf sie',
          uzbek: 'Kimni kutyapsan? – Singlimni / uni kutyapman (shaxs).'
        }
      ],
      patternExplanationUz: 'Narsalar uchun: Wo(r) + Präposition? -> Da(r) + Präposition. Insonlar uchun: Präposition + Wen/Wem? -> Präposition + Pronomen.',
      ruleFormulaUz: 'Narsa: Wo(r) + Präposition? / Shaxs: Präposition + Wen/Wem?'
    },
    grammar: [
      {
        id: 'gra-65',
        lessonId: 'les-65',
        levelCode: 'b1-2',
        titleDe: 'Verben mit festen Präpositionen & Pronominaladverbien',
        titleUz: 'Doimiy predlogli fe‘llar va Pronominal olmoshlar',
        summaryUz: 'Narsa va tushunchalar uchun: worauf/darauf, worüber/darüber; insonlar uchun: auf wen, über wen.',
        explanationUz: `Doimiy predlogli fe‘llar bilan gap tuzganda narsa va shaxs farqlanadi:
1. **Narsa:** Wo(r) + Präposition (Worauf, Woran, Wofür) -> Da(r) + Präposition (Darauf, Daran, Dafür).
2. **Shaxs:** Präposition + Pronomen (Auf wen? – Auf ihn. Mit wem? – Mit ihr).`,
        tables: [
          {
            title: 'Pronominaladverbien jadvali',
            headers: ['Turi', 'So‘roq', 'Javob', 'Misol'],
            rows: [
              ['Narsa (auf + Akk.)', 'Worauf?', 'Darauf', 'Worauf achtest du? – Darauf.'],
              ['Shaxs (auf + Akk.)', 'Auf wen?', 'Auf ihn / sie', 'Auf wen wartest du? – Auf sie.'],
              ['Narsa (an + Dat.)', 'Woran?', 'Daran', 'Woran denkst du? – Daran.']
            ]
          }
        ],
        examples: [
          {
            german: 'Wir haben lange darüber gesprochen, wie wir Plastik vermeiden können.',
            uzbek: 'Biz plastikdan qanday qochish haqida uzoq gaplashdik.',
            highlight: 'darüber gesprochen'
          },
          {
            german: 'Sie freut sich darauf, am Wochenende auf den Markt zu gehen.',
            uzbek: 'U dam olish kunida bozorga borishni intiqlik bilan kutyapti.',
            highlight: 'freut sich darauf'
          }
        ],
        commonMistakes: [
          {
            incorrect: 'Über was sprecht ihr? (So‘zlashuvda)',
            correct: 'Worüber sprecht ihr?',
            explanationUz: 'B1 standartida "über was" emas, "worüber" ishlatiladi.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'Bio oder konventionell?',
      titleUz: 'Organikmi yoki odatiy?',
      situationUz: 'Supermarketda sog‘lom ovqatlanish haqida suhbat.',
      audioTranscriptDe: 'Lukas: Mia, interessierst du dich für pflanzliche Ernährung?\nMia: Ja, total! Ich beschäftige mich seit Monaten damit.\nLukas: Aber Bio-Lebensmittel sind teurer. Woran liegt das eigentlich?\nMia: Das liegt daran, dass ökologische Landwirtschaft mehr Handarbeit erfordert und ohne chemische Pestizide auskommt.',
      translationUz: 'Lukas: Mia, o‘simlikka asoslangan oziqlanishga qiziqasanmi?\nMia: Ha, judayam! Men bir necha oydan beri bu bilan shug‘ullanyapman.\nLukas: Lekin bio-mahsulotlar qimmatroq. Sababi nimada?\nMia: Bunga sabab, ekologik qishloq xo‘jaligi ko‘proq qo‘l mehnati talab qiladi va pestitsidlarsiz ishlaydi.',
      stage1Global: {
        instructionUz: '1-Bosqich: Mia nima sababdan organik mahsulotlarni afzal ko‘radi?',
        questionUz: 'Mia nima sababdan organik mahsulotlarni afzal ko‘radi?',
        options: ['Ular ancha arzon', 'Ular sog‘lom va ekologiyaga foydali', 'Faqat do‘konda boshqa narsa yo‘qligi uchun'],
        correctIndex: 1,
        explanationUz: 'Mia ular sog‘lom va ekologiyaga foydali ekanini aytadi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Bio mahsulotlar narxi sababi nima?',
        questions: [
          {
            id: 'l65-q1',
            questionUz: 'Bio-mahsulotlar nima uchun qimmatroq?',
            options: ['Ko‘proq qo‘l mehnatini talab qilgani uchun', 'Samolyotda keltirilgani uchun', 'Faqat soliqlari balandligi uchun'],
            correctIndex: 0,
            explanationUz: 'Mia: "Das liegt daran, dass ökologische Landwirtschaft mehr Handarbeit erfordert" deydi.'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Lukas', textDe: 'Woran liegt das eigentlich?', textUz: 'Buning sababi nimada o‘zi?' },
          { speaker: 'Mia', textDe: 'Das liegt daran, dass Bio mehr Handarbeit braucht.', textUz: 'Bunga sabab, Bio ko‘proq qo‘l mehnati talab qiladi.' }
        ],
        keyVocabulary: [
          { german: 'pflanzlich', uzbek: 'o‘simlikka asoslangan' },
          { german: 'die Handarbeit', uzbek: 'qo‘l mehnati' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-65',
        lessonId: 'les-65',
        levelCode: 'b1-2',
        titleDe: 'Der Trend zur pflanzlichen Ernährung',
        titleUz: 'O‘simlikka asoslangan oziqlanish tendensiyasi',
        textDe: 'Immer mehr Verbraucher in Deutschland ändern ihre Essgewohnheiten. Der sogenannte "Flexitarismus" – der bewusste und reduzierte Konsum von Fleisch – ist sehr beliebt. Viele Konsumenten verzichten bewusst auf billiges Fleisch und achten stattdessen darauf, regionale Lebensmittel einzukaufen.',
        translationUz: 'Germaniyada ko‘plab iste‘molchilar o‘zlarining ovqatlanish odatlarini o‘zgartirmoqdalar. Go‘shtni ongli ravishda kamroq iste‘mol qilish keng yoyildi. Ko‘plab iste‘molchilar arzon go‘shtdan voz kechib, mahalliy mahsulotlar sotib olishga e‘tibor bermoqdalar.',
        vocabularyHints: [
          { german: 'der Verbraucher', uzbek: 'iste‘molchi' },
          { german: 'regional', uzbek: 'mahalliy hududdan' }
        ],
        questions: [
          {
            id: 'q-rea-65-1',
            questionUz: '"Flexitarismus" nimani anglatadi?',
            options: ['Faqat shirinlik yeyishni', 'Go‘shtni ongli ravishda va kamroq iste‘mol qilishni', 'Faqat meva bilan kun kechirishni'],
            correctIndex: 1,
            explanationUz: 'Matnda: "der bewusste und reduzierte Konsum von Fleisch" deb tushuntirilgan.'
          }
        ]
      }
    ],
    writing: {
      taskDe: 'Schreiben Sie einen Forumsbeitrag (ca. 80-100 Wörter) zum Thema: "Brauchen wir mehr vegetarische Tage in Schulkantinen?". Nutzen Sie Pronominaladverbien (dafür, dagegen, darauf).',
      taskUz: '"Maktab oshxonalarida ko‘proq vegetarian kunlar kerakmi?" mavzusida forumda fikr bildiring (taxminan 80-100 so‘z). Pronominal olmoshlardan (dafür, dagegen, darauf) foydalaning.',
      instructionUz: 'Kamida 2 ta pronominal olmosh qo‘llang.',
      hints: ['Ich bin dafür / dagegen, dass...', 'Man sollte darauf achten, dass...'],
      sampleSolutionDe: 'In unserer Schule wird derzeit heftig darüber diskutiert, ob Kantinen fleischfreie Tage einführen sollten. Ich bin absolut dafür, weil pflanzliche Ernährung nicht nur gesund ist, sondern auch das Klima schützt. Allerdings müssen Köche darauf achten, dass die Mahlzeiten abwechslungsreich sind. Ein wöchentlicher Veggie-Tag wäre ein wunderbarer Schritt in die richtige Richtung.',
      scaffold: {
        openingDe: 'Zu diesem wichtigen Thema möchte ich meine Meinung äußern...',
        closingDe: 'Zusammenfassend lässt sich sagen, dass bewusster Konsum in der Schule beginnen sollte.',
        usefulPhrasesDe: ['Ich bin dafür', 'Wir sollten darauf achten', 'Darüber wird oft diskutiert']
      }
    },
    shadowing: [
      {
        id: 'sha-65',
        lessonId: 'les-65',
        levelCode: 'b1-2',
        sentenceDe: 'Ich achte beim Einkaufen genau darauf, woher die Lebensmittel stammen.',
        translationUz: 'Xarid paytida men oziq-ovqatlar qayerdan kelib chiqqaniga aniq e‘tibor beraman.',
        phoneticHint: '[Ih ah-te baym Ayn-kau-fen ge-nau da-rauf, voh-her di Leh-bens-mit-tel shtam-men]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-65-q1',
        type: 'fill-blank',
        questionUz: 'Narsalar haqida so‘rash uchun to‘g‘ri pronominal olmoshni tanlang: "_____ denkst du gerade? – An meinen Urlaub."',
        blankSentence: '[blank] denkst du gerade? – An meinen Urlaub.',
        options: ['Woran', 'An wen', 'Worauf', 'Wofür'],
        correctAnswer: 'Woran',
        explanationUz: '"denken an + Akk." (Urlaub = narsa): Wo + r + an = Woran.',
        mistakeTipUz: '❌ Narsa bo‘lsa: Woran? Inson bo‘lsa: An wen?'
      },
      {
        id: 'prac-65-q2',
        type: 'multiple-choice',
        questionUz: '"Auf wen wartest du?" savoliga qaysi javob to‘g‘ri?',
        options: ['Auf den Bus.', 'Auf meine Kollegin.', 'Darauf, dass es regnet.'],
        correctAnswer: 'Auf meine Kollegin.',
        explanationUz: '"Auf wen?" shaxsga qaratilgan: Auf meine Kollegin.',
        mistakeTipUz: '❌ Insonlar uchun "Auf wen?", narsalar uchun "Worauf?".'
      },
      {
        id: 'prac-65-q3',
        type: 'word-order',
        questionUz: 'Gapni to‘g‘ri tartibda tuzing:',
        scrambledWords: ['darauf', 'Ich', 'dass', 'wir', 'achte', 'gesund', 'essen'],
        correctAnswer: 'Ich achte darauf dass wir gesund essen',
        explanationUz: 'Ich (1) + achte (2) + darauf (3), + dass (4) + wir (5) + gesund (6) + essen (7).',
        mistakeTipUz: '❌ achten darauf, dass...'
      }
    ]
  },

  // ==========================================
  // LEKTION 66: Medizin & Notfälle
  // ==========================================
  {
    id: 'les-66',
    moduleId: 'mod-b1-2-2',
    levelCode: 'b1-2',
    titleDe: 'Medizin & Notfälle',
    titleUz: 'Tibbiyot, tez yordam va o‘zgalar nutqi (Konjunktiv I)',
    descriptionUz: 'Kasalxona, tez yordam (Notruf 112), shifokor tavsiyalari va xabarlar tilidagi o‘zgalar nutqi: Indirekte Rede im Konjunktiv I (sei, habe, müsse).',
    orderIndex: 66,
    estimatedMinutes: 45,
    isPublished: true,
    objectivesUz: [
      'Favqulodda tibbiy holatlarda tez yordam (112) chaqirish',
      'Shifokor xulosasi va yangiliklardagi bayonotlarni Konjunktiv I orqali tushunish',
      'Birovning gapini xolis yetkazish (Der Arzt sagte, der Patient sei außer Lebensgefahr)'
    ],
    warmUp: {
      situationUz: 'Kasalxonada shifokor bemorning holati haqida hamshiraga va yaqinlariga ma‘lumot bermoqda. OAV muxbiri shifokorning so‘zlarini yangiliklarda bayon qilmoqda.',
      curiosityQuestionUz: 'Nemis yangiliklarida va shifokor hisobotlarida birovning so‘zini neytral yetkazish uchun "ist" o‘rniga nima uchun "sei" ishlatiladi?',
      miniDialogue: [
        { speaker: 'Journalist', textDe: 'Was sagt der Chefarzt über den Patienten?', textUz: 'Bosh shifokor bemor haqida nima demoqda?' },
        { speaker: 'Sprecherin', textDe: 'Er meldet, der Patient sei außer Lebensgefahr und müsse sich ausruhen.', textUz: 'U xabar berishicha, bemor hayotiga xavf yo‘q emish va u dam olishi kerak emish.' }
      ],
      hintUz: 'Konjunktiv I o‘zgalar nutqini (Indirekte Rede) neytral, mas‘uliyatni so‘zlovchiga yuklamasdan ifodalash uchun xizmat qiladi.'
    },
    contextDialogue: {
      titleDe: 'In der Notaufnahme',
      titleUz: 'Shoshilinch tibbiy yordam bo‘limida',
      situationUz: 'Tez yordam shifokori va navbatchi hamshira qabul qilingan bemorning ahvolini muhokama qilmoqda.',
      lines: [
        { speaker: 'Notarzt', textDe: 'Schwester Anna, der Notdienst hat einen Patienten mit Verdacht auf Gehirnerschütterung gebracht.', textUz: 'Hamshira Anna, tez yordam xizmati miya chayqalishi gumoni bilan bemor keltirdi.' },
        { speaker: 'Schwester Anna', textDe: 'Was hat der Notarzt vor Ort berichtet?', textUz: 'Voqea joyidagi shifokor nima deb xabar berdi?' },
        { speaker: 'Notarzt', textDe: 'Er sagte, der Verunglückte habe kurz das Bewusstsein verloren, sei aber jetzt ansprechbar.', textUz: 'Uning aytishicha, jarohatlangan kishi qisqa vaqt hushini yo‘qotgan, ammo hozir muloqotga kirisha olar emish.' },
        { speaker: 'Schwester Anna', textDe: 'Gut, wir bringen ihn sofort ins MRT. Der Chefarzt ordnete an, wir sollten ihn engmaschig überwachen.', textUz: 'Yaxshi, uni darhol MRTga olib boramiz. Bosh shifokor uni qat‘iy nazorat ostida kuzatishimizni buyurdi.' }
      ],
      usefulPhrases: [
        { german: 'die Notaufnahme', uzbek: 'qabulxona / tez yordam bo‘limi' },
        { german: 'das Bewusstsein verlieren', uzbek: 'hushidan ketmoq' },
        { german: 'außer Lebensgefahr sein', uzbek: 'hayoti xavfdan holi bo‘lmoq' },
        { german: 'engmaschig überwachen', uzbek: 'qat‘iy nazorat ostida kuzatmoq' }
      ],
      culturalNoteUz: 'Germaniyada favqulodda tez yordam 112 bo‘lib, hayot uchun xavfli bo‘lmagan kasalliklarda 116 117 (Ärztlicher Bereitschaftsdienst) ga murojaat qilinadi.'
    },
    vocabulary: [
      {
        id: 'voc-b1-16-1',
        lessonId: 'les-66',
        levelCode: 'b1-2',
        german: 'die Notaufnahme',
        article: 'die',
        plural: 'die Notaufnahmen',
        uzbek: 'tez tibbiy yordam qabul bo‘limi',
        exampleDe: 'Der Rettungswagen brachte den Verletzten in die Notaufnahme.',
        exampleUz: 'Tez yordam mashinasi jarohatlanganni qabul bo‘limiga olib keldi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-16-2',
        lessonId: 'les-66',
        levelCode: 'b1-2',
        german: 'die Gehirnerschütterung',
        article: 'die',
        plural: 'die Gehirnerschütterungen',
        uzbek: 'miya chayqalishi',
        exampleDe: 'Nach dem Sturz wurde eine Gehirnerschütterung festgestellt.',
        exampleUz: 'Yiqilishdan so‘ng miya chayqalishi aniqlandi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-16-3',
        lessonId: 'les-66',
        levelCode: 'b1-2',
        german: 'das Bewusstsein',
        article: 'das',
        uzbek: 'ong, hush',
        exampleDe: 'Er verlor für einige Sekunden das Bewusstsein.',
        exampleUz: 'U bir necha soniyaga hushini yo‘qotdi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-16-4',
        lessonId: 'les-66',
        levelCode: 'b1-2',
        german: 'ansprechbar',
        article: null,
        uzbek: 'muloqotga layoqatli, o‘z hushida',
        exampleDe: 'Die Patientin ist stabil und voll ansprechbar.',
        exampleUz: 'Bemor barqaror va to‘liq o‘z hushida.',
        wordType: 'adjective'
      },
      {
        id: 'voc-b1-16-5',
        lessonId: 'les-66',
        levelCode: 'b1-2',
        german: 'die Diagnose',
        article: 'die',
        plural: 'die Diagnosen',
        uzbek: 'tashxis',
        exampleDe: 'Die genaue Diagnose wird nach der Untersuchung gestellt.',
        exampleUz: 'Aniq tashxis tekshiruvdan so‘ng qo‘yiladi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-16-6',
        lessonId: 'les-66',
        levelCode: 'b1-2',
        german: 'überweisen',
        article: null,
        uzbek: 'mutaxassisga yo‘naltirmoq (yo‘llanma)',
        exampleDe: 'Der Hausarzt überwies ihn an einen Kardiologen.',
        exampleUz: 'Oilaviy shifokor uni kardiologga yo‘naltirdi.',
        wordType: 'verb'
      },
      {
        id: 'voc-b1-16-7',
        lessonId: 'les-66',
        levelCode: 'b1-2',
        german: 'der Verband',
        article: 'der',
        plural: 'die Verbände',
        uzbek: 'bog‘lam, bint',
        exampleDe: 'Die Schwester wechselte täglich den Verband.',
        exampleUz: 'Hamshira har kuni bog‘lamni almashtirardi.',
        wordType: 'noun'
      },
      {
        id: 'voc-b1-16-8',
        lessonId: 'les-66',
        levelCode: 'b1-2',
        german: 'verschreiben',
        article: null,
        uzbek: 'retsept yozib bermoq',
        exampleDe: 'Der Arzt verschrieb ihm ein Schmerzmittel.',
        exampleUz: 'Shifokor unga og‘riq qoldiruvchi dori yozib berdi.',
        wordType: 'verb'
      }
    ],
    grammarDiscovery: {
      observationPromptUz: 'To‘g‘ridan-to‘g‘ri nutq bilan xabarlardagi bilvosita nutqni solishtiring:',
      discoveryExamples: [
        {
          german: 'Direkt: "Der Patient ist gesund."',
          highlight: 'ist',
          uzbek: 'To‘g‘ri nutq: "Bemor sog‘lom."'
        },
        {
          german: 'Indirekt: Der Arzt sagt, der Patient sei gesund.',
          highlight: 'sei',
          uzbek: 'Bilvosita nutq: Shifokor aytishicha, bemor sog‘lom emish.'
        }
      ],
      patternExplanationUz: 'Konjunktiv I uchinchi shaxs birlikda (er/sie/es): sein -> sei; haben -> habe; müssen -> müsse. Bu o‘zgalar nutqini xolis yetkazish uchun ishlatiladi.',
      ruleFormulaUz: '3. Person Singular Konjunktiv I: Stamm + -e (sei, habe, müsse)'
    },
    grammar: [
      {
        id: 'gra-66',
        lessonId: 'les-66',
        levelCode: 'b1-2',
        titleDe: 'Indirekte Rede mit Konjunktiv I',
        titleUz: 'Konjunktiv I orqali bilvosita nutq',
        summaryUz: 'Yangiliklar va xolis hisobotlarda o‘zgalar nutqini ifodalash: sei, habe, müsse.',
        explanationUz: `Boshqa birovning gapini xolis tarzda yetkazish uchun Konjunktiv I ishlatiladi:
- sein -> er **sei**
- haben -> er **habe**
- müssen -> er **müsse**
- können -> er **könne**`,
        tables: [
          {
            title: 'Konjunktiv I 3-shaxs birlik shakllari',
            headers: ['Fe‘l', 'Oddiy Präsens', 'Konjunktiv I', 'Misol'],
            rows: [
              ['sein', 'er ist', 'er sei', 'Die Klinik meldet, er sei stabil.'],
              ['haben', 'er hat', 'er habe', 'Er sagte, er habe keine Schmerzen.'],
              ['müssen', 'er muss', 'er müsse', 'Sie betonte, er müsse ruhen.']
            ]
          }
        ],
        examples: [
          {
            german: 'Der Sprecher teilte mit, die Operation sei erfolgreich verlaufen.',
            uzbek: 'Matbuot kotibi operatsiya muvaffaqiyatli o‘tganini ma‘lum qildi.',
            highlight: 'sei verlaufen'
          },
          {
            german: 'Die Ärztin betonte, der Patient brauche absolute Ruhe.',
            uzbek: 'Shifokor ayol bemorga mutlaq osoyishtalik kerakligini ta‘kidladi.',
            highlight: 'brauche'
          }
        ],
        commonMistakes: [
          {
            incorrect: 'Der Arzt sagt, er wäre gesund (im neutralen Bericht).',
            correct: 'Der Arzt sagt, er sei gesund.',
            explanationUz: 'Xolis hisobotlarda Konjunktiv I (sei) ishlatiladi.'
          }
        ]
      }
    ],
    listening3Stage: {
      titleDe: 'In der Notaufnahme',
      titleUz: 'Shoshilinch tibbiy yordam bo‘limida',
      situationUz: 'Kasalxonada tez yordam shifokori bemor haqida xabar bermoqda.',
      audioTranscriptDe: 'Notarzt: Schwester Anna, der Notdienst hat einen Patienten mit Verdacht auf Gehirnerschütterung gebracht.\nSchwester Anna: Was hat der Notarzt vor Ort berichtet?\nNotarzt: Er sagte, der Verunglückte habe kurz das Bewusstsein verloren, sei aber jetzt ansprechbar.\nSchwester Anna: Gut, wir bringen ihn sofort ins MRT.',
      translationUz: 'Notarzt: Hamshira Anna, tez yordam miya chayqalishi gumoni bilan bemor keltirdi.\nSchwester Anna: Voqea joyidagi shifokor nima dedi?\nNotarzt: Uning aytishicha, bemor qisqa vaqt hushini yo‘qotgan, ammo hozir o‘z hushida emish.\nSchwester Anna: Yaxshi, uni MRTga olib boramiz.',
      stage1Global: {
        instructionUz: '1-Bosqich: Bemor kasalxonaga qanday gumon bilan keltirildi?',
        questionUz: 'Bemor kasalxonaga qanday gumon bilan keltirildi?',
        options: ['Yurak xuruji bilan', 'Miya chayqalishi gumoni bilan', 'Oyog‘i singani sababli'],
        correctIndex: 1,
        explanationUz: 'Shifokor: "...mit Verdacht auf Gehirnerschütterung" deydi.'
      },
      stage2Detail: {
        instructionUz: '2-Bosqich: Bemorning holati qanday?',
        questions: [
          {
            id: 'l66-q1',
            questionUz: 'Bemor hozir o‘z hushidami?',
            options: ['Hali hushsiz', 'O‘ziga kelgan va gaplasha oladi (ansprechbar)', 'Uyiga ketgan'],
            correctIndex: 1,
            explanationUz: '"...sei aber jetzt ansprechbar" deb ma‘lum qilingan.'
          }
        ]
      },
      stage3Transcript: {
        dialogue: [
          { speaker: 'Notarzt', textDe: 'Er sagte, der Verunglückte sei ansprechbar.', textUz: 'Uning aytishicha, jarohatlangan kishi o‘z hushida emish.' },
          { speaker: 'Schwester', textDe: 'Wir bringen ihn sofort zur Untersuchung.', textUz: 'Uni tekshiruvga olib boramiz.' }
        ],
        keyVocabulary: [
          { german: 'ansprechbar', uzbek: 'muloqotga layoqatli' },
          { german: 'das Bewusstsein', uzbek: 'hush, ong' }
        ]
      }
    },
    reading: [
      {
        id: 'rea-66',
        lessonId: 'les-66',
        levelCode: 'b1-2',
        titleDe: 'Das deutsche Rettungswesen',
        titleUz: 'Germaniya tez yordam tizimi',
        textDe: 'Das Rettungswesen in Deutschland gilt als sehr effizient. Innerhalb von 10 bis 15 Minuten erreicht Hilfe den Einsatzort. Bei lebensbedrohlichen Notfällen wählt man die 112, während man bei leichten Beschwerden den Bereitschaftsdienst unter 116 117 anruft.',
        translationUz: 'Germaniyada qutqaruv tizimi juda samarali. 10-15 daqiqa ichida yordam yetib keladi. Hayot uchun xavfli holatlarda 112, yengil shikoyatlarda esa 116 117 ga qo‘ng‘iroq qilinadi.',
        vocabularyHints: [
          { german: 'der Notruf', uzbek: 'favqulodda qo‘ng‘iroq' },
          { german: 'lebensbedrohlich', uzbek: 'hayot uchun xavfli' }
        ],
        questions: [
          {
            id: 'q-rea-66-1',
            questionUz: 'Germaniyada hayot uchun xavfli bo‘lmagan kasalliklarda qaysi raqamga murojaat qilinadi?',
            options: ['110 (Politsiya)', '116 117 (Bereitschaftsdienst)', 'Faqat 112'],
            correctIndex: 1,
            explanationUz: 'Matnda: "bei leichten Beschwerden den Bereitschaftsdienst unter 116 117 anruft" deb yozilgan.'
          }
        ]
      }
    ],
    writing: {
      taskDe: 'Schreiben Sie einen kurzen Bericht (ca. 80-100 Wörter) über einen Erste-Hilfe-Kurs. Nutzen Sie Formen der indirekten Rede (sei, habe, müsse).',
      taskUz: 'Birinchi yordam kursi haqida qisqa hisobot yozing (taxminan 80-100 so‘z). Bilvosita nutq shakllaridan (sei, habe, müsse) foydalaning.',
      instructionUz: 'Kamida 2 ta Konjunktiv I shaklini qo‘llang.',
      hints: ['Der Ausbilder betonte, man müsse zuerst 112 anrufen.', 'Er erklärte, Ruhe sei entscheidend.'],
      sampleSolutionDe: 'Letzten Samstag besuchte ich einen Erste-Hilfe-Kurs. Unser Ausbilder betonte, im Ernstfall sei Ruhe das Wichtigste. Zuerst müsse man die Unfallstelle absichern und sofort den Notruf 112 wählen. Viele Menschen hätten Angst, etwas falsch zu machen, aber nichts zu tun sei der einzige wirkliche Fehler. Dieser Kurs hat mir viel Sicherheit gegeben.',
      scaffold: {
        openingDe: 'Am vergangenen Wochenende besuchte ich einen Kurs...',
        closingDe: 'Ich bin der Meinung, dass jeder diese Kenntnisse auffrischen sollte.',
        usefulPhrasesDe: ['Er erklärte, man müsse...', 'Ruhe sei das Wichtigste', 'Im Notfall zählt jede Sekunde']
      }
    },
    shadowing: [
      {
        id: 'sha-66',
        lessonId: 'les-66',
        levelCode: 'b1-2',
        sentenceDe: 'Die Sprecherin teilte mit, der Patient sei außer Lebensgefahr und erhole sich gut.',
        translationUz: 'Notiq ma‘lum qilishicha, bemorning hayotiga xavf yo‘q va u yaxshi tuzalmoqda emish.',
        phoneticHint: '[Di Shpreh-he-rin tayl-te mit, der Pa-tsient zay au-ser Leh-bens-ge-fahr und er-hol-te zih gut]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-66-q1',
        type: 'fill-blank',
        questionUz: 'Indirekte Rede uchun to‘g‘ri Konjunktiv I shaklini tanlang: "Die Zeitung meldet, der Minister _____ gestern in Berlin eingetroffen."',
        blankSentence: 'Die Zeitung meldet, der Minister [blank] gestern in Berlin eingetroffen.',
        options: ['sei', 'ist', 'war', 'wäre'],
        correctAnswer: 'sei',
        explanationUz: '3. Person Singular Konjunktiv I (sein) = sei.',
        mistakeTipUz: '❌ Xabarlar tilida: sei eingetroffen.'
      },
      {
        id: 'prac-66-q2',
        type: 'multiple-choice',
        questionUz: '"Der Arzt sagt, der Kranke müsse im Bett bleiben" gapi nimani bildiradi?',
        options: [
          'Shifokor aytyaptiki, kasal to‘shakda yotishi shart emish (shifokor so‘zi yetkazilmoqda).',
          'Shifokor o‘zi to‘shakda yotishni xohlamoqda.',
          'Bemor tuzalib ketgan va sayrga chiqishi mumkin.'
        ],
        correctAnswer: 'Shifokor aytyaptiki, kasal to‘shakda yotishi shart emish (shifokor so‘zi yetkazilmoqda).',
        explanationUz: 'müsse - Konjunktiv I (müssen fe‘lining bilvosita nutq shakli).',
        mistakeTipUz: '❌ müsse = u shart emish.'
      },
      {
        id: 'prac-66-q3',
        type: 'word-order',
        questionUz: 'Bilvosita nutq gapini to‘g‘ri tartibda tuzing:',
        scrambledWords: ['sei', 'Der', 'dass', 'berichtete', 'alles', 'in', 'Polizist', 'Ordnung'],
        correctAnswer: 'Der Polizist berichtete dass alles in Ordnung sei',
        explanationUz: 'Der Polizist (1) + berichtete (2), + dass (3) + alles (4) + in Ordnung (5) + sei (6).',
        mistakeTipUz: '❌ dass ergash gapida fe‘l (sei) oxirida bo‘ladi.'
      }
    ]
  }
];
