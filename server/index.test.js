const supertest = require('supertest');
const app = require('./app.js');
const db = require('../database/index.jsx');

const request = supertest(app);

test('/test returns "pass"!', async (done) => {
  const response = await request.get('/test');

  expect(response.status).toBe(200);
  expect(response.body.message).toBe('pass!');
  done();
});

test('/test calls db.test', async (done) => {
  const spy = jest.spyOn(db, 'test');

  await request.get('/test');

  expect(spy).toHaveBeenCalled();
  done();
});
