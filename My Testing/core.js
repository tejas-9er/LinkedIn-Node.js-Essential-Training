const path = require("path");
const util = require("util");
const v8 = require("v8");

// with utilit module we also get the date when we do util.log
util.log(v8.getHeapCodeStatistics());