const express = require('express');
const app = express();
const connection = require('./database/database');
const Pergunta = require('./models/Pergunta');

connection.authenticate()
    .then(() => {
        console.log('Conexão ok');
    }).catch((err) => {
        console.log(err);
    });

const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.get('/', async (req, res) => {
    const pergunta = await Pergunta.findAll({
        raw: true,
    });

    return res.render('index', {
        pergunta
    });
});

app.get('/perguntar', (req, res) => {
    return res.render('perguntar');
});

app.post('/salvarPergunta', async (req, res) => {
    const titulo = req.body.titulo;
    const descricao = req.body.descricao;

    await Pergunta.create({
        titulo,
        descricao,
    });

    return res.redirect('/');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});