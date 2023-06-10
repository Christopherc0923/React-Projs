import React, { useState } from "react";
import axios from "axios";

export default function ExpenseForm({ addExpense }) {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const url = "http://localhost:5000/api/expenseRecords";

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (date && description && amount) {
      const expenseData = { date, description, amount };
      try {
        // Make a POST request to the backend API
        const response = await axios.post(url, expenseData);

        if (response.status === 200) {
          const newExpense = { date, description, amount };

          // Clear form fields if the data was successfully uploaded
          setDate("");
          setDescription("");
          setAmount(0);

          window.location.reload();

          // Add the form data to the parent component's state
          addExpense(newExpense);

          console.log("Form data added to MongoDB");
        } else {
          console.error("Failed to add form data to MongoDB");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="container">
      <h2 className="text-center">Expense Report</h2>
      <br />
      <form onSubmit={handleSubmit} className="row">
        <div className="col-md-4">
          <h4>Date</h4>
          <input
            type="date"
            placeholder="Date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <h4>Description</h4>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <h4>Amount</h4>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(event) => setAmount(Number(event.target.value))}
            className="form-control"
          />
        </div>
        <div className="col-md-12 mt-3">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
      <br />
    </div>
  );
}
