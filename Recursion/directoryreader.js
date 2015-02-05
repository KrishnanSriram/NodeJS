var fs = require('fs');

var constructJSONFromFilesList = function (files) {
    if (files.length > 0) {
        var jsonData = { errors: null, allFiles: files };
        return JSON.stringify(jsonData);
    } else {
        var jsonData = { errors: "Failed to fetch any files", allFiles: null };
        return JSON.stringify(jsonData);
    }
    
    return null;
}

var readFilesFromDirectory = function (directory, callback) {
    var all_files = [];
    var all_directories = [];

    fs.readdir(directory, function (error, files) {
        if (error != null) {
            callback(error, null);
            return;
        }
        
        (function iterator(index) {
            if (index == files.length) {
                var resultJSON = { errors: null, directoryResponse: { files: all_files, directories: all_directories } };
                callback(null, JSON.stringify(resultJSON));
                return;
            }
            fs.stat(directory + "\\" + files[index], function (error, stats) {
                if (stats.isFile()) {
                    all_files.push(files[index]);
                } else if (stats.isDirectory()) {
                    all_directories.push(files[index]);
                }
                iterator(index + 1);
            });
        })(0);
        
        
        //console.log("All files: " + all_files);
        //console.log("All directories: " + all_directories);
        //callback(null, constructJSONFromFilesList(files));
    });
}

module.exports = {
    readFilesFromDirectory: readFilesFromDirectory, 
    //constructJSONFromFilesList: constructJSONFromFilesList
};