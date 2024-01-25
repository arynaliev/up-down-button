import React from "react";
import "./customButton.style.css";

const CustomButton = ({
  digits,
  acClass,
  percentage,
  zeroId,
  symbols,
  onClickHandler,
  text,
}) => {
  return (
    <button
      id={zeroId}
      className={`custom-button ${symbols} ${acClass} ${digits} ${percentage}`}
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};

export default CustomButton;
