/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'paytoneOne': ['Paytone One', 'sans-serif'],
        'openSans': ['Open Sans', 'sans-serif']
      },
    },
    "colors": {
      "ocean": {
        "900": "#012F43",
        "700": "#345969",
      },
      "coral": {
        "900": "#FF482C",
        "500": "#FFA395",
      },
      "offwhite": {
        "500": "#FAFAFA",
      },
      "darkgrey": {
        "900": "#212121",
      },
      "grey": {
        "900": "#555555",
        "700": "#888888",
        "500": "#AAAAAA",
        "300": "#C9C9C9",
        "100": "#E9E9E9"
      }
    },
  },
  plugins: [],
}