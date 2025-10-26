import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        // Add transition class before theme change
        if (isTransitioning) {
            document.documentElement.classList.add("theme-transitioning");
        }

        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);

        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        // Remove transition class after animation completes
        if (isTransitioning) {
            setTimeout(() => {
                document.documentElement.classList.remove("theme-transitioning");
                setIsTransitioning(false);
            }, 500); // Match CSS transition duration
        }
    }, [theme, isTransitioning]);

    const toggleTheme = () => {
        setIsTransitioning(true);

        // Add a slight delay to ensure smooth transition
        requestAnimationFrame(() => {
            setTheme(theme === "light" ? "dark" : "light");
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, isTransitioning }}>
            {children}
        </ThemeContext.Provider>
    );
}