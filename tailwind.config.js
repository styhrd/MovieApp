/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'serif'],
        bebas: ['Bebas Neue', 'serif'],
      },
      colors: {
        'primary': "#e50914"
      }
    },
  },
  plugins: [],
}

