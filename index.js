const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 8080;

http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname;

  switch (pathname) {
    case '/':
      fs.readFile('index.html', (err, data) => {
        if (err) {
          console.error(err);
          res.writeHead(404, {'Content-Type': 'text/html'});
          fs.readFile('404.html', (err, data) => {
            res.end(data);
          });
        } else {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end(data);
        }
      });
      break;
    case '/about':
      fs.readFile('about.html', (err, data) => {
        if (err) {
          console.error(err);
          res.writeHead(404, {'Content-Type': 'text/html'});
          fs.readFile('404.html', (err, data) => {
            res.end(data);
          });
        } else {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end(data);
        }
      });
      break;
    case '/contact-me':
      fs.readFile('contact-me.html', (err, data) => {
        if (err) {
          console.error(err);
          res.writeHead(404, {'Content-Type': 'text/html'});
          fs.readFile('404.html', (err, data) => {
            res.end(data);
          });
        } else {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end(data);
        }
      });
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/html'});
      fs.readFile('404.html', (err, data) => {
        res.end(data);
      });
  }
}).listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

