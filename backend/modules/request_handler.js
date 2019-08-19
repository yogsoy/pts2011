const fs = require("fs");

module.exports = {
    handle:function(req, res, logger) {
        res.writeHead(200, {
            "Access-Control-Allow-Origin":"*",
            "pts-server":"right_here"
        });
        // Read the temp example data
        fs.readFile('./data.json', function(err, data) {
            if (err) {
                throw err;
            }
            res.end(data.toString());
        });
    }
}