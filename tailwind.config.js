module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "0.5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
