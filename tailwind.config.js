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
        "primary-orange" : "#F6AB3F",
        "dark-blue" : "#2D5473",
        "white" : "#FAF1E5",
        "lightest-blue" : "#89B8BE",
        "primary-blue" : "#386ae8",
        "contrast-green" : "#31e184",
        "contrast-red" : "#ef1255",
  
      },
      fontFamily : {
        "robotoThin":["Roboto-Thin"],
        "robotoThinItalic":["Roboto-ThinItalic"],
        "robotoRegular":["Roboto-Regular"],
        "robotoBold":["Roboto-Bold"]
        
      }
    },
  },
  plugins: [],
}
