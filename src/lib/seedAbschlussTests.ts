import { ExerciseItem } from '../types/database';

export interface AbschlussTestData {
  levelCode: string;
  titleDe: string;
  titleUz: string;
  descriptionUz: string;
  totalQuestions: number;
  passingScore: number;
  exercises: ExerciseItem[];
}

export const ABSCHLUSS_TESTS: Record<string, AbschlussTestData> = {
  'a1-1': {
    levelCode: 'a1-1',
    titleDe: 'A1.1 Abschluss-Test (Niveauprüfung A1.1)',
    titleUz: 'A1.1 Bosqich Yakuniy Imtihoni',
    descriptionUz: 'A1.1 darajasidagi barcha 4 ta modul (12 ta dars: Tanishuv, Buyumlar va xarid, Yegulik va xobbi, Vaqt va uy-joy) bo‘yicha keng qamrovli yakuniy bilim tekshiruvi. O‘tish bali: kamida 80%.',
    totalQuestions: 8,
    passingScore: 80,
    exercises: [
      {
        id: 'ab-a1-1-q1',
        type: 'multiple-choice',
        questionUz: '"Men Germaniyadan kelganman va hozir Toshkentda yashayman" gapining to‘g‘ri shaklini tanlang:',
        options: [
          'Ich komme aus Deutschland und wohne in Taschkent.',
          'Ich wohne aus Deutschland und komme in Taschkent.',
          'Ich bin Deutschland und heiße Taschkent.',
          'Ich komme in Deutschland und wohne aus Taschkent.'
        ],
        correctAnswer: 'Ich komme aus Deutschland und wohne in Taschkent.',
        explanationUz: 'Kelib chiqish uchun "kommen aus", yashash joyi uchun "wohnen in" ishlatiladi.',
        mistakeTipUz: '❌ Mamlakatdan kelish uchun "aus", shaharda yashash uchun esa "in" ishlatiladi.'
      },
      {
        id: 'ab-a1-1-q2',
        type: 'word-order',
        questionUz: 'Gapni to‘g‘ri so‘z tartibida tuzing (Fe‘l 2-o‘rinda kelishi shart!):',
        scrambledWords: ['Um', 'Uhr', 'frühstücke', 'acht', 'ich'],
        correctAnswer: 'Um acht Uhr frühstücke ich',
        explanationUz: 'V2 qoidasi: Um acht Uhr (1) + frühstücke (2) + ich (3).',
        mistakeTipUz: '❌ Vaqt iborasi gap boshida kelsa, fe‘l darhol undan keyin (2-o‘rinda) turadi: Um acht Uhr frühstücke ich.'
      },
      {
        id: 'ab-a1-1-q3',
        type: 'fill-blank',
        questionUz: '"sein" fe‘lining to‘g‘ri shaklini qo‘ying: "Woher _____ ihr?"',
        blankSentence: 'Woher [blank] ihr?',
        options: ['seid', 'sind', 'bist', 'ist'],
        correctAnswer: 'seid',
        explanationUz: '"ihr" (sizlar) uchun "sein" fe‘li "seid" bo‘ladi.',
        mistakeTipUz: '❌ "ihr" uchun "seid" ishlatiladi: ihr seid.'
      },
      {
        id: 'ab-a1-1-q4',
        type: 'multiple-choice',
        questionUz: '"Mening akam bor, lekin singlim yo‘q" qanday ifodalanadi? (Akkusativ qoidasi)',
        options: [
          'Ich habe einen Bruder, aber keine Schwester.',
          'Ich habe ein Bruder, aber kein Schwester.',
          'Ich habe der Bruder, aber nicht Schwester.',
          'Ich bin einen Bruder, aber keine Schwester.'
        ],
        correctAnswer: 'Ich habe einen Bruder, aber keine Schwester.',
        explanationUz: '"haben" Akkusativ talab qiladi: der Bruder -> einen Bruder; die Schwester -> keine Schwester.',
        mistakeTipUz: '❌ Akkusativda erkak jinsi "einen", ayol jinsidagi inkor esa "keine" bo‘ladi.'
      },
      {
        id: 'ab-a1-1-q5',
        type: 'multiple-choice',
        questionUz: 'Qahvaxonada xushmuomala buyurtma berish iborasi qaysi?',
        options: [
          'Ich möchte bitte einen Tee.',
          'Ich will der Tee haben sofort.',
          'Gib mir ein Tee.',
          'Ich trinke der Tee bitte.'
        ],
        correctAnswer: 'Ich möchte bitte einen Tee.',
        explanationUz: '"Ich möchte bitte..." xushmuomala buyurtma andozasidir.',
        mistakeTipUz: '❌ Madaniy va tabiiy nemis tilida "Ich möchte bitte..." qo‘llaniladi.'
      },
      {
        id: 'ab-a1-1-q6',
        type: 'multiple-choice',
        questionUz: '"Bugun kechqurun vaqting bormi?" savoli qanday beriladi?',
        options: [
          'Hast du heute Abend Zeit?',
          'Bist du heute Abend Zeit?',
          'Haben Sie heute morgen spät?',
          'Machst du heute Abend Zeit?'
        ],
        correctAnswer: 'Hast du heute Abend Zeit?',
        explanationUz: 'Vaqtga ega bo‘lish uchun "Zeit haben" iborasi ishlatiladi: "Hast du... Zeit?"',
        mistakeTipUz: '❌ Nemis tilida vaqt bor-yo‘qligini so‘rashda "haben" fe‘li ishlatiladi: Hast du Zeit?'
      },
      {
        id: 'ab-a1-1-q7',
        type: 'fill-blank',
        questionUz: '"können" modal fe‘lining "wir" shaklini qo‘ying: "Wir _____ gut Deutsch sprechen."',
        blankSentence: 'Wir [blank] gut Deutsch sprechen.',
        options: ['können', 'kannst', 'kann', 'könnt'],
        correctAnswer: 'können',
        explanationUz: '"wir" uchun modal fe‘l infinitiv shaklida bo‘ladi: "wir können".',
        mistakeTipUz: '❌ "wir" bilan "können" bo‘ladi: wir können.'
      },
      {
        id: 'ab-a1-1-q8',
        type: 'multiple-choice',
        questionUz: '"es gibt" iborasi qaysi kelishikni talab qiladi?',
        options: [
          'Akkusativ (tushum kelishigi: der -> den/einen)',
          'Dativ (jo‘nalish kelishigi)',
          'Nominativ (bosh kelishik)',
          'Genitiv (qaratqich kelishigi)'
        ],
        correctAnswer: 'Akkusativ (tushum kelishigi: der -> den/einen)',
        explanationUz: '"es gibt" dan keyin doimo Akkusativ keladi: Es gibt einen Supermarkt.',
        mistakeTipUz: '❌ "es gibt" iborasidan keyin doimo Akkusativ kelishi shart.'
      }
    ]
  },

  'a1-2': {
    levelCode: 'a1-2',
    titleDe: 'A1.2 Abschluss-Test (Niveauprüfung A1.2)',
    titleUz: 'A1.2 Bosqich Yakuniy Imtihoni',
    descriptionUz: 'A1.2 darajasidagi barcha 4 ta modul (12 ta dars: Shaharda yo‘l topish, Salomatlik, Uy jihozlash va ish, Rejalar va o‘tgan zamon Perfekt) bo‘yicha keng qamrovli sinov.',
    totalQuestions: 8,
    passingScore: 80,
    exercises: [
      {
        id: 'ab-a1-2-q1',
        type: 'multiple-choice',
        questionUz: 'Ajraladigan fe‘l (trennbare Verben): "aufstehen" (uyg‘onmoq/o‘rnidan turmoq) fe‘lining gapdagi to‘g‘ri o‘rni qaysi?',
        options: [
          'Ich stehe jeden Tag um 7 Uhr auf.',
          'Ich aufstehe jeden Tag um 7 Uhr.',
          'Ich stehe auf jeden Tag um 7 Uhr.',
          'Jeden Tag aufstehe ich um 7 Uhr.'
        ],
        correctAnswer: 'Ich stehe jeden Tag um 7 Uhr auf.',
        explanationUz: 'Ajraladigan old qo‘shimcha (auf-) gapning eng oxiriga tushadi: stehe ... auf.',
        mistakeTipUz: '❌ Ajraladigan fe‘llarda old qo‘shimcha (auf, an, ab, aus, mit) gapning ENG OXIRIGA boradi.'
      },
      {
        id: 'ab-a1-2-q2',
        type: 'multiple-choice',
        questionUz: '"mit" (bilan) predlogi qaysi kelishikni talab qiladi? ("der Bus")',
        options: [
          'mit dem Bus (Dativ)',
          'mit den Bus (Akkusativ)',
          'mit der Bus (Nominativ)',
          'mit ein Bus'
        ],
        correctAnswer: 'mit dem Bus (Dativ)',
        explanationUz: '"mit" doimo Dativ talab qiladi. "der Bus" -> "dem Bus".',
        mistakeTipUz: '❌ "mit" predlogidan keyin doimo DATIV keladi: der Bus -> mit dem Bus.'
      },
      {
        id: 'ab-a1-2-q3',
        type: 'multiple-choice',
        questionUz: '"weil" (chunki) bog‘lovchisi gapdagi fe‘lni qayerga suradi?',
        options: [
          'Gapning eng oxiriga (tuslangan shaklda)',
          'Gapning ikkinchi o‘rniga',
          'Gapning eng boshiga',
          'Hech qayerga surmaydi, o‘rni o‘zgarmaydi'
        ],
        correctAnswer: 'Gapning eng oxiriga (tuslangan shaklda)',
        explanationUz: '"weil" ergash gap yasaydi va tuslangan fe‘lni gapning eng oxiriga suradi: "... weil ich Deutsch lerne."',
        mistakeTipUz: '❌ "weil" bog‘lovchisidan keyin tuslangan fe‘l qat‘iy ravishda gapning eng oxiriga boradi.'
      },
      {
        id: 'ab-a1-2-q4',
        type: 'word-order',
        questionUz: 'Perfekt (o‘tgan zamon) gapini to‘g‘ri tartibda tuzing:',
        scrambledWords: ['habe', 'Gestern', 'ich', 'gearbeitet'],
        correctAnswer: 'Gestern habe ich gearbeitet',
        explanationUz: 'Inversiya va Perfekt qoidasi: Gestern (1) + habe (2) + ich (3) + gearbeitet (oxirida).',
        mistakeTipUz: '❌ Perfektda yordamchi fe‘l (habe/bin) 2-o‘rinda, Partizip II (gearbeitet) esa gap oxirida keladi.'
      },
      {
        id: 'ab-a1-2-q5',
        type: 'multiple-choice',
        questionUz: 'Qaysi fe‘l Perfektda "sein" yordamchi fe‘li bilan yasaladi?',
        options: [
          'gehen (harakat, bir joydan ikkinchi joyga siljish)',
          'essen (yemoq)',
          'kaufen (sotib olmoq)',
          'machen (qilmoq)'
        ],
        correctAnswer: 'gehen (harakat, bir joydan ikkinchi joyga siljish)',
        explanationUz: 'Bir joydan boshqa joyga ko‘chish fe‘llari (gehen, fahren, kommen) Perfektda "sein" oladi: "Ich bin gegangen".',
        mistakeTipUz: '❌ Harakat va siljish fe‘llari (gehen, fahren, fliegen) "sein" yordamchi fe‘lini oladi.'
      },
      {
        id: 'ab-a1-2-q6',
        type: 'multiple-choice',
        questionUz: 'Shifokorga borib "Mening boshim og‘riyapti" deb qanday aytiladi?',
        options: [
          'Mein Kopf tut weh.',
          'Ich habe kein Kopf.',
          'Mein Kopf ist kaputt.',
          'Ich bin Kopfweh machen.'
        ],
        correctAnswer: 'Mein Kopf tut weh.',
        explanationUz: '"weh tun" iborasi og‘riqni bildiradi: "Mein Kopf tut weh" yoki "Ich habe Kopfschmerzen".',
        mistakeTipUz: '❌ Nemis tilida tana a‘zosi og‘riganda "... tut weh" iborasi ishlatiladi.'
      },
      {
        id: 'ab-a1-2-q7',
        type: 'fill-blank',
        questionUz: '"müssen" (majbur bo‘lmoq) modal fe‘lini "er" shaxsida qo‘ying: "Er _____ heute lange arbeiten."',
        blankSentence: 'Er [blank] heute lange arbeiten.',
        options: ['muss', 'musst', 'müssen', 'müsst'],
        correctAnswer: 'muss',
        explanationUz: '"er/sie/es" uchun "müssen" modal fe‘li "muss" bo‘ladi (ich muss, er muss).',
        mistakeTipUz: '❌ Modal fe‘llarda 1-shaxs (ich) va 3-shaxs (er/sie/es) shakllari bir xil bo‘ladi: ich muss, er muss.'
      },
      {
        id: 'ab-a1-2-q8',
        type: 'multiple-choice',
        questionUz: 'Kvartira mebellari joylashuvi: "Kitob stol ustida turibdi (qayerda? - Dativ)" jumlasi qaysi? ("der Tisch")',
        options: [
          'Das Buch liegt auf dem Tisch.',
          'Das Buch liegt auf den Tisch.',
          'Das Buch liegt auf der Tisch.',
          'Das Buch ist auf Tisch.'
        ],
        correctAnswer: 'Das Buch liegt auf dem Tisch.',
        explanationUz: '"Wo?" (qayerda?) savoliga Wechselpräposition "auf" Dativ talab qiladi: der Tisch -> auf dem Tisch.',
        mistakeTipUz: '❌ "Qayerda?" (Wo?) savoliga Wechselpräpositionlar Dativ oladi: der Tisch -> auf dem Tisch.'
      }
    ]
  },

  'a2-1': {
    levelCode: 'a2-1',
    titleDe: 'A2.1 Abschluss-Test (Niveauprüfung A2.1)',
    titleUz: 'A2.1 Bosqich Yakuniy Imtihoni',
    descriptionUz: 'A2.1 darajasidagi barcha 4 ta modul (12 ta dars: Ish va kasb, Sayohat va transport, Media va qiyoslash, Bayramlar va nisbiy gaplar) bo‘yicha kompleks yakuniy test. O‘tish bali: kamida 80%.',
    totalQuestions: 8,
    passingScore: 80,
    exercises: [
      {
        id: 'ab-a2-1-q1',
        type: 'fill-blank',
        questionUz: '"müssen" modal fe‘lining Präteritum (o‘tgan zamon) shaklini qo‘ying: "Gestern _____ ich bis 20 Uhr im Büro arbeiten."',
        blankSentence: 'Gestern [blank] ich bis 20 Uhr im Büro arbeiten.',
        options: ['musste', 'musstest', 'muss', 'gemusst'],
        correctAnswer: 'musste',
        explanationUz: 'müssen fe‘lining "ich" shaxsi uchun Präteritum shakli umlautsiz "musste" bo‘ladi.',
        mistakeTipUz: '❌ Präteritumda modal fe‘llar umlautsiz tuslanadi: ich musste, er musste.'
      },
      {
        id: 'ab-a2-1-q2',
        type: 'multiple-choice',
        questionUz: '"weil" (chunki) bog‘lovchisi bilan to‘g‘ri tuzilgan gapni toping:',
        options: [
          'Ich lerne Deutsch, weil ich in Deutschland arbeiten will.',
          'Ich lerne Deutsch, weil will ich in Deutschland arbeiten.',
          'Ich lerne Deutsch, weil ich will in Deutschland arbeiten.',
          'Ich lerne Deutsch, weil in Deutschland ich arbeiten will.'
        ],
        correctAnswer: 'Ich lerne Deutsch, weil ich in Deutschland arbeiten will.',
        explanationUz: '"weil" ergash gapida tuslanuvchi fe‘l (will) gapning eng oxirida keladi.',
        mistakeTipUz: '❌ Ergash gapda tuslanuvchi yordamchi yoki modal fe‘l eng oxirgi o‘ringa suriladi: weil ich ... arbeiten will.'
      },
      {
        id: 'ab-a2-1-q3',
        type: 'multiple-choice',
        questionUz: '"sich freuen" (xursand bo‘lmoq) o‘zlik fe‘lining "wir" shaxsidagi shakli qaysi?',
        options: [
          'Wir freuen uns über die guten Nachrichten.',
          'Wir freuen euch über die guten Nachrichten.',
          'Wir freuen sich über die guten Nachrichten.',
          'Wir freuen mich über die guten Nachrichten.'
        ],
        correctAnswer: 'Wir freuen uns über die guten Nachrichten.',
        explanationUz: '"wir" kishilik olmoshiga mos keluvchi Akkusativdagi o‘zlik olmoshi "uns" dir (wir freuen uns).',
        mistakeTipUz: '❌ "wir" uchun o‘zlik olmoshi doimo "uns" bo‘ladi: Wir freuen uns.'
      },
      {
        id: 'ab-a2-1-q4',
        type: 'multiple-choice',
        questionUz: 'Bilvosita ha/yo‘q savolini "ob" (..mi yoki yo‘q) bilan madaniy tuzing:',
        options: [
          'Können Sie mir sagen, ob das Museum heute geöffnet ist?',
          'Können Sie mir sagen, ob ist das Museum heute geöffnet?',
          'Können Sie mir sagen, ob das Museum ist heute geöffnet?',
          'Können Sie mir sagen, dass das Museum heute geöffnet ist?'
        ],
        correctAnswer: 'Können Sie mir sagen, ob das Museum heute geöffnet ist?',
        explanationUz: '"ob" ergash gapida tuslangan fe‘l (ist) gapning eng oxiriga boradi.',
        mistakeTipUz: '❌ "ob" bog‘lovchisidan keyin fe‘l gap oxiriga suriladi: ob das Museum heute geöffnet ist.'
      },
      {
        id: 'ab-a2-1-q5',
        type: 'fill-blank',
        questionUz: 'Noaniq artikldan keyin sifat turlanishi (Nominativ Maskulin): "Hier ist ein _____ (schön) Park."',
        blankSentence: 'Hier ist ein [blank] Park.',
        options: ['schöner', 'schöne', 'schönen', 'schönes'],
        correctAnswer: 'schöner',
        explanationUz: 'Noaniq artiklda (ein) erkak jinsi bosh kelishikda -er qo‘shimchasini oladi: ein schöner Park.',
        mistakeTipUz: '❌ ein + der (maskulin) sifatga -er beradi: ein schöner Tag/Park.'
      },
      {
        id: 'ab-a2-1-q6',
        type: 'multiple-choice',
        questionUz: '"vor" (oldin) predlogi bilan to‘g‘ri Dativ birikmasini tanlang: (die Reise)',
        options: [
          'vor der Reise',
          'vor die Reise',
          'vor den Reise',
          'vor dem Reise'
        ],
        correctAnswer: 'vor der Reise',
        explanationUz: 'Vaqt predlogi "vor" Dativ talab qiladi. "die Reise" Dativda "der Reise" bo‘ladi.',
        mistakeTipUz: '❌ Dativda ayol jinsi (die) "der" ga aylanadi: vor der Reise.'
      },
      {
        id: 'ab-a2-1-q7',
        type: 'multiple-choice',
        questionUz: '"gut" (yaxshi) sifatining qiyosiy (komparativ) va orttirma (superlativ) darajalari qaysi?',
        options: [
          'gut - besser - am besten',
          'gut - guter - am gutesten',
          'gut - mehr gut - am meisten gut',
          'gut - lieber - am liebsten'
        ],
        correctAnswer: 'gut - besser - am besten',
        explanationUz: '"gut" sifati istisno tarzda noan‘anaviy o‘zgaradi: gut -> besser -> am besten.',
        mistakeTipUz: '❌ "gut" ning darajalari: gut, besser, am besten.'
      },
      {
        id: 'ab-a2-1-q8',
        type: 'multiple-choice',
        questionUz: 'Nisbiy gap (Relativsatz im Nominativ Maskulin): "Das ist der Mann, _____ Deutsch unterrichtet."',
        options: [
          'der',
          'den',
          'dem',
          'dessen'
        ],
        correctAnswer: 'der',
        explanationUz: 'Erkak kishi (der Mann) ergash gapda ega (Nominativ) bo‘lib kelgani uchun nisbiy olmosh "der" bo‘ladi.',
        mistakeTipUz: '❌ Erkak jinsi Nominativda nisbiy olmosh sifatida "der" shaklini oladi: der Mann, der unterrichtet.'
      }
    ]
  },

  'a2-2': {
    levelCode: 'a2-2',
    titleDe: 'A2.2 Abschluss-Test (Niveauprüfung A2.2)',
    titleUz: 'A2.2 Bosqich Yakuniy Imtihoni',
    descriptionUz: 'A2.2 darajasidagi barcha 4 ta modul (12 ta dars: Turar-joy va iltimoslar, Salomatlik va tibbiyot, Ekologiya va o‘tmish, Kelajak va A2 xalqaro imtihoni) bo‘yicha yakuniy sinov.',
    totalQuestions: 8,
    passingScore: 80,
    exercises: [
      {
        id: 'ab-a2-2-q1',
        type: 'multiple-choice',
        questionUz: 'Yo‘nalish fe‘li (Wohin? - Akkusativ): "Men vazani stol ustiga qo‘ymoqdaman" nemischa qanday bo‘ladi? ("der Tisch")',
        options: [
          'Ich stelle die Vase auf den Tisch.',
          'Ich stehe die Vase auf dem Tisch.',
          'Ich lege die Vase an dem Tisch.',
          'Ich stelle die Vase auf dem Tisch.'
        ],
        correctAnswer: 'Ich stelle die Vase auf den Tisch.',
        explanationUz: 'Tik qo‘yish harakati "stellen" fe‘li bilan ifodalanadi va "Wohin?" savoliga Akkusativ (den Tisch) talab qiladi.',
        mistakeTipUz: '❌ Harakat (tik qo‘yish) uchun "stellen" + Akkusativ: auf den Tisch.'
      },
      {
        id: 'ab-a2-2-q2',
        type: 'multiple-choice',
        questionUz: 'Konjunktiv II orqali o‘ta xushmuomala iltimos qilish iborasini tanlang:',
        options: [
          'Könntest du mir bitte kurz helfen?',
          'Kannst du mir bitte sofort helfen!',
          'Du musst mir jetzt helfen.',
          'Hilf mir schnell bitte.'
        ],
        correctAnswer: 'Könntest du mir bitte kurz helfen?',
        explanationUz: '"Könntest du bitte...?" xushmuomala Konjunktiv II iltimos shaklidir.',
        mistakeTipUz: '❌ Xushmuomala iltimos uchun Konjunktiv II shakli "Könntest du...?" qo‘llaniladi.'
      },
      {
        id: 'ab-a2-2-q3',
        type: 'multiple-choice',
        questionUz: 'Infinitiv mit "zu" birikmasi bilan to‘g‘ri tuzilgan gap qaysi?',
        options: [
          'Es ist wichtig, jeden Tag neue Wörter zu wiederholen.',
          'Es ist wichtig, jeden Tag neue Wörter wiederholen zu.',
          'Es ist wichtig, zu jeden Tag neue Wörter wiederholen.',
          'Es ist wichtig, dass jeden Tag neue Wörter zu wiederholen.'
        ],
        correctAnswer: 'Es ist wichtig, jeden Tag neue Wörter zu wiederholen.',
        explanationUz: 'Infinitivli konstruksiyada "zu" fe‘l infinitividan bevosita oldin va gapning eng oxirida keladi.',
        mistakeTipUz: '❌ "zu" infinitiv fe‘ldan oldin oxirida keladi: ... zu wiederholen.'
      },
      {
        id: 'ab-a2-2-q4',
        type: 'multiple-choice',
        questionUz: '"Du brauchst heute nicht zu kochen" jumlasi nimani anglatadi?',
        options: [
          'Bugun ovqat pishirishing shart emas (majbur emassan).',
          'Bugun ovqat pishirishing taqiqlanadi.',
          'Bugun ovqat pishirishing shart.',
          'Bugun ovqat pishira olmaysan.'
        ],
        correctAnswer: 'Bugun ovqat pishirishing shart emas (majbur emassan).',
        explanationUz: '"nicht brauchen ... zu" = "nicht müssen" (majbur emassiz, shart emas).',
        mistakeTipUz: '❌ "nicht brauchen ... zu" shart emasligini bildiradi (taqiqni emas).'
      },
      {
        id: 'ab-a2-2-q5',
        type: 'multiple-choice',
        questionUz: '"obwohl" (garchi, qaramasdan) bog‘lovchisi bilan gap tartibini aniqlang:',
        options: [
          'Obwohl es stark regnet, gehen wir im Park spazieren.',
          'Obwohl es regnet stark, wir gehen im Park spazieren.',
          'Obwohl regnet es stark, gehen wir im Park spazieren.',
          'Wir gehen spazieren, obwohl es stark regnet nicht.'
        ],
        correctAnswer: 'Obwohl es stark regnet, gehen wir im Park spazieren.',
        explanationUz: '"obwohl" ergash gapida fe‘l oxirga boradi (regnet), bosh gap esa fe‘l bilan boshlanadi (gehen wir).',
        mistakeTipUz: '❌ Ergash gap boshida kelsa, asosiy gap darhol fe‘l bilan boshlanadi: Obwohl ..., gehen wir...'
      },
      {
        id: 'ab-a2-2-q6',
        type: 'multiple-choice',
        questionUz: 'Juft bog‘lovchi (nicht nur ... sondern auch): to‘g‘ri gapni tanlang:',
        options: [
          'Sie spricht nicht nur fließend Deutsch, sondern auch perfekt Englisch.',
          'Sie spricht nicht nur fließend Deutsch, aber auch perfekt Englisch.',
          'Sie spricht nicht nur fließend Deutsch, oder auch Englisch.',
          'Sie spricht sowohl fließend Deutsch, als auch nicht Englisch.'
        ],
        correctAnswer: 'Sie spricht nicht nur fließend Deutsch, sondern auch perfekt Englisch.',
        explanationUz: '"nicht nur ... sondern auch" juft bog‘lovchisi "nafaqat ..., balki ... ham" degan ma‘noni beradi.',
        mistakeTipUz: '❌ "nicht nur" ga doimo "sondern auch" mos keladi.'
      },
      {
        id: 'ab-a2-2-q7',
        type: 'multiple-choice',
        questionUz: 'Kelasi zamon (Futur I): "Men keyingi yili Germaniyada o‘qiyman" jumlasi qaysi?',
        options: [
          'Nächstes Jahr werde ich in Deutschland studieren.',
          'Nächstes Jahr wird ich in Deutschland studieren.',
          'Nächstes Jahr werden ich in Deutschland studiert.',
          'Nächstes Jahr habe ich in Deutschland studieren.'
        ],
        correctAnswer: 'Nächstes Jahr werde ich in Deutschland studieren.',
        explanationUz: 'Futur I formulasi: werden (ich werde) + Infinitiv gap oxirida (studieren).',
        mistakeTipUz: '❌ Futur I da "ich werde" tuslanadi va asosiy fe‘l infinitivda oxirda keladi: werde ... studieren.'
      },
      {
        id: 'ab-a2-2-q8',
        type: 'multiple-choice',
        questionUz: 'Maqsad ifodalash: qachon "um ... zu" ishlatiladi va qachon "damit"?',
        options: [
          'Har ikki gapning egasi bir xil bo‘lsa "um ... zu", egalari har xil bo‘lsa "damit"',
          'Egalari bir xil bo‘lsa "damit", har xil bo‘lsa "um ... zu"',
          'Har doim faqat "damit" ishlatilishi shart',
          'Faqat o‘tgan zamonda "um ... zu" ishlatiladi'
        ],
        correctAnswer: 'Har ikki gapning egasi bir xil bo‘lsa "um ... zu", egalari har xil bo‘lsa "damit"',
        explanationUz: 'Ikkala gapda ega bir xil shaxs bo‘lsa "um ... zu + Infinitiv", agar subyektlar boshqa-boshqa bo‘lsa "damit + tuslangan fe‘l" qo‘llaniladi.',
        mistakeTipUz: '❌ Ega bir xil bo‘lsa "um...zu", subyektlar turli xil bo‘lsa "damit" qo‘llaniladi.'
      }
    ]
  }
};
