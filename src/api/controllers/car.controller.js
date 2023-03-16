const carModel = require("../../models/carModel");

const carController = {
  getAll: async (req, res, next) => {
    res.send("Hello DB");
  },
};

module.exports = carController;
