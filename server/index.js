const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();

// API file for interacting
const api = require('./routes/api');

// Allow cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// API location
app.use('/api', api);

// Set Port
const port = process.env.PORT || '8000';
app.set('port', port);
const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
