const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  titulo: {
    type: String,
    required: true,
    trim: true
  },

  anuncio: {
    type: String,
    required: true
  },

  valor: {
    type: Number,
    required: true
  },
  
  registro: {
    type: Date,
    default: Date.now,
    required: true
  }
});

module.exports = mongoose.model('Anuncios', schema);