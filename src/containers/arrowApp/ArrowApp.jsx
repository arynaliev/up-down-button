import React, { useState } from "react";
import "./arrowApp.style.css";
import CustomButton from "../../components/customButton/CustomButton";

const ArrowApp = () => {
  const [isUp, setIsUp] = useState(true);

  const clickHandler = () => {
    setIsUp(!isUp);
  };

  //   const downHandler = () => {
  //     setIsUp(false);
  //   };

  return (
    <div>
      <div className="up-down-btns">
        <CustomButton
          text={isUp ? "down" : "up"}
          onClickHandler={clickHandler}
        />
        {/* <CustomButton text={"Down"} onClickHandler={downHandler} /> */}
      </div>
      <div>
        <p id="arrow">{isUp ? "⬆️" : "⬇️"}</p>
      </div>
    </div>
  );
};

export default ArrowApp;
