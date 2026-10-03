import { INITIAL_LEVELS, INITIAL_MODULES } from './seedLevelsModules';
import { MODULE_1_LESSONS } from './seedLessons/module1Lessons';
import { MODULE_2_LESSONS } from './seedLessons/module2Lessons';
import { MODULE_3_LESSONS } from './seedLessons/module3Lessons';
import { MODULE_4_LESSONS } from './seedLessons/module4Lessons';
import { ALL_A12_LESSONS } from './seedLessonsA12';
import { Lesson, VocabularyItem, GrammarTopic, ShadowingExercise, ListeningExercise, ReadingMaterial } from '../types/database';

export const INITIAL_LESSONS: Lesson[] = [
  ...MODULE_1_LESSONS,
  ...MODULE_2_LESSONS,
  ...MODULE_3_LESSONS,
  ...MODULE_4_LESSONS,
  ...ALL_A12_LESSONS,
];

// Additional higher-level grammar topics to enrich the Grammar Library for A2 and B1
export const ADDITIONAL_GRAMMAR_TOPICS: GrammarTopic[] = [
  {
    id: 'gra-a2-1',
    lessonId: 'a2-preview',
    levelCode: 'a2-1',
    titleDe: 'Das Perfekt mit "haben" und "sein"',
    titleUz: 'O‘tgan zamon (Perfekt) va yordamchi fe\'llar',
    summaryUz: 'Nemis so‘zlashuv tilidagi asosiy o‘tgan zamon: haben/sein + Partizip II.',
    explanationUz: `Perfekt zamoni og‘zaki nutqda o‘tgan voqealarni hikoya qilishda eng ko‘p qo‘llaniladi.
U ikkita qismdan iborat:
1. Yordamchi fe'l: **haben** yoki **sein** (hozirgi zamonda tuslanadi va 2-o‘rinda turadi).
2. Asosiy fe'l: **Partizip II** shakli (ge-...-(e)t yoki ge-...-en) va u gap oxirida turadi!

Qachon "sein"?
- Harakat va joy o‘zgarishi (gehen, fahren, fliegen, kommen)
- Holat o‘zgarishi (aufstehen, einschlafen, sterben)
- sein, bleiben, werden fe'llari bilan.
Qolgan ko‘pchilik hollarda esa **haben** ishlatiladi.`,
    tables: [
      {
        title: 'haben vs. sein bilan Perfekt',
        headers: ['Yordamchi fe\'l', 'Qoidasi', 'Namuna gap', 'Tarjimasi'],
        rows: [
          ['haben', 'Ko‘pchilik harakatlar', 'Ich habe gestern Deutsch gelernt.', 'Men kecha nemis tilini o‘rgandim.'],
          ['haben', 'Tranzitiv (obyektli) fe\'llar', 'Er hat einen Apfel gegessen.', 'U olma yedi.'],
          ['sein', 'Joy o‘zgarishi', 'Wir sind nach Berlin gefahren.', 'Biz Berlinga bordik.'],
          ['sein', 'Holat o‘zgarishi', 'Sie ist früh aufgestanden.', 'U erta turdi.']
        ]
      }
    ],
    examples: [
      {
        german: 'Gestern habe ich meine Hausaufgaben gemacht.',
        uzbek: 'Kecha men uy vazifalarimni qildim.',
        highlight: 'habe gemacht'
      },
      {
        german: 'Ich bin am Wochenende nach Taschkent geflogen.',
        uzbek: 'Men dam olish kunlari Toshkentga uchib ketdim.',
        highlight: 'bin geflogen'
      }
    ]
  },
  {
    id: 'gra-a2-2',
    lessonId: 'a2-preview',
    levelCode: 'a2-2',
    titleDe: 'Kausale Nebensätze mit "weil" (Chunki / Sababli)',
    titleUz: '"weil" (chunki) bilan bog‘langan ergash gaplar',
    summaryUz: '"weil" bog‘lovchisi kelganda, ergash gapdagi tuslanuvchi fe\'l gapning eng oxiriga suriladi.',
    explanationUz: `"weil" so‘zi sabab-oqibatni ifodalaydi va nemis tilida ergash gap (Nebensatz) yasaydi.
Eng muhim qoida:
**"weil" dan keyin fe'l gapning eng oxirida turadi!**

Masalan:
- Asosiy gap: Ich lerne Deutsch.
- Sabab: Ich möchte in Deutschland studieren.
- Birlashganda: *Ich lerne Deutsch, **weil** ich in Deutschland studieren **möchte**.*`,
    examples: [
      {
        german: 'Ich bleibe heute zu Hause, weil ich krank bin.',
        uzbek: 'Men bugun uyda qolaman, chunki kasalman.',
        highlight: 'weil ... bin'
      }
    ]
  },
  {
    id: 'gra-b1-1',
    lessonId: 'b1-preview',
    levelCode: 'b1-1',
    titleDe: 'Der Konjunktiv II der Höflichkeit und Wünsche',
    titleUz: 'Konjunktiv II: Istak, orzu va xushmuomalalik',
    summaryUz: 'Agar shunday bo‘lganida edi... (hätte, wäre, würde + Infinitiv).',
    explanationUz: `Konjunktiv II real bo‘lmagan orzular va o‘ta yuqori xushmuomalalikni bildiradi:
- **hätte** (menda bo‘lganida edi): *Wenn ich mehr Zeit hätte, würde ich mehr reisen.*
- **wäre** (bo‘lganimda edi): *Wenn ich in Deutschland wäre...*
- **würde + Infinitiv** (qilar edim): *Ich würde gerne helfen.* (Jon deb yordam bergan bo‘lardim.)`,
    examples: [
      {
        german: 'Könnten Sie mir bitte helfen? Ich wäre Ihnen sehr dankbar.',
        uzbek: 'Menga yordam bera olarmidingiz? Sizdan behad minnatdor bo‘lar edim.',
        highlight: 'Könnten Sie / wäre'
      }
    ]
  },
  {
    id: 'gra-b1-2',
    lessonId: 'b1-preview',
    levelCode: 'b1-2',
    titleDe: 'Passiv Präsens und Präteritum (Majhul nisbat)',
    titleUz: 'Majhul nisbat: werden + Partizip II',
    summaryUz: 'Ish-harakat kim tomonidan bajarilganidan ko‘ra, harakatning o‘zi muhim bo‘lganda qo‘llaniladi.',
    explanationUz: `Nemis tilida majhul nisbat (Passiv) rasmiy matnlarda, gazeta va imtihonlarda juda ko‘p uchraydi.
Formulasi:
- **werden** (tuslanadi) + ... + **Partizip II**
- *Das Haus **wird** gebaut.* (Uy qurilmoqda.)
- *Der Brief **wurde** geschrieben.* (Xat yozildi.)`,
    examples: [
      {
        german: 'In Deutschland werden viele Autos exportiert.',
        uzbek: 'Germaniyada ko‘plab avtomobillar eksport qilinadi.',
        highlight: 'werden exportiert'
      }
    ]
  }
];

// Additional vocabulary for higher levels
export const ADDITIONAL_VOCABULARY: VocabularyItem[] = [
  {
    id: 'voc-a2-1',
    lessonId: 'a2-preview',
    levelCode: 'a2-1',
    german: 'die Erfahrung',
    article: 'die',
    plural: 'die Erfahrungen',
    uzbek: 'tajriba',
    exampleDe: 'Ich habe viel Erfahrung im Beruf.',
    exampleUz: 'Mening kasbimda ko‘p tajribam bor.',
    wordType: 'noun'
  },
  {
    id: 'voc-a2-2',
    lessonId: 'a2-preview',
    levelCode: 'a2-1',
    german: 'die Bewerbung',
    article: 'die',
    plural: 'die Bewerbungen',
    uzbek: 'ishga ariza topshirish (rezyume)',
    exampleDe: 'Ich schreibe eine Bewerbung auf Deutsch.',
    exampleUz: 'Men nemis tilida ish arizasi yozmoqdaman.',
    wordType: 'noun'
  },
  {
    id: 'voc-b1-1',
    lessonId: 'b1-preview',
    levelCode: 'b1-1',
    german: 'die Meinung',
    article: 'die',
    plural: 'die Meinungen',
    uzbek: 'fikr, mulohaza',
    exampleDe: 'Meiner Meinung nach ist Bildung sehr wichtig.',
    exampleUz: 'Mening fikrimcha, ta‘lim juda muhim.',
    wordType: 'noun'
  },
  {
    id: 'voc-b1-2',
    lessonId: 'b1-preview',
    levelCode: 'b1-1',
    german: 'entscheiden',
    article: null,
    plural: null,
    uzbek: 'qaror qabul qilmoq',
    exampleDe: 'Wir müssen uns bald entscheiden.',
    exampleUz: 'Biz tez orada qaror qabul qilishimiz kerak.',
    wordType: 'verb'
  }
];

// Extract flattened items for search and direct views
export const ALL_INITIAL_VOCABULARY: VocabularyItem[] = [
  ...INITIAL_LESSONS.flatMap(l => (l.vocabulary || []).map(v => ({
    ...v,
    moduleTitle: INITIAL_MODULES.find(m => m.id === l.moduleId)?.titleUz || ''
  }))),
  ...ADDITIONAL_VOCABULARY
];

export const ALL_INITIAL_GRAMMAR: GrammarTopic[] = [
  ...INITIAL_LESSONS.flatMap(l => l.grammar || []),
  ...ADDITIONAL_GRAMMAR_TOPICS
];

export const ALL_INITIAL_SHADOWING: ShadowingExercise[] = [
  ...INITIAL_LESSONS.flatMap(l => l.shadowing || []),
  {
    id: 'sha-a2-1',
    lessonId: 'a2-preview',
    levelCode: 'a2-1',
    sentenceDe: 'Gestern bin ich um sechs Uhr aufgestanden und habe Deutsch gelernt.',
    translationUz: 'Kecha men soat oltida turdim va nemis tilini o‘rgandim.',
    phoneticHint: '[Ges-tern bin iç um zeks U:r auf-ge-shtan-den]',
    orderIndex: 1
  },
  {
    id: 'sha-b1-1',
    lessonId: 'b1-preview',
    levelCode: 'b1-1',
    sentenceDe: 'Meiner Meinung nach eröffnet das Erlernen einer Fremdsprache viele neue Perspektiven.',
    translationUz: 'Mening fikrimcha, chet tilini o‘rganish ko‘plab yangi imkoniyatlar eshigini ochadi.',
    phoneticHint: '[May-ner May-nung nax er-øf-net das Er-ler-nen...]',
    orderIndex: 1
  }
];

export { INITIAL_LEVELS, INITIAL_MODULES };
