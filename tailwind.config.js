module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "zep-dark": "#212121",
      },
      animation: {
        "bounce-slow": "bounce 5s infinite",
        "spin-slow": "spin 5s infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
