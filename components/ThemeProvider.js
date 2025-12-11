"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }) {
  // Initialize theme from localStorage or default to dark
  // The blocking script in layout.js already sets the dark class before React hydrates
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      return saved || "dark"; // Default to dark if no preference
    }
    return "dark"; // SSR default
  });

  useEffect(() => {
    // Ensure React state matches what the blocking script set
    // This runs once on mount to sync React state with the DOM
    const saved = localStorage.getItem("theme");
    const currentTheme = saved || "dark";
    
    // Ensure class is set correctly (should already be set by blocking script, but ensure consistency)
    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    // Update state if it doesn't match (shouldn't happen, but just in case)
    if (currentTheme !== theme) {
      setTheme(currentTheme);
    }
  }, []); // Run only once on mount

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      if (next === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      if (typeof window !== "undefined") localStorage.setItem("theme", next);
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
