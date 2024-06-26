/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width:{
        'cart' : '400px',
        '100': '388px',
        '200': '200px',
        '300': '300px',
        '350': '350px',
        '400': '400px',
        '500': '500px',
        '600': '600px',
        '700': '700px',
        '800': '800px',
        '900': '900px',
        '1000': '1000px',
        '1250': '1280px',
      },
      height:{
        'cart' : '3300px',
        '100': '388px',
        '200': '200px',
        '300': '300px',
        '400': '400px',
        '500': "calc(100vh - 168px)",
        '550': "550px",
        '600': '600px',
        '700': '700px',
        '800': '800px',


      },
      border:{
        '1' : '1px solid'
      }

    },
  },
  plugins: [],
};
