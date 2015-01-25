var fs = require('fs');

module.exports = function(filename, callback) {
	fs.readFile(filename, "utf8",function(err, data) {
		if(err == null) {
			return callback(null, data);
		} else {
			return callback(err, null);
		}
	});
}