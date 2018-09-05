const root = require('./root/router');
const users = require('./users/router');

const configureRoutes = (app) => {
  app.use(root);
  app.use(users);
};

module.exports = configureRoutes;
