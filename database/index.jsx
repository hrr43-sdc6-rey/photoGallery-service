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

const test = () => { console.log('called test!'); };


module.exports = {
  db, getPhotos, test,
};
