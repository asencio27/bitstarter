var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
    var fs = require('fs');
    var buffer = new Buffer();
    response.send(buffer.toStrint('uft8', fs.readFileSync('index.html'));

//	var buffer = new Buffer(16);
//	buffer.write(data);
//	buffer.toString('utf8');

    
//    var buffer = new Buffer(16);
//    buffer.write(readFile);
//    buffer.toString('utf-8');

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
