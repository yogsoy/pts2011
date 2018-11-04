const http = require(`http`);

http.createServer(function(req,res) {
	console.log(req.method);
	console.log(req.headers);
	res.write(`hello there`);
	res.end();
}).listen(981);
