const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    first_name: String,
    last_name: String,
});

const users = mongoose.model('users', schema);

module.exports = users;
