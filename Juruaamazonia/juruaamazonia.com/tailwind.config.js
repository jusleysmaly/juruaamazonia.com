/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        'brand-green':      '#8DBB2E',
        'brand-green-dark': '#6E8F1A',
        'brand-green-light':'#A8D04A',
        'brand-brown':      '#7A6A5A',
        'brand-bg':         '#F7F9F4',
        'text-main':        '#6B6B6B',
        'border-light':     '#D9D9D9',
      },
      letterSpacing: {
        tight: '-0.3px',
      },
    },
  },
  plugins: [],
}
