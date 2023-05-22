var express = require('express');
var app = express();
console.log("start")
app.get('/', function (req, res) {
    res.send('{ "response": "Hello From Thetips4you" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works!" }');
});
console.log("mid")

app.listen(3010);
console.log("end")

module.exports = app;
