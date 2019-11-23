var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/submit', function(req, res){
    
    res.send("Name: " + req.body.name + 
            "<br>Email: " + req.body.email +
            "<br>Comment: " + req.body.comment);
});

app.listen(8080);
console.log("app is listening to port 8080");