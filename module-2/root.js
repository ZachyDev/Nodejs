const fs = require('fs');
const path = require('path');

console.log(path.join('../users','register/'));

const file = fs.readFileSync('./lib.js',{encoding: 'utf-8'}).toString();
console.log(file)

// write to a file
fs.writeFileSync('./lib.js',"const userName = 'Zachy Dev'");