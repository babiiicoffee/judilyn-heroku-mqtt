var app = require('express')()
var express = require('express')
var http = require('http').createServer(app)
var port = process.env.PORT || 3001

app.get('/', function(req,res){
    res.sendFile(__dirname+ '/index.html')
})

app.use(express.static('public'));
// app.use(express.static(__dirname+ 'public'));

http.listen(port, function(){
    console.log('Listening on port : ' + port)
})