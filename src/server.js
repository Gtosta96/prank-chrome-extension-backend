const modules = require('./modules/modules');
const database = require('./database/database');

const start = (app, io) => {
  modules.configureAPI(app);
  modules.configureWS(io);

  database.connect(); // throwable
};

module.exports = { start };
