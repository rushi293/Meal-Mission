/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    dark : false,
    extend: {
      animation:{
        blob: "blob 7s infinite"
        ,circle:"circle 11s infinite",
        rcircle:"circleReverse 12s infinite"
      },
      keyframes:{
        circleReverse: {
          "0%": {
            transform: "rotate(0deg) translateX(80px) translateY(0) rotate(-360deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateX(0) translateY(80px) rotate(0deg)",
          },
        }
,        
        circle:{
          "0%":{
            transform: "rotate(0deg) translateX(70px) rotate(360deg)"
          }
          ,"100%":{
            transform:"rotate(-360deg) translateX(70px) rotate(0deg)"
          }
        },
        blob:{
          "0%":{
            transform: "translate(0px,0px) scale(1)"
          },
          "33%":{
            transform: "translate(30px,-50px) scale(1.2)"
          },
          "66%":{
            transform: "translate(-20px,20px) scale(0.8)"
          },
          "100%":{
            transform: "translate(0px,0px) scale(1)"
          }
        }
      }
    },
  },
  plugins: [],
}