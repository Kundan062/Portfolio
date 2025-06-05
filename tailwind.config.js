/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        secondary: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          950: '#500724',
        },
        dark: {
          100: '#272727',
          200: '#1a1a1a',
          300: '#121212',
          400: '#0d0d0d',
          500: '#0a0a0a',
        },
        neon: {
          blue: '#00eeff',
          pink: '#ff00ff',
          green: '#00ff66',
          purple: '#bf00ff',
          yellow: '#ffff00',
        }
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Orbitron', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glitch': 'glitch 1s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { 
            textShadow: '0 0 5px #00eeff, 0 0 15px #00eeff',
            boxShadow: '0 0 5px #00eeff, 0 0 15px #00eeff' 
          },
          '100%': { 
            textShadow: '0 0 10px #ff00ff, 0 0 30px #ff00ff',
            boxShadow: '0 0 10px #ff00ff, 0 0 30px #ff00ff' 
          },
        },
        glitch: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(2px)' },
          '50%': { transform: 'translateX(-2px)' },
          '75%': { transform: 'translateX(1px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'cyber-grid': "url('/images/cyber-grid.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};