const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

// API file for interacting with MongoDB
//const api = require('./api/route/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// React Build output folder
app.use(express.static(path.join(__dirname, './build')));

// API location
//app.use('/api', api);

// Send all other requests to the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './build/index.html'));
})

//Set Port
const port = process.env.PORT || '3046';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));