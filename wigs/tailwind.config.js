/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const extendUnderline = {
        '.underline': {
          'textDecoration': 'underline',
          'textDecorationColor': 'orange', // Corrected this line
        },
      };
      addUtilities(extendUnderline);
    }
  ],
};
