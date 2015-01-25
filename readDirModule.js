var fs = require('fs');
var path = require('path');

module.exports = function (directory, filterStr, callback) {
		var matchingFiles = [];

		fs.readdir(directory, function(err, list) {
			if(err != null) {
				return callback(err, null);
			}

			// if(filter == null) {
			// 	return callback(null, filesList);
			// }
			list = list.filter(function (file) {
      			return path.extname(file) === "." + filterStr;
    		});

			callback(null, list);
		});
	}

// module.exports = {
// 	searchForFileInDirectory: function (directory, filter, callback) {
// 		var fs = require('fs');
// 		var path = require('path');
// 		var matchingFiles = [];

// 		fs.readdir(directory, function(err, filesList) {
// 			if(err != null) {
// 				callback(err, null);
// 			}

// 			if(filter == null) {
// 				callback(null, filesList);
// 			}

// 			filesList.forEach(function(file) {
// 				if(path.extname(file) == filter) {
// 					matchingFiles.push(file);
// 				}
// 			});
// 			callback(null, matchingFiles);
// 		});
// 	}
// }