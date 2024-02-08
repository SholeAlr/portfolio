/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      yellowish: "#FBFE5E",
      purplish: "#5301B4",
      lightBlue: "#A7D1F6",
      ashen: "#fcfcfc",
      cyan: "#93c5fd",
      "violet-400": "#a78bfa",
      "violet-200": "#ddd6fe",
      "violet-600": "#7c3aed",
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [require("daisyui")],
  important: true,
};
