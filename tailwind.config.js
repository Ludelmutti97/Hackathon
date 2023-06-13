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
        "darkest-blue" : "#262e3e",
        "darker-blue" : "#323846",
        "dark-blue" : "#2c3445",
        "lightest-white" : "#f4f4f9",
        "lightest-blue" : "#ccd1dd",
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
