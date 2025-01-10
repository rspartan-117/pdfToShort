/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 60s linear infinite", // Adjust speed as needed
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" }, // Start from the right
          "100%": { transform: "translateX(-100%)" }, // End on the left
        },
      },
    },
  },
  plugins: [],
}