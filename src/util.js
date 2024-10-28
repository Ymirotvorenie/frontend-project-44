const getRandNum = (startNum, endNum) => {
  const multiplier = endNum - startNum + 1;
  return startNum + Math.floor((Math.random() * multiplier));
};

export default getRandNum;
