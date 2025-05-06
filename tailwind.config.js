/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          terminal: "#00ff00",
          background: "#000000",
        },
        fontFamily: {
          mono: ["Fira Code", "monospace"],
        },
      },
    },
    plugins: [],
  }
  