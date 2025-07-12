import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const defaultState = {
  dark: true,
  toggleDark: () => {},
};

export const ThemeContext = createContext(defaultState);

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const storedDark = JSON.parse(localStorage.getItem("dark"));
    if (storedDark !== null) {
      setDark(storedDark);
    } else {
      const supportsDarkMode =
        window.matchMedia("(prefers-color-scheme: dark)").matches === true;
      setDark(supportsDarkMode);
    }
  }, []);

  const toggleDark = () => {
    const newDark = !dark;
    localStorage.setItem("dark", JSON.stringify(newDark));
    setDark(newDark);
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ThemeProvider;

