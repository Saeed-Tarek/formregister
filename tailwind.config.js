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
        dark: "#22335f",
        light: "#fff",
        accent: "rgb(46 114 178)", 
        accentDark: "#ffdb4d",
        admin1: "#156365",
        admin2: "rgb(235 235 235)",
      },
      fontFamily: {
        mr: ["var(--font-mr)"],
        in: ["var(--font-in)"],
        ta: ['var(--font-ta)'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right bottom, #33a7b1, #002198)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
