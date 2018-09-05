const UsersDAO = require('./dao');
// const UsersDAO = require('./mock');

const get = async (req, res, next) => {
  try {
    const user = await UsersDAO.getAll();
    res.status(200).send(user);
  } catch (e) {
    res.status(500).send(e);
  }
};

const getById = async (req, res, next) => {
  try {
    const user = await UsersDAO.getById({ id: req.params.id });
    res.status(200).send(user);
  } catch (e) {
    res.status(500).send(e);
  }
};

const post = async (req, res, next) => {
  try {
    const user = await UsersDAO.create({ user: req.body });
    res.status(200).send(user);
  } catch (e) {
    res.status(500).send(e);
  }
};

const put = async (req, res, next) => {
  try {
    const user = await UsersDAO.update({ id: req.params.id, user: req.body });
    res.status(201).send(user);
  } catch (e) {
    res.status(500).send(e);
  }
};

const remove = async (req, res, next) => {
  try {
    const user = await UsersDAO.remove({ id: req.params.id });
    res.status(200).send(user);
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = {
  get,
  getById,
  post,
  put,
  remove,
};

