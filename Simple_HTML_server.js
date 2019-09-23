/*  Simple example showing how to serve up multiple html pages.

    You may test it by running as:
        
        $ node [Name of this file].js

    and entering the following into your web browser:

        http://localhost:8080

*/

var http    = require('http');
var url     = require('url');
var fs      = require('fs');

http.createServer(function(req,res){
    
    var q           = url.parse(req.url, true);
    var filename    = "." q.pathname;
    
    fs.readFile(filename, function(err, data){
        
        if(err){

            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        
        res.writeHead(200, {'Contentdata' : 'text/html'});
        res.write(data);
        return res.end();

    });

}).listen(8080);
