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
  }
};
