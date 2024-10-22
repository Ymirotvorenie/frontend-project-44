import { getRandNum, getGCD } from '../src/util.js';
import run from '../src/engine.js';

const TASK = 'Find the greatest common divisor of given numbers.';
const MAX_NUM = 500;
const MIN_NUM = 0;

const getRoundResult = () => {
  const num1 = getRandNum(MIN_NUM, MAX_NUM);
  const num2 = getRandNum(MIN_NUM, MAX_NUM);

  const question = `${num1} ${num2}`;
  const answer = getGCD(num1, num2);

  return [question, answer.toString()];
};

export default () => {
  run({ task: TASK, gameFunc: getRoundResult });
};
