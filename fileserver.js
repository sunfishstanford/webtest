var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
	  var q = url.parse(req.url, true);
	  var filename = "." + q.pathname;
	  // fs.readFile(filename, function(err, data) {
		 //      if (err) {
			//             res.writeHead(404, {'Content-Type': 'text/html'});
			//             return res.end("404 Not Found");
			//           } 
		 //      res.writeHead(200, {'Content-Type': 'text/html'});
		 //      res.write('Here is the file you requested:\n\n');
		 //      // return res.write(data);
		 //    });

	  res.writeHead(200, {'Content-Type': 'text/html'});
	  res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
	  res.write('<input type="file" name="filetoupload"><br>');
	  res.write('<input type="submit">');
	  res.write('</form>');
	  return res.end();

  	  // console.log(fsval);
}).listen(8080);
