import { getRandNum, generateProgression } from '../src/util.js';
import run from '../src/engine.js';

const MIN_SIZE = 8;
const MAX_SIZE = 13;
const MIN_STEP = 2;
const MAX_STEP = 22;
const MIN_START = 0;
const MAX_START = 500;
const MIN_SKIP = 0;
const TASK = 'What number is missing in the progression?';

const getRoundResult = () => {
  const progressionSize = getRandNum(MIN_SIZE, MAX_SIZE);
  const progressionStep = getRandNum(MIN_STEP, MAX_STEP);
  const startPosition = getRandNum(MIN_START, MAX_START);
  const skipPosition = getRandNum(MIN_SKIP, progressionSize - 1);
  const progression = generateProgression(progressionSize, startPosition, progressionStep);

  let question = '';
  let answer = 0;
  for (let i = 0; i < progressionSize; i += 1) {
    if (i !== skipPosition) {
      question = `${question}${progression[i]} `;
    } else {
      answer = progression[i];
      question = `${question}.. `;
    }
  }
  return [question, answer.toString()];
};

export default () => {
  run({ task: TASK, gameFunc: getRoundResult });
};
