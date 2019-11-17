//imports express.js
var express = require('express');

//creating an application instance to use express 
var app = express();

//get method has two parameters route and callback
//callback function has two parameters request(req) and response(res)
//req represents HTTP request and has properties like query, string,  parameters
//body , HTTP headers etc

//response object represents HTTP response that express app sends when
//it receives HTTP request
app.get('*', function(req , res){
	//send function takes an input and sends it to the requesting client
	res.send("Hello World! This is my first application");
});

//this function binds and listens for connections on the specified host and port
//port is the only required parametes here
app.listen(3000);
