var http = require('http')

// var options = {
//   hostname: 'http://www.google.com',
//   port: 80,
//   method: 'GET'
// };

http.get('http://www.google.com', function(response) {
	var data = "";
	// response.setEncoding("utf8");
	response.on('data', function(datachunk) {
		data += datachunk;
	});

	response.on('end', function() {
		console.log(data);
	});

	response.on('error', function(err) {
		console.error('ERROR: Failed to fetch data from remote location due to ' + err);
	});
});