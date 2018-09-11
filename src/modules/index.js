const root = require('./root/router');
const users = require('./users/router');
const pranks = require('./pranks/router');

const configureRoutes = (app) => {
  app.use(root);
  app.use(users);
  app.use(pranks);
};

module.exports = { configureRoutes };
