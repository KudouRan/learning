const saveFile = require('./utils/saveFile');
const getImage = require('./utils/getImage');

console.log('启动成功!');

getImage()
  .then((imgs) => {
    return saveFile(imgs);
  })
  .then((message) => {
    console.log(message);
  })