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
        // Light theme
        'main-bg': '#FFFEFE',
        'main-primary': '#E6E7E6',
        'main-secondary': '#1B3A49',
        'main-primary-light': '#F3F3F2',
        'main-secondary-light': '#819198',
        'main-hl-primary': '#FCE1D3',
        'main-hl-primary-dark': '#F6B08D',
        'main-hl-secondary': '#78C2B4',
        'main-hl-secondary-dark': '#4A7E7F',
        
        // Dark theme
        'dark-bg':'#262730',
        'dark-primary': '#0e1118',
        'dark-secondary': '#a0a6b7',
        'dark-primary-light': '#1A1C24',
        'dark-secondary-light': '#575C68',
        'dark-hl-primary': '#FCE1D3',
        'dark-hl-primary-dark': '#F6B08D',
        'dark-hl-secondary': '#78C2B4',
        'dark-hl-secondary-dark': '#4A7E7F',

        'dark-primary-old': '#0e1118',
        'dark-secondary-old': '#262730',
        'dark-dark': '#a0a6b7',

        // success
        // info
        // warning
        // danger
      },
    },
  },
  plugins: [],
}
