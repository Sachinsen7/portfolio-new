/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx}", "./components/**/*.{js,jsx}"];
export const darkMode = "class";
export const theme = {
  extend: {
    colors: {
      primary: "#fff",
      secondary: "#9333ea",
      accent: "var(--accent)",
      "accent-foreground": "var(--accent-foreground)",
      foreground: "var(--foreground)",
      "foreground-muted": "var(--foreground-muted)",
      background: "var(--background)",
      muted: "var(--muted)",
      "muted-foreground": "var(--muted-foreground)",
      border: "var(--border)",
      input: "var(--input)",
      ring: "var(--ring)",
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
