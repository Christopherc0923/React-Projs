const mongoose = require("mongoose");

const formRecordSchema = new mongoose.Schema({
  // Define record schema fields
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: Number, required: true },
  phone: { type: Number, required: true },
  referral: { type: Number, required: true },
  additional: { type: Number, required: false },
  agree: { type: Number, required: true },
});

const FormRecord = mongoose.model("FormRecord", formRecordSchema);

module.exports = FormRecord;
