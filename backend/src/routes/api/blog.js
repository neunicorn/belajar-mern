const express = require("express");

const { body } = require("express-validator");

const {
  createBlog,
  getAllBlog,
  getOneBlog,
  updateBlog,
  deleteBlog,
} = require("../../controller/blog");

const router = express.Router();

router.get("/", getAllBlog);

router.get("/:blogId", getOneBlog);

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

router.put(
  "/:blogId",
  [
    body("content")
      .isLength({ min: 1 })
      .withMessage("Isi konten tidak boleh kosong!"),
    body("title").isLength({ min: 1 }).withMessage("Title tidak boleh kosong!"),
  ],
  updateBlog
);

router.delete("/:blogId", deleteBlog);

module.exports = router;
