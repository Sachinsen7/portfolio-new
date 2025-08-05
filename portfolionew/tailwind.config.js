/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx}", "./components/**/*.{js,jsx}"];
export const theme = {
  extend: {
    colors: {
      primary: "#fff",
      secondary: "#9333ea",
      accent: "#f59e0b",
      foreground: "var(--foreground)",
      "foreground-muted": "var(--foreground-muted)",
      glass: "var(--glass-bg)",
      "glass-border": "var(--glass-border)",
      "button-hover": "var(--button-hover)",
    },
    boxShadow: {
      glass: "0 4px 30px rgba(0, 0, 0, 0.1)",
      "glass-hover": "0 8px 40px rgba(0, 0, 0, 0.15)",
    },
    borderColor: {
      glass: "var(--glass-border)",
    },
    backgroundImage: {
      "glass-gradient": "linear-gradient(135deg, var(--glass-bg), var(--glass-bg))",
      "glass-dark-gradient": "linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))",
    },
  },
};
export const plugins = [
  require("@tailwindcss/forms"),
  require("@tailwindcss/typography"),
];
