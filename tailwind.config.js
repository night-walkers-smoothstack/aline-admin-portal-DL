module.exports = {
  mode: 'jit',
  purge: [
      './src/**/*.{js,jsx}',
      './src/login/index.js',
      './public/index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
