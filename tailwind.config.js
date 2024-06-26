/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'baskerville': ['Libre Baskerville', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'Playwrite': ['Playwrite NL', 'sans-serif'],
        'dancingScript': ['Dancing Script', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

