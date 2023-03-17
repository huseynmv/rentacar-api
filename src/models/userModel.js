const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({
  fullName: String,
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profileImage: String,
  confirmCode: {
    type: Number,
    required: true,
  },
  confirmCodeExpDate: {
    type: Date,
    required: true,
  },
  isConfirm: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", userSchema);
