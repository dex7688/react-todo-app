import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (darkMode === 'dark') {
      const bodyEl = document.querySelector('body');
      bodyEl.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    darkMode === 'light' ? setDarkMode('dark') : setDarkMode('light');
    const bodyEl = document.querySelector('body');
    bodyEl.classList.toggle('dark');
  };

  return <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</ThemeContext.Provider>;
};
