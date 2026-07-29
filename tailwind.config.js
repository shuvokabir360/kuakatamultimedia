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
        dark: {
          900: '#090305',
          800: '#120609',
          700: '#1b0a0e',
          600: '#281016',
          500: '#38161e',
        },
        brand: {
          red: '#ff0033',
          crimson: '#e50914',
          flame: '#ff3b30',
          maroon: '#8b0000',
          wine: '#58000d',
          gold: '#f59e0b',
          amber: '#fbbf24',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Hind Siliguri', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(255, 0, 51, 0.3)' },
          '100%': { boxShadow: '0 0 35px rgba(229, 9, 20, 0.7)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(to right, rgba(255, 0, 51, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 0, 51, 0.05) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
