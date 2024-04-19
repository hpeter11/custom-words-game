import React, { createContext, useState } from 'react';

const themes = {
  light: {
    background: 'bg-white',
    text: 'text-black',
  },
  dark: {
    background: 'bg-black',
    text: 'text-white',
  }
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const value = { mode, toggleMode, themes };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
  