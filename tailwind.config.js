/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

const config = {
  "darkMode": "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.css",
  ],
  theme: {
    extend: {
      fontSize: {
        h1: "82px",
        h2: "65px",
        h3: "50px",
      },
      colors: {
        primary: { ...colors.rose, DEFAULT: colors.rose[500] },
        secondary: { ...colors.yellow, DEFAULT: colors.yellow[500] },

        ////////////
        //dark mode
        ////////////

        primaryBg: "var(--main-background-color)",
        invertedPrimaryBg: "var(--inverted-main-background-color)",
        secondaryBg: "var(--secondary-background-color)",

        primaryTxt: "var(--main-text-color)",
        invertedPrimaryTxt: "var(--inverted-main-text-color)",
        secondaryTxt: "var(--secondary-text-color)",
        invertedSecondaryTxt: "var(--inverted-secondary-text-color)",
      },
      fontFamily: {
        cairo: ["var(--font-cairo)", "system-ui", "sans-serif"],
        almarai: ["var(--font-almarai)", "system-ui", "sans-serif"],
        comfortaa: ["var(--font-comfortaa)", "system-ui", "sans-serif"],
        notoNastaliqUrdu: [
          "var(--font-noto-nastaliq-urdu)",
          "system-ui",
          "sans-serif",
        ],
      },
      backgroundImage: {
        // 'mainGradient': "linear-gradient(to top right, red, blue)",
      },
      spacing: {
        customSpacing: "yourValueHere",
      },
      borderRadius: {
        customRadius: "yourValueHere",
      },
      boxShadow: {},
      opacity: {
        customOpacity: "yourValueHere",
      },
      zIndex: {
        customZ: "yourValueHere",
      },
      width: {
        customWidth: "yourValueHere",
      },
      height: {
        customHeight: "yourValueHere",
      },
      maxWidth: {
        customMaxWidth: "yourValueHere",
      },
      maxHeight: {
        customMaxHeight: "yourValueHere",
      },
      minWidth: {
        customMinWidth: "yourValueHere",
      },
      minHeight: {
        customMinHeight: "yourValueHere",
      },
      transitionDuration: {
        customDuration: "yourValueHere",
      },
      transitionTimingFunction: {
        customEase: "yourValueHere",
      },
      translate: {
        customTranslate: "yourValueHere",
      },
      rotate: {
        customRotate: "yourValueHere",
      },
      scale: {
        customScale: "yourValueHere",
      },
      skew: {
        customSkew: "yourValueHere",
      },
      keyframes: {
        customAnimation: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        customAnimation: "customAnimation 1s ease-in-out",
      },
      aspectRatio: {
        customRatio: "yourValueHere",
      },
      gridTemplateColumns: {
        customCols: "yourValueHere",
      },
      gridTemplateRows: {
        customRows: "yourValueHere",
      },
      screens: {
        customBreakpoint: "yourValueHere",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme, e }) {
      addUtilities({
        ".rtl": {
          direction: "rtl",
        },
        ".ltr": {
          direction: "ltr",
        },
      });
    },
  ],
};

export default config;
