const express = require('express');
const app= express();

const fs = require('fs');
var path = 'input.txt';

app.get('/', (req, res )=>{
    let readFile = fs.readFileSync(path, 'utf8');
    res.send(readFile);
    console.log(readFile);
});

app.listen(3000);

