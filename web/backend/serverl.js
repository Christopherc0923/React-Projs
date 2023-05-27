const express = require("express");
const axios = require("axios");
const app = express();
const port = 5000;
const cors = require("cors");

// Middleware to parse JSON request bodies
app.use(cors());
app.use(express.json());

// MongoDB API endpoint
const mongoEndpoint =
  "mongodb+srv://chrisc0923:Heg3cZuW8Q2RyIAI@mongo.yyz9anx.mongodb.net/mydatabase?retryWrites=true&w=majority"; // Replace with your MongoDB server endpoint

// Create a new record in MongoDB
app.post("/api/records", async (req, res) => {
  try {
    const { problem, type, comment, link } = req.body;

    // Make a POST request to MongoDB using Axios
    const response = await axios.post(
      `${mongoEndpoint}/databaseName/collectionName`,
      {
        problem,
        type,
        comment,
        link,
      }
    );

    // MongoDB response
    console.log(response.data);

    res.status(200).json({ message: "Record added successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Failed to add record" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
