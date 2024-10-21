import { getRandNum, getGCD } from '../src/util.js';
import { action, ROUND_COUNT } from '../src/engine.js';

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

const startGame = () => {
  const gameResult = [];

  for (let i = 0; i < ROUND_COUNT; i += 1) {
    gameResult.push(getRoundResult());
  }

  action(TASK, gameResult);
};

export default startGame;
