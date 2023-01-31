const express = require("express");

const { body } = require("express-validator");

const { createBlog } = require("../../controller/blog");

const router = express.Router();

router.post(
  "/post",
  [
    body("content")
      .isLength({ min: 5 })
      .withMessage(
        "input content anda tidak sesuai, content minimal 5 karakter"
      ),
    body("title")
      .isLength({ min: 5 })
      .withMessage("input title anda tidak sesuai, title minimal 5 karakter"),
  ],
  createBlog
);

module.exports = router;
