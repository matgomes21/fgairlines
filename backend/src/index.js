const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);


app.listen(3333);

/**
 * Funcionalidades:
 *  - Login de linha aerea
 *  - Cadastro de linha aerea
 *  - Logout
 *  - Cadastro do voos especificos
 *  - Listar os voos especificos
 *  - Deletar voos
 */