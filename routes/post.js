const express = require('express');
const router = express.Router();
const IndexController = require("../controllers/index-controller")
const PostController = require("../controllers/post-controller")

/* GET home page. */
router.get('/', IndexController.index);
router.get("/posts", PostController.index)
router.get("/post/:id", PostController.find)
router.post("/post/create", PostController.store)
router.patch("/post/:id", PostController.update)
router.delete("/post/:id", PostController.destroy)

module.exports = router;
