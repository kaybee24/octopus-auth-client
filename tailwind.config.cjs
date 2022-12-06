/* eslint-disable no-undef */
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
        "800": "#1A4355",
        "700": "#345969",
        "500": "#67828E",
      },
      "coral": {
        "900": "#FF482C",
        "700": "#FF6C56",
        "500": "#FFA395",
      },
      "offwhite": {
        "900": "#FAFAFA",
      },
      "darkgrey": {
        "900": "#212121",
      },
      "highlight": {
        "900": "#AADBFB",
      },
      "success": {
        "900": "#025F27",
      },
      "error": {
        "900": "#950000",
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