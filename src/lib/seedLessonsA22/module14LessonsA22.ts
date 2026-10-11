import { Lesson } from '../../types/database';

export const MODULE_14_A22_LESSONS: Lesson[] = [
  // ==========================================
  // LEKTION 40: Arztbesuch und Notfall
  // ==========================================
  {
    id: 'les-40',
    moduleId: 'mod-a2-2-2',
    levelCode: 'a2-2',
    titleDe: 'Lektion 40: Arztbesuch und Notfall',
    titleUz: '40-Dars: Shifokor qabuli va tez yordam (So‘roq so‘zli bilvosita savollar)',
    descriptionUz: 'Shifokor qabuli, kasallik varaqasi (Krankschreibung), dorilar retsepti va so‘roq so‘zlar (wie, was, wann) bilan ergash gapli bilvosita savollar.',
    orderIndex: 40,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Shifokor qabulida alomatlar va og‘riqlarni aniq tushuntirish',
      'Bilvosita so‘roq gaplarda (Der Arzt fragt, was mir fehlt) fe‘l tartibini to‘g‘ri qo‘llash',
      'Dorixonada retsept asosida dori sotib olish'
    ],
    warmUp: {
      situationUz: 'O‘zingizni yomon his qilyapsiz, haroratingiz ko‘tarildi va poliklinikaga (Arztpraxis) bordingiz.',
      curiosityQuestionUz: '"Shifokor mendan qachondan beri tomoq og‘rig‘i borligini so‘ramoqda" nemischa qanday aytiladi?',
      miniDialogue: [
        { speaker: 'Arzthelferin', textDe: 'Was fehlt Ihnen denn?', textUz: 'Sizni nima bezovta qilyapti?' },
        { speaker: 'Patient', textDe: 'Ich habe starkes Fieber und Halsschmerzen.', textUz: 'Menda yuqori harorat va tomoq og‘rig‘i bor.' }
      ],
      hintUz: '"Der Arzt fragt, wie lange ich schon krank bin" — so‘roq so‘zidan keyin fe‘l oxirida turadi!'
    },
    contextDialogue: {
      titleDe: 'In der Arztpraxis',
      titleUz: 'Shifokor xonasida',
      situationUz: 'Jasur umumiy amaliyot shifokori doktor Vagner qabulida.',
      lines: [
        { speaker: 'Dr. Wagner', textDe: 'Guten Tag, Herr Rahimov. Nehmen Sie bitte Platz. Was fehlt Ihnen denn?', textUz: 'Xayrli kun, janob Rahimov. Marhamat, o‘tiring. Qayeringiz og‘riyapti?' },
        { speaker: 'Jasur', textDe: 'Guten Tag, Herr Doktor. Ich fühle mich seit zwei Tagen schlapp, habe Husten und hohes Fieber.', textUz: 'Xayrli kun, doktor. Ikki kundan beri o‘zimni holsiz sezyapman, yo‘tal va yuqori haroratim bor.' },
        { speaker: 'Dr. Wagner', textDe: 'Lassen Sie mich mal Ihren Hals untersuchen... Ja, er ist stark gerötet. Sie haben eine Grippe.', textUz: 'Qani tomog‘ingizni ko‘rib qo‘yaychi... Ha, juda qizarib ketgan. Sizda gripp.' },
        { speaker: 'Jasur', textDe: 'Brauche ich Antibiotika?', textUz: 'Menga antibiotik kerakmi?' },
        { speaker: 'Dr. Wagner', textDe: 'Nein, das ist ein virushafter Infekt. Ich verschreibe Ihnen fiebersenkende Tabletten und einen Hustensaft.', textUz: 'Yo‘q, bu virusli infeksiya. Sizga isitma tushiruvchi tabletkalar va yo‘tal siropi yozib beraman.' },
        { speaker: 'Jasur', textDe: 'Können Sie mir bitte auch eine Krankschreibung für meinen Arbeitgeber geben?', textUz: 'Ish beruvchim uchun kasallik varaqasi (byulleten) ham bera olasizmi?' },
        { speaker: 'Dr. Wagner', textDe: 'Selbstverständlich. Ich schreibe Sie bis Freitag krank. Bleiben Sie im Bett und trinken Sie viel Tee!', textUz: 'Albatta. Sizga jumagacha kasallik varaqasi yozaman. To‘shakda dam oling va ko‘p choy iching!' }
      ],
      usefulPhrases: [
        { german: 'Was fehlt Ihnen?', uzbek: 'Qayeringiz bezovta qilyapti?' },
        { german: 'ein Medikament verschreiben', uzbek: 'dori yozib bermoq (retsept)' },
        { german: 'die Krankschreibung (AU-Bescheinigung)', uzbek: 'kasallik varaqasi (byulleten)' },
        { german: 'Gute Besserung!', uzbek: 'Tezroq shifo toping!' }
      ],
      culturalNoteUz: 'Germaniyada ishga borolmaslik holatida qonun bo‘yicha odatda 3-kundan kechiktirmay shifokorning rasmiy kasallik varaqasi (elektron eAU orqali sug‘urta va ishxonaga) yuboriladi.'
    },
    vocabulary: [
      {
        id: 'voc-m14-1',
        lessonId: 'les-40',
        levelCode: 'a2-2',
        german: 'die Praxis',
        article: 'die',
        plural: 'die Praxen',
        uzbek: 'shifokor qabulxonasi, poliklinika',
        exampleDe: 'Die Praxis ist heute bis 18 Uhr geöffnet.',
        exampleUz: 'Shifokor qabulxonasi bugun soat 18 gacha ochiq.',
        wordType: 'noun'
      },
      {
        id: 'voc-m14-2',
        lessonId: 'les-40',
        levelCode: 'a2-2',
        german: 'das Rezept',
        article: 'das',
        plural: 'die Rezepte',
        uzbek: 'dori retsepti',
        exampleDe: 'Der Arzt gibt mir ein Rezept für die Apotheke.',
        exampleUz: 'Shifokor menga dorixona uchun retsept bermoqda.',
        wordType: 'noun'
      },
      {
        id: 'voc-m14-3',
        lessonId: 'les-40',
        levelCode: 'a2-2',
        german: 'die Krankschreibung',
        article: 'die',
        plural: 'die Krankschreibungen',
        uzbek: 'kasallik varaqasi (byulleten)',
        exampleDe: 'Ich brauche eine Krankschreibung für die Arbeit.',
        exampleUz: 'Menga ish uchun kasallik varaqasi kerak.',
        wordType: 'noun'
      },
      {
        id: 'voc-m14-4',
        lessonId: 'les-40',
        levelCode: 'a2-2',
        german: 'untersuchen',
        article: null,
        plural: null,
        uzbek: 'tibbiy ko‘rikdan o‘tkazmoq',
        exampleDe: 'Der Arzt untersucht den Patienten gründlich.',
        exampleUz: 'Shifokor bemorni sinchkovlik bilan tekshirmoqda.',
        wordType: 'verb'
      },
      {
        id: 'voc-m14-5',
        lessonId: 'les-40',
        levelCode: 'a2-2',
        german: 'verschreiben',
        article: null,
        plural: null,
        uzbek: 'retsept yozib bermoq',
        exampleDe: 'Er verschreibt mir starke Schmerzmittel.',
        exampleUz: 'U menga kuchli og‘riq qoldiruvchi dorilar yozib beryapti.',
        wordType: 'verb'
      },
      {
        id: 'voc-m14-6',
        lessonId: 'les-40',
        levelCode: 'a2-2',
        german: 'der Notfall',
        article: 'der',
        plural: 'die Notfälle',
        uzbek: 'favqulodda holat, shoshilinch vaziyat',
        exampleDe: 'Im Notfall wählen Sie die 112.',
        exampleUz: 'Favqulodda vaziyatda 112 raqamini tering.',
        wordType: 'noun'
      }
    ],
    grammar: [
      {
        id: 'gra-m14-1',
        lessonId: 'les-40',
        levelCode: 'a2-2',
        titleDe: 'Indirekte Fragesätze mit Fragewort (So‘roq so‘zli bilvosita savollar)',
        titleUz: 'wie, wo, was, wann bilan bilvosita savollar',
        summaryUz: 'W-savollarni bilvosita ifodalaganda, so‘roq so‘zi bog‘lovchi vazifasini o‘taydi va fe‘l gapning eng oxiriga suriladi.',
        explanationUz: `Shifokor bilan suhbatda ko‘pincha kimdir nima so‘ragani bilvosita aytiladi:

1. **To‘g‘ridan-to‘g‘ri savol (Direkte Frage):**
- *Wie lange haben Sie schon Fieber?* (Qanchadan beri isitmalayapsiz?)
- *Welche Medikamente nehmen Sie?* (Qanday dorilar ichyapsiz?)

2. **Bilvosita savol (Indirekte Frage):**
- *Der Arzt fragt mich, **wie lange** ich schon Fieber **habe**.*
- *Ich möchte wissen, **welche** Medikamente ich nehmen **soll**.*

Eslab qoling:
- So‘roq belgisi (?) faqat bosh gap savol bo‘lsa qo‘yiladi (*Können Sie mir sagen, wann...?*).
- Agar bosh gap darak bo‘lsa (*Der Arzt fragt, was...*), gap oxirida nuqta qo‘yiladi.`,
        tables: [
          {
            title: 'W-savol va Bilvosita savol qiyosi',
            headers: ['To‘g‘ridan-to‘g‘ri savol', 'Bilvosita shakl (fe‘l oxirida)'],
            rows: [
              ['Was tut Ihnen weh?', 'Der Arzt fragt, was mir wehtut.'],
              ['Wann kann ich wieder arbeiten?', 'Ich frage, wann ich wieder arbeiten kann.'],
              ['Wie oft soll ich die Tabletten nehmen?', 'Er erklärt, wie oft ich die Tabletten nehmen soll.']
            ]
          }
        ],
        examples: [
          {
            german: 'Der Arzt möchte wissen, was mir wehtut.',
            uzbek: 'Shifokor qayerim og‘riyotganini bilmoqchi.',
            highlight: 'was mir wehtut'
          },
          {
            german: 'Können Sie mir sagen, wie oft ich die Tropfen nehmen soll?',
            uzbek: 'Tomchilarni necha mahal ichishim kerakligini ayta olasizmi?',
            highlight: 'wie oft ... nehmen soll'
          }
        ]
      }
    ],
    listening: [
      {
        id: 'lis-m14-1',
        lessonId: 'les-40',
        levelCode: 'a2-2',
        titleDe: 'In der Apotheke',
        titleUz: 'Dorixonada',
        transcriptDe: 'Guten Tag! Ich habe hier ein Rezept von Dr. Wagner.\nGuten Tag! Einen Moment bitte... Ja, hier sind Ihre Tabletten gegen die Halsschmerzen. Nehmen Sie bitte dreimal täglich eine Tablette nach dem Essen mit viel Wasser ein. Und hier ist der Hustensaft: einmal abends vor dem Schlafen.\nMuss ich etwas dazu zahlen?\nNein, das Rezept ist gebührenfrei. Gute Besserung!',
        translationUz: 'Xayrli kun! Menda doktor Vagnerdan retsept bor.\nXayrli kun! Bir daqiqa... Mana tomoq og‘rig‘iga qarshi tabletkalaringiz. Iltimos, ovqatdan keyin ko‘p suv bilan kuniga uch mahal bittadan iching. Mana yo‘tal siropi: kechqurun uxlashdan oldin bir mahal.\nQo‘shimcha to‘lov qilishim kerakmi?\nYo‘q, retsept bepul. Tezroq shifo toping!',
        dialogue: [
          { speaker: 'Apothekerin', textDe: 'Nehmen Sie dreimal täglich eine Tablette nach dem Essen ein.', textUz: 'Kuniga uch mahal ovqatdan keyin bittadan tabletka iching.' }
        ],
        questions: [
          {
            id: 'q-lis-m14-1',
            questionUz: 'Tabletkalarni kuniga necha mahal ichish kerak?',
            options: ['Kuniga uch mahal ovqatdan keyin (dreimal täglich)', 'Faqat ertalab bir marta', 'Har soatda'],
            correctIndex: 0,
            explanationUz: 'Farmatsevt "dreimal täglich eine Tablette nach dem Essen" deb ko‘rsatma berdi.'
          }
        ]
      }
    ],
    reading: [
      {
        id: 'read-m14-1',
        lessonId: 'les-40',
        levelCode: 'a2-2',
        titleDe: 'Notfallnummern in Deutschland',
        titleUz: 'Germaniyada favqulodda telefon raqamlari',
        textDe: 'Wichtige Notfallnummern in Deutschland:\n\n- 112: Notruf für Feuerwehr und Rettungsdienst bei lebensgefährlichen Notfällen (z.B. Herzinfarkt, schwerer Unfall).\n- 110: Polizei bei Verbrechen oder Gefahren.\n- 116 117: Ärztlicher Bereitschaftsdienst, wenn Sie nachts oder am Wochenende dringend einen Arzt brauchen, es aber kein lebensgefährlicher Notfall ist.\n- Apothekennotdienst: Welche Apotheke nachts geöffnet hat, erfahren Sie online oder an der Tür jeder Apotheke.',
        textUz: 'Germaniyada muhim favqulodda raqamlar:\n\n- 112: Hayot uchun xavfli holatlarda (masalan, infarkt, og‘ir avariya) o‘t o‘chirish va tez tibbiy yordam.\n- 110: Jinoyat yoki xavf yuzaga kelganda politsiya.\n- 116 117: Tunda yoki dam olish kunlarida shoshilinch shifokor kerak bo‘lganda navbatchi tibbiy xizmat (hayot uchun bevosita xavf bo‘lmaganda).\n- Navbatchi dorixona: Tunda qaysi dorixona ochiqligini onlayn yoki har qanday dorixona eshigidagi e‘londan bilib olishingiz mumkin.',
        questions: [
          {
            id: 'q-read-m14-1',
            questionUz: 'Dam olish kunlari favqulodda bo‘lmagan shifokor ko‘rigi uchun qaysi raqamga qo‘ng‘iroq qilinadi?',
            options: ['116 117 (Ärztlicher Bereitschaftsdienst)', '112', '110'],
            correctIndex: 0,
            explanationUz: 'Matnda keltirilganidek, dam olish kunlari navbatchi shifokor raqami 116 117.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-m14-1',
      lessonId: 'les-40',
      levelCode: 'a2-2',
      taskDe: 'Schreiben Sie eine E-Mail an Ihren Arbeitgeber, dass Sie krank sind.',
      taskUz: 'Ish beruvchingizga kasal bo‘lib qolganingiz haqida elektron xat yozing.',
      instructionUz: 'Necha kun kela olmasligingizni va shifokor varaqasini yuborishingizni ma‘lum qiling.',
      hints: ['Ich bin leider krank...', 'Der Arzt hat mich bis... krankgeschrieben.'],
      sampleSolutionDe: 'Sehr geehrte Frau Sommer, ich bin leider erkrankt und kann heute nicht zur Arbeit kommen. Der Arzt hat mich bis einschließlich Freitag krankgeschrieben. Das ärztliche Attest sende ich Ihnen im Anhang. Mit freundlichen Grüßen, Jasur Rahimov',
      scaffold: {
        openingDe: 'Sehr geehrte Damen und Herren,',
        closingDe: 'Mit freundlichen Grüßen, Jasur',
        usefulPhrasesDe: ['Ich bin leider krank...', 'Die Krankschreibung sende ich...']
      }
    },
    shadowing: [
      {
        id: 'sha-m14-1',
        lessonId: 'les-40',
        levelCode: 'a2-2',
        sentenceDe: 'Der Arzt hat mich gründlich untersucht und bis Freitag krankgeschrieben.',
        translationUz: 'Shifokor meni sinchiklab tekshirdi va jumagacha kasallik varaqasi berdi.',
        phoneticHint: '[Der Artst hat mih gryunt-lih un-ter-zuht unt bis Fray-tag krank-ge-shri-ben]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-m14-1-q1',
        type: 'word-order',
        questionUz: 'Bilvosita savolni to‘g‘ri tuzing (fe‘l oxirida!):',
        scrambledWords: ['fragt,', 'Arzt', 'Der', 'mir', 'fehlt.', 'was'],
        correctAnswer: 'Der Arzt fragt, was mir fehlt.',
        explanationUz: 'Der Arzt fragt, (bosh gap) + was mir fehlt (fe‘l oxirida).',
        mistakeTipUz: '❌ Ergash gapda fe‘l oxirida: "was mir fehlt".'
      },
      {
        id: 'prac-m14-1-q2',
        type: 'fill-blank',
        questionUz: 'To‘g‘ri so‘roq bog‘lovchisini qo‘ying: "Ich weiß nicht, _____ lange die Praxis geöffnet ist."',
        blankSentence: 'Ich weiß nicht, [blank] lange die Praxis geöffnet ist.',
        options: ['wie', 'was', 'wo', 'wer'],
        correctAnswer: 'wie',
        explanationUz: '"Qancha vaqt davomida" ma‘nosida "wie lange" ishlatiladi.',
        mistakeTipUz: '❌ "wie lange" = qancha vaqt.'
      },
      {
        id: 'prac-m14-1-q3',
        type: 'multiple-choice',
        questionUz: 'Qaysi gap to‘g‘ri tuzilgan?',
        options: [
          'Er möchte wissen, wann der Arzt kommt.',
          'Er möchte wissen, wann kommt der Arzt.',
          'Er möchte wissen, dass der Arzt kommt.',
          'Er möchte wissen, wann der Arzt kommen.'
        ],
        correctAnswer: 'Er möchte wissen, wann der Arzt kommt.',
        explanationUz: 'Bilvosita savolda fe‘l "kommt" eng oxirida turadi.',
        mistakeTipUz: '❌ "wann kommt der Arzt" noto‘g‘ri. Fe‘l oxiriga suriladi: "wann der Arzt kommt".'
      }
    ]
  },

  // ==========================================
  // LEKTION 41: Gesunde Ernährung und Lebensstil
  // ==========================================
  {
    id: 'les-41',
    moduleId: 'mod-a2-2-2',
    levelCode: 'a2-2',
    titleDe: 'Lektion 41: Gesunde Ernährung und Lebensstil',
    titleUz: '41-Dars: Sog‘lom ovqatlanish va turmush tarzi (Infinitiv mit "zu")',
    descriptionUz: 'To‘g‘ri ovqatlanish, vitaminlar, bio mahsulotlar va fe‘llarning infinitiv konstruksiyasi (Es ist wichtig, Sport zu treiben / Ich habe Zeit, gesund zu kochen).',
    orderIndex: 41,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Sog‘lom parhez va foydali odatlarni nemis tilida tasvirlash',
      '"zu" bilan keluvchi infinitiv gaplarni to‘g‘ri tuza olish',
      'Maslahat va tavsiyalarni chiroyli shakllantirish'
    ],
    warmUp: {
      situationUz: 'Salomatlik va tetiklik sirlari haqida o‘rtoqlashyapsiz: ko‘proq suv ichish va kamroq shakar iste‘mol qilish.',
      curiosityQuestionUz: '"Kuniga kamida ikki litr suv ichish juda muhim" nemis tilida qanday aytiladi?',
      miniDialogue: [
        { speaker: 'Trainer', textDe: 'Was ist das Geheimnis für mehr Energie?', textUz: 'Ko‘proq quvvatga ega bo‘lish siri nima?' },
        { speaker: 'Sportler', textDe: 'Es ist wichtig, genug Wasser zu trinken und frisch zu kochen.', textUz: 'Yetarlicha suv ichish va yangi taom pishirish juda muhim.' }
      ],
      hintUz: '"Es ist wichtig, ... zu trinken" — ajraladigan fe‘llarda "zu" o‘rtaga kiradi: "aufzustehen"!'
    },
    contextDialogue: {
      titleDe: 'Gesund leben im Alltag',
      titleUz: 'Kundalik hayotda sog‘lom yashash',
      situationUz: 'Zilola va uning dugonasi Anna sog‘lom taomlanish va sport haqida suhbatlashmoqda.',
      lines: [
        { speaker: 'Anna', textDe: 'Zilola, du siehst so fit und voller Energie aus! Was machst du?', textUz: 'Zilola, shunchalik baquvvat va quvvatga to‘la ko‘rinyapsan! Nima qilyapsan?' },
        { speaker: 'Zilola', textDe: 'Ich habe beschlossen, meinen Lebensstil komplett zu ändern. Ich versuche, jeden Tag frisch zu kochen.', textUz: 'Men turmush tarzimni butunlay o‘zgartirishga qaror qildim. Har kuni yangi mahsulotlardan ovqat pishirishga harakat qilyapman.' },
        { speaker: 'Anna', textDe: 'Hast du denn Zeit, nach der Arbeit zu kochen?', textUz: 'Ishdan keyin ovqat pishirishga vaqting bormi?' },
        { speaker: 'Zilola', textDe: 'Ja, es macht mir sogar Spaß, neue Rezepte auszuprobieren. Und ich habe aufgehört, zuckerhaltige Getränke zu trinken.', textUz: 'Ha, yangi retseptlarni sinab ko‘rish menga hatto zavq bag‘ishlaydi. Va shakarli ichimliklar ichishni to‘xtatdim.' },
        { speaker: 'Anna', textDe: 'Das ist toll! Ich habe auch vor, mehr Sport zu treiben.', textUz: 'Bu ajoyib! Men ham ko‘proq sport bilan shug‘ullanishni niyat qilganman.' },
        { speaker: 'Zilola', textDe: 'Es ist gar nicht so schwer, gesund zu leben. Man muss nur anfangen!', textUz: 'Sog‘lom yashash umuman qiyin emas. Faqat boshlash kerak!' }
      ],
      usefulPhrases: [
        { german: 'beschließen, etwas zu tun', uzbek: 'biror narsa qilishga qaror qilmoq' },
        { german: 'versuchen, gesund zu leben', uzbek: 'sog‘lom yashashga harakat qilmoq' },
        { german: 'Spaß machen, zu...', uzbek: '...qilish maroqli bo‘lmoq' },
        { german: 'vorhaben, mehr Sport zu treiben', uzbek: 'ko‘proq sport bilan shug‘ullanishni rejalashtirmoq' }
      ],
      culturalNoteUz: 'Germaniyada organik va bio mahsulotlar (Bio-Lebensmittel) juda qadrlanadi. Deyarli har bir supermarketda maxsus "Bio" bo‘limi mavjud.'
    },
    vocabulary: [
      {
        id: 'voc-m14-7',
        lessonId: 'les-41',
        levelCode: 'a2-2',
        german: 'die Ernährung',
        article: 'die',
        plural: null,
        uzbek: 'ovqatlanish, oziqlanish',
        exampleDe: 'Eine gesunde Ernährung ist wichtig.',
        exampleUz: 'Sog‘lom ovqatlanish juda muhim.',
        wordType: 'noun'
      },
      {
        id: 'voc-m14-8',
        lessonId: 'les-41',
        levelCode: 'a2-2',
        german: 'die Zutat',
        article: 'die',
        plural: 'die Zutaten',
        uzbek: 'masalliq, tarkibiy qism',
        exampleDe: 'Wir brauchen frische Zutaten.',
        exampleUz: 'Bizga yangi masalliqlar kerak.',
        wordType: 'noun'
      },
      {
        id: 'voc-m14-9',
        lessonId: 'les-41',
        levelCode: 'a2-2',
        german: 'beschließen',
        article: null,
        plural: null,
        uzbek: 'qaror qilmoq, niyat qilmoq',
        exampleDe: 'Ich habe beschlossen, mehr Sport zu treiben.',
        exampleUz: 'Men ko‘proq sport bilan shug‘ullanishga qaror qildim.',
        wordType: 'verb'
      },
      {
        id: 'voc-m14-10',
        lessonId: 'les-41',
        levelCode: 'a2-2',
        german: 'versuchen',
        article: null,
        plural: null,
        uzbek: 'harakat qilmoq, urinib ko‘rmoq',
        exampleDe: 'Versuchen Sie, weniger Zucker zu essen.',
        exampleUz: 'Kamroq shakar yeyishga harakat qiling.',
        wordType: 'verb'
      },
      {
        id: 'voc-m14-11',
        lessonId: 'les-41',
        levelCode: 'a2-2',
        german: 'fettarm',
        article: null,
        plural: null,
        uzbek: 'kam yog‘li',
        exampleDe: 'Fettarmer Joghurt ist gesund.',
        exampleUz: 'Kam yog‘li yogurt foydalidir.',
        wordType: 'adjective'
      },
      {
        id: 'voc-m14-12',
        lessonId: 'les-41',
        levelCode: 'a2-2',
        german: 'verzichten',
        article: null,
        plural: null,
        uzbek: 'voz kechmoq, tiyilmoq (+ auf Akk)',
        exampleDe: 'Ich verzichte auf Fast Food.',
        exampleUz: 'Men tezpishar ovqatlardan tiyilaman.',
        wordType: 'verb'
      }
    ],
    grammar: [
      {
        id: 'gra-m14-2',
        lessonId: 'les-41',
        levelCode: 'a2-2',
        titleDe: 'Infinitiv mit "zu" (Infinitiv konstruksiyasi)',
        titleUz: 'Fe‘lning "zu" yuklamasi bilan qo‘llanishi',
        summaryUz: 'Ma‘lum iboralar (Es ist wichtig..., Ich habe Zeit..., Ich versuche...) dan keyin ikkinchi fe‘l gap oxirida "zu + Infinitiv" shaklida keladi.',
        explanationUz: `Nemis tilida ikkinchi fe‘l birinchi fe‘lga tobe bo‘lganda, u gap oxirida **"zu"** bilan ishlatiladi:

1. **Sifatli iboralardan keyin:**
- *Es ist gesund, viel Obst **zu essen**.* (Ko‘p meva yeyish foydalidir.)
- *Es ist schwer, früh **aufzustehen**.* (Erta turish qiyin.)

2. **Otli iboralardan keyin (Zeit, Lust, Angst haben):**
- *Ich habe keine Zeit, heute **zu kochen**.* (Bugun ovqat qilishga vaqtim yo‘q.)
- *Hast du Lust, ins Kino **zu gehen**?* (Kinoga borishga xohishing bormi?)

3. **Ayrim fe‘llardan keyin (versuchen, anfangen, aufhören, planen):**
- *Ich versuche, Deutsch **zu lernen**.*
- *Er plant, in Deutschland **zu studieren**.*

Muhim qoida (ajraladigan fe‘llar):
- "zu" prefiks va o‘zak o‘rtasiga tushadi:
  aufstehen → **aufzustehen**, einkaufen → **einzukaufen**, mitmachen → **mitzumachen**.

DIQQAT: Modal fe‘llar (können, müssen, wollen...) va gehen, sehen, hören dan keyin "zu" ISHLATILMAYDI!`,
        tables: [
          {
            title: 'Infinitiv mit "zu" namunalari',
            headers: ['Bosh ibora', 'O‘rtadagi bo‘laklar', 'zu + Infinitiv (gap oxirida)'],
            rows: [
              ['Es ist wichtig,', 'jeden Tag Wasser', 'zu trinken.'],
              ['Ich habe keine Zeit,', 'Sport', 'zu treiben.'],
              ['Er fängt an,', 'früh', 'aufzustehen.'],
              ['Wir planen,', 'ein Haus', 'zu kaufen.']
            ]
          }
        ],
        examples: [
          {
            german: 'Es ist verboten, hier zu rauchen.',
            uzbek: 'Bu yerda chekish taqiqlangan.',
            highlight: 'hier zu rauchen'
          },
          {
            german: 'Ich habe vergessen, die Milch einzukaufen.',
            uzbek: 'Sut sotib olishni unutibman.',
            highlight: 'einzukaufen'
          }
        ]
      }
    ],
    listening: [
      {
        id: 'lis-m14-2',
        lessonId: 'les-41',
        levelCode: 'a2-2',
        titleDe: 'Gesundheitstipps im Radio',
        titleUz: 'Radioda salomatlik maslahatlari',
        transcriptDe: 'Willkommen zu unserem Gesundheitsmagazin! Heute sprechen wir über kleine Gewohnheiten mit großer Wirkung. Erstens: Versuchen Sie, mindestens sieben Stunden pro Nacht zu schlafen. Zweitens: Es ist ratsam, auf zuckerhaltige Snacks zu verzichten und stattdessen Nüsse zu essen. Und drittens: Nehmen Sie öfter die Treppe statt den Aufzug!',
        translationUz: 'Salomatlik jurnalimizga xush kelibsiz! Bugun katta ta‘sirga ega kichik odatlar haqida gaplashamiz. Birinchidan: Kechasi kamida yetti soat uxlashga harakat qiling. Ikkinchidan: Shakarli shirinliklardan tiyilib, o‘rniga yong‘oqlar iste‘mol qilish maqsadga muvofiqdir. Uchinchidan: Lift o‘rniga tez-tez zinapoyadan foydalaning!',
        dialogue: [
          { speaker: 'Radiomoderator', textDe: 'Versuchen Sie, mindestens sieben Stunden pro Nacht zu schlafen.', textUz: 'Kechasi kamida yetti soat uxlashga harakat qiling.' }
        ],
        questions: [
          {
            id: 'q-lis-m14-2',
            questionUz: 'Ekspert kechasi kamida necha soat uxlashni tavsiya qilmoqda?',
            options: ['Kamida yetti soat (mindestens sieben Stunden)', 'To‘rt soat', 'O‘n soat'],
            correctIndex: 0,
            explanationUz: 'Radioda "mindestens sieben Stunden pro Nacht zu schlafen" deb tavsiya etildi.'
          }
        ]
      }
    ],
    reading: [
      {
        id: 'read-m14-2',
        lessonId: 'les-41',
        levelCode: 'a2-2',
        titleDe: 'Die 5-am-Tag-Regel',
        titleUz: 'Kuniga 5 ta qoidasi',
        textDe: 'Ernährungswissenschaftler in Deutschland empfehlen die einfache "5-am-Tag"-Regel: Essen Sie täglich fünf Portionen Obst und Gemüse — idealerweise drei Portionen Gemüse und zwei Portionen Obst. Frische Produkte liefern wichtige Vitamine, Mineralstoffe und Ballaststoffe. Es ist leicht, diese Regel in den Alltag zu integrieren: ein Apfel als Snack, Tomaten zum Mittagessen und ein bunter Salat am Abend!',
        textUz: 'Germaniyadagi parhezshunoslar oddiy "kuniga 5 ta" qoidasini tavsiya etadilar: Har kuni besh porsiya meva va sabzavot iste‘mol qiling — ideal holda uch porsiya sabzavot va ikki porsiya meva. Yangi mahsulotlar muhim vitaminlar, minerallar va kletchatka beradi. Ushbu qoidani kun tartibiga kiritish oson: gazak sifatida olma, tushlikda pomidor va kechqurun rang-barang salat!',
        questions: [
          {
            id: 'q-read-m14-2',
            questionUz: 'Qoidaga ko‘ra kuniga necha porsiya sabzavot va meva yeyish tavsiya qilinadi?',
            options: ['5 porsiya (3 sabzavot, 2 meva)', '10 porsiya', 'Faqat 1 ta meva'],
            correctIndex: 0,
            explanationUz: 'Matnda "täglich fünf Portionen Obst und Gemüse" deyilgan.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-m14-2',
      lessonId: 'les-41',
      levelCode: 'a2-2',
      taskDe: 'Schreiben Sie drei Sätze mit "Es ist wichtig, ... zu..." oder "Ich habe vor, ... zu...".',
      taskUz: '"Es ist wichtig, ... zu..." yoki "Ich habe vor, ... zu..." konstruksiyasi bilan 3 ta gap yozing.',
      instructionUz: 'Sog‘lom turmush tarzi rejalaringizni bayon qiling.',
      hints: ['Es ist gesund, ... zu trinken.', 'Ich habe vor, mehr Sport zu treiben.'],
      sampleSolutionDe: 'Es ist wichtig, täglich viel Wasser zu trinken. Ich versuche, jeden Abend gesund zu kochen. Ich habe vor, am Wochenende im Park joggen zu gehen.',
      scaffold: {
        openingDe: 'Meine Gesundheitsregeln:',
        closingDe: 'Gesundheit ist das Wichtigste!',
        usefulPhrasesDe: ['Es ist wichtig, ... zu...', 'Ich habe vor, ... zu...']
      }
    },
    shadowing: [
      {
        id: 'sha-m14-2',
        lessonId: 'les-41',
        levelCode: 'a2-2',
        sentenceDe: 'Es ist wichtig, sich gesund zu ernähren und jeden Tag genug Wasser zu trinken.',
        translationUz: 'Sog‘lom ovqatlanish va har kuni yetarlicha suv ichish juda muhimdir.',
        phoneticHint: '[Es ist vih-tih, zih ge-zunt tsu er-nê-ren unt ye-den Tag ge-nuk Vas-ser tsu trin-ken]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-m14-2-q1',
        type: 'word-order',
        questionUz: 'Infinitiv konstruksiyasini to‘g‘ri tuzing (zu + fe‘l oxirida!):',
        scrambledWords: ['Es', 'ist', 'gesund,', 'trinken.', 'Wasser', 'viel', 'zu'],
        correctAnswer: 'Es ist gesund, viel Wasser zu trinken.',
        explanationUz: 'Es ist gesund, (bosh gap) + viel Wasser + zu trinken (oxirida).',
        mistakeTipUz: '❌ "zu trinken" doimo gapning eng oxirida turadi.'
      },
      {
        id: 'prac-m14-2-q2',
        type: 'fill-blank',
        questionUz: 'Ajraladigan fe‘lda "zu" qayerga qo‘yiladi? "Es ist schwer, früh _____."',
        blankSentence: 'Es ist schwer, früh [blank].',
        options: ['aufzustehen', 'zu aufstehen', 'aufstehen zu', 'aufgestanden'],
        correctAnswer: 'aufzustehen',
        explanationUz: 'Ajraladigan fe‘llarda "zu" prefiks va o‘zak o‘rtasiga tushadi: auf-zu-stehen.',
        mistakeTipUz: '❌ Ajraladigan fe‘lda: aufzustehen.'
      },
      {
        id: 'prac-m14-2-q3',
        type: 'multiple-choice',
        questionUz: 'Qaysi holatda "zu" ISHLATILMAYDI?',
        options: [
          'Modal fe‘llardan keyin (Ich kann Deutsch sprechen)',
          'Es ist wichtig... dan keyin',
          'Ich habe Lust... dan keyin',
          'Ich plane... dan keyin'
        ],
        correctAnswer: 'Modal fe‘llardan keyin (Ich kann Deutsch sprechen)',
        explanationUz: 'Modal fe‘llar (können, müssen, dürfen, wollen, sollen) "zu" talab qilmaydi.',
        mistakeTipUz: '❌ Modal fe‘ldan keyin "zu" qo‘yilmaydi: Ich kann sprechen.'
      }
    ]
  },

  // ==========================================
  // LEKTION 42: Entspannung und Stressbewältigung
  // ==========================================
  {
    id: 'les-42',
    moduleId: 'mod-a2-2-2',
    levelCode: 'a2-2',
    titleDe: 'Lektion 42: Entspannung und Stressbewältigung',
    titleUz: '42-Dars: Dam olish va stressni yengish ("brauchen ... zu" inkor bilan)',
    descriptionUz: 'Ishdagi stressdan qutulish, xordiq chiqarish, sog‘lom uyqu va inkor bilan qo‘llanuvchi "nicht brauchen ... zu" (kerak emas / shart emas) qoidasi.',
    orderIndex: 42,
    estimatedMinutes: 25,
    isPublished: true,
    objectivesUz: [
      'Stress va hordiq chiqarish usullarini nemis tilida ifodalash',
      '"nicht brauchen ... zu" (qilish shart emas) konstruksiyasini to‘g‘ri qo‘llash',
      'Dam olish kunlarini samarali rejalashtirish'
    ],
    warmUp: {
      situationUz: 'Do‘stingiz ish sababli juda xavotirda. Siz unga: "Xavotir olishing shart emas, hammasi yaxshi bo‘ladi" demoqchisiz.',
      curiosityQuestionUz: '"Xavotirlanishga hojat yo‘q" nemischa qanday aytiladi?',
      miniDialogue: [
        { speaker: 'Freund', textDe: 'Ich habe Angst vor der Prüfung morgen.', textUz: 'Ertangi imtihondan qo‘rqyapman.' },
        { speaker: 'Mentor', textDe: 'Du brauchst dir keine Sorgen zu machen, du hast gut gelernt!', textUz: 'Xavotir olishingga hojat yo‘q, sen yaxshi tayyorlangansan!' }
      ],
      hintUz: '"nicht brauchen ... zu" xuddi "nicht müssen" (majbur emassan) ma‘nosini beradi!'
    },
    contextDialogue: {
      titleDe: 'Ein entspanntes Wochenende',
      titleUz: 'Orom baxsh etuvchi dam olish kunlari',
      situationUz: 'Farrux va Maksimilian ish haftasidan keyin qanday dam olish haqida fikr almashmoqda.',
      lines: [
        { speaker: 'Farrux', textDe: 'Uff, diese Arbeitswoche war unglaublich anstrengend. Ich bin total erschöpft.', textUz: 'Uff, bu ish haftasi aql bovar qilmas darajada charchatdi. Men butunlay holdan toydim.' },
        { speaker: 'Maksimilian', textDe: 'Das verstehe ich gut. Aber jetzt ist Wochenende! Du brauchst heute an keine Arbeit mehr zu denken.', textUz: 'Buni yaxshi tushunaman. Lekin endi dam olish kuni! Bugun ish haqida o‘ylashingga hech qanday hojat yo‘q.' },
        { speaker: 'Farrux', textDe: 'Stimmt. Morgen schlafe ich erst mal richtig aus. Ich brauche den Wecker gar nicht zu stellen.', textUz: 'To‘g‘ri. Ertaga avvalo yaxshilab to‘yib uxlayman. Budilnik qo‘yishimga ham hojat yo‘q.' },
        { speaker: 'Maksimilian', textDe: 'Genau! Und am Nachmittag können wir in die Therme fahren und in der Sauna entspannen.', textUz: 'Xuddi shunday! Tushdan keyin termal kurortga borib, saunada dam olishimiz mumkin.' },
        { speaker: 'Farrux', textDe: 'Das klingt herrlich! Ein Tag Wellness ist genau das, was ich jetzt brauche.', textUz: 'Bu ajoyib eshitilyapti! Bir kunlik relaks aynan hozir menga kerak bo‘lgan narsa.' }
      ],
      usefulPhrases: [
        { german: 'total erschöpft sein', uzbek: 'butunlay holdan toygan bo‘lmoq' },
        { german: 'ausschlafen', uzbek: 'to‘yib uxlamoq' },
        { german: 'sich entspannen / erholen', uzbek: 'dam olmoq / o‘ziga kelmoq' },
        { german: 'Du brauchst dir keine Sorgen zu machen.', uzbek: 'Xavotir olmasang ham bo‘ladi.' }
      ],
      culturalNoteUz: 'Germaniyada dam olish kunlari termal hovuzlar va saunalar (Thermen und Saunalandschaften) juda ommabop. Odamlar jismoniy va ruhiy tetiklik uchun bir necha soatni suv muolajalarida o‘tkazadilar.'
    },
    vocabulary: [
      {
        id: 'voc-m14-13',
        lessonId: 'les-42',
        levelCode: 'a2-2',
        german: 'die Entspannung',
        article: 'die',
        plural: null,
        uzbek: 'dam olish, hordiq, relaks',
        exampleDe: 'Musik hilft mir bei der Entspannung.',
        exampleUz: 'Musiqa menga dam olishda yordam beradi.',
        wordType: 'noun'
      },
      {
        id: 'voc-m14-14',
        lessonId: 'les-42',
        levelCode: 'a2-2',
        german: 'der Stress',
        article: 'der',
        plural: null,
        uzbek: 'stress, asabiylik',
        exampleDe: 'Ich versuche, Stress zu reduzieren.',
        exampleUz: 'Men stressni kamaytirishga harakat qilaman.',
        wordType: 'noun'
      },
      {
        id: 'voc-m14-15',
        lessonId: 'les-42',
        levelCode: 'a2-2',
        german: 'die Erholung',
        article: 'die',
        plural: null,
        uzbek: 'hordiq chiqarish, kuch to‘plash',
        exampleDe: 'Ein Spaziergang im Wald ist reine Erholung.',
        exampleUz: 'O‘rmonda sayr qilish sof hordiqdir.',
        wordType: 'noun'
      },
      {
        id: 'voc-m14-16',
        lessonId: 'les-42',
        levelCode: 'a2-2',
        german: 'ausschlafen',
        article: null,
        plural: null,
        uzbek: 'to‘yib uxlamoq',
        exampleDe: 'Am Sonntag kann ich endlich ausschlafen.',
        exampleUz: 'Yakshanba kuni nihoyat to‘yib uxlay olaman.',
        wordType: 'verb'
      },
      {
        id: 'voc-m14-17',
        lessonId: 'les-42',
        levelCode: 'a2-2',
        german: 'anstrengend',
        article: null,
        plural: null,
        uzbek: 'charchatadigan, og‘ir',
        exampleDe: 'Der Tag war sehr anstrengend.',
        exampleUz: 'Kun juda charchatuvchi bo‘ldi.',
        wordType: 'adjective'
      },
      {
        id: 'voc-m14-18',
        lessonId: 'les-42',
        levelCode: 'a2-2',
        german: 'die Pause',
        article: 'die',
        plural: 'die Pausen',
        uzbek: 'tanaffus',
        exampleDe: 'Wir machen jetzt eine kurze Pause.',
        exampleUz: 'Hozir qisqa tanaffus qilamiz.',
        wordType: 'noun'
      }
    ],
    grammar: [
      {
        id: 'gra-m14-3',
        lessonId: 'les-42',
        levelCode: 'a2-2',
        titleDe: 'nicht brauchen + zu + Infinitiv',
        titleUz: '"brauchen ... zu" inkor bilan (Hojat yo‘q / Shart emas)',
        summaryUz: '"brauchen" fe‘li inkor (nicht, kein, nur) bilan kelganda "kerak emas / shart emas" ma‘nosini ifodalaydi va "zu + Infinitiv" talab qiladi.',
        explanationUz: `"brauchen" fe‘li inkorda xuddi "nicht müssen" (majbur emassan) bilan bir xil ma‘noda qo‘llanadi.
Biroq qoidaga ko‘ra, undan keyin **"zu + Infinitiv"** bo‘lishi shart!

Formulalar:
- **Subyekt + brauchen + nicht / kein ... + zu + Infinitiv.**
- *Du **brauchst** heute **nicht zu kochen**.* (Bugun ovqat pishirishing shart emas.)
- *Sie **brauchen** sich **keine Sorgen zu machen**.* (Xavotir olishingizga hojat yo‘q.)
- *Du **brauchst nur** den Knopf **zu drücken**.* (Faqatgina tugmani bosishing kifoya.)

Eslab qoling:
- "brauchen" fe‘li "nicht" bilan kelmasa, bu ma‘noda ishlatilmaydi!
- Nemischa mashhur maqol: *"Wer 'brauchen' ohne 'zu' gebraucht, braucht 'brauchen' gar nicht zu gebrauchen!"*`,
        tables: [
          {
            title: 'nicht müssen vs. nicht brauchen ... zu',
            headers: ['nicht müssen (modal)', 'nicht brauchen + zu + Infinitiv', 'O‘zbekcha ma‘nosi'],
            rows: [
              ['Du musst nicht warten.', 'Du brauchst nicht zu warten.', 'Kutishing shart emas.'],
              ['Ich muss nicht arbeiten.', 'Ich brauche nicht zu arbeiten.', 'Ishlashimga hojat yo‘q.'],
              ['Er muss keine Angst haben.', 'Er braucht keine Angst zu haben.', 'Qo‘rqishiga hojat yo‘q.']
            ]
          }
        ],
        examples: [
          {
            german: 'Du brauchst mich morgen nicht vom Bahnhof abzuholen.',
            uzbek: 'Ertaga meni vokzaldan kutib olishing shart emas.',
            highlight: 'brauchst ... nicht ... abzuholen'
          },
          {
            german: 'Wir brauchen uns nicht zu beeilen, wir haben viel Zeit.',
            uzbek: 'Shoshilishimizga hojat yo‘q, vaqtimiz ko‘p.',
            highlight: 'brauchen uns nicht zu beeilen'
          }
        ]
      }
    ],
    listening: [
      {
        id: 'lis-m14-3',
        lessonId: 'les-42',
        levelCode: 'a2-2',
        titleDe: 'Tipps gegen Alltagsstress',
        titleUz: 'Kundalik stressga qarshi maslahatlar',
        transcriptDe: 'Hallo zusammen! Wenn Sie nach der Arbeit nach Hause kommen, brauchen Sie nicht sofort die Hausarbeit zu erledigen. Gönnen Sie sich zuerst eine halbe Stunde Ruhe. Schalten Sie das Smartphone aus und trinken Sie in Ruhe eine Tasse Tee. Sie brauchen sich nicht zu stressen — der Haushalt kann warten!',
        translationUz: 'Hammaga salom! Ishdan uyga qaytganingizda darhol uy ishlariga kirishishingiz shart emas. Avval o‘zingizga yarim soat orom bering. Smartfonni o‘chiring va xotirjamlik bilan bir piyola choy iching. Asabiylashishingizga hojat yo‘q — uy ishlari kutib tura oladi!',
        dialogue: [
          { speaker: 'Psychologe', textDe: 'Sie brauchen sich nicht zu stressen. Gönnen Sie sich zuerst etwas Ruhe.', textUz: 'Asabiylashishingizga hojat yo‘q. Avval o‘zingizga biroz orom bering.' }
        ],
        questions: [
          {
            id: 'q-lis-m14-3',
            questionUz: 'Ishdan qaytgach birinchi navbatda nima qilish tavsiya etildi?',
            options: ['O‘ziga yarim soat orom berish (eine halbe Stunde Ruhe)', 'Darhol uy tozalash', 'Telefon o‘ynash'],
            correctIndex: 0,
            explanationUz: 'Ekspert "Gönnen Sie sich zuerst eine halbe Stunde Ruhe" deb maslahat berdi.'
          }
        ]
      }
    ],
    reading: [
      {
        id: 'read-m14-3',
        lessonId: 'les-42',
        levelCode: 'a2-2',
        titleDe: 'Waldbaden — Der neue Trend aus Japan',
        titleUz: 'O‘rmon vannasi — Yaponiyadan yangi trend',
        textDe: '"Waldbaden" (auf Japanisch Shinrin Yoku) bedeutet, achtsam und ohne Eile durch den Wald zu gehen. Man braucht keine spezielle Ausrüstung und man braucht nicht sportlich zu sein. Wissenschaftler haben herausgefunden: Schon 20 Minuten im Wald senken den Blutdruck und reduzieren Stresshormone. Die frische Luft und das Grün der Bäume beruhigen Körper und Geist.',
        textUz: '"O‘rmon vannasi" (yaponcha Shinrin Yoku) — o‘rmonda shoshilmasdan, har bir lahzani his qilib sayr qilishni anglatadi. Maxsus anjomlar kerak emas va sportchi bo‘lish ham shart emas. Olimlar aniqlashicha: O‘rmonda atigi 20 daqiqa bo‘lish qon bosimini tushiradi va stress gormonlarini kamaytiradi. Toza havo va daraxtlarning yashilligi tana va ruhni tinchlantiradi.',
        questions: [
          {
            id: 'q-read-m14-3',
            questionUz: 'O‘rmonda sayr qilish uchun qancha vaqt ham ijobiy ta‘sir ko‘rsatadi?',
            options: ['Atigi 20 daqiqa (Schon 20 Minuten)', 'Kamida 5 soat', 'Butun kun'],
            correctIndex: 0,
            explanationUz: 'Matnda "Schon 20 Minuten im Wald senken den Blutdruck" deb aytilgan.'
          }
        ]
      }
    ],
    writing: {
      id: 'wri-m14-3',
      lessonId: 'les-42',
      levelCode: 'a2-2',
      taskDe: 'Geben Sie einem gestressten Freund Ratschläge mit "Du brauchst nicht ... zu...".',
      taskUz: 'Stressga tushgan do‘stingizga "Du brauchst nicht ... zu..." konstruksiyasi bilan maslahat bering.',
      instructionUz: 'Nimalarni qilishga hojat yo‘qligini va qanday dam olishni tavsiya qiling.',
      hints: ['Du brauchst dir keine Sorgen zu machen.', 'Du brauchst heute nicht zu kochen.'],
      sampleSolutionDe: 'Lieber Markus, du brauchst dir keine Sorgen wegen der Arbeit zu machen. Heute brauchst du nicht zu kochen, wir können einfach eine Pizza bestellen. Entspann dich und schlaf dich am Wochenende aus!',
      scaffold: {
        openingDe: 'Lieber Markus,',
        closingDe: 'Dein Freund Aziz',
        usefulPhrasesDe: ['Du brauchst nicht zu...', 'Du brauchst dir keine Sorgen zu machen...']
      }
    },
    shadowing: [
      {
        id: 'sha-m14-3',
        lessonId: 'les-42',
        levelCode: 'a2-2',
        sentenceDe: 'Du brauchst dir keine Sorgen zu machen, am Wochenende können wir uns richtig erholen.',
        translationUz: 'Xavotirlanishingga hojat yo‘q, dam olish kunlari yaxshilab hordiq chiqara olamiz.',
        phoneticHint: '[Du brauhst dir kay-ne Zor-gen tsu ma-xen, am Vo-xen-en-de kön-nen vir uns rih-tih er-ho-len]',
        orderIndex: 1
      }
    ],
    practice: [
      {
        id: 'prac-m14-3-q1',
        type: 'word-order',
        questionUz: '"brauchen ... zu" gapini to‘g‘ri tuzing:',
        scrambledWords: ['zu', 'Du', 'warten.', 'nicht', 'brauchst'],
        correctAnswer: 'Du brauchst nicht zu warten.',
        explanationUz: 'Du brauchst (1) + nicht (2) + zu warten (oxirida).',
        mistakeTipUz: '❌ "zu warten" doimo gap oxirida turadi: Du brauchst nicht zu warten.'
      },
      {
        id: 'prac-m14-3-q2',
        type: 'fill-blank',
        questionUz: 'To‘g‘ri shaklni qo‘ying: "Sie brauchen sich keine Sorgen _____."',
        blankSentence: 'Sie brauchen sich keine Sorgen [blank].',
        options: ['zu machen', 'machen', 'gemacht', 'machten'],
        correctAnswer: 'zu machen',
        explanationUz: '"brauchen" inkor bilan kelganda "zu + Infinitiv" (zu machen) talab qiladi.',
        mistakeTipUz: '❌ "brauchen" bilan "zu" bo‘lishi shart: zu machen.'
      },
      {
        id: 'prac-m14-3-q3',
        type: 'multiple-choice',
        questionUz: '"Ertaga erta turishing shart emas" gapi qaysi?',
        options: [
          'Du brauchst morgen nicht früh aufzustehen.',
          'Du brauchst morgen nicht früh aufstehen.',
          'Du brauchst morgen nicht früh zu aufstehen.',
          'Du musst morgen früh aufstehen.'
        ],
        correctAnswer: 'Du brauchst morgen nicht früh aufzustehen.',
        explanationUz: 'Ajraladigan fe‘lda "zu" o‘rtaga kiradi: aufzustehen.',
        mistakeTipUz: '❌ Ajraladigan fe‘lda: aufzustehen.'
      }
    ]
  }
];
