const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  _id: String,
  name: String,
  type: String,
  fabricLength: String,
  fabricWidth: String,
  fabricColor: String,
  price: Number,
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
  vendorImage: String,
  buyer: String,
  buyerAddress: String
});

module.exports = mongoose.model("Card", cardSchema);
