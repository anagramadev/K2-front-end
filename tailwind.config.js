module.exports = {
  darkMode: "class",
  content: ["public/*.html"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      k2_red: "#FD0000",
      k2_black: "#191919",
      k2_cream: "#F2EBE3",
      k2_white: "#ffffff",
      k2_DSgrey: "#585F69",
      k2_Sgrey: "#A4ABB5",
      k2_LSgrey: "#CACED3",
      darkCream: "#ACA195",
      forestGreen: "#373A25",
      brown: "#4D1806",
      seaBlue: "#1B2848",
      pink: "#351625",
      orange: "#442707",
      purple: "#3A1837",
      forestGreenAc: "#D9E670",
      brownAc: "#FF5031",
      seaBlueAc: "#4E85EF",
      pinkAc: "#F00250",
      orangeAc: "#D08C29",
      purpleAc: "#BF22B0",
    },
    extend: {
      fontFamily: {
        hv300: ["Halvar300"],
        hv400: ["Halvar400"],
        hv500: ["Halvar500"],
        hv700: ["Halvar700"],
      },
      fontSize: {
        xxs: [
          "21px",
          {
            letterSpacing: "-1px",
            lineHeight: "32px",
          },
        ],
        xs: [
          "36px",
          {
            letterSpacing: "-2px",
            lineHeight: "48px",
          },
        ],
        sm: [
          "56px",
          {
            letterSpacing: "-2px",
            lineHeight: "48px",
          },
        ],
        md: [
          "72px",
          {
            letterSpacing: "-2px",
            lineHeight: "88px",
          },
        ],
        lg: [
          "112px",
          {
            letterSpacing: "-2px",
            lineHeight: "112px",
          },
        ],
        xl: [
          "144px",
          {
            letterSpacing: "-2px",
            lineHeight: "136px",
          },
        ],
        "3xs": [
          "16px",
          {
            letterSpacing: "0.5px",
            lineHeight: "24px",
          },
        ],
        "4xs": ["13px", "24px"],
      },
    },
  },
  plugins: [],
};
