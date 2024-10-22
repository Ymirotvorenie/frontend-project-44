import { getRandNum, calculate } from '../src/util.js';
import run from '../src/engine.js';

const OPERATORS = ['-', '+', '*'];
const TASK = 'What is the result of the expression?';
const MAX_NUM = 100;
const MIN_NUM = 0;

const getRoundResult = () => {
  const num1 = getRandNum(MIN_NUM, MAX_NUM);
  const num2 = getRandNum(MIN_NUM, MAX_NUM);
  const operator = OPERATORS[getRandNum(MIN_NUM, OPERATORS.length - 1)];

  const question = `${num1} ${operator} ${num2}`;
  const answer = calculate(operator, num1, num2);

  return [question, answer.toString()];
};

export default () => {
  run({ task: TASK, gameFunc: getRoundResult });
};
