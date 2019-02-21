var fs = require('fs');
var input = process.argv[2];

fs.readFile(input, function (err, data) {
  if (err) {
    return console.log(err);
  }
  var newlines = data.toString().split('\n').length - 1;
  console.log(newlines);
});