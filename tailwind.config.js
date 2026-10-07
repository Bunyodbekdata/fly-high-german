/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Signature brand palette — warm orange (Babbel-clean direction).
        // Every `brand-*` utility across the platform resolves from here, so the
        // whole UI re-skins from a single source of truth.
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        german: {
          black: '#111827',
          red: '#dc2626',
          gold: '#f59e0b',
        },
        // Pedagogical article colors — kept deliberately distinct from the orange
        // signature so grammar cues never read as brand chrome.
        article: {
          der: '#2563eb',
          die: '#e11d48',
          das: '#059669',
          plural: '#7c3aed',
        },
        slate: {
          750: '#26334d',
          850: '#172033',
        }
      },
      fontFamily: {
        sans: ['"Outfit"', '"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"Outfit"', 'sans-serif'],
      },
      // Editorial type scale for a calmer, more readable rhythm. The app had drifted
      // into ad-hoc 10/11px text; these pair a defined size with a matching line-height.
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
        'caption': ['0.75rem', { lineHeight: '1.125rem' }],
        'body': ['0.875rem', { lineHeight: '1.5rem' }],
      },
      boxShadow: {
        '2xs': '0 1px 1px 0 rgba(15, 23, 42, 0.03)',
        'xs': '0 1px 2px 0 rgba(15, 23, 42, 0.05)',
        'soft': '0 2px 12px -3px rgba(15, 23, 42, 0.06)',
        'card': '0 6px 24px -8px rgba(15, 23, 42, 0.10)',
        'elevated': '0 16px 40px -12px rgba(15, 23, 42, 0.16)',
        'glow': '0 0 25px -5px rgba(249, 115, 22, 0.30)',
        'glow-der': '0 0 25px -3px rgba(37, 99, 235, 0.30)',
        'glow-die': '0 0 25px -3px rgba(225, 29, 72, 0.30)',
        'glow-das': '0 0 25px -3px rgba(5, 150, 105, 0.30)',
        'glow-plural': '0 0 25px -3px rgba(124, 58, 237, 0.30)',
        'focus': '0 0 0 3px rgba(249, 115, 22, 0.35)',
      },
      borderRadius: {
        'xs': '0.125rem',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'soundwave': 'soundwave 0.8s ease-in-out infinite alternate',
        'fadeIn': 'fadeIn 0.25s ease-out forwards',
        'scaleUp': 'scaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        soundwave: {
          '0%': { height: '4px' },
          '100%': { height: '18px' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleUp: {
          '0%': { opacity: '0', transform: 'scale(0.94)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
