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
    const updatedUser = {
      first_name: user.first_name,
      last_name: user.last_name,
    };

    return UsersModel.findByIdAndUpdate(id, updatedUser, { new: true });
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
