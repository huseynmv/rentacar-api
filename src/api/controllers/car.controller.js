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
      img: req.body.image,
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
      res.send(201);
    });
  },
  deletebyid: (req, res) => {
    let id = req.params.id;

    carModel.findOne({ _id: id }).remove().exec();
    res.send("Deleted");
  },
  search: async (req, res) => {
    try {
      const findname = req.params.search;
      const objs = await carModel.find({
        name: { $regex: ".*" + findname + ".*" },
      });
      res.json(objs);
    } catch (error) {
      res.json({ message: error });
    }
  },
};

module.exports = carController;
