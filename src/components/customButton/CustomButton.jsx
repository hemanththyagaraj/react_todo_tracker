import React from "react";
import "./CustomButton.css";

const CustomButton = (props) => {
  const { color, style, onClick, textColor } = props;
  return (
    <button
      className="custom__button"
      style={{
        backgroundColor: color ? color : "#ff5252",
        ...style,
        color: textColor ? textColor : "#f7f1e3",
        borderRadius: 5,
        padding: 10,
        border: "none",
        fontSize: 16,
      }}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
};

export default CustomButton;
