import React, { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContextValue';
export { ThemeContext };

// This file exports the ThemeProvider component. The actual ThemeContext
// (created with createContext) lives in ThemeContextValue.jsx to satisfy
// the Fast Refresh requirement that non-component exports be placed in a
// separate module.

// Create the provider component
export const ThemeProvider = ({ children }) => {
  // State to hold the current theme, defaulting to 'light' or user's preference
  const [theme, setTheme] = useState(
    typeof localStorage !== 'undefined' ? localStorage.getItem('theme') || 'light' : 'light'
  );

  useEffect(() => {
    // Apply the theme class to the body
    document.body.className = '';
    document.body.classList.add(theme);
    // Save theme preference to local storage
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // localStorage may be unavailable in some environments; fail silently
    }
  }, [theme]);

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};