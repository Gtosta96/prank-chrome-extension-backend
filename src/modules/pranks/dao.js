const PranksModel = require('./model');

  const getAll = () => {
    return PranksModel.find();
  };

  const getById = ({ id }) => {
    return PranksModel.findById(id);
  };

  const create = () => {
    return PranksModel.create({});
  };

  const update = ({ id, prank }) => {
    const updatedPrank = {
      html: prank.html,
      css: prank.css,
      urls: prank.urls,
    };

    return PranksModel.findByIdAndUpdate(id, updatedPrank, { new: true });
  };

  const remove = ({ id }) => {
    return PranksModel.findByIdAndRemove(id);
  };

  module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
  };
