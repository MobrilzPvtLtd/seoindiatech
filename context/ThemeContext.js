"use client";

import { createContext, useState, useContext, useLayoutEffect } from "react";

const ThemeContext = createContext(undefined);

function applyThemeClass(theme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme === "dark" ? "dark" : "light");
  root.style.colorScheme = theme === "dark" ? "dark" : "light";
}

function readStoredTheme() {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved;
  } catch {
    /* private mode */
  }
  if (typeof document !== "undefined" && document.documentElement.classList.contains("dark")) {
    return "dark";
  }
  return "light";
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [isInitialized, setIsInitialized] = useState(false);

  useLayoutEffect(() => {
    const initialTheme = readStoredTheme();
    setTheme(initialTheme);
    applyThemeClass(initialTheme);
    setIsInitialized(true);
  }, []);

  useLayoutEffect(() => {
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
