
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        logo:'#AB3333',
      },
      fontFamily:{
        'logoIcon':'Georgia, Times New Roman, Times, serif',
        'primary':'Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif'
      },
      backgroundColor:{
        userIcon:'#E3E2E0'
      },
      animation:{
        'move':'move 1s linear  forwards'
      },
      keyframes:{
        'move':{
          '0%':{
            transform:'translateX(-100%)',
            opacity:'0.1'
          },
          '100%':{
            transform:'translateX(0)',
            opacity:'1'
          }
        }
      }
    },
  },
  plugins: [],
}
