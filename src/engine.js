
import readlineSync from 'readline-sync';

const ROUND_COUNT = 3;
const QUESTION_INDEX = 0;
const ANSWER_INDEX = 1;

const action = (task, gameData) => {
    console.log('Welcome to the Brain Games!\n');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}\n`);

    console.log(`${task}\n`);

    for (const roundData of gameData) {
        console.log(roundData[QUESTION_INDEX]);
        const answer = readlineSync.question('Your answer: ');

        const result = roundData[ANSWER_INDEX] === answer;

        if (result) {
            console.log('Correct!');
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${roundData[ANSWER_INDEX]}')`);
            console.log(`Let's try again, ${userName}`);
            return;
        }
    }
    console.log(`Congratulations, ${userName}!`);
};

export { action, ROUND_COUNT };
