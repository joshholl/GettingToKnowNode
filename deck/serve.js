var http = require('http');
var server = http.createServer(function(req, res) {
		var file = __dirname + req.url;
		if(req.url === '/') {
		file = __dirname + '/index.html';
		}
		fileServer(file, req, res );

		});

var fileServer = function(file, req, res, callback) {
	var fs = require('fs')
		, ext = require('path').extname(file)
		, type = ''
		, fileExtensions = {
			'html':'text/html',
			'css':'text/css',
			'js':'text/javascript',
			'json':'application/json',
			'png':'image/png',
			'jpg':'image/jpg',
			'wav':'audio/wav'
		}
	console.log('req    '+req.url)
		for(var i in fileExtensions) {
			if(ext === i) {    
				type = fileExtensions[i]
					break
			}
		}
	fs.exists(file, function(exists) {
			if(exists) {
			res.writeHead(200, { 'Content-Type': type })
			fs.createReadStream(file).pipe(res)
			console.log('served  '+req.url)
			if(callback !== undefined) callback()
			} else {
			console.log(file,'file dne')
			}  
			})
}
server.listen(8888);
