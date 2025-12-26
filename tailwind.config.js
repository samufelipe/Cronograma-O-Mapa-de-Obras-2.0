
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./constants.tsx",
    "./index.tsx",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#FFB800',
          black: '#111111',
        }
      },
      boxShadow: {
        'hard': '4px 4px 0px 0px #111111',
        'gold': '4px 4px 0px 0px #FFB800',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    }
  },
  plugins: [],
}
