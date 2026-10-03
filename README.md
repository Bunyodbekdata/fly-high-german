# FOR GREAT NATION — Nemis Tili Ta‘lim Platformasi

> **Nemis tilini noldan B1 darajagacha mustaqil, bosqichma-bosqich o‘rganish uchun O‘zbek tilidagi mukammal raqamli ta‘lim tizimi.**

---

## 🌟 Asosiy Maqsad va Xususiyatlar

"For Great Nation" — shunchaki so‘zlar to‘plami emas, balki xalqaro **CEFR (A1.1 dan B1.2 gacha)** mezonlariga asoslangan, o‘qituvchisiz mustaqil o‘rganish uchun mo‘ljallangan to‘liq raqamli darslik va amaliyot platformasidir.

### ✨ Asosiy Afzalliklari:
1. **100% O‘zbek tilidagi tushunarli interfeys va grammatika**:
   - Har bir grammatik mavzu sodda, qulay jadvallar, rangli artikllar va kundalik misollar orqali tushuntirilgan.
2. **Har bir darsda 8 ta to‘liq ko‘nikma**:
   - 🎯 **1. Maqsad (Objectives)**: Darsdan kutiladigan pedagogik natija.
   - 📖 **2. Lug‘at (Vocabulary)**: Nemischa so‘z, artikl (der - ko‘k, die - qizil, das - yashil), ko‘plik shakli, o‘zbekcha tarjimasi, namuna gap va audio.
   - 📐 **3. Grammatika (Grammar)**: Tushunarli o‘zbekcha qoidalar, jadvallar va tez-tez uchraydigan xatolar tahlili.
   - 🎧 **4. Tinglab tushunish (Listening)**: Jonli dialoglar, o‘chirib-yoqiladigan transkript va tarjima, tushunish savollari.
   - 📚 **5. O‘qib tushunish (Reading)**: CEFR darajasiga mos nemischa matnlar, yangi so‘zlar lug‘atchasi va testlar.
   - ✍️ **6. Yozma amaliyot (Writing)**: Amaliy vazifalar, so‘zlar ro‘yxati, tavsiya etilgan matn strukturasi va namunaviy javoblar.
   - 🎙 **7. Shadowing (Talaffuz va so‘zlashuv)**: Nemischa jumlalarni eshitish (Play), qayta tinglash (Replay) va mikrofonga ovoz yozib takrorlash (Repeat).
   - 📝 **8. Interaktiv mashqlar (Practice)**: To‘g‘ri javobni tanlash, bo‘sh o‘rinlarni to‘ldirish, so‘zlarni tartiblash, moslashtirish, ballar hisobi va xatolar tahlili.
3. **CEFR O‘quv Yo‘nalishi (Roadmap)**:
   - **A1.1** — Boshlang‘ich bosqich (5 ta modul, 15 ta to‘liq namunaviy dars kiritilgan).
   - **A1.2** — Kundalik muloqot va o‘tgan zamon (Perfekt, Dativ).
   - **A2.1** — Tajriba va sayohatlar.
   - **A2.2** — Karyera, fikr bildirish va Konjunktiv II.
   - **B1.1** — Mustaqil til egasi va mulohaza yuritish.
   - **B1.2** — Rasmiy muloqot, taqdimotlar va Goethe/telc sertifikatiga tayyorgarlik.
4. **Maxsus Bo‘limlar**:
   - 🗂 **Lug‘at kutubxonasi (`/vocabulary`)**: Daraja, so‘z turkumi bo‘yicha filtrlar, qidiruv va **Flashcard** rejimi.
   - 📚 **Grammatika darsligi (`/grammar`)**: Darajalar bo‘yicha saralangan to‘liq grammatik qo‘llanma.
   - 🎙 **Shadowing studiyasi (`/shadowing`)**: Har bir daraja bo‘yicha talaffuz mashqlari.
   - 🔍 **Global qidiruv (Search Modal `Ctrl+K`)**: Nemischa so‘zlar, o‘zbekcha tarjimalar, darslar va grammatik mavzularni bir zumda topish.
   - 📊 **Talaba Kabineti (`/dashboard`)**: Silsila (streak), kunlik maqsad, so‘nggi darsni davom ettirish tugmasi.
   - 🛡 **Admin Boshqaruv Paneli (`/admin`)**: Kodga kirmasdan darslar qo‘shish, o‘chirish, lug‘at kiritish va darslarni faollashtirish (publish/unpublish).

---

## 🛠 Texnologik Stek

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, Lucide Icons, Canvas Confetti
- **Audio & Ovoz**: Native Web Speech API (Germaniya nemischasi `de-DE`), Web Audio & MediaRecorder API
- **Ma‘lumotlar bazasi**: Supabase PostgreSQL (Row Level Security bilan) + Mahalliy doimiy sinxronizatsiya (LocalStorage/IndexedDB)
- **Arxitektura**: Komponentlarga ajratilgan, modulli va kengaytiriladigan tizim

---

## 🚀 Loyihani Ishga Tushirish

1. **Kutubxonalarni o‘rnatish**:
   ```bash
   npm install
   ```

2. **Dasturni ishlab chiquvchi rejimida ishga tushirish**:
   ```bash
   npm run dev
   ```
   Brauzerda oching: `http://localhost:5173`

3. **Ishlab chiqarish (Production) uchun yig‘ish**:
   ```bash
   npm run build
   ```

---

## 🗄 Ma‘lumotlar Bazasi va Supabase Integratsiyasi

Loyihaning PostgreSQL skripti `supabase/migrations/20260928_initial_schema.sql` faylida to‘liq tayyorlangan. U quyidagi jadvallarni o‘z ichiga oladi:
- `profiles`, `levels`, `modules`, `lessons`, `vocabulary`, `grammar_topics`
- `listening_exercises`, `reading_materials`, `writing_tasks`, `shadowing_exercises`, `exercises`
- `lesson_progress`, `vocabulary_progress`
- Barcha jadvallar uchun **Row Level Security (RLS)** qoidalari o‘rnatilgan.
