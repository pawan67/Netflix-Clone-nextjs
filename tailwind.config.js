module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        welcome: "url('/images/Netflix-Background.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
