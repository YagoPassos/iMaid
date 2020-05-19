const express = require ('express');
const routes = express.Router();

const userController = require ('./controllers/usersControllers');

routes.get('/register', userController.listUsers);
routes.post('/register', userController.createUsers);


module.exports = routes;