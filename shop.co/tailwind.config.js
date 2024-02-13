/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        nav:'1110px',
        xsm:'400px',
      },
      height: {
        '100vh': '100vh',
      },
      minHeight: {
        '100vh': '100vh',
      }
    },
  },
  plugins: [],
}

