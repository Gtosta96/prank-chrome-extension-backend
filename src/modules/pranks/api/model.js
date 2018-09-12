const mongoose = require('mongoose');

const DefaultSchema = require('../../shared/schemas/DefaultSchema');

const defaultHTML = '<h1>THIS PAGE HAS BEEN BLOCKED BY THE ADMINISTRATOR</h1><p>Contact the support.</p>';
const fallbackURLS = 'https://www.facebook.com/;https://www.facebook.com.br/';

const schema = new DefaultSchema({
  urls: { type: String, default: fallbackURLS },
  html: { type: String, default: defaultHTML },
  css: String,

  disabled: { type: Boolean, default: true },
});

module.exports = mongoose.model('Prank', schema, 'pranks');
