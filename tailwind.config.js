/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: colors.green
      }
    },
  },
  plugins: [],
};

module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: []
}
