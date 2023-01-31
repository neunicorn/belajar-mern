#!/usr/bin/env node
const express = require("express");
const bodyParser = require("body-parser");

const authRoute = require("./routes/api/auth");
const blogRoute = require("./routes/api/blog");

const app = express();

//middleware
app.use(bodyParser.json()); // for parsing application/json

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

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
