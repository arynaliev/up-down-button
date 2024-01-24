import React from "react";
import "./customInput.style.css";

function CustomInput({ onChangeHandler, type, value }) {
  return (
    <input
      className="custom-input"
      type={type}
      value={value}
      onChange={onChangeHandler}
    />
  );
}

export default CustomInput;
