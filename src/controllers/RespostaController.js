const Resposta = require('../models/Resposta');

module.exports = {
    async index(req, res) {
        const resposta = await Pergunta.findAll();
        return res.send(resposta);
    },
};