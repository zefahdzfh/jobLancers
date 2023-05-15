/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily:{
        'montserrat':['Montserrat', 'sans-serif']
      } ,
      colors:{
        'redPrimary' : '#ED2B2A' ,
      },
      backgroundImage:{
        'Unsplash' : "url('../img/unsplash.png')" ,
      }
    },
  },
  plugins: [],
}

