const createBlog = (req, res, next) => {
  const { title, content, image } = req.body;

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
