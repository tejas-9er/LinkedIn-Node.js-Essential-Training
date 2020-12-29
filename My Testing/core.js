const path = require("path");

// core modules come with node.js and we don't have to install them using npm

// creating a path to uploads folder
const dirUploads = path.join(__dirname, "www", "files", "uploads");

console.log(dirUploads);