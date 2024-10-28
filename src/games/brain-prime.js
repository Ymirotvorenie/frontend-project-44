import getRandNum from '../util.js';
import run from '../engine.js';

const MIN_NUM = 0;
const MAX_NUM = 999;
const TASK = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const getRoundResult = () => {
  const number = getRandNum(MIN_NUM, MAX_NUM);
  const answer = isPrime(number) ? 'yes' : 'no';

  return [number.toString(), answer];
};

export default () => {
  run({ task: TASK, runGame: getRoundResult });
};
