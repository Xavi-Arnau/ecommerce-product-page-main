/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "hsl(26, 100%, 55%)",
        paleOrange: "hsl(25, 100%, 94%)",
        veryDarkBlue: "hsl(220, 13%, 13%)",
        darkGrayishBlue: "hsl(219, 9%, 45%)",
        grayishBlue: "hsl(220, 14%, 75%)",
        lightGrayishBlue: "hsl(223, 64%, 98%)",
        white: "hsl(0, 0%, 100%)",
        black: "hsl(0, 0%, 0%)",
      },
      animation: {
        openmenu: "openmenu 0.5s ease-in-out",
        closemenu: "closemenu 0.5s ease-in-out",
      },
      keyframes: {
        openmenu: {
          // initial position
          "0%": { opacity: 0, display: "none" },
          // final position
          "100%": { opacity: 0.7, display: "block" },
        },
        closemenu: {
          // initial position
          "0%": { opacity: 0.7, display: "block" },
          // final position
          "100%": { opacity: 0, display: "none" },
        },
      },
    },
  },
  plugins: [],
};
