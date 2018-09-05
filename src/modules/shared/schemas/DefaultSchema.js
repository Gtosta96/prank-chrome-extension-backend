const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const preHooks = require('../pre-hooks/pre-hooks');

class DefaultSchema {
  constructor(attributes) {
    this.schema = new Schema({
      ...attributes,

      created: Date,
      modified: Date,
  });

  preHooks.save(this.schema);
  preHooks.update(this.schema);

  return this.schema;
  }
}

module.exports = DefaultSchema;
