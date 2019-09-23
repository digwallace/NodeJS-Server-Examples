/*  Simple example showing how to read the file system and display files
    such html files.

    You may test it by running as:
        
        $ node [Name of this file].js

    and entering the following into your web browser:

        http://localhost:8080

*/

var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    // Note that "some-html-file.html" should be included in the same
    // directory in order for this to run.
    fs.readFile('some-html-file.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);
