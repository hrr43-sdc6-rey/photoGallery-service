const supertest = require('supertest');
const app = require('./app.js');
const db = require('../database/index.jsx');

const request = supertest(app);


test('GET /test returns "pass"!', async (done) => {
  const response = await request.get('/test');

  expect(response.status).toBe(200);
  expect(response.body.message).toBe('pass!');
  done();
});

test('GET /test calls db.test', async (done) => {
  const spy = jest.spyOn(db, 'test');

  await request.get('/test');

  expect(spy).toHaveBeenCalled();
  done();
});

test('GET /:id returns 200', async (done) => {
  const response = await request.get('/42');
  expect(response.status).toBe(200);
  done();
});

// test what happens when we omit the number?

test('GET /photos/42 calls db.getPhotos with 42 a first argument', async (done) => {
  db.getPhotos = jest.fn((expId, callback) => callback(null, {}));

  await request.get('/photos/42');

  expect(db.getPhotos).toHaveBeenCalledWith(42, expect.any(Function));
  done();
});

// test('POST /photos calls db.postPhoto', async (done) => {
//   const postMock = jest.fn();
//
//   done();
// });
