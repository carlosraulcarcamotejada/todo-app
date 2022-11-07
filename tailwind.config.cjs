/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-leaf': '#1caf82'
      },
    },

  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}