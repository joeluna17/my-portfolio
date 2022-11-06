/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'app-primary': '#0072FF',
        'app-secondary': '#FF8D00',
      },
    },
  },
  plugins: [],
}
