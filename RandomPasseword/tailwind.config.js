/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
  backgroundImage:{

    'my-imag':"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj2uwqkjXm1st0Dn6zqCEc7a0M-nOrmk-_xA&s)",
  },

    },
  },
  plugins: [],
}