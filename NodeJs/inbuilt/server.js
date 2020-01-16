var http= require('http');

var server = http.createServer(function(req,res){
    res.write("<h1>Hi from NodeJs</h1>")
    res.end();
});

server.listen(6700);