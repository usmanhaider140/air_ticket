const { Router } = require("express");
const postRoutes = require("./post.route");

const router = Router();
// Path: routes/postRoutes.js

router.use("/posts", postRoutes);
module.exports = router;
