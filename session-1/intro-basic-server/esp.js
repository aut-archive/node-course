var http = require("http");
var wifi = require("Wifi");

wifi.startAP("node");

var server = http.createServer(function (req, res) {
  res.writeHead(200);
  res.end("Hello World");
});

server.listen(80);
