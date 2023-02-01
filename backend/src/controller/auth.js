const { validationResult } = require("express-validator");
const User = require("../model/user");

const register = (req, res, next) => {
  const { name, email, username, password } = req.body;
  const err = validationResult(req);

  if (!err.isEmpty()) {
    console.log(err);
    const error = new Error("value input not valid");
    error.statusCode = 400;
    error.data = err.array();
    throw error;
  }

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

  const user = username === "username" || email === "email";
  const pass = password === "password";

  if (!user || !pass) {
    const error = new Error("username or password is wrong");
    error.statusCode = 401;
    throw error;
  }

  const response = {
    message: "Login Success",
    data: null,
    session: "session",
  };

  res.status(200).json(response);
};

const logout = (req, res, next) => {};

module.exports = { register, login, logout };
