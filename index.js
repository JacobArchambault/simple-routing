var express = require('express');
var app = express();

app.get('/', function(req, res) {
    var name = req.query.name; //e.g. localhost:3000?name=larry
    if (name) {
        res.send('Hi, ' + name + ", nice to meet you.");
    }
    else {
        res.send('Welcome, guest!');
    }
});

app.get('/about', function(req, res) {
    res.send('This is the about page.');
});

app.post('/login', function(req, res) {
    res.send('This is the login page.');
});

app.use(function (req, res) {
    res.status(404).send("Sorry, no such page!")
});

app.listen(3000, function() {
    console.log('Listening on port 3000, ctrl-c to quit.');
});