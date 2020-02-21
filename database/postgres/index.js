const { Client } = require('pg');

const config = require('./config.js');

const client = new Client(config);
client.connect();

const getPhotos = (expId, callback) => {
  const query = 'SELECT * FROM photos WHERE experienceId = $1';
  client.query(query, [expId], (error, response) => {
    if (error) {
      console.log('ERROR: ', error);
      callback(error);
    } else {
      callback(null, response.rows);
    }
  });
};
const postPhoto = (data, callback) => {
  const sql = 'INSERT INTO photos (photourl, alt, username, experienceid) VALUES ($1, $2, $3, $4);';
  const values = [data.photoUrl, data.alt, data.username, data.experienceId];
  client.query(sql, values, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
};
const updatePhoto = (id, data, callback) => {
  const sql = 'UPDATE photos SET photourl = $1, alt = $2, username = $3, experienceid = $4 WHERE photoid = $5;';
  const values = [data.photoUrl, data.alt, data.username, data.experienceId, id];
  client.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      callback(err);
    } else {
      callback(null, result);
    }
  });
};
const deletePhoto = (id, callback) => {
  const sql = 'DELETE FROM photos WHERE photoid = $1;';
  client.query(sql, [id], (err, result) => {
    if (err) {
      console.error(err);
      callback(err);
    } else {
      callback(null, result);
    }
  });
};


module.exports = {
  getPhotos, postPhoto, updatePhoto, deletePhoto,
};
