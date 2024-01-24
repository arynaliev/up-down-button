import React, { useState } from "react";
import "./simpleCalculator.style.css";
import CustomInput from "../../../components/customInput/CustomInput";
import { calcTotal } from "../../../utils/helperFunctions";

const SimpleCalculator = () => {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [total, setTotal] = useState(0);
  const [currentSymbol, setCurrentSymbol] = useState("+");

  //   const calcTotal = (num1, num2, symbol) => {
  //     let total = 0;
  //     switch (symbol) {
  //       case "+":
  //         total = num1 + num2;
  //         break;
  //       case "-":
  //         total = num1 - num2;
  //         break;
  //       case "*":
  //         total = num1 * num2;
  //         break;
  //       case "/":
  //         total = num1 / num2;
  //         break;
  //         default:
  //          break;
  //     }
  //   };

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
      {/* <h1></h1> */}
      <select onChange={onSymbolChange}>
        <option value="+">Plus</option>
        <option value="-">Minus</option>
        <option value="*">Multiply</option>
        <option value="/">Divide</option>
      </select>
      <CustomInput
        type={"number"}
        value={num2}
        onChangeHandler={onNum2Change}
      />
      <h1>=</h1>
      <h1>{total}</h1>
    </div>
  );
};

export default SimpleCalculator;
