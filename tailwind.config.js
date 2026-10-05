/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
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
          900: '#1e3a8a',
          950: '#172554',
        },
        german: {
          black: '#111827',
          red: '#dc2626',
          gold: '#f59e0b',
        },
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
      boxShadow: {
        '2xs': '0 1px 1px 0 rgba(0, 0, 0, 0.03)',
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.08)',
        'glow': '0 0 25px -5px rgba(37, 99, 235, 0.25)',
        'glow-der': '0 0 25px -3px rgba(37, 99, 235, 0.35)',
        'glow-die': '0 0 25px -3px rgba(225, 29, 72, 0.35)',
        'glow-das': '0 0 25px -3px rgba(5, 150, 105, 0.35)',
        'glow-plural': '0 0 25px -3px rgba(124, 58, 237, 0.35)',
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
