const express = require('express')
const path = require('path')
const app = express()
app.use('/public', express.static(path.join(__dirname, 'public')))
console.log(path.join(__dirname, 'public'));

app.get('/', (req, res) => {
  res.send('hello world');
})

app.listen(8080, () => {
  console.log("成功");
})