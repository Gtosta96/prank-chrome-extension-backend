const root = require('./root/router');
const user = require('./user/router');

const configureRoutes = (app) => {
  app.use(root);
  app.use(user);
};

module.exports = configureRoutes;
