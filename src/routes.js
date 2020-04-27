const express = require('express');
const routes = express.Router();
const PerguntaController = require('./controllers/PerguntaController');

routes.get('/', PerguntaController.index);

routes.get('/perguntar', (req, res) => {
    return res.render('perguntar');
});

routes.post('/salvarPergunta', PerguntaController.insert);

module.exports = routes;