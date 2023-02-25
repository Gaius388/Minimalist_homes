/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-image": "url('/src/images/background_image.png')",
        "ellipses": "url('/src/images/ellipse-bg.svg')",
      },
      animation: {
        slide: "slide 1s ease-in-out infinite",
      },
      keyframes: {
        slide: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};
