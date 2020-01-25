const express = require('express');
const app = express();
const port = process.env.PORT || 3003;
const path = require('path');
const bodyParser = require('body-parser');


//app.get('/', (req, res) => res.send('hello there.'))
app.use(express.static('./public'));

app.listen(port, () => console.log(`App listening on port ${port}`));