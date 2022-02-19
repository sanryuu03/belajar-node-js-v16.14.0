let http = require('http');
let route = require('./route.js');

http.createServer(route.handleRequest).listen(3000);

console.log("server running on http://localhost:3000");