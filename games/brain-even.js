import { getRandNum, isEven } from '../src/util.js';
import { action, ROUND_COUNT } from '../src/engine.js';

const TASK = 'Answer "yes" if the number is even, otherwise answer "no"';
const MAX_NUM = 999;
const MIN_NUM = 0;

const getRoundResult = () => {
  const number = getRandNum(MIN_NUM, MAX_NUM);
  const question = `${number}`;
  const answer = isEven(number) ? 'yes' : 'no';

  return [question, answer];
};

const startGame = () => {
  const gameData = [];

  for (let i = 0; i < ROUND_COUNT; i += 1) {
    gameData.push(getRoundResult());
  }

  action(TASK, gameData);
};

export default startGame;

// brain-even

// Welcome to the Brain Games!
// May I have your name? Sam
// Hello, Sam!
// Answer "yes" if the number is even, otherwise answer "no".
// Question: 15
// Your answer: no
// Correct!
// Question: 6
// Your answer: yes
// Correct!
// Question: 7
// Your answer: no
// Correct!
// Congratulations, Sam!

// 'yes' is wrong answer ;(. Correct answer was 'no'.
// Let's try again, Bill!
