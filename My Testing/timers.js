// working with node.js asnchronously using timing functions
// like setTimeout, clearTimeout, setInterval, and clearInterval

// we will now communicate with waiting time in % to show progress

// creating 5sec delay using setTimeout

const waitTime = 5000;
const waitInterval = 500;
// let lets you change the value of the variables unlike const
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime/waitTime) * 100);
    // clear the last line written in the terminal
    process.stdout.clearLine();
    // move the cursor to the start position
    process.stdout.cursorTo(0);
    // write the message
    process.stdout.write(`waiting ... ${p}%`);
}

console.log(`Setting a ${waitTime / 1000} seconds`);

// invoking a function after the timer is finished
// int the following code, we are clearing the intercal as well.
const timerFinished = () => {
    // clear the last line written in the terminal
    process.stdout.clearLine();
    // move the cursor to the start position
    process.stdout.cursorTo(0);
    // clear the interval
    clearInterval(interval);
    console.log("Done");
    // the apploication exits because the interval is cleared and no longer ticking
}

// Call the increment time function ever half second
const interval = setInterval(incTime, waitInterval)

// invoking setTimeout, first argument is the function to be invoked
// second argument is the waitTime
setTimeout(timerFinished, waitTime);