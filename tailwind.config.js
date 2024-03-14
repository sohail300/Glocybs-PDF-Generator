/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors : {
        'outerspace': '#21FEEB',
        'gray': '#282828',
        'blue': '#52affd',
        'gray1': '#d8d8d8',
        'gray2': '#777',
        'linkblue': '#0066CC',
        
      }
    },
  },
  plugins: [],
}

