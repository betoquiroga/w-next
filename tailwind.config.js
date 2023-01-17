/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ww-main': '#040606',
        'ww-content': '#0D1016',
        'ww-alt': '#040606',
        'ww-lighter': '#7D8D96',
        'ww-normal': '#EBECED',
        'ww-title': '#FFFFFF',
        'ww-green': {
          100: '#D9F5EE',
          200: '#B3EBDD',
          300: '#8DE1CC',
          400: '#68D7BB',
          500: '#40CCAA',
          600: '#2DAB8B',
          700: '#228069',
          800: '#175546',
          900: '#0B2B23'
        },
      }
    },
  },
  plugins: [],
}
