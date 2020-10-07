const join = require('path').join;
const fs = require('fs');

const rootPath = 'U:/小姐姐/whyVue';

function getJsonFiles(jsonPath) {
  let jsonFiles = [];

  function findJsonFile(path) {
    let files = fs.readdirSync(path);
    files.forEach(function (item, index) {
      let fPath = join(path, item);
      let stat = fs.statSync(fPath);
      if (stat.isDirectory() === true) {
        findJsonFile(fPath);
      }
      if (stat.isFile() === true) {
        jsonFiles.push(fPath);
      }
    });
  }
  findJsonFile(jsonPath);
  return jsonFiles;
}

console.log(getJsonFiles(rootPath));