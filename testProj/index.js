var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send("Udacity Final project by Amarinder");
});

app.get('/about', function(req, res){
	res.send('Udacity Final Jenkins Build @BuildNumber@ ,  Git repo version @GIT_COMMIT@');
});

app.listen(3000);
