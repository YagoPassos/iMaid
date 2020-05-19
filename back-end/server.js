const express = require('express');
const bodyParser = require ('body-parser');
const routes = require ('./src/routes')
const mongoose = require('mongoose')


const app = express();

// mongoose.connect('mongodb+srv://iMaid:md123456@cluster0-hrbw4.mongodb.net/test?retryWrites=true&w=majority', {useCreatorIndex: true});

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routes);

app.listen(3333, function(){ 
    console.log("server running on port 3333")
})

module.exports = app;
