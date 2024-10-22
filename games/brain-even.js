import { getRandNum, isEven } from '../src/util.js';
import run from '../src/engine.js';

const TASK = 'Answer "yes" if the number is even, otherwise answer "no"';
const MAX_NUM = 999;
const MIN_NUM = 0;

const getRoundResult = () => {
  const number = getRandNum(MIN_NUM, MAX_NUM);
  const question = `${number}`;
  const answer = isEven(number) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  run({ task: TASK, gameFunc: getRoundResult });
};
