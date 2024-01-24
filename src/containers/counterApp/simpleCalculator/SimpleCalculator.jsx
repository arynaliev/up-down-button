import React, { useState } from "react";
import CustomInput from "../../../components/customInput/CustomInput";

const SimpleCalculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [total, setTotal] = useState();

  const onNum1Change = (e) => {
    setNum1(e.target.value);
    setTotal(parseInt(e.target.value) + parseInt(num2));
  };

  const onNum2Change = (e) => {
    setNum2(e.target.value);
    setTotal(parseInt(num1) + parseInt(e.target.value));
  };

  return (
    <div className="">
      <CustomInput
        type={"number"}
        value={num1}
        onChangeHandler={onNum1Change}
      />
      <h1>+</h1>
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
