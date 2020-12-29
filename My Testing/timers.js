// working with node.js asnchronously using timing functions
// like setTimeout, clearTimeout, setInterval, and clearInterval

// creating 3sec delay using setTimeout

const waitTime = 3000;
const waitInterval = 500;
// let lets you change the value of the variables unlike const
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;;
    console.log(`waiting ${currentTime/1000} seconds \n`);
}

console.log(`Setting a ${waitTime / 1000} seconds`);

// invoking a function after the timer is finished
// following is a one line arrow function
const timerFinished = () => console.log("done");

// Call the increment time function ever half second
setInterval(incTime, waitInterval)

// invoking setTimeout, first argument is the function to be invoked
// second argument is the waitTime
setTimeout(timerFinished, waitTime);

// above code leads to infinite loop for interval.
// To stop that we need to clear the interval