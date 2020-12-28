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

// wireup a listener using standard input
// first argument is the data event that we are listening for
// i.e. we are reading input from keyboard
// the second argument is the handler or the function that we will use to handle that event
process.stdin.on('data', data => {
    //echoing data backk to the user
    // the data is passed to the function as a buffer or a binary
    // hence it needs to be converted to string
    process.stdout.write(`\n\n ${data.toString().trim()}\n\n`);
    // exit using the following command and avoid infinite loop.
    process.exit();
});

// The above code ends in ainfinite loop.
// It asks the first question and then keeps on taking input and printing it.