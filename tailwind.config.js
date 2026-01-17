/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: 'rgba(22, 56, 94, 1)',
        secondary: 'rgba(255, 166, 0, 1)',

      },
      animation: {
        "slide-in-right": "slideInRight 0.7s ease-in-out",
        "slide-in-left": "slideInLeft 0.7s ease-in-out",
        marquee: "marquee linear infinite",
      },
      keyframes: {
        slideInRight: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        slideInLeft: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        marquee: {
      "0%": { transform: "translateX(100%)" },
      "100%": { transform: "translateX(-100%)" },
    },
      },
    },


  },
  plugins: [],
}