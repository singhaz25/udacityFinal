var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send("Udacity Final project by Amarinder v2 ");
});

app.get('/about', function(req, res){
	res.send('UdacityFinal  Jenkins BUILD :: @BuildNumber@ ,  GIR REPO VERSION:: @GIT_COMMIT@              ');
});

app.listen(3000);
