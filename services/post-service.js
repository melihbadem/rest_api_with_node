const BaseService = require("./base-service")
const Post = require("../models/post")

class PostService extends BaseService
{
    constructor() {
        super(Post)
    }
}
 
module.exports = new PostService()
