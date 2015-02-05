var http = require('http');
var directoryReader = require('./directoryreader.js');
var urlparser = require('./urlparser.js');
var myRouter = require('./simplerouter.js');

var port = process.env.port || 1337;
var basedirectory = "C:\\Users\\Krishnan\\Downloads";
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    directoryReader.readFilesFromDirectory(basedirectory, function (error, files) {
        if (error != null) {
            res.end(JSON.stringify(error));
        } else {
            //var jsonFileList = readDirectory.constructJSONFromFilesList(files);
            //console.log(jsonFileList);
            res.end(files);
        }
    });

}).listen(port);