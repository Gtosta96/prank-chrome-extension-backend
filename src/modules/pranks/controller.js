const PranksDAO = require('./dao');
// const PranksDAO = require('./mock');

const get = async (req, res, next) => {
  try {
    const prank = await PranksDAO.getAll();
    res.status(200).send(prank);
  } catch (e) {
    res.status(500).send(e);
  }
};

const getById = async (req, res, next) => {
  try {
    const prank = await PranksDAO.getById({ id: req.params.id });
    res.status(200).send(prank);
  } catch (e) {
    res.status(500).send(e);
  }
};

const post = async (req, res, next) => {
  try {
    const prank = await PranksDAO.create();
    res.status(200).send(prank);
  } catch (e) {
    res.status(500).send(e);
  }
};

const put = async (req, res, next) => {
  try {
    const prank = await PranksDAO.update({ id: req.params.id, prank: req.body });
    res.status(201).send(prank);
  } catch (e) {
    res.status(500).send(e);
  }
};

const remove = async (req, res, next) => {
  try {
    const prank = await PranksDAO.remove({ id: req.params.id });
    res.status(200).send(prank);
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

