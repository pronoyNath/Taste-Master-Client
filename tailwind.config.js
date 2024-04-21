/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'orange': '#fe9b60',
        'dark': '#2d2724',
        'lite': '#fe9b60',
      },
    },
  },
  plugins: [require("daisyui")],
}

