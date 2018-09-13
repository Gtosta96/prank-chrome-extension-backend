const root = require('./root/root');
const users = require('./users/users');
const pranks = require('./pranks/pranks');

const configureWS = (io) => {
  io.on('connection', (socket) => {
    console.log('A user connected');

    pranks.ws(io, socket);
  });
};

const configureAPI = (app) => {
  app.use(root.api);
  app.use(users.api);
  app.use(pranks.api);
};

module.exports = { configureWS, configureAPI };
