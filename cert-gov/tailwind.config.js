// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
module.exports = {
  content: ["./src/**/*.{html,js}"],
  corePlugins: {
    preflight: false
  },
  mode: 'jit',
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,js}"],
  },
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
