const express = require('express');
const routes = express.Router();

const PerguntaController = require('./controllers/PerguntaController');
const RespostaController = require('./controllers/RespostaController');

routes.get('/', PerguntaController.index);

routes.get('/perguntar', (req, res) => {
    return res.render('perguntar');
});

routes.post('/salvarPergunta', PerguntaController.insert);

routes.get('/pergunta/:id', PerguntaController.show);

routes.post('/responder', RespostaController.store);

module.exports = routes;