const http = require(`http`);
const fs = require(`fs`);

http.createServer(function(req,res) {
	console.log(req.method);
	console.log(req.headers);
	res.writeHead(200,{
		"Hello":"there",
		"Access-Control-Allow-Origin":"*"
	});
	res.write(fs.readFileSync(`./data.json`));
	res.end();
}).listen(981);
