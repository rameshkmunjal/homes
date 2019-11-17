const express = require('express')
const app = express()

/*How to get URL parameters i.e. req.params
app.get('/helloworld/:id',function(req, res){
    console.log(req.params);    
    res.send('Hello World!')
    
})
*/
/*How to get query string - req.query
app.get('/helloworld',function(req, res){
    console.log(req.query);    
    res.send('Hello World!')
    
})
*/
app.listen(3000);



 
