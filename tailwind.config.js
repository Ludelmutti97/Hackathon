/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "backgroundColor": "#E7C3AC",
        "card-color": 'rgba(232, 243, 214, 0.8)',
        "branco": "#F4F4F9",
        "loginButton": "#FAAB78",
        "titulo": "#FAAB78",
        "verde": "#489750",
        "amarelo": "#FFDD55",
        "vermelho": "#D03030",
        "navBar": "#D56A43",
        "icons": "#F6AB3F",
        "boxes": "#E8F3D6",
        "laranjaSelect": "#E8B873",
        "laranjaBarra": "#E3CDB1"
        

      },
      backgroundImage: {
        "login-bg" : "url('/images/img.png')",
        "reward-bg" : "url('/images/RECOMPENSAS.png')"
      },
      fontFamily: {
        "robotoThin": ["Roboto-Thin"],
        "robotoThinItalic": ["Roboto-ThinItalic"],
        "robotoRegular": ["Roboto-Regular"],
        "robotoBold": ["Roboto-Bold"]

      }

    },
    plugins: [],
}
}