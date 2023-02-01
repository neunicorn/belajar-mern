const express = require("express");
const { body } = require("express-validator");

const { register, login } = require("../../controller/auth");

const router = express.Router();

router.post(
  "/register",
  [
    body("email")
      .isEmail()
      .withMessage("Format email yang anda inputkan salah!"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password minimal 8 karakter"),
    body("usename")
      .isLength({ min: 4 })
      .withMessage("Username Minimal 4 Karakter"),
  ],
  register
);
router.post("/login", login);

module.exports = router;
