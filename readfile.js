// var fs = require('fs');
var readFileModule = require('./readfilemodule');

var fileName = process.argv[2];
if(fileName == null) {
	console.error('File name to be read cannot be (null)');
	return;
}

console.log('Attempting to read file: ' + fileName);
readFileModule(fileName, function(err, data) {
	if(err == null) {
		console.log('Reading contents of file....' + '\n');
		console.log(data);
	} else {
		console.error('FAILED to read contents of file');
		console.error(err);
	}
});
// fs.readFile(fileName, "utf8",function(err, data) {
// 	if(err == null) {
// 		console.log('Contents of file\n***********************\n');
// 		console.log(data);
// 	} else {
// 		console.error('failed to read file: ' + fileName + '\n');
// 		console.error(err);
// 		return;
// 	}
// });