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
    return PranksModel.findByIdAndUpdate(id, prank, { new: true });
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
