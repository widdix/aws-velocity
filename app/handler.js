'use strict';

var factorial = require('./lib/factorial.js');

exports.factorial = function(event, context, cb) {
  var n = parseInt(event.pathParameters.n, 10);
  if (n < 0 || n > 14) {
    cb(null, {
      statusCode: 400
    });
  } else {
    cb(null, {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/plain'
      },
      body: factorial(n).toString()
    });
  }
};
