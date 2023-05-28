const express = require("express");
const router = express.Router();
const formController = require("../controllers/formController");

// Create a new record
router.post("/", formController.createFormRecord);
router.get("/", formController.getFormRecords);
router.delete("/:id", formController.deleteFormRecord);

module.exports = router;
