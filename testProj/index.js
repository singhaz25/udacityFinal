var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send("Udacity Final project by Amarinder v1");
});

app.get('/about', function(req, res){
	res.send('UdacityFinal  Jenkins Build @BuildNumber@ ,  Git repo version @GIT_COMMIT@');
});

app.listen(3000);
