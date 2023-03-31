const { Schema, default: mongoose } = require("mongoose");

const orderSchema = new Schema({
  model: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  user: String,
});

module.exports = mongoose.model("Order", orderSchema);
