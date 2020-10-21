const PostsDao = require('../dao/PostsDao');

class PostsController {
    async index(req, res) {
        try {
            const get_posts = await PostsDao.listPosts();
            return res.json(get_posts);
        }
        catch(err) {
            console.log('erro:', err);
            return res.status(400).json({ erro: 'deu erro irmao'})
        }
    }
}

module.exports = new PostsController();