import React from "react";

function Input(props) {
  const {
    className = "",
    type = "text",
    size = "medium",
    placeholder = "Enter the name",
    ...remainingprop
  } = props;
  return (
    <input
      className={`input__style ${className} ${size}`}
      type={type}
      placeholder={placeholder}
      {...remainingprop}></input>
  );
}

export default Input;
