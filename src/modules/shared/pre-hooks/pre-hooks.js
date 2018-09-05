/* eslint-disable no-invalid-this */

const save = (schema) => {
  schema.pre('save', function preSave(next) {
    this.created = Date.now();
    this.modified = Date.now();

    next();
  });
};

const update = (schema) => {
  schema.pre('save', function preUpdate(next) {
    this.modified = Date.now();

    next();
  });
};

module.exports = { save, update };
