var mymodule = require('./mymodule.js');
var dir = process.argv[2];
var extension = process.argv[3];

mymodule(dir, extension, function (err, list) {
  if (err) {
    return console.error('An error occurred:', err);
  }

  list.forEach(function (file) {
    console.log(file)
  });
});
