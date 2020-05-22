const express = require('express');
const routes = require ('./src/routes')
const bodyParser = require ('body-parser');
const mongoose = require('mongoose');

const app = express();

            //Apenas para testes pessoais
// mongoose.connect('mongodb+srv://Paulo:123456pc@bancoteste-vux9e.mongodb.net/iMaid?retryWrites=true&w=majority');
mongoose.connect('mongodb+srv://iMaid:md123456@cluster0-hrbw4.mongodb.net/test?retryWrites=true&w=majority');


const Users = mongoose.model('Users');
const Cartao = require('./src/models/cartoes')
const Pais = require('./src/models/paises')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routes);

app.listen(3001, function(){ 
    console.log("server running on port 3001")
})

module.exports = app;


// Apenas para testes
// Funcao auxiliar apenas pra iniciar a coleção paises e cartão no Banco de Dados de Yago

// function iniciarColecaoPaises(){
//     var json
//     const fs = require('fs')
    
//     fs.readFile('src/paises.json', 'utf8', (err, data)=>{
//         if (err) return console.log('Erro ler arquivo: ' + err)
//         else{
//             console.log('****** Cadastrando... ******')
    
//             json = data
//             json = JSON.parse(json)
           
            
//             for (let i=0;i<=230;i++){
            
//                var input = new Pais(json[i])
//                 //inserir(input)
//             }
            
            
//         }
//     })
    
    
//     function inserir(Dados){ // 
//         Dados.save((err, registro)=>{
//             if (err) return console.log(`Mongoose@ApiNodeJs >> error: \n{err}`)
//             else console.dir(registro)
//         })
//     }
// }

// function iniciarColecaoCartoes(){
//     var jsonInput = {
//     numero:"1234 1234 1234 123",
//     dataVencimento:"09/27",
//     csv:"123",
//     nomeDono:"Paulo César",
//     bandeira:"MasterCard"
//     }
//     var Paulo = new Cartao(jsonInput)

//     function inserir(Dados){ // 
//         Dados.save((err, registro)=>{
//             if (err) return console.log(`Mongoose@ApiNodeJs >> error: \n{err}`)
//             else console.dir(registro)
//         })
//     }


//     function inserirBD(Dados){    //Inseri apenas se o registro não existir no bd     
//         Cartao.find(jsonInput, (err, achados)=>{ // Procura no bd se existe algum dado igual no bd, se não houver salva o dado no bd
//             if (err) {
//                 console.log(`Mongoose@ApiNodeJs >> error: \n{err}`)
//             }
//             else if(achados === ''){
//                 console.log(`Mongoose@ApiNodeJs >> Salvando dados no bd`)
//                 inserir(Dados)
//             }
//             else{
//                 console.log('Mongoose@ApiNodeJs >> error: Já existe um registro identico cadastrado')
//                 console.log(achados)
//             } 
//         })
//     }
//     inserir(Paulo)
// }


