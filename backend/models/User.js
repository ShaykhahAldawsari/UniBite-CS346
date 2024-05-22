const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    default: "",
  },

  email: {
    type: Number,
    default: "",
  },

  password: {
    type: Number,
    default: "",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
