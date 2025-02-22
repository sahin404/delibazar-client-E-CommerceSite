/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bangla: ["Hind Siliguri", "sans-serif"],
      },
    },
  },
  plugins: [
    // eslint-disable-next-line
    require('daisyui'),
  ],
}

