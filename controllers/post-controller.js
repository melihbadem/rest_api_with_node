const PostService = require("../services/post-service")

class PostController 
{
    index(_req, res) {
        PostService.findAll()
            .then(response => res.send(response))
            .catch(err => res.status(404).send(err))
    }
 
    find(req, res) {
        PostService.find(req.params.id)
            .then(response => res.send(response))
            .catch(err => res.status(404).send(err))
    }

    store(req, res) {
        PostService.add(req.body)
            .then(respone => res.send(respone))
            .catch(err => res.status(404).send(err))
    }

    async update(req, res) {
        await PostService.update(req.params.id, req.body)
        res.send({
            "status": "completed"
        })  
    }

    async destroy(req, res) {
        await PostService.delete(req.params.id)
        res.send({
            "status": "completed"
        })
    }
}

module.exports = new PostController()
