import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext({
  darkMode: false,
  colorblindMode: false,
  dyslexiaMode: false,
  toggleDarkMode: () => {},
  toggleColorblindMode: () => {},
  toggleDyslexiaMode: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [colorblindMode, setColorblindMode] = useState(false);
  const [dyslexiaMode, setDyslexiaMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    // Remove all mode classes first
    body.classList.remove("dark-mode", "colorblind-mode", "dyslexia-mode");
    if (darkMode) body.classList.add("dark-mode");
    if (colorblindMode) body.classList.add("colorblind-mode");
    if (dyslexiaMode) body.classList.add("dyslexia-mode");
  }, [darkMode, colorblindMode, dyslexiaMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  const toggleColorblindMode = () => setColorblindMode((prev) => !prev);
  const toggleDyslexiaMode = () => setDyslexiaMode((prev) => !prev);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        colorblindMode,
        dyslexiaMode,
        toggleDarkMode,
        toggleColorblindMode,
        toggleDyslexiaMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
