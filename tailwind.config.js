/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '32': '32px',
      },
      colors: {
        'light-main': '#fffefe',
        'light-accent': '#f1f2f6',
        'light-dark': '#818594',
        
        'dark-main': '#0e1118',
        'dark-accent': '#262730',
        'dark-dark': '#a0a6b7',
      },
    },
  },
  plugins: [],
}
