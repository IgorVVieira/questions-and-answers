const Pergunta = require('../models/Pergunta');

module.exports = {

    async index(req, res) {
        const pergunta = await Pergunta.findAll({
            raw: true,
        });

        return res.render('index', {
            pergunta
        });
    },

    async insert(req, res) {
        const titulo = req.body.titulo;
        const descricao = req.body.descricao;

        await Pergunta.create({
            titulo,
            descricao,
        });

        return res.redirect('/');
    }
}