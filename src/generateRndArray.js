const generateRndArray = (min, max) => {
  const length = Math.random() * (max - min) + min;
  const step = Math.floor(Math.random() * 10);
  let start = Math.floor(Math.random() * 10);
  const arr = [];
  for (let i = 0; i <= length; i += 1) {
    arr.push((start + step).toString());
    start += step;
  }
  return arr;
};

export default generateRndArray;
