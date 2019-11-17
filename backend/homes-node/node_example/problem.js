const fs = require('fs');
let path = require('path');

let filePath = path.join(__dirname, 'input.txt');

let readFile = () => {
 let variablereadfile = fs.readFileSync(filePath, 'utf8');  
 console.log(variablereadfile); 
};


readFile();

