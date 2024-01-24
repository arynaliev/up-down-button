import React, { useState } from "react";
import "./counterApp.style.css";
import CustomButton from "../../components/customButton/CustomButton";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  const minusHandler = () => {
    if (count > 0) setCount(count - 1);
  };

  const plusHandler = () => {
    if (count < 15) setCount(count + 1);
  };

  const addHandler = () => {
    setTotal(total + count);
    setCount(0);
  };

  const subtractionHandler = () => {
    if (count <= total) {
      setTotal(total - count);
      setCount(0);
    } else alert("hey go down");
  };

  const multiplyHandler = () => {
    setTotal(total * count);
    setCount(0);
  };

  return (
    <div>
      <div className="counter-box">
        <CustomButton text={"-"} onClickHandler={minusHandler} />
        <h1>{count}</h1>
        <CustomButton text={"+"} onClickHandler={plusHandler} />
      </div>
      <div>
        <CustomButton text={"Add"} onClickHandler={addHandler} />
        <h1>{total}</h1>
      </div>
      <div>
        <CustomButton
          text={"Subtraction"}
          onClickHandler={subtractionHandler}
        />
        {/* <h1>{total}</h1> */}
      </div>
      <div>
        <CustomButton text={"Multiply"} onClickHandler={multiplyHandler} />
        {/* <h1>{total}</h1> */}
      </div>
    </div>
  );
};

export default CounterApp;
