var fs = require('fs')
fs.readFile('../custom-modules/calc.js', 'utf-8', function(err, data) {
    console.log(data)
});