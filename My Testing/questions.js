// creating standard output objects to ask some questions

// create a questions array
const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language?"
];

// creating the function to ask the questions
const ask = (i = 0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `)
};

// calling the function
ask();

// The function exits after asking the first question and >
// This happens because ths node.js module is running synchonously
// i.e. we are declaring the arra, asking the question
// after that node.js thinks that there is nothing else to do and  exits
// To stop this we will use stdin or standard input to run asnchronously