const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  // Define record schema fields
  problem: { type: String, required: true },
  type: { type: String, required: true },
  comment: { type: String, required: true },
  link: { type: String, required: true },
});

const Record = mongoose.model("Record", recordSchema);

module.exports = Record;
