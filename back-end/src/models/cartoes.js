const Mongoose = require('mongoose');

var cartaoCredito = new Mongoose.Schema({
    numero: String,
    dataVencimento: String,
    csv: String,
    nomeDono: String,
    bandeira: String
})

//exporta o modelo para o resto do projeto
module.exports = Mongoose.model('cartaoCredito', cartaoCredito);