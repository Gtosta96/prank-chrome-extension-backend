const api = require('./api/router');

const update = require('./ws/update');

const ws = (io, socket) => {
  update(io, socket);
};

module.exports = { api, ws };
