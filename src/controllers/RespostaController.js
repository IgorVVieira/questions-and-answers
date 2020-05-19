const Resposta = require('../models/Resposta');

module.exports = {

    async store(req, res) {
        const {
            corpo,
            perguntaId
        } = req.body;

        await Resposta.create({
            corpo,
            perguntaId,
        });
        return res.redirect(`/pergunta/${perguntaId}`);
    },

};