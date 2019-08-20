const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  _id: String,
  username: String,
  password: String,
  type: String,
  firstName: String,
  lastName: String,
  address: String,
  email: String,
  imageSource: String,
  purchases: [Object]
});

module.exports = mongoose.model("Profile", profileSchema);
