let http = require('http');
let route = require('./route.js');

http.createServer(route.handleRequest).listen(3000);