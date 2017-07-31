var express = require('express');
var app = express();
var routes = require('./routes');

app.use("", routes);
app.use(express.static(__dirname + '/public'));

var server = app.listen(4000, function () {
  var port = server.address().port;
  console.log('App\'s server listening at http://localhost:%s', port);
});

// http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-type": "text/plain"});
//   response.write(collection.lyrics[Math.floor(Math.random() * collection.lyrics.length)]);
//   response.end();
// }).listen(8888);
