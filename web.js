var express = require('express');

var app = express.createServer(express.app());

logger.get('/', function(request, response) {
  //response.send('Hello World 2!');
    var fs = require('fs');
    var buffer = new Buffer(16);
    var message = fs.readFileSync(index.html);
    buffer.write(message);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
