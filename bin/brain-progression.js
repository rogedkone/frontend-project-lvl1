#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';
import generateRndArray from '../src/generateRndArray.js';

console.log('Welcome to the Brain Games!');
const name = greeting();

let count = 0;
console.log('What number is missing in the progression?.');
while (count !== 3) {
  const line = generateRndArray(5, 10);
  const position = Math.floor(Math.random() * line.length);
  const correctAnswer = line[position];
  line[position] = '..';
  console.log(`Question: ${line.join(' ')}`);
  const answer = readlineSync.question('Your answer: ');
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
