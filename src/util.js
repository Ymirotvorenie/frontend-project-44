const getRandNum = (startNum, endNum) => {
  const multiplier = endNum - startNum + 1;
  return startNum + Math.floor((Math.random() * multiplier));
};

const calculate = (operator, num1, num2) => {
  switch (operator) {
    case '-': return num1 - num2;
    case '+': return num1 + num2;
    case '*': return num1 * num2;
    default: return 'This operation not supported';
  }
};

const isEven = (number) => number % 2 === 0;

const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a % b));

const generateProgression = (size, start, step) => {
  const progression = [];
  for (let i = 0; i < size; i += 1) {
    progression[i] = (start + step * i);
  }
  return progression;
};

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export {
  getRandNum, calculate, isEven, getGCD, generateProgression, isPrime,
};
