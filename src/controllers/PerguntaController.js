const Pergunta = require('../models/Pergunta');
const Resposta = require('../models/Resposta');

module.exports = {

    async index(req, res) {
        const pergunta = await Pergunta.findAll({
            raw: true,
            // Configurar exibição de ordem decrescente do ID
            order: [
                ['id', 'DESC'] //ASC = Crescente(Ascendente)
            ],
        });

        return res.render('index', {
            pergunta
        });
    },

    async insert(req, res) {
        const {
            titulo,
            descricao
        } = req.body;

        await Pergunta.create({
            titulo,
            descricao,
        });

        return res.redirect('/');
    },

    async show(req, res) {
        const {
            id
        } = req.params;
        const pergunta = await Pergunta.findOne({
            where: {
                id,
            },
        });
        if (pergunta === null) {
            return res.redirect('/');
        }

        const resposta = await Resposta.findAll({
            where: {
                perguntaId: id,
            },
            order: [
                ['id', 'DESC']
            ],
        });

        return res.render('pergunta', {
            pergunta,
            resposta,
        });
    },
};