import React from "react";
import "./Button.css";

function Button(props) {
  // variant means which type
  const { variant = "primary", children, ...remainingprops } = props;
  return (
    <button className={`button ${variant}`} {...remainingprops}>
      {children}
    </button>
  );
}

export default Button;
