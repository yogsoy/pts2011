const http = require(`http`);

http.createServer(function(req,res) {
	console.log(req.method);
	console.log(req.headers);
	res.writeHead(200,{
		"Hello":"there",
		"Access-Control-Allow-Origin":"*"
	});
	res.write(`hello there`);
	res.end();
}).listen(981);
