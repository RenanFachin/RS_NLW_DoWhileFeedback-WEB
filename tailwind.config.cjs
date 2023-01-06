/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./index.html"
  ],
  theme: {
    colors: {
      white: '#ffffff',
      green: {
        500: '#1B873F'
      },
      pink: {
        500: '#FF008E'
      },
      orange: {
        500: '#FF7A29'
      },
      yellow: {
        500: '#FFCD1E'
      },
      black: {
        100: '#29292e',
        300: '#1b1b1f',
        400: '#202024',
        500: '#17171A',
        700: '#121214',
        900: '#09090A',
        
      },
      gray: {
        100: '#C4C4CC',
        200: '#e1e1e6',
        400: '#8D8D99',
        700: '#29292E'
      },
      transparent: 'transparent'
    },
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      gridTemplateColumns: {
        'page': '1fr 453px'
      },
      backgroundImage: {
        banner: "url('/src/assets/banner-girl.png')",
        'nlw-gradient': 'linear-gradient(100deg, #ff008e 0%, #ffcd1e 100%)',
      }
    },
  },
  plugins: [],
}
