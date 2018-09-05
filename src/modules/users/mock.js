const getAll = async () => {
  return { fn: 'getAll', meta: {} };
};

const getById = async ({ id }) => {
  return { fn: 'getById', meta: { id } };
};

const create = async ({ user }) => {
  return { fn: 'create', meta: { user } };
};

const update = async ({ id, user }) => {
  return { fn: 'update', meta: { id, user } };
};

const remove = async ({ id }) => {
  return { fn: 'remove', meta: { id } };
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
