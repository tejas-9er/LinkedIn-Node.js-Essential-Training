const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`);

//node globalProcess --user Tejas --greeting "Hidely Hoe"
//In the above command we are providing flags to let us know what variables we are passing