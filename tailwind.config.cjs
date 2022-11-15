/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-leaf': '#1caf82',
        'green-leaf-light':'#2cba8d',
      },
    },

  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}