var fs = require('fs');

var file = process.argv[2];

fs.readFile ( file, function (err, data) {
  if (err) {
    console.log(err)
  } else {
    var lines = data.toString().split('\n').length - 1;
    console.log(lines);
  }
});
