/** @type {import('tailwindcss').Config} */

  const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        border: "rgba(190, 192, 201, 0.5)",
        primary: "#212330",
        sercondary: "#303343",
        tertiary: "#171923",
        font: "#BEC0C9",
        transparent: "transparent",

        black: colors.black,
        white: colors.white,

        green1: "#3CB844",
        green2: "#1E9422",
        green3: "#006F00",

        red1: "#ff3b25",
        red2: "#d31e13",
        red3: "#a60000",

        blue1: "#026ae3",
        blue2: "#014cbd",
        blue3: "#002e97",

        yellow1: "#f3b70d",
        yellow2: "#f9db49",
        yellow3: "#ffff84",
      }
    },
  },
  plugins: [],
}

