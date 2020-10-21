const AsksDao = require('../dao/AsksDao');

class AsksController {
    async index(req, res) {
        try {
            const id_usuario = req.params.id;

            const get_asks = await AsksDao.list_asks(id_usuario);
            return res.json(get_asks);
        }
        catch(err) {
            console.log('erro:', err);
            return res.status(400).json({ erro: 'deu erro irmao'})
        }
    }
}

module.exports = new AsksController();