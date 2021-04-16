const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
  res.send('<h1>/cats<h1>');
});

router.get('/miaomiao', function (req, res) {
  res.send('<h1>/cats/miaomiao<h1>');
});

module.exports = router;