var fs = require('fs')
fs.writeFile('copied-file.js', 'console.log("copying data")', function (err) {
    console.log('data copied')
})
fs.appendFile('copied-file.js', 'console.log("appending data")', function (err) {
    console.log('data appended')
})