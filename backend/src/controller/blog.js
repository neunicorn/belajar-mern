const { validationResult } = require("express-validator");
const path = require("path");
const fs = require("fs");
const BlogPost = require("../model/blog");

const createBlog = (req, res, next) => {
  // check validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    const err = new Error("value input not valid");
    err.statusCode = 400;
    err.data = errors.array();
    throw err;
  }

  if (!req.file) {
    const err = new Error("image is required");
    err.statusCode = 422;
    throw err;
  }

  const { title, content } = req.body;
  const image = req.file.path;

  // save to database
  const Posting = new BlogPost({
    title,
    content,
    image,
    author: { uid: 1, name: "John Doe" },
  });
  Posting.save()
    .then((result) => {
      const response = {
        message: "Create Blog Success",
        data: result,
      };
      res.status(201).json(response);
    })
    .catch((err) => next(err));
};

const getAllBlog = (req, res, next) => {
  BlogPost.find()
    .then((result) => {
      res.status(200).json({
        message: "Data Blog Post Berhasil Diambil",
        data: result,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const getOneBlog = (req, res, next) => {
  const { blogId } = req.params;
  BlogPost.findById(blogId)
    .then((result) => {
      if (!result) {
        const error = new Error("Blog Post Tidak Ditemukan");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({
        message: "Data Blog Post sesuai ID  Berhasil Diambil",
        data: result,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const updateBlog = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    const err = new Error("value input not valid");
    err.statusCode = 400;
    err.data = errors.array();
    throw err;
  }

  const { blogId } = req.params;
  const { title, content } = req.body;
  let image = req.file.path;

  if (!req.file) {
    const err = new Error("image is required");
    err.statusCode = 422;
    throw err;
  }

  BlogPost.findById(blogId)
    .then((blog) => {
      if (!blog) {
        const error = new Error("Blog Post Tidak Ditemukan");
        error.statusCode = 404;
        throw error;
      }
      blog.title = title;
      blog.content = content;
      blog.image = image ? image : blog.image;
      return blog.save();
    })
    .then((result) => {
      res.status(200).json({
        message: "Update Blog Post Berhasil",
        data: result,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const deleteBlog = (req, res, next) => {
  const { blogId } = req.params;

  BlogPost.findById(blogId)
    .then((blog) => {
      if (!blog) {
        const error = new Error("Blog Post Tidak Ditemukan");
        error.statusCode = 404;
        throw error;
      }

      deleteImage(blog.image);
      return BlogPost.findByIdAndRemove(blogId);
    })
    .then((result) => {
      res.status(200).json({
        message: "Delete Blog Post Berhasil",
        data: result,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const deleteImage = (filePath) => {
  filePath = path.join(__dirname, "../..", filePath);
  fs.unlink(filePath, (err) => console.log(err));
};

module.exports = { createBlog, getAllBlog, getOneBlog, updateBlog, deleteBlog };
