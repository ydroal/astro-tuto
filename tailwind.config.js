/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,css}'],
  theme: {
    extend: {
      fontFamily: {
        text: ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        orange: {
          DEFAULT: '#EB552C',
          deep: ''
        },
        green: {
          DEFAULT: '#00AB9C',
          deep: '#397E75'
        },
        black: '#313539',
        blueblack: '#30353A',
        gray: '#EFEFEF'
      }
    }
  },
  plugins: []
};