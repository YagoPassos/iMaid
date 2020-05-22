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

// Rotas Paulo

    // Rotas Cartão
routes.get('/cartoes/', cartoesController.listarCartoes)
routes.post('/cartoes/adicionarCartao/:numero/:mesVencimento/:anoVencimento/:csv/:nomeDono/:bandeira', cartoesController.adicionarCartao)
// http://192.168.0.104:3001/cartoes/adicionarCartao/11111111111/24/05/426/Paulo/Master
    // Rota Paises
routes.get('/paises/', paisesController.listarPaises)


var json
const fs = require('fs')






module.exports = routes;