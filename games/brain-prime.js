import { getRandNum, isPrime } from '../src/util.js';
import run from '../src/engine.js';

const MIN_NUM = 0;
const MAX_NUM = 999;
const TASK = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRoundResult = () => {
  const number = getRandNum(MIN_NUM, MAX_NUM);
  const answer = isPrime(number) ? 'yes' : 'no';

  return [number.toString(), answer];
};

export default () => {
  run({ task: TASK, gameFunc: getRoundResult });
};
