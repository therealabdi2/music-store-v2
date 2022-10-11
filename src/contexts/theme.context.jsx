import { createContext } from "react";

export const themes = {
  light: {
    backgroundColor: "white",
    color: "black",
  },
  dark: {
    backgroundColor: "black",
    color: "white",
  },
};

export const ThemeContext = createContext(themes.dark);
export default ThemeContext;
