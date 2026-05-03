import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0f', primary: '#ff2d78', secondary: '#00f5ff', accent: '#b44fff', muted: '#a0a0b0'
      },
      boxShadow: { neon: '0 0 20px rgba(0,245,255,.35)', pink: '0 0 20px rgba(255,45,120,.35)' },
      animation: {
        glitch: 'glitch 1.5s infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glitch: { '0%,100%': { transform: 'translate(0)' }, '20%': { transform: 'translate(-2px,2px)' }, '40%': { transform: 'translate(2px,-1px)' }, '60%': { transform: 'translate(-1px,1px)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } }
      }
    },
  },
  plugins: [],
} satisfies Config
