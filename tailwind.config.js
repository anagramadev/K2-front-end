module.exports = {
  darkMode: "class",
  content: ["public/*.html"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        red: "#FD0000",
        black: "#191919",
        cream: "#F2EBE3",
        white: "#ffffff",
        darkGrey: "#585F69",
        silverGrey: "#A4ABB5",
        lightGrey: "#CACED3",
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
            letterSpacing: "-0.015em",
            lineHeight: "32px",
          },
        ],
        xs: [
          "36px",
          {
            letterSpacing: "-0.025em",
            lineHeight: "48px",
          },
        ],
        sm: [
          "48px",
          {
            letterSpacing: "-0.025em",
            lineHeight: "56px",
          },
        ],
        md: [
          "72px",
          {
            letterSpacing: "-0.025em",
            lineHeight: "88px",
          },
        ],
        lg: [
          "112px",
          {
            letterSpacing: "-0.025em",
            lineHeight: "112px",
          },
        ],
        xl: [
          "144px",
          {
            letterSpacing: "-0.025em",
            lineHeight: "136px",
          },
        ],
        "3xs": [
          "16px",
          {
            letterSpacing: "0.005em",
            lineHeight: "24px",
          },
        ],
        "4xs": ["13px", "24px"],
        "0xs": ["0px", "0px"],
        // for small laptop to semi large desktop ------>
        "lp-md": ["42px", "52px"],
        "lp-lg": ["56px", "68px"],
        "lp-xl": ["96px", "96px"],
        // for phone to tablet ------>
        "mb-xxs": ["16px", "24px"],
        "mb-xs": ["18px", "24px"],
        "mb-sm": ["24px", "32px"],
        "mb-md": [
          "36px",
          {
            letterSpacing: "-0.015em",
            lineHeight: "48px",
          },
        ],
        "mb-lg": ["48px", "56px"],
        "mb-xl": ["64px", "64px"],
      },
    },
  },
  plugins: [],
};
