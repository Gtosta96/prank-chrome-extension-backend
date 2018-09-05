const mongoose = require('mongoose');

const connect = async () => {
  try {
    const connection = await mongoose.connect('mongodb://localhost:27017/chrome_prank_db', { useNewUrlParser: true });
    return connection;
  } catch (e) {
    throw e;
  }
};

module.exports = { connect };
