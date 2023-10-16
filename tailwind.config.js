/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        standart: "1440px",
      },
      colors: {
        general: "#252B42",
        primaryColor: "#23A6F0",
        dimbg: "#FAFAFA",
      },
    },
  },
  plugins: [],
};
