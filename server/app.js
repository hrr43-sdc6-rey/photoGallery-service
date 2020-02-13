const express = require('express');
const cors = require('cors');

const app = express();
const bodyParser = require('body-parser');
const db = require('../database/index.js');

app.use(cors());
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('html', require('ejs').renderFile);

app.get('/test', async (req, res) => {
  db.test();
  res.json({ message: 'pass!' });
});

app.get('/:id', (req, res) => {
  res.render('../public/index.html');
});

app.get('/photos/:id', (req, res) => {
  const requestExpId = parseInt(req.params.id, 10);
  db.getPhotos(requestExpId, (err, exData) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(exData);
    }
  });
});

/*
  photoId int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  photoUrl varchar(200) NOT NULL,
  alt varchar(125) NOT NULL,
  username varchar(40) NOT NULL,
  experienceId int NOT NULL
*/
app.post('/photos', (req, res) => {
  db.postPhoto(
    {
      photoUrl: req.body.photoUrl,
      alt: req.body.alt,
      username: req.body.username,
      experienceId: req.body.experienceId,
    },
    (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(result);
      }
    },
  );
});


module.exports = app;
