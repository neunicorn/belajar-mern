const { validationResult } = require("express-validator");

const createBlog = (req, res, next) => {
  const { title, content, image } = req.body;

  // check validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    const err = new Error("value input not valid");
    err.statusCode = 400;
    err.data = errors.array();
    throw err;
  }

  const date = new Date().toLocaleString();
  const response = {
    message: "Create Blog Success",
    data: {
      id: 1,
      title,
      content,
      image,
      createdAt: date,
      author: {
        uid: 1,
        name: "John Doe",
      },
    },
  };
  console.log("blog was created");
  res.status(201).json(response);
};

module.exports = { createBlog };
