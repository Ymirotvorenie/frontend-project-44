import getRandNum from '../util.js';
import run from '../engine.js';

const TASK = 'Answer "yes" if the number is even, otherwise answer "no"';
const MAX_NUM = 999;
const MIN_NUM = 0;

const isEven = (number) => number % 2 === 0;

const getRoundResult = () => {
  const number = getRandNum(MIN_NUM, MAX_NUM);
  const question = `${number}`;
  const answer = isEven(number) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  run({ task: TASK, runGame: getRoundResult });
};
