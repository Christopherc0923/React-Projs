const Record = require("../models/Record");

exports.createRecord = async (req, res) => {
  try {
    const { problem, type, comment, link } = req.body;

    // Create a new record
    const record = new Record({ problem, type, comment, link });
    await record.save();

    res.status(200).json({ message: "Record added successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Failed to add record" });
  }
};

exports.getRecords = async (req, res) => {
  try {
    const records = await Record.find(); // Retrieve all records from the database

    res.json(records); // Send the records as a JSON response
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Failed to fetch records" });
  }
};
