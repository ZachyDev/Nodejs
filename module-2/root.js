const fs = require('fs');
const file = fs.readFileSync('./lib.js', {encoding: 'utf-8'}).toString();
console.log(file);
