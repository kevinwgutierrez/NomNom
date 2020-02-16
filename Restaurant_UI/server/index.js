const express = require('express');
const path = require('path');
const app = express();
const parser = require('body-parser');
const PORT = 3000;
const { OrderDB } = require('../../Database/index.js');
const { UserDB } = require('../../Database/index.js');
const { RestaurantDB } = require('../../Database/index.js');

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(parser.urlencoded({extended: true}));

// GET
app.get('/restaurant', (req, res) => {
  RestaurantDB.findOne({ resId: 4 }, (err, data) => {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

// POST
app.post('/restaurant', (req, res) => {

});

app.listen(PORT, () => console.log('Listening on port: ' + PORT));