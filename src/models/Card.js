const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  _id: String,
  name: String,
  type: String,
  fabricLength: String,
  fabricWidth: String,
  fabricColor: String,
  price: String,
  source: String,
  bookmark: {
    type: Boolean,
    default: false
  },
  dis: {
    type: Boolean,
    default: false
  },
  vendorId: String,
  vendorName: String,
  vendorImage: String
});

module.exports = mongoose.model("Card", cardSchema);
