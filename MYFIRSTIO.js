var fs = require('fs');

var input = fs.readFileSync(process.argv[2]);
var newlines = input.toString().split('\n').length - 1;
console.log(newlines);