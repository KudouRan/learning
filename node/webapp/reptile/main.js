const express = require('express');
const path = require('path')
const imgPage = require('./router/demo');
const app = express()

app.use('/demo', imgPage)

app.use('/public', express.static(path.join(__dirname, './public')))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
})

app.listen(8888, () => {
  console.log('启动成功');
})