// o express e um framwork para web do Node.js
const express = require('express');
// o body-parser extrai dados de  requisições HTTP e os disponibilixa em um formato mais facil 
const bodyParser = require('body-parser');
// importar um modulo, especificamente um controlador de usuarios
const userController = require('./Controllers/controllers');
// cria uma nova aplicação EXPRESS e atribui essa aplicação à constante app
const app = express();
// configura o EJS como mecanismo de visualização 
app.set('view engine', 'ejs');
// Middleware é uma função que tem acesso à requisição (resquest) e à resposta (respost)
app.use(bodyParser.urlencoded({ extended: false }));///////
// rotas
app.get('/', userController.getApp);
app.get('/outra', userController.getOutra); /////
// iniciar o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

