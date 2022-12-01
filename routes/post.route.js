const { Router } = require("express");
const postController = require("../controllers/post.controller");
const router = Router();

router.post("/", postController.createPost);
router.get("/", postController.getPosts);
router.get("/:id", postController.getPostById);
router.put("/:id", postController.updatePostById);
router.delete("/:id", postController.deletePostById);
module.exports = router;
