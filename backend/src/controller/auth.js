const { nanoid } = require("nanoid");

const register = (req, res, next) => {
  const { name, email, username, password } = req.body;
  const response = {
    message: "Register Success",
    data: {
      uid: nanoid(16),
      name,
      email,
      username,
      password,
    },
  };
  console.log("Register Success");
  res.status(201).json(response);
};
const login = (req, res, next) => {
  const { username, email, password } = req.body;
};

module.exports = { register };
