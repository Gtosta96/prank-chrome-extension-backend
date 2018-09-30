const mongoose = require('mongoose');

const DefaultSchema = require('../../shared/schemas/DefaultSchema');

const defaultHTML = '<h1>THIS PAGE HAS BEEN BLOCKED BY THE ADMINISTRATOR</h1><p>Contact the support.</p>';
const defaultCSS = '';
const defaultURLS = 'https://www.facebook.com/;https://www.facebook.com.br/';

const schema = new DefaultSchema({
  html: { type: String, default: defaultHTML },
  css: { type: String, default: defaultCSS },
  urls: { type: String, default: defaultURLS },

  enabled: { type: Boolean, default: false },
});

module.exports = mongoose.model('Prank', schema, 'pranks');
