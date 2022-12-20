module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      fontFamily: { unbounded: ['"Unbounded"', "cursive"] },
      colors: {
        "color-red": "#d00000",
      },
    },
  },
  plugins: [],
};
