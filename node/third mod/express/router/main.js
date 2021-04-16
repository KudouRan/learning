const express = require('express');
const cats = require('./cats');

const app = express();

app.use('/cats', cats);

app.listen(3000);