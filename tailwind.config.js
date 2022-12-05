/** @type {import('tailwindcss').Config} */
// import dots from './src/COMPONENTS/IMAGES/'
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        's_blue' : 'hsl(231, 69%, 60%)',
        's_red' : 'hsl(0, 94%, 66%)',
        'g_blue' : 'hsl(229, 8%, 60%)',
        'd_blue' : ' hsl(229, 31%, 21%)',
        'white'  : 'white'
      },
      fontFamily:{
        'rubik': `'Rubik', sans-serif`
      },
      fontWeight:{
        5 : 500,
        4 : 400
      },
      backgroundImage:{
        'dot' : 'url(../src/COMPONENTS/IMAGES/bg-dots.svg)'

      },
      backgroundPosition:{
        'c_bottom': 'center bottom'
      }
    },
  },
  plugins: [],
}
