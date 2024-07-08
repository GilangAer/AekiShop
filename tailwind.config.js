/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: '#EB7530',
        dark: '#1B2028',
        grey: '#8A8A8A',
        white: '#FAFAFA',
        darkgrey: '#4E616D',
        gray: '#989EA8',
      },
      backgroundColor: {
        primary: '#EB7530',
        dark: '#1B2028',
      },
      // screens: {
      //   "2xl": "1420px",
      // },
    },
  },
  plugins: [],
}