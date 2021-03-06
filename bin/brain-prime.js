#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';
import isPrime from '../src/isPrime.js';

console.log('Welcome to the Brain Games!');
const name = greeting();

console.log('Answer "yes" if the number is prime, otherwise answer "no".');
let count = 0;
while (count !== 3) {
  const number = Math.floor(Math.random() * 101);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = isPrime(number);
  if (answer !== 'yes' && answer !== 'no') {
    console.log(`'${answer}' is wrong answer ;C. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`);
    break;
  }
  if (answer === correctAnswer) {
    console.log('Correct!');
    count += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;C. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`);
    break;
  }
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}
