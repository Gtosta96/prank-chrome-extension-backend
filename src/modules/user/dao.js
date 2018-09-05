const Users = require('./model');

  const getAll = () => {
    return Users.find();
  };

  const getById = ({ id }) => {
    return Users.findById(id);
  };

  const create = ({ user }) => {
    return Users.create(user);
  };

  const update = ({ id, user }) => {
    const updatedUser = {
      first_name: user.first_name,
      last_name: user.last_name,
    };

    return user.findByIdAndUpdate(id, updatedUser, { new: true });
  };

  const remove = ({ id }) => {
    return Users.findByIdAndRemove(id);
  };

  module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
  };
