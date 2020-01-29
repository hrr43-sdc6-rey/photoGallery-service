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


const getPhotos = function (experienceID, callback) {
  var id = experienceID
  var grabAll = `SELECT * FROM photos WHERE experience_id = '${experienceID}'`;
  db.query(grabAll, id, (error, response) => {
    if (error) {
      callback(error);
    } else {
      callback(null, response);
    }
  })
};


module.exports = {
  getPhotos: getPhotos,
  db: db
};