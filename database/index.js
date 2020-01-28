var mysql = require('mysql');
var config = require('../config/config.js');
var db = mysql.createConnection(config);

db.connect(function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log('==mySQL is connected==');
  }
});


const getPhotos = (experienceID, callback) => {
  var grabAll = `SELECT * FROM photos WHERE experience_id = ${experienceID}`;
  db.query(grabAll, experienceID, (error, response) => {
    if (error) {
      callback(error);
    } else {
      callback(null, response);
    }
  })
};


module.exports = {
  db: db,
  getPhotos: getPhotos
};