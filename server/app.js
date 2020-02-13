const express = require('express');
const cors = require('cors');

const app = express();
const bodyParser = require('body-parser');
const db = require('../database/index.jsx');


app.use(cors());


app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('html', require('ejs').renderFile);

app.get('/test', async (req, res) => {
  db.test();
  res.json({ message: 'pass!' });
});

// app.get('/:id', (req, res) => {
//   res.render('../public/index.html');
// });
//
// app.get('/photos/:id', (req, res) => {
//   const requestExpId = parseInt(req.params.id, 10);
//   db.getPhotos(requestExpId, (err, exData) => {
//     if (err) {
//       res.status(400).send(err);
//     } else {
//       res.status(200).send(exData);
//     }
//   });
// });

/*
  photoId int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  photoUrl varchar(200) NOT NULL,
  alt varchar(125) NOT NULL,
  username varchar(40) NOT NULL,
  experienceId int NOT NULL
*/

// app.put('/photos/:id/photoUrl/:photoUrl/alt/:alt/username/:username/experienceId/:experienceId',
//   (req, res) => {
//     console.log(req.params);
//     // db.postPhoto(req.
//   });

module.exports = app;
