#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';
import rndMode from '../src/rndMode.js';
import answerCheck from '../src/answerCheck.js';

console.log('Welcome to the Brain Games!');
const name = greeting();

let count = 0;
while (count !== 3) {
  const mode = rndMode();
  const num1 = Math.floor(Math.random() * 101);
  const num2 = Math.floor(Math.random() * 101);

  console.log('What is the result of the expression?');
  console.log(`Question: ${num1} ${mode} ${num2}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = answerCheck(num1, num2, mode).toString();
  if (answer === correctAnswer) {
    console.log('Correct!');
    count += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;C. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}
