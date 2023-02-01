#!/usr/bin/env node
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

const authRoute = require("./routes/api/auth");
const blogRoute = require("./routes/api/blog");

const app = express();

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + "-" + file.originalname);
  },
});

// ceck file type apakah sebuah image atau bukan
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true); // file di terima
  } else {
    cb(null, false); // file di tolak
  }
};

/***middleware
 * 1. body-parser
 * 2. multer
 * 3. CORS
 * 4. express-validator
 ***/
// 2 line code dibawah ini akan memberikan akses seperti body-parser
// app.use(express.json()); // for parsing application/json
// app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json
app.use("/images", express.static(path.join(__dirname, "../images")));
app.use(multer({ storage: fileStorage, fileFilter }).single("image")); // for parsing multipart/form-data

// allow CORS error
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, PATCH"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/v1/auth/", authRoute);
app.use("/v1/blog", blogRoute);

// ERror Handler
app.use((err, req, res, next) => {
  const message = err.message;
  const status = err.statusCode || 500;
  const data = err.data;

  res.status(status).json({
    status,
    message,
    data,
  });
});

mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://zulfan:Dic6ONyyuuG5Wwzi@cluster0.z0pwwi3.mongodb.net/blog?retryWrites=true&w=majority"
  )
  .then(() => {
    const port = 4000;
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
