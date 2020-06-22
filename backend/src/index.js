const express = require('express');

const app = express();

app.get('/',(request,response)=>{

    return response.json({
        nome: 'Saturnino',
        idade: 31
    })
});

app.listen(3333);