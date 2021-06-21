var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
	  // var q = url.parse(req.url, true);
	  // fs.readFile(filename, function(err, data) {
		 //      if (err) {
			//             res.writeHead(404, {'Content-Type': 'text/html'});
			//             return res.end("404 Not Found");
			//           } 
		 //      res.writeHead(200, {'Content-Type': 'text/html'});
		 //      res.write('Here is the file you requested:\n\n');
		 //      // return res.write(data);
		 //    });

	  res.setHeader('Content-Type', 'text/plain');
	  res.setHeader('Access-Control-Allow-Origin', '*');
	  // res.setHeader('Access-Control-Allow-Origin', 'http://192.168.40.99:3000');
	  res.writeHead(200);
	  var move = Math.floor(Math.random() * 89);
	  res.write('{"move":' + move + '}');
	  return res.end();

}).listen(8080);
