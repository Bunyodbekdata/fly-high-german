# FOR GREAT NATION · FLY HIGH (German Learning Platform)

Nemis tilini o'rganish bo'yicha interaktiv veb-platforma. A1.1 dan B1.2 gacha bo'lgan yo'l xaritasi, 9 bosqichli dars metodikasi, fonetika laboratoriyasi, so'zlar kolleksiyasi (flashcard) va ichki demo testlar.

---

## 🚀 Loyiha tuzilishi

- **`index.html`** — Asl loyiha kodi (HTML, ichki CSS va JavaScript bilan to'liq ishchi holatda).
- **`index_redesign.html`** / **`style.css`** / **`app.js`** — Loyihaning modulli va yangilangan dizayn versiyasi.
- **`server.js`** — Mahalliy ko'rish uchun yengil Node.js server.

---

## 🛠️ Ishga tushirish (Local)

Loyiha hech qanday murakkab kutubxonalarsiz ishlaydi. Uni ishga tushirishning bir nechta oddiy usuli bor:

### 1-usul: To'g'ridan-to'g'ri brauzerda ochish
Fayl menejerida `index.html` faylini ikki marta bosib, istalgan brauzerda (Chrome, Edge, Firefox, Safari) ochishingiz mumkin.

### 2-usul: Node.js orqali ishga tushirish
```bash
node server.js
```
Brauzerda oching: `http://localhost:4173/`

---

## 🌐 GitHub Pages orqali jonli (Live) chiqarish

1. GitHub'dagi ushbu ombor (repo) sozlamalariga kiring: **Settings** > **Pages**.
2. **Branch** bo'limida `main` (yoki `master`) tarmog'ini va `/ (root)` papkasini tanlang.
3. **Save** tugmasini bosing.
4. Bir necha daqiqadan so'ng veb-saytingiz bepul `https://<sizning-username>.github.io/<repo-nomi>/` manzilida jonli ishga tushadi!
