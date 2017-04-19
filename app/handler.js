'use strict';

var factorial = require('./lib/factorial.js');

exports.factorial = function(event, context, cb) {
  var n = parseInt(event.pathParameters.n, 10);
  if (n < 0 || n > 14) {
    cb(null, {
      statusCode: 400
    });
  } else {
    res.(factorial(n).toString());
    cb(null, {
      statusCode: 200,
      headers: {
        'Content-Type': 'plain/text'
      },
      body: factorial(n).toString()
    });
  }
};
