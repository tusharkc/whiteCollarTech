/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  purge: {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    safelist: [/^react-quill/],
  },
  plugins: [],
};
