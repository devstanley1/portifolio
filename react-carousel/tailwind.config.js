/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}", "../index.html"],
  corePlugins: {
    preflight: false
  },
  important: "#projects-carousel",
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "slide-up": "slideUp 0.6s ease-out"
      }
    }
  },
  plugins: []
};
