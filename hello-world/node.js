var http = require('http');
var Buffer = require('buffer').Buffer;

var n = 1024;
var b = new Buffer(n);
for (var i = 0; i < n; i++)
    b[i] = 100;

http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(b);
}).listen(8001);

