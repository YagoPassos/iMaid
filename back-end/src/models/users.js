const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  user: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  uf: {
    type: String,
    required: true,
    trim: true
  }

});

module.exports = mongoose.model('Users', schema);