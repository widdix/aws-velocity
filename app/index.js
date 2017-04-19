'use strict';

var factorial = require('./lib/factorial.js');
var express = require('express');
var app = express();

app.get('/:n', function (req, res) {
  var n = parseInt(req.params.n, 10);
  if (n < 0 || n > 14) {
    res.sendStatus(400);
  } else {
    res.send(factorial(n).toString());
  }
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('app listening on port ' + port);
});
