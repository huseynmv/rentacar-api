const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();

mongoose
  .connect("mongodb+srv://root:Huseyn123@cluster0.eqtkx3v.mongodb.net/test")
  .then((res) => {
    console.log("Connected to db");
  })
  .catch((err) => {
    console.log("db error", err);
  });

app.get("/", (req, res) => {
  res.send("Hello");
});
app.listen(3000);
