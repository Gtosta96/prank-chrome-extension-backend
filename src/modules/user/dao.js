const User = require('./model');

  const getAll = () => {
    return User.find();
  };

  const getById = ({ id }) => {
    return User.findById(id);
  };

  const create = ({ user }) => {
    return User.create(user);
  };

  const update = ({ id, user }) => {
    const updatedUser = {
      name: user.name,
      mail: user.mail,
      role: user.role,
    };

    return user.findByIdAndUpdate(id, updatedUser, { new: true });
  };

  const remove = ({ id }) => {
    return User.findByIdAndRemove(id);
  };

  module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
  };
