import { createContext, useState, useEffect } from "react";
import { transitionTheme } from "@/utils/viewTransitions";

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

        // Use View Transition API for smooth theme switching
        transitionTheme(() => {
            setTheme(theme === "light" ? "dark" : "light");
        }).finally(() => {
            // Reset transition state quickly for better performance
            setTimeout(() => {
                setIsTransitioning(false);
            }, 50);
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, isTransitioning }}>
            {children}
        </ThemeContext.Provider>
    );
}