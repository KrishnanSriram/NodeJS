var http = require('http');
var fs = require('fs');

var port = process.env.port || 1337;
http.createServer(function (req, res) {
    // res.end('Hello World\n');
    handleIncomingRequests(req, res);
}).listen(port);


function handleIncomingRequests(req, res) {
    if (req.method.toLowerCase() == "get")
    {
  		// extract file request from URL
        var fileName = req.url.substring(req.url.lastIndexOf('/') + 1, req.url.length);
        
    //if (fileName == "favicon.ico") {
    //    return;
    //}
        console.log("Looking for file: " + fileName);
  		serve_static_file(fileName, res);
    } else {
    	res.writeHead(404, {
    		"Content-Type": "application/json"});
    	res.end(JSON.stringfy(errorJSON()) + "\n");
    }
}

function serve_static_file(file, res) {
	var rs = fs.createReadStream(file);
	var ct = content_type_for_path(file);

	res.writeHead(200, { 'Content-Type': ct });
	rs.on('readable', function() {
		var d = rs.read();
		res.write(d);
    });
    
    rs.on('error', function (err) {
        res.write(JSON.stringify(err) + "\n\n");
        res.end("Failed with ERROR!!!");
    });

	rs.on('end', function() {
		res.end();
	});
}

function content_type_for_path(file) {
	return "application/text";
}

function errorJSON() {
	return {"error":"Resource not found",
	"message": "Requested URL is not available"};
}