const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const preHooks = require('../pre-hooks/pre-hooks');

mongoose.set('useCreateIndex', true);
class DefaultSchema {
  constructor(attributes) {
    this.schema = new Schema({
      ...attributes,

      created: Date,
      modified: Date,
  });

  this.schema.set('toJSON', { virtuals: true });

  preHooks.save(this.schema);
  preHooks.update(this.schema);

  return this.schema;
  }
}

module.exports = DefaultSchema;
