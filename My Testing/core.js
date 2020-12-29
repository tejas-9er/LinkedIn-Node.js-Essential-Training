const path = require("path");
const {log} = require("util");
const {getHeapCodeStatistics} = require("v8");

// with utilit module we also get the date when we do util.log
log(getHeapCodeStatistics());