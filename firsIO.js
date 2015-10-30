var fs = require('fs');

var path = process.argv[2];

var string = fs.readFileSync(path).toString();

var lines = string.split('\n').length - 1

console.log(lines);
