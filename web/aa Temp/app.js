const express = require("express");
const app = express();
const port = 5000;
const db = require("./db"); // Import the database connection
const recordsRouter = require("./routes/records"); // Import the router for records
const errorMiddleware = require("./errorMiddleware"); // Import the error handling middleware

app.use(express.json());

app.use("/api/records", recordsRouter); // Use the records router for '/api/records' endpoint

app.use(errorMiddleware); // Use the error handling middleware

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
