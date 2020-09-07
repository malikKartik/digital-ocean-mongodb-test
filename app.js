const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const { MONGO_URI } = require("./src/config/mongodb");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userRoutes = require("./src/routes/user");

app.use("/users", userRoutes);


// Handling errors
app.use((req, res, next) => {
  const error = new Error("Not found!");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
