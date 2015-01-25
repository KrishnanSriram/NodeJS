var fs = require('fs')
var path = require('path')

if (process.argv.length <= 2) {
	console.log('ERROR: File name is missing!')
	return;
}

var listCommand = process.argv[2];
var filterFilesType = null;

if(process.argv.length >= 4) {
	filterFilesType = '.' + process.argv[3];
}

fs.readdir(listCommand, function(err, filesList){
	if(err != null) {
		console.log('failed with error: ' + err);
		return;
	}

	if(filterFilesType != null) {
		filesList.forEach(function(file) {
			console.log('validate ' + file + ' for extension ' + filterFilesType);
			if(path.extname(file) == filterFilesType) {
				console.log(file);
			}
		});
	} else {
		console.log(filesList);
	}
});

/*fs.readdir(listCommand, function(err, filesList) {
	if(err != null) {
		console.log('Failed to get list of files in directory\n' + err);
	} else {
		if(filterFilesType == null) {
			console.log(filesList);
		} else {
			// var filteredFileList = filesList.filter(function(fileName) {
			// 	return (fileName.indexOf(filterFilesType) > -1);
			// });
			filesList.forEach(function (file) {
				if(path.extname(file) == filterFilesType) {
					console.log(file);
				}
			});
			
		}
	}
});*/