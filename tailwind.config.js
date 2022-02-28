module.exports = {
  content: ["./src/**/*.{html,js}"],

  mode: 'jit',
  purge: [
    './index.html',
    './style.css',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        '4sektor': '#1e212b',
        'greenish': '#00cc33',
        'grayish': '#626c78',
        'box':'#626c78',
      },
      fontFamily:{
        lato: ['Lato', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {}
  },
 
 
};
