/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 2s ease-out',
        slideInRight: 'slideInRight 2s ease-out',
      },
      clipPath: {
        triangle: 'polygon(50% 0%, 0% 100%, 100% 100%)',
      },
      zIndex: {
        '1': '1', // Menambahkan z-index -1 ke konfigurasi
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    function ({ addUtilities }) {
      addUtilities({
        '.clip-triangle': {
          'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%)',
          'z-index': '1', // Menambahkan z-index langsung di sini
        },
      });
    },
  ],
}
