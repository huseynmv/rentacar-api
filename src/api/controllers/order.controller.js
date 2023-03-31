const orderModel = require("../../models/orderModel");
const userModel = require("../../models/userModel");

const orderController = {
  getAll: async (req, res, next) => {
    orderModel.find({}).then((data) => {
      res.json(data);
    });
  },
  create: async (req, res, next) => {
    let new_order = new orderModel({
      model: req.body.model,
      name: req.body.name,
      user: req.body.user,
    });

    new_order.save().then((data) => {
      res.json(data);
    });
  },
};

module.exports = orderController;
