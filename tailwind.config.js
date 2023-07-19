/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 10px 50px 4px #113E44',
      },
      fontFamily: {
        'poppins': 'Poppins',
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

