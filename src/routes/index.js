const root = require('./root');

const configureRoutes = (app) => {
  app.use('/', root);
};

module.exports = configureRoutes;
