/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Darker Grotesque", "sans-serif"],
        openSans: ["Open Sans"],
      }
    },
  },
  plugins: [],
}