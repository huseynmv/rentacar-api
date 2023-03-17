const carModel = require("../../models/carModel");

const carController = {
  getAll: async (req, res, next) => {
    carModel.find({}).then((data) => {
      res.send(data);
    });
  },
  getbyID: async (req, res, next) => {
    let id = req.params.id;
    carModel.findOne({ id: id }).then((data) => {
      res.send(data);
    });
  },
};

module.exports = carController;
