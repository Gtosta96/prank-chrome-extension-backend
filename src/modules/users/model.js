const mongoose = require('mongoose');

const DefaultSchema = require('../shared/schemas/DefaultSchema');
const validators = require('../../helpers/validators/validators');

mongoose.set('useCreateIndex', true);
const schema = new DefaultSchema({
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: validators.isEmail,
    },
    first_name: String,
    last_name: String,
});

module.exports = mongoose.model('User', schema, 'users');
