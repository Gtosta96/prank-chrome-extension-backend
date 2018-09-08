require('dotenv').config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const server = require('./src/server');

const app = express();

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

try {
  app.socketIO = server.getSocketIO(); // app.socketIO is used on bin/www
  server.start(app);
} catch (e) {
  throw e;
}

module.exports = app;
