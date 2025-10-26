import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        // Apply theme changes immediately
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);

        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const toggleTheme = () => {
        setIsTransitioning(true);

        // Change theme immediately
        setTheme(theme === "light" ? "dark" : "light");

        // Reset transition state quickly
        setTimeout(() => {
            setIsTransitioning(false);
        }, 200);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, isTransitioning }}>
            {children}
        </ThemeContext.Provider>
    );
}