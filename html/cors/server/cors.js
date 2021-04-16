function cors() {
  return function (req, res, next) {
    //设置源
    const requestOrigin = req.header('Origin');
    if (!requestOrigin) return next();
    res.setHeader('Access-Control-Allow-Origin', requestOrigin);
    //处理非简单请求发出的options
    if (req.method === 'OPTIONS') {
      const requestHeaders = req.header('Access-Control-Request-Headers');
      const requestMethod = req.header('Access-Control-Request-Method');
      res.setHeader('Access-Control-Allow-Methods', requestMethod);
      res.setHeader('Access-Control-Allow-Headers', requestHeaders);
    }
    return next();
  };
}

module.exports = cors;
