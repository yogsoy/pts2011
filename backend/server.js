const http = require(`http`);

http.createServer(function(req,res) {
	console.log(req);
	res.write(`hello there`);
	res.end();
}).listen(981);
