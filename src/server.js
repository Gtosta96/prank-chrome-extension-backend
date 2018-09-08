const modules = require('./modules');
const database = require('./database/database');

const io = require('./socketIO');

const getSocketIO = () => {
  return io;
};

const start = async (app) => {
  modules.configureRoutes(app); // configure all routes
  await database.connect(); // throwable
};

module.exports = { getSocketIO, start };
