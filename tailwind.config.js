/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        serif: ["Ruda", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
};
