const express = require("express");
const { default: mongoose } = require("mongoose");
const carRouter = require("./api/routes/car.router");
const userRouter = require("./api/routes/user.router");
const orderRouter = require("./api/routes/order.router");
const authRouter = require("./api/routes/auth.router");
const { CONNECTION_STRING } = require("./config");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded());
app.use(cors({ origin: "*" }));
mongoose
  .connect(CONNECTION_STRING)
  .then((res) => console.log("Connected to DB"))
  .catch((err) => console.log("DB error", err));

app.use("/api/car", carRouter);
app.use("/api/order", orderRouter);
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    message: err?.message || "Server error",
    statusCode: err.statusCode || 500,
  });
});

module.exports = app;
