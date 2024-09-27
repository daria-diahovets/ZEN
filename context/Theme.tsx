"use client";
import { createContext, useEffect, useState } from "react";

const context = {
  theme: "",
  toggleTheme: () => {},
};

export const ThemeContext = createContext(context);

const getTheme = () => {
  if (typeof window !== "undefined") {
    const theme = window.localStorage.getItem("theme");
    if (!theme) {
      // Default theme is taken as dark-theme
      localStorage.setItem("theme", "dark-theme");
      return "dark-theme";
    } else {
      return theme;
    }
  } else {
    return "dark-theme"
  }
};

const ThemeProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [theme, setTheme] = useState(getTheme);

  function toggleTheme() {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  }

  useEffect(() => {
    const refreshTheme = () => {
      localStorage.setItem("theme", theme);
    };

    refreshTheme();
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
