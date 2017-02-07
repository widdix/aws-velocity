'use strict';

var frisby = require('frisby');

if (process.env.ENDPOINT === undefined) {
  throw new Error('ENDPOINT environment variable missing');
}

frisby.create('/-1')
  .get(process.env.ENDPOINT + '/-1')
  .expectStatus(400)
.toss();

frisby.create('/0')
  .get(process.env.ENDPOINT + '/0')
  .expectStatus(200)
  .expectBodyContains('1')
.toss();

frisby.create('/14')
  .get(process.env.ENDPOINT + '/14')
  .expectStatus(200)
  .expectBodyContains('87178291200')
.toss();

frisby.create('/15')
  .get(process.env.ENDPOINT + '/15')
  .expectStatus(400)
.toss();
