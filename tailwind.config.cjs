/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFA62B",
        secondary1: "#00A0C1",
        secondary2: "#16697A",
        firstTC: "#252B42",
        secondTC: "#737373",
        lightTC: "#FFFFFF",
        lightBackground: "#FFFFFF",
        darkBackground: "#252B42",
        hoverC: "#2A7CC7",
        disabledEC: "#8EC2F2",
        mutedC: "#BDBDBD",
        successC: "#2DC071",
        alertC: "#E77C40",
        dangerC: "#E74040",
      },
      backgroundImage: {
        twoBC: 'linear-gradient(to top, rgba(22, 105, 122, .5) 50%, #252B42 50%)'
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    }
  },
  plugins: [],
}
// C: color, T: text, E: element