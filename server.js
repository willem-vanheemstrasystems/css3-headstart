var express = require('express');
var app = express();

var oneDay = 0; // ORIGINAL: 86400000;

app.use(express.compress());

app.use(express.static(__dirname + '/', { maxAge: oneDay }));

app.listen(process.env.PORT || 3000);