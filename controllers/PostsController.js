const PostsDao = require('../dao/PostsDao');

class PostsController {

    async index(req, res) {
        try {
            const get_posts = await PostsDao.list_posts();
            return res.json(get_posts);
        }
        catch(err) {
            console.log('erro:', err);
            return res.status(400).json({ erro: 'deu erro irmao'})
        }
    }

    async details(req, res) {
        try {
            const id_post = req.params.id
            const get_post_details = await PostsDao.list_details(id_post);
            return res.json(get_post_details);
        }
        catch(err) {
            console.log('erro:', err);
            return res.status(400).json({ erro: 'deu erro irmao'})
        }
    }

    async new_post(req, res) {
        try {
            const id_usuario = req.body.id_usuario;
            const title_post = req.body.title;
            const body_post = req.body.body;

            const set_new_post = await PostsDao.new_post(title_post, body_post, id_usuario);
            return res.json(set_new_post);
        }
        catch(err) {
            console.log('erro:', err);
            return res.status(400).json({ erro: 'deu erro irmao'})
        }
    }
}

module.exports = new PostsController();