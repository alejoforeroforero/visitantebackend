const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    require: [true, "Please add an email"],
    unique: true,
    trim: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please enter a valid Email",
    ],
  },
  password: {
    type: String,
    require: [true, "Please add a password"],
    minLength: [6, "Password must be up to 6 characters"],
    maxLength: [32, "Password must not be more than 32 characters"],
  },
},{
  timestamps: true
});

module.exports = mongoose.model("Admin", adminSchema);
