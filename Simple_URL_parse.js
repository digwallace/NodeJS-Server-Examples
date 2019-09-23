/*  A simple server example that illustrates how you can parse and display 
    variables.

    You may test it by running as:
        
        $ node [Name of this file].js

    and entering the following into a web browser:
        
        http://localhost:8080/?year=2019&month=September

*/
var https = require('http');

var url = require('url');
https.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);

}).listen(8080);
