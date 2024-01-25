import React, { useState } from "react";
import "./simpleCalculator.style.css";
import CustomInput from "../../components/customInput/CustomInput";
import { calcTotal } from "../../utils/helperFunctions";
import CustomButton from "../../components/customButton/CustomButton";
console.log(calcTotal);

const SimpleCalculator = () => {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [total, setTotal] = useState(0);
  const [currentSymbol, setCurrentSymbol] = useState("+");

  const onNum1Change = (e) => {
    setNum1(e.target.value);
    setTotal(
      calcTotal(parseInt(e.target.value), parseInt(num2), currentSymbol)
    );
  };

  const onNum2Change = (e) => {
    setNum2(e.target.value);
    setTotal(
      calcTotal(parseInt(num1), parseInt(e.target.value), currentSymbol)
    );
  };

  const onSymbolChange = (e) => {
    setCurrentSymbol(e.target.value);
    setTotal(calcTotal(parseInt(num1), parseInt(num2), e.target.value));
  };

  return (
    <div className="simple-calculator">
      <CustomInput
        type={"number"}
        value={num1}
        onChangeHandler={onNum1Change}
      />
      <div className="buttons-container">
        <CustomButton acClass="ac-btn" text={"AC"} />
        <CustomButton percentage="percentage" text={"%"} />
        <CustomButton symbols="symbol-btn" text={"/"} />
        <CustomButton digits="digits" text={"7"} />
        <CustomButton digits="digits" text={"8"} />
        <CustomButton digits="digits" text={"9"} />
        <CustomButton symbols="symbol-btn" text={"x"} />
        <CustomButton digits="digits" text={"4"} />
        <CustomButton digits="digits" text={"5"} />
        <CustomButton digits="digits" text={"6"} />
        <CustomButton symbols="symbol-btn" text={"-"} />
        <CustomButton digits="digits" text={"1"} />
        <CustomButton digits="digits" text={"2"} />
        <CustomButton digits="digits" text={"3"} />
        <CustomButton symbols="symbol-btn" text={"+"} />
        <CustomButton digits="digits" zeroId="zeroBtn" text={"0"} />
        <CustomButton digits="digits" text={"."} />
        <CustomButton symbols="symbol-btn" text={"="} />
      </div>
    </div>
  );
};

export default SimpleCalculator;
