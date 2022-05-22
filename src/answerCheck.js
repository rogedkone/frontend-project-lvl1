const answerCheck = (num1, num2, mode) => {
  if (mode === '+') {
    return num1 + num2;
  }
  if (mode === '-') {
    return num1 - num2;
  }
  if (mode === '*') {
    return num1 * num2;
  }
  return undefined;
};

export default answerCheck;
