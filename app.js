require('dotenv').config();

const express = require('express');
const socketIO = require('socket.io');

const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const server = require('./src/server');

const app = express();
const io = socketIO();

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

try {
  server.start(app, io);
  app.socketIO = io; // app.socketIO is used on bin/www
} catch (e) {
  throw e;
}

module.exports = app;
