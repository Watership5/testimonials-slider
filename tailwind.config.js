/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Bold:"Bold",
        Light:"Light",
        Med:"Med"
      },
      colors:{
        'blue':'hsl(240, 38%, 20%)',
        'gray':'hsl(240, 18%, 77%)'
      }
    },
  },
  plugins: [],
}

