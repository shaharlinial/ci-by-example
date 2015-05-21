'use strict';

var http = require('http');
var app = http.createServer(handler);

app.listen(8080);

function handler (req, res) {
  console.log('test this push request');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('It\'s alive!');
}
