// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: "class",
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       animation: {
//         blob: "blob 10s infinite",
//         "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
//       },
//       keyframes: {
//         blob: {
//           "0%": { transform: "translate(0px, 0px) scale(1)" },
//           "33%": { transform: "translate(50px, -70px) scale(1.2)" },
//           "66%": { transform: "translate(-40px, 30px) scale(0.8)" },
//           "100%": { transform: "translate(0px, 0px) scale(1)" },
//         },
//       },
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//       },
//     },
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // এটি নিশ্চিত করুন
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        blob: "blob 10s infinite",
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(50px, -70px) scale(1.2)" },
          "66%": { transform: "translate(-40px, 30px) scale(0.8)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};