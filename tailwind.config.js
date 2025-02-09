/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        '12xl': '10rem'
      },
      fontFamily:{
        Anton:["Anton","sans-serif"],
        Passion_One:["Passion One","sans-serif"]
      },
      animation: {
        typing: "typing 2s steps(30)  alternate, blink 1s "

      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      }

    },
  },
  plugins: [],
}