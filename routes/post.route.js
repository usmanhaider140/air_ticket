const { Router } = require("express");
const postController = require("../controllers/post.controller");
const router = Router();

router.get("/", postController.getPost);

module.exports = router;
