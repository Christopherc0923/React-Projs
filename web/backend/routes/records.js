const express = require("express");
const router = express.Router();
const recordsController = require("../controllers/recordsController");

// Create a new record
router.post("/", recordsController.createRecord);
router.get("/", recordsController.getRecords);

module.exports = router;
