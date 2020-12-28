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

// Handling the exit event
// handling the listener with a callback function passed as the second argument
process.on('exit', () => {

    //writng the answers back to you
    // The following array must be in the order of the questions asked
    // This is called array destructuring
    const [name, activity, lang] = answers;
    // We can print out output in the following manner
    // it is called the template string
    console.log(`

    Thank you for your answers.

    Go ${activity} ${name} you can write ${lang} code later

    `);
});