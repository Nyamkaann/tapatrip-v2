/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        "Header-image": "url('assets/Header.png')",
      }),

      backgroundColor: (theme) => ({
        ...theme("colors"),
        text: "#1679D5",
        bg: "#F4F6F8",
        button: "#1F458B",
        yellowc: "#F0573B",
      }),
      theme: {
        screens: {
          tablet: "769px",
        },
      },
      borderColor: (theme) => ({
        ...theme("colors"),
        text: "#1679D5",
        bg: "#F4F6F8",
        button: "#1F458B",
        yellowc: "#F0573B",
      }),
      width: {
        98: "26rem",
      },
      colors: {
        text: "#1679D5",
        bg: "#F4F6F8",
        button: "#1F458B",
      },
      fill: ["hover", "focus"],
      fill: (theme) => ({
        red: theme("colors.red.500"),
        green: theme("colors.green.500"),
        blue: theme("colors.blue.500"),
      }),
      textColor: {
        text: "#1679D5",
        bg: "#F4F6F8",
        button: "#1F458B",
        yellowc: "#F0573B",
      },

      placeholderColor: {
        primary: "#8AB1D5",
      },
      fontSize: {
        large: "40px",
        medium: "24px",
        small: "22px",
        xsmall: "10px",
      },

      screens: {
        xs: "410px",
      },
      animation: {
        bounce: "bounce 2s infinite",
        spin: "spin 12s linear infinite",
        ping: "ping 12s cubic-bezier(1, 1, 1, 1) infinite",
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(-5%)",
            animationTimingFunction: "cubic-bezier(0, 0, 1, 1)",
          },
          "50%": {
            transform: "none",
            animationTimingFunction: "cubic-bezier(0, 0, 0, 0)",
          },
        },
      },
      transitionDelay: {
        0: "0ms",
        2000: "2000ms",
      },
      transformOrigin: {
        "left-right-1/3-3/4": "33% 75%",
      },
    },
  },
  plugins: [],
};
