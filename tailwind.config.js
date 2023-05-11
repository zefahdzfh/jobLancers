/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'montserrat':['Montserrat', 'sans-serif']
      } ,
      colors:{
        'redPrimary' : '#ED2B2A' ,
      }
    },
  },
  plugins: [],
}

