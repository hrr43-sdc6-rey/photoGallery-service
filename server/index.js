const express = require('express');
const app = express();
const port = 3003; /*process.env.PORT || 3003*/
var db = require ('../database/index.js');
const bodyParser = require('body-parser');

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.get('/:experience_id', (req, res) => {
  //db get photos function(request's db id)
  db.getPhotos(req.params.experience_id, (error, exData) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(200).send(exData)
    }
  });
});

app.listen(port, () => console.log(`App listening on port ${port}`));