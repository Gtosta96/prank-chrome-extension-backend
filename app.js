require('dotenv').config();

const express = require('express');
const path = require('path');

const cookieParser = require('cookie-parser');
const logger = require('morgan');

const configureRoutes = require('./src/modules');
const database = require('./src/database/database');

const app = express();

(async () => {
  try {
    app.use(logger('dev'));

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));


    configureRoutes(app); // configure all routes
    database.connect(); // throwable
  } catch (e) {
    throw e;
  }
})();

module.exports = app;
