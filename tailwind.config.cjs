/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
        twoBC:
          "linear-gradient(to top, rgba(22, 105, 122, .5) 50%, #252B42 50%)",
        arrow: "url('./src/assets/arrow.png')",
        heroImg:
          "linear-gradient(to top, rgba(0,0,0,.5), rgba(0,0,0,.5)), url('./assets/heroImage.png')",
        videoImg:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0) 30%, rgba(56, 56, 56, 0.84)), url('./../src/assets/videoImage.png')",
        contactUs:
          "linear-gradient(to top, rgba(0,0,0,.5), rgba(0,0,0,.5)), url('./assets/contactUsImage.png')",
      },
      backgroundSize: {
        arrowSize: "14px",
      },
      backgroundPosition: {
        arrowPosition: "calc(100% - 15px) center",
      },
      screens: {
        xxs: "375px",
        xs: "480px",
        ss: "620px",
        sm: "768px",
        lap: "1024px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      fontSize: {
        h1: ["3.625rem", "5rem"],
        h2: ["2.5rem", "3.563rem"],
        h3: ["1.5rem", "2rem"],
        h5: ["1rem", "1.5rem"],
        h6: ["0.875rem", "1.5rem"],
        p: ["1rem", "1.875rem"],
        btn: ["1rem", "1.75rem"],
        link: ["0.875rem", "1.5rem"],
      },
    },
  },
  plugins: [],
};
// C: color, T: text, E: element
