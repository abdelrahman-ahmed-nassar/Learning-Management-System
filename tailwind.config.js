/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

let plugin = require('tailwindcss/plugin')

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
        h1: "80px",
        h2: "65px",
        h3: "50px",
      },
      colors: {
        primary: { ...colors.cyan, DEFAULT: colors.cyan[500] },
        secondary: { ...colors.yellow, DEFAULT: colors.yellow[500] },
        accent: { ...colors.teal, DEFAULT: colors.teal[500] },

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
        'mainGradient': "var(--main-gradient)",
        'accentGradient': "var(--accent-gradient)",
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
        "3xl": "1936px",
      },
    },
  },
  plugins: [
    
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/typography'),
    // require('tailwindcss-children'),

    function ({ addUtilities, theme, e }) {
      addUtilities({
        ".drtl": {
          direction: "rtl",
        },
        ".dltr": {
          direction: "ltr",
        },
      });
    },
    plugin(function ({ addVariant }) {
      // Add a `third` variant, ie. `third:pb-0`
      addVariant('thirdChild', '& :nth-child(3)')
    })
  
  ],
};

export default config;
