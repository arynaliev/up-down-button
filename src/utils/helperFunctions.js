export const calcTotal = (num1, num2, symbol) => {
  let total = 0;
  switch (symbol) {
    case "+":
      total = num1 + num2;
      break;
    case "-":
      total = num1 - num2;
      break;
    case "*":
      total = num1 * num2;
      break;
    case "/":
      total = num1 / num2;
      break;
    default:
      break;
  }
};
