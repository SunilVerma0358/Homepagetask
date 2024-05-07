/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // container
      container: {
        center: true,
        padding: "12px",
      },
      // font-family
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Open: ["Open Sans", "sans-serif"],
      },
      // background-color
      backgroundImage: {
        bluegreen: "linear-gradient(180deg, #27AA7E 19.21%, #004A6D 100%)",
        greenbluelinear:
          "linear-gradient(180deg, #27AA7E 19.21%, #004A6D 100%)",
        CardBg:
          "linear-gradient(180deg, rgba(39, 170, 126, 0.22) 19.21%, rgba(0, 74, 109, 0.22) 100%)",
        bgBorder:
          "linear-gradient(90deg, rgba(156, 156, 156, 0) 0%, rgba(0, 0, 0, 0.12) 64.52%)",
        bigCard: "linear-gradient(180deg, #239971 19.21%, #014462 100%)",
      },
      // max-width
      maxWidth: {
        container: "1164px",
        YourBestCard: "994px",
        ellipse: "660px",
        Mdimg: "309px",
        img: "400px",
        borderwidth: "364px",
      },
      // border-radius
      borderRadius: {
        xxl: "20px",
        roundedxxl: "51px",
      },
      // line-height
      lineHeight: {
        sm: "120%",
        md: "150%",
        lg: "160%",
      },
      // color
      colors: {
        blue: "#2E5EAA",
        blue6D: "#004A6D",
        green: "#27AA7E",
        bluelight: "#3D9DF21A",
        gray: "#3E7690",
        blue0F: "#0F5576",
        bluewhite: "#87D1F2",
      },
      // padding
      padding: {
        2.5: "9px",
        13: "13px",
        23: "23px",
        30: "30px",
        One: "1px",
        Sixty: "60px",
      },
    },
  },
  plugins: [],
};
