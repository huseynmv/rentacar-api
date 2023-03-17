const carModel = require("../../models/carModel");

const carController = {
  getAll: async (req, res, next) => {
    carModel.find({}).then((data) => {
      res.json(data);
    });
  },
  getbyID: async (req, res, next) => {
    let id = req.params.id;
    carModel.findOne({ _id: id }).then((data) => {
      res.json(data);
    });
  },
  add: async (req, res, next) => {
    let new_car = new carModel({
      model: req.body.model,
      name: req.body.name,
      type: req.body.type,
      passengerCount: req.body.passengerCount,
      doorCount: req.body.doorCount,
      price: req.body.price,
      maxPower: req.body.maxPower,
      fuel: req.body.fuel,
      sec: req.body.sec,
      maxSpeed: req.body.maxSpeed,
    });

    new_car.save().then((data) => {
      res.send(201).json(data);
    });
  },
  deletebyid: (req, res) => {
    let id = req.params.id;

    carModel.findOne({ _id: id }).remove().exec();
    res.send("Deleted");
  },
};

module.exports = carController;
