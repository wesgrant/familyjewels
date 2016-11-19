var express = require('express');
var app = express();
var fs = require('fs');
var morgan = require('morgan'); // HTTP logging
var React = require('react');
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});

app.use(morgan('combined', {stream: accessLogStream}));

app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})