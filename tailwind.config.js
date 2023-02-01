module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#CC2D4A",
        secundary: "#8fa206",
        terciary: "#61AE69",
      }),
      textColor: {
        primary: "#CC2D4A",
        secundary: "#8fa206",
        terciary: "#61AE69",
      },
    },
  },
  plugins: [],
};
