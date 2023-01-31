const express = require("express");

const { createBlog } = require("../../controller/blog");

const router = express.Router();

router.post("/post", createBlog);

module.exports = router;
