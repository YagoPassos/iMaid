const Mongoose = require('mongoose');

var schema = new Mongoose.Schema({
    nome: String,
    nomeFormal: String
})
var paises = Mongoose.model('paises', schema)

module.exports = paises