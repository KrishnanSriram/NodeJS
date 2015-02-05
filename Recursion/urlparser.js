var url = require('url');
var path = require('path');
exports.parseUrlForRequestURL = function (request) {
    var urlparts = url.parse(request.url, true);
    var query = urlparts.query;
    var basename = path.basename(request.url);
    
    if (basename == 'allFiles') {
        return "Show all files";
    }
}