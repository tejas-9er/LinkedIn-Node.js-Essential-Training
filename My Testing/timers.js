// working with node.js asnchronously using timing functions
// like setTimeout, clearTimeout, setInterval, and clearInterval

// creating 3sec delay using setTimeout

const waitTime = 3000;
console.log(`Setting a ${waitTime / 1000} seconds`);

// invoking a function after the timer is finished
// following is a one line arrow function
const timerFinished = () => console.log("done");

// invoking setTimeout, first argument is the function to be invoked
// second argument is the waitTime
setTimeout(timerFinished, waitTime);