'use strict';

function factorial(n) {
  if (n < 0) {
    throw new Error('not defined for negative numbers');
  }
  if (n > 14) {
    throw new Error('not implemented for large numbers');
  }
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

module.exports = factorial;
