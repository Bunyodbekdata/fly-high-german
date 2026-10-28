# Design System: FLY HIGH (For Great Nation)

Official `DESIGN.md` specification for FLY HIGH German Language Learning Platform.
Designed in accordance with Google Stitch Design System standards.

## 1. Visual Theme & Atmosphere

**Alpine Modernism meets Digital Academy**: A prestigious, clean, and distraction-free German language learning sanctuary. Inspired by Swiss typography, Bauhaus clarity, and modern European educational portals (Goethe-Institut, Babbel Live, Busuu).
- **Light Theme**: Pristine white and porcelain surfaces (`#ffffff`, `#f8fafc`) with subtle cold-gray borders (`#e2e8f0`), sharp typography, and warm amber-gold highlights.
- **Dark Theme**: Deep nocturnal obsidian surfaces (`#090d16`, `#0f172a`, `#1e293b`) with luminous contrast and high-contrast typography designed for strain-free evening study.
- **Micro-interactivity**: Tactile buttons, soft glow indicators, gentle audio wave pulsing, and fluid 3D card flips.

## 2. Color Palette & Roles

### Primary Brand Foundation (European Academic Indigo)
- **Primary 600 (`#4338ca`)**: Primary brand anchor, key CTA buttons, active navigation indicators.
- **Primary 500 (`#4f46e5`)**: Interactive button hover state, focus rings, progress fill.
- **Primary 700 (`#3730a3`)**: Active button press state, high-contrast dark accents.
- **Primary 50 (`#eef2ff`)**: Light mode surface tint for active tabs, selected states, and notification chips.
- **Primary 950 (`#1e1b4b`)**: Dark mode container tint with ambient luminescence.

### German National Flag Accent (Warm Gold / Amber)
- **Amber Gold (`#f59e0b` / `#d97706`)**: Streak flame, XP experience counters, rank tiers, certificate badges, and milestone celebrations.
- **Amber Tint (`#fef3c7`)**: Light mode achievement pill backgrounds.

### German Article Colors (Pedagogical Grammar System — Strictly Enforced)
- **der (Masculine)**: **Sapphire Blue (`#2563eb`)** on `#eff6ff` (dark: `#172554` container, `#60a5fa` text).
- **die (Feminine)**: **Crimson Ruby (`#e11d48`)** on `#fff1f2` (dark: `#4c0519` container, `#fb7185` text).
- **das (Neuter)**: **Emerald Jade (`#059669`)** on `#ecfdf5` (dark: `#064e3b` container, `#34d399` text).
- **die Plural**: **Amethyst Purple (`#7c3aed`)** on `#f5f3ff` (dark: `#2e1065` container, `#c084fc` text).

### Typography Hierarchy & Neutrals
- **Display & Headings**: Deep Graphite `#0f172a` (light), Pure White `#f8fafc` (dark).
- **Body & Subtitles**: Slate `#334155` (light), Pale Slate `#cbd5e1` (dark).
- **Muted & Metadata**: Muted Charcoal `#64748b` (light), Slate `#94a3b8` (dark).
- **Borders & Dividers**: Hairline `#e2e8f0` at 1px (light), `#1e293b` / `#334155` at 1px (dark).

### Functional States
- **Success / Passed**: Emerald `#10b981` (`#047857` deep, `#d1fae5` surface).
- **Warning / Review**: Amber `#f59e0b` (`#b45309` deep, `#fef3c7` surface).
- **Error / Incorrect**: Rose `#f43f5e` (`#be123c` deep, `#ffe4e6` surface).

## 3. Typography Rules

- **Display & Headline Font**: `Plus Jakarta Sans`, sans-serif.
  - `Hero H1`: 44px - 56px, bold / extra-bold (weight 800), tracking `-0.025em`, line-height `1.15`.
  - `Section H2`: 28px - 36px, extra-bold (weight 800), tracking `-0.02em`.
  - `Card H3`: 20px - 24px, bold (weight 700), tracking `-0.015em`.
  - `Module Title`: 16px - 18px, bold (weight 700).
- **Body & Dialogue Font**: `Inter`, `Plus Jakarta Sans`, sans-serif.
  - `Body Lg`: 16px, weight 400/500, line-height `1.6`.
  - `Body Md`: 14px, weight 400/500, line-height `1.5`.
  - `Caption / Microcopy`: 12px, weight 500/600, tracking `0.01em`.
  - `Phonetics & Pronunciation`: Monospace / Clean Sans with IPA bracket highlighting.

## 4. Component Stylings

### Navigation (`Navbar`)
- Fixed sticky header (`h-16`) with frosted glassmorphism (`backdrop-blur-md bg-white/90 dark:bg-slate-900/90`).
- Streamlined navigation items with rounded pill indicators (`rounded-xl px-3 py-1.5`).
- Responsive tablet/mobile drawer with touch-friendly 44px targets.

### Lesson Card & Modules (`LevelPage`, `CoursesPage`)
- Layered card container with `rounded-2xl` or `rounded-3xl` radii.
- Soft border (`border border-slate-200/80 dark:border-slate-800/80`).
- Gentle elevation (`shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]`).
- Interactive hover transition (`hover:-translate-y-0.5 hover:shadow-card transition-all duration-200`).

### Lesson Stepper (`LessonHeader`)
- Connected 9-step curriculum bar (`1. Kirish`, `2. Muloqot`, `3. Lug‘at`, `4. Grammatika`, `5. Tinglash`, `6. O‘qish`, `7. Yozish`, `8. Talaffuz`, `9. Mashqlar`).
- Completed steps display a vibrant emerald check badge.
- Active step is highlighted with primary indigo fill and elevated focus ring.

### Vocabulary Card (`VocabCard`)
- Distinctive colored border matching the German grammatical gender (`der`, `die`, `das`, `plural`).
- Integrated `AudioButton` with soundwave animation indicator.
- Instant favorite toggle and mastered status badge.

### Audio Player & Button (`AudioButton`, `ListeningPlayer`)
- Tactile circular or pill button with audio waveform animation on active playback.
- Subtle playback speed toggle (`0.75x`, `0.9x`, `1.0x`) with persistent local setting.

## 5. Layout Principles

- **Max Container Width**: `max-w-7xl` (1280px) for general dashboards, `max-w-5xl` for curriculum lists, `max-w-4xl` for single lessons and exams.
- **Grid Baseline**: 4px / 8px modular scale (`gap-3`, `gap-4`, `gap-6`, `gap-8`).
- **Responsive Breakpoints**:
  - `Mobile (<640px)`: Single column, edge padding 16px, sticky bottom action bar where needed.
  - `Tablet (640px - 1023px)`: 2-column grids, balanced spacing.
  - `Desktop (>=1024px)`: Multi-column sidebars, persistent progress panels.

## 6. Stitch Generation Notes

- **Atmosphere Keywords**: European academic sanctuary, alpine modernism, crisp typography, Prussian indigo, warm amber gold accents, der/die/das color system, frosted glassmorphism.
- **Component Prompts**:
  - "Interactive German lesson stepper with connected nodes, emerald completion checkmarks, and Prussian indigo active indicator."
  - "Vocabulary flashcard with sapphire blue der badge, audio playback waveform button, and Uzbek translation."
  - "Student dashboard showing streak flame in amber gold, CEFR A1 level progress meter, and next lesson action card."
