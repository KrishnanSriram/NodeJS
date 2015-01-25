var fs = require('fs')

if (process.argv.length <= 2) {
	console.log('ERROR: File name is missin!')
	return;
}

/*fs.readFile(process.argv[2], function(err, data) {
	if(err != null) {
		console.log('Failed to open/read file: ' + err);
		return;
	}
	var fileContent = data.toString();
	//console.log('Contents of file\n\n' + fileContent);
	console.log(fileContent.split('\n').length-1);
});*/

var fileContents = fs.readFileSync(process.argv[2]).toString();
console.log(fileContents.split('\n').length - 1);