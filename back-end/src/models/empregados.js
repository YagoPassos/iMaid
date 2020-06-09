const Mongoose = require('mongoose');

var empregadoSchema = new Mongoose.Schema({
    nome: String,
    idade: Number,
    dataNascimento: String,
    funcao: String,
    disponibilidade: String,
    email: String,
    senha: String,
    cidade: String,
    estado: String,
    bairro: String
})

//exporta o modelo para o resto do projeto
module.exports = Mongoose.model('Empregados', empregadoSchema);




// Conexão MongoDB pelo mongoClient
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://Paulo:123456pc@bancoteste-vux9e.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   if (err) return console.log('\nPaulo@Server.JS >> Erro MongoDB(1): ' + err.name + '\n\tMensagem de erro: ' + err.errmsg)
//   db = client.db('bancoteste')
//   app.listen(portaDB, () => console.log("\nPaulo@Server.JS >> MongoDB Working at " + portaDB + ' ...') )
// });
