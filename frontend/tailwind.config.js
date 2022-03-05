module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        secColor: "#efefef",
        mainColor: "#BEBEBE",
        // mainColor: "#1A1B1F",
        primaryBlue: "#022f47",
        primaryDarkBlue: "#021e34",
        secondaryColor: "#14cddb",
        secondaryDark: "#0e8f99",
        blackOverlay: "rgba(0, 0 ,0 ,0.7)",
      },
      borderColor: {
        primaryBlue: "#022f47",
        primaryDarkBlue: "#021e34",
        secondaryColor: "#14cddb",
        secondaryDark: "#0e8f99",
      },

      textColor: {
        lightGray: "#F1EFEE",
        primaryBlue: "#14cddb",
        secondaryDark: "#0e8f99",
        mainColor: "#1A1B1F",
        primaryDarkBlue: "#021e34",
        secColor: "#efefef",
        navColor: "#BEBEBE",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
