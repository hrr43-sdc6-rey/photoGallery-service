const mysql = require('mysql');
const config = require('../config/config.js');


const db = mysql.createConnection(config);

db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    // console.log('==mySQL is connected==');
  }
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

module.exports = {
  db, getPhotos, postPhoto,
};
