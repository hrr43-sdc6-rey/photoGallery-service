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

const getExperiences = (expId, callback) => {
  let experienceId = expId;
  const grabAll =`SELECT * FROM photos WHERE experienceId = '${expId}'`;
  db.query(grabAll, experienceId, (err, response) => {
    if (err) {
      callback(err);
    } else {
      callback(null, response);
    }
  });
};


//   return new Promise((resolve, reject) => {
//     Experience.find({ experienceId })
//     .exec((err, data) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(data);
//     });
//   });
// };

// const getPhotos = function (experienceID, callback) {
//   var id = experienceID
//   var grabAll = `SELECT * FROM photos WHERE experience_id = '${experienceID}'`;
//   db.query(grabAll, id, (error, response) => {
//     if (error) {
//       callback(error);
//     } else {
//       callback(null, response);
//     }
//   })
// };


module.exports = {
  getExperiences, db
};
