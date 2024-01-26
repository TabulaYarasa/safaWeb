/** @type {import('tailwindcss').Config} */
module.exports ={
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      boxShadow: {
        custom:"0 0 10px rgba(0, 0, 0, 0.1)",
      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      bw: {'min': '1200px', 'max': '1430px'},
      bwm: {'min': '575px', 'max': '713px'},
      rxs:{"max":"410px"},
      xs: {"max":"576px"},
     
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      lgt: "1300px",
      lg4: "1400px",
      xl: "1700px",
    },
  },
  plugins: [],
}

