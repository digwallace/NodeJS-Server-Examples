/* Simple server which displays the "url" portion of a client request.

    You may test it by running as:

        $ node [Name of this file].js

    and entering the following into a web browser on the same machine:

        http://localhost:8080/any-url-name

*/

var https = require('http');

https.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
}).listen(8080);
