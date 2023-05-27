const ExpenseRecord = require("../models/ExpenseRecord");

exports.createExpenseRecord = async (req, res) => {
  try {
    const { date, description, amount } = req.body;

    // Create a new record
    const expenseRecord = new ExpenseRecord({ date, description, amount });
    await expenseRecord.save();

    res.status(200).json({ message: "Record added successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Failed to add record" });
  }
};

exports.getExpenseRecords = async (req, res) => {
  try {
    const expenseRecords = await ExpenseRecord.find(); // Retrieve all records from the database

    res.json(expenseRecords); // Send the records as a JSON response
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Failed to fetch records" });
  }
};

exports.deleteExpenseRecord = async (req, res) => {
  try {
    const { id } = req.params;
    await ExpenseRecord.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
