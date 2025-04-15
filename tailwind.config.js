/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '38': '9.5rem',
        '13': '3.25rem',
        '46': '11.5rem',
        '60': '16rem'
      }
    },
    fontFamily: {
      blackops: ['"Black Ops One"', 'cursive'],
      rajdhani: ['"Rajdhani"', 'sans-serif'],
      mono: ['"Share Tech Mono"', 'monospace'],
      orbitron: ['"Orbitron"', 'sans-serif'],
      poppins: ['"Poppins"', 'sans-serif'],
    },
  },
  plugins: [],
}

