import readlineSync from 'readline-sync';

const greeting = () => {
    let name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`)
}

export { greeting }