const PerfilDao = require('../dao/PerfilDao');

class PerfilController {
    async index(req, res) {
        try {
            const id_usuario = req.params.id;

            const get_perfil = await PerfilDao.listPerfil(id_usuario);
            return res.json(get_perfil);
        }
        catch(err) {
            console.log('erro:', err);
            return res.status(400).json({ erro: 'deu erro irmao'})
        }
    }
}

module.exports = new PerfilController();