const express = require('express');
const mongoose = require('mongoose');
const appConfig = require('./config/appConfig');


const app = express();

const fs = require('fs');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

app.use(function (req, res, next) {
    console.log("CORS middleware");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header('Access-Control-Allow-Origin: *');
    res.header('Access-Control-Allow-Headers: X-Requested-With');
    res.header('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Accept, Origin, Authorization,visitid,visitorid,sessionid,paisabazaar-token");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader("Access-Control-Max-Age", "600");
    next();
});

/*
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    next();
});
*/
app.use(function(req, res, next ){console.log("changed this api  ...."); next();})
app.use(bodyParser.urlencoded({extended:false}))

app.use(function(req, res, next){console.log("api call ... 1 ... "); next(); })
app.use(bodyParser.json());
app.use(function(req, res, next){console.log("In Middleware ... 2 ..."); next();})
app.use(cookieParser());
app.use(function(req, res, next){console.log("In Middleware 3  ...."); next();})

console.log("Reading models");

let modelsPath = './models';
fs.readdirSync(modelsPath).forEach(function(file){
    console.log(file + "  : model file");
    if(~file.indexOf('.js')){
        require(modelsPath+'/'+file);
    }
})

let routesPath = './routes';
console.log("Reading routes");
fs.readdirSync(routesPath).forEach(function(file){
    if(~file.indexOf('.js')){
        console.log(file + "  : Route file");
        let route = require(routesPath +'/'+ file);
        route.setRouter(app);
    }
})

app.listen(appConfig.port, ()=>{
    console.log(appConfig.db.url);
    console.log("Listened .... ")
    let db = mongoose.connect(appConfig.db.url, {useNewUrlParser:true});
    console.log("after db connect");
	
	
})

mongoose.connection.on('error', function(err){
    console.log(err);
})

mongoose.connection.on('open', function(err){
    if(err){console.log(err)}
    else{
        console.log('connection success')
    }
})