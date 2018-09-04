const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: String,
    mail: String,
    role: String,
});

const User = mongoose.model('User', schema);

module.exports = User;
