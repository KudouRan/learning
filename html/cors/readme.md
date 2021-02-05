## cors

live-server 打开
npm run cors 或者 npm run cors-pr

## JSONP

live-server 打开
npm run jsonp

## webpack-dev-server

npm run webpack-dev-server --> 9000 端口
npm run jsonp

## http-proxy-middleware

这个就是上面的原理

npm run node --> 9000 端口
npm run jsonp

## postMessage

npm run static
4001 端口 -->postMessage a(或者 live-server 打开 5500 端口)
4002 端口 -->postMessage b

## document.domain

npm run static

4001 --> a.html
4002 --> b.html

## window.name

npm run static

4001 --> a.html
4002 --> b.html
4001 --> porxy.html

## location.hash

npm run static

4001 --> a.html
4002 --> b.html
4001 --> c.html
