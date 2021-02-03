const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.text());

app.use((req, _res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get('/', (_req, res) => {
  res.send('hello world');
});

app.get('/success', (_req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send('hello GET success');
});

app.post('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(req.body);
});

app.post('/post-json', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(req.body);
});

//处理非简单请求
app.options('/post-json', (req, res) => {
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,HEAD,PUT,POST,DELETE,PATCH'
  );
  res.send();
});

app.listen(3001, () => {
  console.log('服务器启动成功');
});
