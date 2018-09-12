const api = require('./api/router');

const connection = require('./ws/connection');

const ws = (io) => {
  connection(io);
};

module.exports = { api, ws };
