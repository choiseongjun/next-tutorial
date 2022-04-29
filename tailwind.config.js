module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Noto Sans KR", "sans-serif"],
    },
    fontSize: {
      24: "24px",
    },
    extend: {
      boxShadow: {
        "10cus": "10px 5px 10px #00000029;",
      },
      width: {
        1200: "1200px",
      },
      padding: {
        60: "60px",
      },
      height: {
        100: "100px",
      },
      flexGrow: {
        2: "2",
        3: "3",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
    },
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
