#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = greeting();

console.log('Answer "yes" if the number is even, otherwise answer "no".');
let count = 0;
while (count !== 3) {
  const number = Math.floor(Math.random() * 101);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  if (answer !== 'yes' && answer !== 'no') {
    console.log(`'${answer}' is wrong answer ;C. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${name}`);
    break;
  }
  if (answer === correctAnswer) {
    console.log('Correct!');
    count += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;C. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${name}`);
    break;
  }
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}
