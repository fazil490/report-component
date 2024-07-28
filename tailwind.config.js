/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        k2d : ['k2d', 'sans-serif']
      }
    },
  },
  plugins: [],
}

