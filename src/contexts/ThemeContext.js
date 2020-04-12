import React, { createContext, useReducer } from "react";
import themeReducer from "../reducers/ThemeReducer";
export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [theme, dispatch] = useReducer(themeReducer, {
    isLight: false,
    light: { text: "#2d3436", ui: "#f1f2f6", bg: "#dfe4ea" },
    dark: { text: "#f1f2f6", ui: "#2d3436", bg: "#3f4749" },
  });

  return (
    <ThemeContext.Provider value={{ ...theme, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
