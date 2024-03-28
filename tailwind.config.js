/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',
        '120': '28rem',
      },
      backgroundImage: {
        "slider": "url('/home/sliderShape.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        body_bg: '#fcfbf8',
        night_green: '#133531',
        primary_green: '#15C8B4',
        contrast_green: '#11B19F',
        txtLight: '#bebeb4',
        middle_green: '#14a091',
        txtMiddle: '#7e9895',

        bodyColor: '#fcfbf8',
        txtGreen: '#133531',
        mainGreen: '#15C8B4',
        contrastColor: '#11B19F',
        txtLight: '#bebeb4',
        txtMiddle: '#7e9895',
        backMiddle: '#14a091',

      },
      screens: {
        'lg1100': '1100px',
        'lg2': '1250px',
        'md1100': '1100px',
        'md1372': '1372px',
        'md1200': '1200px'
      }
    },
  },
  plugins: [],
};
