'use strict';

var factorial = require('../lib/factorial.js');
var assert = require('assert');

describe('factorial', function() {
  it('should fail for < 0', function() {
    assert.throws(function() {
      factorial(-1);
    });
  });
  it('should return 1 for 0', function() {
    assert.equal(factorial(0), 1);
  });
  it('should return 1 for 1', function() {
    assert.equal(factorial(1), 1);
  });
  it('should return 2 for 2', function() {
    assert.equal(factorial(2), 2);
  });
  it('should return 6 for 3', function() {
    assert.equal(factorial(3), 6);
  });
  it('should return 24 for 4', function() {
    assert.equal(factorial(4), 24);
  });
  it('should return 120 for 5', function() {
    assert.equal(factorial(5), 120);
  });
  it('should return 87178291200 for 14', function() {
    assert.equal(factorial(14), 87178291200);
  });
  it('should fail for > 14', function() {
    assert.throws(function(){
      factorial(15);
    });
  });
});