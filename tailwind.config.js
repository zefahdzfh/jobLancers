/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily:{
        'montserrat':['Montserrat', 'sans-serif']
      } ,
      colors:{
        'redPrimary' : '#ED2B2A' ,
        'darkbg' : '#171717',
      },
      backgroundImage:{
        'Unsplash' : "url('./assets/css/img/unsplas.png')" ,
      }
    },
  },
  plugins: [],
}

