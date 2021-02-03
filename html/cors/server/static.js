const express = require('express');
const path = require('path');
const appA = express();
const appB = express();

appA.use(express.static(path.resolve(__dirname, '../')));
appB.use(express.static(path.resolve(__dirname, '../')));

appA.listen(4001, () => {
  console.log('4001启动');
});
appB.listen(4002, () => {
  console.log('4002启动');
});
