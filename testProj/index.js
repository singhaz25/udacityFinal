var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send("Hello world! version 1");
});

app.listen(3000);
