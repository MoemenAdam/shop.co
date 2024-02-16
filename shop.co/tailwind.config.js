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
        shop:'974px',
        xsm:'400px',
        cart:'440px',
        cart2:'569px',
      },
      height: {
        '100vh': '100vh',
      },
      minHeight: {
        '100vh': '100vh',
      },
      flexGrow: {
        'huge': 99999,
      },
      zIndex: {
        'huge': 9999,
      },
    },
  },
  plugins: [],
}

