import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("Theme") || "Dark";
    });

    const handleThemeSwitcher = () => {
        const newTheme = theme === "Light" ? "Dark" : "Light";
        setTheme(newTheme);
        localStorage.setItem("Theme", newTheme); 
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ handleThemeSwitcher, theme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};
