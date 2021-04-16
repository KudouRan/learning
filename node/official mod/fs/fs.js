const fs = require('fs');
const fsPromise = fs.promises;

fs.stat('./fs1.js', (err, value) => {
  console.log(err);
  // console.log(value.isDirectory()); //布尔
})