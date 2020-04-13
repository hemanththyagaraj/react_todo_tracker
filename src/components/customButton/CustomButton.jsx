import React from "react";
import './CustomButton.css'

const CustomButton = (props) => {
  const { color, style } = props;
  return (
    <button
      className="custom__button"
      style={{
        backgroundColor: color ? color : "#ff5252",
        ...style,
        color: "#f7f1e3",
        borderRadius: 5,
        padding: 10,
        border: "none",
        fontSize: 16,
      }}
    >
      {props.children}
    </button>
  );
};

export default CustomButton;
