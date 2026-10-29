/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Signature brand palette — European Academic Indigo (Prussian Blue / Indigo direction).
        // Every `brand-*` utility across the platform resolves from here.
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#172554',
          950: '#090d16',
        },
        german: {
          black: '#0f172a',
          red: '#dc2626',
          gold: '#f59e0b',
        },
        // Pedagogical article colors — kept deliberately distinct from the brand signature
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
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"Outfit"', 'sans-serif'],
      },
      // Editorial type scale for a calmer, more readable rhythm.
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
        'caption': ['0.75rem', { lineHeight: '1.125rem' }],
        'body': ['0.875rem', { lineHeight: '1.5rem' }],
      },
      boxShadow: {
        '2xs': '0 1px 1px 0 rgba(15, 23, 42, 0.03)',
        'xs': '0 1px 2px 0 rgba(15, 23, 42, 0.04)',
        'soft': '0 2px 14px -3px rgba(15, 23, 42, 0.05), 0 1px 3px 0 rgba(15, 23, 42, 0.03)',
        'card': '0 8px 30px -8px rgba(15, 23, 42, 0.08), 0 2px 6px -2px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 14px 34px -8px rgba(15, 23, 42, 0.12), 0 4px 8px -2px rgba(15, 23, 42, 0.06)',
        'elevated': '0 20px 48px -12px rgba(15, 23, 42, 0.14)',
        'glow': '0 0 25px -4px rgba(79, 70, 229, 0.28)',
        'glow-der': '0 0 25px -3px rgba(37, 99, 235, 0.30)',
        'glow-die': '0 0 25px -3px rgba(225, 29, 72, 0.30)',
        'glow-das': '0 0 25px -3px rgba(5, 150, 105, 0.30)',
        'glow-plural': '0 0 25px -3px rgba(124, 58, 237, 0.30)',
        'focus': '0 0 0 3px rgba(79, 70, 229, 0.35)',
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
        'tab-fade': 'tabFade 0.22s ease-out forwards',
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
        },
        tabFade: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
