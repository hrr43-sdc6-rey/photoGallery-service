const express = require('express');
const ejs = require('ejs');
const app = express();
const port = process.env.PORT || 3003;
var db = require ('../database/index.js');
const bodyParser = require('body-parser');


app.use(express.static('../public'));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.engine('html', require('ejs').renderFile);

app.get('/:id', (req, res) => {
  res.render('../public/index.html');
})

app.get('/photos/:id', (req, res) => {
  db.getExperiences(req.params.id, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  })
})


app.listen(port, () => console.log(`App listening on port ${port}`));
