-- ====================================================================
-- FOR GREAT NATION - Seed Certificate Tests, Sections & Questions
-- Generated from Goethe / telc CEFR aligned curriculum
-- ====================================================================

-- Test: A1.1 Tinglab Tushunish (Hören) Imtihoni
INSERT INTO public.certificate_tests (
    id, level_code, title_de, title_uz, description_uz,
    duration_minutes, passing_percentage, is_published, total_points, total_questions
) VALUES (
    'cert-test-a1-1-listening',
    'a1-1'::cefr_level_code,
    'Goethe-Zertifikat A1.1: Hören Modulprüfung',
    'A1.1 Tinglab Tushunish (Hören) Imtihoni',
    'Goethe & telc A1 standarti: Do‘konda narxlar, poyezd kechikishi, savdo markazi e‘loni, tez tibbiy yordam 116 117 raqami va kino xabarlari.',
    15,
    60,
    true,
    24,
    6
)
ON CONFLICT (id) DO UPDATE SET
    title_de = EXCLUDED.title_de,
    title_uz = EXCLUDED.title_uz,
    description_uz = EXCLUDED.description_uz,
    duration_minutes = EXCLUDED.duration_minutes,
    total_points = EXCLUDED.total_points,
    total_questions = EXCLUDED.total_questions;

INSERT INTO public.certificate_sections (
    id, test_id, skill, title_de, title_uz, instructions_uz, order_index
) VALUES (
    'sec-a1-1-hoeren',
    'cert-test-a1-1-listening',
    'listening',
    'Teil 2: Hören (Tinglab Tushunish)',
    '2-Bo‘lim: Hören (Tinglab tushunish)',
    'Har bir audio vaziyatni diqqat bilan tinglang (istalgancha takrorlashingiz mumkin). Eshitilgan ma‘lumot asosida eng to‘g‘ri javobni belgilang.',
    2
)
ON CONFLICT (id) DO UPDATE SET
    title_de = EXCLUDED.title_de,
    title_uz = EXCLUDED.title_uz,
    instructions_uz = EXCLUDED.instructions_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-1-h1',
    'sec-a1-1-hoeren',
    1,
    'multiple_choice',
    'Wie viel kosten zwei Kilo Tomaten?',
    'Audiodagi suhbatga ko‘ra: 2 kilogramm pomidor qancha turadi?',
    NULL,
    'Guten Tag! Ich brauche bitte zwei Kilo Tomaten und ein Kilo Äpfel. - Sehr gerne. Die Tomaten kosten heute zwei Euro fünfzig das Kilo, und die Äpfel ein Euro neunzig das Kilo. Möchten Sie sonst noch etwas? - Nein danke, das ist alles. Was macht das zusammen? - Das macht zusammen sechs Euro neunzig, bitte.',
    NULL,
    'Kunde: Guten Tag! Ich brauche bitte zwei Kilo Tomaten und ein Kilo Äpfel.
Verkäufer: Sehr gerne. Die Tomaten kosten heute zwei Euro fünfzig das Kilo, und die Äpfel ein Euro neunzig das Kilo. Möchten Sie sonst noch etwas?
Kunde: Nein danke, das ist alles. Was macht das zusammen?
Verkäufer: Das macht zusammen sechs Euro neunzig, bitte.',
    '[{"id":"opt-a","textDe":"1,90 Euro","textUz":"1,90 yevro"},{"id":"opt-b","textDe":"2,50 Euro","textUz":"2,50 yevro"},{"id":"opt-c","textDe":"5,00 Euro","textUz":"5,00 yevro"}]'::jsonb,
    '"opt-c"'::jsonb,
    4,
    'Sotuvchi ta‘kidlaydi: "Die Tomaten kosten heute 2,50 Euro das Kilo" (Pomidor bir kilosi 2,50 yevro). Xaridor 2 kilo olgani sababli 2 x 2,50 = 5,00 yevro bo‘ladi.'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-1-h2',
    'sec-a1-1-hoeren',
    2,
    'multiple_choice',
    'Um wie viel Uhr fährt der Zug heute tatsächlich ab?',
    'Vokzal xodimi bergan ma‘lumotga ko‘ra: Poyezd bugun kechikish hisobiga soat nechada jo‘naydi?',
    NULL,
    'Entschuldigung, wann fährt der nächste Zug nach Hamburg ab? - Der nächste Zug fährt planmäßig um 15 Uhr 10 von Gleis 3 ab. Aber Achtung: Der Zug hat heute zehn Minuten Verspätung und fährt erst um 15 Uhr 20. - Vielen Dank! Also Gleis 3 um 15 Uhr 20. - Genau so ist es.',
    NULL,
    'Fahrgast: Entschuldigung, wann fährt der nächste Zug nach Hamburg ab?
Bahnbeamter: Der nächste Zug fährt planmäßig um 15 Uhr 10 von Gleis 3 ab. Aber Achtung: Der Zug hat heute zehn Minuten Verspätung und fährt erst um 15 Uhr 20.
Fahrgast: Vielen Dank! Also Gleis 3 um 15 Uhr 20.
Bahnbeamter: Genau so ist es.',
    '[{"id":"opt-a","textDe":"Um 15:00 Uhr","textUz":"Soat 15:00 da"},{"id":"opt-b","textDe":"Um 15:10 Uhr","textUz":"Soat 15:10 da"},{"id":"opt-c","textDe":"Um 15:20 Uhr","textUz":"Soat 15:20 da"}]'::jsonb,
    '"opt-c"'::jsonb,
    4,
    'Xodim aniq ta‘kidlaydi: "Der Zug hat heute zehn Minuten Verspätung und fährt erst um 15 Uhr 20" (Bugun 10 daqiqa kechikkan va faqat 15:20 da jo‘naydi).'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-1-h3',
    'sec-a1-1-hoeren',
    3,
    'true_false',
    'Hören Sie die Durchsage. Ist die Aussage richtig oder falsch?',
    'Vokzal e‘lonini tinglang. Gap to‘g‘rimi yoki noto‘g‘ri? "Berlinga boruvchi poyezd bugun 2-yo‘ldan jo‘naydi."',
    NULL,
    'Achtung an Gleis 2: Der Intercity nach Berlin Hauptbahnhof, planmäßige Abfahrt um 11 Uhr 45, fährt heute nicht von Gleis 2. Wegen technischer Störungen fährt dieser Zug heute ausnahmsweise von Gleis 8 ab. Bitte alle Reisenden nach Berlin zu Gleis 8!',
    NULL,
    'Durchsage am Bahnhof: Achtung an Gleis 2: Der Intercity nach Berlin Hauptbahnhof, planmäßige Abfahrt um 11 Uhr 45, fährt heute nicht von Gleis 2. Wegen technischer Störungen fährt dieser Zug heute ausnahmsweise von Gleis 8 ab. Bitte alle Reisenden nach Berlin zu Gleis 8!',
    '[{"id":"opt-r","textDe":"Richtig (To‘g‘ri)","textUz":"Poyezd 2-yo‘ldan jo‘naydi"},{"id":"opt-f","textDe":"Falsch (Noto‘g‘ri)","textUz":"Poyezd 2-yo‘ldan emas, 8-yo‘ldan jo‘naydi"}]'::jsonb,
    '"opt-f"'::jsonb,
    4,
    'Vokzal karnayida: "fährt heute nicht von Gleis 2... fährt dieser Zug heute ausnahmsweise von Gleis 8 ab" (bugun 2-yo‘ldan emas, 8-yo‘ldan jo‘naydi) deb aytildi. Demak, gap noto‘g‘ri (Falsch).'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-1-h4',
    'sec-a1-1-hoeren',
    4,
    'true_false',
    'Hören Sie die Kaufhausdurchsage. Ist die Aussage richtig oder falsch?',
    'Do‘kon e‘lonini tinglang. Gap to‘g‘rimi yoki noto‘g‘ri? "Do‘kon bugun soat 21:00 gacha ochiq bo‘ladi."',
    NULL,
    'Verehrte Kundinnen und Kunden! Unser Kaufhaus schließt in zehn Minuten, um 20 Uhr. Bitte gehen Sie jetzt zu den Kassen im Erdgeschoss. Wir danken für Ihren Einkauf und wünschen Ihnen einen schönen Feierabend. Morgen früh sind wir ab 9 Uhr wieder für Sie da!',
    NULL,
    'Kaufhausdurchsage: Verehrte Kundinnen und Kunden! Unser Kaufhaus schließt in zehn Minuten, um 20 Uhr. Bitte gehen Sie jetzt zu den Kassen im Erdgeschoss. Wir danken für Ihren Einkauf und wünschen Ihnen einen schönen Feierabend. Morgen früh sind wir ab 9 Uhr wieder für Sie da!',
    '[{"id":"opt-r","textDe":"Richtig (To‘g‘ri)","textUz":"Do‘kon 21:00 gacha ochiq"},{"id":"opt-f","textDe":"Falsch (Noto‘g‘ri)","textUz":"Do‘kon soat 20:00 da yopiladi"}]'::jsonb,
    '"opt-f"'::jsonb,
    4,
    'E‘londa aniq aytildi: "Unser Kaufhaus schließt in zehn Minuten, um 20 Uhr" (Do‘konimiz 10 daqiqadan so‘ng, soat 20:00 da yopiladi). Demak, gap noto‘g‘ri (Falsch).'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-1-h5',
    'sec-a1-1-hoeren',
    5,
    'multiple_choice',
    'Unter welcher Telefonnummer erreichen Sie den ärztlichen Notdienst?',
    'Avtojavob beruvchi aytgan ma‘lumotga ko‘ra: Shoshilinch tibbiy yordam (Notdienst) telefon raqami qaysi?',
    NULL,
    'Guten Tag, hier ist der automatische Anrufbeantworter der Arztpraxis Dr. Bergmann. Unsere Praxis ist heute geschlossen. In dringenden Notfällen wenden Sie sich bitte an den ärztlichen Notdienst unter der Telefonnummer: eins, eins, sechs, eins, eins, sieben. Unsere reguläre Sprechstunde beginnt wieder am Montag ab 8 Uhr.',
    NULL,
    'Telefonansage: Guten Tag, hier ist der automatische Anrufbeantworter der Arztpraxis Dr. Bergmann. Unsere Praxis ist heute geschlossen. In dringenden Notfällen wenden Sie sich bitte an den ärztlichen Notdienst unter der Telefonnummer: 116 117. Unsere reguläre Sprechstunde beginnt wieder am Montag ab 8 Uhr.',
    '[{"id":"opt-a","textDe":"116 117","textUz":"116 117"},{"id":"opt-b","textDe":"112 110","textUz":"112 110"},{"id":"opt-c","textDe":"118 119","textUz":"118 119"}]'::jsonb,
    '"opt-a"'::jsonb,
    4,
    'Audioda raqamlar aniq diktovka qilindi: "eins, eins, sechs, eins, eins, sieben" -> 116 117 (Germaniyadagi umumiy tibbiy yordam xizmati).'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-1-h6',
    'sec-a1-1-hoeren',
    6,
    'multiple_choice',
    'Um wie viel Uhr beginnt der Kinofilm heute?',
    'Ovozli xabarga ko‘ra: Kinofilm bugun soat nechada boshlanadi?',
    NULL,
    'Hallo Lisa, hier ist Jan. Du, ich bin schon am Kino, aber der Film beginnt heute erst um 19 Uhr 15, nicht um 18 Uhr 45. Ich kaufe schon mal die Tickets und warte im Café gegenüber auf dich. Bis gleich!',
    NULL,
    'Mailbox-Nachricht: Hallo Lisa, hier ist Jan. Du, ich bin schon am Kino, aber der Film beginnt heute erst um 19 Uhr 15, nicht um 18 Uhr 45. Ich kaufe schon mal die Tickets und warte im Café gegenüber auf dich. Bis gleich!',
    '[{"id":"opt-a","textDe":"Um 18:45 Uhr","textUz":"Soat 18:45 da"},{"id":"opt-b","textDe":"Um 19:15 Uhr","textUz":"Soat 19:15 da"},{"id":"opt-c","textDe":"Um 19:45 Uhr","textUz":"Soat 19:45 da"}]'::jsonb,
    '"opt-b"'::jsonb,
    4,
    'Yan xabarida aytdi: "der Film beginnt heute erst um 19 Uhr 15, nicht um 18 Uhr 45" (film 18:45 da emas, 19:15 da boshlanadi).'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

-- Test: A1.2 Tinglab Tushunish (Hören) Imtihoni
INSERT INTO public.certificate_tests (
    id, level_code, title_de, title_uz, description_uz,
    duration_minutes, passing_percentage, is_published, total_points, total_questions
) VALUES (
    'cert-test-a1-2-listening',
    'a1-2'::cefr_level_code,
    'Goethe-Zertifikat A1.2: Hören Modulprüfung',
    'A1.2 Tinglab Tushunish (Hören) Imtihoni',
    'Goethe & telc A1 standarti: Qishki kiyim chegirmasi, restoran hisobi va choypuli, Lufthansa B 24 aeroport e‘loni, avtoservis va shifokor qabuli xabarlari.',
    18,
    60,
    true,
    24,
    6
)
ON CONFLICT (id) DO UPDATE SET
    title_de = EXCLUDED.title_de,
    title_uz = EXCLUDED.title_uz,
    description_uz = EXCLUDED.description_uz,
    duration_minutes = EXCLUDED.duration_minutes,
    total_points = EXCLUDED.total_points,
    total_questions = EXCLUDED.total_questions;

INSERT INTO public.certificate_sections (
    id, test_id, skill, title_de, title_uz, instructions_uz, order_index
) VALUES (
    'sec-a1-2-hoeren',
    'cert-test-a1-2-listening',
    'listening',
    'Teil 2: Hören (Tinglab Tushunish)',
    '2-Bo‘lim: Hören (Tinglab tushunish)',
    'Har bir audio dialog yoki xabarni diqqat bilan tinglang va berilgan savollarga eng to‘g‘ri javobni tanlang.',
    2
)
ON CONFLICT (id) DO UPDATE SET
    title_de = EXCLUDED.title_de,
    title_uz = EXCLUDED.title_uz,
    instructions_uz = EXCLUDED.instructions_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-2-h1',
    'sec-a1-2-hoeren',
    1,
    'multiple_choice',
    'Wie viel bezahlt der Kunde für die Jacke?',
    'Do‘kondagi suhbatga ko‘ra: Xaridor kurtka uchun necha yevro to‘laydi?',
    NULL,
    'Guten Tag! Kann ich Ihnen helfen? - Ja gerne. Ich suche diese blaue Winterjacke. Haben Sie die noch in Größe 50? - Einen Moment, ich schaue mal im Lager nach... Ja, hier ist die letzte in Größe 50. - Wunderbar, die passt genau! Was kostet sie denn? - Sie war ursprünglich 120 Euro, aber heute im Winterschlussverkauf kostet sie nur 79 Euro. - Super, die nehme ich sofort.',
    NULL,
    'Verkäuferin: Guten Tag! Kann ich Ihnen helfen?
Kunde: Ja gerne. Ich suche diese blaue Winterjacke. Haben Sie die noch in Größe 50?
Verkäuferin: Einen Moment, ich schaue mal im Lager nach... Ja, hier ist die letzte in Größe 50.
Kunde: Wunderbar, die passt genau! Was kostet sie denn?
Verkäuferin: Sie war ursprünglich 120 Euro, aber heute im Winterschlussverkauf kostet sie nur 79 Euro.
Kunde: Super, die nehme ich sofort.',
    '[{"id":"opt-a","textDe":"50 Euro","textUz":"50 yevro"},{"id":"opt-b","textDe":"79 Euro","textUz":"79 yevro"},{"id":"opt-c","textDe":"120 Euro","textUz":"120 yevro"}]'::jsonb,
    '"opt-b"'::jsonb,
    4,
    'Sotuvchi aytadi: "ursprünglich 120 Euro, aber heute im Winterschlussverkauf kostet sie nur 79 Euro" (aslida 120 yevro edi, bugungi mavsumiy chegirmada esa 79 yevro). 50 esa kurtka o‘lchami (Größe).'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-2-h2',
    'sec-a1-2-hoeren',
    2,
    'multiple_choice',
    'Wie viel Trinkgeld gibt der Gast dem Kellner?',
    'Restorandagi suhbatga ko‘ra: Mehmon ofitsiantga qancha choypuli (Trinkgeld) qoldirdi?',
    NULL,
    'Hat es Ihnen geschmeckt? - Ja, ausgezeichnet, vielen Dank! Wir möchten bitte zahlen. - Sehr gerne. Zahlen Sie zusammen oder getrennt? - Bitte getrennt. Ich hatte das Schnitzel mit Kartoffelsalat und ein Mineralwasser. - Das macht für Sie genau vierzehn Euro fünfzig. - Hier sind siebzehn Euro, der Rest ist für Sie. - Vielen herzlichen Dank!',
    NULL,
    'Kellner: Hat es Ihnen geschmeckt?
Gast: Ja, ausgezeichnet, vielen Dank! Wir möchten bitte zahlen.
Kellner: Sehr gerne. Zahlen Sie zusammen oder getrennt?
Gast: Bitte getrennt. Ich hatte das Schnitzel mit Kartoffelsalat und ein Mineralwasser.
Kellner: Das macht für Sie genau vierzehn Euro fünfzig.
Gast: Hier sind siebzehn Euro, der Rest ist für Sie.
Kellner: Vielen herzlichen Dank!',
    '[{"id":"opt-a","textDe":"2,50 Euro","textUz":"2,50 yevro"},{"id":"opt-b","textDe":"14,50 Euro","textUz":"14,50 yevro"},{"id":"opt-c","textDe":"17,00 Euro","textUz":"17,00 yevro"}]'::jsonb,
    '"opt-a"'::jsonb,
    4,
    'Hisob 14,50 yevro bo‘ldi. Mehmon 17 yevro berib, qaytimni ofitsiantga qoldirdi: 17,00 - 14,50 = 2,50 yevro choypuli (Trinkgeld).'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-2-h3',
    'sec-a1-2-hoeren',
    3,
    'true_false',
    'Hören Sie die Flughafendurchsage. Ist die Aussage richtig oder falsch?',
    'Aeroport e‘lonini tinglang. Gap to‘g‘rimi yoki noto‘g‘ri? "Nyu-Yorkka uchuvchi yo‘lovchilar B 24 darvozasiga (Gate) borishlari kerak."',
    NULL,
    'Achtung, dies ist ein Aufruf für die Fluggäste von Lufthansa-Flug LH 442 nach New York. Das Boarding für diesen Flug hat soeben an Flugsteig B 24 begonnen. Wegen eines Flugsteigwechsels begeben sich bitte alle Fluggäste nicht mehr zu Gate A 10, sondern sofort zu Gate B 24. Ich wiederhole: Gate B 24.',
    NULL,
    'Flughafendurchsage: Achtung, dies ist ein Aufruf für die Fluggäste von Lufthansa-Flug LH 442 nach New York. Das Boarding für diesen Flug hat soeben an Flugsteig B 24 begonnen. Wegen eines Flugsteigwechsels begeben sich bitte alle Fluggäste nicht mehr zu Gate A 10, sondern sofort zu Gate B 24. Ich wiederhole: Gate B 24.',
    '[{"id":"opt-r","textDe":"Richtig (To‘g‘ri)","textUz":"Yo‘lovchilar B 24 darvozasiga borishlari kerak"},{"id":"opt-f","textDe":"Falsch (Noto‘g‘ri)","textUz":"Yo‘lovchilar A 10 darvozasiga borishlari kerak"}]'::jsonb,
    '"opt-r"'::jsonb,
    4,
    'E‘londa aniq ta‘kidlandi: "begeben sich bitte alle Fluggäste... sofort zu Gate B 24" (barcha yo‘lovchilar darhol B 24 darvozasiga o‘tsinlar). Demak, gap to‘g‘ri (Richtig).'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-2-h4',
    'sec-a1-2-hoeren',
    4,
    'true_false',
    'Hören Sie die Zugdurchsage. Ist die Aussage richtig oder falsch?',
    'Poyezd e‘lonini tinglang. Gap to‘g‘rimi yoki noto‘g‘ri? "Ushbu poyezd Shtutgartdan so‘ng to‘g‘ri Myunxenga davom etadi."',
    NULL,
    'Sehr geehrte Fahrgäste, wir erreichen in wenigen Minuten Stuttgart Hauptbahnhof. Dieser Zug endet hier, bitte alle Fahrgäste aussteigen! Fahrgäste in Richtung München nutzen bitte den ICE 518 auf Gleis 4, Abfahrt 16 Uhr 15. Wir bedanken uns für Ihre Reise mit der Deutschen Bahn.',
    NULL,
    'Zugdurchsage: Sehr geehrte Fahrgäste, wir erreichen in wenigen Minuten Stuttgart Hauptbahnhof. Dieser Zug endet hier, bitte alle Fahrgäste aussteigen! Fahrgäste in Richtung München nutzen bitte den ICE 518 auf Gleis 4, Abfahrt 16 Uhr 15. Wir bedanken uns für Ihre Reise mit der Deutschen Bahn.',
    '[{"id":"opt-r","textDe":"Richtig (To‘g‘ri)","textUz":"Poyezd Myunxenga davom etadi"},{"id":"opt-f","textDe":"Falsch (Noto‘g‘ri)","textUz":"Poyezd shu yerda to‘xtaydi va Myunxenga boshqa poyezdga o‘tirish kerak"}]'::jsonb,
    '"opt-f"'::jsonb,
    4,
    'E‘londa: "Dieser Zug endet hier, bitte alle Fahrgäste aussteigen!" (Ushbu poyezd shu yerda to‘xtaydi, barcha yo‘lovchilar tushsin) deyilgan. Myunxenga boruvchilar ICE 518 poyezdiga o‘tirishlari lozim. Demak, gap noto‘g‘ri (Falsch).'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-2-h5',
    'sec-a1-2-hoeren',
    5,
    'multiple_choice',
    'Bis wann kann Herr Wagner sein Auto heute abholen?',
    'Avtoservis xabariga ko‘ra: Janob Vagner bugun mashinasini kechiktirmasdan soat nechagacha olib ketishi mumkin?',
    NULL,
    'Guten Tag Herr Wagner, hier ist die Autowerkstatt Müller. Die Reparatur an Ihren Bremsen ist fertig und Ihr Auto ist abholbereit. Sie können den Wagen heute bis 18:30 Uhr oder morgen ab 8:00 Uhr abholen. Die Gesamtrechnung beträgt 240 Euro. Bei Fragen rufen Sie uns bitte an. Vielen Dank!',
    NULL,
    'Anrufbeantworter: Guten Tag Herr Wagner, hier ist die Autowerkstatt Müller. Die Reparatur an Ihren Bremsen ist fertig und Ihr Auto ist abholbereit. Sie können den Wagen heute bis 18:30 Uhr oder morgen ab 8:00 Uhr abholen. Die Gesamtrechnung beträgt 240 Euro. Bei Fragen rufen Sie uns bitte an. Vielen Dank!',
    '[{"id":"opt-a","textDe":"Bis 17:00 Uhr","textUz":"Soat 17:00 gacha"},{"id":"opt-b","textDe":"Bis 18:30 Uhr","textUz":"Soat 18:30 gacha"},{"id":"opt-c","textDe":"Bis 20:00 Uhr","textUz":"Soat 20:00 gacha"}]'::jsonb,
    '"opt-b"'::jsonb,
    4,
    'Avtoservis xabarida aniq belgilangan: "Sie können den Wagen heute bis 18:30 Uhr oder morgen ab 8:00 Uhr abholen" (mashinani bugun soat 18:30 gacha olib ketishingiz mumkin).'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-2-h6',
    'sec-a1-2-hoeren',
    6,
    'multiple_choice',
    'Für welchen neuen Termin ruft die Praxis an?',
    'Stomatologiya qabuli xabariga ko‘ra: Bemor uchun qaysi yangi qabul vaqti taklif etilmoqda?',
    NULL,
    'Guten Tag Frau Schmidt, hier spricht Schwester Sabine von der Zahnarztpraxis Dr. Keller. Wir rufen an wegen Ihres Termins am Donnerstag um 15 Uhr. Herr Dr. Keller ist am Donnerstag leider verhindert. Könnten Sie stattdessen am Freitag um 10 Uhr 30 kommen? Bitte rufen Sie uns kurz zurück unter der Nummer 030 421 70. Danke!',
    NULL,
    'Mailbox-Nachricht: Guten Tag Frau Schmidt, hier spricht Schwester Sabine von der Zahnarztpraxis Dr. Keller. Wir rufen an wegen Ihres Termins am Donnerstag um 15 Uhr. Herr Dr. Keller ist am Donnerstag leider verhindert. Könnten Sie stattdessen am Freitag um 10 Uhr 30 kommen? Bitte rufen Sie uns kurz zurück unter der Nummer 030 421 70. Danke!',
    '[{"id":"opt-a","textDe":"Am Donnerstag um 15:00 Uhr","textUz":"Payshanba kuni soat 15:00 da"},{"id":"opt-b","textDe":"Am Freitag um 10:30 Uhr","textUz":"Juma kuni soat 10:30 da"},{"id":"opt-c","textDe":"Am Montag um 08:00 Uhr","textUz":"Dushanba kuni soat 08:00 da"}]'::jsonb,
    '"opt-b"'::jsonb,
    4,
    'Hamshira aytadi: "Könnten Sie stattdessen am Freitag um 10 Uhr 30 kommen?" (Buning o‘rniga juma kuni soat 10:30 da kela olasizmi?).'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

-- Test: A1.1 O‘qib Tushunish (Lesen) Imtihoni
INSERT INTO public.certificate_tests (
    id, level_code, title_de, title_uz, description_uz,
    duration_minutes, passing_percentage, is_published, total_points, total_questions
) VALUES (
    'cert-test-a1-1-reading',
    'a1-1'::cefr_level_code,
    'Goethe-Zertifikat A1.1: Lesen Modulprüfung',
    'A1.1 O‘qib Tushunish (Lesen) Imtihoni',
    'Goethe & telc A1 standarti: Myunxendan do‘stona E-Mail, tug‘ilgan kun taklifi, Ko‘lnda nonushta saytlari, kechki til kurslari, idora ish soatlari va Kaufhaus sxemasi.',
    15,
    60,
    true,
    24,
    6
)
ON CONFLICT (id) DO UPDATE SET
    title_de = EXCLUDED.title_de,
    title_uz = EXCLUDED.title_uz,
    description_uz = EXCLUDED.description_uz,
    duration_minutes = EXCLUDED.duration_minutes,
    total_points = EXCLUDED.total_points,
    total_questions = EXCLUDED.total_questions;

INSERT INTO public.certificate_sections (
    id, test_id, skill, title_de, title_uz, instructions_uz, order_index
) VALUES (
    'sec-a1-1-lesen',
    'cert-test-a1-1-reading',
    'reading',
    'Teil 1: Lesen (O‘qish va Tushunish)',
    '1-Bo‘lim: Lesen (O‘qib tushunish)',
    'Har bir matn, rasmiy e‘lon va jadvallarni diqqat bilan o‘rganib, xalqaro imtihon qoidalari bo‘yicha to‘g‘ri javobni tanlang.',
    1
)
ON CONFLICT (id) DO UPDATE SET
    title_de = EXCLUDED.title_de,
    title_uz = EXCLUDED.title_uz,
    instructions_uz = EXCLUDED.instructions_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-1-r1',
    'sec-a1-1-lesen',
    1,
    'true_false',
    'Lesen Sie die E-Mail. Ist die Aussage richtig oder falsch?',
    'E-Mailni o‘qing. Gap to‘g‘rimi yoki noto‘g‘ri? "Marion juma kuni ham til maktabida ishlaydi."',
    'Liebe Bettina,

ich bin jetzt seit zwei Wochen in München. Die Stadt ist wirklich wunderschön! Meine neue Wohnung liegt direkt im Zentrum, nicht weit vom Marienplatz. Ich arbeite von Montag bis Donnerstag in einer Sprachschule als Assistentin. Am Freitag habe ich frei.
Hast du am nächsten Wochenende Zeit? Komm mich doch besuchen! Wir können am Samstag zusammen frühstücken und ins Deutsche Museum gehen.

Schreib mir bald!
Liebe Grüße
Marion',
    NULL,
    NULL,
    NULL,
    '[{"id":"opt-r","textDe":"Richtig (To‘g‘ri)","textUz":"Marion juma kuni ham ishlaydi"},{"id":"opt-f","textDe":"Falsch (Noto‘g‘ri)","textUz":"Marion juma kuni ishlamaydi (bo‘sh)"}]'::jsonb,
    '"opt-f"'::jsonb,
    4,
    'Marion xatida aniq yozgan: "Ich arbeite von Montag bis Donnerstag in einer Sprachschule... Am Freitag habe ich frei." (Dushanbadan payshanbagacha ishlayman, juma kuni esa dam olaman). Demak, gap noto‘g‘ri (Falsch).'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-1-r2',
    'sec-a1-1-lesen',
    2,
    'true_false',
    'Lesen Sie den Brief. Ist die Aussage richtig oder falsch?',
    'Xatni o‘qing. Gap to‘g‘rimi yoki noto‘g‘ri? "Mixael ziyofatga faqat ishidan keyin keladi."',
    'Lieber Thomas,

vielen Dank für die Einladung zu deiner Geburtstagsparty am Samstag. Ich komme sehr gern! Aber ich muss am Samstag bis 18:00 Uhr im Supermarkt arbeiten. Danach fahre ich schnell nach Hause, ziehe mich um und komme dann direkt zu dir. Ich bin ungefähr um 19:30 Uhr bei dir. Soll ich einen Kuchen oder Getränke mitbringen?

Herzliche Grüße
Michael',
    NULL,
    NULL,
    NULL,
    '[{"id":"opt-r","textDe":"Richtig (To‘g‘ri)","textUz":"Mixael ziyofatga ishidan keyin keladi"},{"id":"opt-f","textDe":"Falsch (Noto‘g‘ri)","textUz":"Mixael ertalabdan ziyofatga boradi"}]'::jsonb,
    '"opt-r"'::jsonb,
    4,
    'Mixael xatida yozgan: "Ich muss am Samstag bis 18:00 Uhr im Supermarkt arbeiten. Danach... komme dann direkt zu dir." (Soat 18:00 gacha ishlashim kerak, shundan so‘ng to‘g‘ri sening oldingga boraman). Demak, u ziyofatga ishdan keyin keladi (Richtig).'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-1-r3',
    'sec-a1-1-lesen',
    3,
    'multiple_choice',
    'Sie möchten am Sonntag in Köln frühstücken und suchen ein Café mit Frühstücksbuffet. Welche Webseite passt: A oder B?',
    'Siz yakshanba kuni ertalab Ko‘lnda nonushta qilmoqchisiz va nonushta bufeti bor qahvaxona qidiryapsiz. Qaysi veb-sayt sizga mos: A yoki B?',
    'Webseite A: CAFÉ ZENTRAL — KÖLN
Täglich frischer Kaffee und hausgemachter Kuchen ab 14:00 Uhr. Große Auswahl an Eisspezialitäten und Desserts. Sonntags geöffnet von 14:00 bis 19:00 Uhr. Kein Frühstück!

Webseite B: FRÜHSTÜCKS-OASE KÖLN
Großes warmes und kaltes Frühstücksbuffet jeden Samstag und Sonntag von 08:30 bis 13:00 Uhr! Frische Brötchen, Müsli, Bio-Eier und Kaffeespezialitäten. Tischreservierung empfohlen.',
    NULL,
    NULL,
    NULL,
    '[{"id":"opt-a","textDe":"Webseite A (Café Zentral)","textUz":"A sayti (Café Zentral)"},{"id":"opt-b","textDe":"Webseite B (Frühstücks-Oase Köln)","textUz":"B sayti (Frühstücks-Oase Köln)"}]'::jsonb,
    '"opt-b"'::jsonb,
    4,
    'Webseite B da har shanba va yakshanba soat 08:30 dan 13:00 gacha maxsus nonushta bufeti ("Frühstücksbuffet jeden Samstag und Sonntag") mavjud. Webseite A da esa "Kein Frühstück!" (Nonushta yo‘q, faqat 14:00 dan ochiq) deb yozilgan.'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-1-r4',
    'sec-a1-1-lesen',
    4,
    'multiple_choice',
    'Sie suchen einen Deutschkurs am Abend, weil Sie tagsüber arbeiten. Welche Webseite passt: A oder B?',
    'Kunduzi ishlaganingiz sababli kechki nemis tili kursini qidiryapsiz. Qaysi veb-sayt mos keladi: A yoki B?',
    'Webseite A: SPRACHSTUDIO AKTIV
Intensivkurse Deutsch als Fremdsprache. Unterricht jeden Tag von Montag bis Freitag, 09:00 bis 12:30 Uhr. Kleine Gruppen bis 10 Personen. Kursbeginn jeden Monat.

Webseite B: VOLKSHOCHSCHULE MITTE
Abendkurse Deutsch für Berufstätige. Unterricht dienstags und donnerstags von 18:30 bis 20:30 Uhr. Stufen A1 bis C1. Anmeldung online oder persönlich im Büro.',
    NULL,
    NULL,
    NULL,
    '[{"id":"opt-a","textDe":"Webseite A (Sprachstudio Aktiv)","textUz":"A sayti (Sprachstudio Aktiv)"},{"id":"opt-b","textDe":"Webseite B (Volkshochschule Mitte)","textUz":"B sayti (Volkshochschule Mitte)"}]'::jsonb,
    '"opt-b"'::jsonb,
    4,
    'Webseite B da ishlaydiganlar uchun kechki kurslar taklif qilinmoqda: "Abendkurse Deutsch für Berufstätige... 18:30 bis 20:30 Uhr". A saytida esa kurslar faqat ertalab (09:00-12:30) o‘tiladi.'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-1-r5',
    'sec-a1-1-lesen',
    5,
    'true_false',
    'Lesen Sie das Schild. Ist die Aussage richtig oder falsch?',
    'E‘lonni o‘qing. Gap to‘g‘rimi yoki noto‘g‘ri? "Chorshanba kuni tushdan keyin fuqarolik idorasida pasport olib bo‘lmaydi."',
    'BÜRGERAMT DER STADT BONN
Öffnungszeiten:
Montag, Dienstag, Donnerstag: 08:00 – 16:00 Uhr
Mittwoch: 08:00 – 12:00 Uhr
Freitag: 08:00 – 13:00 Uhr
Samstag und Sonntag: Geschlossen!
Wichtig: Bitte ziehen Sie am Eingang eine Wartenummer.',
    NULL,
    NULL,
    NULL,
    '[{"id":"opt-r","textDe":"Richtig (To‘g‘ri)","textUz":"Chorshanba kuni tushdan keyin idora yopiq"},{"id":"opt-f","textDe":"Falsch (Noto‘g‘ri)","textUz":"Chorshanba kuni kechgacha ochiq"}]'::jsonb,
    '"opt-r"'::jsonb,
    4,
    'E‘londa ko‘rsatilishicha, chorshanba kuni (Mittwoch) idora faqat soat 08:00 dan 12:00 gacha ochiq. Tushdan keyin yopiq bo‘lgani sababli gap to‘g‘ri (Richtig).'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-1-r6',
    'sec-a1-1-lesen',
    6,
    'multiple_choice',
    'Wo finden Sie Herrenschuhe und Sportartikel im Kaufhaus?',
    'Universal do‘konda erkaklar poyabzali va sport tovarlari nechanchi qavatda joylashgan?',
    'KAUFHAUS ALSTER — ETAGEN-ÜBERSICHT:
3. Stock: Restaurant, Café und Kundentoilette
2. Stock: Damenmode, Schuhe, Accessoires
1. Stock: Herrenmode, Schuhe und Sportartikel
Erdgeschoss: Kosmetik, Parfüm, Schreibwaren
Untergeschoss: Lebensmittel, Bäckerei und Parkhaus',
    NULL,
    NULL,
    NULL,
    '[{"id":"opt-1","textDe":"Im 1. Stock","textUz":"1-qavatda (1. Stock)"},{"id":"opt-2","textDe":"Im 2. Stock","textUz":"2-qavatda (2. Stock)"},{"id":"opt-3","textDe":"Im Erdgeschoss","textUz":"Kirish qavatida (Erdgeschoss)"},{"id":"opt-4","textDe":"Im Untergeschoss","textUz":"Yerto‘la qavatida (Untergeschoss)"}]'::jsonb,
    '"opt-1"'::jsonb,
    4,
    'E‘londa: "1. Stock: Herrenmode, Schuhe und Sportartikel" (1-qavat: erkaklar kiyimi, poyabzal va sport tovarlari) deb aniq yozilgan.'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

-- Test: A1.2 O‘qib Tushunish (Lesen) Imtihoni
INSERT INTO public.certificate_tests (
    id, level_code, title_de, title_uz, description_uz,
    duration_minutes, passing_percentage, is_published, total_points, total_questions
) VALUES (
    'cert-test-a1-2-reading',
    'a1-2'::cefr_level_code,
    'Goethe-Zertifikat A1.2: Lesen Modulprüfung',
    'A1.2 O‘qib Tushunish (Lesen) Imtihoni',
    'Goethe & telc A1 standarti: Grillfest xati, pansionat bron qilish shartlari, uy-joy ijarasi veb-saytlari, kinoteatr onlayn chiptalari va Hausordnung qoidalari.',
    18,
    60,
    true,
    24,
    6
)
ON CONFLICT (id) DO UPDATE SET
    title_de = EXCLUDED.title_de,
    title_uz = EXCLUDED.title_uz,
    description_uz = EXCLUDED.description_uz,
    duration_minutes = EXCLUDED.duration_minutes,
    total_points = EXCLUDED.total_points,
    total_questions = EXCLUDED.total_questions;

INSERT INTO public.certificate_sections (
    id, test_id, skill, title_de, title_uz, instructions_uz, order_index
) VALUES (
    'sec-a1-2-lesen',
    'cert-test-a1-2-reading',
    'reading',
    'Teil 1: Lesen (O‘qish va Tushunish)',
    '1-Bo‘lim: Lesen (O‘qib tushunish)',
    'Xalqaro imtihon talablariga mos nemischa xatlar, internet reklamalari va rasmiy e‘lonlarni o‘qib to‘g‘ri javobni tanlang.',
    1
)
ON CONFLICT (id) DO UPDATE SET
    title_de = EXCLUDED.title_de,
    title_uz = EXCLUDED.title_uz,
    instructions_uz = EXCLUDED.instructions_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-2-r1',
    'sec-a1-2-lesen',
    1,
    'true_false',
    'Lesen Sie die Einladung. Ist die Aussage richtig oder falsch?',
    'Taklifnomani o‘qing. Gap to‘g‘rimi yoki noto‘g‘ri? "Mehmonlar o‘zlari bilan kabob uchun go‘sht olib kelishlari shart."',
    'Liebe Nachbarn,

wir sind vor einem Monat in die Blumenstraße 14 eingezogen und haben unsere Wohnung jetzt fertig renoviert. Das möchten wir gerne mit Ihnen feiern!
Wir laden Sie ganz herzlich zu unserem Grillfest im Garten ein: am kommenden Samstag ab 16:30 Uhr.
Für Fleisch, Würstchen und Getränke sorgen wir. Wenn Sie möchten, können Sie gern einen Salat oder ein Dessert mitbringen.
Bitte geben Sie uns bis Donnerstag kurz Bescheid, ob Sie kommen können.

Herzliche Grüße
Stefan und Katja',
    NULL,
    NULL,
    NULL,
    '[{"id":"opt-r","textDe":"Richtig (To‘g‘ri)","textUz":"Mehmonlar o‘zlari go‘sht olib kelishlari kerak"},{"id":"opt-f","textDe":"Falsch (Noto‘g‘ri)","textUz":"Go‘sht va ichimliklarni mezbonlarning o‘zi tayyorlaydi"}]'::jsonb,
    '"opt-f"'::jsonb,
    4,
    'Stefan va Katja yozgan: "Für Fleisch, Würstchen und Getränke sorgen wir" (Go‘sht, kolbasalar va ichimliklarni o‘zimiz tayyorlaymiz). Mehmonlardan faqat xohishiga qarab salat yoki desert so‘ralgan. Demak, gap noto‘g‘ri (Falsch).'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-2-r2',
    'sec-a1-2-lesen',
    2,
    'true_false',
    'Lesen Sie die Reservierungsbestätigung. Ist die Aussage richtig oder falsch?',
    'Mehmonxona xatini o‘qing. Gap to‘g‘rimi yoki noto‘g‘ri? "Nonushta uchun qo‘shimcha pul to‘lanadi va u xona narxiga kirmaydi."',
    'Sehr geehrte Familie Becker,

wir bestätigen Ihre Reservierung für ein Doppelzimmer vom 12. bis 17. August (5 Nächte).
Ihr Zimmer steht Ihnen am Anreisetag ab 14:00 Uhr zur Verfügung. Sollten Sie nach 19:00 Uhr anreisen, bitten wir um eine kurze telefonische Benachrichtigung.
Das Frühstücksbuffet wird täglich von 07:00 bis 10:00 Uhr im Erdgeschoss serviert und ist im Zimmerpreis enthalten. Parkplätze im Hof sind für unsere Gäste kostenlos.

Wir freuen uns auf Ihren Besuch!
Mit freundlichen Grüßen
Pension Sonnenschein',
    NULL,
    NULL,
    NULL,
    '[{"id":"opt-r","textDe":"Richtig (To‘g‘ri)","textUz":"Nonushta uchun alohida pul to‘lanadi"},{"id":"opt-f","textDe":"Falsch (Noto‘g‘ri)","textUz":"Nonushta xona narxi ichiga kiritilgan"}]'::jsonb,
    '"opt-f"'::jsonb,
    4,
    'Mehmonxona tasdiqnomasida aniq yozilgan: "Das Frühstücksbuffet... ist im Zimmerpreis enthalten" (Nonushta bufeti xona narxi ichiga kiritilgan). Demak, gap noto‘g‘ri (Falsch).'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-2-r3',
    'sec-a1-2-lesen',
    3,
    'multiple_choice',
    'Sie möchten in Hamburg für ein ganzes Jahr eine 2-Zimmer-Wohnung mieten. Sie haben eine Katze. Welche Webseite passt: A oder B?',
    'Siz Gamburgda kamida 1 yilga mushuk bilan yashash mumkin bo‘lgan 2 xonali kvartira qidiryapsiz. Qaysi sayt mos: A yoki B?',
    'Webseite A: IMMOBILIEN-NORD HAMBURG
Helle 2-Zimmer-Wohnung in Altona, 55 qm, Balkon, Einbauküche. Langzeitmiete (mindestens 12 Monate). Miete 780 € warm. Haustiere (Hunde/Katzen) nach Vereinbarung herzlich willkommen! Sofort frei.

Webseite B: APARTMENT-EXPRESS HAMBURG
Möblierte 1-Zimmer-Apartments für Geschäftsreisende und Touristen. Vermietung nur wochenweise bis maximal 2 Monate. Nichtraucherhaus. Haustiere streng verboten!',
    NULL,
    NULL,
    NULL,
    '[{"id":"opt-a","textDe":"Webseite A (Immobilien-Nord Hamburg)","textUz":"A sayti (Immobilien-Nord Hamburg)"},{"id":"opt-b","textDe":"Webseite B (Apartment-Express Hamburg)","textUz":"B sayti (Apartment-Express Hamburg)"}]'::jsonb,
    '"opt-a"'::jsonb,
    4,
    'Webseite A da 2 xonali kvartira, 12 oylik muddat va uy hayvonlariga ("Haustiere herzlich willkommen") ruxsat berilgan. B saytida esa faqat 1 xonali, qisqa muddatli va hayvonlar taqiqlangan.'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-2-r4',
    'sec-a1-2-lesen',
    4,
    'multiple_choice',
    'Sie möchten am Sonntagabend mit Ihrer Familie ins Kino gehen und online Karten reservieren. Welche Webseite passt: A oder B?',
    'Siz yakshanba oqshomida oilaviy kinoga borib chiptalarni onlayn band qilmoqchisiz. Qaysi veb-sayt mos keladi: A yoki B?',
    'Webseite A: FILMPALAST METROPOL
Aktuelle Blockbuster und Familienfilme auf 8 Sälen. Vorstellungen täglich ab 14:00 Uhr, sonntags auch um 17:30 und 20:15 Uhr. Online-Ticketkauf und Sitzplatzreservierung rund um die Uhr möglich!

Webseite B: KINOMUSEUM DER STADT
Historische Dokumentarfilme und Filmgeschichte. Geöffnet nur von Montag bis Donnerstag, 10:00 bis 16:00 Uhr. Keine Abendvorstellungen. Eintritt frei.',
    NULL,
    NULL,
    NULL,
    '[{"id":"opt-a","textDe":"Webseite A (Filmpalast Metropol)","textUz":"A sayti (Filmpalast Metropol)"},{"id":"opt-b","textDe":"Webseite B (Kinomuseum der Stadt)","textUz":"B sayti (Kinomuseum der Stadt)"}]'::jsonb,
    '"opt-a"'::jsonb,
    4,
    'Webseite A da yakshanba oqshomida kinoseanslar (17:30 va 20:15) va kechayu-kunduz onlayn chipta xaridi mavjud. B sayti esa faqat dushanba-payshanba kunduzi ochiq bo‘lgan muzey.'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-2-r5',
    'sec-a1-2-lesen',
    5,
    'true_false',
    'Lesen Sie den Aushang. Ist die Aussage richtig oder falsch?',
    'Uy qoidalarini (Hausordnung) o‘qing. Gap to‘g‘rimi yoki noto‘g‘ri? "Soat 14:00 da xonadonda drelda teshish yoki ta‘mirlash ishlari olib borish mumkin."',
    'HAUSORDNUNG — WOHNANLAGE GRÜNER WEG
Liebe Bewohnerinnen und Bewohner!
Bitte beachten Sie die gesetzlichen Ruhezeiten im Haus:
Mittagsruhe: 13:00 – 15:00 Uhr
Nachtruhe: 22:00 – 07:00 Uhr
In diesen Zeiten ist laute Musik und handwerkliches Arbeiten (z.B. Bohren, Hämmern) nicht gestattet. Das Abstellen von Fahrrädern im Treppenhaus ist aus Brandschutzgründen verboten. Bitte nutzen Sie den Fahrradkeller.',
    NULL,
    NULL,
    NULL,
    '[{"id":"opt-r","textDe":"Richtig (To‘g‘ri)","textUz":"14:00 da ta‘mirlash mumkin"},{"id":"opt-f","textDe":"Falsch (Noto‘g‘ri)","textUz":"13:00 dan 15:00 gacha shovqinli ishlar taqiqlangan"}]'::jsonb,
    '"opt-f"'::jsonb,
    4,
    'Qoidada 13:00 dan 15:00 gacha kunduzgi sukunat vaqti (Mittagsruhe) ekani va bu vaqtda baland shovqinli ta‘mirlash ishlari ("Bohren, Hämmern nicht gestattet") taqiqlanishi aytilgan. Demak, gap noto‘g‘ri (Falsch).'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-2-r6',
    'sec-a1-2-lesen',
    6,
    'multiple_choice',
    'Wo kann man am Samstagabend eine Fahrkarte kaufen?',
    'Shanba oqshomida poyezd chiptasini qayerdan sotib olish mumkin?',
    'DEUTSCHE BAHN KUNDENINFO:
Fahrkartenverkauf im Reisezentrum am Schalter nur von Montag bis Freitag von 08:00 bis 18:00 Uhr.
Außerhalb dieser Zeiten kaufen Sie Ihre Tickets bitte an den Touchscreen-Automaten auf Bahnsteig 1 und 2 oder online über die DB Navigator App.
Fahrkarten im Zug beim Zugbegleiter zu kaufen ist leider nicht mehr möglich!',
    NULL,
    NULL,
    NULL,
    '[{"id":"opt-1","textDe":"Direkt im Zug beim Zugbegleiter","textUz":"To‘g‘ridan-to‘g‘ri poyezdda konduktordan"},{"id":"opt-2","textDe":"Am Automaten auf dem Bahnsteig oder per App","textUz":"Perpondagi chipta avtomatidan yoki mobil ilovadan"},{"id":"opt-3","textDe":"Im Reisezentrum am Schalter","textUz":"Kassa xodimining oynasidan"},{"id":"opt-4","textDe":"Am Samstagabend gibt es keine Fahrkarten","textUz":"Shanba oqshomida chipta olish imkoni yo‘q"}]'::jsonb,
    '"opt-2"'::jsonb,
    4,
    'E‘londa ko‘rsatilishicha, kassa oynasi shanba kuni ishlamaydi va poyezdda chipta sotilmaydi: "kaufen Sie Ihre Tickets bitte an den Touchscreen-Automaten... oder online über die App".'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

-- Test: A1.1 To‘liq Xalqaro Imtihon (Lesen & Hören)
INSERT INTO public.certificate_tests (
    id, level_code, title_de, title_uz, description_uz,
    duration_minutes, passing_percentage, is_published, total_points, total_questions
) VALUES (
    'cert-test-a1-1',
    'a1-1'::cefr_level_code,
    'Goethe-Zertifikat A1: Start Deutsch 1 — Teilprüfung A1.1',
    'A1.1 To‘liq Xalqaro Imtihon (Lesen & Hören)',
    'Xalqaro Goethe-Zertifikat A1 (Start Deutsch 1) va telc A1 andozasi: 12 ta xalqaro topshiriq (6 ta o‘qish va 6 ta tinglash) bo‘yicha to‘liq baholash.',
    30,
    60,
    true,
    48,
    12
)
ON CONFLICT (id) DO UPDATE SET
    title_de = EXCLUDED.title_de,
    title_uz = EXCLUDED.title_uz,
    description_uz = EXCLUDED.description_uz,
    duration_minutes = EXCLUDED.duration_minutes,
    total_points = EXCLUDED.total_points,
    total_questions = EXCLUDED.total_questions;

INSERT INTO public.certificate_sections (
    id, test_id, skill, title_de, title_uz, instructions_uz, order_index
) VALUES (
    'sec-a1-1-lesen',
    'cert-test-a1-1-reading',
    'reading',
    'Teil 1: Lesen (O‘qish va Tushunish)',
    '1-Bo‘lim: Lesen (O‘qib tushunish)',
    'Har bir matn, rasmiy e‘lon va jadvallarni diqqat bilan o‘rganib, xalqaro imtihon qoidalari bo‘yicha to‘g‘ri javobni tanlang.',
    1
)
ON CONFLICT (id) DO UPDATE SET
    title_de = EXCLUDED.title_de,
    title_uz = EXCLUDED.title_uz,
    instructions_uz = EXCLUDED.instructions_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-1-r1',
    'sec-a1-1-lesen',
    1,
    'true_false',
    'Lesen Sie die E-Mail. Ist die Aussage richtig oder falsch?',
    'E-Mailni o‘qing. Gap to‘g‘rimi yoki noto‘g‘ri? "Marion juma kuni ham til maktabida ishlaydi."',
    'Liebe Bettina,

ich bin jetzt seit zwei Wochen in München. Die Stadt ist wirklich wunderschön! Meine neue Wohnung liegt direkt im Zentrum, nicht weit vom Marienplatz. Ich arbeite von Montag bis Donnerstag in einer Sprachschule als Assistentin. Am Freitag habe ich frei.
Hast du am nächsten Wochenende Zeit? Komm mich doch besuchen! Wir können am Samstag zusammen frühstücken und ins Deutsche Museum gehen.

Schreib mir bald!
Liebe Grüße
Marion',
    NULL,
    NULL,
    NULL,
    '[{"id":"opt-r","textDe":"Richtig (To‘g‘ri)","textUz":"Marion juma kuni ham ishlaydi"},{"id":"opt-f","textDe":"Falsch (Noto‘g‘ri)","textUz":"Marion juma kuni ishlamaydi (bo‘sh)"}]'::jsonb,
    '"opt-f"'::jsonb,
    4,
    'Marion xatida aniq yozgan: "Ich arbeite von Montag bis Donnerstag in einer Sprachschule... Am Freitag habe ich frei." (Dushanbadan payshanbagacha ishlayman, juma kuni esa dam olaman). Demak, gap noto‘g‘ri (Falsch).'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-1-r2',
    'sec-a1-1-lesen',
    2,
    'true_false',
    'Lesen Sie den Brief. Ist die Aussage richtig oder falsch?',
    'Xatni o‘qing. Gap to‘g‘rimi yoki noto‘g‘ri? "Mixael ziyofatga faqat ishidan keyin keladi."',
    'Lieber Thomas,

vielen Dank für die Einladung zu deiner Geburtstagsparty am Samstag. Ich komme sehr gern! Aber ich muss am Samstag bis 18:00 Uhr im Supermarkt arbeiten. Danach fahre ich schnell nach Hause, ziehe mich um und komme dann direkt zu dir. Ich bin ungefähr um 19:30 Uhr bei dir. Soll ich einen Kuchen oder Getränke mitbringen?

Herzliche Grüße
Michael',
    NULL,
    NULL,
    NULL,
    '[{"id":"opt-r","textDe":"Richtig (To‘g‘ri)","textUz":"Mixael ziyofatga ishidan keyin keladi"},{"id":"opt-f","textDe":"Falsch (Noto‘g‘ri)","textUz":"Mixael ertalabdan ziyofatga boradi"}]'::jsonb,
    '"opt-r"'::jsonb,
    4,
    'Mixael xatida yozgan: "Ich muss am Samstag bis 18:00 Uhr im Supermarkt arbeiten. Danach... komme dann direkt zu dir." (Soat 18:00 gacha ishlashim kerak, shundan so‘ng to‘g‘ri sening oldingga boraman). Demak, u ziyofatga ishdan keyin keladi (Richtig).'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-1-r3',
    'sec-a1-1-lesen',
    3,
    'multiple_choice',
    'Sie möchten am Sonntag in Köln frühstücken und suchen ein Café mit Frühstücksbuffet. Welche Webseite passt: A oder B?',
    'Siz yakshanba kuni ertalab Ko‘lnda nonushta qilmoqchisiz va nonushta bufeti bor qahvaxona qidiryapsiz. Qaysi veb-sayt sizga mos: A yoki B?',
    'Webseite A: CAFÉ ZENTRAL — KÖLN
Täglich frischer Kaffee und hausgemachter Kuchen ab 14:00 Uhr. Große Auswahl an Eisspezialitäten und Desserts. Sonntags geöffnet von 14:00 bis 19:00 Uhr. Kein Frühstück!

Webseite B: FRÜHSTÜCKS-OASE KÖLN
Großes warmes und kaltes Frühstücksbuffet jeden Samstag und Sonntag von 08:30 bis 13:00 Uhr! Frische Brötchen, Müsli, Bio-Eier und Kaffeespezialitäten. Tischreservierung empfohlen.',
    NULL,
    NULL,
    NULL,
    '[{"id":"opt-a","textDe":"Webseite A (Café Zentral)","textUz":"A sayti (Café Zentral)"},{"id":"opt-b","textDe":"Webseite B (Frühstücks-Oase Köln)","textUz":"B sayti (Frühstücks-Oase Köln)"}]'::jsonb,
    '"opt-b"'::jsonb,
    4,
    'Webseite B da har shanba va yakshanba soat 08:30 dan 13:00 gacha maxsus nonushta bufeti ("Frühstücksbuffet jeden Samstag und Sonntag") mavjud. Webseite A da esa "Kein Frühstück!" (Nonushta yo‘q, faqat 14:00 dan ochiq) deb yozilgan.'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-1-r4',
    'sec-a1-1-lesen',
    4,
    'multiple_choice',
    'Sie suchen einen Deutschkurs am Abend, weil Sie tagsüber arbeiten. Welche Webseite passt: A oder B?',
    'Kunduzi ishlaganingiz sababli kechki nemis tili kursini qidiryapsiz. Qaysi veb-sayt mos keladi: A yoki B?',
    'Webseite A: SPRACHSTUDIO AKTIV
Intensivkurse Deutsch als Fremdsprache. Unterricht jeden Tag von Montag bis Freitag, 09:00 bis 12:30 Uhr. Kleine Gruppen bis 10 Personen. Kursbeginn jeden Monat.

Webseite B: VOLKSHOCHSCHULE MITTE
Abendkurse Deutsch für Berufstätige. Unterricht dienstags und donnerstags von 18:30 bis 20:30 Uhr. Stufen A1 bis C1. Anmeldung online oder persönlich im Büro.',
    NULL,
    NULL,
    NULL,
    '[{"id":"opt-a","textDe":"Webseite A (Sprachstudio Aktiv)","textUz":"A sayti (Sprachstudio Aktiv)"},{"id":"opt-b","textDe":"Webseite B (Volkshochschule Mitte)","textUz":"B sayti (Volkshochschule Mitte)"}]'::jsonb,
    '"opt-b"'::jsonb,
    4,
    'Webseite B da ishlaydiganlar uchun kechki kurslar taklif qilinmoqda: "Abendkurse Deutsch für Berufstätige... 18:30 bis 20:30 Uhr". A saytida esa kurslar faqat ertalab (09:00-12:30) o‘tiladi.'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-1-r5',
    'sec-a1-1-lesen',
    5,
    'true_false',
    'Lesen Sie das Schild. Ist die Aussage richtig oder falsch?',
    'E‘lonni o‘qing. Gap to‘g‘rimi yoki noto‘g‘ri? "Chorshanba kuni tushdan keyin fuqarolik idorasida pasport olib bo‘lmaydi."',
    'BÜRGERAMT DER STADT BONN
Öffnungszeiten:
Montag, Dienstag, Donnerstag: 08:00 – 16:00 Uhr
Mittwoch: 08:00 – 12:00 Uhr
Freitag: 08:00 – 13:00 Uhr
Samstag und Sonntag: Geschlossen!
Wichtig: Bitte ziehen Sie am Eingang eine Wartenummer.',
    NULL,
    NULL,
    NULL,
    '[{"id":"opt-r","textDe":"Richtig (To‘g‘ri)","textUz":"Chorshanba kuni tushdan keyin idora yopiq"},{"id":"opt-f","textDe":"Falsch (Noto‘g‘ri)","textUz":"Chorshanba kuni kechgacha ochiq"}]'::jsonb,
    '"opt-r"'::jsonb,
    4,
    'E‘londa ko‘rsatilishicha, chorshanba kuni (Mittwoch) idora faqat soat 08:00 dan 12:00 gacha ochiq. Tushdan keyin yopiq bo‘lgani sababli gap to‘g‘ri (Richtig).'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-1-r6',
    'sec-a1-1-lesen',
    6,
    'multiple_choice',
    'Wo finden Sie Herrenschuhe und Sportartikel im Kaufhaus?',
    'Universal do‘konda erkaklar poyabzali va sport tovarlari nechanchi qavatda joylashgan?',
    'KAUFHAUS ALSTER — ETAGEN-ÜBERSICHT:
3. Stock: Restaurant, Café und Kundentoilette
2. Stock: Damenmode, Schuhe, Accessoires
1. Stock: Herrenmode, Schuhe und Sportartikel
Erdgeschoss: Kosmetik, Parfüm, Schreibwaren
Untergeschoss: Lebensmittel, Bäckerei und Parkhaus',
    NULL,
    NULL,
    NULL,
    '[{"id":"opt-1","textDe":"Im 1. Stock","textUz":"1-qavatda (1. Stock)"},{"id":"opt-2","textDe":"Im 2. Stock","textUz":"2-qavatda (2. Stock)"},{"id":"opt-3","textDe":"Im Erdgeschoss","textUz":"Kirish qavatida (Erdgeschoss)"},{"id":"opt-4","textDe":"Im Untergeschoss","textUz":"Yerto‘la qavatida (Untergeschoss)"}]'::jsonb,
    '"opt-1"'::jsonb,
    4,
    'E‘londa: "1. Stock: Herrenmode, Schuhe und Sportartikel" (1-qavat: erkaklar kiyimi, poyabzal va sport tovarlari) deb aniq yozilgan.'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_sections (
    id, test_id, skill, title_de, title_uz, instructions_uz, order_index
) VALUES (
    'sec-a1-1-hoeren',
    'cert-test-a1-1-listening',
    'listening',
    'Teil 2: Hören (Tinglab Tushunish)',
    '2-Bo‘lim: Hören (Tinglab tushunish)',
    'Har bir audio vaziyatni diqqat bilan tinglang (istalgancha takrorlashingiz mumkin). Eshitilgan ma‘lumot asosida eng to‘g‘ri javobni belgilang.',
    2
)
ON CONFLICT (id) DO UPDATE SET
    title_de = EXCLUDED.title_de,
    title_uz = EXCLUDED.title_uz,
    instructions_uz = EXCLUDED.instructions_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-1-h1',
    'sec-a1-1-hoeren',
    1,
    'multiple_choice',
    'Wie viel kosten zwei Kilo Tomaten?',
    'Audiodagi suhbatga ko‘ra: 2 kilogramm pomidor qancha turadi?',
    NULL,
    'Guten Tag! Ich brauche bitte zwei Kilo Tomaten und ein Kilo Äpfel. - Sehr gerne. Die Tomaten kosten heute zwei Euro fünfzig das Kilo, und die Äpfel ein Euro neunzig das Kilo. Möchten Sie sonst noch etwas? - Nein danke, das ist alles. Was macht das zusammen? - Das macht zusammen sechs Euro neunzig, bitte.',
    NULL,
    'Kunde: Guten Tag! Ich brauche bitte zwei Kilo Tomaten und ein Kilo Äpfel.
Verkäufer: Sehr gerne. Die Tomaten kosten heute zwei Euro fünfzig das Kilo, und die Äpfel ein Euro neunzig das Kilo. Möchten Sie sonst noch etwas?
Kunde: Nein danke, das ist alles. Was macht das zusammen?
Verkäufer: Das macht zusammen sechs Euro neunzig, bitte.',
    '[{"id":"opt-a","textDe":"1,90 Euro","textUz":"1,90 yevro"},{"id":"opt-b","textDe":"2,50 Euro","textUz":"2,50 yevro"},{"id":"opt-c","textDe":"5,00 Euro","textUz":"5,00 yevro"}]'::jsonb,
    '"opt-c"'::jsonb,
    4,
    'Sotuvchi ta‘kidlaydi: "Die Tomaten kosten heute 2,50 Euro das Kilo" (Pomidor bir kilosi 2,50 yevro). Xaridor 2 kilo olgani sababli 2 x 2,50 = 5,00 yevro bo‘ladi.'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-1-h2',
    'sec-a1-1-hoeren',
    2,
    'multiple_choice',
    'Um wie viel Uhr fährt der Zug heute tatsächlich ab?',
    'Vokzal xodimi bergan ma‘lumotga ko‘ra: Poyezd bugun kechikish hisobiga soat nechada jo‘naydi?',
    NULL,
    'Entschuldigung, wann fährt der nächste Zug nach Hamburg ab? - Der nächste Zug fährt planmäßig um 15 Uhr 10 von Gleis 3 ab. Aber Achtung: Der Zug hat heute zehn Minuten Verspätung und fährt erst um 15 Uhr 20. - Vielen Dank! Also Gleis 3 um 15 Uhr 20. - Genau so ist es.',
    NULL,
    'Fahrgast: Entschuldigung, wann fährt der nächste Zug nach Hamburg ab?
Bahnbeamter: Der nächste Zug fährt planmäßig um 15 Uhr 10 von Gleis 3 ab. Aber Achtung: Der Zug hat heute zehn Minuten Verspätung und fährt erst um 15 Uhr 20.
Fahrgast: Vielen Dank! Also Gleis 3 um 15 Uhr 20.
Bahnbeamter: Genau so ist es.',
    '[{"id":"opt-a","textDe":"Um 15:00 Uhr","textUz":"Soat 15:00 da"},{"id":"opt-b","textDe":"Um 15:10 Uhr","textUz":"Soat 15:10 da"},{"id":"opt-c","textDe":"Um 15:20 Uhr","textUz":"Soat 15:20 da"}]'::jsonb,
    '"opt-c"'::jsonb,
    4,
    'Xodim aniq ta‘kidlaydi: "Der Zug hat heute zehn Minuten Verspätung und fährt erst um 15 Uhr 20" (Bugun 10 daqiqa kechikkan va faqat 15:20 da jo‘naydi).'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-1-h3',
    'sec-a1-1-hoeren',
    3,
    'true_false',
    'Hören Sie die Durchsage. Ist die Aussage richtig oder falsch?',
    'Vokzal e‘lonini tinglang. Gap to‘g‘rimi yoki noto‘g‘ri? "Berlinga boruvchi poyezd bugun 2-yo‘ldan jo‘naydi."',
    NULL,
    'Achtung an Gleis 2: Der Intercity nach Berlin Hauptbahnhof, planmäßige Abfahrt um 11 Uhr 45, fährt heute nicht von Gleis 2. Wegen technischer Störungen fährt dieser Zug heute ausnahmsweise von Gleis 8 ab. Bitte alle Reisenden nach Berlin zu Gleis 8!',
    NULL,
    'Durchsage am Bahnhof: Achtung an Gleis 2: Der Intercity nach Berlin Hauptbahnhof, planmäßige Abfahrt um 11 Uhr 45, fährt heute nicht von Gleis 2. Wegen technischer Störungen fährt dieser Zug heute ausnahmsweise von Gleis 8 ab. Bitte alle Reisenden nach Berlin zu Gleis 8!',
    '[{"id":"opt-r","textDe":"Richtig (To‘g‘ri)","textUz":"Poyezd 2-yo‘ldan jo‘naydi"},{"id":"opt-f","textDe":"Falsch (Noto‘g‘ri)","textUz":"Poyezd 2-yo‘ldan emas, 8-yo‘ldan jo‘naydi"}]'::jsonb,
    '"opt-f"'::jsonb,
    4,
    'Vokzal karnayida: "fährt heute nicht von Gleis 2... fährt dieser Zug heute ausnahmsweise von Gleis 8 ab" (bugun 2-yo‘ldan emas, 8-yo‘ldan jo‘naydi) deb aytildi. Demak, gap noto‘g‘ri (Falsch).'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-1-h4',
    'sec-a1-1-hoeren',
    4,
    'true_false',
    'Hören Sie die Kaufhausdurchsage. Ist die Aussage richtig oder falsch?',
    'Do‘kon e‘lonini tinglang. Gap to‘g‘rimi yoki noto‘g‘ri? "Do‘kon bugun soat 21:00 gacha ochiq bo‘ladi."',
    NULL,
    'Verehrte Kundinnen und Kunden! Unser Kaufhaus schließt in zehn Minuten, um 20 Uhr. Bitte gehen Sie jetzt zu den Kassen im Erdgeschoss. Wir danken für Ihren Einkauf und wünschen Ihnen einen schönen Feierabend. Morgen früh sind wir ab 9 Uhr wieder für Sie da!',
    NULL,
    'Kaufhausdurchsage: Verehrte Kundinnen und Kunden! Unser Kaufhaus schließt in zehn Minuten, um 20 Uhr. Bitte gehen Sie jetzt zu den Kassen im Erdgeschoss. Wir danken für Ihren Einkauf und wünschen Ihnen einen schönen Feierabend. Morgen früh sind wir ab 9 Uhr wieder für Sie da!',
    '[{"id":"opt-r","textDe":"Richtig (To‘g‘ri)","textUz":"Do‘kon 21:00 gacha ochiq"},{"id":"opt-f","textDe":"Falsch (Noto‘g‘ri)","textUz":"Do‘kon soat 20:00 da yopiladi"}]'::jsonb,
    '"opt-f"'::jsonb,
    4,
    'E‘londa aniq aytildi: "Unser Kaufhaus schließt in zehn Minuten, um 20 Uhr" (Do‘konimiz 10 daqiqadan so‘ng, soat 20:00 da yopiladi). Demak, gap noto‘g‘ri (Falsch).'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-1-h5',
    'sec-a1-1-hoeren',
    5,
    'multiple_choice',
    'Unter welcher Telefonnummer erreichen Sie den ärztlichen Notdienst?',
    'Avtojavob beruvchi aytgan ma‘lumotga ko‘ra: Shoshilinch tibbiy yordam (Notdienst) telefon raqami qaysi?',
    NULL,
    'Guten Tag, hier ist der automatische Anrufbeantworter der Arztpraxis Dr. Bergmann. Unsere Praxis ist heute geschlossen. In dringenden Notfällen wenden Sie sich bitte an den ärztlichen Notdienst unter der Telefonnummer: eins, eins, sechs, eins, eins, sieben. Unsere reguläre Sprechstunde beginnt wieder am Montag ab 8 Uhr.',
    NULL,
    'Telefonansage: Guten Tag, hier ist der automatische Anrufbeantworter der Arztpraxis Dr. Bergmann. Unsere Praxis ist heute geschlossen. In dringenden Notfällen wenden Sie sich bitte an den ärztlichen Notdienst unter der Telefonnummer: 116 117. Unsere reguläre Sprechstunde beginnt wieder am Montag ab 8 Uhr.',
    '[{"id":"opt-a","textDe":"116 117","textUz":"116 117"},{"id":"opt-b","textDe":"112 110","textUz":"112 110"},{"id":"opt-c","textDe":"118 119","textUz":"118 119"}]'::jsonb,
    '"opt-a"'::jsonb,
    4,
    'Audioda raqamlar aniq diktovka qilindi: "eins, eins, sechs, eins, eins, sieben" -> 116 117 (Germaniyadagi umumiy tibbiy yordam xizmati).'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-1-h6',
    'sec-a1-1-hoeren',
    6,
    'multiple_choice',
    'Um wie viel Uhr beginnt der Kinofilm heute?',
    'Ovozli xabarga ko‘ra: Kinofilm bugun soat nechada boshlanadi?',
    NULL,
    'Hallo Lisa, hier ist Jan. Du, ich bin schon am Kino, aber der Film beginnt heute erst um 19 Uhr 15, nicht um 18 Uhr 45. Ich kaufe schon mal die Tickets und warte im Café gegenüber auf dich. Bis gleich!',
    NULL,
    'Mailbox-Nachricht: Hallo Lisa, hier ist Jan. Du, ich bin schon am Kino, aber der Film beginnt heute erst um 19 Uhr 15, nicht um 18 Uhr 45. Ich kaufe schon mal die Tickets und warte im Café gegenüber auf dich. Bis gleich!',
    '[{"id":"opt-a","textDe":"Um 18:45 Uhr","textUz":"Soat 18:45 da"},{"id":"opt-b","textDe":"Um 19:15 Uhr","textUz":"Soat 19:15 da"},{"id":"opt-c","textDe":"Um 19:45 Uhr","textUz":"Soat 19:45 da"}]'::jsonb,
    '"opt-b"'::jsonb,
    4,
    'Yan xabarida aytdi: "der Film beginnt heute erst um 19 Uhr 15, nicht um 18 Uhr 45" (film 18:45 da emas, 19:15 da boshlanadi).'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

-- Test: A1.2 To‘liq Xalqaro Imtihon (Lesen & Hören)
INSERT INTO public.certificate_tests (
    id, level_code, title_de, title_uz, description_uz,
    duration_minutes, passing_percentage, is_published, total_points, total_questions
) VALUES (
    'cert-test-a1-2',
    'a1-2'::cefr_level_code,
    'Goethe-Zertifikat A1: Start Deutsch 1 — Standard-Modellprüfung A1.2',
    'A1.2 To‘liq Xalqaro Imtihon (Lesen & Hören)',
    'Goethe-Institut va telc A1 Start Deutsch 1 rasmiy imtihoni: 12 ta standart topshiriq (Lesen + Hören) bo‘yicha xalqaro darajani aniqlovchi imtihon.',
    35,
    60,
    true,
    48,
    12
)
ON CONFLICT (id) DO UPDATE SET
    title_de = EXCLUDED.title_de,
    title_uz = EXCLUDED.title_uz,
    description_uz = EXCLUDED.description_uz,
    duration_minutes = EXCLUDED.duration_minutes,
    total_points = EXCLUDED.total_points,
    total_questions = EXCLUDED.total_questions;

INSERT INTO public.certificate_sections (
    id, test_id, skill, title_de, title_uz, instructions_uz, order_index
) VALUES (
    'sec-a1-2-lesen',
    'cert-test-a1-2-reading',
    'reading',
    'Teil 1: Lesen (O‘qish va Tushunish)',
    '1-Bo‘lim: Lesen (O‘qib tushunish)',
    'Xalqaro imtihon talablariga mos nemischa xatlar, internet reklamalari va rasmiy e‘lonlarni o‘qib to‘g‘ri javobni tanlang.',
    1
)
ON CONFLICT (id) DO UPDATE SET
    title_de = EXCLUDED.title_de,
    title_uz = EXCLUDED.title_uz,
    instructions_uz = EXCLUDED.instructions_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-2-r1',
    'sec-a1-2-lesen',
    1,
    'true_false',
    'Lesen Sie die Einladung. Ist die Aussage richtig oder falsch?',
    'Taklifnomani o‘qing. Gap to‘g‘rimi yoki noto‘g‘ri? "Mehmonlar o‘zlari bilan kabob uchun go‘sht olib kelishlari shart."',
    'Liebe Nachbarn,

wir sind vor einem Monat in die Blumenstraße 14 eingezogen und haben unsere Wohnung jetzt fertig renoviert. Das möchten wir gerne mit Ihnen feiern!
Wir laden Sie ganz herzlich zu unserem Grillfest im Garten ein: am kommenden Samstag ab 16:30 Uhr.
Für Fleisch, Würstchen und Getränke sorgen wir. Wenn Sie möchten, können Sie gern einen Salat oder ein Dessert mitbringen.
Bitte geben Sie uns bis Donnerstag kurz Bescheid, ob Sie kommen können.

Herzliche Grüße
Stefan und Katja',
    NULL,
    NULL,
    NULL,
    '[{"id":"opt-r","textDe":"Richtig (To‘g‘ri)","textUz":"Mehmonlar o‘zlari go‘sht olib kelishlari kerak"},{"id":"opt-f","textDe":"Falsch (Noto‘g‘ri)","textUz":"Go‘sht va ichimliklarni mezbonlarning o‘zi tayyorlaydi"}]'::jsonb,
    '"opt-f"'::jsonb,
    4,
    'Stefan va Katja yozgan: "Für Fleisch, Würstchen und Getränke sorgen wir" (Go‘sht, kolbasalar va ichimliklarni o‘zimiz tayyorlaymiz). Mehmonlardan faqat xohishiga qarab salat yoki desert so‘ralgan. Demak, gap noto‘g‘ri (Falsch).'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-2-r2',
    'sec-a1-2-lesen',
    2,
    'true_false',
    'Lesen Sie die Reservierungsbestätigung. Ist die Aussage richtig oder falsch?',
    'Mehmonxona xatini o‘qing. Gap to‘g‘rimi yoki noto‘g‘ri? "Nonushta uchun qo‘shimcha pul to‘lanadi va u xona narxiga kirmaydi."',
    'Sehr geehrte Familie Becker,

wir bestätigen Ihre Reservierung für ein Doppelzimmer vom 12. bis 17. August (5 Nächte).
Ihr Zimmer steht Ihnen am Anreisetag ab 14:00 Uhr zur Verfügung. Sollten Sie nach 19:00 Uhr anreisen, bitten wir um eine kurze telefonische Benachrichtigung.
Das Frühstücksbuffet wird täglich von 07:00 bis 10:00 Uhr im Erdgeschoss serviert und ist im Zimmerpreis enthalten. Parkplätze im Hof sind für unsere Gäste kostenlos.

Wir freuen uns auf Ihren Besuch!
Mit freundlichen Grüßen
Pension Sonnenschein',
    NULL,
    NULL,
    NULL,
    '[{"id":"opt-r","textDe":"Richtig (To‘g‘ri)","textUz":"Nonushta uchun alohida pul to‘lanadi"},{"id":"opt-f","textDe":"Falsch (Noto‘g‘ri)","textUz":"Nonushta xona narxi ichiga kiritilgan"}]'::jsonb,
    '"opt-f"'::jsonb,
    4,
    'Mehmonxona tasdiqnomasida aniq yozilgan: "Das Frühstücksbuffet... ist im Zimmerpreis enthalten" (Nonushta bufeti xona narxi ichiga kiritilgan). Demak, gap noto‘g‘ri (Falsch).'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-2-r3',
    'sec-a1-2-lesen',
    3,
    'multiple_choice',
    'Sie möchten in Hamburg für ein ganzes Jahr eine 2-Zimmer-Wohnung mieten. Sie haben eine Katze. Welche Webseite passt: A oder B?',
    'Siz Gamburgda kamida 1 yilga mushuk bilan yashash mumkin bo‘lgan 2 xonali kvartira qidiryapsiz. Qaysi sayt mos: A yoki B?',
    'Webseite A: IMMOBILIEN-NORD HAMBURG
Helle 2-Zimmer-Wohnung in Altona, 55 qm, Balkon, Einbauküche. Langzeitmiete (mindestens 12 Monate). Miete 780 € warm. Haustiere (Hunde/Katzen) nach Vereinbarung herzlich willkommen! Sofort frei.

Webseite B: APARTMENT-EXPRESS HAMBURG
Möblierte 1-Zimmer-Apartments für Geschäftsreisende und Touristen. Vermietung nur wochenweise bis maximal 2 Monate. Nichtraucherhaus. Haustiere streng verboten!',
    NULL,
    NULL,
    NULL,
    '[{"id":"opt-a","textDe":"Webseite A (Immobilien-Nord Hamburg)","textUz":"A sayti (Immobilien-Nord Hamburg)"},{"id":"opt-b","textDe":"Webseite B (Apartment-Express Hamburg)","textUz":"B sayti (Apartment-Express Hamburg)"}]'::jsonb,
    '"opt-a"'::jsonb,
    4,
    'Webseite A da 2 xonali kvartira, 12 oylik muddat va uy hayvonlariga ("Haustiere herzlich willkommen") ruxsat berilgan. B saytida esa faqat 1 xonali, qisqa muddatli va hayvonlar taqiqlangan.'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-2-r4',
    'sec-a1-2-lesen',
    4,
    'multiple_choice',
    'Sie möchten am Sonntagabend mit Ihrer Familie ins Kino gehen und online Karten reservieren. Welche Webseite passt: A oder B?',
    'Siz yakshanba oqshomida oilaviy kinoga borib chiptalarni onlayn band qilmoqchisiz. Qaysi veb-sayt mos keladi: A yoki B?',
    'Webseite A: FILMPALAST METROPOL
Aktuelle Blockbuster und Familienfilme auf 8 Sälen. Vorstellungen täglich ab 14:00 Uhr, sonntags auch um 17:30 und 20:15 Uhr. Online-Ticketkauf und Sitzplatzreservierung rund um die Uhr möglich!

Webseite B: KINOMUSEUM DER STADT
Historische Dokumentarfilme und Filmgeschichte. Geöffnet nur von Montag bis Donnerstag, 10:00 bis 16:00 Uhr. Keine Abendvorstellungen. Eintritt frei.',
    NULL,
    NULL,
    NULL,
    '[{"id":"opt-a","textDe":"Webseite A (Filmpalast Metropol)","textUz":"A sayti (Filmpalast Metropol)"},{"id":"opt-b","textDe":"Webseite B (Kinomuseum der Stadt)","textUz":"B sayti (Kinomuseum der Stadt)"}]'::jsonb,
    '"opt-a"'::jsonb,
    4,
    'Webseite A da yakshanba oqshomida kinoseanslar (17:30 va 20:15) va kechayu-kunduz onlayn chipta xaridi mavjud. B sayti esa faqat dushanba-payshanba kunduzi ochiq bo‘lgan muzey.'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-2-r5',
    'sec-a1-2-lesen',
    5,
    'true_false',
    'Lesen Sie den Aushang. Ist die Aussage richtig oder falsch?',
    'Uy qoidalarini (Hausordnung) o‘qing. Gap to‘g‘rimi yoki noto‘g‘ri? "Soat 14:00 da xonadonda drelda teshish yoki ta‘mirlash ishlari olib borish mumkin."',
    'HAUSORDNUNG — WOHNANLAGE GRÜNER WEG
Liebe Bewohnerinnen und Bewohner!
Bitte beachten Sie die gesetzlichen Ruhezeiten im Haus:
Mittagsruhe: 13:00 – 15:00 Uhr
Nachtruhe: 22:00 – 07:00 Uhr
In diesen Zeiten ist laute Musik und handwerkliches Arbeiten (z.B. Bohren, Hämmern) nicht gestattet. Das Abstellen von Fahrrädern im Treppenhaus ist aus Brandschutzgründen verboten. Bitte nutzen Sie den Fahrradkeller.',
    NULL,
    NULL,
    NULL,
    '[{"id":"opt-r","textDe":"Richtig (To‘g‘ri)","textUz":"14:00 da ta‘mirlash mumkin"},{"id":"opt-f","textDe":"Falsch (Noto‘g‘ri)","textUz":"13:00 dan 15:00 gacha shovqinli ishlar taqiqlangan"}]'::jsonb,
    '"opt-f"'::jsonb,
    4,
    'Qoidada 13:00 dan 15:00 gacha kunduzgi sukunat vaqti (Mittagsruhe) ekani va bu vaqtda baland shovqinli ta‘mirlash ishlari ("Bohren, Hämmern nicht gestattet") taqiqlanishi aytilgan. Demak, gap noto‘g‘ri (Falsch).'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-2-r6',
    'sec-a1-2-lesen',
    6,
    'multiple_choice',
    'Wo kann man am Samstagabend eine Fahrkarte kaufen?',
    'Shanba oqshomida poyezd chiptasini qayerdan sotib olish mumkin?',
    'DEUTSCHE BAHN KUNDENINFO:
Fahrkartenverkauf im Reisezentrum am Schalter nur von Montag bis Freitag von 08:00 bis 18:00 Uhr.
Außerhalb dieser Zeiten kaufen Sie Ihre Tickets bitte an den Touchscreen-Automaten auf Bahnsteig 1 und 2 oder online über die DB Navigator App.
Fahrkarten im Zug beim Zugbegleiter zu kaufen ist leider nicht mehr möglich!',
    NULL,
    NULL,
    NULL,
    '[{"id":"opt-1","textDe":"Direkt im Zug beim Zugbegleiter","textUz":"To‘g‘ridan-to‘g‘ri poyezdda konduktordan"},{"id":"opt-2","textDe":"Am Automaten auf dem Bahnsteig oder per App","textUz":"Perpondagi chipta avtomatidan yoki mobil ilovadan"},{"id":"opt-3","textDe":"Im Reisezentrum am Schalter","textUz":"Kassa xodimining oynasidan"},{"id":"opt-4","textDe":"Am Samstagabend gibt es keine Fahrkarten","textUz":"Shanba oqshomida chipta olish imkoni yo‘q"}]'::jsonb,
    '"opt-2"'::jsonb,
    4,
    'E‘londa ko‘rsatilishicha, kassa oynasi shanba kuni ishlamaydi va poyezdda chipta sotilmaydi: "kaufen Sie Ihre Tickets bitte an den Touchscreen-Automaten... oder online über die App".'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_sections (
    id, test_id, skill, title_de, title_uz, instructions_uz, order_index
) VALUES (
    'sec-a1-2-hoeren',
    'cert-test-a1-2-listening',
    'listening',
    'Teil 2: Hören (Tinglab Tushunish)',
    '2-Bo‘lim: Hören (Tinglab tushunish)',
    'Har bir audio dialog yoki xabarni diqqat bilan tinglang va berilgan savollarga eng to‘g‘ri javobni tanlang.',
    2
)
ON CONFLICT (id) DO UPDATE SET
    title_de = EXCLUDED.title_de,
    title_uz = EXCLUDED.title_uz,
    instructions_uz = EXCLUDED.instructions_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-2-h1',
    'sec-a1-2-hoeren',
    1,
    'multiple_choice',
    'Wie viel bezahlt der Kunde für die Jacke?',
    'Do‘kondagi suhbatga ko‘ra: Xaridor kurtka uchun necha yevro to‘laydi?',
    NULL,
    'Guten Tag! Kann ich Ihnen helfen? - Ja gerne. Ich suche diese blaue Winterjacke. Haben Sie die noch in Größe 50? - Einen Moment, ich schaue mal im Lager nach... Ja, hier ist die letzte in Größe 50. - Wunderbar, die passt genau! Was kostet sie denn? - Sie war ursprünglich 120 Euro, aber heute im Winterschlussverkauf kostet sie nur 79 Euro. - Super, die nehme ich sofort.',
    NULL,
    'Verkäuferin: Guten Tag! Kann ich Ihnen helfen?
Kunde: Ja gerne. Ich suche diese blaue Winterjacke. Haben Sie die noch in Größe 50?
Verkäuferin: Einen Moment, ich schaue mal im Lager nach... Ja, hier ist die letzte in Größe 50.
Kunde: Wunderbar, die passt genau! Was kostet sie denn?
Verkäuferin: Sie war ursprünglich 120 Euro, aber heute im Winterschlussverkauf kostet sie nur 79 Euro.
Kunde: Super, die nehme ich sofort.',
    '[{"id":"opt-a","textDe":"50 Euro","textUz":"50 yevro"},{"id":"opt-b","textDe":"79 Euro","textUz":"79 yevro"},{"id":"opt-c","textDe":"120 Euro","textUz":"120 yevro"}]'::jsonb,
    '"opt-b"'::jsonb,
    4,
    'Sotuvchi aytadi: "ursprünglich 120 Euro, aber heute im Winterschlussverkauf kostet sie nur 79 Euro" (aslida 120 yevro edi, bugungi mavsumiy chegirmada esa 79 yevro). 50 esa kurtka o‘lchami (Größe).'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-2-h2',
    'sec-a1-2-hoeren',
    2,
    'multiple_choice',
    'Wie viel Trinkgeld gibt der Gast dem Kellner?',
    'Restorandagi suhbatga ko‘ra: Mehmon ofitsiantga qancha choypuli (Trinkgeld) qoldirdi?',
    NULL,
    'Hat es Ihnen geschmeckt? - Ja, ausgezeichnet, vielen Dank! Wir möchten bitte zahlen. - Sehr gerne. Zahlen Sie zusammen oder getrennt? - Bitte getrennt. Ich hatte das Schnitzel mit Kartoffelsalat und ein Mineralwasser. - Das macht für Sie genau vierzehn Euro fünfzig. - Hier sind siebzehn Euro, der Rest ist für Sie. - Vielen herzlichen Dank!',
    NULL,
    'Kellner: Hat es Ihnen geschmeckt?
Gast: Ja, ausgezeichnet, vielen Dank! Wir möchten bitte zahlen.
Kellner: Sehr gerne. Zahlen Sie zusammen oder getrennt?
Gast: Bitte getrennt. Ich hatte das Schnitzel mit Kartoffelsalat und ein Mineralwasser.
Kellner: Das macht für Sie genau vierzehn Euro fünfzig.
Gast: Hier sind siebzehn Euro, der Rest ist für Sie.
Kellner: Vielen herzlichen Dank!',
    '[{"id":"opt-a","textDe":"2,50 Euro","textUz":"2,50 yevro"},{"id":"opt-b","textDe":"14,50 Euro","textUz":"14,50 yevro"},{"id":"opt-c","textDe":"17,00 Euro","textUz":"17,00 yevro"}]'::jsonb,
    '"opt-a"'::jsonb,
    4,
    'Hisob 14,50 yevro bo‘ldi. Mehmon 17 yevro berib, qaytimni ofitsiantga qoldirdi: 17,00 - 14,50 = 2,50 yevro choypuli (Trinkgeld).'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-2-h3',
    'sec-a1-2-hoeren',
    3,
    'true_false',
    'Hören Sie die Flughafendurchsage. Ist die Aussage richtig oder falsch?',
    'Aeroport e‘lonini tinglang. Gap to‘g‘rimi yoki noto‘g‘ri? "Nyu-Yorkka uchuvchi yo‘lovchilar B 24 darvozasiga (Gate) borishlari kerak."',
    NULL,
    'Achtung, dies ist ein Aufruf für die Fluggäste von Lufthansa-Flug LH 442 nach New York. Das Boarding für diesen Flug hat soeben an Flugsteig B 24 begonnen. Wegen eines Flugsteigwechsels begeben sich bitte alle Fluggäste nicht mehr zu Gate A 10, sondern sofort zu Gate B 24. Ich wiederhole: Gate B 24.',
    NULL,
    'Flughafendurchsage: Achtung, dies ist ein Aufruf für die Fluggäste von Lufthansa-Flug LH 442 nach New York. Das Boarding für diesen Flug hat soeben an Flugsteig B 24 begonnen. Wegen eines Flugsteigwechsels begeben sich bitte alle Fluggäste nicht mehr zu Gate A 10, sondern sofort zu Gate B 24. Ich wiederhole: Gate B 24.',
    '[{"id":"opt-r","textDe":"Richtig (To‘g‘ri)","textUz":"Yo‘lovchilar B 24 darvozasiga borishlari kerak"},{"id":"opt-f","textDe":"Falsch (Noto‘g‘ri)","textUz":"Yo‘lovchilar A 10 darvozasiga borishlari kerak"}]'::jsonb,
    '"opt-r"'::jsonb,
    4,
    'E‘londa aniq ta‘kidlandi: "begeben sich bitte alle Fluggäste... sofort zu Gate B 24" (barcha yo‘lovchilar darhol B 24 darvozasiga o‘tsinlar). Demak, gap to‘g‘ri (Richtig).'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-2-h4',
    'sec-a1-2-hoeren',
    4,
    'true_false',
    'Hören Sie die Zugdurchsage. Ist die Aussage richtig oder falsch?',
    'Poyezd e‘lonini tinglang. Gap to‘g‘rimi yoki noto‘g‘ri? "Ushbu poyezd Shtutgartdan so‘ng to‘g‘ri Myunxenga davom etadi."',
    NULL,
    'Sehr geehrte Fahrgäste, wir erreichen in wenigen Minuten Stuttgart Hauptbahnhof. Dieser Zug endet hier, bitte alle Fahrgäste aussteigen! Fahrgäste in Richtung München nutzen bitte den ICE 518 auf Gleis 4, Abfahrt 16 Uhr 15. Wir bedanken uns für Ihre Reise mit der Deutschen Bahn.',
    NULL,
    'Zugdurchsage: Sehr geehrte Fahrgäste, wir erreichen in wenigen Minuten Stuttgart Hauptbahnhof. Dieser Zug endet hier, bitte alle Fahrgäste aussteigen! Fahrgäste in Richtung München nutzen bitte den ICE 518 auf Gleis 4, Abfahrt 16 Uhr 15. Wir bedanken uns für Ihre Reise mit der Deutschen Bahn.',
    '[{"id":"opt-r","textDe":"Richtig (To‘g‘ri)","textUz":"Poyezd Myunxenga davom etadi"},{"id":"opt-f","textDe":"Falsch (Noto‘g‘ri)","textUz":"Poyezd shu yerda to‘xtaydi va Myunxenga boshqa poyezdga o‘tirish kerak"}]'::jsonb,
    '"opt-f"'::jsonb,
    4,
    'E‘londa: "Dieser Zug endet hier, bitte alle Fahrgäste aussteigen!" (Ushbu poyezd shu yerda to‘xtaydi, barcha yo‘lovchilar tushsin) deyilgan. Myunxenga boruvchilar ICE 518 poyezdiga o‘tirishlari lozim. Demak, gap noto‘g‘ri (Falsch).'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-2-h5',
    'sec-a1-2-hoeren',
    5,
    'multiple_choice',
    'Bis wann kann Herr Wagner sein Auto heute abholen?',
    'Avtoservis xabariga ko‘ra: Janob Vagner bugun mashinasini kechiktirmasdan soat nechagacha olib ketishi mumkin?',
    NULL,
    'Guten Tag Herr Wagner, hier ist die Autowerkstatt Müller. Die Reparatur an Ihren Bremsen ist fertig und Ihr Auto ist abholbereit. Sie können den Wagen heute bis 18:30 Uhr oder morgen ab 8:00 Uhr abholen. Die Gesamtrechnung beträgt 240 Euro. Bei Fragen rufen Sie uns bitte an. Vielen Dank!',
    NULL,
    'Anrufbeantworter: Guten Tag Herr Wagner, hier ist die Autowerkstatt Müller. Die Reparatur an Ihren Bremsen ist fertig und Ihr Auto ist abholbereit. Sie können den Wagen heute bis 18:30 Uhr oder morgen ab 8:00 Uhr abholen. Die Gesamtrechnung beträgt 240 Euro. Bei Fragen rufen Sie uns bitte an. Vielen Dank!',
    '[{"id":"opt-a","textDe":"Bis 17:00 Uhr","textUz":"Soat 17:00 gacha"},{"id":"opt-b","textDe":"Bis 18:30 Uhr","textUz":"Soat 18:30 gacha"},{"id":"opt-c","textDe":"Bis 20:00 Uhr","textUz":"Soat 20:00 gacha"}]'::jsonb,
    '"opt-b"'::jsonb,
    4,
    'Avtoservis xabarida aniq belgilangan: "Sie können den Wagen heute bis 18:30 Uhr oder morgen ab 8:00 Uhr abholen" (mashinani bugun soat 18:30 gacha olib ketishingiz mumkin).'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

INSERT INTO public.certificate_questions (
    id, section_id, order_index, type, prompt_de, prompt_uz,
    passage_de, audio_text, audio_url, transcript_de,
    options, correct_answer, points, explanation_uz
) VALUES (
    'q-a1-2-h6',
    'sec-a1-2-hoeren',
    6,
    'multiple_choice',
    'Für welchen neuen Termin ruft die Praxis an?',
    'Stomatologiya qabuli xabariga ko‘ra: Bemor uchun qaysi yangi qabul vaqti taklif etilmoqda?',
    NULL,
    'Guten Tag Frau Schmidt, hier spricht Schwester Sabine von der Zahnarztpraxis Dr. Keller. Wir rufen an wegen Ihres Termins am Donnerstag um 15 Uhr. Herr Dr. Keller ist am Donnerstag leider verhindert. Könnten Sie stattdessen am Freitag um 10 Uhr 30 kommen? Bitte rufen Sie uns kurz zurück unter der Nummer 030 421 70. Danke!',
    NULL,
    'Mailbox-Nachricht: Guten Tag Frau Schmidt, hier spricht Schwester Sabine von der Zahnarztpraxis Dr. Keller. Wir rufen an wegen Ihres Termins am Donnerstag um 15 Uhr. Herr Dr. Keller ist am Donnerstag leider verhindert. Könnten Sie stattdessen am Freitag um 10 Uhr 30 kommen? Bitte rufen Sie uns kurz zurück unter der Nummer 030 421 70. Danke!',
    '[{"id":"opt-a","textDe":"Am Donnerstag um 15:00 Uhr","textUz":"Payshanba kuni soat 15:00 da"},{"id":"opt-b","textDe":"Am Freitag um 10:30 Uhr","textUz":"Juma kuni soat 10:30 da"},{"id":"opt-c","textDe":"Am Montag um 08:00 Uhr","textUz":"Dushanba kuni soat 08:00 da"}]'::jsonb,
    '"opt-b"'::jsonb,
    4,
    'Hamshira aytadi: "Könnten Sie stattdessen am Freitag um 10 Uhr 30 kommen?" (Buning o‘rniga juma kuni soat 10:30 da kela olasizmi?).'
)
ON CONFLICT (id) DO UPDATE SET
    prompt_de = EXCLUDED.prompt_de,
    prompt_uz = EXCLUDED.prompt_uz,
    passage_de = EXCLUDED.passage_de,
    audio_text = EXCLUDED.audio_text,
    audio_url = EXCLUDED.audio_url,
    transcript_de = EXCLUDED.transcript_de,
    options = EXCLUDED.options,
    correct_answer = EXCLUDED.correct_answer,
    points = EXCLUDED.points,
    explanation_uz = EXCLUDED.explanation_uz;

