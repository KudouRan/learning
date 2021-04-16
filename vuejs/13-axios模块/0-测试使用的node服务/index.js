const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const apiPage = require('./router/api');
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))

// parse application/json
app.use(bodyParser.json());

app.use('/api', express.static(path.join(__dirname, 'apidoc')))

app.use('/api', apiPage);

app.listen(9469, () => {
  console.log('启动成功:9469');
})