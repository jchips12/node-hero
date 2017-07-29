const http = require('http');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 3000;

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/nodehero', {
  useMongoClient: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require('./routes/index'));
app.use(require('./routes/users'));

app.listen(port, (err, data) => {
  if (err) {
    return console.log('Something bad happen', err);
  }
  console.log(`server listening on port ${port}`);
});