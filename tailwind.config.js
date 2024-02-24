/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        medium: [
          "2.7rem",
          {
            lineHeight: "3.7rem",
          },
        ],
        large: [
          "3.4rem",
          {
            lineHeight: "4rem",
          },
        ],
      },
      colors: {
        orange: "#FA4432",
        orangelight: "#FA4532",
        gray: "#f8f8f8",
        beige: "#FEEAE6",
      },
      fontFamily: {
        rubik: ["Rubik"],
      },
    },
  },
  plugins: [],
}
