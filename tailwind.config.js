/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        firebg: "url('/public/img/firehd.gif')",
      },
    },
  },
  plugins: [],
};
