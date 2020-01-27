var mysql = require('mysql');
var config = require('../config/config.js');
var connection = mysql.createConnection(config.mysqlDatabase);

connection.connect(function(error) {
  if (error) {
    throw error
  } else {
    console.log('==mySQL is connected==')
  }
});

//get photos

const getPhotos = (exID, callback) => {
  var id = exID;
  var grabAll = 'SELECT * FROM photos WHERE experience_id = ?';
  connection.query(grabAll, id, (error, response) => {
    if (error) {
      callback(error);
    } else {
      callback(null, response);
    }
  })
};

modules.exports.getPhotos;