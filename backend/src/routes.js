const express = require('express');

const routes = express.Router();

routes.get('/',(request,response)=>{

    return response.json({
        nome: 'Saturnino',
        idade: 31
    })
});

module.exports = routes;