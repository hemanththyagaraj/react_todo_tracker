import React, { useContext } from "react";
import "./base.css";
import { ThemeContext } from "../../contexts/ThemeContext";

const BASE = (props) => {
  const { isLight, light, dark } = useContext(ThemeContext);
  const theme = isLight ? light : dark;
  return (
    <div className="todo__base" style={{ backgroundColor: theme.ui }}>
      {props.children}
    </div>
  );
};

export default BASE;
