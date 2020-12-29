const readline = require('readline');

// creating an interface to work with readline
// withing th einterface we need to supply an object which will tell which string to use for input and which for output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// question function is available to us on our interface
// the first argument is the question and the second argument is the callback function
// for once the question has been answered
rl.question("How do you like node?\n", answer =>{
    console.log(`Your answer: ${answer}`);
});