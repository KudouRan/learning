const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('./cors');

app.use(bodyParser.json());
app.use(bodyParser.text());

app.use((req, _res, next) => {
  console.log(req.method, req.url, '\n');
  next();
});

app.use(cors());

app.get('/', (_req, res) => {
  res.send('hello world(其实我是成功的啦)');
});

app.get('/success', (_req, res) => {
  res.send('hello GET success');
});

app.post('/', (req, res) => {
  res.send(req.body);
});

app.post('/post-json', (req, res) => {
  res.send(req.body);
});

app.listen(3001, () => {
  console.log('服务器启动成功');
});
