const path = require("path");
const util = require("util");

// with utilit module we also get the date when we do util.log
util.log(path.basename(__filename));

util.log(" ^ The name of the current file");