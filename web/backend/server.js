const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const recordsRouter = require("./routes/records");
const expenseRecordsRouter = require("./routes/expenseRecords.js");
const { createRecord, getRecords } = require("./controllers/recordsController");
const {
  createExpenseRecord,
  getExpenseRecords,
  deleteExpenseRecord,
} = require("./controllers/expenseController");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://chrisc0923:Heg3cZuW8Q2RyIAI@mongo.yyz9anx.mongodb.net/mydatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server after successful database connection
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Routes
app.use("/api/records", recordsRouter);
app.post("/api/records", createRecord); // POST route for creating a new record
app.get("/api/records", getRecords); // GET route for retrieving records
app.use("/api/expenseRecords", expenseRecordsRouter);
app.post("/api/expenseRecords", createExpenseRecord); // POST route for creating a new record
app.get("/api/expenseRecords", getExpenseRecords); // GET route for retrieving records
app.delete("/api/expenseRecords/:id", deleteExpenseRecord);

// Error handling middleware
app.use((error, req, res, next) => {
  console.error("Error:", error);
  res.status(500).json({ message: "Internal Server Error" });
});
