import { createContext, useState } from "react";

export const themeContext = createContext({
  currentFontTheme: "light",
  setCurrentTheme: () => null,
  currentBackgroundTheme: "black",
  setCurrentBackgroundTheme: () => null,
});

export const ThemeProvider = ({ children }) => {
  const [currentFontTheme, setCurrentTheme] = useState("light");
  const [currentBackgroundTheme, setCurrentBackgroundTheme] = useState("black");
  const value = {
    currentFontTheme,
    setCurrentTheme,
    currentBackgroundTheme,
    setCurrentBackgroundTheme,
  };
  return (
    <themeContext.Provider value={value}>{children}</themeContext.Provider>
  );
};

// {
//   light: {
//     backgroundColor: "white",
//     color: "black",
//   },
//   dark: {
//     backgroundColor: "black",m
//     color: "white",
//   },
// };
