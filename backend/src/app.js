const express = require("express");
const createError = require("http-errors");
require("express-async-errors");
const session = require("express-session");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const authRouter = require("./routes/api/auth");
const userRouter = require("./routes/api/user");
const noteRouter = require("./routes/api/post");
const MongoStore = require("connect-mongo");

const app = express();

// load environment variable from .env file
require("dotenv").config();
const ttl = 24 * 60 * 60 * 1000; // 1 day
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: ttl, secure: process.env.NODE_ENV === "production" },
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      mongoUrl: process.env.MONGO_URI,
      collectionName: "sessions",
      ttl: ttl,
    }),
  })
);

const whiteList = ["https://www.example.com"];

app.use(
  cors({
    origin: process.env.NODE_ENV === "production" ? whiteList : true,
    method: ["GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlendcoded({ extended: false }));
app.use(cookieParse()); //parse cookie
app.use(express.static(path.join(__dirname, "../public"))); //static file

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/note", noteRouter);

//catch 404 error and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

//error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  //return error api
  res.status(err.status || 500).json({
    message: err.message,
    success: false,
  });
});

module.exports = app;
