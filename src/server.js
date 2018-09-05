const configureRoutes = require('./modules');
const database = require('./database/database');

const start = async (app) => {
  configureRoutes(app); // configure all routes
  database.connect(); // throwable
};

module.exports = { start };
