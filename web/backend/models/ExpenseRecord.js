const mongoose = require("mongoose");

const expenseRecordSchema = new mongoose.Schema({
  // Define record schema fields
  date: { type: Date, required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
});

const ExpenseRecord = mongoose.model("ExpenseRecord", expenseRecordSchema);

module.exports = ExpenseRecord;
