var express = require('express');
var app = express();          // create the express app

app.get('/', function (req, res) {
    res.send('This is the default route.')
})

app.get('/about', function (req, res) {
    res.send('This is the about page.')
})

app.listen(3000, function() {
    console.log('Listening on port 3000, ctrl-c to quit');
});