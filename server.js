var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html');

http.createServer(function (request, response) {

    response.writeHead(200, { 'Content-Type': 'text-plain' });
	response.end(index);
}).listen(5000);
console.log('server start');
