const express = require('express');
const path = require('path');
const app = express();
const parser = require('body-parser');
const PORT = 3001;
const { OrderDB } = require('../../Database/index.js');

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(parser.urlencoded({extended: true}));
app.use(express.json());

app.get('/driver', (req, res) => {
  OrderDB.find({}, (err, data) => {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.patch('/driver', (req, res) => {
  
});

app.listen(PORT, () => console.log('Listening on port: ' + PORT));