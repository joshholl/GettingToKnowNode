const http = require("http");

server = http.createServer((request, response) => { 
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end("Hello, Asynchronites!");
});

server.listen(8000);

setInterval(()=> {console.log('still listening...');}, 2000);
