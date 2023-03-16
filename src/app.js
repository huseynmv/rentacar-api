const express = require("express");
const { default: mongoose } = require("mongoose");
const { CONNECTION_STRING } = require("./config");
const app = express();

mongoose
  .connect(CONNECTION_STRING)
  .then((res) => console.log("Connected to DB"))
  .catch((err) => console.log("DB error", err));

app.get("/", (req, res) => {
  res.send("Hello word");
});

module.exports = app;
