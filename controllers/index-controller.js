class IndexController
{
    index(_req, res) {
        return res.render("index", {'title': "Rest API Project with Node.js/Express"})
    }
}

module.exports = new IndexController()
