const mysql = require('mysql');
const config = require('../../config/config.js');


const db = mysql.createConnection(config);

db.connect((error) => {
  if (error) { console.log(error); }
});

const getPhotos = (expId, callback) => {
  // eslint-disable-next-line no-unused-vars
  const experienceId = expId;
  const grabAll = 'SELECT * FROM photos WHERE experienceId = ?';
  db.query(grabAll, expId, (error, response) => {
    if (error) {
      console.log('ERROR: ', error);
      callback(error);
    } else {
      console.log(response);
      callback(null, response);
    }
  });
};

const postPhoto = (data, callback) => {
  const sql = 'INSERT INTO photos (photourl, alt, username, experienceid) VALUES (?, ?, ?, ?);';
  const values = [data.photoUrl, data.alt, data.username, data.experienceId];
  db.query(sql, values, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
};

const updatePhoto = (id, data, callback) => {
  const sql = 'UPDATE photos SET photourl = ?, alt = ?, username = ?, experienceid = ? WHERE photoid = ?;';
  const values = [data.photoUrl, data.alt, data.username, data.experienceId, id];
  db.query(sql, values, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
};

const deletePhoto = (id, callback) => {
  const sql = 'DELETE FROM photos WHERE photoid = ?;';
  db.query(sql, id, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
};

module.exports = {
  db, getPhotos, postPhoto, updatePhoto, deletePhoto,
};
