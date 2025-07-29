/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx}", "./components/**/*.{js,jsx}"];
export const theme = {
  extend: {
    colors: {
      primary: "#fff",
      secondary: "#9333ea",
      accent: "#f59e0b",
      glass: "rgba(255, 255, 255, 0.1)",
      "glass-dark": "rgba(0, 0, 0, 0.2)",
    },
    boxShadow: {
      glass: "0 4px 30px rgba(0, 0, 0, 0.1)",
      "glass-hover": "0 8px 40px rgba(0, 0, 0, 0.15)",
    },
    borderColor: {
      glass: "rgba(255, 255, 255, 0.2)",
    },
    backgroundImage: {
      "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1))",
      "glass-dark-gradient": "linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))",
    },
  },
};
export const plugins = [
  require("@tailwindcss/forms"),
  require("@tailwindcss/typography"),
];
