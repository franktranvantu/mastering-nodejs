const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files);

fs.readdir('./', function(error, files) {
  if (error) {
    console.error(error);
  }
  console.log(files);
})