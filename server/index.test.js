const supertest = require('supertest');
const app = require('./app.js');
const db = require('../database/index.jsx');

const request = supertest(app);


test('GET /test returns "pass"!', async (done) => {
  db.test = jest.fn();

  const response = await request.get('/test');

  expect(response.status).toBe(200);
  expect(response.body.message).toBe('pass!');
  done();
});


describe('requests return responses', () => {
  test('GET /:id returns 200', async (done) => {
    const response = await request.get('/42');
    expect(response.status).toBe(200);
    done();
  });
});

describe('requests call db methods', () => {
  test('GET /photos/42 calls db.getPhotos with 42 as first argument', async (done) => {
    db.getPhotos = jest.fn((expId, callback) => callback(null, {}));

    await request.get('/photos/42');

    expect(db.getPhotos).toHaveBeenCalledWith(42, expect.any(Function));
    done();
  });

  test('POST /photos calls db.postPhoto with arguments from json', async (done) => {
    db.postPhoto = jest.fn((data, callback) => {
      console.log(data);
      callback();
    });

    await request.post('/photos').send({ foo: 'bar' });

    expect(db.postPhoto).toHaveBeenCalledWith({ foo: 'bar' }, expect.any(Function));
    done();
  });
});
