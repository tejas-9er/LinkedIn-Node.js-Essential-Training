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


// create an array to store the answers
const answers = [];

// wireup a listener using standard input
// first argument is the data event that we are listening for
// i.e. we are reading input from keyboard
// the second argument is the handler or the function that we will use to handle that event
process.stdin.on('data', data => {
    //storing all the answers in the answers array
    answers.push(data.toString().trim());

    //check the length of the answers array
    if(answers.length < questions.length){
        // if condition is satisfied then we are asking the next question
        ask(answers.length);
    } else{
        process.exit();
    }
});

// The above code ends in ainfinite loop.
// It asks the first question and then keeps on taking input and printing it.