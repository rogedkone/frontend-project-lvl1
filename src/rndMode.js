const rndMode = () => {
  let mode = '';
  const number = Math.floor(Math.random() * 101);
  if (number < 35) {
    mode = '+';
  } else if (number < 70) {
    mode = '-';
  } else {
    mode = '*';
  }
  return mode;
};

export default rndMode;
