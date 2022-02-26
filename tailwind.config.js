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
        '4sektor': '#1E212B'
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
