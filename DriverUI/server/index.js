const express = require('express');
const path = require('path');
const app = express();
const parser = require('body-parser');
const PORT = 3001;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(parser.urlencoded({extended: true}));

app.listen(PORT, () => console.log('Listening on port: ' + PORT));