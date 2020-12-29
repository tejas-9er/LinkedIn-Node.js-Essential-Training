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
// int the following code, we are clearing the intercal as well.
const timerFinished = () => {
    clearInterval(interval);
    console.log("done");
    // the apploication exits because the interval is cleared and no longer ticking
}

// Call the increment time function ever half second
const interval = setInterval(incTime, waitInterval)

// invoking setTimeout, first argument is the function to be invoked
// second argument is the waitTime
setTimeout(timerFinished, waitTime);