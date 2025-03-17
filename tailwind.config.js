export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#ffc078",
        "bg-color": "#0D0E11",
        "from-color": "#449fEB",
        "hover-color": "#18D3ff",
      },
      fontFamily: {
        inter: ["Inter", "serif"],
      },
      animation: {
        soundwave: "soundwave 1.2s ease-in-out infinite",
      },
      keyframes: {
        soundwave: {
          "0%, 100%": { transform: "scaleY(1)" },
          "50%": { transform: "scaleY(0.3)" },
        },
      },
      transitionDuration: {
        800: "800ms",
      },
    },
  },
  plugins: [],
};
