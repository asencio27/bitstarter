var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
    var fs = require('fs');
    fs.readFileSync('index.html', function (data) { 
	var buffer = new Buffer(16);
	buffer.write(data);
	buffer.toString();
    });
    
//    var buffer = new Buffer(16);
//    buffer.write(readFile);
//    buffer.toString('utf-8');

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
