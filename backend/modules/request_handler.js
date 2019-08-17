const fs = require("fs");

module.exports = {
    handle:function(req, res, logger) {
        res.writeHead(200, {
            "Access-Control-Allow-Origin":"*",
            "pts-server":"right_here"
        });
        fs.readFile('./data.json', function(err, data) {
            if (err) {
                throw err;
            }
            res.end(data.toString());
        });
    }
}