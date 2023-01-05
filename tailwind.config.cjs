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
        400: '#202024',
        500: '#17171A',
        700: '#121214',
        900: '#09090A'
      },
      gray: {
        100: '#C4C4CC',
        400: '#8D8D99',
        700: '#29292E'
      }
    },
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      gridTemplateColumns: {
        'page': '1fr 453px'
      },
      backgroundImage: {
        banner: "url('/src/assets/banner-girl.png')"
      }
    },
  },
  plugins: [],
}