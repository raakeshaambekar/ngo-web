/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
  extend: {
    fontFamily: {
      en: ["var(--font-inter)"],
      mr: ["var(--font-marathi-body)"],
      heritage: ["var(--font-marathi-heritage)"],
    },
  },
},
  plugins: [],
};