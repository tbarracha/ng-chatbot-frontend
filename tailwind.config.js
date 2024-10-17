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
        'main-primary-lighter': '#F3F3F2',
        'main-primary-darker': '#CBCDCB',

        'main-secondary': '#1B3A49',
        'main-secondary-lighter': '#819198',
        'main-secondary-darker': '#11232D',
        
        'main-hl-primary': '#FCE1D3',
        'main-hl-primary-lighter': '#FEF2EC',
        'main-hl-primary-darker': '#F6B08D',

        'main-hl-secondary': '#78C2B4',
        'main-hl-secondary-lighter': '#ABD9D1',
        'main-hl-secondary-darker': '#4A7E7F',
        
        // Dark theme
        'dark-bg':'#262730',
        
        'dark-primary': '#0e1118',
        'dark-primary-lighter': '#1A1C24',
        'dark-primary-darker': '#08090D',
        
        'dark-secondary': '#a0a6b7',
        'dark-secondary-lighter': '#C5C9D3',
        'dark-secondary-darker': '#575C68',

        'dark-hl-primary': '#FCE1D3',
        'dark-hl-primary-lighter': '#F6B08D',
        'dark-hl-primary-darker': '#F6B08D',

        'dark-hl-secondary': '#78C2B4',
        'dark-hl-secondary-lighter': '#4A7E7F',
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
