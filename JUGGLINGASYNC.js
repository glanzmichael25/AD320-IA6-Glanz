var http = require('http');
var bl = require('bl');
var result = [];
var callCount = 0;

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err);
      }

      result[index] = data.toString();
      callCount++;

      if (callCount === 3) {
        logResult();
      }
    }));
  });
}

for (var i = 0; i < 3; i++) {
  httpGet(i);
}

function logResult() {
  for (var i = 0; i < 3; i++) {
    console.log(result[i])
  }
}