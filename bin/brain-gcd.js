#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';
import answerCheckGcd from '../src/answerCheckGcd.js';

console.log('Welcome to the Brain Games!');
const name = greeting();

let count = 0;
while (count !== 3) {
  const num1 = Math.floor(Math.random() * 101);
  const num2 = Math.floor(Math.random() * 101);

  console.log('Find the greatest common divisor of given numbers.');
  console.log(`Question: ${num1} ${num2}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = answerCheckGcd(num1, num2).toString();
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
