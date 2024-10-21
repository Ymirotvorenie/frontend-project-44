import { getRandNum, isPrime } from '../src/util.js';
import { action, ROUND_COUNT } from '../src/engine.js';

const MIN_NUM = 0;
const MAX_NUM = 999;
const TASK = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRoundResult = () => {
  const number = getRandNum(MIN_NUM, MAX_NUM);
  const answer = isPrime(number) ? 'yes' : 'no';

  return [number.toString(), answer];
};

const startGame = () => {
  const gameData = [];

  for (let i = 0; i < ROUND_COUNT; i += 1) {
    gameData.push(getRoundResult());
  }

  action(TASK, gameData);
};

export default startGame;
