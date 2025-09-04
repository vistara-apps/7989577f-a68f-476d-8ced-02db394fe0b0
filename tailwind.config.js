/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(240 5% 95%)',
        accent: 'hsl(20 90% 55%)',
        primary: 'hsl(240 90% 50%)',
        surface: 'hsl(0 0% 100%)',
        textPrimary: 'hsl(240 5% 90%)',
        textSecondary: 'hsl(240 5% 60%)',
        purple: {
          900: '#1a0d2e',
          800: '#2d1b4e',
          700: '#3d2a5f',
          600: '#4c3975',
          500: '#5c4887',
          400: '#7c5fb3',
          300: '#9c7fcf',
          200: '#bca0e8',
          100: '#dcc5f5'
        }
      },
      borderRadius: {
        'lg': '16px',
        'md': '10px',
        'sm': '6px',
        'full': '9999px',
      },
      boxShadow: {
        'card': '0 4px 12px hsla(240, 5%, 50%, 0.1)',
        'focus': '0 0 0 3px hsl(20 90% 55% / 0.5)',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '20px',
        'xl': '32px',
      },
      animation: {
        'fade-in': 'fadeIn 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}
