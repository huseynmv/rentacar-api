const { Schema, default: mongoose } = require("mongoose");

const carSchema = new Schema({
  model: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  img: String,
  type: String,
  passengerCount: String,
  doorCount: String,
  price: String,
  maxPower: String,
  fuel: String,
  sec: String,
  maxSpeed: String,
});

module.exports = mongoose.model("Car", carSchema);
