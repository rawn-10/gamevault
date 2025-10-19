/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        }
      },
      animation: {
        'glitch-1': 'glitch1 4s infinite',
        'glitch-2': 'glitch2 4s infinite',
        'glitch-text': 'glitchText 4s infinite',
        'glitch-hover': 'glitchHover 0.5s ease-out',
        'glitch-in': 'glitchIn 1s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        glitch1: {
          '0%, 100%': { transform: 'none' },
          '20%': { transform: 'skew(-15deg)' },
          '40%': { transform: 'skew(15deg) translateX(5px)' },
          '60%': { transform: 'skew(-10deg)' },
          '80%': { transform: 'skew(10deg) translateX(-5px)' }
        },
        glitch2: {
          '0%, 100%': { transform: 'none' },
          '25%': { transform: 'skew(15deg) translateX(-5px)' },
          '45%': { transform: 'skew(-10deg)' },
          '65%': { transform: 'skew(5deg) translateX(2px)' },
          '85%': { transform: 'skew(-5deg)' }
        },
        glitchText: {
          '0%, 100%': { transform: 'none', opacity: 1 },
          '10%': { transform: 'skew(-15deg)', opacity: 0.8 },
          '20%': { transform: 'skew(15deg) translateX(2px)', opacity: 0.9 },
          '30%': { transform: 'none', opacity: 1 }
        },
        glitchHover: {
          '0%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-2px) skew(10deg)' },
          '40%': { transform: 'translateX(2px) skew(-10deg)' },
          '60%': { transform: 'translateX(-2px)' },
          '80%': { transform: 'translateX(2px)' },
          '100%': { transform: 'translateX(0)' }
        },
        glitchIn: {
          '0%': { 
            opacity: 0,
            transform: 'translateY(20px) skew(-15deg)',
            filter: 'blur(10px)'
          },
          '25%': {
            opacity: 0.5,
            transform: 'translateY(15px) skew(15deg)',
            filter: 'blur(5px)'
          },
          '50%': {
            opacity: 0.7,
            transform: 'translateY(10px) skew(-5deg)',
            filter: 'blur(2px)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0) skew(0)',
            filter: 'blur(0)'
          }
        },
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-20px)'
          },
        },
        glow: {
          '0%': {
            boxShadow: '0 0 5px rgb(239 68 68), 0 0 10px rgb(239 68 68), 0 0 15px rgb(239 68 68)'
          },
          '100%': {
            boxShadow: '0 0 10px rgb(239 68 68), 0 0 20px rgb(239 68 68), 0 0 30px rgb(239 68 68)'
          },
        },
        slideUp: {
          '0%': {
            transform: 'translateY(100%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}