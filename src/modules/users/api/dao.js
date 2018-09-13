const UsersModel = require('./model');

  const getAll = () => {
    return UsersModel.find();
  };

  const getById = ({ id }) => {
    return UsersModel.findById(id);
  };

  const create = ({ user }) => {
    return UsersModel.create(user);
  };

  const update = ({ id, user }) => {
    return UsersModel.findByIdAndUpdate(id, user, { new: true });
  };

  const remove = ({ id }) => {
    return UsersModel.findByIdAndRemove(id);
  };

  module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
  };
