const AnswersDao = require('../dao/AnswersDao');

class AnswersController {
    async index(req, res) {
        try {
            const id_usuario = req.params.id;

            const get_answers = await AnswersDao.list_answers(id_usuario);
            return res.json(get_answers);
        }
        catch(err) {
            console.log('erro:', err);
            return res.status(400).json({ erro: 'deu erro irmao'})
        }
    }

    async new_answer(req, res) {
        try {
            const id_usuario = req.body.id_usuario;
            const body = req.body.body;
            const id_post = req.params.id_post;

            const new_answer = await AnswersDao.new_answer(id_usuario, id_post, body);
            return res.json(new_answer);
        }
        catch(err) {
            console.log('erro:', err);
            return res.status(400).json({ erro: 'deu erro irmao'})
        }
    }
}

module.exports = new AnswersController();