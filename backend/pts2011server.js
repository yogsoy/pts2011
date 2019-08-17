const http = require(`http`),
fs = require(`fs`),
emoji = require('./misc/emoji_list.json'),
internals = {
	types: {
		a:"INFO",
		b:"REQUEST",
		c:"WARN"
	}
};

let moduleList = [];

(async () => {
	try {
		fs.readdir("./modules", (err, files) => {
            for (var i = 0; i < files.length; i++) {
                moduleList[files[i].toString().replace(".js", "")] = require(`./modules/${files[i].toString()}`);
                console.log(`[Modules] Found module ${files[i].toString()}`)
			}
			http.createServer(function(req, res) {
				moduleList.request_handler.handle(req, res, moduleList.logger)
			}).listen(981, () => {
				moduleList.logger.log(internals.types.a, emoji.wave, `Listening at port ${981}`);
			});
        });
	} finally {
		// Why is try, catch so weird?
		console.log("Oh hai");
	}
})();
