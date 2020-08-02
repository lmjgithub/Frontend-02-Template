const http = require('http');
function startServer() {
  http
    .createServer((req, res) => {
      let body = [];
      req
        .on('error', (err) => {
          console.error(err);
        })
        .on('data', (chunk) => {
          body.push(chunk.toString());
        })
        .on('end', () => {
          console.log('end');
          body = Buffer.concat(body).toString();
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end('Hello World!');
        });
    })
    .listen(8088);

  console.log('server start');
}

startServer();
