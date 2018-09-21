const api = require('./api/router');

const connect = require('./ws/connect');
const update = require('./ws/update');
const disconnect = require('./ws/disconnect');

const ws = (io, socket) => {
  connect(io, socket);
  update(io, socket);
  disconnect(io, socket);
};

module.exports = { api, ws };
