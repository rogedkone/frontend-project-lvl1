const answerCheck = (num1, num2) => {
  if (num2) {
    return answerCheck(num2, num1 % num2);
  }
  return Math.abs(num1);
};

export default answerCheck;
