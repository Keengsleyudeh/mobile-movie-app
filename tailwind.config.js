/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        secondary: "#151312",
        accent: "#ABBBFF",
        light: {
          100: "#D6C6FF",
          200: "#A8B5DB",
          300: "#9CA4A8",
        },
        dark: {
          100: "221f3d",
          200: "#1b1737",
        }
      }
    },
  },
  plugins: [],
}