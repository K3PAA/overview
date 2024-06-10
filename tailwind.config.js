/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#f06414",
          700: "#f1742b",
        },
        secondary: {
          400: "#05a0fa",
          700: "#1ea9fb",
        },
      },
    },
  },
  plugins: [],
};
