const FormRecord = require("../models/FormRecord");

exports.createFormRecord = async (req, res) => {
  try {
    const { date, description, amount } = req.body;

    // Create a new record
    const formRecord = new FormRecord({ date, description, amount });
    await formRecord.save();

    res.status(200).json({ message: "Record added successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Failed to add record" });
  }
};

exports.getFormRecords = async (req, res) => {
  try {
    const formRecords = await FormRecord.find(); // Retrieve all records from the database

    res.json(formRecords); // Send the records as a JSON response
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Failed to fetch records" });
  }
};

exports.deleteFormRecord = async (req, res) => {
  try {
    const { id } = req.params;
    await FormRecord.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
