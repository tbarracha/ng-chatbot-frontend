const fs = require('fs');
const path = require('path');

// Load chatbot configuration
const chatbotConfig = require('./src/assets/config/chatbot.config.json');

// Transform underscores in color keys to hyphens
const transformColors = (colors) => {
  const transformed = {};
  for (const [key, value] of Object.entries(colors)) {
    const newKey = key.replace(/_/g, '-');
    transformed[newKey] = value;
  }
  return transformed;
};

// Generate tailwind.config.js
const tailwindConfig = `
  module.exports = {
    darkMode: 'class',
    content: [
      './src/**/*.{html,ts}',
    ],
    theme: {
      extend: {
        colors: ${JSON.stringify(transformColors(chatbotConfig.colors), null, 2)}
      },
    },
    plugins: [],
  };
`;

// Write the file to the root
fs.writeFileSync(path.join(__dirname, 'tailwind.config.js'), tailwindConfig);
console.log('tailwind.config.js has been generated based on chatbot.config.json');
