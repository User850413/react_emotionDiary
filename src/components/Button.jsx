import React from "react";
import "./Button.css";

const Button = ({ text, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={type ? `Button Button_${type}` : `Button`}
    >
      {text}
    </button>
  );
};

export default Button;
