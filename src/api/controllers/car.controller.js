const carModel = require("../../models/carModel");

const carController = {
  getAll: async (req, res, next) => {
    carModel.find({}).then((data) => {
      res.send(data);
    });
  },
};

module.exports = carController;
