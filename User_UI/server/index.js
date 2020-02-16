const express = require('express');
const path = require('path');
const app = express();
const parser = require('body-parser');
const PORT = 8080;
const { OrderDB } = require('../../Database/index.js');
const { UserDB } = require('../../Database/index.js');
const { RestaurantDB } = require('../../Database/index.js');

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(parser.urlencoded({extended: true}));

// GET
app.get('/user', (req, res) => {
  RestaurantDB.find({}, (err, data) => {
    if (err) {
      console.log('error');
    } else {
      res.status(200).send(data);
    }
  })
});

// POST
app.post('/user', (req, res) => {
  
});

app.listen(PORT, () => console.log('Listening on port: ' + PORT));