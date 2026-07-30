"use client";

import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext(undefined);

function applyThemeClass(theme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme === "dark" ? "dark" : "light");
  root.style.colorScheme = theme === "dark" ? "dark" : "light";
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const initialTheme = savedTheme === "dark" ? "dark" : "light";
    setTheme(initialTheme);
    applyThemeClass(initialTheme);
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;
    localStorage.setItem("theme", theme);
    applyThemeClass(theme);
  }, [theme, isInitialized]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const next = prevTheme === 'light' ? 'dark' : 'light'
      applyThemeClass(next)
      try {
        localStorage.setItem('theme', next)
      } catch {
        /* private mode */
      }
      return next
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isInitialized }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
