var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({
  extended: false
})

//使用中间件方法1
// app.use(urlencodedParser);

// POST /login gets urlencoded bodies
app.post('/login', urlencodedParser, function (req, res) {
  res.send('welcome, ' + req.body.username)
})

// POST /api/users gets JSON bodies
//使用中间件方法2
app.post('/api/users', jsonParser, function (req, res) {
  res.send('welcome, ' + req.body.user)
})

app.listen(3000);