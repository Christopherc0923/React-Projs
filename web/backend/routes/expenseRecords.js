const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expenseController");

// Create a new record
router.post("/", expenseController.createExpenseRecord);
router.get("/", expenseController.getExpenseRecords);
router.delete("/:id", expenseController.deleteExpenseRecord);

module.exports = router;
