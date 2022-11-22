/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        22: "5.5rem",
        "safe-top": "env(safe-area-inset-top)",
        "safe-bottom": "env(safe-area-inset-bottom)",
        "safe-left": "env(safe-area-inset-left)",
        "safe-right": "env(safe-area-inset-right)",
      },
      screens: {
        standalone: { raw: "(display-mode: standalone)" },
      },
      fontFamily: {
        Courgette: ["Courgette"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
