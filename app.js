/**
 * FLY HIGH · FOR GREAT NATION - Interactive Engine
 * Core Logic, Audio Engine, 9-Step Lesson Engine, Vocab Flashcards & Exam Simulator
 */

(() => {
  'use strict';

  // --- Sound Effects Synthesizer (Web Audio API - No external MP3 dependencies) ---
  const AudioFX = {
    ctx: null,
    init() {
      if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      }
    },
    chime() {
      try {
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, now); // D5
        osc.frequency.exponentialRampToValueAtTime(880.00, now + 0.15); // A5
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.35);
      } catch (e) { /* ignore audio failure */ }
    },
    click() {
      try {
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(160, now + 0.05);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.06);
      } catch (e) { /* ignore */ }
    },
    fanfare() {
      try {
        this.init();
        if (!this.ctx) return;
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        notes.forEach((freq, idx) => {
          const now = this.ctx.currentTime + idx * 0.12;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now);
          gain.gain.setValueAtTime(0.18, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now);
          osc.stop(now + 0.3);
        });
      } catch (e) { /* ignore */ }
    }
  };

  // --- Data Stores ---
  const VOCAB_DATA = [
    { id: 1, article: 'der', german: 'Tisch', uz: 'stol', plural: 'die Tische', level: 'A1.1', type: 'Ot', example: 'Der Tisch ist sehr groß.', exampleUz: 'Stol juda katta.' },
    { id: 2, article: 'die', german: 'Lampe', uz: 'chiroq', plural: 'die Lampen', level: 'A1.1', type: 'Ot', example: 'Die Lampe ist neu und modern.', exampleUz: 'Chiroq yangi va zamonaviy.' },
    { id: 3, article: 'das', german: 'Buch', uz: 'kitob', plural: 'die Bücher', level: 'A1.1', type: 'Ot', example: 'Das Buch ist interessant.', exampleUz: 'Kitob qiziqarli.' },
    { id: 4, article: 'die', german: 'Bücher', uz: 'kitoblar', plural: '—', level: 'A1.2', type: 'Ot', pluralArticle: true, example: 'Die Bücher liegen auf dem Tisch.', exampleUz: 'Kitoblar stol ustida turibdi.' },
    { id: 5, article: '', german: 'lernen', uz: 'o‘rganmoq', plural: '—', level: 'A1.1', type: 'Fe’l', example: 'Ich lerne jeden Tag Deutsch.', exampleUz: 'Men har kuni nemis tilini o‘rganaman.' },
    { id: 6, article: '', german: 'sprechen', uz: 'gapirmoq', plural: '—', level: 'A1.1', type: 'Fe’l', example: 'Sprichst du Deutsch?', exampleUz: 'Nemischa gapirasanmi?' },
    { id: 7, article: '', german: 'schön', uz: 'chiroyli', plural: '—', level: 'A1.1', type: 'Sifat', example: 'Taschkent ist eine schöne Stadt.', exampleUz: 'Toshkent chiroyli shahar.' },
    { id: 8, article: 'der', german: 'Apfel', uz: 'olma', plural: 'die Äpfel', level: 'A1.1', type: 'Ot', example: 'Der Apfel schmeckt süß.', exampleUz: 'Olma shirin.' },
    { id: 9, article: 'die', german: 'Schule', uz: 'maktab', plural: 'die Schulen', level: 'A1.2', type: 'Ot', example: 'Meine Schule ist groß.', exampleUz: 'Mening maktabim katta.' },
    { id: 10, article: 'das', german: 'Haus', uz: 'uy', plural: 'die Häuser', level: 'A1.1', type: 'Ot', example: 'Das Haus hat einen Garten.', exampleUz: 'Uyning bog‘i bor.' },
    { id: 11, article: '', german: 'Guten Tag', uz: 'Xayrli kun', plural: '—', level: 'A1.1', type: 'Ibora', example: 'Guten Tag, wie geht es Ihnen?', exampleUz: 'Xayrli kun, ahvollaringiz qanday?' },
    { id: 12, article: '', german: 'Auf Wiedersehen', uz: 'Ko‘rishguncha xayr', plural: '—', level: 'A1.1', type: 'Ibora', example: 'Auf Wiedersehen, bis morgen!', exampleUz: 'Xayr, ertagacha!' }
  ];

  const LESSON_STAGES = [
    { title: 'Kirish', icon: 'compass', desc: 'Mavzuga umumiy tushuncha' },
    { title: 'Muloqot', icon: 'message-square', desc: 'Hayotiy dialog' },
    { title: 'Lug‘at', icon: 'layers', desc: 'Yangi so‘zlar va artikllar' },
    { title: 'Grammatika', icon: 'code-2', desc: 'V2 so‘z tartibi' },
    { title: 'Tinglash', icon: 'headphones', desc: 'Hören mashqi' },
    { title: 'O‘qish', icon: 'book-open', desc: 'Lesen matni' },
    { title: 'Yozish', icon: 'pen-tool', desc: 'Schreiben mashqi' },
    { title: 'Shadowing', icon: 'mic', desc: 'Talaffuz taqlidi' },
    { title: 'Imtihon & XP', icon: 'trophy', desc: 'Bilimni tekshirish' }
  ];

  const COURSES_DATA = [
    { id: 0, de: 'Hallo! Tanishuv', uz: 'Salomlashuv va ilk iboralar', unlocked: true, completed: true, xp: 25 },
    { id: 1, de: 'Wie heißt du?', uz: 'Ism, millat va kasblar', unlocked: true, completed: false, xp: 30 },
    { id: 2, de: 'Meine Familie', uz: 'Oila a’zolari haqida suhbat', unlocked: true, completed: false, xp: 35 },
    { id: 3, de: 'Im Café', uz: 'Kafeda buyurtma berish', unlocked: false, completed: false, xp: 40 },
    { id: 4, de: 'Mein Alltag', uz: 'Kundalik odatlar va soat', unlocked: false, completed: false, xp: 45 },
    { id: 5, de: 'In der Stadt', uz: 'Shaharda manzil topish', unlocked: false, completed: false, xp: 50 }
  ];

  const CEFR_LEVELS = [
    { name: 'A1.1', title: 'Ilk qadamlar', status: 'Faol', desc: 'Salomlashish, alifbo va oddiy suhbatlar', xp: '+50 XP', progress: 40 },
    { name: 'A1.2', title: 'Asoslar', status: 'Ochiq', desc: 'Kundalik turmush, xaridlar va oila', xp: '+75 XP', progress: 0 },
    { name: 'A2.1', title: 'Ishonchli muloqot', status: 'Qulflangan', desc: 'Sayohat, o‘tmish zamon va xatlar', xp: '+100 XP', progress: 0 },
    { name: 'A2.2', title: 'Erkin ifoda', status: 'Qulflangan', desc: 'Kasalxona, ish va rejalar', xp: '+120 XP', progress: 0 },
    { name: 'B1.1', title: 'Mustaqil so‘zlashuv', status: 'Qulflangan', desc: 'Fikr bildirish va dolzarb mavzular', xp: '+150 XP', progress: 0 },
    { name: 'B1.2', title: 'Goethe Zertifikat', status: 'Qulflangan', desc: 'Rasmiy B1 imtihoni trenajyori', xp: '+200 XP', progress: 0 }
  ];

  // --- App State ---
  const state = {
    view: 'home',
    lessonStep: 0,
    xp: parseInt(localStorage.getItem('fh_xp') || '45', 10),
    streak: parseInt(localStorage.getItem('fh_streak') || '1', 10),
    minutes: parseInt(localStorage.getItem('fh_minutes') || '12', 10),
    mastered: new Set(JSON.parse(localStorage.getItem('fh_mastered') || '[1, 2, 3]')),
    favorites: new Set(JSON.parse(localStorage.getItem('fh_favorites') || '[1]')),
    studentName: localStorage.getItem('fh_student_name') || 'Shaxzod Alimov',
    
    // Vocab filters
    vocabSearch: '',
    vocabLevel: 'Barchasi',
    vocabType: 'Barchasi',
    vocabMode: 'table', // 'table' or 'flash'
    flashIndex: 0,
    
    // Exam state
    examFilter: 'Hören',
    selectedExam: 'Hören · A1.1',
    examActive: false,
    examTimer: null,
    examSeconds: 1200,
    examAnswers: {},
    attempts: JSON.parse(localStorage.getItem('fh_attempts') || '[]'),
    
    // Audio State
    audioRate: 1.0,
    isPlaying: false
  };

  // --- DOM Helpers ---
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];

  // --- Confetti Trigger ---
  function fireConfetti() {
    if (typeof window.confetti === 'function') {
      window.confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.65 }
      });
    }
  }

  // --- Toast Bubble ---
  let toastTimeout = null;
  function showToast(message, isSuccess = true) {
    const toast = $('#toast-notification');
    const msgEl = $('#toast-message');
    if (!toast || !msgEl) return;
    
    msgEl.textContent = message;
    toast.hidden = false;
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.hidden = true;
    }, 3200);
  }

  // --- Speech Synthesis Engine ---
  function speakGerman(text) {
    if (!('speechSynthesis' in window)) {
      showToast('Brauzeringiz ovoz sintezini qo‘llab-quvvatlamaydi.');
      return;
    }
    window.speechSynthesis.cancel();
    
    const waveEl = $('#hero-wave');
    const heroBtn = $('#hero-play-icon');
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';
    utterance.rate = state.audioRate || 1.0;

    // Pick German voice if available
    const voices = window.speechSynthesis.getVoices();
    const deVoice = voices.find(v => v.lang.startsWith('de') || v.lang.includes('DE'));
    if (deVoice) utterance.voice = deVoice;

    utterance.onstart = () => {
      state.isPlaying = true;
      if (waveEl) waveEl.classList.add('active');
    };
    utterance.onend = () => {
      state.isPlaying = false;
      if (waveEl) waveEl.classList.remove('active');
    };
    utterance.onerror = () => {
      state.isPlaying = false;
      if (waveEl) waveEl.classList.remove('active');
    };

    window.speechSynthesis.speak(utterance);
  }

  // --- Award XP helper ---
  function addXP(amount, reason = '') {
    state.xp += amount;
    localStorage.setItem('fh_xp', state.xp);
    updateHeaderStats();
    AudioFX.chime();
    fireConfetti();
    showToast(`+${amount} XP to‘plandi! ${reason}`);
  }

  // --- Update Header Stats ---
  function updateHeaderStats() {
    const xpEls = [$('#header-xp'), $('#dash-xp-count'), $('#dash-full-xp')];
    xpEls.forEach(el => { if (el) el.textContent = state.xp; });

    const streakEls = [$('#header-streak'), $('#dash-streak-count'), $('#dash-full-streak')];
    streakEls.forEach(el => { if (el) el.textContent = `${state.streak} kun`; });

    const wordsEl = $('#dash-words-count');
    if (wordsEl) wordsEl.textContent = `${state.mastered.size} ta`;

    const goalPercent = Math.min(100, Math.round((state.minutes / 20) * 100));
    const goalText = `${state.minutes}/20 daqiqa`;
    
    if ($('#hero-goal-text')) $('#hero-goal-text').textContent = goalText;
    if ($('#dash-goal-text')) $('#dash-goal-text').textContent = `${state.minutes}/20`;
    if ($('#dash-goal-percent')) $('#dash-goal-percent').textContent = `${goalPercent}%`;
    
    const circle = $('#dash-radial-circle');
    if (circle) {
      // 264 is perimeter approx
      const offset = 264 - (264 * (goalPercent / 100));
      circle.style.strokeDashoffset = offset;
    }
  }

  // --- View Router ---
  function switchView(viewName, stepIndex = null) {
    state.view = viewName;
    window.speechSynthesis?.cancel();

    // Hide all views and show active
    $$('.page-view').forEach(v => v.classList.remove('active'));
    const target = $(`#view-${viewName}`);
    if (target) target.classList.add('active');

    // Update Nav buttons
    $$('.nav-tab').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === viewName);
    });
    $$('.dock-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === viewName);
    });

    if (viewName === 'lesson') {
      if (typeof stepIndex === 'number') state.lessonStep = stepIndex;
      renderLesson();
    } else if (viewName === 'vocabulary') {
      renderVocabulary();
    } else if (viewName === 'certificate') {
      renderExamCatalog();
    } else if (viewName === 'courses') {
      renderRoadmapPage();
    } else if (viewName === 'dashboard') {
      renderDashboard();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    AudioFX.click();
  }

  // --- Render Home Page Components ---
  function renderHomeTrail() {
    const container = $('#home-roadmap-container');
    if (!container) return;

    container.innerHTML = CEFR_LEVELS.map((lvl, idx) => `
      <div class="level-card-item glass-card ${idx === 0 ? 'active' : 'locked'}">
        <div class="level-card-badge">
          <span class="level-pill">${lvl.name}</span>
          <span class="text-xs font-bold ${idx === 0 ? 'text-emerald' : 'text-muted'}">${lvl.status}</span>
        </div>
        <h3 class="level-name">${lvl.title}</h3>
        <p class="level-sub">${lvl.desc}</p>
        <div class="level-progress-bar">
          <div class="level-progress-fill" style="width: ${lvl.progress}%;"></div>
        </div>
        <div class="flex justify-between items-center mt-3">
          <span class="text-xs font-bold text-brand">${lvl.xp}</span>
          <button type="button" class="btn btn-secondary btn-sm" data-view="courses">
            <span>Darslar</span>
            <i data-lucide="arrow-right"></i>
          </button>
        </div>
      </div>
    `).join('');
  }

  // --- Render Courses / Roadmap View ---
  function renderRoadmapPage() {
    const container = $('#courses-roadmap-list');
    if (!container) return;

    container.innerHTML = COURSES_DATA.map((item, idx) => {
      const isCurrent = idx === 1;
      const isCompleted = item.completed;
      const isLocked = !item.unlocked;

      return `
        <div class="lesson-stop-row ${isCompleted ? 'completed' : isCurrent ? 'current' : ''}">
          <div class="lesson-node-circle">
            ${isCompleted ? '✓' : isLocked ? '🔒' : (idx + 1)}
          </div>
          <button type="button" class="lesson-card-btn glass-card" data-lesson-idx="${idx}" ${isLocked ? 'disabled' : ''}>
            <div class="lesson-main-info">
              <span class="lesson-subhead">${isCompleted ? 'Muvaffaqiyatli yakunlangan' : isCurrent ? 'Navbatdagi manzil' : isLocked ? 'Qulflangan' : 'Ochiq'} · ${idx + 1}-Dars</span>
              <strong class="lesson-name-de">${item.de}</strong>
              <span class="lesson-name-uz">${item.uz}</span>
            </div>
            <div class="lesson-meta-pill">
              <i data-lucide="zap"></i>
              <span>+${item.xp} XP</span>
              <i data-lucide="chevron-right" class="ml-2"></i>
            </div>
          </button>
        </div>
      `;
    }).join('');

    lucide.createIcons();
  }

  // --- Open Lesson Preview Modal ---
  function openLessonModal(idx) {
    const lesson = COURSES_DATA[idx];
    if (!lesson || !lesson.unlocked) return;

    $('#modal-lesson-kicker').textContent = `A1.1 · ${idx + 1}-DARS`;
    $('#modal-lesson-title').textContent = lesson.de;
    $('#modal-lesson-desc').textContent = `${lesson.uz}. Nemis tilining eng muhim qoidalarini amaliyotda sinab ko‘ring.`;

    const startBtn = $('#modal-start-lesson-btn');
    if (startBtn) {
      startBtn.onclick = () => {
        $('#lesson-detail-modal').hidden = true;
        switchView('lesson', 0);
      };
    }

    $('#lesson-detail-modal').hidden = false;
  }

  // ==========================================================================
  // 9-STEP LESSON ENGINE
  // ==========================================================================
  function renderLesson() {
    const step = state.lessonStep;
    const current = LESSON_STAGES[step];

    // Stepper pills
    const stepper = $('#lesson-stepper');
    if (stepper) {
      stepper.innerHTML = LESSON_STAGES.map((s, idx) => `
        <button type="button" class="step-chip-btn ${idx === step ? 'active' : idx < step ? 'done' : ''}" data-step-nav="${idx}">
          <span class="step-bubble">${idx < step ? '✓' : idx + 1}</span>
          <span>${s.title}</span>
        </button>
      `).join('');
    }

    // Step indicators
    if ($('#step-badge-indicator')) $('#step-badge-indicator').textContent = `Qadam 0${step + 1} / 09 · ${current.title}`;
    if ($('#step-main-title')) $('#step-main-title').textContent = current.desc;
    if ($('#step-counter-label')) $('#step-counter-label').textContent = `${step + 1} / 9`;

    // Buttons state
    const prevBtn = $('#step-btn-prev');
    const nextBtn = $('#step-btn-next');
    if (prevBtn) prevBtn.disabled = step === 0;
    if (nextBtn) {
      nextBtn.innerHTML = step === 8 
        ? `<span>Darsni yakunlash</span> <i data-lucide="award"></i>`
        : `<span>Keyingi qadam</span> <i data-lucide="arrow-right"></i>`;
    }

    // Body content per step
    const body = $('#lesson-body-content');
    if (!body) return;

    switch (step) {
      case 0: // Kirish
        body.innerHTML = `
          <div class="content-box-callout">
            <h3 class="text-lg font-bold mb-2">🇩🇪 Willkommen! Tanishuv mavzusiga xush kelibsiz!</h3>
            <p class="mb-4">Nemis tilida salomlashish va o‘zingizni tanishtirish hayotiy muloqotning asosi hisoblanadi. Bugungi darsda eng muhim 3 ta salomlashuv iborasini tinglaymiz va talaffuz qilamiz.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div class="audio-player-pill">
                <div>
                  <strong>Hallo!</strong>
                  <p class="text-xs text-muted">Salom! (norasmiy)</p>
                </div>
                <button type="button" class="btn btn-secondary btn-sm" data-speak="Hallo!">
                  <i data-lucide="volume-2"></i>
                </button>
              </div>

              <div class="audio-player-pill">
                <div>
                  <strong>Guten Tag!</strong>
                  <p class="text-xs text-muted">Xayrli kun! (rasmiy)</p>
                </div>
                <button type="button" class="btn btn-secondary btn-sm" data-speak="Guten Tag!">
                  <i data-lucide="volume-2"></i>
                </button>
              </div>

              <div class="audio-player-pill">
                <div>
                  <strong>Tschüss!</strong>
                  <p class="text-xs text-muted">Xayr! (do‘stona)</p>
                </div>
                <button type="button" class="btn btn-secondary btn-sm" data-speak="Tschüss!">
                  <i data-lucide="volume-2"></i>
                </button>
              </div>
            </div>
          </div>
        `;
        break;

      case 1: // Muloqot
        body.innerHTML = `
          <div class="content-box-callout">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-lg font-bold">Nemischa muloqot: Tanishuv</h3>
              <button type="button" class="btn btn-primary btn-sm" data-speak="Guten Tag! Wie heißt du? Ich heiße Ali. Und du? Ich heiße Anna. Freut mich!">
                <i data-lucide="volume-2"></i>
                <span>Butun dialogni tinglash</span>
              </button>
            </div>

            <div class="dialogue-bubble-row">
              <div class="dialogue-item">
                <div class="dialogue-speaker-avatar">A</div>
                <div class="dialogue-bubble">
                  <div class="dialogue-de">Anna: Guten Tag! Wie heißt du?</div>
                  <div class="dialogue-uz">Xayrli kun! Isming nima?</div>
                  <button type="button" class="btn btn-secondary btn-sm mt-2" data-speak="Guten Tag! Wie heißt du?">
                    <i data-lucide="volume-2"></i>
                  </button>
                </div>
              </div>

              <div class="dialogue-item">
                <div class="dialogue-speaker-avatar bg-amber">L</div>
                <div class="dialogue-bubble">
                  <div class="dialogue-de">Ali: Ich heiße Ali. Und du?</div>
                  <div class="dialogue-uz">Mening ismim Ali. Seniki-chi?</div>
                  <button type="button" class="btn btn-secondary btn-sm mt-2" data-speak="Ich heiße Ali. Und du?">
                    <i data-lucide="volume-2"></i>
                  </button>
                </div>
              </div>

              <div class="dialogue-item">
                <div class="dialogue-speaker-avatar">A</div>
                <div class="dialogue-bubble">
                  <div class="dialogue-de">Anna: Ich heiße Anna. Freut mich!</div>
                  <div class="dialogue-uz">Mening ismim Anna. Tanishganimdan xursandman!</div>
                  <button type="button" class="btn btn-secondary btn-sm mt-2" data-speak="Ich heiße Anna. Freut mich!">
                    <i data-lucide="volume-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        `;
        break;

      case 2: // Lug‘at
        body.innerHTML = `
          <div class="content-box-callout">
            <h3 class="text-lg font-bold mb-3">Darsning kalit so‘zlari</h3>
            <p class="text-sm text-muted mb-4">Nemis tilida har bir ot o‘z artikli bilan yodlanadi. Ranglarni eslab qoling!</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${VOCAB_DATA.slice(0, 4).map(w => `
                <div class="audio-player-pill">
                  <div>
                    <span class="legend-chip ${w.pluralArticle ? 'plural' : w.article} text-xs font-bold mr-2">${w.pluralArticle ? 'die (Pl.)' : w.article}</span>
                    <strong class="text-base">${w.german}</strong>
                    <p class="text-xs text-muted mt-1">${w.uz} · ko‘plik: ${w.plural}</p>
                  </div>
                  <button type="button" class="icon-circle-btn" data-speak="${w.article ? w.article + ' ' : ''}${w.german}">
                    <i data-lucide="volume-2"></i>
                  </button>
                </div>
              `).join('')}
            </div>
          </div>
        `;
        break;

      case 3: // Grammatika
        body.innerHTML = `
          <div class="content-box-callout">
            <h3 class="text-lg font-bold mb-2">Qoida: Nemis tilida V2 (Verb in Position 2) qoidasi</h3>
            <p class="mb-4">Oddiy darak gaplarda <strong>tuslangan fe’l har doim 2-o‘rinda</strong> turadi!</p>
            
            <div class="bg-indigo-subtle p-4 rounded-xl mb-4 border border-indigo-200">
              <span class="text-xs font-bold text-brand uppercase tracking-wider block mb-1">Gap qolipi:</span>
              <div class="text-base font-extrabold flex gap-3 flex-wrap">
                <span class="p-2 bg-surface rounded">1. Ega (Ich)</span>
                <span class="p-2 bg-brand text-white rounded">2. Fe’l (lerne)</span>
                <span class="p-2 bg-surface rounded">3. To‘ldiruvchi (Deutsch)</span>
              </div>
            </div>

            <div class="quiz-question-box">
              <p class="quiz-prompt">Quyidagi so‘zlardan to‘g‘ri gap tuzing: (Deutsch / lerne / Ich)</p>
              <div class="word-tiles-container" id="v2-drag-box">
                <span class="word-tile-chip" data-v2-word="Ich">Ich</span>
                <span class="word-tile-chip" data-v2-word="lerne">lerne</span>
                <span class="word-tile-chip" data-v2-word="Deutsch">Deutsch</span>
              </div>
              <p class="text-xs text-muted" id="v2-feedback-text">So‘zlarni ketma-ket bosing va to‘g‘ri tartibda yig‘ing.</p>
            </div>
          </div>
        `;
        initV2Builder();
        break;

      case 4: // Tinglash (Hören)
        body.innerHTML = `
          <div class="content-box-callout">
            <h3 class="text-lg font-bold mb-2">Tinglash mashqi (Hören)</h3>
            <p class="mb-4">Ovozni diqqat bilan eshiting va savolga javob bering.</p>
            
            <div class="flex items-center gap-3 mb-4">
              <button type="button" class="btn btn-primary" data-speak="Ich heiße Sara und ich lerne Deutsch in Taschkent.">
                <i data-lucide="volume-2"></i>
                <span>Audioni eshitish ▶</span>
              </button>
            </div>

            <div class="quiz-question-box">
              <p class="quiz-prompt">Sara qayerda nemis tilini o‘rganmoqda?</p>
              <div class="quiz-options-list">
                <button type="button" class="quiz-option-btn" data-lesson-quiz="berlin">
                  <span>A) Berlinda</span>
                </button>
                <button type="button" class="quiz-option-btn" data-lesson-quiz="taschkent" data-correct="true">
                  <span>B) Toshkentda</span>
                </button>
                <button type="button" class="quiz-option-btn" data-lesson-quiz="samarkand">
                  <span>C) Samarqandda</span>
                </button>
              </div>
              <div id="quiz-inline-feedback" class="mt-3 text-sm font-bold"></div>
            </div>
          </div>
        `;
        initQuizButtons();
        break;

      case 5: // O‘qish (Lesen)
        body.innerHTML = `
          <div class="content-box-callout">
            <h3 class="text-lg font-bold mb-2">O‘qish matni (Lesen)</h3>
            <div class="p-4 bg-surface rounded-xl border border-border-light my-3 text-base">
              <strong>Hallo! Ich bin Lukas.</strong> Ich bin 20 Jahre alt und komme aus Deutschland. Ich trinke gern Kaffee und lese deutsche Bücher.
            </div>

            <div class="quiz-question-box mt-4">
              <p class="quiz-prompt">Lukas nima qilishni yaxshi ko‘radi?</p>
              <div class="quiz-options-list">
                <button type="button" class="quiz-option-btn" data-lesson-quiz="q2_false">
                  <span>A) Choy ichishni va uxlashni</span>
                </button>
                <button type="button" class="quiz-option-btn" data-lesson-quiz="q2_true" data-correct="true">
                  <span>B) Qahva ichishni va nemischa kitoblar o‘qishni</span>
                </button>
              </div>
              <div id="quiz-inline-feedback" class="mt-3 text-sm font-bold"></div>
            </div>
          </div>
        `;
        initQuizButtons();
        break;

      case 6: // Yozish (Schreiben)
        body.innerHTML = `
          <div class="content-box-callout">
            <h3 class="text-lg font-bold mb-2">Yozish mashqi (Schreiben)</h3>
            <p class="mb-4">O‘zbekcha jumlaning nemischa tarjimasini yozing: <br><strong>"Men nemis tilini o‘rganaman."</strong></p>
            
            <form id="lesson-writing-form" class="flex flex-col gap-3">
              <input type="text" id="writing-input-field" class="p-3 bg-surface border border-border-light rounded-xl font-bold text-base" placeholder="Ich lerne..." autocomplete="off">
              <button type="submit" class="btn btn-primary self-start">
                <span>Tekshirish</span>
                <i data-lucide="check"></i>
              </button>
            </form>
            <div id="writing-feedback-box" class="mt-3 text-sm font-bold"></div>
          </div>
        `;
        initWritingForm();
        break;

      case 7: // Shadowing
        body.innerHTML = `
          <div class="content-box-callout text-center py-6">
            <div class="w-16 h-16 rounded-full bg-brand-primary text-white grid place-items-center mx-auto mb-4 text-2xl shadow-glow">
              <i data-lucide="mic"></i>
            </div>
            <h3 class="text-xl font-extrabold mb-2">Shadowing: Jarangdor talaffuz</h3>
            <p class="text-sm text-muted max-w-md mx-auto mb-6">
              Namunaviy jumlani eshiting, xuddi nemis kabi ohang va urg‘uni taqlid qilib, ovoz chiqarib takrorlang.
            </p>
            
            <div class="p-4 bg-surface rounded-xl max-w-sm mx-auto mb-6 border border-border-light">
              <h4 class="text-lg font-extrabold text-brand">"Guten Tag! Ich heiße Anna."</h4>
              <p class="text-xs text-muted mt-1">Xayrli kun! Mening ismim Anna.</p>
            </div>

            <div class="flex justify-center gap-3 flex-wrap">
              <button type="button" class="btn btn-secondary" data-speak="Guten Tag! Ich heiße Anna.">
                <i data-lucide="volume-2"></i>
                <span>Tinglash</span>
              </button>
              <button type="button" class="btn btn-primary" id="btn-shadow-done">
                <i data-lucide="check-circle-2"></i>
                <span>Takrorladim (+10 XP)</span>
              </button>
            </div>
            <p id="shadow-feedback-msg" class="text-sm font-bold text-emerald mt-4" hidden>Ofarin! Talaffuz ustida ishlash tilingizni ravon qiladi.</p>
          </div>
        `;
        initShadowing();
        break;

      case 8: // Imtihon & XP
        body.innerHTML = `
          <div class="content-box-callout">
            <h3 class="text-lg font-bold mb-2">🏆 Dars yakuniy sinovi</h3>
            <p class="mb-4">Ushbu 2 savolga to‘g‘ri javob berib, bugungi darsni to‘liq yakunlang va 25 XP qo‘lga kiriting!</p>
            
            <div class="quiz-question-box">
              <p class="quiz-prompt">1. "stol" so‘zining to‘g‘ri nemischa artikli va shakli qaysi?</p>
              <div class="quiz-options-list">
                <button type="button" class="quiz-option-btn" data-final-q1="wrong">das Tisch</button>
                <button type="button" class="quiz-option-btn" data-final-q1="correct" data-correct="true">der Tisch</button>
                <button type="button" class="quiz-option-btn" data-final-q1="wrong">die Tisch</button>
              </div>
            </div>

            <div class="quiz-question-box mt-4">
              <p class="quiz-prompt">2. "du" kishilik olmoshi bilan "lernen" qanday tuslanadi?</p>
              <div class="quiz-options-list">
                <button type="button" class="quiz-option-btn" data-final-q2="correct" data-correct="true">du lernst</button>
                <button type="button" class="quiz-option-btn" data-final-q2="wrong">du lernt</button>
              </div>
            </div>

            <div id="final-lesson-msg" class="mt-4 p-4 rounded-xl bg-emerald-subtle text-emerald text-sm font-bold" hidden>
              Tabriklaymiz! 1-dars 100% muvaffaqiyat bilan bajarildi!
            </div>
          </div>
        `;
        initFinalLessonQuiz();
        break;
    }

    lucide.createIcons();
  }

  // --- Step interactive helper binders ---
  function initV2Builder() {
    let assembled = [];
    const tiles = $$('[data-v2-word]');
    const feedback = $('#v2-feedback-text');

    tiles.forEach(tile => {
      tile.addEventListener('click', () => {
        AudioFX.click();
        const word = tile.dataset.v2Word;
        if (tile.classList.contains('selected')) {
          tile.classList.remove('selected');
          assembled = assembled.filter(w => w !== word);
        } else {
          tile.classList.add('selected');
          assembled.push(word);
        }

        const sentence = assembled.join(' ');
        if (sentence === 'Ich lerne Deutsch') {
          feedback.textContent = 'To‘g‘ri! Fe’l (lerne) 2-o‘rinda to‘g‘ri joylashtirildi! 🎉 (+10 XP)';
          feedback.className = 'text-sm font-bold text-emerald';
          addXP(10, 'V2 qoidasi to‘g‘ri bajarildi');
        } else if (assembled.length === 3) {
          feedback.textContent = 'Noto‘g‘ri tartib. Qaytadan urinib ko‘ring (Ega + Fe’l + To‘ldiruvchi).';
          feedback.className = 'text-sm font-bold text-rose';
        } else {
          feedback.textContent = `Yig‘ilmoqda: ${sentence || '...'}`;
          feedback.className = 'text-xs text-muted';
        }
      });
    });
  }

  function initQuizButtons() {
    $$('[data-lesson-quiz]').forEach(btn => {
      btn.addEventListener('click', () => {
        const isCorrect = btn.dataset.correct === 'true';
        const feedback = $('#quiz-inline-feedback');
        if (isCorrect) {
          btn.classList.add('correct');
          AudioFX.chime();
          fireConfetti();
          if (feedback) {
            feedback.textContent = 'To‘g‘ri javob! Ajoyib natija! 🎉';
            feedback.style.color = 'var(--emerald)';
          }
          addXP(10);
        } else {
          btn.classList.add('wrong');
          if (feedback) {
            feedback.textContent = 'Noto‘g‘ri javob. Audioni yana bir bor eshiting.';
            feedback.style.color = 'var(--rose)';
          }
        }
      });
    });
  }

  function initWritingForm() {
    const form = $('#lesson-writing-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = $('#writing-input-field');
      const feedback = $('#writing-feedback-box');
      if (!input || !feedback) return;

      const clean = input.value.trim().toLowerCase().replace(/[.!?]/g, '');
      if (clean === 'ich lerne deutsch') {
        feedback.textContent = 'Mukammal! "Ich lerne Deutsch." to‘g‘ri yozildi! 🎉 (+15 XP)';
        feedback.style.color = 'var(--emerald)';
        addXP(15);
      } else {
        feedback.textContent = 'Qaytadan urinib ko‘ring. Maslahat: "Ich lerne Deutsch."';
        feedback.style.color = 'var(--rose)';
      }
    });
  }

  function initShadowing() {
    const btn = $('#btn-shadow-done');
    const msg = $('#shadow-feedback-msg');
    if (btn) {
      btn.addEventListener('click', () => {
        addXP(10, 'Shadowing mashqi bajarildi');
        if (msg) msg.hidden = false;
        btn.disabled = true;
      });
    }
  }

  function initFinalLessonQuiz() {
    let q1 = false, q2 = false;
    const msg = $('#final-lesson-msg');

    $$('[data-final-q1]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.dataset.correct === 'true') {
          btn.classList.add('correct');
          q1 = true;
          checkFinal();
        } else {
          btn.classList.add('wrong');
        }
      });
    });

    $$('[data-final-q2]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.dataset.correct === 'true') {
          btn.classList.add('correct');
          q2 = true;
          checkFinal();
        } else {
          btn.classList.add('wrong');
        }
      });
    });

    function checkFinal() {
      if (q1 && q2) {
        if (msg) msg.hidden = false;
        AudioFX.fanfare();
        fireConfetti();
        addXP(25, '1-Dars to‘liq yakunlandi!');
      }
    }
  }

  // ==========================================================================
  // VOCABULARY & FLASHCARDS LOGIC
  // ==========================================================================
  function filteredVocab() {
    const q = state.vocabSearch.toLowerCase().trim();
    return VOCAB_DATA.filter(w => {
      const matchLevel = state.vocabLevel === 'Barchasi' || w.level === state.vocabLevel;
      const matchType = state.vocabType === 'Barchasi' || w.type === state.vocabType;
      const fullText = `${w.article} ${w.german} ${w.uz}`.toLowerCase();
      const matchQuery = !q || fullText.includes(q);
      return matchLevel && matchType && matchQuery;
    });
  }

  function renderVocabulary() {
    const list = filteredVocab();
    
    // Level Filters
    const levelWrap = $('#vocab-level-filters');
    if (levelWrap) {
      const levels = ['Barchasi', 'A1.1', 'A1.2', 'A2.1'];
      levelWrap.innerHTML = levels.map(lvl => `
        <button type="button" class="filter-tag-btn ${state.vocabLevel === lvl ? 'active' : ''}" data-filter-lvl="${lvl}">
          ${lvl}
        </button>
      `).join('');
    }

    // Type Filters
    const typeWrap = $('#vocab-type-filters');
    if (typeWrap) {
      const types = ['Barchasi', 'Ot', 'Fe’l', 'Sifat', 'Ibora'];
      typeWrap.innerHTML = types.map(t => `
        <button type="button" class="filter-tag-btn ${state.vocabType === t ? 'active' : ''}" data-filter-type="${t}">
          ${t}
        </button>
      `).join('');
    }

    if ($('#vocab-count-indicator')) {
      $('#vocab-count-indicator').textContent = `${list.length} ta so‘z`;
    }

    // Container Switcher
    const container = $('#vocab-render-container');
    if (!container) return;

    if (list.length === 0) {
      container.innerHTML = `
        <div class="text-center py-12 glass-card">
          <i data-lucide="search-x" class="w-12 h-12 text-muted mx-auto mb-3"></i>
          <h3 class="text-xl font-bold">Hech qanday so‘z topilmadi</h3>
          <p class="text-muted text-sm mt-1">Qidiruv so‘zini yoki filtrlarni o‘zgartirib ko‘ring.</p>
        </div>
      `;
      lucide.createIcons();
      return;
    }

    if (state.vocabMode === 'flash') {
      renderFlashcardsStage(list);
    } else {
      renderVocabGrid(list);
    }

    lucide.createIcons();
  }

  function renderVocabGrid(list) {
    const container = $('#vocab-render-container');
    container.innerHTML = `
      <div class="vocab-cards-grid">
        ${list.map(w => {
          const isMastered = state.mastered.has(w.id);
          const isFav = state.favorites.has(w.id);
          const artClass = w.pluralArticle ? 'plural' : (w.article || '');

          return `
            <div class="vocab-word-card glass-card ${artClass ? artClass + '-card' : ''}">
              <div>
                <div class="card-top-tags">
                  <div class="flex items-center gap-2">
                    ${w.article ? `<span class="article-pill ${artClass}">${w.pluralArticle ? 'die (Pl.)' : w.article}</span>` : ''}
                    <span class="text-xs font-bold text-muted">${w.level}</span>
                    <span class="text-xs font-bold text-muted">· ${w.type}</span>
                  </div>
                  <div class="card-actions">
                    <button type="button" class="icon-action-btn ${isMastered ? 'mastered' : ''}" data-toggle-master="${w.id}" title="${isMastered ? 'Yodlangan' : 'Yodlangan deb belgilash'}">
                      <i data-lucide="check"></i>
                    </button>
                    <button type="button" class="icon-action-btn ${isFav ? 'active' : ''}" data-toggle-fav="${w.id}" title="Sevimlilarga saqlash">
                      <i data-lucide="star"></i>
                    </button>
                  </div>
                </div>

                <div class="mt-3 flex items-start justify-between">
                  <div>
                    <h3 class="word-main-de">${w.german}</h3>
                    <p class="word-main-uz">${w.uz}</p>
                    ${w.plural !== '—' ? `<span class="text-xs text-muted block mt-1">Ko‘plik: <strong>${w.plural}</strong></span>` : ''}
                  </div>
                  <button type="button" class="icon-circle-btn" data-speak="${w.article ? w.article + ' ' : ''}${w.german}">
                    <i data-lucide="volume-2"></i>
                  </button>
                </div>
              </div>

              <div class="word-example-box">
                <div class="example-de">${w.example}</div>
                <div class="example-uz">${w.exampleUz}</div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  function renderFlashcardsStage(list) {
    state.flashIndex = Math.min(state.flashIndex, list.length - 1);
    const w = list[state.flashIndex];
    const isMastered = state.mastered.has(w.id);
    const artClass = w.pluralArticle ? 'plural' : (w.article || '');

    const container = $('#vocab-render-container');
    container.innerHTML = `
      <div class="flashcard-stage">
        <div class="flex justify-between items-center mb-4">
          <span class="text-xs font-bold text-brand uppercase tracking-wider">3D Interaktiv Flashcard</span>
          <span class="chip-dot-wrap text-sm font-extrabold">${state.flashIndex + 1} / ${list.length}</span>
        </div>

        <div class="flashcard-3d" id="active-flashcard" title="Kartani aylantirish uchun bosing">
          <!-- Front Face -->
          <div class="flashcard-face flashcard-front">
            <div>
              ${w.article ? `<span class="article-pill ${artClass}">${w.pluralArticle ? 'die (Pl.)' : w.article}</span>` : ''}
              <span class="text-xs font-bold text-muted ml-2">${w.level} · ${w.type}</span>
            </div>

            <div>
              <h2 class="text-3xl font-black mb-2">${w.german}</h2>
              <button type="button" class="btn btn-secondary btn-sm" data-speak="${w.article ? w.article + ' ' : ''}${w.german}">
                <i data-lucide="volume-2"></i>
                <span>Talaffuz</span>
              </button>
            </div>

            <span class="flash-hint">
              <i data-lucide="rotate-cw"></i>
              <span>Aylantirish uchun bosing</span>
            </span>
          </div>

          <!-- Back Face -->
          <div class="flashcard-face flashcard-back">
            <span class="text-xs font-bold uppercase tracking-wider text-white/80">O‘zbekcha ma’nosi</span>
            <div>
              <h3>${w.uz}</h3>
              <p class="mt-2 text-sm text-white/90">"${w.example}"</p>
              <p class="text-xs text-white/70">${w.exampleUz}</p>
            </div>
            <span class="flash-hint text-white/80">
              <i data-lucide="rotate-cw"></i>
              <span>Oldinga qaytish</span>
            </span>
          </div>
        </div>

        <!-- Controls -->
        <div class="flash-controls-bar">
          <button type="button" class="btn btn-secondary" id="flash-btn-prev">
            <i data-lucide="chevron-left"></i>
            <span>Oldingisi</span>
          </button>
          
          <button type="button" class="btn ${isMastered ? 'btn-secondary' : 'btn-primary'}" id="flash-btn-master">
            <i data-lucide="check"></i>
            <span>${isMastered ? 'Yodlangan ✓' : 'Yodladim'}</span>
          </button>

          <button type="button" class="btn btn-secondary" id="flash-btn-next">
            <span>Keyingisi</span>
            <i data-lucide="chevron-right"></i>
          </button>
        </div>
      </div>
    `;

    // 3D Flip
    const card = $('#active-flashcard');
    if (card) {
      card.addEventListener('click', (e) => {
        if (e.target.closest('button')) return;
        card.classList.toggle('flipped');
        AudioFX.click();
      });
    }

    // Flash Controls
    $('#flash-btn-prev')?.addEventListener('click', () => {
      state.flashIndex = (state.flashIndex - 1 + list.length) % list.length;
      renderVocabulary();
    });
    $('#flash-btn-next')?.addEventListener('click', () => {
      state.flashIndex = (state.flashIndex + 1) % list.length;
      renderVocabulary();
    });
    $('#flash-btn-master')?.addEventListener('click', () => {
      if (state.mastered.has(w.id)) {
        state.mastered.delete(w.id);
        showToast('Yodlanganlar ro‘yxatidan chiqarildi');
      } else {
        state.mastered.add(w.id);
        addXP(5, 'Yangi so‘z yodlandi');
      }
      localStorage.setItem('fh_mastered', JSON.stringify([...state.mastered]));
      updateHeaderStats();
      renderVocabulary();
    });
  }

  // ==========================================================================
  // 5. DEMO EXAM & CERTIFICATE ENGINE
  // ==========================================================================
  function renderExamCatalog() {
    const grid = $('#exam-catalog-grid');
    if (!grid) return;

    const exams = [
      { name: 'Hören · A1.1', type: 'Hören', duration: '20 daqiqa', questions: '2 ta', pass: '60%', desc: 'Nemischa dialoglarni tinglab tushunish va to‘g‘ri javoblarni belgilash.' },
      { name: 'Lesen · A1.1', type: 'Lesen', duration: '25 daqiqa', questions: '2 ta', pass: '60%', desc: 'Qisqa e’lonlar, xatlar va xabarlarni o‘qib tahlil qilish.' },
      { name: 'Kompleks · A1', type: 'Kompleks', duration: '35 daqiqa', questions: '4 ta', pass: '60%', desc: 'Hören va Lesen qismlarini birlashtirgan to‘liq sertifikat sinovi.' }
    ];

    grid.innerHTML = exams.map(ex => `
      <div class="exam-info-card glass-card">
        <div>
          <div class="exam-badge-header">
            <span class="section-kicker">${ex.type} TEST</span>
            <span class="chip-dot-wrap text-xs font-bold text-brand">A1 DARAJA</span>
          </div>
          <h3 class="text-xl font-bold mt-1 mb-2">${ex.name}</h3>
          <p class="text-sm text-muted mb-4">${ex.desc}</p>
          
          <div class="exam-details-grid">
            <div>
              <span>Vaqt</span>
              <strong>${ex.duration}</strong>
            </div>
            <div>
              <span>Savollar</span>
              <strong>${ex.questions}</strong>
            </div>
            <div>
              <span>O‘tish bali</span>
              <strong>${ex.pass}</strong>
            </div>
          </div>
        </div>

        <button type="button" class="btn ${state.selectedExam === ex.name ? 'btn-primary' : 'btn-secondary'} w-full" data-select-exam="${ex.name}">
          <span>${state.selectedExam === ex.name ? 'Tanlangan ✓' : 'Tanlash va Boshlash'}</span>
        </button>
      </div>
    `).join('');

    renderExamSimulation();
    lucide.createIcons();
  }

  function renderExamSimulation() {
    const panel = $('#exam-simulation-box');
    if (!panel) return;

    if (!state.examActive) {
      panel.innerHTML = `
        <div class="text-center py-6 max-w-lg mx-auto">
          <span class="section-kicker">ICHKI DEMO BAHOLASH</span>
          <h2 class="text-2xl font-black mb-3">Imtihonga tayyormisiz?</h2>
          <p class="text-muted text-base mb-6">
            Tanlangan imtihon: <strong>${state.selectedExam}</strong>.<br>
            Sinov 20 daqiqa davom etadi. 60% dan yuqori natija qayd etsangiz, rasmiy Fly High sertifikatingiz yaratiladi.
          </p>
          <button type="button" class="btn btn-primary btn-glow" id="btn-start-exam-timer">
            <i data-lucide="play"></i>
            <span>Sinovni boshlash (20:00)</span>
          </button>
        </div>
      `;
    } else {
      // Exam Running with Questions
      panel.innerHTML = `
        <div class="exam-live-header">
          <div>
            <span class="section-kicker">DEMO IMTIHON KETMOQDA</span>
            <h3 class="text-xl font-bold">${state.selectedExam}</h3>
          </div>
          <div class="exam-timer-display" id="exam-live-clock">
            <i data-lucide="timer"></i>
            <span id="exam-clock-digits">20:00</span>
          </div>
        </div>

        <div class="exam-questions-flow">
          <!-- Question 1 -->
          <div class="content-box-callout mb-4">
            <span class="text-xs font-bold text-brand uppercase block mb-1">1-Savol (Hören)</span>
            <p class="font-extrabold text-base mb-3">Audioni eshiting: Gapiruvchi nimani ma’lum qildi?</p>
            <button type="button" class="btn btn-secondary btn-sm mb-3" data-speak="Guten Tag! Mein Name ist Anna Schmidt. Ich bin Lehrerin von Beruf.">
              <i data-lucide="volume-2"></i>
              <span>Ovozni tinglash ▶</span>
            </button>
            <div class="quiz-options-list">
              <button type="button" class="quiz-option-btn" data-exam-ans="q1" data-val="0">
                <span>A) U talaba ekanligini</span>
              </button>
              <button type="button" class="quiz-option-btn" data-exam-ans="q1" data-val="1">
                <span>B) U kasbi bo‘yicha o‘qituvchi ekanligini (Lehrerin)</span>
              </button>
              <button type="button" class="quiz-option-btn" data-exam-ans="q1" data-val="2">
                <span>C) U Berlindan kelganligini</span>
              </button>
            </div>
          </div>

          <!-- Question 2 -->
          <div class="content-box-callout">
            <span class="text-xs font-bold text-brand uppercase block mb-1">2-Savol (Grammatika & Lug‘at)</span>
            <p class="font-extrabold text-base mb-3">"___ Buch ist sehr interessant." — qaysi artikl to‘g‘ri?</p>
            <div class="quiz-options-list">
              <button type="button" class="quiz-option-btn" data-exam-ans="q2" data-val="0">
                <span>A) Der Buch</span>
              </button>
              <button type="button" class="quiz-option-btn" data-exam-ans="q2" data-val="1">
                <span>B) Das Buch</span>
              </button>
              <button type="button" class="quiz-option-btn" data-exam-ans="q2" data-val="2">
                <span>C) Die Buch</span>
              </button>
            </div>
          </div>
        </div>

        <div class="flex justify-between items-center mt-6 pt-4 border-t border-border-light">
          <button type="button" class="btn btn-secondary" id="btn-cancel-exam">Bekor qilish</button>
          <button type="button" class="btn btn-primary" id="btn-submit-exam">
            <span>Testni yakunlash va Sertifikat olish</span>
            <i data-lucide="award"></i>
          </button>
        </div>
      `;
    }

    lucide.createIcons();
  }

  function startExamTimer() {
    state.examActive = true;
    state.examSeconds = 1200; // 20 minutes
    state.examAnswers = {};
    renderExamSimulation();

    clearInterval(state.examTimer);
    state.examTimer = setInterval(() => {
      state.examSeconds = Math.max(0, state.examSeconds - 1);
      const m = String(Math.floor(state.examSeconds / 60)).padStart(2, '0');
      const s = String(state.examSeconds % 60).padStart(2, '0');
      const clock = $('#exam-clock-digits');
      if (clock) clock.textContent = `${m}:${s}`;

      if (state.examSeconds === 0) {
        clearInterval(state.examTimer);
        finishExam();
      }
    }, 1000);
  }

  function finishExam() {
    clearInterval(state.examTimer);
    state.examActive = false;

    // Check answers (q1=1, q2=1)
    let correct = 0;
    if (state.examAnswers.q1 === '1') correct++;
    if (state.examAnswers.q2 === '1') correct++;

    const score = correct * 50; // out of 100
    const passed = score >= 60;
    const attempt = {
      name: state.selectedExam,
      score,
      date: new Date().toLocaleDateString('uz-UZ'),
      passed
    };
    state.attempts.unshift(attempt);
    localStorage.setItem('fh_attempts', JSON.stringify(state.attempts));

    if (passed) {
      AudioFX.fanfare();
      fireConfetti();
      addXP(50, 'Imtihon muvaffaqiyatli topshirildi');
      openCertificateModal(attempt);
    } else {
      showToast(`Imtihon yakunlandi: ${score}/100 ball. O‘tish chegarasi: 60%. Yana tayyorlanib sinab ko‘ring.`);
    }

    renderExamCatalog();
  }

  function openCertificateModal(attempt) {
    $('#cert-student-name-display').textContent = state.studentName;
    $('#cert-level-name').textContent = attempt.name;
    $('#cert-score-val').textContent = `${attempt.score} / 100 ball`;
    $('#cert-date-val').textContent = attempt.date;
    $('#certificate-modal').hidden = false;
  }

  // ==========================================================================
  // 6. DASHBOARD & STATS LOGIC
  // ==========================================================================
  function renderDashboard() {
    updateHeaderStats();

    // Achievements Showcase
    const badgesContainer = $('#dashboard-badges-list');
    if (badgesContainer) {
      const badges = [
        { title: 'Birinchi Qadam', desc: 'Dastlabki darsni ochish', icon: '🚀', unlocked: true },
        { title: 'Izchil Sayyoh', desc: '3 kunlik o‘quv silsilasi', icon: '🔥', unlocked: state.streak >= 3 },
        { title: 'So‘z Ustasi', desc: 'Kamida 5 ta so‘zni yodlash', icon: '💎', unlocked: state.mastered.size >= 5 },
        { title: 'Sertifikat Sohibi', desc: 'Demo imtihonni 60%+ topshirish', icon: '🏅', unlocked: state.attempts.some(a => a.passed) }
      ];

      badgesContainer.innerHTML = badges.map(b => `
        <div class="badge-item-card glass-card ${b.unlocked ? 'unlocked' : 'locked'}">
          <div class="badge-icon-disc">${b.unlocked ? b.icon : '🔒'}</div>
          <h4 class="font-bold text-base mb-1">${b.title}</h4>
          <p class="text-xs text-muted mb-2">${b.desc}</p>
          <span class="text-xs font-bold ${b.unlocked ? 'text-emerald' : 'text-muted'}">
            ${b.unlocked ? '✓ Qo‘lga kiritildi' : 'Qulflangan'}
          </span>
        </div>
      `).join('');
    }

    // Exam History List
    const historyContainer = $('#dashboard-exam-history');
    if (historyContainer) {
      if (state.attempts.length === 0) {
        historyContainer.innerHTML = `
          <div class="p-6 text-center text-muted text-sm">
            Hali birorta ham test topshirilmadi. Testlar bo‘limiga o‘ting va o‘zingizni sinab ko‘ring!
          </div>
        `;
      } else {
        historyContainer.innerHTML = `
          <div class="divide-y divide-border-light">
            ${state.attempts.map(a => `
              <div class="p-4 flex justify-between items-center">
                <div>
                  <strong class="text-base">${a.name}</strong>
                  <span class="text-xs text-muted block">${a.date}</span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="font-bold ${a.passed ? 'text-emerald' : 'text-rose'}">${a.score}/100</span>
                  <span class="text-xs font-bold ${a.passed ? 'bg-emerald-subtle text-emerald' : 'bg-rose-subtle text-rose'} px-2 py-1 rounded-full">
                    ${a.passed ? 'O‘tdi ✓' : 'Qayta urinish'}
                  </span>
                </div>
              </div>
            `).join('')}
          </div>
        `;
      }
    }
  }

  // ==========================================================================
  // GLOBAL SEARCH & EVENT LISTENERS
  // ==========================================================================
  function setupEventListeners() {
    // Nav View Switching
    document.addEventListener('click', (e) => {
      const viewBtn = e.target.closest('[data-view]');
      if (viewBtn) {
        const view = viewBtn.dataset.view;
        const step = viewBtn.dataset.step ? parseInt(viewBtn.dataset.step, 10) : null;
        switchView(view, step);
        return;
      }

      // Audio Speech Buttons
      const speakBtn = e.target.closest('[data-speak]');
      if (speakBtn) {
        speakGerman(speakBtn.dataset.speak);
        return;
      }

      // Lesson Preview Modal opener
      const lessonRow = e.target.closest('[data-lesson-idx]');
      if (lessonRow) {
        openLessonModal(parseInt(lessonRow.dataset.lessonIdx, 10));
        return;
      }

      // Stepper Stage Nav
      const stageBtn = e.target.closest('[data-step-nav]');
      if (stageBtn) {
        state.lessonStep = parseInt(stageBtn.dataset.stepNav, 10);
        renderLesson();
        return;
      }

      // Vocab Filters
      const lvlBtn = e.target.closest('[data-filter-lvl]');
      if (lvlBtn) {
        state.vocabLevel = lvlBtn.dataset.filterLvl;
        renderVocabulary();
        return;
      }
      const typeBtn = e.target.closest('[data-filter-type]');
      if (typeBtn) {
        state.vocabType = typeBtn.dataset.filterType;
        renderVocabulary();
        return;
      }

      // Vocab Master/Favorite
      const masterBtn = e.target.closest('[data-toggle-master]');
      if (masterBtn) {
        const id = parseInt(masterBtn.dataset.toggleMaster, 10);
        if (state.mastered.has(id)) {
          state.mastered.delete(id);
          showToast('So‘z yodlanganlardan olindi');
        } else {
          state.mastered.add(id);
          addXP(5, 'Yangi so‘z yodlandi');
        }
        localStorage.setItem('fh_mastered', JSON.stringify([...state.mastered]));
        updateHeaderStats();
        renderVocabulary();
        return;
      }

      const favBtn = e.target.closest('[data-toggle-fav]');
      if (favBtn) {
        const id = parseInt(favBtn.dataset.toggleFav, 10);
        if (state.favorites.has(id)) {
          state.favorites.delete(id);
          showToast('Sevimlilardan olindi');
        } else {
          state.favorites.add(id);
          showToast('Sevimlilarga qo‘shildi ★');
        }
        localStorage.setItem('fh_favorites', JSON.stringify([...state.favorites]));
        renderVocabulary();
        return;
      }

      // Exam Selection & Answer selection
      const examSelect = e.target.closest('[data-select-exam]');
      if (examSelect) {
        state.selectedExam = examSelect.dataset.selectExam;
        renderExamCatalog();
        return;
      }

      const examAns = e.target.closest('[data-exam-ans]');
      if (examAns) {
        const q = examAns.dataset.examAns;
        state.examAnswers[q] = examAns.dataset.val;
        $$(`[data-exam-ans="${q}"]`).forEach(b => b.classList.toggle('correct', b === examAns));
        AudioFX.click();
        return;
      }

      // Modal Close buttons
      if (e.target.closest('.btn-close-modal') || e.target.classList.contains('modal-overlay')) {
        $$('.modal-overlay').forEach(m => m.hidden = true);
        return;
      }
    });

    // Lesson Step Next / Prev
    $('#step-btn-prev')?.addEventListener('click', () => {
      state.lessonStep = Math.max(0, state.lessonStep - 1);
      renderLesson();
    });

    $('#step-btn-next')?.addEventListener('click', () => {
      if (state.lessonStep < 8) {
        state.lessonStep++;
        renderLesson();
      } else {
        // Complete
        switchView('courses');
        showToast('1-Dars to‘liq yakunlandi!');
      }
    });

    // Vocab Modes
    $('#mode-table-btn')?.addEventListener('click', () => {
      state.vocabMode = 'table';
      $('#mode-table-btn').classList.add('active');
      $('#mode-flash-btn').classList.remove('active');
      renderVocabulary();
    });

    $('#mode-flash-btn')?.addEventListener('click', () => {
      state.vocabMode = 'flash';
      state.flashIndex = 0;
      $('#mode-flash-btn').classList.add('active');
      $('#mode-table-btn').classList.remove('active');
      renderVocabulary();
    });

    // Vocab Search
    $('#vocab-search-input')?.addEventListener('input', (e) => {
      state.vocabSearch = e.target.value;
      renderVocabulary();
    });

    // Theme Toggle (Light / Dark)
    const savedTheme = localStorage.getItem('fh_theme') || 'light';
    if (savedTheme === 'dark') document.body.classList.add('theme-dark');

    $('#theme-btn')?.addEventListener('click', () => {
      document.body.classList.toggle('theme-dark');
      const isDark = document.body.classList.contains('theme-dark');
      localStorage.setItem('fh_theme', isDark ? 'dark' : 'light');
      const icon = $('#theme-icon');
      if (icon) icon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
      lucide.createIcons();
    });

    // Audio Speed Selector
    $('#audio-speed-select')?.addEventListener('change', (e) => {
      state.audioRate = parseFloat(e.target.value) || 1.0;
    });

    // Hero Audio Play Button
    $('#hero-audio-btn')?.addEventListener('click', () => {
      const phrase = $('#hero-phrase')?.textContent || 'Guten Tag! Ich lerne Deutsch.';
      speakGerman(phrase);
    });

    // Phonetics Full Play
    $('#phonetics-full-listen')?.addEventListener('click', () => {
      speakGerman('ä, ö, ü, ß, ei, ie, eu, ch');
    });

    // Start Exam Button
    document.addEventListener('click', (e) => {
      if (e.target.closest('#btn-start-exam-timer')) {
        startExamTimer();
      }
      if (e.target.closest('#btn-submit-exam')) {
        finishExam();
      }
      if (e.target.closest('#btn-cancel-exam')) {
        clearInterval(state.examTimer);
        state.examActive = false;
        renderExamSimulation();
      }
      if (e.target.closest('#btn-print-cert')) {
        window.print();
      }
      if (e.target.closest('#btn-download-cert')) {
        downloadCertificateTxt();
      }
    });

    // Quick Search Modal (Ctrl+K or Search Button)
    $('#search-btn')?.addEventListener('click', () => {
      $('#search-modal').hidden = false;
      $('#global-search-input')?.focus();
    });

    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        $('#search-modal').hidden = false;
        $('#global-search-input')?.focus();
      }
      if (e.key === 'Escape') {
        $$('.modal-overlay').forEach(m => m.hidden = true);
      }
    });

    $('#global-search-input')?.addEventListener('input', (e) => {
      handleGlobalSearch(e.target.value);
    });
  }

  function handleGlobalSearch(query) {
    const q = query.toLowerCase().trim();
    const resultsBox = $('#global-search-results');
    if (!resultsBox) return;

    if (!q) {
      resultsBox.innerHTML = '<p class="text-xs text-muted">Qidirish uchun so‘z yoki dars nomini kiriting...</p>';
      return;
    }

    const matchedWords = VOCAB_DATA.filter(w => `${w.german} ${w.uz}`.toLowerCase().includes(q));
    const matchedLessons = COURSES_DATA.filter(l => `${l.de} ${l.uz}`.toLowerCase().includes(q));

    let html = '';
    if (matchedLessons.length > 0) {
      html += `<div class="mb-3"><span class="text-xs font-bold text-brand uppercase">Kurslar:</span>`;
      html += matchedLessons.map(l => `
        <button type="button" class="btn btn-secondary w-full text-left justify-start mt-1" data-view="courses">
          <i data-lucide="book"></i>
          <span>${l.de} — ${l.uz}</span>
        </button>
      `).join('');
      html += `</div>`;
    }

    if (matchedWords.length > 0) {
      html += `<div><span class="text-xs font-bold text-brand uppercase">So‘zlar:</span>`;
      html += matchedWords.map(w => `
        <button type="button" class="btn btn-secondary w-full text-left justify-start mt-1" data-view="vocabulary">
          <i data-lucide="volume-2"></i>
          <span>${w.article ? w.article + ' ' : ''}${w.german} — ${w.uz}</span>
        </button>
      `).join('');
      html += `</div>`;
    }

    if (!matchedLessons.length && !matchedWords.length) {
      html = '<p class="text-xs text-muted">Hech narsa topilmadi.</p>';
    }

    resultsBox.innerHTML = html;
    lucide.createIcons();
  }

  function downloadCertificateTxt() {
    const certText = `
======================================================
         FOR GREAT NATION · FLY HIGH
         NEMIS TILI O'ZLASHTIRISH SERTIFIKATI
======================================================
Talaba: ${state.studentName}
Bosqich: ${state.selectedExam}
Natija: 100 / 100 ball (A'lo)
Berilgan sana: ${new Date().toLocaleDateString('uz-UZ')}
Tasdiqlovchi: Fly High Academic Team
Sertifikat ID: FH-${Date.now().toString(36).toUpperCase()}
======================================================
Tabriklaymiz! Ushbu natija sizning nemis tilini
o'zlashtirishdagi ajoyib ko'rsatkichingizdir.
`;
    const blob = new Blob([certText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `FlyHigh-Sertifikat-${state.studentName.replace(/\s+/g, '_')}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Sertifikat muvaffaqiyatli yuklab olindi!');
  }

  // --- Initialize App ---
  function init() {
    setupEventListeners();
    renderHomeTrail();
    updateHeaderStats();
    lucide.createIcons();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
