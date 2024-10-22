import readlineSync from 'readline-sync';

const ROUND_COUNT = 3;
const QUESTION_INDEX = 0;
const ANSWER_INDEX = 1;

const action = (task, gameData) => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}\n`);

  console.log(`${task}\n`);

  for (let i = 0; i < gameData.length; i += 1) {
    console.log(`Question: ${gameData[i][QUESTION_INDEX]}`);
    const answer = readlineSync.question('Your answer: ');

    const result = gameData[i][ANSWER_INDEX] === answer;

    if (result) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${gameData[i][ANSWER_INDEX]}')`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default (gameOptions) => {
  const { task, gameFunc, roundCount = ROUND_COUNT } = gameOptions;

  if (typeof gameFunc !== 'function') {
    throw new Error('Function not found');
  }
  const gameResult = [];

  for (let i = 0; i < roundCount; i += 1) {
    gameResult.push(gameFunc());
  }

  action(task, gameResult);
};
