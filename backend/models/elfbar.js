const mongoose = require("mongoose");

const elfbarSchema = mongoose.Schema({
  name: { type: String, required: true },
  type: { type: Number, required:true},
  puffs: { type: Number, required: true },
  price: { type: Number, required: true },
  description: {type: String, required: true}
});

module.exports = mongoose.model("Elfbar", elfbarSchema);