const express = require ('express');
const routes = express.Router();
const mongoose = require('mongoose');
const Users = require('./models/users');

const Empregados = require('./models/empregados');
const Cartao = require('./models/cartoes')
const Pais = require('./models/paises')

const userController = require ('./controllers/usersControllers');

const cartoesController = require('./controllers/cartao-controller')
const paisesController = require('./controllers/paises-controller')

routes.get('/register', userController.listUsers);
routes.post('/register', userController.createUsers);

// Rotas Cartão
routes.get('/cartoes/', cartoesController.listarCartoes)
routes.post('/cartoes/adicionarCartao/:numero/:mesVencimento/:anoVencimento/:csv/:nomeDono/:bandeira/:pais', cartoesController.adicionarCartao)
//http://192.168.0.104:3001/cartoes/editar/5ec5f797f4fa275906456620/1234 1234 1234 123/09/27/123/Paulo César/MasterCard/Bolívia
routes.post('/cartoes/editar/:id/:numero/:mesVencimento/:anoVencimento/:csv/:nomeDono/:bandeira/:pais', cartoesController.editarCartao)
// http://192.168.0.104:3001/cartoes/adicionarCartao/11111111111/24/05/426/Paulo/Master
routes.delete('/cartoes/apagar/:id', cartoesController.apagarCartao)
routes.get('/cartoes/achar/:id', cartoesController.find)    

// Rota Paises
routes.get('/paises/', paisesController.listarPaises)

module.exports = routes;