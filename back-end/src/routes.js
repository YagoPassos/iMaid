const express = require ('express');
const routes = express.Router();
const mongoose = require('mongoose');
const Users = require('./models/users');


const userController = require ('./controllers/usersControllers');

routes.get('/register', userController.listUsers);
routes.post('/register', userController.createUsers);


module.exports = routes;