/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('../public/header.jpg')",
      },
    },
    plugins: [],
  },
}
